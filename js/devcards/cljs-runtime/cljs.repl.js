goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45114){
var map__45115 = p__45114;
var map__45115__$1 = (((((!((map__45115 == null))))?(((((map__45115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45115):map__45115);
var m = map__45115__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45115__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45118_45322 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45119_45323 = null;
var count__45120_45324 = (0);
var i__45121_45325 = (0);
while(true){
if((i__45121_45325 < count__45120_45324)){
var f_45327 = chunk__45119_45323.cljs$core$IIndexed$_nth$arity$2(null,i__45121_45325);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45327], 0));


var G__45328 = seq__45118_45322;
var G__45329 = chunk__45119_45323;
var G__45330 = count__45120_45324;
var G__45331 = (i__45121_45325 + (1));
seq__45118_45322 = G__45328;
chunk__45119_45323 = G__45329;
count__45120_45324 = G__45330;
i__45121_45325 = G__45331;
continue;
} else {
var temp__5735__auto___45332 = cljs.core.seq(seq__45118_45322);
if(temp__5735__auto___45332){
var seq__45118_45333__$1 = temp__5735__auto___45332;
if(cljs.core.chunked_seq_QMARK_(seq__45118_45333__$1)){
var c__4609__auto___45334 = cljs.core.chunk_first(seq__45118_45333__$1);
var G__45335 = cljs.core.chunk_rest(seq__45118_45333__$1);
var G__45336 = c__4609__auto___45334;
var G__45337 = cljs.core.count(c__4609__auto___45334);
var G__45338 = (0);
seq__45118_45322 = G__45335;
chunk__45119_45323 = G__45336;
count__45120_45324 = G__45337;
i__45121_45325 = G__45338;
continue;
} else {
var f_45339 = cljs.core.first(seq__45118_45333__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45339], 0));


var G__45340 = cljs.core.next(seq__45118_45333__$1);
var G__45341 = null;
var G__45342 = (0);
var G__45343 = (0);
seq__45118_45322 = G__45340;
chunk__45119_45323 = G__45341;
count__45120_45324 = G__45342;
i__45121_45325 = G__45343;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45344 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45344], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45344)))?cljs.core.second(arglists_45344):arglists_45344)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45122_45347 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45123_45348 = null;
var count__45124_45349 = (0);
var i__45125_45350 = (0);
while(true){
if((i__45125_45350 < count__45124_45349)){
var vec__45137_45351 = chunk__45123_45348.cljs$core$IIndexed$_nth$arity$2(null,i__45125_45350);
var name_45352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137_45351,(0),null);
var map__45140_45353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137_45351,(1),null);
var map__45140_45354__$1 = (((((!((map__45140_45353 == null))))?(((((map__45140_45353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45140_45353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45140_45353):map__45140_45353);
var doc_45355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140_45354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140_45354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45352], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45356], 0));

if(cljs.core.truth_(doc_45355)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45355], 0));
} else {
}


var G__45357 = seq__45122_45347;
var G__45358 = chunk__45123_45348;
var G__45359 = count__45124_45349;
var G__45360 = (i__45125_45350 + (1));
seq__45122_45347 = G__45357;
chunk__45123_45348 = G__45358;
count__45124_45349 = G__45359;
i__45125_45350 = G__45360;
continue;
} else {
var temp__5735__auto___45361 = cljs.core.seq(seq__45122_45347);
if(temp__5735__auto___45361){
var seq__45122_45362__$1 = temp__5735__auto___45361;
if(cljs.core.chunked_seq_QMARK_(seq__45122_45362__$1)){
var c__4609__auto___45363 = cljs.core.chunk_first(seq__45122_45362__$1);
var G__45364 = cljs.core.chunk_rest(seq__45122_45362__$1);
var G__45365 = c__4609__auto___45363;
var G__45366 = cljs.core.count(c__4609__auto___45363);
var G__45367 = (0);
seq__45122_45347 = G__45364;
chunk__45123_45348 = G__45365;
count__45124_45349 = G__45366;
i__45125_45350 = G__45367;
continue;
} else {
var vec__45142_45368 = cljs.core.first(seq__45122_45362__$1);
var name_45369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142_45368,(0),null);
var map__45145_45370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142_45368,(1),null);
var map__45145_45371__$1 = (((((!((map__45145_45370 == null))))?(((((map__45145_45370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45145_45370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45145_45370):map__45145_45370);
var doc_45372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45145_45371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45145_45371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45369], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45373], 0));

if(cljs.core.truth_(doc_45372)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45372], 0));
} else {
}


var G__45375 = cljs.core.next(seq__45122_45362__$1);
var G__45376 = null;
var G__45377 = (0);
var G__45378 = (0);
seq__45122_45347 = G__45375;
chunk__45123_45348 = G__45376;
count__45124_45349 = G__45377;
i__45125_45350 = G__45378;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45151 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45152 = null;
var count__45153 = (0);
var i__45154 = (0);
while(true){
if((i__45154 < count__45153)){
var role = chunk__45152.cljs$core$IIndexed$_nth$arity$2(null,i__45154);
var temp__5735__auto___45379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45379__$1)){
var spec_45380 = temp__5735__auto___45379__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45380)], 0));
} else {
}


