goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45231){
var map__45232 = p__45231;
var map__45232__$1 = (((((!((map__45232 == null))))?(((((map__45232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45232):map__45232);
var m = map__45232__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45232__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45232__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45234_45343 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45235_45344 = null;
var count__45236_45345 = (0);
var i__45237_45346 = (0);
while(true){
if((i__45237_45346 < count__45236_45345)){
var f_45347 = chunk__45235_45344.cljs$core$IIndexed$_nth$arity$2(null,i__45237_45346);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45347], 0));


var G__45348 = seq__45234_45343;
var G__45349 = chunk__45235_45344;
var G__45350 = count__45236_45345;
var G__45351 = (i__45237_45346 + (1));
seq__45234_45343 = G__45348;
chunk__45235_45344 = G__45349;
count__45236_45345 = G__45350;
i__45237_45346 = G__45351;
continue;
} else {
var temp__5735__auto___45352 = cljs.core.seq(seq__45234_45343);
if(temp__5735__auto___45352){
var seq__45234_45353__$1 = temp__5735__auto___45352;
if(cljs.core.chunked_seq_QMARK_(seq__45234_45353__$1)){
var c__4609__auto___45354 = cljs.core.chunk_first(seq__45234_45353__$1);
var G__45355 = cljs.core.chunk_rest(seq__45234_45353__$1);
var G__45356 = c__4609__auto___45354;
var G__45357 = cljs.core.count(c__4609__auto___45354);
var G__45358 = (0);
seq__45234_45343 = G__45355;
chunk__45235_45344 = G__45356;
count__45236_45345 = G__45357;
i__45237_45346 = G__45358;
continue;
} else {
var f_45359 = cljs.core.first(seq__45234_45353__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45359], 0));


var G__45360 = cljs.core.next(seq__45234_45353__$1);
var G__45361 = null;
var G__45362 = (0);
var G__45363 = (0);
seq__45234_45343 = G__45360;
chunk__45235_45344 = G__45361;
count__45236_45345 = G__45362;
i__45237_45346 = G__45363;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45364 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45364], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45364)))?cljs.core.second(arglists_45364):arglists_45364)], 0));
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
var seq__45238_45368 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45239_45369 = null;
var count__45240_45370 = (0);
var i__45241_45371 = (0);
while(true){
if((i__45241_45371 < count__45240_45370)){
var vec__45253_45372 = chunk__45239_45369.cljs$core$IIndexed$_nth$arity$2(null,i__45241_45371);
var name_45373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45253_45372,(0),null);
var map__45256_45374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45253_45372,(1),null);
var map__45256_45375__$1 = (((((!((map__45256_45374 == null))))?(((((map__45256_45374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45256_45374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45256_45374):map__45256_45374);
var doc_45376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256_45375__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256_45375__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45373], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45377], 0));

if(cljs.core.truth_(doc_45376)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45376], 0));
} else {
}


var G__45378 = seq__45238_45368;
var G__45379 = chunk__45239_45369;
var G__45380 = count__45240_45370;
var G__45381 = (i__45241_45371 + (1));
seq__45238_45368 = G__45378;
chunk__45239_45369 = G__45379;
count__45240_45370 = G__45380;
i__45241_45371 = G__45381;
continue;
} else {
var temp__5735__auto___45382 = cljs.core.seq(seq__45238_45368);
if(temp__5735__auto___45382){
var seq__45238_45383__$1 = temp__5735__auto___45382;
if(cljs.core.chunked_seq_QMARK_(seq__45238_45383__$1)){
var c__4609__auto___45384 = cljs.core.chunk_first(seq__45238_45383__$1);
var G__45388 = cljs.core.chunk_rest(seq__45238_45383__$1);
var G__45389 = c__4609__auto___45384;
var G__45390 = cljs.core.count(c__4609__auto___45384);
var G__45391 = (0);
seq__45238_45368 = G__45388;
chunk__45239_45369 = G__45389;
count__45240_45370 = G__45390;
i__45241_45371 = G__45391;
continue;
} else {
var vec__45258_45392 = cljs.core.first(seq__45238_45383__$1);
var name_45393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258_45392,(0),null);
var map__45261_45394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258_45392,(1),null);
var map__45261_45395__$1 = (((((!((map__45261_45394 == null))))?(((((map__45261_45394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45261_45394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45261_45394):map__45261_45394);
var doc_45396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45261_45395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45261_45395__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45393], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45397], 0));

if(cljs.core.truth_(doc_45396)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45396], 0));
} else {
}


var G__45399 = cljs.core.next(seq__45238_45383__$1);
var G__45400 = null;
var G__45401 = (0);
var G__45402 = (0);
seq__45238_45368 = G__45399;
chunk__45239_45369 = G__45400;
count__45240_45370 = G__45401;
i__45241_45371 = G__45402;
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

var seq__45263 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45264 = null;
var count__45265 = (0);
var i__45266 = (0);
while(true){
if((i__45266 < count__45265)){
var role = chunk__45264.cljs$core$IIndexed$_nth$arity$2(null,i__45266);
var temp__5735__auto___45403__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45403__$1)){
var spec_45404 = temp__5735__auto___45403__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45404)], 0));
} else {
}


