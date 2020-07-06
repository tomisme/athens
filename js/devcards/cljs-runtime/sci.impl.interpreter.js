goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__48442 = xs;
args__$2 = G__48442;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__48443 = xs;
args__$2 = G__48443;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48444 = arguments.length;
var i__4790__auto___48445 = (0);
while(true){
if((i__4790__auto___48445 < len__4789__auto___48444)){
args__4795__auto__.push((arguments[i__4790__auto___48445]));

var G__48446 = (i__4790__auto___48445 + (1));
i__4790__auto___48445 = G__48446;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__48447 = ctx__$2;
var G__48448 = rest_let_bindings;
ctx__$1 = G__48447;
let_bindings__$1 = G__48448;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__48449 = nexprs;
exprs__$1 = G__48449;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq47657){
var G__47658 = cljs.core.first(seq47657);
var seq47657__$1 = cljs.core.next(seq47657);
var G__47659 = cljs.core.first(seq47657__$1);
var seq47657__$2 = cljs.core.next(seq47657__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47658,G__47659,seq47657__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__47661){
var vec__47662 = p__47661;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47662,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__47665 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__47666 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__47665,G__47666) : sci.impl.utils.kw_identical_QMARK_.call(null,G__47665,G__47666));
})())?(function (){var G__47667 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47667,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__47667;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__47668 = libspec;
var seq__47669 = cljs.core.seq(vec__47668);
var first__47670 = cljs.core.first(seq__47669);
var seq__47669__$1 = cljs.core.next(seq__47669);
var lib_name = first__47670;
var opts = seq__47669__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__47674 = opts;
var vec__47675 = G__47674;
var seq__47676 = cljs.core.seq(vec__47675);
var first__47677 = cljs.core.first(seq__47676);
var seq__47676__$1 = cljs.core.next(seq__47676);
var opt_name = first__47677;
var first__47677__$1 = cljs.core.first(seq__47676__$1);
var seq__47676__$2 = cljs.core.next(seq__47676__$1);
var fst_opt = first__47677__$1;
var rst_opts = seq__47676__$2;
var ret__$1 = ret;
var G__47674__$1 = G__47674;
while(true){
var ret__$2 = ret__$1;
var vec__47685 = G__47674__$1;
var seq__47686 = cljs.core.seq(vec__47685);
var first__47687 = cljs.core.first(seq__47686);
var seq__47686__$1 = cljs.core.next(seq__47686);
var opt_name__$1 = first__47687;
var first__47687__$1 = cljs.core.first(seq__47686__$1);
var seq__47686__$2 = cljs.core.next(seq__47686__$1);
var fst_opt__$1 = first__47687__$1;
var rst_opts__$1 = seq__47686__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__47688 = opt_name__$1;
var G__47688__$1 = (((G__47688 instanceof cljs.core.Keyword))?G__47688.fqn:null);
switch (G__47688__$1) {
case "as":
var G__48451 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__48452 = rst_opts__$1;
ret__$1 = G__48451;
G__47674__$1 = G__48452;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__48453 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__48454 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__48453;
G__47674__$1 = G__48454;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__48455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__48456 = rst_opts__$1;
ret__$1 = G__48455;
G__47674__$1 = G__48456;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47688__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__47692){
var vec__47693 = p__47692;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47693,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__47696){
var map__47697 = p__47696;
var map__47697__$1 = (((((!((map__47697 == null))))?(((((map__47697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47697):map__47697);
var _parsed_libspec = map__47697__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__47701 = new cljs.core.Keyword(null,"all","all",892129742);
var G__47702 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__47701,G__47702) : sci.impl.utils.kw_identical_QMARK_.call(null,G__47701,G__47702));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__47706 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__47712 = sci.impl.interpreter.parse_libspec(libspec);
var map__47712__$1 = (((((!((map__47712 == null))))?(((((map__47712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47712):map__47712);
var parsed_libspec = map__47712__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47712__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47712__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__47717 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__47717) : load_fn.call(null,G__47717));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__47718 = temp__5733__auto____$2;
var map__47718__$1 = (((((!((map__47718 == null))))?(((((map__47718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47718):map__47718);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47718__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47718__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__47724_48457 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__47725_48458 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__47724_48457,G__47725_48458) : sci.impl.interpreter.eval_string_STAR_.call(null,G__47724_48457,G__47725_48458));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e47720){if((e47720 instanceof Error)){
var e_48459 = e47720;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_48459;
} else {
throw e47720;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48460 = arguments.length;
var i__4790__auto___48461 = (0);
while(true){
if((i__4790__auto___48461 < len__4789__auto___48460)){
args__4795__auto__.push((arguments[i__4790__auto___48461]));

var G__48462 = (i__4790__auto___48461 + (1));
i__4790__auto___48461 = G__48462;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__47736 = ctx;
var G__47737 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__47736,G__47737) : sci.impl.interpreter.interpret.call(null,G__47736,G__47737));
})();
if((ret instanceof cljs.core.Symbol)){
var G__48463 = (function (){var G__47738 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47738,current_libspec);
} else {
return G__47738;
}
})();
var G__48464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__48465 = cljs.core.next(args__$1);
libspecs = G__48463;
current_libspec = G__48464;
args__$1 = G__48465;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__48466 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__48467 = null;
var G__48468 = cljs.core.next(args__$1);
libspecs = G__48466;
current_libspec = G__48467;
args__$1 = G__48468;
continue;
} else {
var G__48469 = (function (){var G__47739 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47739,current_libspec);
} else {
return G__47739;
}
})();
var G__48470 = ret;
var G__48471 = cljs.core.next(args__$1);
libspecs = G__48469;
current_libspec = G__48470;
args__$1 = G__48471;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__47741 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__47741,current_libspec);
} else {
return G__47741;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__47726_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__47726_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq47727){
var G__47728 = cljs.core.first(seq47727);
var seq47727__$1 = cljs.core.next(seq47727);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47728,seq47727__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48472 = arguments.length;
var i__4790__auto___48474 = (0);
while(true){
if((i__4790__auto___48474 < len__4789__auto___48472)){
args__4795__auto__.push((arguments[i__4790__auto___48474]));

var G__48475 = (i__4790__auto___48474 + (1));
i__4790__auto___48474 = G__48475;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq47742){
var G__47743 = cljs.core.first(seq47742);
var seq47742__$1 = cljs.core.next(seq47742);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47743,seq47742__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__47748){
var vec__47749 = p__47748;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(0),null);
var map__47752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(1),null);
var map__47752__$1 = (((((!((map__47752 == null))))?(((((map__47752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47752):map__47752);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47752__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47752__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47752__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__47754 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47754,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47754,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__47757 = ctx;
var G__47758 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__47757,G__47758) : sci.impl.interpreter.interpret.call(null,G__47757,G__47758));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__47759 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__47759__$1 = (((((!((map__47759 == null))))?(((((map__47759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47759):map__47759);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47759__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47759__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47759__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__47767 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__47768 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__47768);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__47767);
}}catch (e47761){if((e47761 instanceof Error)){
var e = e47761;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__47762 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__47763 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__47762,G__47763) : sci.impl.interpreter.interpret.call(null,G__47762,G__47763));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__47764 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e47761;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__47769){
var vec__47770 = p__47769;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47773_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__47773_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__47773_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__47775){
var vec__47777 = p__47775;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47777,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47777,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47777,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47774_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__47774_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__47774_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__47782,p__47783){
var map__47784 = p__47782;
var map__47784__$1 = (((((!((map__47784 == null))))?(((((map__47784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47784):map__47784);
var ctx = map__47784__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47784__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__47785 = p__47783;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47781_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__47781_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__47781_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__47797){
var vec__47798 = p__47797;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47798,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47798,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__47804){
var vec__47805 = p__47804;
var seq__47806 = cljs.core.seq(vec__47805);
var first__47807 = cljs.core.first(seq__47806);
var seq__47806__$1 = cljs.core.next(seq__47806);
var _ = first__47807;
var first__47807__$1 = cljs.core.first(seq__47806__$1);
var seq__47806__$2 = cljs.core.next(seq__47806__$1);
var ns_sym = first__47807__$1;
var exprs = seq__47806__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__47808 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47808,(1),null);
var G__47811_48483 = k;
var G__47811_48484__$1 = (((G__47811_48483 instanceof cljs.core.Keyword))?G__47811_48483.fqn:null);
switch (G__47811_48484__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__47811_48483,G__47811_48484__$1,vec__47808,k,v,ns_sym__$1,vec__47805,seq__47806,first__47807,seq__47806__$1,_,first__47807__$1,seq__47806__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__47811_48483,G__47811_48484__$1,vec__47808,k,v,ns_sym__$1,vec__47805,seq__47806,first__47807,seq__47806__$1,_,first__47807__$1,seq__47806__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47811_48484__$1)].join('')));

}

var G__48495 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__48495;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__47827){
var vec__47828 = p__47827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47828,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47828,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47828,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__47834 = exprs;
var vec__47835 = G__47834;
var seq__47836 = cljs.core.seq(vec__47835);
var first__47837 = cljs.core.first(seq__47836);
var seq__47836__$1 = cljs.core.next(seq__47836);
var expr = first__47837;
var exprs__$1 = seq__47836__$1;
var G__47834__$1 = G__47834;
while(true){
var vec__47838 = G__47834__$1;
var seq__47839 = cljs.core.seq(vec__47838);
var first__47840 = cljs.core.first(seq__47839);
var seq__47839__$1 = cljs.core.next(seq__47839);
var expr__$1 = first__47840;
var exprs__$2 = seq__47839__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e47841){if((e47841 instanceof Error)){
var e = e47841;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e47841;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__48506 = exprs__$3;
G__47834__$1 = G__48506;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__48034 = cljs.core.count(args);
switch (G__48034) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg47844 = (function (){var G__48035 = ctx;
var G__48036 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48035,G__48036) : sci.impl.interpreter.interpret.call(null,G__48035,G__48036));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg47844) : f.call(null,arg47844));

break;
case (2):
var arg47845 = (function (){var G__48037 = ctx;
var G__48038 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48037,G__48038) : sci.impl.interpreter.interpret.call(null,G__48037,G__48038));
})();
var args__$1 = cljs.core.rest(args);
var arg47846 = (function (){var G__48039 = ctx;
var G__48040 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48039,G__48040) : sci.impl.interpreter.interpret.call(null,G__48039,G__48040));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg47845,arg47846) : f.call(null,arg47845,arg47846));

break;
case (3):
var arg47847 = (function (){var G__48041 = ctx;
var G__48042 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48041,G__48042) : sci.impl.interpreter.interpret.call(null,G__48041,G__48042));
})();
var args__$1 = cljs.core.rest(args);
var arg47848 = (function (){var G__48043 = ctx;
var G__48044 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48043,G__48044) : sci.impl.interpreter.interpret.call(null,G__48043,G__48044));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47849 = (function (){var G__48045 = ctx;
var G__48046 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48045,G__48046) : sci.impl.interpreter.interpret.call(null,G__48045,G__48046));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg47847,arg47848,arg47849) : f.call(null,arg47847,arg47848,arg47849));

break;
case (4):
var arg47850 = (function (){var G__48047 = ctx;
var G__48048 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48047,G__48048) : sci.impl.interpreter.interpret.call(null,G__48047,G__48048));
})();
var args__$1 = cljs.core.rest(args);
var arg47851 = (function (){var G__48049 = ctx;
var G__48050 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48049,G__48050) : sci.impl.interpreter.interpret.call(null,G__48049,G__48050));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47852 = (function (){var G__48051 = ctx;
var G__48052 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48051,G__48052) : sci.impl.interpreter.interpret.call(null,G__48051,G__48052));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47853 = (function (){var G__48053 = ctx;
var G__48054 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48053,G__48054) : sci.impl.interpreter.interpret.call(null,G__48053,G__48054));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg47850,arg47851,arg47852,arg47853) : f.call(null,arg47850,arg47851,arg47852,arg47853));

break;
case (5):
var arg47854 = (function (){var G__48055 = ctx;
var G__48056 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48055,G__48056) : sci.impl.interpreter.interpret.call(null,G__48055,G__48056));
})();
var args__$1 = cljs.core.rest(args);
var arg47855 = (function (){var G__48057 = ctx;
var G__48058 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48057,G__48058) : sci.impl.interpreter.interpret.call(null,G__48057,G__48058));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47856 = (function (){var G__48059 = ctx;
var G__48060 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48059,G__48060) : sci.impl.interpreter.interpret.call(null,G__48059,G__48060));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47857 = (function (){var G__48061 = ctx;
var G__48062 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48061,G__48062) : sci.impl.interpreter.interpret.call(null,G__48061,G__48062));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47858 = (function (){var G__48063 = ctx;
var G__48064 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48063,G__48064) : sci.impl.interpreter.interpret.call(null,G__48063,G__48064));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg47854,arg47855,arg47856,arg47857,arg47858) : f.call(null,arg47854,arg47855,arg47856,arg47857,arg47858));

break;
case (6):
var arg47859 = (function (){var G__48065 = ctx;
var G__48066 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48065,G__48066) : sci.impl.interpreter.interpret.call(null,G__48065,G__48066));
})();
var args__$1 = cljs.core.rest(args);
var arg47860 = (function (){var G__48067 = ctx;
var G__48068 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48067,G__48068) : sci.impl.interpreter.interpret.call(null,G__48067,G__48068));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47861 = (function (){var G__48069 = ctx;
var G__48070 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48069,G__48070) : sci.impl.interpreter.interpret.call(null,G__48069,G__48070));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47862 = (function (){var G__48071 = ctx;
var G__48072 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48071,G__48072) : sci.impl.interpreter.interpret.call(null,G__48071,G__48072));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47863 = (function (){var G__48073 = ctx;
var G__48074 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48073,G__48074) : sci.impl.interpreter.interpret.call(null,G__48073,G__48074));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47864 = (function (){var G__48075 = ctx;
var G__48076 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48075,G__48076) : sci.impl.interpreter.interpret.call(null,G__48075,G__48076));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg47859,arg47860,arg47861,arg47862,arg47863,arg47864) : f.call(null,arg47859,arg47860,arg47861,arg47862,arg47863,arg47864));

