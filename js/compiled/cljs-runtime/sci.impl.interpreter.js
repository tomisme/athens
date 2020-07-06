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
var G__63691 = xs;
args__$2 = G__63691;
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
var G__63692 = xs;
args__$2 = G__63692;
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
var len__4789__auto___63693 = arguments.length;
var i__4790__auto___63694 = (0);
while(true){
if((i__4790__auto___63694 < len__4789__auto___63693)){
args__4795__auto__.push((arguments[i__4790__auto___63694]));

var G__63695 = (i__4790__auto___63694 + (1));
i__4790__auto___63694 = G__63695;
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
var G__63696 = ctx__$2;
var G__63697 = rest_let_bindings;
ctx__$1 = G__63696;
let_bindings__$1 = G__63697;
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
var G__63698 = nexprs;
exprs__$1 = G__63698;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq62770){
var G__62771 = cljs.core.first(seq62770);
var seq62770__$1 = cljs.core.next(seq62770);
var G__62772 = cljs.core.first(seq62770__$1);
var seq62770__$2 = cljs.core.next(seq62770__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62771,G__62772,seq62770__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__62780){
var vec__62781 = p__62780;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62781,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62781,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62781,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62781,(3),null);
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
var v = (cljs.core.truth_((function (){var G__62784 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__62785 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__62784,G__62785) : sci.impl.utils.kw_identical_QMARK_.call(null,G__62784,G__62785));
})())?(function (){var G__62786 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62786,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__62786;
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
var vec__62796 = libspec;
var seq__62797 = cljs.core.seq(vec__62796);
var first__62798 = cljs.core.first(seq__62797);
var seq__62797__$1 = cljs.core.next(seq__62797);
var lib_name = first__62798;
var opts = seq__62797__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__62802 = opts;
var vec__62806 = G__62802;
var seq__62807 = cljs.core.seq(vec__62806);
var first__62808 = cljs.core.first(seq__62807);
var seq__62807__$1 = cljs.core.next(seq__62807);
var opt_name = first__62808;
var first__62808__$1 = cljs.core.first(seq__62807__$1);
var seq__62807__$2 = cljs.core.next(seq__62807__$1);
var fst_opt = first__62808__$1;
var rst_opts = seq__62807__$2;
var ret__$1 = ret;
var G__62802__$1 = G__62802;
while(true){
var ret__$2 = ret__$1;
var vec__62813 = G__62802__$1;
var seq__62814 = cljs.core.seq(vec__62813);
var first__62815 = cljs.core.first(seq__62814);
var seq__62814__$1 = cljs.core.next(seq__62814);
var opt_name__$1 = first__62815;
var first__62815__$1 = cljs.core.first(seq__62814__$1);
var seq__62814__$2 = cljs.core.next(seq__62814__$1);
var fst_opt__$1 = first__62815__$1;
var rst_opts__$1 = seq__62814__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__62816 = opt_name__$1;
var G__62816__$1 = (((G__62816 instanceof cljs.core.Keyword))?G__62816.fqn:null);
switch (G__62816__$1) {
case "as":
var G__63702 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__63703 = rst_opts__$1;
ret__$1 = G__63702;
G__62802__$1 = G__63703;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__63704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__63705 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__63704;
G__62802__$1 = G__63705;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__63706 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__63707 = rst_opts__$1;
ret__$1 = G__63706;
G__62802__$1 = G__63707;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62816__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__62817){
var vec__62818 = p__62817;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62818,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__62824){
var map__62825 = p__62824;
var map__62825__$1 = (((((!((map__62825 == null))))?(((((map__62825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62825):map__62825);
var _parsed_libspec = map__62825__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62825__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62825__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62825__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62825__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62825__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__62833 = new cljs.core.Keyword(null,"all","all",892129742);
var G__62834 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__62833,G__62834) : sci.impl.utils.kw_identical_QMARK_.call(null,G__62833,G__62834));
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
var vec__62835 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62835,(1),null);
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
var map__62838 = sci.impl.interpreter.parse_libspec(libspec);
var map__62838__$1 = (((((!((map__62838 == null))))?(((((map__62838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62838):map__62838);
var parsed_libspec = map__62838__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__62840 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__62840) : load_fn.call(null,G__62840));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__62841 = temp__5733__auto____$2;
var map__62841__$1 = (((((!((map__62841 == null))))?(((((map__62841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62841):map__62841);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62841__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62841__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__62844_63715 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__62845_63716 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__62844_63715,G__62845_63716) : sci.impl.interpreter.eval_string_STAR_.call(null,G__62844_63715,G__62845_63716));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e62843){if((e62843 instanceof Error)){
var e_63717 = e62843;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_63717;
} else {
throw e62843;

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
var len__4789__auto___63718 = arguments.length;
var i__4790__auto___63719 = (0);
while(true){
if((i__4790__auto___63719 < len__4789__auto___63718)){
args__4795__auto__.push((arguments[i__4790__auto___63719]));

var G__63720 = (i__4790__auto___63719 + (1));
i__4790__auto___63719 = G__63720;
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
var ret = (function (){var G__62863 = ctx;
var G__62864 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__62863,G__62864) : sci.impl.interpreter.interpret.call(null,G__62863,G__62864));
})();
if((ret instanceof cljs.core.Symbol)){
var G__63721 = (function (){var G__62865 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__62865,current_libspec);
} else {
return G__62865;
}
})();
var G__63722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__63723 = cljs.core.next(args__$1);
libspecs = G__63721;
current_libspec = G__63722;
args__$1 = G__63723;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__63724 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__63725 = null;
var G__63726 = cljs.core.next(args__$1);
libspecs = G__63724;
current_libspec = G__63725;
args__$1 = G__63726;
continue;
} else {
var G__63727 = (function (){var G__62866 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__62866,current_libspec);
} else {
return G__62866;
}
})();
var G__63728 = ret;
var G__63729 = cljs.core.next(args__$1);
libspecs = G__63727;
current_libspec = G__63728;
args__$1 = G__63729;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__62868 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__62868,current_libspec);
} else {
return G__62868;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__62848_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__62848_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq62849){
var G__62850 = cljs.core.first(seq62849);
var seq62849__$1 = cljs.core.next(seq62849);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62850,seq62849__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63734 = arguments.length;
var i__4790__auto___63735 = (0);
while(true){
if((i__4790__auto___63735 < len__4789__auto___63734)){
args__4795__auto__.push((arguments[i__4790__auto___63735]));

var G__63736 = (i__4790__auto___63735 + (1));
i__4790__auto___63735 = G__63736;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq62869){
var G__62870 = cljs.core.first(seq62869);
var seq62869__$1 = cljs.core.next(seq62869);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62870,seq62869__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__62874){
var vec__62875 = p__62874;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62875,(0),null);
var map__62878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62875,(1),null);
var map__62878__$1 = (((((!((map__62878 == null))))?(((((map__62878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62878):map__62878);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62878__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62878__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62878__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__62892 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62892,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62892,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__62895 = ctx;
var G__62896 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__62895,G__62896) : sci.impl.interpreter.interpret.call(null,G__62895,G__62896));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__62900 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__62900__$1 = (((((!((map__62900 == null))))?(((((map__62900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62900):map__62900);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62900__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62900__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62900__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__62908 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__62909 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__62909);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__62908);
}}catch (e62902){if((e62902 instanceof Error)){
var e = e62902;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__62903 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__62904 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__62903,G__62904) : sci.impl.interpreter.interpret.call(null,G__62903,G__62904));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__62905 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62905,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62905,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e62902;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__62910){
var vec__62911 = p__62910;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62911,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62911,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62914_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__62914_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__62914_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__62922){
var vec__62923 = p__62922;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62923,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62923,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62923,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62920_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__62920_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__62920_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__62934,p__62935){
var map__62942 = p__62934;
var map__62942__$1 = (((((!((map__62942 == null))))?(((((map__62942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62942):map__62942);
var ctx = map__62942__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62942__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__62943 = p__62935;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62943,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62943,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62943,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62943,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62932_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__62932_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__62932_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__62953){
var vec__62954 = p__62953;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62954,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62954,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__62959){
var vec__62960 = p__62959;
var seq__62961 = cljs.core.seq(vec__62960);
var first__62962 = cljs.core.first(seq__62961);
var seq__62961__$1 = cljs.core.next(seq__62961);
var _ = first__62962;
var first__62962__$1 = cljs.core.first(seq__62961__$1);
var seq__62961__$2 = cljs.core.next(seq__62961__$1);
var ns_sym = first__62962__$1;
var exprs = seq__62961__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__62964 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62964,(1),null);
var G__62969_63769 = k;
var G__62969_63770__$1 = (((G__62969_63769 instanceof cljs.core.Keyword))?G__62969_63769.fqn:null);
switch (G__62969_63770__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__62969_63769,G__62969_63770__$1,vec__62964,k,v,ns_sym__$1,vec__62960,seq__62961,first__62962,seq__62961__$1,_,first__62962__$1,seq__62961__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__62969_63769,G__62969_63770__$1,vec__62964,k,v,ns_sym__$1,vec__62960,seq__62961,first__62962,seq__62961__$1,_,first__62962__$1,seq__62961__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62969_63770__$1)].join('')));

}

var G__63772 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__63772;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__62979){
var vec__62980 = p__62979;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62980,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62980,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62980,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__62994 = exprs;
var vec__62995 = G__62994;
var seq__62996 = cljs.core.seq(vec__62995);
var first__62997 = cljs.core.first(seq__62996);
var seq__62996__$1 = cljs.core.next(seq__62996);
var expr = first__62997;
var exprs__$1 = seq__62996__$1;
var G__62994__$1 = G__62994;
while(true){
var vec__62998 = G__62994__$1;
var seq__62999 = cljs.core.seq(vec__62998);
var first__63000 = cljs.core.first(seq__62999);
var seq__62999__$1 = cljs.core.next(seq__62999);
var expr__$1 = first__63000;
var exprs__$2 = seq__62999__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e63001){if((e63001 instanceof Error)){
var e = e63001;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e63001;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__63782 = exprs__$3;
G__62994__$1 = G__63782;
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
var G__63215 = cljs.core.count(args);
switch (G__63215) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg63013 = (function (){var G__63218 = ctx;
var G__63219 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63218,G__63219) : sci.impl.interpreter.interpret.call(null,G__63218,G__63219));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg63013) : f.call(null,arg63013));

break;
case (2):
var arg63014 = (function (){var G__63220 = ctx;
var G__63221 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63220,G__63221) : sci.impl.interpreter.interpret.call(null,G__63220,G__63221));
})();
var args__$1 = cljs.core.rest(args);
var arg63015 = (function (){var G__63222 = ctx;
var G__63223 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63222,G__63223) : sci.impl.interpreter.interpret.call(null,G__63222,G__63223));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg63014,arg63015) : f.call(null,arg63014,arg63015));

break;
case (3):
var arg63016 = (function (){var G__63224 = ctx;
var G__63225 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63224,G__63225) : sci.impl.interpreter.interpret.call(null,G__63224,G__63225));
})();
var args__$1 = cljs.core.rest(args);
var arg63017 = (function (){var G__63226 = ctx;
var G__63227 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63226,G__63227) : sci.impl.interpreter.interpret.call(null,G__63226,G__63227));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63018 = (function (){var G__63228 = ctx;
var G__63229 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63228,G__63229) : sci.impl.interpreter.interpret.call(null,G__63228,G__63229));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg63016,arg63017,arg63018) : f.call(null,arg63016,arg63017,arg63018));

break;
case (4):
var arg63019 = (function (){var G__63230 = ctx;
var G__63231 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63230,G__63231) : sci.impl.interpreter.interpret.call(null,G__63230,G__63231));
})();
var args__$1 = cljs.core.rest(args);
var arg63020 = (function (){var G__63232 = ctx;
var G__63233 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63232,G__63233) : sci.impl.interpreter.interpret.call(null,G__63232,G__63233));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63021 = (function (){var G__63234 = ctx;
var G__63235 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63234,G__63235) : sci.impl.interpreter.interpret.call(null,G__63234,G__63235));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63022 = (function (){var G__63236 = ctx;
var G__63237 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63236,G__63237) : sci.impl.interpreter.interpret.call(null,G__63236,G__63237));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg63019,arg63020,arg63021,arg63022) : f.call(null,arg63019,arg63020,arg63021,arg63022));

break;
case (5):
var arg63023 = (function (){var G__63238 = ctx;
var G__63239 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63238,G__63239) : sci.impl.interpreter.interpret.call(null,G__63238,G__63239));
})();
var args__$1 = cljs.core.rest(args);
var arg63024 = (function (){var G__63240 = ctx;
var G__63241 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63240,G__63241) : sci.impl.interpreter.interpret.call(null,G__63240,G__63241));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63025 = (function (){var G__63262 = ctx;
var G__63263 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63262,G__63263) : sci.impl.interpreter.interpret.call(null,G__63262,G__63263));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63026 = (function (){var G__63264 = ctx;
var G__63265 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63264,G__63265) : sci.impl.interpreter.interpret.call(null,G__63264,G__63265));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63027 = (function (){var G__63266 = ctx;
var G__63267 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63266,G__63267) : sci.impl.interpreter.interpret.call(null,G__63266,G__63267));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg63023,arg63024,arg63025,arg63026,arg63027) : f.call(null,arg63023,arg63024,arg63025,arg63026,arg63027));

break;
case (6):
var arg63028 = (function (){var G__63268 = ctx;
var G__63269 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63268,G__63269) : sci.impl.interpreter.interpret.call(null,G__63268,G__63269));
})();
var args__$1 = cljs.core.rest(args);
var arg63029 = (function (){var G__63270 = ctx;
var G__63271 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63270,G__63271) : sci.impl.interpreter.interpret.call(null,G__63270,G__63271));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63030 = (function (){var G__63272 = ctx;
var G__63273 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63272,G__63273) : sci.impl.interpreter.interpret.call(null,G__63272,G__63273));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63031 = (function (){var G__63274 = ctx;
var G__63275 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63274,G__63275) : sci.impl.interpreter.interpret.call(null,G__63274,G__63275));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63032 = (function (){var G__63276 = ctx;
var G__63277 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63276,G__63277) : sci.impl.interpreter.interpret.call(null,G__63276,G__63277));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63033 = (function (){var G__63278 = ctx;
var G__63279 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63278,G__63279) : sci.impl.interpreter.interpret.call(null,G__63278,G__63279));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg63028,arg63029,arg63030,arg63031,arg63032,arg63033) : f.call(null,arg63028,arg63029,arg63030,arg63031,arg63032,arg63033));

