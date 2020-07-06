goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__63856,p__63857){
var map__63858 = p__63856;
var map__63858__$1 = (((((!((map__63858 == null))))?(((((map__63858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63858):map__63858);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63858__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__63859 = p__63857;
var map__63859__$1 = (((((!((map__63859 == null))))?(((((map__63859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63859):map__63859);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63859__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__63862,p__63863){
var map__63864 = p__63862;
var map__63864__$1 = (((((!((map__63864 == null))))?(((((map__63864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63864):map__63864);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63864__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__63865 = p__63863;
var map__63865__$1 = (((((!((map__63865 == null))))?(((((map__63865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63865):map__63865);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63865__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__63870,p__63871){
var map__63872 = p__63870;
var map__63872__$1 = (((((!((map__63872 == null))))?(((((map__63872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63872):map__63872);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63873 = p__63871;
var map__63873__$1 = (((((!((map__63873 == null))))?(((((map__63873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63873):map__63873);
var msg = map__63873__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63873__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__63876 = obj_support;
var map__63876__$1 = (((((!((map__63876 == null))))?(((((map__63876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63876):map__63876);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63876__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__63869_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__63869_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63868_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__63868_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__63878,tid){
var map__63879 = p__63878;
var map__63879__$1 = (((((!((map__63879 == null))))?(((((map__63879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63879):map__63879);
var svc = map__63879__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63879__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__63885 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__63886 = null;
var count__63887 = (0);
var i__63888 = (0);
while(true){
if((i__63888 < count__63887)){
var tid = chunk__63886.cljs$core$IIndexed$_nth$arity$2(null,i__63888);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63892 = seq__63885;
var G__63893 = chunk__63886;
var G__63894 = count__63887;
var G__63895 = (i__63888 + (1));
seq__63885 = G__63892;
chunk__63886 = G__63893;
count__63887 = G__63894;
i__63888 = G__63895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63885);
if(temp__5735__auto__){
var seq__63885__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63885__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63885__$1);
var G__63896 = cljs.core.chunk_rest(seq__63885__$1);
var G__63897 = c__4609__auto__;
var G__63898 = cljs.core.count(c__4609__auto__);
var G__63899 = (0);
seq__63885 = G__63896;
chunk__63886 = G__63897;
count__63887 = G__63898;
i__63888 = G__63899;
continue;
} else {
var tid = cljs.core.first(seq__63885__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63900 = cljs.core.next(seq__63885__$1);
var G__63901 = null;
var G__63902 = (0);
var G__63903 = (0);
seq__63885 = G__63900;
chunk__63886 = G__63901;
count__63887 = G__63902;
i__63888 = G__63903;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__63881_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__63881_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__63882_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__63882_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__63883_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__63883_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__63884_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__63884_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__63889){
var map__63890 = p__63889;
var map__63890__$1 = (((((!((map__63890 == null))))?(((((map__63890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63890):map__63890);
var svc = map__63890__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63890__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63890__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
