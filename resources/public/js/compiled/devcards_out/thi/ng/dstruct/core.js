// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.dstruct.core');
goog.require('cljs.core');
thi.ng.dstruct.core.index = (function thi$ng$dstruct$core$index(i,t){
var temp__4655__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__4655__auto__)){
var tt = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,t),t], null);
}
});
thi.ng.dstruct.core.index_BANG_ = (function thi$ng$dstruct$core$index_BANG_(i,t){
var temp__4655__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__4655__auto__)){
var tt = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,i,t),t], null);
}
});
thi.ng.dstruct.core.index_kv = (function thi$ng$dstruct$core$index_kv(m,k,v){
var temp__4655__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var e = temp__4655__auto__;
return cljs.core.assoc.call(null,m,cljs.core.key.call(null,e),cljs.core.conj.call(null,cljs.core.val.call(null,e),v));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.index_kv_BANG_ = (function thi$ng$dstruct$core$index_kv_BANG_(m,k,v){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var vv = temp__4655__auto__;
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.conj.call(null,vv,v));
} else {
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.value_set = (function thi$ng$dstruct$core$value_set(var_args){
var args37131 = [];
var len__25893__auto___37134 = arguments.length;
var i__25894__auto___37135 = (0);
while(true){
if((i__25894__auto___37135 < len__25893__auto___37134)){
args37131.push((arguments[i__25894__auto___37135]));

var G__37136 = (i__25894__auto___37135 + (1));
i__25894__auto___37135 = G__37136;
continue;
} else {
}
break;
}

var G__37133 = args37131.length;
switch (G__37133) {
case 2:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37131.length)].join('')));

}
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.get.call(null,idx,v));
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f),cljs.core.get.call(null,idx,v));
});

thi.ng.dstruct.core.value_set.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.dstruct.core.vec_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.dstruct.core.set_conj2_STAR_ = (function thi$ng$dstruct$core$set_conj2_STAR_(p1__37138_SHARP_,p2__37139_SHARP_){
if((p1__37138_SHARP_ == null)){
return p2__37139_SHARP_;
} else {
if(cljs.core.set_QMARK_.call(null,p1__37138_SHARP_)){
return cljs.core.conj.call(null,p1__37138_SHARP_,p2__37139_SHARP_);
} else {
return cljs.core.PersistentHashSet.fromArray([p2__37139_SHARP_,p1__37138_SHARP_], true);
}
}
});
thi.ng.dstruct.core.vec_conj2_STAR_ = (function thi$ng$dstruct$core$vec_conj2_STAR_(p1__37140_SHARP_,p2__37141_SHARP_){
if((p1__37140_SHARP_ == null)){
return p2__37141_SHARP_;
} else {
if(cljs.core.vector_QMARK_.call(null,p1__37140_SHARP_)){
return cljs.core.conj.call(null,p1__37140_SHARP_,p2__37141_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37140_SHARP_,p2__37141_SHARP_], null);
}
}
});
thi.ng.dstruct.core.collect_set = (function thi$ng$dstruct$core$collect_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f),coll);
});
thi.ng.dstruct.core.collect_indexed = (function thi$ng$dstruct$core$collect_indexed(f,f2,coll){
var keys = thi.ng.dstruct.core.collect_set.call(null,f,coll);
return cljs.core.zipmap.call(null,keys,((cljs.core._EQ_.call(null,f2,cljs.core.identity))?keys:cljs.core.map.call(null,f2,keys)));
});
/**
 * Merge fn to be used with `merge-with`. Recursively merges map
 *   values which are maps or seqs (for the latter `into` is used, only
 *   if RHS is seq or set as well). If the RHS value has the metadata key
 *   `:replace` set, it is used as new value without merging.
 */
thi.ng.dstruct.core.deep_merge = (function thi$ng$dstruct$core$deep_merge(l,r){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.meta.call(null,r),new cljs.core.Keyword(null,"replace","replace",-786587770)))){
return r;
} else {
if((cljs.core.sequential_QMARK_.call(null,l)) || (cljs.core.set_QMARK_.call(null,l))){
if((cljs.core.sequential_QMARK_.call(null,r)) || (cljs.core.set_QMARK_.call(null,r))){
return cljs.core.into.call(null,l,r);
} else {
return r;
}
} else {
if(cljs.core.map_QMARK_.call(null,l)){
return cljs.core.merge_with.call(null,thi$ng$dstruct$core$deep_merge,l,r);
} else {
return r;

}
}
}
});
/**
 * Calls `merge-with` using `deep-merge` as merge fn.
 */