break;
case (7):
var arg63034 = (function (){var G__63280 = ctx;
var G__63281 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63280,G__63281) : sci.impl.interpreter.interpret.call(null,G__63280,G__63281));
})();
var args__$1 = cljs.core.rest(args);
var arg63035 = (function (){var G__63282 = ctx;
var G__63283 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63282,G__63283) : sci.impl.interpreter.interpret.call(null,G__63282,G__63283));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63036 = (function (){var G__63284 = ctx;
var G__63285 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63284,G__63285) : sci.impl.interpreter.interpret.call(null,G__63284,G__63285));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63037 = (function (){var G__63286 = ctx;
var G__63287 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63286,G__63287) : sci.impl.interpreter.interpret.call(null,G__63286,G__63287));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63038 = (function (){var G__63288 = ctx;
var G__63289 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63288,G__63289) : sci.impl.interpreter.interpret.call(null,G__63288,G__63289));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63039 = (function (){var G__63290 = ctx;
var G__63291 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63290,G__63291) : sci.impl.interpreter.interpret.call(null,G__63290,G__63291));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63040 = (function (){var G__63292 = ctx;
var G__63293 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63292,G__63293) : sci.impl.interpreter.interpret.call(null,G__63292,G__63293));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg63034,arg63035,arg63036,arg63037,arg63038,arg63039,arg63040) : f.call(null,arg63034,arg63035,arg63036,arg63037,arg63038,arg63039,arg63040));

