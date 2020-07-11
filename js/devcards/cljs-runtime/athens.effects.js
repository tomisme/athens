goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__60163_60255 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__60164_60256 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60163_60255,G__60164_60256) : re_frame.core.reg_fx.call(null,G__60163_60255,G__60164_60256));
var G__60165_60257 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__60166_60258 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60165_60257,G__60166_60258) : re_frame.core.reg_fx.call(null,G__60165_60257,G__60166_60258));
var G__60167_60259 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__60168_60260 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60167_60259,G__60168_60260) : re_frame.core.reg_fx.call(null,G__60167_60259,G__60168_60260));
var G__60169_60261 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60170_60262 = (function (p__60171){
var map__60172 = p__60171;
var map__60172__$1 = (((((!((map__60172 == null))))?(((((map__60172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60172):map__60172);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60172__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_60216){
var state_val_60217 = (state_60216[(1)]);
if((state_val_60217 === (7))){
var inst_60183 = (state_60216[(7)]);
var inst_60183__$1 = (state_60216[(2)]);
var inst_60185 = (inst_60183__$1 == null);
var inst_60186 = cljs.core.not(inst_60185);
var state_60216__$1 = (function (){var statearr_60218 = state_60216;
(statearr_60218[(7)] = inst_60183__$1);

return statearr_60218;
})();
if(inst_60186){
var statearr_60219_60263 = state_60216__$1;
(statearr_60219_60263[(1)] = (8));

} else {
var statearr_60220_60264 = state_60216__$1;
(statearr_60220_60264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (1))){
var state_60216__$1 = state_60216;
var G__60221_60265 = method;
var G__60221_60266__$1 = (((G__60221_60265 instanceof cljs.core.Keyword))?G__60221_60265.fqn:null);
switch (G__60221_60266__$1) {
case "post":
var statearr_60222_60268 = state_60216__$1;
(statearr_60222_60268[(1)] = (3));


break;
case "get":
var statearr_60223_60269 = state_60216__$1;
(statearr_60223_60269[(1)] = (4));


break;
case "put":
var statearr_60224_60270 = state_60216__$1;
(statearr_60224_60270[(1)] = (5));


break;
case "delete":
var statearr_60225_60271 = state_60216__$1;
(statearr_60225_60271[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60221_60266__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (4))){
var state_60216__$1 = state_60216;
var statearr_60226_60272 = state_60216__$1;
(statearr_60226_60272[(2)] = cljs_http.client.get);

(statearr_60226_60272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (15))){
var inst_60183 = (state_60216[(7)]);
var state_60216__$1 = state_60216;
var statearr_60227_60273 = state_60216__$1;
(statearr_60227_60273[(2)] = inst_60183);

(statearr_60227_60273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (13))){
var inst_60196 = (state_60216[(2)]);
var state_60216__$1 = state_60216;
var statearr_60228_60274 = state_60216__$1;
(statearr_60228_60274[(2)] = inst_60196);

(statearr_60228_60274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (6))){
var state_60216__$1 = state_60216;
var statearr_60229_60275 = state_60216__$1;
(statearr_60229_60275[(2)] = cljs_http.client.delete$);

(statearr_60229_60275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (17))){
var inst_60206 = (state_60216[(8)]);
var inst_60208 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60206);
var inst_60209 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60208) : re_frame.core.dispatch.call(null,inst_60208));
var state_60216__$1 = state_60216;
var statearr_60230_60276 = state_60216__$1;
(statearr_60230_60276[(2)] = inst_60209);

(statearr_60230_60276[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (3))){
var state_60216__$1 = state_60216;
var statearr_60231_60277 = state_60216__$1;
(statearr_60231_60277[(2)] = cljs_http.client.post);

(statearr_60231_60277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (12))){
var state_60216__$1 = state_60216;
var statearr_60232_60278 = state_60216__$1;
(statearr_60232_60278[(2)] = false);

(statearr_60232_60278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (2))){
var inst_60180 = (state_60216[(2)]);
var inst_60181 = (inst_60180.cljs$core$IFn$_invoke$arity$2 ? inst_60180.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60180.call(null,url,opts));
var state_60216__$1 = state_60216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60216__$1,(7),inst_60181);
} else {
if((state_val_60217 === (19))){
var inst_60214 = (state_60216[(2)]);
var state_60216__$1 = state_60216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60216__$1,inst_60214);
} else {
if((state_val_60217 === (11))){
var state_60216__$1 = state_60216;
var statearr_60233_60279 = state_60216__$1;
(statearr_60233_60279[(2)] = true);

(statearr_60233_60279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (9))){
var state_60216__$1 = state_60216;
var statearr_60234_60280 = state_60216__$1;
(statearr_60234_60280[(2)] = false);

(statearr_60234_60280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (5))){
var state_60216__$1 = state_60216;
var statearr_60235_60281 = state_60216__$1;
(statearr_60235_60281[(2)] = cljs_http.client.put);

(statearr_60235_60281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (14))){
var inst_60183 = (state_60216[(7)]);
var inst_60201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60183);
var state_60216__$1 = state_60216;
var statearr_60236_60282 = state_60216__$1;
(statearr_60236_60282[(2)] = inst_60201);

(statearr_60236_60282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (16))){
var inst_60204 = (state_60216[(9)]);
var inst_60204__$1 = (state_60216[(2)]);
var inst_60205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60204__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60204__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60216__$1 = (function (){var statearr_60237 = state_60216;
(statearr_60237[(9)] = inst_60204__$1);

(statearr_60237[(8)] = inst_60206);

return statearr_60237;
})();
if(cljs.core.truth_(inst_60205)){
var statearr_60238_60283 = state_60216__$1;
(statearr_60238_60283[(1)] = (17));

} else {
var statearr_60239_60284 = state_60216__$1;
(statearr_60239_60284[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (10))){
var inst_60199 = (state_60216[(2)]);
var state_60216__$1 = state_60216;
if(cljs.core.truth_(inst_60199)){
var statearr_60240_60285 = state_60216__$1;
(statearr_60240_60285[(1)] = (14));

} else {
var statearr_60241_60286 = state_60216__$1;
(statearr_60241_60286[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (18))){
var inst_60204 = (state_60216[(9)]);
var inst_60211 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60204);
var inst_60212 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60211) : re_frame.core.dispatch.call(null,inst_60211));
var state_60216__$1 = state_60216;
var statearr_60242_60287 = state_60216__$1;
(statearr_60242_60287[(2)] = inst_60212);

(statearr_60242_60287[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60217 === (8))){
var inst_60183 = (state_60216[(7)]);
var inst_60188 = inst_60183.cljs$lang$protocol_mask$partition0$;
var inst_60189 = (inst_60188 & (64));
var inst_60190 = inst_60183.cljs$core$ISeq$;
var inst_60191 = (cljs.core.PROTOCOL_SENTINEL === inst_60190);
var inst_60192 = ((inst_60189) || (inst_60191));
var state_60216__$1 = state_60216;
if(cljs.core.truth_(inst_60192)){
var statearr_60243_60288 = state_60216__$1;
(statearr_60243_60288[(1)] = (11));

} else {
var statearr_60244_60289 = state_60216__$1;
(statearr_60244_60289[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__36948__auto__ = null;
var athens$effects$state_machine__36948__auto____0 = (function (){
var statearr_60245 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60245[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_60245[(1)] = (1));

return statearr_60245;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_60216){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_60216);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e60246){if((e60246 instanceof Object)){
var ex__36951__auto__ = e60246;
var statearr_60247_60290 = state_60216;
(statearr_60247_60290[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60291 = state_60216;
state_60216 = G__60291;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_60216){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_60216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_60248 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_60248[(6)] = c__37015__auto__);

return statearr_60248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60169_60261,G__60170_60262) : re_frame.core.reg_fx.call(null,G__60169_60261,G__60170_60262));
var G__60249_60292 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60250_60293 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60251){
var map__60252 = p__60251;
var map__60252__$1 = (((((!((map__60252 == null))))?(((((map__60252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60252):map__60252);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60254 = action;
var G__60254__$1 = (((G__60254 instanceof cljs.core.Keyword))?G__60254.fqn:null);
switch (G__60254__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60254__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60249_60292,G__60250_60293) : re_frame.core.reg_fx.call(null,G__60249_60292,G__60250_60293));

//# sourceMappingURL=athens.effects.js.map
