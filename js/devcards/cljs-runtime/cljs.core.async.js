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
var G__45998 = arguments.length;
switch (G__45998) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45999 = (function (f,blockable,meta46000){
this.f = f;
this.blockable = blockable;
this.meta46000 = meta46000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46001,meta46000__$1){
var self__ = this;
var _46001__$1 = this;
return (new cljs.core.async.t_cljs$core$async45999(self__.f,self__.blockable,meta46000__$1));
}));

(cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46001){
var self__ = this;
var _46001__$1 = this;
return self__.meta46000;
}));

(cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46000","meta46000",-436394537,null)], null);
}));

(cljs.core.async.t_cljs$core$async45999.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45999");

(cljs.core.async.t_cljs$core$async45999.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45999");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45999.
 */
cljs.core.async.__GT_t_cljs$core$async45999 = (function cljs$core$async$__GT_t_cljs$core$async45999(f__$1,blockable__$1,meta46000){
return (new cljs.core.async.t_cljs$core$async45999(f__$1,blockable__$1,meta46000));
});

}

return (new cljs.core.async.t_cljs$core$async45999(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46004 = arguments.length;
switch (G__46004) {
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
var G__46006 = arguments.length;
switch (G__46006) {
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
var G__46008 = arguments.length;
switch (G__46008) {
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
var val_47444 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47444) : fn1.call(null,val_47444));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47444) : fn1.call(null,val_47444));
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
var G__46010 = arguments.length;
switch (G__46010) {
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
var n__4666__auto___47451 = n;
var x_47452 = (0);
while(true){
if((x_47452 < n__4666__auto___47451)){
(a[x_47452] = x_47452);

var G__47453 = (x_47452 + (1));
x_47452 = G__47453;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46011 = (function (flag,meta46012){
this.flag = flag;
this.meta46012 = meta46012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46013,meta46012__$1){
var self__ = this;
var _46013__$1 = this;
return (new cljs.core.async.t_cljs$core$async46011(self__.flag,meta46012__$1));
}));

(cljs.core.async.t_cljs$core$async46011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46013){
var self__ = this;
var _46013__$1 = this;
return self__.meta46012;
}));

(cljs.core.async.t_cljs$core$async46011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46012","meta46012",-1625133505,null)], null);
}));

(cljs.core.async.t_cljs$core$async46011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46011");

(cljs.core.async.t_cljs$core$async46011.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46011.
 */
cljs.core.async.__GT_t_cljs$core$async46011 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46011(flag__$1,meta46012){
return (new cljs.core.async.t_cljs$core$async46011(flag__$1,meta46012));
});

}

return (new cljs.core.async.t_cljs$core$async46011(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46014 = (function (flag,cb,meta46015){
this.flag = flag;
this.cb = cb;
this.meta46015 = meta46015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46016,meta46015__$1){
var self__ = this;
var _46016__$1 = this;
return (new cljs.core.async.t_cljs$core$async46014(self__.flag,self__.cb,meta46015__$1));
}));

(cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46016){
var self__ = this;
var _46016__$1 = this;
return self__.meta46015;
}));

(cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46015","meta46015",-1944274873,null)], null);
}));

(cljs.core.async.t_cljs$core$async46014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46014");

(cljs.core.async.t_cljs$core$async46014.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46014.
 */
cljs.core.async.__GT_t_cljs$core$async46014 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46014(flag__$1,cb__$1,meta46015){
return (new cljs.core.async.t_cljs$core$async46014(flag__$1,cb__$1,meta46015));
});

}

