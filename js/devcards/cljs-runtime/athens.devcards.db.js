goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__36998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36999__auto__ = (function (){var switch__36931__auto__ = (function (state_42721){
var state_val_42722 = (state_42721[(1)]);
if((state_val_42722 === (7))){
var state_42721__$1 = state_42721;
var statearr_42723_42757 = state_42721__$1;
(statearr_42723_42757[(2)] = false);

(statearr_42723_42757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (1))){
var inst_42684 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42685 = [false];
var inst_42686 = cljs.core.PersistentHashMap.fromArrays(inst_42684,inst_42685);
var inst_42687 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42686], 0));
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42721__$1,(2),inst_42687);
} else {
if((state_val_42722 === (4))){
var state_42721__$1 = state_42721;
var statearr_42724_42758 = state_42721__$1;
(statearr_42724_42758[(2)] = false);

(statearr_42724_42758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (13))){
var inst_42717 = alert("Failed to retrieve data from GitHub");
var state_42721__$1 = state_42721;
var statearr_42728_42759 = state_42721__$1;
(statearr_42728_42759[(2)] = inst_42717);

(statearr_42728_42759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (6))){
var state_42721__$1 = state_42721;
var statearr_42729_42760 = state_42721__$1;
(statearr_42729_42760[(2)] = true);

(statearr_42729_42760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (3))){
var inst_42689 = (state_42721[(7)]);
var inst_42694 = inst_42689.cljs$lang$protocol_mask$partition0$;
var inst_42695 = (inst_42694 & (64));
var inst_42696 = inst_42689.cljs$core$ISeq$;
var inst_42697 = (cljs.core.PROTOCOL_SENTINEL === inst_42696);
var inst_42698 = ((inst_42695) || (inst_42697));
var state_42721__$1 = state_42721;
if(cljs.core.truth_(inst_42698)){
var statearr_42730_42761 = state_42721__$1;
(statearr_42730_42761[(1)] = (6));

} else {
var statearr_42731_42762 = state_42721__$1;
(statearr_42731_42762[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (12))){
var inst_42712 = (state_42721[(8)]);
var inst_42714 = athens.db.str_to_db_tx(inst_42712);
var inst_42715 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_42714) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_42714));
var state_42721__$1 = state_42721;
var statearr_42732_42763 = state_42721__$1;
(statearr_42732_42763[(2)] = inst_42715);

(statearr_42732_42763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (2))){
var inst_42689 = (state_42721[(7)]);
var inst_42689__$1 = (state_42721[(2)]);
var inst_42691 = (inst_42689__$1 == null);
var inst_42692 = cljs.core.not(inst_42691);
var state_42721__$1 = (function (){var statearr_42733 = state_42721;
(statearr_42733[(7)] = inst_42689__$1);

return statearr_42733;
})();
if(inst_42692){
var statearr_42734_42764 = state_42721__$1;
(statearr_42734_42764[(1)] = (3));

} else {
var statearr_42735_42765 = state_42721__$1;
(statearr_42735_42765[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (11))){
var inst_42710 = (state_42721[(2)]);
var inst_42711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42710,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_42712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42710,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_42721__$1 = (function (){var statearr_42736 = state_42721;
(statearr_42736[(8)] = inst_42712);

return statearr_42736;
})();
if(cljs.core.truth_(inst_42711)){
var statearr_42737_42767 = state_42721__$1;
(statearr_42737_42767[(1)] = (12));

} else {
var statearr_42739_42768 = state_42721__$1;
(statearr_42739_42768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (9))){
var inst_42689 = (state_42721[(7)]);
var inst_42707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42689);
var state_42721__$1 = state_42721;
var statearr_42740_42769 = state_42721__$1;
(statearr_42740_42769[(2)] = inst_42707);

(statearr_42740_42769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (5))){
var inst_42705 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
if(cljs.core.truth_(inst_42705)){
var statearr_42741_42770 = state_42721__$1;
(statearr_42741_42770[(1)] = (9));

} else {
var statearr_42742_42771 = state_42721__$1;
(statearr_42742_42771[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (14))){
var inst_42719 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42721__$1,inst_42719);
} else {
if((state_val_42722 === (10))){
var inst_42689 = (state_42721[(7)]);
var state_42721__$1 = state_42721;
var statearr_42743_42772 = state_42721__$1;
(statearr_42743_42772[(2)] = inst_42689);

(statearr_42743_42772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42722 === (8))){
var inst_42702 = (state_42721[(2)]);
var state_42721__$1 = state_42721;
var statearr_42744_42773 = state_42721__$1;
(statearr_42744_42773[(2)] = inst_42702);

(statearr_42744_42773[(1)] = (5));


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
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____0 = (function (){
var statearr_42745 = [null,null,null,null,null,null,null,null,null];
(statearr_42745[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__);

(statearr_42745[(1)] = (1));

return statearr_42745;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____1 = (function (state_42721){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_42721);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e42746){if((e42746 instanceof Object)){
var ex__36935__auto__ = e42746;
var statearr_42747_42774 = state_42721;
(statearr_42747_42774[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42775 = state_42721;
state_42721 = G__42775;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__ = function(state_42721){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____1.call(this,state_42721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__36932__auto__;
})()
})();
var state__37000__auto__ = (function (){var statearr_42748 = (f__36999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36999__auto__.cljs$core$IFn$_invoke$arity$0() : f__36999__auto__.call(null));
(statearr_42748[(6)] = c__36998__auto__);

return statearr_42748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37000__auto__);
}));

return c__36998__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42750 = (function (meta42751){
this.meta42751 = meta42751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42752,meta42751__$1){
var self__ = this;
var _42752__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42750(meta42751__$1));
}));

(athens.devcards.db.t_athens$devcards$db42750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42752){
var self__ = this;
var _42752__$1 = this;
return self__.meta42751;
}));

(athens.devcards.db.t_athens$devcards$db42750.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42750.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42212__auto__,devcard_opts__42213__auto__){
var self__ = this;
var this__42212__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42213__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42231__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__42231__auto__)){
return (function (data_atom__42232__auto__,owner__42233__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42231__auto__,data_atom__42232__auto__,owner__42233__auto__], null));
});
} else {
return reagent.core.as_element(v__42231__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42213__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42751","meta42751",1989450818,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42750.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42750.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42750");

(athens.devcards.db.t_athens$devcards$db42750.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42750");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42750.
 */
athens.devcards.db.__GT_t_athens$devcards$db42750 = (function athens$devcards$db$__GT_t_athens$devcards$db42750(meta42751){
return (new athens.devcards.db.t_athens$devcards$db42750(meta42751));
});

}

return (new athens.devcards.db.t_athens$devcards$db42750(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db42753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db42753 = (function (meta42754){
this.meta42754 = meta42754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db42753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42755,meta42754__$1){
var self__ = this;
var _42755__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db42753(meta42754__$1));
}));

(athens.devcards.db.t_athens$devcards$db42753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42755){
var self__ = this;
var _42755__$1 = this;
return self__.meta42754;
}));

(athens.devcards.db.t_athens$devcards$db42753.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db42753.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42212__auto__,devcard_opts__42213__auto__){
var self__ = this;
var this__42212__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42213__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42231__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__42231__auto__)){
return (function (data_atom__42232__auto__,owner__42233__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42231__auto__,data_atom__42232__auto__,owner__42233__auto__], null));
});
} else {
return reagent.core.as_element(v__42231__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42213__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db42753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42754","meta42754",871830530,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db42753.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db42753.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db42753");

(athens.devcards.db.t_athens$devcards$db42753.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db42753");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db42753.
 */
athens.devcards.db.__GT_t_athens$devcards$db42753 = (function athens$devcards$db$__GT_t_athens$devcards$db42753(meta42754){
return (new athens.devcards.db.t_athens$devcards$db42753(meta42754));
});

}

return (new athens.devcards.db.t_athens$devcards$db42753(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
