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
var _STAR_current_trace_STAR__orig_val__52660 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52661 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52661);

try{try{var seq__52663 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52664 = null;
var count__52665 = (0);
var i__52666 = (0);
while(true){
if((i__52666 < count__52665)){
var vec__52674 = chunk__52664.cljs$core$IIndexed$_nth$arity$2(null,i__52666);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52674,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52674,(1),null);
var temp__5733__auto___52734 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52734)){
var effect_fn_52735 = temp__5733__auto___52734;
(effect_fn_52735.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52735.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52735.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52736 = seq__52663;
var G__52737 = chunk__52664;
var G__52738 = count__52665;
var G__52739 = (i__52666 + (1));
seq__52663 = G__52736;
chunk__52664 = G__52737;
count__52665 = G__52738;
i__52666 = G__52739;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52663);
if(temp__5735__auto__){
var seq__52663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52663__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52663__$1);
var G__52740 = cljs.core.chunk_rest(seq__52663__$1);
var G__52741 = c__4609__auto__;
var G__52742 = cljs.core.count(c__4609__auto__);
var G__52743 = (0);
seq__52663 = G__52740;
chunk__52664 = G__52741;
count__52665 = G__52742;
i__52666 = G__52743;
continue;
} else {
var vec__52679 = cljs.core.first(seq__52663__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52679,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52679,(1),null);
var temp__5733__auto___52744 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52744)){
var effect_fn_52745 = temp__5733__auto___52744;
(effect_fn_52745.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52745.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52745.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52756 = cljs.core.next(seq__52663__$1);
var G__52757 = null;
var G__52758 = (0);
var G__52759 = (0);
seq__52663 = G__52756;
chunk__52664 = G__52757;
count__52665 = G__52758;
i__52666 = G__52759;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52393__auto___52760 = re_frame.interop.now();
var duration__52394__auto___52761 = (end__52393__auto___52760 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52394__auto___52761,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52393__auto___52760);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52660);
}} else {
var seq__52682 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52683 = null;
var count__52684 = (0);
var i__52685 = (0);
while(true){
if((i__52685 < count__52684)){
var vec__52693 = chunk__52683.cljs$core$IIndexed$_nth$arity$2(null,i__52685);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52693,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52693,(1),null);
var temp__5733__auto___52772 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52772)){
var effect_fn_52773 = temp__5733__auto___52772;
(effect_fn_52773.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52773.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52773.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52774 = seq__52682;
var G__52775 = chunk__52683;
var G__52776 = count__52684;
var G__52777 = (i__52685 + (1));
seq__52682 = G__52774;
chunk__52683 = G__52775;
count__52684 = G__52776;
i__52685 = G__52777;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52682);
if(temp__5735__auto__){
var seq__52682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52682__$1);
var G__52778 = cljs.core.chunk_rest(seq__52682__$1);
var G__52779 = c__4609__auto__;
var G__52780 = cljs.core.count(c__4609__auto__);
var G__52781 = (0);
seq__52682 = G__52778;
chunk__52683 = G__52779;
count__52684 = G__52780;
i__52685 = G__52781;
continue;
} else {
var vec__52708 = cljs.core.first(seq__52682__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52708,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52708,(1),null);
var temp__5733__auto___52782 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52782)){
var effect_fn_52783 = temp__5733__auto___52782;
(effect_fn_52783.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52783.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52783.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52784 = cljs.core.next(seq__52682__$1);
var G__52785 = null;
var G__52786 = (0);
var G__52787 = (0);
seq__52682 = G__52784;
chunk__52683 = G__52785;
count__52684 = G__52786;
i__52685 = G__52787;
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
var seq__52711 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52712 = null;
var count__52713 = (0);
var i__52714 = (0);
while(true){
if((i__52714 < count__52713)){
var map__52719 = chunk__52712.cljs$core$IIndexed$_nth$arity$2(null,i__52714);
var map__52719__$1 = (((((!((map__52719 == null))))?(((((map__52719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52719):map__52719);
var effect = map__52719__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52711,chunk__52712,count__52713,i__52714,map__52719,map__52719__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52711,chunk__52712,count__52713,i__52714,map__52719,map__52719__$1,effect,ms,dispatch))
,ms);
}


var G__52788 = seq__52711;
var G__52789 = chunk__52712;
var G__52790 = count__52713;
var G__52791 = (i__52714 + (1));
seq__52711 = G__52788;
chunk__52712 = G__52789;
count__52713 = G__52790;
i__52714 = G__52791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52711);
if(temp__5735__auto__){
var seq__52711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52711__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52711__$1);
var G__52792 = cljs.core.chunk_rest(seq__52711__$1);
var G__52793 = c__4609__auto__;
var G__52794 = cljs.core.count(c__4609__auto__);
var G__52795 = (0);
seq__52711 = G__52792;
chunk__52712 = G__52793;
count__52713 = G__52794;
i__52714 = G__52795;
continue;
} else {
var map__52721 = cljs.core.first(seq__52711__$1);
var map__52721__$1 = (((((!((map__52721 == null))))?(((((map__52721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52721):map__52721);
var effect = map__52721__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52711,chunk__52712,count__52713,i__52714,map__52721,map__52721__$1,effect,ms,dispatch,seq__52711__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52711,chunk__52712,count__52713,i__52714,map__52721,map__52721__$1,effect,ms,dispatch,seq__52711__$1,temp__5735__auto__))
,ms);
}


var G__52796 = cljs.core.next(seq__52711__$1);
var G__52797 = null;
var G__52798 = (0);
var G__52799 = (0);
seq__52711 = G__52796;
chunk__52712 = G__52797;
count__52713 = G__52798;
i__52714 = G__52799;
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
var seq__52723 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52724 = null;
var count__52725 = (0);
var i__52726 = (0);
while(true){
if((i__52726 < count__52725)){
var event = chunk__52724.cljs$core$IIndexed$_nth$arity$2(null,i__52726);
re_frame.router.dispatch(event);


var G__52802 = seq__52723;
var G__52803 = chunk__52724;
var G__52804 = count__52725;
var G__52805 = (i__52726 + (1));
seq__52723 = G__52802;
chunk__52724 = G__52803;
count__52725 = G__52804;
i__52726 = G__52805;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52723);
if(temp__5735__auto__){
var seq__52723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52723__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52723__$1);
var G__52811 = cljs.core.chunk_rest(seq__52723__$1);
var G__52812 = c__4609__auto__;
var G__52813 = cljs.core.count(c__4609__auto__);
var G__52814 = (0);
seq__52723 = G__52811;
chunk__52724 = G__52812;
count__52725 = G__52813;
i__52726 = G__52814;
continue;
} else {
var event = cljs.core.first(seq__52723__$1);
re_frame.router.dispatch(event);


var G__52815 = cljs.core.next(seq__52723__$1);
var G__52816 = null;
var G__52817 = (0);
var G__52818 = (0);
seq__52723 = G__52815;
chunk__52724 = G__52816;
count__52725 = G__52817;
i__52726 = G__52818;
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
var seq__52728 = cljs.core.seq(value);
var chunk__52729 = null;
var count__52730 = (0);
var i__52731 = (0);
while(true){
if((i__52731 < count__52730)){
var event = chunk__52729.cljs$core$IIndexed$_nth$arity$2(null,i__52731);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52819 = seq__52728;
var G__52820 = chunk__52729;
var G__52821 = count__52730;
var G__52822 = (i__52731 + (1));
seq__52728 = G__52819;
chunk__52729 = G__52820;
count__52730 = G__52821;
i__52731 = G__52822;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52728);
if(temp__5735__auto__){
var seq__52728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52728__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52728__$1);
var G__52823 = cljs.core.chunk_rest(seq__52728__$1);
var G__52824 = c__4609__auto__;
var G__52825 = cljs.core.count(c__4609__auto__);
var G__52826 = (0);
seq__52728 = G__52823;
chunk__52729 = G__52824;
count__52730 = G__52825;
i__52731 = G__52826;
continue;
} else {
var event = cljs.core.first(seq__52728__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52828 = cljs.core.next(seq__52728__$1);
var G__52829 = null;
var G__52830 = (0);
var G__52831 = (0);
seq__52728 = G__52828;
chunk__52729 = G__52829;
count__52730 = G__52830;
i__52731 = G__52831;
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