return (new cljs.core.async.t_cljs$core$async46014(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46017_SHARP_){
var G__46019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46017_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46019) : fret.call(null,G__46019));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46018_SHARP_){
var G__46020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46018_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46020) : fret.call(null,G__46020));
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
var G__47476 = (i + (1));
i = G__47476;
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
var len__4789__auto___47482 = arguments.length;
var i__4790__auto___47483 = (0);
while(true){
if((i__4790__auto___47483 < len__4789__auto___47482)){
args__4795__auto__.push((arguments[i__4790__auto___47483]));

var G__47484 = (i__4790__auto___47483 + (1));
i__4790__auto___47483 = G__47484;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46023){
var map__46024 = p__46023;
var map__46024__$1 = (((((!((map__46024 == null))))?(((((map__46024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46024):map__46024);
var opts = map__46024__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46021){
var G__46022 = cljs.core.first(seq46021);
var seq46021__$1 = cljs.core.next(seq46021);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46022,seq46021__$1);
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
var G__46027 = arguments.length;
switch (G__46027) {
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
var c__45938__auto___47498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46051){
var state_val_46052 = (state_46051[(1)]);
if((state_val_46052 === (7))){
var inst_46047 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
var statearr_46053_47500 = state_46051__$1;
(statearr_46053_47500[(2)] = inst_46047);

(statearr_46053_47500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (1))){
var state_46051__$1 = state_46051;
var statearr_46054_47501 = state_46051__$1;
(statearr_46054_47501[(2)] = null);

(statearr_46054_47501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (4))){
var inst_46030 = (state_46051[(7)]);
var inst_46030__$1 = (state_46051[(2)]);
var inst_46031 = (inst_46030__$1 == null);
var state_46051__$1 = (function (){var statearr_46055 = state_46051;
(statearr_46055[(7)] = inst_46030__$1);

return statearr_46055;
})();
if(cljs.core.truth_(inst_46031)){
var statearr_46056_47502 = state_46051__$1;
(statearr_46056_47502[(1)] = (5));

} else {
var statearr_46057_47505 = state_46051__$1;
(statearr_46057_47505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (13))){
var state_46051__$1 = state_46051;
var statearr_46058_47506 = state_46051__$1;
(statearr_46058_47506[(2)] = null);

(statearr_46058_47506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (6))){
var inst_46030 = (state_46051[(7)]);
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46051__$1,(11),to,inst_46030);
} else {
if((state_val_46052 === (3))){
var inst_46049 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46051__$1,inst_46049);
} else {
if((state_val_46052 === (12))){
var state_46051__$1 = state_46051;
var statearr_46059_47509 = state_46051__$1;
(statearr_46059_47509[(2)] = null);

(statearr_46059_47509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (2))){
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46051__$1,(4),from);
} else {
if((state_val_46052 === (11))){
var inst_46040 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
if(cljs.core.truth_(inst_46040)){
var statearr_46060_47510 = state_46051__$1;
(statearr_46060_47510[(1)] = (12));

} else {
var statearr_46061_47511 = state_46051__$1;
(statearr_46061_47511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (9))){
var state_46051__$1 = state_46051;
var statearr_46062_47512 = state_46051__$1;
(statearr_46062_47512[(2)] = null);

(statearr_46062_47512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (5))){
var state_46051__$1 = state_46051;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46063_47515 = state_46051__$1;
(statearr_46063_47515[(1)] = (8));

} else {
var statearr_46064_47516 = state_46051__$1;
(statearr_46064_47516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (14))){
var inst_46045 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
var statearr_46065_47517 = state_46051__$1;
(statearr_46065_47517[(2)] = inst_46045);

(statearr_46065_47517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (10))){
var inst_46037 = (state_46051[(2)]);
var state_46051__$1 = state_46051;
var statearr_46066_47518 = state_46051__$1;
(statearr_46066_47518[(2)] = inst_46037);

(statearr_46066_47518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (8))){
var inst_46034 = cljs.core.async.close_BANG_(to);
var state_46051__$1 = state_46051;
var statearr_46067_47521 = state_46051__$1;
(statearr_46067_47521[(2)] = inst_46034);

(statearr_46067_47521[(1)] = (10));


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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_46068 = [null,null,null,null,null,null,null,null];
(statearr_46068[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_46068[(1)] = (1));

return statearr_46068;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_46051){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46051);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46069){if((e46069 instanceof Object)){
var ex__45874__auto__ = e46069;
var statearr_46070_47529 = state_46051;
(statearr_46070_47529[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47530 = state_46051;
state_46051 = G__47530;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_46051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_46051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46071 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46071[(6)] = c__45938__auto___47498);

return statearr_46071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
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
var process = (function (p__46072){
var vec__46073 = p__46072;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46073,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46073,(1),null);
var job = vec__46073;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45938__auto___47532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46080){
var state_val_46081 = (state_46080[(1)]);
if((state_val_46081 === (1))){
var state_46080__$1 = state_46080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46080__$1,(2),res,v);
} else {
if((state_val_46081 === (2))){
var inst_46077 = (state_46080[(2)]);
var inst_46078 = cljs.core.async.close_BANG_(res);
var state_46080__$1 = (function (){var statearr_46082 = state_46080;
(statearr_46082[(7)] = inst_46077);

return statearr_46082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46080__$1,inst_46078);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0 = (function (){
var statearr_46083 = [null,null,null,null,null,null,null,null];
(statearr_46083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__);

(statearr_46083[(1)] = (1));

return statearr_46083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1 = (function (state_46080){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46080);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46084){if((e46084 instanceof Object)){
var ex__45874__auto__ = e46084;
var statearr_46085_47538 = state_46080;
(statearr_46085_47538[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47540 = state_46080;
state_46080 = G__47540;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = function(state_46080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1.call(this,state_46080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46086 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46086[(6)] = c__45938__auto___47532);

return statearr_46086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46087){
var vec__46088 = p__46087;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46088,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46088,(1),null);
var job = vec__46088;
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
var n__4666__auto___47553 = n;
var __47554 = (0);
while(true){
if((__47554 < n__4666__auto___47553)){
var G__46091_47555 = type;
var G__46091_47556__$1 = (((G__46091_47555 instanceof cljs.core.Keyword))?G__46091_47555.fqn:null);
switch (G__46091_47556__$1) {
case "compute":
var c__45938__auto___47558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47554,c__45938__auto___47558,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async){
return (function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = ((function (__47554,c__45938__auto___47558,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async){
return (function (state_46104){
var state_val_46105 = (state_46104[(1)]);
if((state_val_46105 === (1))){
var state_46104__$1 = state_46104;
var statearr_46106_47559 = state_46104__$1;
(statearr_46106_47559[(2)] = null);

(statearr_46106_47559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (2))){
var state_46104__$1 = state_46104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46104__$1,(4),jobs);
} else {
if((state_val_46105 === (3))){
var inst_46102 = (state_46104[(2)]);
var state_46104__$1 = state_46104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46104__$1,inst_46102);
} else {
if((state_val_46105 === (4))){
var inst_46094 = (state_46104[(2)]);
var inst_46095 = process(inst_46094);
var state_46104__$1 = state_46104;
if(cljs.core.truth_(inst_46095)){
var statearr_46107_47560 = state_46104__$1;
(statearr_46107_47560[(1)] = (5));

} else {
var statearr_46108_47561 = state_46104__$1;
(statearr_46108_47561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (5))){
var state_46104__$1 = state_46104;
var statearr_46109_47562 = state_46104__$1;
(statearr_46109_47562[(2)] = null);

(statearr_46109_47562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (6))){
var state_46104__$1 = state_46104;
var statearr_46110_47563 = state_46104__$1;
(statearr_46110_47563[(2)] = null);

(statearr_46110_47563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (7))){
var inst_46100 = (state_46104[(2)]);
var state_46104__$1 = state_46104;
var statearr_46111_47564 = state_46104__$1;
(statearr_46111_47564[(2)] = inst_46100);

(statearr_46111_47564[(1)] = (3));


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
});})(__47554,c__45938__auto___47558,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async))
;
return ((function (__47554,switch__45870__auto__,c__45938__auto___47558,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0 = (function (){
var statearr_46112 = [null,null,null,null,null,null,null];
(statearr_46112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__);

(statearr_46112[(1)] = (1));

return statearr_46112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1 = (function (state_46104){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46104);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46113){if((e46113 instanceof Object)){
var ex__45874__auto__ = e46113;
var statearr_46114_47565 = state_46104;
(statearr_46114_47565[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47566 = state_46104;
state_46104 = G__47566;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = function(state_46104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1.call(this,state_46104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__;
})()
;})(__47554,switch__45870__auto__,c__45938__auto___47558,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async))
})();
var state__45940__auto__ = (function (){var statearr_46115 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46115[(6)] = c__45938__auto___47558);

return statearr_46115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
});})(__47554,c__45938__auto___47558,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async))
);


break;
case "async":
var c__45938__auto___47567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47554,c__45938__auto___47567,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async){
return (function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = ((function (__47554,c__45938__auto___47567,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async){
return (function (state_46128){
var state_val_46129 = (state_46128[(1)]);
if((state_val_46129 === (1))){
var state_46128__$1 = state_46128;
var statearr_46130_47568 = state_46128__$1;
(statearr_46130_47568[(2)] = null);

(statearr_46130_47568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46129 === (2))){
var state_46128__$1 = state_46128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46128__$1,(4),jobs);
} else {
if((state_val_46129 === (3))){
var inst_46126 = (state_46128[(2)]);
var state_46128__$1 = state_46128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46128__$1,inst_46126);
} else {
if((state_val_46129 === (4))){
var inst_46118 = (state_46128[(2)]);
var inst_46119 = async(inst_46118);
var state_46128__$1 = state_46128;
if(cljs.core.truth_(inst_46119)){
var statearr_46131_47569 = state_46128__$1;
(statearr_46131_47569[(1)] = (5));

} else {
var statearr_46132_47570 = state_46128__$1;
(statearr_46132_47570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46129 === (5))){
var state_46128__$1 = state_46128;
var statearr_46133_47571 = state_46128__$1;
(statearr_46133_47571[(2)] = null);

(statearr_46133_47571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46129 === (6))){
var state_46128__$1 = state_46128;
var statearr_46134_47572 = state_46128__$1;
(statearr_46134_47572[(2)] = null);

(statearr_46134_47572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46129 === (7))){
var inst_46124 = (state_46128[(2)]);
var state_46128__$1 = state_46128;
var statearr_46135_47573 = state_46128__$1;
(statearr_46135_47573[(2)] = inst_46124);

(statearr_46135_47573[(1)] = (3));


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
});})(__47554,c__45938__auto___47567,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async))
;
return ((function (__47554,switch__45870__auto__,c__45938__auto___47567,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0 = (function (){
var statearr_46136 = [null,null,null,null,null,null,null];
(statearr_46136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__);

(statearr_46136[(1)] = (1));

return statearr_46136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1 = (function (state_46128){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46128);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46137){if((e46137 instanceof Object)){
var ex__45874__auto__ = e46137;
var statearr_46138_47574 = state_46128;
(statearr_46138_47574[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47575 = state_46128;
state_46128 = G__47575;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = function(state_46128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1.call(this,state_46128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__;
})()
;})(__47554,switch__45870__auto__,c__45938__auto___47567,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async))
})();
var state__45940__auto__ = (function (){var statearr_46139 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46139[(6)] = c__45938__auto___47567);

return statearr_46139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
});})(__47554,c__45938__auto___47567,G__46091_47555,G__46091_47556__$1,n__4666__auto___47553,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46091_47556__$1)].join('')));

}

var G__47576 = (__47554 + (1));
__47554 = G__47576;
continue;
} else {
}
break;
}

var c__45938__auto___47577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46161){
var state_val_46162 = (state_46161[(1)]);
if((state_val_46162 === (7))){
var inst_46157 = (state_46161[(2)]);
var state_46161__$1 = state_46161;
var statearr_46163_47578 = state_46161__$1;
(statearr_46163_47578[(2)] = inst_46157);

(statearr_46163_47578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (1))){
var state_46161__$1 = state_46161;
var statearr_46164_47579 = state_46161__$1;
(statearr_46164_47579[(2)] = null);

(statearr_46164_47579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (4))){
var inst_46142 = (state_46161[(7)]);
var inst_46142__$1 = (state_46161[(2)]);
var inst_46143 = (inst_46142__$1 == null);
var state_46161__$1 = (function (){var statearr_46165 = state_46161;
(statearr_46165[(7)] = inst_46142__$1);

return statearr_46165;
})();
if(cljs.core.truth_(inst_46143)){
var statearr_46166_47580 = state_46161__$1;
(statearr_46166_47580[(1)] = (5));

} else {
var statearr_46167_47581 = state_46161__$1;
(statearr_46167_47581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (6))){
var inst_46142 = (state_46161[(7)]);
var inst_46147 = (state_46161[(8)]);
var inst_46147__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46149 = [inst_46142,inst_46147__$1];
var inst_46150 = (new cljs.core.PersistentVector(null,2,(5),inst_46148,inst_46149,null));
var state_46161__$1 = (function (){var statearr_46168 = state_46161;
(statearr_46168[(8)] = inst_46147__$1);

return statearr_46168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46161__$1,(8),jobs,inst_46150);
} else {
if((state_val_46162 === (3))){
var inst_46159 = (state_46161[(2)]);
var state_46161__$1 = state_46161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46161__$1,inst_46159);
} else {
if((state_val_46162 === (2))){
var state_46161__$1 = state_46161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46161__$1,(4),from);
} else {
if((state_val_46162 === (9))){
var inst_46154 = (state_46161[(2)]);
var state_46161__$1 = (function (){var statearr_46169 = state_46161;
(statearr_46169[(9)] = inst_46154);

return statearr_46169;
})();
var statearr_46170_47586 = state_46161__$1;
(statearr_46170_47586[(2)] = null);

(statearr_46170_47586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (5))){
var inst_46145 = cljs.core.async.close_BANG_(jobs);
var state_46161__$1 = state_46161;
var statearr_46171_47589 = state_46161__$1;
(statearr_46171_47589[(2)] = inst_46145);

(statearr_46171_47589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (8))){
var inst_46147 = (state_46161[(8)]);
var inst_46152 = (state_46161[(2)]);
var state_46161__$1 = (function (){var statearr_46172 = state_46161;
(statearr_46172[(10)] = inst_46152);

return statearr_46172;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46161__$1,(9),results,inst_46147);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0 = (function (){
var statearr_46173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__);

(statearr_46173[(1)] = (1));

return statearr_46173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1 = (function (state_46161){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46161);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46174){if((e46174 instanceof Object)){
var ex__45874__auto__ = e46174;
var statearr_46175_47590 = state_46161;
(statearr_46175_47590[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47592 = state_46161;
state_46161 = G__47592;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = function(state_46161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1.call(this,state_46161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46176 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46176[(6)] = c__45938__auto___47577);

return statearr_46176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));


var c__45938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46214){
var state_val_46215 = (state_46214[(1)]);
if((state_val_46215 === (7))){
var inst_46210 = (state_46214[(2)]);
var state_46214__$1 = state_46214;
var statearr_46216_47594 = state_46214__$1;
(statearr_46216_47594[(2)] = inst_46210);

(statearr_46216_47594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (20))){
var state_46214__$1 = state_46214;
var statearr_46217_47596 = state_46214__$1;
(statearr_46217_47596[(2)] = null);

(statearr_46217_47596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (1))){
var state_46214__$1 = state_46214;
var statearr_46218_47597 = state_46214__$1;
(statearr_46218_47597[(2)] = null);

(statearr_46218_47597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (4))){
var inst_46179 = (state_46214[(7)]);
var inst_46179__$1 = (state_46214[(2)]);
var inst_46180 = (inst_46179__$1 == null);
var state_46214__$1 = (function (){var statearr_46219 = state_46214;
(statearr_46219[(7)] = inst_46179__$1);

return statearr_46219;
})();
if(cljs.core.truth_(inst_46180)){
var statearr_46220_47598 = state_46214__$1;
(statearr_46220_47598[(1)] = (5));

} else {
var statearr_46221_47599 = state_46214__$1;
(statearr_46221_47599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (15))){
var inst_46192 = (state_46214[(8)]);
var state_46214__$1 = state_46214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46214__$1,(18),to,inst_46192);
} else {
if((state_val_46215 === (21))){
var inst_46205 = (state_46214[(2)]);
var state_46214__$1 = state_46214;
var statearr_46222_47600 = state_46214__$1;
(statearr_46222_47600[(2)] = inst_46205);

(statearr_46222_47600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (13))){
var inst_46207 = (state_46214[(2)]);
var state_46214__$1 = (function (){var statearr_46223 = state_46214;
(statearr_46223[(9)] = inst_46207);

return statearr_46223;
})();
var statearr_46224_47604 = state_46214__$1;
(statearr_46224_47604[(2)] = null);

(statearr_46224_47604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (6))){
var inst_46179 = (state_46214[(7)]);
var state_46214__$1 = state_46214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46214__$1,(11),inst_46179);
} else {
if((state_val_46215 === (17))){
var inst_46200 = (state_46214[(2)]);
var state_46214__$1 = state_46214;
if(cljs.core.truth_(inst_46200)){
var statearr_46225_47609 = state_46214__$1;
(statearr_46225_47609[(1)] = (19));

} else {
var statearr_46226_47610 = state_46214__$1;
(statearr_46226_47610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (3))){
var inst_46212 = (state_46214[(2)]);
var state_46214__$1 = state_46214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46214__$1,inst_46212);
} else {
if((state_val_46215 === (12))){
var inst_46189 = (state_46214[(10)]);
var state_46214__$1 = state_46214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46214__$1,(14),inst_46189);
} else {
if((state_val_46215 === (2))){
var state_46214__$1 = state_46214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46214__$1,(4),results);
} else {
if((state_val_46215 === (19))){
var state_46214__$1 = state_46214;
var statearr_46227_47611 = state_46214__$1;
(statearr_46227_47611[(2)] = null);

(statearr_46227_47611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (11))){
var inst_46189 = (state_46214[(2)]);
var state_46214__$1 = (function (){var statearr_46228 = state_46214;
(statearr_46228[(10)] = inst_46189);

return statearr_46228;
})();
var statearr_46229_47612 = state_46214__$1;
(statearr_46229_47612[(2)] = null);

(statearr_46229_47612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (9))){
var state_46214__$1 = state_46214;
var statearr_46230_47613 = state_46214__$1;
(statearr_46230_47613[(2)] = null);

(statearr_46230_47613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (5))){
var state_46214__$1 = state_46214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46231_47614 = state_46214__$1;
(statearr_46231_47614[(1)] = (8));

} else {
var statearr_46232_47615 = state_46214__$1;
(statearr_46232_47615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (14))){
var inst_46192 = (state_46214[(8)]);
var inst_46192__$1 = (state_46214[(2)]);
var inst_46193 = (inst_46192__$1 == null);
var inst_46194 = cljs.core.not(inst_46193);
var state_46214__$1 = (function (){var statearr_46233 = state_46214;
(statearr_46233[(8)] = inst_46192__$1);

return statearr_46233;
})();
if(inst_46194){
var statearr_46234_47616 = state_46214__$1;
(statearr_46234_47616[(1)] = (15));

} else {
var statearr_46235_47617 = state_46214__$1;
(statearr_46235_47617[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (16))){
var state_46214__$1 = state_46214;
var statearr_46236_47618 = state_46214__$1;
(statearr_46236_47618[(2)] = false);

(statearr_46236_47618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (10))){
var inst_46186 = (state_46214[(2)]);
var state_46214__$1 = state_46214;
var statearr_46237_47620 = state_46214__$1;
(statearr_46237_47620[(2)] = inst_46186);

(statearr_46237_47620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (18))){
var inst_46197 = (state_46214[(2)]);
var state_46214__$1 = state_46214;
var statearr_46238_47621 = state_46214__$1;
(statearr_46238_47621[(2)] = inst_46197);

(statearr_46238_47621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46215 === (8))){
var inst_46183 = cljs.core.async.close_BANG_(to);
var state_46214__$1 = state_46214;
var statearr_46239_47622 = state_46214__$1;
(statearr_46239_47622[(2)] = inst_46183);

(statearr_46239_47622[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0 = (function (){
var statearr_46240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__);

(statearr_46240[(1)] = (1));

return statearr_46240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1 = (function (state_46214){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46214);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46241){if((e46241 instanceof Object)){
var ex__45874__auto__ = e46241;
var statearr_46242_47625 = state_46214;
(statearr_46242_47625[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47626 = state_46214;
state_46214 = G__47626;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__ = function(state_46214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1.call(this,state_46214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45871__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46243 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46243[(6)] = c__45938__auto__);

return statearr_46243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));

return c__45938__auto__;
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
var G__46245 = arguments.length;
switch (G__46245) {
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
var G__46247 = arguments.length;
switch (G__46247) {
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
var G__46249 = arguments.length;
switch (G__46249) {
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
var c__45938__auto___47630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46275){
var state_val_46276 = (state_46275[(1)]);
if((state_val_46276 === (7))){
var inst_46271 = (state_46275[(2)]);
var state_46275__$1 = state_46275;
var statearr_46277_47631 = state_46275__$1;
(statearr_46277_47631[(2)] = inst_46271);

(statearr_46277_47631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (1))){
var state_46275__$1 = state_46275;
var statearr_46278_47632 = state_46275__$1;
(statearr_46278_47632[(2)] = null);

(statearr_46278_47632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (4))){
var inst_46252 = (state_46275[(7)]);
var inst_46252__$1 = (state_46275[(2)]);
var inst_46253 = (inst_46252__$1 == null);
var state_46275__$1 = (function (){var statearr_46279 = state_46275;
(statearr_46279[(7)] = inst_46252__$1);

return statearr_46279;
})();
if(cljs.core.truth_(inst_46253)){
var statearr_46280_47633 = state_46275__$1;
(statearr_46280_47633[(1)] = (5));

} else {
var statearr_46281_47634 = state_46275__$1;
(statearr_46281_47634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (13))){
var state_46275__$1 = state_46275;
var statearr_46282_47635 = state_46275__$1;
(statearr_46282_47635[(2)] = null);

(statearr_46282_47635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (6))){
var inst_46252 = (state_46275[(7)]);
var inst_46258 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46252) : p.call(null,inst_46252));
var state_46275__$1 = state_46275;
if(cljs.core.truth_(inst_46258)){
var statearr_46283_47636 = state_46275__$1;
(statearr_46283_47636[(1)] = (9));

} else {
var statearr_46284_47637 = state_46275__$1;
(statearr_46284_47637[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (3))){
var inst_46273 = (state_46275[(2)]);
var state_46275__$1 = state_46275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46275__$1,inst_46273);
} else {
if((state_val_46276 === (12))){
var state_46275__$1 = state_46275;
var statearr_46285_47638 = state_46275__$1;
(statearr_46285_47638[(2)] = null);

(statearr_46285_47638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (2))){
var state_46275__$1 = state_46275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46275__$1,(4),ch);
} else {
if((state_val_46276 === (11))){
var inst_46252 = (state_46275[(7)]);
var inst_46262 = (state_46275[(2)]);
var state_46275__$1 = state_46275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46275__$1,(8),inst_46262,inst_46252);
} else {
if((state_val_46276 === (9))){
var state_46275__$1 = state_46275;
var statearr_46286_47639 = state_46275__$1;
(statearr_46286_47639[(2)] = tc);

(statearr_46286_47639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (5))){
var inst_46255 = cljs.core.async.close_BANG_(tc);
var inst_46256 = cljs.core.async.close_BANG_(fc);
var state_46275__$1 = (function (){var statearr_46287 = state_46275;
(statearr_46287[(8)] = inst_46255);

return statearr_46287;
})();
var statearr_46288_47643 = state_46275__$1;
(statearr_46288_47643[(2)] = inst_46256);

(statearr_46288_47643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (14))){
var inst_46269 = (state_46275[(2)]);
var state_46275__$1 = state_46275;
var statearr_46289_47645 = state_46275__$1;
(statearr_46289_47645[(2)] = inst_46269);

(statearr_46289_47645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (10))){
var state_46275__$1 = state_46275;
var statearr_46290_47646 = state_46275__$1;
(statearr_46290_47646[(2)] = fc);

(statearr_46290_47646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46276 === (8))){
var inst_46264 = (state_46275[(2)]);
var state_46275__$1 = state_46275;
if(cljs.core.truth_(inst_46264)){
var statearr_46291_47649 = state_46275__$1;
(statearr_46291_47649[(1)] = (12));

} else {
var statearr_46292_47650 = state_46275__$1;
(statearr_46292_47650[(1)] = (13));

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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_46293 = [null,null,null,null,null,null,null,null,null];
(statearr_46293[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_46293[(1)] = (1));

return statearr_46293;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_46275){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46275);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46294){if((e46294 instanceof Object)){
var ex__45874__auto__ = e46294;
var statearr_46295_47651 = state_46275;
(statearr_46295_47651[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47652 = state_46275;
state_46275 = G__47652;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_46275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_46275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46296 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46296[(6)] = c__45938__auto___47630);

return statearr_46296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
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
var c__45938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46317){
var state_val_46318 = (state_46317[(1)]);
if((state_val_46318 === (7))){
var inst_46313 = (state_46317[(2)]);
var state_46317__$1 = state_46317;
var statearr_46319_47655 = state_46317__$1;
(statearr_46319_47655[(2)] = inst_46313);

(statearr_46319_47655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46318 === (1))){
var inst_46297 = init;
var state_46317__$1 = (function (){var statearr_46320 = state_46317;
(statearr_46320[(7)] = inst_46297);

return statearr_46320;
})();
var statearr_46321_47656 = state_46317__$1;
(statearr_46321_47656[(2)] = null);

(statearr_46321_47656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46318 === (4))){
var inst_46300 = (state_46317[(8)]);
var inst_46300__$1 = (state_46317[(2)]);
var inst_46301 = (inst_46300__$1 == null);
var state_46317__$1 = (function (){var statearr_46322 = state_46317;
(statearr_46322[(8)] = inst_46300__$1);

return statearr_46322;
})();
if(cljs.core.truth_(inst_46301)){
var statearr_46323_47663 = state_46317__$1;
(statearr_46323_47663[(1)] = (5));

} else {
var statearr_46324_47664 = state_46317__$1;
(statearr_46324_47664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46318 === (6))){
var inst_46300 = (state_46317[(8)]);
var inst_46297 = (state_46317[(7)]);
var inst_46304 = (state_46317[(9)]);
var inst_46304__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46297,inst_46300) : f.call(null,inst_46297,inst_46300));
var inst_46305 = cljs.core.reduced_QMARK_(inst_46304__$1);
var state_46317__$1 = (function (){var statearr_46325 = state_46317;
(statearr_46325[(9)] = inst_46304__$1);

return statearr_46325;
})();
if(inst_46305){
var statearr_46326_47667 = state_46317__$1;
(statearr_46326_47667[(1)] = (8));

} else {
var statearr_46327_47668 = state_46317__$1;
(statearr_46327_47668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46318 === (3))){
var inst_46315 = (state_46317[(2)]);
var state_46317__$1 = state_46317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46317__$1,inst_46315);
} else {
if((state_val_46318 === (2))){
var state_46317__$1 = state_46317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46317__$1,(4),ch);
} else {
if((state_val_46318 === (9))){
var inst_46304 = (state_46317[(9)]);
var inst_46297 = inst_46304;
var state_46317__$1 = (function (){var statearr_46328 = state_46317;
(statearr_46328[(7)] = inst_46297);

return statearr_46328;
})();
var statearr_46329_47671 = state_46317__$1;
(statearr_46329_47671[(2)] = null);

(statearr_46329_47671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46318 === (5))){
var inst_46297 = (state_46317[(7)]);
var state_46317__$1 = state_46317;
var statearr_46330_47672 = state_46317__$1;
(statearr_46330_47672[(2)] = inst_46297);

(statearr_46330_47672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46318 === (10))){
var inst_46311 = (state_46317[(2)]);
var state_46317__$1 = state_46317;
var statearr_46331_47673 = state_46317__$1;
(statearr_46331_47673[(2)] = inst_46311);

(statearr_46331_47673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46318 === (8))){
var inst_46304 = (state_46317[(9)]);
var inst_46307 = cljs.core.deref(inst_46304);
var state_46317__$1 = state_46317;
var statearr_46332_47676 = state_46317__$1;
(statearr_46332_47676[(2)] = inst_46307);

(statearr_46332_47676[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45871__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45871__auto____0 = (function (){
var statearr_46333 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46333[(0)] = cljs$core$async$reduce_$_state_machine__45871__auto__);

(statearr_46333[(1)] = (1));

return statearr_46333;
});
var cljs$core$async$reduce_$_state_machine__45871__auto____1 = (function (state_46317){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46317);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46334){if((e46334 instanceof Object)){
var ex__45874__auto__ = e46334;
var statearr_46335_47677 = state_46317;
(statearr_46335_47677[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47678 = state_46317;
state_46317 = G__47678;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45871__auto__ = function(state_46317){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45871__auto____1.call(this,state_46317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45871__auto____0;
cljs$core$async$reduce_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45871__auto____1;
return cljs$core$async$reduce_$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46336 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46336[(6)] = c__45938__auto__);

return statearr_46336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));

return c__45938__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46342){
var state_val_46343 = (state_46342[(1)]);
if((state_val_46343 === (1))){
var inst_46337 = cljs.core.async.reduce(f__$1,init,ch);
var state_46342__$1 = state_46342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46342__$1,(2),inst_46337);
} else {
if((state_val_46343 === (2))){
var inst_46339 = (state_46342[(2)]);
var inst_46340 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46339) : f__$1.call(null,inst_46339));
var state_46342__$1 = state_46342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46342__$1,inst_46340);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45871__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45871__auto____0 = (function (){
var statearr_46344 = [null,null,null,null,null,null,null];
(statearr_46344[(0)] = cljs$core$async$transduce_$_state_machine__45871__auto__);

(statearr_46344[(1)] = (1));

return statearr_46344;
});
var cljs$core$async$transduce_$_state_machine__45871__auto____1 = (function (state_46342){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46342);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46345){if((e46345 instanceof Object)){
var ex__45874__auto__ = e46345;
var statearr_46346_47680 = state_46342;
(statearr_46346_47680[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47681 = state_46342;
state_46342 = G__47681;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45871__auto__ = function(state_46342){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45871__auto____1.call(this,state_46342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45871__auto____0;
cljs$core$async$transduce_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45871__auto____1;
return cljs$core$async$transduce_$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46347 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46347[(6)] = c__45938__auto__);

return statearr_46347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));

return c__45938__auto__;
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
var G__46349 = arguments.length;
switch (G__46349) {
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
var c__45938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46374){
var state_val_46375 = (state_46374[(1)]);
if((state_val_46375 === (7))){
var inst_46356 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
var statearr_46376_47683 = state_46374__$1;
(statearr_46376_47683[(2)] = inst_46356);

(statearr_46376_47683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (1))){
var inst_46350 = cljs.core.seq(coll);
var inst_46351 = inst_46350;
var state_46374__$1 = (function (){var statearr_46377 = state_46374;
(statearr_46377[(7)] = inst_46351);

return statearr_46377;
})();
var statearr_46378_47688 = state_46374__$1;
(statearr_46378_47688[(2)] = null);

(statearr_46378_47688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (4))){
var inst_46351 = (state_46374[(7)]);
var inst_46354 = cljs.core.first(inst_46351);
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46374__$1,(7),ch,inst_46354);
} else {
if((state_val_46375 === (13))){
var inst_46368 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
var statearr_46379_47692 = state_46374__$1;
(statearr_46379_47692[(2)] = inst_46368);

(statearr_46379_47692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (6))){
var inst_46359 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
if(cljs.core.truth_(inst_46359)){
var statearr_46380_47693 = state_46374__$1;
(statearr_46380_47693[(1)] = (8));

} else {
var statearr_46381_47694 = state_46374__$1;
(statearr_46381_47694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (3))){
var inst_46372 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46374__$1,inst_46372);
} else {
if((state_val_46375 === (12))){
var state_46374__$1 = state_46374;
var statearr_46382_47695 = state_46374__$1;
(statearr_46382_47695[(2)] = null);

(statearr_46382_47695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (2))){
var inst_46351 = (state_46374[(7)]);
var state_46374__$1 = state_46374;
if(cljs.core.truth_(inst_46351)){
var statearr_46383_47699 = state_46374__$1;
(statearr_46383_47699[(1)] = (4));

} else {
var statearr_46384_47700 = state_46374__$1;
(statearr_46384_47700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (11))){
var inst_46365 = cljs.core.async.close_BANG_(ch);
var state_46374__$1 = state_46374;
var statearr_46385_47701 = state_46374__$1;
(statearr_46385_47701[(2)] = inst_46365);

(statearr_46385_47701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (9))){
var state_46374__$1 = state_46374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46386_47702 = state_46374__$1;
(statearr_46386_47702[(1)] = (11));

} else {
var statearr_46387_47703 = state_46374__$1;
(statearr_46387_47703[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (5))){
var inst_46351 = (state_46374[(7)]);
var state_46374__$1 = state_46374;
var statearr_46388_47707 = state_46374__$1;
(statearr_46388_47707[(2)] = inst_46351);

(statearr_46388_47707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (10))){
var inst_46370 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
var statearr_46389_47708 = state_46374__$1;
(statearr_46389_47708[(2)] = inst_46370);

(statearr_46389_47708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (8))){
var inst_46351 = (state_46374[(7)]);
var inst_46361 = cljs.core.next(inst_46351);
var inst_46351__$1 = inst_46361;
var state_46374__$1 = (function (){var statearr_46390 = state_46374;
(statearr_46390[(7)] = inst_46351__$1);

return statearr_46390;
})();
var statearr_46391_47714 = state_46374__$1;
(statearr_46391_47714[(2)] = null);

(statearr_46391_47714[(1)] = (2));


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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_46392 = [null,null,null,null,null,null,null,null];
(statearr_46392[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_46392[(1)] = (1));

return statearr_46392;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_46374){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46374);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46393){if((e46393 instanceof Object)){
var ex__45874__auto__ = e46393;
var statearr_46394_47718 = state_46374;
(statearr_46394_47718[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47719 = state_46374;
state_46374 = G__47719;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_46374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_46374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46395 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46395[(6)] = c__45938__auto__);

return statearr_46395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));

return c__45938__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46396 = (function (ch,cs,meta46397){
this.ch = ch;
this.cs = cs;
this.meta46397 = meta46397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46398,meta46397__$1){
var self__ = this;
var _46398__$1 = this;
return (new cljs.core.async.t_cljs$core$async46396(self__.ch,self__.cs,meta46397__$1));
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46398){
var self__ = this;
var _46398__$1 = this;
return self__.meta46397;
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46397","meta46397",1986884802,null)], null);
}));

(cljs.core.async.t_cljs$core$async46396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46396");

(cljs.core.async.t_cljs$core$async46396.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46396.
 */
cljs.core.async.__GT_t_cljs$core$async46396 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46396(ch__$1,cs__$1,meta46397){
return (new cljs.core.async.t_cljs$core$async46396(ch__$1,cs__$1,meta46397));
});

}

return (new cljs.core.async.t_cljs$core$async46396(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__45938__auto___47761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46533){
var state_val_46534 = (state_46533[(1)]);
if((state_val_46534 === (7))){
var inst_46529 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46535_47768 = state_46533__$1;
(statearr_46535_47768[(2)] = inst_46529);

(statearr_46535_47768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (20))){
var inst_46432 = (state_46533[(7)]);
var inst_46444 = cljs.core.first(inst_46432);
var inst_46445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46444,(0),null);
var inst_46446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46444,(1),null);
var state_46533__$1 = (function (){var statearr_46536 = state_46533;
(statearr_46536[(8)] = inst_46445);

return statearr_46536;
})();
if(cljs.core.truth_(inst_46446)){
var statearr_46537_47770 = state_46533__$1;
(statearr_46537_47770[(1)] = (22));

} else {
var statearr_46538_47771 = state_46533__$1;
(statearr_46538_47771[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (27))){
var inst_46474 = (state_46533[(9)]);
var inst_46476 = (state_46533[(10)]);
var inst_46481 = (state_46533[(11)]);
var inst_46401 = (state_46533[(12)]);
var inst_46481__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46474,inst_46476);
var inst_46482 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46481__$1,inst_46401,done);
var state_46533__$1 = (function (){var statearr_46539 = state_46533;
(statearr_46539[(11)] = inst_46481__$1);

return statearr_46539;
})();
if(cljs.core.truth_(inst_46482)){
var statearr_46540_47772 = state_46533__$1;
(statearr_46540_47772[(1)] = (30));

} else {
var statearr_46541_47773 = state_46533__$1;
(statearr_46541_47773[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (1))){
var state_46533__$1 = state_46533;
var statearr_46542_47774 = state_46533__$1;
(statearr_46542_47774[(2)] = null);

(statearr_46542_47774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (24))){
var inst_46432 = (state_46533[(7)]);
var inst_46451 = (state_46533[(2)]);
var inst_46452 = cljs.core.next(inst_46432);
var inst_46410 = inst_46452;
var inst_46411 = null;
var inst_46412 = (0);
var inst_46413 = (0);
var state_46533__$1 = (function (){var statearr_46543 = state_46533;
(statearr_46543[(13)] = inst_46410);

(statearr_46543[(14)] = inst_46413);

(statearr_46543[(15)] = inst_46411);

(statearr_46543[(16)] = inst_46451);

(statearr_46543[(17)] = inst_46412);

return statearr_46543;
})();
var statearr_46544_47775 = state_46533__$1;
(statearr_46544_47775[(2)] = null);

(statearr_46544_47775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (39))){
var state_46533__$1 = state_46533;
var statearr_46548_47776 = state_46533__$1;
(statearr_46548_47776[(2)] = null);

(statearr_46548_47776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (4))){
var inst_46401 = (state_46533[(12)]);
var inst_46401__$1 = (state_46533[(2)]);
var inst_46402 = (inst_46401__$1 == null);
var state_46533__$1 = (function (){var statearr_46549 = state_46533;
(statearr_46549[(12)] = inst_46401__$1);

return statearr_46549;
})();
if(cljs.core.truth_(inst_46402)){
var statearr_46550_47779 = state_46533__$1;
(statearr_46550_47779[(1)] = (5));

} else {
var statearr_46551_47780 = state_46533__$1;
(statearr_46551_47780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (15))){
var inst_46410 = (state_46533[(13)]);
var inst_46413 = (state_46533[(14)]);
var inst_46411 = (state_46533[(15)]);
var inst_46412 = (state_46533[(17)]);
var inst_46428 = (state_46533[(2)]);
var inst_46429 = (inst_46413 + (1));
var tmp46545 = inst_46410;
var tmp46546 = inst_46411;
var tmp46547 = inst_46412;
var inst_46410__$1 = tmp46545;
var inst_46411__$1 = tmp46546;
var inst_46412__$1 = tmp46547;
var inst_46413__$1 = inst_46429;
var state_46533__$1 = (function (){var statearr_46552 = state_46533;
(statearr_46552[(13)] = inst_46410__$1);

(statearr_46552[(14)] = inst_46413__$1);

(statearr_46552[(18)] = inst_46428);

(statearr_46552[(15)] = inst_46411__$1);

(statearr_46552[(17)] = inst_46412__$1);

return statearr_46552;
})();
var statearr_46553_47781 = state_46533__$1;
(statearr_46553_47781[(2)] = null);

(statearr_46553_47781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (21))){
var inst_46455 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46557_47782 = state_46533__$1;
(statearr_46557_47782[(2)] = inst_46455);

(statearr_46557_47782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (31))){
var inst_46481 = (state_46533[(11)]);
var inst_46485 = done(null);
var inst_46486 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46481);
var state_46533__$1 = (function (){var statearr_46558 = state_46533;
(statearr_46558[(19)] = inst_46485);

return statearr_46558;
})();
var statearr_46559_47783 = state_46533__$1;
(statearr_46559_47783[(2)] = inst_46486);

(statearr_46559_47783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (32))){
var inst_46474 = (state_46533[(9)]);
var inst_46476 = (state_46533[(10)]);
var inst_46475 = (state_46533[(20)]);
var inst_46473 = (state_46533[(21)]);
var inst_46488 = (state_46533[(2)]);
var inst_46489 = (inst_46476 + (1));
var tmp46554 = inst_46474;
var tmp46555 = inst_46475;
var tmp46556 = inst_46473;
var inst_46473__$1 = tmp46556;
var inst_46474__$1 = tmp46554;
var inst_46475__$1 = tmp46555;
var inst_46476__$1 = inst_46489;
var state_46533__$1 = (function (){var statearr_46560 = state_46533;
(statearr_46560[(22)] = inst_46488);

(statearr_46560[(9)] = inst_46474__$1);

(statearr_46560[(10)] = inst_46476__$1);

(statearr_46560[(20)] = inst_46475__$1);

(statearr_46560[(21)] = inst_46473__$1);

return statearr_46560;
})();
var statearr_46561_47784 = state_46533__$1;
(statearr_46561_47784[(2)] = null);

(statearr_46561_47784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (40))){
var inst_46501 = (state_46533[(23)]);
var inst_46505 = done(null);
var inst_46506 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46501);
var state_46533__$1 = (function (){var statearr_46562 = state_46533;
(statearr_46562[(24)] = inst_46505);

return statearr_46562;
})();
var statearr_46563_47785 = state_46533__$1;
(statearr_46563_47785[(2)] = inst_46506);

(statearr_46563_47785[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (33))){
var inst_46492 = (state_46533[(25)]);
var inst_46494 = cljs.core.chunked_seq_QMARK_(inst_46492);
var state_46533__$1 = state_46533;
if(inst_46494){
var statearr_46564_47786 = state_46533__$1;
(statearr_46564_47786[(1)] = (36));

} else {
var statearr_46565_47787 = state_46533__$1;
(statearr_46565_47787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (13))){
var inst_46422 = (state_46533[(26)]);
var inst_46425 = cljs.core.async.close_BANG_(inst_46422);
var state_46533__$1 = state_46533;
var statearr_46566_47788 = state_46533__$1;
(statearr_46566_47788[(2)] = inst_46425);

(statearr_46566_47788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (22))){
var inst_46445 = (state_46533[(8)]);
var inst_46448 = cljs.core.async.close_BANG_(inst_46445);
var state_46533__$1 = state_46533;
var statearr_46567_47791 = state_46533__$1;
(statearr_46567_47791[(2)] = inst_46448);

(statearr_46567_47791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (36))){
var inst_46492 = (state_46533[(25)]);
var inst_46496 = cljs.core.chunk_first(inst_46492);
var inst_46497 = cljs.core.chunk_rest(inst_46492);
var inst_46498 = cljs.core.count(inst_46496);
var inst_46473 = inst_46497;
var inst_46474 = inst_46496;
var inst_46475 = inst_46498;
var inst_46476 = (0);
var state_46533__$1 = (function (){var statearr_46568 = state_46533;
(statearr_46568[(9)] = inst_46474);

(statearr_46568[(10)] = inst_46476);

(statearr_46568[(20)] = inst_46475);

(statearr_46568[(21)] = inst_46473);

return statearr_46568;
})();
var statearr_46569_47796 = state_46533__$1;
(statearr_46569_47796[(2)] = null);

(statearr_46569_47796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (41))){
var inst_46492 = (state_46533[(25)]);
var inst_46508 = (state_46533[(2)]);
var inst_46509 = cljs.core.next(inst_46492);
var inst_46473 = inst_46509;
var inst_46474 = null;
var inst_46475 = (0);
var inst_46476 = (0);
var state_46533__$1 = (function (){var statearr_46570 = state_46533;
(statearr_46570[(27)] = inst_46508);

(statearr_46570[(9)] = inst_46474);

(statearr_46570[(10)] = inst_46476);

(statearr_46570[(20)] = inst_46475);

(statearr_46570[(21)] = inst_46473);

return statearr_46570;
})();
var statearr_46571_47798 = state_46533__$1;
(statearr_46571_47798[(2)] = null);

(statearr_46571_47798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (43))){
var state_46533__$1 = state_46533;
var statearr_46572_47799 = state_46533__$1;
(statearr_46572_47799[(2)] = null);

(statearr_46572_47799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (29))){
var inst_46517 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46573_47801 = state_46533__$1;
(statearr_46573_47801[(2)] = inst_46517);

(statearr_46573_47801[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (44))){
var inst_46526 = (state_46533[(2)]);
var state_46533__$1 = (function (){var statearr_46574 = state_46533;
(statearr_46574[(28)] = inst_46526);

return statearr_46574;
})();
var statearr_46575_47803 = state_46533__$1;
(statearr_46575_47803[(2)] = null);

(statearr_46575_47803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (6))){
var inst_46465 = (state_46533[(29)]);
var inst_46464 = cljs.core.deref(cs);
var inst_46465__$1 = cljs.core.keys(inst_46464);
var inst_46466 = cljs.core.count(inst_46465__$1);
var inst_46467 = cljs.core.reset_BANG_(dctr,inst_46466);
var inst_46472 = cljs.core.seq(inst_46465__$1);
var inst_46473 = inst_46472;
var inst_46474 = null;
var inst_46475 = (0);
var inst_46476 = (0);
var state_46533__$1 = (function (){var statearr_46576 = state_46533;
(statearr_46576[(29)] = inst_46465__$1);

(statearr_46576[(9)] = inst_46474);

(statearr_46576[(10)] = inst_46476);

(statearr_46576[(20)] = inst_46475);

(statearr_46576[(21)] = inst_46473);

(statearr_46576[(30)] = inst_46467);

return statearr_46576;
})();
var statearr_46577_47804 = state_46533__$1;
(statearr_46577_47804[(2)] = null);

(statearr_46577_47804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (28))){
var inst_46492 = (state_46533[(25)]);
var inst_46473 = (state_46533[(21)]);
var inst_46492__$1 = cljs.core.seq(inst_46473);
var state_46533__$1 = (function (){var statearr_46578 = state_46533;
(statearr_46578[(25)] = inst_46492__$1);

return statearr_46578;
})();
if(inst_46492__$1){
var statearr_46579_47805 = state_46533__$1;
(statearr_46579_47805[(1)] = (33));

} else {
var statearr_46580_47806 = state_46533__$1;
(statearr_46580_47806[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (25))){
var inst_46476 = (state_46533[(10)]);
var inst_46475 = (state_46533[(20)]);
var inst_46478 = (inst_46476 < inst_46475);
var inst_46479 = inst_46478;
var state_46533__$1 = state_46533;
if(cljs.core.truth_(inst_46479)){
var statearr_46581_47807 = state_46533__$1;
(statearr_46581_47807[(1)] = (27));

} else {
var statearr_46582_47808 = state_46533__$1;
(statearr_46582_47808[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (34))){
var state_46533__$1 = state_46533;
var statearr_46583_47809 = state_46533__$1;
(statearr_46583_47809[(2)] = null);

(statearr_46583_47809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (17))){
var state_46533__$1 = state_46533;
var statearr_46584_47811 = state_46533__$1;
(statearr_46584_47811[(2)] = null);

(statearr_46584_47811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (3))){
var inst_46531 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46533__$1,inst_46531);
} else {
if((state_val_46534 === (12))){
var inst_46460 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46585_47815 = state_46533__$1;
(statearr_46585_47815[(2)] = inst_46460);

(statearr_46585_47815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (2))){
var state_46533__$1 = state_46533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46533__$1,(4),ch);
} else {
if((state_val_46534 === (23))){
var state_46533__$1 = state_46533;
var statearr_46586_47818 = state_46533__$1;
(statearr_46586_47818[(2)] = null);

(statearr_46586_47818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (35))){
var inst_46515 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46587_47821 = state_46533__$1;
(statearr_46587_47821[(2)] = inst_46515);

(statearr_46587_47821[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (19))){
var inst_46432 = (state_46533[(7)]);
var inst_46436 = cljs.core.chunk_first(inst_46432);
var inst_46437 = cljs.core.chunk_rest(inst_46432);
var inst_46438 = cljs.core.count(inst_46436);
var inst_46410 = inst_46437;
var inst_46411 = inst_46436;
var inst_46412 = inst_46438;
var inst_46413 = (0);
var state_46533__$1 = (function (){var statearr_46588 = state_46533;
(statearr_46588[(13)] = inst_46410);

(statearr_46588[(14)] = inst_46413);

(statearr_46588[(15)] = inst_46411);

(statearr_46588[(17)] = inst_46412);

return statearr_46588;
})();
var statearr_46589_47825 = state_46533__$1;
(statearr_46589_47825[(2)] = null);

(statearr_46589_47825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (11))){
var inst_46410 = (state_46533[(13)]);
var inst_46432 = (state_46533[(7)]);
var inst_46432__$1 = cljs.core.seq(inst_46410);
var state_46533__$1 = (function (){var statearr_46590 = state_46533;
(statearr_46590[(7)] = inst_46432__$1);

return statearr_46590;
})();
if(inst_46432__$1){
var statearr_46591_47832 = state_46533__$1;
(statearr_46591_47832[(1)] = (16));

} else {
var statearr_46592_47837 = state_46533__$1;
(statearr_46592_47837[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (9))){
var inst_46462 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46593_47838 = state_46533__$1;
(statearr_46593_47838[(2)] = inst_46462);

(statearr_46593_47838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (5))){
var inst_46408 = cljs.core.deref(cs);
var inst_46409 = cljs.core.seq(inst_46408);
var inst_46410 = inst_46409;
var inst_46411 = null;
var inst_46412 = (0);
var inst_46413 = (0);
var state_46533__$1 = (function (){var statearr_46594 = state_46533;
(statearr_46594[(13)] = inst_46410);

(statearr_46594[(14)] = inst_46413);

(statearr_46594[(15)] = inst_46411);

(statearr_46594[(17)] = inst_46412);

return statearr_46594;
})();
var statearr_46595_47839 = state_46533__$1;
(statearr_46595_47839[(2)] = null);

(statearr_46595_47839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (14))){
var state_46533__$1 = state_46533;
var statearr_46596_47840 = state_46533__$1;
(statearr_46596_47840[(2)] = null);

(statearr_46596_47840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (45))){
var inst_46523 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46597_47841 = state_46533__$1;
(statearr_46597_47841[(2)] = inst_46523);

(statearr_46597_47841[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (26))){
var inst_46465 = (state_46533[(29)]);
var inst_46519 = (state_46533[(2)]);
var inst_46520 = cljs.core.seq(inst_46465);
var state_46533__$1 = (function (){var statearr_46598 = state_46533;
(statearr_46598[(31)] = inst_46519);

return statearr_46598;
})();
if(inst_46520){
var statearr_46599_47842 = state_46533__$1;
(statearr_46599_47842[(1)] = (42));

} else {
var statearr_46600_47843 = state_46533__$1;
(statearr_46600_47843[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (16))){
var inst_46432 = (state_46533[(7)]);
var inst_46434 = cljs.core.chunked_seq_QMARK_(inst_46432);
var state_46533__$1 = state_46533;
if(inst_46434){
var statearr_46601_47844 = state_46533__$1;
(statearr_46601_47844[(1)] = (19));

} else {
var statearr_46602_47845 = state_46533__$1;
(statearr_46602_47845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (38))){
var inst_46512 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46603_47846 = state_46533__$1;
(statearr_46603_47846[(2)] = inst_46512);

(statearr_46603_47846[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (30))){
var state_46533__$1 = state_46533;
var statearr_46604_47847 = state_46533__$1;
(statearr_46604_47847[(2)] = null);

(statearr_46604_47847[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (10))){
var inst_46413 = (state_46533[(14)]);
var inst_46411 = (state_46533[(15)]);
var inst_46421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46411,inst_46413);
var inst_46422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46421,(0),null);
var inst_46423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46421,(1),null);
var state_46533__$1 = (function (){var statearr_46605 = state_46533;
(statearr_46605[(26)] = inst_46422);

return statearr_46605;
})();
if(cljs.core.truth_(inst_46423)){
var statearr_46606_47854 = state_46533__$1;
(statearr_46606_47854[(1)] = (13));

} else {
var statearr_46607_47855 = state_46533__$1;
(statearr_46607_47855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (18))){
var inst_46458 = (state_46533[(2)]);
var state_46533__$1 = state_46533;
var statearr_46608_47856 = state_46533__$1;
(statearr_46608_47856[(2)] = inst_46458);

(statearr_46608_47856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (42))){
var state_46533__$1 = state_46533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46533__$1,(45),dchan);
} else {
if((state_val_46534 === (37))){
var inst_46492 = (state_46533[(25)]);
var inst_46401 = (state_46533[(12)]);
var inst_46501 = (state_46533[(23)]);
var inst_46501__$1 = cljs.core.first(inst_46492);
var inst_46502 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46501__$1,inst_46401,done);
var state_46533__$1 = (function (){var statearr_46609 = state_46533;
(statearr_46609[(23)] = inst_46501__$1);

return statearr_46609;
})();
if(cljs.core.truth_(inst_46502)){
var statearr_46610_47857 = state_46533__$1;
(statearr_46610_47857[(1)] = (39));

} else {
var statearr_46611_47858 = state_46533__$1;
(statearr_46611_47858[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46534 === (8))){
var inst_46413 = (state_46533[(14)]);
var inst_46412 = (state_46533[(17)]);
var inst_46415 = (inst_46413 < inst_46412);
var inst_46416 = inst_46415;
var state_46533__$1 = state_46533;
if(cljs.core.truth_(inst_46416)){
var statearr_46612_47859 = state_46533__$1;
(statearr_46612_47859[(1)] = (10));

} else {
var statearr_46613_47860 = state_46533__$1;
(statearr_46613_47860[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45871__auto__ = null;
var cljs$core$async$mult_$_state_machine__45871__auto____0 = (function (){
var statearr_46614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46614[(0)] = cljs$core$async$mult_$_state_machine__45871__auto__);

(statearr_46614[(1)] = (1));

return statearr_46614;
});
var cljs$core$async$mult_$_state_machine__45871__auto____1 = (function (state_46533){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46533);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46615){if((e46615 instanceof Object)){
var ex__45874__auto__ = e46615;
var statearr_46616_47867 = state_46533;
(statearr_46616_47867[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47868 = state_46533;
state_46533 = G__47868;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45871__auto__ = function(state_46533){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45871__auto____1.call(this,state_46533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45871__auto____0;
cljs$core$async$mult_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45871__auto____1;
return cljs$core$async$mult_$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46617 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46617[(6)] = c__45938__auto___47761);

return statearr_46617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
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
var G__46619 = arguments.length;
switch (G__46619) {
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
var len__4789__auto___47876 = arguments.length;
var i__4790__auto___47877 = (0);
while(true){
if((i__4790__auto___47877 < len__4789__auto___47876)){
args__4795__auto__.push((arguments[i__4790__auto___47877]));

var G__47878 = (i__4790__auto___47877 + (1));
i__4790__auto___47877 = G__47878;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46624){
var map__46625 = p__46624;
var map__46625__$1 = (((((!((map__46625 == null))))?(((((map__46625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46625):map__46625);
var opts = map__46625__$1;
var statearr_46627_47879 = state;
(statearr_46627_47879[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46628_47880 = state;
(statearr_46628_47880[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46629_47881 = state;
(statearr_46629_47881[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46620){
var G__46621 = cljs.core.first(seq46620);
var seq46620__$1 = cljs.core.next(seq46620);
var G__46622 = cljs.core.first(seq46620__$1);
var seq46620__$2 = cljs.core.next(seq46620__$1);
var G__46623 = cljs.core.first(seq46620__$2);
var seq46620__$3 = cljs.core.next(seq46620__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46621,G__46622,G__46623,seq46620__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46630 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46631){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46631 = meta46631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46632,meta46631__$1){
var self__ = this;
var _46632__$1 = this;
return (new cljs.core.async.t_cljs$core$async46630(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46631__$1));
}));

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46632){
var self__ = this;
var _46632__$1 = this;
return self__.meta46631;
}));

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46630.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46631","meta46631",1378958159,null)], null);
}));

(cljs.core.async.t_cljs$core$async46630.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46630");

(cljs.core.async.t_cljs$core$async46630.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46630");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46630.
 */
cljs.core.async.__GT_t_cljs$core$async46630 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46630(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46631){
return (new cljs.core.async.t_cljs$core$async46630(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46631));
});

}

return (new cljs.core.async.t_cljs$core$async46630(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45938__auto___47888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46734){
var state_val_46735 = (state_46734[(1)]);
if((state_val_46735 === (7))){
var inst_46649 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
var statearr_46736_47891 = state_46734__$1;
(statearr_46736_47891[(2)] = inst_46649);

(statearr_46736_47891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (20))){
var inst_46661 = (state_46734[(7)]);
var state_46734__$1 = state_46734;
var statearr_46737_47892 = state_46734__$1;
(statearr_46737_47892[(2)] = inst_46661);

(statearr_46737_47892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (27))){
var state_46734__$1 = state_46734;
var statearr_46738_47893 = state_46734__$1;
(statearr_46738_47893[(2)] = null);

(statearr_46738_47893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (1))){
var inst_46636 = (state_46734[(8)]);
var inst_46636__$1 = calc_state();
var inst_46638 = (inst_46636__$1 == null);
var inst_46639 = cljs.core.not(inst_46638);
var state_46734__$1 = (function (){var statearr_46739 = state_46734;
(statearr_46739[(8)] = inst_46636__$1);

return statearr_46739;
})();
if(inst_46639){
var statearr_46740_47896 = state_46734__$1;
(statearr_46740_47896[(1)] = (2));

} else {
var statearr_46741_47897 = state_46734__$1;
(statearr_46741_47897[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (24))){
var inst_46694 = (state_46734[(9)]);
var inst_46708 = (state_46734[(10)]);
var inst_46685 = (state_46734[(11)]);
var inst_46708__$1 = (inst_46685.cljs$core$IFn$_invoke$arity$1 ? inst_46685.cljs$core$IFn$_invoke$arity$1(inst_46694) : inst_46685.call(null,inst_46694));
var state_46734__$1 = (function (){var statearr_46742 = state_46734;
(statearr_46742[(10)] = inst_46708__$1);

return statearr_46742;
})();
if(cljs.core.truth_(inst_46708__$1)){
var statearr_46743_47898 = state_46734__$1;
(statearr_46743_47898[(1)] = (29));

} else {
var statearr_46744_47899 = state_46734__$1;
(statearr_46744_47899[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (4))){
var inst_46652 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
if(cljs.core.truth_(inst_46652)){
var statearr_46745_47900 = state_46734__$1;
(statearr_46745_47900[(1)] = (8));

} else {
var statearr_46746_47901 = state_46734__$1;
(statearr_46746_47901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (15))){
var inst_46679 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
if(cljs.core.truth_(inst_46679)){
var statearr_46747_47903 = state_46734__$1;
(statearr_46747_47903[(1)] = (19));

} else {
var statearr_46748_47905 = state_46734__$1;
(statearr_46748_47905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (21))){
var inst_46684 = (state_46734[(12)]);
var inst_46684__$1 = (state_46734[(2)]);
var inst_46685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46684__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46684__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46684__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46734__$1 = (function (){var statearr_46749 = state_46734;
(statearr_46749[(13)] = inst_46686);

(statearr_46749[(11)] = inst_46685);

(statearr_46749[(12)] = inst_46684__$1);

return statearr_46749;
})();
return cljs.core.async.ioc_alts_BANG_(state_46734__$1,(22),inst_46687);
} else {
if((state_val_46735 === (31))){
var inst_46716 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
if(cljs.core.truth_(inst_46716)){
var statearr_46750_47906 = state_46734__$1;
(statearr_46750_47906[(1)] = (32));

} else {
var statearr_46751_47907 = state_46734__$1;
(statearr_46751_47907[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (32))){
var inst_46693 = (state_46734[(14)]);
var state_46734__$1 = state_46734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46734__$1,(35),out,inst_46693);
} else {
if((state_val_46735 === (33))){
var inst_46684 = (state_46734[(12)]);
var inst_46661 = inst_46684;
var state_46734__$1 = (function (){var statearr_46752 = state_46734;
(statearr_46752[(7)] = inst_46661);

return statearr_46752;
})();
var statearr_46753_47908 = state_46734__$1;
(statearr_46753_47908[(2)] = null);

(statearr_46753_47908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (13))){
var inst_46661 = (state_46734[(7)]);
var inst_46668 = inst_46661.cljs$lang$protocol_mask$partition0$;
var inst_46669 = (inst_46668 & (64));
var inst_46670 = inst_46661.cljs$core$ISeq$;
var inst_46671 = (cljs.core.PROTOCOL_SENTINEL === inst_46670);
var inst_46672 = ((inst_46669) || (inst_46671));
var state_46734__$1 = state_46734;
if(cljs.core.truth_(inst_46672)){
var statearr_46754_47909 = state_46734__$1;
(statearr_46754_47909[(1)] = (16));

} else {
var statearr_46755_47910 = state_46734__$1;
(statearr_46755_47910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (22))){
var inst_46694 = (state_46734[(9)]);
var inst_46693 = (state_46734[(14)]);
var inst_46692 = (state_46734[(2)]);
var inst_46693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46692,(0),null);
var inst_46694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46692,(1),null);
var inst_46695 = (inst_46693__$1 == null);
var inst_46696 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46694__$1,change);
var inst_46697 = ((inst_46695) || (inst_46696));
var state_46734__$1 = (function (){var statearr_46756 = state_46734;
(statearr_46756[(9)] = inst_46694__$1);

(statearr_46756[(14)] = inst_46693__$1);

return statearr_46756;
})();
if(cljs.core.truth_(inst_46697)){
var statearr_46757_47911 = state_46734__$1;
(statearr_46757_47911[(1)] = (23));

} else {
var statearr_46758_47912 = state_46734__$1;
(statearr_46758_47912[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (36))){
var inst_46684 = (state_46734[(12)]);
var inst_46661 = inst_46684;
var state_46734__$1 = (function (){var statearr_46759 = state_46734;
(statearr_46759[(7)] = inst_46661);

return statearr_46759;
})();
var statearr_46760_47913 = state_46734__$1;
(statearr_46760_47913[(2)] = null);

(statearr_46760_47913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (29))){
var inst_46708 = (state_46734[(10)]);
var state_46734__$1 = state_46734;
var statearr_46761_47915 = state_46734__$1;
(statearr_46761_47915[(2)] = inst_46708);

(statearr_46761_47915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (6))){
var state_46734__$1 = state_46734;
var statearr_46762_47917 = state_46734__$1;
(statearr_46762_47917[(2)] = false);

(statearr_46762_47917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (28))){
var inst_46704 = (state_46734[(2)]);
var inst_46705 = calc_state();
var inst_46661 = inst_46705;
var state_46734__$1 = (function (){var statearr_46763 = state_46734;
(statearr_46763[(7)] = inst_46661);

(statearr_46763[(15)] = inst_46704);

return statearr_46763;
})();
var statearr_46764_47918 = state_46734__$1;
(statearr_46764_47918[(2)] = null);

(statearr_46764_47918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (25))){
var inst_46730 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
var statearr_46765_47919 = state_46734__$1;
(statearr_46765_47919[(2)] = inst_46730);

(statearr_46765_47919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (34))){
var inst_46728 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
var statearr_46766_47920 = state_46734__$1;
(statearr_46766_47920[(2)] = inst_46728);

(statearr_46766_47920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (17))){
var state_46734__$1 = state_46734;
var statearr_46767_47921 = state_46734__$1;
(statearr_46767_47921[(2)] = false);

(statearr_46767_47921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (3))){
var state_46734__$1 = state_46734;
var statearr_46768_47922 = state_46734__$1;
(statearr_46768_47922[(2)] = false);

(statearr_46768_47922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (12))){
var inst_46732 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46734__$1,inst_46732);
} else {
if((state_val_46735 === (2))){
var inst_46636 = (state_46734[(8)]);
var inst_46641 = inst_46636.cljs$lang$protocol_mask$partition0$;
var inst_46642 = (inst_46641 & (64));
var inst_46643 = inst_46636.cljs$core$ISeq$;
var inst_46644 = (cljs.core.PROTOCOL_SENTINEL === inst_46643);
var inst_46645 = ((inst_46642) || (inst_46644));
var state_46734__$1 = state_46734;
if(cljs.core.truth_(inst_46645)){
var statearr_46769_47923 = state_46734__$1;
(statearr_46769_47923[(1)] = (5));

} else {
var statearr_46770_47924 = state_46734__$1;
(statearr_46770_47924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (23))){
var inst_46693 = (state_46734[(14)]);
var inst_46699 = (inst_46693 == null);
var state_46734__$1 = state_46734;
if(cljs.core.truth_(inst_46699)){
var statearr_46771_47925 = state_46734__$1;
(statearr_46771_47925[(1)] = (26));

} else {
var statearr_46772_47926 = state_46734__$1;
(statearr_46772_47926[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (35))){
var inst_46719 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
if(cljs.core.truth_(inst_46719)){
var statearr_46773_47927 = state_46734__$1;
(statearr_46773_47927[(1)] = (36));

} else {
var statearr_46774_47928 = state_46734__$1;
(statearr_46774_47928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (19))){
var inst_46661 = (state_46734[(7)]);
var inst_46681 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46661);
var state_46734__$1 = state_46734;
var statearr_46775_47929 = state_46734__$1;
(statearr_46775_47929[(2)] = inst_46681);

(statearr_46775_47929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (11))){
var inst_46661 = (state_46734[(7)]);
var inst_46665 = (inst_46661 == null);
var inst_46666 = cljs.core.not(inst_46665);
var state_46734__$1 = state_46734;
if(inst_46666){
var statearr_46776_47930 = state_46734__$1;
(statearr_46776_47930[(1)] = (13));

} else {
var statearr_46777_47931 = state_46734__$1;
(statearr_46777_47931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (9))){
var inst_46636 = (state_46734[(8)]);
var state_46734__$1 = state_46734;
var statearr_46778_47932 = state_46734__$1;
(statearr_46778_47932[(2)] = inst_46636);

(statearr_46778_47932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (5))){
var state_46734__$1 = state_46734;
var statearr_46779_47933 = state_46734__$1;
(statearr_46779_47933[(2)] = true);

(statearr_46779_47933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (14))){
var state_46734__$1 = state_46734;
var statearr_46780_47934 = state_46734__$1;
(statearr_46780_47934[(2)] = false);

(statearr_46780_47934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (26))){
var inst_46694 = (state_46734[(9)]);
var inst_46701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46694);
var state_46734__$1 = state_46734;
var statearr_46781_47935 = state_46734__$1;
(statearr_46781_47935[(2)] = inst_46701);

(statearr_46781_47935[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (16))){
var state_46734__$1 = state_46734;
var statearr_46782_47937 = state_46734__$1;
(statearr_46782_47937[(2)] = true);

(statearr_46782_47937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (38))){
var inst_46724 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
var statearr_46783_47938 = state_46734__$1;
(statearr_46783_47938[(2)] = inst_46724);

(statearr_46783_47938[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (30))){
var inst_46694 = (state_46734[(9)]);
var inst_46686 = (state_46734[(13)]);
var inst_46685 = (state_46734[(11)]);
var inst_46711 = cljs.core.empty_QMARK_(inst_46685);
var inst_46712 = (inst_46686.cljs$core$IFn$_invoke$arity$1 ? inst_46686.cljs$core$IFn$_invoke$arity$1(inst_46694) : inst_46686.call(null,inst_46694));
var inst_46713 = cljs.core.not(inst_46712);
var inst_46714 = ((inst_46711) && (inst_46713));
var state_46734__$1 = state_46734;
var statearr_46784_47939 = state_46734__$1;
(statearr_46784_47939[(2)] = inst_46714);

(statearr_46784_47939[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (10))){
var inst_46636 = (state_46734[(8)]);
var inst_46657 = (state_46734[(2)]);
var inst_46658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46657,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46657,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46657,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46661 = inst_46636;
var state_46734__$1 = (function (){var statearr_46785 = state_46734;
(statearr_46785[(16)] = inst_46658);

(statearr_46785[(17)] = inst_46660);

(statearr_46785[(7)] = inst_46661);

(statearr_46785[(18)] = inst_46659);

return statearr_46785;
})();
var statearr_46786_47944 = state_46734__$1;
(statearr_46786_47944[(2)] = null);

(statearr_46786_47944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (18))){
var inst_46676 = (state_46734[(2)]);
var state_46734__$1 = state_46734;
var statearr_46787_47945 = state_46734__$1;
(statearr_46787_47945[(2)] = inst_46676);

(statearr_46787_47945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (37))){
var state_46734__$1 = state_46734;
var statearr_46788_47946 = state_46734__$1;
(statearr_46788_47946[(2)] = null);

(statearr_46788_47946[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46735 === (8))){
var inst_46636 = (state_46734[(8)]);
var inst_46654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46636);
var state_46734__$1 = state_46734;
var statearr_46789_47947 = state_46734__$1;
(statearr_46789_47947[(2)] = inst_46654);

(statearr_46789_47947[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__45871__auto__ = null;
var cljs$core$async$mix_$_state_machine__45871__auto____0 = (function (){
var statearr_46790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46790[(0)] = cljs$core$async$mix_$_state_machine__45871__auto__);

(statearr_46790[(1)] = (1));

return statearr_46790;
});
var cljs$core$async$mix_$_state_machine__45871__auto____1 = (function (state_46734){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46734);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46791){if((e46791 instanceof Object)){
var ex__45874__auto__ = e46791;
var statearr_46792_47948 = state_46734;
(statearr_46792_47948[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47949 = state_46734;
state_46734 = G__47949;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45871__auto__ = function(state_46734){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45871__auto____1.call(this,state_46734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45871__auto____0;
cljs$core$async$mix_$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45871__auto____1;
return cljs$core$async$mix_$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46793 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46793[(6)] = c__45938__auto___47888);

return statearr_46793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
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
var G__46795 = arguments.length;
switch (G__46795) {
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
var G__46798 = arguments.length;
switch (G__46798) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46796_SHARP_){
if(cljs.core.truth_((p1__46796_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46796_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46796_SHARP_.call(null,topic)))){
return p1__46796_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46796_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46799 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46800){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46800 = meta46800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46801,meta46800__$1){
var self__ = this;
var _46801__$1 = this;
return (new cljs.core.async.t_cljs$core$async46799(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46800__$1));
}));

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46801){
var self__ = this;
var _46801__$1 = this;
return self__.meta46800;
}));

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46800","meta46800",-1041931293,null)], null);
}));

(cljs.core.async.t_cljs$core$async46799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46799");

(cljs.core.async.t_cljs$core$async46799.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46799.
 */
cljs.core.async.__GT_t_cljs$core$async46799 = (function cljs$core$async$__GT_t_cljs$core$async46799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46800){
return (new cljs.core.async.t_cljs$core$async46799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46800));
});

}

return (new cljs.core.async.t_cljs$core$async46799(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45938__auto___47988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46873){
var state_val_46874 = (state_46873[(1)]);
if((state_val_46874 === (7))){
var inst_46869 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46875_47989 = state_46873__$1;
(statearr_46875_47989[(2)] = inst_46869);

(statearr_46875_47989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (20))){
var state_46873__$1 = state_46873;
var statearr_46876_47990 = state_46873__$1;
(statearr_46876_47990[(2)] = null);

(statearr_46876_47990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (1))){
var state_46873__$1 = state_46873;
var statearr_46877_47991 = state_46873__$1;
(statearr_46877_47991[(2)] = null);

(statearr_46877_47991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (24))){
var inst_46852 = (state_46873[(7)]);
var inst_46861 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46852);
var state_46873__$1 = state_46873;
var statearr_46878_47992 = state_46873__$1;
(statearr_46878_47992[(2)] = inst_46861);

(statearr_46878_47992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (4))){
var inst_46804 = (state_46873[(8)]);
var inst_46804__$1 = (state_46873[(2)]);
var inst_46805 = (inst_46804__$1 == null);
var state_46873__$1 = (function (){var statearr_46879 = state_46873;
(statearr_46879[(8)] = inst_46804__$1);

return statearr_46879;
})();
if(cljs.core.truth_(inst_46805)){
var statearr_46880_47997 = state_46873__$1;
(statearr_46880_47997[(1)] = (5));

} else {
var statearr_46881_47998 = state_46873__$1;
(statearr_46881_47998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (15))){
var inst_46846 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46882_48000 = state_46873__$1;
(statearr_46882_48000[(2)] = inst_46846);

(statearr_46882_48000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (21))){
var inst_46866 = (state_46873[(2)]);
var state_46873__$1 = (function (){var statearr_46883 = state_46873;
(statearr_46883[(9)] = inst_46866);

return statearr_46883;
})();
var statearr_46884_48001 = state_46873__$1;
(statearr_46884_48001[(2)] = null);

(statearr_46884_48001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (13))){
var inst_46828 = (state_46873[(10)]);
var inst_46830 = cljs.core.chunked_seq_QMARK_(inst_46828);
var state_46873__$1 = state_46873;
if(inst_46830){
var statearr_46885_48002 = state_46873__$1;
(statearr_46885_48002[(1)] = (16));

} else {
var statearr_46886_48003 = state_46873__$1;
(statearr_46886_48003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (22))){
var inst_46858 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46858)){
var statearr_46887_48005 = state_46873__$1;
(statearr_46887_48005[(1)] = (23));

} else {
var statearr_46888_48006 = state_46873__$1;
(statearr_46888_48006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (6))){
var inst_46852 = (state_46873[(7)]);
var inst_46804 = (state_46873[(8)]);
var inst_46854 = (state_46873[(11)]);
var inst_46852__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46804) : topic_fn.call(null,inst_46804));
var inst_46853 = cljs.core.deref(mults);
var inst_46854__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46853,inst_46852__$1);
var state_46873__$1 = (function (){var statearr_46889 = state_46873;
(statearr_46889[(7)] = inst_46852__$1);

(statearr_46889[(11)] = inst_46854__$1);

return statearr_46889;
})();
if(cljs.core.truth_(inst_46854__$1)){
var statearr_46890_48007 = state_46873__$1;
(statearr_46890_48007[(1)] = (19));

} else {
var statearr_46891_48008 = state_46873__$1;
(statearr_46891_48008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (25))){
var inst_46863 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46892_48009 = state_46873__$1;
(statearr_46892_48009[(2)] = inst_46863);

(statearr_46892_48009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (17))){
var inst_46828 = (state_46873[(10)]);
var inst_46837 = cljs.core.first(inst_46828);
var inst_46838 = cljs.core.async.muxch_STAR_(inst_46837);
var inst_46839 = cljs.core.async.close_BANG_(inst_46838);
var inst_46840 = cljs.core.next(inst_46828);
var inst_46814 = inst_46840;
var inst_46815 = null;
var inst_46816 = (0);
var inst_46817 = (0);
var state_46873__$1 = (function (){var statearr_46893 = state_46873;
(statearr_46893[(12)] = inst_46839);

(statearr_46893[(13)] = inst_46816);

(statearr_46893[(14)] = inst_46817);

(statearr_46893[(15)] = inst_46815);

(statearr_46893[(16)] = inst_46814);

return statearr_46893;
})();
var statearr_46894_48015 = state_46873__$1;
(statearr_46894_48015[(2)] = null);

(statearr_46894_48015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (3))){
var inst_46871 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46873__$1,inst_46871);
} else {
if((state_val_46874 === (12))){
var inst_46848 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46895_48016 = state_46873__$1;
(statearr_46895_48016[(2)] = inst_46848);

(statearr_46895_48016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (2))){
var state_46873__$1 = state_46873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46873__$1,(4),ch);
} else {
if((state_val_46874 === (23))){
var state_46873__$1 = state_46873;
var statearr_46896_48017 = state_46873__$1;
(statearr_46896_48017[(2)] = null);

(statearr_46896_48017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (19))){
var inst_46804 = (state_46873[(8)]);
var inst_46854 = (state_46873[(11)]);
var inst_46856 = cljs.core.async.muxch_STAR_(inst_46854);
var state_46873__$1 = state_46873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46873__$1,(22),inst_46856,inst_46804);
} else {
if((state_val_46874 === (11))){
var inst_46814 = (state_46873[(16)]);
var inst_46828 = (state_46873[(10)]);
var inst_46828__$1 = cljs.core.seq(inst_46814);
var state_46873__$1 = (function (){var statearr_46897 = state_46873;
(statearr_46897[(10)] = inst_46828__$1);

return statearr_46897;
})();
if(inst_46828__$1){
var statearr_46898_48018 = state_46873__$1;
(statearr_46898_48018[(1)] = (13));

} else {
var statearr_46899_48022 = state_46873__$1;
(statearr_46899_48022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (9))){
var inst_46850 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46900_48027 = state_46873__$1;
(statearr_46900_48027[(2)] = inst_46850);

(statearr_46900_48027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (5))){
var inst_46811 = cljs.core.deref(mults);
var inst_46812 = cljs.core.vals(inst_46811);
var inst_46813 = cljs.core.seq(inst_46812);
var inst_46814 = inst_46813;
var inst_46815 = null;
var inst_46816 = (0);
var inst_46817 = (0);
var state_46873__$1 = (function (){var statearr_46901 = state_46873;
(statearr_46901[(13)] = inst_46816);

(statearr_46901[(14)] = inst_46817);

(statearr_46901[(15)] = inst_46815);

(statearr_46901[(16)] = inst_46814);

return statearr_46901;
})();
var statearr_46902_48028 = state_46873__$1;
(statearr_46902_48028[(2)] = null);

(statearr_46902_48028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (14))){
var state_46873__$1 = state_46873;
var statearr_46906_48029 = state_46873__$1;
(statearr_46906_48029[(2)] = null);

(statearr_46906_48029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (16))){
var inst_46828 = (state_46873[(10)]);
var inst_46832 = cljs.core.chunk_first(inst_46828);
var inst_46833 = cljs.core.chunk_rest(inst_46828);
var inst_46834 = cljs.core.count(inst_46832);
var inst_46814 = inst_46833;
var inst_46815 = inst_46832;
var inst_46816 = inst_46834;
var inst_46817 = (0);
var state_46873__$1 = (function (){var statearr_46907 = state_46873;
(statearr_46907[(13)] = inst_46816);

(statearr_46907[(14)] = inst_46817);

(statearr_46907[(15)] = inst_46815);

(statearr_46907[(16)] = inst_46814);

return statearr_46907;
})();
var statearr_46908_48030 = state_46873__$1;
(statearr_46908_48030[(2)] = null);

(statearr_46908_48030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (10))){
var inst_46816 = (state_46873[(13)]);
var inst_46817 = (state_46873[(14)]);
var inst_46815 = (state_46873[(15)]);
var inst_46814 = (state_46873[(16)]);
var inst_46822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46815,inst_46817);
var inst_46823 = cljs.core.async.muxch_STAR_(inst_46822);
var inst_46824 = cljs.core.async.close_BANG_(inst_46823);
var inst_46825 = (inst_46817 + (1));
var tmp46903 = inst_46816;
var tmp46904 = inst_46815;
var tmp46905 = inst_46814;
var inst_46814__$1 = tmp46905;
var inst_46815__$1 = tmp46904;
var inst_46816__$1 = tmp46903;
var inst_46817__$1 = inst_46825;
var state_46873__$1 = (function (){var statearr_46909 = state_46873;
(statearr_46909[(17)] = inst_46824);

(statearr_46909[(13)] = inst_46816__$1);

(statearr_46909[(14)] = inst_46817__$1);

(statearr_46909[(15)] = inst_46815__$1);

(statearr_46909[(16)] = inst_46814__$1);

return statearr_46909;
})();
var statearr_46910_48033 = state_46873__$1;
(statearr_46910_48033[(2)] = null);

(statearr_46910_48033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (18))){
var inst_46843 = (state_46873[(2)]);
var state_46873__$1 = state_46873;
var statearr_46911_48034 = state_46873__$1;
(statearr_46911_48034[(2)] = inst_46843);

(statearr_46911_48034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (8))){
var inst_46816 = (state_46873[(13)]);
var inst_46817 = (state_46873[(14)]);
var inst_46819 = (inst_46817 < inst_46816);
var inst_46820 = inst_46819;
var state_46873__$1 = state_46873;
if(cljs.core.truth_(inst_46820)){
var statearr_46912_48036 = state_46873__$1;
(statearr_46912_48036[(1)] = (10));

} else {
var statearr_46913_48037 = state_46873__$1;
(statearr_46913_48037[(1)] = (11));

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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_46914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46914[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_46914[(1)] = (1));

return statearr_46914;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_46873){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46873);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46915){if((e46915 instanceof Object)){
var ex__45874__auto__ = e46915;
var statearr_46916_48043 = state_46873;
(statearr_46916_48043[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48044 = state_46873;
state_46873 = G__48044;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_46873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_46873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46917 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46917[(6)] = c__45938__auto___47988);

return statearr_46917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
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
var G__46919 = arguments.length;
switch (G__46919) {
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
var G__46921 = arguments.length;
switch (G__46921) {
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
var G__46923 = arguments.length;
switch (G__46923) {
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
var c__45938__auto___48055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_46962){
var state_val_46963 = (state_46962[(1)]);
if((state_val_46963 === (7))){
var state_46962__$1 = state_46962;
var statearr_46964_48056 = state_46962__$1;
(statearr_46964_48056[(2)] = null);

(statearr_46964_48056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (1))){
var state_46962__$1 = state_46962;
var statearr_46965_48057 = state_46962__$1;
(statearr_46965_48057[(2)] = null);

(statearr_46965_48057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (4))){
var inst_46926 = (state_46962[(7)]);
var inst_46928 = (inst_46926 < cnt);
var state_46962__$1 = state_46962;
if(cljs.core.truth_(inst_46928)){
var statearr_46966_48058 = state_46962__$1;
(statearr_46966_48058[(1)] = (6));

} else {
var statearr_46967_48059 = state_46962__$1;
(statearr_46967_48059[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (15))){
var inst_46958 = (state_46962[(2)]);
var state_46962__$1 = state_46962;
var statearr_46968_48060 = state_46962__$1;
(statearr_46968_48060[(2)] = inst_46958);

(statearr_46968_48060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (13))){
var inst_46951 = cljs.core.async.close_BANG_(out);
var state_46962__$1 = state_46962;
var statearr_46969_48061 = state_46962__$1;
(statearr_46969_48061[(2)] = inst_46951);

(statearr_46969_48061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (6))){
var state_46962__$1 = state_46962;
var statearr_46970_48069 = state_46962__$1;
(statearr_46970_48069[(2)] = null);

(statearr_46970_48069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (3))){
var inst_46960 = (state_46962[(2)]);
var state_46962__$1 = state_46962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46962__$1,inst_46960);
} else {
if((state_val_46963 === (12))){
var inst_46948 = (state_46962[(8)]);
var inst_46948__$1 = (state_46962[(2)]);
var inst_46949 = cljs.core.some(cljs.core.nil_QMARK_,inst_46948__$1);
var state_46962__$1 = (function (){var statearr_46971 = state_46962;
(statearr_46971[(8)] = inst_46948__$1);

return statearr_46971;
})();
if(cljs.core.truth_(inst_46949)){
var statearr_46972_48070 = state_46962__$1;
(statearr_46972_48070[(1)] = (13));

} else {
var statearr_46973_48071 = state_46962__$1;
(statearr_46973_48071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (2))){
var inst_46925 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46926 = (0);
var state_46962__$1 = (function (){var statearr_46974 = state_46962;
(statearr_46974[(9)] = inst_46925);

(statearr_46974[(7)] = inst_46926);

return statearr_46974;
})();
var statearr_46975_48072 = state_46962__$1;
(statearr_46975_48072[(2)] = null);

(statearr_46975_48072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (11))){
var inst_46926 = (state_46962[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46962,(10),Object,null,(9));
var inst_46935 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46926) : chs__$1.call(null,inst_46926));
var inst_46936 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46926) : done.call(null,inst_46926));
var inst_46937 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46935,inst_46936);
var state_46962__$1 = state_46962;
var statearr_46976_48074 = state_46962__$1;
(statearr_46976_48074[(2)] = inst_46937);


cljs.core.async.impl.ioc_helpers.process_exception(state_46962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (9))){
var inst_46926 = (state_46962[(7)]);
var inst_46939 = (state_46962[(2)]);
var inst_46940 = (inst_46926 + (1));
var inst_46926__$1 = inst_46940;
var state_46962__$1 = (function (){var statearr_46977 = state_46962;
(statearr_46977[(10)] = inst_46939);

(statearr_46977[(7)] = inst_46926__$1);

return statearr_46977;
})();
var statearr_46978_48075 = state_46962__$1;
(statearr_46978_48075[(2)] = null);

(statearr_46978_48075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (5))){
var inst_46946 = (state_46962[(2)]);
var state_46962__$1 = (function (){var statearr_46979 = state_46962;
(statearr_46979[(11)] = inst_46946);

return statearr_46979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46962__$1,(12),dchan);
} else {
if((state_val_46963 === (14))){
var inst_46948 = (state_46962[(8)]);
var inst_46953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46948);
var state_46962__$1 = state_46962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46962__$1,(16),out,inst_46953);
} else {
if((state_val_46963 === (16))){
var inst_46955 = (state_46962[(2)]);
var state_46962__$1 = (function (){var statearr_46980 = state_46962;
(statearr_46980[(12)] = inst_46955);

return statearr_46980;
})();
var statearr_46981_48077 = state_46962__$1;
(statearr_46981_48077[(2)] = null);

(statearr_46981_48077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (10))){
var inst_46930 = (state_46962[(2)]);
var inst_46931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46962__$1 = (function (){var statearr_46982 = state_46962;
(statearr_46982[(13)] = inst_46930);

return statearr_46982;
})();
var statearr_46983_48078 = state_46962__$1;
(statearr_46983_48078[(2)] = inst_46931);


cljs.core.async.impl.ioc_helpers.process_exception(state_46962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46963 === (8))){
var inst_46944 = (state_46962[(2)]);
var state_46962__$1 = state_46962;
var statearr_46984_48079 = state_46962__$1;
(statearr_46984_48079[(2)] = inst_46944);

(statearr_46984_48079[(1)] = (5));


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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_46985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46985[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_46985[(1)] = (1));

return statearr_46985;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_46962){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_46962);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e46986){if((e46986 instanceof Object)){
var ex__45874__auto__ = e46986;
var statearr_46987_48084 = state_46962;
(statearr_46987_48084[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46986;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48089 = state_46962;
state_46962 = G__48089;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_46962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_46962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_46988 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_46988[(6)] = c__45938__auto___48055);

return statearr_46988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
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
var G__46991 = arguments.length;
switch (G__46991) {
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
var c__45938__auto___48093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_47023){
var state_val_47024 = (state_47023[(1)]);
if((state_val_47024 === (7))){
var inst_47003 = (state_47023[(7)]);
var inst_47002 = (state_47023[(8)]);
var inst_47002__$1 = (state_47023[(2)]);
var inst_47003__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47002__$1,(0),null);
var inst_47004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47002__$1,(1),null);
var inst_47005 = (inst_47003__$1 == null);
var state_47023__$1 = (function (){var statearr_47025 = state_47023;
(statearr_47025[(9)] = inst_47004);

(statearr_47025[(7)] = inst_47003__$1);

(statearr_47025[(8)] = inst_47002__$1);

return statearr_47025;
})();
if(cljs.core.truth_(inst_47005)){
var statearr_47026_48094 = state_47023__$1;
(statearr_47026_48094[(1)] = (8));

} else {
var statearr_47027_48095 = state_47023__$1;
(statearr_47027_48095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (1))){
var inst_46992 = cljs.core.vec(chs);
var inst_46993 = inst_46992;
var state_47023__$1 = (function (){var statearr_47028 = state_47023;
(statearr_47028[(10)] = inst_46993);

return statearr_47028;
})();
var statearr_47029_48096 = state_47023__$1;
(statearr_47029_48096[(2)] = null);

(statearr_47029_48096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (4))){
var inst_46993 = (state_47023[(10)]);
var state_47023__$1 = state_47023;
return cljs.core.async.ioc_alts_BANG_(state_47023__$1,(7),inst_46993);
} else {
if((state_val_47024 === (6))){
var inst_47019 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
var statearr_47030_48097 = state_47023__$1;
(statearr_47030_48097[(2)] = inst_47019);

(statearr_47030_48097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (3))){
var inst_47021 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47023__$1,inst_47021);
} else {
if((state_val_47024 === (2))){
var inst_46993 = (state_47023[(10)]);
var inst_46995 = cljs.core.count(inst_46993);
var inst_46996 = (inst_46995 > (0));
var state_47023__$1 = state_47023;
if(cljs.core.truth_(inst_46996)){
var statearr_47032_48102 = state_47023__$1;
(statearr_47032_48102[(1)] = (4));

} else {
var statearr_47033_48103 = state_47023__$1;
(statearr_47033_48103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (11))){
var inst_46993 = (state_47023[(10)]);
var inst_47012 = (state_47023[(2)]);
var tmp47031 = inst_46993;
var inst_46993__$1 = tmp47031;
var state_47023__$1 = (function (){var statearr_47034 = state_47023;
(statearr_47034[(11)] = inst_47012);

(statearr_47034[(10)] = inst_46993__$1);

return statearr_47034;
})();
var statearr_47035_48104 = state_47023__$1;
(statearr_47035_48104[(2)] = null);

(statearr_47035_48104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (9))){
var inst_47003 = (state_47023[(7)]);
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47023__$1,(11),out,inst_47003);
} else {
if((state_val_47024 === (5))){
var inst_47017 = cljs.core.async.close_BANG_(out);
var state_47023__$1 = state_47023;
var statearr_47036_48105 = state_47023__$1;
(statearr_47036_48105[(2)] = inst_47017);

(statearr_47036_48105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (10))){
var inst_47015 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
var statearr_47037_48106 = state_47023__$1;
(statearr_47037_48106[(2)] = inst_47015);

(statearr_47037_48106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (8))){
var inst_47004 = (state_47023[(9)]);
var inst_47003 = (state_47023[(7)]);
var inst_47002 = (state_47023[(8)]);
var inst_46993 = (state_47023[(10)]);
var inst_47007 = (function (){var cs = inst_46993;
var vec__46998 = inst_47002;
var v = inst_47003;
var c = inst_47004;
return (function (p1__46989_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46989_SHARP_);
});
})();
var inst_47008 = cljs.core.filterv(inst_47007,inst_46993);
var inst_46993__$1 = inst_47008;
var state_47023__$1 = (function (){var statearr_47038 = state_47023;
(statearr_47038[(10)] = inst_46993__$1);

return statearr_47038;
})();
var statearr_47039_48108 = state_47023__$1;
(statearr_47039_48108[(2)] = null);

(statearr_47039_48108[(1)] = (2));


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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_47040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47040[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_47040[(1)] = (1));

return statearr_47040;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_47023){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_47023);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e47041){if((e47041 instanceof Object)){
var ex__45874__auto__ = e47041;
var statearr_47042_48109 = state_47023;
(statearr_47042_48109[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47041;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48111 = state_47023;
state_47023 = G__48111;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_47023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_47023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_47043 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_47043[(6)] = c__45938__auto___48093);

return statearr_47043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
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
var G__47045 = arguments.length;
switch (G__47045) {
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
var c__45938__auto___48121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_47069){
var state_val_47070 = (state_47069[(1)]);
if((state_val_47070 === (7))){
var inst_47051 = (state_47069[(7)]);
var inst_47051__$1 = (state_47069[(2)]);
var inst_47052 = (inst_47051__$1 == null);
var inst_47053 = cljs.core.not(inst_47052);
var state_47069__$1 = (function (){var statearr_47071 = state_47069;
(statearr_47071[(7)] = inst_47051__$1);

return statearr_47071;
})();
if(inst_47053){
var statearr_47072_48131 = state_47069__$1;
(statearr_47072_48131[(1)] = (8));

} else {
var statearr_47073_48132 = state_47069__$1;
(statearr_47073_48132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (1))){
var inst_47046 = (0);
var state_47069__$1 = (function (){var statearr_47074 = state_47069;
(statearr_47074[(8)] = inst_47046);

return statearr_47074;
})();
var statearr_47075_48133 = state_47069__$1;
(statearr_47075_48133[(2)] = null);

(statearr_47075_48133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (4))){
var state_47069__$1 = state_47069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47069__$1,(7),ch);
} else {
if((state_val_47070 === (6))){
var inst_47064 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47076_48134 = state_47069__$1;
(statearr_47076_48134[(2)] = inst_47064);

(statearr_47076_48134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (3))){
var inst_47066 = (state_47069[(2)]);
var inst_47067 = cljs.core.async.close_BANG_(out);
var state_47069__$1 = (function (){var statearr_47077 = state_47069;
(statearr_47077[(9)] = inst_47066);

return statearr_47077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47069__$1,inst_47067);
} else {
if((state_val_47070 === (2))){
var inst_47046 = (state_47069[(8)]);
var inst_47048 = (inst_47046 < n);
var state_47069__$1 = state_47069;
if(cljs.core.truth_(inst_47048)){
var statearr_47078_48135 = state_47069__$1;
(statearr_47078_48135[(1)] = (4));

} else {
var statearr_47079_48136 = state_47069__$1;
(statearr_47079_48136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (11))){
var inst_47046 = (state_47069[(8)]);
var inst_47056 = (state_47069[(2)]);
var inst_47057 = (inst_47046 + (1));
var inst_47046__$1 = inst_47057;
var state_47069__$1 = (function (){var statearr_47080 = state_47069;
(statearr_47080[(10)] = inst_47056);

(statearr_47080[(8)] = inst_47046__$1);

return statearr_47080;
})();
var statearr_47081_48137 = state_47069__$1;
(statearr_47081_48137[(2)] = null);

(statearr_47081_48137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (9))){
var state_47069__$1 = state_47069;
var statearr_47082_48141 = state_47069__$1;
(statearr_47082_48141[(2)] = null);

(statearr_47082_48141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (5))){
var state_47069__$1 = state_47069;
var statearr_47083_48142 = state_47069__$1;
(statearr_47083_48142[(2)] = null);

(statearr_47083_48142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (10))){
var inst_47061 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47084_48143 = state_47069__$1;
(statearr_47084_48143[(2)] = inst_47061);

(statearr_47084_48143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (8))){
var inst_47051 = (state_47069[(7)]);
var state_47069__$1 = state_47069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47069__$1,(11),out,inst_47051);
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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_47085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47085[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_47085[(1)] = (1));

return statearr_47085;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_47069){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_47069);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e47086){if((e47086 instanceof Object)){
var ex__45874__auto__ = e47086;
var statearr_47087_48145 = state_47069;
(statearr_47087_48145[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48149 = state_47069;
state_47069 = G__48149;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_47069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_47069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_47088 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_47088[(6)] = c__45938__auto___48121);

return statearr_47088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47090 = (function (f,ch,meta47091){
this.f = f;
this.ch = ch;
this.meta47091 = meta47091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47092,meta47091__$1){
var self__ = this;
var _47092__$1 = this;
return (new cljs.core.async.t_cljs$core$async47090(self__.f,self__.ch,meta47091__$1));
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47092){
var self__ = this;
var _47092__$1 = this;
return self__.meta47091;
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47093 = (function (f,ch,meta47091,_,fn1,meta47094){
this.f = f;
this.ch = ch;
this.meta47091 = meta47091;
this._ = _;
this.fn1 = fn1;
this.meta47094 = meta47094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47095,meta47094__$1){
var self__ = this;
var _47095__$1 = this;
return (new cljs.core.async.t_cljs$core$async47093(self__.f,self__.ch,self__.meta47091,self__._,self__.fn1,meta47094__$1));
}));

(cljs.core.async.t_cljs$core$async47093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47095){
var self__ = this;
var _47095__$1 = this;
return self__.meta47094;
}));

(cljs.core.async.t_cljs$core$async47093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47089_SHARP_){
var G__47096 = (((p1__47089_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47089_SHARP_) : self__.f.call(null,p1__47089_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47096) : f1.call(null,G__47096));
});
}));

(cljs.core.async.t_cljs$core$async47093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47091","meta47091",-1897576322,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47090","cljs.core.async/t_cljs$core$async47090",1926925179,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47094","meta47094",-1427791552,null)], null);
}));

(cljs.core.async.t_cljs$core$async47093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47093");

(cljs.core.async.t_cljs$core$async47093.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47093.
 */
cljs.core.async.__GT_t_cljs$core$async47093 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47093(f__$1,ch__$1,meta47091__$1,___$2,fn1__$1,meta47094){
return (new cljs.core.async.t_cljs$core$async47093(f__$1,ch__$1,meta47091__$1,___$2,fn1__$1,meta47094));
});

}

return (new cljs.core.async.t_cljs$core$async47093(self__.f,self__.ch,self__.meta47091,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47097 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47097) : self__.f.call(null,G__47097));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47091","meta47091",-1897576322,null)], null);
}));

(cljs.core.async.t_cljs$core$async47090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47090");

(cljs.core.async.t_cljs$core$async47090.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47090.
 */
cljs.core.async.__GT_t_cljs$core$async47090 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47090(f__$1,ch__$1,meta47091){
return (new cljs.core.async.t_cljs$core$async47090(f__$1,ch__$1,meta47091));
});

}

return (new cljs.core.async.t_cljs$core$async47090(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47098 = (function (f,ch,meta47099){
this.f = f;
this.ch = ch;
this.meta47099 = meta47099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47100,meta47099__$1){
var self__ = this;
var _47100__$1 = this;
return (new cljs.core.async.t_cljs$core$async47098(self__.f,self__.ch,meta47099__$1));
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47100){
var self__ = this;
var _47100__$1 = this;
return self__.meta47099;
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47099","meta47099",-233269851,null)], null);
}));

(cljs.core.async.t_cljs$core$async47098.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47098");

(cljs.core.async.t_cljs$core$async47098.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47098");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47098.
 */
cljs.core.async.__GT_t_cljs$core$async47098 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47098(f__$1,ch__$1,meta47099){
return (new cljs.core.async.t_cljs$core$async47098(f__$1,ch__$1,meta47099));
});

}

return (new cljs.core.async.t_cljs$core$async47098(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47101 = (function (p,ch,meta47102){
this.p = p;
this.ch = ch;
this.meta47102 = meta47102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47103,meta47102__$1){
var self__ = this;
var _47103__$1 = this;
return (new cljs.core.async.t_cljs$core$async47101(self__.p,self__.ch,meta47102__$1));
}));

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47103){
var self__ = this;
var _47103__$1 = this;
return self__.meta47102;
}));

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47102","meta47102",35279329,null)], null);
}));

(cljs.core.async.t_cljs$core$async47101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47101");

(cljs.core.async.t_cljs$core$async47101.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47101.
 */
cljs.core.async.__GT_t_cljs$core$async47101 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47101(p__$1,ch__$1,meta47102){
return (new cljs.core.async.t_cljs$core$async47101(p__$1,ch__$1,meta47102));
});

}

return (new cljs.core.async.t_cljs$core$async47101(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47105 = arguments.length;
switch (G__47105) {
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
var c__45938__auto___48175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_47126){
var state_val_47127 = (state_47126[(1)]);
if((state_val_47127 === (7))){
var inst_47122 = (state_47126[(2)]);
var state_47126__$1 = state_47126;
var statearr_47128_48176 = state_47126__$1;
(statearr_47128_48176[(2)] = inst_47122);

(statearr_47128_48176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (1))){
var state_47126__$1 = state_47126;
var statearr_47129_48177 = state_47126__$1;
(statearr_47129_48177[(2)] = null);

(statearr_47129_48177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (4))){
var inst_47108 = (state_47126[(7)]);
var inst_47108__$1 = (state_47126[(2)]);
var inst_47109 = (inst_47108__$1 == null);
var state_47126__$1 = (function (){var statearr_47130 = state_47126;
(statearr_47130[(7)] = inst_47108__$1);

return statearr_47130;
})();
if(cljs.core.truth_(inst_47109)){
var statearr_47131_48178 = state_47126__$1;
(statearr_47131_48178[(1)] = (5));

} else {
var statearr_47132_48179 = state_47126__$1;
(statearr_47132_48179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (6))){
var inst_47108 = (state_47126[(7)]);
var inst_47113 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47108) : p.call(null,inst_47108));
var state_47126__$1 = state_47126;
if(cljs.core.truth_(inst_47113)){
var statearr_47133_48180 = state_47126__$1;
(statearr_47133_48180[(1)] = (8));

} else {
var statearr_47134_48181 = state_47126__$1;
(statearr_47134_48181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (3))){
var inst_47124 = (state_47126[(2)]);
var state_47126__$1 = state_47126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47126__$1,inst_47124);
} else {
if((state_val_47127 === (2))){
var state_47126__$1 = state_47126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47126__$1,(4),ch);
} else {
if((state_val_47127 === (11))){
var inst_47116 = (state_47126[(2)]);
var state_47126__$1 = state_47126;
var statearr_47135_48182 = state_47126__$1;
(statearr_47135_48182[(2)] = inst_47116);

(statearr_47135_48182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (9))){
var state_47126__$1 = state_47126;
var statearr_47136_48183 = state_47126__$1;
(statearr_47136_48183[(2)] = null);

(statearr_47136_48183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (5))){
var inst_47111 = cljs.core.async.close_BANG_(out);
var state_47126__$1 = state_47126;
var statearr_47137_48184 = state_47126__$1;
(statearr_47137_48184[(2)] = inst_47111);

(statearr_47137_48184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (10))){
var inst_47119 = (state_47126[(2)]);
var state_47126__$1 = (function (){var statearr_47138 = state_47126;
(statearr_47138[(8)] = inst_47119);

return statearr_47138;
})();
var statearr_47139_48185 = state_47126__$1;
(statearr_47139_48185[(2)] = null);

(statearr_47139_48185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47127 === (8))){
var inst_47108 = (state_47126[(7)]);
var state_47126__$1 = state_47126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47126__$1,(11),out,inst_47108);
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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_47140 = [null,null,null,null,null,null,null,null,null];
(statearr_47140[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_47140[(1)] = (1));

return statearr_47140;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_47126){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_47126);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e47141){if((e47141 instanceof Object)){
var ex__45874__auto__ = e47141;
var statearr_47142_48186 = state_47126;
(statearr_47142_48186[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48193 = state_47126;
state_47126 = G__48193;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_47126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_47126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_47143 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_47143[(6)] = c__45938__auto___48175);

return statearr_47143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47145 = arguments.length;
switch (G__47145) {
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
var c__45938__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_47207){
var state_val_47208 = (state_47207[(1)]);
if((state_val_47208 === (7))){
var inst_47203 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47209_48198 = state_47207__$1;
(statearr_47209_48198[(2)] = inst_47203);

(statearr_47209_48198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (20))){
var inst_47173 = (state_47207[(7)]);
var inst_47184 = (state_47207[(2)]);
var inst_47185 = cljs.core.next(inst_47173);
var inst_47159 = inst_47185;
var inst_47160 = null;
var inst_47161 = (0);
var inst_47162 = (0);
var state_47207__$1 = (function (){var statearr_47210 = state_47207;
(statearr_47210[(8)] = inst_47160);

(statearr_47210[(9)] = inst_47159);

(statearr_47210[(10)] = inst_47184);

(statearr_47210[(11)] = inst_47162);

(statearr_47210[(12)] = inst_47161);

return statearr_47210;
})();
var statearr_47211_48199 = state_47207__$1;
(statearr_47211_48199[(2)] = null);

(statearr_47211_48199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (1))){
var state_47207__$1 = state_47207;
var statearr_47212_48200 = state_47207__$1;
(statearr_47212_48200[(2)] = null);

(statearr_47212_48200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (4))){
var inst_47148 = (state_47207[(13)]);
var inst_47148__$1 = (state_47207[(2)]);
var inst_47149 = (inst_47148__$1 == null);
var state_47207__$1 = (function (){var statearr_47213 = state_47207;
(statearr_47213[(13)] = inst_47148__$1);

return statearr_47213;
})();
if(cljs.core.truth_(inst_47149)){
var statearr_47214_48206 = state_47207__$1;
(statearr_47214_48206[(1)] = (5));

} else {
var statearr_47215_48207 = state_47207__$1;
(statearr_47215_48207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (15))){
var state_47207__$1 = state_47207;
var statearr_47219_48208 = state_47207__$1;
(statearr_47219_48208[(2)] = null);

(statearr_47219_48208[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (21))){
var state_47207__$1 = state_47207;
var statearr_47220_48209 = state_47207__$1;
(statearr_47220_48209[(2)] = null);

(statearr_47220_48209[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (13))){
var inst_47160 = (state_47207[(8)]);
var inst_47159 = (state_47207[(9)]);
var inst_47162 = (state_47207[(11)]);
var inst_47161 = (state_47207[(12)]);
var inst_47169 = (state_47207[(2)]);
var inst_47170 = (inst_47162 + (1));
var tmp47216 = inst_47160;
var tmp47217 = inst_47159;
var tmp47218 = inst_47161;
var inst_47159__$1 = tmp47217;
var inst_47160__$1 = tmp47216;
var inst_47161__$1 = tmp47218;
var inst_47162__$1 = inst_47170;
var state_47207__$1 = (function (){var statearr_47221 = state_47207;
(statearr_47221[(8)] = inst_47160__$1);

(statearr_47221[(9)] = inst_47159__$1);

(statearr_47221[(11)] = inst_47162__$1);

(statearr_47221[(12)] = inst_47161__$1);

(statearr_47221[(14)] = inst_47169);

return statearr_47221;
})();
var statearr_47222_48211 = state_47207__$1;
(statearr_47222_48211[(2)] = null);

(statearr_47222_48211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (22))){
var state_47207__$1 = state_47207;
var statearr_47223_48213 = state_47207__$1;
(statearr_47223_48213[(2)] = null);

(statearr_47223_48213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (6))){
var inst_47148 = (state_47207[(13)]);
var inst_47157 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47148) : f.call(null,inst_47148));
var inst_47158 = cljs.core.seq(inst_47157);
var inst_47159 = inst_47158;
var inst_47160 = null;
var inst_47161 = (0);
var inst_47162 = (0);
var state_47207__$1 = (function (){var statearr_47224 = state_47207;
(statearr_47224[(8)] = inst_47160);

(statearr_47224[(9)] = inst_47159);

(statearr_47224[(11)] = inst_47162);

(statearr_47224[(12)] = inst_47161);

return statearr_47224;
})();
var statearr_47225_48214 = state_47207__$1;
(statearr_47225_48214[(2)] = null);

(statearr_47225_48214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (17))){
var inst_47173 = (state_47207[(7)]);
var inst_47177 = cljs.core.chunk_first(inst_47173);
var inst_47178 = cljs.core.chunk_rest(inst_47173);
var inst_47179 = cljs.core.count(inst_47177);
var inst_47159 = inst_47178;
var inst_47160 = inst_47177;
var inst_47161 = inst_47179;
var inst_47162 = (0);
var state_47207__$1 = (function (){var statearr_47226 = state_47207;
(statearr_47226[(8)] = inst_47160);

(statearr_47226[(9)] = inst_47159);

(statearr_47226[(11)] = inst_47162);

(statearr_47226[(12)] = inst_47161);

return statearr_47226;
})();
var statearr_47227_48215 = state_47207__$1;
(statearr_47227_48215[(2)] = null);

(statearr_47227_48215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (3))){
var inst_47205 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47207__$1,inst_47205);
} else {
if((state_val_47208 === (12))){
var inst_47193 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47228_48219 = state_47207__$1;
(statearr_47228_48219[(2)] = inst_47193);

(statearr_47228_48219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (2))){
var state_47207__$1 = state_47207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47207__$1,(4),in$);
} else {
if((state_val_47208 === (23))){
var inst_47201 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47229_48226 = state_47207__$1;
(statearr_47229_48226[(2)] = inst_47201);

(statearr_47229_48226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (19))){
var inst_47188 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47230_48228 = state_47207__$1;
(statearr_47230_48228[(2)] = inst_47188);

(statearr_47230_48228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (11))){
var inst_47159 = (state_47207[(9)]);
var inst_47173 = (state_47207[(7)]);
var inst_47173__$1 = cljs.core.seq(inst_47159);
var state_47207__$1 = (function (){var statearr_47231 = state_47207;
(statearr_47231[(7)] = inst_47173__$1);

return statearr_47231;
})();
if(inst_47173__$1){
var statearr_47232_48230 = state_47207__$1;
(statearr_47232_48230[(1)] = (14));

} else {
var statearr_47233_48231 = state_47207__$1;
(statearr_47233_48231[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (9))){
var inst_47195 = (state_47207[(2)]);
var inst_47196 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47207__$1 = (function (){var statearr_47234 = state_47207;
(statearr_47234[(15)] = inst_47195);

return statearr_47234;
})();
if(cljs.core.truth_(inst_47196)){
var statearr_47235_48234 = state_47207__$1;
(statearr_47235_48234[(1)] = (21));

} else {
var statearr_47236_48235 = state_47207__$1;
(statearr_47236_48235[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (5))){
var inst_47151 = cljs.core.async.close_BANG_(out);
var state_47207__$1 = state_47207;
var statearr_47237_48237 = state_47207__$1;
(statearr_47237_48237[(2)] = inst_47151);

(statearr_47237_48237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (14))){
var inst_47173 = (state_47207[(7)]);
var inst_47175 = cljs.core.chunked_seq_QMARK_(inst_47173);
var state_47207__$1 = state_47207;
if(inst_47175){
var statearr_47238_48238 = state_47207__$1;
(statearr_47238_48238[(1)] = (17));

} else {
var statearr_47239_48239 = state_47207__$1;
(statearr_47239_48239[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (16))){
var inst_47191 = (state_47207[(2)]);
var state_47207__$1 = state_47207;
var statearr_47240_48240 = state_47207__$1;
(statearr_47240_48240[(2)] = inst_47191);

(statearr_47240_48240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47208 === (10))){
var inst_47160 = (state_47207[(8)]);
var inst_47162 = (state_47207[(11)]);
var inst_47167 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47160,inst_47162);
var state_47207__$1 = state_47207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47207__$1,(13),out,inst_47167);
} else {
if((state_val_47208 === (18))){
var inst_47173 = (state_47207[(7)]);
var inst_47182 = cljs.core.first(inst_47173);
var state_47207__$1 = state_47207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47207__$1,(20),out,inst_47182);
} else {
if((state_val_47208 === (8))){
var inst_47162 = (state_47207[(11)]);
var inst_47161 = (state_47207[(12)]);
var inst_47164 = (inst_47162 < inst_47161);
var inst_47165 = inst_47164;
var state_47207__$1 = state_47207;
if(cljs.core.truth_(inst_47165)){
var statearr_47241_48241 = state_47207__$1;
(statearr_47241_48241[(1)] = (10));

} else {
var statearr_47242_48242 = state_47207__$1;
(statearr_47242_48242[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45871__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45871__auto____0 = (function (){
var statearr_47243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47243[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45871__auto__);

(statearr_47243[(1)] = (1));

return statearr_47243;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45871__auto____1 = (function (state_47207){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_47207);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e47244){if((e47244 instanceof Object)){
var ex__45874__auto__ = e47244;
var statearr_47245_48243 = state_47207;
(statearr_47245_48243[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48244 = state_47207;
state_47207 = G__48244;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45871__auto__ = function(state_47207){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45871__auto____1.call(this,state_47207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45871__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45871__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_47246 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_47246[(6)] = c__45938__auto__);

return statearr_47246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));

return c__45938__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47248 = arguments.length;
switch (G__47248) {
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
var G__47250 = arguments.length;
switch (G__47250) {
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
var G__47252 = arguments.length;
switch (G__47252) {
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
var c__45938__auto___48252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_47276){
var state_val_47277 = (state_47276[(1)]);
if((state_val_47277 === (7))){
var inst_47271 = (state_47276[(2)]);
var state_47276__$1 = state_47276;
var statearr_47278_48254 = state_47276__$1;
(statearr_47278_48254[(2)] = inst_47271);

(statearr_47278_48254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47277 === (1))){
var inst_47253 = null;
var state_47276__$1 = (function (){var statearr_47279 = state_47276;
(statearr_47279[(7)] = inst_47253);

return statearr_47279;
})();
var statearr_47280_48255 = state_47276__$1;
(statearr_47280_48255[(2)] = null);

(statearr_47280_48255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47277 === (4))){
var inst_47256 = (state_47276[(8)]);
var inst_47256__$1 = (state_47276[(2)]);
var inst_47257 = (inst_47256__$1 == null);
var inst_47258 = cljs.core.not(inst_47257);
var state_47276__$1 = (function (){var statearr_47281 = state_47276;
(statearr_47281[(8)] = inst_47256__$1);

return statearr_47281;
})();
if(inst_47258){
var statearr_47282_48256 = state_47276__$1;
(statearr_47282_48256[(1)] = (5));

} else {
var statearr_47283_48257 = state_47276__$1;
(statearr_47283_48257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47277 === (6))){
var state_47276__$1 = state_47276;
var statearr_47284_48259 = state_47276__$1;
(statearr_47284_48259[(2)] = null);

(statearr_47284_48259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47277 === (3))){
var inst_47273 = (state_47276[(2)]);
var inst_47274 = cljs.core.async.close_BANG_(out);
var state_47276__$1 = (function (){var statearr_47285 = state_47276;
(statearr_47285[(9)] = inst_47273);

return statearr_47285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47276__$1,inst_47274);
} else {
if((state_val_47277 === (2))){
var state_47276__$1 = state_47276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47276__$1,(4),ch);
} else {
if((state_val_47277 === (11))){
var inst_47256 = (state_47276[(8)]);
var inst_47265 = (state_47276[(2)]);
var inst_47253 = inst_47256;
var state_47276__$1 = (function (){var statearr_47286 = state_47276;
(statearr_47286[(7)] = inst_47253);

(statearr_47286[(10)] = inst_47265);

return statearr_47286;
})();
var statearr_47287_48260 = state_47276__$1;
(statearr_47287_48260[(2)] = null);

(statearr_47287_48260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47277 === (9))){
var inst_47256 = (state_47276[(8)]);
var state_47276__$1 = state_47276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47276__$1,(11),out,inst_47256);
} else {
if((state_val_47277 === (5))){
var inst_47256 = (state_47276[(8)]);
var inst_47253 = (state_47276[(7)]);
var inst_47260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47256,inst_47253);
var state_47276__$1 = state_47276;
if(inst_47260){
var statearr_47289_48261 = state_47276__$1;
(statearr_47289_48261[(1)] = (8));

} else {
var statearr_47290_48262 = state_47276__$1;
(statearr_47290_48262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47277 === (10))){
var inst_47268 = (state_47276[(2)]);
var state_47276__$1 = state_47276;
var statearr_47291_48267 = state_47276__$1;
(statearr_47291_48267[(2)] = inst_47268);

(statearr_47291_48267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47277 === (8))){
var inst_47253 = (state_47276[(7)]);
var tmp47288 = inst_47253;
var inst_47253__$1 = tmp47288;
var state_47276__$1 = (function (){var statearr_47292 = state_47276;
(statearr_47292[(7)] = inst_47253__$1);

return statearr_47292;
})();
var statearr_47293_48272 = state_47276__$1;
(statearr_47293_48272[(2)] = null);

(statearr_47293_48272[(1)] = (2));


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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_47294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47294[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_47294[(1)] = (1));

return statearr_47294;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_47276){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_47276);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e47295){if((e47295 instanceof Object)){
var ex__45874__auto__ = e47295;
var statearr_47296_48286 = state_47276;
(statearr_47296_48286[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48287 = state_47276;
state_47276 = G__48287;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_47276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_47276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_47297 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_47297[(6)] = c__45938__auto___48252);

return statearr_47297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47299 = arguments.length;
switch (G__47299) {
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
var c__45938__auto___48289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_47337){
var state_val_47338 = (state_47337[(1)]);
if((state_val_47338 === (7))){
var inst_47333 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47339_48294 = state_47337__$1;
(statearr_47339_48294[(2)] = inst_47333);

(statearr_47339_48294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (1))){
var inst_47300 = (new Array(n));
var inst_47301 = inst_47300;
var inst_47302 = (0);
var state_47337__$1 = (function (){var statearr_47340 = state_47337;
(statearr_47340[(7)] = inst_47302);

(statearr_47340[(8)] = inst_47301);

return statearr_47340;
})();
var statearr_47341_48299 = state_47337__$1;
(statearr_47341_48299[(2)] = null);

(statearr_47341_48299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (4))){
var inst_47305 = (state_47337[(9)]);
var inst_47305__$1 = (state_47337[(2)]);
var inst_47306 = (inst_47305__$1 == null);
var inst_47307 = cljs.core.not(inst_47306);
var state_47337__$1 = (function (){var statearr_47342 = state_47337;
(statearr_47342[(9)] = inst_47305__$1);

return statearr_47342;
})();
if(inst_47307){
var statearr_47343_48307 = state_47337__$1;
(statearr_47343_48307[(1)] = (5));

} else {
var statearr_47344_48312 = state_47337__$1;
(statearr_47344_48312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (15))){
var inst_47327 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47345_48317 = state_47337__$1;
(statearr_47345_48317[(2)] = inst_47327);

(statearr_47345_48317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (13))){
var state_47337__$1 = state_47337;
var statearr_47346_48318 = state_47337__$1;
(statearr_47346_48318[(2)] = null);

(statearr_47346_48318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (6))){
var inst_47302 = (state_47337[(7)]);
var inst_47323 = (inst_47302 > (0));
var state_47337__$1 = state_47337;
if(cljs.core.truth_(inst_47323)){
var statearr_47347_48319 = state_47337__$1;
(statearr_47347_48319[(1)] = (12));

} else {
var statearr_47348_48327 = state_47337__$1;
(statearr_47348_48327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (3))){
var inst_47335 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47337__$1,inst_47335);
} else {
if((state_val_47338 === (12))){
var inst_47301 = (state_47337[(8)]);
var inst_47325 = cljs.core.vec(inst_47301);
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47337__$1,(15),out,inst_47325);
} else {
if((state_val_47338 === (2))){
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47337__$1,(4),ch);
} else {
if((state_val_47338 === (11))){
var inst_47317 = (state_47337[(2)]);
var inst_47318 = (new Array(n));
var inst_47301 = inst_47318;
var inst_47302 = (0);
var state_47337__$1 = (function (){var statearr_47349 = state_47337;
(statearr_47349[(10)] = inst_47317);

(statearr_47349[(7)] = inst_47302);

(statearr_47349[(8)] = inst_47301);

return statearr_47349;
})();
var statearr_47350_48331 = state_47337__$1;
(statearr_47350_48331[(2)] = null);

(statearr_47350_48331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (9))){
var inst_47301 = (state_47337[(8)]);
var inst_47315 = cljs.core.vec(inst_47301);
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47337__$1,(11),out,inst_47315);
} else {
if((state_val_47338 === (5))){
var inst_47305 = (state_47337[(9)]);
var inst_47302 = (state_47337[(7)]);
var inst_47310 = (state_47337[(11)]);
var inst_47301 = (state_47337[(8)]);
var inst_47309 = (inst_47301[inst_47302] = inst_47305);
var inst_47310__$1 = (inst_47302 + (1));
var inst_47311 = (inst_47310__$1 < n);
var state_47337__$1 = (function (){var statearr_47351 = state_47337;
(statearr_47351[(11)] = inst_47310__$1);

(statearr_47351[(12)] = inst_47309);

return statearr_47351;
})();
if(cljs.core.truth_(inst_47311)){
var statearr_47352_48333 = state_47337__$1;
(statearr_47352_48333[(1)] = (8));

} else {
var statearr_47353_48334 = state_47337__$1;
(statearr_47353_48334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (14))){
var inst_47330 = (state_47337[(2)]);
var inst_47331 = cljs.core.async.close_BANG_(out);
var state_47337__$1 = (function (){var statearr_47355 = state_47337;
(statearr_47355[(13)] = inst_47330);

return statearr_47355;
})();
var statearr_47356_48335 = state_47337__$1;
(statearr_47356_48335[(2)] = inst_47331);

(statearr_47356_48335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (10))){
var inst_47321 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47357_48336 = state_47337__$1;
(statearr_47357_48336[(2)] = inst_47321);

(statearr_47357_48336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (8))){
var inst_47310 = (state_47337[(11)]);
var inst_47301 = (state_47337[(8)]);
var tmp47354 = inst_47301;
var inst_47301__$1 = tmp47354;
var inst_47302 = inst_47310;
var state_47337__$1 = (function (){var statearr_47358 = state_47337;
(statearr_47358[(7)] = inst_47302);

(statearr_47358[(8)] = inst_47301__$1);

return statearr_47358;
})();
var statearr_47359_48337 = state_47337__$1;
(statearr_47359_48337[(2)] = null);

(statearr_47359_48337[(1)] = (2));


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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_47360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47360[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_47360[(1)] = (1));

return statearr_47360;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_47337){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_47337);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e47361){if((e47361 instanceof Object)){
var ex__45874__auto__ = e47361;
var statearr_47362_48339 = state_47337;
(statearr_47362_48339[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48340 = state_47337;
state_47337 = G__48340;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_47337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_47337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_47363 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_47363[(6)] = c__45938__auto___48289);

return statearr_47363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47365 = arguments.length;
switch (G__47365) {
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
var c__45938__auto___48344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_47407){
var state_val_47408 = (state_47407[(1)]);
if((state_val_47408 === (7))){
var inst_47403 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
var statearr_47409_48345 = state_47407__$1;
(statearr_47409_48345[(2)] = inst_47403);

(statearr_47409_48345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (1))){
var inst_47366 = [];
var inst_47367 = inst_47366;
var inst_47368 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47407__$1 = (function (){var statearr_47410 = state_47407;
(statearr_47410[(7)] = inst_47368);

(statearr_47410[(8)] = inst_47367);

return statearr_47410;
})();
var statearr_47411_48346 = state_47407__$1;
(statearr_47411_48346[(2)] = null);

(statearr_47411_48346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (4))){
var inst_47371 = (state_47407[(9)]);
var inst_47371__$1 = (state_47407[(2)]);
var inst_47372 = (inst_47371__$1 == null);
var inst_47373 = cljs.core.not(inst_47372);
var state_47407__$1 = (function (){var statearr_47412 = state_47407;
(statearr_47412[(9)] = inst_47371__$1);

return statearr_47412;
})();
if(inst_47373){
var statearr_47413_48347 = state_47407__$1;
(statearr_47413_48347[(1)] = (5));

} else {
var statearr_47414_48348 = state_47407__$1;
(statearr_47414_48348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (15))){
var inst_47397 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
var statearr_47415_48349 = state_47407__$1;
(statearr_47415_48349[(2)] = inst_47397);

(statearr_47415_48349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (13))){
var state_47407__$1 = state_47407;
var statearr_47416_48350 = state_47407__$1;
(statearr_47416_48350[(2)] = null);

(statearr_47416_48350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (6))){
var inst_47367 = (state_47407[(8)]);
var inst_47392 = inst_47367.length;
var inst_47393 = (inst_47392 > (0));
var state_47407__$1 = state_47407;
if(cljs.core.truth_(inst_47393)){
var statearr_47417_48351 = state_47407__$1;
(statearr_47417_48351[(1)] = (12));

} else {
var statearr_47418_48352 = state_47407__$1;
(statearr_47418_48352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (3))){
var inst_47405 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47407__$1,inst_47405);
} else {
if((state_val_47408 === (12))){
var inst_47367 = (state_47407[(8)]);
var inst_47395 = cljs.core.vec(inst_47367);
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47407__$1,(15),out,inst_47395);
} else {
if((state_val_47408 === (2))){
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47407__$1,(4),ch);
} else {
if((state_val_47408 === (11))){
var inst_47375 = (state_47407[(10)]);
var inst_47371 = (state_47407[(9)]);
var inst_47385 = (state_47407[(2)]);
var inst_47386 = [];
var inst_47387 = inst_47386.push(inst_47371);
var inst_47367 = inst_47386;
var inst_47368 = inst_47375;
var state_47407__$1 = (function (){var statearr_47419 = state_47407;
(statearr_47419[(7)] = inst_47368);

(statearr_47419[(11)] = inst_47385);

(statearr_47419[(12)] = inst_47387);

(statearr_47419[(8)] = inst_47367);

return statearr_47419;
})();
var statearr_47420_48354 = state_47407__$1;
(statearr_47420_48354[(2)] = null);

(statearr_47420_48354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (9))){
var inst_47367 = (state_47407[(8)]);
var inst_47383 = cljs.core.vec(inst_47367);
var state_47407__$1 = state_47407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47407__$1,(11),out,inst_47383);
} else {
if((state_val_47408 === (5))){
var inst_47368 = (state_47407[(7)]);
var inst_47375 = (state_47407[(10)]);
var inst_47371 = (state_47407[(9)]);
var inst_47375__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47371) : f.call(null,inst_47371));
var inst_47376 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47375__$1,inst_47368);
var inst_47377 = cljs.core.keyword_identical_QMARK_(inst_47368,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47378 = ((inst_47376) || (inst_47377));
var state_47407__$1 = (function (){var statearr_47421 = state_47407;
(statearr_47421[(10)] = inst_47375__$1);

return statearr_47421;
})();
if(cljs.core.truth_(inst_47378)){
var statearr_47422_48361 = state_47407__$1;
(statearr_47422_48361[(1)] = (8));

} else {
var statearr_47423_48362 = state_47407__$1;
(statearr_47423_48362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (14))){
var inst_47400 = (state_47407[(2)]);
var inst_47401 = cljs.core.async.close_BANG_(out);
var state_47407__$1 = (function (){var statearr_47425 = state_47407;
(statearr_47425[(13)] = inst_47400);

return statearr_47425;
})();
var statearr_47426_48369 = state_47407__$1;
(statearr_47426_48369[(2)] = inst_47401);

(statearr_47426_48369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (10))){
var inst_47390 = (state_47407[(2)]);
var state_47407__$1 = state_47407;
var statearr_47427_48378 = state_47407__$1;
(statearr_47427_48378[(2)] = inst_47390);

(statearr_47427_48378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47408 === (8))){
var inst_47375 = (state_47407[(10)]);
var inst_47367 = (state_47407[(8)]);
var inst_47371 = (state_47407[(9)]);
var inst_47380 = inst_47367.push(inst_47371);
var tmp47424 = inst_47367;
var inst_47367__$1 = tmp47424;
var inst_47368 = inst_47375;
var state_47407__$1 = (function (){var statearr_47428 = state_47407;
(statearr_47428[(7)] = inst_47368);

(statearr_47428[(8)] = inst_47367__$1);

(statearr_47428[(14)] = inst_47380);

return statearr_47428;
})();
var statearr_47429_48387 = state_47407__$1;
(statearr_47429_48387[(2)] = null);

(statearr_47429_48387[(1)] = (2));


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
var cljs$core$async$state_machine__45871__auto__ = null;
var cljs$core$async$state_machine__45871__auto____0 = (function (){
var statearr_47430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47430[(0)] = cljs$core$async$state_machine__45871__auto__);

(statearr_47430[(1)] = (1));

return statearr_47430;
});
var cljs$core$async$state_machine__45871__auto____1 = (function (state_47407){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_47407);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e47431){if((e47431 instanceof Object)){
var ex__45874__auto__ = e47431;
var statearr_47432_48396 = state_47407;
(statearr_47432_48396[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48398 = state_47407;
state_47407 = G__48398;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
cljs$core$async$state_machine__45871__auto__ = function(state_47407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45871__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45871__auto____1.call(this,state_47407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45871__auto____0;
cljs$core$async$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45871__auto____1;
return cljs$core$async$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_47433 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_47433[(6)] = c__45938__auto___48344);

return statearr_47433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
