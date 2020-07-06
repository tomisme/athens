goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__38370,p__38371){
var map__38372 = p__38370;
var map__38372__$1 = (((((!((map__38372 == null))))?(((((map__38372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38372):map__38372);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38372__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38373 = p__38371;
var map__38373__$1 = (((((!((map__38373 == null))))?(((((map__38373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38373):map__38373);
var msg = map__38373__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38373__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__38376,p__38377){
var map__38378 = p__38376;
var map__38378__$1 = (((((!((map__38378 == null))))?(((((map__38378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38378):map__38378);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38378__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38379 = p__38377;
var map__38379__$1 = (((((!((map__38379 == null))))?(((((map__38379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38379):map__38379);
var msg = map__38379__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38379__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__38382 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38384 = null;
var count__38385 = (0);
var i__38386 = (0);
while(true){
if((i__38386 < count__38385)){
var map__38392 = chunk__38384.cljs$core$IIndexed$_nth$arity$2(null,i__38386);
var map__38392__$1 = (((((!((map__38392 == null))))?(((((map__38392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38392):map__38392);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__38439 = seq__38382;
var G__38440 = chunk__38384;
var G__38441 = count__38385;
var G__38442 = (i__38386 + (1));
seq__38382 = G__38439;
chunk__38384 = G__38440;
count__38385 = G__38441;
i__38386 = G__38442;
continue;
} else {
var G__38443 = seq__38382;
var G__38444 = chunk__38384;
var G__38445 = count__38385;
var G__38446 = (i__38386 + (1));
seq__38382 = G__38443;
chunk__38384 = G__38444;
count__38385 = G__38445;
i__38386 = G__38446;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38382);
if(temp__5735__auto__){
var seq__38382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38382__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38382__$1);
var G__38447 = cljs.core.chunk_rest(seq__38382__$1);
var G__38448 = c__4609__auto__;
var G__38449 = cljs.core.count(c__4609__auto__);
var G__38450 = (0);
seq__38382 = G__38447;
chunk__38384 = G__38448;
count__38385 = G__38449;
i__38386 = G__38450;
continue;
} else {
var map__38394 = cljs.core.first(seq__38382__$1);
var map__38394__$1 = (((((!((map__38394 == null))))?(((((map__38394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38394):map__38394);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38394__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__38451 = cljs.core.next(seq__38382__$1);
var G__38452 = null;
var G__38453 = (0);
var G__38454 = (0);
seq__38382 = G__38451;
chunk__38384 = G__38452;
count__38385 = G__38453;
i__38386 = G__38454;
continue;
} else {
var G__38455 = cljs.core.next(seq__38382__$1);
var G__38456 = null;
var G__38457 = (0);
var G__38458 = (0);
seq__38382 = G__38455;
chunk__38384 = G__38456;
count__38385 = G__38457;
i__38386 = G__38458;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__38396,msg){
var map__38397 = p__38396;
var map__38397__$1 = (((((!((map__38397 == null))))?(((((map__38397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38397):map__38397);
var runtime = map__38397__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38397__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__38399,key,p__38400){
var map__38401 = p__38399;
var map__38401__$1 = (((((!((map__38401 == null))))?(((((map__38401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38401):map__38401);
var state = map__38401__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__38402 = p__38400;
var map__38402__$1 = (((((!((map__38402 == null))))?(((((map__38402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38402):map__38402);
var spec = map__38402__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38402__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__38405,key,spec){
var map__38406 = p__38405;
var map__38406__$1 = (((((!((map__38406 == null))))?(((((map__38406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38406):map__38406);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38406__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__38413){
var map__38414 = p__38413;
var map__38414__$1 = (((((!((map__38414 == null))))?(((((map__38414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38414):map__38414);
var runtime = map__38414__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__38408_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__38408_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__38409_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__38409_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__38410_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__38410_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__38411_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__38411_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__38412_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__38412_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__38416,key){
var map__38417 = p__38416;
var map__38417__$1 = (((((!((map__38417 == null))))?(((((map__38417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38417):map__38417);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38417__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__38419,p__38420){
var map__38421 = p__38419;
var map__38421__$1 = (((((!((map__38421 == null))))?(((((map__38421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38421):map__38421);
var runtime = map__38421__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38422 = p__38420;
var map__38422__$1 = (((((!((map__38422 == null))))?(((((map__38422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38422):map__38422);
var msg = map__38422__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__38425 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38427 = null;
var count__38428 = (0);
var i__38429 = (0);
while(true){
if((i__38429 < count__38428)){
var map__38435 = chunk__38427.cljs$core$IIndexed$_nth$arity$2(null,i__38429);
var map__38435__$1 = (((((!((map__38435 == null))))?(((((map__38435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38435):map__38435);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38459 = seq__38425;
var G__38460 = chunk__38427;
var G__38461 = count__38428;
var G__38462 = (i__38429 + (1));
seq__38425 = G__38459;
chunk__38427 = G__38460;
count__38428 = G__38461;
i__38429 = G__38462;
continue;
} else {
var G__38463 = seq__38425;
var G__38464 = chunk__38427;
var G__38465 = count__38428;
var G__38466 = (i__38429 + (1));
seq__38425 = G__38463;
chunk__38427 = G__38464;
count__38428 = G__38465;
i__38429 = G__38466;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38425);
if(temp__5735__auto__){
var seq__38425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38425__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38425__$1);
var G__38467 = cljs.core.chunk_rest(seq__38425__$1);
var G__38468 = c__4609__auto__;
var G__38469 = cljs.core.count(c__4609__auto__);
var G__38470 = (0);
seq__38425 = G__38467;
chunk__38427 = G__38468;
count__38428 = G__38469;
i__38429 = G__38470;
continue;
} else {
var map__38437 = cljs.core.first(seq__38425__$1);
var map__38437__$1 = (((((!((map__38437 == null))))?(((((map__38437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38437):map__38437);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38437__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38471 = cljs.core.next(seq__38425__$1);
var G__38472 = null;
var G__38473 = (0);
var G__38474 = (0);
seq__38425 = G__38471;
chunk__38427 = G__38472;
count__38428 = G__38473;
i__38429 = G__38474;
continue;
} else {
var G__38475 = cljs.core.next(seq__38425__$1);
var G__38476 = null;
var G__38477 = (0);
var G__38478 = (0);
seq__38425 = G__38475;
chunk__38427 = G__38476;
count__38428 = G__38477;
i__38429 = G__38478;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
