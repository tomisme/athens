goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43076){
var map__43077 = p__43076;
var map__43077__$1 = (((((!((map__43077 == null))))?(((((map__43077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43077):map__43077);
var m = map__43077__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43077__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43079_43284 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43080_43285 = null;
var count__43081_43286 = (0);
var i__43082_43287 = (0);
while(true){
if((i__43082_43287 < count__43081_43286)){
var f_43288 = chunk__43080_43285.cljs$core$IIndexed$_nth$arity$2(null,i__43082_43287);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43288], 0));


var G__43289 = seq__43079_43284;
var G__43290 = chunk__43080_43285;
var G__43291 = count__43081_43286;
var G__43292 = (i__43082_43287 + (1));
seq__43079_43284 = G__43289;
chunk__43080_43285 = G__43290;
count__43081_43286 = G__43291;
i__43082_43287 = G__43292;
continue;
} else {
var temp__5735__auto___43293 = cljs.core.seq(seq__43079_43284);
if(temp__5735__auto___43293){
var seq__43079_43294__$1 = temp__5735__auto___43293;
if(cljs.core.chunked_seq_QMARK_(seq__43079_43294__$1)){
var c__4609__auto___43295 = cljs.core.chunk_first(seq__43079_43294__$1);
var G__43296 = cljs.core.chunk_rest(seq__43079_43294__$1);
var G__43297 = c__4609__auto___43295;
var G__43298 = cljs.core.count(c__4609__auto___43295);
var G__43299 = (0);
seq__43079_43284 = G__43296;
chunk__43080_43285 = G__43297;
count__43081_43286 = G__43298;
i__43082_43287 = G__43299;
continue;
} else {
var f_43300 = cljs.core.first(seq__43079_43294__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43300], 0));


var G__43301 = cljs.core.next(seq__43079_43294__$1);
var G__43302 = null;
var G__43303 = (0);
var G__43304 = (0);
seq__43079_43284 = G__43301;
chunk__43080_43285 = G__43302;
count__43081_43286 = G__43303;
i__43082_43287 = G__43304;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43305 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43305], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43305)))?cljs.core.second(arglists_43305):arglists_43305)], 0));
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
var seq__43084_43307 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43085_43308 = null;
var count__43086_43309 = (0);
var i__43087_43310 = (0);
while(true){
if((i__43087_43310 < count__43086_43309)){
var vec__43098_43311 = chunk__43085_43308.cljs$core$IIndexed$_nth$arity$2(null,i__43087_43310);
var name_43312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_43311,(0),null);
var map__43101_43313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_43311,(1),null);
var map__43101_43314__$1 = (((((!((map__43101_43313 == null))))?(((((map__43101_43313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43101_43313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43101_43313):map__43101_43313);
var doc_43315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43101_43314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43101_43314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43312], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43316], 0));

if(cljs.core.truth_(doc_43315)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43315], 0));
} else {
}


var G__43318 = seq__43084_43307;
var G__43319 = chunk__43085_43308;
var G__43320 = count__43086_43309;
var G__43321 = (i__43087_43310 + (1));
seq__43084_43307 = G__43318;
chunk__43085_43308 = G__43319;
count__43086_43309 = G__43320;
i__43087_43310 = G__43321;
continue;
} else {
var temp__5735__auto___43322 = cljs.core.seq(seq__43084_43307);
if(temp__5735__auto___43322){
var seq__43084_43323__$1 = temp__5735__auto___43322;
if(cljs.core.chunked_seq_QMARK_(seq__43084_43323__$1)){
var c__4609__auto___43325 = cljs.core.chunk_first(seq__43084_43323__$1);
var G__43326 = cljs.core.chunk_rest(seq__43084_43323__$1);
var G__43327 = c__4609__auto___43325;
var G__43328 = cljs.core.count(c__4609__auto___43325);
var G__43329 = (0);
seq__43084_43307 = G__43326;
chunk__43085_43308 = G__43327;
count__43086_43309 = G__43328;
i__43087_43310 = G__43329;
continue;
} else {
var vec__43104_43330 = cljs.core.first(seq__43084_43323__$1);
var name_43331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43104_43330,(0),null);
var map__43107_43332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43104_43330,(1),null);
var map__43107_43333__$1 = (((((!((map__43107_43332 == null))))?(((((map__43107_43332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43107_43332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43107_43332):map__43107_43332);
var doc_43334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43107_43333__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43107_43333__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43331], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43335], 0));

if(cljs.core.truth_(doc_43334)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43334], 0));
} else {
}


var G__43336 = cljs.core.next(seq__43084_43323__$1);
var G__43337 = null;
var G__43338 = (0);
var G__43339 = (0);
seq__43084_43307 = G__43336;
chunk__43085_43308 = G__43337;
count__43086_43309 = G__43338;
i__43087_43310 = G__43339;
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

var seq__43109 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43110 = null;
var count__43111 = (0);
var i__43112 = (0);
while(true){
if((i__43112 < count__43111)){
var role = chunk__43110.cljs$core$IIndexed$_nth$arity$2(null,i__43112);
var temp__5735__auto___43340__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43340__$1)){
var spec_43341 = temp__5735__auto___43340__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43341)], 0));
} else {
}


