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
var G__57230 = xs;
args__$2 = G__57230;
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
var G__57231 = xs;
args__$2 = G__57231;
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
var len__4789__auto___57232 = arguments.length;
var i__4790__auto___57233 = (0);
while(true){
if((i__4790__auto___57233 < len__4789__auto___57232)){
args__4795__auto__.push((arguments[i__4790__auto___57233]));

var G__57234 = (i__4790__auto___57233 + (1));
i__4790__auto___57233 = G__57234;
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
var G__57235 = ctx__$2;
var G__57236 = rest_let_bindings;
ctx__$1 = G__57235;
let_bindings__$1 = G__57236;
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
var G__57237 = nexprs;
exprs__$1 = G__57237;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq56464){
var G__56465 = cljs.core.first(seq56464);
var seq56464__$1 = cljs.core.next(seq56464);
var G__56466 = cljs.core.first(seq56464__$1);
var seq56464__$2 = cljs.core.next(seq56464__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56465,G__56466,seq56464__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__56470){
var vec__56471 = p__56470;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(3),null);
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
var v = (cljs.core.truth_((function (){var G__56474 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__56475 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__56474,G__56475) : sci.impl.utils.kw_identical_QMARK_.call(null,G__56474,G__56475));
})())?(function (){var G__56476 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56476,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__56476;
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
var vec__56481 = libspec;
var seq__56482 = cljs.core.seq(vec__56481);
var first__56483 = cljs.core.first(seq__56482);
var seq__56482__$1 = cljs.core.next(seq__56482);
var lib_name = first__56483;
var opts = seq__56482__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__56487 = opts;
var vec__56488 = G__56487;
var seq__56489 = cljs.core.seq(vec__56488);
var first__56490 = cljs.core.first(seq__56489);
var seq__56489__$1 = cljs.core.next(seq__56489);
var opt_name = first__56490;
var first__56490__$1 = cljs.core.first(seq__56489__$1);
var seq__56489__$2 = cljs.core.next(seq__56489__$1);
var fst_opt = first__56490__$1;
var rst_opts = seq__56489__$2;
var ret__$1 = ret;
var G__56487__$1 = G__56487;
while(true){
var ret__$2 = ret__$1;
var vec__56495 = G__56487__$1;
var seq__56496 = cljs.core.seq(vec__56495);
var first__56497 = cljs.core.first(seq__56496);
var seq__56496__$1 = cljs.core.next(seq__56496);
var opt_name__$1 = first__56497;
var first__56497__$1 = cljs.core.first(seq__56496__$1);
var seq__56496__$2 = cljs.core.next(seq__56496__$1);
var fst_opt__$1 = first__56497__$1;
var rst_opts__$1 = seq__56496__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__56498 = opt_name__$1;
var G__56498__$1 = (((G__56498 instanceof cljs.core.Keyword))?G__56498.fqn:null);
switch (G__56498__$1) {
case "as":
var G__57239 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__57240 = rst_opts__$1;
ret__$1 = G__57239;
G__56487__$1 = G__57240;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__57241 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__57242 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__57241;
G__56487__$1 = G__57242;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__57243 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__57244 = rst_opts__$1;
ret__$1 = G__57243;
G__56487__$1 = G__57244;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56498__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__56499){
var vec__56500 = p__56499;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56500,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__56503){
var map__56504 = p__56503;
var map__56504__$1 = (((((!((map__56504 == null))))?(((((map__56504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56504):map__56504);
var _parsed_libspec = map__56504__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__56508 = new cljs.core.Keyword(null,"all","all",892129742);
var G__56509 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__56508,G__56509) : sci.impl.utils.kw_identical_QMARK_.call(null,G__56508,G__56509));
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
var vec__56510 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56510,(1),null);
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
var map__56514 = sci.impl.interpreter.parse_libspec(libspec);
var map__56514__$1 = (((((!((map__56514 == null))))?(((((map__56514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56514):map__56514);
var parsed_libspec = map__56514__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56514__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56514__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__56516 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__56516) : load_fn.call(null,G__56516));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__56517 = temp__5733__auto____$2;
var map__56517__$1 = (((((!((map__56517 == null))))?(((((map__56517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56517):map__56517);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56517__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__56523_57245 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__56524_57246 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__56523_57245,G__56524_57246) : sci.impl.interpreter.eval_string_STAR_.call(null,G__56523_57245,G__56524_57246));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e56519){if((e56519 instanceof Error)){
var e_57247 = e56519;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_57247;
} else {
throw e56519;

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
var len__4789__auto___57248 = arguments.length;
var i__4790__auto___57249 = (0);
while(true){
if((i__4790__auto___57249 < len__4789__auto___57248)){
args__4795__auto__.push((arguments[i__4790__auto___57249]));

var G__57250 = (i__4790__auto___57249 + (1));
i__4790__auto___57249 = G__57250;
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
var ret = (function (){var G__56538 = ctx;
var G__56539 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56538,G__56539) : sci.impl.interpreter.interpret.call(null,G__56538,G__56539));
})();
if((ret instanceof cljs.core.Symbol)){
var G__57251 = (function (){var G__56541 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56541,current_libspec);
} else {
return G__56541;
}
})();
var G__57252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__57253 = cljs.core.next(args__$1);
libspecs = G__57251;
current_libspec = G__57252;
args__$1 = G__57253;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__57254 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__57255 = null;
var G__57256 = cljs.core.next(args__$1);
libspecs = G__57254;
current_libspec = G__57255;
args__$1 = G__57256;
continue;
} else {
var G__57257 = (function (){var G__56544 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56544,current_libspec);
} else {
return G__56544;
}
})();
var G__57258 = ret;
var G__57259 = cljs.core.next(args__$1);
libspecs = G__57257;
current_libspec = G__57258;
args__$1 = G__57259;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__56545 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56545,current_libspec);
} else {
return G__56545;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__56529_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__56529_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq56530){
var G__56531 = cljs.core.first(seq56530);
var seq56530__$1 = cljs.core.next(seq56530);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56531,seq56530__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57260 = arguments.length;
var i__4790__auto___57261 = (0);
while(true){
if((i__4790__auto___57261 < len__4789__auto___57260)){
args__4795__auto__.push((arguments[i__4790__auto___57261]));

var G__57262 = (i__4790__auto___57261 + (1));
i__4790__auto___57261 = G__57262;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq56546){
var G__56547 = cljs.core.first(seq56546);
var seq56546__$1 = cljs.core.next(seq56546);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56547,seq56546__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__56563){
var vec__56564 = p__56563;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56564,(0),null);
var map__56567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56564,(1),null);
var map__56567__$1 = (((((!((map__56567 == null))))?(((((map__56567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56567):map__56567);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__56569 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56569,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56569,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__56572 = ctx;
var G__56573 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56572,G__56573) : sci.impl.interpreter.interpret.call(null,G__56572,G__56573));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__56574 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__56574__$1 = (((((!((map__56574 == null))))?(((((map__56574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56574):map__56574);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__56582 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__56583 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__56583);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__56582);
}}catch (e56576){if((e56576 instanceof Error)){
var e = e56576;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__56577 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__56578 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56577,G__56578) : sci.impl.interpreter.interpret.call(null,G__56577,G__56578));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__56579 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56579,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56579,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e56576;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__56584){
var vec__56585 = p__56584;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56588_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__56588_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__56588_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__56590){
var vec__56591 = p__56590;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56591,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56591,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56591,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56589_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__56589_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__56589_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__56596,p__56597){
var map__56598 = p__56596;
var map__56598__$1 = (((((!((map__56598 == null))))?(((((map__56598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56598):map__56598);
var ctx = map__56598__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56598__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__56599 = p__56597;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56599,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56599,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56599,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56599,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56595_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__56595_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__56595_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__56603){
var vec__56604 = p__56603;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56604,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56604,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__56607){
var vec__56608 = p__56607;
var seq__56609 = cljs.core.seq(vec__56608);
var first__56610 = cljs.core.first(seq__56609);
var seq__56609__$1 = cljs.core.next(seq__56609);
var _ = first__56610;
var first__56610__$1 = cljs.core.first(seq__56609__$1);
var seq__56609__$2 = cljs.core.next(seq__56609__$1);
var ns_sym = first__56610__$1;
var exprs = seq__56609__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__56611 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56611,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56611,(1),null);
var G__56614_57263 = k;
var G__56614_57264__$1 = (((G__56614_57263 instanceof cljs.core.Keyword))?G__56614_57263.fqn:null);
switch (G__56614_57264__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__56614_57263,G__56614_57264__$1,vec__56611,k,v,ns_sym__$1,vec__56608,seq__56609,first__56610,seq__56609__$1,_,first__56610__$1,seq__56609__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__56614_57263,G__56614_57264__$1,vec__56611,k,v,ns_sym__$1,vec__56608,seq__56609,first__56610,seq__56609__$1,_,first__56610__$1,seq__56609__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56614_57264__$1)].join('')));

}

var G__57266 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__57266;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__56615){
var vec__56616 = p__56615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56616,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56616,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56616,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__56622 = exprs;
var vec__56623 = G__56622;
var seq__56624 = cljs.core.seq(vec__56623);
var first__56625 = cljs.core.first(seq__56624);
var seq__56624__$1 = cljs.core.next(seq__56624);
var expr = first__56625;
var exprs__$1 = seq__56624__$1;
var G__56622__$1 = G__56622;
while(true){
var vec__56626 = G__56622__$1;
var seq__56627 = cljs.core.seq(vec__56626);
var first__56628 = cljs.core.first(seq__56627);
var seq__56627__$1 = cljs.core.next(seq__56627);
var expr__$1 = first__56628;
var exprs__$2 = seq__56627__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e56629){if((e56629 instanceof Error)){
var e = e56629;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e56629;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__57267 = exprs__$3;
G__56622__$1 = G__57267;
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
var G__56822 = cljs.core.count(args);
switch (G__56822) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg56632 = (function (){var G__56823 = ctx;
var G__56824 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56823,G__56824) : sci.impl.interpreter.interpret.call(null,G__56823,G__56824));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg56632) : f.call(null,arg56632));

break;
case (2):
var arg56633 = (function (){var G__56825 = ctx;
var G__56826 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56825,G__56826) : sci.impl.interpreter.interpret.call(null,G__56825,G__56826));
})();
var args__$1 = cljs.core.rest(args);
var arg56634 = (function (){var G__56827 = ctx;
var G__56828 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56827,G__56828) : sci.impl.interpreter.interpret.call(null,G__56827,G__56828));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg56633,arg56634) : f.call(null,arg56633,arg56634));

break;
case (3):
var arg56635 = (function (){var G__56829 = ctx;
var G__56830 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56829,G__56830) : sci.impl.interpreter.interpret.call(null,G__56829,G__56830));
})();
var args__$1 = cljs.core.rest(args);
var arg56636 = (function (){var G__56831 = ctx;
var G__56832 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56831,G__56832) : sci.impl.interpreter.interpret.call(null,G__56831,G__56832));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56637 = (function (){var G__56833 = ctx;
var G__56834 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56833,G__56834) : sci.impl.interpreter.interpret.call(null,G__56833,G__56834));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg56635,arg56636,arg56637) : f.call(null,arg56635,arg56636,arg56637));

break;
case (4):
var arg56638 = (function (){var G__56835 = ctx;
var G__56836 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56835,G__56836) : sci.impl.interpreter.interpret.call(null,G__56835,G__56836));
})();
var args__$1 = cljs.core.rest(args);
var arg56639 = (function (){var G__56837 = ctx;
var G__56838 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56837,G__56838) : sci.impl.interpreter.interpret.call(null,G__56837,G__56838));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56640 = (function (){var G__56839 = ctx;
var G__56840 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56839,G__56840) : sci.impl.interpreter.interpret.call(null,G__56839,G__56840));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56641 = (function (){var G__56841 = ctx;
var G__56842 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56841,G__56842) : sci.impl.interpreter.interpret.call(null,G__56841,G__56842));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg56638,arg56639,arg56640,arg56641) : f.call(null,arg56638,arg56639,arg56640,arg56641));

break;
case (5):
var arg56642 = (function (){var G__56843 = ctx;
var G__56844 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56843,G__56844) : sci.impl.interpreter.interpret.call(null,G__56843,G__56844));
})();
var args__$1 = cljs.core.rest(args);
var arg56643 = (function (){var G__56845 = ctx;
var G__56846 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56845,G__56846) : sci.impl.interpreter.interpret.call(null,G__56845,G__56846));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56644 = (function (){var G__56847 = ctx;
var G__56848 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56847,G__56848) : sci.impl.interpreter.interpret.call(null,G__56847,G__56848));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56645 = (function (){var G__56849 = ctx;
var G__56850 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56849,G__56850) : sci.impl.interpreter.interpret.call(null,G__56849,G__56850));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56646 = (function (){var G__56851 = ctx;
var G__56852 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56851,G__56852) : sci.impl.interpreter.interpret.call(null,G__56851,G__56852));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg56642,arg56643,arg56644,arg56645,arg56646) : f.call(null,arg56642,arg56643,arg56644,arg56645,arg56646));

break;
case (6):
var arg56647 = (function (){var G__56853 = ctx;
var G__56854 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56853,G__56854) : sci.impl.interpreter.interpret.call(null,G__56853,G__56854));
})();
var args__$1 = cljs.core.rest(args);
var arg56648 = (function (){var G__56855 = ctx;
var G__56856 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56855,G__56856) : sci.impl.interpreter.interpret.call(null,G__56855,G__56856));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56649 = (function (){var G__56857 = ctx;
var G__56858 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56857,G__56858) : sci.impl.interpreter.interpret.call(null,G__56857,G__56858));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56650 = (function (){var G__56859 = ctx;
var G__56860 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56859,G__56860) : sci.impl.interpreter.interpret.call(null,G__56859,G__56860));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56651 = (function (){var G__56861 = ctx;
var G__56862 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56861,G__56862) : sci.impl.interpreter.interpret.call(null,G__56861,G__56862));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56652 = (function (){var G__56863 = ctx;
var G__56864 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56863,G__56864) : sci.impl.interpreter.interpret.call(null,G__56863,G__56864));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg56647,arg56648,arg56649,arg56650,arg56651,arg56652) : f.call(null,arg56647,arg56648,arg56649,arg56650,arg56651,arg56652));

