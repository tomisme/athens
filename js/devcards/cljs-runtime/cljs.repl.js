goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52759){
var map__52760 = p__52759;
var map__52760__$1 = (((((!((map__52760 == null))))?(((((map__52760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52760):map__52760);
var m = map__52760__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52767_52964 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52768_52965 = null;
var count__52769_52966 = (0);
var i__52770_52967 = (0);
while(true){
if((i__52770_52967 < count__52769_52966)){
var f_52968 = chunk__52768_52965.cljs$core$IIndexed$_nth$arity$2(null,i__52770_52967);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52968], 0));


var G__52969 = seq__52767_52964;
var G__52970 = chunk__52768_52965;
var G__52971 = count__52769_52966;
var G__52972 = (i__52770_52967 + (1));
seq__52767_52964 = G__52969;
chunk__52768_52965 = G__52970;
count__52769_52966 = G__52971;
i__52770_52967 = G__52972;
continue;
} else {
var temp__5735__auto___52973 = cljs.core.seq(seq__52767_52964);
if(temp__5735__auto___52973){
var seq__52767_52974__$1 = temp__5735__auto___52973;
if(cljs.core.chunked_seq_QMARK_(seq__52767_52974__$1)){
var c__4609__auto___52975 = cljs.core.chunk_first(seq__52767_52974__$1);
var G__52976 = cljs.core.chunk_rest(seq__52767_52974__$1);
var G__52977 = c__4609__auto___52975;
var G__52978 = cljs.core.count(c__4609__auto___52975);
var G__52979 = (0);
seq__52767_52964 = G__52976;
chunk__52768_52965 = G__52977;
count__52769_52966 = G__52978;
i__52770_52967 = G__52979;
continue;
} else {
var f_52980 = cljs.core.first(seq__52767_52974__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52980], 0));


var G__52981 = cljs.core.next(seq__52767_52974__$1);
var G__52982 = null;
var G__52983 = (0);
var G__52984 = (0);
seq__52767_52964 = G__52981;
chunk__52768_52965 = G__52982;
count__52769_52966 = G__52983;
i__52770_52967 = G__52984;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52985 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52985], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52985)))?cljs.core.second(arglists_52985):arglists_52985)], 0));
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
var seq__52776_52986 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52777_52987 = null;
var count__52778_52988 = (0);
var i__52779_52989 = (0);
while(true){
if((i__52779_52989 < count__52778_52988)){
var vec__52810_52990 = chunk__52777_52987.cljs$core$IIndexed$_nth$arity$2(null,i__52779_52989);
var name_52991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810_52990,(0),null);
var map__52813_52992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810_52990,(1),null);
var map__52813_52993__$1 = (((((!((map__52813_52992 == null))))?(((((map__52813_52992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52813_52992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52813_52992):map__52813_52992);
var doc_52994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52813_52993__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52813_52993__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52991], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52995], 0));

if(cljs.core.truth_(doc_52994)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52994], 0));
} else {
}


var G__52996 = seq__52776_52986;
var G__52997 = chunk__52777_52987;
var G__52998 = count__52778_52988;
var G__52999 = (i__52779_52989 + (1));
seq__52776_52986 = G__52996;
chunk__52777_52987 = G__52997;
count__52778_52988 = G__52998;
i__52779_52989 = G__52999;
continue;
} else {
var temp__5735__auto___53000 = cljs.core.seq(seq__52776_52986);
if(temp__5735__auto___53000){
var seq__52776_53001__$1 = temp__5735__auto___53000;
if(cljs.core.chunked_seq_QMARK_(seq__52776_53001__$1)){
var c__4609__auto___53002 = cljs.core.chunk_first(seq__52776_53001__$1);
var G__53003 = cljs.core.chunk_rest(seq__52776_53001__$1);
var G__53004 = c__4609__auto___53002;
var G__53005 = cljs.core.count(c__4609__auto___53002);
var G__53006 = (0);
seq__52776_52986 = G__53003;
chunk__52777_52987 = G__53004;
count__52778_52988 = G__53005;
i__52779_52989 = G__53006;
continue;
} else {
var vec__52825_53007 = cljs.core.first(seq__52776_53001__$1);
var name_53008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52825_53007,(0),null);
var map__52828_53009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52825_53007,(1),null);
var map__52828_53010__$1 = (((((!((map__52828_53009 == null))))?(((((map__52828_53009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52828_53009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52828_53009):map__52828_53009);
var doc_53011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52828_53010__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52828_53010__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53008], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53012], 0));

if(cljs.core.truth_(doc_53011)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53011], 0));
} else {
}


var G__53013 = cljs.core.next(seq__52776_53001__$1);
var G__53014 = null;
var G__53015 = (0);
var G__53016 = (0);
seq__52776_52986 = G__53013;
chunk__52777_52987 = G__53014;
count__52778_52988 = G__53015;
i__52779_52989 = G__53016;
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

var seq__52832 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52833 = null;
var count__52834 = (0);
var i__52835 = (0);
while(true){
if((i__52835 < count__52834)){
var role = chunk__52833.cljs$core$IIndexed$_nth$arity$2(null,i__52835);
var temp__5735__auto___53017__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53017__$1)){
var spec_53018 = temp__5735__auto___53017__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53018)], 0));
} else {
}


