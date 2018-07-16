// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44704 = arguments.length;
var i__25894__auto___44705 = (0);
while(true){
if((i__25894__auto___44705 < len__25893__auto___44704)){
args__25900__auto__.push((arguments[i__25894__auto___44705]));

var G__44706 = (i__25894__auto___44705 + (1));
i__25894__auto___44705 = G__44706;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq44703){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44703));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44708 = arguments.length;
var i__25894__auto___44709 = (0);
while(true){
if((i__25894__auto___44709 < len__25893__auto___44708)){
args__25900__auto__.push((arguments[i__25894__auto___44709]));

var G__44710 = (i__25894__auto___44709 + (1));
i__25894__auto___44709 = G__44710;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq44707){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44707));
});

var g_QMARK__44711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_44712 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44711){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__44711))
,null));
var mkg_44713 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__44711,g_44712){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__44711,g_44712))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__44711,g_44712,mkg_44713){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__44711).call(null,x);
});})(g_QMARK__44711,g_44712,mkg_44713))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__44711,g_44712,mkg_44713){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_44713).call(null,gfn);
});})(g_QMARK__44711,g_44712,mkg_44713))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__44711,g_44712,mkg_44713){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_44712).call(null,generator);
});})(g_QMARK__44711,g_44712,mkg_44713))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__44675__auto___44732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__44675__auto___44732){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44733 = arguments.length;
var i__25894__auto___44734 = (0);
while(true){
if((i__25894__auto___44734 < len__25893__auto___44733)){
args__25900__auto__.push((arguments[i__25894__auto___44734]));

var G__44735 = (i__25894__auto___44734 + (1));
i__25894__auto___44734 = G__44735;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44732))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44732),args);
});})(g__44675__auto___44732))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__44675__auto___44732){
return (function (seq44714){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44714));
});})(g__44675__auto___44732))
;


var g__44675__auto___44736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__44675__auto___44736){
return (function cljs$spec$impl$gen$list(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44737 = arguments.length;
var i__25894__auto___44738 = (0);
while(true){
if((i__25894__auto___44738 < len__25893__auto___44737)){
args__25900__auto__.push((arguments[i__25894__auto___44738]));

var G__44739 = (i__25894__auto___44738 + (1));
i__25894__auto___44738 = G__44739;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44736))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44736){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44736),args);
});})(g__44675__auto___44736))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__44675__auto___44736){
return (function (seq44715){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44715));
});})(g__44675__auto___44736))
;


var g__44675__auto___44740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__44675__auto___44740){
return (function cljs$spec$impl$gen$map(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44741 = arguments.length;
var i__25894__auto___44742 = (0);
while(true){
if((i__25894__auto___44742 < len__25893__auto___44741)){
args__25900__auto__.push((arguments[i__25894__auto___44742]));

var G__44743 = (i__25894__auto___44742 + (1));
i__25894__auto___44742 = G__44743;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44740))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44740){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44740),args);
});})(g__44675__auto___44740))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__44675__auto___44740){
return (function (seq44716){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44716));
});})(g__44675__auto___44740))
;


var g__44675__auto___44744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__44675__auto___44744){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44745 = arguments.length;
var i__25894__auto___44746 = (0);
while(true){
if((i__25894__auto___44746 < len__25893__auto___44745)){
args__25900__auto__.push((arguments[i__25894__auto___44746]));

var G__44747 = (i__25894__auto___44746 + (1));
i__25894__auto___44746 = G__44747;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44744))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44744){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44744),args);
});})(g__44675__auto___44744))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__44675__auto___44744){
return (function (seq44717){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44717));
});})(g__44675__auto___44744))
;


var g__44675__auto___44748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__44675__auto___44748){
return (function cljs$spec$impl$gen$set(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44749 = arguments.length;
var i__25894__auto___44750 = (0);
while(true){
if((i__25894__auto___44750 < len__25893__auto___44749)){
args__25900__auto__.push((arguments[i__25894__auto___44750]));

var G__44751 = (i__25894__auto___44750 + (1));
i__25894__auto___44750 = G__44751;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44748))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44748){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44748),args);
});})(g__44675__auto___44748))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__44675__auto___44748){
return (function (seq44718){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44718));
});})(g__44675__auto___44748))
;


