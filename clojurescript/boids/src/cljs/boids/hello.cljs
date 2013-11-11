(ns boids.hello)

(defn hello-world []
  (js/alert (apply str (interpose \  ["Hello, world!" (+ 3 4)]))))
