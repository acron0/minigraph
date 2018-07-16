// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.ndarray.contours');
goog.require('cljs.core');
goog.require('thi.ng.ndarray.core');
goog.require('thi.ng.typedarrays.core');
thi.ng.ndarray.contours.level_crossing = (function thi$ng$ndarray$contours$level_crossing(offset,a,b,level){
var da = (a - level);
var db = (b - level);
if(!(cljs.core._EQ_.call(null,(da >= 0.0),(db >= 0.0)))){
return (offset + (0.5 + (0.5 * ((da + db) / (da - db)))));
} else {
return null;
}
});
thi.ng.ndarray.contours.level_crossings1d = (function thi$ng$ndarray$contours$level_crossings1d(mat,shape,level){
var iter__25598__auto__ = (function thi$ng$ndarray$contours$level_crossings1d_$_iter__40360(s__40361){
return (new cljs.core.LazySeq(null,(function (){
var s__40361__$1 = s__40361;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40361__$1);
if(temp__4657__auto__){
var s__40361__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40361__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__40361__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__40363 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__40362 = (0);
while(true){
if((i__40362 < size__25597__auto__)){
var x = cljs.core._nth.call(null,c__25596__auto__,i__40362);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
cljs.core.chunk_append.call(null,b__40363,x_SINGLEQUOTE_);

var G__40364 = (i__40362 + (1));
i__40362 = G__40364;
continue;
} else {
var G__40365 = (i__40362 + (1));
i__40362 = G__40365;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40363),thi$ng$ndarray$contours$level_crossings1d_$_iter__40360.call(null,cljs.core.chunk_rest.call(null,s__40361__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40363),null);
}
} else {
var x = cljs.core.first.call(null,s__40361__$2);
var x_SINGLEQUOTE_ = thi.ng.ndarray.contours.level_crossing.call(null,x,thi.ng.ndarray.core.get_at.call(null,mat,x),thi.ng.ndarray.core.get_at.call(null,mat,(x + (1))),level);
if(cljs.core.truth_(x_SINGLEQUOTE_)){
return cljs.core.cons.call(null,x_SINGLEQUOTE_,thi$ng$ndarray$contours$level_crossings1d_$_iter__40360.call(null,cljs.core.rest.call(null,s__40361__$2)));
} else {
var G__40366 = cljs.core.rest.call(null,s__40361__$2);
s__40361__$1 = G__40366;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25598__auto__.call(null,cljs.core.range.call(null,(((typeof shape === 'number')?shape:cljs.core.first.call(null,shape)) - (1))));
});
thi.ng.ndarray.contours.level_crossings2d_x = (function thi$ng$ndarray$contours$level_crossings2d_x(var_args){
var args40368 = [];
var len__25893__auto___40375 = arguments.length;
var i__25894__auto___40376 = (0);
while(true){
if((i__25894__auto___40376 < len__25893__auto___40375)){
args40368.push((arguments[i__25894__auto___40376]));

var G__40377 = (i__25894__auto___40376 + (1));
i__25894__auto___40376 = G__40377;
continue;
} else {
}
break;
}

var G__40370 = args40368.length;
switch (G__40370) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40368.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__40371,level){
var vec__40372 = p__40371;
var sy = cljs.core.nth.call(null,vec__40372,(0),null);
var sx = cljs.core.nth.call(null,vec__40372,(1),null);
return cljs.core.mapcat.call(null,((function (vec__40372,sy,sx){
return (function (y){
return cljs.core.map.call(null,((function (vec__40372,sy,sx){
return (function (p1__40367_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[y,p1__40367_SHARP_],null));
});})(vec__40372,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,y,null),sx,level));
});})(vec__40372,sy,sx))
,cljs.core.range.call(null,sy));
});

thi.ng.ndarray.contours.level_crossings2d_x.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings2d_y = (function thi$ng$ndarray$contours$level_crossings2d_y(var_args){
var args40380 = [];
var len__25893__auto___40387 = arguments.length;
var i__25894__auto___40388 = (0);
while(true){
if((i__25894__auto___40388 < len__25893__auto___40387)){
args40380.push((arguments[i__25894__auto___40388]));

var G__40389 = (i__25894__auto___40388 + (1));
i__25894__auto___40388 = G__40389;
continue;
} else {
}
break;
}

var G__40382 = args40380.length;
switch (G__40382) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40380.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__40383,level){
var vec__40384 = p__40383;
var sy = cljs.core.nth.call(null,vec__40384,(0),null);
var sx = cljs.core.nth.call(null,vec__40384,(1),null);
return cljs.core.mapcat.call(null,((function (vec__40384,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__40384,sy,sx){
return (function (p1__40379_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__40379_SHARP_,x],null));
});})(vec__40384,sy,sx))
,thi.ng.ndarray.contours.level_crossings1d.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,x),sy,level));
});})(vec__40384,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings2d_y.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings2d = (function thi$ng$ndarray$contours$level_crossings2d(var_args){
var args40391 = [];
var len__25893__auto___40394 = arguments.length;
var i__25894__auto___40395 = (0);
while(true){
if((i__25894__auto___40395 < len__25893__auto___40394)){
args40391.push((arguments[i__25894__auto___40395]));

var G__40396 = (i__25894__auto___40395 + (1));
i__25894__auto___40395 = G__40396;
continue;
} else {
}
break;
}

var G__40393 = args40391.length;
switch (G__40393) {
case 2:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40391.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings2d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings2d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings2d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings2d_y.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings2d.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_x = (function thi$ng$ndarray$contours$level_crossings3d_x(var_args){
var args40399 = [];
var len__25893__auto___40406 = arguments.length;
var i__25894__auto___40407 = (0);
while(true){
if((i__25894__auto___40407 < len__25893__auto___40406)){
args40399.push((arguments[i__25894__auto___40407]));

var G__40408 = (i__25894__auto___40407 + (1));
i__25894__auto___40407 = G__40408;
continue;
} else {
}
break;
}

var G__40401 = args40399.length;
switch (G__40401) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40399.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__40402,level){
var vec__40403 = p__40402;
var sz = cljs.core.nth.call(null,vec__40403,(0),null);
var sy = cljs.core.nth.call(null,vec__40403,(1),null);
var sx = cljs.core.nth.call(null,vec__40403,(2),null);
return cljs.core.mapcat.call(null,((function (vec__40403,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__40403,sz,sy,sx){
return (function (p1__40398_SHARP_){
return cljs.core.cons.call(null,z,p1__40398_SHARP_);
});})(vec__40403,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_x.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__40403,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_x.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_y = (function thi$ng$ndarray$contours$level_crossings3d_y(var_args){
var args40411 = [];
var len__25893__auto___40418 = arguments.length;
var i__25894__auto___40419 = (0);
while(true){
if((i__25894__auto___40419 < len__25893__auto___40418)){
args40411.push((arguments[i__25894__auto___40419]));

var G__40420 = (i__25894__auto___40419 + (1));
i__25894__auto___40419 = G__40420;
continue;
} else {
}
break;
}

var G__40413 = args40411.length;
switch (G__40413) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40411.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__40414,level){
var vec__40415 = p__40414;
var sz = cljs.core.nth.call(null,vec__40415,(0),null);
var sy = cljs.core.nth.call(null,vec__40415,(1),null);
var sx = cljs.core.nth.call(null,vec__40415,(2),null);
return cljs.core.mapcat.call(null,((function (vec__40415,sz,sy,sx){
return (function (z){
return cljs.core.map.call(null,((function (vec__40415,sz,sy,sx){
return (function (p1__40410_SHARP_){
return cljs.core.cons.call(null,z,p1__40410_SHARP_);
});})(vec__40415,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,z,null,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sy,sx], null),level));
});})(vec__40415,sz,sy,sx))
,cljs.core.range.call(null,sz));
});

thi.ng.ndarray.contours.level_crossings3d_y.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d_z = (function thi$ng$ndarray$contours$level_crossings3d_z(var_args){
var args40423 = [];
var len__25893__auto___40430 = arguments.length;
var i__25894__auto___40431 = (0);
while(true){
if((i__25894__auto___40431 < len__25893__auto___40430)){
args40423.push((arguments[i__25894__auto___40431]));

var G__40432 = (i__25894__auto___40431 + (1));
i__25894__auto___40431 = G__40432;
continue;
} else {
}
break;
}

var G__40425 = args40423.length;
switch (G__40425) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40423.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__40426,level){
var vec__40427 = p__40426;
var sz = cljs.core.nth.call(null,vec__40427,(0),null);
var sy = cljs.core.nth.call(null,vec__40427,(1),null);
var sx = cljs.core.nth.call(null,vec__40427,(2),null);
return cljs.core.mapcat.call(null,((function (vec__40427,sz,sy,sx){
return (function (x){
return cljs.core.map.call(null,((function (vec__40427,sz,sy,sx){
return (function (p1__40422_SHARP_){
return cljs.core.conj.call(null,p1__40422_SHARP_,x);
});})(vec__40427,sz,sy,sx))
,thi.ng.ndarray.contours.level_crossings2d_y.call(null,thi.ng.ndarray.core.pick.call(null,mat,null,null,x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sz,sy], null),level));
});})(vec__40427,sz,sy,sx))
,cljs.core.range.call(null,sx));
});

thi.ng.ndarray.contours.level_crossings3d_z.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.level_crossings3d = (function thi$ng$ndarray$contours$level_crossings3d(var_args){
var args40434 = [];
var len__25893__auto___40437 = arguments.length;
var i__25894__auto___40438 = (0);
while(true){
if((i__25894__auto___40438 < len__25893__auto___40437)){
args40434.push((arguments[i__25894__auto___40438]));

var G__40439 = (i__25894__auto___40438 + (1));
i__25894__auto___40438 = G__40439;
continue;
} else {
}
break;
}

var G__40436 = args40434.length;
switch (G__40436) {
case 2:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40434.length)].join('')));

}
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$2 = (function (mat,level){
return thi.ng.ndarray.contours.level_crossings3d.call(null,mat,thi.ng.ndarray.core.shape.call(null,mat),level);
});

thi.ng.ndarray.contours.level_crossings3d.cljs$core$IFn$_invoke$arity$3 = (function (mat,shape,level){
return cljs.core.concat.call(null,thi.ng.ndarray.contours.level_crossings3d_x.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_y.call(null,mat,shape,level),thi.ng.ndarray.contours.level_crossings3d_z.call(null,mat,shape,level));
});

thi.ng.ndarray.contours.level_crossings3d.cljs$lang$maxFixedArity = 3;

thi.ng.ndarray.contours.edge_index_2d = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),null], null);
thi.ng.ndarray.contours.next_edges_2d = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
thi.ng.ndarray.contours.set_border_2d = (function thi$ng$ndarray$contours$set_border_2d(mat,x){
var vec__40444 = thi.ng.ndarray.core.shape.call(null,mat);
var h = cljs.core.nth.call(null,vec__40444,(0),null);
var w = cljs.core.nth.call(null,vec__40444,(1),null);
var h_SINGLEQUOTE_ = (h - (1));
var w_SINGLEQUOTE_ = (w - (1));
var l = thi.ng.ndarray.core.pick.call(null,mat,null,(0));
var r = thi.ng.ndarray.core.pick.call(null,mat,null,w_SINGLEQUOTE_);
var t = thi.ng.ndarray.core.pick.call(null,mat,(0),null);
var b = thi.ng.ndarray.core.pick.call(null,mat,h_SINGLEQUOTE_,null);
var i_40447 = w_SINGLEQUOTE_;
while(true){
if((i_40447 >= (0))){
thi.ng.ndarray.core.set_at.call(null,t,i_40447,x);

thi.ng.ndarray.core.set_at.call(null,b,i_40447,x);

var G__40448 = (i_40447 - (1));
i_40447 = G__40448;
continue;
} else {
}
break;
}

var i_40449 = h_SINGLEQUOTE_;
while(true){
if((i_40449 >= (0))){
thi.ng.ndarray.core.set_at.call(null,l,i_40449,x);

thi.ng.ndarray.core.set_at.call(null,r,i_40449,x);

var G__40450 = (i_40449 - (1));
i_40449 = G__40450;
continue;
} else {
}
break;
}

return mat;
});
thi.ng.ndarray.contours.encode_crossings_2d = (function thi$ng$ndarray$contours$encode_crossings_2d(src,isoval){
var out = thi.ng.ndarray.core.ndarray.call(null,new cljs.core.Keyword(null,"int8","int8",-1834023920),thi.ng.typedarrays.core.int8.call(null,thi.ng.ndarray.core.size.call(null,src)),thi.ng.ndarray.core.shape.call(null,src));
var iso_QMARK_ = ((function (out){
return (function (y,x,m){
if((thi.ng.ndarray.core.get_at.call(null,src,y,x) < isoval)){
return m;
} else {
return (0);
}
});})(out))
;
var pos = thi.ng.ndarray.core.position_seq.call(null,thi.ng.ndarray.core.truncate_h.call(null,src,(-1),(-1)));
while(true){
if(cljs.core.truth_(pos)){
var vec__40454 = cljs.core.first.call(null,pos);
var y = cljs.core.nth.call(null,vec__40454,(0),null);
var x = cljs.core.nth.call(null,vec__40454,(1),null);
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
thi.ng.ndarray.core.set_at.call(null,out,y,x,(((iso_QMARK_.call(null,y,x,(8)) | iso_QMARK_.call(null,y,x_SINGLEQUOTE_,(4))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x_SINGLEQUOTE_,(2))) | iso_QMARK_.call(null,y_SINGLEQUOTE_,x,(1))));

var G__40457 = cljs.core.next.call(null,pos);
pos = G__40457;
continue;
} else {
return out;
}
break;
}
});
thi.ng.ndarray.contours.mean_cell_value_2d = (function thi$ng$ndarray$contours$mean_cell_value_2d(src,y,x){
return (((thi.ng.ndarray.core.get_at.call(null,src,y,x) + thi.ng.ndarray.core.get_at.call(null,src,y,(x + (1)))) + (thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),x) + thi.ng.ndarray.core.get_at.call(null,src,(y + (1)),(x + (1))))) * 0.25);
});
thi.ng.ndarray.contours.process_saddle5 = (function thi$ng$ndarray$contours$process_saddle5(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
}
} else {
if(((3) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(7)], null);
}
}
});
thi.ng.ndarray.contours.process_saddle10 = (function thi$ng$ndarray$contours$process_saddle10(src,y,x,iso,from){
if((thi.ng.ndarray.contours.mean_cell_value_2d.call(null,src,y,x) > iso)){
if(((0) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(8)], null);
}
} else {
if(((2) === from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(11)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(14)], null);
}
}
});
thi.ng.ndarray.contours.mix2d = (function thi$ng$ndarray$contours$mix2d(src,y1,x1,y2,x2,iso){
var a = thi.ng.ndarray.core.get_at.call(null,src,y1,x1);
var b = thi.ng.ndarray.core.get_at.call(null,src,y2,x2);
if((a === b)){
return (0);
} else {
return ((a - iso) / (a - b));
}
});
thi.ng.ndarray.contours.contour_vertex_2d = (function thi$ng$ndarray$contours$contour_vertex_2d(src,y,x,to,iso){
var x_SINGLEQUOTE_ = (x + (1));
var y_SINGLEQUOTE_ = (y + (1));
var G__40459 = (to | (0));
switch (G__40459) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y,x_SINGLEQUOTE_,iso))], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x_SINGLEQUOTE_,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso)),x_SINGLEQUOTE_], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_SINGLEQUOTE_,(x + thi.ng.ndarray.contours.mix2d.call(null,src,y_SINGLEQUOTE_,x,y_SINGLEQUOTE_,x_SINGLEQUOTE_,iso))], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + thi.ng.ndarray.contours.mix2d.call(null,src,y,x,y_SINGLEQUOTE_,x,iso)),x], null);

