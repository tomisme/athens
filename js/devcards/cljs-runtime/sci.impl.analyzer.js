goog.provide('sci.impl.analyzer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.destructure');
goog.require('sci.impl.doseq_macro');
goog.require('sci.impl.for_macro');
goog.require('sci.impl.interop');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 35, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"import","import",241030818,null),"null",new cljs.core.Symbol(null,"doseq","doseq",221164135,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"->","->",-2139605430,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"as->","as->",1430690540,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"ns","ns",2082130287,null),"null",new cljs.core.Symbol(null,"declare","declare",654042991,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"the-ns","the-ns",1016317907,null),"null",new cljs.core.Symbol(null,"loop","loop",1244978678,null),"null",new cljs.core.Symbol(null,"for","for",316745208,null),"null",new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),"null",new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"comment","comment",-2122229700,null),"null",new cljs.core.Symbol(null,"resolve","resolve",56086045,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null",new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),"null",new cljs.core.Symbol(null,"quote*","quote*",1608011487,null),"null"], null), null);
sci.impl.analyzer.check_permission_BANG_ = (function sci$impl$analyzer$check_permission_BANG_(p__46784,check_sym,sym){
var map__46785 = p__46784;
var map__46785__$1 = (((((!((map__46785 == null))))?(((((map__46785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46785):map__46785);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46785__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46785__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
if(cljs.core.truth_((function (){var G__46787 = new cljs.core.Keyword(null,"allow","allow",-1857325745);
var G__46788 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__46787,G__46788) : sci.impl.utils.kw_identical_QMARK_.call(null,G__46787,G__46788));
})())){
return null;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
if((cljs.core.truth_(allow)?cljs.core.contains_QMARK_(allow,check_sym__$1):true)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
});
sci.impl.analyzer.lookup_STAR_ = (function sci$impl$analyzer$lookup_STAR_(p__46789,sym,call_QMARK_){
var map__46791 = p__46789;
var map__46791__$1 = (((((!((map__46791 == null))))?(((((map__46791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46791):map__46791);
var ctx = map__46791__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46791__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var sym_ns = (function (){var G__46793 = cljs.core.namespace(sym);
if((G__46793 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__46793);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__46794 = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__46794) : cnn.call(null,G__46794));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__4185__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),sym_ns], null));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym_ns;
}
})():null);
var or__4185__auto__ = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = sym_ns__$1;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))));
} else {
return and__4174__auto__;
}
})())){
var or__4185__auto____$1 = (function (){var G__46796 = env__$1;
var G__46796__$1 = (((G__46796 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__46796));
var G__46796__$2 = (((G__46796__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__46796__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__46796__$2 == null)){
return null;
} else {
return cljs.core.find(G__46796__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var temp__5735__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.macros,sym_name):null);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(sym_ns__$1)){
var or__4185__auto____$1 = (function (){var G__46798 = env__$1;
var G__46798__$1 = (((G__46798 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__46798));
var G__46798__$2 = (((G__46798__$1 == null))?null:(sym_ns__$1.cljs$core$IFn$_invoke$arity$1 ? sym_ns__$1.cljs$core$IFn$_invoke$arity$1(G__46798__$1) : sym_ns__$1.call(null,G__46798__$1)));
if((G__46798__$2 == null)){
return null;
} else {
return cljs.core.find(G__46798__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var temp__5735__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5735__auto__)){
var clazz = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"static-access","static-access",-1860919441)], null))], null);
} else {
return null;
}
}
} else {
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null)),sym_name)){
return null;
} else {
var or__4185__auto____$1 = (function (){var G__46800 = env__$1;
var G__46800__$1 = (((G__46800 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__46800));
var G__46800__$2 = (((G__46800__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__46800__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__46800__$2 == null)){
return null;
} else {
return cljs.core.find(G__46800__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var temp__5735__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
}
}
}

}
}
}
});
sci.impl.analyzer.tag = (function sci$impl$analyzer$tag(_ctx,expr){
var temp__5735__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
});
sci.impl.analyzer.lookup = (function sci$impl$analyzer$lookup(p__46813,sym,call_QMARK_){
var map__46818 = p__46813;
var map__46818__$1 = (((((!((map__46818 == null))))?(((((map__46818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46818):map__46818);
var ctx = map__46818__$1;
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46818__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var vec__46823 = (function (){var or__4185__auto__ = (function (){var temp__5735__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__46832 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46832,(1),null);
var t = sci.impl.analyzer.tag(ctx,v);
var v__$1 = sci.impl.utils.mark_resolve_sym(k);
var v__$2 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v__$1,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):v__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$2], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var temp__5735__auto__ = sci.impl.analyzer.lookup_STAR_(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__46844 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844,(1),null);
var kv = vec__46844;
sci.impl.analyzer.check_permission_BANG_(ctx,k,sym);

return kv;
} else {
return null;
}
}
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46823,(1),null);
var kv = vec__46823;
var temp__5733__auto__ = ((cljs.core.not(new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385).cljs$core$IFn$_invoke$arity$1(ctx)))?cljs.core.meta(k):false);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","deref!","sci.impl/deref!",599653178).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"deref!","deref!",153059469)], null))], null);
} else {
return kv;
}
} else {
return kv;
}
});
sci.impl.analyzer.resolve_symbol = (function sci$impl$analyzer$resolve_symbol(var_args){
var G__46857 = arguments.length;
switch (G__46857) {
case 2:
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,sym,false);
}));

(sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
var sym__$1 = sym;
var res = cljs.core.second((function (){var or__4185__auto__ = sci.impl.analyzer.lookup(ctx,sym__$1,call_QMARK_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var n = cljs.core.name(sym__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null)], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null)], null);
} else {
if(clojure.string.starts_with_QMARK_(n,"'")){
var v = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''),sym__$1);

}
}
}
}
})());
return res;
}));

(sci.impl.analyzer.resolve_symbol.cljs$lang$maxFixedArity = 3);

sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46858_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__46858_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__46858_SHARP_));
}),children);
});
sci.impl.analyzer.maybe_destructured = (function sci$impl$analyzer$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__47219 = cljs.core.next(params__$1);
var G__47220 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__47221 = lets;
params__$1 = G__47219;
new_params = G__47220;
lets = G__47221;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__47222 = cljs.core.next(params__$1);
var G__47223 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__47224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__47222;
new_params = G__47223;
lets = G__47224;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new_params,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__46874,fn_name,p__46875,macro_QMARK_){
var map__46876 = p__46874;
var map__46876__$1 = (((((!((map__46876 == null))))?(((((map__46876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46876):map__46876);
var ctx = map__46876__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46876__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__46877 = p__46875;
var seq__46878 = cljs.core.seq(vec__46877);
var first__46879 = cljs.core.first(seq__46878);
var seq__46878__$1 = cljs.core.next(seq__46878);
var binding_vector = first__46879;
var body_exprs = seq__46878__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__46861_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__46861_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__46862_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__46862_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4185__auto__ = conds;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__46881 = sci.impl.analyzer.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__46881__$1 = (((((!((map__46881 == null))))?(((((map__46881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46881):map__46881);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46881__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46881__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.analyze_children(ctx__$1,body);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648),body__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738),params,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100),var_arg_name,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name], null);
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__46890,macro_QMARK_){
var vec__46894 = p__46890;
var seq__46895 = cljs.core.seq(vec__46894);
var first__46896 = cljs.core.first(seq__46895);
var seq__46895__$1 = cljs.core.next(seq__46895);
var _fn = first__46896;
var first__46896__$1 = cljs.core.first(seq__46895__$1);
var seq__46895__$2 = cljs.core.next(seq__46895__$1);
var name_QMARK_ = first__46896__$1;
var body = seq__46895__$2;
var fn_expr = vec__46894;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46899,body__$2){
var map__46900 = p__46899;
var map__46900__$1 = (((((!((map__46900 == null))))?(((((map__46900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46900):map__46900);
var acc = map__46900__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46900__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46900__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,fn_name,body__$2,macro_QMARK_);
var body__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword("sci.impl","arglist","sci.impl/arglist",2082561957),arglist);
var var_arg_name = new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100).cljs$core$IFn$_invoke$arity$1(body__$4);
var fixed_arity = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_arg_name;
if(cljs.core.truth_(and__4174__auto__)){
return min_varargs;
} else {
return and__4174__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_(((cljs.core.not(var_arg_name))?(function (){var and__4174__auto__ = min_varargs;
if(cljs.core.truth_(and__4174__auto__)){
return (fixed_arity > min_varargs);
} else {
return and__4174__auto__;
}
})():false))){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__4273__auto__ = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var y__4274__auto__ = max_fixed;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$4),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,destructured_let_bindings,exprs){
var vec__46906 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46909,p__46910){
var vec__46911 = p__46909;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46911,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46911,(1),null);
var vec__46914 = p__46910;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46914,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46914,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46906,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46906,(1),null);
return sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,new_let_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.analyzer.analyze_children(ctx__$1,exprs)], 0)))));
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__46918){
var vec__46926 = p__46918;
var seq__46927 = cljs.core.seq(vec__46926);
var first__46928 = cljs.core.first(seq__46927);
var seq__46927__$1 = cljs.core.next(seq__46927);
var _let = first__46928;
var first__46928__$1 = cljs.core.first(seq__46927__$1);
var seq__46927__$2 = cljs.core.next(seq__46927__$1);
var let_bindings = first__46928__$1;
var exprs = seq__46927__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
/**
 * The -> macro from clojure.core.
 */
sci.impl.analyzer.expand__GT_ = (function sci$impl$analyzer$expand__GT_(ctx,p__46930){
var vec__46931 = p__46930;
var seq__46932 = cljs.core.seq(vec__46931);
var first__46933 = cljs.core.first(seq__46932);
var seq__46932__$1 = cljs.core.next(seq__46932);
var x = first__46933;
var forms = seq__46932__$1;
var expanded = (function (){var x__$1 = x;
var forms__$1 = forms;
while(true){
if(forms__$1){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(form),(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)),cljs.core.next(form)),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__47247 = threaded;
var G__47248 = cljs.core.next(forms__$1);
x__$1 = G__47247;
forms__$1 = G__47248;
continue;
} else {
return x__$1;
}
break;
}
})();
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expanded) : sci.impl.analyzer.analyze.call(null,ctx,expanded));
});
/**
 * The ->> macro from clojure.core.
 */