thi.ng.dstruct.core.merge_deep = (function thi$ng$dstruct$core$merge_deep(var_args){
var args37142 = [];
var len__25893__auto___37148 = arguments.length;
var i__25894__auto___37149 = (0);
while(true){
if((i__25894__auto___37149 < len__25893__auto___37148)){
args37142.push((arguments[i__25894__auto___37149]));

var G__37150 = (i__25894__auto___37149 + (1));
i__25894__auto___37149 = G__37150;
continue;
} else {
}
break;
}

var G__37147 = args37142.length;
switch (G__37147) {
case 2:
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25912__auto__ = (new cljs.core.IndexedSeq(args37142.slice((2)),(0),null));
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25912__auto__);

}
});

thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.merge_with.call(null,thi.ng.dstruct.core.deep_merge,a,b);
});

thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,maps){
return cljs.core.apply.call(null,cljs.core.merge_with,thi.ng.dstruct.core.deep_merge,a,b,maps);
});

thi.ng.dstruct.core.merge_deep.cljs$lang$applyTo = (function (seq37143){
var G__37144 = cljs.core.first.call(null,seq37143);
var seq37143__$1 = cljs.core.next.call(null,seq37143);
var G__37145 = cljs.core.first.call(null,seq37143__$1);
var seq37143__$2 = cljs.core.next.call(null,seq37143__$1);
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic(G__37144,G__37145,seq37143__$2);
});

thi.ng.dstruct.core.merge_deep.cljs$lang$maxFixedArity = (2);

