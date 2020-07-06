goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46757 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46758 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46758);

try{try{var seq__46759 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46760 = null;
var count__46761 = (0);
var i__46762 = (0);
while(true){
if((i__46762 < count__46761)){
var vec__46769 = chunk__46760.cljs$core$IIndexed$_nth$arity$2(null,i__46762);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46769,(1),null);
var temp__5733__auto___46814 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46814)){
var effect_fn_46815 = temp__5733__auto___46814;
(effect_fn_46815.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46815.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46815.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46816 = seq__46759;
var G__46817 = chunk__46760;
var G__46818 = count__46761;
var G__46819 = (i__46762 + (1));
seq__46759 = G__46816;
chunk__46760 = G__46817;
count__46761 = G__46818;
i__46762 = G__46819;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46759);
if(temp__5735__auto__){
var seq__46759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46759__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46759__$1);
var G__46820 = cljs.core.chunk_rest(seq__46759__$1);
var G__46821 = c__4609__auto__;
var G__46822 = cljs.core.count(c__4609__auto__);
var G__46823 = (0);
seq__46759 = G__46820;
chunk__46760 = G__46821;
count__46761 = G__46822;
i__46762 = G__46823;
continue;
} else {
var vec__46772 = cljs.core.first(seq__46759__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46772,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46772,(1),null);
var temp__5733__auto___46824 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46824)){
var effect_fn_46825 = temp__5733__auto___46824;
(effect_fn_46825.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46825.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46825.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46826 = cljs.core.next(seq__46759__$1);
var G__46827 = null;
var G__46828 = (0);
var G__46829 = (0);
seq__46759 = G__46826;
chunk__46760 = G__46827;
count__46761 = G__46828;
i__46762 = G__46829;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45923__auto___46830 = re_frame.interop.now();
var duration__45924__auto___46831 = (end__45923__auto___46830 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45924__auto___46831,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45923__auto___46830);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46757);
}} else {
var seq__46775 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46776 = null;
var count__46777 = (0);
var i__46778 = (0);
while(true){
if((i__46778 < count__46777)){
var vec__46785 = chunk__46776.cljs$core$IIndexed$_nth$arity$2(null,i__46778);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(1),null);
var temp__5733__auto___46832 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46832)){
var effect_fn_46833 = temp__5733__auto___46832;
(effect_fn_46833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46834 = seq__46775;
var G__46835 = chunk__46776;
var G__46836 = count__46777;
var G__46837 = (i__46778 + (1));
seq__46775 = G__46834;
chunk__46776 = G__46835;
count__46777 = G__46836;
i__46778 = G__46837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46775);
if(temp__5735__auto__){
var seq__46775__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46775__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46775__$1);
var G__46838 = cljs.core.chunk_rest(seq__46775__$1);
var G__46839 = c__4609__auto__;
var G__46840 = cljs.core.count(c__4609__auto__);
var G__46841 = (0);
seq__46775 = G__46838;
chunk__46776 = G__46839;
count__46777 = G__46840;
i__46778 = G__46841;
continue;
} else {
var vec__46790 = cljs.core.first(seq__46775__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46790,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46790,(1),null);
var temp__5733__auto___46842 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46842)){
var effect_fn_46843 = temp__5733__auto___46842;
(effect_fn_46843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46843.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46844 = cljs.core.next(seq__46775__$1);
var G__46845 = null;
var G__46846 = (0);
var G__46847 = (0);
seq__46775 = G__46844;
chunk__46776 = G__46845;
count__46777 = G__46846;
i__46778 = G__46847;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46793 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46794 = null;
var count__46795 = (0);
var i__46796 = (0);
while(true){
if((i__46796 < count__46795)){
var map__46802 = chunk__46794.cljs$core$IIndexed$_nth$arity$2(null,i__46796);
var map__46802__$1 = (((((!((map__46802 == null))))?(((((map__46802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46802):map__46802);
var effect = map__46802__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46802__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46802__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46793,chunk__46794,count__46795,i__46796,map__46802,map__46802__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46793,chunk__46794,count__46795,i__46796,map__46802,map__46802__$1,effect,ms,dispatch))
,ms);
}


var G__46848 = seq__46793;
var G__46849 = chunk__46794;
var G__46850 = count__46795;
var G__46851 = (i__46796 + (1));
seq__46793 = G__46848;
chunk__46794 = G__46849;
count__46795 = G__46850;
i__46796 = G__46851;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46793);
if(temp__5735__auto__){
var seq__46793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46793__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46793__$1);
var G__46852 = cljs.core.chunk_rest(seq__46793__$1);
var G__46853 = c__4609__auto__;
var G__46854 = cljs.core.count(c__4609__auto__);
var G__46855 = (0);
seq__46793 = G__46852;
chunk__46794 = G__46853;
count__46795 = G__46854;
i__46796 = G__46855;
continue;
} else {
var map__46804 = cljs.core.first(seq__46793__$1);
var map__46804__$1 = (((((!((map__46804 == null))))?(((((map__46804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46804):map__46804);
var effect = map__46804__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46793,chunk__46794,count__46795,i__46796,map__46804,map__46804__$1,effect,ms,dispatch,seq__46793__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46793,chunk__46794,count__46795,i__46796,map__46804,map__46804__$1,effect,ms,dispatch,seq__46793__$1,temp__5735__auto__))
,ms);
}


var G__46856 = cljs.core.next(seq__46793__$1);
var G__46857 = null;
var G__46858 = (0);
var G__46859 = (0);
seq__46793 = G__46856;
chunk__46794 = G__46857;
count__46795 = G__46858;
i__46796 = G__46859;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46806 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46807 = null;
var count__46808 = (0);
var i__46809 = (0);
while(true){
if((i__46809 < count__46808)){
var event = chunk__46807.cljs$core$IIndexed$_nth$arity$2(null,i__46809);
re_frame.router.dispatch(event);


var G__46863 = seq__46806;
var G__46864 = chunk__46807;
var G__46865 = count__46808;
var G__46866 = (i__46809 + (1));
seq__46806 = G__46863;
chunk__46807 = G__46864;
count__46808 = G__46865;
i__46809 = G__46866;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46806);
if(temp__5735__auto__){
var seq__46806__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46806__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46806__$1);
var G__46867 = cljs.core.chunk_rest(seq__46806__$1);
var G__46868 = c__4609__auto__;
var G__46869 = cljs.core.count(c__4609__auto__);
var G__46870 = (0);
seq__46806 = G__46867;
chunk__46807 = G__46868;
count__46808 = G__46869;
i__46809 = G__46870;
continue;
} else {
var event = cljs.core.first(seq__46806__$1);
re_frame.router.dispatch(event);


var G__46871 = cljs.core.next(seq__46806__$1);
var G__46872 = null;
var G__46873 = (0);
var G__46874 = (0);
seq__46806 = G__46871;
chunk__46807 = G__46872;
count__46808 = G__46873;
i__46809 = G__46874;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46810 = cljs.core.seq(value);
var chunk__46811 = null;
var count__46812 = (0);
var i__46813 = (0);
while(true){
if((i__46813 < count__46812)){
var event = chunk__46811.cljs$core$IIndexed$_nth$arity$2(null,i__46813);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46875 = seq__46810;
var G__46876 = chunk__46811;
var G__46877 = count__46812;
var G__46878 = (i__46813 + (1));
seq__46810 = G__46875;
chunk__46811 = G__46876;
count__46812 = G__46877;
i__46813 = G__46878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46810);
if(temp__5735__auto__){
var seq__46810__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46810__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46810__$1);
var G__46879 = cljs.core.chunk_rest(seq__46810__$1);
var G__46880 = c__4609__auto__;
var G__46881 = cljs.core.count(c__4609__auto__);
var G__46882 = (0);
seq__46810 = G__46879;
chunk__46811 = G__46880;
count__46812 = G__46881;
i__46813 = G__46882;
continue;
} else {
var event = cljs.core.first(seq__46810__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46883 = cljs.core.next(seq__46810__$1);
var G__46884 = null;
var G__46885 = (0);
var G__46886 = (0);
seq__46810 = G__46883;
chunk__46811 = G__46884;
count__46812 = G__46885;
i__46813 = G__46886;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
