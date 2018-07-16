// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.strf.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = thi.ng.strf.core.float$.call(null,(2));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p))),cljs.core.str(","),cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))))].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__40183 = (n | (0));
switch (G__40183) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.call(null," ",cljs.core.repeat.call(null,n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * @interface
 */
thi.ng.geom.svg.core.ISVGConvert = function(){};

thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$svg$core$ISVGConvert$as_svg$arity$2 == null)))){
return _.thi$ng$geom$svg$core$ISVGConvert$as_svg$arity$2(_,opts);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_,opts);
} else {
var m__25482__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"ISVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__4655__auto__ = cljs.core.get.call(null,attribs,id);
if(cljs.core.truth_(temp__4655__auto__)){
var att = temp__4655__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.call(null,attribs,id,cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__4655__auto__ = cljs.core.get.call(null,attribs,id);
if(cljs.core.truth_(temp__4655__auto__)){
var mat = temp__4655__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__40188 = mat;
var a = cljs.core.nth.call(null,vec__40188,(0),null);
var c = cljs.core.nth.call(null,vec__40188,(1),null);
var e = cljs.core.nth.call(null,vec__40188,(2),null);
var b = cljs.core.nth.call(null,vec__40188,(3),null);
var d = cljs.core.nth.call(null,vec__40188,(4),null);
var f = cljs.core.nth.call(null,vec__40188,(5),null);
return cljs.core.assoc.call(null,attribs,id,cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$.call(null,attribs);
var ks = cljs.core.keys.call(null,attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__40191 = ((cljs.core._EQ_.call(null,"__",cljs.core.subs.call(null,cljs.core.name.call(null,cljs.core.first.call(null,ks)),(0),(2))))?cljs.core.dissoc_BANG_.call(null,acc,cljs.core.first.call(null,ks)):acc);
var G__40192 = cljs.core.next.call(null,ks);
acc = G__40191;
ks = G__40192;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq.call(null,attribs)){
return cljs.core.into.call(null,thi.ng.geom.svg.core.matrix_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.filter_attribs.call(null,attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__25900__auto__ = [];
var len__25893__auto___40195 = arguments.length;
var i__25894__auto___40196 = (0);
while(true){
if((i__25894__auto___40196 < len__25893__auto___40195)){
args__25900__auto__.push((arguments[i__25894__auto___40196]));

var G__40197 = (i__25894__auto___40196 + (1));
i__25894__auto___40196 = G__40197;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((1) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25901__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq40193){
var G__40194 = cljs.core.first.call(null,seq40193);
var seq40193__$1 = cljs.core.next.call(null,seq40193);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__40194,seq40193__$1);
});

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__25900__auto__ = [];
var len__25893__auto___40199 = arguments.length;
var i__25894__auto___40200 = (0);
while(true){
if((i__25894__auto___40200 < len__25893__auto___40199)){
args__25900__auto__.push((arguments[i__25894__auto___40200]));

var G__40201 = (i__25894__auto___40200 + (1));
i__25894__auto___40200 = G__40201;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq40198){
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40198));
});

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__40202){
var vec__40206 = p__40202;
var pos = cljs.core.nth.call(null,vec__40206,(0),null);
var col = cljs.core.nth.call(null,vec__40206,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__25900__auto__ = [];
var len__25893__auto___40212 = arguments.length;
var i__25894__auto___40213 = (0);
while(true){
if((i__25894__auto___40213 < len__25893__auto___40212)){
args__25900__auto__.push((arguments[i__25894__auto___40213]));

var G__40214 = (i__25894__auto___40213 + (1));
i__25894__auto___40213 = G__40214;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((2) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25901__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq40209){
var G__40210 = cljs.core.first.call(null,seq40209);
var seq40209__$1 = cljs.core.next.call(null,seq40209);
var G__40211 = cljs.core.first.call(null,seq40209__$1);
var seq40209__$2 = cljs.core.next.call(null,seq40209__$1);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__40210,G__40211,seq40209__$2);
});

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__25900__auto__ = [];
var len__25893__auto___40218 = arguments.length;
var i__25894__auto___40219 = (0);
while(true){
if((i__25894__auto___40219 < len__25893__auto___40218)){
args__25900__auto__.push((arguments[i__25894__auto___40219]));

var G__40220 = (i__25894__auto___40219 + (1));
i__25894__auto___40219 = G__40220;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((2) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25901__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq40215){
var G__40216 = cljs.core.first.call(null,seq40215);
var seq40215__$1 = cljs.core.next.call(null,seq40215);
var G__40217 = cljs.core.first.call(null,seq40215__$1);
var seq40215__$2 = cljs.core.next.call(null,seq40215__$1);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__40216,G__40217,seq40215__$2);
});

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__25900__auto__ = [];
var len__25893__auto___40223 = arguments.length;
var i__25894__auto___40224 = (0);
while(true){
if((i__25894__auto___40224 < len__25893__auto___40223)){
args__25900__auto__.push((arguments[i__25894__auto___40224]));

var G__40225 = (i__25894__auto___40224 + (1));
i__25894__auto___40224 = G__40225;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((1) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25901__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq40221){
var G__40222 = cljs.core.first.call(null,seq40221);
var seq40221__$1 = cljs.core.next.call(null,seq40221);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(G__40222,seq40221__$1);
});

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args40226 = [];
var len__25893__auto___40229 = arguments.length;
var i__25894__auto___40230 = (0);
while(true){
if((i__25894__auto___40230 < len__25893__auto___40229)){
args40226.push((arguments[i__25894__auto___40230]));

var G__40231 = (i__25894__auto___40230 + (1));
i__25894__auto___40230 = G__40231;
continue;
} else {
}
break;
}

var G__40228 = args40226.length;
switch (G__40228) {
case 1:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40226.length)].join('')));

}
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1 = (function (segments){
return thi.ng.geom.svg.core.path.call(null,segments,null);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2 = (function (segments,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,thi.ng.strf.core.format,cljs.core.mapcat.call(null,cljs.core.comp.call(null,thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),segments),cljs.core.mapcat.call(null,cljs.core.rest,segments))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args40233 = [];
var len__25893__auto___40236 = arguments.length;
var i__25894__auto___40237 = (0);
while(true){
if((i__25894__auto___40237 < len__25893__auto___40236)){
args40233.push((arguments[i__25894__auto___40237]));

var G__40238 = (i__25894__auto___40237 + (1));
i__25894__auto___40237 = G__40238;
continue;
} else {
}
break;
}

var G__40235 = args40233.length;
switch (G__40235) {
case 2:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40233.length)].join('')));

}
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2 = (function (p,txt){
return thi.ng.geom.svg.core.text.call(null,p,txt,null);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3 = (function (p,txt,attribs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1)))], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args40240 = [];
var len__25893__auto___40243 = arguments.length;
var i__25894__auto___40244 = (0);
while(true){
if((i__25894__auto___40244 < len__25893__auto___40243)){
args40240.push((arguments[i__25894__auto___40244]));

var G__40245 = (i__25894__auto___40244 + (1));
i__25894__auto___40244 = G__40245;
continue;
} else {
}
break;
}

var G__40242 = args40240.length;
switch (G__40242) {
case 2:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40240.length)].join('')));

}
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2 = (function (p,radius){
return thi.ng.geom.svg.core.circle.call(null,p,radius,null);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3 = (function (p,radius,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.vector.vec2.call(null,radius);
var p = thi.ng.math.core._PLUS_.call(null,thi.ng.geom.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,cljs.core.first.call(null,radius__$1),theta1)));
var q = thi.ng.math.core._PLUS_.call(null,thi.ng.geom.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,radius__$1,(1)),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args40247 = [];
var len__25893__auto___40250 = arguments.length;
var i__25894__auto___40251 = (0);
while(true){
if((i__25894__auto___40251 < len__25893__auto___40250)){
args40247.push((arguments[i__25894__auto___40251]));

var G__40252 = (i__25894__auto___40251 + (1));
i__25894__auto___40251 = G__40252;
continue;
} else {
}
break;
}

var G__40249 = args40247.length;
switch (G__40249) {
case 6:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40247.length)].join('')));

}
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
return thi.ng.geom.svg.core.arc.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,null);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,attribs){
return thi.ng.geom.svg.core.path.call(null,thi.ng.geom.svg.core.arc_segment.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),attribs);
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = 7;

thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args40254 = [];
var len__25893__auto___40257 = arguments.length;
var i__25894__auto___40258 = (0);
while(true){
if((i__25894__auto___40258 < len__25893__auto___40257)){
args40254.push((arguments[i__25894__auto___40258]));

var G__40259 = (i__25894__auto___40258 + (1));
i__25894__auto___40258 = G__40259;
continue;
} else {
}
break;
}

var G__40256 = args40254.length;
switch (G__40256) {
case 3:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40254.length)].join('')));

}
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3 = (function (p,w,h){
return thi.ng.geom.svg.core.rect.call(null,p,w,h,null);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4 = (function (p,w,h,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))),new cljs.core.Keyword(null,"width","width",-384071477),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,w),new cljs.core.Keyword(null,"height","height",1025178622),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,h)], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args40261 = [];
var len__25893__auto___40264 = arguments.length;
var i__25894__auto___40265 = (0);
while(true){
if((i__25894__auto___40265 < len__25893__auto___40264)){
args40261.push((arguments[i__25894__auto___40265]));

var G__40266 = (i__25894__auto___40265 + (1));
i__25894__auto___40265 = G__40266;
continue;
} else {
}
break;
}

var G__40263 = args40261.length;
switch (G__40263) {
case 2:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40261.length)].join('')));

}
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.svg.core.line.call(null,a,b,null);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3 = (function (a,b,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,a)),new cljs.core.Keyword(null,"y1","y1",589123466),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,a,(1))),new cljs.core.Keyword(null,"x2","x2",-1362513475),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,b)),new cljs.core.Keyword(null,"y2","y2",-718691301),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,b,(1)))], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args40268 = [];
var len__25893__auto___40271 = arguments.length;
var i__25894__auto___40272 = (0);
while(true){
if((i__25894__auto___40272 < len__25893__auto___40271)){
args40268.push((arguments[i__25894__auto___40272]));

var G__40273 = (i__25894__auto___40272 + (1));
i__25894__auto___40272 = G__40273;
continue;
} else {
}
break;
}