break;
case (7):
var arg47865 = (function (){var G__48077 = ctx;
var G__48078 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48077,G__48078) : sci.impl.interpreter.interpret.call(null,G__48077,G__48078));
})();
var args__$1 = cljs.core.rest(args);
var arg47866 = (function (){var G__48079 = ctx;
var G__48080 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48079,G__48080) : sci.impl.interpreter.interpret.call(null,G__48079,G__48080));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47867 = (function (){var G__48081 = ctx;
var G__48082 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48081,G__48082) : sci.impl.interpreter.interpret.call(null,G__48081,G__48082));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47868 = (function (){var G__48083 = ctx;
var G__48084 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48083,G__48084) : sci.impl.interpreter.interpret.call(null,G__48083,G__48084));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47869 = (function (){var G__48085 = ctx;
var G__48086 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48085,G__48086) : sci.impl.interpreter.interpret.call(null,G__48085,G__48086));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47870 = (function (){var G__48087 = ctx;
var G__48088 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48087,G__48088) : sci.impl.interpreter.interpret.call(null,G__48087,G__48088));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47871 = (function (){var G__48089 = ctx;
var G__48090 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48089,G__48090) : sci.impl.interpreter.interpret.call(null,G__48089,G__48090));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg47865,arg47866,arg47867,arg47868,arg47869,arg47870,arg47871) : f.call(null,arg47865,arg47866,arg47867,arg47868,arg47869,arg47870,arg47871));