break;
case (8):
var arg63041 = (function (){var G__63294 = ctx;
var G__63295 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63294,G__63295) : sci.impl.interpreter.interpret.call(null,G__63294,G__63295));
})();
var args__$1 = cljs.core.rest(args);
var arg63042 = (function (){var G__63296 = ctx;
var G__63297 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63296,G__63297) : sci.impl.interpreter.interpret.call(null,G__63296,G__63297));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63043 = (function (){var G__63298 = ctx;
var G__63299 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63298,G__63299) : sci.impl.interpreter.interpret.call(null,G__63298,G__63299));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63044 = (function (){var G__63300 = ctx;
var G__63301 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63300,G__63301) : sci.impl.interpreter.interpret.call(null,G__63300,G__63301));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63045 = (function (){var G__63302 = ctx;
var G__63303 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63302,G__63303) : sci.impl.interpreter.interpret.call(null,G__63302,G__63303));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63046 = (function (){var G__63304 = ctx;
var G__63305 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63304,G__63305) : sci.impl.interpreter.interpret.call(null,G__63304,G__63305));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63047 = (function (){var G__63306 = ctx;
var G__63307 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63306,G__63307) : sci.impl.interpreter.interpret.call(null,G__63306,G__63307));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63048 = (function (){var G__63308 = ctx;
var G__63309 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63308,G__63309) : sci.impl.interpreter.interpret.call(null,G__63308,G__63309));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg63041,arg63042,arg63043,arg63044,arg63045,arg63046,arg63047,arg63048) : f.call(null,arg63041,arg63042,arg63043,arg63044,arg63045,arg63046,arg63047,arg63048));

break;
case (9):
var arg63049 = (function (){var G__63310 = ctx;
var G__63311 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63310,G__63311) : sci.impl.interpreter.interpret.call(null,G__63310,G__63311));
})();
var args__$1 = cljs.core.rest(args);
var arg63050 = (function (){var G__63312 = ctx;
var G__63313 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63312,G__63313) : sci.impl.interpreter.interpret.call(null,G__63312,G__63313));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63051 = (function (){var G__63314 = ctx;
var G__63315 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63314,G__63315) : sci.impl.interpreter.interpret.call(null,G__63314,G__63315));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63052 = (function (){var G__63316 = ctx;
var G__63317 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63316,G__63317) : sci.impl.interpreter.interpret.call(null,G__63316,G__63317));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63053 = (function (){var G__63318 = ctx;
var G__63319 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63318,G__63319) : sci.impl.interpreter.interpret.call(null,G__63318,G__63319));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63054 = (function (){var G__63320 = ctx;
var G__63321 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63320,G__63321) : sci.impl.interpreter.interpret.call(null,G__63320,G__63321));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63055 = (function (){var G__63322 = ctx;
var G__63323 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63322,G__63323) : sci.impl.interpreter.interpret.call(null,G__63322,G__63323));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63056 = (function (){var G__63324 = ctx;
var G__63325 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63324,G__63325) : sci.impl.interpreter.interpret.call(null,G__63324,G__63325));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63057 = (function (){var G__63330 = ctx;
var G__63331 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63330,G__63331) : sci.impl.interpreter.interpret.call(null,G__63330,G__63331));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg63049,arg63050,arg63051,arg63052,arg63053,arg63054,arg63055,arg63056,arg63057) : f.call(null,arg63049,arg63050,arg63051,arg63052,arg63053,arg63054,arg63055,arg63056,arg63057));