var G__43342 = seq__43109;
var G__43343 = chunk__43110;
var G__43344 = count__43111;
var G__43345 = (i__43112 + (1));
seq__43109 = G__43342;
chunk__43110 = G__43343;
count__43111 = G__43344;
i__43112 = G__43345;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__43109);
if(temp__5735__auto____$1){
var seq__43109__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43109__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43109__$1);
var G__43347 = cljs.core.chunk_rest(seq__43109__$1);
var G__43348 = c__4609__auto__;
var G__43349 = cljs.core.count(c__4609__auto__);
var G__43350 = (0);
seq__43109 = G__43347;
chunk__43110 = G__43348;
count__43111 = G__43349;
i__43112 = G__43350;
continue;
} else {
var role = cljs.core.first(seq__43109__$1);
var temp__5735__auto___43351__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43351__$2)){
var spec_43352 = temp__5735__auto___43351__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43352)], 0));
} else {
}


var G__43353 = cljs.core.next(seq__43109__$1);
var G__43354 = null;
var G__43355 = (0);
var G__43356 = (0);
seq__43109 = G__43353;
chunk__43110 = G__43354;
count__43111 = G__43355;
i__43112 = G__43356;
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
var G__43357 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43358 = cljs.core.ex_cause(t);
via = G__43357;
t = G__43358;
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
var map__43120 = datafied_throwable;
var map__43120__$1 = (((((!((map__43120 == null))))?(((((map__43120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43120):map__43120);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43120__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43120__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43120__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43121 = cljs.core.last(via);
var map__43121__$1 = (((((!((map__43121 == null))))?(((((map__43121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43121):map__43121);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43121__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43122 = data;
var map__43122__$1 = (((((!((map__43122 == null))))?(((((map__43122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43122):map__43122);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43122__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43122__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43122__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43123 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43123__$1 = (((((!((map__43123 == null))))?(((((map__43123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43123):map__43123);
var top_data = map__43123__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43145 = phase;
var G__43145__$1 = (((G__43145 instanceof cljs.core.Keyword))?G__43145.fqn:null);
switch (G__43145__$1) {
case "read-source":
var map__43146 = data;
var map__43146__$1 = (((((!((map__43146 == null))))?(((((map__43146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43146):map__43146);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43146__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43146__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43148 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43148__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43148,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43148);
var G__43148__$2 = (cljs.core.truth_((function (){var fexpr__43153 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43153.cljs$core$IFn$_invoke$arity$1 ? fexpr__43153.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43153.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43148__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43148__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43148__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43157 = top_data;
var G__43157__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43157,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43157);
var G__43157__$2 = (cljs.core.truth_((function (){var fexpr__43158 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43158.cljs$core$IFn$_invoke$arity$1 ? fexpr__43158.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43158.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43157__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43157__$1);
var G__43157__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43157__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43157__$2);
var G__43157__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43157__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43157__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43157__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43157__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43159 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43159,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43159,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43159,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43159,(3),null);
var G__43166 = top_data;
var G__43166__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43166,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43166);
var G__43166__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43166__$1);
var G__43166__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43166__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43166__$2);
var G__43166__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43166__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43166__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43166__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43166__$4;
}

break;
case "execution":
var vec__43177 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43119_SHARP_){
var or__4185__auto__ = (p1__43119_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__43185 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43185.cljs$core$IFn$_invoke$arity$1 ? fexpr__43185.cljs$core$IFn$_invoke$arity$1(p1__43119_SHARP_) : fexpr__43185.call(null,p1__43119_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__43191 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43191__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43191,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43191);
var G__43191__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43191__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43191__$1);
var G__43191__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43191__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43191__$2);
var G__43191__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43191__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43191__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43191__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43191__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43145__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43209){
var map__43214 = p__43209;
var map__43214__$1 = (((((!((map__43214 == null))))?(((((map__43214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43214):map__43214);
var triage_data = map__43214__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43214__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__43230 = phase;
var G__43230__$1 = (((G__43230 instanceof cljs.core.Keyword))?G__43230.fqn:null);
switch (G__43230__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43234 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43235 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43236 = loc;
var G__43237 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43238_43369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43239_43370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43240_43371 = true;
var _STAR_print_fn_STAR__temp_val__43241_43372 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43240_43371);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43241_43372);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43207_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43207_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43239_43370);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43238_43369);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43234,G__43235,G__43236,G__43237) : format.call(null,G__43234,G__43235,G__43236,G__43237));

break;
case "macroexpansion":
var G__43250 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43251 = cause_type;
var G__43252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43253 = loc;
var G__43254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43250,G__43251,G__43252,G__43253,G__43254) : format.call(null,G__43250,G__43251,G__43252,G__43253,G__43254));

break;
case "compile-syntax-check":
var G__43255 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43256 = cause_type;
var G__43257 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43258 = loc;
var G__43259 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43255,G__43256,G__43257,G__43258,G__43259) : format.call(null,G__43255,G__43256,G__43257,G__43258,G__43259));

break;
case "compilation":
var G__43260 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43261 = cause_type;
var G__43262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43263 = loc;
var G__43264 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43260,G__43261,G__43262,G__43263,G__43264) : format.call(null,G__43260,G__43261,G__43262,G__43263,G__43264));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43269 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43270 = symbol;
var G__43271 = loc;
var G__43272 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43273_43374 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43274_43375 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43275_43376 = true;
var _STAR_print_fn_STAR__temp_val__43276_43377 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43275_43376);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43276_43377);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43208_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43208_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43274_43375);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43273_43374);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43269,G__43270,G__43271,G__43272) : format.call(null,G__43269,G__43270,G__43271,G__43272));
} else {
var G__43277 = "Execution error%s at %s(%s).\n%s\n";
var G__43278 = cause_type;
var G__43279 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43280 = loc;
var G__43281 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43277,G__43278,G__43279,G__43280,G__43281) : format.call(null,G__43277,G__43278,G__43279,G__43280,G__43281));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43230__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
