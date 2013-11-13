(ns datomic.samples.generators
  (:require
   [clojure.data.generators :as gen]
   [datomic.api :as d]
   [datomic.samples.query :as q]))

(defn choose-some
  "Pick zero or more items at random from a collection"
  [coll]
  (take (gen/uniform 0 (count coll))
        (gen/shuffle coll)))

(defn gen-users-with-upvotes
  "Make transaction data for example users, possibly with upvotes"
  [stories email-prefix n]
  (mapcat
   (fn [n]
     (let [user-id (d/tempid :db.part/user)
           upvotes (map (fn [story] [:db/add user-id :user/upVotes (q/e story)])
                        (choose-some stories))]
       (conj
        upvotes
        {:db/id user-id
         :user/email (str email-prefix "-" n "@example.com")})))
   (range n)))


