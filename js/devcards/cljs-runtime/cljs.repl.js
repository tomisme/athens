goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45099){
var map__45100 = p__45099;
var map__45100__$1 = (((((!((map__45100 == null))))?(((((map__45100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45100):map__45100);
var m = map__45100__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45100__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45100__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45102_45309 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45103_45310 = null;
var count__45104_45311 = (0);
var i__45105_45312 = (0);
while(true){
if((i__45105_45312 < count__45104_45311)){
var f_45313 = chunk__45103_45310.cljs$core$IIndexed$_nth$arity$2(null,i__45105_45312);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45313], 0));


var G__45314 = seq__45102_45309;
var G__45315 = chunk__45103_45310;
var G__45316 = count__45104_45311;
var G__45317 = (i__45105_45312 + (1));
seq__45102_45309 = G__45314;
chunk__45103_45310 = G__45315;
count__45104_45311 = G__45316;
i__45105_45312 = G__45317;
continue;
} else {
var temp__5735__auto___45318 = cljs.core.seq(seq__45102_45309);
if(temp__5735__auto___45318){
var seq__45102_45319__$1 = temp__5735__auto___45318;
if(cljs.core.chunked_seq_QMARK_(seq__45102_45319__$1)){
var c__4609__auto___45320 = cljs.core.chunk_first(seq__45102_45319__$1);
var G__45321 = cljs.core.chunk_rest(seq__45102_45319__$1);
var G__45322 = c__4609__auto___45320;
var G__45323 = cljs.core.count(c__4609__auto___45320);
var G__45324 = (0);
seq__45102_45309 = G__45321;
chunk__45103_45310 = G__45322;
count__45104_45311 = G__45323;
i__45105_45312 = G__45324;
continue;
} else {
var f_45325 = cljs.core.first(seq__45102_45319__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45325], 0));


var G__45326 = cljs.core.next(seq__45102_45319__$1);
var G__45327 = null;
var G__45328 = (0);
var G__45329 = (0);
seq__45102_45309 = G__45326;
chunk__45103_45310 = G__45327;
count__45104_45311 = G__45328;
i__45105_45312 = G__45329;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45330 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45330], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45330)))?cljs.core.second(arglists_45330):arglists_45330)], 0));
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
var seq__45107_45332 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45108_45333 = null;
var count__45109_45334 = (0);
var i__45110_45335 = (0);
while(true){
if((i__45110_45335 < count__45109_45334)){
var vec__45126_45336 = chunk__45108_45333.cljs$core$IIndexed$_nth$arity$2(null,i__45110_45335);
var name_45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45126_45336,(0),null);
var map__45129_45338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45126_45336,(1),null);
var map__45129_45339__$1 = (((((!((map__45129_45338 == null))))?(((((map__45129_45338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45129_45338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45129_45338):map__45129_45338);
var doc_45340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129_45339__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129_45339__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45337], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45341], 0));

if(cljs.core.truth_(doc_45340)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45340], 0));
} else {
}


var G__45342 = seq__45107_45332;
var G__45343 = chunk__45108_45333;
var G__45344 = count__45109_45334;
var G__45345 = (i__45110_45335 + (1));
seq__45107_45332 = G__45342;
chunk__45108_45333 = G__45343;
count__45109_45334 = G__45344;
i__45110_45335 = G__45345;
continue;
} else {
var temp__5735__auto___45346 = cljs.core.seq(seq__45107_45332);
if(temp__5735__auto___45346){
var seq__45107_45347__$1 = temp__5735__auto___45346;
if(cljs.core.chunked_seq_QMARK_(seq__45107_45347__$1)){
var c__4609__auto___45348 = cljs.core.chunk_first(seq__45107_45347__$1);
var G__45349 = cljs.core.chunk_rest(seq__45107_45347__$1);
var G__45350 = c__4609__auto___45348;
var G__45351 = cljs.core.count(c__4609__auto___45348);
var G__45352 = (0);
seq__45107_45332 = G__45349;
chunk__45108_45333 = G__45350;
count__45109_45334 = G__45351;
i__45110_45335 = G__45352;
continue;
} else {
var vec__45131_45353 = cljs.core.first(seq__45107_45347__$1);
var name_45354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45131_45353,(0),null);
var map__45134_45355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45131_45353,(1),null);
var map__45134_45356__$1 = (((((!((map__45134_45355 == null))))?(((((map__45134_45355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45134_45355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45134_45355):map__45134_45355);
var doc_45357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45134_45356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45134_45356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45354], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45358], 0));

if(cljs.core.truth_(doc_45357)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45357], 0));
} else {
}


var G__45359 = cljs.core.next(seq__45107_45347__$1);
var G__45360 = null;
var G__45361 = (0);
var G__45362 = (0);
seq__45107_45332 = G__45359;
chunk__45108_45333 = G__45360;
count__45109_45334 = G__45361;
i__45110_45335 = G__45362;
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

var seq__45136 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45137 = null;
var count__45138 = (0);
var i__45139 = (0);
while(true){
if((i__45139 < count__45138)){
var role = chunk__45137.cljs$core$IIndexed$_nth$arity$2(null,i__45139);
var temp__5735__auto___45363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45363__$1)){
var spec_45364 = temp__5735__auto___45363__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45364)], 0));
} else {
}


