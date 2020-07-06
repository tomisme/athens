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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52413){
var map__52414 = p__52413;
var map__52414__$1 = (((((!((map__52414 == null))))?(((((map__52414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52414):map__52414);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__52416_52443 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52417_52444 = null;
var count__52418_52445 = (0);
var i__52419_52446 = (0);
while(true){
if((i__52419_52446 < count__52418_52445)){
var vec__52430_52447 = chunk__52417_52444.cljs$core$IIndexed$_nth$arity$2(null,i__52419_52446);
var k_52448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430_52447,(0),null);
var cb_52449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430_52447,(1),null);
try{var G__52434_52450 = cljs.core.deref(re_frame.trace.traces);
(cb_52449.cljs$core$IFn$_invoke$arity$1 ? cb_52449.cljs$core$IFn$_invoke$arity$1(G__52434_52450) : cb_52449.call(null,G__52434_52450));
}catch (e52433){var e_52451 = e52433;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52448,"while storing",cljs.core.deref(re_frame.trace.traces),e_52451], 0));
}

var G__52452 = seq__52416_52443;
var G__52453 = chunk__52417_52444;
var G__52454 = count__52418_52445;
var G__52455 = (i__52419_52446 + (1));
seq__52416_52443 = G__52452;
chunk__52417_52444 = G__52453;
count__52418_52445 = G__52454;
i__52419_52446 = G__52455;
continue;
} else {
var temp__5735__auto___52456 = cljs.core.seq(seq__52416_52443);
if(temp__5735__auto___52456){
var seq__52416_52457__$1 = temp__5735__auto___52456;
if(cljs.core.chunked_seq_QMARK_(seq__52416_52457__$1)){
var c__4609__auto___52458 = cljs.core.chunk_first(seq__52416_52457__$1);
var G__52459 = cljs.core.chunk_rest(seq__52416_52457__$1);
var G__52460 = c__4609__auto___52458;
var G__52461 = cljs.core.count(c__4609__auto___52458);
var G__52462 = (0);
seq__52416_52443 = G__52459;
chunk__52417_52444 = G__52460;
count__52418_52445 = G__52461;
i__52419_52446 = G__52462;
continue;
} else {
var vec__52435_52463 = cljs.core.first(seq__52416_52457__$1);
var k_52464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52435_52463,(0),null);
var cb_52465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52435_52463,(1),null);
try{var G__52439_52466 = cljs.core.deref(re_frame.trace.traces);
(cb_52465.cljs$core$IFn$_invoke$arity$1 ? cb_52465.cljs$core$IFn$_invoke$arity$1(G__52439_52466) : cb_52465.call(null,G__52439_52466));
}catch (e52438){var e_52467 = e52438;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52464,"while storing",cljs.core.deref(re_frame.trace.traces),e_52467], 0));
}

var G__52468 = cljs.core.next(seq__52416_52457__$1);
var G__52469 = null;
var G__52470 = (0);
var G__52471 = (0);
seq__52416_52443 = G__52468;
chunk__52417_52444 = G__52469;
count__52418_52445 = G__52470;
i__52419_52446 = G__52471;
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
