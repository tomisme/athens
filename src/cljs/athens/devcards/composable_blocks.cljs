(ns athens.devcards.composable-blocks
  (:require
    [athens.db :as db]
    [athens.effects]
    [athens.events]
    [athens.util :refer [gen-block-uid]]
    [athens.views.blocks :refer [block-component]]
    [devcards.core :as devcards :refer [defcard defcard-rg]]
    [posh.reagent :refer [pull]]
    [re-frame.core :as rf]
    #_[reagent.core :as rg]
    #_[sci.core :as sci]))


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


(defcard-rg Block-4095
  [block-component 4095])


(defcard-rg checkbox-mockup
  (let [block (db/get-block-document 4095)
        s (:block/string block)]
    [:<>
     [:input {:type "checkbox"}]
     [:span {:style {:margin-left 10}}
      s]]))


(def normal-block-content "Alice")
(def normal-block-uid (add-block! normal-block-content))
(defcard normal-block (get-block normal-block-uid))


(def normal-embed-block-content
  (str "Hello, ((" normal-block-uid "))"))
(def normal-embed-block-uid (add-block! normal-embed-block-content))
(def normal-embed-block (get-block normal-embed-block-uid))
(defcard normal-embed-block normal-embed-block)
(defcard-rg normal-embed-render
  [block-component (:db/id normal-embed-block)])


(def todoer-block-content
  #_(let [{:keys [parent]} *1]
      {:hiccup
       [:<>
        [:input {:type "checkbox"}]
        [:span {:style {:margin-left 10}}
         (:hiccup parent)]]})
  ":sci (let [{:keys [parent]} *1]
          {:hiccup
           [:<>
            [:input {:type \"checkbox\"}]
            [:span {:style {:margin-left 10}}
             (:hiccup parent)]]})")
(def todoer-block-uid (add-block! todoer-block-content))
(def todoer-block (get-block todoer-block-uid))
(defcard todoer-block todoer-block)
(defcard-rg todoer-block-render
  [block-component (:db/id todoer-block)])


(def todoed-block-content (str "((" todoer-block-uid ")) collect eggs"))
(def todoed-block-uid (add-block! todoed-block-content))
(def todoed-block (get-block todoed-block-uid))
(defcard todoed-block todoed-block)
(defcard-rg todoed-block-render
  [block-component (:db/id todoed-block)])
