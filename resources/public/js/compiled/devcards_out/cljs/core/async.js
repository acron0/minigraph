// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27035 = [];
var len__25893__auto___27041 = arguments.length;
var i__25894__auto___27042 = (0);
while(true){
if((i__25894__auto___27042 < len__25893__auto___27041)){
args27035.push((arguments[i__25894__auto___27042]));

var G__27043 = (i__25894__auto___27042 + (1));
i__25894__auto___27042 = G__27043;
continue;
} else {
}
break;
}

var G__27037 = args27035.length;
switch (G__27037) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27035.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27038 = (function (f,blockable,meta27039){
this.f = f;
this.blockable = blockable;
this.meta27039 = meta27039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27040,meta27039__$1){
var self__ = this;
var _27040__$1 = this;
return (new cljs.core.async.t_cljs$core$async27038(self__.f,self__.blockable,meta27039__$1));
});

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27040){
var self__ = this;
var _27040__$1 = this;
return self__.meta27039;
});

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27039","meta27039",136735737,null)], null);
});

cljs.core.async.t_cljs$core$async27038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27038";

cljs.core.async.t_cljs$core$async27038.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async27038");
});

cljs.core.async.__GT_t_cljs$core$async27038 = (function cljs$core$async$__GT_t_cljs$core$async27038(f__$1,blockable__$1,meta27039){
return (new cljs.core.async.t_cljs$core$async27038(f__$1,blockable__$1,meta27039));
});

}

return (new cljs.core.async.t_cljs$core$async27038(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27047 = [];
var len__25893__auto___27050 = arguments.length;
var i__25894__auto___27051 = (0);
while(true){
if((i__25894__auto___27051 < len__25893__auto___27050)){
args27047.push((arguments[i__25894__auto___27051]));

var G__27052 = (i__25894__auto___27051 + (1));
i__25894__auto___27051 = G__27052;
continue;
} else {
}
break;
}

var G__27049 = args27047.length;
switch (G__27049) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27047.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27054 = [];
var len__25893__auto___27057 = arguments.length;
var i__25894__auto___27058 = (0);
while(true){
if((i__25894__auto___27058 < len__25893__auto___27057)){
args27054.push((arguments[i__25894__auto___27058]));

var G__27059 = (i__25894__auto___27058 + (1));
i__25894__auto___27058 = G__27059;
continue;
} else {
}
break;
}

var G__27056 = args27054.length;
switch (G__27056) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27054.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27061 = [];
var len__25893__auto___27064 = arguments.length;
var i__25894__auto___27065 = (0);
while(true){
if((i__25894__auto___27065 < len__25893__auto___27064)){
args27061.push((arguments[i__25894__auto___27065]));

var G__27066 = (i__25894__auto___27065 + (1));
i__25894__auto___27065 = G__27066;
continue;
} else {
}
break;
}

var G__27063 = args27061.length;
switch (G__27063) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27061.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27068 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27068);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27068,ret){
return (function (){
return fn1.call(null,val_27068);
});})(val_27068,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27069 = [];
var len__25893__auto___27072 = arguments.length;
var i__25894__auto___27073 = (0);
while(true){
if((i__25894__auto___27073 < len__25893__auto___27072)){
args27069.push((arguments[i__25894__auto___27073]));

var G__27074 = (i__25894__auto___27073 + (1));
i__25894__auto___27073 = G__27074;
continue;
} else {
}
break;
}

var G__27071 = args27069.length;
switch (G__27071) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27069.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25733__auto___27076 = n;
var x_27077 = (0);
while(true){
if((x_27077 < n__25733__auto___27076)){
(a[x_27077] = (0));

var G__27078 = (x_27077 + (1));
x_27077 = G__27078;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27079 = (i + (1));
i = G__27079;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27083 = (function (alt_flag,flag,meta27084){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27084 = meta27084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27085,meta27084__$1){
var self__ = this;
var _27085__$1 = this;
return (new cljs.core.async.t_cljs$core$async27083(self__.alt_flag,self__.flag,meta27084__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27085){
var self__ = this;
var _27085__$1 = this;
return self__.meta27084;
});})(flag))
;

cljs.core.async.t_cljs$core$async27083.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27083.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27084","meta27084",655069657,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27083";

cljs.core.async.t_cljs$core$async27083.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async27083");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27083 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27083(alt_flag__$1,flag__$1,meta27084){
return (new cljs.core.async.t_cljs$core$async27083(alt_flag__$1,flag__$1,meta27084));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27083(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27089 = (function (alt_handler,flag,cb,meta27090){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27090 = meta27090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27091,meta27090__$1){
var self__ = this;
var _27091__$1 = this;
return (new cljs.core.async.t_cljs$core$async27089(self__.alt_handler,self__.flag,self__.cb,meta27090__$1));
});

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27091){
var self__ = this;
var _27091__$1 = this;
return self__.meta27090;
});

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27090","meta27090",-2058694666,null)], null);
});

cljs.core.async.t_cljs$core$async27089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27089";

cljs.core.async.t_cljs$core$async27089.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async27089");
});

cljs.core.async.__GT_t_cljs$core$async27089 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27089(alt_handler__$1,flag__$1,cb__$1,meta27090){
return (new cljs.core.async.t_cljs$core$async27089(alt_handler__$1,flag__$1,cb__$1,meta27090));
});

}