break;
case (7):
var arg56653 = (function (){var G__56865 = ctx;
var G__56866 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56865,G__56866) : sci.impl.interpreter.interpret.call(null,G__56865,G__56866));
})();
var args__$1 = cljs.core.rest(args);
var arg56654 = (function (){var G__56867 = ctx;
var G__56868 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56867,G__56868) : sci.impl.interpreter.interpret.call(null,G__56867,G__56868));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56655 = (function (){var G__56869 = ctx;
var G__56870 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56869,G__56870) : sci.impl.interpreter.interpret.call(null,G__56869,G__56870));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56656 = (function (){var G__56871 = ctx;
var G__56872 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56871,G__56872) : sci.impl.interpreter.interpret.call(null,G__56871,G__56872));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56657 = (function (){var G__56873 = ctx;
var G__56874 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56873,G__56874) : sci.impl.interpreter.interpret.call(null,G__56873,G__56874));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56658 = (function (){var G__56875 = ctx;
var G__56876 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56875,G__56876) : sci.impl.interpreter.interpret.call(null,G__56875,G__56876));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56659 = (function (){var G__56877 = ctx;
var G__56878 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56877,G__56878) : sci.impl.interpreter.interpret.call(null,G__56877,G__56878));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg56653,arg56654,arg56655,arg56656,arg56657,arg56658,arg56659) : f.call(null,arg56653,arg56654,arg56655,arg56656,arg56657,arg56658,arg56659));

