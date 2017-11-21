(ns user
  (:require 
            [mount.core :as mount]
            foo.core))

(defn start []
  (mount/start-without #'foo.core/repl-server))

(defn stop []
  (mount/stop-except #'foo.core/repl-server))

(defn restart []
  (stop)
  (start))