break;
case (8):
var arg47872 = (function (){var G__48091 = ctx;
var G__48092 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48091,G__48092) : sci.impl.interpreter.interpret.call(null,G__48091,G__48092));
})();
var args__$1 = cljs.core.rest(args);
var arg47873 = (function (){var G__48093 = ctx;
var G__48094 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48093,G__48094) : sci.impl.interpreter.interpret.call(null,G__48093,G__48094));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47874 = (function (){var G__48095 = ctx;
var G__48096 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48095,G__48096) : sci.impl.interpreter.interpret.call(null,G__48095,G__48096));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47875 = (function (){var G__48097 = ctx;
var G__48098 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48097,G__48098) : sci.impl.interpreter.interpret.call(null,G__48097,G__48098));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47876 = (function (){var G__48099 = ctx;
var G__48100 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48099,G__48100) : sci.impl.interpreter.interpret.call(null,G__48099,G__48100));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47877 = (function (){var G__48101 = ctx;
var G__48102 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48101,G__48102) : sci.impl.interpreter.interpret.call(null,G__48101,G__48102));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47878 = (function (){var G__48103 = ctx;
var G__48104 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48103,G__48104) : sci.impl.interpreter.interpret.call(null,G__48103,G__48104));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47879 = (function (){var G__48105 = ctx;
var G__48106 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48105,G__48106) : sci.impl.interpreter.interpret.call(null,G__48105,G__48106));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg47872,arg47873,arg47874,arg47875,arg47876,arg47877,arg47878,arg47879) : f.call(null,arg47872,arg47873,arg47874,arg47875,arg47876,arg47877,arg47878,arg47879));

break;
case (9):
var arg47880 = (function (){var G__48107 = ctx;
var G__48108 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48107,G__48108) : sci.impl.interpreter.interpret.call(null,G__48107,G__48108));
})();
var args__$1 = cljs.core.rest(args);
var arg47881 = (function (){var G__48109 = ctx;
var G__48110 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48109,G__48110) : sci.impl.interpreter.interpret.call(null,G__48109,G__48110));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47882 = (function (){var G__48111 = ctx;
var G__48112 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48111,G__48112) : sci.impl.interpreter.interpret.call(null,G__48111,G__48112));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47883 = (function (){var G__48113 = ctx;
var G__48114 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48113,G__48114) : sci.impl.interpreter.interpret.call(null,G__48113,G__48114));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47884 = (function (){var G__48115 = ctx;
var G__48116 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48115,G__48116) : sci.impl.interpreter.interpret.call(null,G__48115,G__48116));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47885 = (function (){var G__48117 = ctx;
var G__48118 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48117,G__48118) : sci.impl.interpreter.interpret.call(null,G__48117,G__48118));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47886 = (function (){var G__48119 = ctx;
var G__48120 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48119,G__48120) : sci.impl.interpreter.interpret.call(null,G__48119,G__48120));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47887 = (function (){var G__48121 = ctx;
var G__48122 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48121,G__48122) : sci.impl.interpreter.interpret.call(null,G__48121,G__48122));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47888 = (function (){var G__48123 = ctx;
var G__48124 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48123,G__48124) : sci.impl.interpreter.interpret.call(null,G__48123,G__48124));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg47880,arg47881,arg47882,arg47883,arg47884,arg47885,arg47886,arg47887,arg47888) : f.call(null,arg47880,arg47881,arg47882,arg47883,arg47884,arg47885,arg47886,arg47887,arg47888));