var g__44675__auto___44752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__44675__auto___44752){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44753 = arguments.length;
var i__25894__auto___44754 = (0);
while(true){
if((i__25894__auto___44754 < len__25893__auto___44753)){
args__25900__auto__.push((arguments[i__25894__auto___44754]));

var G__44755 = (i__25894__auto___44754 + (1));
i__25894__auto___44754 = G__44755;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44752))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44752){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44752),args);
});})(g__44675__auto___44752))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__44675__auto___44752){
return (function (seq44719){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44719));
});})(g__44675__auto___44752))
;


var g__44675__auto___44756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__44675__auto___44756){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44757 = arguments.length;
var i__25894__auto___44758 = (0);
while(true){
if((i__25894__auto___44758 < len__25893__auto___44757)){
args__25900__auto__.push((arguments[i__25894__auto___44758]));

var G__44759 = (i__25894__auto___44758 + (1));
i__25894__auto___44758 = G__44759;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44756))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44756){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44756),args);
});})(g__44675__auto___44756))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__44675__auto___44756){
return (function (seq44720){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44720));
});})(g__44675__auto___44756))
;


var g__44675__auto___44760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__44675__auto___44760){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44761 = arguments.length;
var i__25894__auto___44762 = (0);
while(true){
if((i__25894__auto___44762 < len__25893__auto___44761)){
args__25900__auto__.push((arguments[i__25894__auto___44762]));

var G__44763 = (i__25894__auto___44762 + (1));
i__25894__auto___44762 = G__44763;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44760))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44760),args);
});})(g__44675__auto___44760))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__44675__auto___44760){
return (function (seq44721){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44721));
});})(g__44675__auto___44760))
;


var g__44675__auto___44764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__44675__auto___44764){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44765 = arguments.length;
var i__25894__auto___44766 = (0);
while(true){
if((i__25894__auto___44766 < len__25893__auto___44765)){
args__25900__auto__.push((arguments[i__25894__auto___44766]));

var G__44767 = (i__25894__auto___44766 + (1));
i__25894__auto___44766 = G__44767;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44764))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44764),args);
});})(g__44675__auto___44764))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__44675__auto___44764){
return (function (seq44722){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44722));
});})(g__44675__auto___44764))
;


var g__44675__auto___44768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__44675__auto___44768){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44769 = arguments.length;
var i__25894__auto___44770 = (0);
while(true){
if((i__25894__auto___44770 < len__25893__auto___44769)){
args__25900__auto__.push((arguments[i__25894__auto___44770]));

var G__44771 = (i__25894__auto___44770 + (1));
i__25894__auto___44770 = G__44771;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44768))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44768),args);
});})(g__44675__auto___44768))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__44675__auto___44768){
return (function (seq44723){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44723));
});})(g__44675__auto___44768))
;


var g__44675__auto___44772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__44675__auto___44772){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44773 = arguments.length;
var i__25894__auto___44774 = (0);
while(true){
if((i__25894__auto___44774 < len__25893__auto___44773)){
args__25900__auto__.push((arguments[i__25894__auto___44774]));

var G__44775 = (i__25894__auto___44774 + (1));
i__25894__auto___44774 = G__44775;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44772))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44772),args);
});})(g__44675__auto___44772))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__44675__auto___44772){
return (function (seq44724){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44724));
});})(g__44675__auto___44772))
;


var g__44675__auto___44776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__44675__auto___44776){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44777 = arguments.length;
var i__25894__auto___44778 = (0);
while(true){
if((i__25894__auto___44778 < len__25893__auto___44777)){
args__25900__auto__.push((arguments[i__25894__auto___44778]));

var G__44779 = (i__25894__auto___44778 + (1));
i__25894__auto___44778 = G__44779;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44776))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44776),args);
});})(g__44675__auto___44776))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__44675__auto___44776){
return (function (seq44725){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44725));
});})(g__44675__auto___44776))
;


