(ns athens.sci
  (:require
    [clojure.string :as str]
    [sci.core :as sci]))


(defn sci-block?
  [{:keys [block/string]}]
  (when string (str/starts-with? string ":sci")))


(defn eval-sci-block
  [{:keys [block/string]} context]
  (let [code (subs string 4)]
    (try
      (sci/eval-string code {:bindings {'*1 context}})
      (catch js/Error e
        e))))