break;
case (8):
var arg56660 = (function (){var G__56879 = ctx;
var G__56880 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56879,G__56880) : sci.impl.interpreter.interpret.call(null,G__56879,G__56880));
})();
var args__$1 = cljs.core.rest(args);
var arg56661 = (function (){var G__56881 = ctx;
var G__56882 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56881,G__56882) : sci.impl.interpreter.interpret.call(null,G__56881,G__56882));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56662 = (function (){var G__56883 = ctx;
var G__56884 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56883,G__56884) : sci.impl.interpreter.interpret.call(null,G__56883,G__56884));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56663 = (function (){var G__56885 = ctx;
var G__56886 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56885,G__56886) : sci.impl.interpreter.interpret.call(null,G__56885,G__56886));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56664 = (function (){var G__56887 = ctx;
var G__56888 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56887,G__56888) : sci.impl.interpreter.interpret.call(null,G__56887,G__56888));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56665 = (function (){var G__56889 = ctx;
var G__56890 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56889,G__56890) : sci.impl.interpreter.interpret.call(null,G__56889,G__56890));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56666 = (function (){var G__56891 = ctx;
var G__56892 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56891,G__56892) : sci.impl.interpreter.interpret.call(null,G__56891,G__56892));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56667 = (function (){var G__56893 = ctx;
var G__56894 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56893,G__56894) : sci.impl.interpreter.interpret.call(null,G__56893,G__56894));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg56660,arg56661,arg56662,arg56663,arg56664,arg56665,arg56666,arg56667) : f.call(null,arg56660,arg56661,arg56662,arg56663,arg56664,arg56665,arg56666,arg56667));

break;
case (9):
var arg56668 = (function (){var G__56895 = ctx;
var G__56896 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56895,G__56896) : sci.impl.interpreter.interpret.call(null,G__56895,G__56896));
})();
var args__$1 = cljs.core.rest(args);
var arg56669 = (function (){var G__56897 = ctx;
var G__56898 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56897,G__56898) : sci.impl.interpreter.interpret.call(null,G__56897,G__56898));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56670 = (function (){var G__56899 = ctx;
var G__56900 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56899,G__56900) : sci.impl.interpreter.interpret.call(null,G__56899,G__56900));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56671 = (function (){var G__56901 = ctx;
var G__56902 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56901,G__56902) : sci.impl.interpreter.interpret.call(null,G__56901,G__56902));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56672 = (function (){var G__56903 = ctx;
var G__56904 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56903,G__56904) : sci.impl.interpreter.interpret.call(null,G__56903,G__56904));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56673 = (function (){var G__56905 = ctx;
var G__56906 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56905,G__56906) : sci.impl.interpreter.interpret.call(null,G__56905,G__56906));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56674 = (function (){var G__56907 = ctx;
var G__56908 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56907,G__56908) : sci.impl.interpreter.interpret.call(null,G__56907,G__56908));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56675 = (function (){var G__56909 = ctx;
var G__56910 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56909,G__56910) : sci.impl.interpreter.interpret.call(null,G__56909,G__56910));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56676 = (function (){var G__56911 = ctx;
var G__56912 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56911,G__56912) : sci.impl.interpreter.interpret.call(null,G__56911,G__56912));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg56668,arg56669,arg56670,arg56671,arg56672,arg56673,arg56674,arg56675,arg56676) : f.call(null,arg56668,arg56669,arg56670,arg56671,arg56672,arg56673,arg56674,arg56675,arg56676));

