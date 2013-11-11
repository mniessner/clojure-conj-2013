(defproject boids "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1978"]]
  :plugins [[lein-cljsbuild "0.3.4"]]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:optimizations :none
                                   :output-to "resources/public/build/deps.js"
                                   :output-dir "resources/public/build"}}]})
