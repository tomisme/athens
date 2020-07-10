goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37075 = arguments.length;
switch (G__37075) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37076 = (function (f,blockable,meta37077){
this.f = f;
this.blockable = blockable;
this.meta37077 = meta37077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37078,meta37077__$1){
var self__ = this;
var _37078__$1 = this;
return (new cljs.core.async.t_cljs$core$async37076(self__.f,self__.blockable,meta37077__$1));
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37078){
var self__ = this;
var _37078__$1 = this;
return self__.meta37077;
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37077","meta37077",-225989788,null)], null);
}));

(cljs.core.async.t_cljs$core$async37076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37076");

(cljs.core.async.t_cljs$core$async37076.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37076.
 */
cljs.core.async.__GT_t_cljs$core$async37076 = (function cljs$core$async$__GT_t_cljs$core$async37076(f__$1,blockable__$1,meta37077){
return (new cljs.core.async.t_cljs$core$async37076(f__$1,blockable__$1,meta37077));
});

}

return (new cljs.core.async.t_cljs$core$async37076(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__37081 = arguments.length;
switch (G__37081) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37083 = arguments.length;
switch (G__37083) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__37085 = arguments.length;
switch (G__37085) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38540 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38540) : fn1.call(null,val_38540));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38540) : fn1.call(null,val_38540));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37087 = arguments.length;
switch (G__37087) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___38548 = n;
var x_38549 = (0);
while(true){
if((x_38549 < n__4666__auto___38548)){
(a[x_38549] = x_38549);

var G__38550 = (x_38549 + (1));
x_38549 = G__38550;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37088 = (function (flag,meta37089){
this.flag = flag;
this.meta37089 = meta37089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37090,meta37089__$1){
var self__ = this;
var _37090__$1 = this;
return (new cljs.core.async.t_cljs$core$async37088(self__.flag,meta37089__$1));
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37090){
var self__ = this;
var _37090__$1 = this;
return self__.meta37089;
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37089","meta37089",1137509317,null)], null);
}));

(cljs.core.async.t_cljs$core$async37088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37088");

(cljs.core.async.t_cljs$core$async37088.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37088.
 */
cljs.core.async.__GT_t_cljs$core$async37088 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37088(flag__$1,meta37089){
return (new cljs.core.async.t_cljs$core$async37088(flag__$1,meta37089));
});

}

return (new cljs.core.async.t_cljs$core$async37088(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37095 = (function (flag,cb,meta37096){
this.flag = flag;
this.cb = cb;
this.meta37096 = meta37096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37097,meta37096__$1){
var self__ = this;
var _37097__$1 = this;
return (new cljs.core.async.t_cljs$core$async37095(self__.flag,self__.cb,meta37096__$1));
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37097){
var self__ = this;
var _37097__$1 = this;
return self__.meta37096;
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37096","meta37096",-1888781068,null)], null);
}));

(cljs.core.async.t_cljs$core$async37095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37095");

(cljs.core.async.t_cljs$core$async37095.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37095.
 */
cljs.core.async.__GT_t_cljs$core$async37095 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37095(flag__$1,cb__$1,meta37096){
return (new cljs.core.async.t_cljs$core$async37095(flag__$1,cb__$1,meta37096));
});

}

return (new cljs.core.async.t_cljs$core$async37095(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37102_SHARP_){
var G__37104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37102_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37104) : fret.call(null,G__37104));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37103_SHARP_){
var G__37105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37103_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37105) : fret.call(null,G__37105));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38551 = (i + (1));
i = G__38551;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___38552 = arguments.length;
var i__4790__auto___38553 = (0);
while(true){
if((i__4790__auto___38553 < len__4789__auto___38552)){
args__4795__auto__.push((arguments[i__4790__auto___38553]));

var G__38558 = (i__4790__auto___38553 + (1));
i__4790__auto___38553 = G__38558;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37111){
var map__37113 = p__37111;
var map__37113__$1 = (((((!((map__37113 == null))))?(((((map__37113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37113):map__37113);
var opts = map__37113__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37109){
var G__37110 = cljs.core.first(seq37109);
var seq37109__$1 = cljs.core.next(seq37109);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37110,seq37109__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__37116 = arguments.length;
switch (G__37116) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37015__auto___38560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37140){
var state_val_37141 = (state_37140[(1)]);
if((state_val_37141 === (7))){
var inst_37136 = (state_37140[(2)]);
var state_37140__$1 = state_37140;
var statearr_37142_38561 = state_37140__$1;
(statearr_37142_38561[(2)] = inst_37136);

(statearr_37142_38561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (1))){
var state_37140__$1 = state_37140;
var statearr_37143_38562 = state_37140__$1;
(statearr_37143_38562[(2)] = null);

(statearr_37143_38562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (4))){
var inst_37119 = (state_37140[(7)]);
var inst_37119__$1 = (state_37140[(2)]);
var inst_37120 = (inst_37119__$1 == null);
var state_37140__$1 = (function (){var statearr_37144 = state_37140;
(statearr_37144[(7)] = inst_37119__$1);

return statearr_37144;
})();
if(cljs.core.truth_(inst_37120)){
var statearr_37145_38563 = state_37140__$1;
(statearr_37145_38563[(1)] = (5));

} else {
var statearr_37146_38564 = state_37140__$1;
(statearr_37146_38564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (13))){
var state_37140__$1 = state_37140;
var statearr_37147_38565 = state_37140__$1;
(statearr_37147_38565[(2)] = null);

(statearr_37147_38565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (6))){
var inst_37119 = (state_37140[(7)]);
var state_37140__$1 = state_37140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37140__$1,(11),to,inst_37119);
} else {
if((state_val_37141 === (3))){
var inst_37138 = (state_37140[(2)]);
var state_37140__$1 = state_37140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37140__$1,inst_37138);
} else {
if((state_val_37141 === (12))){
var state_37140__$1 = state_37140;
var statearr_37148_38566 = state_37140__$1;
(statearr_37148_38566[(2)] = null);

(statearr_37148_38566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (2))){
var state_37140__$1 = state_37140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37140__$1,(4),from);
} else {
if((state_val_37141 === (11))){
var inst_37129 = (state_37140[(2)]);
var state_37140__$1 = state_37140;
if(cljs.core.truth_(inst_37129)){
var statearr_37149_38567 = state_37140__$1;
(statearr_37149_38567[(1)] = (12));

} else {
var statearr_37150_38568 = state_37140__$1;
(statearr_37150_38568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (9))){
var state_37140__$1 = state_37140;
var statearr_37151_38569 = state_37140__$1;
(statearr_37151_38569[(2)] = null);

(statearr_37151_38569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (5))){
var state_37140__$1 = state_37140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37152_38570 = state_37140__$1;
(statearr_37152_38570[(1)] = (8));

} else {
var statearr_37153_38571 = state_37140__$1;
(statearr_37153_38571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (14))){
var inst_37134 = (state_37140[(2)]);
var state_37140__$1 = state_37140;
var statearr_37154_38572 = state_37140__$1;
(statearr_37154_38572[(2)] = inst_37134);

(statearr_37154_38572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (10))){
var inst_37126 = (state_37140[(2)]);
var state_37140__$1 = state_37140;
var statearr_37155_38573 = state_37140__$1;
(statearr_37155_38573[(2)] = inst_37126);

(statearr_37155_38573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37141 === (8))){
var inst_37123 = cljs.core.async.close_BANG_(to);
var state_37140__$1 = state_37140;
var statearr_37156_38574 = state_37140__$1;
(statearr_37156_38574[(2)] = inst_37123);

(statearr_37156_38574[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_37157 = [null,null,null,null,null,null,null,null];
(statearr_37157[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_37157[(1)] = (1));

return statearr_37157;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_37140){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37140);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37158){if((e37158 instanceof Object)){
var ex__36951__auto__ = e37158;
var statearr_37159_38575 = state_37140;
(statearr_37159_38575[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38576 = state_37140;
state_37140 = G__38576;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_37140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_37140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37160 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37160[(6)] = c__37015__auto___38560);

return statearr_37160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__37161){
var vec__37162 = p__37161;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37162,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37162,(1),null);
var job = vec__37162;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37015__auto___38578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37169){
var state_val_37170 = (state_37169[(1)]);
if((state_val_37170 === (1))){
var state_37169__$1 = state_37169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37169__$1,(2),res,v);
} else {
if((state_val_37170 === (2))){
var inst_37166 = (state_37169[(2)]);
var inst_37167 = cljs.core.async.close_BANG_(res);
var state_37169__$1 = (function (){var statearr_37171 = state_37169;
(statearr_37171[(7)] = inst_37166);

return statearr_37171;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37169__$1,inst_37167);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0 = (function (){
var statearr_37172 = [null,null,null,null,null,null,null,null];
(statearr_37172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__);

(statearr_37172[(1)] = (1));

return statearr_37172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1 = (function (state_37169){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37169);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37173){if((e37173 instanceof Object)){
var ex__36951__auto__ = e37173;
var statearr_37174_38583 = state_37169;
(statearr_37174_38583[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38585 = state_37169;
state_37169 = G__38585;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = function(state_37169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1.call(this,state_37169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37175 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37175[(6)] = c__37015__auto___38578);

return statearr_37175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37176){
var vec__37177 = p__37176;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177,(1),null);
var job = vec__37177;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___38589 = n;
var __38590 = (0);
while(true){
if((__38590 < n__4666__auto___38589)){
var G__37180_38591 = type;
var G__37180_38592__$1 = (((G__37180_38591 instanceof cljs.core.Keyword))?G__37180_38591.fqn:null);
switch (G__37180_38592__$1) {
case "compute":
var c__37015__auto___38594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38590,c__37015__auto___38594,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async){
return (function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = ((function (__38590,c__37015__auto___38594,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async){
return (function (state_37193){
var state_val_37194 = (state_37193[(1)]);
if((state_val_37194 === (1))){
var state_37193__$1 = state_37193;
var statearr_37195_38598 = state_37193__$1;
(statearr_37195_38598[(2)] = null);

(statearr_37195_38598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37194 === (2))){
var state_37193__$1 = state_37193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37193__$1,(4),jobs);
} else {
if((state_val_37194 === (3))){
var inst_37191 = (state_37193[(2)]);
var state_37193__$1 = state_37193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37193__$1,inst_37191);
} else {
if((state_val_37194 === (4))){
var inst_37183 = (state_37193[(2)]);
var inst_37184 = process(inst_37183);
var state_37193__$1 = state_37193;
if(cljs.core.truth_(inst_37184)){
var statearr_37196_38599 = state_37193__$1;
(statearr_37196_38599[(1)] = (5));

} else {
var statearr_37197_38600 = state_37193__$1;
(statearr_37197_38600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37194 === (5))){
var state_37193__$1 = state_37193;
var statearr_37198_38601 = state_37193__$1;
(statearr_37198_38601[(2)] = null);

(statearr_37198_38601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37194 === (6))){
var state_37193__$1 = state_37193;
var statearr_37199_38603 = state_37193__$1;
(statearr_37199_38603[(2)] = null);

(statearr_37199_38603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37194 === (7))){
var inst_37189 = (state_37193[(2)]);
var state_37193__$1 = state_37193;
var statearr_37200_38604 = state_37193__$1;
(statearr_37200_38604[(2)] = inst_37189);

(statearr_37200_38604[(1)] = (3));


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
});})(__38590,c__37015__auto___38594,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async))
;
return ((function (__38590,switch__36947__auto__,c__37015__auto___38594,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0 = (function (){
var statearr_37201 = [null,null,null,null,null,null,null];
(statearr_37201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__);

(statearr_37201[(1)] = (1));

return statearr_37201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1 = (function (state_37193){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37193);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37202){if((e37202 instanceof Object)){
var ex__36951__auto__ = e37202;
var statearr_37203_38605 = state_37193;
(statearr_37203_38605[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38606 = state_37193;
state_37193 = G__38606;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = function(state_37193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1.call(this,state_37193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__;
})()
;})(__38590,switch__36947__auto__,c__37015__auto___38594,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async))
})();
var state__37017__auto__ = (function (){var statearr_37204 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37204[(6)] = c__37015__auto___38594);

return statearr_37204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
});})(__38590,c__37015__auto___38594,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async))
);


break;
case "async":
var c__37015__auto___38610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38590,c__37015__auto___38610,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async){
return (function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = ((function (__38590,c__37015__auto___38610,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async){
return (function (state_37217){
var state_val_37218 = (state_37217[(1)]);
if((state_val_37218 === (1))){
var state_37217__$1 = state_37217;
var statearr_37219_38611 = state_37217__$1;
(statearr_37219_38611[(2)] = null);

(statearr_37219_38611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (2))){
var state_37217__$1 = state_37217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37217__$1,(4),jobs);
} else {
if((state_val_37218 === (3))){
var inst_37215 = (state_37217[(2)]);
var state_37217__$1 = state_37217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37217__$1,inst_37215);
} else {
if((state_val_37218 === (4))){
var inst_37207 = (state_37217[(2)]);
var inst_37208 = async(inst_37207);
var state_37217__$1 = state_37217;
if(cljs.core.truth_(inst_37208)){
var statearr_37220_38612 = state_37217__$1;
(statearr_37220_38612[(1)] = (5));

} else {
var statearr_37221_38613 = state_37217__$1;
(statearr_37221_38613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (5))){
var state_37217__$1 = state_37217;
var statearr_37222_38614 = state_37217__$1;
(statearr_37222_38614[(2)] = null);

(statearr_37222_38614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (6))){
var state_37217__$1 = state_37217;
var statearr_37223_38615 = state_37217__$1;
(statearr_37223_38615[(2)] = null);

(statearr_37223_38615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (7))){
var inst_37213 = (state_37217[(2)]);
var state_37217__$1 = state_37217;
var statearr_37224_38616 = state_37217__$1;
(statearr_37224_38616[(2)] = inst_37213);

(statearr_37224_38616[(1)] = (3));


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
});})(__38590,c__37015__auto___38610,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async))
;
return ((function (__38590,switch__36947__auto__,c__37015__auto___38610,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0 = (function (){
var statearr_37225 = [null,null,null,null,null,null,null];
(statearr_37225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__);

(statearr_37225[(1)] = (1));

return statearr_37225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1 = (function (state_37217){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37217);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37226){if((e37226 instanceof Object)){
var ex__36951__auto__ = e37226;
var statearr_37227_38617 = state_37217;
(statearr_37227_38617[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38618 = state_37217;
state_37217 = G__38618;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = function(state_37217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1.call(this,state_37217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__;
})()
;})(__38590,switch__36947__auto__,c__37015__auto___38610,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async))
})();
var state__37017__auto__ = (function (){var statearr_37228 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37228[(6)] = c__37015__auto___38610);

return statearr_37228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
});})(__38590,c__37015__auto___38610,G__37180_38591,G__37180_38592__$1,n__4666__auto___38589,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37180_38592__$1)].join('')));

}

var G__38619 = (__38590 + (1));
__38590 = G__38619;
continue;
} else {
}
break;
}

var c__37015__auto___38620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37250){
var state_val_37251 = (state_37250[(1)]);
if((state_val_37251 === (7))){
var inst_37246 = (state_37250[(2)]);
var state_37250__$1 = state_37250;
var statearr_37252_38621 = state_37250__$1;
(statearr_37252_38621[(2)] = inst_37246);

(statearr_37252_38621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37251 === (1))){
var state_37250__$1 = state_37250;
var statearr_37253_38622 = state_37250__$1;
(statearr_37253_38622[(2)] = null);

(statearr_37253_38622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37251 === (4))){
var inst_37231 = (state_37250[(7)]);
var inst_37231__$1 = (state_37250[(2)]);
var inst_37232 = (inst_37231__$1 == null);
var state_37250__$1 = (function (){var statearr_37254 = state_37250;
(statearr_37254[(7)] = inst_37231__$1);

return statearr_37254;
})();
if(cljs.core.truth_(inst_37232)){
var statearr_37255_38623 = state_37250__$1;
(statearr_37255_38623[(1)] = (5));

} else {
var statearr_37256_38624 = state_37250__$1;
(statearr_37256_38624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37251 === (6))){
var inst_37236 = (state_37250[(8)]);
var inst_37231 = (state_37250[(7)]);
var inst_37236__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37237 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37238 = [inst_37231,inst_37236__$1];
var inst_37239 = (new cljs.core.PersistentVector(null,2,(5),inst_37237,inst_37238,null));
var state_37250__$1 = (function (){var statearr_37257 = state_37250;
(statearr_37257[(8)] = inst_37236__$1);

return statearr_37257;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37250__$1,(8),jobs,inst_37239);
} else {
if((state_val_37251 === (3))){
var inst_37248 = (state_37250[(2)]);
var state_37250__$1 = state_37250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37250__$1,inst_37248);
} else {
if((state_val_37251 === (2))){
var state_37250__$1 = state_37250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37250__$1,(4),from);
} else {
if((state_val_37251 === (9))){
var inst_37243 = (state_37250[(2)]);
var state_37250__$1 = (function (){var statearr_37258 = state_37250;
(statearr_37258[(9)] = inst_37243);

return statearr_37258;
})();
var statearr_37259_38625 = state_37250__$1;
(statearr_37259_38625[(2)] = null);

(statearr_37259_38625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37251 === (5))){
var inst_37234 = cljs.core.async.close_BANG_(jobs);
var state_37250__$1 = state_37250;
var statearr_37260_38630 = state_37250__$1;
(statearr_37260_38630[(2)] = inst_37234);

(statearr_37260_38630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37251 === (8))){
var inst_37236 = (state_37250[(8)]);
var inst_37241 = (state_37250[(2)]);
var state_37250__$1 = (function (){var statearr_37261 = state_37250;
(statearr_37261[(10)] = inst_37241);

return statearr_37261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37250__$1,(9),results,inst_37236);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0 = (function (){
var statearr_37262 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__);

(statearr_37262[(1)] = (1));

return statearr_37262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1 = (function (state_37250){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37250);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37263){if((e37263 instanceof Object)){
var ex__36951__auto__ = e37263;
var statearr_37264_38639 = state_37250;
(statearr_37264_38639[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38640 = state_37250;
state_37250 = G__38640;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = function(state_37250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1.call(this,state_37250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37265 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37265[(6)] = c__37015__auto___38620);

return statearr_37265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37303){
var state_val_37304 = (state_37303[(1)]);
if((state_val_37304 === (7))){
var inst_37299 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37305_38642 = state_37303__$1;
(statearr_37305_38642[(2)] = inst_37299);

(statearr_37305_38642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (20))){
var state_37303__$1 = state_37303;
var statearr_37306_38644 = state_37303__$1;
(statearr_37306_38644[(2)] = null);

(statearr_37306_38644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (1))){
var state_37303__$1 = state_37303;
var statearr_37307_38645 = state_37303__$1;
(statearr_37307_38645[(2)] = null);

(statearr_37307_38645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (4))){
var inst_37268 = (state_37303[(7)]);
var inst_37268__$1 = (state_37303[(2)]);
var inst_37269 = (inst_37268__$1 == null);
var state_37303__$1 = (function (){var statearr_37308 = state_37303;
(statearr_37308[(7)] = inst_37268__$1);

return statearr_37308;
})();
if(cljs.core.truth_(inst_37269)){
var statearr_37309_38646 = state_37303__$1;
(statearr_37309_38646[(1)] = (5));

} else {
var statearr_37310_38647 = state_37303__$1;
(statearr_37310_38647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (15))){
var inst_37281 = (state_37303[(8)]);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37303__$1,(18),to,inst_37281);
} else {
if((state_val_37304 === (21))){
var inst_37294 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37311_38648 = state_37303__$1;
(statearr_37311_38648[(2)] = inst_37294);

(statearr_37311_38648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (13))){
var inst_37296 = (state_37303[(2)]);
var state_37303__$1 = (function (){var statearr_37312 = state_37303;
(statearr_37312[(9)] = inst_37296);

return statearr_37312;
})();
var statearr_37313_38649 = state_37303__$1;
(statearr_37313_38649[(2)] = null);

(statearr_37313_38649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (6))){
var inst_37268 = (state_37303[(7)]);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37303__$1,(11),inst_37268);
} else {
if((state_val_37304 === (17))){
var inst_37289 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
if(cljs.core.truth_(inst_37289)){
var statearr_37314_38650 = state_37303__$1;
(statearr_37314_38650[(1)] = (19));

} else {
var statearr_37315_38651 = state_37303__$1;
(statearr_37315_38651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (3))){
var inst_37301 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37303__$1,inst_37301);
} else {
if((state_val_37304 === (12))){
var inst_37278 = (state_37303[(10)]);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37303__$1,(14),inst_37278);
} else {
if((state_val_37304 === (2))){
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37303__$1,(4),results);
} else {
if((state_val_37304 === (19))){
var state_37303__$1 = state_37303;
var statearr_37316_38652 = state_37303__$1;
(statearr_37316_38652[(2)] = null);

(statearr_37316_38652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (11))){
var inst_37278 = (state_37303[(2)]);
var state_37303__$1 = (function (){var statearr_37317 = state_37303;
(statearr_37317[(10)] = inst_37278);

return statearr_37317;
})();
var statearr_37318_38654 = state_37303__$1;
(statearr_37318_38654[(2)] = null);

(statearr_37318_38654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (9))){
var state_37303__$1 = state_37303;
var statearr_37319_38656 = state_37303__$1;
(statearr_37319_38656[(2)] = null);

(statearr_37319_38656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (5))){
var state_37303__$1 = state_37303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37320_38657 = state_37303__$1;
(statearr_37320_38657[(1)] = (8));

} else {
var statearr_37321_38658 = state_37303__$1;
(statearr_37321_38658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (14))){
var inst_37281 = (state_37303[(8)]);
var inst_37281__$1 = (state_37303[(2)]);
var inst_37282 = (inst_37281__$1 == null);
var inst_37283 = cljs.core.not(inst_37282);
var state_37303__$1 = (function (){var statearr_37322 = state_37303;
(statearr_37322[(8)] = inst_37281__$1);

return statearr_37322;
})();
if(inst_37283){
var statearr_37323_38659 = state_37303__$1;
(statearr_37323_38659[(1)] = (15));

} else {
var statearr_37324_38660 = state_37303__$1;
(statearr_37324_38660[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (16))){
var state_37303__$1 = state_37303;
var statearr_37325_38661 = state_37303__$1;
(statearr_37325_38661[(2)] = false);

(statearr_37325_38661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (10))){
var inst_37275 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37326_38662 = state_37303__$1;
(statearr_37326_38662[(2)] = inst_37275);

(statearr_37326_38662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (18))){
var inst_37286 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37327_38663 = state_37303__$1;
(statearr_37327_38663[(2)] = inst_37286);

(statearr_37327_38663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (8))){
var inst_37272 = cljs.core.async.close_BANG_(to);
var state_37303__$1 = state_37303;
var statearr_37328_38664 = state_37303__$1;
(statearr_37328_38664[(2)] = inst_37272);

(statearr_37328_38664[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0 = (function (){
var statearr_37329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__);

(statearr_37329[(1)] = (1));

return statearr_37329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1 = (function (state_37303){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37303);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37330){if((e37330 instanceof Object)){
var ex__36951__auto__ = e37330;
var statearr_37331_38665 = state_37303;
(statearr_37331_38665[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38666 = state_37303;
state_37303 = G__38666;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__ = function(state_37303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1.call(this,state_37303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36948__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37332 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37332[(6)] = c__37015__auto__);

return statearr_37332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
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
var G__37334 = arguments.length;
switch (G__37334) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__37336 = arguments.length;
switch (G__37336) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__37338 = arguments.length;
switch (G__37338) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37015__auto___38670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37364){
var state_val_37365 = (state_37364[(1)]);
if((state_val_37365 === (7))){
var inst_37360 = (state_37364[(2)]);
var state_37364__$1 = state_37364;
var statearr_37366_38671 = state_37364__$1;
(statearr_37366_38671[(2)] = inst_37360);

(statearr_37366_38671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (1))){
var state_37364__$1 = state_37364;
var statearr_37367_38672 = state_37364__$1;
(statearr_37367_38672[(2)] = null);

(statearr_37367_38672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (4))){
var inst_37341 = (state_37364[(7)]);
var inst_37341__$1 = (state_37364[(2)]);
var inst_37342 = (inst_37341__$1 == null);
var state_37364__$1 = (function (){var statearr_37368 = state_37364;
(statearr_37368[(7)] = inst_37341__$1);

return statearr_37368;
})();
if(cljs.core.truth_(inst_37342)){
var statearr_37369_38673 = state_37364__$1;
(statearr_37369_38673[(1)] = (5));

} else {
var statearr_37370_38674 = state_37364__$1;
(statearr_37370_38674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (13))){
var state_37364__$1 = state_37364;
var statearr_37371_38675 = state_37364__$1;
(statearr_37371_38675[(2)] = null);

(statearr_37371_38675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (6))){
var inst_37341 = (state_37364[(7)]);
var inst_37347 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37341) : p.call(null,inst_37341));
var state_37364__$1 = state_37364;
if(cljs.core.truth_(inst_37347)){
var statearr_37372_38676 = state_37364__$1;
(statearr_37372_38676[(1)] = (9));

} else {
var statearr_37373_38677 = state_37364__$1;
(statearr_37373_38677[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (3))){
var inst_37362 = (state_37364[(2)]);
var state_37364__$1 = state_37364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37364__$1,inst_37362);
} else {
if((state_val_37365 === (12))){
var state_37364__$1 = state_37364;
var statearr_37374_38678 = state_37364__$1;
(statearr_37374_38678[(2)] = null);

(statearr_37374_38678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (2))){
var state_37364__$1 = state_37364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37364__$1,(4),ch);
} else {
if((state_val_37365 === (11))){
var inst_37341 = (state_37364[(7)]);
var inst_37351 = (state_37364[(2)]);
var state_37364__$1 = state_37364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37364__$1,(8),inst_37351,inst_37341);
} else {
if((state_val_37365 === (9))){
var state_37364__$1 = state_37364;
var statearr_37375_38679 = state_37364__$1;
(statearr_37375_38679[(2)] = tc);

(statearr_37375_38679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (5))){
var inst_37344 = cljs.core.async.close_BANG_(tc);
var inst_37345 = cljs.core.async.close_BANG_(fc);
var state_37364__$1 = (function (){var statearr_37376 = state_37364;
(statearr_37376[(8)] = inst_37344);

return statearr_37376;
})();
var statearr_37377_38680 = state_37364__$1;
(statearr_37377_38680[(2)] = inst_37345);

(statearr_37377_38680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (14))){
var inst_37358 = (state_37364[(2)]);
var state_37364__$1 = state_37364;
var statearr_37378_38681 = state_37364__$1;
(statearr_37378_38681[(2)] = inst_37358);

(statearr_37378_38681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (10))){
var state_37364__$1 = state_37364;
var statearr_37379_38682 = state_37364__$1;
(statearr_37379_38682[(2)] = fc);

(statearr_37379_38682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (8))){
var inst_37353 = (state_37364[(2)]);
var state_37364__$1 = state_37364;
if(cljs.core.truth_(inst_37353)){
var statearr_37380_38683 = state_37364__$1;
(statearr_37380_38683[(1)] = (12));

} else {
var statearr_37381_38684 = state_37364__$1;
(statearr_37381_38684[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_37382 = [null,null,null,null,null,null,null,null,null];
(statearr_37382[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_37382[(1)] = (1));

return statearr_37382;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_37364){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37364);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37383){if((e37383 instanceof Object)){
var ex__36951__auto__ = e37383;
var statearr_37384_38685 = state_37364;
(statearr_37384_38685[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38686 = state_37364;
state_37364 = G__38686;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_37364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_37364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37385 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37385[(6)] = c__37015__auto___38670);

return statearr_37385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37406){
var state_val_37407 = (state_37406[(1)]);
if((state_val_37407 === (7))){
var inst_37402 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37408_38687 = state_37406__$1;
(statearr_37408_38687[(2)] = inst_37402);

(statearr_37408_38687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (1))){
var inst_37386 = init;
var state_37406__$1 = (function (){var statearr_37409 = state_37406;
(statearr_37409[(7)] = inst_37386);

return statearr_37409;
})();
var statearr_37410_38688 = state_37406__$1;
(statearr_37410_38688[(2)] = null);

(statearr_37410_38688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (4))){
var inst_37389 = (state_37406[(8)]);
var inst_37389__$1 = (state_37406[(2)]);
var inst_37390 = (inst_37389__$1 == null);
var state_37406__$1 = (function (){var statearr_37411 = state_37406;
(statearr_37411[(8)] = inst_37389__$1);

return statearr_37411;
})();
if(cljs.core.truth_(inst_37390)){
var statearr_37412_38689 = state_37406__$1;
(statearr_37412_38689[(1)] = (5));

} else {
var statearr_37413_38690 = state_37406__$1;
(statearr_37413_38690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (6))){
var inst_37386 = (state_37406[(7)]);
var inst_37389 = (state_37406[(8)]);
var inst_37393 = (state_37406[(9)]);
var inst_37393__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37386,inst_37389) : f.call(null,inst_37386,inst_37389));
var inst_37394 = cljs.core.reduced_QMARK_(inst_37393__$1);
var state_37406__$1 = (function (){var statearr_37414 = state_37406;
(statearr_37414[(9)] = inst_37393__$1);

return statearr_37414;
})();
if(inst_37394){
var statearr_37415_38691 = state_37406__$1;
(statearr_37415_38691[(1)] = (8));

} else {
var statearr_37416_38692 = state_37406__$1;
(statearr_37416_38692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (3))){
var inst_37404 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37406__$1,inst_37404);
} else {
if((state_val_37407 === (2))){
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37406__$1,(4),ch);
} else {
if((state_val_37407 === (9))){
var inst_37393 = (state_37406[(9)]);
var inst_37386 = inst_37393;
var state_37406__$1 = (function (){var statearr_37417 = state_37406;
(statearr_37417[(7)] = inst_37386);

return statearr_37417;
})();
var statearr_37418_38693 = state_37406__$1;
(statearr_37418_38693[(2)] = null);

(statearr_37418_38693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (5))){
var inst_37386 = (state_37406[(7)]);
var state_37406__$1 = state_37406;
var statearr_37419_38694 = state_37406__$1;
(statearr_37419_38694[(2)] = inst_37386);

(statearr_37419_38694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (10))){
var inst_37400 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37420_38695 = state_37406__$1;
(statearr_37420_38695[(2)] = inst_37400);

(statearr_37420_38695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (8))){
var inst_37393 = (state_37406[(9)]);
var inst_37396 = cljs.core.deref(inst_37393);
var state_37406__$1 = state_37406;
var statearr_37421_38696 = state_37406__$1;
(statearr_37421_38696[(2)] = inst_37396);

(statearr_37421_38696[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36948__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36948__auto____0 = (function (){
var statearr_37422 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37422[(0)] = cljs$core$async$reduce_$_state_machine__36948__auto__);

(statearr_37422[(1)] = (1));

return statearr_37422;
});
var cljs$core$async$reduce_$_state_machine__36948__auto____1 = (function (state_37406){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37406);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37423){if((e37423 instanceof Object)){
var ex__36951__auto__ = e37423;
var statearr_37424_38697 = state_37406;
(statearr_37424_38697[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38698 = state_37406;
state_37406 = G__38698;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36948__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36948__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36948__auto____0;
cljs$core$async$reduce_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36948__auto____1;
return cljs$core$async$reduce_$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37425 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37425[(6)] = c__37015__auto__);

return statearr_37425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37431){
var state_val_37432 = (state_37431[(1)]);
if((state_val_37432 === (1))){
var inst_37426 = cljs.core.async.reduce(f__$1,init,ch);
var state_37431__$1 = state_37431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37431__$1,(2),inst_37426);
} else {
if((state_val_37432 === (2))){
var inst_37428 = (state_37431[(2)]);
var inst_37429 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37428) : f__$1.call(null,inst_37428));
var state_37431__$1 = state_37431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37431__$1,inst_37429);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36948__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36948__auto____0 = (function (){
var statearr_37433 = [null,null,null,null,null,null,null];
(statearr_37433[(0)] = cljs$core$async$transduce_$_state_machine__36948__auto__);

(statearr_37433[(1)] = (1));

return statearr_37433;
});
var cljs$core$async$transduce_$_state_machine__36948__auto____1 = (function (state_37431){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37431);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37434){if((e37434 instanceof Object)){
var ex__36951__auto__ = e37434;
var statearr_37435_38699 = state_37431;
(statearr_37435_38699[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38700 = state_37431;
state_37431 = G__38700;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36948__auto__ = function(state_37431){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36948__auto____1.call(this,state_37431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36948__auto____0;
cljs$core$async$transduce_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36948__auto____1;
return cljs$core$async$transduce_$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37436 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37436[(6)] = c__37015__auto__);

return statearr_37436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
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
var G__37438 = arguments.length;
switch (G__37438) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37463){
var state_val_37464 = (state_37463[(1)]);
if((state_val_37464 === (7))){
var inst_37445 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
var statearr_37465_38702 = state_37463__$1;
(statearr_37465_38702[(2)] = inst_37445);

(statearr_37465_38702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (1))){
var inst_37439 = cljs.core.seq(coll);
var inst_37440 = inst_37439;
var state_37463__$1 = (function (){var statearr_37466 = state_37463;
(statearr_37466[(7)] = inst_37440);

return statearr_37466;
})();
var statearr_37467_38703 = state_37463__$1;
(statearr_37467_38703[(2)] = null);

(statearr_37467_38703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (4))){
var inst_37440 = (state_37463[(7)]);
var inst_37443 = cljs.core.first(inst_37440);
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37463__$1,(7),ch,inst_37443);
} else {
if((state_val_37464 === (13))){
var inst_37457 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
var statearr_37468_38704 = state_37463__$1;
(statearr_37468_38704[(2)] = inst_37457);

(statearr_37468_38704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (6))){
var inst_37448 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
if(cljs.core.truth_(inst_37448)){
var statearr_37469_38705 = state_37463__$1;
(statearr_37469_38705[(1)] = (8));

} else {
var statearr_37470_38706 = state_37463__$1;
(statearr_37470_38706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (3))){
var inst_37461 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37463__$1,inst_37461);
} else {
if((state_val_37464 === (12))){
var state_37463__$1 = state_37463;
var statearr_37471_38707 = state_37463__$1;
(statearr_37471_38707[(2)] = null);

(statearr_37471_38707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (2))){
var inst_37440 = (state_37463[(7)]);
var state_37463__$1 = state_37463;
if(cljs.core.truth_(inst_37440)){
var statearr_37472_38708 = state_37463__$1;
(statearr_37472_38708[(1)] = (4));

} else {
var statearr_37473_38709 = state_37463__$1;
(statearr_37473_38709[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (11))){
var inst_37454 = cljs.core.async.close_BANG_(ch);
var state_37463__$1 = state_37463;
var statearr_37474_38710 = state_37463__$1;
(statearr_37474_38710[(2)] = inst_37454);

(statearr_37474_38710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (9))){
var state_37463__$1 = state_37463;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37475_38711 = state_37463__$1;
(statearr_37475_38711[(1)] = (11));

} else {
var statearr_37476_38712 = state_37463__$1;
(statearr_37476_38712[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (5))){
var inst_37440 = (state_37463[(7)]);
var state_37463__$1 = state_37463;
var statearr_37477_38713 = state_37463__$1;
(statearr_37477_38713[(2)] = inst_37440);

(statearr_37477_38713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (10))){
var inst_37459 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
var statearr_37478_38714 = state_37463__$1;
(statearr_37478_38714[(2)] = inst_37459);

(statearr_37478_38714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (8))){
var inst_37440 = (state_37463[(7)]);
var inst_37450 = cljs.core.next(inst_37440);
var inst_37440__$1 = inst_37450;
var state_37463__$1 = (function (){var statearr_37479 = state_37463;
(statearr_37479[(7)] = inst_37440__$1);

return statearr_37479;
})();
var statearr_37480_38715 = state_37463__$1;
(statearr_37480_38715[(2)] = null);

(statearr_37480_38715[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_37481 = [null,null,null,null,null,null,null,null];
(statearr_37481[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_37481[(1)] = (1));

return statearr_37481;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_37463){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37463);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37482){if((e37482 instanceof Object)){
var ex__36951__auto__ = e37482;
var statearr_37483_38716 = state_37463;
(statearr_37483_38716[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38717 = state_37463;
state_37463 = G__38717;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_37463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_37463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37484 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37484[(6)] = c__37015__auto__);

return statearr_37484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37485 = (function (ch,cs,meta37486){
this.ch = ch;
this.cs = cs;
this.meta37486 = meta37486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37487,meta37486__$1){
var self__ = this;
var _37487__$1 = this;
return (new cljs.core.async.t_cljs$core$async37485(self__.ch,self__.cs,meta37486__$1));
}));

(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37487){
var self__ = this;
var _37487__$1 = this;
return self__.meta37486;
}));

(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37485.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37486","meta37486",-1824800241,null)], null);
}));

(cljs.core.async.t_cljs$core$async37485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37485");

(cljs.core.async.t_cljs$core$async37485.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37485.
 */
cljs.core.async.__GT_t_cljs$core$async37485 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37485(ch__$1,cs__$1,meta37486){
return (new cljs.core.async.t_cljs$core$async37485(ch__$1,cs__$1,meta37486));
});

}

return (new cljs.core.async.t_cljs$core$async37485(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37015__auto___38718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37622){
var state_val_37623 = (state_37622[(1)]);
if((state_val_37623 === (7))){
var inst_37618 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37624_38719 = state_37622__$1;
(statearr_37624_38719[(2)] = inst_37618);

(statearr_37624_38719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (20))){
var inst_37521 = (state_37622[(7)]);
var inst_37533 = cljs.core.first(inst_37521);
var inst_37534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37533,(0),null);
var inst_37535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37533,(1),null);
var state_37622__$1 = (function (){var statearr_37625 = state_37622;
(statearr_37625[(8)] = inst_37534);

return statearr_37625;
})();
if(cljs.core.truth_(inst_37535)){
var statearr_37626_38720 = state_37622__$1;
(statearr_37626_38720[(1)] = (22));

} else {
var statearr_37627_38721 = state_37622__$1;
(statearr_37627_38721[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (27))){
var inst_37565 = (state_37622[(9)]);
var inst_37563 = (state_37622[(10)]);
var inst_37490 = (state_37622[(11)]);
var inst_37570 = (state_37622[(12)]);
var inst_37570__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37563,inst_37565);
var inst_37571 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37570__$1,inst_37490,done);
var state_37622__$1 = (function (){var statearr_37628 = state_37622;
(statearr_37628[(12)] = inst_37570__$1);

return statearr_37628;
})();
if(cljs.core.truth_(inst_37571)){
var statearr_37629_38722 = state_37622__$1;
(statearr_37629_38722[(1)] = (30));

} else {
var statearr_37630_38723 = state_37622__$1;
(statearr_37630_38723[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (1))){
var state_37622__$1 = state_37622;
var statearr_37631_38724 = state_37622__$1;
(statearr_37631_38724[(2)] = null);

(statearr_37631_38724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (24))){
var inst_37521 = (state_37622[(7)]);
var inst_37540 = (state_37622[(2)]);
var inst_37541 = cljs.core.next(inst_37521);
var inst_37499 = inst_37541;
var inst_37500 = null;
var inst_37501 = (0);
var inst_37502 = (0);
var state_37622__$1 = (function (){var statearr_37632 = state_37622;
(statearr_37632[(13)] = inst_37501);

(statearr_37632[(14)] = inst_37500);

(statearr_37632[(15)] = inst_37540);

(statearr_37632[(16)] = inst_37499);

(statearr_37632[(17)] = inst_37502);

return statearr_37632;
})();
var statearr_37633_38725 = state_37622__$1;
(statearr_37633_38725[(2)] = null);

(statearr_37633_38725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (39))){
var state_37622__$1 = state_37622;
var statearr_37637_38726 = state_37622__$1;
(statearr_37637_38726[(2)] = null);

(statearr_37637_38726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (4))){
var inst_37490 = (state_37622[(11)]);
var inst_37490__$1 = (state_37622[(2)]);
var inst_37491 = (inst_37490__$1 == null);
var state_37622__$1 = (function (){var statearr_37638 = state_37622;
(statearr_37638[(11)] = inst_37490__$1);

return statearr_37638;
})();
if(cljs.core.truth_(inst_37491)){
var statearr_37639_38727 = state_37622__$1;
(statearr_37639_38727[(1)] = (5));

} else {
var statearr_37640_38728 = state_37622__$1;
(statearr_37640_38728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (15))){
var inst_37501 = (state_37622[(13)]);
var inst_37500 = (state_37622[(14)]);
var inst_37499 = (state_37622[(16)]);
var inst_37502 = (state_37622[(17)]);
var inst_37517 = (state_37622[(2)]);
var inst_37518 = (inst_37502 + (1));
var tmp37634 = inst_37501;
var tmp37635 = inst_37500;
var tmp37636 = inst_37499;
var inst_37499__$1 = tmp37636;
var inst_37500__$1 = tmp37635;
var inst_37501__$1 = tmp37634;
var inst_37502__$1 = inst_37518;
var state_37622__$1 = (function (){var statearr_37641 = state_37622;
(statearr_37641[(13)] = inst_37501__$1);

(statearr_37641[(14)] = inst_37500__$1);

(statearr_37641[(16)] = inst_37499__$1);

(statearr_37641[(17)] = inst_37502__$1);

(statearr_37641[(18)] = inst_37517);

return statearr_37641;
})();
var statearr_37642_38729 = state_37622__$1;
(statearr_37642_38729[(2)] = null);

(statearr_37642_38729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (21))){
var inst_37544 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37646_38730 = state_37622__$1;
(statearr_37646_38730[(2)] = inst_37544);

(statearr_37646_38730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (31))){
var inst_37570 = (state_37622[(12)]);
var inst_37574 = done(null);
var inst_37575 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37570);
var state_37622__$1 = (function (){var statearr_37647 = state_37622;
(statearr_37647[(19)] = inst_37574);

return statearr_37647;
})();
var statearr_37648_38731 = state_37622__$1;
(statearr_37648_38731[(2)] = inst_37575);

(statearr_37648_38731[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (32))){
var inst_37564 = (state_37622[(20)]);
var inst_37565 = (state_37622[(9)]);
var inst_37562 = (state_37622[(21)]);
var inst_37563 = (state_37622[(10)]);
var inst_37577 = (state_37622[(2)]);
var inst_37578 = (inst_37565 + (1));
var tmp37643 = inst_37564;
var tmp37644 = inst_37562;
var tmp37645 = inst_37563;
var inst_37562__$1 = tmp37644;
var inst_37563__$1 = tmp37645;
var inst_37564__$1 = tmp37643;
var inst_37565__$1 = inst_37578;
var state_37622__$1 = (function (){var statearr_37649 = state_37622;
(statearr_37649[(20)] = inst_37564__$1);

(statearr_37649[(9)] = inst_37565__$1);

(statearr_37649[(21)] = inst_37562__$1);

(statearr_37649[(10)] = inst_37563__$1);

(statearr_37649[(22)] = inst_37577);

return statearr_37649;
})();
var statearr_37650_38732 = state_37622__$1;
(statearr_37650_38732[(2)] = null);

(statearr_37650_38732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (40))){
var inst_37590 = (state_37622[(23)]);
var inst_37594 = done(null);
var inst_37595 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37590);
var state_37622__$1 = (function (){var statearr_37651 = state_37622;
(statearr_37651[(24)] = inst_37594);

return statearr_37651;
})();
var statearr_37652_38733 = state_37622__$1;
(statearr_37652_38733[(2)] = inst_37595);

(statearr_37652_38733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (33))){
var inst_37581 = (state_37622[(25)]);
var inst_37583 = cljs.core.chunked_seq_QMARK_(inst_37581);
var state_37622__$1 = state_37622;
if(inst_37583){
var statearr_37653_38734 = state_37622__$1;
(statearr_37653_38734[(1)] = (36));

} else {
var statearr_37654_38735 = state_37622__$1;
(statearr_37654_38735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (13))){
var inst_37511 = (state_37622[(26)]);
var inst_37514 = cljs.core.async.close_BANG_(inst_37511);
var state_37622__$1 = state_37622;
var statearr_37655_38736 = state_37622__$1;
(statearr_37655_38736[(2)] = inst_37514);

(statearr_37655_38736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (22))){
var inst_37534 = (state_37622[(8)]);
var inst_37537 = cljs.core.async.close_BANG_(inst_37534);
var state_37622__$1 = state_37622;
var statearr_37656_38737 = state_37622__$1;
(statearr_37656_38737[(2)] = inst_37537);

(statearr_37656_38737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (36))){
var inst_37581 = (state_37622[(25)]);
var inst_37585 = cljs.core.chunk_first(inst_37581);
var inst_37586 = cljs.core.chunk_rest(inst_37581);
var inst_37587 = cljs.core.count(inst_37585);
var inst_37562 = inst_37586;
var inst_37563 = inst_37585;
var inst_37564 = inst_37587;
var inst_37565 = (0);
var state_37622__$1 = (function (){var statearr_37657 = state_37622;
(statearr_37657[(20)] = inst_37564);

(statearr_37657[(9)] = inst_37565);

(statearr_37657[(21)] = inst_37562);

(statearr_37657[(10)] = inst_37563);

return statearr_37657;
})();
var statearr_37658_38738 = state_37622__$1;
(statearr_37658_38738[(2)] = null);

(statearr_37658_38738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (41))){
var inst_37581 = (state_37622[(25)]);
var inst_37597 = (state_37622[(2)]);
var inst_37598 = cljs.core.next(inst_37581);
var inst_37562 = inst_37598;
var inst_37563 = null;
var inst_37564 = (0);
var inst_37565 = (0);
var state_37622__$1 = (function (){var statearr_37659 = state_37622;
(statearr_37659[(20)] = inst_37564);

(statearr_37659[(9)] = inst_37565);

(statearr_37659[(21)] = inst_37562);

(statearr_37659[(10)] = inst_37563);

(statearr_37659[(27)] = inst_37597);

return statearr_37659;
})();
var statearr_37660_38739 = state_37622__$1;
(statearr_37660_38739[(2)] = null);

(statearr_37660_38739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (43))){
var state_37622__$1 = state_37622;
var statearr_37661_38740 = state_37622__$1;
(statearr_37661_38740[(2)] = null);

(statearr_37661_38740[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (29))){
var inst_37606 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37662_38741 = state_37622__$1;
(statearr_37662_38741[(2)] = inst_37606);

(statearr_37662_38741[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (44))){
var inst_37615 = (state_37622[(2)]);
var state_37622__$1 = (function (){var statearr_37663 = state_37622;
(statearr_37663[(28)] = inst_37615);

return statearr_37663;
})();
var statearr_37664_38742 = state_37622__$1;
(statearr_37664_38742[(2)] = null);

(statearr_37664_38742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (6))){
var inst_37554 = (state_37622[(29)]);
var inst_37553 = cljs.core.deref(cs);
var inst_37554__$1 = cljs.core.keys(inst_37553);
var inst_37555 = cljs.core.count(inst_37554__$1);
var inst_37556 = cljs.core.reset_BANG_(dctr,inst_37555);
var inst_37561 = cljs.core.seq(inst_37554__$1);
var inst_37562 = inst_37561;
var inst_37563 = null;
var inst_37564 = (0);
var inst_37565 = (0);
var state_37622__$1 = (function (){var statearr_37665 = state_37622;
(statearr_37665[(20)] = inst_37564);

(statearr_37665[(9)] = inst_37565);

(statearr_37665[(21)] = inst_37562);

(statearr_37665[(29)] = inst_37554__$1);

(statearr_37665[(10)] = inst_37563);

(statearr_37665[(30)] = inst_37556);

return statearr_37665;
})();
var statearr_37666_38743 = state_37622__$1;
(statearr_37666_38743[(2)] = null);

(statearr_37666_38743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (28))){
var inst_37562 = (state_37622[(21)]);
var inst_37581 = (state_37622[(25)]);
var inst_37581__$1 = cljs.core.seq(inst_37562);
var state_37622__$1 = (function (){var statearr_37667 = state_37622;
(statearr_37667[(25)] = inst_37581__$1);

return statearr_37667;
})();
if(inst_37581__$1){
var statearr_37668_38744 = state_37622__$1;
(statearr_37668_38744[(1)] = (33));

} else {
var statearr_37669_38745 = state_37622__$1;
(statearr_37669_38745[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (25))){
var inst_37564 = (state_37622[(20)]);
var inst_37565 = (state_37622[(9)]);
var inst_37567 = (inst_37565 < inst_37564);
var inst_37568 = inst_37567;
var state_37622__$1 = state_37622;
if(cljs.core.truth_(inst_37568)){
var statearr_37670_38746 = state_37622__$1;
(statearr_37670_38746[(1)] = (27));

} else {
var statearr_37671_38747 = state_37622__$1;
(statearr_37671_38747[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (34))){
var state_37622__$1 = state_37622;
var statearr_37672_38748 = state_37622__$1;
(statearr_37672_38748[(2)] = null);

(statearr_37672_38748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (17))){
var state_37622__$1 = state_37622;
var statearr_37673_38749 = state_37622__$1;
(statearr_37673_38749[(2)] = null);

(statearr_37673_38749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (3))){
var inst_37620 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37622__$1,inst_37620);
} else {
if((state_val_37623 === (12))){
var inst_37549 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37674_38750 = state_37622__$1;
(statearr_37674_38750[(2)] = inst_37549);

(statearr_37674_38750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (2))){
var state_37622__$1 = state_37622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37622__$1,(4),ch);
} else {
if((state_val_37623 === (23))){
var state_37622__$1 = state_37622;
var statearr_37675_38751 = state_37622__$1;
(statearr_37675_38751[(2)] = null);

(statearr_37675_38751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (35))){
var inst_37604 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37676_38752 = state_37622__$1;
(statearr_37676_38752[(2)] = inst_37604);

(statearr_37676_38752[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (19))){
var inst_37521 = (state_37622[(7)]);
var inst_37525 = cljs.core.chunk_first(inst_37521);
var inst_37526 = cljs.core.chunk_rest(inst_37521);
var inst_37527 = cljs.core.count(inst_37525);
var inst_37499 = inst_37526;
var inst_37500 = inst_37525;
var inst_37501 = inst_37527;
var inst_37502 = (0);
var state_37622__$1 = (function (){var statearr_37677 = state_37622;
(statearr_37677[(13)] = inst_37501);

(statearr_37677[(14)] = inst_37500);

(statearr_37677[(16)] = inst_37499);

(statearr_37677[(17)] = inst_37502);

return statearr_37677;
})();
var statearr_37678_38753 = state_37622__$1;
(statearr_37678_38753[(2)] = null);

(statearr_37678_38753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (11))){
var inst_37499 = (state_37622[(16)]);
var inst_37521 = (state_37622[(7)]);
var inst_37521__$1 = cljs.core.seq(inst_37499);
var state_37622__$1 = (function (){var statearr_37679 = state_37622;
(statearr_37679[(7)] = inst_37521__$1);

return statearr_37679;
})();
if(inst_37521__$1){
var statearr_37680_38757 = state_37622__$1;
(statearr_37680_38757[(1)] = (16));

} else {
var statearr_37681_38758 = state_37622__$1;
(statearr_37681_38758[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (9))){
var inst_37551 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37682_38760 = state_37622__$1;
(statearr_37682_38760[(2)] = inst_37551);

(statearr_37682_38760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (5))){
var inst_37497 = cljs.core.deref(cs);
var inst_37498 = cljs.core.seq(inst_37497);
var inst_37499 = inst_37498;
var inst_37500 = null;
var inst_37501 = (0);
var inst_37502 = (0);
var state_37622__$1 = (function (){var statearr_37683 = state_37622;
(statearr_37683[(13)] = inst_37501);

(statearr_37683[(14)] = inst_37500);

(statearr_37683[(16)] = inst_37499);

(statearr_37683[(17)] = inst_37502);

return statearr_37683;
})();
var statearr_37684_38767 = state_37622__$1;
(statearr_37684_38767[(2)] = null);

(statearr_37684_38767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (14))){
var state_37622__$1 = state_37622;
var statearr_37685_38768 = state_37622__$1;
(statearr_37685_38768[(2)] = null);

(statearr_37685_38768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (45))){
var inst_37612 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37686_38771 = state_37622__$1;
(statearr_37686_38771[(2)] = inst_37612);

(statearr_37686_38771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (26))){
var inst_37554 = (state_37622[(29)]);
var inst_37608 = (state_37622[(2)]);
var inst_37609 = cljs.core.seq(inst_37554);
var state_37622__$1 = (function (){var statearr_37687 = state_37622;
(statearr_37687[(31)] = inst_37608);

return statearr_37687;
})();
if(inst_37609){
var statearr_37688_38774 = state_37622__$1;
(statearr_37688_38774[(1)] = (42));

} else {
var statearr_37689_38775 = state_37622__$1;
(statearr_37689_38775[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (16))){
var inst_37521 = (state_37622[(7)]);
var inst_37523 = cljs.core.chunked_seq_QMARK_(inst_37521);
var state_37622__$1 = state_37622;
if(inst_37523){
var statearr_37690_38776 = state_37622__$1;
(statearr_37690_38776[(1)] = (19));

} else {
var statearr_37691_38777 = state_37622__$1;
(statearr_37691_38777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (38))){
var inst_37601 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37692_38780 = state_37622__$1;
(statearr_37692_38780[(2)] = inst_37601);

(statearr_37692_38780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (30))){
var state_37622__$1 = state_37622;
var statearr_37693_38781 = state_37622__$1;
(statearr_37693_38781[(2)] = null);

(statearr_37693_38781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (10))){
var inst_37500 = (state_37622[(14)]);
var inst_37502 = (state_37622[(17)]);
var inst_37510 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37500,inst_37502);
var inst_37511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37510,(0),null);
var inst_37512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37510,(1),null);
var state_37622__$1 = (function (){var statearr_37694 = state_37622;
(statearr_37694[(26)] = inst_37511);

return statearr_37694;
})();
if(cljs.core.truth_(inst_37512)){
var statearr_37695_38782 = state_37622__$1;
(statearr_37695_38782[(1)] = (13));

} else {
var statearr_37696_38783 = state_37622__$1;
(statearr_37696_38783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (18))){
var inst_37547 = (state_37622[(2)]);
var state_37622__$1 = state_37622;
var statearr_37697_38784 = state_37622__$1;
(statearr_37697_38784[(2)] = inst_37547);

(statearr_37697_38784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (42))){
var state_37622__$1 = state_37622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37622__$1,(45),dchan);
} else {
if((state_val_37623 === (37))){
var inst_37590 = (state_37622[(23)]);
var inst_37490 = (state_37622[(11)]);
var inst_37581 = (state_37622[(25)]);
var inst_37590__$1 = cljs.core.first(inst_37581);
var inst_37591 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37590__$1,inst_37490,done);
var state_37622__$1 = (function (){var statearr_37698 = state_37622;
(statearr_37698[(23)] = inst_37590__$1);

return statearr_37698;
})();
if(cljs.core.truth_(inst_37591)){
var statearr_37699_38786 = state_37622__$1;
(statearr_37699_38786[(1)] = (39));

} else {
var statearr_37700_38787 = state_37622__$1;
(statearr_37700_38787[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37623 === (8))){
var inst_37501 = (state_37622[(13)]);
var inst_37502 = (state_37622[(17)]);
var inst_37504 = (inst_37502 < inst_37501);
var inst_37505 = inst_37504;
var state_37622__$1 = state_37622;
if(cljs.core.truth_(inst_37505)){
var statearr_37701_38788 = state_37622__$1;
(statearr_37701_38788[(1)] = (10));

} else {
var statearr_37702_38789 = state_37622__$1;
(statearr_37702_38789[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__36948__auto__ = null;
var cljs$core$async$mult_$_state_machine__36948__auto____0 = (function (){
var statearr_37703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37703[(0)] = cljs$core$async$mult_$_state_machine__36948__auto__);

(statearr_37703[(1)] = (1));

return statearr_37703;
});
var cljs$core$async$mult_$_state_machine__36948__auto____1 = (function (state_37622){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37622);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37704){if((e37704 instanceof Object)){
var ex__36951__auto__ = e37704;
var statearr_37705_38790 = state_37622;
(statearr_37705_38790[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38791 = state_37622;
state_37622 = G__38791;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36948__auto__ = function(state_37622){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36948__auto____1.call(this,state_37622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36948__auto____0;
cljs$core$async$mult_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36948__auto____1;
return cljs$core$async$mult_$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37706 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37706[(6)] = c__37015__auto___38718);

return statearr_37706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37708 = arguments.length;
switch (G__37708) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38793 = arguments.length;
var i__4790__auto___38794 = (0);
while(true){
if((i__4790__auto___38794 < len__4789__auto___38793)){
args__4795__auto__.push((arguments[i__4790__auto___38794]));

var G__38795 = (i__4790__auto___38794 + (1));
i__4790__auto___38794 = G__38795;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37713){
var map__37714 = p__37713;
var map__37714__$1 = (((((!((map__37714 == null))))?(((((map__37714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37714):map__37714);
var opts = map__37714__$1;
var statearr_37716_38796 = state;
(statearr_37716_38796[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37717_38797 = state;
(statearr_37717_38797[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37718_38798 = state;
(statearr_37718_38798[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37709){
var G__37710 = cljs.core.first(seq37709);
var seq37709__$1 = cljs.core.next(seq37709);
var G__37711 = cljs.core.first(seq37709__$1);
var seq37709__$2 = cljs.core.next(seq37709__$1);
var G__37712 = cljs.core.first(seq37709__$2);
var seq37709__$3 = cljs.core.next(seq37709__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37710,G__37711,G__37712,seq37709__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37719 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37720){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37720 = meta37720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37721,meta37720__$1){
var self__ = this;
var _37721__$1 = this;
return (new cljs.core.async.t_cljs$core$async37719(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37720__$1));
}));

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37721){
var self__ = this;
var _37721__$1 = this;
return self__.meta37720;
}));

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37720","meta37720",1723397637,null)], null);
}));

(cljs.core.async.t_cljs$core$async37719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37719");

(cljs.core.async.t_cljs$core$async37719.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37719.
 */
cljs.core.async.__GT_t_cljs$core$async37719 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37719(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37720){
return (new cljs.core.async.t_cljs$core$async37719(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37720));
});

}

return (new cljs.core.async.t_cljs$core$async37719(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37015__auto___38812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37823){
var state_val_37824 = (state_37823[(1)]);
if((state_val_37824 === (7))){
var inst_37738 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
var statearr_37825_38813 = state_37823__$1;
(statearr_37825_38813[(2)] = inst_37738);

(statearr_37825_38813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (20))){
var inst_37750 = (state_37823[(7)]);
var state_37823__$1 = state_37823;
var statearr_37826_38814 = state_37823__$1;
(statearr_37826_38814[(2)] = inst_37750);

(statearr_37826_38814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (27))){
var state_37823__$1 = state_37823;
var statearr_37827_38815 = state_37823__$1;
(statearr_37827_38815[(2)] = null);

(statearr_37827_38815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (1))){
var inst_37725 = (state_37823[(8)]);
var inst_37725__$1 = calc_state();
var inst_37727 = (inst_37725__$1 == null);
var inst_37728 = cljs.core.not(inst_37727);
var state_37823__$1 = (function (){var statearr_37828 = state_37823;
(statearr_37828[(8)] = inst_37725__$1);

return statearr_37828;
})();
if(inst_37728){
var statearr_37829_38816 = state_37823__$1;
(statearr_37829_38816[(1)] = (2));

} else {
var statearr_37830_38817 = state_37823__$1;
(statearr_37830_38817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (24))){
var inst_37797 = (state_37823[(9)]);
var inst_37783 = (state_37823[(10)]);
var inst_37774 = (state_37823[(11)]);
var inst_37797__$1 = (inst_37774.cljs$core$IFn$_invoke$arity$1 ? inst_37774.cljs$core$IFn$_invoke$arity$1(inst_37783) : inst_37774.call(null,inst_37783));
var state_37823__$1 = (function (){var statearr_37831 = state_37823;
(statearr_37831[(9)] = inst_37797__$1);

return statearr_37831;
})();
if(cljs.core.truth_(inst_37797__$1)){
var statearr_37832_38818 = state_37823__$1;
(statearr_37832_38818[(1)] = (29));

} else {
var statearr_37833_38819 = state_37823__$1;
(statearr_37833_38819[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (4))){
var inst_37741 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
if(cljs.core.truth_(inst_37741)){
var statearr_37834_38820 = state_37823__$1;
(statearr_37834_38820[(1)] = (8));

} else {
var statearr_37835_38821 = state_37823__$1;
(statearr_37835_38821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (15))){
var inst_37768 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
if(cljs.core.truth_(inst_37768)){
var statearr_37836_38822 = state_37823__$1;
(statearr_37836_38822[(1)] = (19));

} else {
var statearr_37837_38823 = state_37823__$1;
(statearr_37837_38823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (21))){
var inst_37773 = (state_37823[(12)]);
var inst_37773__$1 = (state_37823[(2)]);
var inst_37774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37773__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37773__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37773__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37823__$1 = (function (){var statearr_37838 = state_37823;
(statearr_37838[(12)] = inst_37773__$1);

(statearr_37838[(13)] = inst_37775);

(statearr_37838[(11)] = inst_37774);

return statearr_37838;
})();
return cljs.core.async.ioc_alts_BANG_(state_37823__$1,(22),inst_37776);
} else {
if((state_val_37824 === (31))){
var inst_37805 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
if(cljs.core.truth_(inst_37805)){
var statearr_37839_38824 = state_37823__$1;
(statearr_37839_38824[(1)] = (32));

} else {
var statearr_37840_38825 = state_37823__$1;
(statearr_37840_38825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (32))){
var inst_37782 = (state_37823[(14)]);
var state_37823__$1 = state_37823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37823__$1,(35),out,inst_37782);
} else {
if((state_val_37824 === (33))){
var inst_37773 = (state_37823[(12)]);
var inst_37750 = inst_37773;
var state_37823__$1 = (function (){var statearr_37841 = state_37823;
(statearr_37841[(7)] = inst_37750);

return statearr_37841;
})();
var statearr_37842_38826 = state_37823__$1;
(statearr_37842_38826[(2)] = null);

(statearr_37842_38826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (13))){
var inst_37750 = (state_37823[(7)]);
var inst_37757 = inst_37750.cljs$lang$protocol_mask$partition0$;
var inst_37758 = (inst_37757 & (64));
var inst_37759 = inst_37750.cljs$core$ISeq$;
var inst_37760 = (cljs.core.PROTOCOL_SENTINEL === inst_37759);
var inst_37761 = ((inst_37758) || (inst_37760));
var state_37823__$1 = state_37823;
if(cljs.core.truth_(inst_37761)){
var statearr_37843_38828 = state_37823__$1;
(statearr_37843_38828[(1)] = (16));

} else {
var statearr_37844_38829 = state_37823__$1;
(statearr_37844_38829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (22))){
var inst_37782 = (state_37823[(14)]);
var inst_37783 = (state_37823[(10)]);
var inst_37781 = (state_37823[(2)]);
var inst_37782__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37781,(0),null);
var inst_37783__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37781,(1),null);
var inst_37784 = (inst_37782__$1 == null);
var inst_37785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37783__$1,change);
var inst_37786 = ((inst_37784) || (inst_37785));
var state_37823__$1 = (function (){var statearr_37845 = state_37823;
(statearr_37845[(14)] = inst_37782__$1);

(statearr_37845[(10)] = inst_37783__$1);

return statearr_37845;
})();
if(cljs.core.truth_(inst_37786)){
var statearr_37846_38836 = state_37823__$1;
(statearr_37846_38836[(1)] = (23));

} else {
var statearr_37847_38837 = state_37823__$1;
(statearr_37847_38837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (36))){
var inst_37773 = (state_37823[(12)]);
var inst_37750 = inst_37773;
var state_37823__$1 = (function (){var statearr_37848 = state_37823;
(statearr_37848[(7)] = inst_37750);

return statearr_37848;
})();
var statearr_37849_38842 = state_37823__$1;
(statearr_37849_38842[(2)] = null);

(statearr_37849_38842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (29))){
var inst_37797 = (state_37823[(9)]);
var state_37823__$1 = state_37823;
var statearr_37850_38845 = state_37823__$1;
(statearr_37850_38845[(2)] = inst_37797);

(statearr_37850_38845[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (6))){
var state_37823__$1 = state_37823;
var statearr_37851_38850 = state_37823__$1;
(statearr_37851_38850[(2)] = false);

(statearr_37851_38850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (28))){
var inst_37793 = (state_37823[(2)]);
var inst_37794 = calc_state();
var inst_37750 = inst_37794;
var state_37823__$1 = (function (){var statearr_37852 = state_37823;
(statearr_37852[(7)] = inst_37750);

(statearr_37852[(15)] = inst_37793);

return statearr_37852;
})();
var statearr_37853_38851 = state_37823__$1;
(statearr_37853_38851[(2)] = null);

(statearr_37853_38851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (25))){
var inst_37819 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
var statearr_37854_38852 = state_37823__$1;
(statearr_37854_38852[(2)] = inst_37819);

(statearr_37854_38852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (34))){
var inst_37817 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
var statearr_37855_38853 = state_37823__$1;
(statearr_37855_38853[(2)] = inst_37817);

(statearr_37855_38853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (17))){
var state_37823__$1 = state_37823;
var statearr_37856_38854 = state_37823__$1;
(statearr_37856_38854[(2)] = false);

(statearr_37856_38854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (3))){
var state_37823__$1 = state_37823;
var statearr_37857_38855 = state_37823__$1;
(statearr_37857_38855[(2)] = false);

(statearr_37857_38855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (12))){
var inst_37821 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37823__$1,inst_37821);
} else {
if((state_val_37824 === (2))){
var inst_37725 = (state_37823[(8)]);
var inst_37730 = inst_37725.cljs$lang$protocol_mask$partition0$;
var inst_37731 = (inst_37730 & (64));
var inst_37732 = inst_37725.cljs$core$ISeq$;
var inst_37733 = (cljs.core.PROTOCOL_SENTINEL === inst_37732);
var inst_37734 = ((inst_37731) || (inst_37733));
var state_37823__$1 = state_37823;
if(cljs.core.truth_(inst_37734)){
var statearr_37858_38856 = state_37823__$1;
(statearr_37858_38856[(1)] = (5));

} else {
var statearr_37859_38857 = state_37823__$1;
(statearr_37859_38857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (23))){
var inst_37782 = (state_37823[(14)]);
var inst_37788 = (inst_37782 == null);
var state_37823__$1 = state_37823;
if(cljs.core.truth_(inst_37788)){
var statearr_37860_38858 = state_37823__$1;
(statearr_37860_38858[(1)] = (26));

} else {
var statearr_37861_38859 = state_37823__$1;
(statearr_37861_38859[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (35))){
var inst_37808 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
if(cljs.core.truth_(inst_37808)){
var statearr_37862_38860 = state_37823__$1;
(statearr_37862_38860[(1)] = (36));

} else {
var statearr_37863_38861 = state_37823__$1;
(statearr_37863_38861[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (19))){
var inst_37750 = (state_37823[(7)]);
var inst_37770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37750);
var state_37823__$1 = state_37823;
var statearr_37864_38862 = state_37823__$1;
(statearr_37864_38862[(2)] = inst_37770);

(statearr_37864_38862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (11))){
var inst_37750 = (state_37823[(7)]);
var inst_37754 = (inst_37750 == null);
var inst_37755 = cljs.core.not(inst_37754);
var state_37823__$1 = state_37823;
if(inst_37755){
var statearr_37865_38863 = state_37823__$1;
(statearr_37865_38863[(1)] = (13));

} else {
var statearr_37866_38864 = state_37823__$1;
(statearr_37866_38864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (9))){
var inst_37725 = (state_37823[(8)]);
var state_37823__$1 = state_37823;
var statearr_37867_38865 = state_37823__$1;
(statearr_37867_38865[(2)] = inst_37725);

(statearr_37867_38865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (5))){
var state_37823__$1 = state_37823;
var statearr_37868_38866 = state_37823__$1;
(statearr_37868_38866[(2)] = true);

(statearr_37868_38866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (14))){
var state_37823__$1 = state_37823;
var statearr_37869_38867 = state_37823__$1;
(statearr_37869_38867[(2)] = false);

(statearr_37869_38867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (26))){
var inst_37783 = (state_37823[(10)]);
var inst_37790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37783);
var state_37823__$1 = state_37823;
var statearr_37870_38868 = state_37823__$1;
(statearr_37870_38868[(2)] = inst_37790);

(statearr_37870_38868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (16))){
var state_37823__$1 = state_37823;
var statearr_37871_38869 = state_37823__$1;
(statearr_37871_38869[(2)] = true);

(statearr_37871_38869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (38))){
var inst_37813 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
var statearr_37872_38870 = state_37823__$1;
(statearr_37872_38870[(2)] = inst_37813);

(statearr_37872_38870[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (30))){
var inst_37783 = (state_37823[(10)]);
var inst_37775 = (state_37823[(13)]);
var inst_37774 = (state_37823[(11)]);
var inst_37800 = cljs.core.empty_QMARK_(inst_37774);
var inst_37801 = (inst_37775.cljs$core$IFn$_invoke$arity$1 ? inst_37775.cljs$core$IFn$_invoke$arity$1(inst_37783) : inst_37775.call(null,inst_37783));
var inst_37802 = cljs.core.not(inst_37801);
var inst_37803 = ((inst_37800) && (inst_37802));
var state_37823__$1 = state_37823;
var statearr_37873_38871 = state_37823__$1;
(statearr_37873_38871[(2)] = inst_37803);

(statearr_37873_38871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (10))){
var inst_37725 = (state_37823[(8)]);
var inst_37746 = (state_37823[(2)]);
var inst_37747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37746,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37746,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37746,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37750 = inst_37725;
var state_37823__$1 = (function (){var statearr_37874 = state_37823;
(statearr_37874[(16)] = inst_37747);

(statearr_37874[(7)] = inst_37750);

(statearr_37874[(17)] = inst_37748);

(statearr_37874[(18)] = inst_37749);

return statearr_37874;
})();
var statearr_37875_38875 = state_37823__$1;
(statearr_37875_38875[(2)] = null);

(statearr_37875_38875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (18))){
var inst_37765 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
var statearr_37876_38876 = state_37823__$1;
(statearr_37876_38876[(2)] = inst_37765);

(statearr_37876_38876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (37))){
var state_37823__$1 = state_37823;
var statearr_37877_38877 = state_37823__$1;
(statearr_37877_38877[(2)] = null);

(statearr_37877_38877[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (8))){
var inst_37725 = (state_37823[(8)]);
var inst_37743 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37725);
var state_37823__$1 = state_37823;
var statearr_37878_38879 = state_37823__$1;
(statearr_37878_38879[(2)] = inst_37743);

(statearr_37878_38879[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__36948__auto__ = null;
var cljs$core$async$mix_$_state_machine__36948__auto____0 = (function (){
var statearr_37879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37879[(0)] = cljs$core$async$mix_$_state_machine__36948__auto__);

(statearr_37879[(1)] = (1));

return statearr_37879;
});
var cljs$core$async$mix_$_state_machine__36948__auto____1 = (function (state_37823){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37823);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e37880){if((e37880 instanceof Object)){
var ex__36951__auto__ = e37880;
var statearr_37881_38881 = state_37823;
(statearr_37881_38881[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38887 = state_37823;
state_37823 = G__38887;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36948__auto__ = function(state_37823){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36948__auto____1.call(this,state_37823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36948__auto____0;
cljs$core$async$mix_$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36948__auto____1;
return cljs$core$async$mix_$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_37882 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_37882[(6)] = c__37015__auto___38812);

return statearr_37882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37884 = arguments.length;
switch (G__37884) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__37887 = arguments.length;
switch (G__37887) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37885_SHARP_){
if(cljs.core.truth_((p1__37885_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37885_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37885_SHARP_.call(null,topic)))){
return p1__37885_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37885_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37888 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37889){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37889 = meta37889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37890,meta37889__$1){
var self__ = this;
var _37890__$1 = this;
return (new cljs.core.async.t_cljs$core$async37888(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37889__$1));
}));

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37890){
var self__ = this;
var _37890__$1 = this;
return self__.meta37889;
}));

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37889","meta37889",-1399698381,null)], null);
}));

(cljs.core.async.t_cljs$core$async37888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37888");

(cljs.core.async.t_cljs$core$async37888.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37888.
 */
cljs.core.async.__GT_t_cljs$core$async37888 = (function cljs$core$async$__GT_t_cljs$core$async37888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37889){
return (new cljs.core.async.t_cljs$core$async37888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37889));
});

}

return (new cljs.core.async.t_cljs$core$async37888(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37015__auto___38910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_37962){
var state_val_37963 = (state_37962[(1)]);
if((state_val_37963 === (7))){
var inst_37958 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
var statearr_37964_38911 = state_37962__$1;
(statearr_37964_38911[(2)] = inst_37958);

(statearr_37964_38911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (20))){
var state_37962__$1 = state_37962;
var statearr_37965_38912 = state_37962__$1;
(statearr_37965_38912[(2)] = null);

(statearr_37965_38912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (1))){
var state_37962__$1 = state_37962;
var statearr_37966_38913 = state_37962__$1;
(statearr_37966_38913[(2)] = null);

(statearr_37966_38913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (24))){
var inst_37941 = (state_37962[(7)]);
var inst_37950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37941);
var state_37962__$1 = state_37962;
var statearr_37967_38914 = state_37962__$1;
(statearr_37967_38914[(2)] = inst_37950);

(statearr_37967_38914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (4))){
var inst_37893 = (state_37962[(8)]);
var inst_37893__$1 = (state_37962[(2)]);
var inst_37894 = (inst_37893__$1 == null);
var state_37962__$1 = (function (){var statearr_37968 = state_37962;
(statearr_37968[(8)] = inst_37893__$1);

return statearr_37968;
})();
if(cljs.core.truth_(inst_37894)){
var statearr_37969_38915 = state_37962__$1;
(statearr_37969_38915[(1)] = (5));

} else {
var statearr_37970_38916 = state_37962__$1;
(statearr_37970_38916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (15))){
var inst_37935 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
var statearr_37971_38917 = state_37962__$1;
(statearr_37971_38917[(2)] = inst_37935);

(statearr_37971_38917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (21))){
var inst_37955 = (state_37962[(2)]);
var state_37962__$1 = (function (){var statearr_37972 = state_37962;
(statearr_37972[(9)] = inst_37955);

return statearr_37972;
})();
var statearr_37973_38918 = state_37962__$1;
(statearr_37973_38918[(2)] = null);

(statearr_37973_38918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (13))){
var inst_37917 = (state_37962[(10)]);
var inst_37919 = cljs.core.chunked_seq_QMARK_(inst_37917);
var state_37962__$1 = state_37962;
if(inst_37919){
var statearr_37974_38919 = state_37962__$1;
(statearr_37974_38919[(1)] = (16));

} else {
var statearr_37975_38920 = state_37962__$1;
(statearr_37975_38920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (22))){
var inst_37947 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
if(cljs.core.truth_(inst_37947)){
var statearr_37976_38921 = state_37962__$1;
(statearr_37976_38921[(1)] = (23));

} else {
var statearr_37977_38922 = state_37962__$1;
(statearr_37977_38922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (6))){
var inst_37943 = (state_37962[(11)]);
var inst_37893 = (state_37962[(8)]);
var inst_37941 = (state_37962[(7)]);
var inst_37941__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37893) : topic_fn.call(null,inst_37893));
var inst_37942 = cljs.core.deref(mults);
var inst_37943__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37942,inst_37941__$1);
var state_37962__$1 = (function (){var statearr_37978 = state_37962;
(statearr_37978[(11)] = inst_37943__$1);

(statearr_37978[(7)] = inst_37941__$1);

return statearr_37978;
})();
if(cljs.core.truth_(inst_37943__$1)){
var statearr_37979_38923 = state_37962__$1;
(statearr_37979_38923[(1)] = (19));

} else {
var statearr_37980_38924 = state_37962__$1;
(statearr_37980_38924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (25))){
var inst_37952 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
var statearr_37981_38925 = state_37962__$1;
(statearr_37981_38925[(2)] = inst_37952);

(statearr_37981_38925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (17))){
var inst_37917 = (state_37962[(10)]);
var inst_37926 = cljs.core.first(inst_37917);
var inst_37927 = cljs.core.async.muxch_STAR_(inst_37926);
var inst_37928 = cljs.core.async.close_BANG_(inst_37927);
var inst_37929 = cljs.core.next(inst_37917);
var inst_37903 = inst_37929;
var inst_37904 = null;
var inst_37905 = (0);
var inst_37906 = (0);
var state_37962__$1 = (function (){var statearr_37982 = state_37962;
(statearr_37982[(12)] = inst_37928);

(statearr_37982[(13)] = inst_37903);

(statearr_37982[(14)] = inst_37906);

(statearr_37982[(15)] = inst_37904);

(statearr_37982[(16)] = inst_37905);

return statearr_37982;
})();
var statearr_37983_38926 = state_37962__$1;
(statearr_37983_38926[(2)] = null);

(statearr_37983_38926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (3))){
var inst_37960 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37962__$1,inst_37960);
} else {
if((state_val_37963 === (12))){
var inst_37937 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
var statearr_37984_38927 = state_37962__$1;
(statearr_37984_38927[(2)] = inst_37937);

(statearr_37984_38927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (2))){
var state_37962__$1 = state_37962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37962__$1,(4),ch);
} else {
if((state_val_37963 === (23))){
var state_37962__$1 = state_37962;
var statearr_37985_38928 = state_37962__$1;
(statearr_37985_38928[(2)] = null);

(statearr_37985_38928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (19))){
var inst_37943 = (state_37962[(11)]);
var inst_37893 = (state_37962[(8)]);
var inst_37945 = cljs.core.async.muxch_STAR_(inst_37943);
var state_37962__$1 = state_37962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37962__$1,(22),inst_37945,inst_37893);
} else {
if((state_val_37963 === (11))){
var inst_37903 = (state_37962[(13)]);
var inst_37917 = (state_37962[(10)]);
var inst_37917__$1 = cljs.core.seq(inst_37903);
var state_37962__$1 = (function (){var statearr_37986 = state_37962;
(statearr_37986[(10)] = inst_37917__$1);

return statearr_37986;
})();
if(inst_37917__$1){
var statearr_37987_38929 = state_37962__$1;
(statearr_37987_38929[(1)] = (13));

} else {
var statearr_37988_38930 = state_37962__$1;
(statearr_37988_38930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (9))){
var inst_37939 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
var statearr_37989_38931 = state_37962__$1;
(statearr_37989_38931[(2)] = inst_37939);

(statearr_37989_38931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (5))){
var inst_37900 = cljs.core.deref(mults);
var inst_37901 = cljs.core.vals(inst_37900);
var inst_37902 = cljs.core.seq(inst_37901);
var inst_37903 = inst_37902;
var inst_37904 = null;
var inst_37905 = (0);
var inst_37906 = (0);
var state_37962__$1 = (function (){var statearr_37990 = state_37962;
(statearr_37990[(13)] = inst_37903);

(statearr_37990[(14)] = inst_37906);

(statearr_37990[(15)] = inst_37904);

(statearr_37990[(16)] = inst_37905);

return statearr_37990;
})();
var statearr_37991_38932 = state_37962__$1;
(statearr_37991_38932[(2)] = null);

(statearr_37991_38932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (14))){
var state_37962__$1 = state_37962;
var statearr_37995_38933 = state_37962__$1;
(statearr_37995_38933[(2)] = null);

(statearr_37995_38933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (16))){
var inst_37917 = (state_37962[(10)]);
var inst_37921 = cljs.core.chunk_first(inst_37917);
var inst_37922 = cljs.core.chunk_rest(inst_37917);
var inst_37923 = cljs.core.count(inst_37921);
var inst_37903 = inst_37922;
var inst_37904 = inst_37921;
var inst_37905 = inst_37923;
var inst_37906 = (0);
var state_37962__$1 = (function (){var statearr_37996 = state_37962;
(statearr_37996[(13)] = inst_37903);

(statearr_37996[(14)] = inst_37906);

(statearr_37996[(15)] = inst_37904);

(statearr_37996[(16)] = inst_37905);

return statearr_37996;
})();
var statearr_37997_38934 = state_37962__$1;
(statearr_37997_38934[(2)] = null);

(statearr_37997_38934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (10))){
var inst_37903 = (state_37962[(13)]);
var inst_37906 = (state_37962[(14)]);
var inst_37904 = (state_37962[(15)]);
var inst_37905 = (state_37962[(16)]);
var inst_37911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37904,inst_37906);
var inst_37912 = cljs.core.async.muxch_STAR_(inst_37911);
var inst_37913 = cljs.core.async.close_BANG_(inst_37912);
var inst_37914 = (inst_37906 + (1));
var tmp37992 = inst_37903;
var tmp37993 = inst_37904;
var tmp37994 = inst_37905;
var inst_37903__$1 = tmp37992;
var inst_37904__$1 = tmp37993;
var inst_37905__$1 = tmp37994;
var inst_37906__$1 = inst_37914;
var state_37962__$1 = (function (){var statearr_37998 = state_37962;
(statearr_37998[(13)] = inst_37903__$1);

(statearr_37998[(14)] = inst_37906__$1);

(statearr_37998[(15)] = inst_37904__$1);

(statearr_37998[(16)] = inst_37905__$1);

(statearr_37998[(17)] = inst_37913);

return statearr_37998;
})();
var statearr_37999_38935 = state_37962__$1;
(statearr_37999_38935[(2)] = null);

(statearr_37999_38935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (18))){
var inst_37932 = (state_37962[(2)]);
var state_37962__$1 = state_37962;
var statearr_38000_38936 = state_37962__$1;
(statearr_38000_38936[(2)] = inst_37932);

(statearr_38000_38936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37963 === (8))){
var inst_37906 = (state_37962[(14)]);
var inst_37905 = (state_37962[(16)]);
var inst_37908 = (inst_37906 < inst_37905);
var inst_37909 = inst_37908;
var state_37962__$1 = state_37962;
if(cljs.core.truth_(inst_37909)){
var statearr_38001_38937 = state_37962__$1;
(statearr_38001_38937[(1)] = (10));

} else {
var statearr_38002_38938 = state_37962__$1;
(statearr_38002_38938[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38003[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38003[(1)] = (1));

return statearr_38003;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_37962){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_37962);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38004){if((e38004 instanceof Object)){
var ex__36951__auto__ = e38004;
var statearr_38005_38939 = state_37962;
(statearr_38005_38939[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38940 = state_37962;
state_37962 = G__38940;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_37962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_37962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38006 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38006[(6)] = c__37015__auto___38910);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38008 = arguments.length;
switch (G__38008) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38010 = arguments.length;
switch (G__38010) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__38012 = arguments.length;
switch (G__38012) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__37015__auto___38944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38051){
var state_val_38052 = (state_38051[(1)]);
if((state_val_38052 === (7))){
var state_38051__$1 = state_38051;
var statearr_38053_38945 = state_38051__$1;
(statearr_38053_38945[(2)] = null);

(statearr_38053_38945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (1))){
var state_38051__$1 = state_38051;
var statearr_38054_38946 = state_38051__$1;
(statearr_38054_38946[(2)] = null);

(statearr_38054_38946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (4))){
var inst_38015 = (state_38051[(7)]);
var inst_38017 = (inst_38015 < cnt);
var state_38051__$1 = state_38051;
if(cljs.core.truth_(inst_38017)){
var statearr_38055_38947 = state_38051__$1;
(statearr_38055_38947[(1)] = (6));

} else {
var statearr_38056_38948 = state_38051__$1;
(statearr_38056_38948[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (15))){
var inst_38047 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
var statearr_38057_38949 = state_38051__$1;
(statearr_38057_38949[(2)] = inst_38047);

(statearr_38057_38949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (13))){
var inst_38040 = cljs.core.async.close_BANG_(out);
var state_38051__$1 = state_38051;
var statearr_38058_38950 = state_38051__$1;
(statearr_38058_38950[(2)] = inst_38040);

(statearr_38058_38950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (6))){
var state_38051__$1 = state_38051;
var statearr_38059_38951 = state_38051__$1;
(statearr_38059_38951[(2)] = null);

(statearr_38059_38951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (3))){
var inst_38049 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38051__$1,inst_38049);
} else {
if((state_val_38052 === (12))){
var inst_38037 = (state_38051[(8)]);
var inst_38037__$1 = (state_38051[(2)]);
var inst_38038 = cljs.core.some(cljs.core.nil_QMARK_,inst_38037__$1);
var state_38051__$1 = (function (){var statearr_38060 = state_38051;
(statearr_38060[(8)] = inst_38037__$1);

return statearr_38060;
})();
if(cljs.core.truth_(inst_38038)){
var statearr_38061_38954 = state_38051__$1;
(statearr_38061_38954[(1)] = (13));

} else {
var statearr_38062_38955 = state_38051__$1;
(statearr_38062_38955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (2))){
var inst_38014 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38015 = (0);
var state_38051__$1 = (function (){var statearr_38063 = state_38051;
(statearr_38063[(7)] = inst_38015);

(statearr_38063[(9)] = inst_38014);

return statearr_38063;
})();
var statearr_38064_38956 = state_38051__$1;
(statearr_38064_38956[(2)] = null);

(statearr_38064_38956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (11))){
var inst_38015 = (state_38051[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38051,(10),Object,null,(9));
var inst_38024 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38015) : chs__$1.call(null,inst_38015));
var inst_38025 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38015) : done.call(null,inst_38015));
var inst_38026 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38024,inst_38025);
var state_38051__$1 = state_38051;
var statearr_38065_38957 = state_38051__$1;
(statearr_38065_38957[(2)] = inst_38026);


cljs.core.async.impl.ioc_helpers.process_exception(state_38051__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (9))){
var inst_38015 = (state_38051[(7)]);
var inst_38028 = (state_38051[(2)]);
var inst_38029 = (inst_38015 + (1));
var inst_38015__$1 = inst_38029;
var state_38051__$1 = (function (){var statearr_38066 = state_38051;
(statearr_38066[(7)] = inst_38015__$1);

(statearr_38066[(10)] = inst_38028);

return statearr_38066;
})();
var statearr_38067_38958 = state_38051__$1;
(statearr_38067_38958[(2)] = null);

(statearr_38067_38958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (5))){
var inst_38035 = (state_38051[(2)]);
var state_38051__$1 = (function (){var statearr_38068 = state_38051;
(statearr_38068[(11)] = inst_38035);

return statearr_38068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38051__$1,(12),dchan);
} else {
if((state_val_38052 === (14))){
var inst_38037 = (state_38051[(8)]);
var inst_38042 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38037);
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38051__$1,(16),out,inst_38042);
} else {
if((state_val_38052 === (16))){
var inst_38044 = (state_38051[(2)]);
var state_38051__$1 = (function (){var statearr_38069 = state_38051;
(statearr_38069[(12)] = inst_38044);

return statearr_38069;
})();
var statearr_38070_38961 = state_38051__$1;
(statearr_38070_38961[(2)] = null);

(statearr_38070_38961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (10))){
var inst_38019 = (state_38051[(2)]);
var inst_38020 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38051__$1 = (function (){var statearr_38071 = state_38051;
(statearr_38071[(13)] = inst_38019);

return statearr_38071;
})();
var statearr_38072_38962 = state_38051__$1;
(statearr_38072_38962[(2)] = inst_38020);


cljs.core.async.impl.ioc_helpers.process_exception(state_38051__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (8))){
var inst_38033 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
var statearr_38073_38963 = state_38051__$1;
(statearr_38073_38963[(2)] = inst_38033);

(statearr_38073_38963[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38074[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38074[(1)] = (1));

return statearr_38074;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_38051){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38051);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38075){if((e38075 instanceof Object)){
var ex__36951__auto__ = e38075;
var statearr_38076_38966 = state_38051;
(statearr_38076_38966[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38967 = state_38051;
state_38051 = G__38967;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_38051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_38051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38077 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38077[(6)] = c__37015__auto___38944);

return statearr_38077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38080 = arguments.length;
switch (G__38080) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37015__auto___38969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38112){
var state_val_38113 = (state_38112[(1)]);
if((state_val_38113 === (7))){
var inst_38091 = (state_38112[(7)]);
var inst_38092 = (state_38112[(8)]);
var inst_38091__$1 = (state_38112[(2)]);
var inst_38092__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38091__$1,(0),null);
var inst_38093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38091__$1,(1),null);
var inst_38094 = (inst_38092__$1 == null);
var state_38112__$1 = (function (){var statearr_38114 = state_38112;
(statearr_38114[(9)] = inst_38093);

(statearr_38114[(7)] = inst_38091__$1);

(statearr_38114[(8)] = inst_38092__$1);

return statearr_38114;
})();
if(cljs.core.truth_(inst_38094)){
var statearr_38115_38970 = state_38112__$1;
(statearr_38115_38970[(1)] = (8));

} else {
var statearr_38116_38972 = state_38112__$1;
(statearr_38116_38972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38113 === (1))){
var inst_38081 = cljs.core.vec(chs);
var inst_38082 = inst_38081;
var state_38112__$1 = (function (){var statearr_38117 = state_38112;
(statearr_38117[(10)] = inst_38082);

return statearr_38117;
})();
var statearr_38118_38974 = state_38112__$1;
(statearr_38118_38974[(2)] = null);

(statearr_38118_38974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38113 === (4))){
var inst_38082 = (state_38112[(10)]);
var state_38112__$1 = state_38112;
return cljs.core.async.ioc_alts_BANG_(state_38112__$1,(7),inst_38082);
} else {
if((state_val_38113 === (6))){
var inst_38108 = (state_38112[(2)]);
var state_38112__$1 = state_38112;
var statearr_38119_38975 = state_38112__$1;
(statearr_38119_38975[(2)] = inst_38108);

(statearr_38119_38975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38113 === (3))){
var inst_38110 = (state_38112[(2)]);
var state_38112__$1 = state_38112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38112__$1,inst_38110);
} else {
if((state_val_38113 === (2))){
var inst_38082 = (state_38112[(10)]);
var inst_38084 = cljs.core.count(inst_38082);
var inst_38085 = (inst_38084 > (0));
var state_38112__$1 = state_38112;
if(cljs.core.truth_(inst_38085)){
var statearr_38121_38976 = state_38112__$1;
(statearr_38121_38976[(1)] = (4));

} else {
var statearr_38122_38977 = state_38112__$1;
(statearr_38122_38977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38113 === (11))){
var inst_38082 = (state_38112[(10)]);
var inst_38101 = (state_38112[(2)]);
var tmp38120 = inst_38082;
var inst_38082__$1 = tmp38120;
var state_38112__$1 = (function (){var statearr_38123 = state_38112;
(statearr_38123[(11)] = inst_38101);

(statearr_38123[(10)] = inst_38082__$1);

return statearr_38123;
})();
var statearr_38124_38980 = state_38112__$1;
(statearr_38124_38980[(2)] = null);

(statearr_38124_38980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38113 === (9))){
var inst_38092 = (state_38112[(8)]);
var state_38112__$1 = state_38112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38112__$1,(11),out,inst_38092);
} else {
if((state_val_38113 === (5))){
var inst_38106 = cljs.core.async.close_BANG_(out);
var state_38112__$1 = state_38112;
var statearr_38125_38981 = state_38112__$1;
(statearr_38125_38981[(2)] = inst_38106);

(statearr_38125_38981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38113 === (10))){
var inst_38104 = (state_38112[(2)]);
var state_38112__$1 = state_38112;
var statearr_38126_38982 = state_38112__$1;
(statearr_38126_38982[(2)] = inst_38104);

(statearr_38126_38982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38113 === (8))){
var inst_38093 = (state_38112[(9)]);
var inst_38091 = (state_38112[(7)]);
var inst_38092 = (state_38112[(8)]);
var inst_38082 = (state_38112[(10)]);
var inst_38096 = (function (){var cs = inst_38082;
var vec__38087 = inst_38091;
var v = inst_38092;
var c = inst_38093;
return (function (p1__38078_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38078_SHARP_);
});
})();
var inst_38097 = cljs.core.filterv(inst_38096,inst_38082);
var inst_38082__$1 = inst_38097;
var state_38112__$1 = (function (){var statearr_38127 = state_38112;
(statearr_38127[(10)] = inst_38082__$1);

return statearr_38127;
})();
var statearr_38128_38983 = state_38112__$1;
(statearr_38128_38983[(2)] = null);

(statearr_38128_38983[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38129[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38129[(1)] = (1));

return statearr_38129;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_38112){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38112);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38130){if((e38130 instanceof Object)){
var ex__36951__auto__ = e38130;
var statearr_38131_38984 = state_38112;
(statearr_38131_38984[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38985 = state_38112;
state_38112 = G__38985;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_38112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_38112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38132 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38132[(6)] = c__37015__auto___38969);

return statearr_38132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38134 = arguments.length;
switch (G__38134) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37015__auto___38987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38158){
var state_val_38159 = (state_38158[(1)]);
if((state_val_38159 === (7))){
var inst_38140 = (state_38158[(7)]);
var inst_38140__$1 = (state_38158[(2)]);
var inst_38141 = (inst_38140__$1 == null);
var inst_38142 = cljs.core.not(inst_38141);
var state_38158__$1 = (function (){var statearr_38160 = state_38158;
(statearr_38160[(7)] = inst_38140__$1);

return statearr_38160;
})();
if(inst_38142){
var statearr_38161_38988 = state_38158__$1;
(statearr_38161_38988[(1)] = (8));

} else {
var statearr_38162_38989 = state_38158__$1;
(statearr_38162_38989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (1))){
var inst_38135 = (0);
var state_38158__$1 = (function (){var statearr_38163 = state_38158;
(statearr_38163[(8)] = inst_38135);

return statearr_38163;
})();
var statearr_38164_38990 = state_38158__$1;
(statearr_38164_38990[(2)] = null);

(statearr_38164_38990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (4))){
var state_38158__$1 = state_38158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38158__$1,(7),ch);
} else {
if((state_val_38159 === (6))){
var inst_38153 = (state_38158[(2)]);
var state_38158__$1 = state_38158;
var statearr_38165_38991 = state_38158__$1;
(statearr_38165_38991[(2)] = inst_38153);

(statearr_38165_38991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (3))){
var inst_38155 = (state_38158[(2)]);
var inst_38156 = cljs.core.async.close_BANG_(out);
var state_38158__$1 = (function (){var statearr_38166 = state_38158;
(statearr_38166[(9)] = inst_38155);

return statearr_38166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38158__$1,inst_38156);
} else {
if((state_val_38159 === (2))){
var inst_38135 = (state_38158[(8)]);
var inst_38137 = (inst_38135 < n);
var state_38158__$1 = state_38158;
if(cljs.core.truth_(inst_38137)){
var statearr_38167_38992 = state_38158__$1;
(statearr_38167_38992[(1)] = (4));

} else {
var statearr_38168_38993 = state_38158__$1;
(statearr_38168_38993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (11))){
var inst_38135 = (state_38158[(8)]);
var inst_38145 = (state_38158[(2)]);
var inst_38146 = (inst_38135 + (1));
var inst_38135__$1 = inst_38146;
var state_38158__$1 = (function (){var statearr_38169 = state_38158;
(statearr_38169[(10)] = inst_38145);

(statearr_38169[(8)] = inst_38135__$1);

return statearr_38169;
})();
var statearr_38170_38995 = state_38158__$1;
(statearr_38170_38995[(2)] = null);

(statearr_38170_38995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (9))){
var state_38158__$1 = state_38158;
var statearr_38171_38996 = state_38158__$1;
(statearr_38171_38996[(2)] = null);

(statearr_38171_38996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (5))){
var state_38158__$1 = state_38158;
var statearr_38172_38997 = state_38158__$1;
(statearr_38172_38997[(2)] = null);

(statearr_38172_38997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (10))){
var inst_38150 = (state_38158[(2)]);
var state_38158__$1 = state_38158;
var statearr_38173_38998 = state_38158__$1;
(statearr_38173_38998[(2)] = inst_38150);

(statearr_38173_38998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38159 === (8))){
var inst_38140 = (state_38158[(7)]);
var state_38158__$1 = state_38158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38158__$1,(11),out,inst_38140);
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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38174[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38174[(1)] = (1));

return statearr_38174;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_38158){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38158);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38175){if((e38175 instanceof Object)){
var ex__36951__auto__ = e38175;
var statearr_38176_39000 = state_38158;
(statearr_38176_39000[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39001 = state_38158;
state_38158 = G__39001;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_38158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_38158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38177 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38177[(6)] = c__37015__auto___38987);

return statearr_38177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38179 = (function (f,ch,meta38180){
this.f = f;
this.ch = ch;
this.meta38180 = meta38180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38181,meta38180__$1){
var self__ = this;
var _38181__$1 = this;
return (new cljs.core.async.t_cljs$core$async38179(self__.f,self__.ch,meta38180__$1));
}));

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38181){
var self__ = this;
var _38181__$1 = this;
return self__.meta38180;
}));

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38182 = (function (f,ch,meta38180,_,fn1,meta38183){
this.f = f;
this.ch = ch;
this.meta38180 = meta38180;
this._ = _;
this.fn1 = fn1;
this.meta38183 = meta38183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38184,meta38183__$1){
var self__ = this;
var _38184__$1 = this;
return (new cljs.core.async.t_cljs$core$async38182(self__.f,self__.ch,self__.meta38180,self__._,self__.fn1,meta38183__$1));
}));

(cljs.core.async.t_cljs$core$async38182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38184){
var self__ = this;
var _38184__$1 = this;
return self__.meta38183;
}));

(cljs.core.async.t_cljs$core$async38182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38178_SHARP_){
var G__38185 = (((p1__38178_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38178_SHARP_) : self__.f.call(null,p1__38178_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38185) : f1.call(null,G__38185));
});
}));

(cljs.core.async.t_cljs$core$async38182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38180","meta38180",868271911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38179","cljs.core.async/t_cljs$core$async38179",367854061,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38183","meta38183",-1421584827,null)], null);
}));

(cljs.core.async.t_cljs$core$async38182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38182");

(cljs.core.async.t_cljs$core$async38182.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38182.
 */
cljs.core.async.__GT_t_cljs$core$async38182 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38182(f__$1,ch__$1,meta38180__$1,___$2,fn1__$1,meta38183){
return (new cljs.core.async.t_cljs$core$async38182(f__$1,ch__$1,meta38180__$1,___$2,fn1__$1,meta38183));
});

}

return (new cljs.core.async.t_cljs$core$async38182(self__.f,self__.ch,self__.meta38180,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38186 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38186) : self__.f.call(null,G__38186));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38180","meta38180",868271911,null)], null);
}));

(cljs.core.async.t_cljs$core$async38179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38179");

(cljs.core.async.t_cljs$core$async38179.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38179.
 */
cljs.core.async.__GT_t_cljs$core$async38179 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38179(f__$1,ch__$1,meta38180){
return (new cljs.core.async.t_cljs$core$async38179(f__$1,ch__$1,meta38180));
});

}

return (new cljs.core.async.t_cljs$core$async38179(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38187 = (function (f,ch,meta38188){
this.f = f;
this.ch = ch;
this.meta38188 = meta38188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38189,meta38188__$1){
var self__ = this;
var _38189__$1 = this;
return (new cljs.core.async.t_cljs$core$async38187(self__.f,self__.ch,meta38188__$1));
}));

(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38189){
var self__ = this;
var _38189__$1 = this;
return self__.meta38188;
}));

(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38188","meta38188",-2018871859,null)], null);
}));

(cljs.core.async.t_cljs$core$async38187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38187");

(cljs.core.async.t_cljs$core$async38187.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38187.
 */
cljs.core.async.__GT_t_cljs$core$async38187 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38187(f__$1,ch__$1,meta38188){
return (new cljs.core.async.t_cljs$core$async38187(f__$1,ch__$1,meta38188));
});

}

return (new cljs.core.async.t_cljs$core$async38187(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38190 = (function (p,ch,meta38191){
this.p = p;
this.ch = ch;
this.meta38191 = meta38191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38192,meta38191__$1){
var self__ = this;
var _38192__$1 = this;
return (new cljs.core.async.t_cljs$core$async38190(self__.p,self__.ch,meta38191__$1));
}));

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38192){
var self__ = this;
var _38192__$1 = this;
return self__.meta38191;
}));

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38191","meta38191",-2010070008,null)], null);
}));

(cljs.core.async.t_cljs$core$async38190.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38190");

(cljs.core.async.t_cljs$core$async38190.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38190");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38190.
 */
cljs.core.async.__GT_t_cljs$core$async38190 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38190(p__$1,ch__$1,meta38191){
return (new cljs.core.async.t_cljs$core$async38190(p__$1,ch__$1,meta38191));
});

}

return (new cljs.core.async.t_cljs$core$async38190(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38194 = arguments.length;
switch (G__38194) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37015__auto___39010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38215){
var state_val_38216 = (state_38215[(1)]);
if((state_val_38216 === (7))){
var inst_38211 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38217_39011 = state_38215__$1;
(statearr_38217_39011[(2)] = inst_38211);

(statearr_38217_39011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (1))){
var state_38215__$1 = state_38215;
var statearr_38218_39012 = state_38215__$1;
(statearr_38218_39012[(2)] = null);

(statearr_38218_39012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (4))){
var inst_38197 = (state_38215[(7)]);
var inst_38197__$1 = (state_38215[(2)]);
var inst_38198 = (inst_38197__$1 == null);
var state_38215__$1 = (function (){var statearr_38219 = state_38215;
(statearr_38219[(7)] = inst_38197__$1);

return statearr_38219;
})();
if(cljs.core.truth_(inst_38198)){
var statearr_38220_39013 = state_38215__$1;
(statearr_38220_39013[(1)] = (5));

} else {
var statearr_38221_39014 = state_38215__$1;
(statearr_38221_39014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (6))){
var inst_38197 = (state_38215[(7)]);
var inst_38202 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38197) : p.call(null,inst_38197));
var state_38215__$1 = state_38215;
if(cljs.core.truth_(inst_38202)){
var statearr_38222_39015 = state_38215__$1;
(statearr_38222_39015[(1)] = (8));

} else {
var statearr_38223_39016 = state_38215__$1;
(statearr_38223_39016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (3))){
var inst_38213 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38215__$1,inst_38213);
} else {
if((state_val_38216 === (2))){
var state_38215__$1 = state_38215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38215__$1,(4),ch);
} else {
if((state_val_38216 === (11))){
var inst_38205 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38224_39017 = state_38215__$1;
(statearr_38224_39017[(2)] = inst_38205);

(statearr_38224_39017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (9))){
var state_38215__$1 = state_38215;
var statearr_38225_39018 = state_38215__$1;
(statearr_38225_39018[(2)] = null);

(statearr_38225_39018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (5))){
var inst_38200 = cljs.core.async.close_BANG_(out);
var state_38215__$1 = state_38215;
var statearr_38226_39019 = state_38215__$1;
(statearr_38226_39019[(2)] = inst_38200);

(statearr_38226_39019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (10))){
var inst_38208 = (state_38215[(2)]);
var state_38215__$1 = (function (){var statearr_38227 = state_38215;
(statearr_38227[(8)] = inst_38208);

return statearr_38227;
})();
var statearr_38228_39020 = state_38215__$1;
(statearr_38228_39020[(2)] = null);

(statearr_38228_39020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (8))){
var inst_38197 = (state_38215[(7)]);
var state_38215__$1 = state_38215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38215__$1,(11),out,inst_38197);
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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38229 = [null,null,null,null,null,null,null,null,null];
(statearr_38229[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38229[(1)] = (1));

return statearr_38229;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_38215){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38215);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38230){if((e38230 instanceof Object)){
var ex__36951__auto__ = e38230;
var statearr_38231_39021 = state_38215;
(statearr_38231_39021[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39022 = state_38215;
state_38215 = G__39022;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_38215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_38215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38232 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38232[(6)] = c__37015__auto___39010);

return statearr_38232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38234 = arguments.length;
switch (G__38234) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38296){
var state_val_38297 = (state_38296[(1)]);
if((state_val_38297 === (7))){
var inst_38292 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38298_39024 = state_38296__$1;
(statearr_38298_39024[(2)] = inst_38292);

(statearr_38298_39024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (20))){
var inst_38262 = (state_38296[(7)]);
var inst_38273 = (state_38296[(2)]);
var inst_38274 = cljs.core.next(inst_38262);
var inst_38248 = inst_38274;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38296__$1 = (function (){var statearr_38299 = state_38296;
(statearr_38299[(8)] = inst_38273);

(statearr_38299[(9)] = inst_38251);

(statearr_38299[(10)] = inst_38248);

(statearr_38299[(11)] = inst_38250);

(statearr_38299[(12)] = inst_38249);

return statearr_38299;
})();
var statearr_38300_39025 = state_38296__$1;
(statearr_38300_39025[(2)] = null);

(statearr_38300_39025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (1))){
var state_38296__$1 = state_38296;
var statearr_38301_39026 = state_38296__$1;
(statearr_38301_39026[(2)] = null);

(statearr_38301_39026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (4))){
var inst_38237 = (state_38296[(13)]);
var inst_38237__$1 = (state_38296[(2)]);
var inst_38238 = (inst_38237__$1 == null);
var state_38296__$1 = (function (){var statearr_38302 = state_38296;
(statearr_38302[(13)] = inst_38237__$1);

return statearr_38302;
})();
if(cljs.core.truth_(inst_38238)){
var statearr_38303_39027 = state_38296__$1;
(statearr_38303_39027[(1)] = (5));

} else {
var statearr_38304_39028 = state_38296__$1;
(statearr_38304_39028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (15))){
var state_38296__$1 = state_38296;
var statearr_38308_39029 = state_38296__$1;
(statearr_38308_39029[(2)] = null);

(statearr_38308_39029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (21))){
var state_38296__$1 = state_38296;
var statearr_38309_39030 = state_38296__$1;
(statearr_38309_39030[(2)] = null);

(statearr_38309_39030[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (13))){
var inst_38251 = (state_38296[(9)]);
var inst_38248 = (state_38296[(10)]);
var inst_38250 = (state_38296[(11)]);
var inst_38249 = (state_38296[(12)]);
var inst_38258 = (state_38296[(2)]);
var inst_38259 = (inst_38251 + (1));
var tmp38305 = inst_38248;
var tmp38306 = inst_38250;
var tmp38307 = inst_38249;
var inst_38248__$1 = tmp38305;
var inst_38249__$1 = tmp38307;
var inst_38250__$1 = tmp38306;
var inst_38251__$1 = inst_38259;
var state_38296__$1 = (function (){var statearr_38310 = state_38296;
(statearr_38310[(14)] = inst_38258);

(statearr_38310[(9)] = inst_38251__$1);

(statearr_38310[(10)] = inst_38248__$1);

(statearr_38310[(11)] = inst_38250__$1);

(statearr_38310[(12)] = inst_38249__$1);

return statearr_38310;
})();
var statearr_38311_39031 = state_38296__$1;
(statearr_38311_39031[(2)] = null);

(statearr_38311_39031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (22))){
var state_38296__$1 = state_38296;
var statearr_38312_39032 = state_38296__$1;
(statearr_38312_39032[(2)] = null);

(statearr_38312_39032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (6))){
var inst_38237 = (state_38296[(13)]);
var inst_38246 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38237) : f.call(null,inst_38237));
var inst_38247 = cljs.core.seq(inst_38246);
var inst_38248 = inst_38247;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38296__$1 = (function (){var statearr_38313 = state_38296;
(statearr_38313[(9)] = inst_38251);

(statearr_38313[(10)] = inst_38248);

(statearr_38313[(11)] = inst_38250);

(statearr_38313[(12)] = inst_38249);

return statearr_38313;
})();
var statearr_38314_39033 = state_38296__$1;
(statearr_38314_39033[(2)] = null);

(statearr_38314_39033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (17))){
var inst_38262 = (state_38296[(7)]);
var inst_38266 = cljs.core.chunk_first(inst_38262);
var inst_38267 = cljs.core.chunk_rest(inst_38262);
var inst_38268 = cljs.core.count(inst_38266);
var inst_38248 = inst_38267;
var inst_38249 = inst_38266;
var inst_38250 = inst_38268;
var inst_38251 = (0);
var state_38296__$1 = (function (){var statearr_38315 = state_38296;
(statearr_38315[(9)] = inst_38251);

(statearr_38315[(10)] = inst_38248);

(statearr_38315[(11)] = inst_38250);

(statearr_38315[(12)] = inst_38249);

return statearr_38315;
})();
var statearr_38316_39034 = state_38296__$1;
(statearr_38316_39034[(2)] = null);

(statearr_38316_39034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (3))){
var inst_38294 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38296__$1,inst_38294);
} else {
if((state_val_38297 === (12))){
var inst_38282 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38317_39035 = state_38296__$1;
(statearr_38317_39035[(2)] = inst_38282);

(statearr_38317_39035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (2))){
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38296__$1,(4),in$);
} else {
if((state_val_38297 === (23))){
var inst_38290 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38318_39036 = state_38296__$1;
(statearr_38318_39036[(2)] = inst_38290);

(statearr_38318_39036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (19))){
var inst_38277 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38319_39037 = state_38296__$1;
(statearr_38319_39037[(2)] = inst_38277);

(statearr_38319_39037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (11))){
var inst_38262 = (state_38296[(7)]);
var inst_38248 = (state_38296[(10)]);
var inst_38262__$1 = cljs.core.seq(inst_38248);
var state_38296__$1 = (function (){var statearr_38320 = state_38296;
(statearr_38320[(7)] = inst_38262__$1);

return statearr_38320;
})();
if(inst_38262__$1){
var statearr_38321_39038 = state_38296__$1;
(statearr_38321_39038[(1)] = (14));

} else {
var statearr_38322_39039 = state_38296__$1;
(statearr_38322_39039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (9))){
var inst_38284 = (state_38296[(2)]);
var inst_38285 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38296__$1 = (function (){var statearr_38323 = state_38296;
(statearr_38323[(15)] = inst_38284);

return statearr_38323;
})();
if(cljs.core.truth_(inst_38285)){
var statearr_38324_39040 = state_38296__$1;
(statearr_38324_39040[(1)] = (21));

} else {
var statearr_38325_39041 = state_38296__$1;
(statearr_38325_39041[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (5))){
var inst_38240 = cljs.core.async.close_BANG_(out);
var state_38296__$1 = state_38296;
var statearr_38326_39042 = state_38296__$1;
(statearr_38326_39042[(2)] = inst_38240);

(statearr_38326_39042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (14))){
var inst_38262 = (state_38296[(7)]);
var inst_38264 = cljs.core.chunked_seq_QMARK_(inst_38262);
var state_38296__$1 = state_38296;
if(inst_38264){
var statearr_38327_39043 = state_38296__$1;
(statearr_38327_39043[(1)] = (17));

} else {
var statearr_38328_39044 = state_38296__$1;
(statearr_38328_39044[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (16))){
var inst_38280 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38329_39045 = state_38296__$1;
(statearr_38329_39045[(2)] = inst_38280);

(statearr_38329_39045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (10))){
var inst_38251 = (state_38296[(9)]);
var inst_38249 = (state_38296[(12)]);
var inst_38256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38249,inst_38251);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38296__$1,(13),out,inst_38256);
} else {
if((state_val_38297 === (18))){
var inst_38262 = (state_38296[(7)]);
var inst_38271 = cljs.core.first(inst_38262);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38296__$1,(20),out,inst_38271);
} else {
if((state_val_38297 === (8))){
var inst_38251 = (state_38296[(9)]);
var inst_38250 = (state_38296[(11)]);
var inst_38253 = (inst_38251 < inst_38250);
var inst_38254 = inst_38253;
var state_38296__$1 = state_38296;
if(cljs.core.truth_(inst_38254)){
var statearr_38330_39046 = state_38296__$1;
(statearr_38330_39046[(1)] = (10));

} else {
var statearr_38331_39047 = state_38296__$1;
(statearr_38331_39047[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36948__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36948__auto____0 = (function (){
var statearr_38332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38332[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36948__auto__);

(statearr_38332[(1)] = (1));

return statearr_38332;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36948__auto____1 = (function (state_38296){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38296);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38333){if((e38333 instanceof Object)){
var ex__36951__auto__ = e38333;
var statearr_38334_39048 = state_38296;
(statearr_38334_39048[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38333;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39049 = state_38296;
state_38296 = G__39049;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36948__auto__ = function(state_38296){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36948__auto____1.call(this,state_38296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36948__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36948__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38335 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38335[(6)] = c__37015__auto__);

return statearr_38335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38337 = arguments.length;
switch (G__38337) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38339 = arguments.length;
switch (G__38339) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38341 = arguments.length;
switch (G__38341) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37015__auto___39053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38365){
var state_val_38366 = (state_38365[(1)]);
if((state_val_38366 === (7))){
var inst_38360 = (state_38365[(2)]);
var state_38365__$1 = state_38365;
var statearr_38367_39054 = state_38365__$1;
(statearr_38367_39054[(2)] = inst_38360);

(statearr_38367_39054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (1))){
var inst_38342 = null;
var state_38365__$1 = (function (){var statearr_38368 = state_38365;
(statearr_38368[(7)] = inst_38342);

return statearr_38368;
})();
var statearr_38369_39055 = state_38365__$1;
(statearr_38369_39055[(2)] = null);

(statearr_38369_39055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (4))){
var inst_38345 = (state_38365[(8)]);
var inst_38345__$1 = (state_38365[(2)]);
var inst_38346 = (inst_38345__$1 == null);
var inst_38347 = cljs.core.not(inst_38346);
var state_38365__$1 = (function (){var statearr_38370 = state_38365;
(statearr_38370[(8)] = inst_38345__$1);

return statearr_38370;
})();
if(inst_38347){
var statearr_38371_39059 = state_38365__$1;
(statearr_38371_39059[(1)] = (5));

} else {
var statearr_38372_39060 = state_38365__$1;
(statearr_38372_39060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (6))){
var state_38365__$1 = state_38365;
var statearr_38373_39061 = state_38365__$1;
(statearr_38373_39061[(2)] = null);

(statearr_38373_39061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (3))){
var inst_38362 = (state_38365[(2)]);
var inst_38363 = cljs.core.async.close_BANG_(out);
var state_38365__$1 = (function (){var statearr_38374 = state_38365;
(statearr_38374[(9)] = inst_38362);

return statearr_38374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38365__$1,inst_38363);
} else {
if((state_val_38366 === (2))){
var state_38365__$1 = state_38365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38365__$1,(4),ch);
} else {
if((state_val_38366 === (11))){
var inst_38345 = (state_38365[(8)]);
var inst_38354 = (state_38365[(2)]);
var inst_38342 = inst_38345;
var state_38365__$1 = (function (){var statearr_38375 = state_38365;
(statearr_38375[(10)] = inst_38354);

(statearr_38375[(7)] = inst_38342);

return statearr_38375;
})();
var statearr_38376_39062 = state_38365__$1;
(statearr_38376_39062[(2)] = null);

(statearr_38376_39062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (9))){
var inst_38345 = (state_38365[(8)]);
var state_38365__$1 = state_38365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38365__$1,(11),out,inst_38345);
} else {
if((state_val_38366 === (5))){
var inst_38345 = (state_38365[(8)]);
var inst_38342 = (state_38365[(7)]);
var inst_38349 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38345,inst_38342);
var state_38365__$1 = state_38365;
if(inst_38349){
var statearr_38378_39063 = state_38365__$1;
(statearr_38378_39063[(1)] = (8));

} else {
var statearr_38379_39065 = state_38365__$1;
(statearr_38379_39065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (10))){
var inst_38357 = (state_38365[(2)]);
var state_38365__$1 = state_38365;
var statearr_38380_39067 = state_38365__$1;
(statearr_38380_39067[(2)] = inst_38357);

(statearr_38380_39067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (8))){
var inst_38342 = (state_38365[(7)]);
var tmp38377 = inst_38342;
var inst_38342__$1 = tmp38377;
var state_38365__$1 = (function (){var statearr_38381 = state_38365;
(statearr_38381[(7)] = inst_38342__$1);

return statearr_38381;
})();
var statearr_38382_39068 = state_38365__$1;
(statearr_38382_39068[(2)] = null);

(statearr_38382_39068[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38383[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38383[(1)] = (1));

return statearr_38383;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_38365){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38365);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38384){if((e38384 instanceof Object)){
var ex__36951__auto__ = e38384;
var statearr_38385_39069 = state_38365;
(statearr_38385_39069[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39070 = state_38365;
state_38365 = G__39070;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_38365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_38365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38386 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38386[(6)] = c__37015__auto___39053);

return statearr_38386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38388 = arguments.length;
switch (G__38388) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37015__auto___39072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38426){
var state_val_38427 = (state_38426[(1)]);
if((state_val_38427 === (7))){
var inst_38422 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38428_39073 = state_38426__$1;
(statearr_38428_39073[(2)] = inst_38422);

(statearr_38428_39073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (1))){
var inst_38389 = (new Array(n));
var inst_38390 = inst_38389;
var inst_38391 = (0);
var state_38426__$1 = (function (){var statearr_38429 = state_38426;
(statearr_38429[(7)] = inst_38390);

(statearr_38429[(8)] = inst_38391);

return statearr_38429;
})();
var statearr_38430_39074 = state_38426__$1;
(statearr_38430_39074[(2)] = null);

(statearr_38430_39074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (4))){
var inst_38394 = (state_38426[(9)]);
var inst_38394__$1 = (state_38426[(2)]);
var inst_38395 = (inst_38394__$1 == null);
var inst_38396 = cljs.core.not(inst_38395);
var state_38426__$1 = (function (){var statearr_38431 = state_38426;
(statearr_38431[(9)] = inst_38394__$1);

return statearr_38431;
})();
if(inst_38396){
var statearr_38432_39075 = state_38426__$1;
(statearr_38432_39075[(1)] = (5));

} else {
var statearr_38433_39076 = state_38426__$1;
(statearr_38433_39076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (15))){
var inst_38416 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38434_39078 = state_38426__$1;
(statearr_38434_39078[(2)] = inst_38416);

(statearr_38434_39078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (13))){
var state_38426__$1 = state_38426;
var statearr_38435_39079 = state_38426__$1;
(statearr_38435_39079[(2)] = null);

(statearr_38435_39079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (6))){
var inst_38391 = (state_38426[(8)]);
var inst_38412 = (inst_38391 > (0));
var state_38426__$1 = state_38426;
if(cljs.core.truth_(inst_38412)){
var statearr_38436_39080 = state_38426__$1;
(statearr_38436_39080[(1)] = (12));

} else {
var statearr_38437_39081 = state_38426__$1;
(statearr_38437_39081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (3))){
var inst_38424 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38426__$1,inst_38424);
} else {
if((state_val_38427 === (12))){
var inst_38390 = (state_38426[(7)]);
var inst_38414 = cljs.core.vec(inst_38390);
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38426__$1,(15),out,inst_38414);
} else {
if((state_val_38427 === (2))){
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38426__$1,(4),ch);
} else {
if((state_val_38427 === (11))){
var inst_38406 = (state_38426[(2)]);
var inst_38407 = (new Array(n));
var inst_38390 = inst_38407;
var inst_38391 = (0);
var state_38426__$1 = (function (){var statearr_38438 = state_38426;
(statearr_38438[(7)] = inst_38390);

(statearr_38438[(10)] = inst_38406);

(statearr_38438[(8)] = inst_38391);

return statearr_38438;
})();
var statearr_38439_39082 = state_38426__$1;
(statearr_38439_39082[(2)] = null);

(statearr_38439_39082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (9))){
var inst_38390 = (state_38426[(7)]);
var inst_38404 = cljs.core.vec(inst_38390);
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38426__$1,(11),out,inst_38404);
} else {
if((state_val_38427 === (5))){
var inst_38390 = (state_38426[(7)]);
var inst_38399 = (state_38426[(11)]);
var inst_38394 = (state_38426[(9)]);
var inst_38391 = (state_38426[(8)]);
var inst_38398 = (inst_38390[inst_38391] = inst_38394);
var inst_38399__$1 = (inst_38391 + (1));
var inst_38400 = (inst_38399__$1 < n);
var state_38426__$1 = (function (){var statearr_38440 = state_38426;
(statearr_38440[(11)] = inst_38399__$1);

(statearr_38440[(12)] = inst_38398);

return statearr_38440;
})();
if(cljs.core.truth_(inst_38400)){
var statearr_38441_39083 = state_38426__$1;
(statearr_38441_39083[(1)] = (8));

} else {
var statearr_38442_39084 = state_38426__$1;
(statearr_38442_39084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (14))){
var inst_38419 = (state_38426[(2)]);
var inst_38420 = cljs.core.async.close_BANG_(out);
var state_38426__$1 = (function (){var statearr_38444 = state_38426;
(statearr_38444[(13)] = inst_38419);

return statearr_38444;
})();
var statearr_38445_39085 = state_38426__$1;
(statearr_38445_39085[(2)] = inst_38420);

(statearr_38445_39085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (10))){
var inst_38410 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38446_39086 = state_38426__$1;
(statearr_38446_39086[(2)] = inst_38410);

(statearr_38446_39086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (8))){
var inst_38390 = (state_38426[(7)]);
var inst_38399 = (state_38426[(11)]);
var tmp38443 = inst_38390;
var inst_38390__$1 = tmp38443;
var inst_38391 = inst_38399;
var state_38426__$1 = (function (){var statearr_38447 = state_38426;
(statearr_38447[(7)] = inst_38390__$1);

(statearr_38447[(8)] = inst_38391);

return statearr_38447;
})();
var statearr_38448_39087 = state_38426__$1;
(statearr_38448_39087[(2)] = null);

(statearr_38448_39087[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38449[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38449[(1)] = (1));

return statearr_38449;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_38426){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38426);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38450){if((e38450 instanceof Object)){
var ex__36951__auto__ = e38450;
var statearr_38451_39088 = state_38426;
(statearr_38451_39088[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39089 = state_38426;
state_38426 = G__39089;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_38426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_38426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38452 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38452[(6)] = c__37015__auto___39072);

return statearr_38452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38454 = arguments.length;
switch (G__38454) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37015__auto___39091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_38496){
var state_val_38497 = (state_38496[(1)]);
if((state_val_38497 === (7))){
var inst_38492 = (state_38496[(2)]);
var state_38496__$1 = state_38496;
var statearr_38498_39092 = state_38496__$1;
(statearr_38498_39092[(2)] = inst_38492);

(statearr_38498_39092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (1))){
var inst_38455 = [];
var inst_38456 = inst_38455;
var inst_38457 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38496__$1 = (function (){var statearr_38499 = state_38496;
(statearr_38499[(7)] = inst_38456);

(statearr_38499[(8)] = inst_38457);

return statearr_38499;
})();
var statearr_38500_39093 = state_38496__$1;
(statearr_38500_39093[(2)] = null);

(statearr_38500_39093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (4))){
var inst_38460 = (state_38496[(9)]);
var inst_38460__$1 = (state_38496[(2)]);
var inst_38461 = (inst_38460__$1 == null);
var inst_38462 = cljs.core.not(inst_38461);
var state_38496__$1 = (function (){var statearr_38501 = state_38496;
(statearr_38501[(9)] = inst_38460__$1);

return statearr_38501;
})();
if(inst_38462){
var statearr_38502_39094 = state_38496__$1;
(statearr_38502_39094[(1)] = (5));

} else {
var statearr_38503_39095 = state_38496__$1;
(statearr_38503_39095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (15))){
var inst_38486 = (state_38496[(2)]);
var state_38496__$1 = state_38496;
var statearr_38504_39096 = state_38496__$1;
(statearr_38504_39096[(2)] = inst_38486);

(statearr_38504_39096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (13))){
var state_38496__$1 = state_38496;
var statearr_38505_39097 = state_38496__$1;
(statearr_38505_39097[(2)] = null);

(statearr_38505_39097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (6))){
var inst_38456 = (state_38496[(7)]);
var inst_38481 = inst_38456.length;
var inst_38482 = (inst_38481 > (0));
var state_38496__$1 = state_38496;
if(cljs.core.truth_(inst_38482)){
var statearr_38506_39098 = state_38496__$1;
(statearr_38506_39098[(1)] = (12));

} else {
var statearr_38507_39099 = state_38496__$1;
(statearr_38507_39099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (3))){
var inst_38494 = (state_38496[(2)]);
var state_38496__$1 = state_38496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38496__$1,inst_38494);
} else {
if((state_val_38497 === (12))){
var inst_38456 = (state_38496[(7)]);
var inst_38484 = cljs.core.vec(inst_38456);
var state_38496__$1 = state_38496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38496__$1,(15),out,inst_38484);
} else {
if((state_val_38497 === (2))){
var state_38496__$1 = state_38496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38496__$1,(4),ch);
} else {
if((state_val_38497 === (11))){
var inst_38460 = (state_38496[(9)]);
var inst_38464 = (state_38496[(10)]);
var inst_38474 = (state_38496[(2)]);
var inst_38475 = [];
var inst_38476 = inst_38475.push(inst_38460);
var inst_38456 = inst_38475;
var inst_38457 = inst_38464;
var state_38496__$1 = (function (){var statearr_38508 = state_38496;
(statearr_38508[(11)] = inst_38474);

(statearr_38508[(12)] = inst_38476);

(statearr_38508[(7)] = inst_38456);

(statearr_38508[(8)] = inst_38457);

return statearr_38508;
})();
var statearr_38509_39100 = state_38496__$1;
(statearr_38509_39100[(2)] = null);

(statearr_38509_39100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (9))){
var inst_38456 = (state_38496[(7)]);
var inst_38472 = cljs.core.vec(inst_38456);
var state_38496__$1 = state_38496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38496__$1,(11),out,inst_38472);
} else {
if((state_val_38497 === (5))){
var inst_38460 = (state_38496[(9)]);
var inst_38457 = (state_38496[(8)]);
var inst_38464 = (state_38496[(10)]);
var inst_38464__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38460) : f.call(null,inst_38460));
var inst_38465 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38464__$1,inst_38457);
var inst_38466 = cljs.core.keyword_identical_QMARK_(inst_38457,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38467 = ((inst_38465) || (inst_38466));
var state_38496__$1 = (function (){var statearr_38510 = state_38496;
(statearr_38510[(10)] = inst_38464__$1);

return statearr_38510;
})();
if(cljs.core.truth_(inst_38467)){
var statearr_38511_39101 = state_38496__$1;
(statearr_38511_39101[(1)] = (8));

} else {
var statearr_38512_39102 = state_38496__$1;
(statearr_38512_39102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (14))){
var inst_38489 = (state_38496[(2)]);
var inst_38490 = cljs.core.async.close_BANG_(out);
var state_38496__$1 = (function (){var statearr_38514 = state_38496;
(statearr_38514[(13)] = inst_38489);

return statearr_38514;
})();
var statearr_38515_39103 = state_38496__$1;
(statearr_38515_39103[(2)] = inst_38490);

(statearr_38515_39103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (10))){
var inst_38479 = (state_38496[(2)]);
var state_38496__$1 = state_38496;
var statearr_38516_39104 = state_38496__$1;
(statearr_38516_39104[(2)] = inst_38479);

(statearr_38516_39104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38497 === (8))){
var inst_38460 = (state_38496[(9)]);
var inst_38456 = (state_38496[(7)]);
var inst_38464 = (state_38496[(10)]);
var inst_38469 = inst_38456.push(inst_38460);
var tmp38513 = inst_38456;
var inst_38456__$1 = tmp38513;
var inst_38457 = inst_38464;
var state_38496__$1 = (function (){var statearr_38517 = state_38496;
(statearr_38517[(14)] = inst_38469);

(statearr_38517[(7)] = inst_38456__$1);

(statearr_38517[(8)] = inst_38457);

return statearr_38517;
})();
var statearr_38518_39105 = state_38496__$1;
(statearr_38518_39105[(2)] = null);

(statearr_38518_39105[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36948__auto__ = null;
var cljs$core$async$state_machine__36948__auto____0 = (function (){
var statearr_38519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38519[(0)] = cljs$core$async$state_machine__36948__auto__);

(statearr_38519[(1)] = (1));

return statearr_38519;
});
var cljs$core$async$state_machine__36948__auto____1 = (function (state_38496){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_38496);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e38520){if((e38520 instanceof Object)){
var ex__36951__auto__ = e38520;
var statearr_38521_39106 = state_38496;
(statearr_38521_39106[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39107 = state_38496;
state_38496 = G__39107;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
cljs$core$async$state_machine__36948__auto__ = function(state_38496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36948__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36948__auto____1.call(this,state_38496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36948__auto____0;
cljs$core$async$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36948__auto____1;
return cljs$core$async$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_38522 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_38522[(6)] = c__37015__auto___39091);

return statearr_38522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