var g__44675__auto___44780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__44675__auto___44780){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44781 = arguments.length;
var i__25894__auto___44782 = (0);
while(true){
if((i__25894__auto___44782 < len__25893__auto___44781)){
args__25900__auto__.push((arguments[i__25894__auto___44782]));

var G__44783 = (i__25894__auto___44782 + (1));
i__25894__auto___44782 = G__44783;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44780))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44780),args);
});})(g__44675__auto___44780))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__44675__auto___44780){
return (function (seq44726){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44726));
});})(g__44675__auto___44780))
;


var g__44675__auto___44784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__44675__auto___44784){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44785 = arguments.length;
var i__25894__auto___44786 = (0);
while(true){
if((i__25894__auto___44786 < len__25893__auto___44785)){
args__25900__auto__.push((arguments[i__25894__auto___44786]));

var G__44787 = (i__25894__auto___44786 + (1));
i__25894__auto___44786 = G__44787;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44784))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44784),args);
});})(g__44675__auto___44784))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__44675__auto___44784){
return (function (seq44727){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44727));
});})(g__44675__auto___44784))
;


var g__44675__auto___44788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__44675__auto___44788){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44789 = arguments.length;
var i__25894__auto___44790 = (0);
while(true){
if((i__25894__auto___44790 < len__25893__auto___44789)){
args__25900__auto__.push((arguments[i__25894__auto___44790]));

var G__44791 = (i__25894__auto___44790 + (1));
i__25894__auto___44790 = G__44791;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44788))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44788),args);
});})(g__44675__auto___44788))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__44675__auto___44788){
return (function (seq44728){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44728));
});})(g__44675__auto___44788))
;


var g__44675__auto___44792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__44675__auto___44792){
return (function cljs$spec$impl$gen$return(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44793 = arguments.length;
var i__25894__auto___44794 = (0);
while(true){
if((i__25894__auto___44794 < len__25893__auto___44793)){
args__25900__auto__.push((arguments[i__25894__auto___44794]));

var G__44795 = (i__25894__auto___44794 + (1));
i__25894__auto___44794 = G__44795;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44792))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44792),args);
});})(g__44675__auto___44792))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__44675__auto___44792){
return (function (seq44729){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44729));
});})(g__44675__auto___44792))
;


var g__44675__auto___44796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__44675__auto___44796){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44797 = arguments.length;
var i__25894__auto___44798 = (0);
while(true){
if((i__25894__auto___44798 < len__25893__auto___44797)){
args__25900__auto__.push((arguments[i__25894__auto___44798]));

var G__44799 = (i__25894__auto___44798 + (1));
i__25894__auto___44798 = G__44799;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44796))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44796){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44796),args);
});})(g__44675__auto___44796))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__44675__auto___44796){
return (function (seq44730){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44730));
});})(g__44675__auto___44796))
;


var g__44675__auto___44800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__44675__auto___44800){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44801 = arguments.length;
var i__25894__auto___44802 = (0);
while(true){
if((i__25894__auto___44802 < len__25893__auto___44801)){
args__25900__auto__.push((arguments[i__25894__auto___44802]));

var G__44803 = (i__25894__auto___44802 + (1));
i__25894__auto___44802 = G__44803;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44675__auto___44800))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44675__auto___44800){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44675__auto___44800),args);
});})(g__44675__auto___44800))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__44675__auto___44800){
return (function (seq44731){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44731));
});})(g__44675__auto___44800))
;

var g__44688__auto___44825 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__44688__auto___44825){
return (function cljs$spec$impl$gen$any(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44826 = arguments.length;
var i__25894__auto___44827 = (0);
while(true){
if((i__25894__auto___44827 < len__25893__auto___44826)){
args__25900__auto__.push((arguments[i__25894__auto___44827]));

var G__44828 = (i__25894__auto___44827 + (1));
i__25894__auto___44827 = G__44828;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44825))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44825){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44825);
});})(g__44688__auto___44825))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__44688__auto___44825){
return (function (seq44804){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44804));
});})(g__44688__auto___44825))
;