var G__45405 = seq__45263;
var G__45406 = chunk__45264;
var G__45407 = count__45265;
var G__45408 = (i__45266 + (1));
seq__45263 = G__45405;
chunk__45264 = G__45406;
count__45265 = G__45407;
i__45266 = G__45408;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45263);
if(temp__5735__auto____$1){
var seq__45263__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45263__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45263__$1);
var G__45411 = cljs.core.chunk_rest(seq__45263__$1);
var G__45412 = c__4609__auto__;
var G__45413 = cljs.core.count(c__4609__auto__);
var G__45414 = (0);
seq__45263 = G__45411;
chunk__45264 = G__45412;
count__45265 = G__45413;
i__45266 = G__45414;
continue;
} else {
var role = cljs.core.first(seq__45263__$1);
var temp__5735__auto___45415__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45415__$2)){
var spec_45416 = temp__5735__auto___45415__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45416)], 0));
} else {
}


var G__45417 = cljs.core.next(seq__45263__$1);
var G__45418 = null;
var G__45419 = (0);
var G__45420 = (0);
seq__45263 = G__45417;
chunk__45264 = G__45418;
count__45265 = G__45419;
i__45266 = G__45420;
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
var G__45421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45422 = cljs.core.ex_cause(t);
via = G__45421;
t = G__45422;
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
var map__45270 = datafied_throwable;
var map__45270__$1 = (((((!((map__45270 == null))))?(((((map__45270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45270):map__45270);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45270__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45270__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45270__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45271 = cljs.core.last(via);
var map__45271__$1 = (((((!((map__45271 == null))))?(((((map__45271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45271):map__45271);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45271__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45271__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45271__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45272 = data;
var map__45272__$1 = (((((!((map__45272 == null))))?(((((map__45272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45272):map__45272);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45273 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45273__$1 = (((((!((map__45273 == null))))?(((((map__45273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45273):map__45273);
var top_data = map__45273__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45280 = phase;
var G__45280__$1 = (((G__45280 instanceof cljs.core.Keyword))?G__45280.fqn:null);
switch (G__45280__$1) {
case "read-source":
var map__45281 = data;
var map__45281__$1 = (((((!((map__45281 == null))))?(((((map__45281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45281):map__45281);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45281__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45281__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45285 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45285__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45285,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45285);
var G__45285__$2 = (cljs.core.truth_((function (){var fexpr__45286 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45286.cljs$core$IFn$_invoke$arity$1 ? fexpr__45286.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45286.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45285__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45285__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45285__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45287 = top_data;
var G__45287__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45287,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45287);
var G__45287__$2 = (cljs.core.truth_((function (){var fexpr__45288 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45288.cljs$core$IFn$_invoke$arity$1 ? fexpr__45288.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45288.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45287__$1);
var G__45287__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45287__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45287__$2);
var G__45287__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45287__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45287__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45287__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45287__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45289 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45289,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45289,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45289,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45289,(3),null);
var G__45292 = top_data;
var G__45292__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45292);
var G__45292__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45292__$1);
var G__45292__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45292__$2);
var G__45292__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45292__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45292__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45292__$4;
}

break;
case "execution":
var vec__45293 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45293,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45293,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45293,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45293,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45269_SHARP_){
var or__4185__auto__ = (p1__45269_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45297.cljs$core$IFn$_invoke$arity$1 ? fexpr__45297.cljs$core$IFn$_invoke$arity$1(p1__45269_SHARP_) : fexpr__45297.call(null,p1__45269_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45298 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45298__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45298);
var G__45298__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45298__$1);
var G__45298__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45298__$2);
var G__45298__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45298__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45298__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45280__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45301){
var map__45302 = p__45301;
var map__45302__$1 = (((((!((map__45302 == null))))?(((((map__45302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45302):map__45302);
var triage_data = map__45302__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45302__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45305 = phase;
var G__45305__$1 = (((G__45305 instanceof cljs.core.Keyword))?G__45305.fqn:null);
switch (G__45305__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45306 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45308 = loc;
var G__45309 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45310_45426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45311_45427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45312_45428 = true;
var _STAR_print_fn_STAR__temp_val__45313_45429 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45312_45428);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45313_45429);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45299_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45299_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45311_45427);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45310_45426);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45306,G__45307,G__45308,G__45309) : format.call(null,G__45306,G__45307,G__45308,G__45309));

break;
case "macroexpansion":
var G__45315 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45316 = cause_type;
var G__45317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45318 = loc;
var G__45319 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45315,G__45316,G__45317,G__45318,G__45319) : format.call(null,G__45315,G__45316,G__45317,G__45318,G__45319));

break;
case "compile-syntax-check":
var G__45320 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45321 = cause_type;
var G__45322 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45323 = loc;
var G__45324 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45320,G__45321,G__45322,G__45323,G__45324) : format.call(null,G__45320,G__45321,G__45322,G__45323,G__45324));

break;
case "compilation":
var G__45325 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45326 = cause_type;
var G__45327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45328 = loc;
var G__45329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45325,G__45326,G__45327,G__45328,G__45329) : format.call(null,G__45325,G__45326,G__45327,G__45328,G__45329));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45330 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45331 = symbol;
var G__45332 = loc;
var G__45333 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45334_45430 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45335_45431 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45336_45432 = true;
var _STAR_print_fn_STAR__temp_val__45337_45433 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45336_45432);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45337_45433);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45300_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45300_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45335_45431);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45334_45430);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45330,G__45331,G__45332,G__45333) : format.call(null,G__45330,G__45331,G__45332,G__45333));
} else {
var G__45338 = "Execution error%s at %s(%s).\n%s\n";
var G__45339 = cause_type;
var G__45340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45341 = loc;
var G__45342 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45338,G__45339,G__45340,G__45341,G__45342) : format.call(null,G__45338,G__45339,G__45340,G__45341,G__45342));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45305__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
