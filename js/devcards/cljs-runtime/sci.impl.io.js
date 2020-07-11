goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.vars');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__58363 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58364 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58364);

try{var G__58365 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__58365);

return G__58365;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58363);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__58366 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58367 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58367);

try{var G__58368 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__58368);

return G__58368;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58366);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__58370 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__58371 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__58371);

try{var G__58372 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__58372);

return G__58372;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__58370);
}})();
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58395 = arguments.length;
var i__4790__auto___58396 = (0);
while(true){
if((i__4790__auto___58396 < len__4789__auto___58395)){
args__4795__auto__.push((arguments[i__4790__auto___58396]));

var G__58397 = (i__4790__auto___58396 + (1));
i__4790__auto___58396 = G__58397;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58376 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58377 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58377);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58376);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq58373){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58373));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58398 = arguments.length;
var i__4790__auto___58399 = (0);
while(true){
if((i__4790__auto___58399 < len__4789__auto___58398)){
args__4795__auto__.push((arguments[i__4790__auto___58399]));

var G__58400 = (i__4790__auto___58399 + (1));
i__4790__auto___58399 = G__58400;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58382 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58383 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58383);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58382);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq58378){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58378));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58401 = arguments.length;
var i__4790__auto___58402 = (0);
while(true){
if((i__4790__auto___58402 < len__4789__auto___58401)){
args__4795__auto__.push((arguments[i__4790__auto___58402]));

var G__58403 = (i__4790__auto___58402 + (1));
i__4790__auto___58402 = G__58403;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58385 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58386 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58386);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58385);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq58384){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58384));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58404 = arguments.length;
var i__4790__auto___58405 = (0);
while(true){
if((i__4790__auto___58405 < len__4789__auto___58404)){
args__4795__auto__.push((arguments[i__4790__auto___58405]));

var G__58406 = (i__4790__auto___58405 + (1));
i__4790__auto___58405 = G__58406;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__58388 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__58389 = cljs.core.deref(sci.impl.io.print_length);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__58389);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__58388);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq58387){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58387));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58408 = arguments.length;
var i__4790__auto___58409 = (0);
while(true){
if((i__4790__auto___58409 < len__4789__auto___58408)){
args__4795__auto__.push((arguments[i__4790__auto___58409]));

var G__58410 = (i__4790__auto___58409 + (1));
i__4790__auto___58409 = G__58410;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__58390__auto__","s__58390__auto__",807170709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__58390__auto__","s__58390__auto__",807170709,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__58390__auto__","s__58390__auto__",807170709,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq58391){
var G__58392 = cljs.core.first(seq58391);
var seq58391__$1 = cljs.core.next(seq58391);
var G__58393 = cljs.core.first(seq58391__$1);
var seq58391__$2 = cljs.core.next(seq58391__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58392,G__58393,seq58391__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