break;
case (10):
var arg56677 = (function (){var G__56913 = ctx;
var G__56914 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56913,G__56914) : sci.impl.interpreter.interpret.call(null,G__56913,G__56914));
})();
var args__$1 = cljs.core.rest(args);
var arg56678 = (function (){var G__56915 = ctx;
var G__56916 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56915,G__56916) : sci.impl.interpreter.interpret.call(null,G__56915,G__56916));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56679 = (function (){var G__56917 = ctx;
var G__56918 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56917,G__56918) : sci.impl.interpreter.interpret.call(null,G__56917,G__56918));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56680 = (function (){var G__56919 = ctx;
var G__56920 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56919,G__56920) : sci.impl.interpreter.interpret.call(null,G__56919,G__56920));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56681 = (function (){var G__56921 = ctx;
var G__56922 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56921,G__56922) : sci.impl.interpreter.interpret.call(null,G__56921,G__56922));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56682 = (function (){var G__56923 = ctx;
var G__56924 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56923,G__56924) : sci.impl.interpreter.interpret.call(null,G__56923,G__56924));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56683 = (function (){var G__56925 = ctx;
var G__56926 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56925,G__56926) : sci.impl.interpreter.interpret.call(null,G__56925,G__56926));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56684 = (function (){var G__56927 = ctx;
var G__56928 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56927,G__56928) : sci.impl.interpreter.interpret.call(null,G__56927,G__56928));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56685 = (function (){var G__56929 = ctx;
var G__56930 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56929,G__56930) : sci.impl.interpreter.interpret.call(null,G__56929,G__56930));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56686 = (function (){var G__56931 = ctx;
var G__56932 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56931,G__56932) : sci.impl.interpreter.interpret.call(null,G__56931,G__56932));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg56677,arg56678,arg56679,arg56680,arg56681,arg56682,arg56683,arg56684,arg56685,arg56686) : f.call(null,arg56677,arg56678,arg56679,arg56680,arg56681,arg56682,arg56683,arg56684,arg56685,arg56686));

break;
case (11):
var arg56687 = (function (){var G__56933 = ctx;
var G__56934 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56933,G__56934) : sci.impl.interpreter.interpret.call(null,G__56933,G__56934));
})();
var args__$1 = cljs.core.rest(args);
var arg56688 = (function (){var G__56935 = ctx;
var G__56936 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56935,G__56936) : sci.impl.interpreter.interpret.call(null,G__56935,G__56936));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56689 = (function (){var G__56937 = ctx;
var G__56938 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56937,G__56938) : sci.impl.interpreter.interpret.call(null,G__56937,G__56938));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56690 = (function (){var G__56939 = ctx;
var G__56940 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56939,G__56940) : sci.impl.interpreter.interpret.call(null,G__56939,G__56940));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56691 = (function (){var G__56941 = ctx;
var G__56942 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56941,G__56942) : sci.impl.interpreter.interpret.call(null,G__56941,G__56942));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56692 = (function (){var G__56943 = ctx;
var G__56944 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56943,G__56944) : sci.impl.interpreter.interpret.call(null,G__56943,G__56944));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56693 = (function (){var G__56945 = ctx;
var G__56946 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56945,G__56946) : sci.impl.interpreter.interpret.call(null,G__56945,G__56946));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56694 = (function (){var G__56947 = ctx;
var G__56948 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56947,G__56948) : sci.impl.interpreter.interpret.call(null,G__56947,G__56948));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56695 = (function (){var G__56949 = ctx;
var G__56950 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56949,G__56950) : sci.impl.interpreter.interpret.call(null,G__56949,G__56950));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56696 = (function (){var G__56951 = ctx;
var G__56952 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56951,G__56952) : sci.impl.interpreter.interpret.call(null,G__56951,G__56952));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56697 = (function (){var G__56953 = ctx;
var G__56954 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56953,G__56954) : sci.impl.interpreter.interpret.call(null,G__56953,G__56954));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg56687,arg56688,arg56689,arg56690,arg56691,arg56692,arg56693,arg56694,arg56695,arg56696,arg56697) : f.call(null,arg56687,arg56688,arg56689,arg56690,arg56691,arg56692,arg56693,arg56694,arg56695,arg56696,arg56697));

break;
case (12):
var arg56698 = (function (){var G__56955 = ctx;
var G__56956 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56955,G__56956) : sci.impl.interpreter.interpret.call(null,G__56955,G__56956));
})();
var args__$1 = cljs.core.rest(args);
var arg56699 = (function (){var G__56957 = ctx;
var G__56958 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56957,G__56958) : sci.impl.interpreter.interpret.call(null,G__56957,G__56958));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56700 = (function (){var G__56959 = ctx;
var G__56960 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56959,G__56960) : sci.impl.interpreter.interpret.call(null,G__56959,G__56960));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56701 = (function (){var G__56961 = ctx;
var G__56962 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56961,G__56962) : sci.impl.interpreter.interpret.call(null,G__56961,G__56962));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56702 = (function (){var G__56963 = ctx;
var G__56964 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56963,G__56964) : sci.impl.interpreter.interpret.call(null,G__56963,G__56964));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56703 = (function (){var G__56965 = ctx;
var G__56966 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56965,G__56966) : sci.impl.interpreter.interpret.call(null,G__56965,G__56966));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56704 = (function (){var G__56967 = ctx;
var G__56968 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56967,G__56968) : sci.impl.interpreter.interpret.call(null,G__56967,G__56968));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56705 = (function (){var G__56969 = ctx;
var G__56970 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56969,G__56970) : sci.impl.interpreter.interpret.call(null,G__56969,G__56970));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56706 = (function (){var G__56971 = ctx;
var G__56972 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56971,G__56972) : sci.impl.interpreter.interpret.call(null,G__56971,G__56972));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56707 = (function (){var G__56973 = ctx;
var G__56974 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56973,G__56974) : sci.impl.interpreter.interpret.call(null,G__56973,G__56974));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56708 = (function (){var G__56975 = ctx;
var G__56976 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56975,G__56976) : sci.impl.interpreter.interpret.call(null,G__56975,G__56976));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56709 = (function (){var G__56977 = ctx;
var G__56978 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56977,G__56978) : sci.impl.interpreter.interpret.call(null,G__56977,G__56978));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg56698,arg56699,arg56700,arg56701,arg56702,arg56703,arg56704,arg56705,arg56706,arg56707,arg56708,arg56709) : f.call(null,arg56698,arg56699,arg56700,arg56701,arg56702,arg56703,arg56704,arg56705,arg56706,arg56707,arg56708,arg56709));

