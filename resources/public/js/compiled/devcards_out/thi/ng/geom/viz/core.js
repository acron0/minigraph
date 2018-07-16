// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.geom.viz.core');
goog.require('cljs.core');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.ndarray.contours');
goog.require('thi.ng.strf.core');
thi.ng.geom.viz.core.value_mapper = (function thi$ng$geom$viz$core$value_mapper(scale_x,scale_y){
return (function (p__40506){
var vec__40507 = p__40506;
var x = cljs.core.nth.call(null,vec__40507,(0),null);
var y = cljs.core.nth.call(null,vec__40507,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
});
});
thi.ng.geom.viz.core.value_transducer = (function thi$ng$geom$viz$core$value_transducer(p__40512){
var map__40524 = p__40512;
var map__40524__$1 = ((((!((map__40524 == null)))?((((map__40524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40524):map__40524);
var cull_domain = cljs.core.get.call(null,map__40524__$1,new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057));
var cull_range = cljs.core.get.call(null,map__40524__$1,new cljs.core.Keyword(null,"cull-range","cull-range",603502637));
var scale_x = cljs.core.get.call(null,map__40524__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var scale_y = cljs.core.get.call(null,map__40524__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var project = cljs.core.get.call(null,map__40524__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var shape = cljs.core.get.call(null,map__40524__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var item_pos = cljs.core.get.call(null,map__40524__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
var item_pos__$1 = (function (){var or__24818__auto__ = item_pos;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core.identity;
}
})();
var G__40526 = cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos__$1,cljs.core.identity));
var G__40526__$1 = (cljs.core.truth_(cull_domain)?cljs.core.comp.call(null,G__40526,cljs.core.filter.call(null,((function (G__40526,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__40510_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_domain,cljs.core.ffirst.call(null,p1__40510_SHARP_));
});})(G__40526,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__40526);
var G__40526__$2 = cljs.core.comp.call(null,G__40526__$1,cljs.core.map.call(null,((function (G__40526,G__40526__$1,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__40527){
var vec__40528 = p__40527;
var p = cljs.core.nth.call(null,vec__40528,(0),null);
var i = cljs.core.nth.call(null,vec__40528,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,p),i], null);
});})(G__40526,G__40526__$1,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
))
;
var G__40526__$3 = (cljs.core.truth_(cull_range)?cljs.core.comp.call(null,G__40526__$2,cljs.core.filter.call(null,((function (G__40526,G__40526__$1,G__40526__$2,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p1__40511_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,cull_range,cljs.core.peek.call(null,cljs.core.first.call(null,p1__40511_SHARP_)));
});})(G__40526,G__40526__$1,G__40526__$2,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__40526__$2);
var G__40526__$4 = (cljs.core.truth_(project)?cljs.core.comp.call(null,G__40526__$3,cljs.core.map.call(null,((function (G__40526,G__40526__$1,G__40526__$2,G__40526__$3,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos){
return (function (p__40531){
var vec__40532 = p__40531;
var p = cljs.core.nth.call(null,vec__40532,(0),null);
var i = cljs.core.nth.call(null,vec__40532,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.call(null,p),i], null);
});})(G__40526,G__40526__$1,G__40526__$2,G__40526__$3,mapper,item_pos__$1,map__40524,map__40524__$1,cull_domain,cull_range,scale_x,scale_y,project,shape,item_pos))
)):G__40526__$3);
if(cljs.core.truth_(shape)){
return cljs.core.comp.call(null,G__40526__$4,cljs.core.map.call(null,shape));
} else {
return G__40526__$4;
}
});
thi.ng.geom.viz.core.process_points = (function thi$ng$geom$viz$core$process_points(p__40535,p__40536){
var map__40544 = p__40535;
var map__40544__$1 = ((((!((map__40544 == null)))?((((map__40544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40544):map__40544);
var x_axis = cljs.core.get.call(null,map__40544__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__40544__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__40544__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__40545 = p__40536;
var map__40545__$1 = ((((!((map__40545 == null)))?((((map__40545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40545):map__40545);
var values = cljs.core.get.call(null,map__40545__$1,new cljs.core.Keyword(null,"values","values",372645556));
var item_pos = cljs.core.get.call(null,map__40545__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330));
var shape = cljs.core.get.call(null,map__40545__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var vec__40548 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var ry1 = cljs.core.nth.call(null,vec__40548,(0),null);
var ry2 = cljs.core.nth.call(null,vec__40548,(1),null);
return cljs.core.sequence.call(null,thi.ng.geom.viz.core.value_transducer.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cull-domain","cull-domain",408515057),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"cull-range","cull-range",603502637),(((ry1 < ry2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry1,ry2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ry2,ry1], null)),new cljs.core.Keyword(null,"item-pos","item-pos",390857330),item_pos,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),new cljs.core.Keyword(null,"project","project",1124394579),project,new cljs.core.Keyword(null,"shape","shape",1190694006),shape], null)),(cljs.core.truth_(item_pos)?cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_pos),values):cljs.core.sort_by.call(null,cljs.core.first,values)));
});
thi.ng.geom.viz.core.points__GT_path_segments = (function thi$ng$geom$viz$core$points__GT_path_segments(p__40553){
var vec__40557 = p__40553;
var seq__40558 = cljs.core.seq.call(null,vec__40557);
var first__40559 = cljs.core.first.call(null,seq__40558);
var seq__40558__$1 = cljs.core.next.call(null,seq__40558);
var p = first__40559;
var more = seq__40558__$1;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (vec__40557,seq__40558,first__40559,seq__40558__$1,p,more){
return (function (p1__40551_SHARP_,p2__40552_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__40551_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"L","L",-1038307519),p2__40552_SHARP_], null));
});})(vec__40557,seq__40558,first__40559,seq__40558__$1,p,more))
,cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null)], null)),more));
});
thi.ng.geom.viz.core.polar_projection = (function thi$ng$geom$viz$core$polar_projection(origin){
var o = thi.ng.geom.vector.vec2.call(null,origin);
return ((function (o){
return (function (p__40564){
var vec__40565 = p__40564;
var x = cljs.core.nth.call(null,vec__40565,(0),null);
var y = cljs.core.nth.call(null,vec__40565,(1),null);
return thi.ng.math.core._PLUS_.call(null,o,thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,y,x)));
});
;})(o))
});
thi.ng.geom.viz.core.value_formatter = (function thi$ng$geom$viz$core$value_formatter(prec){
var fmt = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.strf.core.float$.call(null,prec)], null);
return ((function (fmt){
return (function (x){
return thi.ng.strf.core.format.call(null,fmt,x);
});
;})(fmt))
});
thi.ng.geom.viz.core.format_percent = (function thi$ng$geom$viz$core$format_percent(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.viz.core.default_svg_label = (function thi$ng$geom$viz$core$default_svg_label(f){
return (function (p,x){
return thi.ng.geom.svg.core.text.call(null,p,f.call(null,x));
});
});
/**
 * Given a vector of domain bounds and a collection of data values
 *   (without domain position), produces a lazy-seq of 2-element vectors
 *   representing the values of the original coll uniformly spread over
 *   the full domain range, with each of the form: [domain-pos value].
 */
thi.ng.geom.viz.core.uniform_domain_points = (function thi$ng$geom$viz$core$uniform_domain_points(p__40568,values){
var vec__40572 = p__40568;
var d1 = cljs.core.nth.call(null,vec__40572,(0),null);
var d2 = cljs.core.nth.call(null,vec__40572,(1),null);
return cljs.core.map.call(null,((function (vec__40572,d1,d2){
return (function (t,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix_STAR_.call(null,d1,d2,t),v], null);
});})(vec__40572,d1,d2))
,thi.ng.math.core.norm_range.call(null,(cljs.core.count.call(null,values) - (1))),values);
});
thi.ng.geom.viz.core.domain_bounds_x = (function thi$ng$geom$viz$core$domain_bounds_x(p1__40575_SHARP_){
return thi.ng.geom.utils.axis_bounds.call(null,(0),p1__40575_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_y = (function thi$ng$geom$viz$core$domain_bounds_y(p1__40576_SHARP_){
return thi.ng.geom.utils.axis_bounds.call(null,(1),p1__40576_SHARP_);
});
thi.ng.geom.viz.core.domain_bounds_z = (function thi$ng$geom$viz$core$domain_bounds_z(p1__40577_SHARP_){
return thi.ng.geom.utils.axis_bounds.call(null,(2),p1__40577_SHARP_);
});
thi.ng.geom.viz.core.total_domain_bounds = (function thi$ng$geom$viz$core$total_domain_bounds(var_args){
var args__25900__auto__ = [];
var len__25893__auto___40588 = arguments.length;
var i__25894__auto___40589 = (0);
while(true){
if((i__25894__auto___40589 < len__25893__auto___40588)){
args__25900__auto__.push((arguments[i__25894__auto___40589]));

var G__40590 = (i__25894__auto___40589 + (1));
i__25894__auto___40589 = G__40590;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((1) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25901__auto__);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic = (function (f,colls){
return cljs.core.transduce.call(null,cljs.core.map.call(null,f),cljs.core.completing.call(null,(function (p__40580,p__40581){
var vec__40582 = p__40580;
var aa = cljs.core.nth.call(null,vec__40582,(0),null);
var ab = cljs.core.nth.call(null,vec__40582,(1),null);
var vec__40585 = p__40581;
var xa = cljs.core.nth.call(null,vec__40585,(0),null);
var xb = cljs.core.nth.call(null,vec__40585,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__25156__auto__ = aa;
var y__25157__auto__ = xa;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})(),(function (){var x__25149__auto__ = ab;
var y__25150__auto__ = xb;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})()], null);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.INF_PLUS_,thi.ng.math.core.INF_], null),colls);
});

thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$maxFixedArity = (1);

thi.ng.geom.viz.core.total_domain_bounds.cljs$lang$applyTo = (function (seq40578){
var G__40579 = cljs.core.first.call(null,seq40578);
var seq40578__$1 = cljs.core.next.call(null,seq40578);
return thi.ng.geom.viz.core.total_domain_bounds.cljs$core$IFn$_invoke$arity$variadic(G__40579,seq40578__$1);
});

thi.ng.geom.viz.core.value_domain_bounds = (function thi$ng$geom$viz$core$value_domain_bounds(mat){
var vals = cljs.core.seq.call(null,mat);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,vals),cljs.core.reduce.call(null,cljs.core.max,vals)], null);
});
thi.ng.geom.viz.core.linear_scale = (function thi$ng$geom$viz$core$linear_scale(domain,range){
return (function (x){
return thi.ng.math.core.map_interval.call(null,x,domain,range);
});
});
thi.ng.geom.viz.core.log = (function thi$ng$geom$viz$core$log(base){
var lb = Math.log(base);
return ((function (lb){
return (function (p1__40591_SHARP_){
return ((((p1__40591_SHARP_ > (0)))?Math.log(p1__40591_SHARP_):(((p1__40591_SHARP_ < (0)))?(- Math.log((- p1__40591_SHARP_))):(0)
)) / lb);
});
;})(lb))
});
thi.ng.geom.viz.core.log_scale = (function thi$ng$geom$viz$core$log_scale(base,p__40592,p__40593){
var vec__40600 = p__40592;
var d1 = cljs.core.nth.call(null,vec__40600,(0),null);
var d2 = cljs.core.nth.call(null,vec__40600,(1),null);
var domain = vec__40600;
var vec__40603 = p__40593;
var r1 = cljs.core.nth.call(null,vec__40603,(0),null);
var r2 = cljs.core.nth.call(null,vec__40603,(1),null);
var range = vec__40603;
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
var d1l = log_STAR_.call(null,d1);
var dr = (log_STAR_.call(null,d2) - d1l);
return ((function (log_STAR_,d1l,dr,vec__40600,d1,d2,domain,vec__40603,r1,r2,range){
return (function (x){
return thi.ng.math.core.mix_STAR_.call(null,r1,r2,((log_STAR_.call(null,x) - d1l) / dr));
});
;})(log_STAR_,d1l,dr,vec__40600,d1,d2,domain,vec__40603,r1,r2,range))
});
thi.ng.geom.viz.core.lens_scale = (function thi$ng$geom$viz$core$lens_scale(focus,strength,p__40606,p__40607){
var vec__40614 = p__40606;
var d1 = cljs.core.nth.call(null,vec__40614,(0),null);
var d2 = cljs.core.nth.call(null,vec__40614,(1),null);
var vec__40617 = p__40607;
var r1 = cljs.core.nth.call(null,vec__40617,(0),null);
var r2 = cljs.core.nth.call(null,vec__40617,(1),null);
var dr = (d2 - d1);
var f = ((focus - d1) / dr);
return ((function (dr,f,vec__40614,d1,d2,vec__40617,r1,r2){
return (function (x){
return thi.ng.math.core.mix_lens.call(null,r1,r2,((x - d1) / dr),f,strength);
});
;})(dr,f,vec__40614,d1,d2,vec__40617,r1,r2))
});
thi.ng.geom.viz.core.axis_common_STAR_ = (function thi$ng$geom$viz$core$axis_common_STAR_(p__40620){
var map__40623 = p__40620;
var map__40623__$1 = ((((!((map__40623 == null)))?((((map__40623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40623):map__40623);
var spec = map__40623__$1;
var visible = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
var major_size = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375),(10));
var minor_size = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),(5));
var label = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attribs = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var label_dist = cljs.core.get.call(null,map__40623__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"visible","visible",-1024216805),visible,new cljs.core.Keyword(null,"major-size","major-size",-698672375),major_size,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109),minor_size,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__24818__auto__ = label;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})(),new cljs.core.Keyword(null,"attribs","attribs",-137878093),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null),attribs),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Arial, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),label_style),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526),(function (){var or__24818__auto__ = label_dist;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return ((10) + major_size);
}
})());
});
thi.ng.geom.viz.core.lin_tick_marks = (function thi$ng$geom$viz$core$lin_tick_marks(p__40626,delta){
var vec__40630 = p__40626;
var d1 = cljs.core.nth.call(null,vec__40630,(0),null);
var d2 = cljs.core.nth.call(null,vec__40630,(1),null);
var dr = (d2 - d1);
var d1_SINGLEQUOTE_ = thi.ng.math.core.roundto.call(null,d1,delta);
return cljs.core.filter.call(null,((function (dr,d1_SINGLEQUOTE_,vec__40630,d1,d2){
return (function (p1__40625_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__40625_SHARP_);
});})(dr,d1_SINGLEQUOTE_,vec__40630,d1,d2))
,cljs.core.range.call(null,d1_SINGLEQUOTE_,(d2 + delta),delta));
});
thi.ng.geom.viz.core.linear_axis = (function thi$ng$geom$viz$core$linear_axis(p__40633){
var map__40636 = p__40633;
var map__40636__$1 = ((((!((map__40636 == null)))?((((map__40636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40636):map__40636);
var spec = map__40636__$1;
var domain = cljs.core.get.call(null,map__40636__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__40636__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var major = cljs.core.get.call(null,map__40636__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__40636__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__24806__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__24806__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__24806__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.linear_scale.call(null,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1));
});
thi.ng.geom.viz.core.log_ticks_domain = (function thi$ng$geom$viz$core$log_ticks_domain(base,d1,d2){
var log_STAR_ = thi.ng.geom.viz.core.log.call(null,base);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.floor.call(null,log_STAR_.call(null,d1)),thi.ng.math.core.ceil.call(null,log_STAR_.call(null,d2))], null);
});
thi.ng.geom.viz.core.log_tick_marks_major = (function thi$ng$geom$viz$core$log_tick_marks_major(base,p__40639){
var vec__40650 = p__40639;
var d1 = cljs.core.nth.call(null,vec__40650,(0),null);
var d2 = cljs.core.nth.call(null,vec__40650,(1),null);
var vec__40653 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__40653,(0),null);
var d2l = cljs.core.nth.call(null,vec__40653,(1),null);
return cljs.core.filter.call(null,((function (vec__40653,d1l,d2l,vec__40650,d1,d2){
return (function (p1__40638_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__40638_SHARP_);
});})(vec__40653,d1l,d2l,vec__40650,d1,d2))
,(function (){var iter__25598__auto__ = ((function (vec__40653,d1l,d2l,vec__40650,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_major_$_iter__40656(s__40657){
return (new cljs.core.LazySeq(null,((function (vec__40653,d1l,d2l,vec__40650,d1,d2){
return (function (){
var s__40657__$1 = s__40657;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40657__$1);
if(temp__4657__auto__){
var s__40657__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40657__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__40657__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__40659 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__40658 = (0);
while(true){
if((i__40658 < size__25597__auto__)){
var i = cljs.core._nth.call(null,c__25596__auto__,i__40658);
cljs.core.chunk_append.call(null,b__40659,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))));

var G__40660 = (i__40658 + (1));
i__40658 = G__40660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40659),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__40656.call(null,cljs.core.chunk_rest.call(null,s__40657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40659),null);
}
} else {
var i = cljs.core.first.call(null,s__40657__$2);
return cljs.core.cons.call(null,(((i >= (0)))?(((1) / base) * Math.pow(base,i)):(((1) / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_major_$_iter__40656.call(null,cljs.core.rest.call(null,s__40657__$2)));
}
} else {
return null;
}
break;
}
});})(vec__40653,d1l,d2l,vec__40650,d1,d2))
,null,null));
});})(vec__40653,d1l,d2l,vec__40650,d1,d2))
;
return iter__25598__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_tick_marks_minor = (function thi$ng$geom$viz$core$log_tick_marks_minor(base,p__40662){
var vec__40675 = p__40662;
var d1 = cljs.core.nth.call(null,vec__40675,(0),null);
var d2 = cljs.core.nth.call(null,vec__40675,(1),null);
var vec__40678 = thi.ng.geom.viz.core.log_ticks_domain.call(null,base,d1,d2);
var d1l = cljs.core.nth.call(null,vec__40678,(0),null);
var d2l = cljs.core.nth.call(null,vec__40678,(1),null);
var ticks = ((((2) === base))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75], null):cljs.core.range.call(null,(2),base));
return cljs.core.filter.call(null,((function (vec__40678,d1l,d2l,ticks,vec__40675,d1,d2){
return (function (p1__40661_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,d1,d2,p1__40661_SHARP_);
});})(vec__40678,d1l,d2l,ticks,vec__40675,d1,d2))
,(function (){var iter__25598__auto__ = ((function (vec__40678,d1l,d2l,ticks,vec__40675,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__40681(s__40682){
return (new cljs.core.LazySeq(null,((function (vec__40678,d1l,d2l,ticks,vec__40675,d1,d2){
return (function (){
var s__40682__$1 = s__40682;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40682__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25594__auto__ = ((function (s__40682__$1,i,xs__5205__auto__,temp__4657__auto__,vec__40678,d1l,d2l,ticks,vec__40675,d1,d2){
return (function thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__40681_$_iter__40683(s__40684){
return (new cljs.core.LazySeq(null,((function (s__40682__$1,i,xs__5205__auto__,temp__4657__auto__,vec__40678,d1l,d2l,ticks,vec__40675,d1,d2){
return (function (){
var s__40684__$1 = s__40684;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__40684__$1);
if(temp__4657__auto____$1){
var s__40684__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40684__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__40684__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__40686 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__40685 = (0);
while(true){
if((i__40685 < size__25597__auto__)){
var j = cljs.core._nth.call(null,c__25596__auto__,i__40685);
cljs.core.chunk_append.call(null,b__40686,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))));

var G__40687 = (i__40685 + (1));
i__40685 = G__40687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40686),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__40681_$_iter__40683.call(null,cljs.core.chunk_rest.call(null,s__40684__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40686),null);
}
} else {
var j = cljs.core.first.call(null,s__40684__$2);
return cljs.core.cons.call(null,(((i >= (0)))?((j / base) * Math.pow(base,i)):((j / base) * (- Math.pow(base,(- i))))),thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__40681_$_iter__40683.call(null,cljs.core.rest.call(null,s__40684__$2)));
}
} else {
return null;
}
break;
}
});})(s__40682__$1,i,xs__5205__auto__,temp__4657__auto__,vec__40678,d1l,d2l,ticks,vec__40675,d1,d2))
,null,null));
});})(s__40682__$1,i,xs__5205__auto__,temp__4657__auto__,vec__40678,d1l,d2l,ticks,vec__40675,d1,d2))
;
var fs__25595__auto__ = cljs.core.seq.call(null,iterys__25594__auto__.call(null,ticks));
if(fs__25595__auto__){
return cljs.core.concat.call(null,fs__25595__auto__,thi$ng$geom$viz$core$log_tick_marks_minor_$_iter__40681.call(null,cljs.core.rest.call(null,s__40682__$1)));
} else {
var G__40688 = cljs.core.rest.call(null,s__40682__$1);
s__40682__$1 = G__40688;
continue;
}
} else {
return null;
}
break;
}
});})(vec__40678,d1l,d2l,ticks,vec__40675,d1,d2))
,null,null));
});})(vec__40678,d1l,d2l,ticks,vec__40675,d1,d2))
;
return iter__25598__auto__.call(null,cljs.core.range.call(null,d1l,(d2l + (1))));
})());
});
thi.ng.geom.viz.core.log_axis = (function thi$ng$geom$viz$core$log_axis(p__40689){
var map__40692 = p__40689;
var map__40692__$1 = ((((!((map__40692 == null)))?((((map__40692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40692):map__40692);
var spec = map__40692__$1;
var base = cljs.core.get.call(null,map__40692__$1,new cljs.core.Keyword(null,"base","base",185279322),(10));
var domain = cljs.core.get.call(null,map__40692__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__40692__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.log_scale.call(null,base,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),thi.ng.geom.viz.core.log_tick_marks_major.call(null,base,domain),new cljs.core.Keyword(null,"minor","minor",-608536071),thi.ng.geom.viz.core.log_tick_marks_minor.call(null,base,domain)));
});
thi.ng.geom.viz.core.lens_axis = (function thi$ng$geom$viz$core$lens_axis(p__40694){
var map__40697 = p__40694;
var map__40697__$1 = ((((!((map__40697 == null)))?((((map__40697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40697):map__40697);
var spec = map__40697__$1;
var domain = cljs.core.get.call(null,map__40697__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var range = cljs.core.get.call(null,map__40697__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var focus = cljs.core.get.call(null,map__40697__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var strength = cljs.core.get.call(null,map__40697__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),0.5);
var major = cljs.core.get.call(null,map__40697__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__40697__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var major_SINGLEQUOTE_ = (cljs.core.truth_(major)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,major):null);
var minor_SINGLEQUOTE_ = (cljs.core.truth_(minor)?thi.ng.geom.viz.core.lin_tick_marks.call(null,domain,minor):null);
var minor_SINGLEQUOTE___$1 = (cljs.core.truth_((function (){var and__24806__auto__ = major_SINGLEQUOTE_;
if(cljs.core.truth_(and__24806__auto__)){
return minor_SINGLEQUOTE_;
} else {
return and__24806__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,major_SINGLEQUOTE_)),minor_SINGLEQUOTE_):minor_SINGLEQUOTE_);
var focus__$1 = (function (){var or__24818__auto__ = focus;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,domain) / 2.0);
}
})();
return thi.ng.geom.viz.core.axis_common_STAR_.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"scale","scale",-230427353),thi.ng.geom.viz.core.lens_scale.call(null,focus__$1,strength,domain,range),new cljs.core.Keyword(null,"major","major",-27376078),major_SINGLEQUOTE_,new cljs.core.Keyword(null,"minor","minor",-608536071),minor_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"focus","focus",234677911),focus__$1,new cljs.core.Keyword(null,"strength","strength",-415606478),strength));
});
thi.ng.geom.viz.core.svg_triangle_up = (function thi$ng$geom$viz$core$svg_triangle_up(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__40706){
var vec__40707 = p__40706;
var vec__40710 = cljs.core.nth.call(null,vec__40707,(0),null);
var x = cljs.core.nth.call(null,vec__40710,(0),null);
var y = cljs.core.nth.call(null,vec__40710,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_triangle_down = (function thi$ng$geom$viz$core$svg_triangle_down(w){
var h = (w * Math.sin(thi.ng.math.core.THIRD_PI));
var w__$1 = (0.5 * w);
return ((function (h,w__$1){
return (function (p__40720){
var vec__40721 = p__40720;
var vec__40724 = cljs.core.nth.call(null,vec__40721,(0),null);
var x = cljs.core.nth.call(null,vec__40724,(0),null);
var y = cljs.core.nth.call(null,vec__40724,(1),null);
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w__$1),(y - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});
;})(h,w__$1))
});
thi.ng.geom.viz.core.svg_square = (function thi$ng$geom$viz$core$svg_square(r){
var d = (r * 2.0);
return ((function (d){
return (function (p__40734){
var vec__40735 = p__40734;
var vec__40738 = cljs.core.nth.call(null,vec__40735,(0),null);
var x = cljs.core.nth.call(null,vec__40738,(0),null);
var y = cljs.core.nth.call(null,vec__40738,(1),null);
return thi.ng.geom.svg.core.rect.call(null,thi.ng.geom.vector.vec2.call(null,(x - r),(y - r)),d,d);
});
;})(d))
});
thi.ng.geom.viz.core.labeled_rect_horizontal = (function thi$ng$geom$viz$core$labeled_rect_horizontal(p__40741){
var map__40754 = p__40741;
var map__40754__$1 = ((((!((map__40754 == null)))?((((map__40754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40754):map__40754);
var h = cljs.core.get.call(null,map__40754__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__40754__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var label = cljs.core.get.call(null,map__40754__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var fill = cljs.core.get.call(null,map__40754__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var min_width = cljs.core.get.call(null,map__40754__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var base_line = cljs.core.get.call(null,map__40754__$1,new cljs.core.Keyword(null,"base-line","base-line",577717338));
var r2 = ((-2) * r);
var h2 = (0.5 * h);
return ((function (r2,h2,map__40754,map__40754__$1,h,r,label,fill,min_width,base_line){
return (function (p__40756){
var vec__40757 = p__40756;
var vec__40760 = cljs.core.nth.call(null,vec__40757,(0),null);
var ax = cljs.core.nth.call(null,vec__40760,(0),null);
var ay = cljs.core.nth.call(null,vec__40760,(1),null);
var a = vec__40760;
var vec__40763 = cljs.core.nth.call(null,vec__40757,(1),null);
var bx = cljs.core.nth.call(null,vec__40763,(0),null);
var b = vec__40763;
var item = cljs.core.nth.call(null,vec__40757,(2),null);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,thi.ng.geom.svg.core.rect.call(null,thi.ng.geom.vector.vec2.call(null,(ax - r),(ay - h2)),((bx - ax) - r2),h,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill.call(null,item),new cljs.core.Keyword(null,"rx","rx",1627208482),r,new cljs.core.Keyword(null,"ry","ry",-334598563),r], null)),(((min_width < (bx - ax)))?thi.ng.geom.svg.core.text.call(null,thi.ng.geom.vector.vec2.call(null,ax,(base_line + ay)),label.call(null,item)):null));
});
;})(r2,h2,map__40754,map__40754__$1,h,r,label,fill,min_width,base_line))
});
thi.ng.geom.viz.core.circle_cell = (function thi$ng$geom$viz$core$circle_cell(a,b,c,d,col){
return thi.ng.geom.svg.core.circle.call(null,thi.ng.geom.utils.centroid.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null)),(0.5 * thi.ng.geom.core.dist.call(null,a,b)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),col], null));
});
thi.ng.geom.viz.core.svg_line_plot = (function thi$ng$geom$viz$core$svg_line_plot(v_spec,d_spec){
return thi.ng.geom.svg.core.line_strip.call(null,cljs.core.map.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_area_plot = (function thi$ng$geom$viz$core$svg_area_plot(p__40766,p__40767){
var map__40772 = p__40766;
var map__40772__$1 = ((((!((map__40772 == null)))?((((map__40772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40772):map__40772);
var v_spec = map__40772__$1;
var y_axis = cljs.core.get.call(null,map__40772__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__40772__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__40773 = p__40767;
var map__40773__$1 = ((((!((map__40773 == null)))?((((map__40773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40773):map__40773);
var d_spec = map__40773__$1;
var res = cljs.core.get.call(null,map__40773__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var ry1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis));
var points = cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,cljs.core.assoc.call(null,v_spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.vector.vec2),d_spec));
var p = thi.ng.geom.vector.vec2.call(null,cljs.core.first.call(null,cljs.core.peek.call(null,points)),ry1);
var q = thi.ng.geom.vector.vec2.call(null,cljs.core.ffirst.call(null,points),ry1);
var points__$1 = cljs.core.concat.call(null,points,cljs.core.mapv.call(null,cljs.core.partial.call(null,thi.ng.math.core.mix,p,q),thi.ng.math.core.norm_range.call(null,(function (){var or__24818__auto__ = res;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return (1);
}
})())));
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.mapv.call(null,project,points__$1),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot = (function thi$ng$geom$viz$core$svg_radar_plot(v_spec,p__40776){
var map__40779 = p__40776;
var map__40779__$1 = ((((!((map__40779 == null)))?((((map__40779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40779):map__40779);
var d_spec = map__40779__$1;
var shape = cljs.core.get.call(null,map__40779__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),thi.ng.geom.svg.core.polygon);
return shape.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,d_spec)),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec));
});
thi.ng.geom.viz.core.svg_radar_plot_minmax = (function thi$ng$geom$viz$core$svg_radar_plot_minmax(v_spec,p__40784){
var map__40787 = p__40784;
var map__40787__$1 = ((((!((map__40787 == null)))?((((map__40787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40787):map__40787);
var d_spec = map__40787__$1;
var item_pos_min = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"item-pos-min","item-pos-min",-938894508));
var item_pos_max = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"item-pos-max","item-pos-max",1243635616));
var shape = cljs.core.get.call(null,map__40787__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__40787,map__40787__$1,d_spec,item_pos_min,item_pos_max){
return (function (p1__40781_SHARP_,p2__40782_SHARP_,p3__40783_SHARP_){
return thi.ng.geom.svg.core.path.call(null,cljs.core.concat.call(null,p1__40781_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null),p2__40782_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Z","Z",459124588)], null)], null)),p3__40783_SHARP_);
});})(map__40787,map__40787__$1,d_spec,item_pos_min,item_pos_max))
);
var min_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__24818__auto__ = item_pos_min;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return ((function (or__24818__auto__,map__40787,map__40787__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return cljs.core.take.call(null,(2),i);
});
;})(or__24818__auto__,map__40787,map__40787__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
var max_points = thi.ng.geom.viz.core.points__GT_path_segments.call(null,cljs.core.mapv.call(null,cljs.core.first,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),(function (){var or__24818__auto__ = item_pos_max;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return ((function (or__24818__auto__,min_points,map__40787,map__40787__$1,d_spec,item_pos_min,item_pos_max,shape){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.nth.call(null,i,(2))], null);
});
;})(or__24818__auto__,min_points,map__40787,map__40787__$1,d_spec,item_pos_min,item_pos_max,shape))
}
})()))));
return shape.call(null,max_points,min_points,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(d_spec),new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd"));
});
thi.ng.geom.viz.core.svg_scatter_plot = (function thi$ng$geom$viz$core$svg_scatter_plot(v_spec,p__40789){
var map__40796 = p__40789;
var map__40796__$1 = ((((!((map__40796 == null)))?((((map__40796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40796):map__40796);
var d_spec = map__40796__$1;
var attribs = cljs.core.get.call(null,map__40796__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__40796__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,thi.ng.geom.viz.core.process_points.call(null,v_spec,cljs.core.assoc.call(null,d_spec,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (){var or__24818__auto__ = shape;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return ((function (or__24818__auto__,map__40796,map__40796__$1,d_spec,attribs,shape){
return (function (p__40798){
var vec__40799 = p__40798;
var p = cljs.core.nth.call(null,vec__40799,(0),null);
return thi.ng.geom.svg.core.circle.call(null,p,(3));
});
;})(or__24818__auto__,map__40796,map__40796__$1,d_spec,attribs,shape))
}
})())));
});
thi.ng.geom.viz.core.svg_bar_plot = (function thi$ng$geom$viz$core$svg_bar_plot(p__40803,p__40804){
var map__40816 = p__40803;
var map__40816__$1 = ((((!((map__40816 == null)))?((((map__40816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40816):map__40816);
var x_axis = cljs.core.get.call(null,map__40816__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__40816__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__40816__$1,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.vector.vec2);
var map__40817 = p__40804;
var map__40817__$1 = ((((!((map__40817 == null)))?((((map__40817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40817):map__40817);
var values = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__40816,map__40816__$1,x_axis,y_axis,project,map__40817,map__40817__$1,values,attribs){
return (function (a,b,_){
return thi.ng.geom.svg.core.line.call(null,a,b);
});})(map__40816,map__40816__$1,x_axis,y_axis,project,map__40817,map__40817__$1,values,attribs))
);
var item_pos = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"item-pos","item-pos",390857330),cljs.core.identity);
var interleave = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"interleave","interleave",-1475043421),(1));
var offset = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var bar_width = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),(0));
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var base_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis).call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(y_axis)));
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis));
var offset__$1 = ((-0.5 * (interleave * bar_width)) + ((offset + 0.5) * bar_width));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,item_pos,cljs.core.identity)),cljs.core.filter.call(null,((function (domain,base_y,mapper,offset__$1,map__40816,map__40816__$1,x_axis,y_axis,project,map__40817,map__40817__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p1__40802_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,domain,cljs.core.ffirst.call(null,p1__40802_SHARP_));
});})(domain,base_y,mapper,offset__$1,map__40816,map__40816__$1,x_axis,y_axis,project,map__40817,map__40817__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
),cljs.core.map.call(null,((function (domain,base_y,mapper,offset__$1,map__40816,map__40816__$1,x_axis,y_axis,project,map__40817,map__40817__$1,values,attribs,shape,item_pos,interleave,offset,bar_width){
return (function (p__40820){
var vec__40821 = p__40820;
var p = cljs.core.nth.call(null,vec__40821,(0),null);
var i = cljs.core.nth.call(null,vec__40821,(1),null);
var vec__40824 = mapper.call(null,p);
var ax = cljs.core.nth.call(null,vec__40824,(0),null);
var ay = cljs.core.nth.call(null,vec__40824,(1),null);
var ax__$1 = (ax + offset__$1);
return shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,ay], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax__$1,base_y], null)),i);
});})(domain,base_y,mapper,offset__$1,map__40816,map__40816__$1,x_axis,y_axis,project,map__40817,map__40817__$1,values,attribs,shape,item_pos,interleave,offset,bar_width))
)),values));
});
thi.ng.geom.viz.core.svg_heatmap = (function thi$ng$geom$viz$core$svg_heatmap(p__40832,p__40833){
var map__40854 = p__40832;
var map__40854__$1 = ((((!((map__40854 == null)))?((((map__40854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40854):map__40854);
var x_axis = cljs.core.get.call(null,map__40854__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__40854__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__40854__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__40855 = p__40833;
var map__40855__$1 = ((((!((map__40855 == null)))?((((map__40855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40855):map__40855);
var d_spec = map__40855__$1;
var matrix = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var value_domain = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var clamp = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"clamp","clamp",1803814940));
var palette = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"palette","palette",-456203511));
var palette_scale = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var attribs = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__40854,map__40854__$1,x_axis,y_axis,project,map__40855,map__40855__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs){
return (function (p1__40827_SHARP_,p2__40828_SHARP_,p3__40829_SHARP_,p4__40830_SHARP_,p5__40831_SHARP_){
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40827_SHARP_,p2__40828_SHARP_,p3__40829_SHARP_,p4__40830_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),p5__40831_SHARP_], null));
});})(map__40854,map__40854__$1,x_axis,y_axis,project,map__40855,map__40855__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs))
);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,(function (){var iter__25598__auto__ = ((function (scale_x,scale_y,pmax,scale_v,map__40854,map__40854__$1,x_axis,y_axis,project,map__40855,map__40855__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function thi$ng$geom$viz$core$svg_heatmap_$_iter__40858(s__40859){
return (new cljs.core.LazySeq(null,((function (scale_x,scale_y,pmax,scale_v,map__40854,map__40854__$1,x_axis,y_axis,project,map__40855,map__40855__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape){
return (function (){
var s__40859__$1 = s__40859;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40859__$1);
if(temp__4657__auto__){
var s__40859__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40859__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__40859__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__40861 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__40860 = (0);
while(true){
if((i__40860 < size__25597__auto__)){
var p = cljs.core._nth.call(null,c__25596__auto__,i__40860);
var vec__40868 = p;
var y = cljs.core.nth.call(null,vec__40868,(0),null);
var x = cljs.core.nth.call(null,vec__40868,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__24818__auto__ = clamp;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
cljs.core.chunk_append.call(null,b__40861,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))));

var G__40874 = (i__40860 + (1));
i__40860 = G__40874;
continue;
} else {
var G__40875 = (i__40860 + (1));
i__40860 = G__40875;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40861),thi$ng$geom$viz$core$svg_heatmap_$_iter__40858.call(null,cljs.core.chunk_rest.call(null,s__40859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40861),null);
}
} else {
var p = cljs.core.first.call(null,s__40859__$2);
var vec__40871 = p;
var y = cljs.core.nth.call(null,vec__40871,(0),null);
var x = cljs.core.nth.call(null,vec__40871,(1),null);
var v = thi.ng.ndarray.core.get_at.call(null,matrix,y,x);
if(cljs.core.truth_((function (){var or__24818__auto__ = clamp;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return thi.ng.math.core.in_range_QMARK_.call(null,value_domain,v);
}
})())){
return cljs.core.cons.call(null,shape.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,y)], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,(x + (1))),scale_y.call(null,(y + (1)))], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,(y + (1)))], null)),palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,v) | (0)),(0),pmax))),thi$ng$geom$viz$core$svg_heatmap_$_iter__40858.call(null,cljs.core.rest.call(null,s__40859__$2)));
} else {
var G__40876 = cljs.core.rest.call(null,s__40859__$2);
s__40859__$1 = G__40876;
continue;
}
}
} else {
return null;
}
break;
}
});})(scale_x,scale_y,pmax,scale_v,map__40854,map__40854__$1,x_axis,y_axis,project,map__40855,map__40855__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
,null,null));
});})(scale_x,scale_y,pmax,scale_v,map__40854,map__40854__$1,x_axis,y_axis,project,map__40855,map__40855__$1,d_spec,matrix,value_domain,clamp,palette,palette_scale,attribs,shape))
;
return iter__25598__auto__.call(null,thi.ng.ndarray.core.position_seq.call(null,matrix));
})());
});
thi.ng.geom.viz.core.matrix_2d = (function thi$ng$geom$viz$core$matrix_2d(w,h,values){
return thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"float32","float32",-2119815775),values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,w], null));
});
thi.ng.geom.viz.core.contour_matrix = (function thi$ng$geom$viz$core$contour_matrix(w,h,values){
return thi.ng.ndarray.contours.set_border_2d.call(null,thi.ng.geom.viz.core.matrix_2d.call(null,w,h,values),-1.0E9);
});
thi.ng.geom.viz.core.contour__GT_svg = (function thi$ng$geom$viz$core$contour__GT_svg(scale_x,scale_y,project){
return (function (attribs,contour){
var contour__$1 = cljs.core.map.call(null,(function (p__40881){
var vec__40882 = p__40881;
var y = cljs.core.nth.call(null,vec__40882,(0),null);
var x = cljs.core.nth.call(null,vec__40882,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale_x.call(null,x),scale_y.call(null,y)], null);
}),contour);
return thi.ng.geom.svg.core.polygon.call(null,cljs.core.map.call(null,project,contour__$1),attribs);
});
});
thi.ng.geom.viz.core.svg_contour_plot = (function thi$ng$geom$viz$core$svg_contour_plot(p__40885,p__40886){
var map__40891 = p__40885;
var map__40891__$1 = ((((!((map__40891 == null)))?((((map__40891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40891):map__40891);
var x_axis = cljs.core.get.call(null,map__40891__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__40891__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__40891__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__40892 = p__40886;
var map__40892__$1 = ((((!((map__40892 == null)))?((((map__40892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40892):map__40892);
var matrix = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var attribs = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var levels = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
var palette = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null));
var palette_scale = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"palette-scale","palette-scale",2003276610),thi.ng.geom.viz.core.linear_scale);
var value_domain = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"value-domain","value-domain",1224230851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null));
var contour_attribs = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"contour-attribs","contour-attribs",464584885),cljs.core.constantly.call(null,null));
var pmax = (cljs.core.count.call(null,palette) - (1));
var scale_v = palette_scale.call(null,value_domain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),pmax], null));
var contour_fn = thi.ng.geom.viz.core.contour__GT_svg.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis),project);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,((function (pmax,scale_v,contour_fn,map__40891,map__40891__$1,x_axis,y_axis,project,map__40892,map__40892__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs){
return (function (iso){
var c_attribs = contour_attribs.call(null,palette.call(null,thi.ng.math.core.clamp.call(null,(scale_v.call(null,iso) | (0)),(0),pmax)));
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,cljs.core.partial.call(null,contour_fn,c_attribs),thi.ng.ndarray.contours.find_contours_2d.call(null,matrix,iso)));
});})(pmax,scale_v,contour_fn,map__40891,map__40891__$1,x_axis,y_axis,project,map__40892,map__40892__$1,matrix,attribs,levels,palette,palette_scale,value_domain,contour_attribs))
,cljs.core.sort.call(null,levels)));
});
thi.ng.geom.viz.core.overlap_QMARK_ = (function thi$ng$geom$viz$core$overlap_QMARK_(p__40895,p__40896){
var vec__40903 = p__40895;
var a = cljs.core.nth.call(null,vec__40903,(0),null);
var b = cljs.core.nth.call(null,vec__40903,(1),null);
var vec__40906 = p__40896;
var c = cljs.core.nth.call(null,vec__40906,(0),null);
var d = cljs.core.nth.call(null,vec__40906,(1),null);
return ((a <= d)) && ((b >= c));
});
thi.ng.geom.viz.core.compute_row_stacking = (function thi$ng$geom$viz$core$compute_row_stacking(item_range,coll){
return cljs.core.reduce.call(null,(function (grid,x){
var r = item_range.call(null,x);
var G__40924 = grid;
var vec__40925 = G__40924;
var seq__40926 = cljs.core.seq.call(null,vec__40925);
var first__40927 = cljs.core.first.call(null,seq__40926);
var seq__40926__$1 = cljs.core.next.call(null,seq__40926);
var row = first__40927;
var more = seq__40926__$1;
var idx = (0);
var G__40924__$1 = G__40924;
var idx__$1 = idx;
while(true){
var vec__40928 = G__40924__$1;
var seq__40929 = cljs.core.seq.call(null,vec__40928);
var first__40930 = cljs.core.first.call(null,seq__40929);
var seq__40929__$1 = cljs.core.next.call(null,seq__40929);
var row__$1 = first__40930;
var more__$1 = seq__40929__$1;
var idx__$2 = idx__$1;
if(((row__$1 == null)) || (cljs.core.not.call(null,cljs.core.some.call(null,((function (G__40924__$1,idx__$1,vec__40928,seq__40929,first__40930,seq__40929__$1,row__$1,more__$1,idx__$2,G__40924,vec__40925,seq__40926,first__40927,seq__40926__$1,row,more,idx,r){
return (function (p1__40909_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,r,item_range.call(null,p1__40909_SHARP_));
});})(G__40924__$1,idx__$1,vec__40928,seq__40929,first__40930,seq__40929__$1,row__$1,more__$1,idx__$2,G__40924,vec__40925,seq__40926,first__40927,seq__40926__$1,row,more,idx,r))
,row__$1)))){
return cljs.core.update_in.call(null,grid,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx__$2], null),((function (G__40924__$1,idx__$1,vec__40928,seq__40929,first__40930,seq__40929__$1,row__$1,more__$1,idx__$2,G__40924,vec__40925,seq__40926,first__40927,seq__40926__$1,row,more,idx,r){
return (function (p1__40910_SHARP_){
return cljs.core.conj.call(null,(function (){var or__24818__auto__ = p1__40910_SHARP_;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),x);
});})(G__40924__$1,idx__$1,vec__40928,seq__40929,first__40930,seq__40929__$1,row__$1,more__$1,idx__$2,G__40924,vec__40925,seq__40926,first__40927,seq__40926__$1,row,more,idx,r))
);
} else {
var G__40931 = more__$1;
var G__40932 = (idx__$2 + (1));
G__40924__$1 = G__40931;
idx__$1 = G__40932;
continue;
}
break;
}
}),cljs.core.PersistentVector.EMPTY,coll);
});
thi.ng.geom.viz.core.process_interval_row = (function thi$ng$geom$viz$core$process_interval_row(item_range,mapper,p__40933){
var vec__40940 = p__40933;
var d1 = cljs.core.nth.call(null,vec__40940,(0),null);
var d2 = cljs.core.nth.call(null,vec__40940,(1),null);
return ((function (vec__40940,d1,d2){
return (function (i,row){
return cljs.core.map.call(null,((function (vec__40940,d1,d2){
return (function (item){
var vec__40943 = item_range.call(null,item);
var a = cljs.core.nth.call(null,vec__40943,(0),null);
var b = cljs.core.nth.call(null,vec__40943,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__25149__auto__ = d1;
var y__25150__auto__ = a;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})(),i], null)),mapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__25156__auto__ = d2;
var y__25157__auto__ = b;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})(),i], null)),item], null);
});})(vec__40940,d1,d2))
,row);
});
;})(vec__40940,d1,d2))
});
thi.ng.geom.viz.core.svg_stacked_interval_plot = (function thi$ng$geom$viz$core$svg_stacked_interval_plot(p__40947,p__40948){
var map__40957 = p__40947;
var map__40957__$1 = ((((!((map__40957 == null)))?((((map__40957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40957):map__40957);
var x_axis = cljs.core.get.call(null,map__40957__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__40957__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var map__40958 = p__40948;
var map__40958__$1 = ((((!((map__40958 == null)))?((((map__40958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40958):map__40958);
var values = cljs.core.get.call(null,map__40958__$1,new cljs.core.Keyword(null,"values","values",372645556));
var attribs = cljs.core.get.call(null,map__40958__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var shape = cljs.core.get.call(null,map__40958__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),((function (map__40957,map__40957__$1,x_axis,y_axis,map__40958,map__40958__$1,values,attribs){
return (function (p__40961){
var vec__40962 = p__40961;
var a = cljs.core.nth.call(null,vec__40962,(0),null);
var b = cljs.core.nth.call(null,vec__40962,(1),null);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,a),thi.ng.geom.vector.vec2.call(null,b));
});})(map__40957,map__40957__$1,x_axis,y_axis,map__40958,map__40958__$1,values,attribs))
);
var item_range = cljs.core.get.call(null,map__40958__$1,new cljs.core.Keyword(null,"item-range","item-range",1733769894),cljs.core.identity);
var offset = cljs.core.get.call(null,map__40958__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var domain = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(x_axis);
var mapper = thi.ng.geom.viz.core.value_mapper.call(null,scale_x,scale_y);
return cljs.core.apply.call(null,thi.ng.geom.svg.core.group,attribs,cljs.core.mapv.call(null,shape,cljs.core.mapcat.call(null,thi.ng.geom.viz.core.process_interval_row.call(null,item_range,mapper,domain),cljs.core.range.call(null,offset,1000000.0),thi.ng.geom.viz.core.compute_row_stacking.call(null,item_range,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.first,item_range),cljs.core.filter.call(null,((function (scale_x,scale_y,domain,mapper,map__40957,map__40957__$1,x_axis,y_axis,map__40958,map__40958__$1,values,attribs,shape,item_range,offset){
return (function (p1__40946_SHARP_){
return thi.ng.geom.viz.core.overlap_QMARK_.call(null,domain,item_range.call(null,p1__40946_SHARP_));
});})(scale_x,scale_y,domain,mapper,map__40957,map__40957__$1,x_axis,y_axis,map__40958,map__40958__$1,values,attribs,shape,item_range,offset))
,values))))));
});
thi.ng.geom.viz.core.svg_axis_STAR_ = (function thi$ng$geom$viz$core$svg_axis_STAR_(p__40965,axis,tick1_fn,tick2_fn,label_fn){
var map__40968 = p__40965;
var map__40968__$1 = ((((!((map__40968 == null)))?((((map__40968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40968):map__40968);
var major = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var attribs = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var label_style = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000"], null),attribs),cljs.core.map.call(null,tick1_fn,major),cljs.core.map.call(null,tick2_fn,minor),cljs.core.apply.call(null,thi.ng.geom.svg.core.group,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null),label_style),cljs.core.mapv.call(null,label_fn,major)),axis);
});
thi.ng.geom.viz.core.svg_x_axis_cartesian = (function thi$ng$geom$viz$core$svg_x_axis_cartesian(p__40973){
var map__40979 = p__40973;
var map__40979__$1 = ((((!((map__40979 == null)))?((((map__40979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40979):map__40979);
var spec = map__40979__$1;
var vec__40980 = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__40980,(0),null);
var r2 = cljs.core.nth.call(null,vec__40980,(1),null);
var scale = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__40979__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var y_major = (pos + major_size);
var y_minor = (pos + minor_size);
var y_label = (pos + label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,r1,pos),thi.ng.geom.vector.vec2.call(null,r2,pos)),((function (y_major,y_minor,y_label,map__40979,map__40979__$1,spec,vec__40980,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__40970_SHARP_){
var x = scale.call(null,p1__40970_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x,pos),thi.ng.geom.vector.vec2.call(null,x,y_major));
});})(y_major,y_minor,y_label,map__40979,map__40979__$1,spec,vec__40980,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__40979,map__40979__$1,spec,vec__40980,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__40971_SHARP_){
var x = scale.call(null,p1__40971_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x,pos),thi.ng.geom.vector.vec2.call(null,x,y_minor));
});})(y_major,y_minor,y_label,map__40979,map__40979__$1,spec,vec__40980,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
,((function (y_major,y_minor,y_label,map__40979,map__40979__$1,spec,vec__40980,r1,r2,scale,major_size,minor_size,label_dist,pos,label){
return (function (p1__40972_SHARP_){
return label.call(null,thi.ng.geom.vector.vec2.call(null,scale.call(null,p1__40972_SHARP_),y_label),p1__40972_SHARP_);
});})(y_major,y_minor,y_label,map__40979,map__40979__$1,spec,vec__40980,r1,r2,scale,major_size,minor_size,label_dist,pos,label))
);
});
thi.ng.geom.viz.core.svg_y_axis_cartesian = (function thi$ng$geom$viz$core$svg_y_axis_cartesian(p__40987){
var map__40993 = p__40987;
var map__40993__$1 = ((((!((map__40993 == null)))?((((map__40993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40993):map__40993);
var spec = map__40993__$1;
var vec__40994 = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var r1 = cljs.core.nth.call(null,vec__40994,(0),null);
var r2 = cljs.core.nth.call(null,vec__40994,(1),null);
var scale = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var label_y = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var x_major = (pos - major_size);
var x_minor = (pos - minor_size);
var x_label = (pos - label_dist);
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,spec,thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,pos,r1),thi.ng.geom.vector.vec2.call(null,pos,r2)),((function (x_major,x_minor,x_label,map__40993,map__40993__$1,spec,vec__40994,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__40984_SHARP_){
var y = scale.call(null,p1__40984_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,pos,y),thi.ng.geom.vector.vec2.call(null,x_major,y));
});})(x_major,x_minor,x_label,map__40993,map__40993__$1,spec,vec__40994,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__40993,map__40993__$1,spec,vec__40994,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__40985_SHARP_){
var y = scale.call(null,p1__40985_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,pos,y),thi.ng.geom.vector.vec2.call(null,x_minor,y));
});})(x_major,x_minor,x_label,map__40993,map__40993__$1,spec,vec__40994,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
,((function (x_major,x_minor,x_label,map__40993,map__40993__$1,spec,vec__40994,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label){
return (function (p1__40986_SHARP_){
return label.call(null,thi.ng.geom.vector.vec2.call(null,x_label,(scale.call(null,p1__40986_SHARP_) + label_y)),p1__40986_SHARP_);
});})(x_major,x_minor,x_label,map__40993,map__40993__$1,spec,vec__40994,r1,r2,scale,major_size,minor_size,label_dist,label_y,pos,label))
);
});
thi.ng.geom.viz.core.select_ticks = (function thi$ng$geom$viz$core$select_ticks(axis,minor_QMARK_){
if(cljs.core.truth_(minor_QMARK_)){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"minor","minor",-608536071).cljs$core$IFn$_invoke$arity$1(axis),new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis));
} else {
return new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(axis);
}
});
thi.ng.geom.viz.core.svg_axis_grid2d_cartesian = (function thi$ng$geom$viz$core$svg_axis_grid2d_cartesian(x_axis,y_axis,p__41000){
var map__41009 = p__41000;
var map__41009__$1 = ((((!((map__41009 == null)))?((((map__41009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41009):map__41009);
var attribs = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var vec__41011 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__41011,(0),null);
var x2 = cljs.core.nth.call(null,vec__41011,(1),null);
var vec__41014 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__41014,(0),null);
var y2 = cljs.core.nth.call(null,vec__41014,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__41011,x1,x2,vec__41014,y1,y2,scale_x,scale_y,map__41009,map__41009__$1,attribs,minor_x,minor_y){
return (function (p1__40998_SHARP_){
var x = scale_x.call(null,p1__40998_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x,y1),thi.ng.geom.vector.vec2.call(null,x,y2));
});})(vec__41011,x1,x2,vec__41014,y1,y2,scale_x,scale_y,map__41009,map__41009__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__41011,x1,x2,vec__41014,y1,y2,scale_x,scale_y,map__41009,map__41009__$1,attribs,minor_x,minor_y){
return (function (p1__40999_SHARP_){
var y = scale_y.call(null,p1__40999_SHARP_);
return thi.ng.geom.svg.core.line.call(null,thi.ng.geom.vector.vec2.call(null,x1,y),thi.ng.geom.vector.vec2.call(null,x2,y));
});})(vec__41011,x1,x2,vec__41014,y1,y2,scale_x,scale_y,map__41009,map__41009__$1,attribs,minor_x,minor_y))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_cartesian = (function thi$ng$geom$viz$core$svg_plot2d_cartesian(p__41017){
var map__41020 = p__41017;
var map__41020__$1 = ((((!((map__41020 == null)))?((((map__41020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41020):map__41020);
var opts = map__41020__$1;
var x_axis = cljs.core.get.call(null,map__41020__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__41020__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__41020__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__41020__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.vector.vec2);
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_cartesian.call(null,x_axis,y_axis,grid):null),cljs.core.map.call(null,((function (opts__$1,map__41020,map__41020__$1,opts,x_axis,y_axis,grid,data){
return (function (spec){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec).call(null,opts__$1,spec);
});})(opts__$1,map__41020,map__41020__$1,opts,x_axis,y_axis,grid,data))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_cartesian.call(null,x_axis):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_cartesian.call(null,y_axis):null));
});
thi.ng.geom.viz.core.svg_x_axis_polar = (function thi$ng$geom$viz$core$svg_x_axis_polar(p__41025){
var map__41033 = p__41025;
var map__41033__$1 = ((((!((map__41033 == null)))?((((map__41033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41033):map__41033);
var x_axis = cljs.core.get.call(null,map__41033__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var project = cljs.core.get.call(null,map__41033__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var circle = cljs.core.get.call(null,map__41033__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var origin = cljs.core.get.call(null,map__41033__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__41035 = x_axis;
var map__41035__$1 = ((((!((map__41035 == null)))?((((map__41035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41035):map__41035);
var scale = cljs.core.get.call(null,map__41035__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var major_size = cljs.core.get.call(null,map__41035__$1,new cljs.core.Keyword(null,"major-size","major-size",-698672375));
var minor_size = cljs.core.get.call(null,map__41035__$1,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109));
var label_dist = cljs.core.get.call(null,map__41035__$1,new cljs.core.Keyword(null,"label-dist","label-dist",-538260526));
var pos = cljs.core.get.call(null,map__41035__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__24818__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(x_axis);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__41036 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var r1 = cljs.core.nth.call(null,vec__41036,(0),null);
var r2 = cljs.core.nth.call(null,vec__41036,(1),null);
var o = origin;
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,x_axis,(cljs.core.truth_(circle)?thi.ng.geom.svg.core.circle.call(null,o,pos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)):thi.ng.geom.svg.core.arc.call(null,o,pos,r1,r2,(thi.ng.math.core.abs_diff.call(null,r1,r2) > thi.ng.math.core.PI),true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null))),((function (map__41035,map__41035__$1,scale,major_size,minor_size,label_dist,pos,label,vec__41036,r1,r2,o,map__41033,map__41033__$1,x_axis,project,circle,origin){
return (function (p1__41022_SHARP_){
var x = scale.call(null,p1__41022_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + major_size)], null)));
});})(map__41035,map__41035__$1,scale,major_size,minor_size,label_dist,pos,label,vec__41036,r1,r2,o,map__41033,map__41033__$1,x_axis,project,circle,origin))
,((function (map__41035,map__41035__$1,scale,major_size,minor_size,label_dist,pos,label,vec__41036,r1,r2,o,map__41033,map__41033__$1,x_axis,project,circle,origin){
return (function (p1__41023_SHARP_){
var x = scale.call(null,p1__41023_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,pos], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + minor_size)], null)));
});})(map__41035,map__41035__$1,scale,major_size,minor_size,label_dist,pos,label,vec__41036,r1,r2,o,map__41033,map__41033__$1,x_axis,project,circle,origin))
,((function (map__41035,map__41035__$1,scale,major_size,minor_size,label_dist,pos,label,vec__41036,r1,r2,o,map__41033,map__41033__$1,x_axis,project,circle,origin){
return (function (p1__41024_SHARP_){
var x = scale.call(null,p1__41024_SHARP_);
return label.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(pos + label_dist)], null)),p1__41024_SHARP_);
});})(map__41035,map__41035__$1,scale,major_size,minor_size,label_dist,pos,label,vec__41036,r1,r2,o,map__41033,map__41033__$1,x_axis,project,circle,origin))
);
});
thi.ng.geom.viz.core.svg_y_axis_polar = (function thi$ng$geom$viz$core$svg_y_axis_polar(p__41043){
var map__41051 = p__41043;
var map__41051__$1 = ((((!((map__41051 == null)))?((((map__41051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41051):map__41051);
var y_axis = cljs.core.get.call(null,map__41051__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var project = cljs.core.get.call(null,map__41051__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var map__41053 = y_axis;
var map__41053__$1 = ((((!((map__41053 == null)))?((((map__41053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41053):map__41053);
var scale = cljs.core.get.call(null,map__41053__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var label_y = cljs.core.get.call(null,map__41053__$1,new cljs.core.Keyword(null,"label-y","label-y",-1792935845),(0));
var pos = cljs.core.get.call(null,map__41053__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var label = (function (){var or__24818__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(y_axis);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return thi.ng.geom.viz.core.default_svg_label.call(null,thi.ng.geom.viz.core.value_formatter.call(null,(2)));
}
})();
var vec__41054 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var r1 = cljs.core.nth.call(null,vec__41054,(0),null);
var r2 = cljs.core.nth.call(null,vec__41054,(1),null);
var a = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r1], null));
var b = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,r2], null));
var nl = thi.ng.math.core.normalize.call(null,thi.ng.geom.core.normal.call(null,thi.ng.math.core._.call(null,a,b)),new cljs.core.Keyword(null,"label-dist","label-dist",-538260526).cljs$core$IFn$_invoke$arity$1(y_axis));
var n1 = thi.ng.math.core.normalize.call(null,nl,new cljs.core.Keyword(null,"major-size","major-size",-698672375).cljs$core$IFn$_invoke$arity$1(y_axis));
var n2 = thi.ng.math.core.normalize.call(null,nl,new cljs.core.Keyword(null,"minor-size","minor-size",-1586355109).cljs$core$IFn$_invoke$arity$1(y_axis));
return thi.ng.geom.viz.core.svg_axis_STAR_.call(null,y_axis,thi.ng.geom.svg.core.line.call(null,a,b),((function (map__41053,map__41053__$1,scale,label_y,pos,label,vec__41054,r1,r2,a,b,nl,n1,n2,map__41051,map__41051__$1,y_axis,project){
return (function (p1__41040_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__41040_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.math.core._PLUS_.call(null,p,n1));
});})(map__41053,map__41053__$1,scale,label_y,pos,label,vec__41054,r1,r2,a,b,nl,n1,n2,map__41051,map__41051__$1,y_axis,project))
,((function (map__41053,map__41053__$1,scale,label_y,pos,label,vec__41054,r1,r2,a,b,nl,n1,n2,map__41051,map__41051__$1,y_axis,project){
return (function (p1__41041_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,scale.call(null,p1__41041_SHARP_)], null));
return thi.ng.geom.svg.core.line.call(null,p,thi.ng.math.core._PLUS_.call(null,p,n2));
});})(map__41053,map__41053__$1,scale,label_y,pos,label,vec__41054,r1,r2,a,b,nl,n1,n2,map__41051,map__41051__$1,y_axis,project))
,((function (map__41053,map__41053__$1,scale,label_y,pos,label,vec__41054,r1,r2,a,b,nl,n1,n2,map__41051,map__41051__$1,y_axis,project){
return (function (p1__41042_SHARP_){
var p = project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,(scale.call(null,p1__41042_SHARP_) + label_y)], null));
return label.call(null,thi.ng.math.core._PLUS_.call(null,p,nl),p1__41042_SHARP_);
});})(map__41053,map__41053__$1,scale,label_y,pos,label,vec__41054,r1,r2,a,b,nl,n1,n2,map__41051,map__41051__$1,y_axis,project))
);
});
thi.ng.geom.viz.core.svg_axis_grid2d_polar = (function thi$ng$geom$viz$core$svg_axis_grid2d_polar(p__41060){
var map__41071 = p__41060;
var map__41071__$1 = ((((!((map__41071 == null)))?((((map__41071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41071):map__41071);
var map__41072 = cljs.core.get.call(null,map__41071__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var map__41072__$1 = ((((!((map__41072 == null)))?((((map__41072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41072):map__41072);
var attribs = cljs.core.get.call(null,map__41072__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var minor_x = cljs.core.get.call(null,map__41072__$1,new cljs.core.Keyword(null,"minor-x","minor-x",-230860299));
var minor_y = cljs.core.get.call(null,map__41072__$1,new cljs.core.Keyword(null,"minor-y","minor-y",388125550));
var x_axis = cljs.core.get.call(null,map__41071__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__41071__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var origin = cljs.core.get.call(null,map__41071__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var circle = cljs.core.get.call(null,map__41071__$1,new cljs.core.Keyword(null,"circle","circle",1903212362));
var project = cljs.core.get.call(null,map__41071__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var vec__41075 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(x_axis);
var x1 = cljs.core.nth.call(null,vec__41075,(0),null);
var x2 = cljs.core.nth.call(null,vec__41075,(1),null);
var vec__41078 = new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(y_axis);
var y1 = cljs.core.nth.call(null,vec__41078,(0),null);
var y2 = cljs.core.nth.call(null,vec__41078,(1),null);
var scale_x = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(x_axis);
var scale_y = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(y_axis);
var great_QMARK_ = (thi.ng.math.core.abs_diff.call(null,x1,x2) > thi.ng.math.core.PI);
return thi.ng.geom.svg.core.group.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#ccc",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 1"], null),attribs),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?cljs.core.map.call(null,((function (vec__41075,x1,x2,vec__41078,y1,y2,scale_x,scale_y,great_QMARK_,map__41071,map__41071__$1,map__41072,map__41072__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__41058_SHARP_){
var x = scale_x.call(null,p1__41058_SHARP_);
return thi.ng.geom.svg.core.line.call(null,project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y1], null)),project.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y2], null)));
});})(vec__41075,x1,x2,vec__41078,y1,y2,scale_x,scale_y,great_QMARK_,map__41071,map__41071__$1,map__41072,map__41072__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,x_axis,minor_x)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?cljs.core.map.call(null,((function (vec__41075,x1,x2,vec__41078,y1,y2,scale_x,scale_y,great_QMARK_,map__41071,map__41071__$1,map__41072,map__41072__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project){
return (function (p1__41059_SHARP_){
var y = scale_y.call(null,p1__41059_SHARP_);
if(cljs.core.truth_(circle)){
return thi.ng.geom.svg.core.circle.call(null,origin,y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
} else {
return thi.ng.geom.svg.core.arc.call(null,origin,y,x1,x2,great_QMARK_,true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
}
});})(vec__41075,x1,x2,vec__41078,y1,y2,scale_x,scale_y,great_QMARK_,map__41071,map__41071__$1,map__41072,map__41072__$1,attribs,minor_x,minor_y,x_axis,y_axis,origin,circle,project))
,thi.ng.geom.viz.core.select_ticks.call(null,y_axis,minor_y)):null));
});
thi.ng.geom.viz.core.svg_plot2d_polar = (function thi$ng$geom$viz$core$svg_plot2d_polar(p__41081){
var map__41084 = p__41081;
var map__41084__$1 = ((((!((map__41084 == null)))?((((map__41084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41084):map__41084);
var spec = map__41084__$1;
var x_axis = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var y_axis = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var grid = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var data = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var origin = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var spec__$1 = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"project","project",1124394579),thi.ng.geom.viz.core.polar_projection.call(null,origin));
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(grid)?thi.ng.geom.viz.core.svg_axis_grid2d_polar.call(null,spec__$1):null),cljs.core.map.call(null,((function (spec__$1,map__41084,map__41084__$1,spec,x_axis,y_axis,grid,data,origin){
return (function (spec_SINGLEQUOTE_){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(spec_SINGLEQUOTE_).call(null,spec__$1,spec_SINGLEQUOTE_);
});})(spec__$1,map__41084,map__41084__$1,spec,x_axis,y_axis,grid,data,origin))
,data),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(x_axis))?thi.ng.geom.viz.core.svg_x_axis_polar.call(null,spec__$1):null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(y_axis))?thi.ng.geom.viz.core.svg_y_axis_polar.call(null,spec__$1):null));
});

//# sourceMappingURL=core.js.map?rel=1530813195750