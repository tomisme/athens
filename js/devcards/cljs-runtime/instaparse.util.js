goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46660 = arguments.length;
var i__4790__auto___46661 = (0);
while(true){
if((i__4790__auto___46661 < len__4789__auto___46660)){
args__4795__auto__.push((arguments[i__4790__auto___46661]));

var G__46662 = (i__4790__auto___46661 + (1));
i__4790__auto___46661 = G__46662;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq46647){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46647));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46664 = arguments.length;
var i__4790__auto___46665 = (0);
while(true){
if((i__4790__auto___46665 < len__4789__auto___46664)){
args__4795__auto__.push((arguments[i__4790__auto___46665]));

var G__46666 = (i__4790__auto___46665 + (1));
i__4790__auto___46665 = G__46666;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq46653){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46653));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__46654 = "";
var G__46654__$1 = (cljs.core.truth_(re.ignoreCase)?[G__46654,"i"].join(''):G__46654);
var G__46654__$2 = (cljs.core.truth_(re.multiline)?[G__46654__$1,"m"].join(''):G__46654__$1);
if(cljs.core.truth_(re.unicode)){
return [G__46654__$2,"u"].join('');
} else {
return G__46654__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
