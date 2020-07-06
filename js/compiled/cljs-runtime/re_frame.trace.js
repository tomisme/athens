goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__39598){
var map__39599 = p__39598;
var map__39599__$1 = (((((!((map__39599 == null))))?(((((map__39599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39599):map__39599);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39599__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39599__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39599__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39599__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__39601_39628 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__39602_39629 = null;
var count__39603_39630 = (0);
var i__39604_39631 = (0);
while(true){
if((i__39604_39631 < count__39603_39630)){
var vec__39615_39632 = chunk__39602_39629.cljs$core$IIndexed$_nth$arity$2(null,i__39604_39631);
var k_39633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39615_39632,(0),null);
var cb_39634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39615_39632,(1),null);
try{var G__39619_39635 = cljs.core.deref(re_frame.trace.traces);
(cb_39634.cljs$core$IFn$_invoke$arity$1 ? cb_39634.cljs$core$IFn$_invoke$arity$1(G__39619_39635) : cb_39634.call(null,G__39619_39635));
}catch (e39618){var e_39636 = e39618;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39633,"while storing",cljs.core.deref(re_frame.trace.traces),e_39636], 0));
}

var G__39637 = seq__39601_39628;
var G__39638 = chunk__39602_39629;
var G__39639 = count__39603_39630;
var G__39640 = (i__39604_39631 + (1));
seq__39601_39628 = G__39637;
chunk__39602_39629 = G__39638;
count__39603_39630 = G__39639;
i__39604_39631 = G__39640;
continue;
} else {
var temp__5735__auto___39641 = cljs.core.seq(seq__39601_39628);
if(temp__5735__auto___39641){
var seq__39601_39642__$1 = temp__5735__auto___39641;
if(cljs.core.chunked_seq_QMARK_(seq__39601_39642__$1)){
var c__4609__auto___39643 = cljs.core.chunk_first(seq__39601_39642__$1);
var G__39644 = cljs.core.chunk_rest(seq__39601_39642__$1);
var G__39645 = c__4609__auto___39643;
var G__39646 = cljs.core.count(c__4609__auto___39643);
var G__39647 = (0);
seq__39601_39628 = G__39644;
chunk__39602_39629 = G__39645;
count__39603_39630 = G__39646;
i__39604_39631 = G__39647;
continue;
} else {
var vec__39620_39648 = cljs.core.first(seq__39601_39642__$1);
var k_39649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39620_39648,(0),null);
var cb_39650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39620_39648,(1),null);
try{var G__39624_39652 = cljs.core.deref(re_frame.trace.traces);
(cb_39650.cljs$core$IFn$_invoke$arity$1 ? cb_39650.cljs$core$IFn$_invoke$arity$1(G__39624_39652) : cb_39650.call(null,G__39624_39652));
}catch (e39623){var e_39653 = e39623;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39649,"while storing",cljs.core.deref(re_frame.trace.traces),e_39653], 0));
}

var G__39654 = cljs.core.next(seq__39601_39642__$1);
var G__39655 = null;
var G__39656 = (0);
var G__39657 = (0);
seq__39601_39628 = G__39654;
chunk__39602_39629 = G__39655;
count__39603_39630 = G__39656;
i__39604_39631 = G__39657;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