break;
case (10):
var arg47889 = (function (){var G__48125 = ctx;
var G__48126 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48125,G__48126) : sci.impl.interpreter.interpret.call(null,G__48125,G__48126));
})();
var args__$1 = cljs.core.rest(args);
var arg47890 = (function (){var G__48127 = ctx;
var G__48128 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48127,G__48128) : sci.impl.interpreter.interpret.call(null,G__48127,G__48128));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47891 = (function (){var G__48129 = ctx;
var G__48130 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48129,G__48130) : sci.impl.interpreter.interpret.call(null,G__48129,G__48130));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47892 = (function (){var G__48131 = ctx;
var G__48132 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48131,G__48132) : sci.impl.interpreter.interpret.call(null,G__48131,G__48132));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47893 = (function (){var G__48133 = ctx;
var G__48134 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48133,G__48134) : sci.impl.interpreter.interpret.call(null,G__48133,G__48134));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47894 = (function (){var G__48135 = ctx;
var G__48136 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48135,G__48136) : sci.impl.interpreter.interpret.call(null,G__48135,G__48136));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47895 = (function (){var G__48137 = ctx;
var G__48138 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48137,G__48138) : sci.impl.interpreter.interpret.call(null,G__48137,G__48138));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47896 = (function (){var G__48139 = ctx;
var G__48140 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48139,G__48140) : sci.impl.interpreter.interpret.call(null,G__48139,G__48140));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47897 = (function (){var G__48141 = ctx;
var G__48142 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48141,G__48142) : sci.impl.interpreter.interpret.call(null,G__48141,G__48142));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47898 = (function (){var G__48143 = ctx;
var G__48144 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48143,G__48144) : sci.impl.interpreter.interpret.call(null,G__48143,G__48144));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg47889,arg47890,arg47891,arg47892,arg47893,arg47894,arg47895,arg47896,arg47897,arg47898) : f.call(null,arg47889,arg47890,arg47891,arg47892,arg47893,arg47894,arg47895,arg47896,arg47897,arg47898));

break;
case (11):
var arg47899 = (function (){var G__48145 = ctx;
var G__48146 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48145,G__48146) : sci.impl.interpreter.interpret.call(null,G__48145,G__48146));
})();
var args__$1 = cljs.core.rest(args);
var arg47900 = (function (){var G__48147 = ctx;
var G__48148 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48147,G__48148) : sci.impl.interpreter.interpret.call(null,G__48147,G__48148));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47901 = (function (){var G__48149 = ctx;
var G__48150 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48149,G__48150) : sci.impl.interpreter.interpret.call(null,G__48149,G__48150));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47902 = (function (){var G__48151 = ctx;
var G__48152 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48151,G__48152) : sci.impl.interpreter.interpret.call(null,G__48151,G__48152));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47903 = (function (){var G__48153 = ctx;
var G__48154 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48153,G__48154) : sci.impl.interpreter.interpret.call(null,G__48153,G__48154));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47904 = (function (){var G__48155 = ctx;
var G__48156 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48155,G__48156) : sci.impl.interpreter.interpret.call(null,G__48155,G__48156));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47905 = (function (){var G__48157 = ctx;
var G__48158 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48157,G__48158) : sci.impl.interpreter.interpret.call(null,G__48157,G__48158));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47906 = (function (){var G__48159 = ctx;
var G__48160 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48159,G__48160) : sci.impl.interpreter.interpret.call(null,G__48159,G__48160));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47907 = (function (){var G__48161 = ctx;
var G__48162 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48161,G__48162) : sci.impl.interpreter.interpret.call(null,G__48161,G__48162));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47908 = (function (){var G__48163 = ctx;
var G__48164 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48163,G__48164) : sci.impl.interpreter.interpret.call(null,G__48163,G__48164));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg47909 = (function (){var G__48165 = ctx;
var G__48166 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48165,G__48166) : sci.impl.interpreter.interpret.call(null,G__48165,G__48166));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg47899,arg47900,arg47901,arg47902,arg47903,arg47904,arg47905,arg47906,arg47907,arg47908,arg47909) : f.call(null,arg47899,arg47900,arg47901,arg47902,arg47903,arg47904,arg47905,arg47906,arg47907,arg47908,arg47909));

break;
case (12):
var arg47910 = (function (){var G__48167 = ctx;
var G__48168 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48167,G__48168) : sci.impl.interpreter.interpret.call(null,G__48167,G__48168));
})();
var args__$1 = cljs.core.rest(args);
var arg47911 = (function (){var G__48169 = ctx;
var G__48170 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48169,G__48170) : sci.impl.interpreter.interpret.call(null,G__48169,G__48170));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47912 = (function (){var G__48171 = ctx;
var G__48172 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48171,G__48172) : sci.impl.interpreter.interpret.call(null,G__48171,G__48172));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47913 = (function (){var G__48173 = ctx;
var G__48174 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48173,G__48174) : sci.impl.interpreter.interpret.call(null,G__48173,G__48174));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47914 = (function (){var G__48175 = ctx;
var G__48176 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48175,G__48176) : sci.impl.interpreter.interpret.call(null,G__48175,G__48176));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47915 = (function (){var G__48177 = ctx;
var G__48178 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48177,G__48178) : sci.impl.interpreter.interpret.call(null,G__48177,G__48178));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47916 = (function (){var G__48179 = ctx;
var G__48180 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48179,G__48180) : sci.impl.interpreter.interpret.call(null,G__48179,G__48180));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47917 = (function (){var G__48181 = ctx;
var G__48182 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48181,G__48182) : sci.impl.interpreter.interpret.call(null,G__48181,G__48182));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47918 = (function (){var G__48183 = ctx;
var G__48184 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48183,G__48184) : sci.impl.interpreter.interpret.call(null,G__48183,G__48184));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47919 = (function (){var G__48185 = ctx;
var G__48186 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48185,G__48186) : sci.impl.interpreter.interpret.call(null,G__48185,G__48186));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg47920 = (function (){var G__48187 = ctx;
var G__48188 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48187,G__48188) : sci.impl.interpreter.interpret.call(null,G__48187,G__48188));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg47921 = (function (){var G__48189 = ctx;
var G__48190 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48189,G__48190) : sci.impl.interpreter.interpret.call(null,G__48189,G__48190));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg47910,arg47911,arg47912,arg47913,arg47914,arg47915,arg47916,arg47917,arg47918,arg47919,arg47920,arg47921) : f.call(null,arg47910,arg47911,arg47912,arg47913,arg47914,arg47915,arg47916,arg47917,arg47918,arg47919,arg47920,arg47921));

