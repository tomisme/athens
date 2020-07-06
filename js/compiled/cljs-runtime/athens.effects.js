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
var G__40671_40763 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__40672_40764 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40671_40763,G__40672_40764) : re_frame.core.reg_fx.call(null,G__40671_40763,G__40672_40764));
var G__40673_40765 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__40674_40766 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40673_40765,G__40674_40766) : re_frame.core.reg_fx.call(null,G__40673_40765,G__40674_40766));
var G__40675_40767 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__40676_40768 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40675_40767,G__40676_40768) : re_frame.core.reg_fx.call(null,G__40675_40767,G__40676_40768));
var G__40677_40769 = new cljs.core.Keyword(null,"http","http",382524695);
var G__40678_40770 = (function (p__40679){
var map__40680 = p__40679;
var map__40680__$1 = (((((!((map__40680 == null))))?(((((map__40680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40680):map__40680);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40680__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40680__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40680__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40680__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40680__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__29461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29462__auto__ = (function (){var switch__29393__auto__ = (function (state_40724){
var state_val_40725 = (state_40724[(1)]);
if((state_val_40725 === (7))){
var inst_40691 = (state_40724[(7)]);
var inst_40691__$1 = (state_40724[(2)]);
var inst_40693 = (inst_40691__$1 == null);
var inst_40694 = cljs.core.not(inst_40693);
var state_40724__$1 = (function (){var statearr_40726 = state_40724;
(statearr_40726[(7)] = inst_40691__$1);

return statearr_40726;
})();
if(inst_40694){
var statearr_40727_40771 = state_40724__$1;
(statearr_40727_40771[(1)] = (8));

} else {
var statearr_40728_40772 = state_40724__$1;
(statearr_40728_40772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (1))){
var state_40724__$1 = state_40724;
var G__40729_40773 = method;
var G__40729_40774__$1 = (((G__40729_40773 instanceof cljs.core.Keyword))?G__40729_40773.fqn:null);
switch (G__40729_40774__$1) {
case "post":
var statearr_40730_40776 = state_40724__$1;
(statearr_40730_40776[(1)] = (3));


break;
case "get":
var statearr_40731_40777 = state_40724__$1;
(statearr_40731_40777[(1)] = (4));


break;
case "put":
var statearr_40732_40778 = state_40724__$1;
(statearr_40732_40778[(1)] = (5));


break;
case "delete":
var statearr_40733_40779 = state_40724__$1;
(statearr_40733_40779[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40729_40774__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (4))){
var state_40724__$1 = state_40724;
var statearr_40734_40780 = state_40724__$1;
(statearr_40734_40780[(2)] = cljs_http.client.get);

(statearr_40734_40780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (15))){
var inst_40691 = (state_40724[(7)]);
var state_40724__$1 = state_40724;
var statearr_40735_40781 = state_40724__$1;
(statearr_40735_40781[(2)] = inst_40691);

(statearr_40735_40781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (13))){
var inst_40704 = (state_40724[(2)]);
var state_40724__$1 = state_40724;
var statearr_40736_40782 = state_40724__$1;
(statearr_40736_40782[(2)] = inst_40704);

(statearr_40736_40782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (6))){
var state_40724__$1 = state_40724;
var statearr_40737_40783 = state_40724__$1;
(statearr_40737_40783[(2)] = cljs_http.client.delete$);

(statearr_40737_40783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (17))){
var inst_40714 = (state_40724[(8)]);
var inst_40716 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_40714);
var inst_40717 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_40716) : re_frame.core.dispatch.call(null,inst_40716));
var state_40724__$1 = state_40724;
var statearr_40738_40784 = state_40724__$1;
(statearr_40738_40784[(2)] = inst_40717);

(statearr_40738_40784[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (3))){
var state_40724__$1 = state_40724;
var statearr_40739_40785 = state_40724__$1;
(statearr_40739_40785[(2)] = cljs_http.client.post);

(statearr_40739_40785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (12))){
var state_40724__$1 = state_40724;
var statearr_40740_40786 = state_40724__$1;
(statearr_40740_40786[(2)] = false);

(statearr_40740_40786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (2))){
var inst_40688 = (state_40724[(2)]);
var inst_40689 = (inst_40688.cljs$core$IFn$_invoke$arity$2 ? inst_40688.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_40688.call(null,url,opts));
var state_40724__$1 = state_40724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40724__$1,(7),inst_40689);
} else {
if((state_val_40725 === (19))){
var inst_40722 = (state_40724[(2)]);
var state_40724__$1 = state_40724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40724__$1,inst_40722);
} else {
if((state_val_40725 === (11))){
var state_40724__$1 = state_40724;
var statearr_40741_40787 = state_40724__$1;
(statearr_40741_40787[(2)] = true);

(statearr_40741_40787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (9))){
var state_40724__$1 = state_40724;
var statearr_40742_40788 = state_40724__$1;
(statearr_40742_40788[(2)] = false);

(statearr_40742_40788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (5))){
var state_40724__$1 = state_40724;
var statearr_40743_40789 = state_40724__$1;
(statearr_40743_40789[(2)] = cljs_http.client.put);

(statearr_40743_40789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (14))){
var inst_40691 = (state_40724[(7)]);
var inst_40709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40691);
var state_40724__$1 = state_40724;
var statearr_40744_40790 = state_40724__$1;
(statearr_40744_40790[(2)] = inst_40709);

(statearr_40744_40790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (16))){
var inst_40712 = (state_40724[(9)]);
var inst_40712__$1 = (state_40724[(2)]);
var inst_40713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40712__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_40714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40712__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_40724__$1 = (function (){var statearr_40745 = state_40724;
(statearr_40745[(8)] = inst_40714);

(statearr_40745[(9)] = inst_40712__$1);

return statearr_40745;
})();
if(cljs.core.truth_(inst_40713)){
var statearr_40746_40791 = state_40724__$1;
(statearr_40746_40791[(1)] = (17));

} else {
var statearr_40747_40792 = state_40724__$1;
(statearr_40747_40792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (10))){
var inst_40707 = (state_40724[(2)]);
var state_40724__$1 = state_40724;
if(cljs.core.truth_(inst_40707)){
var statearr_40748_40793 = state_40724__$1;
(statearr_40748_40793[(1)] = (14));

} else {
var statearr_40749_40794 = state_40724__$1;
(statearr_40749_40794[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (18))){
var inst_40712 = (state_40724[(9)]);
var inst_40719 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_40712);
var inst_40720 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_40719) : re_frame.core.dispatch.call(null,inst_40719));
var state_40724__$1 = state_40724;
var statearr_40750_40795 = state_40724__$1;
(statearr_40750_40795[(2)] = inst_40720);

(statearr_40750_40795[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (8))){
var inst_40691 = (state_40724[(7)]);
var inst_40696 = inst_40691.cljs$lang$protocol_mask$partition0$;
var inst_40697 = (inst_40696 & (64));
var inst_40698 = inst_40691.cljs$core$ISeq$;
var inst_40699 = (cljs.core.PROTOCOL_SENTINEL === inst_40698);
var inst_40700 = ((inst_40697) || (inst_40699));
var state_40724__$1 = state_40724;
if(cljs.core.truth_(inst_40700)){
var statearr_40751_40796 = state_40724__$1;
(statearr_40751_40796[(1)] = (11));

} else {
var statearr_40752_40797 = state_40724__$1;
(statearr_40752_40797[(1)] = (12));

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
var athens$effects$state_machine__29394__auto__ = null;
var athens$effects$state_machine__29394__auto____0 = (function (){
var statearr_40753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40753[(0)] = athens$effects$state_machine__29394__auto__);

(statearr_40753[(1)] = (1));

return statearr_40753;
});
var athens$effects$state_machine__29394__auto____1 = (function (state_40724){
while(true){
var ret_value__29395__auto__ = (function (){try{while(true){
var result__29396__auto__ = switch__29393__auto__(state_40724);
if(cljs.core.keyword_identical_QMARK_(result__29396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29396__auto__;
}
break;
}
}catch (e40754){if((e40754 instanceof Object)){
var ex__29397__auto__ = e40754;
var statearr_40755_40798 = state_40724;
(statearr_40755_40798[(5)] = ex__29397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40799 = state_40724;
state_40724 = G__40799;
continue;
} else {
return ret_value__29395__auto__;
}
break;
}
});
athens$effects$state_machine__29394__auto__ = function(state_40724){
switch(arguments.length){
case 0:
return athens$effects$state_machine__29394__auto____0.call(this);
case 1:
return athens$effects$state_machine__29394__auto____1.call(this,state_40724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__29394__auto____0;
athens$effects$state_machine__29394__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__29394__auto____1;
return athens$effects$state_machine__29394__auto__;
})()
})();
var state__29463__auto__ = (function (){var statearr_40756 = (f__29462__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29462__auto__.cljs$core$IFn$_invoke$arity$0() : f__29462__auto__.call(null));
(statearr_40756[(6)] = c__29461__auto__);

return statearr_40756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29463__auto__);
}));

return c__29461__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40677_40769,G__40678_40770) : re_frame.core.reg_fx.call(null,G__40677_40769,G__40678_40770));
var G__40757_40800 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__40758_40801 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__40759){
var map__40760 = p__40759;
var map__40760__$1 = (((((!((map__40760 == null))))?(((((map__40760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40760):map__40760);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40760__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40760__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40760__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40760__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__40762 = action;
var G__40762__$1 = (((G__40762 instanceof cljs.core.Keyword))?G__40762.fqn:null);
switch (G__40762__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40762__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40757_40800,G__40758_40801) : re_frame.core.reg_fx.call(null,G__40757_40800,G__40758_40801));

//# sourceMappingURL=athens.effects.js.map
