goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60510,p__60511){
var map__60512 = p__60510;
var map__60512__$1 = (((((!((map__60512 == null))))?(((((map__60512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60512):map__60512);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60512__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60513 = p__60511;
var map__60513__$1 = (((((!((map__60513 == null))))?(((((map__60513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60513):map__60513);
var msg = map__60513__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60513__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60516,p__60517){
var map__60518 = p__60516;
var map__60518__$1 = (((((!((map__60518 == null))))?(((((map__60518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60518):map__60518);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60518__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60519 = p__60517;
var map__60519__$1 = (((((!((map__60519 == null))))?(((((map__60519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60519):map__60519);
var msg = map__60519__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60522 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60524 = null;
var count__60525 = (0);
var i__60526 = (0);
while(true){
if((i__60526 < count__60525)){
var map__60532 = chunk__60524.cljs$core$IIndexed$_nth$arity$2(null,i__60526);
var map__60532__$1 = (((((!((map__60532 == null))))?(((((map__60532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60532):map__60532);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60532__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60599 = seq__60522;
var G__60600 = chunk__60524;
var G__60601 = count__60525;
var G__60602 = (i__60526 + (1));
seq__60522 = G__60599;
chunk__60524 = G__60600;
count__60525 = G__60601;
i__60526 = G__60602;
continue;
} else {
var G__60603 = seq__60522;
var G__60604 = chunk__60524;
var G__60605 = count__60525;
var G__60606 = (i__60526 + (1));
seq__60522 = G__60603;
chunk__60524 = G__60604;
count__60525 = G__60605;
i__60526 = G__60606;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60522);
if(temp__5735__auto__){
var seq__60522__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60522__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60522__$1);
var G__60607 = cljs.core.chunk_rest(seq__60522__$1);
var G__60608 = c__4609__auto__;
var G__60609 = cljs.core.count(c__4609__auto__);
var G__60610 = (0);
seq__60522 = G__60607;
chunk__60524 = G__60608;
count__60525 = G__60609;
i__60526 = G__60610;
continue;
} else {
var map__60534 = cljs.core.first(seq__60522__$1);
var map__60534__$1 = (((((!((map__60534 == null))))?(((((map__60534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60534):map__60534);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60534__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60611 = cljs.core.next(seq__60522__$1);
var G__60612 = null;
var G__60613 = (0);
var G__60614 = (0);
seq__60522 = G__60611;
chunk__60524 = G__60612;
count__60525 = G__60613;
i__60526 = G__60614;
continue;
} else {
var G__60615 = cljs.core.next(seq__60522__$1);
var G__60616 = null;
var G__60617 = (0);
var G__60618 = (0);
seq__60522 = G__60615;
chunk__60524 = G__60616;
count__60525 = G__60617;
i__60526 = G__60618;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60536,msg){
var map__60537 = p__60536;
var map__60537__$1 = (((((!((map__60537 == null))))?(((((map__60537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60537):map__60537);
var runtime = map__60537__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60539,key,p__60540){
var map__60541 = p__60539;
var map__60541__$1 = (((((!((map__60541 == null))))?(((((map__60541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60541):map__60541);
var state = map__60541__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60541__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60542 = p__60540;
var map__60542__$1 = (((((!((map__60542 == null))))?(((((map__60542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60542):map__60542);
var spec = map__60542__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60542__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60545,key,spec){
var map__60546 = p__60545;
var map__60546__$1 = (((((!((map__60546 == null))))?(((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60546):map__60546);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60553){
var map__60554 = p__60553;
var map__60554__$1 = (((((!((map__60554 == null))))?(((((map__60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60554):map__60554);
var runtime = map__60554__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60548_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60548_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60549_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60549_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60550_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60550_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60551_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60551_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60552_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60552_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60556,key){
var map__60557 = p__60556;
var map__60557__$1 = (((((!((map__60557 == null))))?(((((map__60557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60557):map__60557);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60557__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60559,p__60560){
var map__60561 = p__60559;
var map__60561__$1 = (((((!((map__60561 == null))))?(((((map__60561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60561):map__60561);
var runtime = map__60561__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60561__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60562 = p__60560;
var map__60562__$1 = (((((!((map__60562 == null))))?(((((map__60562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60562):map__60562);
var msg = map__60562__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60562__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60565 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60567 = null;
var count__60568 = (0);
var i__60569 = (0);
while(true){
if((i__60569 < count__60568)){
var map__60583 = chunk__60567.cljs$core$IIndexed$_nth$arity$2(null,i__60569);
var map__60583__$1 = (((((!((map__60583 == null))))?(((((map__60583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60583):map__60583);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60583__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60622 = seq__60565;
var G__60623 = chunk__60567;
var G__60624 = count__60568;
var G__60625 = (i__60569 + (1));
seq__60565 = G__60622;
chunk__60567 = G__60623;
count__60568 = G__60624;
i__60569 = G__60625;
continue;
} else {
var G__60626 = seq__60565;
var G__60627 = chunk__60567;
var G__60628 = count__60568;
var G__60629 = (i__60569 + (1));
seq__60565 = G__60626;
chunk__60567 = G__60627;
count__60568 = G__60628;
i__60569 = G__60629;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60565);
if(temp__5735__auto__){
var seq__60565__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60565__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60565__$1);
var G__60630 = cljs.core.chunk_rest(seq__60565__$1);
var G__60631 = c__4609__auto__;
var G__60632 = cljs.core.count(c__4609__auto__);
var G__60633 = (0);
seq__60565 = G__60630;
chunk__60567 = G__60631;
count__60568 = G__60632;
i__60569 = G__60633;
continue;
} else {
var map__60589 = cljs.core.first(seq__60565__$1);
var map__60589__$1 = (((((!((map__60589 == null))))?(((((map__60589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60589):map__60589);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60589__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60634 = cljs.core.next(seq__60565__$1);
var G__60635 = null;
var G__60636 = (0);
var G__60637 = (0);
seq__60565 = G__60634;
chunk__60567 = G__60635;
count__60568 = G__60636;
i__60569 = G__60637;
continue;
} else {
var G__60638 = cljs.core.next(seq__60565__$1);
var G__60639 = null;
var G__60640 = (0);
var G__60641 = (0);
seq__60565 = G__60638;
chunk__60567 = G__60639;
count__60568 = G__60640;
i__60569 = G__60641;
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
