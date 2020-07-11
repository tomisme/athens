goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61121,p__61122){
var map__61123 = p__61121;
var map__61123__$1 = (((((!((map__61123 == null))))?(((((map__61123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61123):map__61123);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61124 = p__61122;
var map__61124__$1 = (((((!((map__61124 == null))))?(((((map__61124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61124):map__61124);
var msg = map__61124__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61124__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61127,p__61128){
var map__61129 = p__61127;
var map__61129__$1 = (((((!((map__61129 == null))))?(((((map__61129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61129):map__61129);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61130 = p__61128;
var map__61130__$1 = (((((!((map__61130 == null))))?(((((map__61130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61130):map__61130);
var msg = map__61130__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61130__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61133 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61135 = null;
var count__61136 = (0);
var i__61137 = (0);
while(true){
if((i__61137 < count__61136)){
var map__61143 = chunk__61135.cljs$core$IIndexed$_nth$arity$2(null,i__61137);
var map__61143__$1 = (((((!((map__61143 == null))))?(((((map__61143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61143):map__61143);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61143__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61190 = seq__61133;
var G__61191 = chunk__61135;
var G__61192 = count__61136;
var G__61193 = (i__61137 + (1));
seq__61133 = G__61190;
chunk__61135 = G__61191;
count__61136 = G__61192;
i__61137 = G__61193;
continue;
} else {
var G__61194 = seq__61133;
var G__61195 = chunk__61135;
var G__61196 = count__61136;
var G__61197 = (i__61137 + (1));
seq__61133 = G__61194;
chunk__61135 = G__61195;
count__61136 = G__61196;
i__61137 = G__61197;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61133);
if(temp__5735__auto__){
var seq__61133__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61133__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61133__$1);
var G__61198 = cljs.core.chunk_rest(seq__61133__$1);
var G__61199 = c__4609__auto__;
var G__61200 = cljs.core.count(c__4609__auto__);
var G__61201 = (0);
seq__61133 = G__61198;
chunk__61135 = G__61199;
count__61136 = G__61200;
i__61137 = G__61201;
continue;
} else {
var map__61145 = cljs.core.first(seq__61133__$1);
var map__61145__$1 = (((((!((map__61145 == null))))?(((((map__61145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61145):map__61145);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61202 = cljs.core.next(seq__61133__$1);
var G__61203 = null;
var G__61204 = (0);
var G__61205 = (0);
seq__61133 = G__61202;
chunk__61135 = G__61203;
count__61136 = G__61204;
i__61137 = G__61205;
continue;
} else {
var G__61206 = cljs.core.next(seq__61133__$1);
var G__61207 = null;
var G__61208 = (0);
var G__61209 = (0);
seq__61133 = G__61206;
chunk__61135 = G__61207;
count__61136 = G__61208;
i__61137 = G__61209;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61147,msg){
var map__61148 = p__61147;
var map__61148__$1 = (((((!((map__61148 == null))))?(((((map__61148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61148):map__61148);
var runtime = map__61148__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61148__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61150,key,p__61151){
var map__61152 = p__61150;
var map__61152__$1 = (((((!((map__61152 == null))))?(((((map__61152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61152):map__61152);
var state = map__61152__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61153 = p__61151;
var map__61153__$1 = (((((!((map__61153 == null))))?(((((map__61153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61153):map__61153);
var spec = map__61153__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61156,key,spec){
var map__61157 = p__61156;
var map__61157__$1 = (((((!((map__61157 == null))))?(((((map__61157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61157):map__61157);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61164){
var map__61165 = p__61164;
var map__61165__$1 = (((((!((map__61165 == null))))?(((((map__61165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61165):map__61165);
var runtime = map__61165__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61159_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61159_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61160_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61160_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61161_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61161_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61162_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61162_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61163_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61163_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61167,key){
var map__61168 = p__61167;
var map__61168__$1 = (((((!((map__61168 == null))))?(((((map__61168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61168):map__61168);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61170,p__61171){
var map__61172 = p__61170;
var map__61172__$1 = (((((!((map__61172 == null))))?(((((map__61172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61172):map__61172);
var runtime = map__61172__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61172__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61173 = p__61171;
var map__61173__$1 = (((((!((map__61173 == null))))?(((((map__61173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61173):map__61173);
var msg = map__61173__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61173__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61176 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61178 = null;
var count__61179 = (0);
var i__61180 = (0);
while(true){
if((i__61180 < count__61179)){
var map__61186 = chunk__61178.cljs$core$IIndexed$_nth$arity$2(null,i__61180);
var map__61186__$1 = (((((!((map__61186 == null))))?(((((map__61186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61186):map__61186);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61186__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61210 = seq__61176;
var G__61211 = chunk__61178;
var G__61212 = count__61179;
var G__61213 = (i__61180 + (1));
seq__61176 = G__61210;
chunk__61178 = G__61211;
count__61179 = G__61212;
i__61180 = G__61213;
continue;
} else {
var G__61214 = seq__61176;
var G__61215 = chunk__61178;
var G__61216 = count__61179;
var G__61217 = (i__61180 + (1));
seq__61176 = G__61214;
chunk__61178 = G__61215;
count__61179 = G__61216;
i__61180 = G__61217;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61176);
if(temp__5735__auto__){
var seq__61176__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61176__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61176__$1);
var G__61218 = cljs.core.chunk_rest(seq__61176__$1);
var G__61219 = c__4609__auto__;
var G__61220 = cljs.core.count(c__4609__auto__);
var G__61221 = (0);
seq__61176 = G__61218;
chunk__61178 = G__61219;
count__61179 = G__61220;
i__61180 = G__61221;
continue;
} else {
var map__61188 = cljs.core.first(seq__61176__$1);
var map__61188__$1 = (((((!((map__61188 == null))))?(((((map__61188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61188):map__61188);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61188__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61222 = cljs.core.next(seq__61176__$1);
var G__61223 = null;
var G__61224 = (0);
var G__61225 = (0);
seq__61176 = G__61222;
chunk__61178 = G__61223;
count__61179 = G__61224;
i__61180 = G__61225;
continue;
} else {
var G__61226 = cljs.core.next(seq__61176__$1);
var G__61227 = null;
var G__61228 = (0);
var G__61229 = (0);
seq__61176 = G__61226;
chunk__61178 = G__61227;
count__61179 = G__61228;
i__61180 = G__61229;
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