var G__40270 = args40268.length;
switch (G__40270) {
case 4:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40268.length)].join('')));

}
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4 = (function (p,q,start,end){
return thi.ng.geom.svg.core.line_decorated.call(null,p,q,start,end,null);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5 = (function (p,q,start,end,attribs){
var x__25652__auto__ = thi.ng.geom.svg.core.line.call(null,p,q,attribs);
return cljs.core._conj.call(null,(function (){var x__25652__auto____$1 = (cljs.core.truth_(start)?start.call(null,q,p,(0),attribs):null);
return cljs.core._conj.call(null,(function (){var x__25652__auto____$2 = (cljs.core.truth_(end)?end.call(null,p,q,(0),attribs):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto____$2);
})(),x__25652__auto____$1);
})(),x__25652__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args40275 = [];
var len__25893__auto___40278 = arguments.length;
var i__25894__auto___40279 = (0);
while(true){
if((i__25894__auto___40279 < len__25893__auto___40278)){
args40275.push((arguments[i__25894__auto___40279]));

var G__40280 = (i__25894__auto___40279 + (1));
i__25894__auto___40279 = G__40280;
continue;
} else {
}
break;
}

var G__40277 = args40275.length;
switch (G__40277) {
case 1:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40275.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.line_strip.call(null,points,null);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args40282 = [];
var len__25893__auto___40293 = arguments.length;
var i__25894__auto___40294 = (0);
while(true){
if((i__25894__auto___40294 < len__25893__auto___40293)){
args40282.push((arguments[i__25894__auto___40294]));

var G__40295 = (i__25894__auto___40294 + (1));
i__25894__auto___40294 = G__40295;
continue;
} else {
}
break;
}

var G__40284 = args40282.length;
switch (G__40284) {
case 4:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40282.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4 = (function (points,start,seg,end){
return thi.ng.geom.svg.core.line_strip_decorated.call(null,points,start,seg,end,null);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5 = (function (points,start,seg,end,attribs){
var n = (cljs.core.count.call(null,points) - (1));
var x__25652__auto__ = thi.ng.geom.svg.core.line_strip.call(null,points,attribs);
return cljs.core._conj.call(null,(function (){var x__25652__auto____$1 = (cljs.core.truth_(start)?start.call(null,cljs.core.nth.call(null,points,(1)),cljs.core.first.call(null,points),(0),attribs):null);
return cljs.core._conj.call(null,(function (){var x__25652__auto____$2 = (cljs.core.truth_(seg)?cljs.core.map_indexed.call(null,((function (x__25652__auto____$1,x__25652__auto__,n){
return (function (i,p__40289){
var vec__40290 = p__40289;
var p = cljs.core.nth.call(null,vec__40290,(0),null);
var q = cljs.core.nth.call(null,vec__40290,(1),null);
return seg.call(null,p,q,i,attribs);
});})(x__25652__auto____$1,x__25652__auto__,n))
,cljs.core.partition.call(null,(2),(1),points)):null);
return cljs.core._conj.call(null,(function (){var x__25652__auto____$3 = (cljs.core.truth_(end)?end.call(null,points.call(null,(n - (1))),cljs.core.peek.call(null,points),n,attribs):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto____$3);
})(),x__25652__auto____$2);
})(),x__25652__auto____$1);
})(),x__25652__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args40297 = [];
var len__25893__auto___40300 = arguments.length;
var i__25894__auto___40301 = (0);
while(true){
if((i__25894__auto___40301 < len__25893__auto___40300)){
args40297.push((arguments[i__25894__auto___40301]));

var G__40302 = (i__25894__auto___40301 + (1));
i__25894__auto___40301 = G__40302;
continue;
} else {
}
break;
}

var G__40299 = args40297.length;
switch (G__40299) {
case 1:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40297.length)].join('')));

}
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.polygon.call(null,points,null);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args40304 = [];
var len__25893__auto___40307 = arguments.length;
var i__25894__auto___40308 = (0);
while(true){
if((i__25894__auto___40308 < len__25893__auto___40307)){
args40304.push((arguments[i__25894__auto___40308]));

var G__40309 = (i__25894__auto___40308 + (1));
i__25894__auto___40308 = G__40309;
continue;
} else {
}
break;
}

var G__40306 = args40304.length;
switch (G__40306) {
case 1:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40304.length)].join('')));

}
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1 = (function (id){
return thi.ng.geom.svg.core.instance.call(null,id,null);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2 = (function (id,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",[cljs.core.str("#"),cljs.core.str(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args40311 = [];
var len__25893__auto___40318 = arguments.length;
var i__25894__auto___40319 = (0);
while(true){
if((i__25894__auto___40319 < len__25893__auto___40318)){
args40311.push((arguments[i__25894__auto___40319]));

var G__40320 = (i__25894__auto___40319 + (1));
i__25894__auto___40319 = G__40320;
continue;
} else {
}
break;
}

var G__40313 = args40311.length;
switch (G__40313) {
case 3:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40311.length)].join('')));

}
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3 = (function (len,theta,solid_QMARK_){
return thi.ng.geom.svg.core.arrow_head.call(null,len,theta,solid_QMARK_,null);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4 = (function (len,theta,solid_QMARK_,opts){
return (function() { 
var G__40322__delegate = function (p,q,idx,p__40314){
var vec__40315 = p__40314;
var attribs = cljs.core.nth.call(null,vec__40315,(0),null);
var q__$1 = thi.ng.geom.vector.vec2.call(null,q);
var d = thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,q__$1,p),len);
var x__25652__auto__ = (cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,(- theta))),q__$1,thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,theta))], null),cljs.core.merge.call(null,attribs,opts));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto__);
};
var G__40322 = function (p,q,idx,var_args){
var p__40314 = null;
if (arguments.length > 3) {
var G__40323__i = 0, G__40323__a = new Array(arguments.length -  3);
while (G__40323__i < G__40323__a.length) {G__40323__a[G__40323__i] = arguments[G__40323__i + 3]; ++G__40323__i;}
  p__40314 = new cljs.core.IndexedSeq(G__40323__a,0);
} 
return G__40322__delegate.call(this,p,q,idx,p__40314);};
G__40322.cljs$lang$maxFixedArity = 3;
G__40322.cljs$lang$applyTo = (function (arglist__40324){
var p = cljs.core.first(arglist__40324);
arglist__40324 = cljs.core.next(arglist__40324);
var q = cljs.core.first(arglist__40324);
arglist__40324 = cljs.core.next(arglist__40324);
var idx = cljs.core.first(arglist__40324);
var p__40314 = cljs.core.rest(arglist__40324);
return G__40322__delegate(p,q,idx,p__40314);
});
G__40322.cljs$core$IFn$_invoke$arity$variadic = G__40322__delegate;
return G__40322;
})()
;
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args40326 = [];
var len__25893__auto___40336 = arguments.length;
var i__25894__auto___40337 = (0);
while(true){
if((i__25894__auto___40337 < len__25893__auto___40336)){
args40326.push((arguments[i__25894__auto___40337]));

var G__40338 = (i__25894__auto___40337 + (1));
i__25894__auto___40337 = G__40338;
continue;
} else {
}
break;
}

