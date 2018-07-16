// Compiled by ClojureScript 1.9.229 {}
goog.provide('minigraph.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.viz.core');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
minigraph.core.export_viz = (function minigraph$core$export_viz(viz){
return sablono.interpreter.interpret.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(320)], null),thi.ng.geom.svg.core.defs.call(null,thi.ng.geom.svg.core.linear_gradient.call(null,"bg",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"50%",new cljs.core.Keyword(null,"y1","y1",589123466),"100%",new cljs.core.Keyword(null,"x2","x2",-1362513475),"50%",new cljs.core.Keyword(null,"y2","y2",-718691301),"0%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"#fafbfb"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"#c7dadd"], null))),viz));
});
minigraph.core.viz_spec = (function minigraph$core$viz_spec(vals){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(600)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null)),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),thi.ng.geom.viz.core.linear_axis.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(20)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"values","values",372645556),vals,new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"url(#bg)"], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_area_plot], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"values","values",372645556),vals,new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8cb4bb",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"7px",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),thi.ng.geom.viz.core.svg_line_plot], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minigraph.core","minigraph.core",2887774),new cljs.core.Keyword(null,"first-card","first-card",884452895)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var attrs47350 = minigraph.core.export_viz.call(null,thi.ng.geom.viz.core.svg_plot2d_cartesian.call(null,minigraph.core.viz_spec.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(100)], null)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs47350))?sablono.interpreter.attributes.call(null,attrs47350):null),((cljs.core.map_QMARK_.call(null,attrs47350))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47350)], null)));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minigraph.core.main = (function minigraph$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
minigraph.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1530864957993