break;
case (13):
var arg47922 = (function (){var G__48191 = ctx;
var G__48192 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48191,G__48192) : sci.impl.interpreter.interpret.call(null,G__48191,G__48192));
})();
var args__$1 = cljs.core.rest(args);
var arg47923 = (function (){var G__48193 = ctx;
var G__48194 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48193,G__48194) : sci.impl.interpreter.interpret.call(null,G__48193,G__48194));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47924 = (function (){var G__48195 = ctx;
var G__48196 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48195,G__48196) : sci.impl.interpreter.interpret.call(null,G__48195,G__48196));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47925 = (function (){var G__48197 = ctx;
var G__48198 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48197,G__48198) : sci.impl.interpreter.interpret.call(null,G__48197,G__48198));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47926 = (function (){var G__48199 = ctx;
var G__48200 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48199,G__48200) : sci.impl.interpreter.interpret.call(null,G__48199,G__48200));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47927 = (function (){var G__48201 = ctx;
var G__48202 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48201,G__48202) : sci.impl.interpreter.interpret.call(null,G__48201,G__48202));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47928 = (function (){var G__48203 = ctx;
var G__48204 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48203,G__48204) : sci.impl.interpreter.interpret.call(null,G__48203,G__48204));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47929 = (function (){var G__48205 = ctx;
var G__48206 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48205,G__48206) : sci.impl.interpreter.interpret.call(null,G__48205,G__48206));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47930 = (function (){var G__48207 = ctx;
var G__48208 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48207,G__48208) : sci.impl.interpreter.interpret.call(null,G__48207,G__48208));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47931 = (function (){var G__48209 = ctx;
var G__48210 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48209,G__48210) : sci.impl.interpreter.interpret.call(null,G__48209,G__48210));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg47932 = (function (){var G__48211 = ctx;
var G__48212 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48211,G__48212) : sci.impl.interpreter.interpret.call(null,G__48211,G__48212));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg47933 = (function (){var G__48213 = ctx;
var G__48214 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48213,G__48214) : sci.impl.interpreter.interpret.call(null,G__48213,G__48214));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg47934 = (function (){var G__48215 = ctx;
var G__48216 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48215,G__48216) : sci.impl.interpreter.interpret.call(null,G__48215,G__48216));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg47922,arg47923,arg47924,arg47925,arg47926,arg47927,arg47928,arg47929,arg47930,arg47931,arg47932,arg47933,arg47934) : f.call(null,arg47922,arg47923,arg47924,arg47925,arg47926,arg47927,arg47928,arg47929,arg47930,arg47931,arg47932,arg47933,arg47934));

break;
case (14):
var arg47935 = (function (){var G__48217 = ctx;
var G__48218 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48217,G__48218) : sci.impl.interpreter.interpret.call(null,G__48217,G__48218));
})();
var args__$1 = cljs.core.rest(args);
var arg47936 = (function (){var G__48219 = ctx;
var G__48220 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48219,G__48220) : sci.impl.interpreter.interpret.call(null,G__48219,G__48220));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47937 = (function (){var G__48221 = ctx;
var G__48222 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48221,G__48222) : sci.impl.interpreter.interpret.call(null,G__48221,G__48222));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47938 = (function (){var G__48223 = ctx;
var G__48224 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48223,G__48224) : sci.impl.interpreter.interpret.call(null,G__48223,G__48224));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47939 = (function (){var G__48225 = ctx;
var G__48226 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48225,G__48226) : sci.impl.interpreter.interpret.call(null,G__48225,G__48226));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47940 = (function (){var G__48227 = ctx;
var G__48228 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48227,G__48228) : sci.impl.interpreter.interpret.call(null,G__48227,G__48228));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47941 = (function (){var G__48229 = ctx;
var G__48230 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48229,G__48230) : sci.impl.interpreter.interpret.call(null,G__48229,G__48230));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47942 = (function (){var G__48231 = ctx;
var G__48232 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48231,G__48232) : sci.impl.interpreter.interpret.call(null,G__48231,G__48232));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47943 = (function (){var G__48233 = ctx;
var G__48234 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48233,G__48234) : sci.impl.interpreter.interpret.call(null,G__48233,G__48234));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47944 = (function (){var G__48235 = ctx;
var G__48236 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48235,G__48236) : sci.impl.interpreter.interpret.call(null,G__48235,G__48236));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg47945 = (function (){var G__48237 = ctx;
var G__48238 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48237,G__48238) : sci.impl.interpreter.interpret.call(null,G__48237,G__48238));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg47946 = (function (){var G__48239 = ctx;
var G__48240 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48239,G__48240) : sci.impl.interpreter.interpret.call(null,G__48239,G__48240));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg47947 = (function (){var G__48241 = ctx;
var G__48242 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48241,G__48242) : sci.impl.interpreter.interpret.call(null,G__48241,G__48242));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg47948 = (function (){var G__48243 = ctx;
var G__48244 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48243,G__48244) : sci.impl.interpreter.interpret.call(null,G__48243,G__48244));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg47935,arg47936,arg47937,arg47938,arg47939,arg47940,arg47941,arg47942,arg47943,arg47944,arg47945,arg47946,arg47947,arg47948) : f.call(null,arg47935,arg47936,arg47937,arg47938,arg47939,arg47940,arg47941,arg47942,arg47943,arg47944,arg47945,arg47946,arg47947,arg47948));

