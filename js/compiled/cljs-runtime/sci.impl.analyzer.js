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
sci.impl.analyzer.check_permission_BANG_ = (function sci$impl$analyzer$check_permission_BANG_(p__55582,check_sym,sym){
var map__55583 = p__55582;
var map__55583__$1 = (((((!((map__55583 == null))))?(((((map__55583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55583):map__55583);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55583__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55583__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
if(cljs.core.truth_((function (){var G__55585 = new cljs.core.Keyword(null,"allow","allow",-1857325745);
var G__55586 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__55585,G__55586) : sci.impl.utils.kw_identical_QMARK_.call(null,G__55585,G__55586));
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
sci.impl.analyzer.lookup_STAR_ = (function sci$impl$analyzer$lookup_STAR_(p__55587,sym,call_QMARK_){
var map__55588 = p__55587;
var map__55588__$1 = (((((!((map__55588 == null))))?(((((map__55588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55588):map__55588);
var ctx = map__55588__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55588__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var sym_ns = (function (){var G__55590 = cljs.core.namespace(sym);
if((G__55590 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__55590);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__55591 = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__55591) : cnn.call(null,G__55591));
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
var or__4185__auto____$1 = (function (){var G__55593 = env__$1;
var G__55593__$1 = (((G__55593 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__55593));
var G__55593__$2 = (((G__55593__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__55593__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__55593__$2 == null)){
return null;
} else {
return cljs.core.find(G__55593__$2,sym_name);
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
var or__4185__auto____$1 = (function (){var G__55595 = env__$1;
var G__55595__$1 = (((G__55595 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__55595));
var G__55595__$2 = (((G__55595__$1 == null))?null:(sym_ns__$1.cljs$core$IFn$_invoke$arity$1 ? sym_ns__$1.cljs$core$IFn$_invoke$arity$1(G__55595__$1) : sym_ns__$1.call(null,G__55595__$1)));
if((G__55595__$2 == null)){
return null;
} else {
return cljs.core.find(G__55595__$2,sym_name);
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
var or__4185__auto____$1 = (function (){var G__55597 = env__$1;
var G__55597__$1 = (((G__55597 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__55597));
var G__55597__$2 = (((G__55597__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__55597__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__55597__$2 == null)){
return null;
} else {
return cljs.core.find(G__55597__$2,sym_name);
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
sci.impl.analyzer.lookup = (function sci$impl$analyzer$lookup(p__55601,sym,call_QMARK_){
var map__55602 = p__55601;
var map__55602__$1 = (((((!((map__55602 == null))))?(((((map__55602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55602):map__55602);
var ctx = map__55602__$1;
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55602__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var vec__55604 = (function (){var or__4185__auto__ = (function (){var temp__5735__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__55618 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55618,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55618,(1),null);
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
var vec__55621 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55621,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55621,(1),null);
var kv = vec__55621;
sci.impl.analyzer.check_permission_BANG_(ctx,k,sym);

return kv;
} else {
return null;
}
}
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55604,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55604,(1),null);
var kv = vec__55604;
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
var G__55629 = arguments.length;
switch (G__55629) {
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55633_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__55633_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__55633_SHARP_));
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
var G__55895 = cljs.core.next(params__$1);
var G__55896 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__55897 = lets;
params__$1 = G__55895;
new_params = G__55896;
lets = G__55897;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__55898 = cljs.core.next(params__$1);
var G__55899 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__55900 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__55898;
new_params = G__55899;
lets = G__55900;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new_params,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__55642,fn_name,p__55643,macro_QMARK_){
var map__55645 = p__55642;
var map__55645__$1 = (((((!((map__55645 == null))))?(((((map__55645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55645):map__55645);
var ctx = map__55645__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55645__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__55646 = p__55643;
var seq__55647 = cljs.core.seq(vec__55646);
var first__55648 = cljs.core.first(seq__55647);
var seq__55647__$1 = cljs.core.next(seq__55647);
var binding_vector = first__55648;
var body_exprs = seq__55647__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__55634_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__55634_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__55635_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__55635_SHARP_);
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
var map__55650 = sci.impl.analyzer.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__55650__$1 = (((((!((map__55650 == null))))?(((((map__55650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55650):map__55650);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55650__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55650__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.analyze_children(ctx__$1,body);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648),body__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738),params,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100),var_arg_name,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name], null);
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__55658,macro_QMARK_){
var vec__55659 = p__55658;
var seq__55660 = cljs.core.seq(vec__55659);
var first__55661 = cljs.core.first(seq__55660);
var seq__55660__$1 = cljs.core.next(seq__55660);
var _fn = first__55661;
var first__55661__$1 = cljs.core.first(seq__55660__$1);
var seq__55660__$2 = cljs.core.next(seq__55660__$1);
var name_QMARK_ = first__55661__$1;
var body = seq__55660__$2;
var fn_expr = vec__55659;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__55662,body__$2){
var map__55663 = p__55662;
var map__55663__$1 = (((((!((map__55663 == null))))?(((((map__55663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55663):map__55663);
var acc = map__55663__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55663__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55663__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
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
var vec__55665 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__55668,p__55669){
var vec__55670 = p__55668;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55670,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55670,(1),null);
var vec__55673 = p__55669;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55673,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55673,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55665,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55665,(1),null);
return sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,new_let_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.analyzer.analyze_children(ctx__$1,exprs)], 0)))));
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__55676){
var vec__55677 = p__55676;
var seq__55678 = cljs.core.seq(vec__55677);
var first__55679 = cljs.core.first(seq__55678);
var seq__55678__$1 = cljs.core.next(seq__55678);
var _let = first__55679;
var first__55679__$1 = cljs.core.first(seq__55678__$1);
var seq__55678__$2 = cljs.core.next(seq__55678__$1);
var let_bindings = first__55679__$1;
var exprs = seq__55678__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
/**
 * The -> macro from clojure.core.
 */
sci.impl.analyzer.expand__GT_ = (function sci$impl$analyzer$expand__GT_(ctx,p__55680){
var vec__55681 = p__55680;
var seq__55682 = cljs.core.seq(vec__55681);
var first__55683 = cljs.core.first(seq__55682);
var seq__55682__$1 = cljs.core.next(seq__55682);
var x = first__55683;
var forms = seq__55682__$1;
var expanded = (function (){var x__$1 = x;
var forms__$1 = forms;
while(true){
if(forms__$1){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(form),(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)),cljs.core.next(form)),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__55902 = threaded;
var G__55903 = cljs.core.next(forms__$1);
x__$1 = G__55902;
forms__$1 = G__55903;
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
sci.impl.analyzer.expand_as__GT_ = (function sci$impl$analyzer$expand_as__GT_(ctx,p__55684){
var vec__55685 = p__55684;
var seq__55686 = cljs.core.seq(vec__55685);
var first__55687 = cljs.core.first(seq__55686);
var seq__55686__$1 = cljs.core.next(seq__55686);
var _as = first__55687;
var first__55687__$1 = cljs.core.first(seq__55686__$1);
var seq__55686__$2 = cljs.core.next(seq__55686__$1);
var expr = first__55687__$1;
var first__55687__$2 = cljs.core.first(seq__55686__$2);
var seq__55686__$3 = cljs.core.next(seq__55686__$2);
var name = first__55687__$2;
var forms = seq__55686__$3;
var vec__55688 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms)),null,(1),null)))));
var seq__55689 = cljs.core.seq(vec__55688);
var first__55690 = cljs.core.first(seq__55689);
var seq__55689__$1 = cljs.core.next(seq__55689);
var let_bindings = first__55690;
var body = seq__55689__$1;
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings,body);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,p__55691){
var vec__55692 = p__55691;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55692,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55692,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55692,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55692,(3),null);
var expr = vec__55692;
var G__55695_55906 = ctx;
var G__55696_55907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__55695_55906,G__55696_55907) : sci.impl.analyzer.expand_declare.call(null,G__55695_55906,G__55696_55907));

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
var G__55697_55918 = ctx;
var G__55698_55919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name__$1], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__55697_55918,G__55698_55919) : sci.impl.analyzer.expand_declare.call(null,G__55697_55918,G__55698_55919));

return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,var_name__$1,(new cljs.core.List(null,init__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__55702){
var vec__55703 = p__55702;
var seq__55704 = cljs.core.seq(vec__55703);
var first__55705 = cljs.core.first(seq__55704);
var seq__55704__$1 = cljs.core.next(seq__55704);
var op = first__55705;
var first__55705__$1 = cljs.core.first(seq__55704__$1);
var seq__55704__$2 = cljs.core.next(seq__55704__$1);
var fn_name = first__55705__$1;
var body = seq__55704__$2;
var expr = vec__55703;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Var name should be simple symbol.",expr);
}

var G__55706_55920 = ctx;
var G__55707_55921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__55706_55920,G__55707_55921) : sci.impl.analyzer.expand_declare.call(null,G__55706_55920,G__55707_55921));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__55708 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55708,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55708,(1),null);
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
var meta_map__$1 = (function (){var G__55714 = ctx;
var G__55715 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(expr),meta_map], 0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55714,G__55715) : sci.impl.analyzer.analyze.call(null,G__55714,G__55715));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__55719 = meta_map__$2;
var G__55719__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55719,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__55719);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55719__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__55719__$1;
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
var len__4789__auto___55922 = arguments.length;
var i__4790__auto___55923 = (0);
while(true){
if((i__4790__auto___55923 < len__4789__auto___55922)){
args__4795__auto__.push((arguments[i__4790__auto___55923]));

var G__55924 = (i__4790__auto___55923 + (1));
i__4790__auto___55923 = G__55924;
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
(sci.impl.analyzer.expand_comment.cljs$lang$applyTo = (function (seq55720){
var G__55721 = cljs.core.first(seq55720);
var seq55720__$1 = cljs.core.next(seq55720);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55721,seq55720__$1);
}));

sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__55722 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55722,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55722,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),(new cljs.core.List(null,(function (){var G__55725 = ctx;
var G__55726 = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55725,G__55726) : sci.impl.analyzer.analyze.call(null,G__55725,G__55726));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.expand_if = (function sci$impl$analyzer$expand_if(ctx,p__55733){
var vec__55734 = p__55733;
var seq__55735 = cljs.core.seq(vec__55734);
var first__55736 = cljs.core.first(seq__55735);
var seq__55735__$1 = cljs.core.next(seq__55735);
var _if = first__55736;
var exprs = seq__55735__$1;
var expr = vec__55734;
var G__55737 = cljs.core.count(exprs);
switch (G__55737) {
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
var v = (function (){var G__55738 = ctx;
var G__55739 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55738,G__55739) : sci.impl.analyzer.analyze.call(null,G__55738,G__55739));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),(function (){var G__55740 = ctx;
var G__55741 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55740,G__55741) : sci.impl.analyzer.analyze.call(null,G__55740,G__55741));
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
var vec__55745 = cases__$1;
var seq__55746 = cljs.core.seq(vec__55745);
var first__55747 = cljs.core.first(seq__55746);
var seq__55746__$1 = cljs.core.next(seq__55746);
var k = first__55747;
var first__55747__$1 = cljs.core.first(seq__55746__$1);
var seq__55746__$2 = cljs.core.next(seq__55746__$1);
var v__$1 = first__55747__$1;
var cases__$2 = seq__55746__$2;
if(cljs.core.list_QMARK_(k)){
var G__55931 = cases__$2;
var G__55932 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__55745,seq__55746,first__55747,seq__55746__$1,k,first__55747__$1,seq__55746__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__55745,seq__55746,first__55747,seq__55746__$1,k,first__55747__$1,seq__55746__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__55931;
ret_map = G__55932;
continue;
} else {
var G__55933 = cases__$2;
var G__55934 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__55933;
ret_map = G__55934;
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
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__55748){
var vec__55749 = p__55748;
var seq__55750 = cljs.core.seq(vec__55749);
var first__55751 = cljs.core.first(seq__55750);
var seq__55750__$1 = cljs.core.next(seq__55750);
var _try = first__55751;
var body = seq__55750__$1;
var vec__55752 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr))))){
var G__55938 = exprs__$1;
var G__55939 = body_exprs;
var G__55940 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__55941 = finally_expr;
exprs = G__55938;
body_exprs = G__55939;
catch_exprs = G__55940;
finally_expr = G__55941;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__55942 = exprs__$1;
var G__55943 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__55944 = catch_exprs;
var G__55945 = finally_expr;
exprs = G__55942;
body_exprs = G__55943;
catch_exprs = G__55944;
finally_expr = G__55945;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(2),null);
var body__$1 = (function (){var G__55755 = ctx;
var G__55756 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55755,G__55756) : sci.impl.analyzer.analyze.call(null,G__55755,G__55756));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__55757 = c;
var seq__55758 = cljs.core.seq(vec__55757);
var first__55759 = cljs.core.first(seq__55758);
var seq__55758__$1 = cljs.core.next(seq__55758);
var _ = first__55759;
var first__55759__$1 = cljs.core.first(seq__55758__$1);
var seq__55758__$2 = cljs.core.next(seq__55758__$1);
var ex = first__55759__$1;
var first__55759__$2 = cljs.core.first(seq__55758__$2);
var seq__55758__$3 = cljs.core.next(seq__55758__$2);
var binding = first__55759__$2;
var body__$2 = seq__55758__$3;
var temp__5733__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5733__auto__)){
var clazz = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__55760 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__55761 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55760,G__55761) : sci.impl.analyzer.analyze.call(null,G__55760,G__55761));
})()], null);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__55762 = ctx;
var G__55763 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55762,G__55763) : sci.impl.analyzer.analyze.call(null,G__55762,G__55763));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617),catches__$1,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"try","try",1380742522)], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__55764){
var vec__55765 = p__55764;
var seq__55766 = cljs.core.seq(vec__55765);
var first__55767 = cljs.core.first(seq__55766);
var seq__55766__$1 = cljs.core.next(seq__55766);
var _declare = first__55767;
var names = seq__55766__$1;
var _expr = vec__55765;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),(function (current_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
if(cljs.core.contains_QMARK_(acc,name)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__55770 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
G__55770.sci$impl$vars$IVar$unbind$arity$1(null);

return G__55770;
})());
}
}),current_ns,names);
}));
}));

return null;
});
sci.impl.analyzer.do_import = (function sci$impl$analyzer$do_import(p__55773,p__55774){
var map__55775 = p__55773;
var map__55775__$1 = (((((!((map__55775 == null))))?(((((map__55775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55775):map__55775);
var ctx = map__55775__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var vec__55776 = p__55774;
var seq__55777 = cljs.core.seq(vec__55776);
var first__55778 = cljs.core.first(seq__55777);
var seq__55777__$1 = cljs.core.next(seq__55777);
var _ = first__55778;
var import_symbols_or_lists = seq__55777__$1;
var expr = vec__55776;
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55771_SHARP_){
if(((cljs.core.seq_QMARK_(p1__55771_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__55771_SHARP_))))){
return cljs.core.second(p1__55771_SHARP_);
} else {
return p1__55771_SHARP_;
}
}),import_symbols_or_lists);
var seq__55782 = cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,map__55775,map__55775__$1,ctx,env,vec__55776,seq__55777,first__55778,seq__55777__$1,_,import_symbols_or_lists,expr){
return (function (v,spec){
if((spec instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.name(spec));
} else {
var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55772_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55772_SHARP_)].join('');
}),cs));
}
});})(specs,map__55775,map__55775__$1,ctx,env,vec__55776,seq__55777,first__55778,seq__55777__$1,_,import_symbols_or_lists,expr))
,cljs.core.PersistentVector.EMPTY,specs));
var chunk__55783 = null;
var count__55784 = (0);
var i__55785 = (0);
while(true){
if((i__55785 < count__55784)){
var spec = chunk__55783.cljs$core$IIndexed$_nth$arity$2(null,i__55785);
var fq_class_name_55952 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_55952))){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_55952)].join(''),expr);
}