break;
case (13):
var arg56710 = (function (){var G__56979 = ctx;
var G__56980 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56979,G__56980) : sci.impl.interpreter.interpret.call(null,G__56979,G__56980));
})();
var args__$1 = cljs.core.rest(args);
var arg56711 = (function (){var G__56981 = ctx;
var G__56982 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56981,G__56982) : sci.impl.interpreter.interpret.call(null,G__56981,G__56982));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56712 = (function (){var G__56983 = ctx;
var G__56984 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56983,G__56984) : sci.impl.interpreter.interpret.call(null,G__56983,G__56984));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56713 = (function (){var G__56985 = ctx;
var G__56986 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56985,G__56986) : sci.impl.interpreter.interpret.call(null,G__56985,G__56986));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56714 = (function (){var G__56987 = ctx;
var G__56988 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56987,G__56988) : sci.impl.interpreter.interpret.call(null,G__56987,G__56988));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56715 = (function (){var G__56989 = ctx;
var G__56990 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56989,G__56990) : sci.impl.interpreter.interpret.call(null,G__56989,G__56990));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56716 = (function (){var G__56991 = ctx;
var G__56992 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56991,G__56992) : sci.impl.interpreter.interpret.call(null,G__56991,G__56992));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56717 = (function (){var G__56993 = ctx;
var G__56994 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56993,G__56994) : sci.impl.interpreter.interpret.call(null,G__56993,G__56994));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56718 = (function (){var G__56995 = ctx;
var G__56996 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56995,G__56996) : sci.impl.interpreter.interpret.call(null,G__56995,G__56996));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56719 = (function (){var G__56997 = ctx;
var G__56998 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56997,G__56998) : sci.impl.interpreter.interpret.call(null,G__56997,G__56998));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56720 = (function (){var G__56999 = ctx;
var G__57000 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__56999,G__57000) : sci.impl.interpreter.interpret.call(null,G__56999,G__57000));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56721 = (function (){var G__57001 = ctx;
var G__57002 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57001,G__57002) : sci.impl.interpreter.interpret.call(null,G__57001,G__57002));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg56722 = (function (){var G__57003 = ctx;
var G__57004 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57003,G__57004) : sci.impl.interpreter.interpret.call(null,G__57003,G__57004));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg56710,arg56711,arg56712,arg56713,arg56714,arg56715,arg56716,arg56717,arg56718,arg56719,arg56720,arg56721,arg56722) : f.call(null,arg56710,arg56711,arg56712,arg56713,arg56714,arg56715,arg56716,arg56717,arg56718,arg56719,arg56720,arg56721,arg56722));

break;
case (14):
var arg56723 = (function (){var G__57005 = ctx;
var G__57006 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57005,G__57006) : sci.impl.interpreter.interpret.call(null,G__57005,G__57006));
})();
var args__$1 = cljs.core.rest(args);
var arg56724 = (function (){var G__57007 = ctx;
var G__57008 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57007,G__57008) : sci.impl.interpreter.interpret.call(null,G__57007,G__57008));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56725 = (function (){var G__57009 = ctx;
var G__57010 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57009,G__57010) : sci.impl.interpreter.interpret.call(null,G__57009,G__57010));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56726 = (function (){var G__57011 = ctx;
var G__57012 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57011,G__57012) : sci.impl.interpreter.interpret.call(null,G__57011,G__57012));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56727 = (function (){var G__57013 = ctx;
var G__57014 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57013,G__57014) : sci.impl.interpreter.interpret.call(null,G__57013,G__57014));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56728 = (function (){var G__57015 = ctx;
var G__57016 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57015,G__57016) : sci.impl.interpreter.interpret.call(null,G__57015,G__57016));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56729 = (function (){var G__57017 = ctx;
var G__57018 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57017,G__57018) : sci.impl.interpreter.interpret.call(null,G__57017,G__57018));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56730 = (function (){var G__57019 = ctx;
var G__57020 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57019,G__57020) : sci.impl.interpreter.interpret.call(null,G__57019,G__57020));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56731 = (function (){var G__57021 = ctx;
var G__57022 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57021,G__57022) : sci.impl.interpreter.interpret.call(null,G__57021,G__57022));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56732 = (function (){var G__57023 = ctx;
var G__57024 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57023,G__57024) : sci.impl.interpreter.interpret.call(null,G__57023,G__57024));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56733 = (function (){var G__57025 = ctx;
var G__57026 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57025,G__57026) : sci.impl.interpreter.interpret.call(null,G__57025,G__57026));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56734 = (function (){var G__57027 = ctx;
var G__57028 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57027,G__57028) : sci.impl.interpreter.interpret.call(null,G__57027,G__57028));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg56735 = (function (){var G__57029 = ctx;
var G__57030 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57029,G__57030) : sci.impl.interpreter.interpret.call(null,G__57029,G__57030));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg56736 = (function (){var G__57031 = ctx;
var G__57032 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57031,G__57032) : sci.impl.interpreter.interpret.call(null,G__57031,G__57032));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg56723,arg56724,arg56725,arg56726,arg56727,arg56728,arg56729,arg56730,arg56731,arg56732,arg56733,arg56734,arg56735,arg56736) : f.call(null,arg56723,arg56724,arg56725,arg56726,arg56727,arg56728,arg56729,arg56730,arg56731,arg56732,arg56733,arg56734,arg56735,arg56736));