var G__53019 = seq__52832;
var G__53020 = chunk__52833;
var G__53021 = count__52834;
var G__53022 = (i__52835 + (1));
seq__52832 = G__53019;
chunk__52833 = G__53020;
count__52834 = G__53021;
i__52835 = G__53022;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__52832);
if(temp__5735__auto____$1){
var seq__52832__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52832__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52832__$1);
var G__53023 = cljs.core.chunk_rest(seq__52832__$1);
var G__53024 = c__4609__auto__;
var G__53025 = cljs.core.count(c__4609__auto__);
var G__53026 = (0);
seq__52832 = G__53023;
chunk__52833 = G__53024;
count__52834 = G__53025;
i__52835 = G__53026;
continue;
} else {
var role = cljs.core.first(seq__52832__$1);
var temp__5735__auto___53027__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53027__$2)){
var spec_53028 = temp__5735__auto___53027__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53028)], 0));
} else {
}


var G__53029 = cljs.core.next(seq__52832__$1);
var G__53030 = null;
var G__53031 = (0);
var G__53032 = (0);
seq__52832 = G__53029;
chunk__52833 = G__53030;
count__52834 = G__53031;
i__52835 = G__53032;
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
var G__53034 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53035 = cljs.core.ex_cause(t);
via = G__53034;
t = G__53035;
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
var map__52863 = datafied_throwable;
var map__52863__$1 = (((((!((map__52863 == null))))?(((((map__52863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52863):map__52863);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52863__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52863__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52863__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52864 = cljs.core.last(via);
var map__52864__$1 = (((((!((map__52864 == null))))?(((((map__52864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52864):map__52864);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52864__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52864__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52864__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52865 = data;
var map__52865__$1 = (((((!((map__52865 == null))))?(((((map__52865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52865):map__52865);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52865__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52865__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52865__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52866 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52866__$1 = (((((!((map__52866 == null))))?(((((map__52866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52866):map__52866);
var top_data = map__52866__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52866__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52877 = phase;
var G__52877__$1 = (((G__52877 instanceof cljs.core.Keyword))?G__52877.fqn:null);
switch (G__52877__$1) {
case "read-source":
var map__52879 = data;
var map__52879__$1 = (((((!((map__52879 == null))))?(((((map__52879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52879):map__52879);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52879__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52879__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52883 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52883__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52883,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52883);
var G__52883__$2 = (cljs.core.truth_((function (){var fexpr__52887 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52887.cljs$core$IFn$_invoke$arity$1 ? fexpr__52887.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52887.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52883__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52883__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52883__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52883__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52888 = top_data;
var G__52888__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52888,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52888);
var G__52888__$2 = (cljs.core.truth_((function (){var fexpr__52889 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52889.cljs$core$IFn$_invoke$arity$1 ? fexpr__52889.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52889.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52888__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52888__$1);
var G__52888__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52888__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52888__$2);
var G__52888__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52888__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52888__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52888__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52888__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52891 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52891,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52891,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52891,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52891,(3),null);
var G__52894 = top_data;
var G__52894__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52894,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52894);
var G__52894__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52894__$1);
var G__52894__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52894__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52894__$2);
var G__52894__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52894__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52894__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52894__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52894__$4;
}

break;
case "execution":
var vec__52897 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52897,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52897,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52897,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52897,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52859_SHARP_){
var or__4185__auto__ = (p1__52859_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__52901 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52901.cljs$core$IFn$_invoke$arity$1 ? fexpr__52901.cljs$core$IFn$_invoke$arity$1(p1__52859_SHARP_) : fexpr__52901.call(null,p1__52859_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__52903 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52903__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52903,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52903);
var G__52903__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52903__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52903__$1);
var G__52903__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52903__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52903__$2);
var G__52903__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52903__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52903__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52903__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52903__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52877__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52908){
var map__52910 = p__52908;
var map__52910__$1 = (((((!((map__52910 == null))))?(((((map__52910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52910):map__52910);
var triage_data = map__52910__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__52914 = phase;
var G__52914__$1 = (((G__52914 instanceof cljs.core.Keyword))?G__52914.fqn:null);
switch (G__52914__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52915 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52916 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52917 = loc;
var G__52918 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52919_53046 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52920_53047 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52921_53048 = true;
var _STAR_print_fn_STAR__temp_val__52922_53049 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52921_53048);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52922_53049);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52906_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52906_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52920_53047);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52919_53046);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52915,G__52916,G__52917,G__52918) : format.call(null,G__52915,G__52916,G__52917,G__52918));

break;
case "macroexpansion":
var G__52925 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52926 = cause_type;
var G__52927 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52928 = loc;
var G__52929 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52925,G__52926,G__52927,G__52928,G__52929) : format.call(null,G__52925,G__52926,G__52927,G__52928,G__52929));

break;
case "compile-syntax-check":
var G__52934 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52935 = cause_type;
var G__52936 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52937 = loc;
var G__52938 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52934,G__52935,G__52936,G__52937,G__52938) : format.call(null,G__52934,G__52935,G__52936,G__52937,G__52938));

break;
case "compilation":
var G__52939 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52940 = cause_type;
var G__52941 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52942 = loc;
var G__52943 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52939,G__52940,G__52941,G__52942,G__52943) : format.call(null,G__52939,G__52940,G__52941,G__52942,G__52943));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52944 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52945 = symbol;
var G__52946 = loc;
var G__52947 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52948_53050 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52949_53051 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52950_53052 = true;
var _STAR_print_fn_STAR__temp_val__52951_53053 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52950_53052);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52951_53053);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52907_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52907_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52949_53051);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52948_53050);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52944,G__52945,G__52946,G__52947) : format.call(null,G__52944,G__52945,G__52946,G__52947));
} else {
var G__52952 = "Execution error%s at %s(%s).\n%s\n";
var G__52953 = cause_type;
var G__52954 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52955 = loc;
var G__52956 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52952,G__52953,G__52954,G__52955,G__52956) : format.call(null,G__52952,G__52953,G__52954,G__52955,G__52956));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52914__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
