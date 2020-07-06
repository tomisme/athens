goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47744 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47745 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47745);

try{try{var seq__47746 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47747 = null;
var count__47748 = (0);
var i__47749 = (0);
while(true){
if((i__47749 < count__47748)){
var vec__47756 = chunk__47747.cljs$core$IIndexed$_nth$arity$2(null,i__47749);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47756,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47756,(1),null);
var temp__5733__auto___47826 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47826)){
var effect_fn_47843 = temp__5733__auto___47826;
(effect_fn_47843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47843.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47844 = seq__47746;
var G__47845 = chunk__47747;
var G__47846 = count__47748;
var G__47847 = (i__47749 + (1));
seq__47746 = G__47844;
chunk__47747 = G__47845;
count__47748 = G__47846;
i__47749 = G__47847;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47746);
if(temp__5735__auto__){
var seq__47746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47746__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47746__$1);
var G__47848 = cljs.core.chunk_rest(seq__47746__$1);
var G__47849 = c__4609__auto__;
var G__47850 = cljs.core.count(c__4609__auto__);
var G__47851 = (0);
seq__47746 = G__47848;
chunk__47747 = G__47849;
count__47748 = G__47850;
i__47749 = G__47851;
continue;
} else {
var vec__47759 = cljs.core.first(seq__47746__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47759,(1),null);
var temp__5733__auto___47852 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47852)){
var effect_fn_47853 = temp__5733__auto___47852;
(effect_fn_47853.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47853.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47853.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47854 = cljs.core.next(seq__47746__$1);
var G__47855 = null;
var G__47856 = (0);
var G__47857 = (0);
seq__47746 = G__47854;
chunk__47747 = G__47855;
count__47748 = G__47856;
i__47749 = G__47857;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47477__auto___47860 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47478__auto___47861 = (end__47477__auto___47860 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47478__auto___47861,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47477__auto___47860);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47744);
}} else {
var seq__47765 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47766 = null;
var count__47767 = (0);
var i__47768 = (0);
while(true){
if((i__47768 < count__47767)){
var vec__47782 = chunk__47766.cljs$core$IIndexed$_nth$arity$2(null,i__47768);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47782,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47782,(1),null);
var temp__5733__auto___47862 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47862)){
var effect_fn_47863 = temp__5733__auto___47862;
(effect_fn_47863.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47863.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47863.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47864 = seq__47765;
var G__47865 = chunk__47766;
var G__47866 = count__47767;
var G__47867 = (i__47768 + (1));
seq__47765 = G__47864;
chunk__47766 = G__47865;
count__47767 = G__47866;
i__47768 = G__47867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47765);
if(temp__5735__auto__){
var seq__47765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47765__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47765__$1);
var G__47869 = cljs.core.chunk_rest(seq__47765__$1);
var G__47870 = c__4609__auto__;
var G__47871 = cljs.core.count(c__4609__auto__);
var G__47872 = (0);
seq__47765 = G__47869;
chunk__47766 = G__47870;
count__47767 = G__47871;
i__47768 = G__47872;
continue;
} else {
var vec__47785 = cljs.core.first(seq__47765__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(1),null);
var temp__5733__auto___47873 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47873)){
var effect_fn_47874 = temp__5733__auto___47873;
(effect_fn_47874.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47874.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47874.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47875 = cljs.core.next(seq__47765__$1);
var G__47876 = null;
var G__47877 = (0);
var G__47878 = (0);
seq__47765 = G__47875;
chunk__47766 = G__47876;
count__47767 = G__47877;
i__47768 = G__47878;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47788 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47789 = null;
var count__47790 = (0);
var i__47791 = (0);
while(true){
if((i__47791 < count__47790)){
var map__47799 = chunk__47789.cljs$core$IIndexed$_nth$arity$2(null,i__47791);
var map__47799__$1 = (((((!((map__47799 == null))))?(((((map__47799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47799):map__47799);
var effect = map__47799__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47799__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47788,chunk__47789,count__47790,i__47791,map__47799,map__47799__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47788,chunk__47789,count__47790,i__47791,map__47799,map__47799__$1,effect,ms,dispatch))
,ms);
}


var G__47884 = seq__47788;
var G__47885 = chunk__47789;
var G__47886 = count__47790;
var G__47887 = (i__47791 + (1));
seq__47788 = G__47884;
chunk__47789 = G__47885;
count__47790 = G__47886;
i__47791 = G__47887;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47788);
if(temp__5735__auto__){
var seq__47788__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47788__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47788__$1);
var G__47888 = cljs.core.chunk_rest(seq__47788__$1);
var G__47889 = c__4609__auto__;
var G__47890 = cljs.core.count(c__4609__auto__);
var G__47891 = (0);
seq__47788 = G__47888;
chunk__47789 = G__47889;
count__47790 = G__47890;
i__47791 = G__47891;
continue;
} else {
var map__47809 = cljs.core.first(seq__47788__$1);
var map__47809__$1 = (((((!((map__47809 == null))))?(((((map__47809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47809):map__47809);
var effect = map__47809__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47809__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47809__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47788,chunk__47789,count__47790,i__47791,map__47809,map__47809__$1,effect,ms,dispatch,seq__47788__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47788,chunk__47789,count__47790,i__47791,map__47809,map__47809__$1,effect,ms,dispatch,seq__47788__$1,temp__5735__auto__))
,ms);
}


var G__47895 = cljs.core.next(seq__47788__$1);
var G__47896 = null;
var G__47897 = (0);
var G__47898 = (0);
seq__47788 = G__47895;
chunk__47789 = G__47896;
count__47790 = G__47897;
i__47791 = G__47898;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47812 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47813 = null;
var count__47814 = (0);
var i__47815 = (0);
while(true){
if((i__47815 < count__47814)){
var event = chunk__47813.cljs$core$IIndexed$_nth$arity$2(null,i__47815);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47902 = seq__47812;
var G__47903 = chunk__47813;
var G__47904 = count__47814;
var G__47905 = (i__47815 + (1));
seq__47812 = G__47902;
chunk__47813 = G__47903;
count__47814 = G__47904;
i__47815 = G__47905;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47812);
if(temp__5735__auto__){
var seq__47812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47812__$1);
var G__47906 = cljs.core.chunk_rest(seq__47812__$1);
var G__47907 = c__4609__auto__;
var G__47908 = cljs.core.count(c__4609__auto__);
var G__47909 = (0);
seq__47812 = G__47906;
chunk__47813 = G__47907;
count__47814 = G__47908;
i__47815 = G__47909;
continue;
} else {
var event = cljs.core.first(seq__47812__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47910 = cljs.core.next(seq__47812__$1);
var G__47911 = null;
var G__47912 = (0);
var G__47913 = (0);
seq__47812 = G__47910;
chunk__47813 = G__47911;
count__47814 = G__47912;
i__47815 = G__47913;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47817 = cljs.core.seq(value);
var chunk__47818 = null;
var count__47819 = (0);
var i__47820 = (0);
while(true){
if((i__47820 < count__47819)){
var event = chunk__47818.cljs$core$IIndexed$_nth$arity$2(null,i__47820);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47916 = seq__47817;
var G__47917 = chunk__47818;
var G__47918 = count__47819;
var G__47919 = (i__47820 + (1));
seq__47817 = G__47916;
chunk__47818 = G__47917;
count__47819 = G__47918;
i__47820 = G__47919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47817);
if(temp__5735__auto__){
var seq__47817__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47817__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47817__$1);
var G__47922 = cljs.core.chunk_rest(seq__47817__$1);
var G__47923 = c__4609__auto__;
var G__47924 = cljs.core.count(c__4609__auto__);
var G__47925 = (0);
seq__47817 = G__47922;
chunk__47818 = G__47923;
count__47819 = G__47924;
i__47820 = G__47925;
continue;
} else {
var event = cljs.core.first(seq__47817__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47927 = cljs.core.next(seq__47817__$1);
var G__47928 = null;
var G__47929 = (0);
var G__47930 = (0);
seq__47817 = G__47927;
chunk__47818 = G__47928;
count__47819 = G__47929;
i__47820 = G__47930;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
