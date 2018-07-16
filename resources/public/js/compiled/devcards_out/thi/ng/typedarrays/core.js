// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.call(null,"object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))){
return cljs.core.get.call(null,thi.ng.typedarrays.core.array_types,cljs.core.first.call(null,cljs.core.re_find.call(null,/((Uint|Int|Float)\d+(Clamped)?Array)/,[cljs.core.str(x.constructor)].join(''))));
} else {
return null;
}
}
});
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_arrays_supported_QMARK_)){
cljs.core.run_BANG_.call(null,(function (type){
if(cljs.core.truth_((self[type]).prototype.slice)){
return null;
} else {
return (self[type]).prototype.slice = (function (from,to){
var this$ = this;
var from__$1 = (((from < (0)))?((this$.length + from) | (0)):(from | (0)));
var to__$1 = (cljs.core.truth_(goog.isNumber(to))?(((to < (0)))?((this$.length + to) | (0)):Math.min(to,this$.length)):this$.length);
var len = Math.max((to__$1 - from__$1),(0));
var ctor = this$.constructor;
var dest = new ctor(len);
var i_32261 = (0);
while(true){
if((i_32261 < len)){
(dest[i_32261] = (this$[(from__$1 + i_32261)]));

var G__32262 = (i_32261 + (1));
i_32261 = G__32262;
continue;
} else {
}
break;
}

return dest;
});
}
}),cljs.core.keys.call(null,thi.ng.typedarrays.core.array_types));
} else {
}
/**
 * Creates a native Int8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_32263 = (0);
var coll_32264 = size_or_coll;
while(true){
if((i_32263 < len)){
(buf[i_32263] = cljs.core.first.call(null,coll_32264));

var G__32265 = (i_32263 + (1));
var G__32266 = cljs.core.next.call(null,coll_32264);
i_32263 = G__32265;
coll_32264 = G__32266;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int8_view = (function thi$ng$typedarrays$core$int8_view(var_args){
var args32267 = [];
var len__25893__auto___32270 = arguments.length;
var i__25894__auto___32271 = (0);
while(true){
if((i__25894__auto___32271 < len__25893__auto___32270)){
args32267.push((arguments[i__25894__auto___32271]));

var G__32272 = (i__25894__auto___32271 + (1));
i__25894__auto___32271 = G__32272;
continue;
} else {
}
break;
}

var G__32269 = args32267.length;
switch (G__32269) {
case 1:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32267.length)].join('')));

}
});

thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int8Array(a.buffer));
});

thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int8Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int8_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_32274 = (0);
var coll_32275 = size_or_coll;
while(true){
if((i_32274 < len)){
(buf[i_32274] = cljs.core.first.call(null,coll_32275));

var G__32276 = (i_32274 + (1));
var G__32277 = cljs.core.next.call(null,coll_32275);
i_32274 = G__32276;
coll_32275 = G__32277;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_view = (function thi$ng$typedarrays$core$uint8_view(var_args){
var args32278 = [];
var len__25893__auto___32281 = arguments.length;
var i__25894__auto___32282 = (0);
while(true){
if((i__25894__auto___32282 < len__25893__auto___32281)){
args32278.push((arguments[i__25894__auto___32282]));

var G__32283 = (i__25894__auto___32282 + (1));
i__25894__auto___32282 = G__32283;
continue;
} else {
}
break;
}

var G__32280 = args32278.length;
switch (G__32280) {
case 1:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32278.length)].join('')));

}
});

thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8Array(a.buffer));
});

thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint8_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_32285 = (0);
var coll_32286 = size_or_coll;
while(true){
if((i_32285 < len)){
(buf[i_32285] = cljs.core.first.call(null,coll_32286));

var G__32287 = (i_32285 + (1));
var G__32288 = cljs.core.next.call(null,coll_32286);
i_32285 = G__32287;
coll_32286 = G__32288;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8ClampedArray view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_clamped_view = (function thi$ng$typedarrays$core$uint8_clamped_view(var_args){
var args32289 = [];
var len__25893__auto___32292 = arguments.length;
var i__25894__auto___32293 = (0);
while(true){
if((i__25894__auto___32293 < len__25893__auto___32292)){
args32289.push((arguments[i__25894__auto___32293]));

var G__32294 = (i__25894__auto___32293 + (1));
i__25894__auto___32293 = G__32294;
continue;
} else {
}
break;
}

var G__32291 = args32289.length;
switch (G__32291) {
case 1:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32289.length)].join('')));

}
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8ClampedArray(a.buffer));
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8ClampedArray(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Int16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_32296 = (0);
var coll_32297 = size_or_coll;
while(true){
if((i_32296 < len)){
(buf[i_32296] = cljs.core.first.call(null,coll_32297));

var G__32298 = (i_32296 + (1));
var G__32299 = cljs.core.next.call(null,coll_32297);
i_32296 = G__32298;
coll_32297 = G__32299;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int16_view = (function thi$ng$typedarrays$core$int16_view(var_args){
var args32300 = [];
var len__25893__auto___32303 = arguments.length;
var i__25894__auto___32304 = (0);
while(true){
if((i__25894__auto___32304 < len__25893__auto___32303)){
args32300.push((arguments[i__25894__auto___32304]));

var G__32305 = (i__25894__auto___32304 + (1));
i__25894__auto___32304 = G__32305;
continue;
} else {
}
break;
}

var G__32302 = args32300.length;
switch (G__32302) {
case 1:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32300.length)].join('')));

}
});

thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int16Array(a.buffer));
});

thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int16Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int16_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_32307 = (0);
var coll_32308 = size_or_coll;
while(true){
if((i_32307 < len)){
(buf[i_32307] = cljs.core.first.call(null,coll_32308));

var G__32309 = (i_32307 + (1));
var G__32310 = cljs.core.next.call(null,coll_32308);
i_32307 = G__32309;
coll_32308 = G__32310;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint16_view = (function thi$ng$typedarrays$core$uint16_view(var_args){
var args32311 = [];
var len__25893__auto___32314 = arguments.length;
var i__25894__auto___32315 = (0);
while(true){
if((i__25894__auto___32315 < len__25893__auto___32314)){
args32311.push((arguments[i__25894__auto___32315]));

var G__32316 = (i__25894__auto___32315 + (1));
i__25894__auto___32315 = G__32316;
continue;
} else {
}
break;
}

var G__32313 = args32311.length;
switch (G__32313) {
case 1:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32311.length)].join('')));

}
});

thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint16Array(a.buffer));
});

thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint16Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint16_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Int32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_32318 = (0);
var coll_32319 = size_or_coll;
while(true){
if((i_32318 < len)){
(buf[i_32318] = cljs.core.first.call(null,coll_32319));

var G__32320 = (i_32318 + (1));
var G__32321 = cljs.core.next.call(null,coll_32319);
i_32318 = G__32320;
coll_32319 = G__32321;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int32_view = (function thi$ng$typedarrays$core$int32_view(var_args){
var args32322 = [];
var len__25893__auto___32325 = arguments.length;
var i__25894__auto___32326 = (0);
while(true){
if((i__25894__auto___32326 < len__25893__auto___32325)){
args32322.push((arguments[i__25894__auto___32326]));

var G__32327 = (i__25894__auto___32326 + (1));
i__25894__auto___32326 = G__32327;
continue;
} else {
}
break;
}

var G__32324 = args32322.length;
switch (G__32324) {
case 1:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32322.length)].join('')));

}
});

thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int32Array(a.buffer));
});

thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_32329 = (0);
var coll_32330 = size_or_coll;
while(true){
if((i_32329 < len)){
(buf[i_32329] = cljs.core.first.call(null,coll_32330));

var G__32331 = (i_32329 + (1));
var G__32332 = cljs.core.next.call(null,coll_32330);
i_32329 = G__32331;
coll_32330 = G__32332;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint32_view = (function thi$ng$typedarrays$core$uint32_view(var_args){
var args32333 = [];
var len__25893__auto___32336 = arguments.length;
var i__25894__auto___32337 = (0);
while(true){
if((i__25894__auto___32337 < len__25893__auto___32336)){
args32333.push((arguments[i__25894__auto___32337]));

var G__32338 = (i__25894__auto___32337 + (1));
i__25894__auto___32337 = G__32338;
continue;
} else {
}
break;
}

var G__32335 = args32333.length;
switch (G__32335) {
case 1:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32333.length)].join('')));

}
});

thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint32Array(a.buffer));
});

thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Float32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_32340 = (0);
var coll_32341 = size_or_coll;
while(true){
if((i_32340 < len)){
(buf[i_32340] = cljs.core.first.call(null,coll_32341));

var G__32342 = (i_32340 + (1));
var G__32343 = cljs.core.next.call(null,coll_32341);
i_32340 = G__32342;
coll_32341 = G__32343;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float32_view = (function thi$ng$typedarrays$core$float32_view(var_args){
var args32344 = [];
var len__25893__auto___32347 = arguments.length;
var i__25894__auto___32348 = (0);
while(true){
if((i__25894__auto___32348 < len__25893__auto___32347)){
args32344.push((arguments[i__25894__auto___32348]));

var G__32349 = (i__25894__auto___32348 + (1));
i__25894__auto___32348 = G__32349;
continue;
} else {
}
break;
}

var G__32346 = args32344.length;
switch (G__32346) {
case 1:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32344.length)].join('')));

}
});

thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float32Array(a.buffer));
});

thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.float32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Float64Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_32351 = (0);
var coll_32352 = size_or_coll;
while(true){
if((i_32351 < len)){
(buf[i_32351] = cljs.core.first.call(null,coll_32352));

var G__32353 = (i_32351 + (1));
var G__32354 = cljs.core.next.call(null,coll_32352);
i_32351 = G__32353;
coll_32352 = G__32354;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float64Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float64_view = (function thi$ng$typedarrays$core$float64_view(var_args){
var args32355 = [];
var len__25893__auto___32358 = arguments.length;
var i__25894__auto___32359 = (0);
while(true){
if((i__25894__auto___32359 < len__25893__auto___32358)){
args32355.push((arguments[i__25894__auto___32359]));

var G__32360 = (i__25894__auto___32359 + (1));
i__25894__auto___32359 = G__32360;
continue;
} else {
}
break;
}

var G__32357 = args32355.length;
switch (G__32357) {
case 1:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32355.length)].join('')));

}
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float64Array(a.buffer));
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float64Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.float64_view.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1530813180873