return (new cljs.core.async.t_cljs$core$async27089(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27092_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27092_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27093_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24818__auto__ = wport;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27094 = (i + (1));
i = G__27094;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24818__auto__ = ret;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24806__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24806__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24806__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25900__auto__ = [];
var len__25893__auto___27100 = arguments.length;
var i__25894__auto___27101 = (0);
while(true){
if((i__25894__auto___27101 < len__25893__auto___27100)){
args__25900__auto__.push((arguments[i__25894__auto___27101]));

var G__27102 = (i__25894__auto___27101 + (1));
i__25894__auto___27101 = G__27102;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((1) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25901__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27097){
var map__27098 = p__27097;
var map__27098__$1 = ((((!((map__27098 == null)))?((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27098):map__27098);
var opts = map__27098__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27095){
var G__27096 = cljs.core.first.call(null,seq27095);
var seq27095__$1 = cljs.core.next.call(null,seq27095);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27096,seq27095__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27103 = [];
var len__25893__auto___27153 = arguments.length;
var i__25894__auto___27154 = (0);
while(true){
if((i__25894__auto___27154 < len__25893__auto___27153)){
args27103.push((arguments[i__25894__auto___27154]));

var G__27155 = (i__25894__auto___27154 + (1));
i__25894__auto___27154 = G__27155;
continue;
} else {
}
break;
}

var G__27105 = args27103.length;
switch (G__27105) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27103.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26990__auto___27157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___27157){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___27157){
return (function (state_27129){
var state_val_27130 = (state_27129[(1)]);
if((state_val_27130 === (7))){
var inst_27125 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
var statearr_27131_27158 = state_27129__$1;
(statearr_27131_27158[(2)] = inst_27125);

(statearr_27131_27158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (1))){
var state_27129__$1 = state_27129;
var statearr_27132_27159 = state_27129__$1;
(statearr_27132_27159[(2)] = null);

(statearr_27132_27159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (4))){
var inst_27108 = (state_27129[(7)]);
var inst_27108__$1 = (state_27129[(2)]);
var inst_27109 = (inst_27108__$1 == null);
var state_27129__$1 = (function (){var statearr_27133 = state_27129;
(statearr_27133[(7)] = inst_27108__$1);

return statearr_27133;
})();
if(cljs.core.truth_(inst_27109)){
var statearr_27134_27160 = state_27129__$1;
(statearr_27134_27160[(1)] = (5));

} else {
var statearr_27135_27161 = state_27129__$1;
(statearr_27135_27161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (13))){
var state_27129__$1 = state_27129;
var statearr_27136_27162 = state_27129__$1;
(statearr_27136_27162[(2)] = null);

(statearr_27136_27162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (6))){
var inst_27108 = (state_27129[(7)]);
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27129__$1,(11),to,inst_27108);
} else {
if((state_val_27130 === (3))){
var inst_27127 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27129__$1,inst_27127);
} else {
if((state_val_27130 === (12))){
var state_27129__$1 = state_27129;
var statearr_27137_27163 = state_27129__$1;
(statearr_27137_27163[(2)] = null);

(statearr_27137_27163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (2))){
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27129__$1,(4),from);
} else {
if((state_val_27130 === (11))){
var inst_27118 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
if(cljs.core.truth_(inst_27118)){
var statearr_27138_27164 = state_27129__$1;
(statearr_27138_27164[(1)] = (12));

} else {
var statearr_27139_27165 = state_27129__$1;
(statearr_27139_27165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (9))){
var state_27129__$1 = state_27129;
var statearr_27140_27166 = state_27129__$1;
(statearr_27140_27166[(2)] = null);

(statearr_27140_27166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (5))){
var state_27129__$1 = state_27129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27141_27167 = state_27129__$1;
(statearr_27141_27167[(1)] = (8));

} else {
var statearr_27142_27168 = state_27129__$1;
(statearr_27142_27168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (14))){
var inst_27123 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
var statearr_27143_27169 = state_27129__$1;
(statearr_27143_27169[(2)] = inst_27123);

(statearr_27143_27169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (10))){
var inst_27115 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
var statearr_27144_27170 = state_27129__$1;
(statearr_27144_27170[(2)] = inst_27115);

(statearr_27144_27170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (8))){
var inst_27112 = cljs.core.async.close_BANG_.call(null,to);
var state_27129__$1 = state_27129;
var statearr_27145_27171 = state_27129__$1;
(statearr_27145_27171[(2)] = inst_27112);

(statearr_27145_27171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___27157))
;
return ((function (switch__26878__auto__,c__26990__auto___27157){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_27149 = [null,null,null,null,null,null,null,null];
(statearr_27149[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_27149[(1)] = (1));

return statearr_27149;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_27129){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27150){if((e27150 instanceof Object)){
var ex__26882__auto__ = e27150;
var statearr_27151_27172 = state_27129;
(statearr_27151_27172[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27173 = state_27129;
state_27129 = G__27173;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_27129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_27129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___27157))
})();
var state__26992__auto__ = (function (){var statearr_27152 = f__26991__auto__.call(null);
(statearr_27152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___27157);

return statearr_27152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___27157))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27361){
var vec__27362 = p__27361;
var v = cljs.core.nth.call(null,vec__27362,(0),null);
var p = cljs.core.nth.call(null,vec__27362,(1),null);
var job = vec__27362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26990__auto___27548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___27548,res,vec__27362,v,p,job,jobs,results){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___27548,res,vec__27362,v,p,job,jobs,results){
return (function (state_27369){
var state_val_27370 = (state_27369[(1)]);
if((state_val_27370 === (1))){
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27369__$1,(2),res,v);
} else {
if((state_val_27370 === (2))){
var inst_27366 = (state_27369[(2)]);
var inst_27367 = cljs.core.async.close_BANG_.call(null,res);
var state_27369__$1 = (function (){var statearr_27371 = state_27369;
(statearr_27371[(7)] = inst_27366);

return statearr_27371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27369__$1,inst_27367);
} else {
return null;
}
}
});})(c__26990__auto___27548,res,vec__27362,v,p,job,jobs,results))
;
return ((function (switch__26878__auto__,c__26990__auto___27548,res,vec__27362,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0 = (function (){
var statearr_27375 = [null,null,null,null,null,null,null,null];
(statearr_27375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__);

(statearr_27375[(1)] = (1));

return statearr_27375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1 = (function (state_27369){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27376){if((e27376 instanceof Object)){
var ex__26882__auto__ = e27376;
var statearr_27377_27549 = state_27369;
(statearr_27377_27549[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27550 = state_27369;
state_27369 = G__27550;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = function(state_27369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1.call(this,state_27369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___27548,res,vec__27362,v,p,job,jobs,results))
})();
var state__26992__auto__ = (function (){var statearr_27378 = f__26991__auto__.call(null);
(statearr_27378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___27548);

return statearr_27378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___27548,res,vec__27362,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27379){
var vec__27380 = p__27379;
var v = cljs.core.nth.call(null,vec__27380,(0),null);
var p = cljs.core.nth.call(null,vec__27380,(1),null);
var job = vec__27380;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25733__auto___27551 = n;
var __27552 = (0);
while(true){
if((__27552 < n__25733__auto___27551)){
var G__27383_27553 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27383_27553) {
case "compute":
var c__26990__auto___27555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27552,c__26990__auto___27555,G__27383_27553,n__25733__auto___27551,jobs,results,process,async){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (__27552,c__26990__auto___27555,G__27383_27553,n__25733__auto___27551,jobs,results,process,async){
return (function (state_27396){
var state_val_27397 = (state_27396[(1)]);
if((state_val_27397 === (1))){
var state_27396__$1 = state_27396;
var statearr_27398_27556 = state_27396__$1;
(statearr_27398_27556[(2)] = null);

(statearr_27398_27556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (2))){
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27396__$1,(4),jobs);
} else {
if((state_val_27397 === (3))){
var inst_27394 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27396__$1,inst_27394);
} else {
if((state_val_27397 === (4))){
var inst_27386 = (state_27396[(2)]);
var inst_27387 = process.call(null,inst_27386);
var state_27396__$1 = state_27396;
if(cljs.core.truth_(inst_27387)){
var statearr_27399_27557 = state_27396__$1;
(statearr_27399_27557[(1)] = (5));

} else {
var statearr_27400_27558 = state_27396__$1;
(statearr_27400_27558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (5))){
var state_27396__$1 = state_27396;
var statearr_27401_27559 = state_27396__$1;
(statearr_27401_27559[(2)] = null);

(statearr_27401_27559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (6))){
var state_27396__$1 = state_27396;
var statearr_27402_27560 = state_27396__$1;
(statearr_27402_27560[(2)] = null);

(statearr_27402_27560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (7))){
var inst_27392 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27403_27561 = state_27396__$1;
(statearr_27403_27561[(2)] = inst_27392);

(statearr_27403_27561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27552,c__26990__auto___27555,G__27383_27553,n__25733__auto___27551,jobs,results,process,async))
;
return ((function (__27552,switch__26878__auto__,c__26990__auto___27555,G__27383_27553,n__25733__auto___27551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0 = (function (){
var statearr_27407 = [null,null,null,null,null,null,null];
(statearr_27407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__);

(statearr_27407[(1)] = (1));

return statearr_27407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1 = (function (state_27396){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27408){if((e27408 instanceof Object)){
var ex__26882__auto__ = e27408;
var statearr_27409_27562 = state_27396;
(statearr_27409_27562[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27563 = state_27396;
state_27396 = G__27563;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = function(state_27396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1.call(this,state_27396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__;
})()
;})(__27552,switch__26878__auto__,c__26990__auto___27555,G__27383_27553,n__25733__auto___27551,jobs,results,process,async))
})();
var state__26992__auto__ = (function (){var statearr_27410 = f__26991__auto__.call(null);
(statearr_27410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___27555);

return statearr_27410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(__27552,c__26990__auto___27555,G__27383_27553,n__25733__auto___27551,jobs,results,process,async))
);


break;
case "async":
var c__26990__auto___27564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27552,c__26990__auto___27564,G__27383_27553,n__25733__auto___27551,jobs,results,process,async){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (__27552,c__26990__auto___27564,G__27383_27553,n__25733__auto___27551,jobs,results,process,async){
return (function (state_27423){
var state_val_27424 = (state_27423[(1)]);
if((state_val_27424 === (1))){
var state_27423__$1 = state_27423;
var statearr_27425_27565 = state_27423__$1;
(statearr_27425_27565[(2)] = null);

(statearr_27425_27565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (2))){
var state_27423__$1 = state_27423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27423__$1,(4),jobs);
} else {
if((state_val_27424 === (3))){
var inst_27421 = (state_27423[(2)]);
var state_27423__$1 = state_27423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27423__$1,inst_27421);
} else {
if((state_val_27424 === (4))){
var inst_27413 = (state_27423[(2)]);
var inst_27414 = async.call(null,inst_27413);
var state_27423__$1 = state_27423;
if(cljs.core.truth_(inst_27414)){
var statearr_27426_27566 = state_27423__$1;
(statearr_27426_27566[(1)] = (5));

} else {
var statearr_27427_27567 = state_27423__$1;
(statearr_27427_27567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (5))){
var state_27423__$1 = state_27423;
var statearr_27428_27568 = state_27423__$1;
(statearr_27428_27568[(2)] = null);

(statearr_27428_27568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (6))){
var state_27423__$1 = state_27423;
var statearr_27429_27569 = state_27423__$1;
(statearr_27429_27569[(2)] = null);

(statearr_27429_27569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (7))){
var inst_27419 = (state_27423[(2)]);
var state_27423__$1 = state_27423;
var statearr_27430_27570 = state_27423__$1;
(statearr_27430_27570[(2)] = inst_27419);

(statearr_27430_27570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27552,c__26990__auto___27564,G__27383_27553,n__25733__auto___27551,jobs,results,process,async))
;
return ((function (__27552,switch__26878__auto__,c__26990__auto___27564,G__27383_27553,n__25733__auto___27551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0 = (function (){
var statearr_27434 = [null,null,null,null,null,null,null];
(statearr_27434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__);

(statearr_27434[(1)] = (1));

return statearr_27434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1 = (function (state_27423){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27435){if((e27435 instanceof Object)){
var ex__26882__auto__ = e27435;
var statearr_27436_27571 = state_27423;
(statearr_27436_27571[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27572 = state_27423;
state_27423 = G__27572;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = function(state_27423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1.call(this,state_27423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__;
})()
;})(__27552,switch__26878__auto__,c__26990__auto___27564,G__27383_27553,n__25733__auto___27551,jobs,results,process,async))
})();
var state__26992__auto__ = (function (){var statearr_27437 = f__26991__auto__.call(null);
(statearr_27437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___27564);

return statearr_27437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(__27552,c__26990__auto___27564,G__27383_27553,n__25733__auto___27551,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27573 = (__27552 + (1));
__27552 = G__27573;
continue;
} else {
}
break;
}

var c__26990__auto___27574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___27574,jobs,results,process,async){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___27574,jobs,results,process,async){
return (function (state_27459){
var state_val_27460 = (state_27459[(1)]);
if((state_val_27460 === (1))){
var state_27459__$1 = state_27459;
var statearr_27461_27575 = state_27459__$1;
(statearr_27461_27575[(2)] = null);

(statearr_27461_27575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (2))){
var state_27459__$1 = state_27459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27459__$1,(4),from);
} else {
if((state_val_27460 === (3))){
var inst_27457 = (state_27459[(2)]);
var state_27459__$1 = state_27459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27459__$1,inst_27457);
} else {
if((state_val_27460 === (4))){
var inst_27440 = (state_27459[(7)]);
var inst_27440__$1 = (state_27459[(2)]);
var inst_27441 = (inst_27440__$1 == null);
var state_27459__$1 = (function (){var statearr_27462 = state_27459;
(statearr_27462[(7)] = inst_27440__$1);

return statearr_27462;
})();
if(cljs.core.truth_(inst_27441)){
var statearr_27463_27576 = state_27459__$1;
(statearr_27463_27576[(1)] = (5));

} else {
var statearr_27464_27577 = state_27459__$1;
(statearr_27464_27577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (5))){
var inst_27443 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27459__$1 = state_27459;
var statearr_27465_27578 = state_27459__$1;
(statearr_27465_27578[(2)] = inst_27443);

(statearr_27465_27578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (6))){
var inst_27440 = (state_27459[(7)]);
var inst_27445 = (state_27459[(8)]);
var inst_27445__$1 = cljs.core.async.chan.call(null,(1));
var inst_27446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27447 = [inst_27440,inst_27445__$1];
var inst_27448 = (new cljs.core.PersistentVector(null,2,(5),inst_27446,inst_27447,null));
var state_27459__$1 = (function (){var statearr_27466 = state_27459;
(statearr_27466[(8)] = inst_27445__$1);

return statearr_27466;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27459__$1,(8),jobs,inst_27448);
} else {
if((state_val_27460 === (7))){
var inst_27455 = (state_27459[(2)]);
var state_27459__$1 = state_27459;
var statearr_27467_27579 = state_27459__$1;
(statearr_27467_27579[(2)] = inst_27455);

(statearr_27467_27579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27460 === (8))){
var inst_27445 = (state_27459[(8)]);
var inst_27450 = (state_27459[(2)]);
var state_27459__$1 = (function (){var statearr_27468 = state_27459;
(statearr_27468[(9)] = inst_27450);

return statearr_27468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27459__$1,(9),results,inst_27445);
} else {
if((state_val_27460 === (9))){
var inst_27452 = (state_27459[(2)]);
var state_27459__$1 = (function (){var statearr_27469 = state_27459;
(statearr_27469[(10)] = inst_27452);

return statearr_27469;
})();
var statearr_27470_27580 = state_27459__$1;
(statearr_27470_27580[(2)] = null);

(statearr_27470_27580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___27574,jobs,results,process,async))
;
return ((function (switch__26878__auto__,c__26990__auto___27574,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0 = (function (){
var statearr_27474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__);

(statearr_27474[(1)] = (1));

return statearr_27474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1 = (function (state_27459){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27475){if((e27475 instanceof Object)){
var ex__26882__auto__ = e27475;
var statearr_27476_27581 = state_27459;
(statearr_27476_27581[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27582 = state_27459;
state_27459 = G__27582;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = function(state_27459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1.call(this,state_27459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___27574,jobs,results,process,async))
})();
var state__26992__auto__ = (function (){var statearr_27477 = f__26991__auto__.call(null);
(statearr_27477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___27574);

return statearr_27477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___27574,jobs,results,process,async))
);


var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__,jobs,results,process,async){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__,jobs,results,process,async){
return (function (state_27515){
var state_val_27516 = (state_27515[(1)]);
if((state_val_27516 === (7))){
var inst_27511 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27517_27583 = state_27515__$1;
(statearr_27517_27583[(2)] = inst_27511);

(statearr_27517_27583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (20))){
var state_27515__$1 = state_27515;
var statearr_27518_27584 = state_27515__$1;
(statearr_27518_27584[(2)] = null);

(statearr_27518_27584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (1))){
var state_27515__$1 = state_27515;
var statearr_27519_27585 = state_27515__$1;
(statearr_27519_27585[(2)] = null);

(statearr_27519_27585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (4))){
var inst_27480 = (state_27515[(7)]);
var inst_27480__$1 = (state_27515[(2)]);
var inst_27481 = (inst_27480__$1 == null);
var state_27515__$1 = (function (){var statearr_27520 = state_27515;
(statearr_27520[(7)] = inst_27480__$1);

return statearr_27520;
})();
if(cljs.core.truth_(inst_27481)){
var statearr_27521_27586 = state_27515__$1;
(statearr_27521_27586[(1)] = (5));

} else {
var statearr_27522_27587 = state_27515__$1;
(statearr_27522_27587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (15))){
var inst_27493 = (state_27515[(8)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(18),to,inst_27493);
} else {
if((state_val_27516 === (21))){
var inst_27506 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27523_27588 = state_27515__$1;
(statearr_27523_27588[(2)] = inst_27506);

(statearr_27523_27588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (13))){
var inst_27508 = (state_27515[(2)]);
var state_27515__$1 = (function (){var statearr_27524 = state_27515;
(statearr_27524[(9)] = inst_27508);

return statearr_27524;
})();
var statearr_27525_27589 = state_27515__$1;
(statearr_27525_27589[(2)] = null);

(statearr_27525_27589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (6))){
var inst_27480 = (state_27515[(7)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(11),inst_27480);
} else {
if((state_val_27516 === (17))){
var inst_27501 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
if(cljs.core.truth_(inst_27501)){
var statearr_27526_27590 = state_27515__$1;
(statearr_27526_27590[(1)] = (19));

} else {
var statearr_27527_27591 = state_27515__$1;
(statearr_27527_27591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (3))){
var inst_27513 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27515__$1,inst_27513);
} else {
if((state_val_27516 === (12))){
var inst_27490 = (state_27515[(10)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(14),inst_27490);
} else {
if((state_val_27516 === (2))){
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27515__$1,(4),results);
} else {
if((state_val_27516 === (19))){
var state_27515__$1 = state_27515;
var statearr_27528_27592 = state_27515__$1;
(statearr_27528_27592[(2)] = null);

(statearr_27528_27592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (11))){
var inst_27490 = (state_27515[(2)]);
var state_27515__$1 = (function (){var statearr_27529 = state_27515;
(statearr_27529[(10)] = inst_27490);

return statearr_27529;
})();
var statearr_27530_27593 = state_27515__$1;
(statearr_27530_27593[(2)] = null);

(statearr_27530_27593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (9))){
var state_27515__$1 = state_27515;
var statearr_27531_27594 = state_27515__$1;
(statearr_27531_27594[(2)] = null);

(statearr_27531_27594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (5))){
var state_27515__$1 = state_27515;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27532_27595 = state_27515__$1;
(statearr_27532_27595[(1)] = (8));

} else {
var statearr_27533_27596 = state_27515__$1;
(statearr_27533_27596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (14))){
var inst_27493 = (state_27515[(8)]);
var inst_27495 = (state_27515[(11)]);
var inst_27493__$1 = (state_27515[(2)]);
var inst_27494 = (inst_27493__$1 == null);
var inst_27495__$1 = cljs.core.not.call(null,inst_27494);
var state_27515__$1 = (function (){var statearr_27534 = state_27515;
(statearr_27534[(8)] = inst_27493__$1);

(statearr_27534[(11)] = inst_27495__$1);

return statearr_27534;
})();
if(inst_27495__$1){
var statearr_27535_27597 = state_27515__$1;
(statearr_27535_27597[(1)] = (15));

} else {
var statearr_27536_27598 = state_27515__$1;
(statearr_27536_27598[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (16))){
var inst_27495 = (state_27515[(11)]);
var state_27515__$1 = state_27515;
var statearr_27537_27599 = state_27515__$1;
(statearr_27537_27599[(2)] = inst_27495);

(statearr_27537_27599[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (10))){
var inst_27487 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27538_27600 = state_27515__$1;
(statearr_27538_27600[(2)] = inst_27487);

(statearr_27538_27600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (18))){
var inst_27498 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27539_27601 = state_27515__$1;
(statearr_27539_27601[(2)] = inst_27498);

(statearr_27539_27601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (8))){
var inst_27484 = cljs.core.async.close_BANG_.call(null,to);
var state_27515__$1 = state_27515;
var statearr_27540_27602 = state_27515__$1;
(statearr_27540_27602[(2)] = inst_27484);

(statearr_27540_27602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto__,jobs,results,process,async))
;
return ((function (switch__26878__auto__,c__26990__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0 = (function (){
var statearr_27544 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__);

(statearr_27544[(1)] = (1));

return statearr_27544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1 = (function (state_27515){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27545){if((e27545 instanceof Object)){
var ex__26882__auto__ = e27545;
var statearr_27546_27603 = state_27515;
(statearr_27546_27603[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27604 = state_27515;
state_27515 = G__27604;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__ = function(state_27515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1.call(this,state_27515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__,jobs,results,process,async))
})();
var state__26992__auto__ = (function (){var statearr_27547 = f__26991__auto__.call(null);
(statearr_27547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_27547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__,jobs,results,process,async))
);

return c__26990__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27605 = [];
var len__25893__auto___27608 = arguments.length;
var i__25894__auto___27609 = (0);
while(true){
if((i__25894__auto___27609 < len__25893__auto___27608)){
args27605.push((arguments[i__25894__auto___27609]));

var G__27610 = (i__25894__auto___27609 + (1));
i__25894__auto___27609 = G__27610;
continue;
} else {
}
break;
}

var G__27607 = args27605.length;
switch (G__27607) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27605.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27612 = [];
var len__25893__auto___27615 = arguments.length;
var i__25894__auto___27616 = (0);
while(true){
if((i__25894__auto___27616 < len__25893__auto___27615)){
args27612.push((arguments[i__25894__auto___27616]));

var G__27617 = (i__25894__auto___27616 + (1));
i__25894__auto___27616 = G__27617;
continue;
} else {
}
break;
}

var G__27614 = args27612.length;
switch (G__27614) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27612.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27619 = [];
var len__25893__auto___27672 = arguments.length;
var i__25894__auto___27673 = (0);
while(true){
if((i__25894__auto___27673 < len__25893__auto___27672)){
args27619.push((arguments[i__25894__auto___27673]));

var G__27674 = (i__25894__auto___27673 + (1));
i__25894__auto___27673 = G__27674;
continue;
} else {
}
break;
}

var G__27621 = args27619.length;
switch (G__27621) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27619.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26990__auto___27676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___27676,tc,fc){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___27676,tc,fc){
return (function (state_27647){
var state_val_27648 = (state_27647[(1)]);
if((state_val_27648 === (7))){
var inst_27643 = (state_27647[(2)]);
var state_27647__$1 = state_27647;
var statearr_27649_27677 = state_27647__$1;
(statearr_27649_27677[(2)] = inst_27643);

(statearr_27649_27677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (1))){
var state_27647__$1 = state_27647;
var statearr_27650_27678 = state_27647__$1;
(statearr_27650_27678[(2)] = null);

(statearr_27650_27678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (4))){
var inst_27624 = (state_27647[(7)]);
var inst_27624__$1 = (state_27647[(2)]);
var inst_27625 = (inst_27624__$1 == null);
var state_27647__$1 = (function (){var statearr_27651 = state_27647;
(statearr_27651[(7)] = inst_27624__$1);

return statearr_27651;
})();
if(cljs.core.truth_(inst_27625)){
var statearr_27652_27679 = state_27647__$1;
(statearr_27652_27679[(1)] = (5));

} else {
var statearr_27653_27680 = state_27647__$1;
(statearr_27653_27680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (13))){
var state_27647__$1 = state_27647;
var statearr_27654_27681 = state_27647__$1;
(statearr_27654_27681[(2)] = null);

(statearr_27654_27681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (6))){
var inst_27624 = (state_27647[(7)]);
var inst_27630 = p.call(null,inst_27624);
var state_27647__$1 = state_27647;
if(cljs.core.truth_(inst_27630)){
var statearr_27655_27682 = state_27647__$1;
(statearr_27655_27682[(1)] = (9));

} else {
var statearr_27656_27683 = state_27647__$1;
(statearr_27656_27683[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (3))){
var inst_27645 = (state_27647[(2)]);
var state_27647__$1 = state_27647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27647__$1,inst_27645);
} else {
if((state_val_27648 === (12))){
var state_27647__$1 = state_27647;
var statearr_27657_27684 = state_27647__$1;
(statearr_27657_27684[(2)] = null);

(statearr_27657_27684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (2))){
var state_27647__$1 = state_27647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27647__$1,(4),ch);
} else {
if((state_val_27648 === (11))){
var inst_27624 = (state_27647[(7)]);
var inst_27634 = (state_27647[(2)]);
var state_27647__$1 = state_27647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27647__$1,(8),inst_27634,inst_27624);
} else {
if((state_val_27648 === (9))){
var state_27647__$1 = state_27647;
var statearr_27658_27685 = state_27647__$1;
(statearr_27658_27685[(2)] = tc);

(statearr_27658_27685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (5))){
var inst_27627 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27628 = cljs.core.async.close_BANG_.call(null,fc);
var state_27647__$1 = (function (){var statearr_27659 = state_27647;
(statearr_27659[(8)] = inst_27627);

return statearr_27659;
})();
var statearr_27660_27686 = state_27647__$1;
(statearr_27660_27686[(2)] = inst_27628);

(statearr_27660_27686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (14))){
var inst_27641 = (state_27647[(2)]);
var state_27647__$1 = state_27647;
var statearr_27661_27687 = state_27647__$1;
(statearr_27661_27687[(2)] = inst_27641);

(statearr_27661_27687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (10))){
var state_27647__$1 = state_27647;
var statearr_27662_27688 = state_27647__$1;
(statearr_27662_27688[(2)] = fc);

(statearr_27662_27688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (8))){
var inst_27636 = (state_27647[(2)]);
var state_27647__$1 = state_27647;
if(cljs.core.truth_(inst_27636)){
var statearr_27663_27689 = state_27647__$1;
(statearr_27663_27689[(1)] = (12));

} else {
var statearr_27664_27690 = state_27647__$1;
(statearr_27664_27690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___27676,tc,fc))
;
return ((function (switch__26878__auto__,c__26990__auto___27676,tc,fc){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_27668 = [null,null,null,null,null,null,null,null,null];
(statearr_27668[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_27668[(1)] = (1));

return statearr_27668;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_27647){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27669){if((e27669 instanceof Object)){
var ex__26882__auto__ = e27669;
var statearr_27670_27691 = state_27647;
(statearr_27670_27691[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27692 = state_27647;
state_27647 = G__27692;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_27647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_27647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___27676,tc,fc))
})();
var state__26992__auto__ = (function (){var statearr_27671 = f__26991__auto__.call(null);
(statearr_27671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___27676);

return statearr_27671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___27676,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__){
return (function (state_27756){
var state_val_27757 = (state_27756[(1)]);
if((state_val_27757 === (7))){
var inst_27752 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27758_27779 = state_27756__$1;
(statearr_27758_27779[(2)] = inst_27752);

(statearr_27758_27779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (1))){
var inst_27736 = init;
var state_27756__$1 = (function (){var statearr_27759 = state_27756;
(statearr_27759[(7)] = inst_27736);

return statearr_27759;
})();
var statearr_27760_27780 = state_27756__$1;
(statearr_27760_27780[(2)] = null);

(statearr_27760_27780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (4))){
var inst_27739 = (state_27756[(8)]);
var inst_27739__$1 = (state_27756[(2)]);
var inst_27740 = (inst_27739__$1 == null);
var state_27756__$1 = (function (){var statearr_27761 = state_27756;
(statearr_27761[(8)] = inst_27739__$1);

return statearr_27761;
})();
if(cljs.core.truth_(inst_27740)){
var statearr_27762_27781 = state_27756__$1;
(statearr_27762_27781[(1)] = (5));

} else {
var statearr_27763_27782 = state_27756__$1;
(statearr_27763_27782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (6))){
var inst_27739 = (state_27756[(8)]);
var inst_27736 = (state_27756[(7)]);
var inst_27743 = (state_27756[(9)]);
var inst_27743__$1 = f.call(null,inst_27736,inst_27739);
var inst_27744 = cljs.core.reduced_QMARK_.call(null,inst_27743__$1);
var state_27756__$1 = (function (){var statearr_27764 = state_27756;
(statearr_27764[(9)] = inst_27743__$1);

return statearr_27764;
})();
if(inst_27744){
var statearr_27765_27783 = state_27756__$1;
(statearr_27765_27783[(1)] = (8));

} else {
var statearr_27766_27784 = state_27756__$1;
(statearr_27766_27784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (3))){
var inst_27754 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27756__$1,inst_27754);
} else {
if((state_val_27757 === (2))){
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27756__$1,(4),ch);
} else {
if((state_val_27757 === (9))){
var inst_27743 = (state_27756[(9)]);
var inst_27736 = inst_27743;
var state_27756__$1 = (function (){var statearr_27767 = state_27756;
(statearr_27767[(7)] = inst_27736);

return statearr_27767;
})();
var statearr_27768_27785 = state_27756__$1;
(statearr_27768_27785[(2)] = null);

(statearr_27768_27785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (5))){
var inst_27736 = (state_27756[(7)]);
var state_27756__$1 = state_27756;
var statearr_27769_27786 = state_27756__$1;
(statearr_27769_27786[(2)] = inst_27736);

(statearr_27769_27786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (10))){
var inst_27750 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27770_27787 = state_27756__$1;
(statearr_27770_27787[(2)] = inst_27750);

(statearr_27770_27787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (8))){
var inst_27743 = (state_27756[(9)]);
var inst_27746 = cljs.core.deref.call(null,inst_27743);
var state_27756__$1 = state_27756;
var statearr_27771_27788 = state_27756__$1;
(statearr_27771_27788[(2)] = inst_27746);

(statearr_27771_27788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26879__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26879__auto____0 = (function (){
var statearr_27775 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27775[(0)] = cljs$core$async$reduce_$_state_machine__26879__auto__);

(statearr_27775[(1)] = (1));

return statearr_27775;
});
var cljs$core$async$reduce_$_state_machine__26879__auto____1 = (function (state_27756){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27776){if((e27776 instanceof Object)){
var ex__26882__auto__ = e27776;
var statearr_27777_27789 = state_27756;
(statearr_27777_27789[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27790 = state_27756;
state_27756 = G__27790;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26879__auto__ = function(state_27756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26879__auto____1.call(this,state_27756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26879__auto____0;
cljs$core$async$reduce_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26879__auto____1;
return cljs$core$async$reduce_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__))
})();
var state__26992__auto__ = (function (){var statearr_27778 = f__26991__auto__.call(null);
(statearr_27778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_27778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__))
);

return c__26990__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27791 = [];
var len__25893__auto___27843 = arguments.length;
var i__25894__auto___27844 = (0);
while(true){
if((i__25894__auto___27844 < len__25893__auto___27843)){
args27791.push((arguments[i__25894__auto___27844]));

var G__27845 = (i__25894__auto___27844 + (1));
i__25894__auto___27844 = G__27845;
continue;
} else {
}
break;
}

var G__27793 = args27791.length;
switch (G__27793) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27791.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__){
return (function (state_27818){
var state_val_27819 = (state_27818[(1)]);
if((state_val_27819 === (7))){
var inst_27800 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
var statearr_27820_27847 = state_27818__$1;
(statearr_27820_27847[(2)] = inst_27800);

(statearr_27820_27847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (1))){
var inst_27794 = cljs.core.seq.call(null,coll);
var inst_27795 = inst_27794;
var state_27818__$1 = (function (){var statearr_27821 = state_27818;
(statearr_27821[(7)] = inst_27795);

return statearr_27821;
})();
var statearr_27822_27848 = state_27818__$1;
(statearr_27822_27848[(2)] = null);

(statearr_27822_27848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (4))){
var inst_27795 = (state_27818[(7)]);
var inst_27798 = cljs.core.first.call(null,inst_27795);
var state_27818__$1 = state_27818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27818__$1,(7),ch,inst_27798);
} else {
if((state_val_27819 === (13))){
var inst_27812 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
var statearr_27823_27849 = state_27818__$1;
(statearr_27823_27849[(2)] = inst_27812);

(statearr_27823_27849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (6))){
var inst_27803 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
if(cljs.core.truth_(inst_27803)){
var statearr_27824_27850 = state_27818__$1;
(statearr_27824_27850[(1)] = (8));

} else {
var statearr_27825_27851 = state_27818__$1;
(statearr_27825_27851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (3))){
var inst_27816 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27818__$1,inst_27816);
} else {
if((state_val_27819 === (12))){
var state_27818__$1 = state_27818;
var statearr_27826_27852 = state_27818__$1;
(statearr_27826_27852[(2)] = null);

(statearr_27826_27852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (2))){
var inst_27795 = (state_27818[(7)]);
var state_27818__$1 = state_27818;
if(cljs.core.truth_(inst_27795)){
var statearr_27827_27853 = state_27818__$1;
(statearr_27827_27853[(1)] = (4));

} else {
var statearr_27828_27854 = state_27818__$1;
(statearr_27828_27854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (11))){
var inst_27809 = cljs.core.async.close_BANG_.call(null,ch);
var state_27818__$1 = state_27818;
var statearr_27829_27855 = state_27818__$1;
(statearr_27829_27855[(2)] = inst_27809);

(statearr_27829_27855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (9))){
var state_27818__$1 = state_27818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27830_27856 = state_27818__$1;
(statearr_27830_27856[(1)] = (11));

} else {
var statearr_27831_27857 = state_27818__$1;
(statearr_27831_27857[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (5))){
var inst_27795 = (state_27818[(7)]);
var state_27818__$1 = state_27818;
var statearr_27832_27858 = state_27818__$1;
(statearr_27832_27858[(2)] = inst_27795);

(statearr_27832_27858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (10))){
var inst_27814 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
var statearr_27833_27859 = state_27818__$1;
(statearr_27833_27859[(2)] = inst_27814);

(statearr_27833_27859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (8))){
var inst_27795 = (state_27818[(7)]);
var inst_27805 = cljs.core.next.call(null,inst_27795);
var inst_27795__$1 = inst_27805;
var state_27818__$1 = (function (){var statearr_27834 = state_27818;
(statearr_27834[(7)] = inst_27795__$1);

return statearr_27834;
})();
var statearr_27835_27860 = state_27818__$1;
(statearr_27835_27860[(2)] = null);

(statearr_27835_27860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_27839 = [null,null,null,null,null,null,null,null];
(statearr_27839[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_27839[(1)] = (1));

return statearr_27839;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_27818){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_27818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e27840){if((e27840 instanceof Object)){
var ex__26882__auto__ = e27840;
var statearr_27841_27861 = state_27818;
(statearr_27841_27861[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27862 = state_27818;
state_27818 = G__27862;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_27818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_27818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__))
})();
var state__26992__auto__ = (function (){var statearr_27842 = f__26991__auto__.call(null);
(statearr_27842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_27842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__))
);

return c__26990__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m,ch);
} else {
var m__25482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m);
} else {
var m__25482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28088 = (function (mult,ch,cs,meta28089){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28089 = meta28089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28090,meta28089__$1){
var self__ = this;
var _28090__$1 = this;
return (new cljs.core.async.t_cljs$core$async28088(self__.mult,self__.ch,self__.cs,meta28089__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28090){
var self__ = this;
var _28090__$1 = this;
return self__.meta28089;
});})(cs))
;

cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28088.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28088.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28089","meta28089",782940841,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28088";

cljs.core.async.t_cljs$core$async28088.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async28088");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28088 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28088(mult__$1,ch__$1,cs__$1,meta28089){
return (new cljs.core.async.t_cljs$core$async28088(mult__$1,ch__$1,cs__$1,meta28089));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28088(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26990__auto___28313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___28313,cs,m,dchan,dctr,done){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___28313,cs,m,dchan,dctr,done){
return (function (state_28225){
var state_val_28226 = (state_28225[(1)]);
if((state_val_28226 === (7))){
var inst_28221 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28227_28314 = state_28225__$1;
(statearr_28227_28314[(2)] = inst_28221);

(statearr_28227_28314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (20))){
var inst_28124 = (state_28225[(7)]);
var inst_28136 = cljs.core.first.call(null,inst_28124);
var inst_28137 = cljs.core.nth.call(null,inst_28136,(0),null);
var inst_28138 = cljs.core.nth.call(null,inst_28136,(1),null);
var state_28225__$1 = (function (){var statearr_28228 = state_28225;
(statearr_28228[(8)] = inst_28137);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28138)){
var statearr_28229_28315 = state_28225__$1;
(statearr_28229_28315[(1)] = (22));

} else {
var statearr_28230_28316 = state_28225__$1;
(statearr_28230_28316[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (27))){
var inst_28166 = (state_28225[(9)]);
var inst_28173 = (state_28225[(10)]);
var inst_28093 = (state_28225[(11)]);
var inst_28168 = (state_28225[(12)]);
var inst_28173__$1 = cljs.core._nth.call(null,inst_28166,inst_28168);
var inst_28174 = cljs.core.async.put_BANG_.call(null,inst_28173__$1,inst_28093,done);
var state_28225__$1 = (function (){var statearr_28231 = state_28225;
(statearr_28231[(10)] = inst_28173__$1);

return statearr_28231;
})();
if(cljs.core.truth_(inst_28174)){
var statearr_28232_28317 = state_28225__$1;
(statearr_28232_28317[(1)] = (30));

} else {
var statearr_28233_28318 = state_28225__$1;
(statearr_28233_28318[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (1))){
var state_28225__$1 = state_28225;
var statearr_28234_28319 = state_28225__$1;
(statearr_28234_28319[(2)] = null);

(statearr_28234_28319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (24))){
var inst_28124 = (state_28225[(7)]);
var inst_28143 = (state_28225[(2)]);
var inst_28144 = cljs.core.next.call(null,inst_28124);
var inst_28102 = inst_28144;
var inst_28103 = null;
var inst_28104 = (0);
var inst_28105 = (0);
var state_28225__$1 = (function (){var statearr_28235 = state_28225;
(statearr_28235[(13)] = inst_28102);

(statearr_28235[(14)] = inst_28143);

(statearr_28235[(15)] = inst_28104);

(statearr_28235[(16)] = inst_28103);

(statearr_28235[(17)] = inst_28105);

return statearr_28235;
})();
var statearr_28236_28320 = state_28225__$1;
(statearr_28236_28320[(2)] = null);

(statearr_28236_28320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (39))){
var state_28225__$1 = state_28225;
var statearr_28240_28321 = state_28225__$1;
(statearr_28240_28321[(2)] = null);

(statearr_28240_28321[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (4))){
var inst_28093 = (state_28225[(11)]);
var inst_28093__$1 = (state_28225[(2)]);
var inst_28094 = (inst_28093__$1 == null);
var state_28225__$1 = (function (){var statearr_28241 = state_28225;
(statearr_28241[(11)] = inst_28093__$1);

return statearr_28241;
})();
if(cljs.core.truth_(inst_28094)){
var statearr_28242_28322 = state_28225__$1;
(statearr_28242_28322[(1)] = (5));

} else {
var statearr_28243_28323 = state_28225__$1;
(statearr_28243_28323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (15))){
var inst_28102 = (state_28225[(13)]);
var inst_28104 = (state_28225[(15)]);
var inst_28103 = (state_28225[(16)]);
var inst_28105 = (state_28225[(17)]);
var inst_28120 = (state_28225[(2)]);
var inst_28121 = (inst_28105 + (1));
var tmp28237 = inst_28102;
var tmp28238 = inst_28104;
var tmp28239 = inst_28103;
var inst_28102__$1 = tmp28237;
var inst_28103__$1 = tmp28239;
var inst_28104__$1 = tmp28238;
var inst_28105__$1 = inst_28121;
var state_28225__$1 = (function (){var statearr_28244 = state_28225;
(statearr_28244[(13)] = inst_28102__$1);

(statearr_28244[(18)] = inst_28120);

(statearr_28244[(15)] = inst_28104__$1);

(statearr_28244[(16)] = inst_28103__$1);

(statearr_28244[(17)] = inst_28105__$1);

return statearr_28244;
})();
var statearr_28245_28324 = state_28225__$1;
(statearr_28245_28324[(2)] = null);

(statearr_28245_28324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (21))){
var inst_28147 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28249_28325 = state_28225__$1;
(statearr_28249_28325[(2)] = inst_28147);

(statearr_28249_28325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (31))){
var inst_28173 = (state_28225[(10)]);
var inst_28177 = done.call(null,null);
var inst_28178 = cljs.core.async.untap_STAR_.call(null,m,inst_28173);
var state_28225__$1 = (function (){var statearr_28250 = state_28225;
(statearr_28250[(19)] = inst_28177);

return statearr_28250;
})();
var statearr_28251_28326 = state_28225__$1;
(statearr_28251_28326[(2)] = inst_28178);

(statearr_28251_28326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (32))){
var inst_28166 = (state_28225[(9)]);
var inst_28165 = (state_28225[(20)]);
var inst_28167 = (state_28225[(21)]);
var inst_28168 = (state_28225[(12)]);
var inst_28180 = (state_28225[(2)]);
var inst_28181 = (inst_28168 + (1));
var tmp28246 = inst_28166;
var tmp28247 = inst_28165;
var tmp28248 = inst_28167;
var inst_28165__$1 = tmp28247;
var inst_28166__$1 = tmp28246;
var inst_28167__$1 = tmp28248;
var inst_28168__$1 = inst_28181;
var state_28225__$1 = (function (){var statearr_28252 = state_28225;
(statearr_28252[(9)] = inst_28166__$1);

(statearr_28252[(20)] = inst_28165__$1);

(statearr_28252[(21)] = inst_28167__$1);

(statearr_28252[(22)] = inst_28180);

(statearr_28252[(12)] = inst_28168__$1);

return statearr_28252;
})();
var statearr_28253_28327 = state_28225__$1;
(statearr_28253_28327[(2)] = null);

(statearr_28253_28327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (40))){
var inst_28193 = (state_28225[(23)]);
var inst_28197 = done.call(null,null);
var inst_28198 = cljs.core.async.untap_STAR_.call(null,m,inst_28193);
var state_28225__$1 = (function (){var statearr_28254 = state_28225;
(statearr_28254[(24)] = inst_28197);

return statearr_28254;
})();
var statearr_28255_28328 = state_28225__$1;
(statearr_28255_28328[(2)] = inst_28198);

(statearr_28255_28328[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (33))){
var inst_28184 = (state_28225[(25)]);
var inst_28186 = cljs.core.chunked_seq_QMARK_.call(null,inst_28184);
var state_28225__$1 = state_28225;
if(inst_28186){
var statearr_28256_28329 = state_28225__$1;
(statearr_28256_28329[(1)] = (36));

} else {
var statearr_28257_28330 = state_28225__$1;
(statearr_28257_28330[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (13))){
var inst_28114 = (state_28225[(26)]);
var inst_28117 = cljs.core.async.close_BANG_.call(null,inst_28114);
var state_28225__$1 = state_28225;
var statearr_28258_28331 = state_28225__$1;
(statearr_28258_28331[(2)] = inst_28117);

(statearr_28258_28331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (22))){
var inst_28137 = (state_28225[(8)]);
var inst_28140 = cljs.core.async.close_BANG_.call(null,inst_28137);
var state_28225__$1 = state_28225;
var statearr_28259_28332 = state_28225__$1;
(statearr_28259_28332[(2)] = inst_28140);

(statearr_28259_28332[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (36))){
var inst_28184 = (state_28225[(25)]);
var inst_28188 = cljs.core.chunk_first.call(null,inst_28184);
var inst_28189 = cljs.core.chunk_rest.call(null,inst_28184);
var inst_28190 = cljs.core.count.call(null,inst_28188);
var inst_28165 = inst_28189;
var inst_28166 = inst_28188;
var inst_28167 = inst_28190;
var inst_28168 = (0);
var state_28225__$1 = (function (){var statearr_28260 = state_28225;
(statearr_28260[(9)] = inst_28166);

(statearr_28260[(20)] = inst_28165);

(statearr_28260[(21)] = inst_28167);

(statearr_28260[(12)] = inst_28168);

return statearr_28260;
})();
var statearr_28261_28333 = state_28225__$1;
(statearr_28261_28333[(2)] = null);

(statearr_28261_28333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (41))){
var inst_28184 = (state_28225[(25)]);
var inst_28200 = (state_28225[(2)]);
var inst_28201 = cljs.core.next.call(null,inst_28184);
var inst_28165 = inst_28201;
var inst_28166 = null;
var inst_28167 = (0);
var inst_28168 = (0);
var state_28225__$1 = (function (){var statearr_28262 = state_28225;
(statearr_28262[(9)] = inst_28166);

(statearr_28262[(20)] = inst_28165);

(statearr_28262[(21)] = inst_28167);

(statearr_28262[(27)] = inst_28200);

(statearr_28262[(12)] = inst_28168);

return statearr_28262;
})();
var statearr_28263_28334 = state_28225__$1;
(statearr_28263_28334[(2)] = null);

(statearr_28263_28334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (43))){
var state_28225__$1 = state_28225;
var statearr_28264_28335 = state_28225__$1;
(statearr_28264_28335[(2)] = null);

(statearr_28264_28335[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (29))){
var inst_28209 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28265_28336 = state_28225__$1;
(statearr_28265_28336[(2)] = inst_28209);

(statearr_28265_28336[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (44))){
var inst_28218 = (state_28225[(2)]);
var state_28225__$1 = (function (){var statearr_28266 = state_28225;
(statearr_28266[(28)] = inst_28218);

return statearr_28266;
})();
var statearr_28267_28337 = state_28225__$1;
(statearr_28267_28337[(2)] = null);

(statearr_28267_28337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (6))){
var inst_28157 = (state_28225[(29)]);
var inst_28156 = cljs.core.deref.call(null,cs);
var inst_28157__$1 = cljs.core.keys.call(null,inst_28156);
var inst_28158 = cljs.core.count.call(null,inst_28157__$1);
var inst_28159 = cljs.core.reset_BANG_.call(null,dctr,inst_28158);
var inst_28164 = cljs.core.seq.call(null,inst_28157__$1);
var inst_28165 = inst_28164;
var inst_28166 = null;
var inst_28167 = (0);
var inst_28168 = (0);
var state_28225__$1 = (function (){var statearr_28268 = state_28225;
(statearr_28268[(9)] = inst_28166);

(statearr_28268[(20)] = inst_28165);

(statearr_28268[(29)] = inst_28157__$1);

(statearr_28268[(30)] = inst_28159);

(statearr_28268[(21)] = inst_28167);

(statearr_28268[(12)] = inst_28168);

return statearr_28268;
})();
var statearr_28269_28338 = state_28225__$1;
(statearr_28269_28338[(2)] = null);

(statearr_28269_28338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (28))){
var inst_28165 = (state_28225[(20)]);
var inst_28184 = (state_28225[(25)]);
var inst_28184__$1 = cljs.core.seq.call(null,inst_28165);
var state_28225__$1 = (function (){var statearr_28270 = state_28225;
(statearr_28270[(25)] = inst_28184__$1);

return statearr_28270;
})();
if(inst_28184__$1){
var statearr_28271_28339 = state_28225__$1;
(statearr_28271_28339[(1)] = (33));

} else {
var statearr_28272_28340 = state_28225__$1;
(statearr_28272_28340[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (25))){
var inst_28167 = (state_28225[(21)]);
var inst_28168 = (state_28225[(12)]);
var inst_28170 = (inst_28168 < inst_28167);
var inst_28171 = inst_28170;
var state_28225__$1 = state_28225;
if(cljs.core.truth_(inst_28171)){
var statearr_28273_28341 = state_28225__$1;
(statearr_28273_28341[(1)] = (27));

} else {
var statearr_28274_28342 = state_28225__$1;
(statearr_28274_28342[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (34))){
var state_28225__$1 = state_28225;
var statearr_28275_28343 = state_28225__$1;
(statearr_28275_28343[(2)] = null);

(statearr_28275_28343[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (17))){
var state_28225__$1 = state_28225;
var statearr_28276_28344 = state_28225__$1;
(statearr_28276_28344[(2)] = null);

(statearr_28276_28344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (3))){
var inst_28223 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28225__$1,inst_28223);
} else {
if((state_val_28226 === (12))){
var inst_28152 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28277_28345 = state_28225__$1;
(statearr_28277_28345[(2)] = inst_28152);

(statearr_28277_28345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (2))){
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,(4),ch);
} else {
if((state_val_28226 === (23))){
var state_28225__$1 = state_28225;
var statearr_28278_28346 = state_28225__$1;
(statearr_28278_28346[(2)] = null);

(statearr_28278_28346[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (35))){
var inst_28207 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28279_28347 = state_28225__$1;
(statearr_28279_28347[(2)] = inst_28207);

(statearr_28279_28347[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (19))){
var inst_28124 = (state_28225[(7)]);
var inst_28128 = cljs.core.chunk_first.call(null,inst_28124);
var inst_28129 = cljs.core.chunk_rest.call(null,inst_28124);
var inst_28130 = cljs.core.count.call(null,inst_28128);
var inst_28102 = inst_28129;
var inst_28103 = inst_28128;
var inst_28104 = inst_28130;
var inst_28105 = (0);
var state_28225__$1 = (function (){var statearr_28280 = state_28225;
(statearr_28280[(13)] = inst_28102);

(statearr_28280[(15)] = inst_28104);

(statearr_28280[(16)] = inst_28103);

(statearr_28280[(17)] = inst_28105);

return statearr_28280;
})();
var statearr_28281_28348 = state_28225__$1;
(statearr_28281_28348[(2)] = null);

(statearr_28281_28348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (11))){
var inst_28102 = (state_28225[(13)]);
var inst_28124 = (state_28225[(7)]);
var inst_28124__$1 = cljs.core.seq.call(null,inst_28102);
var state_28225__$1 = (function (){var statearr_28282 = state_28225;
(statearr_28282[(7)] = inst_28124__$1);

return statearr_28282;
})();
if(inst_28124__$1){
var statearr_28283_28349 = state_28225__$1;
(statearr_28283_28349[(1)] = (16));

} else {
var statearr_28284_28350 = state_28225__$1;
(statearr_28284_28350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (9))){
var inst_28154 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28285_28351 = state_28225__$1;
(statearr_28285_28351[(2)] = inst_28154);

(statearr_28285_28351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (5))){
var inst_28100 = cljs.core.deref.call(null,cs);
var inst_28101 = cljs.core.seq.call(null,inst_28100);
var inst_28102 = inst_28101;
var inst_28103 = null;
var inst_28104 = (0);
var inst_28105 = (0);
var state_28225__$1 = (function (){var statearr_28286 = state_28225;
(statearr_28286[(13)] = inst_28102);

(statearr_28286[(15)] = inst_28104);

(statearr_28286[(16)] = inst_28103);

(statearr_28286[(17)] = inst_28105);

return statearr_28286;
})();
var statearr_28287_28352 = state_28225__$1;
(statearr_28287_28352[(2)] = null);

(statearr_28287_28352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (14))){
var state_28225__$1 = state_28225;
var statearr_28288_28353 = state_28225__$1;
(statearr_28288_28353[(2)] = null);

(statearr_28288_28353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (45))){
var inst_28215 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28289_28354 = state_28225__$1;
(statearr_28289_28354[(2)] = inst_28215);

(statearr_28289_28354[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (26))){
var inst_28157 = (state_28225[(29)]);
var inst_28211 = (state_28225[(2)]);
var inst_28212 = cljs.core.seq.call(null,inst_28157);
var state_28225__$1 = (function (){var statearr_28290 = state_28225;
(statearr_28290[(31)] = inst_28211);

return statearr_28290;
})();
if(inst_28212){
var statearr_28291_28355 = state_28225__$1;
(statearr_28291_28355[(1)] = (42));

} else {
var statearr_28292_28356 = state_28225__$1;
(statearr_28292_28356[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (16))){
var inst_28124 = (state_28225[(7)]);
var inst_28126 = cljs.core.chunked_seq_QMARK_.call(null,inst_28124);
var state_28225__$1 = state_28225;
if(inst_28126){
var statearr_28293_28357 = state_28225__$1;
(statearr_28293_28357[(1)] = (19));

} else {
var statearr_28294_28358 = state_28225__$1;
(statearr_28294_28358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (38))){
var inst_28204 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28295_28359 = state_28225__$1;
(statearr_28295_28359[(2)] = inst_28204);

(statearr_28295_28359[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (30))){
var state_28225__$1 = state_28225;
var statearr_28296_28360 = state_28225__$1;
(statearr_28296_28360[(2)] = null);

(statearr_28296_28360[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (10))){
var inst_28103 = (state_28225[(16)]);
var inst_28105 = (state_28225[(17)]);
var inst_28113 = cljs.core._nth.call(null,inst_28103,inst_28105);
var inst_28114 = cljs.core.nth.call(null,inst_28113,(0),null);
var inst_28115 = cljs.core.nth.call(null,inst_28113,(1),null);
var state_28225__$1 = (function (){var statearr_28297 = state_28225;
(statearr_28297[(26)] = inst_28114);

return statearr_28297;
})();
if(cljs.core.truth_(inst_28115)){
var statearr_28298_28361 = state_28225__$1;
(statearr_28298_28361[(1)] = (13));

} else {
var statearr_28299_28362 = state_28225__$1;
(statearr_28299_28362[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (18))){
var inst_28150 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28300_28363 = state_28225__$1;
(statearr_28300_28363[(2)] = inst_28150);

(statearr_28300_28363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (42))){
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,(45),dchan);
} else {
if((state_val_28226 === (37))){
var inst_28193 = (state_28225[(23)]);
var inst_28093 = (state_28225[(11)]);
var inst_28184 = (state_28225[(25)]);
var inst_28193__$1 = cljs.core.first.call(null,inst_28184);
var inst_28194 = cljs.core.async.put_BANG_.call(null,inst_28193__$1,inst_28093,done);
var state_28225__$1 = (function (){var statearr_28301 = state_28225;
(statearr_28301[(23)] = inst_28193__$1);

return statearr_28301;
})();
if(cljs.core.truth_(inst_28194)){
var statearr_28302_28364 = state_28225__$1;
(statearr_28302_28364[(1)] = (39));

} else {
var statearr_28303_28365 = state_28225__$1;
(statearr_28303_28365[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (8))){
var inst_28104 = (state_28225[(15)]);
var inst_28105 = (state_28225[(17)]);
var inst_28107 = (inst_28105 < inst_28104);
var inst_28108 = inst_28107;
var state_28225__$1 = state_28225;
if(cljs.core.truth_(inst_28108)){
var statearr_28304_28366 = state_28225__$1;
(statearr_28304_28366[(1)] = (10));

} else {
var statearr_28305_28367 = state_28225__$1;
(statearr_28305_28367[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___28313,cs,m,dchan,dctr,done))
;
return ((function (switch__26878__auto__,c__26990__auto___28313,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26879__auto__ = null;
var cljs$core$async$mult_$_state_machine__26879__auto____0 = (function (){
var statearr_28309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28309[(0)] = cljs$core$async$mult_$_state_machine__26879__auto__);

(statearr_28309[(1)] = (1));

return statearr_28309;
});
var cljs$core$async$mult_$_state_machine__26879__auto____1 = (function (state_28225){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_28225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e28310){if((e28310 instanceof Object)){
var ex__26882__auto__ = e28310;
var statearr_28311_28368 = state_28225;
(statearr_28311_28368[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28369 = state_28225;
state_28225 = G__28369;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26879__auto__ = function(state_28225){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26879__auto____1.call(this,state_28225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26879__auto____0;
cljs$core$async$mult_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26879__auto____1;
return cljs$core$async$mult_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___28313,cs,m,dchan,dctr,done))
})();
var state__26992__auto__ = (function (){var statearr_28312 = f__26991__auto__.call(null);
(statearr_28312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___28313);

return statearr_28312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___28313,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28370 = [];
var len__25893__auto___28373 = arguments.length;
var i__25894__auto___28374 = (0);
while(true){
if((i__25894__auto___28374 < len__25893__auto___28373)){
args28370.push((arguments[i__25894__auto___28374]));

var G__28375 = (i__25894__auto___28374 + (1));
i__25894__auto___28374 = G__28375;
continue;
} else {
}
break;
}

var G__28372 = args28370.length;
switch (G__28372) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28370.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m,ch);
} else {
var m__25482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m,ch);
} else {
var m__25482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m);
} else {
var m__25482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m,state_map);
} else {
var m__25482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25481__auto__ = (((m == null))?null:m);
var m__25482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,m,mode);
} else {
var m__25482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25900__auto__ = [];
var len__25893__auto___28387 = arguments.length;
var i__25894__auto___28388 = (0);
while(true){
if((i__25894__auto___28388 < len__25893__auto___28387)){
args__25900__auto__.push((arguments[i__25894__auto___28388]));

var G__28389 = (i__25894__auto___28388 + (1));
i__25894__auto___28388 = G__28389;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((3) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25901__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28381){
var map__28382 = p__28381;
var map__28382__$1 = ((((!((map__28382 == null)))?((((map__28382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28382):map__28382);
var opts = map__28382__$1;
var statearr_28384_28390 = state;
(statearr_28384_28390[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28382,map__28382__$1,opts){
return (function (val){
var statearr_28385_28391 = state;
(statearr_28385_28391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28382,map__28382__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28386_28392 = state;
(statearr_28386_28392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28377){
var G__28378 = cljs.core.first.call(null,seq28377);
var seq28377__$1 = cljs.core.next.call(null,seq28377);
var G__28379 = cljs.core.first.call(null,seq28377__$1);
var seq28377__$2 = cljs.core.next.call(null,seq28377__$1);
var G__28380 = cljs.core.first.call(null,seq28377__$2);
var seq28377__$3 = cljs.core.next.call(null,seq28377__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28378,G__28379,G__28380,seq28377__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28558 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28559){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28559 = meta28559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28560,meta28559__$1){
var self__ = this;
var _28560__$1 = this;
return (new cljs.core.async.t_cljs$core$async28558(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28559__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28560){
var self__ = this;
var _28560__$1 = this;
return self__.meta28559;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28559","meta28559",-1875983878,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28558";

cljs.core.async.t_cljs$core$async28558.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async28558");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28558 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28558(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28559){
return (new cljs.core.async.t_cljs$core$async28558(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28559));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28558(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26990__auto___28723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___28723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___28723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28660){
var state_val_28661 = (state_28660[(1)]);
if((state_val_28661 === (7))){
var inst_28576 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28662_28724 = state_28660__$1;
(statearr_28662_28724[(2)] = inst_28576);

(statearr_28662_28724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (20))){
var inst_28588 = (state_28660[(7)]);
var state_28660__$1 = state_28660;
var statearr_28663_28725 = state_28660__$1;
(statearr_28663_28725[(2)] = inst_28588);

(statearr_28663_28725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (27))){
var state_28660__$1 = state_28660;
var statearr_28664_28726 = state_28660__$1;
(statearr_28664_28726[(2)] = null);

(statearr_28664_28726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (1))){
var inst_28564 = (state_28660[(8)]);
var inst_28564__$1 = calc_state.call(null);
var inst_28566 = (inst_28564__$1 == null);
var inst_28567 = cljs.core.not.call(null,inst_28566);
var state_28660__$1 = (function (){var statearr_28665 = state_28660;
(statearr_28665[(8)] = inst_28564__$1);

return statearr_28665;
})();
if(inst_28567){
var statearr_28666_28727 = state_28660__$1;
(statearr_28666_28727[(1)] = (2));

} else {
var statearr_28667_28728 = state_28660__$1;
(statearr_28667_28728[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (24))){
var inst_28611 = (state_28660[(9)]);
var inst_28620 = (state_28660[(10)]);
var inst_28634 = (state_28660[(11)]);
var inst_28634__$1 = inst_28611.call(null,inst_28620);
var state_28660__$1 = (function (){var statearr_28668 = state_28660;
(statearr_28668[(11)] = inst_28634__$1);

return statearr_28668;
})();
if(cljs.core.truth_(inst_28634__$1)){
var statearr_28669_28729 = state_28660__$1;
(statearr_28669_28729[(1)] = (29));

} else {
var statearr_28670_28730 = state_28660__$1;
(statearr_28670_28730[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (4))){
var inst_28579 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28579)){
var statearr_28671_28731 = state_28660__$1;
(statearr_28671_28731[(1)] = (8));

} else {
var statearr_28672_28732 = state_28660__$1;
(statearr_28672_28732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (15))){
var inst_28605 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28605)){
var statearr_28673_28733 = state_28660__$1;
(statearr_28673_28733[(1)] = (19));

} else {
var statearr_28674_28734 = state_28660__$1;
(statearr_28674_28734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (21))){
var inst_28610 = (state_28660[(12)]);
var inst_28610__$1 = (state_28660[(2)]);
var inst_28611 = cljs.core.get.call(null,inst_28610__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28612 = cljs.core.get.call(null,inst_28610__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28613 = cljs.core.get.call(null,inst_28610__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28660__$1 = (function (){var statearr_28675 = state_28660;
(statearr_28675[(9)] = inst_28611);

(statearr_28675[(13)] = inst_28612);

(statearr_28675[(12)] = inst_28610__$1);

return statearr_28675;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28660__$1,(22),inst_28613);
} else {
if((state_val_28661 === (31))){
var inst_28642 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28642)){
var statearr_28676_28735 = state_28660__$1;
(statearr_28676_28735[(1)] = (32));

} else {
var statearr_28677_28736 = state_28660__$1;
(statearr_28677_28736[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (32))){
var inst_28619 = (state_28660[(14)]);
var state_28660__$1 = state_28660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28660__$1,(35),out,inst_28619);
} else {
if((state_val_28661 === (33))){
var inst_28610 = (state_28660[(12)]);
var inst_28588 = inst_28610;
var state_28660__$1 = (function (){var statearr_28678 = state_28660;
(statearr_28678[(7)] = inst_28588);

return statearr_28678;
})();
var statearr_28679_28737 = state_28660__$1;
(statearr_28679_28737[(2)] = null);

(statearr_28679_28737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (13))){
var inst_28588 = (state_28660[(7)]);
var inst_28595 = inst_28588.cljs$lang$protocol_mask$partition0$;
var inst_28596 = (inst_28595 & (64));
var inst_28597 = inst_28588.cljs$core$ISeq$;
var inst_28598 = (inst_28596) || (inst_28597);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28598)){
var statearr_28680_28738 = state_28660__$1;
(statearr_28680_28738[(1)] = (16));

} else {
var statearr_28681_28739 = state_28660__$1;
(statearr_28681_28739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (22))){
var inst_28620 = (state_28660[(10)]);
var inst_28619 = (state_28660[(14)]);
var inst_28618 = (state_28660[(2)]);
var inst_28619__$1 = cljs.core.nth.call(null,inst_28618,(0),null);
var inst_28620__$1 = cljs.core.nth.call(null,inst_28618,(1),null);
var inst_28621 = (inst_28619__$1 == null);
var inst_28622 = cljs.core._EQ_.call(null,inst_28620__$1,change);
var inst_28623 = (inst_28621) || (inst_28622);
var state_28660__$1 = (function (){var statearr_28682 = state_28660;
(statearr_28682[(10)] = inst_28620__$1);

(statearr_28682[(14)] = inst_28619__$1);

return statearr_28682;
})();
if(cljs.core.truth_(inst_28623)){
var statearr_28683_28740 = state_28660__$1;
(statearr_28683_28740[(1)] = (23));

} else {
var statearr_28684_28741 = state_28660__$1;
(statearr_28684_28741[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (36))){
var inst_28610 = (state_28660[(12)]);
var inst_28588 = inst_28610;
var state_28660__$1 = (function (){var statearr_28685 = state_28660;
(statearr_28685[(7)] = inst_28588);

return statearr_28685;
})();
var statearr_28686_28742 = state_28660__$1;
(statearr_28686_28742[(2)] = null);

(statearr_28686_28742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (29))){
var inst_28634 = (state_28660[(11)]);
var state_28660__$1 = state_28660;
var statearr_28687_28743 = state_28660__$1;
(statearr_28687_28743[(2)] = inst_28634);

(statearr_28687_28743[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (6))){
var state_28660__$1 = state_28660;
var statearr_28688_28744 = state_28660__$1;
(statearr_28688_28744[(2)] = false);

(statearr_28688_28744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (28))){
var inst_28630 = (state_28660[(2)]);
var inst_28631 = calc_state.call(null);
var inst_28588 = inst_28631;
var state_28660__$1 = (function (){var statearr_28689 = state_28660;
(statearr_28689[(7)] = inst_28588);

(statearr_28689[(15)] = inst_28630);

return statearr_28689;
})();
var statearr_28690_28745 = state_28660__$1;
(statearr_28690_28745[(2)] = null);

(statearr_28690_28745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (25))){
var inst_28656 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28691_28746 = state_28660__$1;
(statearr_28691_28746[(2)] = inst_28656);

(statearr_28691_28746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (34))){
var inst_28654 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28692_28747 = state_28660__$1;
(statearr_28692_28747[(2)] = inst_28654);

(statearr_28692_28747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (17))){
var state_28660__$1 = state_28660;
var statearr_28693_28748 = state_28660__$1;
(statearr_28693_28748[(2)] = false);

(statearr_28693_28748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (3))){
var state_28660__$1 = state_28660;
var statearr_28694_28749 = state_28660__$1;
(statearr_28694_28749[(2)] = false);

(statearr_28694_28749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (12))){
var inst_28658 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28660__$1,inst_28658);
} else {
if((state_val_28661 === (2))){
var inst_28564 = (state_28660[(8)]);
var inst_28569 = inst_28564.cljs$lang$protocol_mask$partition0$;
var inst_28570 = (inst_28569 & (64));
var inst_28571 = inst_28564.cljs$core$ISeq$;
var inst_28572 = (inst_28570) || (inst_28571);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28572)){
var statearr_28695_28750 = state_28660__$1;
(statearr_28695_28750[(1)] = (5));

} else {
var statearr_28696_28751 = state_28660__$1;
(statearr_28696_28751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (23))){
var inst_28619 = (state_28660[(14)]);
var inst_28625 = (inst_28619 == null);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28625)){
var statearr_28697_28752 = state_28660__$1;
(statearr_28697_28752[(1)] = (26));

} else {
var statearr_28698_28753 = state_28660__$1;
(statearr_28698_28753[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (35))){
var inst_28645 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28645)){
var statearr_28699_28754 = state_28660__$1;
(statearr_28699_28754[(1)] = (36));

} else {
var statearr_28700_28755 = state_28660__$1;
(statearr_28700_28755[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (19))){
var inst_28588 = (state_28660[(7)]);
var inst_28607 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28588);
var state_28660__$1 = state_28660;
var statearr_28701_28756 = state_28660__$1;
(statearr_28701_28756[(2)] = inst_28607);

(statearr_28701_28756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (11))){
var inst_28588 = (state_28660[(7)]);
var inst_28592 = (inst_28588 == null);
var inst_28593 = cljs.core.not.call(null,inst_28592);
var state_28660__$1 = state_28660;
if(inst_28593){
var statearr_28702_28757 = state_28660__$1;
(statearr_28702_28757[(1)] = (13));

} else {
var statearr_28703_28758 = state_28660__$1;
(statearr_28703_28758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (9))){
var inst_28564 = (state_28660[(8)]);
var state_28660__$1 = state_28660;
var statearr_28704_28759 = state_28660__$1;
(statearr_28704_28759[(2)] = inst_28564);

(statearr_28704_28759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (5))){
var state_28660__$1 = state_28660;
var statearr_28705_28760 = state_28660__$1;
(statearr_28705_28760[(2)] = true);

(statearr_28705_28760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (14))){
var state_28660__$1 = state_28660;
var statearr_28706_28761 = state_28660__$1;
(statearr_28706_28761[(2)] = false);

(statearr_28706_28761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (26))){
var inst_28620 = (state_28660[(10)]);
var inst_28627 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28620);
var state_28660__$1 = state_28660;
var statearr_28707_28762 = state_28660__$1;
(statearr_28707_28762[(2)] = inst_28627);

(statearr_28707_28762[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (16))){
var state_28660__$1 = state_28660;
var statearr_28708_28763 = state_28660__$1;
(statearr_28708_28763[(2)] = true);

(statearr_28708_28763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (38))){
var inst_28650 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28709_28764 = state_28660__$1;
(statearr_28709_28764[(2)] = inst_28650);

(statearr_28709_28764[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (30))){
var inst_28611 = (state_28660[(9)]);
var inst_28620 = (state_28660[(10)]);
var inst_28612 = (state_28660[(13)]);
var inst_28637 = cljs.core.empty_QMARK_.call(null,inst_28611);
var inst_28638 = inst_28612.call(null,inst_28620);
var inst_28639 = cljs.core.not.call(null,inst_28638);
var inst_28640 = (inst_28637) && (inst_28639);
var state_28660__$1 = state_28660;
var statearr_28710_28765 = state_28660__$1;
(statearr_28710_28765[(2)] = inst_28640);

(statearr_28710_28765[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (10))){
var inst_28564 = (state_28660[(8)]);
var inst_28584 = (state_28660[(2)]);
var inst_28585 = cljs.core.get.call(null,inst_28584,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28586 = cljs.core.get.call(null,inst_28584,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28587 = cljs.core.get.call(null,inst_28584,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28588 = inst_28564;
var state_28660__$1 = (function (){var statearr_28711 = state_28660;
(statearr_28711[(16)] = inst_28586);

(statearr_28711[(7)] = inst_28588);

(statearr_28711[(17)] = inst_28585);

(statearr_28711[(18)] = inst_28587);

return statearr_28711;
})();
var statearr_28712_28766 = state_28660__$1;
(statearr_28712_28766[(2)] = null);

(statearr_28712_28766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (18))){
var inst_28602 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28713_28767 = state_28660__$1;
(statearr_28713_28767[(2)] = inst_28602);

(statearr_28713_28767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (37))){
var state_28660__$1 = state_28660;
var statearr_28714_28768 = state_28660__$1;
(statearr_28714_28768[(2)] = null);

(statearr_28714_28768[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (8))){
var inst_28564 = (state_28660[(8)]);
var inst_28581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28564);
var state_28660__$1 = state_28660;
var statearr_28715_28769 = state_28660__$1;
(statearr_28715_28769[(2)] = inst_28581);

(statearr_28715_28769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___28723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26878__auto__,c__26990__auto___28723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26879__auto__ = null;
var cljs$core$async$mix_$_state_machine__26879__auto____0 = (function (){
var statearr_28719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28719[(0)] = cljs$core$async$mix_$_state_machine__26879__auto__);

(statearr_28719[(1)] = (1));

return statearr_28719;
});
var cljs$core$async$mix_$_state_machine__26879__auto____1 = (function (state_28660){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_28660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e28720){if((e28720 instanceof Object)){
var ex__26882__auto__ = e28720;
var statearr_28721_28770 = state_28660;
(statearr_28721_28770[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28771 = state_28660;
state_28660 = G__28771;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26879__auto__ = function(state_28660){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26879__auto____1.call(this,state_28660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26879__auto____0;
cljs$core$async$mix_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26879__auto____1;
return cljs$core$async$mix_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___28723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26992__auto__ = (function (){var statearr_28722 = f__26991__auto__.call(null);
(statearr_28722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___28723);

return statearr_28722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___28723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25481__auto__ = (((p == null))?null:p);
var m__25482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25481__auto__ = (((p == null))?null:p);
var m__25482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,p,v,ch);
} else {
var m__25482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28772 = [];
var len__25893__auto___28775 = arguments.length;
var i__25894__auto___28776 = (0);
while(true){
if((i__25894__auto___28776 < len__25893__auto___28775)){
args28772.push((arguments[i__25894__auto___28776]));

var G__28777 = (i__25894__auto___28776 + (1));
i__25894__auto___28776 = G__28777;
continue;
} else {
}
break;
}

var G__28774 = args28772.length;
switch (G__28774) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28772.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25481__auto__ = (((p == null))?null:p);
var m__25482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,p);
} else {
var m__25482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25481__auto__ = (((p == null))?null:p);
var m__25482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,p,v);
} else {
var m__25482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28780 = [];
var len__25893__auto___28905 = arguments.length;
var i__25894__auto___28906 = (0);
while(true){
if((i__25894__auto___28906 < len__25893__auto___28905)){
args28780.push((arguments[i__25894__auto___28906]));

var G__28907 = (i__25894__auto___28906 + (1));
i__25894__auto___28906 = G__28907;
continue;
} else {
}
break;
}

var G__28782 = args28780.length;
switch (G__28782) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28780.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24818__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24818__auto__,mults){
return (function (p1__28779_SHARP_){
if(cljs.core.truth_(p1__28779_SHARP_.call(null,topic))){
return p1__28779_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28779_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24818__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28783 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28784){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28784 = meta28784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28785,meta28784__$1){
var self__ = this;
var _28785__$1 = this;
return (new cljs.core.async.t_cljs$core$async28783(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28784__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28785){
var self__ = this;
var _28785__$1 = this;
return self__.meta28784;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28784","meta28784",-434754772,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28783";

cljs.core.async.t_cljs$core$async28783.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async28783");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28783 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28784){
return (new cljs.core.async.t_cljs$core$async28783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28784));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28783(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26990__auto___28909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___28909,mults,ensure_mult,p){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___28909,mults,ensure_mult,p){
return (function (state_28857){
var state_val_28858 = (state_28857[(1)]);
if((state_val_28858 === (7))){
var inst_28853 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28859_28910 = state_28857__$1;
(statearr_28859_28910[(2)] = inst_28853);

(statearr_28859_28910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (20))){
var state_28857__$1 = state_28857;
var statearr_28860_28911 = state_28857__$1;
(statearr_28860_28911[(2)] = null);

(statearr_28860_28911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (1))){
var state_28857__$1 = state_28857;
var statearr_28861_28912 = state_28857__$1;
(statearr_28861_28912[(2)] = null);

(statearr_28861_28912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (24))){
var inst_28836 = (state_28857[(7)]);
var inst_28845 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28836);
var state_28857__$1 = state_28857;
var statearr_28862_28913 = state_28857__$1;
(statearr_28862_28913[(2)] = inst_28845);

(statearr_28862_28913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (4))){
var inst_28788 = (state_28857[(8)]);
var inst_28788__$1 = (state_28857[(2)]);
var inst_28789 = (inst_28788__$1 == null);
var state_28857__$1 = (function (){var statearr_28863 = state_28857;
(statearr_28863[(8)] = inst_28788__$1);

return statearr_28863;
})();
if(cljs.core.truth_(inst_28789)){
var statearr_28864_28914 = state_28857__$1;
(statearr_28864_28914[(1)] = (5));

} else {
var statearr_28865_28915 = state_28857__$1;
(statearr_28865_28915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (15))){
var inst_28830 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28866_28916 = state_28857__$1;
(statearr_28866_28916[(2)] = inst_28830);

(statearr_28866_28916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (21))){
var inst_28850 = (state_28857[(2)]);
var state_28857__$1 = (function (){var statearr_28867 = state_28857;
(statearr_28867[(9)] = inst_28850);

return statearr_28867;
})();
var statearr_28868_28917 = state_28857__$1;
(statearr_28868_28917[(2)] = null);

(statearr_28868_28917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (13))){
var inst_28812 = (state_28857[(10)]);
var inst_28814 = cljs.core.chunked_seq_QMARK_.call(null,inst_28812);
var state_28857__$1 = state_28857;
if(inst_28814){
var statearr_28869_28918 = state_28857__$1;
(statearr_28869_28918[(1)] = (16));

} else {
var statearr_28870_28919 = state_28857__$1;
(statearr_28870_28919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (22))){
var inst_28842 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
if(cljs.core.truth_(inst_28842)){
var statearr_28871_28920 = state_28857__$1;
(statearr_28871_28920[(1)] = (23));

} else {
var statearr_28872_28921 = state_28857__$1;
(statearr_28872_28921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (6))){
var inst_28838 = (state_28857[(11)]);
var inst_28788 = (state_28857[(8)]);
var inst_28836 = (state_28857[(7)]);
var inst_28836__$1 = topic_fn.call(null,inst_28788);
var inst_28837 = cljs.core.deref.call(null,mults);
var inst_28838__$1 = cljs.core.get.call(null,inst_28837,inst_28836__$1);
var state_28857__$1 = (function (){var statearr_28873 = state_28857;
(statearr_28873[(11)] = inst_28838__$1);

(statearr_28873[(7)] = inst_28836__$1);

return statearr_28873;
})();
if(cljs.core.truth_(inst_28838__$1)){
var statearr_28874_28922 = state_28857__$1;
(statearr_28874_28922[(1)] = (19));

} else {
var statearr_28875_28923 = state_28857__$1;
(statearr_28875_28923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (25))){
var inst_28847 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28876_28924 = state_28857__$1;
(statearr_28876_28924[(2)] = inst_28847);

(statearr_28876_28924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (17))){
var inst_28812 = (state_28857[(10)]);
var inst_28821 = cljs.core.first.call(null,inst_28812);
var inst_28822 = cljs.core.async.muxch_STAR_.call(null,inst_28821);
var inst_28823 = cljs.core.async.close_BANG_.call(null,inst_28822);
var inst_28824 = cljs.core.next.call(null,inst_28812);
var inst_28798 = inst_28824;
var inst_28799 = null;
var inst_28800 = (0);
var inst_28801 = (0);
var state_28857__$1 = (function (){var statearr_28877 = state_28857;
(statearr_28877[(12)] = inst_28799);

(statearr_28877[(13)] = inst_28801);

(statearr_28877[(14)] = inst_28800);

(statearr_28877[(15)] = inst_28798);

(statearr_28877[(16)] = inst_28823);

return statearr_28877;
})();
var statearr_28878_28925 = state_28857__$1;
(statearr_28878_28925[(2)] = null);

(statearr_28878_28925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (3))){
var inst_28855 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28857__$1,inst_28855);
} else {
if((state_val_28858 === (12))){
var inst_28832 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28879_28926 = state_28857__$1;
(statearr_28879_28926[(2)] = inst_28832);

(statearr_28879_28926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (2))){
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28857__$1,(4),ch);
} else {
if((state_val_28858 === (23))){
var state_28857__$1 = state_28857;
var statearr_28880_28927 = state_28857__$1;
(statearr_28880_28927[(2)] = null);

(statearr_28880_28927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (19))){
var inst_28838 = (state_28857[(11)]);
var inst_28788 = (state_28857[(8)]);
var inst_28840 = cljs.core.async.muxch_STAR_.call(null,inst_28838);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28857__$1,(22),inst_28840,inst_28788);
} else {
if((state_val_28858 === (11))){
var inst_28812 = (state_28857[(10)]);
var inst_28798 = (state_28857[(15)]);
var inst_28812__$1 = cljs.core.seq.call(null,inst_28798);
var state_28857__$1 = (function (){var statearr_28881 = state_28857;
(statearr_28881[(10)] = inst_28812__$1);

return statearr_28881;
})();
if(inst_28812__$1){
var statearr_28882_28928 = state_28857__$1;
(statearr_28882_28928[(1)] = (13));

} else {
var statearr_28883_28929 = state_28857__$1;
(statearr_28883_28929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (9))){
var inst_28834 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28884_28930 = state_28857__$1;
(statearr_28884_28930[(2)] = inst_28834);

(statearr_28884_28930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (5))){
var inst_28795 = cljs.core.deref.call(null,mults);
var inst_28796 = cljs.core.vals.call(null,inst_28795);
var inst_28797 = cljs.core.seq.call(null,inst_28796);
var inst_28798 = inst_28797;
var inst_28799 = null;
var inst_28800 = (0);
var inst_28801 = (0);
var state_28857__$1 = (function (){var statearr_28885 = state_28857;
(statearr_28885[(12)] = inst_28799);

(statearr_28885[(13)] = inst_28801);

(statearr_28885[(14)] = inst_28800);

(statearr_28885[(15)] = inst_28798);

return statearr_28885;
})();
var statearr_28886_28931 = state_28857__$1;
(statearr_28886_28931[(2)] = null);

(statearr_28886_28931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (14))){
var state_28857__$1 = state_28857;
var statearr_28890_28932 = state_28857__$1;
(statearr_28890_28932[(2)] = null);

(statearr_28890_28932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (16))){
var inst_28812 = (state_28857[(10)]);
var inst_28816 = cljs.core.chunk_first.call(null,inst_28812);
var inst_28817 = cljs.core.chunk_rest.call(null,inst_28812);
var inst_28818 = cljs.core.count.call(null,inst_28816);
var inst_28798 = inst_28817;
var inst_28799 = inst_28816;
var inst_28800 = inst_28818;
var inst_28801 = (0);
var state_28857__$1 = (function (){var statearr_28891 = state_28857;
(statearr_28891[(12)] = inst_28799);

(statearr_28891[(13)] = inst_28801);

(statearr_28891[(14)] = inst_28800);

(statearr_28891[(15)] = inst_28798);

return statearr_28891;
})();
var statearr_28892_28933 = state_28857__$1;
(statearr_28892_28933[(2)] = null);

(statearr_28892_28933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (10))){
var inst_28799 = (state_28857[(12)]);
var inst_28801 = (state_28857[(13)]);
var inst_28800 = (state_28857[(14)]);
var inst_28798 = (state_28857[(15)]);
var inst_28806 = cljs.core._nth.call(null,inst_28799,inst_28801);
var inst_28807 = cljs.core.async.muxch_STAR_.call(null,inst_28806);
var inst_28808 = cljs.core.async.close_BANG_.call(null,inst_28807);
var inst_28809 = (inst_28801 + (1));
var tmp28887 = inst_28799;
var tmp28888 = inst_28800;
var tmp28889 = inst_28798;
var inst_28798__$1 = tmp28889;
var inst_28799__$1 = tmp28887;
var inst_28800__$1 = tmp28888;
var inst_28801__$1 = inst_28809;
var state_28857__$1 = (function (){var statearr_28893 = state_28857;
(statearr_28893[(12)] = inst_28799__$1);

(statearr_28893[(13)] = inst_28801__$1);

(statearr_28893[(14)] = inst_28800__$1);

(statearr_28893[(17)] = inst_28808);

(statearr_28893[(15)] = inst_28798__$1);

return statearr_28893;
})();
var statearr_28894_28934 = state_28857__$1;
(statearr_28894_28934[(2)] = null);

(statearr_28894_28934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (18))){
var inst_28827 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28895_28935 = state_28857__$1;
(statearr_28895_28935[(2)] = inst_28827);

(statearr_28895_28935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (8))){
var inst_28801 = (state_28857[(13)]);
var inst_28800 = (state_28857[(14)]);
var inst_28803 = (inst_28801 < inst_28800);
var inst_28804 = inst_28803;
var state_28857__$1 = state_28857;
if(cljs.core.truth_(inst_28804)){
var statearr_28896_28936 = state_28857__$1;
(statearr_28896_28936[(1)] = (10));

} else {
var statearr_28897_28937 = state_28857__$1;
(statearr_28897_28937[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___28909,mults,ensure_mult,p))
;
return ((function (switch__26878__auto__,c__26990__auto___28909,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_28901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28901[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_28901[(1)] = (1));

return statearr_28901;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_28857){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_28857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e28902){if((e28902 instanceof Object)){
var ex__26882__auto__ = e28902;
var statearr_28903_28938 = state_28857;
(statearr_28903_28938[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28939 = state_28857;
state_28857 = G__28939;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_28857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_28857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___28909,mults,ensure_mult,p))
})();
var state__26992__auto__ = (function (){var statearr_28904 = f__26991__auto__.call(null);
(statearr_28904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___28909);

return statearr_28904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___28909,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28940 = [];
var len__25893__auto___28943 = arguments.length;
var i__25894__auto___28944 = (0);
while(true){
if((i__25894__auto___28944 < len__25893__auto___28943)){
args28940.push((arguments[i__25894__auto___28944]));

var G__28945 = (i__25894__auto___28944 + (1));
i__25894__auto___28944 = G__28945;
continue;
} else {
}
break;
}

var G__28942 = args28940.length;
switch (G__28942) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28940.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28947 = [];
var len__25893__auto___28950 = arguments.length;
var i__25894__auto___28951 = (0);
while(true){
if((i__25894__auto___28951 < len__25893__auto___28950)){
args28947.push((arguments[i__25894__auto___28951]));

var G__28952 = (i__25894__auto___28951 + (1));
i__25894__auto___28951 = G__28952;
continue;
} else {
}
break;
}

var G__28949 = args28947.length;
switch (G__28949) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28947.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28954 = [];
var len__25893__auto___29025 = arguments.length;
var i__25894__auto___29026 = (0);
while(true){
if((i__25894__auto___29026 < len__25893__auto___29025)){
args28954.push((arguments[i__25894__auto___29026]));

var G__29027 = (i__25894__auto___29026 + (1));
i__25894__auto___29026 = G__29027;
continue;
} else {
}
break;
}

var G__28956 = args28954.length;
switch (G__28956) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28954.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26990__auto___29029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___29029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___29029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28995){
var state_val_28996 = (state_28995[(1)]);
if((state_val_28996 === (7))){
var state_28995__$1 = state_28995;
var statearr_28997_29030 = state_28995__$1;
(statearr_28997_29030[(2)] = null);

(statearr_28997_29030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (1))){
var state_28995__$1 = state_28995;
var statearr_28998_29031 = state_28995__$1;
(statearr_28998_29031[(2)] = null);

(statearr_28998_29031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (4))){
var inst_28959 = (state_28995[(7)]);
var inst_28961 = (inst_28959 < cnt);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28961)){
var statearr_28999_29032 = state_28995__$1;
(statearr_28999_29032[(1)] = (6));

} else {
var statearr_29000_29033 = state_28995__$1;
(statearr_29000_29033[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (15))){
var inst_28991 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29001_29034 = state_28995__$1;
(statearr_29001_29034[(2)] = inst_28991);

(statearr_29001_29034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (13))){
var inst_28984 = cljs.core.async.close_BANG_.call(null,out);
var state_28995__$1 = state_28995;
var statearr_29002_29035 = state_28995__$1;
(statearr_29002_29035[(2)] = inst_28984);

(statearr_29002_29035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (6))){
var state_28995__$1 = state_28995;
var statearr_29003_29036 = state_28995__$1;
(statearr_29003_29036[(2)] = null);

(statearr_29003_29036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (3))){
var inst_28993 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28995__$1,inst_28993);
} else {
if((state_val_28996 === (12))){
var inst_28981 = (state_28995[(8)]);
var inst_28981__$1 = (state_28995[(2)]);
var inst_28982 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28981__$1);
var state_28995__$1 = (function (){var statearr_29004 = state_28995;
(statearr_29004[(8)] = inst_28981__$1);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28982)){
var statearr_29005_29037 = state_28995__$1;
(statearr_29005_29037[(1)] = (13));

} else {
var statearr_29006_29038 = state_28995__$1;
(statearr_29006_29038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (2))){
var inst_28958 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28959 = (0);
var state_28995__$1 = (function (){var statearr_29007 = state_28995;
(statearr_29007[(7)] = inst_28959);

(statearr_29007[(9)] = inst_28958);

return statearr_29007;
})();
var statearr_29008_29039 = state_28995__$1;
(statearr_29008_29039[(2)] = null);

(statearr_29008_29039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (11))){
var inst_28959 = (state_28995[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28995,(10),Object,null,(9));
var inst_28968 = chs__$1.call(null,inst_28959);
var inst_28969 = done.call(null,inst_28959);
var inst_28970 = cljs.core.async.take_BANG_.call(null,inst_28968,inst_28969);
var state_28995__$1 = state_28995;
var statearr_29009_29040 = state_28995__$1;
(statearr_29009_29040[(2)] = inst_28970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (9))){
var inst_28959 = (state_28995[(7)]);
var inst_28972 = (state_28995[(2)]);
var inst_28973 = (inst_28959 + (1));
var inst_28959__$1 = inst_28973;
var state_28995__$1 = (function (){var statearr_29010 = state_28995;
(statearr_29010[(7)] = inst_28959__$1);

(statearr_29010[(10)] = inst_28972);

return statearr_29010;
})();
var statearr_29011_29041 = state_28995__$1;
(statearr_29011_29041[(2)] = null);

(statearr_29011_29041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (5))){
var inst_28979 = (state_28995[(2)]);
var state_28995__$1 = (function (){var statearr_29012 = state_28995;
(statearr_29012[(11)] = inst_28979);

return statearr_29012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28995__$1,(12),dchan);
} else {
if((state_val_28996 === (14))){
var inst_28981 = (state_28995[(8)]);
var inst_28986 = cljs.core.apply.call(null,f,inst_28981);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(16),out,inst_28986);
} else {
if((state_val_28996 === (16))){
var inst_28988 = (state_28995[(2)]);
var state_28995__$1 = (function (){var statearr_29013 = state_28995;
(statearr_29013[(12)] = inst_28988);

return statearr_29013;
})();
var statearr_29014_29042 = state_28995__$1;
(statearr_29014_29042[(2)] = null);

(statearr_29014_29042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (10))){
var inst_28963 = (state_28995[(2)]);
var inst_28964 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28995__$1 = (function (){var statearr_29015 = state_28995;
(statearr_29015[(13)] = inst_28963);

return statearr_29015;
})();
var statearr_29016_29043 = state_28995__$1;
(statearr_29016_29043[(2)] = inst_28964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (8))){
var inst_28977 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29017_29044 = state_28995__$1;
(statearr_29017_29044[(2)] = inst_28977);

(statearr_29017_29044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___29029,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26878__auto__,c__26990__auto___29029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_29021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29021[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_29021[(1)] = (1));

return statearr_29021;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_28995){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_28995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29022){if((e29022 instanceof Object)){
var ex__26882__auto__ = e29022;
var statearr_29023_29045 = state_28995;
(statearr_29023_29045[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29046 = state_28995;
state_28995 = G__29046;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_28995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_28995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___29029,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26992__auto__ = (function (){var statearr_29024 = f__26991__auto__.call(null);
(statearr_29024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___29029);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___29029,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29048 = [];
var len__25893__auto___29107 = arguments.length;
var i__25894__auto___29108 = (0);
while(true){
if((i__25894__auto___29108 < len__25893__auto___29107)){
args29048.push((arguments[i__25894__auto___29108]));

var G__29109 = (i__25894__auto___29108 + (1));
i__25894__auto___29108 = G__29109;
continue;
} else {
}
break;
}

var G__29050 = args29048.length;
switch (G__29050) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29048.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26990__auto___29111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___29111,out){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___29111,out){
return (function (state_29082){
var state_val_29083 = (state_29082[(1)]);
if((state_val_29083 === (7))){
var inst_29062 = (state_29082[(7)]);
var inst_29061 = (state_29082[(8)]);
var inst_29061__$1 = (state_29082[(2)]);
var inst_29062__$1 = cljs.core.nth.call(null,inst_29061__$1,(0),null);
var inst_29063 = cljs.core.nth.call(null,inst_29061__$1,(1),null);
var inst_29064 = (inst_29062__$1 == null);
var state_29082__$1 = (function (){var statearr_29084 = state_29082;
(statearr_29084[(7)] = inst_29062__$1);

(statearr_29084[(8)] = inst_29061__$1);

(statearr_29084[(9)] = inst_29063);

return statearr_29084;
})();
if(cljs.core.truth_(inst_29064)){
var statearr_29085_29112 = state_29082__$1;
(statearr_29085_29112[(1)] = (8));

} else {
var statearr_29086_29113 = state_29082__$1;
(statearr_29086_29113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (1))){
var inst_29051 = cljs.core.vec.call(null,chs);
var inst_29052 = inst_29051;
var state_29082__$1 = (function (){var statearr_29087 = state_29082;
(statearr_29087[(10)] = inst_29052);

return statearr_29087;
})();
var statearr_29088_29114 = state_29082__$1;
(statearr_29088_29114[(2)] = null);

(statearr_29088_29114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (4))){
var inst_29052 = (state_29082[(10)]);
var state_29082__$1 = state_29082;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29082__$1,(7),inst_29052);
} else {
if((state_val_29083 === (6))){
var inst_29078 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
var statearr_29089_29115 = state_29082__$1;
(statearr_29089_29115[(2)] = inst_29078);

(statearr_29089_29115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (3))){
var inst_29080 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29082__$1,inst_29080);
} else {
if((state_val_29083 === (2))){
var inst_29052 = (state_29082[(10)]);
var inst_29054 = cljs.core.count.call(null,inst_29052);
var inst_29055 = (inst_29054 > (0));
var state_29082__$1 = state_29082;
if(cljs.core.truth_(inst_29055)){
var statearr_29091_29116 = state_29082__$1;
(statearr_29091_29116[(1)] = (4));

} else {
var statearr_29092_29117 = state_29082__$1;
(statearr_29092_29117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (11))){
var inst_29052 = (state_29082[(10)]);
var inst_29071 = (state_29082[(2)]);
var tmp29090 = inst_29052;
var inst_29052__$1 = tmp29090;
var state_29082__$1 = (function (){var statearr_29093 = state_29082;
(statearr_29093[(11)] = inst_29071);

(statearr_29093[(10)] = inst_29052__$1);

return statearr_29093;
})();
var statearr_29094_29118 = state_29082__$1;
(statearr_29094_29118[(2)] = null);

(statearr_29094_29118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (9))){
var inst_29062 = (state_29082[(7)]);
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29082__$1,(11),out,inst_29062);
} else {
if((state_val_29083 === (5))){
var inst_29076 = cljs.core.async.close_BANG_.call(null,out);
var state_29082__$1 = state_29082;
var statearr_29095_29119 = state_29082__$1;
(statearr_29095_29119[(2)] = inst_29076);

(statearr_29095_29119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (10))){
var inst_29074 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
var statearr_29096_29120 = state_29082__$1;
(statearr_29096_29120[(2)] = inst_29074);

(statearr_29096_29120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29083 === (8))){
var inst_29062 = (state_29082[(7)]);
var inst_29061 = (state_29082[(8)]);
var inst_29052 = (state_29082[(10)]);
var inst_29063 = (state_29082[(9)]);
var inst_29066 = (function (){var cs = inst_29052;
var vec__29057 = inst_29061;
var v = inst_29062;
var c = inst_29063;
return ((function (cs,vec__29057,v,c,inst_29062,inst_29061,inst_29052,inst_29063,state_val_29083,c__26990__auto___29111,out){
return (function (p1__29047_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29047_SHARP_);
});
;})(cs,vec__29057,v,c,inst_29062,inst_29061,inst_29052,inst_29063,state_val_29083,c__26990__auto___29111,out))
})();
var inst_29067 = cljs.core.filterv.call(null,inst_29066,inst_29052);
var inst_29052__$1 = inst_29067;
var state_29082__$1 = (function (){var statearr_29097 = state_29082;
(statearr_29097[(10)] = inst_29052__$1);

return statearr_29097;
})();
var statearr_29098_29121 = state_29082__$1;
(statearr_29098_29121[(2)] = null);

(statearr_29098_29121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___29111,out))
;
return ((function (switch__26878__auto__,c__26990__auto___29111,out){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_29102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29102[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_29102[(1)] = (1));

return statearr_29102;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_29082){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_29082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29103){if((e29103 instanceof Object)){
var ex__26882__auto__ = e29103;
var statearr_29105_29122 = state_29082;
(statearr_29105_29122[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29123 = state_29082;
state_29082 = G__29123;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_29082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_29082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___29111,out))
})();
var state__26992__auto__ = (function (){var statearr_29106 = f__26991__auto__.call(null);
(statearr_29106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___29111);

return statearr_29106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___29111,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29124 = [];
var len__25893__auto___29173 = arguments.length;
var i__25894__auto___29174 = (0);
while(true){
if((i__25894__auto___29174 < len__25893__auto___29173)){
args29124.push((arguments[i__25894__auto___29174]));

var G__29175 = (i__25894__auto___29174 + (1));
i__25894__auto___29174 = G__29175;
continue;
} else {
}
break;
}

var G__29126 = args29124.length;
switch (G__29126) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29124.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26990__auto___29177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___29177,out){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___29177,out){
return (function (state_29150){
var state_val_29151 = (state_29150[(1)]);
if((state_val_29151 === (7))){
var inst_29132 = (state_29150[(7)]);
var inst_29132__$1 = (state_29150[(2)]);
var inst_29133 = (inst_29132__$1 == null);
var inst_29134 = cljs.core.not.call(null,inst_29133);
var state_29150__$1 = (function (){var statearr_29152 = state_29150;
(statearr_29152[(7)] = inst_29132__$1);

return statearr_29152;
})();
if(inst_29134){
var statearr_29153_29178 = state_29150__$1;
(statearr_29153_29178[(1)] = (8));

} else {
var statearr_29154_29179 = state_29150__$1;
(statearr_29154_29179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (1))){
var inst_29127 = (0);
var state_29150__$1 = (function (){var statearr_29155 = state_29150;
(statearr_29155[(8)] = inst_29127);

return statearr_29155;
})();
var statearr_29156_29180 = state_29150__$1;
(statearr_29156_29180[(2)] = null);

(statearr_29156_29180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (4))){
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29150__$1,(7),ch);
} else {
if((state_val_29151 === (6))){
var inst_29145 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29157_29181 = state_29150__$1;
(statearr_29157_29181[(2)] = inst_29145);

(statearr_29157_29181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (3))){
var inst_29147 = (state_29150[(2)]);
var inst_29148 = cljs.core.async.close_BANG_.call(null,out);
var state_29150__$1 = (function (){var statearr_29158 = state_29150;
(statearr_29158[(9)] = inst_29147);

return statearr_29158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29150__$1,inst_29148);
} else {
if((state_val_29151 === (2))){
var inst_29127 = (state_29150[(8)]);
var inst_29129 = (inst_29127 < n);
var state_29150__$1 = state_29150;
if(cljs.core.truth_(inst_29129)){
var statearr_29159_29182 = state_29150__$1;
(statearr_29159_29182[(1)] = (4));

} else {
var statearr_29160_29183 = state_29150__$1;
(statearr_29160_29183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (11))){
var inst_29127 = (state_29150[(8)]);
var inst_29137 = (state_29150[(2)]);
var inst_29138 = (inst_29127 + (1));
var inst_29127__$1 = inst_29138;
var state_29150__$1 = (function (){var statearr_29161 = state_29150;
(statearr_29161[(8)] = inst_29127__$1);

(statearr_29161[(10)] = inst_29137);

return statearr_29161;
})();
var statearr_29162_29184 = state_29150__$1;
(statearr_29162_29184[(2)] = null);

(statearr_29162_29184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (9))){
var state_29150__$1 = state_29150;
var statearr_29163_29185 = state_29150__$1;
(statearr_29163_29185[(2)] = null);

(statearr_29163_29185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (5))){
var state_29150__$1 = state_29150;
var statearr_29164_29186 = state_29150__$1;
(statearr_29164_29186[(2)] = null);

(statearr_29164_29186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (10))){
var inst_29142 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29165_29187 = state_29150__$1;
(statearr_29165_29187[(2)] = inst_29142);

(statearr_29165_29187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (8))){
var inst_29132 = (state_29150[(7)]);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29150__$1,(11),out,inst_29132);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___29177,out))
;
return ((function (switch__26878__auto__,c__26990__auto___29177,out){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_29169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29169[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_29169[(1)] = (1));

return statearr_29169;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_29150){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_29150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29170){if((e29170 instanceof Object)){
var ex__26882__auto__ = e29170;
var statearr_29171_29188 = state_29150;
(statearr_29171_29188[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29189 = state_29150;
state_29150 = G__29189;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_29150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_29150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___29177,out))
})();
var state__26992__auto__ = (function (){var statearr_29172 = f__26991__auto__.call(null);
(statearr_29172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___29177);

return statearr_29172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___29177,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29197 = (function (map_LT_,f,ch,meta29198){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29198 = meta29198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29199,meta29198__$1){
var self__ = this;
var _29199__$1 = this;
return (new cljs.core.async.t_cljs$core$async29197(self__.map_LT_,self__.f,self__.ch,meta29198__$1));
});

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29199){
var self__ = this;
var _29199__$1 = this;
return self__.meta29198;
});

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29200 = (function (map_LT_,f,ch,meta29198,_,fn1,meta29201){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29198 = meta29198;
this._ = _;
this.fn1 = fn1;
this.meta29201 = meta29201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29202,meta29201__$1){
var self__ = this;
var _29202__$1 = this;
return (new cljs.core.async.t_cljs$core$async29200(self__.map_LT_,self__.f,self__.ch,self__.meta29198,self__._,self__.fn1,meta29201__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29202){
var self__ = this;
var _29202__$1 = this;
return self__.meta29201;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29190_SHARP_){
return f1.call(null,(((p1__29190_SHARP_ == null))?null:self__.f.call(null,p1__29190_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29200.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29198","meta29198",-1310238247,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29197","cljs.core.async/t_cljs$core$async29197",1394376844,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29201","meta29201",-483909849,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29200";

cljs.core.async.t_cljs$core$async29200.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async29200");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29200 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29200(map_LT___$1,f__$1,ch__$1,meta29198__$1,___$2,fn1__$1,meta29201){
return (new cljs.core.async.t_cljs$core$async29200(map_LT___$1,f__$1,ch__$1,meta29198__$1,___$2,fn1__$1,meta29201));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29200(self__.map_LT_,self__.f,self__.ch,self__.meta29198,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24806__auto__ = ret;
if(cljs.core.truth_(and__24806__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24806__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29198","meta29198",-1310238247,null)], null);
});

cljs.core.async.t_cljs$core$async29197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29197";

cljs.core.async.t_cljs$core$async29197.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async29197");
});

cljs.core.async.__GT_t_cljs$core$async29197 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29197(map_LT___$1,f__$1,ch__$1,meta29198){
return (new cljs.core.async.t_cljs$core$async29197(map_LT___$1,f__$1,ch__$1,meta29198));
});

}

return (new cljs.core.async.t_cljs$core$async29197(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29206 = (function (map_GT_,f,ch,meta29207){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29207 = meta29207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29208,meta29207__$1){
var self__ = this;
var _29208__$1 = this;
return (new cljs.core.async.t_cljs$core$async29206(self__.map_GT_,self__.f,self__.ch,meta29207__$1));
});

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29208){
var self__ = this;
var _29208__$1 = this;
return self__.meta29207;
});

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29207","meta29207",-156677040,null)], null);
});

cljs.core.async.t_cljs$core$async29206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29206";

cljs.core.async.t_cljs$core$async29206.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async29206");
});

cljs.core.async.__GT_t_cljs$core$async29206 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29206(map_GT___$1,f__$1,ch__$1,meta29207){
return (new cljs.core.async.t_cljs$core$async29206(map_GT___$1,f__$1,ch__$1,meta29207));
});

}

return (new cljs.core.async.t_cljs$core$async29206(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29212 = (function (filter_GT_,p,ch,meta29213){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29213 = meta29213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29214,meta29213__$1){
var self__ = this;
var _29214__$1 = this;
return (new cljs.core.async.t_cljs$core$async29212(self__.filter_GT_,self__.p,self__.ch,meta29213__$1));
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29214){
var self__ = this;
var _29214__$1 = this;
return self__.meta29213;
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29213","meta29213",815080954,null)], null);
});

cljs.core.async.t_cljs$core$async29212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29212";

cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"cljs.core.async/t_cljs$core$async29212");
});

cljs.core.async.__GT_t_cljs$core$async29212 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29212(filter_GT___$1,p__$1,ch__$1,meta29213){
return (new cljs.core.async.t_cljs$core$async29212(filter_GT___$1,p__$1,ch__$1,meta29213));
});

}

return (new cljs.core.async.t_cljs$core$async29212(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29215 = [];
var len__25893__auto___29259 = arguments.length;
var i__25894__auto___29260 = (0);
while(true){
if((i__25894__auto___29260 < len__25893__auto___29259)){
args29215.push((arguments[i__25894__auto___29260]));

var G__29261 = (i__25894__auto___29260 + (1));
i__25894__auto___29260 = G__29261;
continue;
} else {
}
break;
}

var G__29217 = args29215.length;
switch (G__29217) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29215.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26990__auto___29263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___29263,out){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___29263,out){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (7))){
var inst_29234 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29240_29264 = state_29238__$1;
(statearr_29240_29264[(2)] = inst_29234);

(statearr_29240_29264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (1))){
var state_29238__$1 = state_29238;
var statearr_29241_29265 = state_29238__$1;
(statearr_29241_29265[(2)] = null);

(statearr_29241_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (4))){
var inst_29220 = (state_29238[(7)]);
var inst_29220__$1 = (state_29238[(2)]);
var inst_29221 = (inst_29220__$1 == null);
var state_29238__$1 = (function (){var statearr_29242 = state_29238;
(statearr_29242[(7)] = inst_29220__$1);

return statearr_29242;
})();
if(cljs.core.truth_(inst_29221)){
var statearr_29243_29266 = state_29238__$1;
(statearr_29243_29266[(1)] = (5));

} else {
var statearr_29244_29267 = state_29238__$1;
(statearr_29244_29267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (6))){
var inst_29220 = (state_29238[(7)]);
var inst_29225 = p.call(null,inst_29220);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29225)){
var statearr_29245_29268 = state_29238__$1;
(statearr_29245_29268[(1)] = (8));

} else {
var statearr_29246_29269 = state_29238__$1;
(statearr_29246_29269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (3))){
var inst_29236 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (2))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(4),ch);
} else {
if((state_val_29239 === (11))){
var inst_29228 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29247_29270 = state_29238__$1;
(statearr_29247_29270[(2)] = inst_29228);

(statearr_29247_29270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (9))){
var state_29238__$1 = state_29238;
var statearr_29248_29271 = state_29238__$1;
(statearr_29248_29271[(2)] = null);

(statearr_29248_29271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var inst_29223 = cljs.core.async.close_BANG_.call(null,out);
var state_29238__$1 = state_29238;
var statearr_29249_29272 = state_29238__$1;
(statearr_29249_29272[(2)] = inst_29223);

(statearr_29249_29272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (10))){
var inst_29231 = (state_29238[(2)]);
var state_29238__$1 = (function (){var statearr_29250 = state_29238;
(statearr_29250[(8)] = inst_29231);

return statearr_29250;
})();
var statearr_29251_29273 = state_29238__$1;
(statearr_29251_29273[(2)] = null);

(statearr_29251_29273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (8))){
var inst_29220 = (state_29238[(7)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29238__$1,(11),out,inst_29220);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___29263,out))
;
return ((function (switch__26878__auto__,c__26990__auto___29263,out){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_29255 = [null,null,null,null,null,null,null,null,null];
(statearr_29255[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_29255[(1)] = (1));

return statearr_29255;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_29238){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29256){if((e29256 instanceof Object)){
var ex__26882__auto__ = e29256;
var statearr_29257_29274 = state_29238;
(statearr_29257_29274[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29275 = state_29238;
state_29238 = G__29275;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___29263,out))
})();
var state__26992__auto__ = (function (){var statearr_29258 = f__26991__auto__.call(null);
(statearr_29258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___29263);

return statearr_29258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___29263,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29276 = [];
var len__25893__auto___29279 = arguments.length;
var i__25894__auto___29280 = (0);
while(true){
if((i__25894__auto___29280 < len__25893__auto___29279)){
args29276.push((arguments[i__25894__auto___29280]));

var G__29281 = (i__25894__auto___29280 + (1));
i__25894__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var G__29278 = args29276.length;
switch (G__29278) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29276.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__){
return (function (state_29448){
var state_val_29449 = (state_29448[(1)]);
if((state_val_29449 === (7))){
var inst_29444 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29450_29491 = state_29448__$1;
(statearr_29450_29491[(2)] = inst_29444);

(statearr_29450_29491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (20))){
var inst_29414 = (state_29448[(7)]);
var inst_29425 = (state_29448[(2)]);
var inst_29426 = cljs.core.next.call(null,inst_29414);
var inst_29400 = inst_29426;
var inst_29401 = null;
var inst_29402 = (0);
var inst_29403 = (0);
var state_29448__$1 = (function (){var statearr_29451 = state_29448;
(statearr_29451[(8)] = inst_29400);

(statearr_29451[(9)] = inst_29425);

(statearr_29451[(10)] = inst_29403);

(statearr_29451[(11)] = inst_29401);

(statearr_29451[(12)] = inst_29402);

return statearr_29451;
})();
var statearr_29452_29492 = state_29448__$1;
(statearr_29452_29492[(2)] = null);

(statearr_29452_29492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (1))){
var state_29448__$1 = state_29448;
var statearr_29453_29493 = state_29448__$1;
(statearr_29453_29493[(2)] = null);

(statearr_29453_29493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (4))){
var inst_29389 = (state_29448[(13)]);
var inst_29389__$1 = (state_29448[(2)]);
var inst_29390 = (inst_29389__$1 == null);
var state_29448__$1 = (function (){var statearr_29454 = state_29448;
(statearr_29454[(13)] = inst_29389__$1);

return statearr_29454;
})();
if(cljs.core.truth_(inst_29390)){
var statearr_29455_29494 = state_29448__$1;
(statearr_29455_29494[(1)] = (5));

} else {
var statearr_29456_29495 = state_29448__$1;
(statearr_29456_29495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (15))){
var state_29448__$1 = state_29448;
var statearr_29460_29496 = state_29448__$1;
(statearr_29460_29496[(2)] = null);

(statearr_29460_29496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (21))){
var state_29448__$1 = state_29448;
var statearr_29461_29497 = state_29448__$1;
(statearr_29461_29497[(2)] = null);

(statearr_29461_29497[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (13))){
var inst_29400 = (state_29448[(8)]);
var inst_29403 = (state_29448[(10)]);
var inst_29401 = (state_29448[(11)]);
var inst_29402 = (state_29448[(12)]);
var inst_29410 = (state_29448[(2)]);
var inst_29411 = (inst_29403 + (1));
var tmp29457 = inst_29400;
var tmp29458 = inst_29401;
var tmp29459 = inst_29402;
var inst_29400__$1 = tmp29457;
var inst_29401__$1 = tmp29458;
var inst_29402__$1 = tmp29459;
var inst_29403__$1 = inst_29411;
var state_29448__$1 = (function (){var statearr_29462 = state_29448;
(statearr_29462[(14)] = inst_29410);

(statearr_29462[(8)] = inst_29400__$1);

(statearr_29462[(10)] = inst_29403__$1);

(statearr_29462[(11)] = inst_29401__$1);

(statearr_29462[(12)] = inst_29402__$1);

return statearr_29462;
})();
var statearr_29463_29498 = state_29448__$1;
(statearr_29463_29498[(2)] = null);

(statearr_29463_29498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (22))){
var state_29448__$1 = state_29448;
var statearr_29464_29499 = state_29448__$1;
(statearr_29464_29499[(2)] = null);

(statearr_29464_29499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (6))){
var inst_29389 = (state_29448[(13)]);
var inst_29398 = f.call(null,inst_29389);
var inst_29399 = cljs.core.seq.call(null,inst_29398);
var inst_29400 = inst_29399;
var inst_29401 = null;
var inst_29402 = (0);
var inst_29403 = (0);
var state_29448__$1 = (function (){var statearr_29465 = state_29448;
(statearr_29465[(8)] = inst_29400);

(statearr_29465[(10)] = inst_29403);

(statearr_29465[(11)] = inst_29401);

(statearr_29465[(12)] = inst_29402);

return statearr_29465;
})();
var statearr_29466_29500 = state_29448__$1;
(statearr_29466_29500[(2)] = null);

(statearr_29466_29500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (17))){
var inst_29414 = (state_29448[(7)]);
var inst_29418 = cljs.core.chunk_first.call(null,inst_29414);
var inst_29419 = cljs.core.chunk_rest.call(null,inst_29414);
var inst_29420 = cljs.core.count.call(null,inst_29418);
var inst_29400 = inst_29419;
var inst_29401 = inst_29418;
var inst_29402 = inst_29420;
var inst_29403 = (0);
var state_29448__$1 = (function (){var statearr_29467 = state_29448;
(statearr_29467[(8)] = inst_29400);

(statearr_29467[(10)] = inst_29403);

(statearr_29467[(11)] = inst_29401);

(statearr_29467[(12)] = inst_29402);

return statearr_29467;
})();
var statearr_29468_29501 = state_29448__$1;
(statearr_29468_29501[(2)] = null);

(statearr_29468_29501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (3))){
var inst_29446 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29448__$1,inst_29446);
} else {
if((state_val_29449 === (12))){
var inst_29434 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29469_29502 = state_29448__$1;
(statearr_29469_29502[(2)] = inst_29434);

(statearr_29469_29502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (2))){
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(4),in$);
} else {
if((state_val_29449 === (23))){
var inst_29442 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29470_29503 = state_29448__$1;
(statearr_29470_29503[(2)] = inst_29442);

(statearr_29470_29503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (19))){
var inst_29429 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29471_29504 = state_29448__$1;
(statearr_29471_29504[(2)] = inst_29429);

(statearr_29471_29504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (11))){
var inst_29400 = (state_29448[(8)]);
var inst_29414 = (state_29448[(7)]);
var inst_29414__$1 = cljs.core.seq.call(null,inst_29400);
var state_29448__$1 = (function (){var statearr_29472 = state_29448;
(statearr_29472[(7)] = inst_29414__$1);

return statearr_29472;
})();
if(inst_29414__$1){
var statearr_29473_29505 = state_29448__$1;
(statearr_29473_29505[(1)] = (14));

} else {
var statearr_29474_29506 = state_29448__$1;
(statearr_29474_29506[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (9))){
var inst_29436 = (state_29448[(2)]);
var inst_29437 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29448__$1 = (function (){var statearr_29475 = state_29448;
(statearr_29475[(15)] = inst_29436);

return statearr_29475;
})();
if(cljs.core.truth_(inst_29437)){
var statearr_29476_29507 = state_29448__$1;
(statearr_29476_29507[(1)] = (21));

} else {
var statearr_29477_29508 = state_29448__$1;
(statearr_29477_29508[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (5))){
var inst_29392 = cljs.core.async.close_BANG_.call(null,out);
var state_29448__$1 = state_29448;
var statearr_29478_29509 = state_29448__$1;
(statearr_29478_29509[(2)] = inst_29392);

(statearr_29478_29509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (14))){
var inst_29414 = (state_29448[(7)]);
var inst_29416 = cljs.core.chunked_seq_QMARK_.call(null,inst_29414);
var state_29448__$1 = state_29448;
if(inst_29416){
var statearr_29479_29510 = state_29448__$1;
(statearr_29479_29510[(1)] = (17));

} else {
var statearr_29480_29511 = state_29448__$1;
(statearr_29480_29511[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (16))){
var inst_29432 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29481_29512 = state_29448__$1;
(statearr_29481_29512[(2)] = inst_29432);

(statearr_29481_29512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (10))){
var inst_29403 = (state_29448[(10)]);
var inst_29401 = (state_29448[(11)]);
var inst_29408 = cljs.core._nth.call(null,inst_29401,inst_29403);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29448__$1,(13),out,inst_29408);
} else {
if((state_val_29449 === (18))){
var inst_29414 = (state_29448[(7)]);
var inst_29423 = cljs.core.first.call(null,inst_29414);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29448__$1,(20),out,inst_29423);
} else {
if((state_val_29449 === (8))){
var inst_29403 = (state_29448[(10)]);
var inst_29402 = (state_29448[(12)]);
var inst_29405 = (inst_29403 < inst_29402);
var inst_29406 = inst_29405;
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29406)){
var statearr_29482_29513 = state_29448__$1;
(statearr_29482_29513[(1)] = (10));

} else {
var statearr_29483_29514 = state_29448__$1;
(statearr_29483_29514[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26879__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26879__auto____0 = (function (){
var statearr_29487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29487[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26879__auto__);

(statearr_29487[(1)] = (1));

return statearr_29487;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26879__auto____1 = (function (state_29448){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_29448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29488){if((e29488 instanceof Object)){
var ex__26882__auto__ = e29488;
var statearr_29489_29515 = state_29448;
(statearr_29489_29515[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29516 = state_29448;
state_29448 = G__29516;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26879__auto__ = function(state_29448){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26879__auto____1.call(this,state_29448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26879__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26879__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__))
})();
var state__26992__auto__ = (function (){var statearr_29490 = f__26991__auto__.call(null);
(statearr_29490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_29490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__))
);

return c__26990__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29517 = [];
var len__25893__auto___29520 = arguments.length;
var i__25894__auto___29521 = (0);
while(true){
if((i__25894__auto___29521 < len__25893__auto___29520)){
args29517.push((arguments[i__25894__auto___29521]));

var G__29522 = (i__25894__auto___29521 + (1));
i__25894__auto___29521 = G__29522;
continue;
} else {
}
break;
}

var G__29519 = args29517.length;
switch (G__29519) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29517.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29524 = [];
var len__25893__auto___29527 = arguments.length;
var i__25894__auto___29528 = (0);
while(true){
if((i__25894__auto___29528 < len__25893__auto___29527)){
args29524.push((arguments[i__25894__auto___29528]));

var G__29529 = (i__25894__auto___29528 + (1));
i__25894__auto___29528 = G__29529;
continue;
} else {
}
break;
}

var G__29526 = args29524.length;
switch (G__29526) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29524.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29531 = [];
var len__25893__auto___29582 = arguments.length;
var i__25894__auto___29583 = (0);
while(true){
if((i__25894__auto___29583 < len__25893__auto___29582)){
args29531.push((arguments[i__25894__auto___29583]));

var G__29584 = (i__25894__auto___29583 + (1));
i__25894__auto___29583 = G__29584;
continue;
} else {
}
break;
}

var G__29533 = args29531.length;
switch (G__29533) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29531.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26990__auto___29586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___29586,out){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___29586,out){
return (function (state_29557){
var state_val_29558 = (state_29557[(1)]);
if((state_val_29558 === (7))){
var inst_29552 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29559_29587 = state_29557__$1;
(statearr_29559_29587[(2)] = inst_29552);

(statearr_29559_29587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (1))){
var inst_29534 = null;
var state_29557__$1 = (function (){var statearr_29560 = state_29557;
(statearr_29560[(7)] = inst_29534);

return statearr_29560;
})();
var statearr_29561_29588 = state_29557__$1;
(statearr_29561_29588[(2)] = null);

(statearr_29561_29588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (4))){
var inst_29537 = (state_29557[(8)]);
var inst_29537__$1 = (state_29557[(2)]);
var inst_29538 = (inst_29537__$1 == null);
var inst_29539 = cljs.core.not.call(null,inst_29538);
var state_29557__$1 = (function (){var statearr_29562 = state_29557;
(statearr_29562[(8)] = inst_29537__$1);

return statearr_29562;
})();
if(inst_29539){
var statearr_29563_29589 = state_29557__$1;
(statearr_29563_29589[(1)] = (5));

} else {
var statearr_29564_29590 = state_29557__$1;
(statearr_29564_29590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (6))){
var state_29557__$1 = state_29557;
var statearr_29565_29591 = state_29557__$1;
(statearr_29565_29591[(2)] = null);

(statearr_29565_29591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (3))){
var inst_29554 = (state_29557[(2)]);
var inst_29555 = cljs.core.async.close_BANG_.call(null,out);
var state_29557__$1 = (function (){var statearr_29566 = state_29557;
(statearr_29566[(9)] = inst_29554);

return statearr_29566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29557__$1,inst_29555);
} else {
if((state_val_29558 === (2))){
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29557__$1,(4),ch);
} else {
if((state_val_29558 === (11))){
var inst_29537 = (state_29557[(8)]);
var inst_29546 = (state_29557[(2)]);
var inst_29534 = inst_29537;
var state_29557__$1 = (function (){var statearr_29567 = state_29557;
(statearr_29567[(10)] = inst_29546);

(statearr_29567[(7)] = inst_29534);

return statearr_29567;
})();
var statearr_29568_29592 = state_29557__$1;
(statearr_29568_29592[(2)] = null);

(statearr_29568_29592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (9))){
var inst_29537 = (state_29557[(8)]);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29557__$1,(11),out,inst_29537);
} else {
if((state_val_29558 === (5))){
var inst_29537 = (state_29557[(8)]);
var inst_29534 = (state_29557[(7)]);
var inst_29541 = cljs.core._EQ_.call(null,inst_29537,inst_29534);
var state_29557__$1 = state_29557;
if(inst_29541){
var statearr_29570_29593 = state_29557__$1;
(statearr_29570_29593[(1)] = (8));

} else {
var statearr_29571_29594 = state_29557__$1;
(statearr_29571_29594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (10))){
var inst_29549 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29572_29595 = state_29557__$1;
(statearr_29572_29595[(2)] = inst_29549);

(statearr_29572_29595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (8))){
var inst_29534 = (state_29557[(7)]);
var tmp29569 = inst_29534;
var inst_29534__$1 = tmp29569;
var state_29557__$1 = (function (){var statearr_29573 = state_29557;
(statearr_29573[(7)] = inst_29534__$1);

return statearr_29573;
})();
var statearr_29574_29596 = state_29557__$1;
(statearr_29574_29596[(2)] = null);

(statearr_29574_29596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___29586,out))
;
return ((function (switch__26878__auto__,c__26990__auto___29586,out){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_29578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29578[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_29578[(1)] = (1));

return statearr_29578;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_29557){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_29557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29579){if((e29579 instanceof Object)){
var ex__26882__auto__ = e29579;
var statearr_29580_29597 = state_29557;
(statearr_29580_29597[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29598 = state_29557;
state_29557 = G__29598;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_29557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_29557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___29586,out))
})();
var state__26992__auto__ = (function (){var statearr_29581 = f__26991__auto__.call(null);
(statearr_29581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___29586);

return statearr_29581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___29586,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29599 = [];
var len__25893__auto___29669 = arguments.length;
var i__25894__auto___29670 = (0);
while(true){
if((i__25894__auto___29670 < len__25893__auto___29669)){
args29599.push((arguments[i__25894__auto___29670]));

var G__29671 = (i__25894__auto___29670 + (1));
i__25894__auto___29670 = G__29671;
continue;
} else {
}
break;
}

var G__29601 = args29599.length;
switch (G__29601) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29599.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26990__auto___29673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___29673,out){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___29673,out){
return (function (state_29639){
var state_val_29640 = (state_29639[(1)]);
if((state_val_29640 === (7))){
var inst_29635 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
var statearr_29641_29674 = state_29639__$1;
(statearr_29641_29674[(2)] = inst_29635);

(statearr_29641_29674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (1))){
var inst_29602 = (new Array(n));
var inst_29603 = inst_29602;
var inst_29604 = (0);
var state_29639__$1 = (function (){var statearr_29642 = state_29639;
(statearr_29642[(7)] = inst_29603);

(statearr_29642[(8)] = inst_29604);

return statearr_29642;
})();
var statearr_29643_29675 = state_29639__$1;
(statearr_29643_29675[(2)] = null);

(statearr_29643_29675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (4))){
var inst_29607 = (state_29639[(9)]);
var inst_29607__$1 = (state_29639[(2)]);
var inst_29608 = (inst_29607__$1 == null);
var inst_29609 = cljs.core.not.call(null,inst_29608);
var state_29639__$1 = (function (){var statearr_29644 = state_29639;
(statearr_29644[(9)] = inst_29607__$1);

return statearr_29644;
})();
if(inst_29609){
var statearr_29645_29676 = state_29639__$1;
(statearr_29645_29676[(1)] = (5));

} else {
var statearr_29646_29677 = state_29639__$1;
(statearr_29646_29677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (15))){
var inst_29629 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
var statearr_29647_29678 = state_29639__$1;
(statearr_29647_29678[(2)] = inst_29629);

(statearr_29647_29678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (13))){
var state_29639__$1 = state_29639;
var statearr_29648_29679 = state_29639__$1;
(statearr_29648_29679[(2)] = null);

(statearr_29648_29679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (6))){
var inst_29604 = (state_29639[(8)]);
var inst_29625 = (inst_29604 > (0));
var state_29639__$1 = state_29639;
if(cljs.core.truth_(inst_29625)){
var statearr_29649_29680 = state_29639__$1;
(statearr_29649_29680[(1)] = (12));

} else {
var statearr_29650_29681 = state_29639__$1;
(statearr_29650_29681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (3))){
var inst_29637 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29639__$1,inst_29637);
} else {
if((state_val_29640 === (12))){
var inst_29603 = (state_29639[(7)]);
var inst_29627 = cljs.core.vec.call(null,inst_29603);
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29639__$1,(15),out,inst_29627);
} else {
if((state_val_29640 === (2))){
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29639__$1,(4),ch);
} else {
if((state_val_29640 === (11))){
var inst_29619 = (state_29639[(2)]);
var inst_29620 = (new Array(n));
var inst_29603 = inst_29620;
var inst_29604 = (0);
var state_29639__$1 = (function (){var statearr_29651 = state_29639;
(statearr_29651[(7)] = inst_29603);

(statearr_29651[(8)] = inst_29604);

(statearr_29651[(10)] = inst_29619);

return statearr_29651;
})();
var statearr_29652_29682 = state_29639__$1;
(statearr_29652_29682[(2)] = null);

(statearr_29652_29682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (9))){
var inst_29603 = (state_29639[(7)]);
var inst_29617 = cljs.core.vec.call(null,inst_29603);
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29639__$1,(11),out,inst_29617);
} else {
if((state_val_29640 === (5))){
var inst_29612 = (state_29639[(11)]);
var inst_29603 = (state_29639[(7)]);
var inst_29604 = (state_29639[(8)]);
var inst_29607 = (state_29639[(9)]);
var inst_29611 = (inst_29603[inst_29604] = inst_29607);
var inst_29612__$1 = (inst_29604 + (1));
var inst_29613 = (inst_29612__$1 < n);
var state_29639__$1 = (function (){var statearr_29653 = state_29639;
(statearr_29653[(11)] = inst_29612__$1);

(statearr_29653[(12)] = inst_29611);

return statearr_29653;
})();
if(cljs.core.truth_(inst_29613)){
var statearr_29654_29683 = state_29639__$1;
(statearr_29654_29683[(1)] = (8));

} else {
var statearr_29655_29684 = state_29639__$1;
(statearr_29655_29684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (14))){
var inst_29632 = (state_29639[(2)]);
var inst_29633 = cljs.core.async.close_BANG_.call(null,out);
var state_29639__$1 = (function (){var statearr_29657 = state_29639;
(statearr_29657[(13)] = inst_29632);

return statearr_29657;
})();
var statearr_29658_29685 = state_29639__$1;
(statearr_29658_29685[(2)] = inst_29633);

(statearr_29658_29685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (10))){
var inst_29623 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
var statearr_29659_29686 = state_29639__$1;
(statearr_29659_29686[(2)] = inst_29623);

(statearr_29659_29686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (8))){
var inst_29612 = (state_29639[(11)]);
var inst_29603 = (state_29639[(7)]);
var tmp29656 = inst_29603;
var inst_29603__$1 = tmp29656;
var inst_29604 = inst_29612;
var state_29639__$1 = (function (){var statearr_29660 = state_29639;
(statearr_29660[(7)] = inst_29603__$1);

(statearr_29660[(8)] = inst_29604);

return statearr_29660;
})();
var statearr_29661_29687 = state_29639__$1;
(statearr_29661_29687[(2)] = null);

(statearr_29661_29687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___29673,out))
;
return ((function (switch__26878__auto__,c__26990__auto___29673,out){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_29665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29665[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_29665[(1)] = (1));

return statearr_29665;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_29639){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_29639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29666){if((e29666 instanceof Object)){
var ex__26882__auto__ = e29666;
var statearr_29667_29688 = state_29639;
(statearr_29667_29688[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29689 = state_29639;
state_29639 = G__29689;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_29639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_29639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___29673,out))
})();
var state__26992__auto__ = (function (){var statearr_29668 = f__26991__auto__.call(null);
(statearr_29668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___29673);

return statearr_29668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___29673,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29690 = [];
var len__25893__auto___29764 = arguments.length;
var i__25894__auto___29765 = (0);
while(true){
if((i__25894__auto___29765 < len__25893__auto___29764)){
args29690.push((arguments[i__25894__auto___29765]));

var G__29766 = (i__25894__auto___29765 + (1));
i__25894__auto___29765 = G__29766;
continue;
} else {
}
break;
}

var G__29692 = args29690.length;
switch (G__29692) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29690.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26990__auto___29768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___29768,out){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___29768,out){
return (function (state_29734){
var state_val_29735 = (state_29734[(1)]);
if((state_val_29735 === (7))){
var inst_29730 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29736_29769 = state_29734__$1;
(statearr_29736_29769[(2)] = inst_29730);

(statearr_29736_29769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (1))){
var inst_29693 = [];
var inst_29694 = inst_29693;
var inst_29695 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29734__$1 = (function (){var statearr_29737 = state_29734;
(statearr_29737[(7)] = inst_29694);

(statearr_29737[(8)] = inst_29695);

return statearr_29737;
})();
var statearr_29738_29770 = state_29734__$1;
(statearr_29738_29770[(2)] = null);

(statearr_29738_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (4))){
var inst_29698 = (state_29734[(9)]);
var inst_29698__$1 = (state_29734[(2)]);
var inst_29699 = (inst_29698__$1 == null);
var inst_29700 = cljs.core.not.call(null,inst_29699);
var state_29734__$1 = (function (){var statearr_29739 = state_29734;
(statearr_29739[(9)] = inst_29698__$1);

return statearr_29739;
})();
if(inst_29700){
var statearr_29740_29771 = state_29734__$1;
(statearr_29740_29771[(1)] = (5));

} else {
var statearr_29741_29772 = state_29734__$1;
(statearr_29741_29772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (15))){
var inst_29724 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29742_29773 = state_29734__$1;
(statearr_29742_29773[(2)] = inst_29724);

(statearr_29742_29773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (13))){
var state_29734__$1 = state_29734;
var statearr_29743_29774 = state_29734__$1;
(statearr_29743_29774[(2)] = null);

(statearr_29743_29774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (6))){
var inst_29694 = (state_29734[(7)]);
var inst_29719 = inst_29694.length;
var inst_29720 = (inst_29719 > (0));
var state_29734__$1 = state_29734;
if(cljs.core.truth_(inst_29720)){
var statearr_29744_29775 = state_29734__$1;
(statearr_29744_29775[(1)] = (12));

} else {
var statearr_29745_29776 = state_29734__$1;
(statearr_29745_29776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (3))){
var inst_29732 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29734__$1,inst_29732);
} else {
if((state_val_29735 === (12))){
var inst_29694 = (state_29734[(7)]);
var inst_29722 = cljs.core.vec.call(null,inst_29694);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29734__$1,(15),out,inst_29722);
} else {
if((state_val_29735 === (2))){
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29734__$1,(4),ch);
} else {
if((state_val_29735 === (11))){
var inst_29698 = (state_29734[(9)]);
var inst_29702 = (state_29734[(10)]);
var inst_29712 = (state_29734[(2)]);
var inst_29713 = [];
var inst_29714 = inst_29713.push(inst_29698);
var inst_29694 = inst_29713;
var inst_29695 = inst_29702;
var state_29734__$1 = (function (){var statearr_29746 = state_29734;
(statearr_29746[(11)] = inst_29714);

(statearr_29746[(7)] = inst_29694);

(statearr_29746[(12)] = inst_29712);

(statearr_29746[(8)] = inst_29695);

return statearr_29746;
})();
var statearr_29747_29777 = state_29734__$1;
(statearr_29747_29777[(2)] = null);

(statearr_29747_29777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (9))){
var inst_29694 = (state_29734[(7)]);
var inst_29710 = cljs.core.vec.call(null,inst_29694);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29734__$1,(11),out,inst_29710);
} else {
if((state_val_29735 === (5))){
var inst_29698 = (state_29734[(9)]);
var inst_29702 = (state_29734[(10)]);
var inst_29695 = (state_29734[(8)]);
var inst_29702__$1 = f.call(null,inst_29698);
var inst_29703 = cljs.core._EQ_.call(null,inst_29702__$1,inst_29695);
var inst_29704 = cljs.core.keyword_identical_QMARK_.call(null,inst_29695,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29705 = (inst_29703) || (inst_29704);
var state_29734__$1 = (function (){var statearr_29748 = state_29734;
(statearr_29748[(10)] = inst_29702__$1);

return statearr_29748;
})();
if(cljs.core.truth_(inst_29705)){
var statearr_29749_29778 = state_29734__$1;
(statearr_29749_29778[(1)] = (8));

} else {
var statearr_29750_29779 = state_29734__$1;
(statearr_29750_29779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (14))){
var inst_29727 = (state_29734[(2)]);
var inst_29728 = cljs.core.async.close_BANG_.call(null,out);
var state_29734__$1 = (function (){var statearr_29752 = state_29734;
(statearr_29752[(13)] = inst_29727);

return statearr_29752;
})();
var statearr_29753_29780 = state_29734__$1;
(statearr_29753_29780[(2)] = inst_29728);

(statearr_29753_29780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (10))){
var inst_29717 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29754_29781 = state_29734__$1;
(statearr_29754_29781[(2)] = inst_29717);

(statearr_29754_29781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (8))){
var inst_29698 = (state_29734[(9)]);
var inst_29694 = (state_29734[(7)]);
var inst_29702 = (state_29734[(10)]);
var inst_29707 = inst_29694.push(inst_29698);
var tmp29751 = inst_29694;
var inst_29694__$1 = tmp29751;
var inst_29695 = inst_29702;
var state_29734__$1 = (function (){var statearr_29755 = state_29734;
(statearr_29755[(7)] = inst_29694__$1);

(statearr_29755[(8)] = inst_29695);

(statearr_29755[(14)] = inst_29707);

return statearr_29755;
})();
var statearr_29756_29782 = state_29734__$1;
(statearr_29756_29782[(2)] = null);

(statearr_29756_29782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26990__auto___29768,out))
;
return ((function (switch__26878__auto__,c__26990__auto___29768,out){
return (function() {
var cljs$core$async$state_machine__26879__auto__ = null;
var cljs$core$async$state_machine__26879__auto____0 = (function (){
var statearr_29760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29760[(0)] = cljs$core$async$state_machine__26879__auto__);

(statearr_29760[(1)] = (1));

return statearr_29760;
});
var cljs$core$async$state_machine__26879__auto____1 = (function (state_29734){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_29734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e29761){if((e29761 instanceof Object)){
var ex__26882__auto__ = e29761;
var statearr_29762_29783 = state_29734;
(statearr_29762_29783[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29784 = state_29734;
state_29734 = G__29784;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
cljs$core$async$state_machine__26879__auto__ = function(state_29734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26879__auto____1.call(this,state_29734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26879__auto____0;
cljs$core$async$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26879__auto____1;
return cljs$core$async$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___29768,out))
})();
var state__26992__auto__ = (function (){var statearr_29763 = f__26991__auto__.call(null);
(statearr_29763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___29768);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___29768,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530813177107