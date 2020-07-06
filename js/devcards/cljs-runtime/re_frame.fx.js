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
var _STAR_current_trace_STAR__orig_val__59636 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__59637 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__59637);

try{try{var seq__59638 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__59639 = null;
var count__59640 = (0);
var i__59641 = (0);
while(true){
if((i__59641 < count__59640)){
var vec__59657 = chunk__59639.cljs$core$IIndexed$_nth$arity$2(null,i__59641);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59657,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59657,(1),null);
var temp__5733__auto___59760 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59760)){
var effect_fn_59761 = temp__5733__auto___59760;
(effect_fn_59761.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59761.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59761.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59762 = seq__59638;
var G__59763 = chunk__59639;
var G__59764 = count__59640;
var G__59765 = (i__59641 + (1));
seq__59638 = G__59762;
chunk__59639 = G__59763;
count__59640 = G__59764;
i__59641 = G__59765;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59638);
if(temp__5735__auto__){
var seq__59638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59638__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59638__$1);
var G__59766 = cljs.core.chunk_rest(seq__59638__$1);
var G__59767 = c__4609__auto__;
var G__59768 = cljs.core.count(c__4609__auto__);
var G__59769 = (0);
seq__59638 = G__59766;
chunk__59639 = G__59767;
count__59640 = G__59768;
i__59641 = G__59769;
continue;
} else {
var vec__59664 = cljs.core.first(seq__59638__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59664,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59664,(1),null);
var temp__5733__auto___59770 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59770)){
var effect_fn_59771 = temp__5733__auto___59770;
(effect_fn_59771.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59771.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59771.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59772 = cljs.core.next(seq__59638__$1);
var G__59773 = null;
var G__59774 = (0);
var G__59775 = (0);
seq__59638 = G__59772;
chunk__59639 = G__59773;
count__59640 = G__59774;
i__59641 = G__59775;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__58658__auto___59776 = re_frame.interop.now();
var duration__58659__auto___59777 = (end__58658__auto___59776 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__58659__auto___59777,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__58658__auto___59776);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__59636);
}} else {
var seq__59668 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__59669 = null;
var count__59670 = (0);
var i__59671 = (0);
while(true){
if((i__59671 < count__59670)){
var vec__59678 = chunk__59669.cljs$core$IIndexed$_nth$arity$2(null,i__59671);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59678,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59678,(1),null);
var temp__5733__auto___59779 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59779)){
var effect_fn_59780 = temp__5733__auto___59779;
(effect_fn_59780.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59780.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59780.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59781 = seq__59668;
var G__59782 = chunk__59669;
var G__59783 = count__59670;
var G__59784 = (i__59671 + (1));
seq__59668 = G__59781;
chunk__59669 = G__59782;
count__59670 = G__59783;
i__59671 = G__59784;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59668);
if(temp__5735__auto__){
var seq__59668__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59668__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59668__$1);
var G__59785 = cljs.core.chunk_rest(seq__59668__$1);
var G__59786 = c__4609__auto__;
var G__59787 = cljs.core.count(c__4609__auto__);
var G__59788 = (0);
seq__59668 = G__59785;
chunk__59669 = G__59786;
count__59670 = G__59787;
i__59671 = G__59788;
continue;
} else {
var vec__59685 = cljs.core.first(seq__59668__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59685,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59685,(1),null);
var temp__5733__auto___59789 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59789)){
var effect_fn_59790 = temp__5733__auto___59789;
(effect_fn_59790.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59790.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59790.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59791 = cljs.core.next(seq__59668__$1);
var G__59792 = null;
var G__59793 = (0);
var G__59794 = (0);
seq__59668 = G__59791;
chunk__59669 = G__59792;
count__59670 = G__59793;
i__59671 = G__59794;
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
var seq__59688 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__59689 = null;
var count__59690 = (0);
var i__59691 = (0);
while(true){
if((i__59691 < count__59690)){
var map__59711 = chunk__59689.cljs$core$IIndexed$_nth$arity$2(null,i__59691);
var map__59711__$1 = (((((!((map__59711 == null))))?(((((map__59711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59711):map__59711);
var effect = map__59711__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59711__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59711__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59688,chunk__59689,count__59690,i__59691,map__59711,map__59711__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__59688,chunk__59689,count__59690,i__59691,map__59711,map__59711__$1,effect,ms,dispatch))
,ms);
}


var G__59795 = seq__59688;
var G__59796 = chunk__59689;
var G__59797 = count__59690;
var G__59798 = (i__59691 + (1));
seq__59688 = G__59795;
chunk__59689 = G__59796;
count__59690 = G__59797;
i__59691 = G__59798;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59688);
if(temp__5735__auto__){
var seq__59688__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59688__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59688__$1);
var G__59805 = cljs.core.chunk_rest(seq__59688__$1);
var G__59806 = c__4609__auto__;
var G__59807 = cljs.core.count(c__4609__auto__);
var G__59808 = (0);
seq__59688 = G__59805;
chunk__59689 = G__59806;
count__59690 = G__59807;
i__59691 = G__59808;
continue;
} else {
var map__59737 = cljs.core.first(seq__59688__$1);
var map__59737__$1 = (((((!((map__59737 == null))))?(((((map__59737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59737):map__59737);
var effect = map__59737__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59737__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59737__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59688,chunk__59689,count__59690,i__59691,map__59737,map__59737__$1,effect,ms,dispatch,seq__59688__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__59688,chunk__59689,count__59690,i__59691,map__59737,map__59737__$1,effect,ms,dispatch,seq__59688__$1,temp__5735__auto__))
,ms);
}


var G__59809 = cljs.core.next(seq__59688__$1);
var G__59810 = null;
var G__59811 = (0);
var G__59812 = (0);
seq__59688 = G__59809;
chunk__59689 = G__59810;
count__59690 = G__59811;
i__59691 = G__59812;
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
var seq__59743 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__59744 = null;
var count__59745 = (0);
var i__59746 = (0);
while(true){
if((i__59746 < count__59745)){
var event = chunk__59744.cljs$core$IIndexed$_nth$arity$2(null,i__59746);
re_frame.router.dispatch(event);


var G__59813 = seq__59743;
var G__59814 = chunk__59744;
var G__59815 = count__59745;
var G__59816 = (i__59746 + (1));
seq__59743 = G__59813;
chunk__59744 = G__59814;
count__59745 = G__59815;
i__59746 = G__59816;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59743);
if(temp__5735__auto__){
var seq__59743__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59743__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59743__$1);
var G__59817 = cljs.core.chunk_rest(seq__59743__$1);
var G__59818 = c__4609__auto__;
var G__59819 = cljs.core.count(c__4609__auto__);
var G__59820 = (0);
seq__59743 = G__59817;
chunk__59744 = G__59818;
count__59745 = G__59819;
i__59746 = G__59820;
continue;
} else {
var event = cljs.core.first(seq__59743__$1);
re_frame.router.dispatch(event);


var G__59821 = cljs.core.next(seq__59743__$1);
var G__59822 = null;
var G__59823 = (0);
var G__59824 = (0);
seq__59743 = G__59821;
chunk__59744 = G__59822;
count__59745 = G__59823;
i__59746 = G__59824;
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
var seq__59748 = cljs.core.seq(value);
var chunk__59749 = null;
var count__59750 = (0);
var i__59751 = (0);
while(true){
if((i__59751 < count__59750)){
var event = chunk__59749.cljs$core$IIndexed$_nth$arity$2(null,i__59751);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__59825 = seq__59748;
var G__59826 = chunk__59749;
var G__59827 = count__59750;
var G__59828 = (i__59751 + (1));
seq__59748 = G__59825;
chunk__59749 = G__59826;
count__59750 = G__59827;
i__59751 = G__59828;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59748);
if(temp__5735__auto__){
var seq__59748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59748__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59748__$1);
var G__59831 = cljs.core.chunk_rest(seq__59748__$1);
var G__59832 = c__4609__auto__;
var G__59833 = cljs.core.count(c__4609__auto__);
var G__59834 = (0);
seq__59748 = G__59831;
chunk__59749 = G__59832;
count__59750 = G__59833;
i__59751 = G__59834;
continue;
} else {
var event = cljs.core.first(seq__59748__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__59835 = cljs.core.next(seq__59748__$1);
var G__59836 = null;
var G__59837 = (0);
var G__59838 = (0);
seq__59748 = G__59835;
chunk__59749 = G__59836;
count__59750 = G__59837;
i__59751 = G__59838;
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
