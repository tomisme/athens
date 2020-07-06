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
var G__56475_56567 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__56476_56568 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__56475_56567,G__56476_56568) : re_frame.core.reg_fx.call(null,G__56475_56567,G__56476_56568));
var G__56477_56569 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__56478_56570 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__56477_56569,G__56478_56570) : re_frame.core.reg_fx.call(null,G__56477_56569,G__56478_56570));
var G__56479_56571 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__56480_56572 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__56479_56571,G__56480_56572) : re_frame.core.reg_fx.call(null,G__56479_56571,G__56480_56572));
var G__56481_56573 = new cljs.core.Keyword(null,"http","http",382524695);
var G__56482_56574 = (function (p__56483){
var map__56484 = p__56483;
var map__56484__$1 = (((((!((map__56484 == null))))?(((((map__56484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56484):map__56484);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__39427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39428__auto__ = (function (){var switch__39404__auto__ = (function (state_56528){
var state_val_56529 = (state_56528[(1)]);
if((state_val_56529 === (7))){
var inst_56495 = (state_56528[(7)]);
var inst_56495__$1 = (state_56528[(2)]);
var inst_56497 = (inst_56495__$1 == null);
var inst_56498 = cljs.core.not(inst_56497);
var state_56528__$1 = (function (){var statearr_56530 = state_56528;
(statearr_56530[(7)] = inst_56495__$1);

return statearr_56530;
})();
if(inst_56498){
var statearr_56531_56575 = state_56528__$1;
(statearr_56531_56575[(1)] = (8));

} else {
var statearr_56532_56576 = state_56528__$1;
(statearr_56532_56576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (1))){
var state_56528__$1 = state_56528;
var G__56533_56577 = method;
var G__56533_56578__$1 = (((G__56533_56577 instanceof cljs.core.Keyword))?G__56533_56577.fqn:null);
switch (G__56533_56578__$1) {
case "post":
var statearr_56534_56580 = state_56528__$1;
(statearr_56534_56580[(1)] = (3));


break;
case "get":
var statearr_56535_56581 = state_56528__$1;
(statearr_56535_56581[(1)] = (4));


break;
case "put":
var statearr_56536_56582 = state_56528__$1;
(statearr_56536_56582[(1)] = (5));


break;
case "delete":
var statearr_56537_56583 = state_56528__$1;
(statearr_56537_56583[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56533_56578__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (4))){
var state_56528__$1 = state_56528;
var statearr_56538_56584 = state_56528__$1;
(statearr_56538_56584[(2)] = cljs_http.client.get);

(statearr_56538_56584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (15))){
var inst_56495 = (state_56528[(7)]);
var state_56528__$1 = state_56528;
var statearr_56539_56585 = state_56528__$1;
(statearr_56539_56585[(2)] = inst_56495);

(statearr_56539_56585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (13))){
var inst_56508 = (state_56528[(2)]);
var state_56528__$1 = state_56528;
var statearr_56540_56586 = state_56528__$1;
(statearr_56540_56586[(2)] = inst_56508);

(statearr_56540_56586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (6))){
var state_56528__$1 = state_56528;
var statearr_56541_56587 = state_56528__$1;
(statearr_56541_56587[(2)] = cljs_http.client.delete$);

(statearr_56541_56587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (17))){
var inst_56518 = (state_56528[(8)]);
var inst_56520 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_56518);
var inst_56521 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_56520) : re_frame.core.dispatch.call(null,inst_56520));
var state_56528__$1 = state_56528;
var statearr_56542_56588 = state_56528__$1;
(statearr_56542_56588[(2)] = inst_56521);

(statearr_56542_56588[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (3))){
var state_56528__$1 = state_56528;
var statearr_56543_56589 = state_56528__$1;
(statearr_56543_56589[(2)] = cljs_http.client.post);

(statearr_56543_56589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (12))){
var state_56528__$1 = state_56528;
var statearr_56544_56590 = state_56528__$1;
(statearr_56544_56590[(2)] = false);

(statearr_56544_56590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (2))){
var inst_56492 = (state_56528[(2)]);
var inst_56493 = (inst_56492.cljs$core$IFn$_invoke$arity$2 ? inst_56492.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_56492.call(null,url,opts));
var state_56528__$1 = state_56528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56528__$1,(7),inst_56493);
} else {
if((state_val_56529 === (19))){
var inst_56526 = (state_56528[(2)]);
var state_56528__$1 = state_56528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56528__$1,inst_56526);
} else {
if((state_val_56529 === (11))){
var state_56528__$1 = state_56528;
var statearr_56545_56591 = state_56528__$1;
(statearr_56545_56591[(2)] = true);

(statearr_56545_56591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (9))){
var state_56528__$1 = state_56528;
var statearr_56546_56592 = state_56528__$1;
(statearr_56546_56592[(2)] = false);

(statearr_56546_56592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (5))){
var state_56528__$1 = state_56528;
var statearr_56547_56593 = state_56528__$1;
(statearr_56547_56593[(2)] = cljs_http.client.put);

(statearr_56547_56593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (14))){
var inst_56495 = (state_56528[(7)]);
var inst_56513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56495);
var state_56528__$1 = state_56528;
var statearr_56548_56594 = state_56528__$1;
(statearr_56548_56594[(2)] = inst_56513);

(statearr_56548_56594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (16))){
var inst_56516 = (state_56528[(9)]);
var inst_56516__$1 = (state_56528[(2)]);
var inst_56517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56516__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_56518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56516__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_56528__$1 = (function (){var statearr_56549 = state_56528;
(statearr_56549[(8)] = inst_56518);

(statearr_56549[(9)] = inst_56516__$1);

return statearr_56549;
})();
if(cljs.core.truth_(inst_56517)){
var statearr_56550_56595 = state_56528__$1;
(statearr_56550_56595[(1)] = (17));

} else {
var statearr_56551_56596 = state_56528__$1;
(statearr_56551_56596[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (10))){
var inst_56511 = (state_56528[(2)]);
var state_56528__$1 = state_56528;
if(cljs.core.truth_(inst_56511)){
var statearr_56552_56597 = state_56528__$1;
(statearr_56552_56597[(1)] = (14));

} else {
var statearr_56553_56598 = state_56528__$1;
(statearr_56553_56598[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (18))){
var inst_56516 = (state_56528[(9)]);
var inst_56523 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_56516);
var inst_56524 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_56523) : re_frame.core.dispatch.call(null,inst_56523));
var state_56528__$1 = state_56528;
var statearr_56554_56599 = state_56528__$1;
(statearr_56554_56599[(2)] = inst_56524);

(statearr_56554_56599[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56529 === (8))){
var inst_56495 = (state_56528[(7)]);
var inst_56500 = inst_56495.cljs$lang$protocol_mask$partition0$;
var inst_56501 = (inst_56500 & (64));
var inst_56502 = inst_56495.cljs$core$ISeq$;
var inst_56503 = (cljs.core.PROTOCOL_SENTINEL === inst_56502);
var inst_56504 = ((inst_56501) || (inst_56503));
var state_56528__$1 = state_56528;
if(cljs.core.truth_(inst_56504)){
var statearr_56555_56600 = state_56528__$1;
(statearr_56555_56600[(1)] = (11));

} else {
var statearr_56556_56601 = state_56528__$1;
(statearr_56556_56601[(1)] = (12));

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
var athens$effects$state_machine__39405__auto__ = null;
var athens$effects$state_machine__39405__auto____0 = (function (){
var statearr_56557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56557[(0)] = athens$effects$state_machine__39405__auto__);

(statearr_56557[(1)] = (1));

return statearr_56557;
});
var athens$effects$state_machine__39405__auto____1 = (function (state_56528){
while(true){
var ret_value__39406__auto__ = (function (){try{while(true){
var result__39407__auto__ = switch__39404__auto__(state_56528);
if(cljs.core.keyword_identical_QMARK_(result__39407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39407__auto__;
}
break;
}
}catch (e56558){if((e56558 instanceof Object)){
var ex__39408__auto__ = e56558;
var statearr_56559_56602 = state_56528;
(statearr_56559_56602[(5)] = ex__39408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56603 = state_56528;
state_56528 = G__56603;
continue;
} else {
return ret_value__39406__auto__;
}
break;
}
});
athens$effects$state_machine__39405__auto__ = function(state_56528){
switch(arguments.length){
case 0:
return athens$effects$state_machine__39405__auto____0.call(this);
case 1:
return athens$effects$state_machine__39405__auto____1.call(this,state_56528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__39405__auto____0;
athens$effects$state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__39405__auto____1;
return athens$effects$state_machine__39405__auto__;
})()
})();
var state__39429__auto__ = (function (){var statearr_56560 = (f__39428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39428__auto__.cljs$core$IFn$_invoke$arity$0() : f__39428__auto__.call(null));
(statearr_56560[(6)] = c__39427__auto__);

return statearr_56560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39429__auto__);
}));

return c__39427__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__56481_56573,G__56482_56574) : re_frame.core.reg_fx.call(null,G__56481_56573,G__56482_56574));
var G__56561_56604 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__56562_56605 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__56563){
var map__56564 = p__56563;
var map__56564__$1 = (((((!((map__56564 == null))))?(((((map__56564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56564):map__56564);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__56566 = action;
var G__56566__$1 = (((G__56566 instanceof cljs.core.Keyword))?G__56566.fqn:null);
switch (G__56566__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56566__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__56561_56604,G__56562_56605) : re_frame.core.reg_fx.call(null,G__56561_56604,G__56562_56605));

//# sourceMappingURL=athens.effects.js.map