break;
case (15):
var arg56737 = (function (){var G__57033 = ctx;
var G__57034 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57033,G__57034) : sci.impl.interpreter.interpret.call(null,G__57033,G__57034));
})();
var args__$1 = cljs.core.rest(args);
var arg56738 = (function (){var G__57035 = ctx;
var G__57036 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57035,G__57036) : sci.impl.interpreter.interpret.call(null,G__57035,G__57036));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56739 = (function (){var G__57037 = ctx;
var G__57038 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57037,G__57038) : sci.impl.interpreter.interpret.call(null,G__57037,G__57038));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56740 = (function (){var G__57039 = ctx;
var G__57040 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57039,G__57040) : sci.impl.interpreter.interpret.call(null,G__57039,G__57040));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56741 = (function (){var G__57041 = ctx;
var G__57042 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57041,G__57042) : sci.impl.interpreter.interpret.call(null,G__57041,G__57042));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56742 = (function (){var G__57043 = ctx;
var G__57044 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57043,G__57044) : sci.impl.interpreter.interpret.call(null,G__57043,G__57044));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56743 = (function (){var G__57045 = ctx;
var G__57046 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57045,G__57046) : sci.impl.interpreter.interpret.call(null,G__57045,G__57046));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56744 = (function (){var G__57047 = ctx;
var G__57048 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57047,G__57048) : sci.impl.interpreter.interpret.call(null,G__57047,G__57048));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56745 = (function (){var G__57049 = ctx;
var G__57050 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57049,G__57050) : sci.impl.interpreter.interpret.call(null,G__57049,G__57050));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56746 = (function (){var G__57051 = ctx;
var G__57052 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57051,G__57052) : sci.impl.interpreter.interpret.call(null,G__57051,G__57052));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56747 = (function (){var G__57053 = ctx;
var G__57054 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57053,G__57054) : sci.impl.interpreter.interpret.call(null,G__57053,G__57054));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56748 = (function (){var G__57055 = ctx;
var G__57056 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57055,G__57056) : sci.impl.interpreter.interpret.call(null,G__57055,G__57056));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg56749 = (function (){var G__57057 = ctx;
var G__57058 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57057,G__57058) : sci.impl.interpreter.interpret.call(null,G__57057,G__57058));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg56750 = (function (){var G__57059 = ctx;
var G__57060 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57059,G__57060) : sci.impl.interpreter.interpret.call(null,G__57059,G__57060));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg56751 = (function (){var G__57061 = ctx;
var G__57062 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57061,G__57062) : sci.impl.interpreter.interpret.call(null,G__57061,G__57062));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg56737,arg56738,arg56739,arg56740,arg56741,arg56742,arg56743,arg56744,arg56745,arg56746,arg56747,arg56748,arg56749,arg56750,arg56751) : f.call(null,arg56737,arg56738,arg56739,arg56740,arg56741,arg56742,arg56743,arg56744,arg56745,arg56746,arg56747,arg56748,arg56749,arg56750,arg56751));

break;
case (16):
var arg56752 = (function (){var G__57063 = ctx;
var G__57064 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57063,G__57064) : sci.impl.interpreter.interpret.call(null,G__57063,G__57064));
})();
var args__$1 = cljs.core.rest(args);
var arg56753 = (function (){var G__57065 = ctx;
var G__57066 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57065,G__57066) : sci.impl.interpreter.interpret.call(null,G__57065,G__57066));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56754 = (function (){var G__57067 = ctx;
var G__57068 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57067,G__57068) : sci.impl.interpreter.interpret.call(null,G__57067,G__57068));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56755 = (function (){var G__57069 = ctx;
var G__57070 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57069,G__57070) : sci.impl.interpreter.interpret.call(null,G__57069,G__57070));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56756 = (function (){var G__57071 = ctx;
var G__57072 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57071,G__57072) : sci.impl.interpreter.interpret.call(null,G__57071,G__57072));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56757 = (function (){var G__57073 = ctx;
var G__57074 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57073,G__57074) : sci.impl.interpreter.interpret.call(null,G__57073,G__57074));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56758 = (function (){var G__57075 = ctx;
var G__57076 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57075,G__57076) : sci.impl.interpreter.interpret.call(null,G__57075,G__57076));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56759 = (function (){var G__57077 = ctx;
var G__57078 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57077,G__57078) : sci.impl.interpreter.interpret.call(null,G__57077,G__57078));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56760 = (function (){var G__57079 = ctx;
var G__57080 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57079,G__57080) : sci.impl.interpreter.interpret.call(null,G__57079,G__57080));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56761 = (function (){var G__57081 = ctx;
var G__57082 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57081,G__57082) : sci.impl.interpreter.interpret.call(null,G__57081,G__57082));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56762 = (function (){var G__57083 = ctx;
var G__57084 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57083,G__57084) : sci.impl.interpreter.interpret.call(null,G__57083,G__57084));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56763 = (function (){var G__57085 = ctx;
var G__57086 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57085,G__57086) : sci.impl.interpreter.interpret.call(null,G__57085,G__57086));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg56764 = (function (){var G__57087 = ctx;
var G__57088 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57087,G__57088) : sci.impl.interpreter.interpret.call(null,G__57087,G__57088));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg56765 = (function (){var G__57089 = ctx;
var G__57090 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57089,G__57090) : sci.impl.interpreter.interpret.call(null,G__57089,G__57090));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg56766 = (function (){var G__57091 = ctx;
var G__57092 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57091,G__57092) : sci.impl.interpreter.interpret.call(null,G__57091,G__57092));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg56767 = (function (){var G__57093 = ctx;
var G__57094 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57093,G__57094) : sci.impl.interpreter.interpret.call(null,G__57093,G__57094));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg56752,arg56753,arg56754,arg56755,arg56756,arg56757,arg56758,arg56759,arg56760,arg56761,arg56762,arg56763,arg56764,arg56765,arg56766,arg56767) : f.call(null,arg56752,arg56753,arg56754,arg56755,arg56756,arg56757,arg56758,arg56759,arg56760,arg56761,arg56762,arg56763,arg56764,arg56765,arg56766,arg56767));