break;
case (10):
var arg63058 = (function (){var G__63340 = ctx;
var G__63341 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63340,G__63341) : sci.impl.interpreter.interpret.call(null,G__63340,G__63341));
})();
var args__$1 = cljs.core.rest(args);
var arg63059 = (function (){var G__63342 = ctx;
var G__63343 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63342,G__63343) : sci.impl.interpreter.interpret.call(null,G__63342,G__63343));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63060 = (function (){var G__63344 = ctx;
var G__63345 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63344,G__63345) : sci.impl.interpreter.interpret.call(null,G__63344,G__63345));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63061 = (function (){var G__63346 = ctx;
var G__63347 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63346,G__63347) : sci.impl.interpreter.interpret.call(null,G__63346,G__63347));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63062 = (function (){var G__63356 = ctx;
var G__63357 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63356,G__63357) : sci.impl.interpreter.interpret.call(null,G__63356,G__63357));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63063 = (function (){var G__63358 = ctx;
var G__63359 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63358,G__63359) : sci.impl.interpreter.interpret.call(null,G__63358,G__63359));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63064 = (function (){var G__63360 = ctx;
var G__63361 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63360,G__63361) : sci.impl.interpreter.interpret.call(null,G__63360,G__63361));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63065 = (function (){var G__63362 = ctx;
var G__63363 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63362,G__63363) : sci.impl.interpreter.interpret.call(null,G__63362,G__63363));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63066 = (function (){var G__63364 = ctx;
var G__63365 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63364,G__63365) : sci.impl.interpreter.interpret.call(null,G__63364,G__63365));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63067 = (function (){var G__63366 = ctx;
var G__63367 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63366,G__63367) : sci.impl.interpreter.interpret.call(null,G__63366,G__63367));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg63058,arg63059,arg63060,arg63061,arg63062,arg63063,arg63064,arg63065,arg63066,arg63067) : f.call(null,arg63058,arg63059,arg63060,arg63061,arg63062,arg63063,arg63064,arg63065,arg63066,arg63067));

break;
case (11):
var arg63068 = (function (){var G__63368 = ctx;
var G__63369 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63368,G__63369) : sci.impl.interpreter.interpret.call(null,G__63368,G__63369));
})();
var args__$1 = cljs.core.rest(args);
var arg63069 = (function (){var G__63370 = ctx;
var G__63371 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63370,G__63371) : sci.impl.interpreter.interpret.call(null,G__63370,G__63371));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63070 = (function (){var G__63372 = ctx;
var G__63373 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63372,G__63373) : sci.impl.interpreter.interpret.call(null,G__63372,G__63373));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63071 = (function (){var G__63374 = ctx;
var G__63375 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63374,G__63375) : sci.impl.interpreter.interpret.call(null,G__63374,G__63375));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63072 = (function (){var G__63376 = ctx;
var G__63377 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63376,G__63377) : sci.impl.interpreter.interpret.call(null,G__63376,G__63377));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63073 = (function (){var G__63378 = ctx;
var G__63379 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63378,G__63379) : sci.impl.interpreter.interpret.call(null,G__63378,G__63379));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63074 = (function (){var G__63380 = ctx;
var G__63381 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63380,G__63381) : sci.impl.interpreter.interpret.call(null,G__63380,G__63381));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63075 = (function (){var G__63382 = ctx;
var G__63383 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63382,G__63383) : sci.impl.interpreter.interpret.call(null,G__63382,G__63383));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63076 = (function (){var G__63384 = ctx;
var G__63385 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63384,G__63385) : sci.impl.interpreter.interpret.call(null,G__63384,G__63385));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63077 = (function (){var G__63386 = ctx;
var G__63387 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63386,G__63387) : sci.impl.interpreter.interpret.call(null,G__63386,G__63387));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63078 = (function (){var G__63388 = ctx;
var G__63389 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63388,G__63389) : sci.impl.interpreter.interpret.call(null,G__63388,G__63389));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg63068,arg63069,arg63070,arg63071,arg63072,arg63073,arg63074,arg63075,arg63076,arg63077,arg63078) : f.call(null,arg63068,arg63069,arg63070,arg63071,arg63072,arg63073,arg63074,arg63075,arg63076,arg63077,arg63078));

break;
case (12):
var arg63079 = (function (){var G__63390 = ctx;
var G__63391 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63390,G__63391) : sci.impl.interpreter.interpret.call(null,G__63390,G__63391));
})();
var args__$1 = cljs.core.rest(args);
var arg63080 = (function (){var G__63392 = ctx;
var G__63393 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63392,G__63393) : sci.impl.interpreter.interpret.call(null,G__63392,G__63393));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63081 = (function (){var G__63394 = ctx;
var G__63395 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63394,G__63395) : sci.impl.interpreter.interpret.call(null,G__63394,G__63395));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63082 = (function (){var G__63396 = ctx;
var G__63397 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63396,G__63397) : sci.impl.interpreter.interpret.call(null,G__63396,G__63397));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63083 = (function (){var G__63398 = ctx;
var G__63399 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63398,G__63399) : sci.impl.interpreter.interpret.call(null,G__63398,G__63399));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63084 = (function (){var G__63400 = ctx;
var G__63401 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63400,G__63401) : sci.impl.interpreter.interpret.call(null,G__63400,G__63401));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63085 = (function (){var G__63402 = ctx;
var G__63403 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63402,G__63403) : sci.impl.interpreter.interpret.call(null,G__63402,G__63403));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63086 = (function (){var G__63404 = ctx;
var G__63405 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63404,G__63405) : sci.impl.interpreter.interpret.call(null,G__63404,G__63405));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63087 = (function (){var G__63406 = ctx;
var G__63407 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63406,G__63407) : sci.impl.interpreter.interpret.call(null,G__63406,G__63407));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63088 = (function (){var G__63408 = ctx;
var G__63409 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63408,G__63409) : sci.impl.interpreter.interpret.call(null,G__63408,G__63409));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63089 = (function (){var G__63410 = ctx;
var G__63411 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63410,G__63411) : sci.impl.interpreter.interpret.call(null,G__63410,G__63411));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63090 = (function (){var G__63412 = ctx;
var G__63413 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63412,G__63413) : sci.impl.interpreter.interpret.call(null,G__63412,G__63413));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg63079,arg63080,arg63081,arg63082,arg63083,arg63084,arg63085,arg63086,arg63087,arg63088,arg63089,arg63090) : f.call(null,arg63079,arg63080,arg63081,arg63082,arg63083,arg63084,arg63085,arg63086,arg63087,arg63088,arg63089,arg63090));