var g__44688__auto___44829 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__44688__auto___44829){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44830 = arguments.length;
var i__25894__auto___44831 = (0);
while(true){
if((i__25894__auto___44831 < len__25893__auto___44830)){
args__25900__auto__.push((arguments[i__25894__auto___44831]));

var G__44832 = (i__25894__auto___44831 + (1));
i__25894__auto___44831 = G__44832;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44829))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44829){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44829);
});})(g__44688__auto___44829))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__44688__auto___44829){
return (function (seq44805){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44805));
});})(g__44688__auto___44829))
;


var g__44688__auto___44833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__44688__auto___44833){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44834 = arguments.length;
var i__25894__auto___44835 = (0);
while(true){
if((i__25894__auto___44835 < len__25893__auto___44834)){
args__25900__auto__.push((arguments[i__25894__auto___44835]));

var G__44836 = (i__25894__auto___44835 + (1));
i__25894__auto___44835 = G__44836;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44833))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44833){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44833);
});})(g__44688__auto___44833))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__44688__auto___44833){
return (function (seq44806){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44806));
});})(g__44688__auto___44833))
;


var g__44688__auto___44837 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__44688__auto___44837){
return (function cljs$spec$impl$gen$char(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44838 = arguments.length;
var i__25894__auto___44839 = (0);
while(true){
if((i__25894__auto___44839 < len__25893__auto___44838)){
args__25900__auto__.push((arguments[i__25894__auto___44839]));

var G__44840 = (i__25894__auto___44839 + (1));
i__25894__auto___44839 = G__44840;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44837))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44837){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44837);
});})(g__44688__auto___44837))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__44688__auto___44837){
return (function (seq44807){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44807));
});})(g__44688__auto___44837))
;


var g__44688__auto___44841 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__44688__auto___44841){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44842 = arguments.length;
var i__25894__auto___44843 = (0);
while(true){
if((i__25894__auto___44843 < len__25893__auto___44842)){
args__25900__auto__.push((arguments[i__25894__auto___44843]));

var G__44844 = (i__25894__auto___44843 + (1));
i__25894__auto___44843 = G__44844;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44841))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44841){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44841);
});})(g__44688__auto___44841))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__44688__auto___44841){
return (function (seq44808){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44808));
});})(g__44688__auto___44841))
;


var g__44688__auto___44845 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__44688__auto___44845){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44846 = arguments.length;
var i__25894__auto___44847 = (0);
while(true){
if((i__25894__auto___44847 < len__25893__auto___44846)){
args__25900__auto__.push((arguments[i__25894__auto___44847]));

var G__44848 = (i__25894__auto___44847 + (1));
i__25894__auto___44847 = G__44848;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44845))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44845){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44845);
});})(g__44688__auto___44845))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__44688__auto___44845){
return (function (seq44809){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44809));
});})(g__44688__auto___44845))
;


var g__44688__auto___44849 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__44688__auto___44849){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44850 = arguments.length;
var i__25894__auto___44851 = (0);
while(true){
if((i__25894__auto___44851 < len__25893__auto___44850)){
args__25900__auto__.push((arguments[i__25894__auto___44851]));

var G__44852 = (i__25894__auto___44851 + (1));
i__25894__auto___44851 = G__44852;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44849))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44849){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44849);
});})(g__44688__auto___44849))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__44688__auto___44849){
return (function (seq44810){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44810));
});})(g__44688__auto___44849))
;


var g__44688__auto___44853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__44688__auto___44853){
return (function cljs$spec$impl$gen$double(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44854 = arguments.length;
var i__25894__auto___44855 = (0);
while(true){
if((i__25894__auto___44855 < len__25893__auto___44854)){
args__25900__auto__.push((arguments[i__25894__auto___44855]));

var G__44856 = (i__25894__auto___44855 + (1));
i__25894__auto___44855 = G__44856;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44853))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44853){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44853);
});})(g__44688__auto___44853))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__44688__auto___44853){
return (function (seq44811){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44811));
});})(g__44688__auto___44853))
;