sci.impl.analyzer.expand_as__GT_ = (function sci$impl$analyzer$expand_as__GT_(ctx,p__46941){
var vec__46943 = p__46941;
var seq__46944 = cljs.core.seq(vec__46943);
var first__46945 = cljs.core.first(seq__46944);
var seq__46944__$1 = cljs.core.next(seq__46944);
var _as = first__46945;
var first__46945__$1 = cljs.core.first(seq__46944__$1);
var seq__46944__$2 = cljs.core.next(seq__46944__$1);
var expr = first__46945__$1;
var first__46945__$2 = cljs.core.first(seq__46944__$2);
var seq__46944__$3 = cljs.core.next(seq__46944__$2);
var name = first__46945__$2;
var forms = seq__46944__$3;
var vec__46946 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms)),null,(1),null)))));
var seq__46947 = cljs.core.seq(vec__46946);
var first__46948 = cljs.core.first(seq__46947);
var seq__46947__$1 = cljs.core.next(seq__46947);
var let_bindings = first__46948;
var body = seq__46947__$1;
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings,body);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,p__46952){
var vec__46953 = p__46952;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46953,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46953,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46953,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46953,(3),null);
var expr = vec__46953;
var G__46956_47255 = ctx;
var G__46957_47256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__46956_47255,G__46957_47256) : sci.impl.analyzer.expand_declare.call(null,G__46956_47255,G__46957_47256));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Var name should be simple symbol.",expr);
}

