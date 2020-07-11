(ns athens.devcards.composable-blocks
  (:require
    [athens.db :as db]
    [athens.effects]
    [athens.events]
    [athens.parse-renderer :as parse-renderer]
    [athens.parser :as parser]
    [athens.util :refer [gen-block-uid]]
    [athens.views.blocks :refer [block-component]]
    [clojure.zip :as zip]
    [devcards.core :as devcards :refer [defcard defcard-rg]]
    [posh.reagent :refer [pull]]
    [re-frame.core :as rf]
    [sci.core :as sci]))


(defcard "## Composable Blocks")



(defn get-block [uid]
  @(pull db/dsdb '[*] [:block/uid uid]))


(defn add-block! [s]
  (let [new-uid (gen-block-uid)]
    (rf/dispatch-sync [:transact [{:db/id -1
                                   :block/children []
                                   :block/uid new-uid
                                   :block/open false
                                   :block/string s}]])
    new-uid))


(def normal-block-content "Alice")
(defonce normal-block-uid (add-block! normal-block-content))
(defcard normal-block (get-block normal-block-uid))


(def normal-embed-block-content
  (str "Hello, ((" normal-block-uid "))"))
(defonce normal-embed-block-uid (add-block! normal-embed-block-content))
(def normal-embed-block (get-block normal-embed-block-uid))
(defcard normal-embed-block normal-embed-block)
(defcard-rg normal-embed-render
  [block-component (:db/id normal-embed-block)])


(def modifier-block-content
  #_(let [{:keys [block]} *1]
      [:div
       [:input {:type "checkbox"}]
       [:span {:style {:margin-left 10}}
        block]])
  ":sci (let [{:keys [block]} *1]
          [:div
           [:input {:type \"checkbox\"}]
           [:span {:style {:margin-left 10}}
            block]])")
(defonce modifier-block-uid (add-block! modifier-block-content))
(def modifier-block (get-block modifier-block-uid))
(defcard modifier-block modifier-block)
(defcard-rg modifier-block-render
  [block-component (:db/id modifier-block)])


(def block-content (str "((" modifier-block-uid ")) collect eggs"))
(defonce block-uid (add-block! block-content))
(def block (get-block block-uid))
(defcard block block)
(def parsed-block (parser/parse-to-ast (:block/string block)))
(defcard parsed-block parsed-block)
(def transformed-block (into [] (parse-renderer/transform parsed-block)))
(defcard transformed-block transformed-block)


;; EPL Licensed -- Copyright © 2012 David Santiago
;; BEGIN copy-paste from https://github.com/davidsantiago/hickory


(defn- children
  "Takes a hiccup node (normalized or not) and returns its children nodes."
  [node]
  (if (vector? node)
    ;; It's a hiccup node vector.
    (if (map? (second node)) ;; There is an attr map in second slot.
      (seq (subvec node 2))  ;; So skip tag and attr vec.
      (seq (subvec node 1))) ;; Otherwise, just skip tag.
    ;; Otherwise, must have a been a node list
    node))

;; Note, it's not made clear at all in the docs for clojure.zip, but as far as
;; I can tell, you are given a node potentially with existing children and
;; the sequence of children that should totally replace the existing children.
(defn- make
  "Takes a hiccup node (normalized or not) and a sequence of children nodes,
   and returns a new node that has the the children argument as its children."
  [node children]
  ;; The node might be either a vector (hiccup form) or a seq (which is like a
  ;; node-list).
  (if (vector? node)
    (if (map? (second node))                 ;; Again, check for normalized vec.
      (into (subvec node 0 2) children)      ;; Attach children after tag&attrs.
      (apply vector (first node) children))  ;; Otherwise, attach after tag.
    children))   ;; We were given a list for node, so just return the new list.


(defn hiccup-zip
  "Returns a zipper for Hiccup forms, given a root form."
  [root]
  (zip/zipper sequential?
              children
              make
              root))


;; END copy-paste


(defn eval-sci-modifier
  [code context]
  (try
    (sci/eval-string code {:bindings {'*1 context}})
    (catch js/Error e
      e)))


(defn modify [tree]
  (loop [loc (hiccup-zip tree)]
    (if (zip/end? loc)
      (zip/node loc)
      (recur (let [node (zip/node loc)]
               (if (= :athens/sci-modifier (first node))
                 (let [code (subs (second node) 4)
                       context {:block (-> loc zip/remove zip/root)}
                       result (eval-sci-modifier code context)]
                   (hiccup-zip result))
                 (zip/next loc)))))))


(def modified-block (modify transformed-block))
(defcard modified-block modified-block)
(defcard-rg modified-block-render modified-block)
(defcard-rg block-render
  [block-component (:db/id block)])
