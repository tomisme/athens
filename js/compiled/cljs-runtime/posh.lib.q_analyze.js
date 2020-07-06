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
var G__37444 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__37444) : stop_at_QMARK_.call(null,G__37444));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__37445 = stop_at_QMARK_;
var G__37446 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__37445,G__37446) : posh.lib.q_analyze.take_until.call(null,G__37445,G__37446));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__37449 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__37449) : rest_at_QMARK_.call(null,G__37449));
}
})())){
return ls;
} else {
var G__37825 = rest_at_QMARK_;
var G__37826 = cljs.core.rest(ls);
rest_at_QMARK_ = G__37825;
ls = G__37826;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__37450 = split_at_QMARK_;
var G__37451 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__37450,G__37451) : posh.lib.q_analyze.split_list_at.call(null,G__37450,G__37451));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__37452 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37452) : posh.lib.q_analyze.get_all_vars.call(null,G__37452));
})(),(function (){var G__37453 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37453) : posh.lib.q_analyze.get_all_vars.call(null,G__37453));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__37454 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37454) : posh.lib.q_analyze.get_all_vars.call(null,G__37454));
})(),cljs.core.first(query));
} else {
var G__37455 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__37455) : posh.lib.q_analyze.get_all_vars.call(null,G__37455));

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
var G__37462 = cljs.core.rest(eav);
var G__37463 = (n - (1));
var G__37464 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__37465 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__37462,G__37463,G__37464,G__37465) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__37462,G__37463,G__37464,G__37465));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__37468 = cljs.core.rest(eav);
var G__37469 = (n - (1));
var G__37470 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__37471 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__37468,G__37469,G__37470,G__37471) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__37468,G__37469,G__37470,G__37471));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__37483 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__37483) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__37483));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__37484 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__37484) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__37484));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__37488 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37488) : posh.lib.q_analyze.get_eavs.call(null,G__37488));
})(),(function (){var G__37489 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37489) : posh.lib.q_analyze.get_eavs.call(null,G__37489));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__37490 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37490) : posh.lib.q_analyze.get_eavs.call(null,G__37490));
})(),(function (){var G__37491 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37491) : posh.lib.q_analyze.get_eavs.call(null,G__37491));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__37492 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37492) : posh.lib.q_analyze.get_eavs.call(null,G__37492));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_37495 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_37495)) && ((cljs.core.count(ocr_37495) === 2)))){
try{var ocr_37495_0__37498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37495,(0));
if(((cljs.core.vector_QMARK_(ocr_37495_0__37498)) && ((cljs.core.count(ocr_37495_0__37498) === 5)))){
try{var ocr_37495_0__37498_0__37500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37495_0__37498,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37495_0__37498_0__37500,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37495_0__37498,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37495_0__37498,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37495_0__37498,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37495,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__37509 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37509) : posh.lib.q_analyze.get_eavs.call(null,G__37509));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e37508){if((e37508 instanceof Error)){
var e__36541__auto__ = e37508;
if((e__36541__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto__;
}
} else {
throw e37508;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37507){if((e37507 instanceof Error)){
var e__36541__auto__ = e37507;
if((e__36541__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto__;
}
} else {
throw e37507;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37505){if((e37505 instanceof Error)){
var e__36541__auto__ = e37505;
if((e__36541__auto__ === cljs.core.match.backtrack)){
var G__37506 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37506) : posh.lib.q_analyze.get_eavs.call(null,G__37506));
} else {
throw e__36541__auto__;
}
} else {
throw e37505;

}
}} else {
var G__37510 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__37510) : posh.lib.q_analyze.get_eavs.call(null,G__37510));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__37511){
var vec__37512 = p__37511;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37515_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__37515_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__37515_SHARP_);
} else {
return p1__37515_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__37516 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__37516) : posh.lib.q_analyze.count_qvars.call(null,G__37516));
})(),(function (){var G__37517 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__37517) : posh.lib.q_analyze.count_qvars.call(null,G__37517));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__37518 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__37518) : posh.lib.q_analyze.count_qvars.call(null,G__37518));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__37519(s__37520){
return (new cljs.core.LazySeq(null,(function (){
var s__37520__$1 = s__37520;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37520__$1);
if(temp__5735__auto__){
var s__37520__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37520__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37520__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37522 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37521 = (0);
while(true){
if((i__37521 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37521);
cljs.core.chunk_append(b__37522,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__37859 = (i__37521 + (1));
i__37521 = G__37859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37522),posh$lib$q_analyze$fill_qvar_set_$_iter__37519(cljs.core.chunk_rest(s__37520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37522),null);
}
} else {
var r = cljs.core.first(s__37520__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__37519(cljs.core.rest(s__37520__$2)));
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
return cljs.core.cons((function (){var G__37523 = cljs.core.first(seq1);
var G__37524 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__37523,G__37524) : f.call(null,G__37523,G__37524));
})(),(function (){var G__37525 = f;
var G__37526 = cljs.core.rest(seq1);
var G__37527 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__37525,G__37526,G__37527) : posh.lib.q_analyze.seq_merge_with.call(null,G__37525,G__37526,G__37527));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__37530){
var vec__37531 = p__37530;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37531,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37531,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37531,(2),null);
var eav = vec__37531;
var vec__37534 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37534,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37534,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37534,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__37537(s__37538){
return (new cljs.core.LazySeq(null,(function (){
var s__37538__$1 = s__37538;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37538__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__37538__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__37537_$_iter__37539(s__37540){
return (new cljs.core.LazySeq(null,((function (s__37538__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (){
var s__37540__$1 = s__37540;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37540__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__37540__$1,s__37538__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__37537_$_iter__37539_$_iter__37541(s__37542){
return (new cljs.core.LazySeq(null,((function (s__37540__$1,s__37538__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (){
var s__37542__$1 = s__37542;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__37542__$1);
if(temp__5735__auto____$2){
var s__37542__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__37542__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37542__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37544 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37543 = (0);
while(true){
if((i__37543 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37543);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37543,s__37542__$1,s__37540__$1,s__37538__$1,vv,c__4580__auto__,size__4581__auto__,b__37544,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (p1__37528_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__37528_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__37543,s__37542__$1,s__37540__$1,s__37538__$1,vv,c__4580__auto__,size__4581__auto__,b__37544,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37543,s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__37544,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (p__37545){
var vec__37546 = p__37545;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(1),null);
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
});})(i__37543,s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__37544,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37543,s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__37544,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (p1__37529_SHARP_){
if(cljs.core.truth_(p1__37529_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__37543,s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__37544,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__37544,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__37861 = (i__37543 + (1));
i__37543 = G__37861;
continue;
} else {
var G__37862 = (i__37543 + (1));
i__37543 = G__37862;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37544),posh$lib$q_analyze$pattern_from_eav__old_$_iter__37537_$_iter__37539_$_iter__37541(cljs.core.chunk_rest(s__37542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37544),null);
}
} else {
var vv = cljs.core.first(s__37542__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__37542__$1,s__37540__$1,s__37538__$1,vv,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (p1__37528_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__37528_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__37542__$1,s__37540__$1,s__37538__$1,vv,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,vv,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (p__37549){
var vec__37550 = p__37549;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37550,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37550,(1),null);
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
});})(s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,vv,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,exposed_qvars,vv,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav){
return (function (p1__37529_SHARP_){
if(cljs.core.truth_(p1__37529_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__37542__$1,s__37540__$1,s__37538__$1,wildcard_count,exposed_qvars,vv,s__37542__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__37537_$_iter__37539_$_iter__37541(cljs.core.rest(s__37542__$2)));
} else {
var G__37863 = cljs.core.rest(s__37542__$2);
s__37542__$1 = G__37863;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37540__$1,s__37538__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,null,null));
});})(s__37540__$1,s__37538__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__37537_$_iter__37539(cljs.core.rest(s__37540__$1)));
} else {
var G__37864 = cljs.core.rest(s__37540__$1);
s__37540__$1 = G__37864;
continue;
}
} else {
return null;
}
break;
}
});})(s__37538__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
,null,null));
});})(s__37538__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__37534,qe,qa,qv,vec__37531,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__37537(cljs.core.rest(s__37538__$1)));
} else {
var G__37866 = cljs.core.rest(s__37538__$1);
s__37538__$1 = G__37866;
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
var ocr_37553 = cljs.core.vec(eav);
var ocr_37554 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_37553)) && ((cljs.core.count(ocr_37553) === 3)))){
try{var ocr_37553_0__37582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_0__37582,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37553_1__37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_1__37583,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37553_2__37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_2__37584,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37658){if((e37658 instanceof Error)){
var e__36541__auto__ = e37658;
if((e__36541__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37554)) && ((cljs.core.count(ocr_37554) === 3)))){
try{var ocr_37554_2__37587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37587 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37660){if((e37660 instanceof Error)){
var e__36541__auto____$1 = e37660;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37587 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37661){if((e37661 instanceof Error)){
var e__36541__auto____$2 = e37661;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$2;
}
} else {
throw e37661;

}
}} else {
throw e__36541__auto____$1;
}
} else {
throw e37660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37659){if((e37659 instanceof Error)){
var e__36541__auto____$1 = e37659;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37659;

}
}} else {
throw e__36541__auto__;
}
} else {
throw e37658;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37653){if((e37653 instanceof Error)){
var e__36541__auto__ = e37653;
if((e__36541__auto__ === cljs.core.match.backtrack)){
try{var ocr_37553_2__37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_2__37584,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_37554)) && ((cljs.core.count(ocr_37554) === 3)))){
try{var ocr_37554_1__37589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37589 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37656){if((e37656 instanceof Error)){
var e__36541__auto____$1 = e37656;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37554_1__37589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37589 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37657){if((e37657 instanceof Error)){
var e__36541__auto____$2 = e37657;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$2;
}
} else {
throw e37657;

}
}} else {
throw e__36541__auto____$1;
}
} else {
throw e37656;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37655){if((e37655 instanceof Error)){
var e__36541__auto____$1 = e37655;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37654){if((e37654 instanceof Error)){
var e__36541__auto____$1 = e37654;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37654;

}
}} else {
throw e__36541__auto__;
}
} else {
throw e37653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37595){if((e37595 instanceof Error)){
var e__36541__auto__ = e37595;
if((e__36541__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37554)) && ((cljs.core.count(ocr_37554) === 3)))){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === false)){
try{var ocr_37553_1__37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_1__37583,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37553_2__37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_2__37584,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37652){if((e37652 instanceof Error)){
var e__36541__auto____$1 = e37652;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37651){if((e37651 instanceof Error)){
var e__36541__auto____$1 = e37651;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37597){if((e37597 instanceof Error)){
var e__36541__auto____$1 = e37597;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === true)){
try{var ocr_37553_2__37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_2__37584,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37553_1__37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_1__37583,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37648){if((e37648 instanceof Error)){
var e__36541__auto____$2 = e37648;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37649){if((e37649 instanceof Error)){
var e__36541__auto____$3 = e37649;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37650){if((e37650 instanceof Error)){
var e__36541__auto____$4 = e37650;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37650;

}
}} else {
throw e__36541__auto____$3;
}
} else {
throw e37649;

}
}} else {
throw e__36541__auto____$2;
}
} else {
throw e37648;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37647){if((e37647 instanceof Error)){
var e__36541__auto____$2 = e37647;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$2;
}
} else {
throw e37647;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37598){if((e37598 instanceof Error)){
var e__36541__auto____$2 = e37598;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === false)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
try{var ocr_37553_2__37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_2__37584,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37646){if((e37646 instanceof Error)){
var e__36541__auto____$3 = e37646;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$3;
}
} else {
throw e37646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37643){if((e37643 instanceof Error)){
var e__36541__auto____$3 = e37643;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
try{var ocr_37553_2__37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_2__37584,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37645){if((e37645 instanceof Error)){
var e__36541__auto____$4 = e37645;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37644){if((e37644 instanceof Error)){
var e__36541__auto____$4 = e37644;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37644;

}
}} else {
throw e__36541__auto____$3;
}
} else {
throw e37643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37599){if((e37599 instanceof Error)){
var e__36541__auto____$3 = e37599;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === true)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === true)){
try{var ocr_37553_1__37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_1__37583,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37642){if((e37642 instanceof Error)){
var e__36541__auto____$4 = e37642;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37641){if((e37641 instanceof Error)){
var e__36541__auto____$4 = e37641;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37600){if((e37600 instanceof Error)){
var e__36541__auto____$4 = e37600;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === false)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === true)){
try{var ocr_37553_1__37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_1__37583,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37640){if((e37640 instanceof Error)){
var e__36541__auto____$5 = e37640;
if((e__36541__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$5;
}
} else {
throw e37640;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37639){if((e37639 instanceof Error)){
var e__36541__auto____$5 = e37639;
if((e__36541__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$5;
}
} else {
throw e37639;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37601){if((e37601 instanceof Error)){
var e__36541__auto____$5 = e37601;
if((e__36541__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === true)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === false)){
try{var ocr_37553_1__37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_1__37583,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37638){if((e37638 instanceof Error)){
var e__36541__auto____$6 = e37638;
if((e__36541__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$6;
}
} else {
throw e37638;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37637){if((e37637 instanceof Error)){
var e__36541__auto____$6 = e37637;
if((e__36541__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$6;
}
} else {
throw e37637;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37602){if((e37602 instanceof Error)){
var e__36541__auto____$6 = e37602;
if((e__36541__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === false)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === false)){
try{var ocr_37553_1__37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_1__37583,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37636){if((e37636 instanceof Error)){
var e__36541__auto____$7 = e37636;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$7;
}
} else {
throw e37636;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37635){if((e37635 instanceof Error)){
var e__36541__auto____$7 = e37635;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$7;
}
} else {
throw e37635;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37603){if((e37603 instanceof Error)){
var e__36541__auto____$7 = e37603;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === true)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
try{var ocr_37553_0__37582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_0__37582,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37634){if((e37634 instanceof Error)){
var e__36541__auto____$8 = e37634;
if((e__36541__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$8;
}
} else {
throw e37634;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37633){if((e37633 instanceof Error)){
var e__36541__auto____$8 = e37633;
if((e__36541__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$8;
}
} else {
throw e37633;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37604){if((e37604 instanceof Error)){
var e__36541__auto____$8 = e37604;
if((e__36541__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === false)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
try{var ocr_37553_0__37582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_0__37582,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37632){if((e37632 instanceof Error)){
var e__36541__auto____$9 = e37632;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$9;
}
} else {
throw e37632;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37631){if((e37631 instanceof Error)){
var e__36541__auto____$9 = e37631;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$9;
}
} else {
throw e37631;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37605){if((e37605 instanceof Error)){
var e__36541__auto____$9 = e37605;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === true)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
try{var ocr_37553_0__37582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_0__37582,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37630){if((e37630 instanceof Error)){
var e__36541__auto____$10 = e37630;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$10;
}
} else {
throw e37630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37629){if((e37629 instanceof Error)){
var e__36541__auto____$10 = e37629;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$10;
}
} else {
throw e37629;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37606){if((e37606 instanceof Error)){
var e__36541__auto____$10 = e37606;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === false)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
try{var ocr_37553_0__37582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37553_0__37582,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37628){if((e37628 instanceof Error)){
var e__36541__auto____$11 = e37628;
if((e__36541__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$11;
}
} else {
throw e37628;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37627){if((e37627 instanceof Error)){
var e__36541__auto____$11 = e37627;
if((e__36541__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$11;
}
} else {
throw e37627;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37607){if((e37607 instanceof Error)){
var e__36541__auto____$11 = e37607;
if((e__36541__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === true)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === true)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37626){if((e37626 instanceof Error)){
var e__36541__auto____$12 = e37626;
if((e__36541__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$12;
}
} else {
throw e37626;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37621){if((e37621 instanceof Error)){
var e__36541__auto____$12 = e37621;
if((e__36541__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === false)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37625){if((e37625 instanceof Error)){
var e__36541__auto____$13 = e37625;
if((e__36541__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$13;
}
} else {
throw e37625;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37622){if((e37622 instanceof Error)){
var e__36541__auto____$13 = e37622;
if((e__36541__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === true)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37624){if((e37624 instanceof Error)){
var e__36541__auto____$14 = e37624;
if((e__36541__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$14;
}
} else {
throw e37624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37623){if((e37623 instanceof Error)){
var e__36541__auto____$14 = e37623;
if((e__36541__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$14;
}
} else {
throw e37623;

}
}} else {
throw e__36541__auto____$13;
}
} else {
throw e37622;

}
}} else {
throw e__36541__auto____$12;
}
} else {
throw e37621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37608){if((e37608 instanceof Error)){
var e__36541__auto____$12 = e37608;
if((e__36541__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === false)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === true)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37620){if((e37620 instanceof Error)){
var e__36541__auto____$13 = e37620;
if((e__36541__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$13;
}
} else {
throw e37620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37619){if((e37619 instanceof Error)){
var e__36541__auto____$13 = e37619;
if((e__36541__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$13;
}
} else {
throw e37619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37609){if((e37609 instanceof Error)){
var e__36541__auto____$13 = e37609;
if((e__36541__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === true)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === false)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37618){if((e37618 instanceof Error)){
var e__36541__auto____$14 = e37618;
if((e__36541__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$14;
}
} else {
throw e37618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37617){if((e37617 instanceof Error)){
var e__36541__auto____$14 = e37617;
if((e__36541__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$14;
}
} else {
throw e37617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37610){if((e37610 instanceof Error)){
var e__36541__auto____$14 = e37610;
if((e__36541__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_37554_2__37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(2));
if((ocr_37554_2__37593 === false)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === true)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37616){if((e37616 instanceof Error)){
var e__36541__auto____$15 = e37616;
if((e__36541__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$15;
}
} else {
throw e37616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37612){if((e37612 instanceof Error)){
var e__36541__auto____$15 = e37612;
if((e__36541__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_37554_0__37591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(0));
if((ocr_37554_0__37591 === false)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37614){if((e37614 instanceof Error)){
var e__36541__auto____$16 = e37614;
if((e__36541__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_37554_1__37592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37554,(1));
if((ocr_37554_1__37592 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37553,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37615){if((e37615 instanceof Error)){
var e__36541__auto____$17 = e37615;
if((e__36541__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$17;
}
} else {
throw e37615;

}
}} else {
throw e__36541__auto____$16;
}
} else {
throw e37614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37613){if((e37613 instanceof Error)){
var e__36541__auto____$16 = e37613;
if((e__36541__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$16;
}
} else {
throw e37613;

}
}} else {
throw e__36541__auto____$15;
}
} else {
throw e37612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37611){if((e37611 instanceof Error)){
var e__36541__auto____$15 = e37611;
if((e__36541__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$15;
}
} else {
throw e37611;

}
}} else {
throw e__36541__auto____$14;
}
} else {
throw e37610;

}
}} else {
throw e__36541__auto____$13;
}
} else {
throw e37609;

}
}} else {
throw e__36541__auto____$12;
}
} else {
throw e37608;

}
}} else {
throw e__36541__auto____$11;
}
} else {
throw e37607;

}
}} else {
throw e__36541__auto____$10;
}
} else {
throw e37606;

}
}} else {
throw e__36541__auto____$9;
}
} else {
throw e37605;

}
}} else {
throw e__36541__auto____$8;
}
} else {
throw e37604;

}
}} else {
throw e__36541__auto____$7;
}
} else {
throw e37603;

}
}} else {
throw e__36541__auto____$6;
}
} else {
throw e37602;

}
}} else {
throw e__36541__auto____$5;
}
} else {
throw e37601;

}
}} else {
throw e__36541__auto____$4;
}
} else {
throw e37600;

}
}} else {
throw e__36541__auto____$3;
}
} else {
throw e37599;

}
}} else {
throw e__36541__auto____$2;
}
} else {
throw e37598;

}
}} else {
throw e__36541__auto____$1;
}
} else {
throw e37597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37596){if((e37596 instanceof Error)){
var e__36541__auto____$1 = e37596;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37596;

}
}} else {
throw e__36541__auto__;
}
} else {
throw e37595;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37594){if((e37594 instanceof Error)){
var e__36541__auto__ = e37594;
if((e__36541__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__36541__auto__;
}
} else {
throw e37594;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_37662 = cljs.core.vec(eav);
var ocr_37663 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_37662)) && ((cljs.core.count(ocr_37662) === 3)))){
try{var ocr_37662_0__37688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_0__37688,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37662_1__37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_1__37689,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37662_2__37690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_2__37690,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e37752){if((e37752 instanceof Error)){
var e__36541__auto__ = e37752;
if((e__36541__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37663)) && ((cljs.core.count(ocr_37663) === 3)))){
try{var ocr_37663_2__37693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37693 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37754){if((e37754 instanceof Error)){
var e__36541__auto____$1 = e37754;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37693 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37755){if((e37755 instanceof Error)){
var e__36541__auto____$2 = e37755;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$2;
}
} else {
throw e37755;

}
}} else {
throw e__36541__auto____$1;
}
} else {
throw e37754;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37753){if((e37753 instanceof Error)){
var e__36541__auto____$1 = e37753;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37753;

}
}} else {
throw e__36541__auto__;
}
} else {
throw e37752;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37747){if((e37747 instanceof Error)){
var e__36541__auto__ = e37747;
if((e__36541__auto__ === cljs.core.match.backtrack)){
try{var ocr_37662_2__37690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_2__37690,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_37663)) && ((cljs.core.count(ocr_37663) === 3)))){
try{var ocr_37663_1__37695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37695 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37750){if((e37750 instanceof Error)){
var e__36541__auto____$1 = e37750;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37663_1__37695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37695 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37751){if((e37751 instanceof Error)){
var e__36541__auto____$2 = e37751;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$2;
}
} else {
throw e37751;

}
}} else {
throw e__36541__auto____$1;
}
} else {
throw e37750;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37749){if((e37749 instanceof Error)){
var e__36541__auto____$1 = e37749;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37749;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37748){if((e37748 instanceof Error)){
var e__36541__auto____$1 = e37748;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37748;

}
}} else {
throw e__36541__auto__;
}
} else {
throw e37747;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37701){if((e37701 instanceof Error)){
var e__36541__auto__ = e37701;
if((e__36541__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37663)) && ((cljs.core.count(ocr_37663) === 3)))){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === false)){
try{var ocr_37662_1__37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_1__37689,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37662_2__37690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_2__37690,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37746){if((e37746 instanceof Error)){
var e__36541__auto____$1 = e37746;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37746;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37745){if((e37745 instanceof Error)){
var e__36541__auto____$1 = e37745;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37745;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37703){if((e37703 instanceof Error)){
var e__36541__auto____$1 = e37703;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === true)){
try{var ocr_37662_2__37690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_2__37690,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_37662_1__37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_1__37689,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37742){if((e37742 instanceof Error)){
var e__36541__auto____$2 = e37742;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37743){if((e37743 instanceof Error)){
var e__36541__auto____$3 = e37743;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37744){if((e37744 instanceof Error)){
var e__36541__auto____$4 = e37744;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37744;

}
}} else {
throw e__36541__auto____$3;
}
} else {
throw e37743;

}
}} else {
throw e__36541__auto____$2;
}
} else {
throw e37742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37741){if((e37741 instanceof Error)){
var e__36541__auto____$2 = e37741;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$2;
}
} else {
throw e37741;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37704){if((e37704 instanceof Error)){
var e__36541__auto____$2 = e37704;
if((e__36541__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === false)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === true)){
try{var ocr_37662_2__37690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_2__37690,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37740){if((e37740 instanceof Error)){
var e__36541__auto____$3 = e37740;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$3;
}
} else {
throw e37740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37739){if((e37739 instanceof Error)){
var e__36541__auto____$3 = e37739;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$3;
}
} else {
throw e37739;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37705){if((e37705 instanceof Error)){
var e__36541__auto____$3 = e37705;
if((e__36541__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === true)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === true)){
try{var ocr_37662_1__37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_1__37689,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37738){if((e37738 instanceof Error)){
var e__36541__auto____$4 = e37738;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37738;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37737){if((e37737 instanceof Error)){
var e__36541__auto____$4 = e37737;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$4;
}
} else {
throw e37737;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37706){if((e37706 instanceof Error)){
var e__36541__auto____$4 = e37706;
if((e__36541__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === false)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === true)){
try{var ocr_37662_1__37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_1__37689,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37736){if((e37736 instanceof Error)){
var e__36541__auto____$5 = e37736;
if((e__36541__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$5;
}
} else {
throw e37736;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37735){if((e37735 instanceof Error)){
var e__36541__auto____$5 = e37735;
if((e__36541__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$5;
}
} else {
throw e37735;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37707){if((e37707 instanceof Error)){
var e__36541__auto____$5 = e37707;
if((e__36541__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === true)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === false)){
try{var ocr_37662_1__37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_1__37689,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37734){if((e37734 instanceof Error)){
var e__36541__auto____$6 = e37734;
if((e__36541__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$6;
}
} else {
throw e37734;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37731){if((e37731 instanceof Error)){
var e__36541__auto____$6 = e37731;
if((e__36541__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === true)){
try{var ocr_37662_0__37688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_0__37688,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37733){if((e37733 instanceof Error)){
var e__36541__auto____$7 = e37733;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$7;
}
} else {
throw e37733;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37732){if((e37732 instanceof Error)){
var e__36541__auto____$7 = e37732;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$7;
}
} else {
throw e37732;

}
}} else {
throw e__36541__auto____$6;
}
} else {
throw e37731;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37708){if((e37708 instanceof Error)){
var e__36541__auto____$6 = e37708;
if((e__36541__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === false)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === true)){
try{var ocr_37662_0__37688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_0__37688,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37730){if((e37730 instanceof Error)){
var e__36541__auto____$7 = e37730;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$7;
}
} else {
throw e37730;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37729){if((e37729 instanceof Error)){
var e__36541__auto____$7 = e37729;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$7;
}
} else {
throw e37729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37709){if((e37709 instanceof Error)){
var e__36541__auto____$7 = e37709;
if((e__36541__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === true)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === false)){
try{var ocr_37662_0__37688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_37662_0__37688,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37728){if((e37728 instanceof Error)){
var e__36541__auto____$8 = e37728;
if((e__36541__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$8;
}
} else {
throw e37728;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37722){if((e37722 instanceof Error)){
var e__36541__auto____$8 = e37722;
if((e__36541__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === true)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37726){if((e37726 instanceof Error)){
var e__36541__auto____$9 = e37726;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37727){if((e37727 instanceof Error)){
var e__36541__auto____$10 = e37727;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$10;
}
} else {
throw e37727;

}
}} else {
throw e__36541__auto____$9;
}
} else {
throw e37726;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37723){if((e37723 instanceof Error)){
var e__36541__auto____$9 = e37723;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === false)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37725){if((e37725 instanceof Error)){
var e__36541__auto____$10 = e37725;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$10;
}
} else {
throw e37725;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37724){if((e37724 instanceof Error)){
var e__36541__auto____$10 = e37724;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$10;
}
} else {
throw e37724;

}
}} else {
throw e__36541__auto____$9;
}
} else {
throw e37723;

}
}} else {
throw e__36541__auto____$8;
}
} else {
throw e37722;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37710){if((e37710 instanceof Error)){
var e__36541__auto____$8 = e37710;
if((e__36541__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === false)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === true)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37721){if((e37721 instanceof Error)){
var e__36541__auto____$9 = e37721;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$9;
}
} else {
throw e37721;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37720){if((e37720 instanceof Error)){
var e__36541__auto____$9 = e37720;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$9;
}
} else {
throw e37720;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37711){if((e37711 instanceof Error)){
var e__36541__auto____$9 = e37711;
if((e__36541__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === true)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === false)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37719){if((e37719 instanceof Error)){
var e__36541__auto____$10 = e37719;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$10;
}
} else {
throw e37719;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37718){if((e37718 instanceof Error)){
var e__36541__auto____$10 = e37718;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$10;
}
} else {
throw e37718;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37712){if((e37712 instanceof Error)){
var e__36541__auto____$10 = e37712;
if((e__36541__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_37663_2__37699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(2));
if((ocr_37663_2__37699 === false)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === true)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37717){if((e37717 instanceof Error)){
var e__36541__auto____$11 = e37717;
if((e__36541__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$11;
}
} else {
throw e37717;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37714){if((e37714 instanceof Error)){
var e__36541__auto____$11 = e37714;
if((e__36541__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_37663_0__37697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(0));
if((ocr_37663_0__37697 === false)){
try{var ocr_37663_1__37698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37663,(1));
if((ocr_37663_1__37698 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37662,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37716){if((e37716 instanceof Error)){
var e__36541__auto____$12 = e37716;
if((e__36541__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$12;
}
} else {
throw e37716;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37715){if((e37715 instanceof Error)){
var e__36541__auto____$12 = e37715;
if((e__36541__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$12;
}
} else {
throw e37715;

}
}} else {
throw e__36541__auto____$11;
}
} else {
throw e37714;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37713){if((e37713 instanceof Error)){
var e__36541__auto____$11 = e37713;
if((e__36541__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$11;
}
} else {
throw e37713;

}
}} else {
throw e__36541__auto____$10;
}
} else {
throw e37712;

}
}} else {
throw e__36541__auto____$9;
}
} else {
throw e37711;

}
}} else {
throw e__36541__auto____$8;
}
} else {
throw e37710;

}
}} else {
throw e__36541__auto____$7;
}
} else {
throw e37709;

}
}} else {
throw e__36541__auto____$6;
}
} else {
throw e37708;

}
}} else {
throw e__36541__auto____$5;
}
} else {
throw e37707;

}
}} else {
throw e__36541__auto____$4;
}
} else {
throw e37706;

}
}} else {
throw e__36541__auto____$3;
}
} else {
throw e37705;

}
}} else {
throw e__36541__auto____$2;
}
} else {
throw e37704;

}
}} else {
throw e__36541__auto____$1;
}
} else {
throw e37703;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37702){if((e37702 instanceof Error)){
var e__36541__auto____$1 = e37702;
if((e__36541__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__36541__auto____$1;
}
} else {
throw e37702;

}
}} else {
throw e__36541__auto__;
}
} else {
throw e37701;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37700){if((e37700 instanceof Error)){
var e__36541__auto__ = e37700;
if((e__36541__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__36541__auto__;
}
} else {
throw e37700;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37757){
var vec__37758 = p__37757;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37758,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37756_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__37756_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37762){
var vec__37763 = p__37762;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37761_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__37761_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__37766 = cljs.core.rest(ins);
var G__37767 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__37766,G__37767) : posh.lib.q_analyze.just_qvars.call(null,G__37766,G__37767));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37768_SHARP_){
return cljs.core.zipmap(qvars,p1__37768_SHARP_);
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
var vec__37769 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__37945 = var$;
var G__37946 = dbvarmap;
var G__37947 = cljs.core.rest(dbeavs);
var$ = G__37945;
dbvarmap = G__37946;
dbeavs = G__37947;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__37772 = cljs.core.rest(vars);
var G__37773 = dbvarmap;
var G__37774 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__37772,G__37773,G__37774) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__37772,G__37773,G__37774));
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
var G__37948 = (n + (1));
var G__37949 = cljs.core.rest(xs__$1);
n = G__37948;
xs__$1 = G__37949;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37775_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__37775_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__37775_SHARP_) : type.call(null,p1__37775_SHARP_));
} else {
return p1__37775_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__37776 = cljs.core.rest(ins);
var G__37777 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__37776,G__37777) : posh.lib.q_analyze.make_dbarg_map.call(null,G__37776,G__37777));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37778){
var vec__37779 = p__37778;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37779,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37779,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__37783_SHARP_,p2__37782_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__37782_SHARP_)){
return p1__37783_SHARP_;
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
var pred__37787 = cljs.core._EQ_;
var expr__37788 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__37787.cljs$core$IFn$_invoke$arity$2 ? pred__37787.cljs$core$IFn$_invoke$arity$2((1),expr__37788) : pred__37787.call(null,(1),expr__37788)))){
return true;
} else {
if(cljs.core.truth_((pred__37787.cljs$core$IFn$_invoke$arity$2 ? pred__37787.cljs$core$IFn$_invoke$arity$2((3),expr__37788) : pred__37787.call(null,(3),expr__37788)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__37951 = cljs.core.first(remaining);
var G__37952 = cljs.core.rest(remaining);
clause = G__37951;
remaining = G__37952;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__37953 = cljs.core.first(remaining);
var G__37954 = cljs.core.rest(remaining);
clause = G__37953;
remaining = G__37954;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__37790(s__37791){
return (new cljs.core.LazySeq(null,(function (){
var s__37791__$1 = s__37791;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37791__$1);
if(temp__5735__auto__){
var s__37791__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37791__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37791__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37793 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37792 = (0);
while(true){
if((i__37792 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37792);
cljs.core.chunk_append(b__37793,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__37955 = (i__37792 + (1));
i__37792 = G__37955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37793),posh$lib$q_analyze$resolve_any_idents_$_iter__37790(cljs.core.chunk_rest(s__37791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37793),null);
}
} else {
var var_value = cljs.core.first(s__37791__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__37790(cljs.core.rest(s__37791__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37798){
var vec__37799 = p__37798;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37799,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37799,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37802){
var vec__37803 = p__37802;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37803,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37806){
var vec__37807 = p__37806;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37807,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37807,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37810){
var vec__37811 = p__37810;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__37815 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__37816 = cljs.core.vec(r);
var fexpr__37814 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__37814.cljs$core$IFn$_invoke$arity$2 ? fexpr__37814.cljs$core$IFn$_invoke$arity$2(G__37815,G__37816) : fexpr__37814.call(null,G__37815,G__37816));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37817){
var vec__37818 = p__37817;
var seq__37819 = cljs.core.seq(vec__37818);
var first__37820 = cljs.core.first(seq__37819);
var seq__37819__$1 = cljs.core.next(seq__37819);
var db = first__37820;
var eav = seq__37819__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37821){
var vec__37822 = p__37821;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37822,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__37796_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__37796_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__37796_SHARP_) : linked_qvars.call(null,p1__37796_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__37796_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__37797_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__37797_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__37797_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