var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(expr),(2)))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m));
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
var var_name__$1 = cljs.core.with_meta(var_name,m__$3);
var G__46964_47257 = ctx;
var G__46965_47258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name__$1], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__46964_47257,G__46965_47258) : sci.impl.analyzer.expand_declare.call(null,G__46964_47257,G__46965_47258));

return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,var_name__$1,(new cljs.core.List(null,init__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__46966){
var vec__46967 = p__46966;
var seq__46968 = cljs.core.seq(vec__46967);
var first__46969 = cljs.core.first(seq__46968);
var seq__46968__$1 = cljs.core.next(seq__46968);
var op = first__46969;
var first__46969__$1 = cljs.core.first(seq__46968__$1);
var seq__46968__$2 = cljs.core.next(seq__46968__$1);
var fn_name = first__46969__$1;
var body = seq__46968__$2;
var expr = vec__46967;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Var name should be simple symbol.",expr);
}

var G__46972_47259 = ctx;
var G__46973_47260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__46972_47259,G__46973_47260) : sci.impl.analyzer.expand_declare.call(null,G__46972_47259,G__46973_47260));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__46975 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46975,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46975,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5735__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5735__auto__)){
var ds = temp__5735__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5735__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map__$1 = (function (){var G__46991 = ctx;
var G__46992 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(expr),meta_map], 0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__46991,G__46992) : sci.impl.analyzer.analyze.call(null,G__46991,G__46992));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__46993 = meta_map__$2;
var G__46993__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46993,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__46993);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46993__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__46993__$1;
}
})());
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name__$1], 0));
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,fn_name__$1,(new cljs.core.List(null,f__$1,null,(1),null)),(2),null)),(3),null)));
});
/**
 * The comment macro from clojure.core.
 */
sci.impl.analyzer.expand_comment = (function sci$impl$analyzer$expand_comment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47273 = arguments.length;
var i__4790__auto___47274 = (0);
while(true){
if((i__4790__auto___47274 < len__4789__auto___47273)){
args__4795__auto__.push((arguments[i__4790__auto___47274]));

var G__47275 = (i__4790__auto___47274 + (1));
i__4790__auto___47274 = G__47275;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.analyzer.expand_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.analyzer.expand_comment.cljs$core$IFn$_invoke$arity$variadic = (function (_ctx,_body){
return null;
}));

(sci.impl.analyzer.expand_comment.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.analyzer.expand_comment.cljs$lang$applyTo = (function (seq46999){
var G__47000 = cljs.core.first(seq46999);
var seq46999__$1 = cljs.core.next(seq46999);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47000,seq46999__$1);
}));

sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__47009 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47009,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47009,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),(new cljs.core.List(null,(function (){var G__47028 = ctx;
var G__47029 = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__47028,G__47029) : sci.impl.analyzer.analyze.call(null,G__47028,G__47029));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.expand_if = (function sci$impl$analyzer$expand_if(ctx,p__47033){
var vec__47034 = p__47033;
var seq__47035 = cljs.core.seq(vec__47034);
var first__47036 = cljs.core.first(seq__47035);
var seq__47035__$1 = cljs.core.next(seq__47035);
var _if = first__47036;
var exprs = seq__47035__$1;
var expr = vec__47034;
var G__47040 = cljs.core.count(exprs);
switch (G__47040) {
case (0):
case (1):
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Too few arguments to if",expr);

break;
case (2):
case (3):
return sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),sci.impl.analyzer.analyze_children(ctx,exprs)))));