var G__45365 = seq__45136;
var G__45366 = chunk__45137;
var G__45367 = count__45138;
var G__45368 = (i__45139 + (1));
seq__45136 = G__45365;
chunk__45137 = G__45366;
count__45138 = G__45367;
i__45139 = G__45368;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45136);
if(temp__5735__auto____$1){
var seq__45136__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45136__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45136__$1);
var G__45369 = cljs.core.chunk_rest(seq__45136__$1);
var G__45370 = c__4609__auto__;
var G__45371 = cljs.core.count(c__4609__auto__);
var G__45372 = (0);
seq__45136 = G__45369;
chunk__45137 = G__45370;
count__45138 = G__45371;
i__45139 = G__45372;
continue;
} else {
var role = cljs.core.first(seq__45136__$1);
var temp__5735__auto___45373__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45373__$2)){
var spec_45374 = temp__5735__auto___45373__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45374)], 0));
} else {
}


var G__45375 = cljs.core.next(seq__45136__$1);
var G__45376 = null;
var G__45377 = (0);
var G__45378 = (0);
seq__45136 = G__45375;
chunk__45137 = G__45376;
count__45138 = G__45377;
i__45139 = G__45378;
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
var G__45383 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45384 = cljs.core.ex_cause(t);
via = G__45383;
t = G__45384;
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
var map__45180 = datafied_throwable;
var map__45180__$1 = (((((!((map__45180 == null))))?(((((map__45180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45180):map__45180);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45180__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45180__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45180__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45181 = cljs.core.last(via);
var map__45181__$1 = (((((!((map__45181 == null))))?(((((map__45181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45181):map__45181);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45182 = data;
var map__45182__$1 = (((((!((map__45182 == null))))?(((((map__45182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45182):map__45182);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45187 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45187__$1 = (((((!((map__45187 == null))))?(((((map__45187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45187):map__45187);
var top_data = map__45187__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45187__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45212 = phase;
var G__45212__$1 = (((G__45212 instanceof cljs.core.Keyword))?G__45212.fqn:null);
switch (G__45212__$1) {
case "read-source":
var map__45213 = data;
var map__45213__$1 = (((((!((map__45213 == null))))?(((((map__45213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45213):map__45213);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45213__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45213__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45215 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45215__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45215,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45215);
var G__45215__$2 = (cljs.core.truth_((function (){var fexpr__45220 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45220.cljs$core$IFn$_invoke$arity$1 ? fexpr__45220.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45220.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45215__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45215__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45215__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45215__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45224 = top_data;
var G__45224__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45224);
var G__45224__$2 = (cljs.core.truth_((function (){var fexpr__45225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45225.cljs$core$IFn$_invoke$arity$1 ? fexpr__45225.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45225.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45224__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45224__$1);
var G__45224__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45224__$2);
var G__45224__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45224__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45224__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45226 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45226,(3),null);
var G__45229 = top_data;
var G__45229__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45229,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45229);
var G__45229__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45229__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45229__$1);
var G__45229__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45229__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45229__$2);
var G__45229__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45229__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45229__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45229__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45229__$4;
}

break;
case "execution":
var vec__45244 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45244,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45244,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45244,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45244,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45179_SHARP_){
var or__4185__auto__ = (p1__45179_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45252.cljs$core$IFn$_invoke$arity$1 ? fexpr__45252.cljs$core$IFn$_invoke$arity$1(p1__45179_SHARP_) : fexpr__45252.call(null,p1__45179_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45257 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45257__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45257);
var G__45257__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45257__$1);
var G__45257__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45257__$2);
var G__45257__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45257__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45257__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45257__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45212__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45264){
var map__45265 = p__45264;
var map__45265__$1 = (((((!((map__45265 == null))))?(((((map__45265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45265):map__45265);
var triage_data = map__45265__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45265__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45269 = phase;
var G__45269__$1 = (((G__45269 instanceof cljs.core.Keyword))?G__45269.fqn:null);
switch (G__45269__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45270 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45271 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45272 = loc;
var G__45273 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45274_45392 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45275_45393 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45276_45394 = true;
var _STAR_print_fn_STAR__temp_val__45277_45395 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45276_45394);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45277_45395);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45262_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45262_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45275_45393);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45274_45392);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45270,G__45271,G__45272,G__45273) : format.call(null,G__45270,G__45271,G__45272,G__45273));

break;
case "macroexpansion":
var G__45278 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45279 = cause_type;
var G__45280 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45281 = loc;
var G__45282 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45278,G__45279,G__45280,G__45281,G__45282) : format.call(null,G__45278,G__45279,G__45280,G__45281,G__45282));

break;
case "compile-syntax-check":
var G__45283 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45284 = cause_type;
var G__45285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45286 = loc;
var G__45287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45283,G__45284,G__45285,G__45286,G__45287) : format.call(null,G__45283,G__45284,G__45285,G__45286,G__45287));

break;
case "compilation":
var G__45288 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45289 = cause_type;
var G__45290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45291 = loc;
var G__45292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45288,G__45289,G__45290,G__45291,G__45292) : format.call(null,G__45288,G__45289,G__45290,G__45291,G__45292));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45293 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45294 = symbol;
var G__45295 = loc;
var G__45296 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45298_45397 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45299_45398 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45300_45399 = true;
var _STAR_print_fn_STAR__temp_val__45301_45400 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45300_45399);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45301_45400);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45263_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45263_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45299_45398);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45298_45397);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45293,G__45294,G__45295,G__45296) : format.call(null,G__45293,G__45294,G__45295,G__45296));
} else {
var G__45302 = "Execution error%s at %s(%s).\n%s\n";
var G__45303 = cause_type;
var G__45304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45305 = loc;
var G__45306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45302,G__45303,G__45304,G__45305,G__45306) : format.call(null,G__45302,G__45303,G__45304,G__45305,G__45306));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45269__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
