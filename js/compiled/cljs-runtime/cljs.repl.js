goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59319){
var map__59320 = p__59319;
var map__59320__$1 = (((((!((map__59320 == null))))?(((((map__59320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59320):map__59320);
var m = map__59320__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59320__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59320__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__59322_59553 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59323_59554 = null;
var count__59324_59555 = (0);
var i__59325_59556 = (0);
while(true){
if((i__59325_59556 < count__59324_59555)){
var f_59557 = chunk__59323_59554.cljs$core$IIndexed$_nth$arity$2(null,i__59325_59556);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59557], 0));


var G__59558 = seq__59322_59553;
var G__59559 = chunk__59323_59554;
var G__59560 = count__59324_59555;
var G__59561 = (i__59325_59556 + (1));
seq__59322_59553 = G__59558;
chunk__59323_59554 = G__59559;
count__59324_59555 = G__59560;
i__59325_59556 = G__59561;
continue;
} else {
var temp__5735__auto___59562 = cljs.core.seq(seq__59322_59553);
if(temp__5735__auto___59562){
var seq__59322_59563__$1 = temp__5735__auto___59562;
if(cljs.core.chunked_seq_QMARK_(seq__59322_59563__$1)){
var c__4609__auto___59564 = cljs.core.chunk_first(seq__59322_59563__$1);
var G__59565 = cljs.core.chunk_rest(seq__59322_59563__$1);
var G__59566 = c__4609__auto___59564;
var G__59567 = cljs.core.count(c__4609__auto___59564);
var G__59568 = (0);
seq__59322_59553 = G__59565;
chunk__59323_59554 = G__59566;
count__59324_59555 = G__59567;
i__59325_59556 = G__59568;
continue;
} else {
var f_59569 = cljs.core.first(seq__59322_59563__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59569], 0));


var G__59570 = cljs.core.next(seq__59322_59563__$1);
var G__59571 = null;
var G__59572 = (0);
var G__59573 = (0);
seq__59322_59553 = G__59570;
chunk__59323_59554 = G__59571;
count__59324_59555 = G__59572;
i__59325_59556 = G__59573;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59574 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59574], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59574)))?cljs.core.second(arglists_59574):arglists_59574)], 0));
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
var seq__59366_59578 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59367_59579 = null;
var count__59368_59580 = (0);
var i__59369_59581 = (0);
while(true){
if((i__59369_59581 < count__59368_59580)){
var vec__59394_59582 = chunk__59367_59579.cljs$core$IIndexed$_nth$arity$2(null,i__59369_59581);
var name_59583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59394_59582,(0),null);
var map__59397_59584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59394_59582,(1),null);
var map__59397_59585__$1 = (((((!((map__59397_59584 == null))))?(((((map__59397_59584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59397_59584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59397_59584):map__59397_59584);
var doc_59586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59397_59585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59397_59585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59583], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59587], 0));

if(cljs.core.truth_(doc_59586)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59586], 0));
} else {
}


var G__59594 = seq__59366_59578;
var G__59595 = chunk__59367_59579;
var G__59596 = count__59368_59580;
var G__59597 = (i__59369_59581 + (1));
seq__59366_59578 = G__59594;
chunk__59367_59579 = G__59595;
count__59368_59580 = G__59596;
i__59369_59581 = G__59597;
continue;
} else {
var temp__5735__auto___59598 = cljs.core.seq(seq__59366_59578);
if(temp__5735__auto___59598){
var seq__59366_59599__$1 = temp__5735__auto___59598;
if(cljs.core.chunked_seq_QMARK_(seq__59366_59599__$1)){
var c__4609__auto___59600 = cljs.core.chunk_first(seq__59366_59599__$1);
var G__59601 = cljs.core.chunk_rest(seq__59366_59599__$1);
var G__59602 = c__4609__auto___59600;
var G__59603 = cljs.core.count(c__4609__auto___59600);
var G__59604 = (0);
seq__59366_59578 = G__59601;
chunk__59367_59579 = G__59602;
count__59368_59580 = G__59603;
i__59369_59581 = G__59604;
continue;
} else {
var vec__59406_59605 = cljs.core.first(seq__59366_59599__$1);
var name_59606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59406_59605,(0),null);
var map__59410_59607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59406_59605,(1),null);
var map__59410_59608__$1 = (((((!((map__59410_59607 == null))))?(((((map__59410_59607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59410_59607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59410_59607):map__59410_59607);
var doc_59609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410_59608__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410_59608__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59606], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59610], 0));

if(cljs.core.truth_(doc_59609)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59609], 0));
} else {
}


var G__59613 = cljs.core.next(seq__59366_59599__$1);
var G__59614 = null;
var G__59615 = (0);
var G__59616 = (0);
seq__59366_59578 = G__59613;
chunk__59367_59579 = G__59614;
count__59368_59580 = G__59615;
i__59369_59581 = G__59616;
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

var seq__59416 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59417 = null;
var count__59418 = (0);
var i__59419 = (0);
while(true){
if((i__59419 < count__59418)){
var role = chunk__59417.cljs$core$IIndexed$_nth$arity$2(null,i__59419);
var temp__5735__auto___59617__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59617__$1)){
var spec_59618 = temp__5735__auto___59617__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59618)], 0));
} else {
}