thi.ng.dstruct.core.interval_set = (function thi$ng$dstruct$core$interval_set(var_args){
var args__25900__auto__ = [];
var len__25893__auto___37153 = arguments.length;
var i__25894__auto___37154 = (0);
while(true){
if((i__25894__auto___37154 < len__25893__auto___37153)){
args__25900__auto__.push((arguments[i__25894__auto___37154]));

var G__37155 = (i__25894__auto___37154 + (1));
i__25894__auto___37154 = G__37155;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.mapcat.call(null,(function (v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.range.call(null,cljs.core.first.call(null,v),(cljs.core.nth.call(null,v,(1)) + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
})),ivals);
});

thi.ng.dstruct.core.interval_set.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.interval_set.cljs$lang$applyTo = (function (seq37152){
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37152));
});

thi.ng.dstruct.core.check_intervals = (function thi$ng$dstruct$core$check_intervals(var_args){
var args__25900__auto__ = [];
var len__25893__auto___37165 = arguments.length;
var i__25894__auto___37166 = (0);
while(true){
if((i__25894__auto___37166 < len__25893__auto___37165)){
args__25900__auto__.push((arguments[i__25894__auto___37166]));

var G__37167 = (i__25894__auto___37166 + (1));
i__25894__auto___37166 = G__37167;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__37158 = cljs.core.reduce.call(null,(function (p__37161,v){
var vec__37162 = p__37161;
var i = cljs.core.nth.call(null,vec__37162,(0),null);
var c = cljs.core.nth.call(null,vec__37162,(1),null);
if(cljs.core.sequential_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.call(null,c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.call(null,vec__37158,(0),null);
var const$ = cljs.core.nth.call(null,vec__37158,(1),null);
return ((function (vec__37158,ivals__$1,const$){
return (function (x){
if(cljs.core.truth_(const$.call(null,x))){
return x;
} else {
return cljs.core.some.call(null,((function (vec__37158,ivals__$1,const$){
return (function (p1__37156_SHARP_){
if((cljs.core.first.call(null,p1__37156_SHARP_) <= x)){
return (x <= cljs.core.nth.call(null,p1__37156_SHARP_,(1)));
} else {
return null;
}
});})(vec__37158,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__37158,ivals__$1,const$))
});

thi.ng.dstruct.core.check_intervals.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.check_intervals.cljs$lang$applyTo = (function (seq37157){
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37157));
});

/**
 * All the ways to take one item from each sequence
 *   (taken from clojure.contrib.combinatorics)
 */
thi.ng.dstruct.core.cartesian_product = (function thi$ng$dstruct$core$cartesian_product(var_args){
var args__25900__auto__ = [];
var len__25893__auto___37169 = arguments.length;
var i__25894__auto___37170 = (0);
while(true){
if((i__25894__auto___37170 < len__25893__auto___37169)){
args__25900__auto__.push((arguments[i__25894__auto___37170]));

var G__37171 = (i__25894__auto___37170 + (1));
i__25894__auto___37170 = G__37171;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function thi$ng$dstruct$core$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__37172 = (i - (1));
var G__37173 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__37172;
v_seqs__$2 = G__37173;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return thi$ng$dstruct$core$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

thi.ng.dstruct.core.cartesian_product.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.cartesian_product.cljs$lang$applyTo = (function (seq37168){
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37168));
});

thi.ng.dstruct.core.bisect = (function thi$ng$dstruct$core$bisect(var_args){
var args37174 = [];
var len__25893__auto___37184 = arguments.length;
var i__25894__auto___37185 = (0);
while(true){
if((i__25894__auto___37185 < len__25893__auto___37184)){
args37174.push((arguments[i__25894__auto___37185]));

var G__37186 = (i__25894__auto___37185 + (1));
i__25894__auto___37185 = G__37186;
continue;
} else {
}
break;
}

var G__37176 = args37174.length;
switch (G__37176) {
case 2:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37174.length)].join('')));

}
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__37177 = cljs.core.reduce.call(null,(function (p__37180,v){
var vec__37181 = p__37180;
var m = cljs.core.nth.call(null,vec__37181,(0),null);
var n = cljs.core.nth.call(null,vec__37181,(1),null);
if(cljs.core.truth_(f.call(null,v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.call(null,n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.call(null,vec__37177,(0),null);
var n = cljs.core.nth.call(null,vec__37177,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,m),cljs.core.persistent_BANG_.call(null,n)], null);
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
return cljs.core.mapv.call(null,f2,thi.ng.dstruct.core.bisect.call(null,f,coll));
});

thi.ng.dstruct.core.bisect.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.neighbors = (function thi$ng$dstruct$core$neighbors(x,coll){
var n = (cljs.core.count.call(null,coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.call(null,x,cljs.core.nth.call(null,coll,i))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,coll,(((i > (0)))?(i - (1)):n)),cljs.core.nth.call(null,coll,(((i < n))?(i + (1)):(0)))], null);
} else {
var G__37188 = (i - (1));
i = G__37188;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazyseq of `n`-element vectors, each one containing
 *   a successive elements of the original collection.
 * 
 *    (successive-nth 3 [1 2 3 4])
 *    => ([1 2 3] [2 3 4] [3 4 5])
 */
thi.ng.dstruct.core.successive_nth = (function thi$ng$dstruct$core$successive_nth(var_args){
var args37189 = [];
var len__25893__auto___37192 = arguments.length;
var i__25894__auto___37193 = (0);
while(true){
if((i__25894__auto___37193 < len__25893__auto___37192)){
args37189.push((arguments[i__25894__auto___37193]));

var G__37194 = (i__25894__auto___37193 + (1));
i__25894__auto___37193 = G__37194;
continue;
} else {
}
break;
}

var G__37191 = args37189.length;
switch (G__37191) {
case 2:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37189.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.dstruct.core.successive_nth.call(null,n,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.dstruct.core.successive_nth.call(null,n,step,cljs.core.drop.call(null,step,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$lang$maxFixedArity = 3;

/**
 * Returns a lazyseq of nested 2-element vectors, each one containing
 *   a vector of `n` successive elements of the original collection and
 *   an sequence index.
 * 
 *    (successive-nth-indexed 2 [10 20 30 40])
 *    => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
 */
thi.ng.dstruct.core.successive_nth_indexed = (function thi$ng$dstruct$core$successive_nth_indexed(var_args){
var args37196 = [];
var len__25893__auto___37199 = arguments.length;
var i__25894__auto___37200 = (0);
while(true){
if((i__25894__auto___37200 < len__25893__auto___37199)){
args37196.push((arguments[i__25894__auto___37200]));

var G__37201 = (i__25894__auto___37200 + (1));
i__25894__auto___37200 = G__37201;
continue;
} else {
}
break;
}

var G__37198 = args37196.length;
switch (G__37198) {
case 2:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37196.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.dstruct.core.successive_nth_indexed.call(null,n,(0),coll);
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,s),idx], null),thi.ng.dstruct.core.successive_nth_indexed.call(null,n,(idx + (1)),cljs.core.rest.call(null,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$lang$maxFixedArity = 3;

/**
 * Applies `f` with `args` to all given `keys` in `type`.
 */
thi.ng.dstruct.core.apply_to_keys = (function thi$ng$dstruct$core$apply_to_keys(var_args){
var args__25900__auto__ = [];
var len__25893__auto___37207 = arguments.length;
var i__25894__auto___37208 = (0);
while(true){
if((i__25894__auto___37208 < len__25893__auto___37207)){
args__25900__auto__.push((arguments[i__25894__auto___37208]));

var G__37209 = (i__25894__auto___37208 + (1));
i__25894__auto___37208 = G__37209;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((3) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((3)),(0),null)):null);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25901__auto__);
});

thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.call(null,(function (acc,k){
return cljs.core.assoc.call(null,acc,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,type,k),args));
}),type,keys);
});

thi.ng.dstruct.core.apply_to_keys.cljs$lang$maxFixedArity = (3);

thi.ng.dstruct.core.apply_to_keys.cljs$lang$applyTo = (function (seq37203){
var G__37204 = cljs.core.first.call(null,seq37203);
var seq37203__$1 = cljs.core.next.call(null,seq37203);
var G__37205 = cljs.core.first.call(null,seq37203__$1);
var seq37203__$2 = cljs.core.next.call(null,seq37203__$1);
var G__37206 = cljs.core.first.call(null,seq37203__$2);
var seq37203__$3 = cljs.core.next.call(null,seq37203__$2);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic(G__37204,G__37205,G__37206,seq37203__$3);
});

thi.ng.dstruct.core.reduce_pairs = (function thi$ng$dstruct$core$reduce_pairs(var_args){
var args37210 = [];
var len__25893__auto___37217 = arguments.length;
var i__25894__auto___37218 = (0);
while(true){
if((i__25894__auto___37218 < len__25893__auto___37217)){
args37210.push((arguments[i__25894__auto___37218]));

var G__37219 = (i__25894__auto___37218 + (1));
i__25894__auto___37218 = G__37219;
continue;
} else {
}
break;
}

var G__37212 = args37210.length;
switch (G__37212) {
case 3:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37210.length)].join('')));

}
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.dstruct.core.reduce_pairs.call(null,f1,f2,null,coll);
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count.call(null,coll) > (1))){
var pairs = cljs.core.map.call(null,(function (p__37213){
var vec__37214 = p__37213;
var a = cljs.core.nth.call(null,vec__37214,(0),null);
var b = cljs.core.nth.call(null,vec__37214,(1),null);
return f2.call(null,a,b);
}),cljs.core.partition.call(null,(2),(1),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.call(null,f1,acc,pairs);
} else {
return cljs.core.reduce.call(null,f1,pairs);
}
} else {
return null;
}
});

thi.ng.dstruct.core.reduce_pairs.cljs$lang$maxFixedArity = 4;

thi.ng.dstruct.core.wrap_seq = (function thi$ng$dstruct$core$wrap_seq(s,head,tail){
return cljs.core.concat.call(null,((cljs.core.sequential_QMARK_.call(null,head))?cljs.core.concat.call(null,head,s):cljs.core.cons.call(null,head,s)),((cljs.core.sequential_QMARK_.call(null,tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.dstruct.core.append_first = (function thi$ng$dstruct$core$append_first(xs){
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs)], null));
});
thi.ng.dstruct.core.rotate_left = (function thi$ng$dstruct$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_.call(null,xs)){
return cljs.core.into.call(null,cljs.core.subvec.call(null,xs,n),cljs.core.subvec.call(null,xs,(0),n));
} else {
return cljs.core.concat.call(null,cljs.core.drop.call(null,n,xs),cljs.core.take.call(null,n,xs));
}
});
thi.ng.dstruct.core.index_of = (function thi$ng$dstruct$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,coll__$1))){
return i;
} else {
var G__37221 = (i + (1));
var G__37222 = cljs.core.next.call(null,coll__$1);
i = G__37221;
coll__$1 = G__37222;
continue;
}
} else {
return (-1);
}
break;
}
});
/**
 * Returns a new collection of all items after `item` in original `coll`.
 *   If `coll` is a vector, the new collection is created with `subvec`.
 *   Returns original coll if item isn't found.
 */
thi.ng.dstruct.core.all_after = (function thi$ng$dstruct$core$all_after(item,coll){
var idx = (thi.ng.dstruct.core.index_of.call(null,coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_.call(null,coll)){
return cljs.core.subvec.call(null,coll,idx);
} else {
return cljs.core.drop.call(null,idx,coll);
}
} else {
return coll;
}
});
thi.ng.dstruct.core.iterate_while = (function thi$ng$dstruct$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.cons.call(null,x,thi$ng$dstruct$core$iterate_while.call(null,pred,f,f.call(null,x)));
} else {
return null;
}
}),null,null));
});
/**
 * Iteratively applies f to x, n times, then returns result.
 */
thi.ng.dstruct.core.iterate_n = (function thi$ng$dstruct$core$iterate_n(n,f,x){
var x__$1 = x;
var i = (0);
while(true){
if((i < n)){
var G__37223 = f.call(null,x__$1);
var G__37224 = (i + (1));
x__$1 = G__37223;
i = G__37224;
continue;
} else {
return x__$1;
}
break;
}
});
thi.ng.dstruct.core.walk = (function thi$ng$dstruct$core$walk(inner,outer,form){
if(cljs.core.seq_QMARK_.call(null,form)){
return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else {
if(cljs.core.vector_QMARK_.call(null,form)){
return outer.call(null,cljs.core.mapv.call(null,inner,form));
} else {
return outer.call(null,form);

}
}
});
thi.ng.dstruct.core.postwalk = (function thi$ng$dstruct$core$postwalk(f,form){
return thi.ng.dstruct.core.walk.call(null,(function (p1__37225_SHARP_){
return thi$ng$dstruct$core$postwalk.call(null,f,p1__37225_SHARP_);
}),f,form);
});
/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 *   a vector of items for which `f` returned a truthy value.
 */
thi.ng.dstruct.core.filter_tree = (function thi$ng$dstruct$core$filter_tree(f,root){
var walk = (function thi$ng$dstruct$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_(f.call(null,node))){
return cljs.core.conj_BANG_.call(null,acc,node);
} else {
if(cljs.core.coll_QMARK_.call(null,node)){
return cljs.core.reduce.call(null,thi$ng$dstruct$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,walk,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),root));
});
thi.ng.dstruct.core.unwrap_str = (function thi$ng$dstruct$core$unwrap_str(s,n){
return cljs.core.subs.call(null,s,n,(cljs.core.count.call(null,s) - n));
});
thi.ng.dstruct.core.wrap_str = (function thi$ng$dstruct$core$wrap_str(s,pre,post){
return [cljs.core.str(pre),cljs.core.str(s),cljs.core.str(post)].join('');
});
thi.ng.dstruct.core.stringify_keys = (function thi$ng$dstruct$core$stringify_keys(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.key.call(null,e))].join(''),cljs.core.val.call(null,e)], null);
})),m);
});
/**
 * Takes a keyword or string of flags and string/seq of items, returns
 *   map with items as keys and boolean values indicating if an item has
 *   been found in the string representation of the kw. If `kw` is nil,
 *   returns nil.
 * 
 *    (demunge-flags :cad "abcd")
 *    #_=> {:a true :b false :c true :d true}
 */
thi.ng.dstruct.core.demunge_flags = (function thi$ng$dstruct$core$demunge_flags(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name.call(null,kw);
return cljs.core.reduce.call(null,((function (flags){
return (function (acc,x){
var x__$1 = [cljs.core.str(x)].join('');
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,x__$1),((0) <= flags.indexOf(x__$1)));
});})(flags))
,cljs.core.PersistentArrayMap.EMPTY,xs);
} else {
return null;
}
});
/**
 * Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
 * 
 *    (demunge-flags-seq :cad "abcd") => [true false true true]
 */
thi.ng.dstruct.core.demunge_flags_seq = (function thi$ng$dstruct$core$demunge_flags_seq(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name.call(null,kw);
return cljs.core.map.call(null,((function (flags){
return (function (p1__37226_SHARP_){
return ((0) <= flags.indexOf([cljs.core.str(p1__37226_SHARP_)].join('')));
});})(flags))
,xs);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1530813189930