break;
case (13):
var arg63091 = (function (){var G__63414 = ctx;
var G__63415 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63414,G__63415) : sci.impl.interpreter.interpret.call(null,G__63414,G__63415));
})();
var args__$1 = cljs.core.rest(args);
var arg63092 = (function (){var G__63416 = ctx;
var G__63417 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63416,G__63417) : sci.impl.interpreter.interpret.call(null,G__63416,G__63417));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63093 = (function (){var G__63418 = ctx;
var G__63419 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63418,G__63419) : sci.impl.interpreter.interpret.call(null,G__63418,G__63419));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63094 = (function (){var G__63420 = ctx;
var G__63421 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63420,G__63421) : sci.impl.interpreter.interpret.call(null,G__63420,G__63421));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63095 = (function (){var G__63422 = ctx;
var G__63423 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63422,G__63423) : sci.impl.interpreter.interpret.call(null,G__63422,G__63423));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63096 = (function (){var G__63424 = ctx;
var G__63425 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63424,G__63425) : sci.impl.interpreter.interpret.call(null,G__63424,G__63425));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63097 = (function (){var G__63426 = ctx;
var G__63427 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63426,G__63427) : sci.impl.interpreter.interpret.call(null,G__63426,G__63427));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63098 = (function (){var G__63428 = ctx;
var G__63429 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63428,G__63429) : sci.impl.interpreter.interpret.call(null,G__63428,G__63429));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63099 = (function (){var G__63430 = ctx;
var G__63431 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63430,G__63431) : sci.impl.interpreter.interpret.call(null,G__63430,G__63431));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63100 = (function (){var G__63432 = ctx;
var G__63433 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63432,G__63433) : sci.impl.interpreter.interpret.call(null,G__63432,G__63433));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63101 = (function (){var G__63434 = ctx;
var G__63435 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63434,G__63435) : sci.impl.interpreter.interpret.call(null,G__63434,G__63435));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63102 = (function (){var G__63436 = ctx;
var G__63437 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63436,G__63437) : sci.impl.interpreter.interpret.call(null,G__63436,G__63437));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63103 = (function (){var G__63438 = ctx;
var G__63439 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63438,G__63439) : sci.impl.interpreter.interpret.call(null,G__63438,G__63439));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg63091,arg63092,arg63093,arg63094,arg63095,arg63096,arg63097,arg63098,arg63099,arg63100,arg63101,arg63102,arg63103) : f.call(null,arg63091,arg63092,arg63093,arg63094,arg63095,arg63096,arg63097,arg63098,arg63099,arg63100,arg63101,arg63102,arg63103));

break;
case (14):
var arg63104 = (function (){var G__63440 = ctx;
var G__63441 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63440,G__63441) : sci.impl.interpreter.interpret.call(null,G__63440,G__63441));
})();
var args__$1 = cljs.core.rest(args);
var arg63105 = (function (){var G__63442 = ctx;
var G__63443 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63442,G__63443) : sci.impl.interpreter.interpret.call(null,G__63442,G__63443));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63106 = (function (){var G__63444 = ctx;
var G__63445 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63444,G__63445) : sci.impl.interpreter.interpret.call(null,G__63444,G__63445));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63107 = (function (){var G__63446 = ctx;
var G__63447 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63446,G__63447) : sci.impl.interpreter.interpret.call(null,G__63446,G__63447));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63108 = (function (){var G__63448 = ctx;
var G__63449 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63448,G__63449) : sci.impl.interpreter.interpret.call(null,G__63448,G__63449));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63109 = (function (){var G__63450 = ctx;
var G__63451 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63450,G__63451) : sci.impl.interpreter.interpret.call(null,G__63450,G__63451));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63110 = (function (){var G__63452 = ctx;
var G__63453 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63452,G__63453) : sci.impl.interpreter.interpret.call(null,G__63452,G__63453));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63111 = (function (){var G__63454 = ctx;
var G__63455 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63454,G__63455) : sci.impl.interpreter.interpret.call(null,G__63454,G__63455));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63112 = (function (){var G__63456 = ctx;
var G__63457 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63456,G__63457) : sci.impl.interpreter.interpret.call(null,G__63456,G__63457));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63113 = (function (){var G__63458 = ctx;
var G__63459 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63458,G__63459) : sci.impl.interpreter.interpret.call(null,G__63458,G__63459));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63114 = (function (){var G__63460 = ctx;
var G__63461 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63460,G__63461) : sci.impl.interpreter.interpret.call(null,G__63460,G__63461));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63115 = (function (){var G__63462 = ctx;
var G__63463 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63462,G__63463) : sci.impl.interpreter.interpret.call(null,G__63462,G__63463));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63116 = (function (){var G__63464 = ctx;
var G__63465 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63464,G__63465) : sci.impl.interpreter.interpret.call(null,G__63464,G__63465));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63117 = (function (){var G__63466 = ctx;
var G__63467 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63466,G__63467) : sci.impl.interpreter.interpret.call(null,G__63466,G__63467));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg63104,arg63105,arg63106,arg63107,arg63108,arg63109,arg63110,arg63111,arg63112,arg63113,arg63114,arg63115,arg63116,arg63117) : f.call(null,arg63104,arg63105,arg63106,arg63107,arg63108,arg63109,arg63110,arg63111,arg63112,arg63113,arg63114,arg63115,arg63116,arg63117));

