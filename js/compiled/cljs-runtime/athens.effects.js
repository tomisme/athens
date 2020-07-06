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
var G__49333_49517 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__49334_49518 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49333_49517,G__49334_49518) : re_frame.core.reg_fx.call(null,G__49333_49517,G__49334_49518));
var G__49335_49522 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__49336_49523 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49335_49522,G__49336_49523) : re_frame.core.reg_fx.call(null,G__49335_49522,G__49336_49523));
var G__49337_49524 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__49338_49525 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49337_49524,G__49338_49525) : re_frame.core.reg_fx.call(null,G__49337_49524,G__49338_49525));
var G__49339_49528 = new cljs.core.Keyword(null,"http","http",382524695);
var G__49340_49529 = (function (p__49341){
var map__49342 = p__49341;
var map__49342__$1 = (((((!((map__49342 == null))))?(((((map__49342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49342):map__49342);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49342__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49342__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49342__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49342__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49342__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__41547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41548__auto__ = (function (){var switch__41524__auto__ = (function (state_49423){
var state_val_49425 = (state_49423[(1)]);
if((state_val_49425 === (7))){
var inst_49379 = (state_49423[(7)]);
var inst_49379__$1 = (state_49423[(2)]);
var inst_49381 = (inst_49379__$1 == null);
var inst_49382 = cljs.core.not(inst_49381);
var state_49423__$1 = (function (){var statearr_49442 = state_49423;
(statearr_49442[(7)] = inst_49379__$1);

return statearr_49442;
})();
if(inst_49382){
var statearr_49445_49534 = state_49423__$1;
(statearr_49445_49534[(1)] = (8));

} else {
var statearr_49446_49535 = state_49423__$1;
(statearr_49446_49535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (1))){
var state_49423__$1 = state_49423;
var G__49449_49536 = method;
var G__49449_49537__$1 = (((G__49449_49536 instanceof cljs.core.Keyword))?G__49449_49536.fqn:null);
switch (G__49449_49537__$1) {
case "post":
var statearr_49465_49541 = state_49423__$1;
(statearr_49465_49541[(1)] = (3));


break;
case "get":
var statearr_49466_49542 = state_49423__$1;
(statearr_49466_49542[(1)] = (4));


break;
case "put":
var statearr_49467_49543 = state_49423__$1;
(statearr_49467_49543[(1)] = (5));


break;
case "delete":
var statearr_49468_49545 = state_49423__$1;
(statearr_49468_49545[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49449_49537__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (4))){
var state_49423__$1 = state_49423;
var statearr_49469_49549 = state_49423__$1;
(statearr_49469_49549[(2)] = cljs_http.client.get);

(statearr_49469_49549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (15))){
var inst_49379 = (state_49423[(7)]);
var state_49423__$1 = state_49423;
var statearr_49470_49550 = state_49423__$1;
(statearr_49470_49550[(2)] = inst_49379);

(statearr_49470_49550[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (13))){
var inst_49394 = (state_49423[(2)]);
var state_49423__$1 = state_49423;
var statearr_49471_49553 = state_49423__$1;
(statearr_49471_49553[(2)] = inst_49394);

(statearr_49471_49553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (6))){
var state_49423__$1 = state_49423;
var statearr_49472_49556 = state_49423__$1;
(statearr_49472_49556[(2)] = cljs_http.client.delete$);

(statearr_49472_49556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (17))){
var inst_49404 = (state_49423[(8)]);
var inst_49406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_49404);
var inst_49407 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49406) : re_frame.core.dispatch.call(null,inst_49406));
var state_49423__$1 = state_49423;
var statearr_49473_49560 = state_49423__$1;
(statearr_49473_49560[(2)] = inst_49407);

(statearr_49473_49560[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (3))){
var state_49423__$1 = state_49423;
var statearr_49474_49563 = state_49423__$1;
(statearr_49474_49563[(2)] = cljs_http.client.post);

(statearr_49474_49563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (12))){
var state_49423__$1 = state_49423;
var statearr_49475_49564 = state_49423__$1;
(statearr_49475_49564[(2)] = false);

(statearr_49475_49564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (2))){
var inst_49362 = (state_49423[(2)]);
var inst_49375 = (inst_49362.cljs$core$IFn$_invoke$arity$2 ? inst_49362.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_49362.call(null,url,opts));
var state_49423__$1 = state_49423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49423__$1,(7),inst_49375);
} else {
if((state_val_49425 === (19))){
var inst_49412 = (state_49423[(2)]);
var state_49423__$1 = state_49423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49423__$1,inst_49412);
} else {
if((state_val_49425 === (11))){
var state_49423__$1 = state_49423;
var statearr_49476_49568 = state_49423__$1;
(statearr_49476_49568[(2)] = true);

(statearr_49476_49568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (9))){
var state_49423__$1 = state_49423;
var statearr_49477_49572 = state_49423__$1;
(statearr_49477_49572[(2)] = false);

(statearr_49477_49572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (5))){
var state_49423__$1 = state_49423;
var statearr_49478_49573 = state_49423__$1;
(statearr_49478_49573[(2)] = cljs_http.client.put);

(statearr_49478_49573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (14))){
var inst_49379 = (state_49423[(7)]);
var inst_49399 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49379);
var state_49423__$1 = state_49423;
var statearr_49479_49576 = state_49423__$1;
(statearr_49479_49576[(2)] = inst_49399);

(statearr_49479_49576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (16))){
var inst_49402 = (state_49423[(9)]);
var inst_49402__$1 = (state_49423[(2)]);
var inst_49403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49402__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49402__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49423__$1 = (function (){var statearr_49480 = state_49423;
(statearr_49480[(8)] = inst_49404);

(statearr_49480[(9)] = inst_49402__$1);

return statearr_49480;
})();
if(cljs.core.truth_(inst_49403)){
var statearr_49483_49584 = state_49423__$1;
(statearr_49483_49584[(1)] = (17));

} else {
var statearr_49487_49587 = state_49423__$1;
(statearr_49487_49587[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (10))){
var inst_49397 = (state_49423[(2)]);
var state_49423__$1 = state_49423;
if(cljs.core.truth_(inst_49397)){
var statearr_49489_49590 = state_49423__$1;
(statearr_49489_49590[(1)] = (14));

} else {
var statearr_49490_49591 = state_49423__$1;
(statearr_49490_49591[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (18))){
var inst_49402 = (state_49423[(9)]);
var inst_49409 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_49402);
var inst_49410 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49409) : re_frame.core.dispatch.call(null,inst_49409));
var state_49423__$1 = state_49423;
var statearr_49491_49593 = state_49423__$1;
(statearr_49491_49593[(2)] = inst_49410);

(statearr_49491_49593[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49425 === (8))){
var inst_49379 = (state_49423[(7)]);
var inst_49386 = inst_49379.cljs$lang$protocol_mask$partition0$;
var inst_49387 = (inst_49386 & (64));
var inst_49388 = inst_49379.cljs$core$ISeq$;
var inst_49389 = (cljs.core.PROTOCOL_SENTINEL === inst_49388);
var inst_49390 = ((inst_49387) || (inst_49389));
var state_49423__$1 = state_49423;
if(cljs.core.truth_(inst_49390)){
var statearr_49492_49606 = state_49423__$1;
(statearr_49492_49606[(1)] = (11));

} else {
var statearr_49493_49607 = state_49423__$1;
(statearr_49493_49607[(1)] = (12));

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
var athens$effects$state_machine__41525__auto__ = null;
var athens$effects$state_machine__41525__auto____0 = (function (){
var statearr_49494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49494[(0)] = athens$effects$state_machine__41525__auto__);

(statearr_49494[(1)] = (1));

return statearr_49494;
});
var athens$effects$state_machine__41525__auto____1 = (function (state_49423){
while(true){
var ret_value__41526__auto__ = (function (){try{while(true){
var result__41527__auto__ = switch__41524__auto__(state_49423);
if(cljs.core.keyword_identical_QMARK_(result__41527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41527__auto__;
}
break;
}
}catch (e49495){if((e49495 instanceof Object)){
var ex__41528__auto__ = e49495;
var statearr_49496_49619 = state_49423;
(statearr_49496_49619[(5)] = ex__41528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49620 = state_49423;
state_49423 = G__49620;
continue;
} else {
return ret_value__41526__auto__;
}
break;
}
});
athens$effects$state_machine__41525__auto__ = function(state_49423){
switch(arguments.length){
case 0:
return athens$effects$state_machine__41525__auto____0.call(this);
case 1:
return athens$effects$state_machine__41525__auto____1.call(this,state_49423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__41525__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__41525__auto____0;
athens$effects$state_machine__41525__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__41525__auto____1;
return athens$effects$state_machine__41525__auto__;
})()
})();
var state__41549__auto__ = (function (){var statearr_49497 = (f__41548__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41548__auto__.cljs$core$IFn$_invoke$arity$0() : f__41548__auto__.call(null));
(statearr_49497[(6)] = c__41547__auto__);

return statearr_49497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41549__auto__);
}));

return c__41547__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49339_49528,G__49340_49529) : re_frame.core.reg_fx.call(null,G__49339_49528,G__49340_49529));
var G__49500_49625 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__49501_49626 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__49502){
var map__49505 = p__49502;
var map__49505__$1 = (((((!((map__49505 == null))))?(((((map__49505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49505):map__49505);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49505__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49505__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49505__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__49511 = action;
var G__49511__$1 = (((G__49511 instanceof cljs.core.Keyword))?G__49511.fqn:null);
switch (G__49511__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49511__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49500_49625,G__49501_49626) : re_frame.core.reg_fx.call(null,G__49500_49625,G__49501_49626));

//# sourceMappingURL=athens.effects.js.map
