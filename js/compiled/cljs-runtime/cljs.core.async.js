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
var G__29521 = arguments.length;
switch (G__29521) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29522 = (function (f,blockable,meta29523){
this.f = f;
this.blockable = blockable;
this.meta29523 = meta29523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29524,meta29523__$1){
var self__ = this;
var _29524__$1 = this;
return (new cljs.core.async.t_cljs$core$async29522(self__.f,self__.blockable,meta29523__$1));
}));

(cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29524){
var self__ = this;
var _29524__$1 = this;
return self__.meta29523;
}));

(cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29523","meta29523",1595565300,null)], null);
}));

(cljs.core.async.t_cljs$core$async29522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29522");

(cljs.core.async.t_cljs$core$async29522.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29522.
 */
cljs.core.async.__GT_t_cljs$core$async29522 = (function cljs$core$async$__GT_t_cljs$core$async29522(f__$1,blockable__$1,meta29523){
return (new cljs.core.async.t_cljs$core$async29522(f__$1,blockable__$1,meta29523));
});

}

return (new cljs.core.async.t_cljs$core$async29522(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29527 = arguments.length;
switch (G__29527) {
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
var G__29529 = arguments.length;
switch (G__29529) {
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
var G__29531 = arguments.length;
switch (G__29531) {
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
var val_30984 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30984) : fn1.call(null,val_30984));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30984) : fn1.call(null,val_30984));
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
var G__29533 = arguments.length;
switch (G__29533) {
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
var n__4666__auto___30994 = n;
var x_30995 = (0);
while(true){
if((x_30995 < n__4666__auto___30994)){
(a[x_30995] = x_30995);

var G__30996 = (x_30995 + (1));
x_30995 = G__30996;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29534 = (function (flag,meta29535){
this.flag = flag;
this.meta29535 = meta29535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29536,meta29535__$1){
var self__ = this;
var _29536__$1 = this;
return (new cljs.core.async.t_cljs$core$async29534(self__.flag,meta29535__$1));
}));

(cljs.core.async.t_cljs$core$async29534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29536){
var self__ = this;
var _29536__$1 = this;
return self__.meta29535;
}));

(cljs.core.async.t_cljs$core$async29534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29535","meta29535",1196936603,null)], null);
}));

(cljs.core.async.t_cljs$core$async29534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29534");

(cljs.core.async.t_cljs$core$async29534.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29534.
 */
cljs.core.async.__GT_t_cljs$core$async29534 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29534(flag__$1,meta29535){
return (new cljs.core.async.t_cljs$core$async29534(flag__$1,meta29535));
});

}

return (new cljs.core.async.t_cljs$core$async29534(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29542 = (function (flag,cb,meta29543){
this.flag = flag;
this.cb = cb;
this.meta29543 = meta29543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29544,meta29543__$1){
var self__ = this;
var _29544__$1 = this;
return (new cljs.core.async.t_cljs$core$async29542(self__.flag,self__.cb,meta29543__$1));
}));

(cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29544){
var self__ = this;
var _29544__$1 = this;
return self__.meta29543;
}));

(cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29543","meta29543",943905890,null)], null);
}));

(cljs.core.async.t_cljs$core$async29542.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29542");

(cljs.core.async.t_cljs$core$async29542.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29542");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29542.
 */
cljs.core.async.__GT_t_cljs$core$async29542 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29542(flag__$1,cb__$1,meta29543){
return (new cljs.core.async.t_cljs$core$async29542(flag__$1,cb__$1,meta29543));
});

}

