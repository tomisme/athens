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
var c__39427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39428__auto__ = (function (){var switch__39404__auto__ = (function (state_47958){
var state_val_47962 = (state_47958[(1)]);
if((state_val_47962 === (7))){
var state_47958__$1 = state_47958;
var statearr_47963_48129 = state_47958__$1;
(statearr_47963_48129[(2)] = false);

(statearr_47963_48129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (1))){
var inst_47918 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_47919 = [false];
var inst_47920 = cljs.core.PersistentHashMap.fromArrays(inst_47918,inst_47919);
var inst_47921 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47920], 0));
var state_47958__$1 = state_47958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47958__$1,(2),inst_47921);
} else {
if((state_val_47962 === (4))){
var state_47958__$1 = state_47958;
var statearr_47970_48131 = state_47958__$1;
(statearr_47970_48131[(2)] = false);

(statearr_47970_48131[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (13))){
var inst_47951 = alert("Failed to retrieve data from GitHub");
var state_47958__$1 = state_47958;
var statearr_47973_48133 = state_47958__$1;
(statearr_47973_48133[(2)] = inst_47951);

(statearr_47973_48133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (6))){
var state_47958__$1 = state_47958;
var statearr_47977_48134 = state_47958__$1;
(statearr_47977_48134[(2)] = true);

(statearr_47977_48134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (3))){
var inst_47923 = (state_47958[(7)]);
var inst_47928 = inst_47923.cljs$lang$protocol_mask$partition0$;
var inst_47929 = (inst_47928 & (64));
var inst_47930 = inst_47923.cljs$core$ISeq$;
var inst_47931 = (cljs.core.PROTOCOL_SENTINEL === inst_47930);
var inst_47932 = ((inst_47929) || (inst_47931));
var state_47958__$1 = state_47958;
if(cljs.core.truth_(inst_47932)){
var statearr_47980_48135 = state_47958__$1;
(statearr_47980_48135[(1)] = (6));

} else {
var statearr_47981_48136 = state_47958__$1;
(statearr_47981_48136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (12))){
var inst_47946 = (state_47958[(8)]);
var inst_47948 = athens.db.str_to_db_tx(inst_47946);
var inst_47949 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_47948) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_47948));
var state_47958__$1 = state_47958;
var statearr_47983_48151 = state_47958__$1;
(statearr_47983_48151[(2)] = inst_47949);

(statearr_47983_48151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (2))){
var inst_47923 = (state_47958[(7)]);
var inst_47923__$1 = (state_47958[(2)]);
var inst_47925 = (inst_47923__$1 == null);
var inst_47926 = cljs.core.not(inst_47925);
var state_47958__$1 = (function (){var statearr_47986 = state_47958;
(statearr_47986[(7)] = inst_47923__$1);

return statearr_47986;
})();
if(inst_47926){
var statearr_47987_48152 = state_47958__$1;
(statearr_47987_48152[(1)] = (3));

} else {
var statearr_47988_48153 = state_47958__$1;
(statearr_47988_48153[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (11))){
var inst_47944 = (state_47958[(2)]);
var inst_47945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47944,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_47946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47944,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_47958__$1 = (function (){var statearr_47991 = state_47958;
(statearr_47991[(8)] = inst_47946);

return statearr_47991;
})();
if(cljs.core.truth_(inst_47945)){
var statearr_47994_48154 = state_47958__$1;
(statearr_47994_48154[(1)] = (12));

} else {
var statearr_47996_48155 = state_47958__$1;
(statearr_47996_48155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (9))){
var inst_47923 = (state_47958[(7)]);
var inst_47941 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47923);
var state_47958__$1 = state_47958;
var statearr_47998_48157 = state_47958__$1;
(statearr_47998_48157[(2)] = inst_47941);

(statearr_47998_48157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (5))){
var inst_47939 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
if(cljs.core.truth_(inst_47939)){
var statearr_47999_48158 = state_47958__$1;
(statearr_47999_48158[(1)] = (9));

} else {
var statearr_48000_48159 = state_47958__$1;
(statearr_48000_48159[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (14))){
var inst_47953 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47958__$1,inst_47953);
} else {
if((state_val_47962 === (10))){
var inst_47923 = (state_47958[(7)]);
var state_47958__$1 = state_47958;
var statearr_48005_48160 = state_47958__$1;
(statearr_48005_48160[(2)] = inst_47923);

(statearr_48005_48160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (8))){
var inst_47936 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
var statearr_48008_48161 = state_47958__$1;
(statearr_48008_48161[(2)] = inst_47936);

(statearr_48008_48161[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto____0 = (function (){
var statearr_48009 = [null,null,null,null,null,null,null,null,null];
(statearr_48009[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto__);

(statearr_48009[(1)] = (1));

return statearr_48009;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto____1 = (function (state_47958){
while(true){
var ret_value__39406__auto__ = (function (){try{while(true){
var result__39407__auto__ = switch__39404__auto__(state_47958);
if(cljs.core.keyword_identical_QMARK_(result__39407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39407__auto__;
}
break;
}
}catch (e48018){if((e48018 instanceof Object)){
var ex__39408__auto__ = e48018;
var statearr_48020_48162 = state_47958;
(statearr_48020_48162[(5)] = ex__39408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48165 = state_47958;
state_47958 = G__48165;
continue;
} else {
return ret_value__39406__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto__ = function(state_47958){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto____1.call(this,state_47958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39405__auto__;
})()
})();
var state__39429__auto__ = (function (){var statearr_48029 = (f__39428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39428__auto__.cljs$core$IFn$_invoke$arity$0() : f__39428__auto__.call(null));
(statearr_48029[(6)] = c__39427__auto__);

return statearr_48029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39429__auto__);
}));

return c__39427__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db48069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db48069 = (function (meta48070){
this.meta48070 = meta48070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db48069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48071,meta48070__$1){
var self__ = this;
var _48071__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db48069(meta48070__$1));
}));

(athens.devcards.db.t_athens$devcards$db48069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48071){
var self__ = this;
var _48071__$1 = this;
return self__.meta48070;
}));

(athens.devcards.db.t_athens$devcards$db48069.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db48069.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db48069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48070","meta48070",-224242970,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db48069.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db48069.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db48069");

(athens.devcards.db.t_athens$devcards$db48069.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db48069");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db48069.
 */
athens.devcards.db.__GT_t_athens$devcards$db48069 = (function athens$devcards$db$__GT_t_athens$devcards$db48069(meta48070){
return (new athens.devcards.db.t_athens$devcards$db48069(meta48070));
});

}

return (new athens.devcards.db.t_athens$devcards$db48069(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db48098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db48098 = (function (meta48099){
this.meta48099 = meta48099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db48098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48100,meta48099__$1){
var self__ = this;
var _48100__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db48098(meta48099__$1));
}));

(athens.devcards.db.t_athens$devcards$db48098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48100){
var self__ = this;
var _48100__$1 = this;
return self__.meta48099;
}));

(athens.devcards.db.t_athens$devcards$db48098.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db48098.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db48098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48099","meta48099",-1722512346,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db48098.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db48098.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db48098");

(athens.devcards.db.t_athens$devcards$db48098.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db48098");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db48098.
 */
athens.devcards.db.__GT_t_athens$devcards$db48098 = (function athens$devcards$db$__GT_t_athens$devcards$db48098(meta48099){
return (new athens.devcards.db.t_athens$devcards$db48098(meta48099));
});

}

return (new athens.devcards.db.t_athens$devcards$db48098(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
