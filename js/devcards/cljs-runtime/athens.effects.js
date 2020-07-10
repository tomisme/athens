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
var G__60164_60256 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__60165_60257 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60164_60256,G__60165_60257) : re_frame.core.reg_fx.call(null,G__60164_60256,G__60165_60257));
var G__60166_60258 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__60167_60259 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60166_60258,G__60167_60259) : re_frame.core.reg_fx.call(null,G__60166_60258,G__60167_60259));
var G__60168_60260 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__60169_60261 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60168_60260,G__60169_60261) : re_frame.core.reg_fx.call(null,G__60168_60260,G__60169_60261));
var G__60170_60262 = new cljs.core.Keyword(null,"http","http",382524695);
var G__60171_60263 = (function (p__60172){
var map__60173 = p__60172;
var map__60173__$1 = (((((!((map__60173 == null))))?(((((map__60173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60173):map__60173);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37016__auto__ = (function (){var switch__36947__auto__ = (function (state_60217){
var state_val_60218 = (state_60217[(1)]);
if((state_val_60218 === (7))){
var inst_60184 = (state_60217[(7)]);
var inst_60184__$1 = (state_60217[(2)]);
var inst_60186 = (inst_60184__$1 == null);
var inst_60187 = cljs.core.not(inst_60186);
var state_60217__$1 = (function (){var statearr_60219 = state_60217;
(statearr_60219[(7)] = inst_60184__$1);

return statearr_60219;
})();
if(inst_60187){
var statearr_60220_60264 = state_60217__$1;
(statearr_60220_60264[(1)] = (8));

} else {
var statearr_60221_60265 = state_60217__$1;
(statearr_60221_60265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (1))){
var state_60217__$1 = state_60217;
var G__60222_60266 = method;
var G__60222_60267__$1 = (((G__60222_60266 instanceof cljs.core.Keyword))?G__60222_60266.fqn:null);
switch (G__60222_60267__$1) {
case "post":
var statearr_60223_60269 = state_60217__$1;
(statearr_60223_60269[(1)] = (3));


break;
case "get":
var statearr_60224_60270 = state_60217__$1;
(statearr_60224_60270[(1)] = (4));


break;
case "put":
var statearr_60225_60271 = state_60217__$1;
(statearr_60225_60271[(1)] = (5));


break;
case "delete":
var statearr_60226_60272 = state_60217__$1;
(statearr_60226_60272[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60222_60267__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (4))){
var state_60217__$1 = state_60217;
var statearr_60227_60273 = state_60217__$1;
(statearr_60227_60273[(2)] = cljs_http.client.get);

(statearr_60227_60273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (15))){
var inst_60184 = (state_60217[(7)]);
var state_60217__$1 = state_60217;
var statearr_60228_60274 = state_60217__$1;
(statearr_60228_60274[(2)] = inst_60184);

(statearr_60228_60274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (13))){
var inst_60197 = (state_60217[(2)]);
var state_60217__$1 = state_60217;
var statearr_60229_60275 = state_60217__$1;
(statearr_60229_60275[(2)] = inst_60197);

(statearr_60229_60275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (6))){
var state_60217__$1 = state_60217;
var statearr_60230_60276 = state_60217__$1;
(statearr_60230_60276[(2)] = cljs_http.client.delete$);

(statearr_60230_60276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (17))){
var inst_60207 = (state_60217[(8)]);
var inst_60209 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60207);
var inst_60210 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60209) : re_frame.core.dispatch.call(null,inst_60209));
var state_60217__$1 = state_60217;
var statearr_60231_60277 = state_60217__$1;
(statearr_60231_60277[(2)] = inst_60210);

(statearr_60231_60277[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (3))){
var state_60217__$1 = state_60217;
var statearr_60232_60278 = state_60217__$1;
(statearr_60232_60278[(2)] = cljs_http.client.post);

(statearr_60232_60278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (12))){
var state_60217__$1 = state_60217;
var statearr_60233_60279 = state_60217__$1;
(statearr_60233_60279[(2)] = false);

(statearr_60233_60279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (2))){
var inst_60181 = (state_60217[(2)]);
var inst_60182 = (inst_60181.cljs$core$IFn$_invoke$arity$2 ? inst_60181.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60181.call(null,url,opts));
var state_60217__$1 = state_60217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60217__$1,(7),inst_60182);
} else {
if((state_val_60218 === (19))){
var inst_60215 = (state_60217[(2)]);
var state_60217__$1 = state_60217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60217__$1,inst_60215);
} else {
if((state_val_60218 === (11))){
var state_60217__$1 = state_60217;
var statearr_60234_60280 = state_60217__$1;
(statearr_60234_60280[(2)] = true);

(statearr_60234_60280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (9))){
var state_60217__$1 = state_60217;
var statearr_60235_60281 = state_60217__$1;
(statearr_60235_60281[(2)] = false);

(statearr_60235_60281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (5))){
var state_60217__$1 = state_60217;
var statearr_60236_60282 = state_60217__$1;
(statearr_60236_60282[(2)] = cljs_http.client.put);

(statearr_60236_60282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (14))){
var inst_60184 = (state_60217[(7)]);
var inst_60202 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60184);
var state_60217__$1 = state_60217;
var statearr_60237_60283 = state_60217__$1;
(statearr_60237_60283[(2)] = inst_60202);

(statearr_60237_60283[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (16))){
var inst_60205 = (state_60217[(9)]);
var inst_60205__$1 = (state_60217[(2)]);
var inst_60206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60205__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60205__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60217__$1 = (function (){var statearr_60238 = state_60217;
(statearr_60238[(8)] = inst_60207);

(statearr_60238[(9)] = inst_60205__$1);

return statearr_60238;
})();
if(cljs.core.truth_(inst_60206)){
var statearr_60239_60284 = state_60217__$1;
(statearr_60239_60284[(1)] = (17));

} else {
var statearr_60240_60285 = state_60217__$1;
(statearr_60240_60285[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (10))){
var inst_60200 = (state_60217[(2)]);
var state_60217__$1 = state_60217;
if(cljs.core.truth_(inst_60200)){
var statearr_60241_60286 = state_60217__$1;
(statearr_60241_60286[(1)] = (14));

} else {
var statearr_60242_60287 = state_60217__$1;
(statearr_60242_60287[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (18))){
var inst_60205 = (state_60217[(9)]);
var inst_60212 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60205);
var inst_60213 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_60212) : re_frame.core.dispatch.call(null,inst_60212));
var state_60217__$1 = state_60217;
var statearr_60243_60288 = state_60217__$1;
(statearr_60243_60288[(2)] = inst_60213);

(statearr_60243_60288[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60218 === (8))){
var inst_60184 = (state_60217[(7)]);
var inst_60189 = inst_60184.cljs$lang$protocol_mask$partition0$;
var inst_60190 = (inst_60189 & (64));
var inst_60191 = inst_60184.cljs$core$ISeq$;
var inst_60192 = (cljs.core.PROTOCOL_SENTINEL === inst_60191);
var inst_60193 = ((inst_60190) || (inst_60192));
var state_60217__$1 = state_60217;
if(cljs.core.truth_(inst_60193)){
var statearr_60244_60289 = state_60217__$1;
(statearr_60244_60289[(1)] = (11));

} else {
var statearr_60245_60290 = state_60217__$1;
(statearr_60245_60290[(1)] = (12));

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
var statearr_60246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60246[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_60246[(1)] = (1));

return statearr_60246;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_60217){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_60217);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e60247){if((e60247 instanceof Object)){
var ex__36951__auto__ = e60247;
var statearr_60248_60291 = state_60217;
(statearr_60248_60291[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60292 = state_60217;
state_60217 = G__60292;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_60217){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_60217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37017__auto__ = (function (){var statearr_60249 = (f__37016__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37016__auto__.cljs$core$IFn$_invoke$arity$0() : f__37016__auto__.call(null));
(statearr_60249[(6)] = c__37015__auto__);

return statearr_60249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37017__auto__);
}));

return c__37015__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60170_60262,G__60171_60263) : re_frame.core.reg_fx.call(null,G__60170_60262,G__60171_60263));
var G__60250_60293 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__60251_60294 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60252){
var map__60253 = p__60252;
var map__60253__$1 = (((((!((map__60253 == null))))?(((((map__60253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60253):map__60253);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60255 = action;
var G__60255__$1 = (((G__60255 instanceof cljs.core.Keyword))?G__60255.fqn:null);
switch (G__60255__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60255__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60250_60293,G__60251_60294) : re_frame.core.reg_fx.call(null,G__60250_60293,G__60251_60294));

//# sourceMappingURL=athens.effects.js.map