var last_dot_55953 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(spec,".");
var class_name_55954 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(spec,(last_dot_55953 + (1)),cljs.core.count(spec));
var cnn_55955 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_55955,new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name_55954)], null),fq_class_name_55952);


var G__55956 = seq__55782;
var G__55957 = chunk__55783;
var G__55958 = count__55784;
var G__55959 = (i__55785 + (1));
seq__55782 = G__55956;
chunk__55783 = G__55957;
count__55784 = G__55958;
i__55785 = G__55959;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55782);
if(temp__5735__auto__){
var seq__55782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55782__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55782__$1);
var G__55960 = cljs.core.chunk_rest(seq__55782__$1);
var G__55961 = c__4609__auto__;
var G__55962 = cljs.core.count(c__4609__auto__);
var G__55963 = (0);
seq__55782 = G__55960;
chunk__55783 = G__55961;
count__55784 = G__55962;
i__55785 = G__55963;
continue;
} else {
var spec = cljs.core.first(seq__55782__$1);
var fq_class_name_55964 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_55964))){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_55964)].join(''),expr);
}

var last_dot_55965 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(spec,".");
var class_name_55966 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(spec,(last_dot_55965 + (1)),cljs.core.count(spec));
var cnn_55967 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_55967,new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name_55966)], null),fq_class_name_55964);


