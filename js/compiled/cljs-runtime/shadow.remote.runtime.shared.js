goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__57413,p__57414){
var map__57415 = p__57413;
var map__57415__$1 = (((((!((map__57415 == null))))?(((((map__57415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57415):map__57415);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57415__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57416 = p__57414;
var map__57416__$1 = (((((!((map__57416 == null))))?(((((map__57416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57416):map__57416);
var msg = map__57416__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57416__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__57419,p__57420){
var map__57421 = p__57419;
var map__57421__$1 = (((((!((map__57421 == null))))?(((((map__57421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57421):map__57421);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57421__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57422 = p__57420;
var map__57422__$1 = (((((!((map__57422 == null))))?(((((map__57422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57422):map__57422);
var msg = map__57422__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57422__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__57425 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57427 = null;
var count__57428 = (0);
var i__57429 = (0);
while(true){
if((i__57429 < count__57428)){
var map__57435 = chunk__57427.cljs$core$IIndexed$_nth$arity$2(null,i__57429);
var map__57435__$1 = (((((!((map__57435 == null))))?(((((map__57435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57435):map__57435);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57435__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__57482 = seq__57425;
var G__57483 = chunk__57427;
var G__57484 = count__57428;
var G__57485 = (i__57429 + (1));
seq__57425 = G__57482;
chunk__57427 = G__57483;
count__57428 = G__57484;
i__57429 = G__57485;
continue;
} else {
var G__57486 = seq__57425;
var G__57487 = chunk__57427;
var G__57488 = count__57428;
var G__57489 = (i__57429 + (1));
seq__57425 = G__57486;
chunk__57427 = G__57487;
count__57428 = G__57488;
i__57429 = G__57489;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57425);
if(temp__5735__auto__){
var seq__57425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57425__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57425__$1);
var G__57490 = cljs.core.chunk_rest(seq__57425__$1);
var G__57491 = c__4609__auto__;
var G__57492 = cljs.core.count(c__4609__auto__);
var G__57493 = (0);
seq__57425 = G__57490;
chunk__57427 = G__57491;
count__57428 = G__57492;
i__57429 = G__57493;
continue;
} else {
var map__57437 = cljs.core.first(seq__57425__$1);
var map__57437__$1 = (((((!((map__57437 == null))))?(((((map__57437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57437):map__57437);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57437__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__57494 = cljs.core.next(seq__57425__$1);
var G__57495 = null;
var G__57496 = (0);
var G__57497 = (0);
seq__57425 = G__57494;
chunk__57427 = G__57495;
count__57428 = G__57496;
i__57429 = G__57497;
continue;
} else {
var G__57498 = cljs.core.next(seq__57425__$1);
var G__57499 = null;
var G__57500 = (0);
var G__57501 = (0);
seq__57425 = G__57498;
chunk__57427 = G__57499;
count__57428 = G__57500;
i__57429 = G__57501;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__57439,msg){
var map__57440 = p__57439;
var map__57440__$1 = (((((!((map__57440 == null))))?(((((map__57440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57440):map__57440);
var runtime = map__57440__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57440__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__57442,key,p__57443){
var map__57444 = p__57442;
var map__57444__$1 = (((((!((map__57444 == null))))?(((((map__57444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57444):map__57444);
var state = map__57444__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57444__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__57445 = p__57443;
var map__57445__$1 = (((((!((map__57445 == null))))?(((((map__57445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57445):map__57445);
var spec = map__57445__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57445__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__57448,key,spec){
var map__57449 = p__57448;
var map__57449__$1 = (((((!((map__57449 == null))))?(((((map__57449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57449):map__57449);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57449__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__57456){
var map__57457 = p__57456;
var map__57457__$1 = (((((!((map__57457 == null))))?(((((map__57457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57457):map__57457);
var runtime = map__57457__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57457__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__57451_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__57451_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__57452_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__57452_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__57453_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__57453_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__57454_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__57454_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__57455_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__57455_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__57459,key){
var map__57460 = p__57459;
var map__57460__$1 = (((((!((map__57460 == null))))?(((((map__57460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57460):map__57460);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57460__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__57462,p__57463){
var map__57464 = p__57462;
var map__57464__$1 = (((((!((map__57464 == null))))?(((((map__57464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57464):map__57464);
var runtime = map__57464__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57464__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57465 = p__57463;
var map__57465__$1 = (((((!((map__57465 == null))))?(((((map__57465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57465):map__57465);
var msg = map__57465__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57465__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__57468 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57470 = null;
var count__57471 = (0);
var i__57472 = (0);
while(true){
if((i__57472 < count__57471)){
var map__57478 = chunk__57470.cljs$core$IIndexed$_nth$arity$2(null,i__57472);
var map__57478__$1 = (((((!((map__57478 == null))))?(((((map__57478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57478):map__57478);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57478__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57502 = seq__57468;
var G__57503 = chunk__57470;
var G__57504 = count__57471;
var G__57505 = (i__57472 + (1));
seq__57468 = G__57502;
chunk__57470 = G__57503;
count__57471 = G__57504;
i__57472 = G__57505;
continue;
} else {
var G__57506 = seq__57468;
var G__57507 = chunk__57470;
var G__57508 = count__57471;
var G__57509 = (i__57472 + (1));
seq__57468 = G__57506;
chunk__57470 = G__57507;
count__57471 = G__57508;
i__57472 = G__57509;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57468);
if(temp__5735__auto__){
var seq__57468__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57468__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57468__$1);
var G__57510 = cljs.core.chunk_rest(seq__57468__$1);
var G__57511 = c__4609__auto__;
var G__57512 = cljs.core.count(c__4609__auto__);
var G__57513 = (0);
seq__57468 = G__57510;
chunk__57470 = G__57511;
count__57471 = G__57512;
i__57472 = G__57513;
continue;
} else {
var map__57480 = cljs.core.first(seq__57468__$1);
var map__57480__$1 = (((((!((map__57480 == null))))?(((((map__57480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57480):map__57480);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57480__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57514 = cljs.core.next(seq__57468__$1);
var G__57515 = null;
var G__57516 = (0);
var G__57517 = (0);
seq__57468 = G__57514;
chunk__57470 = G__57515;
count__57471 = G__57516;
i__57472 = G__57517;
continue;
} else {
var G__57518 = cljs.core.next(seq__57468__$1);
var G__57519 = null;
var G__57520 = (0);
var G__57521 = (0);
seq__57468 = G__57518;
chunk__57470 = G__57519;
count__57471 = G__57520;
i__57472 = G__57521;
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