break;
default:
return null;

}
});
thi.ng.ndarray.contours.find_contours_2d = (function thi$ng$ndarray$contours$find_contours_2d(src,isoval){
var vec__40474 = thi.ng.ndarray.core.shape.call(null,src);
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__40474,(0),null);
var w_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__40474,(1),null);
var h_SINGLEQUOTE___$1 = (h_SINGLEQUOTE_ - (1));
var w_SINGLEQUOTE___$1 = (w_SINGLEQUOTE_ - (1));
var coded = thi.ng.ndarray.contours.encode_crossings_2d.call(null,src,isoval);
var contours = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
var pos = thi.ng.ndarray.core.position_seq.call(null,coded);
var curr = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var to = null;
var p = null;
while(true){
if(cljs.core.truth_(pos)){
var from = to;
var vec__40477 = (cljs.core.truth_(p)?p:cljs.core.first.call(null,pos));
var y = cljs.core.nth.call(null,vec__40477,(0),null);
var x = cljs.core.nth.call(null,vec__40477,(1),null);
if(((x >= w_SINGLEQUOTE___$1)) || ((y >= h_SINGLEQUOTE___$1))){
var G__40487 = cljs.core.next.call(null,pos);
var G__40488 = curr;
var G__40489 = to;
var G__40490 = null;
pos = G__40487;
curr = G__40488;
to = G__40489;
p = G__40490;
continue;
} else {
var id = thi.ng.ndarray.core.get_at.call(null,coded,y,x);
var vec__40480 = (function (){var G__40483 = (id | (0));
switch (G__40483) {
case (5):
return thi.ng.ndarray.contours.process_saddle5.call(null,src,y,x,isoval,from);

break;
case (10):
return thi.ng.ndarray.contours.process_saddle10.call(null,src,y,x,isoval,from);

break;
default:
return thi.ng.ndarray.contours.edge_index_2d.call(null,(id | (0)));

}
})();
var to__$1 = cljs.core.nth.call(null,vec__40480,(0),null);
var clear = cljs.core.nth.call(null,vec__40480,(1),null);
var curr__$1 = (cljs.core.truth_((function (){var and__24806__auto__ = (from == null);
if(and__24806__auto__){
var and__24806__auto____$1 = to__$1;
if(cljs.core.truth_(and__24806__auto____$1)){
return (cljs.core.count.call(null,curr) > (0));
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())?(function (){
cljs.core._vreset_BANG_.call(null,contours,cljs.core.conj_BANG_.call(null,cljs.core._deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));

return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
})()
:curr);
if(cljs.core.truth_(clear)){
thi.ng.ndarray.core.set_at.call(null,coded,y,x,clear);
} else {
}

if(cljs.core.truth_((function (){var and__24806__auto__ = to__$1;
if(cljs.core.truth_(and__24806__auto__)){
return (to__$1 >= (0));
} else {
return and__24806__auto__;
}
})())){
var vertex = thi.ng.ndarray.contours.contour_vertex_2d.call(null,src,y,x,to__$1,isoval);
var vec__40484 = thi.ng.ndarray.contours.next_edges_2d.call(null,to__$1);
var oy = cljs.core.nth.call(null,vec__40484,(0),null);
var ox = cljs.core.nth.call(null,vec__40484,(1),null);
var G__40492 = cljs.core.next.call(null,pos);
var G__40493 = cljs.core.conj_BANG_.call(null,curr__$1,vertex);
var G__40494 = to__$1;
var G__40495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y + oy),(x + ox)], null);
pos = G__40492;
curr = G__40493;
to = G__40494;
p = G__40495;
continue;
} else {
var G__40496 = cljs.core.next.call(null,pos);
var G__40497 = curr__$1;
var G__40498 = to__$1;
var G__40499 = null;
pos = G__40496;
curr = G__40497;
to = G__40498;
p = G__40499;
continue;
}
}
} else {
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,cljs.core.deref.call(null,contours),cljs.core.persistent_BANG_.call(null,curr)));
}
break;
}
});

//# sourceMappingURL=contours.js.map?rel=1530813195209