var G__55968 = cljs.core.next(seq__55782__$1);
var G__55969 = null;
var G__55970 = (0);
var G__55971 = (0);
seq__55782 = G__55968;
chunk__55783 = G__55969;
count__55784 = G__55970;
i__55785 = G__55971;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__55793){
var vec__55795 = p__55793;
var seq__55796 = cljs.core.seq(vec__55795);
var first__55797 = cljs.core.first(seq__55796);
var seq__55796__$1 = cljs.core.next(seq__55796);
var _dot = first__55797;
var first__55797__$1 = cljs.core.first(seq__55796__$1);
var seq__55796__$2 = cljs.core.next(seq__55796__$1);
var instance_expr = first__55797__$1;
var first__55797__$2 = cljs.core.first(seq__55796__$2);
var seq__55796__$3 = cljs.core.next(seq__55796__$2);
var method_expr = first__55797__$2;
var args = seq__55796__$3;
var _expr = vec__55795;
var vec__55798 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__55799 = cljs.core.seq(vec__55798);
var first__55800 = cljs.core.first(seq__55799);
var seq__55799__$1 = cljs.core.next(seq__55799);
var method_expr__$1 = first__55800;
var args__$1 = seq__55799__$1;
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
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__55803){
var vec__55804 = p__55803;
var seq__55805 = cljs.core.seq(vec__55804);
var first__55806 = cljs.core.first(seq__55805);
var seq__55805__$1 = cljs.core.next(seq__55805);
var method_name = first__55806;
var first__55806__$1 = cljs.core.first(seq__55805__$1);
var seq__55805__$2 = cljs.core.next(seq__55805__$1);
var obj = first__55806__$1;
var args = seq__55805__$2;
var expr = vec__55804;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__55809){
var vec__55810 = p__55809;
var seq__55811 = cljs.core.seq(vec__55810);
var first__55812 = cljs.core.first(seq__55811);
var seq__55811__$1 = cljs.core.next(seq__55811);
var _new = first__55812;
var first__55812__$1 = cljs.core.first(seq__55811__$1);
var seq__55811__$2 = cljs.core.next(seq__55811__$1);
var class_sym = first__55812__$1;
var args = seq__55811__$2;
var temp__5733__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5733__auto__)){
var map__55814 = temp__5733__auto__;
var map__55814__$1 = (((((!((map__55814 == null))))?(((((map__55814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55814):map__55814);
var _opts = map__55814__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(new cljs.core.List(null,constructor$,(new cljs.core.List(null,args__$1,null,(1),null)),(2),null)),(3),null)));
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__55817){
var vec__55818 = p__55817;
var seq__55819 = cljs.core.seq(vec__55818);
var first__55820 = cljs.core.first(seq__55819);
var seq__55819__$1 = cljs.core.next(seq__55819);
var constructor_sym = first__55820;
var args = seq__55819__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__55821){
var vec__55822 = p__55821;
var seq__55823 = cljs.core.seq(vec__55822);
var first__55824 = cljs.core.first(seq__55823);
var seq__55823__$1 = cljs.core.next(seq__55823);
var _ns = first__55824;
var first__55824__$1 = cljs.core.first(seq__55823__$1);
var seq__55823__$2 = cljs.core.next(seq__55823__$1);
var ns_name = first__55824__$1;
var exprs = seq__55823__$2;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__55825 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55825,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55825,(1),null);
var vec__55828 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55828,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55828,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__55835 = cljs.core.first(exprs__$3);
var seq__55836 = cljs.core.seq(vec__55835);
var first__55837 = cljs.core.first(seq__55836);
var seq__55836__$1 = cljs.core.next(seq__55836);
var k = first__55837;
var args = seq__55836__$1;
var G__55838 = k;
var G__55838__$1 = (((G__55838 instanceof cljs.core.Keyword))?G__55838.fqn:null);
switch (G__55838__$1) {
case "require":
case "use":
var G__55973 = cljs.core.next(exprs__$3);
var G__55974 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args)));
exprs__$3 = G__55973;
ret = G__55974;
continue;

break;
case "import":
sci.impl.analyzer.do_import(ctx,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"import","import",241030818,null),null,(1),null)),args))));

