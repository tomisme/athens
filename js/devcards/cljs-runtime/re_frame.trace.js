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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__45943){
var map__45944 = p__45943;
var map__45944__$1 = (((((!((map__45944 == null))))?(((((map__45944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45944):map__45944);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45944__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45944__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45944__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45944__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__45946_45973 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__45947_45974 = null;
var count__45948_45975 = (0);
var i__45949_45976 = (0);
while(true){
if((i__45949_45976 < count__45948_45975)){
var vec__45960_45977 = chunk__45947_45974.cljs$core$IIndexed$_nth$arity$2(null,i__45949_45976);
var k_45978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960_45977,(0),null);
var cb_45979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960_45977,(1),null);
try{var G__45964_45980 = cljs.core.deref(re_frame.trace.traces);
(cb_45979.cljs$core$IFn$_invoke$arity$1 ? cb_45979.cljs$core$IFn$_invoke$arity$1(G__45964_45980) : cb_45979.call(null,G__45964_45980));
}catch (e45963){var e_45981 = e45963;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_45978,"while storing",cljs.core.deref(re_frame.trace.traces),e_45981], 0));
}

var G__45982 = seq__45946_45973;
var G__45983 = chunk__45947_45974;
var G__45984 = count__45948_45975;
var G__45985 = (i__45949_45976 + (1));
seq__45946_45973 = G__45982;
chunk__45947_45974 = G__45983;
count__45948_45975 = G__45984;
i__45949_45976 = G__45985;
continue;
} else {
var temp__5735__auto___45986 = cljs.core.seq(seq__45946_45973);
if(temp__5735__auto___45986){
var seq__45946_45987__$1 = temp__5735__auto___45986;
if(cljs.core.chunked_seq_QMARK_(seq__45946_45987__$1)){
var c__4609__auto___45988 = cljs.core.chunk_first(seq__45946_45987__$1);
var G__45989 = cljs.core.chunk_rest(seq__45946_45987__$1);
var G__45990 = c__4609__auto___45988;
var G__45991 = cljs.core.count(c__4609__auto___45988);
var G__45992 = (0);
seq__45946_45973 = G__45989;
chunk__45947_45974 = G__45990;
count__45948_45975 = G__45991;
i__45949_45976 = G__45992;
continue;
} else {
var vec__45965_45993 = cljs.core.first(seq__45946_45987__$1);
var k_45994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45965_45993,(0),null);
var cb_45995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45965_45993,(1),null);
try{var G__45969_45996 = cljs.core.deref(re_frame.trace.traces);
(cb_45995.cljs$core$IFn$_invoke$arity$1 ? cb_45995.cljs$core$IFn$_invoke$arity$1(G__45969_45996) : cb_45995.call(null,G__45969_45996));
}catch (e45968){var e_45997 = e45968;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_45994,"while storing",cljs.core.deref(re_frame.trace.traces),e_45997], 0));
}

var G__45998 = cljs.core.next(seq__45946_45987__$1);
var G__45999 = null;
var G__46000 = (0);
var G__46001 = (0);
seq__45946_45973 = G__45998;
chunk__45947_45974 = G__45999;
count__45948_45975 = G__46000;
i__45949_45976 = G__46001;
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
