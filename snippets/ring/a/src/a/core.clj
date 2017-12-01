(ns a.core)

(defn handler
  "My first ring handler"
  [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})