break;
case (15):
var arg47949 = (function (){var G__48245 = ctx;
var G__48246 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48245,G__48246) : sci.impl.interpreter.interpret.call(null,G__48245,G__48246));
})();
var args__$1 = cljs.core.rest(args);
var arg47950 = (function (){var G__48247 = ctx;
var G__48248 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48247,G__48248) : sci.impl.interpreter.interpret.call(null,G__48247,G__48248));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47951 = (function (){var G__48249 = ctx;
var G__48250 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48249,G__48250) : sci.impl.interpreter.interpret.call(null,G__48249,G__48250));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47952 = (function (){var G__48251 = ctx;
var G__48252 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48251,G__48252) : sci.impl.interpreter.interpret.call(null,G__48251,G__48252));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47953 = (function (){var G__48253 = ctx;
var G__48254 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48253,G__48254) : sci.impl.interpreter.interpret.call(null,G__48253,G__48254));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47954 = (function (){var G__48255 = ctx;
var G__48256 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48255,G__48256) : sci.impl.interpreter.interpret.call(null,G__48255,G__48256));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47955 = (function (){var G__48257 = ctx;
var G__48258 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48257,G__48258) : sci.impl.interpreter.interpret.call(null,G__48257,G__48258));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47956 = (function (){var G__48259 = ctx;
var G__48260 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48259,G__48260) : sci.impl.interpreter.interpret.call(null,G__48259,G__48260));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47957 = (function (){var G__48261 = ctx;
var G__48262 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48261,G__48262) : sci.impl.interpreter.interpret.call(null,G__48261,G__48262));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47958 = (function (){var G__48263 = ctx;
var G__48264 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48263,G__48264) : sci.impl.interpreter.interpret.call(null,G__48263,G__48264));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg47959 = (function (){var G__48265 = ctx;
var G__48266 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48265,G__48266) : sci.impl.interpreter.interpret.call(null,G__48265,G__48266));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg47960 = (function (){var G__48267 = ctx;
var G__48268 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48267,G__48268) : sci.impl.interpreter.interpret.call(null,G__48267,G__48268));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg47961 = (function (){var G__48269 = ctx;
var G__48270 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48269,G__48270) : sci.impl.interpreter.interpret.call(null,G__48269,G__48270));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg47962 = (function (){var G__48271 = ctx;
var G__48272 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48271,G__48272) : sci.impl.interpreter.interpret.call(null,G__48271,G__48272));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg47963 = (function (){var G__48273 = ctx;
var G__48274 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48273,G__48274) : sci.impl.interpreter.interpret.call(null,G__48273,G__48274));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg47949,arg47950,arg47951,arg47952,arg47953,arg47954,arg47955,arg47956,arg47957,arg47958,arg47959,arg47960,arg47961,arg47962,arg47963) : f.call(null,arg47949,arg47950,arg47951,arg47952,arg47953,arg47954,arg47955,arg47956,arg47957,arg47958,arg47959,arg47960,arg47961,arg47962,arg47963));

break;
case (16):
var arg47964 = (function (){var G__48275 = ctx;
var G__48276 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48275,G__48276) : sci.impl.interpreter.interpret.call(null,G__48275,G__48276));
})();
var args__$1 = cljs.core.rest(args);
var arg47965 = (function (){var G__48277 = ctx;
var G__48278 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48277,G__48278) : sci.impl.interpreter.interpret.call(null,G__48277,G__48278));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47966 = (function (){var G__48279 = ctx;
var G__48280 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48279,G__48280) : sci.impl.interpreter.interpret.call(null,G__48279,G__48280));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47967 = (function (){var G__48281 = ctx;
var G__48282 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48281,G__48282) : sci.impl.interpreter.interpret.call(null,G__48281,G__48282));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47968 = (function (){var G__48283 = ctx;
var G__48284 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48283,G__48284) : sci.impl.interpreter.interpret.call(null,G__48283,G__48284));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47969 = (function (){var G__48285 = ctx;
var G__48286 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48285,G__48286) : sci.impl.interpreter.interpret.call(null,G__48285,G__48286));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47970 = (function (){var G__48287 = ctx;
var G__48288 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48287,G__48288) : sci.impl.interpreter.interpret.call(null,G__48287,G__48288));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47971 = (function (){var G__48289 = ctx;
var G__48290 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48289,G__48290) : sci.impl.interpreter.interpret.call(null,G__48289,G__48290));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47972 = (function (){var G__48291 = ctx;
var G__48292 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48291,G__48292) : sci.impl.interpreter.interpret.call(null,G__48291,G__48292));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47973 = (function (){var G__48293 = ctx;
var G__48294 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48293,G__48294) : sci.impl.interpreter.interpret.call(null,G__48293,G__48294));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg47974 = (function (){var G__48295 = ctx;
var G__48296 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48295,G__48296) : sci.impl.interpreter.interpret.call(null,G__48295,G__48296));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg47975 = (function (){var G__48297 = ctx;
var G__48298 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48297,G__48298) : sci.impl.interpreter.interpret.call(null,G__48297,G__48298));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg47976 = (function (){var G__48299 = ctx;
var G__48300 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48299,G__48300) : sci.impl.interpreter.interpret.call(null,G__48299,G__48300));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg47977 = (function (){var G__48301 = ctx;
var G__48302 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48301,G__48302) : sci.impl.interpreter.interpret.call(null,G__48301,G__48302));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg47978 = (function (){var G__48303 = ctx;
var G__48304 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48303,G__48304) : sci.impl.interpreter.interpret.call(null,G__48303,G__48304));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg47979 = (function (){var G__48305 = ctx;
var G__48306 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48305,G__48306) : sci.impl.interpreter.interpret.call(null,G__48305,G__48306));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg47964,arg47965,arg47966,arg47967,arg47968,arg47969,arg47970,arg47971,arg47972,arg47973,arg47974,arg47975,arg47976,arg47977,arg47978,arg47979) : f.call(null,arg47964,arg47965,arg47966,arg47967,arg47968,arg47969,arg47970,arg47971,arg47972,arg47973,arg47974,arg47975,arg47976,arg47977,arg47978,arg47979));