var G__55975 = cljs.core.next(exprs__$3);
var G__55976 = ret;
exprs__$3 = G__55975;
ret = G__55976;
continue;

break;
case "refer-clojure":
var G__55977 = cljs.core.next(exprs__$3);
var G__55978 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"refer","refer",676235974,null),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args)));
exprs__$3 = G__55977;
ret = G__55978;
continue;

break;
case "gen-class":
var G__55979 = cljs.core.next(exprs__$3);
var G__55980 = ret;
exprs__$3 = G__55979;
ret = G__55980;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55838__$1)].join('')));

}
} else {
return sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),ret));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__55839){
var vec__55840 = p__55839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55840,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55840,(1),null);
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385),true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__55843){
var vec__55844 = p__55843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55844,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55844,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55844,(2),null);
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
var G__55847 = f__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__55847)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__55847)){
return sci.impl.analyzer.do_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__55847)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__55847)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__55847)){
return sci.impl.analyzer.expand_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__55847)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__55847)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"comment","comment",-2122229700,null),G__55847)){
return sci.impl.analyzer.expand_comment.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__55847)){
return sci.impl.utils.mark_eval_call(cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__55847)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),G__55847)){
var G__55854 = ctx;
var G__55855 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55854,G__55855) : sci.impl.analyzer.analyze.call(null,G__55854,G__55855));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__55847)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__55847)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__55847)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__55847)){

return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__55847)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__55847)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__55847)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__55847)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__55847)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__55847)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__55847)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),G__55847)){
return sci.impl.analyzer.expand__GT_(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__55847)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"as->","as->",1430690540,null),G__55847)){
return sci.impl.analyzer.expand_as__GT_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__55847)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__55847)){
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
var needs_ctx_QMARK_ = (function (){var G__55863 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__55864 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$2));
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__55863,G__55864) : sci.impl.utils.kw_identical_QMARK_.call(null,G__55863,G__55864));
})();
var v = (cljs.core.truth_(needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v)));
return expanded;
} else {
return sci.impl.utils.mark_eval_call(cljs.core.cons(f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
}
}catch (e55862){if((e55862 instanceof Error)){
var e = e55862;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e55862;

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
