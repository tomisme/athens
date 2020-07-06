goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38597,p__38598){
var map__38599 = p__38597;
var map__38599__$1 = (((((!((map__38599 == null))))?(((((map__38599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38599):map__38599);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38600 = p__38598;
var map__38600__$1 = (((((!((map__38600 == null))))?(((((map__38600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38600):map__38600);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38603,p__38604){
var map__38605 = p__38603;
var map__38605__$1 = (((((!((map__38605 == null))))?(((((map__38605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38605):map__38605);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38605__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38606 = p__38604;
var map__38606__$1 = (((((!((map__38606 == null))))?(((((map__38606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38606):map__38606);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38606__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38611,p__38612){
var map__38613 = p__38611;
var map__38613__$1 = (((((!((map__38613 == null))))?(((((map__38613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38613):map__38613);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38613__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38613__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38614 = p__38612;
var map__38614__$1 = (((((!((map__38614 == null))))?(((((map__38614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38614):map__38614);
var msg = map__38614__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38614__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__38617 = obj_support;
var map__38617__$1 = (((((!((map__38617 == null))))?(((((map__38617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38617):map__38617);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__38610_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38610_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38609_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38609_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38619,tid){
var map__38620 = p__38619;
var map__38620__$1 = (((((!((map__38620 == null))))?(((((map__38620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38620):map__38620);
var svc = map__38620__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38620__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38626 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38627 = null;
var count__38628 = (0);
var i__38629 = (0);
while(true){
if((i__38629 < count__38628)){
var tid = chunk__38627.cljs$core$IIndexed$_nth$arity$2(null,i__38629);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38633 = seq__38626;
var G__38634 = chunk__38627;
var G__38635 = count__38628;
var G__38636 = (i__38629 + (1));
seq__38626 = G__38633;
chunk__38627 = G__38634;
count__38628 = G__38635;
i__38629 = G__38636;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38626);
if(temp__5735__auto__){
var seq__38626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38626__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38626__$1);
var G__38637 = cljs.core.chunk_rest(seq__38626__$1);
var G__38638 = c__4609__auto__;
var G__38639 = cljs.core.count(c__4609__auto__);
var G__38640 = (0);
seq__38626 = G__38637;
chunk__38627 = G__38638;
count__38628 = G__38639;
i__38629 = G__38640;
continue;
} else {
var tid = cljs.core.first(seq__38626__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38641 = cljs.core.next(seq__38626__$1);
var G__38642 = null;
var G__38643 = (0);
var G__38644 = (0);
seq__38626 = G__38641;
chunk__38627 = G__38642;
count__38628 = G__38643;
i__38629 = G__38644;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38622_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38622_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38623_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38623_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38624_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38624_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38625_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38625_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38630){
var map__38631 = p__38630;
var map__38631__$1 = (((((!((map__38631 == null))))?(((((map__38631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38631):map__38631);
var svc = map__38631__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