break;
case (17):
var arg47980 = (function (){var G__48307 = ctx;
var G__48308 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48307,G__48308) : sci.impl.interpreter.interpret.call(null,G__48307,G__48308));
})();
var args__$1 = cljs.core.rest(args);
var arg47981 = (function (){var G__48309 = ctx;
var G__48310 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48309,G__48310) : sci.impl.interpreter.interpret.call(null,G__48309,G__48310));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47982 = (function (){var G__48311 = ctx;
var G__48312 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48311,G__48312) : sci.impl.interpreter.interpret.call(null,G__48311,G__48312));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg47983 = (function (){var G__48313 = ctx;
var G__48314 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48313,G__48314) : sci.impl.interpreter.interpret.call(null,G__48313,G__48314));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg47984 = (function (){var G__48315 = ctx;
var G__48316 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48315,G__48316) : sci.impl.interpreter.interpret.call(null,G__48315,G__48316));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg47985 = (function (){var G__48317 = ctx;
var G__48318 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48317,G__48318) : sci.impl.interpreter.interpret.call(null,G__48317,G__48318));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg47986 = (function (){var G__48319 = ctx;
var G__48320 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48319,G__48320) : sci.impl.interpreter.interpret.call(null,G__48319,G__48320));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg47987 = (function (){var G__48321 = ctx;
var G__48322 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48321,G__48322) : sci.impl.interpreter.interpret.call(null,G__48321,G__48322));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg47988 = (function (){var G__48323 = ctx;
var G__48324 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48323,G__48324) : sci.impl.interpreter.interpret.call(null,G__48323,G__48324));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg47989 = (function (){var G__48325 = ctx;
var G__48326 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48325,G__48326) : sci.impl.interpreter.interpret.call(null,G__48325,G__48326));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg47990 = (function (){var G__48327 = ctx;
var G__48328 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48327,G__48328) : sci.impl.interpreter.interpret.call(null,G__48327,G__48328));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg47991 = (function (){var G__48329 = ctx;
var G__48330 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48329,G__48330) : sci.impl.interpreter.interpret.call(null,G__48329,G__48330));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg47992 = (function (){var G__48331 = ctx;
var G__48332 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48331,G__48332) : sci.impl.interpreter.interpret.call(null,G__48331,G__48332));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg47993 = (function (){var G__48333 = ctx;
var G__48334 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48333,G__48334) : sci.impl.interpreter.interpret.call(null,G__48333,G__48334));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg47994 = (function (){var G__48335 = ctx;
var G__48336 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48335,G__48336) : sci.impl.interpreter.interpret.call(null,G__48335,G__48336));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg47995 = (function (){var G__48337 = ctx;
var G__48338 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48337,G__48338) : sci.impl.interpreter.interpret.call(null,G__48337,G__48338));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg47996 = (function (){var G__48339 = ctx;
var G__48340 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48339,G__48340) : sci.impl.interpreter.interpret.call(null,G__48339,G__48340));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg47980,arg47981,arg47982,arg47983,arg47984,arg47985,arg47986,arg47987,arg47988,arg47989,arg47990,arg47991,arg47992,arg47993,arg47994,arg47995,arg47996) : f.call(null,arg47980,arg47981,arg47982,arg47983,arg47984,arg47985,arg47986,arg47987,arg47988,arg47989,arg47990,arg47991,arg47992,arg47993,arg47994,arg47995,arg47996));

break;
case (18):
var arg47997 = (function (){var G__48341 = ctx;
var G__48342 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48341,G__48342) : sci.impl.interpreter.interpret.call(null,G__48341,G__48342));
})();
var args__$1 = cljs.core.rest(args);
var arg47998 = (function (){var G__48343 = ctx;
var G__48344 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48343,G__48344) : sci.impl.interpreter.interpret.call(null,G__48343,G__48344));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg47999 = (function (){var G__48345 = ctx;
var G__48346 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48345,G__48346) : sci.impl.interpreter.interpret.call(null,G__48345,G__48346));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg48000 = (function (){var G__48347 = ctx;
var G__48348 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48347,G__48348) : sci.impl.interpreter.interpret.call(null,G__48347,G__48348));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg48001 = (function (){var G__48349 = ctx;
var G__48350 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48349,G__48350) : sci.impl.interpreter.interpret.call(null,G__48349,G__48350));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg48002 = (function (){var G__48351 = ctx;
var G__48352 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48351,G__48352) : sci.impl.interpreter.interpret.call(null,G__48351,G__48352));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg48003 = (function (){var G__48353 = ctx;
var G__48354 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48353,G__48354) : sci.impl.interpreter.interpret.call(null,G__48353,G__48354));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg48004 = (function (){var G__48355 = ctx;
var G__48356 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48355,G__48356) : sci.impl.interpreter.interpret.call(null,G__48355,G__48356));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg48005 = (function (){var G__48357 = ctx;
var G__48358 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48357,G__48358) : sci.impl.interpreter.interpret.call(null,G__48357,G__48358));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg48006 = (function (){var G__48359 = ctx;
var G__48360 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48359,G__48360) : sci.impl.interpreter.interpret.call(null,G__48359,G__48360));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg48007 = (function (){var G__48361 = ctx;
var G__48362 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48361,G__48362) : sci.impl.interpreter.interpret.call(null,G__48361,G__48362));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg48008 = (function (){var G__48363 = ctx;
var G__48364 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48363,G__48364) : sci.impl.interpreter.interpret.call(null,G__48363,G__48364));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg48009 = (function (){var G__48365 = ctx;
var G__48366 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48365,G__48366) : sci.impl.interpreter.interpret.call(null,G__48365,G__48366));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg48010 = (function (){var G__48367 = ctx;
var G__48368 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48367,G__48368) : sci.impl.interpreter.interpret.call(null,G__48367,G__48368));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg48011 = (function (){var G__48369 = ctx;
var G__48370 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48369,G__48370) : sci.impl.interpreter.interpret.call(null,G__48369,G__48370));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg48012 = (function (){var G__48371 = ctx;
var G__48372 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48371,G__48372) : sci.impl.interpreter.interpret.call(null,G__48371,G__48372));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg48013 = (function (){var G__48373 = ctx;
var G__48374 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48373,G__48374) : sci.impl.interpreter.interpret.call(null,G__48373,G__48374));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg48014 = (function (){var G__48375 = ctx;
var G__48376 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48375,G__48376) : sci.impl.interpreter.interpret.call(null,G__48375,G__48376));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg47997,arg47998,arg47999,arg48000,arg48001,arg48002,arg48003,arg48004,arg48005,arg48006,arg48007,arg48008,arg48009,arg48010,arg48011,arg48012,arg48013,arg48014) : f.call(null,arg47997,arg47998,arg47999,arg48000,arg48001,arg48002,arg48003,arg48004,arg48005,arg48006,arg48007,arg48008,arg48009,arg48010,arg48011,arg48012,arg48013,arg48014));

