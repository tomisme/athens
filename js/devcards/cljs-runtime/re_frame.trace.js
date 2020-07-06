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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__58701){
var map__58702 = p__58701;
var map__58702__$1 = (((((!((map__58702 == null))))?(((((map__58702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58702):map__58702);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__58711_58759 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__58712_58760 = null;
var count__58713_58761 = (0);
var i__58714_58762 = (0);
while(true){
if((i__58714_58762 < count__58713_58761)){
var vec__58732_58763 = chunk__58712_58760.cljs$core$IIndexed$_nth$arity$2(null,i__58714_58762);
var k_58764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58732_58763,(0),null);
var cb_58765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58732_58763,(1),null);
try{var G__58736_58771 = cljs.core.deref(re_frame.trace.traces);
(cb_58765.cljs$core$IFn$_invoke$arity$1 ? cb_58765.cljs$core$IFn$_invoke$arity$1(G__58736_58771) : cb_58765.call(null,G__58736_58771));
}catch (e58735){var e_58774 = e58735;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_58764,"while storing",cljs.core.deref(re_frame.trace.traces),e_58774], 0));
}

var G__58775 = seq__58711_58759;
var G__58776 = chunk__58712_58760;
var G__58777 = count__58713_58761;
var G__58778 = (i__58714_58762 + (1));
seq__58711_58759 = G__58775;
chunk__58712_58760 = G__58776;
count__58713_58761 = G__58777;
i__58714_58762 = G__58778;
continue;
} else {
var temp__5735__auto___58779 = cljs.core.seq(seq__58711_58759);
if(temp__5735__auto___58779){
var seq__58711_58780__$1 = temp__5735__auto___58779;
if(cljs.core.chunked_seq_QMARK_(seq__58711_58780__$1)){
var c__4609__auto___58781 = cljs.core.chunk_first(seq__58711_58780__$1);
var G__58782 = cljs.core.chunk_rest(seq__58711_58780__$1);
var G__58783 = c__4609__auto___58781;
var G__58784 = cljs.core.count(c__4609__auto___58781);
var G__58785 = (0);
seq__58711_58759 = G__58782;
chunk__58712_58760 = G__58783;
count__58713_58761 = G__58784;
i__58714_58762 = G__58785;
continue;
} else {
var vec__58737_58786 = cljs.core.first(seq__58711_58780__$1);
var k_58787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58737_58786,(0),null);
var cb_58788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58737_58786,(1),null);
try{var G__58741_58789 = cljs.core.deref(re_frame.trace.traces);
(cb_58788.cljs$core$IFn$_invoke$arity$1 ? cb_58788.cljs$core$IFn$_invoke$arity$1(G__58741_58789) : cb_58788.call(null,G__58741_58789));
}catch (e58740){var e_58790 = e58740;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_58787,"while storing",cljs.core.deref(re_frame.trace.traces),e_58790], 0));
}

var G__58791 = cljs.core.next(seq__58711_58780__$1);
var G__58792 = null;
var G__58793 = (0);
var G__58794 = (0);
seq__58711_58759 = G__58791;
chunk__58712_58760 = G__58792;
count__58713_58761 = G__58793;
i__58714_58762 = G__58794;
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
