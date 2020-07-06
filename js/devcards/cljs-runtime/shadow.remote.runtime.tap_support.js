goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60760,p__60761){
var map__60762 = p__60760;
var map__60762__$1 = (((((!((map__60762 == null))))?(((((map__60762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60762):map__60762);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60762__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60763 = p__60761;
var map__60763__$1 = (((((!((map__60763 == null))))?(((((map__60763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60763):map__60763);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60763__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60766,p__60767){
var map__60768 = p__60766;
var map__60768__$1 = (((((!((map__60768 == null))))?(((((map__60768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60768):map__60768);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60768__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60769 = p__60767;
var map__60769__$1 = (((((!((map__60769 == null))))?(((((map__60769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60769):map__60769);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60769__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60774,p__60775){
var map__60776 = p__60774;
var map__60776__$1 = (((((!((map__60776 == null))))?(((((map__60776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60776):map__60776);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60777 = p__60775;
var map__60777__$1 = (((((!((map__60777 == null))))?(((((map__60777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60777):map__60777);
var msg = map__60777__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60777__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60780 = obj_support;
var map__60780__$1 = (((((!((map__60780 == null))))?(((((map__60780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60780):map__60780);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60773_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60773_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60772_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60772_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60782,tid){
var map__60783 = p__60782;
var map__60783__$1 = (((((!((map__60783 == null))))?(((((map__60783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60783):map__60783);
var svc = map__60783__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60783__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60789 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60790 = null;
var count__60791 = (0);
var i__60792 = (0);
while(true){
if((i__60792 < count__60791)){
var tid = chunk__60790.cljs$core$IIndexed$_nth$arity$2(null,i__60792);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60796 = seq__60789;
var G__60797 = chunk__60790;
var G__60798 = count__60791;
var G__60799 = (i__60792 + (1));
seq__60789 = G__60796;
chunk__60790 = G__60797;
count__60791 = G__60798;
i__60792 = G__60799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60789);
if(temp__5735__auto__){
var seq__60789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60789__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60789__$1);
var G__60800 = cljs.core.chunk_rest(seq__60789__$1);
var G__60801 = c__4609__auto__;
var G__60802 = cljs.core.count(c__4609__auto__);
var G__60803 = (0);
seq__60789 = G__60800;
chunk__60790 = G__60801;
count__60791 = G__60802;
i__60792 = G__60803;
continue;
} else {
var tid = cljs.core.first(seq__60789__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60804 = cljs.core.next(seq__60789__$1);
var G__60805 = null;
var G__60806 = (0);
var G__60807 = (0);
seq__60789 = G__60804;
chunk__60790 = G__60805;
count__60791 = G__60806;
i__60792 = G__60807;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60785_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60785_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60786_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60786_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60787_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60787_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60788_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60788_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60793){
var map__60794 = p__60793;
var map__60794__$1 = (((((!((map__60794 == null))))?(((((map__60794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60794):map__60794);
var svc = map__60794__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60794__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60794__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