break;
case (15):
var arg63118 = (function (){var G__63468 = ctx;
var G__63469 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63468,G__63469) : sci.impl.interpreter.interpret.call(null,G__63468,G__63469));
})();
var args__$1 = cljs.core.rest(args);
var arg63119 = (function (){var G__63470 = ctx;
var G__63471 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63470,G__63471) : sci.impl.interpreter.interpret.call(null,G__63470,G__63471));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63120 = (function (){var G__63472 = ctx;
var G__63473 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63472,G__63473) : sci.impl.interpreter.interpret.call(null,G__63472,G__63473));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63121 = (function (){var G__63474 = ctx;
var G__63475 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63474,G__63475) : sci.impl.interpreter.interpret.call(null,G__63474,G__63475));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63122 = (function (){var G__63476 = ctx;
var G__63477 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63476,G__63477) : sci.impl.interpreter.interpret.call(null,G__63476,G__63477));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63123 = (function (){var G__63478 = ctx;
var G__63479 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63478,G__63479) : sci.impl.interpreter.interpret.call(null,G__63478,G__63479));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63124 = (function (){var G__63480 = ctx;
var G__63481 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63480,G__63481) : sci.impl.interpreter.interpret.call(null,G__63480,G__63481));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63125 = (function (){var G__63482 = ctx;
var G__63483 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63482,G__63483) : sci.impl.interpreter.interpret.call(null,G__63482,G__63483));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63126 = (function (){var G__63484 = ctx;
var G__63485 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63484,G__63485) : sci.impl.interpreter.interpret.call(null,G__63484,G__63485));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63127 = (function (){var G__63486 = ctx;
var G__63487 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63486,G__63487) : sci.impl.interpreter.interpret.call(null,G__63486,G__63487));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63128 = (function (){var G__63488 = ctx;
var G__63489 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63488,G__63489) : sci.impl.interpreter.interpret.call(null,G__63488,G__63489));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63129 = (function (){var G__63490 = ctx;
var G__63491 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63490,G__63491) : sci.impl.interpreter.interpret.call(null,G__63490,G__63491));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63130 = (function (){var G__63492 = ctx;
var G__63493 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63492,G__63493) : sci.impl.interpreter.interpret.call(null,G__63492,G__63493));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63131 = (function (){var G__63494 = ctx;
var G__63495 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63494,G__63495) : sci.impl.interpreter.interpret.call(null,G__63494,G__63495));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63132 = (function (){var G__63496 = ctx;
var G__63497 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63496,G__63497) : sci.impl.interpreter.interpret.call(null,G__63496,G__63497));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg63118,arg63119,arg63120,arg63121,arg63122,arg63123,arg63124,arg63125,arg63126,arg63127,arg63128,arg63129,arg63130,arg63131,arg63132) : f.call(null,arg63118,arg63119,arg63120,arg63121,arg63122,arg63123,arg63124,arg63125,arg63126,arg63127,arg63128,arg63129,arg63130,arg63131,arg63132));

break;
case (16):
var arg63133 = (function (){var G__63498 = ctx;
var G__63499 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63498,G__63499) : sci.impl.interpreter.interpret.call(null,G__63498,G__63499));
})();
var args__$1 = cljs.core.rest(args);
var arg63134 = (function (){var G__63500 = ctx;
var G__63501 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63500,G__63501) : sci.impl.interpreter.interpret.call(null,G__63500,G__63501));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63135 = (function (){var G__63502 = ctx;
var G__63503 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63502,G__63503) : sci.impl.interpreter.interpret.call(null,G__63502,G__63503));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63136 = (function (){var G__63504 = ctx;
var G__63505 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63504,G__63505) : sci.impl.interpreter.interpret.call(null,G__63504,G__63505));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63137 = (function (){var G__63506 = ctx;
var G__63507 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63506,G__63507) : sci.impl.interpreter.interpret.call(null,G__63506,G__63507));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63138 = (function (){var G__63508 = ctx;
var G__63509 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63508,G__63509) : sci.impl.interpreter.interpret.call(null,G__63508,G__63509));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63139 = (function (){var G__63510 = ctx;
var G__63511 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63510,G__63511) : sci.impl.interpreter.interpret.call(null,G__63510,G__63511));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63140 = (function (){var G__63512 = ctx;
var G__63513 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63512,G__63513) : sci.impl.interpreter.interpret.call(null,G__63512,G__63513));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63141 = (function (){var G__63514 = ctx;
var G__63515 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63514,G__63515) : sci.impl.interpreter.interpret.call(null,G__63514,G__63515));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63142 = (function (){var G__63516 = ctx;
var G__63517 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63516,G__63517) : sci.impl.interpreter.interpret.call(null,G__63516,G__63517));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63143 = (function (){var G__63518 = ctx;
var G__63519 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63518,G__63519) : sci.impl.interpreter.interpret.call(null,G__63518,G__63519));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63144 = (function (){var G__63520 = ctx;
var G__63521 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63520,G__63521) : sci.impl.interpreter.interpret.call(null,G__63520,G__63521));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63145 = (function (){var G__63522 = ctx;
var G__63523 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63522,G__63523) : sci.impl.interpreter.interpret.call(null,G__63522,G__63523));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63146 = (function (){var G__63524 = ctx;
var G__63525 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63524,G__63525) : sci.impl.interpreter.interpret.call(null,G__63524,G__63525));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63147 = (function (){var G__63526 = ctx;
var G__63527 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63526,G__63527) : sci.impl.interpreter.interpret.call(null,G__63526,G__63527));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63148 = (function (){var G__63528 = ctx;
var G__63529 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63528,G__63529) : sci.impl.interpreter.interpret.call(null,G__63528,G__63529));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg63133,arg63134,arg63135,arg63136,arg63137,arg63138,arg63139,arg63140,arg63141,arg63142,arg63143,arg63144,arg63145,arg63146,arg63147,arg63148) : f.call(null,arg63133,arg63134,arg63135,arg63136,arg63137,arg63138,arg63139,arg63140,arg63141,arg63142,arg63143,arg63144,arg63145,arg63146,arg63147,arg63148));