break;
default:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Too many arguments to if",expr);

}
});
sci.impl.analyzer.expand_case = (function sci$impl$analyzer$expand_case(ctx,expr){
var v = (function (){var G__47044 = ctx;
var G__47045 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__47044,G__47045) : sci.impl.analyzer.analyze.call(null,G__47044,G__47045));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),(function (){var G__47046 = ctx;
var G__47047 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__47046,G__47047) : sci.impl.analyzer.analyze.call(null,G__47046,G__47047));
})()], null):null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v__$1){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__47054 = cases__$1;
var seq__47055 = cljs.core.seq(vec__47054);
var first__47056 = cljs.core.first(seq__47055);
var seq__47055__$1 = cljs.core.next(seq__47055);
var k = first__47056;
var first__47056__$1 = cljs.core.first(seq__47055__$1);
var seq__47055__$2 = cljs.core.next(seq__47055__$1);
var v__$1 = first__47056__$1;
var cases__$2 = seq__47055__$2;
if(cljs.core.list_QMARK_(k)){
var G__47298 = cases__$2;
var G__47299 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__47054,seq__47055,first__47056,seq__47055__$1,k,first__47056__$1,seq__47055__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__47054,seq__47055,first__47056,seq__47055__$1,k,first__47056__$1,seq__47055__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__47298;
ret_map = G__47299;
continue;
} else {
var G__47300 = cases__$2;
var G__47301 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__47300;
ret_map = G__47301;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var ret = sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"case-map","case-map",955082964),case_map,new cljs.core.Keyword(null,"case-val","case-val",880926521),v,new cljs.core.Keyword(null,"case-default","case-default",1140470708),default$], null),(new cljs.core.List(null,default$,null,(1),null)),(2),null)),(3),null)));
return sci.impl.utils.mark_eval_call(ret);
});
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__47057){
var vec__47058 = p__47057;
var seq__47059 = cljs.core.seq(vec__47058);
var first__47060 = cljs.core.first(seq__47059);
var seq__47059__$1 = cljs.core.next(seq__47059);
var _try = first__47060;
var body = seq__47059__$1;
var vec__47061 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr))))){
var G__47302 = exprs__$1;
var G__47303 = body_exprs;
var G__47304 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__47305 = finally_expr;
exprs = G__47302;
body_exprs = G__47303;
catch_exprs = G__47304;
finally_expr = G__47305;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__47306 = exprs__$1;
var G__47307 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__47308 = catch_exprs;
var G__47309 = finally_expr;
exprs = G__47306;
body_exprs = G__47307;
catch_exprs = G__47308;
finally_expr = G__47309;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47061,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47061,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47061,(2),null);
var body__$1 = (function (){var G__47068 = ctx;
var G__47069 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__47068,G__47069) : sci.impl.analyzer.analyze.call(null,G__47068,G__47069));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__47075 = c;
var seq__47076 = cljs.core.seq(vec__47075);
var first__47077 = cljs.core.first(seq__47076);
var seq__47076__$1 = cljs.core.next(seq__47076);
var _ = first__47077;
var first__47077__$1 = cljs.core.first(seq__47076__$1);
var seq__47076__$2 = cljs.core.next(seq__47076__$1);
var ex = first__47077__$1;
var first__47077__$2 = cljs.core.first(seq__47076__$2);
var seq__47076__$3 = cljs.core.next(seq__47076__$2);
var binding = first__47077__$2;
var body__$2 = seq__47076__$3;
var temp__5733__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5733__auto__)){
var clazz = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__47079 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__47080 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__47079,G__47080) : sci.impl.analyzer.analyze.call(null,G__47079,G__47080));
})()], null);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__47081 = ctx;
var G__47082 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__47081,G__47082) : sci.impl.analyzer.analyze.call(null,G__47081,G__47082));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617),catches__$1,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"try","try",1380742522)], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__47085){
var vec__47086 = p__47085;
var seq__47087 = cljs.core.seq(vec__47086);
var first__47088 = cljs.core.first(seq__47087);
var seq__47087__$1 = cljs.core.next(seq__47087);
var _declare = first__47088;
var names = seq__47087__$1;
var _expr = vec__47086;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),(function (current_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
if(cljs.core.contains_QMARK_(acc,name)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__47089 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
G__47089.sci$impl$vars$IVar$unbind$arity$1(null);

return G__47089;
})());
}
}),current_ns,names);
}));
}));

