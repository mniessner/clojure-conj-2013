(defproject boids "0.1.0-SNAPSHOT"
  :description "Sample App"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1978"]
                 [ring/ring-jetty-adapter "1.1.1"]
                 [compojure "1.1.5"]]
  :source-paths ["src/clj"]
  :main boids.server
  :plugins [[lein-cljsbuild "0.3.4"]]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:optimizations :none
                                   :output-to "resources/public/build/deps.js"
                                   :output-dir "resources/public/build"}}]})