break;
case (19):
var arg48015 = (function (){var G__48377 = ctx;
var G__48378 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48377,G__48378) : sci.impl.interpreter.interpret.call(null,G__48377,G__48378));
})();
var args__$1 = cljs.core.rest(args);
var arg48016 = (function (){var G__48379 = ctx;
var G__48380 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48379,G__48380) : sci.impl.interpreter.interpret.call(null,G__48379,G__48380));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg48017 = (function (){var G__48381 = ctx;
var G__48382 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48381,G__48382) : sci.impl.interpreter.interpret.call(null,G__48381,G__48382));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg48018 = (function (){var G__48383 = ctx;
var G__48384 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48383,G__48384) : sci.impl.interpreter.interpret.call(null,G__48383,G__48384));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg48019 = (function (){var G__48385 = ctx;
var G__48386 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48385,G__48386) : sci.impl.interpreter.interpret.call(null,G__48385,G__48386));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg48020 = (function (){var G__48387 = ctx;
var G__48388 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48387,G__48388) : sci.impl.interpreter.interpret.call(null,G__48387,G__48388));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg48021 = (function (){var G__48389 = ctx;
var G__48390 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48389,G__48390) : sci.impl.interpreter.interpret.call(null,G__48389,G__48390));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg48022 = (function (){var G__48391 = ctx;
var G__48392 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48391,G__48392) : sci.impl.interpreter.interpret.call(null,G__48391,G__48392));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg48023 = (function (){var G__48393 = ctx;
var G__48394 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48393,G__48394) : sci.impl.interpreter.interpret.call(null,G__48393,G__48394));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg48024 = (function (){var G__48395 = ctx;
var G__48396 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48395,G__48396) : sci.impl.interpreter.interpret.call(null,G__48395,G__48396));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg48025 = (function (){var G__48397 = ctx;
var G__48398 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48397,G__48398) : sci.impl.interpreter.interpret.call(null,G__48397,G__48398));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg48026 = (function (){var G__48399 = ctx;
var G__48400 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48399,G__48400) : sci.impl.interpreter.interpret.call(null,G__48399,G__48400));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg48027 = (function (){var G__48401 = ctx;
var G__48402 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48401,G__48402) : sci.impl.interpreter.interpret.call(null,G__48401,G__48402));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg48028 = (function (){var G__48403 = ctx;
var G__48404 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48403,G__48404) : sci.impl.interpreter.interpret.call(null,G__48403,G__48404));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg48029 = (function (){var G__48405 = ctx;
var G__48406 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48405,G__48406) : sci.impl.interpreter.interpret.call(null,G__48405,G__48406));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg48030 = (function (){var G__48407 = ctx;
var G__48408 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48407,G__48408) : sci.impl.interpreter.interpret.call(null,G__48407,G__48408));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg48031 = (function (){var G__48409 = ctx;
var G__48410 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48409,G__48410) : sci.impl.interpreter.interpret.call(null,G__48409,G__48410));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg48032 = (function (){var G__48411 = ctx;
var G__48412 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48411,G__48412) : sci.impl.interpreter.interpret.call(null,G__48411,G__48412));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg48033 = (function (){var G__48413 = ctx;
var G__48414 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48413,G__48414) : sci.impl.interpreter.interpret.call(null,G__48413,G__48414));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg48015,arg48016,arg48017,arg48018,arg48019,arg48020,arg48021,arg48022,arg48023,arg48024,arg48025,arg48026,arg48027,arg48028,arg48029,arg48030,arg48031,arg48032,arg48033) : f.call(null,arg48015,arg48016,arg48017,arg48018,arg48019,arg48020,arg48021,arg48022,arg48023,arg48024,arg48025,arg48026,arg48027,arg48028,arg48029,arg48030,arg48031,arg48032,arg48033));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__48415 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__48415)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__48415)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__48415)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__48415)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__48415)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__48415)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__48416 = ctx;
var G__48417 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48416,G__48417) : sci.impl.interpreter.interpret.call(null,G__48416,G__48417));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__48415)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__48415)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__48415)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__48415)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__48415)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__48415)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__48415)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__48415)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__48415)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__48418 = ctx;
var G__48419 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48418,G__48419) : sci.impl.interpreter.interpret.call(null,G__48418,G__48419));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__48415)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__48415)){
return (new cljs.core.LazySeq(null,(function (){var G__48420 = ctx;
var G__48421 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__48420,G__48421) : sci.impl.interpreter.interpret.call(null,G__48420,G__48421));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__48415)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__48415)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__48415)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__48415)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48415)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
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
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__48423 = op;
var G__48424 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__48423,G__48424) : sci.impl.utils.kw_identical_QMARK_.call(null,G__48423,G__48424));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e48422){if((e48422 instanceof Error)){
var e = e48422;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e48422;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__48431 = op;
var G__48431__$1 = (((G__48431 instanceof cljs.core.Keyword))?G__48431.fqn:null);
switch (G__48431__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48428_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__48428_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__48428_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48429_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__48429_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__48429_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48430_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__48430_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__48430_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__48530 = cljs.core.rest(exprs);
var G__48531 = (function (){var G__48434 = ctx;
var G__48435 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__48434,G__48435) : sci.impl.interpreter.eval_form.call(null,G__48434,G__48435));
})();
exprs = G__48530;
ret = G__48531;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__48438 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__48439 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__48438,G__48439) : sci.impl.utils.kw_identical_QMARK_.call(null,G__48438,G__48439));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__48534 = ret__$1;
ret = G__48534;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__48441 = arguments.length;
switch (G__48441) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