var g__44688__auto___44857 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__44688__auto___44857){
return (function cljs$spec$impl$gen$int(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44858 = arguments.length;
var i__25894__auto___44859 = (0);
while(true){
if((i__25894__auto___44859 < len__25893__auto___44858)){
args__25900__auto__.push((arguments[i__25894__auto___44859]));

var G__44860 = (i__25894__auto___44859 + (1));
i__25894__auto___44859 = G__44860;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44857))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44857){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44857);
});})(g__44688__auto___44857))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__44688__auto___44857){
return (function (seq44812){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44812));
});})(g__44688__auto___44857))
;


var g__44688__auto___44861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__44688__auto___44861){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44862 = arguments.length;
var i__25894__auto___44863 = (0);
while(true){
if((i__25894__auto___44863 < len__25893__auto___44862)){
args__25900__auto__.push((arguments[i__25894__auto___44863]));

var G__44864 = (i__25894__auto___44863 + (1));
i__25894__auto___44863 = G__44864;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44861))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44861){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44861);
});})(g__44688__auto___44861))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__44688__auto___44861){
return (function (seq44813){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44813));
});})(g__44688__auto___44861))
;


var g__44688__auto___44865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__44688__auto___44865){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44866 = arguments.length;
var i__25894__auto___44867 = (0);
while(true){
if((i__25894__auto___44867 < len__25893__auto___44866)){
args__25900__auto__.push((arguments[i__25894__auto___44867]));

var G__44868 = (i__25894__auto___44867 + (1));
i__25894__auto___44867 = G__44868;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44865))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44865){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44865);
});})(g__44688__auto___44865))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__44688__auto___44865){
return (function (seq44814){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44814));
});})(g__44688__auto___44865))
;


var g__44688__auto___44869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__44688__auto___44869){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44870 = arguments.length;
var i__25894__auto___44871 = (0);
while(true){
if((i__25894__auto___44871 < len__25893__auto___44870)){
args__25900__auto__.push((arguments[i__25894__auto___44871]));

var G__44872 = (i__25894__auto___44871 + (1));
i__25894__auto___44871 = G__44872;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44869))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44869){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44869);
});})(g__44688__auto___44869))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__44688__auto___44869){
return (function (seq44815){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44815));
});})(g__44688__auto___44869))
;


var g__44688__auto___44873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__44688__auto___44873){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44874 = arguments.length;
var i__25894__auto___44875 = (0);
while(true){
if((i__25894__auto___44875 < len__25893__auto___44874)){
args__25900__auto__.push((arguments[i__25894__auto___44875]));

var G__44876 = (i__25894__auto___44875 + (1));
i__25894__auto___44875 = G__44876;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44873))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44873){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44873);
});})(g__44688__auto___44873))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__44688__auto___44873){
return (function (seq44816){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44816));
});})(g__44688__auto___44873))
;


var g__44688__auto___44877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__44688__auto___44877){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44878 = arguments.length;
var i__25894__auto___44879 = (0);
while(true){
if((i__25894__auto___44879 < len__25893__auto___44878)){
args__25900__auto__.push((arguments[i__25894__auto___44879]));

var G__44880 = (i__25894__auto___44879 + (1));
i__25894__auto___44879 = G__44880;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44877))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44877){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44877);
});})(g__44688__auto___44877))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__44688__auto___44877){
return (function (seq44817){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44817));
});})(g__44688__auto___44877))
;


var g__44688__auto___44881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__44688__auto___44881){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44882 = arguments.length;
var i__25894__auto___44883 = (0);
while(true){
if((i__25894__auto___44883 < len__25893__auto___44882)){
args__25900__auto__.push((arguments[i__25894__auto___44883]));

var G__44884 = (i__25894__auto___44883 + (1));
i__25894__auto___44883 = G__44884;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44881))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44881){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44881);
});})(g__44688__auto___44881))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__44688__auto___44881){
return (function (seq44818){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44818));
});})(g__44688__auto___44881))
;


