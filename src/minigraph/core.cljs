(ns minigraph.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [thi.ng.geom.viz.core :as viz]
   [thi.ng.geom.svg.core :as svg]
   [thi.ng.geom.vector :as v]
   [thi.ng.color.core :as col]
   [thi.ng.math.core :as m :refer [PI TWO_PI]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defn export-viz
  [viz] (->> viz
             (svg/svg {:width 600 :height 320}
                      (svg/defs (svg/linear-gradient
                                 "bg"
                                 {:x1 "50%"
                                  :y1 "100%"
                                  :x2 "50%"
                                  :y2 "0%"}
                                 [0 "#fafbfb"]
                                 [1 "#c7dadd"])))
             (sab/html)))

(defn viz-spec
  [vals]
  {:x-axis (viz/linear-axis
            {:domain [0 6]
             :range  [30 600]
             :visible false})
   :y-axis (viz/linear-axis
            {:domain      [0 100]
             :range       [250 20]
             :visible     false})
   :data   [{:values  vals
             :attribs {:fill "url(#bg)"}
             :layout  viz/svg-area-plot}
            {:values  vals
             :attribs {:stroke "#8cb4bb" :stroke-width "7px" :stroke-linecap "round"}
             :layout  viz/svg-line-plot}]})

;;(svg/linear-gradient :a {} [0 "#000"] [1 "#fff"])

(defcard first-card
  (sab/html [:div
             (-> [[0 10] [1 20] [2 20] [3 40] [4 50] [5 100]]
                 (viz-spec)
                 ;;(update-in [:data 0] merge {:attribs {:fill "#0af"} :layout viz/svg-area-plot})
                 (viz/svg-plot2d-cartesian)
                 (export-viz))]))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
