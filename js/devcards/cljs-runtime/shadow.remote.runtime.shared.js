goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61123,p__61124){
var map__61125 = p__61123;
var map__61125__$1 = (((((!((map__61125 == null))))?(((((map__61125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61125):map__61125);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61126 = p__61124;
var map__61126__$1 = (((((!((map__61126 == null))))?(((((map__61126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61126):map__61126);
var msg = map__61126__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61126__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61129,p__61130){
var map__61131 = p__61129;
var map__61131__$1 = (((((!((map__61131 == null))))?(((((map__61131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61131):map__61131);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61131__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61132 = p__61130;
var map__61132__$1 = (((((!((map__61132 == null))))?(((((map__61132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61132):map__61132);
var msg = map__61132__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61132__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61135 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61137 = null;
var count__61138 = (0);
var i__61139 = (0);
while(true){
if((i__61139 < count__61138)){
var map__61145 = chunk__61137.cljs$core$IIndexed$_nth$arity$2(null,i__61139);
var map__61145__$1 = (((((!((map__61145 == null))))?(((((map__61145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61145):map__61145);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61192 = seq__61135;
var G__61193 = chunk__61137;
var G__61194 = count__61138;
var G__61195 = (i__61139 + (1));
seq__61135 = G__61192;
chunk__61137 = G__61193;
count__61138 = G__61194;
i__61139 = G__61195;
continue;
} else {
var G__61196 = seq__61135;
var G__61197 = chunk__61137;
var G__61198 = count__61138;
var G__61199 = (i__61139 + (1));
seq__61135 = G__61196;
chunk__61137 = G__61197;
count__61138 = G__61198;
i__61139 = G__61199;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61135);
if(temp__5735__auto__){
var seq__61135__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61135__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61135__$1);
var G__61200 = cljs.core.chunk_rest(seq__61135__$1);
var G__61201 = c__4609__auto__;
var G__61202 = cljs.core.count(c__4609__auto__);
var G__61203 = (0);
seq__61135 = G__61200;
chunk__61137 = G__61201;
count__61138 = G__61202;
i__61139 = G__61203;
continue;
} else {
var map__61147 = cljs.core.first(seq__61135__$1);
var map__61147__$1 = (((((!((map__61147 == null))))?(((((map__61147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61147):map__61147);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61204 = cljs.core.next(seq__61135__$1);
var G__61205 = null;
var G__61206 = (0);
var G__61207 = (0);
seq__61135 = G__61204;
chunk__61137 = G__61205;
count__61138 = G__61206;
i__61139 = G__61207;
continue;
} else {
var G__61208 = cljs.core.next(seq__61135__$1);
var G__61209 = null;
var G__61210 = (0);
var G__61211 = (0);
seq__61135 = G__61208;
chunk__61137 = G__61209;
count__61138 = G__61210;
i__61139 = G__61211;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61149,msg){
var map__61150 = p__61149;
var map__61150__$1 = (((((!((map__61150 == null))))?(((((map__61150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61150):map__61150);
var runtime = map__61150__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61150__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61152,key,p__61153){
var map__61154 = p__61152;
var map__61154__$1 = (((((!((map__61154 == null))))?(((((map__61154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61154):map__61154);
var state = map__61154__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61155 = p__61153;
var map__61155__$1 = (((((!((map__61155 == null))))?(((((map__61155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61155):map__61155);
var spec = map__61155__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61158,key,spec){
var map__61159 = p__61158;
var map__61159__$1 = (((((!((map__61159 == null))))?(((((map__61159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61159):map__61159);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61159__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61166){
var map__61167 = p__61166;
var map__61167__$1 = (((((!((map__61167 == null))))?(((((map__61167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61167):map__61167);
var runtime = map__61167__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61161_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61161_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61162_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61162_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61163_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61163_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61164_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61164_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61165_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61165_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61169,key){
var map__61170 = p__61169;
var map__61170__$1 = (((((!((map__61170 == null))))?(((((map__61170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61170):map__61170);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61172,p__61173){
var map__61174 = p__61172;
var map__61174__$1 = (((((!((map__61174 == null))))?(((((map__61174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61174):map__61174);
var runtime = map__61174__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61175 = p__61173;
var map__61175__$1 = (((((!((map__61175 == null))))?(((((map__61175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61175):map__61175);
var msg = map__61175__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61178 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61180 = null;
var count__61181 = (0);
var i__61182 = (0);
while(true){
if((i__61182 < count__61181)){
var map__61188 = chunk__61180.cljs$core$IIndexed$_nth$arity$2(null,i__61182);
var map__61188__$1 = (((((!((map__61188 == null))))?(((((map__61188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61188):map__61188);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61188__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61212 = seq__61178;
var G__61213 = chunk__61180;
var G__61214 = count__61181;
var G__61215 = (i__61182 + (1));
seq__61178 = G__61212;
chunk__61180 = G__61213;
count__61181 = G__61214;
i__61182 = G__61215;
continue;
} else {
var G__61216 = seq__61178;
var G__61217 = chunk__61180;
var G__61218 = count__61181;
var G__61219 = (i__61182 + (1));
seq__61178 = G__61216;
chunk__61180 = G__61217;
count__61181 = G__61218;
i__61182 = G__61219;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61178);
if(temp__5735__auto__){
var seq__61178__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61178__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61178__$1);
var G__61220 = cljs.core.chunk_rest(seq__61178__$1);
var G__61221 = c__4609__auto__;
var G__61222 = cljs.core.count(c__4609__auto__);
var G__61223 = (0);
seq__61178 = G__61220;
chunk__61180 = G__61221;
count__61181 = G__61222;
i__61182 = G__61223;
continue;
} else {
var map__61190 = cljs.core.first(seq__61178__$1);
var map__61190__$1 = (((((!((map__61190 == null))))?(((((map__61190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61190):map__61190);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61190__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61224 = cljs.core.next(seq__61178__$1);
var G__61225 = null;
var G__61226 = (0);
var G__61227 = (0);
seq__61178 = G__61224;
chunk__61180 = G__61225;
count__61181 = G__61226;
i__61182 = G__61227;
continue;
} else {
var G__61228 = cljs.core.next(seq__61178__$1);
var G__61229 = null;
var G__61230 = (0);
var G__61231 = (0);
seq__61178 = G__61228;
chunk__61180 = G__61229;
count__61181 = G__61230;
i__61182 = G__61231;
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
