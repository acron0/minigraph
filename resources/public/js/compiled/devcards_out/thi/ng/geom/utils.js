// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.geom.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
thi.ng.geom.utils.closest_point_coeff = (function thi$ng$geom$utils$closest_point_coeff(p,a,b){
var d = thi.ng.math.core._.call(null,b,a);
return (thi.ng.math.core.dot.call(null,thi.ng.math.core._.call(null,p,a),d) / thi.ng.math.core.mag_squared.call(null,d));
});
thi.ng.geom.utils.closest_point_on_line = (function thi$ng$geom$utils$closest_point_on_line(p,a,b){
return thi.ng.math.core.mix.call(null,a,b,thi.ng.geom.utils.closest_point_coeff.call(null,p,a,b));
});
thi.ng.geom.utils.closest_point_on_segment = (function thi$ng$geom$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.utils.closest_point_coeff.call(null,p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.math.core.mix.call(null,a,b,t);
}
}
});
thi.ng.geom.utils.closest_point_on_segments = (function thi$ng$geom$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__39466_SHARP_){
return cljs.core.apply.call(null,thi.ng.geom.utils.closest_point_on_segment,p,p1__39466_SHARP_);
})),cljs.core.completing.call(null,(function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared.call(null,p,q);
if((d_SINGLEQUOTE_ < a.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.utils.closest_line_between = (function thi$ng$geom$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.math.core._.call(null,b2,a2);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.vector.V3,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.math.core._.call(null,b1,a1);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.vector.V3,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.math.core._.call(null,a1,a2);
var d1343 = thi.ng.math.core.dot.call(null,p13,p43);
var d4321 = thi.ng.math.core.dot.call(null,p43,p21);
var d1321 = thi.ng.math.core.dot.call(null,p13,p21);
var d4343 = thi.ng.math.core.dot.call(null,p43,p43);
var d2121 = thi.ng.math.core.dot.call(null,p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.math.core.madd.call(null,p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.math.core.madd.call(null,p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.dist_STAR_ = (function thi$ng$geom$utils$dist_STAR_(rf){
return (function (c,points){
return Math.sqrt(cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__39467_SHARP_){
return thi.ng.geom.core.dist_squared.call(null,c,p1__39467_SHARP_);
})),rf,(0),points));
});
});
thi.ng.geom.utils.min_dist = thi.ng.geom.utils.dist_STAR_.call(null,cljs.core.min);
thi.ng.geom.utils.max_dist = thi.ng.geom.utils.dist_STAR_.call(null,cljs.core.max);
thi.ng.geom.utils.arc_length_index = (function thi$ng$geom$utils$arc_length_index(points){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__39468_SHARP_){
return thi.ng.geom.core.dist.call(null,cljs.core.nth.call(null,p1__39468_SHARP_,(0)),cljs.core.nth.call(null,p1__39468_SHARP_,(1)));
})),cljs.core.completing.call(null,(function (a,d){
return cljs.core.conj.call(null,a,(cljs.core.peek.call(null,a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.partition.call(null,(2),(1),points));
});
thi.ng.geom.utils.arc_length = (function thi$ng$geom$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.utils.centroid = (function thi$ng$geom$utils$centroid(coll){
var G__39470 = cljs.core.count.call(null,coll);
switch (G__39470) {
case (0):
return null;

break;
case (1):
return cljs.core.first.call(null,coll);

break;
case (2):
return thi.ng.math.core.mix.call(null,cljs.core.first.call(null,coll),cljs.core.nth.call(null,coll,(1)));

break;
default:
var s = (1.0 / cljs.core.count.call(null,coll));
var f = ((function (s,G__39470){
return (function (x,_){
return (x * s);
});})(s,G__39470))
;
return thi.ng.geom.core.reduce_vector.call(null,cljs.core.first.call(null,coll),cljs.core._PLUS_,f,cljs.core.rest.call(null,coll));

}
});
thi.ng.geom.utils.center = (function thi$ng$geom$utils$center(var_args){
var args39473 = [];
var len__25893__auto___39476 = arguments.length;
var i__25894__auto___39477 = (0);
while(true){
if((i__25894__auto___39477 < len__25893__auto___39476)){
args39473.push((arguments[i__25894__auto___39477]));

var G__39478 = (i__25894__auto___39477 + (1));
i__25894__auto___39477 = G__39478;
continue;
} else {
}
break;
}

var G__39475 = args39473.length;
switch (G__39475) {
case 2:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39473.length)].join('')));

}
});

thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.utils.center.call(null,thi.ng.geom.utils.centroid.call(null,coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.math.core._.call(null,c_SINGLEQUOTE_,c);
return cljs.core.mapv.call(null,((function (d){
return (function (p1__39472_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__39472_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.utils.center.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.scale_size = (function thi$ng$geom$utils$scale_size(var_args){
var args39481 = [];
var len__25893__auto___39484 = arguments.length;
var i__25894__auto___39485 = (0);
while(true){
if((i__25894__auto___39485 < len__25893__auto___39484)){
args39481.push((arguments[i__25894__auto___39485]));

var G__39486 = (i__25894__auto___39485 + (1));
i__25894__auto___39485 = G__39486;
continue;
} else {
}
break;
}

var G__39483 = args39481.length;
switch (G__39483) {
case 2:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39481.length)].join('')));

}
});

thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.utils.scale_size.call(null,thi.ng.geom.utils.centroid.call(null,coll),s,coll);
});

thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.call(null,(function (p1__39480_SHARP_){
return thi.ng.math.core.madd.call(null,thi.ng.math.core._.call(null,p1__39480_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.utils.scale_size.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.bounds_STAR_ = (function thi$ng$geom$utils$bounds_STAR_(zero,coll){
var c = cljs.core.count.call(null,coll);
if((c > (1))){
var vec__39491 = coll;
var seq__39492 = cljs.core.seq.call(null,vec__39491);
var first__39493 = cljs.core.first.call(null,seq__39492);
var seq__39492__$1 = cljs.core.next.call(null,seq__39492);
var x = first__39493;
var xs = seq__39492__$1;
var p = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.math.core._.call(null,q,p)], null);
} else {
if((c === (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,coll),zero], null);
} else {
return null;

}
}
});
thi.ng.geom.utils.bounding_rect_raw = (function thi$ng$geom$utils$bounding_rect_raw(points){
return thi.ng.geom.utils.bounds_STAR_.call(null,thi.ng.geom.vector.V2,points);
});
thi.ng.geom.utils.bounding_box_raw = (function thi$ng$geom$utils$bounding_box_raw(points){
return thi.ng.geom.utils.bounds_STAR_.call(null,thi.ng.geom.vector.V3,points);
});
thi.ng.geom.utils.radial_bounds = (function thi$ng$geom$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor.call(null,c),((cljs.core.coll_QMARK_.call(null,r_or_points))?thi.ng.geom.utils.max_dist.call(null,c,r_or_points):r_or_points)], null);
});
thi.ng.geom.utils.axis_bounds = (function thi$ng$geom$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.call(null,(function (p1__39494_SHARP_){
return cljs.core.nth.call(null,p1__39494_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,xs),cljs.core.reduce.call(null,cljs.core.max,xs)], null);
});
thi.ng.geom.utils.axis_range = (function thi$ng$geom$utils$axis_range(axis,coll){
return (- cljs.core.apply.call(null,cljs.core._,thi.ng.geom.utils.axis_bounds.call(null,axis,coll)));
});
thi.ng.geom.utils.delta_contains = (function thi$ng$geom$utils$delta_contains(points,p,eps){
return cljs.core.some.call(null,(function (p1__39495_SHARP_){
return thi.ng.math.core.delta_EQ_.call(null,p,p1__39495_SHARP_,eps);
}),points);
});
thi.ng.geom.utils.from_barycentric = (function thi$ng$geom$utils$from_barycentric(points,weights){
return cljs.core.reduce.call(null,thi.ng.math.core._PLUS_,cljs.core.map.call(null,thi.ng.math.core._STAR_,points,weights));
});
/**
 * Takes a seq of points and normalized index (0.0 .. 1.0), returns
 *   interpolated point at position t.
 */
thi.ng.geom.utils.point_at_index = (function thi$ng$geom$utils$point_at_index(points,t){
var n = (cljs.core.count.call(null,points) - (1));
var t_SINGLEQUOTE_ = (t * n);
var ti = (t_SINGLEQUOTE_ | (0));
if((ti < n)){
return thi.ng.math.core.mix.call(null,cljs.core.nth.call(null,points,ti),cljs.core.nth.call(null,points,(ti + (1))),(t_SINGLEQUOTE_ - ti));
} else {
return cljs.core.nth.call(null,points,(((ti < (0)))?(0):n));
}
});
thi.ng.geom.utils.point_at_STAR_ = (function thi$ng$geom$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= idx.call(null,i__$1))){
var G__39496 = (i__$1 + (1));
i__$1 = G__39496;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = idx.call(null,i1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.call(null,cljs.core.nth.call(null,points,i1),cljs.core.nth.call(null,points,i__$1),((ct - pi) / (idx.call(null,i__$1) - pi))),i__$1], null);
});
thi.ng.geom.utils.point_at = (function thi$ng$geom$utils$point_at(var_args){
var args39497 = [];
var len__25893__auto___39500 = arguments.length;
var i__25894__auto___39501 = (0);
while(true){
if((i__25894__auto___39501 < len__25893__auto___39500)){
args39497.push((arguments[i__25894__auto___39501]));

var G__39502 = (i__25894__auto___39501 + (1));
i__25894__auto___39501 = G__39502;
continue;
} else {
}
break;
}

var G__39499 = args39497.length;
switch (G__39499) {
case 2:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39497.length)].join('')));

}
});

thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.utils.point_at.call(null,t,points,null);
});

thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,t))){
var n = cljs.core.count.call(null,points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first.call(null,points);
} else {
if((1.0 === t__$1)){
return cljs.core.last.call(null,points);
} else {
var idx__$1 = (function (){var or__24818__auto__ = idx;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return thi.ng.geom.utils.arc_length_index.call(null,points);
}
})();
return cljs.core.first.call(null,thi.ng.geom.utils.point_at_STAR_.call(null,points,idx__$1,cljs.core.peek.call(null,idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.utils.point_at.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.sample_uniform_STAR_ = (function thi$ng$geom$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.utils.arc_length_index.call(null,points);
var total = cljs.core.peek.call(null,idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__39507 = thi.ng.geom.utils.point_at_STAR_.call(null,points,idx,total,t,i);
var p = cljs.core.nth.call(null,vec__39507,(0),null);
var i__$1 = cljs.core.nth.call(null,vec__39507,(1),null);
var G__39510 = (t + delta);
var G__39511 = (i__$1 | (0));
var G__39512 = cljs.core.conj.call(null,acc,p);
t = G__39510;
i = G__39511;
acc = G__39512;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.call(null,samples,cljs.core.last.call(null,points));
} else {
return samples;
}
});
thi.ng.geom.utils.sample_uniform = (function thi$ng$geom$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count.call(null,points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null);
} else {
return thi.ng.geom.utils.sample_uniform_STAR_.call(null,udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.utils.sample_segment_with_res = (function thi$ng$geom$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__25598__auto__ = (function thi$ng$geom$utils$sample_segment_with_res_$_iter__39517(s__39518){
return (new cljs.core.LazySeq(null,(function (){
var s__39518__$1 = s__39518;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39518__$1);
if(temp__4657__auto__){
var s__39518__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39518__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__39518__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__39520 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__39519 = (0);
while(true){
if((i__39519 < size__25597__auto__)){
var t = cljs.core._nth.call(null,c__25596__auto__,i__39519);
cljs.core.chunk_append.call(null,b__39520,thi.ng.math.core.mix.call(null,a,b,t));

var G__39521 = (i__39519 + (1));
i__39519 = G__39521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39520),thi$ng$geom$utils$sample_segment_with_res_$_iter__39517.call(null,cljs.core.chunk_rest.call(null,s__39518__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39520),null);
}
} else {
var t = cljs.core.first.call(null,s__39518__$2);
return cljs.core.cons.call(null,thi.ng.math.core.mix.call(null,a,b,t),thi$ng$geom$utils$sample_segment_with_res_$_iter__39517.call(null,cljs.core.rest.call(null,s__39518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25598__auto__.call(null,thi.ng.math.core.norm_range.call(null,res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast.call(null,ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.utils.map_bilinear = (function thi$ng$geom$utils$map_bilinear(p__39522,p__39523){
var vec__39530 = p__39522;
var a = cljs.core.nth.call(null,vec__39530,(0),null);
var b = cljs.core.nth.call(null,vec__39530,(1),null);
var c = cljs.core.nth.call(null,vec__39530,(2),null);
var d = cljs.core.nth.call(null,vec__39530,(3),null);
var vec__39533 = p__39523;
var u = cljs.core.nth.call(null,vec__39533,(0),null);
var v = cljs.core.nth.call(null,vec__39533,(1),null);
return thi.ng.math.core.mix.call(null,a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.utils.map_trilinear = (function thi$ng$geom$utils$map_trilinear(p__39536,p__39537){
var vec__39544 = p__39536;
var a = cljs.core.nth.call(null,vec__39544,(0),null);
var b = cljs.core.nth.call(null,vec__39544,(1),null);
var c = cljs.core.nth.call(null,vec__39544,(2),null);
var d = cljs.core.nth.call(null,vec__39544,(3),null);
var e = cljs.core.nth.call(null,vec__39544,(4),null);
var f = cljs.core.nth.call(null,vec__39544,(5),null);
var g = cljs.core.nth.call(null,vec__39544,(6),null);
var h = cljs.core.nth.call(null,vec__39544,(7),null);
var vec__39547 = p__39537;
var u = cljs.core.nth.call(null,vec__39547,(0),null);
var v = cljs.core.nth.call(null,vec__39547,(1),null);
var w = cljs.core.nth.call(null,vec__39547,(2),null);
return thi.ng.math.core.mix.call(null,thi.ng.math.core.mix.call(null,a,d,e,h,u,v),thi.ng.math.core.mix.call(null,b,c,f,g,u,v),w);
});
thi.ng.geom.utils.tessellate_with_point = (function thi$ng$geom$utils$tessellate_with_point(var_args){
var args39551 = [];
var len__25893__auto___39554 = arguments.length;
var i__25894__auto___39555 = (0);
while(true){
if((i__25894__auto___39555 < len__25893__auto___39554)){
args39551.push((arguments[i__25894__auto___39555]));

var G__39556 = (i__25894__auto___39555 + (1));
i__25894__auto___39555 = G__39556;
continue;
} else {
}
break;
}

var G__39553 = args39551.length;
switch (G__39553) {
case 1:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39551.length)].join('')));

}
});

thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.tessellate_with_point.call(null,thi.ng.geom.utils.centroid.call(null,points),points);
});

thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.call(null,(function (p1__39550_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,cljs.core.first.call(null,p1__39550_SHARP_),cljs.core.nth.call(null,p1__39550_SHARP_,(1))],null));
}),cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});

thi.ng.geom.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.tessellate_with_first = (function thi$ng$geom$utils$tessellate_with_first(points){
if((cljs.core.count.call(null,points) > (3))){
var v0 = cljs.core.first.call(null,points);
return cljs.core.mapv.call(null,((function (v0){
return (function (p__39562){
var vec__39563 = p__39562;
var a = cljs.core.nth.call(null,vec__39563,(0),null);
var b = cljs.core.nth.call(null,vec__39563,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(v0))
,cljs.core.partition.call(null,(2),(1),cljs.core.rest.call(null,points)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$utils$tessellate_tri_with_midpoints(p__39566){
var vec__39570 = p__39566;
var a = cljs.core.nth.call(null,vec__39570,(0),null);
var b = cljs.core.nth.call(null,vec__39570,(1),null);
var c = cljs.core.nth.call(null,vec__39570,(2),null);
var ab = thi.ng.math.core.mix.call(null,a,b);
var bc = thi.ng.math.core.mix.call(null,b,c);
var ca = thi.ng.math.core.mix.call(null,c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.utils.tessellate_3 = (function thi$ng$geom$utils$tessellate_3(points){
var pred__39579 = cljs.core._EQ__EQ_;
var expr__39580 = cljs.core.count.call(null,points);
if(cljs.core.truth_(pred__39579.call(null,(3),expr__39580))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_(pred__39579.call(null,(4),expr__39580))){
var vec__39582 = points;
var a = cljs.core.nth.call(null,vec__39582,(0),null);
var b = cljs.core.nth.call(null,vec__39582,(1),null);
var c = cljs.core.nth.call(null,vec__39582,(2),null);
var d = cljs.core.nth.call(null,vec__39582,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.call(null,points);
}
}
});
thi.ng.geom.utils.tessellate_max4 = (function thi$ng$geom$utils$tessellate_max4(points){
if((cljs.core.count.call(null,points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.call(null,points);
}
});
thi.ng.geom.utils.tessellate_face = (function thi$ng$geom$utils$tessellate_face(tess_fn){
return (function (p__39589){
var vec__39590 = p__39589;
var verts = cljs.core.nth.call(null,vec__39590,(0),null);
var attribs = cljs.core.nth.call(null,vec__39590,(1),null);
var verts__$1 = tess_fn.call(null,verts);
var attribs__$1 = cljs.core.reduce_kv.call(null,((function (verts__$1,vec__39590,verts,attribs){
return (function (acc,k,v){
return cljs.core.assoc.call(null,acc,k,tess_fn.call(null,v));
});})(verts__$1,vec__39590,verts,attribs))
,cljs.core.PersistentArrayMap.EMPTY,attribs);
return cljs.core.map_indexed.call(null,((function (verts__$1,attribs__$1,vec__39590,verts,attribs){
return (function (i,verts__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts__$2,cljs.core.reduce_kv.call(null,((function (verts__$1,attribs__$1,vec__39590,verts,attribs){
return (function (acc,k,v){
return cljs.core.assoc.call(null,acc,k,cljs.core.nth.call(null,v,i));
});})(verts__$1,attribs__$1,vec__39590,verts,attribs))
,cljs.core.PersistentArrayMap.EMPTY,attribs__$1)], null);
});})(verts__$1,attribs__$1,vec__39590,verts,attribs))
,verts__$1);
});
});
thi.ng.geom.utils.ortho_normal = (function thi$ng$geom$utils$ortho_normal(var_args){
var args39593 = [];
var len__25893__auto___39600 = arguments.length;
var i__25894__auto___39601 = (0);
while(true){
if((i__25894__auto___39601 < len__25893__auto___39600)){
args39593.push((arguments[i__25894__auto___39601]));

var G__39602 = (i__25894__auto___39601 + (1));
i__25894__auto___39601 = G__39602;
continue;
} else {
}
break;
}

var G__39595 = args39593.length;
switch (G__39595) {
case 1:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39593.length)].join('')));

}
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__39596){
var vec__39597 = p__39596;
var a = cljs.core.nth.call(null,vec__39597,(0),null);
var b = cljs.core.nth.call(null,vec__39597,(1),null);
var c = cljs.core.nth.call(null,vec__39597,(2),null);
return thi.ng.math.core.normalize.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)));
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.math.core.normalize.call(null,thi.ng.math.core.cross.call(null,a,b));
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)));
});

thi.ng.geom.utils.ortho_normal.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.norm_sign2 = (function thi$ng$geom$utils$norm_sign2(p__39604,p__39605,p__39606){
var vec__39616 = p__39604;
var ax = cljs.core.nth.call(null,vec__39616,(0),null);
var ay = cljs.core.nth.call(null,vec__39616,(1),null);
var vec__39619 = p__39605;
var bx = cljs.core.nth.call(null,vec__39619,(0),null);
var by = cljs.core.nth.call(null,vec__39619,(1),null);
var vec__39622 = p__39606;
var cx = cljs.core.nth.call(null,vec__39622,(0),null);
var cy = cljs.core.nth.call(null,vec__39622,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.utils.norm_sign3 = (function thi$ng$geom$utils$norm_sign3(a,b,c){
return thi.ng.math.core.mag.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)));
});
thi.ng.geom.utils.tri_area2 = (function thi$ng$geom$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign2.call(null,a,b,c));
});
thi.ng.geom.utils.tri_area3 = (function thi$ng$geom$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign3.call(null,a,b,c));
});
thi.ng.geom.utils.clockwise2_QMARK_ = (function thi$ng$geom$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.utils.norm_sign2.call(null,a,b,c) < (0));
});
thi.ng.geom.utils.clockwise3_QMARK_ = (function thi$ng$geom$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.math.core.dot.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)),n) > (0));
});
thi.ng.geom.utils.triangle_barycentric_coords = (function thi$ng$geom$utils$triangle_barycentric_coords(var_args){
var args39625 = [];
var len__25893__auto___39632 = arguments.length;
var i__25894__auto___39633 = (0);
while(true){
if((i__25894__auto___39633 < len__25893__auto___39632)){
args39625.push((arguments[i__25894__auto___39633]));

var G__39634 = (i__25894__auto___39633 + (1));
i__25894__auto___39633 = G__39634;
continue;
} else {
}
break;
}

var G__39627 = args39625.length;
switch (G__39627) {
case 2:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39625.length)].join('')));

}
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__39628,p){
var vec__39629 = p__39628;
var a = cljs.core.nth.call(null,vec__39629,(0),null);
var b = cljs.core.nth.call(null,vec__39629,(1),null);
var c = cljs.core.nth.call(null,vec__39629,(2),null);
return thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a));
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a));
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.math.core._.call(null,p,a);
var uu = thi.ng.math.core.mag_squared.call(null,u);
var vv = thi.ng.math.core.mag_squared.call(null,v);
var uv = thi.ng.math.core.dot.call(null,u,v);
var wu = thi.ng.math.core.dot.call(null,w,u);
var wv = thi.ng.math.core.dot.call(null,w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;

thi.ng.geom.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.utils.clockwise2_QMARK_.call(null,a,b,c))){
return ((thi.ng.geom.utils.norm_sign2.call(null,a,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,b,a,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,c,b,p) >= 0.0));
} else {
return ((thi.ng.geom.utils.norm_sign2.call(null,b,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,a,b,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,c,a,p) >= 0.0));
}
});
thi.ng.geom.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.math.core._.call(null,b,a);
var v = thi.ng.math.core._.call(null,c,a);
var n = thi.ng.geom.utils.ortho_normal.call(null,u,v);
var cl = (thi.ng.math.core.dot.call(null,n,p) - thi.ng.math.core.dot.call(null,n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,cl))){
var vec__39639 = thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,p,u,v);
var u__$1 = cljs.core.nth.call(null,vec__39639,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__39639,(1),null);
var w = cljs.core.nth.call(null,vec__39639,(2),null);
var and__24806__auto__ = (u__$1 >= 0.0);
if(and__24806__auto__){
var and__24806__auto____$1 = (w >= 0.0);
if(and__24806__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
} else {
return null;
}
});
thi.ng.geom.utils.tessellating_transducer = (function thi$ng$geom$utils$tessellating_transducer(f){
return cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.utils.tessellate_with_first),cljs.core.map.call(null,f));
});
thi.ng.geom.utils.area_xf = thi.ng.geom.utils.tessellating_transducer.call(null,(function (p1__39642_SHARP_){
return thi.ng.math.core.abs_STAR_.call(null,cljs.core.apply.call(null,thi.ng.geom.utils.tri_area3,p1__39642_SHARP_));
}));
thi.ng.geom.utils.volume_xf = thi.ng.geom.utils.tessellating_transducer.call(null,(function (p1__39643_SHARP_){
return thi.ng.math.core.dot.call(null,p1__39643_SHARP_.call(null,(0)),thi.ng.math.core.cross.call(null,p1__39643_SHARP_.call(null,(1)),p1__39643_SHARP_.call(null,(2))));
}));
thi.ng.geom.utils.total_area_3d = (function thi$ng$geom$utils$total_area_3d(var_args){
var args39644 = [];
var len__25893__auto___39647 = arguments.length;
var i__25894__auto___39648 = (0);
while(true){
if((i__25894__auto___39648 < len__25893__auto___39647)){
args39644.push((arguments[i__25894__auto___39648]));

var G__39649 = (i__25894__auto___39648 + (1));
i__25894__auto___39648 = G__39649;
continue;
} else {
}
break;
}

var G__39646 = args39644.length;
switch (G__39646) {
case 1:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39644.length)].join('')));

}
});

thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return cljs.core.transduce.call(null,thi.ng.geom.utils.area_xf,cljs.core._PLUS_,faces);
});

thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xf,thi.ng.geom.utils.area_xf),cljs.core._PLUS_,faces);
});

thi.ng.geom.utils.total_area_3d.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.total_volume = (function thi$ng$geom$utils$total_volume(var_args){
var args39651 = [];
var len__25893__auto___39654 = arguments.length;
var i__25894__auto___39655 = (0);
while(true){
if((i__25894__auto___39655 < len__25893__auto___39654)){
args39651.push((arguments[i__25894__auto___39655]));

var G__39656 = (i__25894__auto___39655 + (1));
i__25894__auto___39655 = G__39656;
continue;
} else {
}
break;
}

var G__39653 = args39651.length;
switch (G__39653) {
case 1:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39651.length)].join('')));

}
});

thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return (cljs.core.transduce.call(null,thi.ng.geom.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return (cljs.core.transduce.call(null,cljs.core.comp.call(null,xf,thi.ng.geom.utils.volume_xf),cljs.core._PLUS_,faces) / 6.0);
});

thi.ng.geom.utils.total_volume.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.bounding_rect = (function thi$ng$geom$utils$bounding_rect(points){
var vec__39661 = thi.ng.geom.utils.bounding_rect_raw.call(null,points);
var p = cljs.core.nth.call(null,vec__39661,(0),null);
var size = cljs.core.nth.call(null,vec__39661,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_box = (function thi$ng$geom$utils$bounding_box(points){
var vec__39667 = thi.ng.geom.utils.bounding_box_raw.call(null,points);
var p = cljs.core.nth.call(null,vec__39667,(0),null);
var size = cljs.core.nth.call(null,vec__39667,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_circle = (function thi$ng$geom$utils$bounding_circle(var_args){
var args39670 = [];
var len__25893__auto___39676 = arguments.length;
var i__25894__auto___39677 = (0);
while(true){
if((i__25894__auto___39677 < len__25893__auto___39676)){
args39670.push((arguments[i__25894__auto___39677]));

var G__39678 = (i__25894__auto___39677 + (1));
i__25894__auto___39677 = G__39678;
continue;
} else {
}
break;
}

var G__39672 = args39670.length;
switch (G__39672) {
case 1:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39670.length)].join('')));

}
});

thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_circle.call(null,thi.ng.geom.utils.centroid.call(null,points),points);
});

thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__39673 = thi.ng.geom.utils.radial_bounds.call(null,thi.ng.geom.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.call(null,vec__39673,(0),null);
var r = cljs.core.nth.call(null,vec__39673,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r));
});

thi.ng.geom.utils.bounding_circle.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.bounding_sphere = (function thi$ng$geom$utils$bounding_sphere(var_args){
var args39680 = [];
var len__25893__auto___39686 = arguments.length;
var i__25894__auto___39687 = (0);
while(true){
if((i__25894__auto___39687 < len__25893__auto___39686)){
args39680.push((arguments[i__25894__auto___39687]));

var G__39688 = (i__25894__auto___39687 + (1));
i__25894__auto___39687 = G__39688;
continue;
} else {
}
break;
}

var G__39682 = args39680.length;
switch (G__39682) {
case 1:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39680.length)].join('')));

}
});

thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.utils.centroid.call(null,points),points);
});

thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__39683 = thi.ng.geom.utils.radial_bounds.call(null,thi.ng.geom.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.call(null,vec__39683,(0),null);
var r = cljs.core.nth.call(null,vec__39683,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r));
});

thi.ng.geom.utils.bounding_sphere.cljs$lang$maxFixedArity = 2;

/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 *   union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.utils.coll_bounds = (function thi$ng$geom$utils$coll_bounds(coll){
return cljs.core.reduce.call(null,thi.ng.math.core.union,cljs.core.mapv.call(null,thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 *   repositions all items to fit into given bounds. Returns lazyseq of
 *   transformed entities. Does not support collections of mixed 2D/3D
 *   entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.utils.fit_all_into_bounds = (function thi$ng$geom$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.utils.coll_bounds.call(null,coll);
var s = cljs.core.reduce.call(null,cljs.core.min,thi.ng.math.core.div.call(null,cljs.core.get.call(null,bounds,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.call(null,b,new cljs.core.Keyword(null,"size","size",1098693007))));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center.call(null,thi.ng.geom.core.scale.call(null,b,s),thi.ng.geom.core.centroid.call(null,bounds));
return cljs.core.map.call(null,((function (b,s,b_SINGLEQUOTE_){
return (function (p1__39690_SHARP_){
return thi.ng.geom.core.scale_size.call(null,thi.ng.geom.core.center.call(null,p1__39690_SHARP_,thi.ng.geom.core.unmap_point.call(null,b_SINGLEQUOTE_,thi.ng.geom.core.map_point.call(null,b,thi.ng.geom.core.centroid.call(null,p1__39690_SHARP_)))),s);
});})(b,s,b_SINGLEQUOTE_))
,coll);
});
/**
 * Takes a target mesh, its add-face fn and a source mesh or face
 *   sequence. Adds faces to target mesh and returns it.
 */
thi.ng.geom.utils.into_mesh = (function thi$ng$geom$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.call(null,add_face,mesh,((((!((mesh_or_faces == null)))?(((false) || (mesh_or_faces.thi$ng$geom$core$IFaceAccess$))?true:(((!mesh_or_faces.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IFaceAccess,mesh_or_faces):false)):cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IFaceAccess,mesh_or_faces)))?thi.ng.geom.core.faces.call(null,mesh_or_faces,true):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 *   new mesh. Thus f should return a seq of raw faces (i.e. each face as
 *   2-elem vector of [verts attribs]. Returns new mesh.
 */
thi.ng.geom.utils.map_mesh = (function thi$ng$geom$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into.call(null,thi.ng.geom.core.clear_STAR_.call(null,mesh),cljs.core.mapcat.call(null,f,thi.ng.geom.core.faces.call(null,mesh,true)));
});
/**
 * Takes a mesh, its add-face fn and a vertex transformation fn.
 *   Transforms all mesh vertices and returns new mesh.
 */
thi.ng.geom.utils.transform_mesh = (function thi$ng$geom$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = ((((!((tx == null)))?(((false) || (tx.thi$ng$geom$core$IVectorTransform$))?true:(((!tx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IVectorTransform,tx):false)):cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IVectorTransform,tx)))?(function (v){
return thi.ng.geom.core.transform_vector.call(null,tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tx__$1){
return (function (acc,v){
return cljs.core.assoc_BANG_.call(null,acc,v,tx__$1.call(null,v));
});})(tx__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices.call(null,mesh)));
return cljs.core.reduce.call(null,((function (tx__$1,verts_SINGLEQUOTE_){
return (function (mesh__$1,p__39699){
var vec__39700 = p__39699;
var fv = cljs.core.nth.call(null,vec__39700,(0),null);
var fa = cljs.core.nth.call(null,vec__39700,(1),null);
return add_face.call(null,mesh__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,verts_SINGLEQUOTE_,fv),fa], null));
});})(tx__$1,verts_SINGLEQUOTE_))
,thi.ng.geom.core.clear_STAR_.call(null,mesh),thi.ng.geom.core.faces.call(null,mesh,true));
});

//# sourceMappingURL=utils.js.map?rel=1530813193106