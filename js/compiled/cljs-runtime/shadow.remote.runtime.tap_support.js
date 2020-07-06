goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__57648,p__57649){
var map__57650 = p__57648;
var map__57650__$1 = (((((!((map__57650 == null))))?(((((map__57650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57650):map__57650);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57650__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__57651 = p__57649;
var map__57651__$1 = (((((!((map__57651 == null))))?(((((map__57651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57651):map__57651);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57651__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__57666,p__57667){
var map__57668 = p__57666;
var map__57668__$1 = (((((!((map__57668 == null))))?(((((map__57668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57668):map__57668);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57668__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__57669 = p__57667;
var map__57669__$1 = (((((!((map__57669 == null))))?(((((map__57669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57669):map__57669);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57669__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__57674,p__57675){
var map__57676 = p__57674;
var map__57676__$1 = (((((!((map__57676 == null))))?(((((map__57676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57676):map__57676);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57676__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57676__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57677 = p__57675;
var map__57677__$1 = (((((!((map__57677 == null))))?(((((map__57677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57677):map__57677);
var msg = map__57677__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57677__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__57680 = obj_support;
var map__57680__$1 = (((((!((map__57680 == null))))?(((((map__57680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57680):map__57680);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57680__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__57673_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__57673_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57672_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__57672_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__57682,tid){
var map__57683 = p__57682;
var map__57683__$1 = (((((!((map__57683 == null))))?(((((map__57683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57683):map__57683);
var svc = map__57683__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57683__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__57692 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__57693 = null;
var count__57694 = (0);
var i__57695 = (0);
while(true){
if((i__57695 < count__57694)){
var tid = chunk__57693.cljs$core$IIndexed$_nth$arity$2(null,i__57695);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57699 = seq__57692;
var G__57700 = chunk__57693;
var G__57701 = count__57694;
var G__57702 = (i__57695 + (1));
seq__57692 = G__57699;
chunk__57693 = G__57700;
count__57694 = G__57701;
i__57695 = G__57702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57692);
if(temp__5735__auto__){
var seq__57692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57692__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57692__$1);
var G__57703 = cljs.core.chunk_rest(seq__57692__$1);
var G__57704 = c__4609__auto__;
var G__57705 = cljs.core.count(c__4609__auto__);
var G__57706 = (0);
seq__57692 = G__57703;
chunk__57693 = G__57704;
count__57694 = G__57705;
i__57695 = G__57706;
continue;
} else {
var tid = cljs.core.first(seq__57692__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57707 = cljs.core.next(seq__57692__$1);
var G__57708 = null;
var G__57709 = (0);
var G__57710 = (0);
seq__57692 = G__57707;
chunk__57693 = G__57708;
count__57694 = G__57709;
i__57695 = G__57710;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__57685_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__57685_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__57686_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__57686_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__57687_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__57687_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__57688_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__57688_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__57696){
var map__57697 = p__57696;
var map__57697__$1 = (((((!((map__57697 == null))))?(((((map__57697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57697):map__57697);
var svc = map__57697__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
