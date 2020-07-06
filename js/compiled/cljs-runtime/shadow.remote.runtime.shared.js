goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__62915,p__62916){
var map__62917 = p__62915;
var map__62917__$1 = (((((!((map__62917 == null))))?(((((map__62917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62917):map__62917);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62917__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__62918 = p__62916;
var map__62918__$1 = (((((!((map__62918 == null))))?(((((map__62918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62918):map__62918);
var msg = map__62918__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62918__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__62926,p__62927){
var map__62929 = p__62926;
var map__62929__$1 = (((((!((map__62929 == null))))?(((((map__62929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62929):map__62929);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62929__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__62930 = p__62927;
var map__62930__$1 = (((((!((map__62930 == null))))?(((((map__62930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62930):map__62930);
var msg = map__62930__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62930__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__62936 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__62938 = null;
var count__62939 = (0);
var i__62940 = (0);
while(true){
if((i__62940 < count__62939)){
var map__62951 = chunk__62938.cljs$core$IIndexed$_nth$arity$2(null,i__62940);
var map__62951__$1 = (((((!((map__62951 == null))))?(((((map__62951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62951):map__62951);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62951__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__63242 = seq__62936;
var G__63243 = chunk__62938;
var G__63244 = count__62939;
var G__63245 = (i__62940 + (1));
seq__62936 = G__63242;
chunk__62938 = G__63243;
count__62939 = G__63244;
i__62940 = G__63245;
continue;
} else {
var G__63246 = seq__62936;
var G__63247 = chunk__62938;
var G__63248 = count__62939;
var G__63249 = (i__62940 + (1));
seq__62936 = G__63246;
chunk__62938 = G__63247;
count__62939 = G__63248;
i__62940 = G__63249;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62936);
if(temp__5735__auto__){
var seq__62936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62936__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__62936__$1);
var G__63250 = cljs.core.chunk_rest(seq__62936__$1);
var G__63251 = c__4609__auto__;
var G__63252 = cljs.core.count(c__4609__auto__);
var G__63253 = (0);
seq__62936 = G__63250;
chunk__62938 = G__63251;
count__62939 = G__63252;
i__62940 = G__63253;
continue;
} else {
var map__62957 = cljs.core.first(seq__62936__$1);
var map__62957__$1 = (((((!((map__62957 == null))))?(((((map__62957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62957):map__62957);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__63254 = cljs.core.next(seq__62936__$1);
var G__63255 = null;
var G__63256 = (0);
var G__63257 = (0);
seq__62936 = G__63254;
chunk__62938 = G__63255;
count__62939 = G__63256;
i__62940 = G__63257;
continue;
} else {
var G__63258 = cljs.core.next(seq__62936__$1);
var G__63259 = null;
var G__63260 = (0);
var G__63261 = (0);
seq__62936 = G__63258;
chunk__62938 = G__63259;
count__62939 = G__63260;
i__62940 = G__63261;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__62963,msg){
var map__62965 = p__62963;
var map__62965__$1 = (((((!((map__62965 == null))))?(((((map__62965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62965):map__62965);
var runtime = map__62965__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__62970,key,p__62971){
var map__62972 = p__62970;
var map__62972__$1 = (((((!((map__62972 == null))))?(((((map__62972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62972):map__62972);
var state = map__62972__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62972__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__62973 = p__62971;
var map__62973__$1 = (((((!((map__62973 == null))))?(((((map__62973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62973):map__62973);
var spec = map__62973__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62973__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__62976,key,spec){
var map__62977 = p__62976;
var map__62977__$1 = (((((!((map__62977 == null))))?(((((map__62977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62977):map__62977);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62977__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__62988){
var map__62989 = p__62988;
var map__62989__$1 = (((((!((map__62989 == null))))?(((((map__62989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62989):map__62989);
var runtime = map__62989__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62989__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__62983_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__62983_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__62984_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__62984_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__62985_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__62985_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__62986_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__62986_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__62987_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__62987_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__63002,key){
var map__63003 = p__63002;
var map__63003__$1 = (((((!((map__63003 == null))))?(((((map__63003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63003):map__63003);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__63007,p__63008){
var map__63009 = p__63007;
var map__63009__$1 = (((((!((map__63009 == null))))?(((((map__63009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63009):map__63009);
var runtime = map__63009__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63009__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__63010 = p__63008;
var map__63010__$1 = (((((!((map__63010 == null))))?(((((map__63010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63010):map__63010);
var msg = map__63010__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63010__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__63203 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__63205 = null;
var count__63206 = (0);
var i__63207 = (0);
while(true){
if((i__63207 < count__63206)){
var map__63213 = chunk__63205.cljs$core$IIndexed$_nth$arity$2(null,i__63207);
var map__63213__$1 = (((((!((map__63213 == null))))?(((((map__63213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63213):map__63213);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63213__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__63326 = seq__63203;
var G__63327 = chunk__63205;
var G__63328 = count__63206;
var G__63329 = (i__63207 + (1));
seq__63203 = G__63326;
chunk__63205 = G__63327;
count__63206 = G__63328;
i__63207 = G__63329;
continue;
} else {
var G__63332 = seq__63203;
var G__63333 = chunk__63205;
var G__63334 = count__63206;
var G__63335 = (i__63207 + (1));
seq__63203 = G__63332;
chunk__63205 = G__63333;
count__63206 = G__63334;
i__63207 = G__63335;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63203);
if(temp__5735__auto__){
var seq__63203__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63203__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63203__$1);
var G__63336 = cljs.core.chunk_rest(seq__63203__$1);
var G__63337 = c__4609__auto__;
var G__63338 = cljs.core.count(c__4609__auto__);
var G__63339 = (0);
seq__63203 = G__63336;
chunk__63205 = G__63337;
count__63206 = G__63338;
i__63207 = G__63339;
continue;
} else {
var map__63216 = cljs.core.first(seq__63203__$1);
var map__63216__$1 = (((((!((map__63216 == null))))?(((((map__63216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63216):map__63216);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63216__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__63348 = cljs.core.next(seq__63203__$1);
var G__63349 = null;
var G__63350 = (0);
var G__63351 = (0);
seq__63203 = G__63348;
chunk__63205 = G__63349;
count__63206 = G__63350;
i__63207 = G__63351;
continue;
} else {
var G__63352 = cljs.core.next(seq__63203__$1);
var G__63353 = null;
var G__63354 = (0);
var G__63355 = (0);
seq__63203 = G__63352;
chunk__63205 = G__63353;
count__63206 = G__63354;
i__63207 = G__63355;
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
