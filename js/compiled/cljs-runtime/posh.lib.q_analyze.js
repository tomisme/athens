goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__47491 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47491) : stop_at_QMARK_.call(null,G__47491));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__47492 = stop_at_QMARK_;
var G__47493 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__47492,G__47493) : posh.lib.q_analyze.take_until.call(null,G__47492,G__47493));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__47495 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47495) : rest_at_QMARK_.call(null,G__47495));
}
})())){
return ls;
} else {
var G__47850 = rest_at_QMARK_;
var G__47851 = cljs.core.rest(ls);
rest_at_QMARK_ = G__47850;
ls = G__47851;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__47496 = split_at_QMARK_;
var G__47497 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__47496,G__47497) : posh.lib.q_analyze.split_list_at.call(null,G__47496,G__47497));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__47498 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47498) : posh.lib.q_analyze.get_all_vars.call(null,G__47498));
})(),(function (){var G__47499 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47499) : posh.lib.q_analyze.get_all_vars.call(null,G__47499));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__47500 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47500) : posh.lib.q_analyze.get_all_vars.call(null,G__47500));
})(),cljs.core.first(query));
} else {
var G__47501 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__47501) : posh.lib.q_analyze.get_all_vars.call(null,G__47501));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__47505 = cljs.core.rest(eav);
var G__47506 = (n - (1));
var G__47507 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__47508 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__47505,G__47506,G__47507,G__47508) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__47505,G__47506,G__47507,G__47508));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__47509 = cljs.core.rest(eav);
var G__47510 = (n - (1));
var G__47511 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__47512 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__47509,G__47510,G__47511,G__47512) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__47509,G__47510,G__47511,G__47512));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__47513 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__47513) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__47513));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__47514 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__47514) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__47514));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__47515 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47515) : posh.lib.q_analyze.get_eavs.call(null,G__47515));
})(),(function (){var G__47516 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47516) : posh.lib.q_analyze.get_eavs.call(null,G__47516));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__47517 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47517) : posh.lib.q_analyze.get_eavs.call(null,G__47517));
})(),(function (){var G__47518 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47518) : posh.lib.q_analyze.get_eavs.call(null,G__47518));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__47519 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47519) : posh.lib.q_analyze.get_eavs.call(null,G__47519));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_47520 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_47520)) && ((cljs.core.count(ocr_47520) === 2)))){
try{var ocr_47520_0__47523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47520,(0));
if(((cljs.core.vector_QMARK_(ocr_47520_0__47523)) && ((cljs.core.count(ocr_47520_0__47523) === 5)))){
try{var ocr_47520_0__47523_0__47525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47520_0__47523,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47520_0__47523_0__47525,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47520_0__47523,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47520_0__47523,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47520_0__47523,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47520,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__47534 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47534) : posh.lib.q_analyze.get_eavs.call(null,G__47534));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e47533){if((e47533 instanceof Error)){
var e__46512__auto__ = e47533;
if((e__46512__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto__;
}
} else {
throw e47533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47532){if((e47532 instanceof Error)){
var e__46512__auto__ = e47532;
if((e__46512__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto__;
}
} else {
throw e47532;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47530){if((e47530 instanceof Error)){
var e__46512__auto__ = e47530;
if((e__46512__auto__ === cljs.core.match.backtrack)){
var G__47531 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47531) : posh.lib.q_analyze.get_eavs.call(null,G__47531));
} else {
throw e__46512__auto__;
}
} else {
throw e47530;

}
}} else {
var G__47535 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__47535) : posh.lib.q_analyze.get_eavs.call(null,G__47535));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__47536){
var vec__47537 = p__47536;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47537,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47540_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__47540_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__47540_SHARP_);
} else {
return p1__47540_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__47541 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__47541) : posh.lib.q_analyze.count_qvars.call(null,G__47541));
})(),(function (){var G__47542 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__47542) : posh.lib.q_analyze.count_qvars.call(null,G__47542));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__47543 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__47543) : posh.lib.q_analyze.count_qvars.call(null,G__47543));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__47544(s__47545){
return (new cljs.core.LazySeq(null,(function (){
var s__47545__$1 = s__47545;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47545__$1);
if(temp__5735__auto__){
var s__47545__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47545__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47545__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47547 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47546 = (0);
while(true){
if((i__47546 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47546);
cljs.core.chunk_append(b__47547,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__47893 = (i__47546 + (1));
i__47546 = G__47893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47547),posh$lib$q_analyze$fill_qvar_set_$_iter__47544(cljs.core.chunk_rest(s__47545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47547),null);
}
} else {
var r = cljs.core.first(s__47545__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__47544(cljs.core.rest(s__47545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__47548 = cljs.core.first(seq1);
var G__47549 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47548,G__47549) : f.call(null,G__47548,G__47549));
})(),(function (){var G__47550 = f;
var G__47551 = cljs.core.rest(seq1);
var G__47552 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__47550,G__47551,G__47552) : posh.lib.q_analyze.seq_merge_with.call(null,G__47550,G__47551,G__47552));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__47555){
var vec__47556 = p__47555;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47556,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47556,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47556,(2),null);
var eav = vec__47556;
var vec__47559 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47559,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47559,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47559,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__47562(s__47563){
return (new cljs.core.LazySeq(null,(function (){
var s__47563__$1 = s__47563;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47563__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__47563__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__47562_$_iter__47564(s__47565){
return (new cljs.core.LazySeq(null,((function (s__47563__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (){
var s__47565__$1 = s__47565;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47565__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__47565__$1,s__47563__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__47562_$_iter__47564_$_iter__47566(s__47567){
return (new cljs.core.LazySeq(null,((function (s__47565__$1,s__47563__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (){
var s__47567__$1 = s__47567;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__47567__$1);
if(temp__5735__auto____$2){
var s__47567__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__47567__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47567__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47569 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47568 = (0);
while(true){
if((i__47568 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47568);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__47568,s__47567__$1,s__47565__$1,s__47563__$1,vv,c__4580__auto__,size__4581__auto__,b__47569,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (p1__47553_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__47553_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__47568,s__47567__$1,s__47565__$1,s__47563__$1,vv,c__4580__auto__,size__4581__auto__,b__47569,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__47568,s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__47569,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (p__47570){
var vec__47571 = p__47570;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47571,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47571,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__47568,s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__47569,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__47568,s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__47569,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (p1__47554_SHARP_){
if(cljs.core.truth_(p1__47554_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__47568,s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__47569,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__47569,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__47917 = (i__47568 + (1));
i__47568 = G__47917;
continue;
} else {
var G__47918 = (i__47568 + (1));
i__47568 = G__47918;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47569),posh$lib$q_analyze$pattern_from_eav__old_$_iter__47562_$_iter__47564_$_iter__47566(cljs.core.chunk_rest(s__47567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47569),null);
}
} else {
var vv = cljs.core.first(s__47567__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__47567__$1,s__47565__$1,s__47563__$1,vv,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (p1__47553_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__47553_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__47567__$1,s__47565__$1,s__47563__$1,vv,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,vv,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (p__47574){
var vec__47575 = p__47574;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47575,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,vv,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,exposed_qvars,vv,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav){
return (function (p1__47554_SHARP_){
if(cljs.core.truth_(p1__47554_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__47567__$1,s__47565__$1,s__47563__$1,wildcard_count,exposed_qvars,vv,s__47567__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__47562_$_iter__47564_$_iter__47566(cljs.core.rest(s__47567__$2)));
} else {
var G__47920 = cljs.core.rest(s__47567__$2);
s__47567__$1 = G__47920;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__47565__$1,s__47563__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,null,null));
});})(s__47565__$1,s__47563__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__47562_$_iter__47564(cljs.core.rest(s__47565__$1)));
} else {
var G__47923 = cljs.core.rest(s__47565__$1);
s__47565__$1 = G__47923;
continue;
}
} else {
return null;
}
break;
}
});})(s__47563__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
,null,null));
});})(s__47563__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__47559,qe,qa,qv,vec__47556,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__47562(cljs.core.rest(s__47563__$1)));
} else {
var G__47924 = cljs.core.rest(s__47563__$1);
s__47563__$1 = G__47924;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_47578 = cljs.core.vec(eav);
var ocr_47579 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_47578)) && ((cljs.core.count(ocr_47578) === 3)))){
try{var ocr_47578_0__47607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_0__47607,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47578_1__47608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_1__47608,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47578_2__47609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_2__47609,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47683){if((e47683 instanceof Error)){
var e__46512__auto__ = e47683;
if((e__46512__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47579)) && ((cljs.core.count(ocr_47579) === 3)))){
try{var ocr_47579_2__47612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47612 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47685){if((e47685 instanceof Error)){
var e__46512__auto____$1 = e47685;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47612 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47686){if((e47686 instanceof Error)){
var e__46512__auto____$2 = e47686;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$2;
}
} else {
throw e47686;

}
}} else {
throw e__46512__auto____$1;
}
} else {
throw e47685;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47684){if((e47684 instanceof Error)){
var e__46512__auto____$1 = e47684;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47684;

}
}} else {
throw e__46512__auto__;
}
} else {
throw e47683;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47678){if((e47678 instanceof Error)){
var e__46512__auto__ = e47678;
if((e__46512__auto__ === cljs.core.match.backtrack)){
try{var ocr_47578_2__47609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_2__47609,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_47579)) && ((cljs.core.count(ocr_47579) === 3)))){
try{var ocr_47579_1__47614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47614 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47681){if((e47681 instanceof Error)){
var e__46512__auto____$1 = e47681;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47579_1__47614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47614 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47682){if((e47682 instanceof Error)){
var e__46512__auto____$2 = e47682;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$2;
}
} else {
throw e47682;

}
}} else {
throw e__46512__auto____$1;
}
} else {
throw e47681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47680){if((e47680 instanceof Error)){
var e__46512__auto____$1 = e47680;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47679){if((e47679 instanceof Error)){
var e__46512__auto____$1 = e47679;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47679;

}
}} else {
throw e__46512__auto__;
}
} else {
throw e47678;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47620){if((e47620 instanceof Error)){
var e__46512__auto__ = e47620;
if((e__46512__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47579)) && ((cljs.core.count(ocr_47579) === 3)))){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === false)){
try{var ocr_47578_1__47608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_1__47608,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47578_2__47609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_2__47609,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47677){if((e47677 instanceof Error)){
var e__46512__auto____$1 = e47677;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47677;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47676){if((e47676 instanceof Error)){
var e__46512__auto____$1 = e47676;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47622){if((e47622 instanceof Error)){
var e__46512__auto____$1 = e47622;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === true)){
try{var ocr_47578_2__47609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_2__47609,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47578_1__47608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_1__47608,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47673){if((e47673 instanceof Error)){
var e__46512__auto____$2 = e47673;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47674){if((e47674 instanceof Error)){
var e__46512__auto____$3 = e47674;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47675){if((e47675 instanceof Error)){
var e__46512__auto____$4 = e47675;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47675;

}
}} else {
throw e__46512__auto____$3;
}
} else {
throw e47674;

}
}} else {
throw e__46512__auto____$2;
}
} else {
throw e47673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47672){if((e47672 instanceof Error)){
var e__46512__auto____$2 = e47672;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$2;
}
} else {
throw e47672;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47623){if((e47623 instanceof Error)){
var e__46512__auto____$2 = e47623;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === false)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
try{var ocr_47578_2__47609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_2__47609,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47671){if((e47671 instanceof Error)){
var e__46512__auto____$3 = e47671;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$3;
}
} else {
throw e47671;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47668){if((e47668 instanceof Error)){
var e__46512__auto____$3 = e47668;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
try{var ocr_47578_2__47609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_2__47609,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47670){if((e47670 instanceof Error)){
var e__46512__auto____$4 = e47670;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47670;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47669){if((e47669 instanceof Error)){
var e__46512__auto____$4 = e47669;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47669;

}
}} else {
throw e__46512__auto____$3;
}
} else {
throw e47668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47624){if((e47624 instanceof Error)){
var e__46512__auto____$3 = e47624;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === true)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === true)){
try{var ocr_47578_1__47608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_1__47608,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47667){if((e47667 instanceof Error)){
var e__46512__auto____$4 = e47667;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47666){if((e47666 instanceof Error)){
var e__46512__auto____$4 = e47666;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47666;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47625){if((e47625 instanceof Error)){
var e__46512__auto____$4 = e47625;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === false)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === true)){
try{var ocr_47578_1__47608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_1__47608,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47665){if((e47665 instanceof Error)){
var e__46512__auto____$5 = e47665;
if((e__46512__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$5;
}
} else {
throw e47665;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47664){if((e47664 instanceof Error)){
var e__46512__auto____$5 = e47664;
if((e__46512__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$5;
}
} else {
throw e47664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47626){if((e47626 instanceof Error)){
var e__46512__auto____$5 = e47626;
if((e__46512__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === true)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === false)){
try{var ocr_47578_1__47608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_1__47608,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47663){if((e47663 instanceof Error)){
var e__46512__auto____$6 = e47663;
if((e__46512__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$6;
}
} else {
throw e47663;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47662){if((e47662 instanceof Error)){
var e__46512__auto____$6 = e47662;
if((e__46512__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$6;
}
} else {
throw e47662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47627){if((e47627 instanceof Error)){
var e__46512__auto____$6 = e47627;
if((e__46512__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === false)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === false)){
try{var ocr_47578_1__47608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_1__47608,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47661){if((e47661 instanceof Error)){
var e__46512__auto____$7 = e47661;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$7;
}
} else {
throw e47661;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47660){if((e47660 instanceof Error)){
var e__46512__auto____$7 = e47660;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$7;
}
} else {
throw e47660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47628){if((e47628 instanceof Error)){
var e__46512__auto____$7 = e47628;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === true)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
try{var ocr_47578_0__47607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_0__47607,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47659){if((e47659 instanceof Error)){
var e__46512__auto____$8 = e47659;
if((e__46512__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$8;
}
} else {
throw e47659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47658){if((e47658 instanceof Error)){
var e__46512__auto____$8 = e47658;
if((e__46512__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$8;
}
} else {
throw e47658;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47629){if((e47629 instanceof Error)){
var e__46512__auto____$8 = e47629;
if((e__46512__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === false)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
try{var ocr_47578_0__47607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_0__47607,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47657){if((e47657 instanceof Error)){
var e__46512__auto____$9 = e47657;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$9;
}
} else {
throw e47657;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47656){if((e47656 instanceof Error)){
var e__46512__auto____$9 = e47656;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$9;
}
} else {
throw e47656;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47630){if((e47630 instanceof Error)){
var e__46512__auto____$9 = e47630;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === true)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
try{var ocr_47578_0__47607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_0__47607,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47655){if((e47655 instanceof Error)){
var e__46512__auto____$10 = e47655;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$10;
}
} else {
throw e47655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47654){if((e47654 instanceof Error)){
var e__46512__auto____$10 = e47654;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$10;
}
} else {
throw e47654;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47631){if((e47631 instanceof Error)){
var e__46512__auto____$10 = e47631;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === false)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
try{var ocr_47578_0__47607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47578_0__47607,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47653){if((e47653 instanceof Error)){
var e__46512__auto____$11 = e47653;
if((e__46512__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$11;
}
} else {
throw e47653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47652){if((e47652 instanceof Error)){
var e__46512__auto____$11 = e47652;
if((e__46512__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$11;
}
} else {
throw e47652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47632){if((e47632 instanceof Error)){
var e__46512__auto____$11 = e47632;
if((e__46512__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === true)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === true)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47651){if((e47651 instanceof Error)){
var e__46512__auto____$12 = e47651;
if((e__46512__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$12;
}
} else {
throw e47651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47646){if((e47646 instanceof Error)){
var e__46512__auto____$12 = e47646;
if((e__46512__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === false)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47650){if((e47650 instanceof Error)){
var e__46512__auto____$13 = e47650;
if((e__46512__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$13;
}
} else {
throw e47650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47647){if((e47647 instanceof Error)){
var e__46512__auto____$13 = e47647;
if((e__46512__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === true)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47649){if((e47649 instanceof Error)){
var e__46512__auto____$14 = e47649;
if((e__46512__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$14;
}
} else {
throw e47649;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47648){if((e47648 instanceof Error)){
var e__46512__auto____$14 = e47648;
if((e__46512__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$14;
}
} else {
throw e47648;

}
}} else {
throw e__46512__auto____$13;
}
} else {
throw e47647;

}
}} else {
throw e__46512__auto____$12;
}
} else {
throw e47646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47633){if((e47633 instanceof Error)){
var e__46512__auto____$12 = e47633;
if((e__46512__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === false)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === true)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47645){if((e47645 instanceof Error)){
var e__46512__auto____$13 = e47645;
if((e__46512__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$13;
}
} else {
throw e47645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47644){if((e47644 instanceof Error)){
var e__46512__auto____$13 = e47644;
if((e__46512__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$13;
}
} else {
throw e47644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47634){if((e47634 instanceof Error)){
var e__46512__auto____$13 = e47634;
if((e__46512__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === true)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === false)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47643){if((e47643 instanceof Error)){
var e__46512__auto____$14 = e47643;
if((e__46512__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$14;
}
} else {
throw e47643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47642){if((e47642 instanceof Error)){
var e__46512__auto____$14 = e47642;
if((e__46512__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$14;
}
} else {
throw e47642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47635){if((e47635 instanceof Error)){
var e__46512__auto____$14 = e47635;
if((e__46512__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_47579_2__47618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(2));
if((ocr_47579_2__47618 === false)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === true)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47641){if((e47641 instanceof Error)){
var e__46512__auto____$15 = e47641;
if((e__46512__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$15;
}
} else {
throw e47641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47637){if((e47637 instanceof Error)){
var e__46512__auto____$15 = e47637;
if((e__46512__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_47579_0__47616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(0));
if((ocr_47579_0__47616 === false)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47639){if((e47639 instanceof Error)){
var e__46512__auto____$16 = e47639;
if((e__46512__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_47579_1__47617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47579,(1));
if((ocr_47579_1__47617 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47578,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47640){if((e47640 instanceof Error)){
var e__46512__auto____$17 = e47640;
if((e__46512__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$17;
}
} else {
throw e47640;

}
}} else {
throw e__46512__auto____$16;
}
} else {
throw e47639;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47638){if((e47638 instanceof Error)){
var e__46512__auto____$16 = e47638;
if((e__46512__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$16;
}
} else {
throw e47638;

}
}} else {
throw e__46512__auto____$15;
}
} else {
throw e47637;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47636){if((e47636 instanceof Error)){
var e__46512__auto____$15 = e47636;
if((e__46512__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$15;
}
} else {
throw e47636;

}
}} else {
throw e__46512__auto____$14;
}
} else {
throw e47635;

}
}} else {
throw e__46512__auto____$13;
}
} else {
throw e47634;

}
}} else {
throw e__46512__auto____$12;
}
} else {
throw e47633;

}
}} else {
throw e__46512__auto____$11;
}
} else {
throw e47632;

}
}} else {
throw e__46512__auto____$10;
}
} else {
throw e47631;

}
}} else {
throw e__46512__auto____$9;
}
} else {
throw e47630;

}
}} else {
throw e__46512__auto____$8;
}
} else {
throw e47629;

}
}} else {
throw e__46512__auto____$7;
}
} else {
throw e47628;

}
}} else {
throw e__46512__auto____$6;
}
} else {
throw e47627;

}
}} else {
throw e__46512__auto____$5;
}
} else {
throw e47626;

}
}} else {
throw e__46512__auto____$4;
}
} else {
throw e47625;

}
}} else {
throw e__46512__auto____$3;
}
} else {
throw e47624;

}
}} else {
throw e__46512__auto____$2;
}
} else {
throw e47623;

}
}} else {
throw e__46512__auto____$1;
}
} else {
throw e47622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47621){if((e47621 instanceof Error)){
var e__46512__auto____$1 = e47621;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47621;

}
}} else {
throw e__46512__auto__;
}
} else {
throw e47620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47619){if((e47619 instanceof Error)){
var e__46512__auto__ = e47619;
if((e__46512__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__46512__auto__;
}
} else {
throw e47619;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_47687 = cljs.core.vec(eav);
var ocr_47688 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_47687)) && ((cljs.core.count(ocr_47687) === 3)))){
try{var ocr_47687_0__47713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_0__47713,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47687_1__47714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_1__47714,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47687_2__47715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_2__47715,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e47777){if((e47777 instanceof Error)){
var e__46512__auto__ = e47777;
if((e__46512__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47688)) && ((cljs.core.count(ocr_47688) === 3)))){
try{var ocr_47688_2__47718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47718 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47779){if((e47779 instanceof Error)){
var e__46512__auto____$1 = e47779;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47718 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47780){if((e47780 instanceof Error)){
var e__46512__auto____$2 = e47780;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$2;
}
} else {
throw e47780;

}
}} else {
throw e__46512__auto____$1;
}
} else {
throw e47779;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47778){if((e47778 instanceof Error)){
var e__46512__auto____$1 = e47778;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47778;

}
}} else {
throw e__46512__auto__;
}
} else {
throw e47777;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47772){if((e47772 instanceof Error)){
var e__46512__auto__ = e47772;
if((e__46512__auto__ === cljs.core.match.backtrack)){
try{var ocr_47687_2__47715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_2__47715,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_47688)) && ((cljs.core.count(ocr_47688) === 3)))){
try{var ocr_47688_1__47720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47720 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47775){if((e47775 instanceof Error)){
var e__46512__auto____$1 = e47775;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47688_1__47720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47720 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47776){if((e47776 instanceof Error)){
var e__46512__auto____$2 = e47776;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$2;
}
} else {
throw e47776;

}
}} else {
throw e__46512__auto____$1;
}
} else {
throw e47775;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47774){if((e47774 instanceof Error)){
var e__46512__auto____$1 = e47774;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47774;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47773){if((e47773 instanceof Error)){
var e__46512__auto____$1 = e47773;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47773;

}
}} else {
throw e__46512__auto__;
}
} else {
throw e47772;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47726){if((e47726 instanceof Error)){
var e__46512__auto__ = e47726;
if((e__46512__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_47688)) && ((cljs.core.count(ocr_47688) === 3)))){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === false)){
try{var ocr_47687_1__47714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_1__47714,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47687_2__47715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_2__47715,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47771){if((e47771 instanceof Error)){
var e__46512__auto____$1 = e47771;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47771;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47770){if((e47770 instanceof Error)){
var e__46512__auto____$1 = e47770;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47770;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47728){if((e47728 instanceof Error)){
var e__46512__auto____$1 = e47728;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === true)){
try{var ocr_47687_2__47715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_2__47715,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_47687_1__47714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_1__47714,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47767){if((e47767 instanceof Error)){
var e__46512__auto____$2 = e47767;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47768){if((e47768 instanceof Error)){
var e__46512__auto____$3 = e47768;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47769){if((e47769 instanceof Error)){
var e__46512__auto____$4 = e47769;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47769;

}
}} else {
throw e__46512__auto____$3;
}
} else {
throw e47768;

}
}} else {
throw e__46512__auto____$2;
}
} else {
throw e47767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47766){if((e47766 instanceof Error)){
var e__46512__auto____$2 = e47766;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$2;
}
} else {
throw e47766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47729){if((e47729 instanceof Error)){
var e__46512__auto____$2 = e47729;
if((e__46512__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === false)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === true)){
try{var ocr_47687_2__47715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_2__47715,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47765){if((e47765 instanceof Error)){
var e__46512__auto____$3 = e47765;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$3;
}
} else {
throw e47765;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47764){if((e47764 instanceof Error)){
var e__46512__auto____$3 = e47764;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$3;
}
} else {
throw e47764;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47730){if((e47730 instanceof Error)){
var e__46512__auto____$3 = e47730;
if((e__46512__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === true)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === true)){
try{var ocr_47687_1__47714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_1__47714,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47763){if((e47763 instanceof Error)){
var e__46512__auto____$4 = e47763;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47763;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47762){if((e47762 instanceof Error)){
var e__46512__auto____$4 = e47762;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$4;
}
} else {
throw e47762;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47731){if((e47731 instanceof Error)){
var e__46512__auto____$4 = e47731;
if((e__46512__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === false)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === true)){
try{var ocr_47687_1__47714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_1__47714,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47761){if((e47761 instanceof Error)){
var e__46512__auto____$5 = e47761;
if((e__46512__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$5;
}
} else {
throw e47761;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47760){if((e47760 instanceof Error)){
var e__46512__auto____$5 = e47760;
if((e__46512__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$5;
}
} else {
throw e47760;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47732){if((e47732 instanceof Error)){
var e__46512__auto____$5 = e47732;
if((e__46512__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === true)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === false)){
try{var ocr_47687_1__47714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_1__47714,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47759){if((e47759 instanceof Error)){
var e__46512__auto____$6 = e47759;
if((e__46512__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$6;
}
} else {
throw e47759;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47756){if((e47756 instanceof Error)){
var e__46512__auto____$6 = e47756;
if((e__46512__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === true)){
try{var ocr_47687_0__47713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_0__47713,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47758){if((e47758 instanceof Error)){
var e__46512__auto____$7 = e47758;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$7;
}
} else {
throw e47758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47757){if((e47757 instanceof Error)){
var e__46512__auto____$7 = e47757;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$7;
}
} else {
throw e47757;

}
}} else {
throw e__46512__auto____$6;
}
} else {
throw e47756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47733){if((e47733 instanceof Error)){
var e__46512__auto____$6 = e47733;
if((e__46512__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === false)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === true)){
try{var ocr_47687_0__47713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_0__47713,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47755){if((e47755 instanceof Error)){
var e__46512__auto____$7 = e47755;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$7;
}
} else {
throw e47755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47754){if((e47754 instanceof Error)){
var e__46512__auto____$7 = e47754;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$7;
}
} else {
throw e47754;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47734){if((e47734 instanceof Error)){
var e__46512__auto____$7 = e47734;
if((e__46512__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === true)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === false)){
try{var ocr_47687_0__47713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_47687_0__47713,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47753){if((e47753 instanceof Error)){
var e__46512__auto____$8 = e47753;
if((e__46512__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$8;
}
} else {
throw e47753;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47747){if((e47747 instanceof Error)){
var e__46512__auto____$8 = e47747;
if((e__46512__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === true)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47751){if((e47751 instanceof Error)){
var e__46512__auto____$9 = e47751;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47752){if((e47752 instanceof Error)){
var e__46512__auto____$10 = e47752;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$10;
}
} else {
throw e47752;

}
}} else {
throw e__46512__auto____$9;
}
} else {
throw e47751;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47748){if((e47748 instanceof Error)){
var e__46512__auto____$9 = e47748;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === false)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47750){if((e47750 instanceof Error)){
var e__46512__auto____$10 = e47750;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$10;
}
} else {
throw e47750;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47749){if((e47749 instanceof Error)){
var e__46512__auto____$10 = e47749;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$10;
}
} else {
throw e47749;

}
}} else {
throw e__46512__auto____$9;
}
} else {
throw e47748;

}
}} else {
throw e__46512__auto____$8;
}
} else {
throw e47747;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47735){if((e47735 instanceof Error)){
var e__46512__auto____$8 = e47735;
if((e__46512__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === false)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === true)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47746){if((e47746 instanceof Error)){
var e__46512__auto____$9 = e47746;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$9;
}
} else {
throw e47746;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47745){if((e47745 instanceof Error)){
var e__46512__auto____$9 = e47745;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$9;
}
} else {
throw e47745;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47736){if((e47736 instanceof Error)){
var e__46512__auto____$9 = e47736;
if((e__46512__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === true)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === false)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47744){if((e47744 instanceof Error)){
var e__46512__auto____$10 = e47744;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$10;
}
} else {
throw e47744;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47743){if((e47743 instanceof Error)){
var e__46512__auto____$10 = e47743;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$10;
}
} else {
throw e47743;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47737){if((e47737 instanceof Error)){
var e__46512__auto____$10 = e47737;
if((e__46512__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_47688_2__47724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(2));
if((ocr_47688_2__47724 === false)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === true)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47742){if((e47742 instanceof Error)){
var e__46512__auto____$11 = e47742;
if((e__46512__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$11;
}
} else {
throw e47742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47739){if((e47739 instanceof Error)){
var e__46512__auto____$11 = e47739;
if((e__46512__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_47688_0__47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(0));
if((ocr_47688_0__47722 === false)){
try{var ocr_47688_1__47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47688,(1));
if((ocr_47688_1__47723 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_47687,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47741){if((e47741 instanceof Error)){
var e__46512__auto____$12 = e47741;
if((e__46512__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$12;
}
} else {
throw e47741;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47740){if((e47740 instanceof Error)){
var e__46512__auto____$12 = e47740;
if((e__46512__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$12;
}
} else {
throw e47740;

}
}} else {
throw e__46512__auto____$11;
}
} else {
throw e47739;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47738){if((e47738 instanceof Error)){
var e__46512__auto____$11 = e47738;
if((e__46512__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$11;
}
} else {
throw e47738;

}
}} else {
throw e__46512__auto____$10;
}
} else {
throw e47737;

}
}} else {
throw e__46512__auto____$9;
}
} else {
throw e47736;

}
}} else {
throw e__46512__auto____$8;
}
} else {
throw e47735;

}
}} else {
throw e__46512__auto____$7;
}
} else {
throw e47734;

}
}} else {
throw e__46512__auto____$6;
}
} else {
throw e47733;

}
}} else {
throw e__46512__auto____$5;
}
} else {
throw e47732;

}
}} else {
throw e__46512__auto____$4;
}
} else {
throw e47731;

}
}} else {
throw e__46512__auto____$3;
}
} else {
throw e47730;

}
}} else {
throw e__46512__auto____$2;
}
} else {
throw e47729;

}
}} else {
throw e__46512__auto____$1;
}
} else {
throw e47728;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47727){if((e47727 instanceof Error)){
var e__46512__auto____$1 = e47727;
if((e__46512__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46512__auto____$1;
}
} else {
throw e47727;

}
}} else {
throw e__46512__auto__;
}
} else {
throw e47726;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47725){if((e47725 instanceof Error)){
var e__46512__auto__ = e47725;
if((e__46512__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__46512__auto__;
}
} else {
throw e47725;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47782){
var vec__47783 = p__47782;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47783,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47781_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__47781_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47787){
var vec__47788 = p__47787;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47788,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47788,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47786_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__47786_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__47791 = cljs.core.rest(ins);
var G__47792 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__47791,G__47792) : posh.lib.q_analyze.just_qvars.call(null,G__47791,G__47792));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47793_SHARP_){
return cljs.core.zipmap(qvars,p1__47793_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__47794 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47794,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47794,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47794,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47794,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__47981 = var$;
var G__47982 = dbvarmap;
var G__47983 = cljs.core.rest(dbeavs);
var$ = G__47981;
dbvarmap = G__47982;
dbeavs = G__47983;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__47797 = cljs.core.rest(vars);
var G__47798 = dbvarmap;
var G__47799 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__47797,G__47798,G__47799) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__47797,G__47798,G__47799));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__47984 = (n + (1));
var G__47985 = cljs.core.rest(xs__$1);
n = G__47984;
xs__$1 = G__47985;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47800_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__47800_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__47800_SHARP_) : type.call(null,p1__47800_SHARP_));
} else {
return p1__47800_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__47801 = cljs.core.rest(ins);
var G__47802 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__47801,G__47802) : posh.lib.q_analyze.make_dbarg_map.call(null,G__47801,G__47802));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47803){
var vec__47804 = p__47803;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47804,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47804,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__47808_SHARP_,p2__47807_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__47807_SHARP_)){
return p1__47808_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__47812 = cljs.core._EQ_;
var expr__47813 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__47812.cljs$core$IFn$_invoke$arity$2 ? pred__47812.cljs$core$IFn$_invoke$arity$2((1),expr__47813) : pred__47812.call(null,(1),expr__47813)))){
return true;
} else {
if(cljs.core.truth_((pred__47812.cljs$core$IFn$_invoke$arity$2 ? pred__47812.cljs$core$IFn$_invoke$arity$2((3),expr__47813) : pred__47812.call(null,(3),expr__47813)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__48004 = cljs.core.first(remaining);
var G__48005 = cljs.core.rest(remaining);
clause = G__48004;
remaining = G__48005;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__48006 = cljs.core.first(remaining);
var G__48007 = cljs.core.rest(remaining);
clause = G__48006;
remaining = G__48007;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__47815(s__47816){
return (new cljs.core.LazySeq(null,(function (){
var s__47816__$1 = s__47816;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47816__$1);
if(temp__5735__auto__){
var s__47816__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47816__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47816__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47818 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47817 = (0);
while(true){
if((i__47817 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47817);
cljs.core.chunk_append(b__47818,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__48016 = (i__47817 + (1));
i__47817 = G__48016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47818),posh$lib$q_analyze$resolve_any_idents_$_iter__47815(cljs.core.chunk_rest(s__47816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47818),null);
}
} else {
var var_value = cljs.core.first(s__47816__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__47815(cljs.core.rest(s__47816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47823){
var vec__47824 = p__47823;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47824,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47824,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47827){
var vec__47828 = p__47827;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47828,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47831){
var vec__47832 = p__47831;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47832,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47832,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47835){
var vec__47836 = p__47835;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47836,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47836,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__47840 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__47841 = cljs.core.vec(r);
var fexpr__47839 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__47839.cljs$core$IFn$_invoke$arity$2 ? fexpr__47839.cljs$core$IFn$_invoke$arity$2(G__47840,G__47841) : fexpr__47839.call(null,G__47840,G__47841));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47842){
var vec__47843 = p__47842;
var seq__47844 = cljs.core.seq(vec__47843);
var first__47845 = cljs.core.first(seq__47844);
var seq__47844__$1 = cljs.core.next(seq__47844);
var db = first__47845;
var eav = seq__47844__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47846){
var vec__47847 = p__47846;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__47821_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__47821_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__47821_SHARP_) : linked_qvars.call(null,p1__47821_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__47821_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__47822_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__47822_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__47822_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