break;
case (17):
var arg56768 = (function (){var G__57095 = ctx;
var G__57096 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57095,G__57096) : sci.impl.interpreter.interpret.call(null,G__57095,G__57096));
})();
var args__$1 = cljs.core.rest(args);
var arg56769 = (function (){var G__57097 = ctx;
var G__57098 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57097,G__57098) : sci.impl.interpreter.interpret.call(null,G__57097,G__57098));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56770 = (function (){var G__57099 = ctx;
var G__57100 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57099,G__57100) : sci.impl.interpreter.interpret.call(null,G__57099,G__57100));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56771 = (function (){var G__57101 = ctx;
var G__57102 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57101,G__57102) : sci.impl.interpreter.interpret.call(null,G__57101,G__57102));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56772 = (function (){var G__57103 = ctx;
var G__57104 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57103,G__57104) : sci.impl.interpreter.interpret.call(null,G__57103,G__57104));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56773 = (function (){var G__57105 = ctx;
var G__57106 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57105,G__57106) : sci.impl.interpreter.interpret.call(null,G__57105,G__57106));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56774 = (function (){var G__57107 = ctx;
var G__57108 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57107,G__57108) : sci.impl.interpreter.interpret.call(null,G__57107,G__57108));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56775 = (function (){var G__57109 = ctx;
var G__57110 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57109,G__57110) : sci.impl.interpreter.interpret.call(null,G__57109,G__57110));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56776 = (function (){var G__57111 = ctx;
var G__57112 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57111,G__57112) : sci.impl.interpreter.interpret.call(null,G__57111,G__57112));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56777 = (function (){var G__57113 = ctx;
var G__57114 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57113,G__57114) : sci.impl.interpreter.interpret.call(null,G__57113,G__57114));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56778 = (function (){var G__57115 = ctx;
var G__57116 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57115,G__57116) : sci.impl.interpreter.interpret.call(null,G__57115,G__57116));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56779 = (function (){var G__57117 = ctx;
var G__57118 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57117,G__57118) : sci.impl.interpreter.interpret.call(null,G__57117,G__57118));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg56780 = (function (){var G__57119 = ctx;
var G__57120 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57119,G__57120) : sci.impl.interpreter.interpret.call(null,G__57119,G__57120));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg56781 = (function (){var G__57121 = ctx;
var G__57122 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57121,G__57122) : sci.impl.interpreter.interpret.call(null,G__57121,G__57122));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg56782 = (function (){var G__57123 = ctx;
var G__57124 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57123,G__57124) : sci.impl.interpreter.interpret.call(null,G__57123,G__57124));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg56783 = (function (){var G__57125 = ctx;
var G__57126 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57125,G__57126) : sci.impl.interpreter.interpret.call(null,G__57125,G__57126));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg56784 = (function (){var G__57127 = ctx;
var G__57128 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57127,G__57128) : sci.impl.interpreter.interpret.call(null,G__57127,G__57128));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg56768,arg56769,arg56770,arg56771,arg56772,arg56773,arg56774,arg56775,arg56776,arg56777,arg56778,arg56779,arg56780,arg56781,arg56782,arg56783,arg56784) : f.call(null,arg56768,arg56769,arg56770,arg56771,arg56772,arg56773,arg56774,arg56775,arg56776,arg56777,arg56778,arg56779,arg56780,arg56781,arg56782,arg56783,arg56784));

break;
case (18):
var arg56785 = (function (){var G__57129 = ctx;
var G__57130 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57129,G__57130) : sci.impl.interpreter.interpret.call(null,G__57129,G__57130));
})();
var args__$1 = cljs.core.rest(args);
var arg56786 = (function (){var G__57131 = ctx;
var G__57132 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57131,G__57132) : sci.impl.interpreter.interpret.call(null,G__57131,G__57132));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56787 = (function (){var G__57133 = ctx;
var G__57134 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57133,G__57134) : sci.impl.interpreter.interpret.call(null,G__57133,G__57134));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56788 = (function (){var G__57135 = ctx;
var G__57136 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57135,G__57136) : sci.impl.interpreter.interpret.call(null,G__57135,G__57136));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56789 = (function (){var G__57137 = ctx;
var G__57138 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57137,G__57138) : sci.impl.interpreter.interpret.call(null,G__57137,G__57138));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56790 = (function (){var G__57139 = ctx;
var G__57140 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57139,G__57140) : sci.impl.interpreter.interpret.call(null,G__57139,G__57140));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56791 = (function (){var G__57141 = ctx;
var G__57142 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57141,G__57142) : sci.impl.interpreter.interpret.call(null,G__57141,G__57142));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56792 = (function (){var G__57143 = ctx;
var G__57144 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57143,G__57144) : sci.impl.interpreter.interpret.call(null,G__57143,G__57144));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56793 = (function (){var G__57145 = ctx;
var G__57146 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57145,G__57146) : sci.impl.interpreter.interpret.call(null,G__57145,G__57146));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56794 = (function (){var G__57147 = ctx;
var G__57148 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57147,G__57148) : sci.impl.interpreter.interpret.call(null,G__57147,G__57148));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56795 = (function (){var G__57149 = ctx;
var G__57150 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57149,G__57150) : sci.impl.interpreter.interpret.call(null,G__57149,G__57150));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56796 = (function (){var G__57151 = ctx;
var G__57152 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57151,G__57152) : sci.impl.interpreter.interpret.call(null,G__57151,G__57152));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg56797 = (function (){var G__57153 = ctx;
var G__57154 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57153,G__57154) : sci.impl.interpreter.interpret.call(null,G__57153,G__57154));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg56798 = (function (){var G__57155 = ctx;
var G__57156 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57155,G__57156) : sci.impl.interpreter.interpret.call(null,G__57155,G__57156));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg56799 = (function (){var G__57157 = ctx;
var G__57158 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57157,G__57158) : sci.impl.interpreter.interpret.call(null,G__57157,G__57158));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg56800 = (function (){var G__57159 = ctx;
var G__57160 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57159,G__57160) : sci.impl.interpreter.interpret.call(null,G__57159,G__57160));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg56801 = (function (){var G__57161 = ctx;
var G__57162 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57161,G__57162) : sci.impl.interpreter.interpret.call(null,G__57161,G__57162));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg56802 = (function (){var G__57163 = ctx;
var G__57164 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57163,G__57164) : sci.impl.interpreter.interpret.call(null,G__57163,G__57164));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg56785,arg56786,arg56787,arg56788,arg56789,arg56790,arg56791,arg56792,arg56793,arg56794,arg56795,arg56796,arg56797,arg56798,arg56799,arg56800,arg56801,arg56802) : f.call(null,arg56785,arg56786,arg56787,arg56788,arg56789,arg56790,arg56791,arg56792,arg56793,arg56794,arg56795,arg56796,arg56797,arg56798,arg56799,arg56800,arg56801,arg56802));