break;
case (17):
var arg63149 = (function (){var G__63530 = ctx;
var G__63531 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63530,G__63531) : sci.impl.interpreter.interpret.call(null,G__63530,G__63531));
})();
var args__$1 = cljs.core.rest(args);
var arg63150 = (function (){var G__63532 = ctx;
var G__63533 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63532,G__63533) : sci.impl.interpreter.interpret.call(null,G__63532,G__63533));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63151 = (function (){var G__63534 = ctx;
var G__63535 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63534,G__63535) : sci.impl.interpreter.interpret.call(null,G__63534,G__63535));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63152 = (function (){var G__63536 = ctx;
var G__63537 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63536,G__63537) : sci.impl.interpreter.interpret.call(null,G__63536,G__63537));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63153 = (function (){var G__63538 = ctx;
var G__63539 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63538,G__63539) : sci.impl.interpreter.interpret.call(null,G__63538,G__63539));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63154 = (function (){var G__63540 = ctx;
var G__63541 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63540,G__63541) : sci.impl.interpreter.interpret.call(null,G__63540,G__63541));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63155 = (function (){var G__63542 = ctx;
var G__63543 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63542,G__63543) : sci.impl.interpreter.interpret.call(null,G__63542,G__63543));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63156 = (function (){var G__63544 = ctx;
var G__63545 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63544,G__63545) : sci.impl.interpreter.interpret.call(null,G__63544,G__63545));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63157 = (function (){var G__63546 = ctx;
var G__63547 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63546,G__63547) : sci.impl.interpreter.interpret.call(null,G__63546,G__63547));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63158 = (function (){var G__63548 = ctx;
var G__63549 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63548,G__63549) : sci.impl.interpreter.interpret.call(null,G__63548,G__63549));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63159 = (function (){var G__63550 = ctx;
var G__63551 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63550,G__63551) : sci.impl.interpreter.interpret.call(null,G__63550,G__63551));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63160 = (function (){var G__63552 = ctx;
var G__63553 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63552,G__63553) : sci.impl.interpreter.interpret.call(null,G__63552,G__63553));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63161 = (function (){var G__63554 = ctx;
var G__63555 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63554,G__63555) : sci.impl.interpreter.interpret.call(null,G__63554,G__63555));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63162 = (function (){var G__63556 = ctx;
var G__63557 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63556,G__63557) : sci.impl.interpreter.interpret.call(null,G__63556,G__63557));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63163 = (function (){var G__63558 = ctx;
var G__63559 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63558,G__63559) : sci.impl.interpreter.interpret.call(null,G__63558,G__63559));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63164 = (function (){var G__63560 = ctx;
var G__63561 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63560,G__63561) : sci.impl.interpreter.interpret.call(null,G__63560,G__63561));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63165 = (function (){var G__63562 = ctx;
var G__63563 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63562,G__63563) : sci.impl.interpreter.interpret.call(null,G__63562,G__63563));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg63149,arg63150,arg63151,arg63152,arg63153,arg63154,arg63155,arg63156,arg63157,arg63158,arg63159,arg63160,arg63161,arg63162,arg63163,arg63164,arg63165) : f.call(null,arg63149,arg63150,arg63151,arg63152,arg63153,arg63154,arg63155,arg63156,arg63157,arg63158,arg63159,arg63160,arg63161,arg63162,arg63163,arg63164,arg63165));

break;
case (18):
var arg63166 = (function (){var G__63567 = ctx;
var G__63568 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63567,G__63568) : sci.impl.interpreter.interpret.call(null,G__63567,G__63568));
})();
var args__$1 = cljs.core.rest(args);
var arg63167 = (function (){var G__63569 = ctx;
var G__63570 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63569,G__63570) : sci.impl.interpreter.interpret.call(null,G__63569,G__63570));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63168 = (function (){var G__63571 = ctx;
var G__63572 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63571,G__63572) : sci.impl.interpreter.interpret.call(null,G__63571,G__63572));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63169 = (function (){var G__63573 = ctx;
var G__63574 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63573,G__63574) : sci.impl.interpreter.interpret.call(null,G__63573,G__63574));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63170 = (function (){var G__63578 = ctx;
var G__63579 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63578,G__63579) : sci.impl.interpreter.interpret.call(null,G__63578,G__63579));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63171 = (function (){var G__63580 = ctx;
var G__63581 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63580,G__63581) : sci.impl.interpreter.interpret.call(null,G__63580,G__63581));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63172 = (function (){var G__63582 = ctx;
var G__63583 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63582,G__63583) : sci.impl.interpreter.interpret.call(null,G__63582,G__63583));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63173 = (function (){var G__63584 = ctx;
var G__63585 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63584,G__63585) : sci.impl.interpreter.interpret.call(null,G__63584,G__63585));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63174 = (function (){var G__63586 = ctx;
var G__63587 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63586,G__63587) : sci.impl.interpreter.interpret.call(null,G__63586,G__63587));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63175 = (function (){var G__63588 = ctx;
var G__63589 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63588,G__63589) : sci.impl.interpreter.interpret.call(null,G__63588,G__63589));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63176 = (function (){var G__63590 = ctx;
var G__63591 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63590,G__63591) : sci.impl.interpreter.interpret.call(null,G__63590,G__63591));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63177 = (function (){var G__63592 = ctx;
var G__63593 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63592,G__63593) : sci.impl.interpreter.interpret.call(null,G__63592,G__63593));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63178 = (function (){var G__63594 = ctx;
var G__63595 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63594,G__63595) : sci.impl.interpreter.interpret.call(null,G__63594,G__63595));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63179 = (function (){var G__63596 = ctx;
var G__63597 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63596,G__63597) : sci.impl.interpreter.interpret.call(null,G__63596,G__63597));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63180 = (function (){var G__63601 = ctx;
var G__63602 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63601,G__63602) : sci.impl.interpreter.interpret.call(null,G__63601,G__63602));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63181 = (function (){var G__63603 = ctx;
var G__63604 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63603,G__63604) : sci.impl.interpreter.interpret.call(null,G__63603,G__63604));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63182 = (function (){var G__63605 = ctx;
var G__63606 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63605,G__63606) : sci.impl.interpreter.interpret.call(null,G__63605,G__63606));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63183 = (function (){var G__63607 = ctx;
var G__63608 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63607,G__63608) : sci.impl.interpreter.interpret.call(null,G__63607,G__63608));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg63166,arg63167,arg63168,arg63169,arg63170,arg63171,arg63172,arg63173,arg63174,arg63175,arg63176,arg63177,arg63178,arg63179,arg63180,arg63181,arg63182,arg63183) : f.call(null,arg63166,arg63167,arg63168,arg63169,arg63170,arg63171,arg63172,arg63173,arg63174,arg63175,arg63176,arg63177,arg63178,arg63179,arg63180,arg63181,arg63182,arg63183));