return (new cljs.core.async.t_cljs$core$async29542(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29548_SHARP_){
var G__29550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29548_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29550) : fret.call(null,G__29550));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29549_SHARP_){
var G__29551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29549_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29551) : fret.call(null,G__29551));
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
var G__31001 = (i + (1));
i = G__31001;
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
var len__4789__auto___31002 = arguments.length;
var i__4790__auto___31003 = (0);
while(true){
if((i__4790__auto___31003 < len__4789__auto___31002)){
args__4795__auto__.push((arguments[i__4790__auto___31003]));

var G__31004 = (i__4790__auto___31003 + (1));
i__4790__auto___31003 = G__31004;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29557){
var map__29558 = p__29557;
var map__29558__$1 = (((((!((map__29558 == null))))?(((((map__29558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29558):map__29558);
var opts = map__29558__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29554){
var G__29555 = cljs.core.first(seq29554);
var seq29554__$1 = cljs.core.next(seq29554);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29555,seq29554__$1);
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
var G__29562 = arguments.length;
switch (G__29562) {
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
var c__29461__auto___31011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29586){
var state_val_29587 = (state_29586[(1)]);
if((state_val_29587 === (7))){
var inst_29582 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29588_31012 = state_29586__$1;
(statearr_29588_31012[(2)] = inst_29582);

(statearr_29588_31012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (1))){
var state_29586__$1 = state_29586;
var statearr_29589_31013 = state_29586__$1;
(statearr_29589_31013[(2)] = null);

(statearr_29589_31013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (4))){
var inst_29565 = (state_29586[(7)]);
var inst_29565__$1 = (state_29586[(2)]);
var inst_29566 = (inst_29565__$1 == null);
var state_29586__$1 = (function (){var statearr_29590 = state_29586;
(statearr_29590[(7)] = inst_29565__$1);

return statearr_29590;
})();
if(cljs.core.truth_(inst_29566)){
var statearr_29591_31017 = state_29586__$1;
(statearr_29591_31017[(1)] = (5));

} else {
var statearr_29592_31018 = state_29586__$1;
(statearr_29592_31018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (13))){
var state_29586__$1 = state_29586;
var statearr_29593_31019 = state_29586__$1;
(statearr_29593_31019[(2)] = null);

(statearr_29593_31019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (6))){
var inst_29565 = (state_29586[(7)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29586__$1,(11),to,inst_29565);
} else {
if((state_val_29587 === (3))){
var inst_29584 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29586__$1,inst_29584);
} else {
if((state_val_29587 === (12))){
var state_29586__$1 = state_29586;
var statearr_29594_31021 = state_29586__$1;
(statearr_29594_31021[(2)] = null);

(statearr_29594_31021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (2))){
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29586__$1,(4),from);
} else {
if((state_val_29587 === (11))){
var inst_29575 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
if(cljs.core.truth_(inst_29575)){
var statearr_29595_31025 = state_29586__$1;
(statearr_29595_31025[(1)] = (12));

} else {
var statearr_29596_31026 = state_29586__$1;
(statearr_29596_31026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (9))){
var state_29586__$1 = state_29586;
var statearr_29597_31027 = state_29586__$1;
(statearr_29597_31027[(2)] = null);

(statearr_29597_31027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (5))){
var state_29586__$1 = state_29586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29598_31028 = state_29586__$1;
(statearr_29598_31028[(1)] = (8));

} else {
var statearr_29599_31029 = state_29586__$1;
(statearr_29599_31029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (14))){
var inst_29580 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29600_31030 = state_29586__$1;
(statearr_29600_31030[(2)] = inst_29580);

(statearr_29600_31030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (10))){
var inst_29572 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29601_31032 = state_29586__$1;
(statearr_29601_31032[(2)] = inst_29572);

(statearr_29601_31032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (8))){
var inst_29569 = cljs.core.async.close_BANG_(to);
var state_29586__$1 = state_29586;
var statearr_29602_31033 = state_29586__$1;
(statearr_29602_31033[(2)] = inst_29569);

(statearr_29602_31033[(1)] = (10));


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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_29603 = [null,null,null,null,null,null,null,null];
(statearr_29603[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_29603[(1)] = (1));

return statearr_29603;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_29586){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29586);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29604){if((e29604 instanceof Object)){
var ex__29397__auto__ = e29604;
var statearr_29605_31034 = state_29586;
(statearr_29605_31034[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31035 = state_29586;
state_29586 = G__31035;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_29586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_29586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29606 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29606[(6)] = c__29461__auto___31011);

return statearr_29606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
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
var process = (function (p__29607){
var vec__29608 = p__29607;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29608,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29608,(1),null);
var job = vec__29608;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29461__auto___31039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29615){
var state_val_29616 = (state_29615[(1)]);
if((state_val_29616 === (1))){
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29615__$1,(2),res,v);
} else {
if((state_val_29616 === (2))){
var inst_29612 = (state_29615[(2)]);
var inst_29613 = cljs.core.async.close_BANG_(res);
var state_29615__$1 = (function (){var statearr_29617 = state_29615;
(statearr_29617[(7)] = inst_29612);

return statearr_29617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29615__$1,inst_29613);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0 = (function (){
var statearr_29618 = [null,null,null,null,null,null,null,null];
(statearr_29618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__);

(statearr_29618[(1)] = (1));

return statearr_29618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1 = (function (state_29615){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29615);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29619){if((e29619 instanceof Object)){
var ex__29397__auto__ = e29619;
var statearr_29620_31040 = state_29615;
(statearr_29620_31040[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31041 = state_29615;
state_29615 = G__31041;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = function(state_29615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1.call(this,state_29615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29621 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29621[(6)] = c__29461__auto___31039);

return statearr_29621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29622){
var vec__29623 = p__29622;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29623,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29623,(1),null);
var job = vec__29623;
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
var n__4666__auto___31042 = n;
var __31043 = (0);
while(true){
if((__31043 < n__4666__auto___31042)){
var G__29626_31044 = type;
var G__29626_31045__$1 = (((G__29626_31044 instanceof cljs.core.Keyword))?G__29626_31044.fqn:null);
switch (G__29626_31045__$1) {
case "compute":
var c__29461__auto___31047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31043,c__29461__auto___31047,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async){
return (function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = ((function (__31043,c__29461__auto___31047,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async){
return (function (state_29639){
var state_val_29640 = (state_29639[(1)]);
if((state_val_29640 === (1))){
var state_29639__$1 = state_29639;
var statearr_29641_31048 = state_29639__$1;
(statearr_29641_31048[(2)] = null);

(statearr_29641_31048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (2))){
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29639__$1,(4),jobs);
} else {
if((state_val_29640 === (3))){
var inst_29637 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29639__$1,inst_29637);
} else {
if((state_val_29640 === (4))){
var inst_29629 = (state_29639[(2)]);
var inst_29630 = process(inst_29629);
var state_29639__$1 = state_29639;
if(cljs.core.truth_(inst_29630)){
var statearr_29642_31049 = state_29639__$1;
(statearr_29642_31049[(1)] = (5));

} else {
var statearr_29643_31050 = state_29639__$1;
(statearr_29643_31050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (5))){
var state_29639__$1 = state_29639;
var statearr_29644_31051 = state_29639__$1;
(statearr_29644_31051[(2)] = null);

(statearr_29644_31051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (6))){
var state_29639__$1 = state_29639;
var statearr_29645_31052 = state_29639__$1;
(statearr_29645_31052[(2)] = null);

(statearr_29645_31052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (7))){
var inst_29635 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
var statearr_29646_31053 = state_29639__$1;
(statearr_29646_31053[(2)] = inst_29635);

(statearr_29646_31053[(1)] = (3));


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
});})(__31043,c__29461__auto___31047,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async))
;
return ((function (__31043,switch__29393__auto__,c__29461__auto___31047,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0 = (function (){
var statearr_29647 = [null,null,null,null,null,null,null];
(statearr_29647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__);

(statearr_29647[(1)] = (1));

return statearr_29647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1 = (function (state_29639){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29639);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29648){if((e29648 instanceof Object)){
var ex__29397__auto__ = e29648;
var statearr_29649_31062 = state_29639;
(statearr_29649_31062[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31063 = state_29639;
state_29639 = G__31063;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = function(state_29639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1.call(this,state_29639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__;
})()
;})(__31043,switch__29393__auto__,c__29461__auto___31047,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async))
})();
var state__29463__auto__ = (function (){var statearr_29650 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29650[(6)] = c__29461__auto___31047);

return statearr_29650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
});})(__31043,c__29461__auto___31047,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async))
);


break;
case "async":
var c__29461__auto___31068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31043,c__29461__auto___31068,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async){
return (function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = ((function (__31043,c__29461__auto___31068,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async){
return (function (state_29663){
var state_val_29664 = (state_29663[(1)]);
if((state_val_29664 === (1))){
var state_29663__$1 = state_29663;
var statearr_29665_31069 = state_29663__$1;
(statearr_29665_31069[(2)] = null);

(statearr_29665_31069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (2))){
var state_29663__$1 = state_29663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29663__$1,(4),jobs);
} else {
if((state_val_29664 === (3))){
var inst_29661 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29663__$1,inst_29661);
} else {
if((state_val_29664 === (4))){
var inst_29653 = (state_29663[(2)]);
var inst_29654 = async(inst_29653);
var state_29663__$1 = state_29663;
if(cljs.core.truth_(inst_29654)){
var statearr_29666_31071 = state_29663__$1;
(statearr_29666_31071[(1)] = (5));

} else {
var statearr_29667_31072 = state_29663__$1;
(statearr_29667_31072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (5))){
var state_29663__$1 = state_29663;
var statearr_29668_31073 = state_29663__$1;
(statearr_29668_31073[(2)] = null);

(statearr_29668_31073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (6))){
var state_29663__$1 = state_29663;
var statearr_29669_31075 = state_29663__$1;
(statearr_29669_31075[(2)] = null);

(statearr_29669_31075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (7))){
var inst_29659 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
var statearr_29670_31076 = state_29663__$1;
(statearr_29670_31076[(2)] = inst_29659);

(statearr_29670_31076[(1)] = (3));


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
});})(__31043,c__29461__auto___31068,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async))
;
return ((function (__31043,switch__29393__auto__,c__29461__auto___31068,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0 = (function (){
var statearr_29671 = [null,null,null,null,null,null,null];
(statearr_29671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__);

(statearr_29671[(1)] = (1));

return statearr_29671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1 = (function (state_29663){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29663);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29672){if((e29672 instanceof Object)){
var ex__29397__auto__ = e29672;
var statearr_29673_31079 = state_29663;
(statearr_29673_31079[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31080 = state_29663;
state_29663 = G__31080;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = function(state_29663){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1.call(this,state_29663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__;
})()
;})(__31043,switch__29393__auto__,c__29461__auto___31068,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async))
})();
var state__29463__auto__ = (function (){var statearr_29674 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29674[(6)] = c__29461__auto___31068);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
});})(__31043,c__29461__auto___31068,G__29626_31044,G__29626_31045__$1,n__4666__auto___31042,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29626_31045__$1)].join('')));

}

var G__31081 = (__31043 + (1));
__31043 = G__31081;
continue;
} else {
}
break;
}

var c__29461__auto___31082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29696){
var state_val_29697 = (state_29696[(1)]);
if((state_val_29697 === (7))){
var inst_29692 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29698_31083 = state_29696__$1;
(statearr_29698_31083[(2)] = inst_29692);

(statearr_29698_31083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (1))){
var state_29696__$1 = state_29696;
var statearr_29699_31084 = state_29696__$1;
(statearr_29699_31084[(2)] = null);

(statearr_29699_31084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (4))){
var inst_29677 = (state_29696[(7)]);
var inst_29677__$1 = (state_29696[(2)]);
var inst_29678 = (inst_29677__$1 == null);
var state_29696__$1 = (function (){var statearr_29700 = state_29696;
(statearr_29700[(7)] = inst_29677__$1);

return statearr_29700;
})();
if(cljs.core.truth_(inst_29678)){
var statearr_29701_31085 = state_29696__$1;
(statearr_29701_31085[(1)] = (5));

} else {
var statearr_29702_31086 = state_29696__$1;
(statearr_29702_31086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (6))){
var inst_29677 = (state_29696[(7)]);
var inst_29682 = (state_29696[(8)]);
var inst_29682__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29684 = [inst_29677,inst_29682__$1];
var inst_29685 = (new cljs.core.PersistentVector(null,2,(5),inst_29683,inst_29684,null));
var state_29696__$1 = (function (){var statearr_29703 = state_29696;
(statearr_29703[(8)] = inst_29682__$1);

return statearr_29703;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29696__$1,(8),jobs,inst_29685);
} else {
if((state_val_29697 === (3))){
var inst_29694 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29696__$1,inst_29694);
} else {
if((state_val_29697 === (2))){
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29696__$1,(4),from);
} else {
if((state_val_29697 === (9))){
var inst_29689 = (state_29696[(2)]);
var state_29696__$1 = (function (){var statearr_29704 = state_29696;
(statearr_29704[(9)] = inst_29689);

return statearr_29704;
})();
var statearr_29705_31087 = state_29696__$1;
(statearr_29705_31087[(2)] = null);

(statearr_29705_31087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (5))){
var inst_29680 = cljs.core.async.close_BANG_(jobs);
var state_29696__$1 = state_29696;
var statearr_29706_31088 = state_29696__$1;
(statearr_29706_31088[(2)] = inst_29680);

(statearr_29706_31088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (8))){
var inst_29682 = (state_29696[(8)]);
var inst_29687 = (state_29696[(2)]);
var state_29696__$1 = (function (){var statearr_29707 = state_29696;
(statearr_29707[(10)] = inst_29687);

return statearr_29707;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29696__$1,(9),results,inst_29682);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0 = (function (){
var statearr_29708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__);

(statearr_29708[(1)] = (1));

return statearr_29708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1 = (function (state_29696){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29696);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29709){if((e29709 instanceof Object)){
var ex__29397__auto__ = e29709;
var statearr_29710_31089 = state_29696;
(statearr_29710_31089[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31090 = state_29696;
state_29696 = G__31090;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = function(state_29696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1.call(this,state_29696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29711 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29711[(6)] = c__29461__auto___31082);

return statearr_29711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));


var c__29461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29749){
var state_val_29750 = (state_29749[(1)]);
if((state_val_29750 === (7))){
var inst_29745 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29751_31091 = state_29749__$1;
(statearr_29751_31091[(2)] = inst_29745);

(statearr_29751_31091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (20))){
var state_29749__$1 = state_29749;
var statearr_29752_31092 = state_29749__$1;
(statearr_29752_31092[(2)] = null);

(statearr_29752_31092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (1))){
var state_29749__$1 = state_29749;
var statearr_29753_31093 = state_29749__$1;
(statearr_29753_31093[(2)] = null);

(statearr_29753_31093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (4))){
var inst_29714 = (state_29749[(7)]);
var inst_29714__$1 = (state_29749[(2)]);
var inst_29715 = (inst_29714__$1 == null);
var state_29749__$1 = (function (){var statearr_29754 = state_29749;
(statearr_29754[(7)] = inst_29714__$1);

return statearr_29754;
})();
if(cljs.core.truth_(inst_29715)){
var statearr_29755_31094 = state_29749__$1;
(statearr_29755_31094[(1)] = (5));

} else {
var statearr_29756_31095 = state_29749__$1;
(statearr_29756_31095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (15))){
var inst_29727 = (state_29749[(8)]);
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29749__$1,(18),to,inst_29727);
} else {
if((state_val_29750 === (21))){
var inst_29740 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29757_31096 = state_29749__$1;
(statearr_29757_31096[(2)] = inst_29740);

(statearr_29757_31096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (13))){
var inst_29742 = (state_29749[(2)]);
var state_29749__$1 = (function (){var statearr_29758 = state_29749;
(statearr_29758[(9)] = inst_29742);

return statearr_29758;
})();
var statearr_29759_31097 = state_29749__$1;
(statearr_29759_31097[(2)] = null);

(statearr_29759_31097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (6))){
var inst_29714 = (state_29749[(7)]);
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29749__$1,(11),inst_29714);
} else {
if((state_val_29750 === (17))){
var inst_29735 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
if(cljs.core.truth_(inst_29735)){
var statearr_29760_31098 = state_29749__$1;
(statearr_29760_31098[(1)] = (19));

} else {
var statearr_29761_31099 = state_29749__$1;
(statearr_29761_31099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (3))){
var inst_29747 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29749__$1,inst_29747);
} else {
if((state_val_29750 === (12))){
var inst_29724 = (state_29749[(10)]);
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29749__$1,(14),inst_29724);
} else {
if((state_val_29750 === (2))){
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29749__$1,(4),results);
} else {
if((state_val_29750 === (19))){
var state_29749__$1 = state_29749;
var statearr_29762_31100 = state_29749__$1;
(statearr_29762_31100[(2)] = null);

(statearr_29762_31100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (11))){
var inst_29724 = (state_29749[(2)]);
var state_29749__$1 = (function (){var statearr_29763 = state_29749;
(statearr_29763[(10)] = inst_29724);

return statearr_29763;
})();
var statearr_29764_31101 = state_29749__$1;
(statearr_29764_31101[(2)] = null);

(statearr_29764_31101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (9))){
var state_29749__$1 = state_29749;
var statearr_29765_31102 = state_29749__$1;
(statearr_29765_31102[(2)] = null);

(statearr_29765_31102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (5))){
var state_29749__$1 = state_29749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29766_31103 = state_29749__$1;
(statearr_29766_31103[(1)] = (8));

} else {
var statearr_29767_31104 = state_29749__$1;
(statearr_29767_31104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (14))){
var inst_29727 = (state_29749[(8)]);
var inst_29727__$1 = (state_29749[(2)]);
var inst_29728 = (inst_29727__$1 == null);
var inst_29729 = cljs.core.not(inst_29728);
var state_29749__$1 = (function (){var statearr_29768 = state_29749;
(statearr_29768[(8)] = inst_29727__$1);

return statearr_29768;
})();
if(inst_29729){
var statearr_29769_31105 = state_29749__$1;
(statearr_29769_31105[(1)] = (15));

} else {
var statearr_29770_31106 = state_29749__$1;
(statearr_29770_31106[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (16))){
var state_29749__$1 = state_29749;
var statearr_29771_31107 = state_29749__$1;
(statearr_29771_31107[(2)] = false);

(statearr_29771_31107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (10))){
var inst_29721 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29772_31108 = state_29749__$1;
(statearr_29772_31108[(2)] = inst_29721);

(statearr_29772_31108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (18))){
var inst_29732 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29773_31109 = state_29749__$1;
(statearr_29773_31109[(2)] = inst_29732);

(statearr_29773_31109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (8))){
var inst_29718 = cljs.core.async.close_BANG_(to);
var state_29749__$1 = state_29749;
var statearr_29774_31110 = state_29749__$1;
(statearr_29774_31110[(2)] = inst_29718);

(statearr_29774_31110[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0 = (function (){
var statearr_29775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__);

(statearr_29775[(1)] = (1));

return statearr_29775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1 = (function (state_29749){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29749);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29776){if((e29776 instanceof Object)){
var ex__29397__auto__ = e29776;
var statearr_29777_31111 = state_29749;
(statearr_29777_31111[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31112 = state_29749;
state_29749 = G__31112;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__ = function(state_29749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1.call(this,state_29749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29778 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29778[(6)] = c__29461__auto__);

return statearr_29778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));

return c__29461__auto__;
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
var G__29780 = arguments.length;
switch (G__29780) {
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
var G__29782 = arguments.length;
switch (G__29782) {
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
var G__29784 = arguments.length;
switch (G__29784) {
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
var c__29461__auto___31116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29810){
var state_val_29811 = (state_29810[(1)]);
if((state_val_29811 === (7))){
var inst_29806 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29812_31117 = state_29810__$1;
(statearr_29812_31117[(2)] = inst_29806);

(statearr_29812_31117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (1))){
var state_29810__$1 = state_29810;
var statearr_29813_31118 = state_29810__$1;
(statearr_29813_31118[(2)] = null);

(statearr_29813_31118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (4))){
var inst_29787 = (state_29810[(7)]);
var inst_29787__$1 = (state_29810[(2)]);
var inst_29788 = (inst_29787__$1 == null);
var state_29810__$1 = (function (){var statearr_29814 = state_29810;
(statearr_29814[(7)] = inst_29787__$1);

return statearr_29814;
})();
if(cljs.core.truth_(inst_29788)){
var statearr_29815_31119 = state_29810__$1;
(statearr_29815_31119[(1)] = (5));

} else {
var statearr_29816_31120 = state_29810__$1;
(statearr_29816_31120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (13))){
var state_29810__$1 = state_29810;
var statearr_29817_31121 = state_29810__$1;
(statearr_29817_31121[(2)] = null);

(statearr_29817_31121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (6))){
var inst_29787 = (state_29810[(7)]);
var inst_29793 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29787) : p.call(null,inst_29787));
var state_29810__$1 = state_29810;
if(cljs.core.truth_(inst_29793)){
var statearr_29818_31122 = state_29810__$1;
(statearr_29818_31122[(1)] = (9));

} else {
var statearr_29819_31123 = state_29810__$1;
(statearr_29819_31123[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (3))){
var inst_29808 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29810__$1,inst_29808);
} else {
if((state_val_29811 === (12))){
var state_29810__$1 = state_29810;
var statearr_29820_31124 = state_29810__$1;
(statearr_29820_31124[(2)] = null);

(statearr_29820_31124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (2))){
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29810__$1,(4),ch);
} else {
if((state_val_29811 === (11))){
var inst_29787 = (state_29810[(7)]);
var inst_29797 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29810__$1,(8),inst_29797,inst_29787);
} else {
if((state_val_29811 === (9))){
var state_29810__$1 = state_29810;
var statearr_29821_31125 = state_29810__$1;
(statearr_29821_31125[(2)] = tc);

(statearr_29821_31125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (5))){
var inst_29790 = cljs.core.async.close_BANG_(tc);
var inst_29791 = cljs.core.async.close_BANG_(fc);
var state_29810__$1 = (function (){var statearr_29822 = state_29810;
(statearr_29822[(8)] = inst_29790);

return statearr_29822;
})();
var statearr_29823_31126 = state_29810__$1;
(statearr_29823_31126[(2)] = inst_29791);

(statearr_29823_31126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (14))){
var inst_29804 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
var statearr_29824_31127 = state_29810__$1;
(statearr_29824_31127[(2)] = inst_29804);

(statearr_29824_31127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (10))){
var state_29810__$1 = state_29810;
var statearr_29825_31128 = state_29810__$1;
(statearr_29825_31128[(2)] = fc);

(statearr_29825_31128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29811 === (8))){
var inst_29799 = (state_29810[(2)]);
var state_29810__$1 = state_29810;
if(cljs.core.truth_(inst_29799)){
var statearr_29826_31129 = state_29810__$1;
(statearr_29826_31129[(1)] = (12));

} else {
var statearr_29827_31130 = state_29810__$1;
(statearr_29827_31130[(1)] = (13));

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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_29828 = [null,null,null,null,null,null,null,null,null];
(statearr_29828[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_29828[(1)] = (1));

return statearr_29828;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_29810){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29810);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29829){if((e29829 instanceof Object)){
var ex__29397__auto__ = e29829;
var statearr_29830_31131 = state_29810;
(statearr_29830_31131[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31132 = state_29810;
state_29810 = G__31132;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_29810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_29810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29831 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29831[(6)] = c__29461__auto___31116);

return statearr_29831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
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
var c__29461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29852){
var state_val_29853 = (state_29852[(1)]);
if((state_val_29853 === (7))){
var inst_29848 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29854_31133 = state_29852__$1;
(statearr_29854_31133[(2)] = inst_29848);

(statearr_29854_31133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (1))){
var inst_29832 = init;
var state_29852__$1 = (function (){var statearr_29855 = state_29852;
(statearr_29855[(7)] = inst_29832);

return statearr_29855;
})();
var statearr_29856_31134 = state_29852__$1;
(statearr_29856_31134[(2)] = null);

(statearr_29856_31134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (4))){
var inst_29835 = (state_29852[(8)]);
var inst_29835__$1 = (state_29852[(2)]);
var inst_29836 = (inst_29835__$1 == null);
var state_29852__$1 = (function (){var statearr_29857 = state_29852;
(statearr_29857[(8)] = inst_29835__$1);

return statearr_29857;
})();
if(cljs.core.truth_(inst_29836)){
var statearr_29858_31135 = state_29852__$1;
(statearr_29858_31135[(1)] = (5));

} else {
var statearr_29859_31136 = state_29852__$1;
(statearr_29859_31136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (6))){
var inst_29832 = (state_29852[(7)]);
var inst_29835 = (state_29852[(8)]);
var inst_29839 = (state_29852[(9)]);
var inst_29839__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29832,inst_29835) : f.call(null,inst_29832,inst_29835));
var inst_29840 = cljs.core.reduced_QMARK_(inst_29839__$1);
var state_29852__$1 = (function (){var statearr_29860 = state_29852;
(statearr_29860[(9)] = inst_29839__$1);

return statearr_29860;
})();
if(inst_29840){
var statearr_29861_31137 = state_29852__$1;
(statearr_29861_31137[(1)] = (8));

} else {
var statearr_29862_31138 = state_29852__$1;
(statearr_29862_31138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (3))){
var inst_29850 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29852__$1,inst_29850);
} else {
if((state_val_29853 === (2))){
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29852__$1,(4),ch);
} else {
if((state_val_29853 === (9))){
var inst_29839 = (state_29852[(9)]);
var inst_29832 = inst_29839;
var state_29852__$1 = (function (){var statearr_29863 = state_29852;
(statearr_29863[(7)] = inst_29832);

return statearr_29863;
})();
var statearr_29864_31139 = state_29852__$1;
(statearr_29864_31139[(2)] = null);

(statearr_29864_31139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (5))){
var inst_29832 = (state_29852[(7)]);
var state_29852__$1 = state_29852;
var statearr_29865_31140 = state_29852__$1;
(statearr_29865_31140[(2)] = inst_29832);

(statearr_29865_31140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (10))){
var inst_29846 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29866_31141 = state_29852__$1;
(statearr_29866_31141[(2)] = inst_29846);

(statearr_29866_31141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (8))){
var inst_29839 = (state_29852[(9)]);
var inst_29842 = cljs.core.deref(inst_29839);
var state_29852__$1 = state_29852;
var statearr_29867_31142 = state_29852__$1;
(statearr_29867_31142[(2)] = inst_29842);

(statearr_29867_31142[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29394__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29394__auto____0 = (function (){
var statearr_29868 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29868[(0)] = cljs$core$async$reduce_$_state_machine__29394__auto__);

(statearr_29868[(1)] = (1));

return statearr_29868;
});
var cljs$core$async$reduce_$_state_machine__29394__auto____1 = (function (state_29852){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29852);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29869){if((e29869 instanceof Object)){
var ex__29397__auto__ = e29869;
var statearr_29870_31143 = state_29852;
(statearr_29870_31143[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31144 = state_29852;
state_29852 = G__31144;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29394__auto__ = function(state_29852){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29394__auto____1.call(this,state_29852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29394__auto____0;
cljs$core$async$reduce_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29394__auto____1;
return cljs$core$async$reduce_$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29871 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29871[(6)] = c__29461__auto__);

return statearr_29871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));

return c__29461__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29877){
var state_val_29878 = (state_29877[(1)]);
if((state_val_29878 === (1))){
var inst_29872 = cljs.core.async.reduce(f__$1,init,ch);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29877__$1,(2),inst_29872);
} else {
if((state_val_29878 === (2))){
var inst_29874 = (state_29877[(2)]);
var inst_29875 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29874) : f__$1.call(null,inst_29874));
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29877__$1,inst_29875);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29394__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29394__auto____0 = (function (){
var statearr_29879 = [null,null,null,null,null,null,null];
(statearr_29879[(0)] = cljs$core$async$transduce_$_state_machine__29394__auto__);

(statearr_29879[(1)] = (1));

return statearr_29879;
});
var cljs$core$async$transduce_$_state_machine__29394__auto____1 = (function (state_29877){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29877);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29880){if((e29880 instanceof Object)){
var ex__29397__auto__ = e29880;
var statearr_29881_31145 = state_29877;
(statearr_29881_31145[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31146 = state_29877;
state_29877 = G__31146;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29394__auto__ = function(state_29877){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29394__auto____1.call(this,state_29877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29394__auto____0;
cljs$core$async$transduce_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29394__auto____1;
return cljs$core$async$transduce_$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29882 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29882[(6)] = c__29461__auto__);

return statearr_29882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));

return c__29461__auto__;
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
var G__29884 = arguments.length;
switch (G__29884) {
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
var c__29461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_29909){
var state_val_29910 = (state_29909[(1)]);
if((state_val_29910 === (7))){
var inst_29891 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
var statearr_29911_31148 = state_29909__$1;
(statearr_29911_31148[(2)] = inst_29891);

(statearr_29911_31148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (1))){
var inst_29885 = cljs.core.seq(coll);
var inst_29886 = inst_29885;
var state_29909__$1 = (function (){var statearr_29912 = state_29909;
(statearr_29912[(7)] = inst_29886);

return statearr_29912;
})();
var statearr_29913_31149 = state_29909__$1;
(statearr_29913_31149[(2)] = null);

(statearr_29913_31149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (4))){
var inst_29886 = (state_29909[(7)]);
var inst_29889 = cljs.core.first(inst_29886);
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29909__$1,(7),ch,inst_29889);
} else {
if((state_val_29910 === (13))){
var inst_29903 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
var statearr_29914_31150 = state_29909__$1;
(statearr_29914_31150[(2)] = inst_29903);

(statearr_29914_31150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (6))){
var inst_29894 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
if(cljs.core.truth_(inst_29894)){
var statearr_29915_31151 = state_29909__$1;
(statearr_29915_31151[(1)] = (8));

} else {
var statearr_29916_31152 = state_29909__$1;
(statearr_29916_31152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (3))){
var inst_29907 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29909__$1,inst_29907);
} else {
if((state_val_29910 === (12))){
var state_29909__$1 = state_29909;
var statearr_29917_31153 = state_29909__$1;
(statearr_29917_31153[(2)] = null);

(statearr_29917_31153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (2))){
var inst_29886 = (state_29909[(7)]);
var state_29909__$1 = state_29909;
if(cljs.core.truth_(inst_29886)){
var statearr_29918_31154 = state_29909__$1;
(statearr_29918_31154[(1)] = (4));

} else {
var statearr_29919_31155 = state_29909__$1;
(statearr_29919_31155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (11))){
var inst_29900 = cljs.core.async.close_BANG_(ch);
var state_29909__$1 = state_29909;
var statearr_29920_31156 = state_29909__$1;
(statearr_29920_31156[(2)] = inst_29900);

(statearr_29920_31156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (9))){
var state_29909__$1 = state_29909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29921_31157 = state_29909__$1;
(statearr_29921_31157[(1)] = (11));

} else {
var statearr_29922_31158 = state_29909__$1;
(statearr_29922_31158[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (5))){
var inst_29886 = (state_29909[(7)]);
var state_29909__$1 = state_29909;
var statearr_29923_31159 = state_29909__$1;
(statearr_29923_31159[(2)] = inst_29886);

(statearr_29923_31159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (10))){
var inst_29905 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
var statearr_29924_31160 = state_29909__$1;
(statearr_29924_31160[(2)] = inst_29905);

(statearr_29924_31160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (8))){
var inst_29886 = (state_29909[(7)]);
var inst_29896 = cljs.core.next(inst_29886);
var inst_29886__$1 = inst_29896;
var state_29909__$1 = (function (){var statearr_29925 = state_29909;
(statearr_29925[(7)] = inst_29886__$1);

return statearr_29925;
})();
var statearr_29926_31161 = state_29909__$1;
(statearr_29926_31161[(2)] = null);

(statearr_29926_31161[(1)] = (2));


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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_29927 = [null,null,null,null,null,null,null,null];
(statearr_29927[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_29927[(1)] = (1));

return statearr_29927;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_29909){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_29909);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e29928){if((e29928 instanceof Object)){
var ex__29397__auto__ = e29928;
var statearr_29929_31162 = state_29909;
(statearr_29929_31162[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31163 = state_29909;
state_29909 = G__31163;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_29909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_29909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_29930 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_29930[(6)] = c__29461__auto__);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));

return c__29461__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29931 = (function (ch,cs,meta29932){
this.ch = ch;
this.cs = cs;
this.meta29932 = meta29932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29933,meta29932__$1){
var self__ = this;
var _29933__$1 = this;
return (new cljs.core.async.t_cljs$core$async29931(self__.ch,self__.cs,meta29932__$1));
}));

(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29933){
var self__ = this;
var _29933__$1 = this;
return self__.meta29932;
}));

(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29932","meta29932",1706670474,null)], null);
}));

(cljs.core.async.t_cljs$core$async29931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29931");

(cljs.core.async.t_cljs$core$async29931.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29931.
 */
cljs.core.async.__GT_t_cljs$core$async29931 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29931(ch__$1,cs__$1,meta29932){
return (new cljs.core.async.t_cljs$core$async29931(ch__$1,cs__$1,meta29932));
});

}

return (new cljs.core.async.t_cljs$core$async29931(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29461__auto___31164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30068){
var state_val_30069 = (state_30068[(1)]);
if((state_val_30069 === (7))){
var inst_30064 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30070_31165 = state_30068__$1;
(statearr_30070_31165[(2)] = inst_30064);

(statearr_30070_31165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (20))){
var inst_29967 = (state_30068[(7)]);
var inst_29979 = cljs.core.first(inst_29967);
var inst_29980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29979,(0),null);
var inst_29981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29979,(1),null);
var state_30068__$1 = (function (){var statearr_30071 = state_30068;
(statearr_30071[(8)] = inst_29980);

return statearr_30071;
})();
if(cljs.core.truth_(inst_29981)){
var statearr_30072_31166 = state_30068__$1;
(statearr_30072_31166[(1)] = (22));

} else {
var statearr_30073_31167 = state_30068__$1;
(statearr_30073_31167[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (27))){
var inst_30011 = (state_30068[(9)]);
var inst_30016 = (state_30068[(10)]);
var inst_30009 = (state_30068[(11)]);
var inst_29936 = (state_30068[(12)]);
var inst_30016__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30009,inst_30011);
var inst_30017 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30016__$1,inst_29936,done);
var state_30068__$1 = (function (){var statearr_30074 = state_30068;
(statearr_30074[(10)] = inst_30016__$1);

return statearr_30074;
})();
if(cljs.core.truth_(inst_30017)){
var statearr_30075_31168 = state_30068__$1;
(statearr_30075_31168[(1)] = (30));

} else {
var statearr_30076_31169 = state_30068__$1;
(statearr_30076_31169[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (1))){
var state_30068__$1 = state_30068;
var statearr_30077_31170 = state_30068__$1;
(statearr_30077_31170[(2)] = null);

(statearr_30077_31170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (24))){
var inst_29967 = (state_30068[(7)]);
var inst_29986 = (state_30068[(2)]);
var inst_29987 = cljs.core.next(inst_29967);
var inst_29945 = inst_29987;
var inst_29946 = null;
var inst_29947 = (0);
var inst_29948 = (0);
var state_30068__$1 = (function (){var statearr_30078 = state_30068;
(statearr_30078[(13)] = inst_29946);

(statearr_30078[(14)] = inst_29947);

(statearr_30078[(15)] = inst_29986);

(statearr_30078[(16)] = inst_29948);

(statearr_30078[(17)] = inst_29945);

return statearr_30078;
})();
var statearr_30079_31171 = state_30068__$1;
(statearr_30079_31171[(2)] = null);

(statearr_30079_31171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (39))){
var state_30068__$1 = state_30068;
var statearr_30083_31172 = state_30068__$1;
(statearr_30083_31172[(2)] = null);

(statearr_30083_31172[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (4))){
var inst_29936 = (state_30068[(12)]);
var inst_29936__$1 = (state_30068[(2)]);
var inst_29937 = (inst_29936__$1 == null);
var state_30068__$1 = (function (){var statearr_30084 = state_30068;
(statearr_30084[(12)] = inst_29936__$1);

return statearr_30084;
})();
if(cljs.core.truth_(inst_29937)){
var statearr_30085_31173 = state_30068__$1;
(statearr_30085_31173[(1)] = (5));

} else {
var statearr_30086_31174 = state_30068__$1;
(statearr_30086_31174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (15))){
var inst_29946 = (state_30068[(13)]);
var inst_29947 = (state_30068[(14)]);
var inst_29948 = (state_30068[(16)]);
var inst_29945 = (state_30068[(17)]);
var inst_29963 = (state_30068[(2)]);
var inst_29964 = (inst_29948 + (1));
var tmp30080 = inst_29946;
var tmp30081 = inst_29947;
var tmp30082 = inst_29945;
var inst_29945__$1 = tmp30082;
var inst_29946__$1 = tmp30080;
var inst_29947__$1 = tmp30081;
var inst_29948__$1 = inst_29964;
var state_30068__$1 = (function (){var statearr_30087 = state_30068;
(statearr_30087[(13)] = inst_29946__$1);

(statearr_30087[(14)] = inst_29947__$1);

(statearr_30087[(16)] = inst_29948__$1);

(statearr_30087[(18)] = inst_29963);

(statearr_30087[(17)] = inst_29945__$1);

return statearr_30087;
})();
var statearr_30088_31175 = state_30068__$1;
(statearr_30088_31175[(2)] = null);

(statearr_30088_31175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (21))){
var inst_29990 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30092_31176 = state_30068__$1;
(statearr_30092_31176[(2)] = inst_29990);

(statearr_30092_31176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (31))){
var inst_30016 = (state_30068[(10)]);
var inst_30020 = done(null);
var inst_30021 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30016);
var state_30068__$1 = (function (){var statearr_30093 = state_30068;
(statearr_30093[(19)] = inst_30020);

return statearr_30093;
})();
var statearr_30094_31180 = state_30068__$1;
(statearr_30094_31180[(2)] = inst_30021);

(statearr_30094_31180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (32))){
var inst_30011 = (state_30068[(9)]);
var inst_30010 = (state_30068[(20)]);
var inst_30008 = (state_30068[(21)]);
var inst_30009 = (state_30068[(11)]);
var inst_30023 = (state_30068[(2)]);
var inst_30024 = (inst_30011 + (1));
var tmp30089 = inst_30010;
var tmp30090 = inst_30008;
var tmp30091 = inst_30009;
var inst_30008__$1 = tmp30090;
var inst_30009__$1 = tmp30091;
var inst_30010__$1 = tmp30089;
var inst_30011__$1 = inst_30024;
var state_30068__$1 = (function (){var statearr_30095 = state_30068;
(statearr_30095[(9)] = inst_30011__$1);

(statearr_30095[(20)] = inst_30010__$1);

(statearr_30095[(21)] = inst_30008__$1);

(statearr_30095[(11)] = inst_30009__$1);

(statearr_30095[(22)] = inst_30023);

return statearr_30095;
})();
var statearr_30096_31188 = state_30068__$1;
(statearr_30096_31188[(2)] = null);

(statearr_30096_31188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (40))){
var inst_30036 = (state_30068[(23)]);
var inst_30040 = done(null);
var inst_30041 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30036);
var state_30068__$1 = (function (){var statearr_30097 = state_30068;
(statearr_30097[(24)] = inst_30040);

return statearr_30097;
})();
var statearr_30098_31189 = state_30068__$1;
(statearr_30098_31189[(2)] = inst_30041);

(statearr_30098_31189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (33))){
var inst_30027 = (state_30068[(25)]);
var inst_30029 = cljs.core.chunked_seq_QMARK_(inst_30027);
var state_30068__$1 = state_30068;
if(inst_30029){
var statearr_30099_31192 = state_30068__$1;
(statearr_30099_31192[(1)] = (36));

} else {
var statearr_30100_31193 = state_30068__$1;
(statearr_30100_31193[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (13))){
var inst_29957 = (state_30068[(26)]);
var inst_29960 = cljs.core.async.close_BANG_(inst_29957);
var state_30068__$1 = state_30068;
var statearr_30101_31196 = state_30068__$1;
(statearr_30101_31196[(2)] = inst_29960);

(statearr_30101_31196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (22))){
var inst_29980 = (state_30068[(8)]);
var inst_29983 = cljs.core.async.close_BANG_(inst_29980);
var state_30068__$1 = state_30068;
var statearr_30102_31197 = state_30068__$1;
(statearr_30102_31197[(2)] = inst_29983);

(statearr_30102_31197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (36))){
var inst_30027 = (state_30068[(25)]);
var inst_30031 = cljs.core.chunk_first(inst_30027);
var inst_30032 = cljs.core.chunk_rest(inst_30027);
var inst_30033 = cljs.core.count(inst_30031);
var inst_30008 = inst_30032;
var inst_30009 = inst_30031;
var inst_30010 = inst_30033;
var inst_30011 = (0);
var state_30068__$1 = (function (){var statearr_30103 = state_30068;
(statearr_30103[(9)] = inst_30011);

(statearr_30103[(20)] = inst_30010);

(statearr_30103[(21)] = inst_30008);

(statearr_30103[(11)] = inst_30009);

return statearr_30103;
})();
var statearr_30104_31200 = state_30068__$1;
(statearr_30104_31200[(2)] = null);

(statearr_30104_31200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (41))){
var inst_30027 = (state_30068[(25)]);
var inst_30043 = (state_30068[(2)]);
var inst_30044 = cljs.core.next(inst_30027);
var inst_30008 = inst_30044;
var inst_30009 = null;
var inst_30010 = (0);
var inst_30011 = (0);
var state_30068__$1 = (function (){var statearr_30105 = state_30068;
(statearr_30105[(9)] = inst_30011);

(statearr_30105[(20)] = inst_30010);

(statearr_30105[(21)] = inst_30008);

(statearr_30105[(11)] = inst_30009);

(statearr_30105[(27)] = inst_30043);

return statearr_30105;
})();
var statearr_30106_31202 = state_30068__$1;
(statearr_30106_31202[(2)] = null);

(statearr_30106_31202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (43))){
var state_30068__$1 = state_30068;
var statearr_30107_31203 = state_30068__$1;
(statearr_30107_31203[(2)] = null);

(statearr_30107_31203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (29))){
var inst_30052 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30108_31204 = state_30068__$1;
(statearr_30108_31204[(2)] = inst_30052);

(statearr_30108_31204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (44))){
var inst_30061 = (state_30068[(2)]);
var state_30068__$1 = (function (){var statearr_30109 = state_30068;
(statearr_30109[(28)] = inst_30061);

return statearr_30109;
})();
var statearr_30110_31205 = state_30068__$1;
(statearr_30110_31205[(2)] = null);

(statearr_30110_31205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (6))){
var inst_30000 = (state_30068[(29)]);
var inst_29999 = cljs.core.deref(cs);
var inst_30000__$1 = cljs.core.keys(inst_29999);
var inst_30001 = cljs.core.count(inst_30000__$1);
var inst_30002 = cljs.core.reset_BANG_(dctr,inst_30001);
var inst_30007 = cljs.core.seq(inst_30000__$1);
var inst_30008 = inst_30007;
var inst_30009 = null;
var inst_30010 = (0);
var inst_30011 = (0);
var state_30068__$1 = (function (){var statearr_30111 = state_30068;
(statearr_30111[(9)] = inst_30011);

(statearr_30111[(20)] = inst_30010);

(statearr_30111[(30)] = inst_30002);

(statearr_30111[(21)] = inst_30008);

(statearr_30111[(11)] = inst_30009);

(statearr_30111[(29)] = inst_30000__$1);

return statearr_30111;
})();
var statearr_30112_31206 = state_30068__$1;
(statearr_30112_31206[(2)] = null);

(statearr_30112_31206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (28))){
var inst_30008 = (state_30068[(21)]);
var inst_30027 = (state_30068[(25)]);
var inst_30027__$1 = cljs.core.seq(inst_30008);
var state_30068__$1 = (function (){var statearr_30113 = state_30068;
(statearr_30113[(25)] = inst_30027__$1);

return statearr_30113;
})();
if(inst_30027__$1){
var statearr_30114_31207 = state_30068__$1;
(statearr_30114_31207[(1)] = (33));

} else {
var statearr_30115_31208 = state_30068__$1;
(statearr_30115_31208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (25))){
var inst_30011 = (state_30068[(9)]);
var inst_30010 = (state_30068[(20)]);
var inst_30013 = (inst_30011 < inst_30010);
var inst_30014 = inst_30013;
var state_30068__$1 = state_30068;
if(cljs.core.truth_(inst_30014)){
var statearr_30116_31209 = state_30068__$1;
(statearr_30116_31209[(1)] = (27));

} else {
var statearr_30117_31210 = state_30068__$1;
(statearr_30117_31210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (34))){
var state_30068__$1 = state_30068;
var statearr_30118_31211 = state_30068__$1;
(statearr_30118_31211[(2)] = null);

(statearr_30118_31211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (17))){
var state_30068__$1 = state_30068;
var statearr_30119_31212 = state_30068__$1;
(statearr_30119_31212[(2)] = null);

(statearr_30119_31212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (3))){
var inst_30066 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30068__$1,inst_30066);
} else {
if((state_val_30069 === (12))){
var inst_29995 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30120_31213 = state_30068__$1;
(statearr_30120_31213[(2)] = inst_29995);

(statearr_30120_31213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (2))){
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30068__$1,(4),ch);
} else {
if((state_val_30069 === (23))){
var state_30068__$1 = state_30068;
var statearr_30121_31214 = state_30068__$1;
(statearr_30121_31214[(2)] = null);

(statearr_30121_31214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (35))){
var inst_30050 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30122_31215 = state_30068__$1;
(statearr_30122_31215[(2)] = inst_30050);

(statearr_30122_31215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (19))){
var inst_29967 = (state_30068[(7)]);
var inst_29971 = cljs.core.chunk_first(inst_29967);
var inst_29972 = cljs.core.chunk_rest(inst_29967);
var inst_29973 = cljs.core.count(inst_29971);
var inst_29945 = inst_29972;
var inst_29946 = inst_29971;
var inst_29947 = inst_29973;
var inst_29948 = (0);
var state_30068__$1 = (function (){var statearr_30123 = state_30068;
(statearr_30123[(13)] = inst_29946);

(statearr_30123[(14)] = inst_29947);

(statearr_30123[(16)] = inst_29948);

(statearr_30123[(17)] = inst_29945);

return statearr_30123;
})();
var statearr_30124_31216 = state_30068__$1;
(statearr_30124_31216[(2)] = null);

(statearr_30124_31216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (11))){
var inst_29967 = (state_30068[(7)]);
var inst_29945 = (state_30068[(17)]);
var inst_29967__$1 = cljs.core.seq(inst_29945);
var state_30068__$1 = (function (){var statearr_30125 = state_30068;
(statearr_30125[(7)] = inst_29967__$1);

return statearr_30125;
})();
if(inst_29967__$1){
var statearr_30126_31217 = state_30068__$1;
(statearr_30126_31217[(1)] = (16));

} else {
var statearr_30127_31218 = state_30068__$1;
(statearr_30127_31218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (9))){
var inst_29997 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30128_31219 = state_30068__$1;
(statearr_30128_31219[(2)] = inst_29997);

(statearr_30128_31219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (5))){
var inst_29943 = cljs.core.deref(cs);
var inst_29944 = cljs.core.seq(inst_29943);
var inst_29945 = inst_29944;
var inst_29946 = null;
var inst_29947 = (0);
var inst_29948 = (0);
var state_30068__$1 = (function (){var statearr_30129 = state_30068;
(statearr_30129[(13)] = inst_29946);

(statearr_30129[(14)] = inst_29947);

(statearr_30129[(16)] = inst_29948);

(statearr_30129[(17)] = inst_29945);

return statearr_30129;
})();
var statearr_30130_31220 = state_30068__$1;
(statearr_30130_31220[(2)] = null);

(statearr_30130_31220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (14))){
var state_30068__$1 = state_30068;
var statearr_30131_31221 = state_30068__$1;
(statearr_30131_31221[(2)] = null);

(statearr_30131_31221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (45))){
var inst_30058 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30132_31222 = state_30068__$1;
(statearr_30132_31222[(2)] = inst_30058);

(statearr_30132_31222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (26))){
var inst_30000 = (state_30068[(29)]);
var inst_30054 = (state_30068[(2)]);
var inst_30055 = cljs.core.seq(inst_30000);
var state_30068__$1 = (function (){var statearr_30133 = state_30068;
(statearr_30133[(31)] = inst_30054);

return statearr_30133;
})();
if(inst_30055){
var statearr_30134_31223 = state_30068__$1;
(statearr_30134_31223[(1)] = (42));

} else {
var statearr_30135_31224 = state_30068__$1;
(statearr_30135_31224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (16))){
var inst_29967 = (state_30068[(7)]);
var inst_29969 = cljs.core.chunked_seq_QMARK_(inst_29967);
var state_30068__$1 = state_30068;
if(inst_29969){
var statearr_30136_31225 = state_30068__$1;
(statearr_30136_31225[(1)] = (19));

} else {
var statearr_30137_31226 = state_30068__$1;
(statearr_30137_31226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (38))){
var inst_30047 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30138_31227 = state_30068__$1;
(statearr_30138_31227[(2)] = inst_30047);

(statearr_30138_31227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (30))){
var state_30068__$1 = state_30068;
var statearr_30139_31228 = state_30068__$1;
(statearr_30139_31228[(2)] = null);

(statearr_30139_31228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (10))){
var inst_29946 = (state_30068[(13)]);
var inst_29948 = (state_30068[(16)]);
var inst_29956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29946,inst_29948);
var inst_29957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29956,(0),null);
var inst_29958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29956,(1),null);
var state_30068__$1 = (function (){var statearr_30140 = state_30068;
(statearr_30140[(26)] = inst_29957);

return statearr_30140;
})();
if(cljs.core.truth_(inst_29958)){
var statearr_30141_31229 = state_30068__$1;
(statearr_30141_31229[(1)] = (13));

} else {
var statearr_30142_31230 = state_30068__$1;
(statearr_30142_31230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (18))){
var inst_29993 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30143_31231 = state_30068__$1;
(statearr_30143_31231[(2)] = inst_29993);

(statearr_30143_31231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (42))){
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30068__$1,(45),dchan);
} else {
if((state_val_30069 === (37))){
var inst_30036 = (state_30068[(23)]);
var inst_30027 = (state_30068[(25)]);
var inst_29936 = (state_30068[(12)]);
var inst_30036__$1 = cljs.core.first(inst_30027);
var inst_30037 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30036__$1,inst_29936,done);
var state_30068__$1 = (function (){var statearr_30144 = state_30068;
(statearr_30144[(23)] = inst_30036__$1);

return statearr_30144;
})();
if(cljs.core.truth_(inst_30037)){
var statearr_30145_31234 = state_30068__$1;
(statearr_30145_31234[(1)] = (39));

} else {
var statearr_30146_31235 = state_30068__$1;
(statearr_30146_31235[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (8))){
var inst_29947 = (state_30068[(14)]);
var inst_29948 = (state_30068[(16)]);
var inst_29950 = (inst_29948 < inst_29947);
var inst_29951 = inst_29950;
var state_30068__$1 = state_30068;
if(cljs.core.truth_(inst_29951)){
var statearr_30147_31238 = state_30068__$1;
(statearr_30147_31238[(1)] = (10));

} else {
var statearr_30148_31239 = state_30068__$1;
(statearr_30148_31239[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29394__auto__ = null;
var cljs$core$async$mult_$_state_machine__29394__auto____0 = (function (){
var statearr_30149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30149[(0)] = cljs$core$async$mult_$_state_machine__29394__auto__);

(statearr_30149[(1)] = (1));

return statearr_30149;
});
var cljs$core$async$mult_$_state_machine__29394__auto____1 = (function (state_30068){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30068);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30150){if((e30150 instanceof Object)){
var ex__29397__auto__ = e30150;
var statearr_30151_31240 = state_30068;
(statearr_30151_31240[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31241 = state_30068;
state_30068 = G__31241;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29394__auto__ = function(state_30068){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29394__auto____1.call(this,state_30068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29394__auto____0;
cljs$core$async$mult_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29394__auto____1;
return cljs$core$async$mult_$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30152 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30152[(6)] = c__29461__auto___31164);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
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
var G__30154 = arguments.length;
switch (G__30154) {
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
var len__4789__auto___31252 = arguments.length;
var i__4790__auto___31253 = (0);
while(true){
if((i__4790__auto___31253 < len__4789__auto___31252)){
args__4795__auto__.push((arguments[i__4790__auto___31253]));

var G__31254 = (i__4790__auto___31253 + (1));
i__4790__auto___31253 = G__31254;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30159){
var map__30160 = p__30159;
var map__30160__$1 = (((((!((map__30160 == null))))?(((((map__30160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30160):map__30160);
var opts = map__30160__$1;
var statearr_30162_31255 = state;
(statearr_30162_31255[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30163_31256 = state;
(statearr_30163_31256[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30164_31257 = state;
(statearr_30164_31257[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30155){
var G__30156 = cljs.core.first(seq30155);
var seq30155__$1 = cljs.core.next(seq30155);
var G__30157 = cljs.core.first(seq30155__$1);
var seq30155__$2 = cljs.core.next(seq30155__$1);
var G__30158 = cljs.core.first(seq30155__$2);
var seq30155__$3 = cljs.core.next(seq30155__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30156,G__30157,G__30158,seq30155__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30165 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30166){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30166 = meta30166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30167,meta30166__$1){
var self__ = this;
var _30167__$1 = this;
return (new cljs.core.async.t_cljs$core$async30165(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30166__$1));
}));

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30167){
var self__ = this;
var _30167__$1 = this;
return self__.meta30166;
}));

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30165.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30166","meta30166",379081707,null)], null);
}));

(cljs.core.async.t_cljs$core$async30165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30165");

(cljs.core.async.t_cljs$core$async30165.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30165.
 */
cljs.core.async.__GT_t_cljs$core$async30165 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30165(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30166){
return (new cljs.core.async.t_cljs$core$async30165(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30166));
});

}

return (new cljs.core.async.t_cljs$core$async30165(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29461__auto___31275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30269){
var state_val_30270 = (state_30269[(1)]);
if((state_val_30270 === (7))){
var inst_30184 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30271_31276 = state_30269__$1;
(statearr_30271_31276[(2)] = inst_30184);

(statearr_30271_31276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (20))){
var inst_30196 = (state_30269[(7)]);
var state_30269__$1 = state_30269;
var statearr_30272_31277 = state_30269__$1;
(statearr_30272_31277[(2)] = inst_30196);

(statearr_30272_31277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (27))){
var state_30269__$1 = state_30269;
var statearr_30273_31278 = state_30269__$1;
(statearr_30273_31278[(2)] = null);

(statearr_30273_31278[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (1))){
var inst_30171 = (state_30269[(8)]);
var inst_30171__$1 = calc_state();
var inst_30173 = (inst_30171__$1 == null);
var inst_30174 = cljs.core.not(inst_30173);
var state_30269__$1 = (function (){var statearr_30274 = state_30269;
(statearr_30274[(8)] = inst_30171__$1);

return statearr_30274;
})();
if(inst_30174){
var statearr_30275_31280 = state_30269__$1;
(statearr_30275_31280[(1)] = (2));

} else {
var statearr_30276_31282 = state_30269__$1;
(statearr_30276_31282[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (24))){
var inst_30243 = (state_30269[(9)]);
var inst_30229 = (state_30269[(10)]);
var inst_30220 = (state_30269[(11)]);
var inst_30243__$1 = (inst_30220.cljs$core$IFn$_invoke$arity$1 ? inst_30220.cljs$core$IFn$_invoke$arity$1(inst_30229) : inst_30220.call(null,inst_30229));
var state_30269__$1 = (function (){var statearr_30277 = state_30269;
(statearr_30277[(9)] = inst_30243__$1);

return statearr_30277;
})();
if(cljs.core.truth_(inst_30243__$1)){
var statearr_30278_31284 = state_30269__$1;
(statearr_30278_31284[(1)] = (29));

} else {
var statearr_30279_31285 = state_30269__$1;
(statearr_30279_31285[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (4))){
var inst_30187 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30187)){
var statearr_30280_31286 = state_30269__$1;
(statearr_30280_31286[(1)] = (8));

} else {
var statearr_30281_31287 = state_30269__$1;
(statearr_30281_31287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (15))){
var inst_30214 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30214)){
var statearr_30282_31288 = state_30269__$1;
(statearr_30282_31288[(1)] = (19));

} else {
var statearr_30283_31289 = state_30269__$1;
(statearr_30283_31289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (21))){
var inst_30219 = (state_30269[(12)]);
var inst_30219__$1 = (state_30269[(2)]);
var inst_30220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30219__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30219__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30219__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30269__$1 = (function (){var statearr_30284 = state_30269;
(statearr_30284[(12)] = inst_30219__$1);

(statearr_30284[(13)] = inst_30221);

(statearr_30284[(11)] = inst_30220);

return statearr_30284;
})();
return cljs.core.async.ioc_alts_BANG_(state_30269__$1,(22),inst_30222);
} else {
if((state_val_30270 === (31))){
var inst_30251 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30251)){
var statearr_30285_31291 = state_30269__$1;
(statearr_30285_31291[(1)] = (32));

} else {
var statearr_30286_31293 = state_30269__$1;
(statearr_30286_31293[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (32))){
var inst_30228 = (state_30269[(14)]);
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30269__$1,(35),out,inst_30228);
} else {
if((state_val_30270 === (33))){
var inst_30219 = (state_30269[(12)]);
var inst_30196 = inst_30219;
var state_30269__$1 = (function (){var statearr_30287 = state_30269;
(statearr_30287[(7)] = inst_30196);

return statearr_30287;
})();
var statearr_30288_31301 = state_30269__$1;
(statearr_30288_31301[(2)] = null);

(statearr_30288_31301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (13))){
var inst_30196 = (state_30269[(7)]);
var inst_30203 = inst_30196.cljs$lang$protocol_mask$partition0$;
var inst_30204 = (inst_30203 & (64));
var inst_30205 = inst_30196.cljs$core$ISeq$;
var inst_30206 = (cljs.core.PROTOCOL_SENTINEL === inst_30205);
var inst_30207 = ((inst_30204) || (inst_30206));
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30207)){
var statearr_30289_31308 = state_30269__$1;
(statearr_30289_31308[(1)] = (16));

} else {
var statearr_30290_31310 = state_30269__$1;
(statearr_30290_31310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (22))){
var inst_30228 = (state_30269[(14)]);
var inst_30229 = (state_30269[(10)]);
var inst_30227 = (state_30269[(2)]);
var inst_30228__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30227,(0),null);
var inst_30229__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30227,(1),null);
var inst_30230 = (inst_30228__$1 == null);
var inst_30231 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30229__$1,change);
var inst_30232 = ((inst_30230) || (inst_30231));
var state_30269__$1 = (function (){var statearr_30291 = state_30269;
(statearr_30291[(14)] = inst_30228__$1);

(statearr_30291[(10)] = inst_30229__$1);

return statearr_30291;
})();
if(cljs.core.truth_(inst_30232)){
var statearr_30292_31322 = state_30269__$1;
(statearr_30292_31322[(1)] = (23));

} else {
var statearr_30293_31323 = state_30269__$1;
(statearr_30293_31323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (36))){
var inst_30219 = (state_30269[(12)]);
var inst_30196 = inst_30219;
var state_30269__$1 = (function (){var statearr_30294 = state_30269;
(statearr_30294[(7)] = inst_30196);

return statearr_30294;
})();
var statearr_30295_31324 = state_30269__$1;
(statearr_30295_31324[(2)] = null);

(statearr_30295_31324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (29))){
var inst_30243 = (state_30269[(9)]);
var state_30269__$1 = state_30269;
var statearr_30296_31325 = state_30269__$1;
(statearr_30296_31325[(2)] = inst_30243);

(statearr_30296_31325[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (6))){
var state_30269__$1 = state_30269;
var statearr_30297_31326 = state_30269__$1;
(statearr_30297_31326[(2)] = false);

(statearr_30297_31326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (28))){
var inst_30239 = (state_30269[(2)]);
var inst_30240 = calc_state();
var inst_30196 = inst_30240;
var state_30269__$1 = (function (){var statearr_30298 = state_30269;
(statearr_30298[(15)] = inst_30239);

(statearr_30298[(7)] = inst_30196);

return statearr_30298;
})();
var statearr_30299_31327 = state_30269__$1;
(statearr_30299_31327[(2)] = null);

(statearr_30299_31327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (25))){
var inst_30265 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30300_31328 = state_30269__$1;
(statearr_30300_31328[(2)] = inst_30265);

(statearr_30300_31328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (34))){
var inst_30263 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30301_31329 = state_30269__$1;
(statearr_30301_31329[(2)] = inst_30263);

(statearr_30301_31329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (17))){
var state_30269__$1 = state_30269;
var statearr_30302_31330 = state_30269__$1;
(statearr_30302_31330[(2)] = false);

(statearr_30302_31330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (3))){
var state_30269__$1 = state_30269;
var statearr_30303_31331 = state_30269__$1;
(statearr_30303_31331[(2)] = false);

(statearr_30303_31331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (12))){
var inst_30267 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30269__$1,inst_30267);
} else {
if((state_val_30270 === (2))){
var inst_30171 = (state_30269[(8)]);
var inst_30176 = inst_30171.cljs$lang$protocol_mask$partition0$;
var inst_30177 = (inst_30176 & (64));
var inst_30178 = inst_30171.cljs$core$ISeq$;
var inst_30179 = (cljs.core.PROTOCOL_SENTINEL === inst_30178);
var inst_30180 = ((inst_30177) || (inst_30179));
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30180)){
var statearr_30304_31332 = state_30269__$1;
(statearr_30304_31332[(1)] = (5));

} else {
var statearr_30305_31333 = state_30269__$1;
(statearr_30305_31333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (23))){
var inst_30228 = (state_30269[(14)]);
var inst_30234 = (inst_30228 == null);
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30234)){
var statearr_30306_31334 = state_30269__$1;
(statearr_30306_31334[(1)] = (26));

} else {
var statearr_30307_31335 = state_30269__$1;
(statearr_30307_31335[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (35))){
var inst_30254 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30254)){
var statearr_30308_31336 = state_30269__$1;
(statearr_30308_31336[(1)] = (36));

} else {
var statearr_30309_31337 = state_30269__$1;
(statearr_30309_31337[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (19))){
var inst_30196 = (state_30269[(7)]);
var inst_30216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30196);
var state_30269__$1 = state_30269;
var statearr_30310_31338 = state_30269__$1;
(statearr_30310_31338[(2)] = inst_30216);

(statearr_30310_31338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (11))){
var inst_30196 = (state_30269[(7)]);
var inst_30200 = (inst_30196 == null);
var inst_30201 = cljs.core.not(inst_30200);
var state_30269__$1 = state_30269;
if(inst_30201){
var statearr_30311_31339 = state_30269__$1;
(statearr_30311_31339[(1)] = (13));

} else {
var statearr_30312_31340 = state_30269__$1;
(statearr_30312_31340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (9))){
var inst_30171 = (state_30269[(8)]);
var state_30269__$1 = state_30269;
var statearr_30313_31341 = state_30269__$1;
(statearr_30313_31341[(2)] = inst_30171);

(statearr_30313_31341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (5))){
var state_30269__$1 = state_30269;
var statearr_30314_31342 = state_30269__$1;
(statearr_30314_31342[(2)] = true);

(statearr_30314_31342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (14))){
var state_30269__$1 = state_30269;
var statearr_30315_31343 = state_30269__$1;
(statearr_30315_31343[(2)] = false);

(statearr_30315_31343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (26))){
var inst_30229 = (state_30269[(10)]);
var inst_30236 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30229);
var state_30269__$1 = state_30269;
var statearr_30316_31344 = state_30269__$1;
(statearr_30316_31344[(2)] = inst_30236);

(statearr_30316_31344[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (16))){
var state_30269__$1 = state_30269;
var statearr_30317_31345 = state_30269__$1;
(statearr_30317_31345[(2)] = true);

(statearr_30317_31345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (38))){
var inst_30259 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30318_31346 = state_30269__$1;
(statearr_30318_31346[(2)] = inst_30259);

(statearr_30318_31346[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (30))){
var inst_30221 = (state_30269[(13)]);
var inst_30229 = (state_30269[(10)]);
var inst_30220 = (state_30269[(11)]);
var inst_30246 = cljs.core.empty_QMARK_(inst_30220);
var inst_30247 = (inst_30221.cljs$core$IFn$_invoke$arity$1 ? inst_30221.cljs$core$IFn$_invoke$arity$1(inst_30229) : inst_30221.call(null,inst_30229));
var inst_30248 = cljs.core.not(inst_30247);
var inst_30249 = ((inst_30246) && (inst_30248));
var state_30269__$1 = state_30269;
var statearr_30319_31347 = state_30269__$1;
(statearr_30319_31347[(2)] = inst_30249);

(statearr_30319_31347[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (10))){
var inst_30171 = (state_30269[(8)]);
var inst_30192 = (state_30269[(2)]);
var inst_30193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30192,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30192,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30192,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30196 = inst_30171;
var state_30269__$1 = (function (){var statearr_30320 = state_30269;
(statearr_30320[(16)] = inst_30193);

(statearr_30320[(17)] = inst_30194);

(statearr_30320[(7)] = inst_30196);

(statearr_30320[(18)] = inst_30195);

return statearr_30320;
})();
var statearr_30321_31348 = state_30269__$1;
(statearr_30321_31348[(2)] = null);

(statearr_30321_31348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (18))){
var inst_30211 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30322_31349 = state_30269__$1;
(statearr_30322_31349[(2)] = inst_30211);

(statearr_30322_31349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (37))){
var state_30269__$1 = state_30269;
var statearr_30323_31350 = state_30269__$1;
(statearr_30323_31350[(2)] = null);

(statearr_30323_31350[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (8))){
var inst_30171 = (state_30269[(8)]);
var inst_30189 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30171);
var state_30269__$1 = state_30269;
var statearr_30324_31351 = state_30269__$1;
(statearr_30324_31351[(2)] = inst_30189);

(statearr_30324_31351[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29394__auto__ = null;
var cljs$core$async$mix_$_state_machine__29394__auto____0 = (function (){
var statearr_30325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30325[(0)] = cljs$core$async$mix_$_state_machine__29394__auto__);

(statearr_30325[(1)] = (1));

return statearr_30325;
});
var cljs$core$async$mix_$_state_machine__29394__auto____1 = (function (state_30269){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30269);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30326){if((e30326 instanceof Object)){
var ex__29397__auto__ = e30326;
var statearr_30327_31352 = state_30269;
(statearr_30327_31352[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31353 = state_30269;
state_30269 = G__31353;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29394__auto__ = function(state_30269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29394__auto____1.call(this,state_30269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29394__auto____0;
cljs$core$async$mix_$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29394__auto____1;
return cljs$core$async$mix_$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30328 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30328[(6)] = c__29461__auto___31275);

return statearr_30328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
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
var G__30330 = arguments.length;
switch (G__30330) {
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
var G__30333 = arguments.length;
switch (G__30333) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30331_SHARP_){
if(cljs.core.truth_((p1__30331_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30331_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30331_SHARP_.call(null,topic)))){
return p1__30331_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30331_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30334 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30335){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30335 = meta30335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30336,meta30335__$1){
var self__ = this;
var _30336__$1 = this;
return (new cljs.core.async.t_cljs$core$async30334(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30335__$1));
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30336){
var self__ = this;
var _30336__$1 = this;
return self__.meta30335;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30335","meta30335",-1009123233,null)], null);
}));

(cljs.core.async.t_cljs$core$async30334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30334");

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30334.
 */
cljs.core.async.__GT_t_cljs$core$async30334 = (function cljs$core$async$__GT_t_cljs$core$async30334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30335){
return (new cljs.core.async.t_cljs$core$async30334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30335));
});

}

return (new cljs.core.async.t_cljs$core$async30334(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29461__auto___31356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30408){
var state_val_30409 = (state_30408[(1)]);
if((state_val_30409 === (7))){
var inst_30404 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
var statearr_30410_31357 = state_30408__$1;
(statearr_30410_31357[(2)] = inst_30404);

(statearr_30410_31357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (20))){
var state_30408__$1 = state_30408;
var statearr_30411_31358 = state_30408__$1;
(statearr_30411_31358[(2)] = null);

(statearr_30411_31358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (1))){
var state_30408__$1 = state_30408;
var statearr_30412_31359 = state_30408__$1;
(statearr_30412_31359[(2)] = null);

(statearr_30412_31359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (24))){
var inst_30387 = (state_30408[(7)]);
var inst_30396 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30387);
var state_30408__$1 = state_30408;
var statearr_30413_31360 = state_30408__$1;
(statearr_30413_31360[(2)] = inst_30396);

(statearr_30413_31360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (4))){
var inst_30339 = (state_30408[(8)]);
var inst_30339__$1 = (state_30408[(2)]);
var inst_30340 = (inst_30339__$1 == null);
var state_30408__$1 = (function (){var statearr_30414 = state_30408;
(statearr_30414[(8)] = inst_30339__$1);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30340)){
var statearr_30415_31361 = state_30408__$1;
(statearr_30415_31361[(1)] = (5));

} else {
var statearr_30416_31362 = state_30408__$1;
(statearr_30416_31362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (15))){
var inst_30381 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
var statearr_30417_31363 = state_30408__$1;
(statearr_30417_31363[(2)] = inst_30381);

(statearr_30417_31363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (21))){
var inst_30401 = (state_30408[(2)]);
var state_30408__$1 = (function (){var statearr_30418 = state_30408;
(statearr_30418[(9)] = inst_30401);

return statearr_30418;
})();
var statearr_30419_31364 = state_30408__$1;
(statearr_30419_31364[(2)] = null);

(statearr_30419_31364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (13))){
var inst_30363 = (state_30408[(10)]);
var inst_30365 = cljs.core.chunked_seq_QMARK_(inst_30363);
var state_30408__$1 = state_30408;
if(inst_30365){
var statearr_30420_31365 = state_30408__$1;
(statearr_30420_31365[(1)] = (16));

} else {
var statearr_30421_31366 = state_30408__$1;
(statearr_30421_31366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (22))){
var inst_30393 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
if(cljs.core.truth_(inst_30393)){
var statearr_30422_31367 = state_30408__$1;
(statearr_30422_31367[(1)] = (23));

} else {
var statearr_30423_31368 = state_30408__$1;
(statearr_30423_31368[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (6))){
var inst_30387 = (state_30408[(7)]);
var inst_30339 = (state_30408[(8)]);
var inst_30389 = (state_30408[(11)]);
var inst_30387__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30339) : topic_fn.call(null,inst_30339));
var inst_30388 = cljs.core.deref(mults);
var inst_30389__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30388,inst_30387__$1);
var state_30408__$1 = (function (){var statearr_30424 = state_30408;
(statearr_30424[(7)] = inst_30387__$1);

(statearr_30424[(11)] = inst_30389__$1);

return statearr_30424;
})();
if(cljs.core.truth_(inst_30389__$1)){
var statearr_30425_31369 = state_30408__$1;
(statearr_30425_31369[(1)] = (19));

} else {
var statearr_30426_31370 = state_30408__$1;
(statearr_30426_31370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (25))){
var inst_30398 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
var statearr_30427_31371 = state_30408__$1;
(statearr_30427_31371[(2)] = inst_30398);

(statearr_30427_31371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (17))){
var inst_30363 = (state_30408[(10)]);
var inst_30372 = cljs.core.first(inst_30363);
var inst_30373 = cljs.core.async.muxch_STAR_(inst_30372);
var inst_30374 = cljs.core.async.close_BANG_(inst_30373);
var inst_30375 = cljs.core.next(inst_30363);
var inst_30349 = inst_30375;
var inst_30350 = null;
var inst_30351 = (0);
var inst_30352 = (0);
var state_30408__$1 = (function (){var statearr_30428 = state_30408;
(statearr_30428[(12)] = inst_30351);

(statearr_30428[(13)] = inst_30350);

(statearr_30428[(14)] = inst_30374);

(statearr_30428[(15)] = inst_30352);

(statearr_30428[(16)] = inst_30349);

return statearr_30428;
})();
var statearr_30429_31374 = state_30408__$1;
(statearr_30429_31374[(2)] = null);

(statearr_30429_31374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (3))){
var inst_30406 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30408__$1,inst_30406);
} else {
if((state_val_30409 === (12))){
var inst_30383 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
var statearr_30430_31375 = state_30408__$1;
(statearr_30430_31375[(2)] = inst_30383);

(statearr_30430_31375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (2))){
var state_30408__$1 = state_30408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30408__$1,(4),ch);
} else {
if((state_val_30409 === (23))){
var state_30408__$1 = state_30408;
var statearr_30431_31376 = state_30408__$1;
(statearr_30431_31376[(2)] = null);

(statearr_30431_31376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (19))){
var inst_30339 = (state_30408[(8)]);
var inst_30389 = (state_30408[(11)]);
var inst_30391 = cljs.core.async.muxch_STAR_(inst_30389);
var state_30408__$1 = state_30408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30408__$1,(22),inst_30391,inst_30339);
} else {
if((state_val_30409 === (11))){
var inst_30363 = (state_30408[(10)]);
var inst_30349 = (state_30408[(16)]);
var inst_30363__$1 = cljs.core.seq(inst_30349);
var state_30408__$1 = (function (){var statearr_30432 = state_30408;
(statearr_30432[(10)] = inst_30363__$1);

return statearr_30432;
})();
if(inst_30363__$1){
var statearr_30433_31377 = state_30408__$1;
(statearr_30433_31377[(1)] = (13));

} else {
var statearr_30434_31378 = state_30408__$1;
(statearr_30434_31378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (9))){
var inst_30385 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
var statearr_30435_31381 = state_30408__$1;
(statearr_30435_31381[(2)] = inst_30385);

(statearr_30435_31381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (5))){
var inst_30346 = cljs.core.deref(mults);
var inst_30347 = cljs.core.vals(inst_30346);
var inst_30348 = cljs.core.seq(inst_30347);
var inst_30349 = inst_30348;
var inst_30350 = null;
var inst_30351 = (0);
var inst_30352 = (0);
var state_30408__$1 = (function (){var statearr_30436 = state_30408;
(statearr_30436[(12)] = inst_30351);

(statearr_30436[(13)] = inst_30350);

(statearr_30436[(15)] = inst_30352);

(statearr_30436[(16)] = inst_30349);

return statearr_30436;
})();
var statearr_30437_31382 = state_30408__$1;
(statearr_30437_31382[(2)] = null);

(statearr_30437_31382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (14))){
var state_30408__$1 = state_30408;
var statearr_30441_31383 = state_30408__$1;
(statearr_30441_31383[(2)] = null);

(statearr_30441_31383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (16))){
var inst_30363 = (state_30408[(10)]);
var inst_30367 = cljs.core.chunk_first(inst_30363);
var inst_30368 = cljs.core.chunk_rest(inst_30363);
var inst_30369 = cljs.core.count(inst_30367);
var inst_30349 = inst_30368;
var inst_30350 = inst_30367;
var inst_30351 = inst_30369;
var inst_30352 = (0);
var state_30408__$1 = (function (){var statearr_30442 = state_30408;
(statearr_30442[(12)] = inst_30351);

(statearr_30442[(13)] = inst_30350);

(statearr_30442[(15)] = inst_30352);

(statearr_30442[(16)] = inst_30349);

return statearr_30442;
})();
var statearr_30443_31384 = state_30408__$1;
(statearr_30443_31384[(2)] = null);

(statearr_30443_31384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (10))){
var inst_30351 = (state_30408[(12)]);
var inst_30350 = (state_30408[(13)]);
var inst_30352 = (state_30408[(15)]);
var inst_30349 = (state_30408[(16)]);
var inst_30357 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30350,inst_30352);
var inst_30358 = cljs.core.async.muxch_STAR_(inst_30357);
var inst_30359 = cljs.core.async.close_BANG_(inst_30358);
var inst_30360 = (inst_30352 + (1));
var tmp30438 = inst_30351;
var tmp30439 = inst_30350;
var tmp30440 = inst_30349;
var inst_30349__$1 = tmp30440;
var inst_30350__$1 = tmp30439;
var inst_30351__$1 = tmp30438;
var inst_30352__$1 = inst_30360;
var state_30408__$1 = (function (){var statearr_30444 = state_30408;
(statearr_30444[(12)] = inst_30351__$1);

(statearr_30444[(13)] = inst_30350__$1);

(statearr_30444[(17)] = inst_30359);

(statearr_30444[(15)] = inst_30352__$1);

(statearr_30444[(16)] = inst_30349__$1);

return statearr_30444;
})();
var statearr_30445_31387 = state_30408__$1;
(statearr_30445_31387[(2)] = null);

(statearr_30445_31387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (18))){
var inst_30378 = (state_30408[(2)]);
var state_30408__$1 = state_30408;
var statearr_30446_31388 = state_30408__$1;
(statearr_30446_31388[(2)] = inst_30378);

(statearr_30446_31388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30409 === (8))){
var inst_30351 = (state_30408[(12)]);
var inst_30352 = (state_30408[(15)]);
var inst_30354 = (inst_30352 < inst_30351);
var inst_30355 = inst_30354;
var state_30408__$1 = state_30408;
if(cljs.core.truth_(inst_30355)){
var statearr_30447_31389 = state_30408__$1;
(statearr_30447_31389[(1)] = (10));

} else {
var statearr_30448_31390 = state_30408__$1;
(statearr_30448_31390[(1)] = (11));

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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30449[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30449[(1)] = (1));

return statearr_30449;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30408){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30408);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30450){if((e30450 instanceof Object)){
var ex__29397__auto__ = e30450;
var statearr_30451_31392 = state_30408;
(statearr_30451_31392[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31394 = state_30408;
state_30408 = G__31394;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30452 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30452[(6)] = c__29461__auto___31356);

return statearr_30452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
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
var G__30454 = arguments.length;
switch (G__30454) {
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
var G__30456 = arguments.length;
switch (G__30456) {
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
var G__30458 = arguments.length;
switch (G__30458) {
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
var c__29461__auto___31400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30497){
var state_val_30498 = (state_30497[(1)]);
if((state_val_30498 === (7))){
var state_30497__$1 = state_30497;
var statearr_30499_31401 = state_30497__$1;
(statearr_30499_31401[(2)] = null);

(statearr_30499_31401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (1))){
var state_30497__$1 = state_30497;
var statearr_30500_31402 = state_30497__$1;
(statearr_30500_31402[(2)] = null);

(statearr_30500_31402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (4))){
var inst_30461 = (state_30497[(7)]);
var inst_30463 = (inst_30461 < cnt);
var state_30497__$1 = state_30497;
if(cljs.core.truth_(inst_30463)){
var statearr_30501_31403 = state_30497__$1;
(statearr_30501_31403[(1)] = (6));

} else {
var statearr_30502_31404 = state_30497__$1;
(statearr_30502_31404[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (15))){
var inst_30493 = (state_30497[(2)]);
var state_30497__$1 = state_30497;
var statearr_30503_31405 = state_30497__$1;
(statearr_30503_31405[(2)] = inst_30493);

(statearr_30503_31405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (13))){
var inst_30486 = cljs.core.async.close_BANG_(out);
var state_30497__$1 = state_30497;
var statearr_30504_31406 = state_30497__$1;
(statearr_30504_31406[(2)] = inst_30486);

(statearr_30504_31406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (6))){
var state_30497__$1 = state_30497;
var statearr_30505_31407 = state_30497__$1;
(statearr_30505_31407[(2)] = null);

(statearr_30505_31407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (3))){
var inst_30495 = (state_30497[(2)]);
var state_30497__$1 = state_30497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30497__$1,inst_30495);
} else {
if((state_val_30498 === (12))){
var inst_30483 = (state_30497[(8)]);
var inst_30483__$1 = (state_30497[(2)]);
var inst_30484 = cljs.core.some(cljs.core.nil_QMARK_,inst_30483__$1);
var state_30497__$1 = (function (){var statearr_30506 = state_30497;
(statearr_30506[(8)] = inst_30483__$1);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30484)){
var statearr_30507_31408 = state_30497__$1;
(statearr_30507_31408[(1)] = (13));

} else {
var statearr_30508_31409 = state_30497__$1;
(statearr_30508_31409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (2))){
var inst_30460 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30461 = (0);
var state_30497__$1 = (function (){var statearr_30509 = state_30497;
(statearr_30509[(9)] = inst_30460);

(statearr_30509[(7)] = inst_30461);

return statearr_30509;
})();
var statearr_30510_31410 = state_30497__$1;
(statearr_30510_31410[(2)] = null);

(statearr_30510_31410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (11))){
var inst_30461 = (state_30497[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30497,(10),Object,null,(9));
var inst_30470 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30461) : chs__$1.call(null,inst_30461));
var inst_30471 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30461) : done.call(null,inst_30461));
var inst_30472 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30470,inst_30471);
var state_30497__$1 = state_30497;
var statearr_30511_31411 = state_30497__$1;
(statearr_30511_31411[(2)] = inst_30472);


cljs.core.async.impl.ioc_helpers.process_exception(state_30497__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (9))){
var inst_30461 = (state_30497[(7)]);
var inst_30474 = (state_30497[(2)]);
var inst_30475 = (inst_30461 + (1));
var inst_30461__$1 = inst_30475;
var state_30497__$1 = (function (){var statearr_30512 = state_30497;
(statearr_30512[(10)] = inst_30474);

(statearr_30512[(7)] = inst_30461__$1);

return statearr_30512;
})();
var statearr_30513_31412 = state_30497__$1;
(statearr_30513_31412[(2)] = null);

(statearr_30513_31412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (5))){
var inst_30481 = (state_30497[(2)]);
var state_30497__$1 = (function (){var statearr_30514 = state_30497;
(statearr_30514[(11)] = inst_30481);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30497__$1,(12),dchan);
} else {
if((state_val_30498 === (14))){
var inst_30483 = (state_30497[(8)]);
var inst_30488 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30483);
var state_30497__$1 = state_30497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30497__$1,(16),out,inst_30488);
} else {
if((state_val_30498 === (16))){
var inst_30490 = (state_30497[(2)]);
var state_30497__$1 = (function (){var statearr_30515 = state_30497;
(statearr_30515[(12)] = inst_30490);

return statearr_30515;
})();
var statearr_30516_31413 = state_30497__$1;
(statearr_30516_31413[(2)] = null);

(statearr_30516_31413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (10))){
var inst_30465 = (state_30497[(2)]);
var inst_30466 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30497__$1 = (function (){var statearr_30517 = state_30497;
(statearr_30517[(13)] = inst_30465);

return statearr_30517;
})();
var statearr_30518_31415 = state_30497__$1;
(statearr_30518_31415[(2)] = inst_30466);


cljs.core.async.impl.ioc_helpers.process_exception(state_30497__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30498 === (8))){
var inst_30479 = (state_30497[(2)]);
var state_30497__$1 = state_30497;
var statearr_30519_31416 = state_30497__$1;
(statearr_30519_31416[(2)] = inst_30479);

(statearr_30519_31416[(1)] = (5));


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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30497){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30497);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30521){if((e30521 instanceof Object)){
var ex__29397__auto__ = e30521;
var statearr_30522_31418 = state_30497;
(statearr_30522_31418[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31419 = state_30497;
state_30497 = G__31419;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30523 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30523[(6)] = c__29461__auto___31400);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
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
var G__30526 = arguments.length;
switch (G__30526) {
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
var c__29461__auto___31424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30558){
var state_val_30559 = (state_30558[(1)]);
if((state_val_30559 === (7))){
var inst_30537 = (state_30558[(7)]);
var inst_30538 = (state_30558[(8)]);
var inst_30537__$1 = (state_30558[(2)]);
var inst_30538__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30537__$1,(0),null);
var inst_30539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30537__$1,(1),null);
var inst_30540 = (inst_30538__$1 == null);
var state_30558__$1 = (function (){var statearr_30560 = state_30558;
(statearr_30560[(7)] = inst_30537__$1);

(statearr_30560[(8)] = inst_30538__$1);

(statearr_30560[(9)] = inst_30539);

return statearr_30560;
})();
if(cljs.core.truth_(inst_30540)){
var statearr_30561_31425 = state_30558__$1;
(statearr_30561_31425[(1)] = (8));

} else {
var statearr_30562_31426 = state_30558__$1;
(statearr_30562_31426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (1))){
var inst_30527 = cljs.core.vec(chs);
var inst_30528 = inst_30527;
var state_30558__$1 = (function (){var statearr_30563 = state_30558;
(statearr_30563[(10)] = inst_30528);

return statearr_30563;
})();
var statearr_30564_31428 = state_30558__$1;
(statearr_30564_31428[(2)] = null);

(statearr_30564_31428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (4))){
var inst_30528 = (state_30558[(10)]);
var state_30558__$1 = state_30558;
return cljs.core.async.ioc_alts_BANG_(state_30558__$1,(7),inst_30528);
} else {
if((state_val_30559 === (6))){
var inst_30554 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30565_31429 = state_30558__$1;
(statearr_30565_31429[(2)] = inst_30554);

(statearr_30565_31429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (3))){
var inst_30556 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30558__$1,inst_30556);
} else {
if((state_val_30559 === (2))){
var inst_30528 = (state_30558[(10)]);
var inst_30530 = cljs.core.count(inst_30528);
var inst_30531 = (inst_30530 > (0));
var state_30558__$1 = state_30558;
if(cljs.core.truth_(inst_30531)){
var statearr_30567_31433 = state_30558__$1;
(statearr_30567_31433[(1)] = (4));

} else {
var statearr_30568_31434 = state_30558__$1;
(statearr_30568_31434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (11))){
var inst_30528 = (state_30558[(10)]);
var inst_30547 = (state_30558[(2)]);
var tmp30566 = inst_30528;
var inst_30528__$1 = tmp30566;
var state_30558__$1 = (function (){var statearr_30569 = state_30558;
(statearr_30569[(11)] = inst_30547);

(statearr_30569[(10)] = inst_30528__$1);

return statearr_30569;
})();
var statearr_30570_31435 = state_30558__$1;
(statearr_30570_31435[(2)] = null);

(statearr_30570_31435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (9))){
var inst_30538 = (state_30558[(8)]);
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30558__$1,(11),out,inst_30538);
} else {
if((state_val_30559 === (5))){
var inst_30552 = cljs.core.async.close_BANG_(out);
var state_30558__$1 = state_30558;
var statearr_30571_31436 = state_30558__$1;
(statearr_30571_31436[(2)] = inst_30552);

(statearr_30571_31436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (10))){
var inst_30550 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30572_31437 = state_30558__$1;
(statearr_30572_31437[(2)] = inst_30550);

(statearr_30572_31437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (8))){
var inst_30537 = (state_30558[(7)]);
var inst_30528 = (state_30558[(10)]);
var inst_30538 = (state_30558[(8)]);
var inst_30539 = (state_30558[(9)]);
var inst_30542 = (function (){var cs = inst_30528;
var vec__30533 = inst_30537;
var v = inst_30538;
var c = inst_30539;
return (function (p1__30524_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30524_SHARP_);
});
})();
var inst_30543 = cljs.core.filterv(inst_30542,inst_30528);
var inst_30528__$1 = inst_30543;
var state_30558__$1 = (function (){var statearr_30573 = state_30558;
(statearr_30573[(10)] = inst_30528__$1);

return statearr_30573;
})();
var statearr_30574_31438 = state_30558__$1;
(statearr_30574_31438[(2)] = null);

(statearr_30574_31438[(1)] = (2));


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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30575[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30575[(1)] = (1));

return statearr_30575;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30558){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30558);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object)){
var ex__29397__auto__ = e30576;
var statearr_30577_31439 = state_30558;
(statearr_30577_31439[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31440 = state_30558;
state_30558 = G__31440;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30578 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30578[(6)] = c__29461__auto___31424);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
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
var G__30580 = arguments.length;
switch (G__30580) {
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
var c__29461__auto___31442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30604){
var state_val_30605 = (state_30604[(1)]);
if((state_val_30605 === (7))){
var inst_30586 = (state_30604[(7)]);
var inst_30586__$1 = (state_30604[(2)]);
var inst_30587 = (inst_30586__$1 == null);
var inst_30588 = cljs.core.not(inst_30587);
var state_30604__$1 = (function (){var statearr_30606 = state_30604;
(statearr_30606[(7)] = inst_30586__$1);

return statearr_30606;
})();
if(inst_30588){
var statearr_30607_31443 = state_30604__$1;
(statearr_30607_31443[(1)] = (8));

} else {
var statearr_30608_31444 = state_30604__$1;
(statearr_30608_31444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (1))){
var inst_30581 = (0);
var state_30604__$1 = (function (){var statearr_30609 = state_30604;
(statearr_30609[(8)] = inst_30581);

return statearr_30609;
})();
var statearr_30610_31445 = state_30604__$1;
(statearr_30610_31445[(2)] = null);

(statearr_30610_31445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (4))){
var state_30604__$1 = state_30604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30604__$1,(7),ch);
} else {
if((state_val_30605 === (6))){
var inst_30599 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30611_31446 = state_30604__$1;
(statearr_30611_31446[(2)] = inst_30599);

(statearr_30611_31446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (3))){
var inst_30601 = (state_30604[(2)]);
var inst_30602 = cljs.core.async.close_BANG_(out);
var state_30604__$1 = (function (){var statearr_30612 = state_30604;
(statearr_30612[(9)] = inst_30601);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30604__$1,inst_30602);
} else {
if((state_val_30605 === (2))){
var inst_30581 = (state_30604[(8)]);
var inst_30583 = (inst_30581 < n);
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30583)){
var statearr_30613_31447 = state_30604__$1;
(statearr_30613_31447[(1)] = (4));

} else {
var statearr_30614_31448 = state_30604__$1;
(statearr_30614_31448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (11))){
var inst_30581 = (state_30604[(8)]);
var inst_30591 = (state_30604[(2)]);
var inst_30592 = (inst_30581 + (1));
var inst_30581__$1 = inst_30592;
var state_30604__$1 = (function (){var statearr_30615 = state_30604;
(statearr_30615[(10)] = inst_30591);

(statearr_30615[(8)] = inst_30581__$1);

return statearr_30615;
})();
var statearr_30616_31449 = state_30604__$1;
(statearr_30616_31449[(2)] = null);

(statearr_30616_31449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (9))){
var state_30604__$1 = state_30604;
var statearr_30617_31450 = state_30604__$1;
(statearr_30617_31450[(2)] = null);

(statearr_30617_31450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (5))){
var state_30604__$1 = state_30604;
var statearr_30618_31451 = state_30604__$1;
(statearr_30618_31451[(2)] = null);

(statearr_30618_31451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (10))){
var inst_30596 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30619_31452 = state_30604__$1;
(statearr_30619_31452[(2)] = inst_30596);

(statearr_30619_31452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (8))){
var inst_30586 = (state_30604[(7)]);
var state_30604__$1 = state_30604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30604__$1,(11),out,inst_30586);
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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30620[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30620[(1)] = (1));

return statearr_30620;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30604){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30604);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30621){if((e30621 instanceof Object)){
var ex__29397__auto__ = e30621;
var statearr_30622_31453 = state_30604;
(statearr_30622_31453[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31454 = state_30604;
state_30604 = G__31454;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30623 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30623[(6)] = c__29461__auto___31442);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30625 = (function (f,ch,meta30626){
this.f = f;
this.ch = ch;
this.meta30626 = meta30626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30627,meta30626__$1){
var self__ = this;
var _30627__$1 = this;
return (new cljs.core.async.t_cljs$core$async30625(self__.f,self__.ch,meta30626__$1));
}));

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30627){
var self__ = this;
var _30627__$1 = this;
return self__.meta30626;
}));

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30628 = (function (f,ch,meta30626,_,fn1,meta30629){
this.f = f;
this.ch = ch;
this.meta30626 = meta30626;
this._ = _;
this.fn1 = fn1;
this.meta30629 = meta30629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30630,meta30629__$1){
var self__ = this;
var _30630__$1 = this;
return (new cljs.core.async.t_cljs$core$async30628(self__.f,self__.ch,self__.meta30626,self__._,self__.fn1,meta30629__$1));
}));

(cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30630){
var self__ = this;
var _30630__$1 = this;
return self__.meta30629;
}));

(cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30624_SHARP_){
var G__30631 = (((p1__30624_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30624_SHARP_) : self__.f.call(null,p1__30624_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30631) : f1.call(null,G__30631));
});
}));

(cljs.core.async.t_cljs$core$async30628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30626","meta30626",1763249877,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30625","cljs.core.async/t_cljs$core$async30625",-1837282939,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30629","meta30629",-837491268,null)], null);
}));

(cljs.core.async.t_cljs$core$async30628.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30628");

(cljs.core.async.t_cljs$core$async30628.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30628");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30628.
 */
cljs.core.async.__GT_t_cljs$core$async30628 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30628(f__$1,ch__$1,meta30626__$1,___$2,fn1__$1,meta30629){
return (new cljs.core.async.t_cljs$core$async30628(f__$1,ch__$1,meta30626__$1,___$2,fn1__$1,meta30629));
});

}

return (new cljs.core.async.t_cljs$core$async30628(self__.f,self__.ch,self__.meta30626,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30632 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30632) : self__.f.call(null,G__30632));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30626","meta30626",1763249877,null)], null);
}));

(cljs.core.async.t_cljs$core$async30625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30625");

(cljs.core.async.t_cljs$core$async30625.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30625.
 */
cljs.core.async.__GT_t_cljs$core$async30625 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30625(f__$1,ch__$1,meta30626){
return (new cljs.core.async.t_cljs$core$async30625(f__$1,ch__$1,meta30626));
});

}

return (new cljs.core.async.t_cljs$core$async30625(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30633 = (function (f,ch,meta30634){
this.f = f;
this.ch = ch;
this.meta30634 = meta30634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30635,meta30634__$1){
var self__ = this;
var _30635__$1 = this;
return (new cljs.core.async.t_cljs$core$async30633(self__.f,self__.ch,meta30634__$1));
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30635){
var self__ = this;
var _30635__$1 = this;
return self__.meta30634;
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30634","meta30634",1711376689,null)], null);
}));

(cljs.core.async.t_cljs$core$async30633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30633");

(cljs.core.async.t_cljs$core$async30633.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30633.
 */
cljs.core.async.__GT_t_cljs$core$async30633 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30633(f__$1,ch__$1,meta30634){
return (new cljs.core.async.t_cljs$core$async30633(f__$1,ch__$1,meta30634));
});

}

return (new cljs.core.async.t_cljs$core$async30633(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30636 = (function (p,ch,meta30637){
this.p = p;
this.ch = ch;
this.meta30637 = meta30637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30638,meta30637__$1){
var self__ = this;
var _30638__$1 = this;
return (new cljs.core.async.t_cljs$core$async30636(self__.p,self__.ch,meta30637__$1));
}));

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30638){
var self__ = this;
var _30638__$1 = this;
return self__.meta30637;
}));

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30637","meta30637",-2049858785,null)], null);
}));

(cljs.core.async.t_cljs$core$async30636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30636");

(cljs.core.async.t_cljs$core$async30636.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30636.
 */
cljs.core.async.__GT_t_cljs$core$async30636 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30636(p__$1,ch__$1,meta30637){
return (new cljs.core.async.t_cljs$core$async30636(p__$1,ch__$1,meta30637));
});

}

return (new cljs.core.async.t_cljs$core$async30636(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30640 = arguments.length;
switch (G__30640) {
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
var c__29461__auto___31456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30661){
var state_val_30662 = (state_30661[(1)]);
if((state_val_30662 === (7))){
var inst_30657 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30663_31457 = state_30661__$1;
(statearr_30663_31457[(2)] = inst_30657);

(statearr_30663_31457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (1))){
var state_30661__$1 = state_30661;
var statearr_30664_31458 = state_30661__$1;
(statearr_30664_31458[(2)] = null);

(statearr_30664_31458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (4))){
var inst_30643 = (state_30661[(7)]);
var inst_30643__$1 = (state_30661[(2)]);
var inst_30644 = (inst_30643__$1 == null);
var state_30661__$1 = (function (){var statearr_30665 = state_30661;
(statearr_30665[(7)] = inst_30643__$1);

return statearr_30665;
})();
if(cljs.core.truth_(inst_30644)){
var statearr_30666_31459 = state_30661__$1;
(statearr_30666_31459[(1)] = (5));

} else {
var statearr_30667_31460 = state_30661__$1;
(statearr_30667_31460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (6))){
var inst_30643 = (state_30661[(7)]);
var inst_30648 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30643) : p.call(null,inst_30643));
var state_30661__$1 = state_30661;
if(cljs.core.truth_(inst_30648)){
var statearr_30668_31461 = state_30661__$1;
(statearr_30668_31461[(1)] = (8));

} else {
var statearr_30669_31462 = state_30661__$1;
(statearr_30669_31462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (3))){
var inst_30659 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30661__$1,inst_30659);
} else {
if((state_val_30662 === (2))){
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30661__$1,(4),ch);
} else {
if((state_val_30662 === (11))){
var inst_30651 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30670_31463 = state_30661__$1;
(statearr_30670_31463[(2)] = inst_30651);

(statearr_30670_31463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (9))){
var state_30661__$1 = state_30661;
var statearr_30671_31464 = state_30661__$1;
(statearr_30671_31464[(2)] = null);

(statearr_30671_31464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (5))){
var inst_30646 = cljs.core.async.close_BANG_(out);
var state_30661__$1 = state_30661;
var statearr_30672_31465 = state_30661__$1;
(statearr_30672_31465[(2)] = inst_30646);

(statearr_30672_31465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (10))){
var inst_30654 = (state_30661[(2)]);
var state_30661__$1 = (function (){var statearr_30673 = state_30661;
(statearr_30673[(8)] = inst_30654);

return statearr_30673;
})();
var statearr_30674_31466 = state_30661__$1;
(statearr_30674_31466[(2)] = null);

(statearr_30674_31466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (8))){
var inst_30643 = (state_30661[(7)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30661__$1,(11),out,inst_30643);
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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30675 = [null,null,null,null,null,null,null,null,null];
(statearr_30675[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30675[(1)] = (1));

return statearr_30675;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30661){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30661);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30676){if((e30676 instanceof Object)){
var ex__29397__auto__ = e30676;
var statearr_30677_31467 = state_30661;
(statearr_30677_31467[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31468 = state_30661;
state_30661 = G__31468;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30678 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30678[(6)] = c__29461__auto___31456);

return statearr_30678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30680 = arguments.length;
switch (G__30680) {
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
var c__29461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30742){
var state_val_30743 = (state_30742[(1)]);
if((state_val_30743 === (7))){
var inst_30738 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
var statearr_30744_31470 = state_30742__$1;
(statearr_30744_31470[(2)] = inst_30738);

(statearr_30744_31470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (20))){
var inst_30708 = (state_30742[(7)]);
var inst_30719 = (state_30742[(2)]);
var inst_30720 = cljs.core.next(inst_30708);
var inst_30694 = inst_30720;
var inst_30695 = null;
var inst_30696 = (0);
var inst_30697 = (0);
var state_30742__$1 = (function (){var statearr_30745 = state_30742;
(statearr_30745[(8)] = inst_30697);

(statearr_30745[(9)] = inst_30694);

(statearr_30745[(10)] = inst_30719);

(statearr_30745[(11)] = inst_30696);

(statearr_30745[(12)] = inst_30695);

return statearr_30745;
})();
var statearr_30746_31474 = state_30742__$1;
(statearr_30746_31474[(2)] = null);

(statearr_30746_31474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (1))){
var state_30742__$1 = state_30742;
var statearr_30747_31475 = state_30742__$1;
(statearr_30747_31475[(2)] = null);

(statearr_30747_31475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (4))){
var inst_30683 = (state_30742[(13)]);
var inst_30683__$1 = (state_30742[(2)]);
var inst_30684 = (inst_30683__$1 == null);
var state_30742__$1 = (function (){var statearr_30748 = state_30742;
(statearr_30748[(13)] = inst_30683__$1);

return statearr_30748;
})();
if(cljs.core.truth_(inst_30684)){
var statearr_30749_31476 = state_30742__$1;
(statearr_30749_31476[(1)] = (5));

} else {
var statearr_30750_31477 = state_30742__$1;
(statearr_30750_31477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (15))){
var state_30742__$1 = state_30742;
var statearr_30754_31478 = state_30742__$1;
(statearr_30754_31478[(2)] = null);

(statearr_30754_31478[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (21))){
var state_30742__$1 = state_30742;
var statearr_30755_31479 = state_30742__$1;
(statearr_30755_31479[(2)] = null);

(statearr_30755_31479[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (13))){
var inst_30697 = (state_30742[(8)]);
var inst_30694 = (state_30742[(9)]);
var inst_30696 = (state_30742[(11)]);
var inst_30695 = (state_30742[(12)]);
var inst_30704 = (state_30742[(2)]);
var inst_30705 = (inst_30697 + (1));
var tmp30751 = inst_30694;
var tmp30752 = inst_30696;
var tmp30753 = inst_30695;
var inst_30694__$1 = tmp30751;
var inst_30695__$1 = tmp30753;
var inst_30696__$1 = tmp30752;
var inst_30697__$1 = inst_30705;
var state_30742__$1 = (function (){var statearr_30756 = state_30742;
(statearr_30756[(8)] = inst_30697__$1);

(statearr_30756[(9)] = inst_30694__$1);

(statearr_30756[(14)] = inst_30704);

(statearr_30756[(11)] = inst_30696__$1);

(statearr_30756[(12)] = inst_30695__$1);

return statearr_30756;
})();
var statearr_30757_31482 = state_30742__$1;
(statearr_30757_31482[(2)] = null);

(statearr_30757_31482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (22))){
var state_30742__$1 = state_30742;
var statearr_30758_31483 = state_30742__$1;
(statearr_30758_31483[(2)] = null);

(statearr_30758_31483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (6))){
var inst_30683 = (state_30742[(13)]);
var inst_30692 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30683) : f.call(null,inst_30683));
var inst_30693 = cljs.core.seq(inst_30692);
var inst_30694 = inst_30693;
var inst_30695 = null;
var inst_30696 = (0);
var inst_30697 = (0);
var state_30742__$1 = (function (){var statearr_30759 = state_30742;
(statearr_30759[(8)] = inst_30697);

(statearr_30759[(9)] = inst_30694);

(statearr_30759[(11)] = inst_30696);

(statearr_30759[(12)] = inst_30695);

return statearr_30759;
})();
var statearr_30760_31484 = state_30742__$1;
(statearr_30760_31484[(2)] = null);

(statearr_30760_31484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (17))){
var inst_30708 = (state_30742[(7)]);
var inst_30712 = cljs.core.chunk_first(inst_30708);
var inst_30713 = cljs.core.chunk_rest(inst_30708);
var inst_30714 = cljs.core.count(inst_30712);
var inst_30694 = inst_30713;
var inst_30695 = inst_30712;
var inst_30696 = inst_30714;
var inst_30697 = (0);
var state_30742__$1 = (function (){var statearr_30761 = state_30742;
(statearr_30761[(8)] = inst_30697);

(statearr_30761[(9)] = inst_30694);

(statearr_30761[(11)] = inst_30696);

(statearr_30761[(12)] = inst_30695);

return statearr_30761;
})();
var statearr_30762_31485 = state_30742__$1;
(statearr_30762_31485[(2)] = null);

(statearr_30762_31485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (3))){
var inst_30740 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30742__$1,inst_30740);
} else {
if((state_val_30743 === (12))){
var inst_30728 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
var statearr_30763_31486 = state_30742__$1;
(statearr_30763_31486[(2)] = inst_30728);

(statearr_30763_31486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (2))){
var state_30742__$1 = state_30742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30742__$1,(4),in$);
} else {
if((state_val_30743 === (23))){
var inst_30736 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
var statearr_30764_31488 = state_30742__$1;
(statearr_30764_31488[(2)] = inst_30736);

(statearr_30764_31488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (19))){
var inst_30723 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
var statearr_30765_31489 = state_30742__$1;
(statearr_30765_31489[(2)] = inst_30723);

(statearr_30765_31489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (11))){
var inst_30694 = (state_30742[(9)]);
var inst_30708 = (state_30742[(7)]);
var inst_30708__$1 = cljs.core.seq(inst_30694);
var state_30742__$1 = (function (){var statearr_30766 = state_30742;
(statearr_30766[(7)] = inst_30708__$1);

return statearr_30766;
})();
if(inst_30708__$1){
var statearr_30767_31490 = state_30742__$1;
(statearr_30767_31490[(1)] = (14));

} else {
var statearr_30768_31491 = state_30742__$1;
(statearr_30768_31491[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (9))){
var inst_30730 = (state_30742[(2)]);
var inst_30731 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30742__$1 = (function (){var statearr_30769 = state_30742;
(statearr_30769[(15)] = inst_30730);

return statearr_30769;
})();
if(cljs.core.truth_(inst_30731)){
var statearr_30770_31492 = state_30742__$1;
(statearr_30770_31492[(1)] = (21));

} else {
var statearr_30771_31493 = state_30742__$1;
(statearr_30771_31493[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (5))){
var inst_30686 = cljs.core.async.close_BANG_(out);
var state_30742__$1 = state_30742;
var statearr_30772_31494 = state_30742__$1;
(statearr_30772_31494[(2)] = inst_30686);

(statearr_30772_31494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (14))){
var inst_30708 = (state_30742[(7)]);
var inst_30710 = cljs.core.chunked_seq_QMARK_(inst_30708);
var state_30742__$1 = state_30742;
if(inst_30710){
var statearr_30773_31495 = state_30742__$1;
(statearr_30773_31495[(1)] = (17));

} else {
var statearr_30774_31496 = state_30742__$1;
(statearr_30774_31496[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (16))){
var inst_30726 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
var statearr_30775_31497 = state_30742__$1;
(statearr_30775_31497[(2)] = inst_30726);

(statearr_30775_31497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (10))){
var inst_30697 = (state_30742[(8)]);
var inst_30695 = (state_30742[(12)]);
var inst_30702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30695,inst_30697);
var state_30742__$1 = state_30742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30742__$1,(13),out,inst_30702);
} else {
if((state_val_30743 === (18))){
var inst_30708 = (state_30742[(7)]);
var inst_30717 = cljs.core.first(inst_30708);
var state_30742__$1 = state_30742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30742__$1,(20),out,inst_30717);
} else {
if((state_val_30743 === (8))){
var inst_30697 = (state_30742[(8)]);
var inst_30696 = (state_30742[(11)]);
var inst_30699 = (inst_30697 < inst_30696);
var inst_30700 = inst_30699;
var state_30742__$1 = state_30742;
if(cljs.core.truth_(inst_30700)){
var statearr_30776_31498 = state_30742__$1;
(statearr_30776_31498[(1)] = (10));

} else {
var statearr_30777_31499 = state_30742__$1;
(statearr_30777_31499[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29394__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29394__auto____0 = (function (){
var statearr_30778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29394__auto__);

(statearr_30778[(1)] = (1));

return statearr_30778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29394__auto____1 = (function (state_30742){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30742);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30779){if((e30779 instanceof Object)){
var ex__29397__auto__ = e30779;
var statearr_30780_31500 = state_30742;
(statearr_30780_31500[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31501 = state_30742;
state_30742 = G__31501;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29394__auto__ = function(state_30742){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29394__auto____1.call(this,state_30742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29394__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29394__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30781 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30781[(6)] = c__29461__auto__);

return statearr_30781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));

return c__29461__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30783 = arguments.length;
switch (G__30783) {
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
var G__30785 = arguments.length;
switch (G__30785) {
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
var G__30787 = arguments.length;
switch (G__30787) {
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
var c__29461__auto___31505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30811){
var state_val_30812 = (state_30811[(1)]);
if((state_val_30812 === (7))){
var inst_30806 = (state_30811[(2)]);
var state_30811__$1 = state_30811;
var statearr_30813_31506 = state_30811__$1;
(statearr_30813_31506[(2)] = inst_30806);

(statearr_30813_31506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (1))){
var inst_30788 = null;
var state_30811__$1 = (function (){var statearr_30814 = state_30811;
(statearr_30814[(7)] = inst_30788);

return statearr_30814;
})();
var statearr_30815_31507 = state_30811__$1;
(statearr_30815_31507[(2)] = null);

(statearr_30815_31507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (4))){
var inst_30791 = (state_30811[(8)]);
var inst_30791__$1 = (state_30811[(2)]);
var inst_30792 = (inst_30791__$1 == null);
var inst_30793 = cljs.core.not(inst_30792);
var state_30811__$1 = (function (){var statearr_30816 = state_30811;
(statearr_30816[(8)] = inst_30791__$1);

return statearr_30816;
})();
if(inst_30793){
var statearr_30817_31508 = state_30811__$1;
(statearr_30817_31508[(1)] = (5));

} else {
var statearr_30818_31509 = state_30811__$1;
(statearr_30818_31509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (6))){
var state_30811__$1 = state_30811;
var statearr_30819_31510 = state_30811__$1;
(statearr_30819_31510[(2)] = null);

(statearr_30819_31510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (3))){
var inst_30808 = (state_30811[(2)]);
var inst_30809 = cljs.core.async.close_BANG_(out);
var state_30811__$1 = (function (){var statearr_30820 = state_30811;
(statearr_30820[(9)] = inst_30808);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30811__$1,inst_30809);
} else {
if((state_val_30812 === (2))){
var state_30811__$1 = state_30811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30811__$1,(4),ch);
} else {
if((state_val_30812 === (11))){
var inst_30791 = (state_30811[(8)]);
var inst_30800 = (state_30811[(2)]);
var inst_30788 = inst_30791;
var state_30811__$1 = (function (){var statearr_30821 = state_30811;
(statearr_30821[(10)] = inst_30800);

(statearr_30821[(7)] = inst_30788);

return statearr_30821;
})();
var statearr_30822_31511 = state_30811__$1;
(statearr_30822_31511[(2)] = null);

(statearr_30822_31511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (9))){
var inst_30791 = (state_30811[(8)]);
var state_30811__$1 = state_30811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30811__$1,(11),out,inst_30791);
} else {
if((state_val_30812 === (5))){
var inst_30788 = (state_30811[(7)]);
var inst_30791 = (state_30811[(8)]);
var inst_30795 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30791,inst_30788);
var state_30811__$1 = state_30811;
if(inst_30795){
var statearr_30824_31512 = state_30811__$1;
(statearr_30824_31512[(1)] = (8));

} else {
var statearr_30825_31513 = state_30811__$1;
(statearr_30825_31513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (10))){
var inst_30803 = (state_30811[(2)]);
var state_30811__$1 = state_30811;
var statearr_30826_31514 = state_30811__$1;
(statearr_30826_31514[(2)] = inst_30803);

(statearr_30826_31514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30812 === (8))){
var inst_30788 = (state_30811[(7)]);
var tmp30823 = inst_30788;
var inst_30788__$1 = tmp30823;
var state_30811__$1 = (function (){var statearr_30827 = state_30811;
(statearr_30827[(7)] = inst_30788__$1);

return statearr_30827;
})();
var statearr_30828_31515 = state_30811__$1;
(statearr_30828_31515[(2)] = null);

(statearr_30828_31515[(1)] = (2));


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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30811){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30811);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30830){if((e30830 instanceof Object)){
var ex__29397__auto__ = e30830;
var statearr_30831_31516 = state_30811;
(statearr_30831_31516[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31517 = state_30811;
state_30811 = G__31517;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30832 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30832[(6)] = c__29461__auto___31505);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30834 = arguments.length;
switch (G__30834) {
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
var c__29461__auto___31519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30872){
var state_val_30873 = (state_30872[(1)]);
if((state_val_30873 === (7))){
var inst_30868 = (state_30872[(2)]);
var state_30872__$1 = state_30872;
var statearr_30874_31520 = state_30872__$1;
(statearr_30874_31520[(2)] = inst_30868);

(statearr_30874_31520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (1))){
var inst_30835 = (new Array(n));
var inst_30836 = inst_30835;
var inst_30837 = (0);
var state_30872__$1 = (function (){var statearr_30875 = state_30872;
(statearr_30875[(7)] = inst_30836);

(statearr_30875[(8)] = inst_30837);

return statearr_30875;
})();
var statearr_30876_31521 = state_30872__$1;
(statearr_30876_31521[(2)] = null);

(statearr_30876_31521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (4))){
var inst_30840 = (state_30872[(9)]);
var inst_30840__$1 = (state_30872[(2)]);
var inst_30841 = (inst_30840__$1 == null);
var inst_30842 = cljs.core.not(inst_30841);
var state_30872__$1 = (function (){var statearr_30877 = state_30872;
(statearr_30877[(9)] = inst_30840__$1);

return statearr_30877;
})();
if(inst_30842){
var statearr_30878_31522 = state_30872__$1;
(statearr_30878_31522[(1)] = (5));

} else {
var statearr_30879_31523 = state_30872__$1;
(statearr_30879_31523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (15))){
var inst_30862 = (state_30872[(2)]);
var state_30872__$1 = state_30872;
var statearr_30880_31524 = state_30872__$1;
(statearr_30880_31524[(2)] = inst_30862);

(statearr_30880_31524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (13))){
var state_30872__$1 = state_30872;
var statearr_30881_31525 = state_30872__$1;
(statearr_30881_31525[(2)] = null);

(statearr_30881_31525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (6))){
var inst_30837 = (state_30872[(8)]);
var inst_30858 = (inst_30837 > (0));
var state_30872__$1 = state_30872;
if(cljs.core.truth_(inst_30858)){
var statearr_30882_31526 = state_30872__$1;
(statearr_30882_31526[(1)] = (12));

} else {
var statearr_30883_31527 = state_30872__$1;
(statearr_30883_31527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (3))){
var inst_30870 = (state_30872[(2)]);
var state_30872__$1 = state_30872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30872__$1,inst_30870);
} else {
if((state_val_30873 === (12))){
var inst_30836 = (state_30872[(7)]);
var inst_30860 = cljs.core.vec(inst_30836);
var state_30872__$1 = state_30872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30872__$1,(15),out,inst_30860);
} else {
if((state_val_30873 === (2))){
var state_30872__$1 = state_30872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30872__$1,(4),ch);
} else {
if((state_val_30873 === (11))){
var inst_30852 = (state_30872[(2)]);
var inst_30853 = (new Array(n));
var inst_30836 = inst_30853;
var inst_30837 = (0);
var state_30872__$1 = (function (){var statearr_30884 = state_30872;
(statearr_30884[(7)] = inst_30836);

(statearr_30884[(8)] = inst_30837);

(statearr_30884[(10)] = inst_30852);

return statearr_30884;
})();
var statearr_30885_31528 = state_30872__$1;
(statearr_30885_31528[(2)] = null);

(statearr_30885_31528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (9))){
var inst_30836 = (state_30872[(7)]);
var inst_30850 = cljs.core.vec(inst_30836);
var state_30872__$1 = state_30872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30872__$1,(11),out,inst_30850);
} else {
if((state_val_30873 === (5))){
var inst_30836 = (state_30872[(7)]);
var inst_30837 = (state_30872[(8)]);
var inst_30840 = (state_30872[(9)]);
var inst_30845 = (state_30872[(11)]);
var inst_30844 = (inst_30836[inst_30837] = inst_30840);
var inst_30845__$1 = (inst_30837 + (1));
var inst_30846 = (inst_30845__$1 < n);
var state_30872__$1 = (function (){var statearr_30886 = state_30872;
(statearr_30886[(12)] = inst_30844);

(statearr_30886[(11)] = inst_30845__$1);

return statearr_30886;
})();
if(cljs.core.truth_(inst_30846)){
var statearr_30887_31529 = state_30872__$1;
(statearr_30887_31529[(1)] = (8));

} else {
var statearr_30888_31530 = state_30872__$1;
(statearr_30888_31530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (14))){
var inst_30865 = (state_30872[(2)]);
var inst_30866 = cljs.core.async.close_BANG_(out);
var state_30872__$1 = (function (){var statearr_30890 = state_30872;
(statearr_30890[(13)] = inst_30865);

return statearr_30890;
})();
var statearr_30891_31531 = state_30872__$1;
(statearr_30891_31531[(2)] = inst_30866);

(statearr_30891_31531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (10))){
var inst_30856 = (state_30872[(2)]);
var state_30872__$1 = state_30872;
var statearr_30892_31532 = state_30872__$1;
(statearr_30892_31532[(2)] = inst_30856);

(statearr_30892_31532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30873 === (8))){
var inst_30836 = (state_30872[(7)]);
var inst_30845 = (state_30872[(11)]);
var tmp30889 = inst_30836;
var inst_30836__$1 = tmp30889;
var inst_30837 = inst_30845;
var state_30872__$1 = (function (){var statearr_30893 = state_30872;
(statearr_30893[(7)] = inst_30836__$1);

(statearr_30893[(8)] = inst_30837);

return statearr_30893;
})();
var statearr_30894_31533 = state_30872__$1;
(statearr_30894_31533[(2)] = null);

(statearr_30894_31533[(1)] = (2));


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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30895[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30895[(1)] = (1));

return statearr_30895;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30872){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30872);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30896){if((e30896 instanceof Object)){
var ex__29397__auto__ = e30896;
var statearr_30897_31534 = state_30872;
(statearr_30897_31534[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31535 = state_30872;
state_30872 = G__31535;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30898 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30898[(6)] = c__29461__auto___31519);

return statearr_30898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30900 = arguments.length;
switch (G__30900) {
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
var c__29461__auto___31537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_30942){
var state_val_30943 = (state_30942[(1)]);
if((state_val_30943 === (7))){
var inst_30938 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30944_31538 = state_30942__$1;
(statearr_30944_31538[(2)] = inst_30938);

(statearr_30944_31538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (1))){
var inst_30901 = [];
var inst_30902 = inst_30901;
var inst_30903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30942__$1 = (function (){var statearr_30945 = state_30942;
(statearr_30945[(7)] = inst_30902);

(statearr_30945[(8)] = inst_30903);

return statearr_30945;
})();
var statearr_30946_31541 = state_30942__$1;
(statearr_30946_31541[(2)] = null);

(statearr_30946_31541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (4))){
var inst_30906 = (state_30942[(9)]);
var inst_30906__$1 = (state_30942[(2)]);
var inst_30907 = (inst_30906__$1 == null);
var inst_30908 = cljs.core.not(inst_30907);
var state_30942__$1 = (function (){var statearr_30947 = state_30942;
(statearr_30947[(9)] = inst_30906__$1);

return statearr_30947;
})();
if(inst_30908){
var statearr_30948_31542 = state_30942__$1;
(statearr_30948_31542[(1)] = (5));

} else {
var statearr_30949_31543 = state_30942__$1;
(statearr_30949_31543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (15))){
var inst_30932 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30950_31544 = state_30942__$1;
(statearr_30950_31544[(2)] = inst_30932);

(statearr_30950_31544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (13))){
var state_30942__$1 = state_30942;
var statearr_30951_31545 = state_30942__$1;
(statearr_30951_31545[(2)] = null);

(statearr_30951_31545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (6))){
var inst_30902 = (state_30942[(7)]);
var inst_30927 = inst_30902.length;
var inst_30928 = (inst_30927 > (0));
var state_30942__$1 = state_30942;
if(cljs.core.truth_(inst_30928)){
var statearr_30952_31547 = state_30942__$1;
(statearr_30952_31547[(1)] = (12));

} else {
var statearr_30953_31548 = state_30942__$1;
(statearr_30953_31548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (3))){
var inst_30940 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30942__$1,inst_30940);
} else {
if((state_val_30943 === (12))){
var inst_30902 = (state_30942[(7)]);
var inst_30930 = cljs.core.vec(inst_30902);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30942__$1,(15),out,inst_30930);
} else {
if((state_val_30943 === (2))){
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30942__$1,(4),ch);
} else {
if((state_val_30943 === (11))){
var inst_30910 = (state_30942[(10)]);
var inst_30906 = (state_30942[(9)]);
var inst_30920 = (state_30942[(2)]);
var inst_30921 = [];
var inst_30922 = inst_30921.push(inst_30906);
var inst_30902 = inst_30921;
var inst_30903 = inst_30910;
var state_30942__$1 = (function (){var statearr_30954 = state_30942;
(statearr_30954[(11)] = inst_30920);

(statearr_30954[(12)] = inst_30922);

(statearr_30954[(7)] = inst_30902);

(statearr_30954[(8)] = inst_30903);

return statearr_30954;
})();
var statearr_30955_31551 = state_30942__$1;
(statearr_30955_31551[(2)] = null);

(statearr_30955_31551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (9))){
var inst_30902 = (state_30942[(7)]);
var inst_30918 = cljs.core.vec(inst_30902);
var state_30942__$1 = state_30942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30942__$1,(11),out,inst_30918);
} else {
if((state_val_30943 === (5))){
var inst_30910 = (state_30942[(10)]);
var inst_30903 = (state_30942[(8)]);
var inst_30906 = (state_30942[(9)]);
var inst_30910__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30906) : f.call(null,inst_30906));
var inst_30911 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30910__$1,inst_30903);
var inst_30912 = cljs.core.keyword_identical_QMARK_(inst_30903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30913 = ((inst_30911) || (inst_30912));
var state_30942__$1 = (function (){var statearr_30956 = state_30942;
(statearr_30956[(10)] = inst_30910__$1);

return statearr_30956;
})();
if(cljs.core.truth_(inst_30913)){
var statearr_30957_31553 = state_30942__$1;
(statearr_30957_31553[(1)] = (8));

} else {
var statearr_30958_31554 = state_30942__$1;
(statearr_30958_31554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (14))){
var inst_30935 = (state_30942[(2)]);
var inst_30936 = cljs.core.async.close_BANG_(out);
var state_30942__$1 = (function (){var statearr_30960 = state_30942;
(statearr_30960[(13)] = inst_30935);

return statearr_30960;
})();
var statearr_30961_31555 = state_30942__$1;
(statearr_30961_31555[(2)] = inst_30936);

(statearr_30961_31555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (10))){
var inst_30925 = (state_30942[(2)]);
var state_30942__$1 = state_30942;
var statearr_30962_31556 = state_30942__$1;
(statearr_30962_31556[(2)] = inst_30925);

(statearr_30962_31556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30943 === (8))){
var inst_30910 = (state_30942[(10)]);
var inst_30902 = (state_30942[(7)]);
var inst_30906 = (state_30942[(9)]);
var inst_30915 = inst_30902.push(inst_30906);
var tmp30959 = inst_30902;
var inst_30902__$1 = tmp30959;
var inst_30903 = inst_30910;
var state_30942__$1 = (function (){var statearr_30963 = state_30942;
(statearr_30963[(14)] = inst_30915);

(statearr_30963[(7)] = inst_30902__$1);

(statearr_30963[(8)] = inst_30903);

return statearr_30963;
})();
var statearr_30964_31557 = state_30942__$1;
(statearr_30964_31557[(2)] = null);

(statearr_30964_31557[(1)] = (2));


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
var cljs$core$async$state_machine__29394__auto__ = null;
var cljs$core$async$state_machine__29394__auto____0 = (function (){
var statearr_30965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30965[(0)] = cljs$core$async$state_machine__29394__auto__);

(statearr_30965[(1)] = (1));

return statearr_30965;
});
var cljs$core$async$state_machine__29394__auto____1 = (function (state_30942){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_30942);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e30966){if((e30966 instanceof Object)){
var ex__29397__auto__ = e30966;
var statearr_30967_31558 = state_30942;
(statearr_30967_31558[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31559 = state_30942;
state_30942 = G__31559;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
cljs$core$async$state_machine__29394__auto__ = function(state_30942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29394__auto____1.call(this,state_30942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29394__auto____0;
cljs$core$async$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29394__auto____1;
return cljs$core$async$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_30968 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_30968[(6)] = c__29461__auto___31537);

return statearr_30968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