var g__44688__auto___44885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__44688__auto___44885){
return (function cljs$spec$impl$gen$string(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44886 = arguments.length;
var i__25894__auto___44887 = (0);
while(true){
if((i__25894__auto___44887 < len__25893__auto___44886)){
args__25900__auto__.push((arguments[i__25894__auto___44887]));

var G__44888 = (i__25894__auto___44887 + (1));
i__25894__auto___44887 = G__44888;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44885))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44885){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44885);
});})(g__44688__auto___44885))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__44688__auto___44885){
return (function (seq44819){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44819));
});})(g__44688__auto___44885))
;


var g__44688__auto___44889 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__44688__auto___44889){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44890 = arguments.length;
var i__25894__auto___44891 = (0);
while(true){
if((i__25894__auto___44891 < len__25893__auto___44890)){
args__25900__auto__.push((arguments[i__25894__auto___44891]));

var G__44892 = (i__25894__auto___44891 + (1));
i__25894__auto___44891 = G__44892;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44889))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44889){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44889);
});})(g__44688__auto___44889))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__44688__auto___44889){
return (function (seq44820){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44820));
});})(g__44688__auto___44889))
;


var g__44688__auto___44893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__44688__auto___44893){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44894 = arguments.length;
var i__25894__auto___44895 = (0);
while(true){
if((i__25894__auto___44895 < len__25893__auto___44894)){
args__25900__auto__.push((arguments[i__25894__auto___44895]));

var G__44896 = (i__25894__auto___44895 + (1));
i__25894__auto___44895 = G__44896;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44893))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44893){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44893);
});})(g__44688__auto___44893))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__44688__auto___44893){
return (function (seq44821){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44821));
});})(g__44688__auto___44893))
;


var g__44688__auto___44897 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__44688__auto___44897){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44898 = arguments.length;
var i__25894__auto___44899 = (0);
while(true){
if((i__25894__auto___44899 < len__25893__auto___44898)){
args__25900__auto__.push((arguments[i__25894__auto___44899]));

var G__44900 = (i__25894__auto___44899 + (1));
i__25894__auto___44899 = G__44900;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44897))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44897){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44897);
});})(g__44688__auto___44897))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__44688__auto___44897){
return (function (seq44822){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44822));
});})(g__44688__auto___44897))
;


var g__44688__auto___44901 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__44688__auto___44901){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44902 = arguments.length;
var i__25894__auto___44903 = (0);
while(true){
if((i__25894__auto___44903 < len__25893__auto___44902)){
args__25900__auto__.push((arguments[i__25894__auto___44903]));

var G__44904 = (i__25894__auto___44903 + (1));
i__25894__auto___44903 = G__44904;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44901))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44901){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44901);
});})(g__44688__auto___44901))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__44688__auto___44901){
return (function (seq44823){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44823));
});})(g__44688__auto___44901))
;


var g__44688__auto___44905 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__44688__auto___44905){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44906 = arguments.length;
var i__25894__auto___44907 = (0);
while(true){
if((i__25894__auto___44907 < len__25893__auto___44906)){
args__25900__auto__.push((arguments[i__25894__auto___44907]));

var G__44908 = (i__25894__auto___44907 + (1));
i__25894__auto___44907 = G__44908;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});})(g__44688__auto___44905))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44688__auto___44905){
return (function (args){
return cljs.core.deref.call(null,g__44688__auto___44905);
});})(g__44688__auto___44905))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__44688__auto___44905){
return (function (seq44824){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44824));
});})(g__44688__auto___44905))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25900__auto__ = [];
var len__25893__auto___44911 = arguments.length;
var i__25894__auto___44912 = (0);
while(true){
if((i__25894__auto___44912 < len__25893__auto___44911)){
args__25900__auto__.push((arguments[i__25894__auto___44912]));

var G__44913 = (i__25894__auto___44912 + (1));
i__25894__auto___44912 = G__44913;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__44909_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__44909_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq44910){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44910));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__44914_SHARP_){
return (new Date(p1__44914_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1530813199402