break;
case (19):
var arg63184 = (function (){var G__63612 = ctx;
var G__63613 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63612,G__63613) : sci.impl.interpreter.interpret.call(null,G__63612,G__63613));
})();
var args__$1 = cljs.core.rest(args);
var arg63185 = (function (){var G__63614 = ctx;
var G__63615 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63614,G__63615) : sci.impl.interpreter.interpret.call(null,G__63614,G__63615));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63186 = (function (){var G__63616 = ctx;
var G__63617 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63616,G__63617) : sci.impl.interpreter.interpret.call(null,G__63616,G__63617));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63187 = (function (){var G__63618 = ctx;
var G__63619 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63618,G__63619) : sci.impl.interpreter.interpret.call(null,G__63618,G__63619));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63188 = (function (){var G__63620 = ctx;
var G__63621 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63620,G__63621) : sci.impl.interpreter.interpret.call(null,G__63620,G__63621));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63189 = (function (){var G__63622 = ctx;
var G__63623 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63622,G__63623) : sci.impl.interpreter.interpret.call(null,G__63622,G__63623));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63190 = (function (){var G__63624 = ctx;
var G__63625 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63624,G__63625) : sci.impl.interpreter.interpret.call(null,G__63624,G__63625));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63191 = (function (){var G__63626 = ctx;
var G__63627 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63626,G__63627) : sci.impl.interpreter.interpret.call(null,G__63626,G__63627));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63192 = (function (){var G__63628 = ctx;
var G__63629 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63628,G__63629) : sci.impl.interpreter.interpret.call(null,G__63628,G__63629));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63193 = (function (){var G__63630 = ctx;
var G__63631 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63630,G__63631) : sci.impl.interpreter.interpret.call(null,G__63630,G__63631));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63194 = (function (){var G__63632 = ctx;
var G__63633 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63632,G__63633) : sci.impl.interpreter.interpret.call(null,G__63632,G__63633));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63195 = (function (){var G__63634 = ctx;
var G__63635 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63634,G__63635) : sci.impl.interpreter.interpret.call(null,G__63634,G__63635));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63196 = (function (){var G__63636 = ctx;
var G__63637 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63636,G__63637) : sci.impl.interpreter.interpret.call(null,G__63636,G__63637));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63197 = (function (){var G__63638 = ctx;
var G__63639 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63638,G__63639) : sci.impl.interpreter.interpret.call(null,G__63638,G__63639));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63198 = (function (){var G__63640 = ctx;
var G__63641 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63640,G__63641) : sci.impl.interpreter.interpret.call(null,G__63640,G__63641));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63199 = (function (){var G__63642 = ctx;
var G__63643 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63642,G__63643) : sci.impl.interpreter.interpret.call(null,G__63642,G__63643));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63200 = (function (){var G__63644 = ctx;
var G__63645 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63644,G__63645) : sci.impl.interpreter.interpret.call(null,G__63644,G__63645));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63201 = (function (){var G__63646 = ctx;
var G__63647 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63646,G__63647) : sci.impl.interpreter.interpret.call(null,G__63646,G__63647));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg63202 = (function (){var G__63648 = ctx;
var G__63649 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63648,G__63649) : sci.impl.interpreter.interpret.call(null,G__63648,G__63649));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg63184,arg63185,arg63186,arg63187,arg63188,arg63189,arg63190,arg63191,arg63192,arg63193,arg63194,arg63195,arg63196,arg63197,arg63198,arg63199,arg63200,arg63201,arg63202) : f.call(null,arg63184,arg63185,arg63186,arg63187,arg63188,arg63189,arg63190,arg63191,arg63192,arg63193,arg63194,arg63195,arg63196,arg63197,arg63198,arg63199,arg63200,arg63201,arg63202));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__63650 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__63650)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__63650)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__63650)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__63650)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__63650)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__63650)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__63651 = ctx;
var G__63652 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63651,G__63652) : sci.impl.interpreter.interpret.call(null,G__63651,G__63652));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__63650)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__63650)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__63650)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__63650)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__63650)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__63650)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__63650)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__63650)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__63650)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__63653 = ctx;
var G__63654 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63653,G__63654) : sci.impl.interpreter.interpret.call(null,G__63653,G__63654));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__63650)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__63650)){
return (new cljs.core.LazySeq(null,(function (){var G__63655 = ctx;
var G__63656 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__63655,G__63656) : sci.impl.interpreter.interpret.call(null,G__63655,G__63656));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__63650)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__63650)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__63650)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__63650)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63650)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
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
if(cljs.core.truth_((function (){var G__63663 = op;
var G__63664 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__63663,G__63664) : sci.impl.utils.kw_identical_QMARK_.call(null,G__63663,G__63664));
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
}catch (e63661){if((e63661 instanceof Error)){
var e = e63661;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e63661;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__63676 = op;
var G__63676__$1 = (((G__63676 instanceof cljs.core.Keyword))?G__63676.fqn:null);
switch (G__63676__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63668_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63668_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63668_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63669_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63669_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63669_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63671_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__63671_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__63671_SHARP_));
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
var G__63935 = cljs.core.rest(exprs);
var G__63936 = (function (){var G__63679 = ctx;
var G__63680 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__63679,G__63680) : sci.impl.interpreter.eval_form.call(null,G__63679,G__63680));
})();
exprs = G__63935;
ret = G__63936;
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
if(cljs.core.truth_((function (){var G__63683 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__63684 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__63683,G__63684) : sci.impl.utils.kw_identical_QMARK_.call(null,G__63683,G__63684));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__63951 = ret__$1;
ret = G__63951;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__63686 = arguments.length;
switch (G__63686) {
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
