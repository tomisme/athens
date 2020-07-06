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
var G__22116 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22116) : stop_at_QMARK_.call(null,G__22116));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__22117 = stop_at_QMARK_;
var G__22118 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__22117,G__22118) : posh.lib.q_analyze.take_until.call(null,G__22117,G__22118));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__22120 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22120) : rest_at_QMARK_.call(null,G__22120));
}
})())){
return ls;
} else {
var G__22475 = rest_at_QMARK_;
var G__22476 = cljs.core.rest(ls);
rest_at_QMARK_ = G__22475;
ls = G__22476;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__22121 = split_at_QMARK_;
var G__22122 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__22121,G__22122) : posh.lib.q_analyze.split_list_at.call(null,G__22121,G__22122));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__22123 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__22123) : posh.lib.q_analyze.get_all_vars.call(null,G__22123));
})(),(function (){var G__22124 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__22124) : posh.lib.q_analyze.get_all_vars.call(null,G__22124));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__22125 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__22125) : posh.lib.q_analyze.get_all_vars.call(null,G__22125));
})(),cljs.core.first(query));
} else {
var G__22126 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__22126) : posh.lib.q_analyze.get_all_vars.call(null,G__22126));

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
var G__22127 = cljs.core.rest(eav);
var G__22128 = (n - (1));
var G__22129 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__22130 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__22127,G__22128,G__22129,G__22130) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__22127,G__22128,G__22129,G__22130));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__22131 = cljs.core.rest(eav);
var G__22132 = (n - (1));
var G__22133 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__22134 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__22131,G__22132,G__22133,G__22134) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__22131,G__22132,G__22133,G__22134));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__22135 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__22135) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__22135));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__22136 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__22136) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__22136));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__22140 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22140) : posh.lib.q_analyze.get_eavs.call(null,G__22140));
})(),(function (){var G__22141 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22141) : posh.lib.q_analyze.get_eavs.call(null,G__22141));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__22142 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22142) : posh.lib.q_analyze.get_eavs.call(null,G__22142));
})(),(function (){var G__22143 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22143) : posh.lib.q_analyze.get_eavs.call(null,G__22143));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__22144 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22144) : posh.lib.q_analyze.get_eavs.call(null,G__22144));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_22145 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_22145)) && ((cljs.core.count(ocr_22145) === 2)))){
try{var ocr_22145_0__22148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22145,(0));
if(((cljs.core.vector_QMARK_(ocr_22145_0__22148)) && ((cljs.core.count(ocr_22145_0__22148) === 5)))){
try{var ocr_22145_0__22148_0__22150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22145_0__22148,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22145_0__22148_0__22150,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22145_0__22148,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22145_0__22148,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22145_0__22148,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22145,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__22159 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22159) : posh.lib.q_analyze.get_eavs.call(null,G__22159));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e22158){if((e22158 instanceof Error)){
var e__21137__auto__ = e22158;
if((e__21137__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto__;
}
} else {
throw e22158;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22157){if((e22157 instanceof Error)){
var e__21137__auto__ = e22157;
if((e__21137__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto__;
}
} else {
throw e22157;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22155){if((e22155 instanceof Error)){
var e__21137__auto__ = e22155;
if((e__21137__auto__ === cljs.core.match.backtrack)){
var G__22156 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22156) : posh.lib.q_analyze.get_eavs.call(null,G__22156));
} else {
throw e__21137__auto__;
}
} else {
throw e22155;

}
}} else {
var G__22160 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__22160) : posh.lib.q_analyze.get_eavs.call(null,G__22160));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__22161){
var vec__22162 = p__22161;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22162,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22165_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__22165_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__22165_SHARP_);
} else {
return p1__22165_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__22166 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__22166) : posh.lib.q_analyze.count_qvars.call(null,G__22166));
})(),(function (){var G__22167 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__22167) : posh.lib.q_analyze.count_qvars.call(null,G__22167));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__22168 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__22168) : posh.lib.q_analyze.count_qvars.call(null,G__22168));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__22169(s__22170){
return (new cljs.core.LazySeq(null,(function (){
var s__22170__$1 = s__22170;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22170__$1);
if(temp__5735__auto__){
var s__22170__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22170__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__22170__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__22172 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__22171 = (0);
while(true){
if((i__22171 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__22171);
cljs.core.chunk_append(b__22172,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__22509 = (i__22171 + (1));
i__22171 = G__22509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22172),posh$lib$q_analyze$fill_qvar_set_$_iter__22169(cljs.core.chunk_rest(s__22170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22172),null);
}
} else {
var r = cljs.core.first(s__22170__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__22169(cljs.core.rest(s__22170__$2)));
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
return cljs.core.cons((function (){var G__22173 = cljs.core.first(seq1);
var G__22174 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22173,G__22174) : f.call(null,G__22173,G__22174));
})(),(function (){var G__22175 = f;
var G__22176 = cljs.core.rest(seq1);
var G__22177 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__22175,G__22176,G__22177) : posh.lib.q_analyze.seq_merge_with.call(null,G__22175,G__22176,G__22177));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__22180){
var vec__22181 = p__22180;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22181,(2),null);
var eav = vec__22181;
var vec__22184 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__22187(s__22188){
return (new cljs.core.LazySeq(null,(function (){
var s__22188__$1 = s__22188;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22188__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__22188__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__22187_$_iter__22189(s__22190){
return (new cljs.core.LazySeq(null,((function (s__22188__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (){
var s__22190__$1 = s__22190;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__22190__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__22190__$1,s__22188__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__22187_$_iter__22189_$_iter__22191(s__22192){
return (new cljs.core.LazySeq(null,((function (s__22190__$1,s__22188__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (){
var s__22192__$1 = s__22192;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__22192__$1);
if(temp__5735__auto____$2){
var s__22192__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__22192__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__22192__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__22194 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__22193 = (0);
while(true){
if((i__22193 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__22193);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__22193,s__22192__$1,s__22190__$1,s__22188__$1,vv,c__4580__auto__,size__4581__auto__,b__22194,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (p1__22178_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__22178_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__22193,s__22192__$1,s__22190__$1,s__22188__$1,vv,c__4580__auto__,size__4581__auto__,b__22194,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__22193,s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__22194,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (p__22195){
var vec__22196 = p__22195;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22196,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22196,(1),null);
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
});})(i__22193,s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__22194,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__22193,s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__22194,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (p1__22179_SHARP_){
if(cljs.core.truth_(p1__22179_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__22193,s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__22194,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__22194,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__22514 = (i__22193 + (1));
i__22193 = G__22514;
continue;
} else {
var G__22515 = (i__22193 + (1));
i__22193 = G__22515;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22194),posh$lib$q_analyze$pattern_from_eav__old_$_iter__22187_$_iter__22189_$_iter__22191(cljs.core.chunk_rest(s__22192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22194),null);
}
} else {
var vv = cljs.core.first(s__22192__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__22192__$1,s__22190__$1,s__22188__$1,vv,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (p1__22178_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__22178_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__22192__$1,s__22190__$1,s__22188__$1,vv,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,vv,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (p__22199){
var vec__22200 = p__22199;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22200,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22200,(1),null);
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
});})(s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,vv,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,exposed_qvars,vv,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav){
return (function (p1__22179_SHARP_){
if(cljs.core.truth_(p1__22179_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__22192__$1,s__22190__$1,s__22188__$1,wildcard_count,exposed_qvars,vv,s__22192__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__22187_$_iter__22189_$_iter__22191(cljs.core.rest(s__22192__$2)));
} else {
var G__22521 = cljs.core.rest(s__22192__$2);
s__22192__$1 = G__22521;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__22190__$1,s__22188__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,null,null));
});})(s__22190__$1,s__22188__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__22187_$_iter__22189(cljs.core.rest(s__22190__$1)));
} else {
var G__22522 = cljs.core.rest(s__22190__$1);
s__22190__$1 = G__22522;
continue;
}
} else {
return null;
}
break;
}
});})(s__22188__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
,null,null));
});})(s__22188__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__22184,qe,qa,qv,vec__22181,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__22187(cljs.core.rest(s__22188__$1)));
} else {
var G__22523 = cljs.core.rest(s__22188__$1);
s__22188__$1 = G__22523;
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
var ocr_22203 = cljs.core.vec(eav);
var ocr_22204 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_22203)) && ((cljs.core.count(ocr_22203) === 3)))){
try{var ocr_22203_0__22232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_0__22232,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22203_1__22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_1__22233,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22203_2__22234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_2__22234,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22308){if((e22308 instanceof Error)){
var e__21137__auto__ = e22308;
if((e__21137__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_22204)) && ((cljs.core.count(ocr_22204) === 3)))){
try{var ocr_22204_2__22237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22237 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22310){if((e22310 instanceof Error)){
var e__21137__auto____$1 = e22310;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22237 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22311){if((e22311 instanceof Error)){
var e__21137__auto____$2 = e22311;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$2;
}
} else {
throw e22311;

}
}} else {
throw e__21137__auto____$1;
}
} else {
throw e22310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22309){if((e22309 instanceof Error)){
var e__21137__auto____$1 = e22309;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22309;

}
}} else {
throw e__21137__auto__;
}
} else {
throw e22308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22303){if((e22303 instanceof Error)){
var e__21137__auto__ = e22303;
if((e__21137__auto__ === cljs.core.match.backtrack)){
try{var ocr_22203_2__22234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_2__22234,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_22204)) && ((cljs.core.count(ocr_22204) === 3)))){
try{var ocr_22204_1__22239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22239 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22306){if((e22306 instanceof Error)){
var e__21137__auto____$1 = e22306;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_22204_1__22239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22239 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22307){if((e22307 instanceof Error)){
var e__21137__auto____$2 = e22307;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$2;
}
} else {
throw e22307;

}
}} else {
throw e__21137__auto____$1;
}
} else {
throw e22306;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22305){if((e22305 instanceof Error)){
var e__21137__auto____$1 = e22305;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22305;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22304){if((e22304 instanceof Error)){
var e__21137__auto____$1 = e22304;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22304;

}
}} else {
throw e__21137__auto__;
}
} else {
throw e22303;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22245){if((e22245 instanceof Error)){
var e__21137__auto__ = e22245;
if((e__21137__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_22204)) && ((cljs.core.count(ocr_22204) === 3)))){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === false)){
try{var ocr_22203_1__22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_1__22233,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22203_2__22234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_2__22234,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22302){if((e22302 instanceof Error)){
var e__21137__auto____$1 = e22302;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22302;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22301){if((e22301 instanceof Error)){
var e__21137__auto____$1 = e22301;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22301;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22247){if((e22247 instanceof Error)){
var e__21137__auto____$1 = e22247;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === true)){
try{var ocr_22203_2__22234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_2__22234,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22203_1__22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_1__22233,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22298){if((e22298 instanceof Error)){
var e__21137__auto____$2 = e22298;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22299){if((e22299 instanceof Error)){
var e__21137__auto____$3 = e22299;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22300){if((e22300 instanceof Error)){
var e__21137__auto____$4 = e22300;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22300;

}
}} else {
throw e__21137__auto____$3;
}
} else {
throw e22299;

}
}} else {
throw e__21137__auto____$2;
}
} else {
throw e22298;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22297){if((e22297 instanceof Error)){
var e__21137__auto____$2 = e22297;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$2;
}
} else {
throw e22297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22248){if((e22248 instanceof Error)){
var e__21137__auto____$2 = e22248;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === false)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
try{var ocr_22203_2__22234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_2__22234,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22296){if((e22296 instanceof Error)){
var e__21137__auto____$3 = e22296;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$3;
}
} else {
throw e22296;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22293){if((e22293 instanceof Error)){
var e__21137__auto____$3 = e22293;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
try{var ocr_22203_2__22234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_2__22234,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22295){if((e22295 instanceof Error)){
var e__21137__auto____$4 = e22295;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22295;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22294){if((e22294 instanceof Error)){
var e__21137__auto____$4 = e22294;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22294;

}
}} else {
throw e__21137__auto____$3;
}
} else {
throw e22293;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22249){if((e22249 instanceof Error)){
var e__21137__auto____$3 = e22249;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === true)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === true)){
try{var ocr_22203_1__22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_1__22233,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22292){if((e22292 instanceof Error)){
var e__21137__auto____$4 = e22292;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22292;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22291){if((e22291 instanceof Error)){
var e__21137__auto____$4 = e22291;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22291;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22250){if((e22250 instanceof Error)){
var e__21137__auto____$4 = e22250;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === false)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === true)){
try{var ocr_22203_1__22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_1__22233,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22290){if((e22290 instanceof Error)){
var e__21137__auto____$5 = e22290;
if((e__21137__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$5;
}
} else {
throw e22290;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22289){if((e22289 instanceof Error)){
var e__21137__auto____$5 = e22289;
if((e__21137__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$5;
}
} else {
throw e22289;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22251){if((e22251 instanceof Error)){
var e__21137__auto____$5 = e22251;
if((e__21137__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === true)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === false)){
try{var ocr_22203_1__22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_1__22233,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22288){if((e22288 instanceof Error)){
var e__21137__auto____$6 = e22288;
if((e__21137__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$6;
}
} else {
throw e22288;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22287){if((e22287 instanceof Error)){
var e__21137__auto____$6 = e22287;
if((e__21137__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$6;
}
} else {
throw e22287;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22252){if((e22252 instanceof Error)){
var e__21137__auto____$6 = e22252;
if((e__21137__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === false)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === false)){
try{var ocr_22203_1__22233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_1__22233,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22286){if((e22286 instanceof Error)){
var e__21137__auto____$7 = e22286;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$7;
}
} else {
throw e22286;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22285){if((e22285 instanceof Error)){
var e__21137__auto____$7 = e22285;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$7;
}
} else {
throw e22285;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22253){if((e22253 instanceof Error)){
var e__21137__auto____$7 = e22253;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === true)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
try{var ocr_22203_0__22232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_0__22232,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22284){if((e22284 instanceof Error)){
var e__21137__auto____$8 = e22284;
if((e__21137__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$8;
}
} else {
throw e22284;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22283){if((e22283 instanceof Error)){
var e__21137__auto____$8 = e22283;
if((e__21137__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$8;
}
} else {
throw e22283;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22254){if((e22254 instanceof Error)){
var e__21137__auto____$8 = e22254;
if((e__21137__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === false)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
try{var ocr_22203_0__22232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_0__22232,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22282){if((e22282 instanceof Error)){
var e__21137__auto____$9 = e22282;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$9;
}
} else {
throw e22282;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22281){if((e22281 instanceof Error)){
var e__21137__auto____$9 = e22281;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$9;
}
} else {
throw e22281;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22255){if((e22255 instanceof Error)){
var e__21137__auto____$9 = e22255;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === true)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
try{var ocr_22203_0__22232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_0__22232,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22280){if((e22280 instanceof Error)){
var e__21137__auto____$10 = e22280;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$10;
}
} else {
throw e22280;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22279){if((e22279 instanceof Error)){
var e__21137__auto____$10 = e22279;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$10;
}
} else {
throw e22279;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22256){if((e22256 instanceof Error)){
var e__21137__auto____$10 = e22256;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === false)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
try{var ocr_22203_0__22232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22203_0__22232,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22278){if((e22278 instanceof Error)){
var e__21137__auto____$11 = e22278;
if((e__21137__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$11;
}
} else {
throw e22278;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22277){if((e22277 instanceof Error)){
var e__21137__auto____$11 = e22277;
if((e__21137__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$11;
}
} else {
throw e22277;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22257){if((e22257 instanceof Error)){
var e__21137__auto____$11 = e22257;
if((e__21137__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === true)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === true)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22276){if((e22276 instanceof Error)){
var e__21137__auto____$12 = e22276;
if((e__21137__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$12;
}
} else {
throw e22276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22271){if((e22271 instanceof Error)){
var e__21137__auto____$12 = e22271;
if((e__21137__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === false)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22275){if((e22275 instanceof Error)){
var e__21137__auto____$13 = e22275;
if((e__21137__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$13;
}
} else {
throw e22275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22272){if((e22272 instanceof Error)){
var e__21137__auto____$13 = e22272;
if((e__21137__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === true)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22274){if((e22274 instanceof Error)){
var e__21137__auto____$14 = e22274;
if((e__21137__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$14;
}
} else {
throw e22274;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22273){if((e22273 instanceof Error)){
var e__21137__auto____$14 = e22273;
if((e__21137__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$14;
}
} else {
throw e22273;

}
}} else {
throw e__21137__auto____$13;
}
} else {
throw e22272;

}
}} else {
throw e__21137__auto____$12;
}
} else {
throw e22271;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22258){if((e22258 instanceof Error)){
var e__21137__auto____$12 = e22258;
if((e__21137__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === false)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === true)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22270){if((e22270 instanceof Error)){
var e__21137__auto____$13 = e22270;
if((e__21137__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$13;
}
} else {
throw e22270;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22269){if((e22269 instanceof Error)){
var e__21137__auto____$13 = e22269;
if((e__21137__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$13;
}
} else {
throw e22269;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22259){if((e22259 instanceof Error)){
var e__21137__auto____$13 = e22259;
if((e__21137__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === true)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === false)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22268){if((e22268 instanceof Error)){
var e__21137__auto____$14 = e22268;
if((e__21137__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$14;
}
} else {
throw e22268;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22267){if((e22267 instanceof Error)){
var e__21137__auto____$14 = e22267;
if((e__21137__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$14;
}
} else {
throw e22267;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22260){if((e22260 instanceof Error)){
var e__21137__auto____$14 = e22260;
if((e__21137__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_22204_2__22243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(2));
if((ocr_22204_2__22243 === false)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === true)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22266){if((e22266 instanceof Error)){
var e__21137__auto____$15 = e22266;
if((e__21137__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$15;
}
} else {
throw e22266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22262){if((e22262 instanceof Error)){
var e__21137__auto____$15 = e22262;
if((e__21137__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_22204_0__22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(0));
if((ocr_22204_0__22241 === false)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22264){if((e22264 instanceof Error)){
var e__21137__auto____$16 = e22264;
if((e__21137__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_22204_1__22242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22204,(1));
if((ocr_22204_1__22242 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22203,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22265){if((e22265 instanceof Error)){
var e__21137__auto____$17 = e22265;
if((e__21137__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$17;
}
} else {
throw e22265;

}
}} else {
throw e__21137__auto____$16;
}
} else {
throw e22264;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22263){if((e22263 instanceof Error)){
var e__21137__auto____$16 = e22263;
if((e__21137__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$16;
}
} else {
throw e22263;

}
}} else {
throw e__21137__auto____$15;
}
} else {
throw e22262;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22261){if((e22261 instanceof Error)){
var e__21137__auto____$15 = e22261;
if((e__21137__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$15;
}
} else {
throw e22261;

}
}} else {
throw e__21137__auto____$14;
}
} else {
throw e22260;

}
}} else {
throw e__21137__auto____$13;
}
} else {
throw e22259;

}
}} else {
throw e__21137__auto____$12;
}
} else {
throw e22258;

}
}} else {
throw e__21137__auto____$11;
}
} else {
throw e22257;

}
}} else {
throw e__21137__auto____$10;
}
} else {
throw e22256;

}
}} else {
throw e__21137__auto____$9;
}
} else {
throw e22255;

}
}} else {
throw e__21137__auto____$8;
}
} else {
throw e22254;

}
}} else {
throw e__21137__auto____$7;
}
} else {
throw e22253;

}
}} else {
throw e__21137__auto____$6;
}
} else {
throw e22252;

}
}} else {
throw e__21137__auto____$5;
}
} else {
throw e22251;

}
}} else {
throw e__21137__auto____$4;
}
} else {
throw e22250;

}
}} else {
throw e__21137__auto____$3;
}
} else {
throw e22249;

}
}} else {
throw e__21137__auto____$2;
}
} else {
throw e22248;

}
}} else {
throw e__21137__auto____$1;
}
} else {
throw e22247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22246){if((e22246 instanceof Error)){
var e__21137__auto____$1 = e22246;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22246;

}
}} else {
throw e__21137__auto__;
}
} else {
throw e22245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22244){if((e22244 instanceof Error)){
var e__21137__auto__ = e22244;
if((e__21137__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__21137__auto__;
}
} else {
throw e22244;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_22312 = cljs.core.vec(eav);
var ocr_22313 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_22312)) && ((cljs.core.count(ocr_22312) === 3)))){
try{var ocr_22312_0__22338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_0__22338,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22312_1__22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_1__22339,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22312_2__22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_2__22340,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e22402){if((e22402 instanceof Error)){
var e__21137__auto__ = e22402;
if((e__21137__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_22313)) && ((cljs.core.count(ocr_22313) === 3)))){
try{var ocr_22313_2__22343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22343 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22404){if((e22404 instanceof Error)){
var e__21137__auto____$1 = e22404;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22343 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22405){if((e22405 instanceof Error)){
var e__21137__auto____$2 = e22405;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$2;
}
} else {
throw e22405;

}
}} else {
throw e__21137__auto____$1;
}
} else {
throw e22404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22403){if((e22403 instanceof Error)){
var e__21137__auto____$1 = e22403;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22403;

}
}} else {
throw e__21137__auto__;
}
} else {
throw e22402;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22397){if((e22397 instanceof Error)){
var e__21137__auto__ = e22397;
if((e__21137__auto__ === cljs.core.match.backtrack)){
try{var ocr_22312_2__22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_2__22340,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_22313)) && ((cljs.core.count(ocr_22313) === 3)))){
try{var ocr_22313_1__22345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22345 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22400){if((e22400 instanceof Error)){
var e__21137__auto____$1 = e22400;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_22313_1__22345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22345 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22401){if((e22401 instanceof Error)){
var e__21137__auto____$2 = e22401;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$2;
}
} else {
throw e22401;

}
}} else {
throw e__21137__auto____$1;
}
} else {
throw e22400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22399){if((e22399 instanceof Error)){
var e__21137__auto____$1 = e22399;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22399;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22398){if((e22398 instanceof Error)){
var e__21137__auto____$1 = e22398;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22398;

}
}} else {
throw e__21137__auto__;
}
} else {
throw e22397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22351){if((e22351 instanceof Error)){
var e__21137__auto__ = e22351;
if((e__21137__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_22313)) && ((cljs.core.count(ocr_22313) === 3)))){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === false)){
try{var ocr_22312_1__22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_1__22339,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22312_2__22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_2__22340,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22396){if((e22396 instanceof Error)){
var e__21137__auto____$1 = e22396;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22395){if((e22395 instanceof Error)){
var e__21137__auto____$1 = e22395;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22395;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22353){if((e22353 instanceof Error)){
var e__21137__auto____$1 = e22353;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === true)){
try{var ocr_22312_2__22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_2__22340,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_22312_1__22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_1__22339,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22392){if((e22392 instanceof Error)){
var e__21137__auto____$2 = e22392;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22393){if((e22393 instanceof Error)){
var e__21137__auto____$3 = e22393;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22394){if((e22394 instanceof Error)){
var e__21137__auto____$4 = e22394;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22394;

}
}} else {
throw e__21137__auto____$3;
}
} else {
throw e22393;

}
}} else {
throw e__21137__auto____$2;
}
} else {
throw e22392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22391){if((e22391 instanceof Error)){
var e__21137__auto____$2 = e22391;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$2;
}
} else {
throw e22391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22354){if((e22354 instanceof Error)){
var e__21137__auto____$2 = e22354;
if((e__21137__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === false)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === true)){
try{var ocr_22312_2__22340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_2__22340,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22390){if((e22390 instanceof Error)){
var e__21137__auto____$3 = e22390;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$3;
}
} else {
throw e22390;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22389){if((e22389 instanceof Error)){
var e__21137__auto____$3 = e22389;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$3;
}
} else {
throw e22389;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22355){if((e22355 instanceof Error)){
var e__21137__auto____$3 = e22355;
if((e__21137__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === true)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === true)){
try{var ocr_22312_1__22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_1__22339,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22388){if((e22388 instanceof Error)){
var e__21137__auto____$4 = e22388;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22388;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22387){if((e22387 instanceof Error)){
var e__21137__auto____$4 = e22387;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$4;
}
} else {
throw e22387;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22356){if((e22356 instanceof Error)){
var e__21137__auto____$4 = e22356;
if((e__21137__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === false)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === true)){
try{var ocr_22312_1__22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_1__22339,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22386){if((e22386 instanceof Error)){
var e__21137__auto____$5 = e22386;
if((e__21137__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$5;
}
} else {
throw e22386;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22385){if((e22385 instanceof Error)){
var e__21137__auto____$5 = e22385;
if((e__21137__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$5;
}
} else {
throw e22385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22357){if((e22357 instanceof Error)){
var e__21137__auto____$5 = e22357;
if((e__21137__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === true)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === false)){
try{var ocr_22312_1__22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_1__22339,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22384){if((e22384 instanceof Error)){
var e__21137__auto____$6 = e22384;
if((e__21137__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$6;
}
} else {
throw e22384;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22381){if((e22381 instanceof Error)){
var e__21137__auto____$6 = e22381;
if((e__21137__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === true)){
try{var ocr_22312_0__22338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_0__22338,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22383){if((e22383 instanceof Error)){
var e__21137__auto____$7 = e22383;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$7;
}
} else {
throw e22383;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22382){if((e22382 instanceof Error)){
var e__21137__auto____$7 = e22382;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$7;
}
} else {
throw e22382;

}
}} else {
throw e__21137__auto____$6;
}
} else {
throw e22381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22358){if((e22358 instanceof Error)){
var e__21137__auto____$6 = e22358;
if((e__21137__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === false)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === true)){
try{var ocr_22312_0__22338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_0__22338,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22380){if((e22380 instanceof Error)){
var e__21137__auto____$7 = e22380;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$7;
}
} else {
throw e22380;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22379){if((e22379 instanceof Error)){
var e__21137__auto____$7 = e22379;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$7;
}
} else {
throw e22379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22359){if((e22359 instanceof Error)){
var e__21137__auto____$7 = e22359;
if((e__21137__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === true)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === false)){
try{var ocr_22312_0__22338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_22312_0__22338,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22378){if((e22378 instanceof Error)){
var e__21137__auto____$8 = e22378;
if((e__21137__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$8;
}
} else {
throw e22378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22372){if((e22372 instanceof Error)){
var e__21137__auto____$8 = e22372;
if((e__21137__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === true)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22376){if((e22376 instanceof Error)){
var e__21137__auto____$9 = e22376;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22377){if((e22377 instanceof Error)){
var e__21137__auto____$10 = e22377;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$10;
}
} else {
throw e22377;

}
}} else {
throw e__21137__auto____$9;
}
} else {
throw e22376;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22373){if((e22373 instanceof Error)){
var e__21137__auto____$9 = e22373;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === false)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22375){if((e22375 instanceof Error)){
var e__21137__auto____$10 = e22375;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$10;
}
} else {
throw e22375;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22374){if((e22374 instanceof Error)){
var e__21137__auto____$10 = e22374;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$10;
}
} else {
throw e22374;

}
}} else {
throw e__21137__auto____$9;
}
} else {
throw e22373;

}
}} else {
throw e__21137__auto____$8;
}
} else {
throw e22372;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22360){if((e22360 instanceof Error)){
var e__21137__auto____$8 = e22360;
if((e__21137__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === false)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === true)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22371){if((e22371 instanceof Error)){
var e__21137__auto____$9 = e22371;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$9;
}
} else {
throw e22371;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22370){if((e22370 instanceof Error)){
var e__21137__auto____$9 = e22370;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$9;
}
} else {
throw e22370;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22361){if((e22361 instanceof Error)){
var e__21137__auto____$9 = e22361;
if((e__21137__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === true)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === false)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22369){if((e22369 instanceof Error)){
var e__21137__auto____$10 = e22369;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$10;
}
} else {
throw e22369;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22368){if((e22368 instanceof Error)){
var e__21137__auto____$10 = e22368;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$10;
}
} else {
throw e22368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22362){if((e22362 instanceof Error)){
var e__21137__auto____$10 = e22362;
if((e__21137__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_22313_2__22349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(2));
if((ocr_22313_2__22349 === false)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === true)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22367){if((e22367 instanceof Error)){
var e__21137__auto____$11 = e22367;
if((e__21137__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$11;
}
} else {
throw e22367;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22364){if((e22364 instanceof Error)){
var e__21137__auto____$11 = e22364;
if((e__21137__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_22313_0__22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(0));
if((ocr_22313_0__22347 === false)){
try{var ocr_22313_1__22348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22313,(1));
if((ocr_22313_1__22348 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_22312,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22366){if((e22366 instanceof Error)){
var e__21137__auto____$12 = e22366;
if((e__21137__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$12;
}
} else {
throw e22366;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22365){if((e22365 instanceof Error)){
var e__21137__auto____$12 = e22365;
if((e__21137__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$12;
}
} else {
throw e22365;

}
}} else {
throw e__21137__auto____$11;
}
} else {
throw e22364;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22363){if((e22363 instanceof Error)){
var e__21137__auto____$11 = e22363;
if((e__21137__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$11;
}
} else {
throw e22363;

}
}} else {
throw e__21137__auto____$10;
}
} else {
throw e22362;

}
}} else {
throw e__21137__auto____$9;
}
} else {
throw e22361;

}
}} else {
throw e__21137__auto____$8;
}
} else {
throw e22360;

}
}} else {
throw e__21137__auto____$7;
}
} else {
throw e22359;

}
}} else {
throw e__21137__auto____$6;
}
} else {
throw e22358;

}
}} else {
throw e__21137__auto____$5;
}
} else {
throw e22357;

}
}} else {
throw e__21137__auto____$4;
}
} else {
throw e22356;

}
}} else {
throw e__21137__auto____$3;
}
} else {
throw e22355;

}
}} else {
throw e__21137__auto____$2;
}
} else {
throw e22354;

}
}} else {
throw e__21137__auto____$1;
}
} else {
throw e22353;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22352){if((e22352 instanceof Error)){
var e__21137__auto____$1 = e22352;
if((e__21137__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21137__auto____$1;
}
} else {
throw e22352;

}
}} else {
throw e__21137__auto__;
}
} else {
throw e22351;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22350){if((e22350 instanceof Error)){
var e__21137__auto__ = e22350;
if((e__21137__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__21137__auto__;
}
} else {
throw e22350;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22407){
var vec__22408 = p__22407;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22408,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__22406_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__22406_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22412){
var vec__22413 = p__22412;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22413,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__22411_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__22411_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__22416 = cljs.core.rest(ins);
var G__22417 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__22416,G__22417) : posh.lib.q_analyze.just_qvars.call(null,G__22416,G__22417));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22418_SHARP_){
return cljs.core.zipmap(qvars,p1__22418_SHARP_);
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
var vec__22419 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__22626 = var$;
var G__22627 = dbvarmap;
var G__22628 = cljs.core.rest(dbeavs);
var$ = G__22626;
dbvarmap = G__22627;
dbeavs = G__22628;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__22422 = cljs.core.rest(vars);
var G__22423 = dbvarmap;
var G__22424 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__22422,G__22423,G__22424) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__22422,G__22423,G__22424));
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
var G__22639 = (n + (1));
var G__22640 = cljs.core.rest(xs__$1);
n = G__22639;
xs__$1 = G__22640;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22425_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__22425_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__22425_SHARP_) : type.call(null,p1__22425_SHARP_));
} else {
return p1__22425_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__22426 = cljs.core.rest(ins);
var G__22427 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__22426,G__22427) : posh.lib.q_analyze.make_dbarg_map.call(null,G__22426,G__22427));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22428){
var vec__22429 = p__22428;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22429,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22429,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__22433_SHARP_,p2__22432_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__22432_SHARP_)){
return p1__22433_SHARP_;
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
var pred__22437 = cljs.core._EQ_;
var expr__22438 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__22437.cljs$core$IFn$_invoke$arity$2 ? pred__22437.cljs$core$IFn$_invoke$arity$2((1),expr__22438) : pred__22437.call(null,(1),expr__22438)))){
return true;
} else {
if(cljs.core.truth_((pred__22437.cljs$core$IFn$_invoke$arity$2 ? pred__22437.cljs$core$IFn$_invoke$arity$2((3),expr__22438) : pred__22437.call(null,(3),expr__22438)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__22695 = cljs.core.first(remaining);
var G__22696 = cljs.core.rest(remaining);
clause = G__22695;
remaining = G__22696;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__22698 = cljs.core.first(remaining);
var G__22699 = cljs.core.rest(remaining);
clause = G__22698;
remaining = G__22699;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__22440(s__22441){
return (new cljs.core.LazySeq(null,(function (){
var s__22441__$1 = s__22441;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__22441__$1);
if(temp__5735__auto__){
var s__22441__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22441__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__22441__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__22443 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__22442 = (0);
while(true){
if((i__22442 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__22442);
cljs.core.chunk_append(b__22443,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__22709 = (i__22442 + (1));
i__22442 = G__22709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22443),posh$lib$q_analyze$resolve_any_idents_$_iter__22440(cljs.core.chunk_rest(s__22441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22443),null);
}
} else {
var var_value = cljs.core.first(s__22441__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__22440(cljs.core.rest(s__22441__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22448){
var vec__22449 = p__22448;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22449,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22449,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22452){
var vec__22453 = p__22452;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22453,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22453,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22456){
var vec__22457 = p__22456;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22457,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22457,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22460){
var vec__22461 = p__22460;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22461,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22461,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__22465 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__22466 = cljs.core.vec(r);
var fexpr__22464 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__22464.cljs$core$IFn$_invoke$arity$2 ? fexpr__22464.cljs$core$IFn$_invoke$arity$2(G__22465,G__22466) : fexpr__22464.call(null,G__22465,G__22466));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22467){
var vec__22468 = p__22467;
var seq__22469 = cljs.core.seq(vec__22468);
var first__22470 = cljs.core.first(seq__22469);
var seq__22469__$1 = cljs.core.next(seq__22469);
var db = first__22470;
var eav = seq__22469__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22471){
var vec__22472 = p__22471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__22446_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__22446_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__22446_SHARP_) : linked_qvars.call(null,p1__22446_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__22446_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__22447_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__22447_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__22447_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