return null;
});
sci.impl.analyzer.do_import = (function sci$impl$analyzer$do_import(p__47094,p__47095){
var map__47096 = p__47094;
var map__47096__$1 = (((((!((map__47096 == null))))?(((((map__47096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47096):map__47096);
var ctx = map__47096__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47096__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var vec__47097 = p__47095;
var seq__47098 = cljs.core.seq(vec__47097);
var first__47099 = cljs.core.first(seq__47098);
var seq__47098__$1 = cljs.core.next(seq__47098);
var _ = first__47099;
var import_symbols_or_lists = seq__47098__$1;
var expr = vec__47097;
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47092_SHARP_){
if(((cljs.core.seq_QMARK_(p1__47092_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__47092_SHARP_))))){
return cljs.core.second(p1__47092_SHARP_);
} else {
return p1__47092_SHARP_;
}
}),import_symbols_or_lists);
var seq__47101 = cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,map__47096,map__47096__$1,ctx,env,vec__47097,seq__47098,first__47099,seq__47098__$1,_,import_symbols_or_lists,expr){
return (function (v,spec){
if((spec instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.name(spec));
} else {
var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47093_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47093_SHARP_)].join('');
}),cs));
}
});})(specs,map__47096,map__47096__$1,ctx,env,vec__47097,seq__47098,first__47099,seq__47098__$1,_,import_symbols_or_lists,expr))
,cljs.core.PersistentVector.EMPTY,specs));
var chunk__47102 = null;
var count__47103 = (0);
var i__47104 = (0);
while(true){
if((i__47104 < count__47103)){
var spec = chunk__47102.cljs$core$IIndexed$_nth$arity$2(null,i__47104);
var fq_class_name_47314 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_47314))){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_47314)].join(''),expr);
}

var last_dot_47316 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(spec,".");
var class_name_47317 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(spec,(last_dot_47316 + (1)),cljs.core.count(spec));
var cnn_47318 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_47318,new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name_47317)], null),fq_class_name_47314);


var G__47320 = seq__47101;
var G__47321 = chunk__47102;
var G__47322 = count__47103;
var G__47323 = (i__47104 + (1));
seq__47101 = G__47320;
chunk__47102 = G__47321;
count__47103 = G__47322;
i__47104 = G__47323;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47101);
if(temp__5735__auto__){
var seq__47101__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47101__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47101__$1);
var G__47324 = cljs.core.chunk_rest(seq__47101__$1);
var G__47325 = c__4609__auto__;
var G__47326 = cljs.core.count(c__4609__auto__);
var G__47327 = (0);
seq__47101 = G__47324;
chunk__47102 = G__47325;
count__47103 = G__47326;
i__47104 = G__47327;
continue;
} else {
var spec = cljs.core.first(seq__47101__$1);
var fq_class_name_47328 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_47328))){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_47328)].join(''),expr);
}

var last_dot_47333 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(spec,".");
var class_name_47334 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(spec,(last_dot_47333 + (1)),cljs.core.count(spec));
var cnn_47335 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_47335,new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name_47334)], null),fq_class_name_47328);