var G__40328 = args40326.length;
switch (G__40328) {
case 0:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40326.length)].join('')));

}
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.svg.core.line_label.call(null,null);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1 = (function (p__40329){
var map__40330 = p__40329;
var map__40330__$1 = ((((!((map__40330 == null)))?((((map__40330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40330):map__40330);
var opts = map__40330__$1;
var __rotate_QMARK_ = cljs.core.get.call(null,map__40330__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.call(null,map__40330__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),new cljs.core.Keyword(null,"__offset","__offset",-9560190)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),((function (map__40330,map__40330__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__40325_SHARP_){
var or__24818__auto__ = p1__40325_SHARP_;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return "middle";
}
});})(map__40330,map__40330__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,map__40330,map__40330__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__40340__delegate = function (p,q,idx,p__40332){
var vec__40333 = p__40332;
var attribs = cljs.core.nth.call(null,vec__40333,(0),null);
var temp__4655__auto__ = cljs.core.get_in.call(null,attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__4655__auto__)){
var label = temp__4655__auto__;
var p__$1 = thi.ng.geom.vector.vec2.call(null,p);
var m = thi.ng.math.core._PLUS_.call(null,thi.ng.math.core.mix.call(null,p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str(thi.ng.math.core.degrees.call(null,thi.ng.geom.core.heading.call(null,thi.ng.geom.core.normal.call(null,thi.ng.math.core._.call(null,p__$1,q))))),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,m)),cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,m,(1))),cljs.core.str(")")].join('')):opts__$1);
var x__25652__auto__ = thi.ng.geom.svg.core.text.call(null,m,label,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto__);
} else {
return null;
}
};
var G__40340 = function (p,q,idx,var_args){
var p__40332 = null;
if (arguments.length > 3) {
var G__40341__i = 0, G__40341__a = new Array(arguments.length -  3);
while (G__40341__i < G__40341__a.length) {G__40341__a[G__40341__i] = arguments[G__40341__i + 3]; ++G__40341__i;}
  p__40332 = new cljs.core.IndexedSeq(G__40341__a,0);
} 
return G__40340__delegate.call(this,p,q,idx,p__40332);};
G__40340.cljs$lang$maxFixedArity = 3;
G__40340.cljs$lang$applyTo = (function (arglist__40342){
var p = cljs.core.first(arglist__40342);
arglist__40342 = cljs.core.next(arglist__40342);
var q = cljs.core.first(arglist__40342);
arglist__40342 = cljs.core.next(arglist__40342);
var idx = cljs.core.first(arglist__40342);
var p__40332 = cljs.core.rest(arglist__40342);
return G__40340__delegate(p,q,idx,p__40332);
});
G__40340.cljs$core$IFn$_invoke$arity$variadic = G__40340__delegate;
return G__40340;
})()
;
;})(opts__$1,map__40330,map__40330__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = 1;

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__25900__auto__ = [];
var len__25893__auto___40348 = arguments.length;
var i__25894__auto___40349 = (0);
while(true){
if((i__25894__auto___40349 < len__25893__auto___40348)){
args__25900__auto__.push((arguments[i__25894__auto___40349]));

var G__40350 = (i__25894__auto___40349 + (1));
i__25894__auto___40349 = G__40350;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__40351__delegate = function (p,q,idx,p__40344){
var vec__40345 = p__40344;
var attribs = cljs.core.nth.call(null,vec__40345,(0),null);
return cljs.core.reduce.call(null,((function (vec__40345,attribs){
return (function (acc,f){
return cljs.core.concat.call(null,acc,f.call(null,p,q,idx,attribs));
});})(vec__40345,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__40351 = function (p,q,idx,var_args){
var p__40344 = null;
if (arguments.length > 3) {
var G__40352__i = 0, G__40352__a = new Array(arguments.length -  3);
while (G__40352__i < G__40352__a.length) {G__40352__a[G__40352__i] = arguments[G__40352__i + 3]; ++G__40352__i;}
  p__40344 = new cljs.core.IndexedSeq(G__40352__a,0);
} 
return G__40351__delegate.call(this,p,q,idx,p__40344);};
G__40351.cljs$lang$maxFixedArity = 3;
G__40351.cljs$lang$applyTo = (function (arglist__40353){
var p = cljs.core.first(arglist__40353);
arglist__40353 = cljs.core.next(arglist__40353);
var q = cljs.core.first(arglist__40353);
arglist__40353 = cljs.core.next(arglist__40353);
var idx = cljs.core.first(arglist__40353);
var p__40344 = cljs.core.rest(arglist__40353);
return G__40351__delegate(p,q,idx,p__40344);
});
G__40351.cljs$core$IFn$_invoke$arity$variadic = G__40351__delegate;
return G__40351;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq40343){
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40343));
});


//# sourceMappingURL=core.js.map?rel=1530813194978