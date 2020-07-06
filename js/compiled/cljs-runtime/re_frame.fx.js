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
var _STAR_current_trace_STAR__orig_val__39859 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39860 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39860);

try{try{var seq__39861 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39862 = null;
var count__39863 = (0);
var i__39864 = (0);
while(true){
if((i__39864 < count__39863)){
var vec__39871 = chunk__39862.cljs$core$IIndexed$_nth$arity$2(null,i__39864);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39871,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39871,(1),null);
var temp__5733__auto___39916 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39916)){
var effect_fn_39917 = temp__5733__auto___39916;
(effect_fn_39917.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39917.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39917.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39918 = seq__39861;
var G__39919 = chunk__39862;
var G__39920 = count__39863;
var G__39921 = (i__39864 + (1));
seq__39861 = G__39918;
chunk__39862 = G__39919;
count__39863 = G__39920;
i__39864 = G__39921;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39861);
if(temp__5735__auto__){
var seq__39861__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39861__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39861__$1);
var G__39922 = cljs.core.chunk_rest(seq__39861__$1);
var G__39923 = c__4609__auto__;
var G__39924 = cljs.core.count(c__4609__auto__);
var G__39925 = (0);
seq__39861 = G__39922;
chunk__39862 = G__39923;
count__39863 = G__39924;
i__39864 = G__39925;
continue;
} else {
var vec__39874 = cljs.core.first(seq__39861__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39874,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39874,(1),null);
var temp__5733__auto___39926 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39926)){
var effect_fn_39927 = temp__5733__auto___39926;
(effect_fn_39927.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39927.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39927.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39928 = cljs.core.next(seq__39861__$1);
var G__39929 = null;
var G__39930 = (0);
var G__39931 = (0);
seq__39861 = G__39928;
chunk__39862 = G__39929;
count__39863 = G__39930;
i__39864 = G__39931;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39578__auto___39932 = re_frame.interop.now();
var duration__39579__auto___39933 = (end__39578__auto___39932 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39579__auto___39933,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39578__auto___39932);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39859);
}} else {
var seq__39877 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39878 = null;
var count__39879 = (0);
var i__39880 = (0);
while(true){
if((i__39880 < count__39879)){
var vec__39889 = chunk__39878.cljs$core$IIndexed$_nth$arity$2(null,i__39880);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39889,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39889,(1),null);
var temp__5733__auto___39934 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39934)){
var effect_fn_39935 = temp__5733__auto___39934;
(effect_fn_39935.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39935.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39935.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39936 = seq__39877;
var G__39937 = chunk__39878;
var G__39938 = count__39879;
var G__39939 = (i__39880 + (1));
seq__39877 = G__39936;
chunk__39878 = G__39937;
count__39879 = G__39938;
i__39880 = G__39939;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39877);
if(temp__5735__auto__){
var seq__39877__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39877__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39877__$1);
var G__39940 = cljs.core.chunk_rest(seq__39877__$1);
var G__39941 = c__4609__auto__;
var G__39942 = cljs.core.count(c__4609__auto__);
var G__39943 = (0);
seq__39877 = G__39940;
chunk__39878 = G__39941;
count__39879 = G__39942;
i__39880 = G__39943;
continue;
} else {
var vec__39892 = cljs.core.first(seq__39877__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39892,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39892,(1),null);
var temp__5733__auto___39944 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39944)){
var effect_fn_39945 = temp__5733__auto___39944;
(effect_fn_39945.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39945.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39945.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39946 = cljs.core.next(seq__39877__$1);
var G__39947 = null;
var G__39948 = (0);
var G__39949 = (0);
seq__39877 = G__39946;
chunk__39878 = G__39947;
count__39879 = G__39948;
i__39880 = G__39949;
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
var seq__39896 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39897 = null;
var count__39898 = (0);
var i__39899 = (0);
while(true){
if((i__39899 < count__39898)){
var map__39904 = chunk__39897.cljs$core$IIndexed$_nth$arity$2(null,i__39899);
var map__39904__$1 = (((((!((map__39904 == null))))?(((((map__39904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39904):map__39904);
var effect = map__39904__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39904__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39904__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39896,chunk__39897,count__39898,i__39899,map__39904,map__39904__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39896,chunk__39897,count__39898,i__39899,map__39904,map__39904__$1,effect,ms,dispatch))
,ms);
}


var G__39953 = seq__39896;
var G__39954 = chunk__39897;
var G__39955 = count__39898;
var G__39956 = (i__39899 + (1));
seq__39896 = G__39953;
chunk__39897 = G__39954;
count__39898 = G__39955;
i__39899 = G__39956;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39896);
if(temp__5735__auto__){
var seq__39896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39896__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39896__$1);
var G__39957 = cljs.core.chunk_rest(seq__39896__$1);
var G__39958 = c__4609__auto__;
var G__39959 = cljs.core.count(c__4609__auto__);
var G__39960 = (0);
seq__39896 = G__39957;
chunk__39897 = G__39958;
count__39898 = G__39959;
i__39899 = G__39960;
continue;
} else {
var map__39906 = cljs.core.first(seq__39896__$1);
var map__39906__$1 = (((((!((map__39906 == null))))?(((((map__39906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39906):map__39906);
var effect = map__39906__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39906__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39906__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39896,chunk__39897,count__39898,i__39899,map__39906,map__39906__$1,effect,ms,dispatch,seq__39896__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39896,chunk__39897,count__39898,i__39899,map__39906,map__39906__$1,effect,ms,dispatch,seq__39896__$1,temp__5735__auto__))
,ms);
}


var G__39961 = cljs.core.next(seq__39896__$1);
var G__39962 = null;
var G__39963 = (0);
var G__39964 = (0);
seq__39896 = G__39961;
chunk__39897 = G__39962;
count__39898 = G__39963;
i__39899 = G__39964;
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
var seq__39908 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39909 = null;
var count__39910 = (0);
var i__39911 = (0);
while(true){
if((i__39911 < count__39910)){
var event = chunk__39909.cljs$core$IIndexed$_nth$arity$2(null,i__39911);
re_frame.router.dispatch(event);


var G__39969 = seq__39908;
var G__39970 = chunk__39909;
var G__39971 = count__39910;
var G__39972 = (i__39911 + (1));
seq__39908 = G__39969;
chunk__39909 = G__39970;
count__39910 = G__39971;
i__39911 = G__39972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39908);
if(temp__5735__auto__){
var seq__39908__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39908__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39908__$1);
var G__39975 = cljs.core.chunk_rest(seq__39908__$1);
var G__39976 = c__4609__auto__;
var G__39977 = cljs.core.count(c__4609__auto__);
var G__39978 = (0);
seq__39908 = G__39975;
chunk__39909 = G__39976;
count__39910 = G__39977;
i__39911 = G__39978;
continue;
} else {
var event = cljs.core.first(seq__39908__$1);
re_frame.router.dispatch(event);


var G__39979 = cljs.core.next(seq__39908__$1);
var G__39980 = null;
var G__39981 = (0);
var G__39982 = (0);
seq__39908 = G__39979;
chunk__39909 = G__39980;
count__39910 = G__39981;
i__39911 = G__39982;
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
var seq__39912 = cljs.core.seq(value);
var chunk__39913 = null;
var count__39914 = (0);
var i__39915 = (0);
while(true){
if((i__39915 < count__39914)){
var event = chunk__39913.cljs$core$IIndexed$_nth$arity$2(null,i__39915);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__39983 = seq__39912;
var G__39984 = chunk__39913;
var G__39985 = count__39914;
var G__39986 = (i__39915 + (1));
seq__39912 = G__39983;
chunk__39913 = G__39984;
count__39914 = G__39985;
i__39915 = G__39986;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39912);
if(temp__5735__auto__){
var seq__39912__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39912__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39912__$1);
var G__39987 = cljs.core.chunk_rest(seq__39912__$1);
var G__39988 = c__4609__auto__;
var G__39989 = cljs.core.count(c__4609__auto__);
var G__39990 = (0);
seq__39912 = G__39987;
chunk__39913 = G__39988;
count__39914 = G__39989;
i__39915 = G__39990;
continue;
} else {
var event = cljs.core.first(seq__39912__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__39993 = cljs.core.next(seq__39912__$1);
var G__39994 = null;
var G__39995 = (0);
var G__39996 = (0);
seq__39912 = G__39993;
chunk__39913 = G__39994;
count__39914 = G__39995;
i__39915 = G__39996;
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