var G__59619 = seq__59416;
var G__59620 = chunk__59417;
var G__59621 = count__59418;
var G__59627 = (i__59419 + (1));
seq__59416 = G__59619;
chunk__59417 = G__59620;
count__59418 = G__59621;
i__59419 = G__59627;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__59416);
if(temp__5735__auto____$1){
var seq__59416__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59416__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59416__$1);
var G__59643 = cljs.core.chunk_rest(seq__59416__$1);
var G__59644 = c__4609__auto__;
var G__59645 = cljs.core.count(c__4609__auto__);
var G__59646 = (0);
seq__59416 = G__59643;
chunk__59417 = G__59644;
count__59418 = G__59645;
i__59419 = G__59646;
continue;
} else {
var role = cljs.core.first(seq__59416__$1);
var temp__5735__auto___59648__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59648__$2)){
var spec_59649 = temp__5735__auto___59648__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59649)], 0));
} else {
}


var G__59650 = cljs.core.next(seq__59416__$1);
var G__59651 = null;
var G__59652 = (0);
var G__59653 = (0);
seq__59416 = G__59650;
chunk__59417 = G__59651;
count__59418 = G__59652;
i__59419 = G__59653;
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
var G__59660 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__59661 = cljs.core.ex_cause(t);
via = G__59660;
t = G__59661;
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
var map__59454 = datafied_throwable;
var map__59454__$1 = (((((!((map__59454 == null))))?(((((map__59454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59454):map__59454);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59454__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59455 = cljs.core.last(via);
var map__59455__$1 = (((((!((map__59455 == null))))?(((((map__59455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59455):map__59455);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59455__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59455__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59455__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59456 = data;
var map__59456__$1 = (((((!((map__59456 == null))))?(((((map__59456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59456):map__59456);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59457 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59457__$1 = (((((!((map__59457 == null))))?(((((map__59457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59457):map__59457);
var top_data = map__59457__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59457__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59471 = phase;
var G__59471__$1 = (((G__59471 instanceof cljs.core.Keyword))?G__59471.fqn:null);
switch (G__59471__$1) {
case "read-source":
var map__59473 = data;
var map__59473__$1 = (((((!((map__59473 == null))))?(((((map__59473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59473):map__59473);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59475 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59475__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59475,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59475);
var G__59475__$2 = (cljs.core.truth_((function (){var fexpr__59476 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59476.cljs$core$IFn$_invoke$arity$1 ? fexpr__59476.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59476.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59475__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59475__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59475__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59477 = top_data;
var G__59477__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59477,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59477);
var G__59477__$2 = (cljs.core.truth_((function (){var fexpr__59480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59480.cljs$core$IFn$_invoke$arity$1 ? fexpr__59480.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59480.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59477__$1);
var G__59477__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59477__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59477__$2);
var G__59477__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59477__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59477__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59477__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59477__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59482 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59482,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59482,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59482,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59482,(3),null);
var G__59485 = top_data;
var G__59485__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59485,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59485);
var G__59485__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59485__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59485__$1);
var G__59485__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59485__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59485__$2);
var G__59485__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59485__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59485__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59485__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59485__$4;
}

break;
case "execution":
var vec__59488 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59488,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59447_SHARP_){
var or__4185__auto__ = (p1__59447_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__59493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59493.cljs$core$IFn$_invoke$arity$1 ? fexpr__59493.cljs$core$IFn$_invoke$arity$1(p1__59447_SHARP_) : fexpr__59493.call(null,p1__59447_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__59495 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59495__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59495,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59495);
var G__59495__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59495__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59495__$1);
var G__59495__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59495__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59495__$2);
var G__59495__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59495__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59495__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59495__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59495__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59471__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59499){
var map__59500 = p__59499;
var map__59500__$1 = (((((!((map__59500 == null))))?(((((map__59500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59500):map__59500);
var triage_data = map__59500__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__59503 = phase;
var G__59503__$1 = (((G__59503 instanceof cljs.core.Keyword))?G__59503.fqn:null);
switch (G__59503__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59504 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59505 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59506 = loc;
var G__59507 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59508_59673 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59509_59674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59510_59675 = true;
var _STAR_print_fn_STAR__temp_val__59511_59676 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59510_59675);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59511_59676);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59497_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59497_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59509_59674);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59508_59673);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59504,G__59505,G__59506,G__59507) : format.call(null,G__59504,G__59505,G__59506,G__59507));

break;
case "macroexpansion":
var G__59512 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59513 = cause_type;
var G__59514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59515 = loc;
var G__59516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59512,G__59513,G__59514,G__59515,G__59516) : format.call(null,G__59512,G__59513,G__59514,G__59515,G__59516));

break;
case "compile-syntax-check":
var G__59517 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59518 = cause_type;
var G__59519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59520 = loc;
var G__59521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59517,G__59518,G__59519,G__59520,G__59521) : format.call(null,G__59517,G__59518,G__59519,G__59520,G__59521));

break;
case "compilation":
var G__59522 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59523 = cause_type;
var G__59524 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59525 = loc;
var G__59526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59522,G__59523,G__59524,G__59525,G__59526) : format.call(null,G__59522,G__59523,G__59524,G__59525,G__59526));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59527 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59528 = symbol;
var G__59529 = loc;
var G__59530 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59531_59677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59532_59678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59533_59679 = true;
var _STAR_print_fn_STAR__temp_val__59534_59680 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59533_59679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59534_59680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59498_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59498_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59532_59678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59531_59677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59527,G__59528,G__59529,G__59530) : format.call(null,G__59527,G__59528,G__59529,G__59530));
} else {
var G__59536 = "Execution error%s at %s(%s).\n%s\n";
var G__59537 = cause_type;
var G__59538 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59539 = loc;
var G__59540 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59536,G__59537,G__59538,G__59539,G__59540) : format.call(null,G__59536,G__59537,G__59538,G__59539,G__59540));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59503__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
