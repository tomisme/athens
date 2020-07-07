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
var _STAR_current_trace_STAR__orig_val__46761 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46762 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46762);

try{try{var seq__46763 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46764 = null;
var count__46765 = (0);
var i__46766 = (0);
while(true){
if((i__46766 < count__46765)){
var vec__46773 = chunk__46764.cljs$core$IIndexed$_nth$arity$2(null,i__46766);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46773,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46773,(1),null);
var temp__5733__auto___46818 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46818)){
var effect_fn_46819 = temp__5733__auto___46818;
(effect_fn_46819.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46819.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46819.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46820 = seq__46763;
var G__46821 = chunk__46764;
var G__46822 = count__46765;
var G__46823 = (i__46766 + (1));
seq__46763 = G__46820;
chunk__46764 = G__46821;
count__46765 = G__46822;
i__46766 = G__46823;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46763);
if(temp__5735__auto__){
var seq__46763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46763__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46763__$1);
var G__46824 = cljs.core.chunk_rest(seq__46763__$1);
var G__46825 = c__4609__auto__;
var G__46826 = cljs.core.count(c__4609__auto__);
var G__46827 = (0);
seq__46763 = G__46824;
chunk__46764 = G__46825;
count__46765 = G__46826;
i__46766 = G__46827;
continue;
} else {
var vec__46776 = cljs.core.first(seq__46763__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(1),null);
var temp__5733__auto___46828 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46828)){
var effect_fn_46829 = temp__5733__auto___46828;
(effect_fn_46829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46829.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46830 = cljs.core.next(seq__46763__$1);
var G__46831 = null;
var G__46832 = (0);
var G__46833 = (0);
seq__46763 = G__46830;
chunk__46764 = G__46831;
count__46765 = G__46832;
i__46766 = G__46833;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45927__auto___46834 = re_frame.interop.now();
var duration__45928__auto___46835 = (end__45927__auto___46834 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45928__auto___46835,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45927__auto___46834);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46761);
}} else {
var seq__46779 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46780 = null;
var count__46781 = (0);
var i__46782 = (0);
while(true){
if((i__46782 < count__46781)){
var vec__46789 = chunk__46780.cljs$core$IIndexed$_nth$arity$2(null,i__46782);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(1),null);
var temp__5733__auto___46836 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46836)){
var effect_fn_46837 = temp__5733__auto___46836;
(effect_fn_46837.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46837.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46837.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46838 = seq__46779;
var G__46839 = chunk__46780;
var G__46840 = count__46781;
var G__46841 = (i__46782 + (1));
seq__46779 = G__46838;
chunk__46780 = G__46839;
count__46781 = G__46840;
i__46782 = G__46841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46779);
if(temp__5735__auto__){
var seq__46779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46779__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46779__$1);
var G__46842 = cljs.core.chunk_rest(seq__46779__$1);
var G__46843 = c__4609__auto__;
var G__46844 = cljs.core.count(c__4609__auto__);
var G__46845 = (0);
seq__46779 = G__46842;
chunk__46780 = G__46843;
count__46781 = G__46844;
i__46782 = G__46845;
continue;
} else {
var vec__46792 = cljs.core.first(seq__46779__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46792,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46792,(1),null);
var temp__5733__auto___46846 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46846)){
var effect_fn_46847 = temp__5733__auto___46846;
(effect_fn_46847.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46847.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46847.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46848 = cljs.core.next(seq__46779__$1);
var G__46849 = null;
var G__46850 = (0);
var G__46851 = (0);
seq__46779 = G__46848;
chunk__46780 = G__46849;
count__46781 = G__46850;
i__46782 = G__46851;
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
var seq__46795 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46796 = null;
var count__46797 = (0);
var i__46798 = (0);
while(true){
if((i__46798 < count__46797)){
var map__46803 = chunk__46796.cljs$core$IIndexed$_nth$arity$2(null,i__46798);
var map__46803__$1 = (((((!((map__46803 == null))))?(((((map__46803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46803):map__46803);
var effect = map__46803__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46803__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46803__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46795,chunk__46796,count__46797,i__46798,map__46803,map__46803__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46795,chunk__46796,count__46797,i__46798,map__46803,map__46803__$1,effect,ms,dispatch))
,ms);
}


var G__46852 = seq__46795;
var G__46853 = chunk__46796;
var G__46854 = count__46797;
var G__46855 = (i__46798 + (1));
seq__46795 = G__46852;
chunk__46796 = G__46853;
count__46797 = G__46854;
i__46798 = G__46855;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46795);
if(temp__5735__auto__){
var seq__46795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46795__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46795__$1);
var G__46856 = cljs.core.chunk_rest(seq__46795__$1);
var G__46857 = c__4609__auto__;
var G__46858 = cljs.core.count(c__4609__auto__);
var G__46859 = (0);
seq__46795 = G__46856;
chunk__46796 = G__46857;
count__46797 = G__46858;
i__46798 = G__46859;
continue;
} else {
var map__46805 = cljs.core.first(seq__46795__$1);
var map__46805__$1 = (((((!((map__46805 == null))))?(((((map__46805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46805):map__46805);
var effect = map__46805__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46805__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46805__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46795,chunk__46796,count__46797,i__46798,map__46805,map__46805__$1,effect,ms,dispatch,seq__46795__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46795,chunk__46796,count__46797,i__46798,map__46805,map__46805__$1,effect,ms,dispatch,seq__46795__$1,temp__5735__auto__))
,ms);
}


var G__46860 = cljs.core.next(seq__46795__$1);
var G__46861 = null;
var G__46862 = (0);
var G__46863 = (0);
seq__46795 = G__46860;
chunk__46796 = G__46861;
count__46797 = G__46862;
i__46798 = G__46863;
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
var seq__46809 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46810 = null;
var count__46811 = (0);
var i__46812 = (0);
while(true){
if((i__46812 < count__46811)){
var event = chunk__46810.cljs$core$IIndexed$_nth$arity$2(null,i__46812);
re_frame.router.dispatch(event);


var G__46864 = seq__46809;
var G__46865 = chunk__46810;
var G__46866 = count__46811;
var G__46867 = (i__46812 + (1));
seq__46809 = G__46864;
chunk__46810 = G__46865;
count__46811 = G__46866;
i__46812 = G__46867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46809);
if(temp__5735__auto__){
var seq__46809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46809__$1);
var G__46868 = cljs.core.chunk_rest(seq__46809__$1);
var G__46869 = c__4609__auto__;
var G__46870 = cljs.core.count(c__4609__auto__);
var G__46871 = (0);
seq__46809 = G__46868;
chunk__46810 = G__46869;
count__46811 = G__46870;
i__46812 = G__46871;
continue;
} else {
var event = cljs.core.first(seq__46809__$1);
re_frame.router.dispatch(event);


var G__46872 = cljs.core.next(seq__46809__$1);
var G__46873 = null;
var G__46874 = (0);
var G__46875 = (0);
seq__46809 = G__46872;
chunk__46810 = G__46873;
count__46811 = G__46874;
i__46812 = G__46875;
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
var seq__46813 = cljs.core.seq(value);
var chunk__46814 = null;
var count__46815 = (0);
var i__46816 = (0);
while(true){
if((i__46816 < count__46815)){
var event = chunk__46814.cljs$core$IIndexed$_nth$arity$2(null,i__46816);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46876 = seq__46813;
var G__46877 = chunk__46814;
var G__46878 = count__46815;
var G__46879 = (i__46816 + (1));
seq__46813 = G__46876;
chunk__46814 = G__46877;
count__46815 = G__46878;
i__46816 = G__46879;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46813);
if(temp__5735__auto__){
var seq__46813__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46813__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46813__$1);
var G__46880 = cljs.core.chunk_rest(seq__46813__$1);
var G__46881 = c__4609__auto__;
var G__46882 = cljs.core.count(c__4609__auto__);
var G__46883 = (0);
seq__46813 = G__46880;
chunk__46814 = G__46881;
count__46815 = G__46882;
i__46816 = G__46883;
continue;
} else {
var event = cljs.core.first(seq__46813__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46884 = cljs.core.next(seq__46813__$1);
var G__46885 = null;
var G__46886 = (0);
var G__46887 = (0);
seq__46813 = G__46884;
chunk__46814 = G__46885;
count__46815 = G__46886;
i__46816 = G__46887;
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