var G__47341 = cljs.core.next(seq__47101__$1);
var G__47342 = null;
var G__47343 = (0);
var G__47344 = (0);
seq__47101 = G__47341;
chunk__47102 = G__47342;
count__47103 = G__47343;
i__47104 = G__47344;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__47119){
var vec__47120 = p__47119;
var seq__47121 = cljs.core.seq(vec__47120);
var first__47122 = cljs.core.first(seq__47121);
var seq__47121__$1 = cljs.core.next(seq__47121);
var _dot = first__47122;
var first__47122__$1 = cljs.core.first(seq__47121__$1);
var seq__47121__$2 = cljs.core.next(seq__47121__$1);
var instance_expr = first__47122__$1;
var first__47122__$2 = cljs.core.first(seq__47121__$2);
var seq__47121__$3 = cljs.core.next(seq__47121__$2);
var method_expr = first__47122__$2;
var args = seq__47121__$3;
var _expr = vec__47120;
var vec__47123 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__47124 = cljs.core.seq(vec__47123);
var first__47125 = cljs.core.first(seq__47124);
var seq__47124__$1 = cljs.core.next(seq__47124);
var method_expr__$1 = first__47125;
var args__$1 = seq__47124__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5733__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto__)){
var t = temp__5733__auto__;
var clazz = (function (){var or__4185__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_expr__$2 = cljs.core.name(method_expr__$1);
var args__$2 = sci.impl.analyzer.analyze_children(ctx,args__$1);
var res = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,instance_expr__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,method_expr__$2,null,(1),null)),(new cljs.core.List(null,args__$2,null,(1),null))], 0))));
return sci.impl.utils.mark_eval_call(res);
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__47140){
var vec__47141 = p__47140;
var seq__47142 = cljs.core.seq(vec__47141);
var first__47143 = cljs.core.first(seq__47142);
var seq__47142__$1 = cljs.core.next(seq__47142);
var method_name = first__47143;
var first__47143__$1 = cljs.core.first(seq__47142__$1);
var seq__47142__$2 = cljs.core.next(seq__47142__$1);
var obj = first__47143__$1;
var args = seq__47142__$2;
var expr = vec__47141;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__47150){
var vec__47153 = p__47150;
var seq__47154 = cljs.core.seq(vec__47153);
var first__47155 = cljs.core.first(seq__47154);
var seq__47154__$1 = cljs.core.next(seq__47154);
var _new = first__47155;
var first__47155__$1 = cljs.core.first(seq__47154__$1);
var seq__47154__$2 = cljs.core.next(seq__47154__$1);
var class_sym = first__47155__$1;
var args = seq__47154__$2;
var temp__5733__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5733__auto__)){
var map__47156 = temp__5733__auto__;
var map__47156__$1 = (((((!((map__47156 == null))))?(((((map__47156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47156):map__47156);
var _opts = map__47156__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47156__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(new cljs.core.List(null,constructor$,(new cljs.core.List(null,args__$1,null,(1),null)),(2),null)),(3),null)));
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__47162){
var vec__47163 = p__47162;
var seq__47164 = cljs.core.seq(vec__47163);
var first__47165 = cljs.core.first(seq__47164);
var seq__47164__$1 = cljs.core.next(seq__47164);
var constructor_sym = first__47165;
var args = seq__47164__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__47168){
var vec__47169 = p__47168;
var seq__47170 = cljs.core.seq(vec__47169);
var first__47171 = cljs.core.first(seq__47170);
var seq__47170__$1 = cljs.core.next(seq__47170);
var _ns = first__47171;
var first__47171__$1 = cljs.core.first(seq__47170__$1);
var seq__47170__$2 = cljs.core.next(seq__47170__$1);
var ns_name = first__47171__$1;
var exprs = seq__47170__$2;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__47174 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(1),null);
var vec__47177 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47177,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47177,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__47184 = cljs.core.first(exprs__$3);
var seq__47185 = cljs.core.seq(vec__47184);
var first__47186 = cljs.core.first(seq__47185);
var seq__47185__$1 = cljs.core.next(seq__47185);
var k = first__47186;
var args = seq__47185__$1;
var G__47187 = k;
var G__47187__$1 = (((G__47187 instanceof cljs.core.Keyword))?G__47187.fqn:null);
switch (G__47187__$1) {
case "require":
case "use":
var G__47365 = cljs.core.next(exprs__$3);
var G__47366 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args)));
exprs__$3 = G__47365;
ret = G__47366;
continue;

break;
case "import":
sci.impl.analyzer.do_import(ctx,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"import","import",241030818,null),null,(1),null)),args))));

var G__47367 = cljs.core.next(exprs__$3);
var G__47368 = ret;
exprs__$3 = G__47367;
ret = G__47368;
continue;

break;
case "refer-clojure":
var G__47370 = cljs.core.next(exprs__$3);
var G__47371 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"refer","refer",676235974,null),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args)));
exprs__$3 = G__47370;
ret = G__47371;
continue;