break;
case (19):
var arg56803 = (function (){var G__57165 = ctx;
var G__57166 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57165,G__57166) : sci.impl.interpreter.interpret.call(null,G__57165,G__57166));
})();
var args__$1 = cljs.core.rest(args);
var arg56804 = (function (){var G__57167 = ctx;
var G__57168 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57167,G__57168) : sci.impl.interpreter.interpret.call(null,G__57167,G__57168));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg56805 = (function (){var G__57169 = ctx;
var G__57170 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57169,G__57170) : sci.impl.interpreter.interpret.call(null,G__57169,G__57170));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg56806 = (function (){var G__57171 = ctx;
var G__57172 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57171,G__57172) : sci.impl.interpreter.interpret.call(null,G__57171,G__57172));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg56807 = (function (){var G__57173 = ctx;
var G__57174 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57173,G__57174) : sci.impl.interpreter.interpret.call(null,G__57173,G__57174));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg56808 = (function (){var G__57175 = ctx;
var G__57176 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57175,G__57176) : sci.impl.interpreter.interpret.call(null,G__57175,G__57176));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg56809 = (function (){var G__57177 = ctx;
var G__57178 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57177,G__57178) : sci.impl.interpreter.interpret.call(null,G__57177,G__57178));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg56810 = (function (){var G__57179 = ctx;
var G__57180 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57179,G__57180) : sci.impl.interpreter.interpret.call(null,G__57179,G__57180));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg56811 = (function (){var G__57181 = ctx;
var G__57182 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57181,G__57182) : sci.impl.interpreter.interpret.call(null,G__57181,G__57182));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg56812 = (function (){var G__57183 = ctx;
var G__57184 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57183,G__57184) : sci.impl.interpreter.interpret.call(null,G__57183,G__57184));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg56813 = (function (){var G__57185 = ctx;
var G__57186 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57185,G__57186) : sci.impl.interpreter.interpret.call(null,G__57185,G__57186));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg56814 = (function (){var G__57187 = ctx;
var G__57188 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57187,G__57188) : sci.impl.interpreter.interpret.call(null,G__57187,G__57188));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg56815 = (function (){var G__57189 = ctx;
var G__57190 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57189,G__57190) : sci.impl.interpreter.interpret.call(null,G__57189,G__57190));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg56816 = (function (){var G__57191 = ctx;
var G__57192 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57191,G__57192) : sci.impl.interpreter.interpret.call(null,G__57191,G__57192));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg56817 = (function (){var G__57193 = ctx;
var G__57194 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57193,G__57194) : sci.impl.interpreter.interpret.call(null,G__57193,G__57194));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg56818 = (function (){var G__57195 = ctx;
var G__57196 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57195,G__57196) : sci.impl.interpreter.interpret.call(null,G__57195,G__57196));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg56819 = (function (){var G__57197 = ctx;
var G__57198 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57197,G__57198) : sci.impl.interpreter.interpret.call(null,G__57197,G__57198));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg56820 = (function (){var G__57199 = ctx;
var G__57200 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57199,G__57200) : sci.impl.interpreter.interpret.call(null,G__57199,G__57200));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg56821 = (function (){var G__57201 = ctx;
var G__57202 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57201,G__57202) : sci.impl.interpreter.interpret.call(null,G__57201,G__57202));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg56803,arg56804,arg56805,arg56806,arg56807,arg56808,arg56809,arg56810,arg56811,arg56812,arg56813,arg56814,arg56815,arg56816,arg56817,arg56818,arg56819,arg56820,arg56821) : f.call(null,arg56803,arg56804,arg56805,arg56806,arg56807,arg56808,arg56809,arg56810,arg56811,arg56812,arg56813,arg56814,arg56815,arg56816,arg56817,arg56818,arg56819,arg56820,arg56821));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__57203 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__57203)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__57203)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__57203)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__57203)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__57203)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__57203)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__57204 = ctx;
var G__57205 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57204,G__57205) : sci.impl.interpreter.interpret.call(null,G__57204,G__57205));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__57203)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__57203)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__57203)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__57203)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__57203)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__57203)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__57203)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__57203)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__57203)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__57206 = ctx;
var G__57207 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57206,G__57207) : sci.impl.interpreter.interpret.call(null,G__57206,G__57207));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__57203)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__57203)){
return (new cljs.core.LazySeq(null,(function (){var G__57208 = ctx;
var G__57209 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__57208,G__57209) : sci.impl.interpreter.interpret.call(null,G__57208,G__57209));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__57203)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__57203)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__57203)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__57203)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57203)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
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
if(cljs.core.truth_((function (){var G__57211 = op;
var G__57212 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__57211,G__57212) : sci.impl.utils.kw_identical_QMARK_.call(null,G__57211,G__57212));
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
}catch (e57210){if((e57210 instanceof Error)){
var e = e57210;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e57210;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__57219 = op;
var G__57219__$1 = (((G__57219 instanceof cljs.core.Keyword))?G__57219.fqn:null);
switch (G__57219__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57216_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__57216_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__57216_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57217_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__57217_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__57217_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57218_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__57218_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__57218_SHARP_));
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
var G__57270 = cljs.core.rest(exprs);
var G__57271 = (function (){var G__57222 = ctx;
var G__57223 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__57222,G__57223) : sci.impl.interpreter.eval_form.call(null,G__57222,G__57223));
})();
exprs = G__57270;
ret = G__57271;
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
if(cljs.core.truth_((function (){var G__57226 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__57227 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__57226,G__57227) : sci.impl.utils.kw_identical_QMARK_.call(null,G__57226,G__57227));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__57272 = ret__$1;
ret = G__57272;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__57229 = arguments.length;
switch (G__57229) {
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