var G__45381 = seq__45151;
var G__45382 = chunk__45152;
var G__45383 = count__45153;
var G__45384 = (i__45154 + (1));
seq__45151 = G__45381;
chunk__45152 = G__45382;
count__45153 = G__45383;
i__45154 = G__45384;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45151);
if(temp__5735__auto____$1){
var seq__45151__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45151__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45151__$1);
var G__45385 = cljs.core.chunk_rest(seq__45151__$1);
var G__45386 = c__4609__auto__;
var G__45387 = cljs.core.count(c__4609__auto__);
var G__45388 = (0);
seq__45151 = G__45385;
chunk__45152 = G__45386;
count__45153 = G__45387;
i__45154 = G__45388;
continue;
} else {
var role = cljs.core.first(seq__45151__$1);
var temp__5735__auto___45389__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45389__$2)){
var spec_45390 = temp__5735__auto___45389__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45390)], 0));
} else {
}


var G__45391 = cljs.core.next(seq__45151__$1);
var G__45392 = null;
var G__45393 = (0);
var G__45394 = (0);
seq__45151 = G__45391;
chunk__45152 = G__45392;
count__45153 = G__45393;
i__45154 = G__45394;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45396 = cljs.core.ex_cause(t);
via = G__45395;
t = G__45396;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45175 = datafied_throwable;
var map__45175__$1 = (((((!((map__45175 == null))))?(((((map__45175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45175):map__45175);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45175__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45175__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45175__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45176 = cljs.core.last(via);
var map__45176__$1 = (((((!((map__45176 == null))))?(((((map__45176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45176):map__45176);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45176__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45176__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45176__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45177 = data;
var map__45177__$1 = (((((!((map__45177 == null))))?(((((map__45177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45177):map__45177);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45178 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45178__$1 = (((((!((map__45178 == null))))?(((((map__45178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45178):map__45178);
var top_data = map__45178__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45191 = phase;
var G__45191__$1 = (((G__45191 instanceof cljs.core.Keyword))?G__45191.fqn:null);
switch (G__45191__$1) {
case "read-source":
var map__45197 = data;
var map__45197__$1 = (((((!((map__45197 == null))))?(((((map__45197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45197):map__45197);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45207 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45207__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45207,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45207);
var G__45207__$2 = (cljs.core.truth_((function (){var fexpr__45208 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45208.cljs$core$IFn$_invoke$arity$1 ? fexpr__45208.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45208.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45207__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45207__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45207__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45207__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45209 = top_data;
var G__45209__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45209,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45209);
var G__45209__$2 = (cljs.core.truth_((function (){var fexpr__45214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45214.cljs$core$IFn$_invoke$arity$1 ? fexpr__45214.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45214.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45209__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45209__$1);
var G__45209__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45209__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45209__$2);
var G__45209__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45209__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45209__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45209__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45209__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45226 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(3),null);
var G__45238 = top_data;
var G__45238__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45238,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45238);
var G__45238__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45238__$1);
var G__45238__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45238__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45238__$2);
var G__45238__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45238__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45238__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45238__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45238__$4;
}

break;
case "execution":
var vec__45239 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45239,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45239,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45239,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45239,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45174_SHARP_){
var or__4185__auto__ = (p1__45174_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45243 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45243.cljs$core$IFn$_invoke$arity$1 ? fexpr__45243.cljs$core$IFn$_invoke$arity$1(p1__45174_SHARP_) : fexpr__45243.call(null,p1__45174_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45248 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45248__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45248);
var G__45248__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45248__$1);
var G__45248__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45248__$2);
var G__45248__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45248__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45248__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45248__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45191__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45268){
var map__45269 = p__45268;
var map__45269__$1 = (((((!((map__45269 == null))))?(((((map__45269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45269):map__45269);
var triage_data = map__45269__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45269__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45283 = phase;
var G__45283__$1 = (((G__45283 instanceof cljs.core.Keyword))?G__45283.fqn:null);
switch (G__45283__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45284 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45286 = loc;
var G__45287 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45288_45407 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45289_45408 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45290_45409 = true;
var _STAR_print_fn_STAR__temp_val__45291_45410 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45290_45409);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45291_45410);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45263_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45263_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45289_45408);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45288_45407);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45284,G__45285,G__45286,G__45287) : format.call(null,G__45284,G__45285,G__45286,G__45287));

break;
case "macroexpansion":
var G__45292 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45293 = cause_type;
var G__45294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45295 = loc;
var G__45296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45292,G__45293,G__45294,G__45295,G__45296) : format.call(null,G__45292,G__45293,G__45294,G__45295,G__45296));

break;
case "compile-syntax-check":
var G__45298 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45299 = cause_type;
var G__45300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45301 = loc;
var G__45302 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45298,G__45299,G__45300,G__45301,G__45302) : format.call(null,G__45298,G__45299,G__45300,G__45301,G__45302));

break;
case "compilation":
var G__45303 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45304 = cause_type;
var G__45305 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45306 = loc;
var G__45307 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45303,G__45304,G__45305,G__45306,G__45307) : format.call(null,G__45303,G__45304,G__45305,G__45306,G__45307));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45308 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45309 = symbol;
var G__45310 = loc;
var G__45311 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45312_45412 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45313_45413 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45314_45414 = true;
var _STAR_print_fn_STAR__temp_val__45315_45415 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45314_45414);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45315_45415);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45267_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45267_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45313_45413);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45312_45412);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45308,G__45309,G__45310,G__45311) : format.call(null,G__45308,G__45309,G__45310,G__45311));
} else {
var G__45317 = "Execution error%s at %s(%s).\n%s\n";
var G__45318 = cause_type;
var G__45319 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45320 = loc;
var G__45321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45317,G__45318,G__45319,G__45320,G__45321) : format.call(null,G__45317,G__45318,G__45319,G__45320,G__45321));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45283__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