break;
case "gen-class":
var G__47372 = cljs.core.next(exprs__$3);
var G__47373 = ret;
exprs__$3 = G__47372;
ret = G__47373;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47187__$1)].join('')));

}
} else {
return sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),ret));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__47188){
var vec__47189 = p__47188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47189,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47189,(1),null);
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385),true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__47192){
var vec__47194 = p__47192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(2),null);
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.getVal(obj__$1);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,obj__$2,(new cljs.core.List(null,v__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.macro_QMARK_ = (function sci$impl$analyzer$macro_QMARK_(f){
var temp__5735__auto__ = cljs.core.meta(f);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
var or__4185__auto__ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
}
} else {
return null;
}
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr){
var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_(special_sym)?sci.impl.analyzer.check_permission_BANG_(ctx,special_sym,f):null);
var f__$1 = (function (){var or__4185__auto__ = special_sym;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f__$2 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f__$1))?(function (){var or__4185__auto__ = sci.impl.vars.isMacro(f__$1);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("sci.impl","built-in","sci.impl/built-in",1011824843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
}
})():false))?cljs.core.deref(f__$1):f__$1);
if(cljs.core.truth_(((cljs.core.not(sci.impl.utils.eval_QMARK_(f__$2)))?(function (){var or__4185__auto__ = special_sym;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.analyzer.macros,f__$2);
}
})():false))){
var G__47197 = f__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__47197)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__47197)){
return sci.impl.analyzer.do_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__47197)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__47197)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__47197)){
return sci.impl.analyzer.expand_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__47197)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__47197)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"comment","comment",-2122229700,null),G__47197)){
return sci.impl.analyzer.expand_comment.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__47197)){
return sci.impl.utils.mark_eval_call(cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__47197)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),G__47197)){
var G__47198 = ctx;
var G__47199 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__47198,G__47199) : sci.impl.analyzer.analyze.call(null,G__47198,G__47199));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__47197)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__47197)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__47197)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__47197)){

return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__47197)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__47197)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__47197)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__47197)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__47197)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__47197)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__47197)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),G__47197)){
return sci.impl.analyzer.expand__GT_(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__47197)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"as->","as->",1430690540,null),G__47197)){
return sci.impl.analyzer.expand_as__GT_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__47197)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__47197)){
return sci.impl.analyzer.expand_try(ctx,expr);
} else {
return sci.impl.utils.mark_eval_call(cljs.core.cons(f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$2))){
var needs_ctx_QMARK_ = (function (){var G__47201 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__47202 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$2));
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__47201,G__47202) : sci.impl.utils.kw_identical_QMARK_.call(null,G__47201,G__47202));
})();
var v = (cljs.core.truth_(needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v)));
return expanded;
} else {
return sci.impl.utils.mark_eval_call(cljs.core.cons(f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
}
}catch (e47200){if((e47200 instanceof Error)){
var e = e47200;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e47200;

}
}}
} else {
var ret = sci.impl.utils.mark_eval_call(sci.impl.analyzer.analyze_children(ctx,expr));
return ret;
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(ctx,expr){
var ret = ((sci.impl.utils.constant_QMARK_(expr))?expr:(((expr instanceof cljs.core.Symbol))?(function (){var v = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
return cljs.core.deref(v);
} else {
return sci.impl.types.__GT_EvalVar(v);
}
} else {
return sci.impl.utils.merge_meta(v,cljs.core.meta(expr));

}
}
})():sci.impl.utils.merge_meta(((cljs.core.map_QMARK_(expr))?sci.impl.utils.mark_eval(cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,cljs.core.keys(expr)),sci.impl.analyzer.analyze_children(ctx,cljs.core.vals(expr)))):((((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr))))?sci.impl.utils.mark_eval(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),sci.impl.analyzer.analyze_children(ctx,expr))):((((cljs.core.seq_QMARK_(expr)) && (cljs.core.seq(expr))))?sci.impl.analyzer.analyze_call(ctx,expr):expr
))),cljs.core.select_keys(cljs.core.meta(expr),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)))
));
return ret;
});

//# sourceMappingURL=sci.impl.analyzer.js.map
