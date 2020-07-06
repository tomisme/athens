goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.data_browser');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('goog.events.KeyCodes');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__55998){
var map__55999 = p__55998;
var map__55999__$1 = (((((!((map__55999 == null))))?(((((map__55999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55999):map__55999);
var box = map__55999__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55999__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__56001 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e56004){if((e56004 instanceof Error)){
var e = e56004;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e56004;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56001,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56001,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__56005_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56005_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__39427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39428__auto__ = (function (){var switch__39404__auto__ = (function (state_56045){
var state_val_56046 = (state_56045[(1)]);
if((state_val_56046 === (7))){
var state_56045__$1 = state_56045;
var statearr_56047_56129 = state_56045__$1;
(statearr_56047_56129[(2)] = false);

(statearr_56047_56129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (1))){
var inst_56007 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_56008 = [false];
var inst_56009 = cljs.core.PersistentHashMap.fromArrays(inst_56007,inst_56008);
var inst_56010 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56009], 0));
var state_56045__$1 = state_56045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56045__$1,(2),inst_56010);
} else {
if((state_val_56046 === (4))){
var state_56045__$1 = state_56045;
var statearr_56048_56130 = state_56045__$1;
(statearr_56048_56130[(2)] = false);

(statearr_56048_56130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (13))){
var inst_56041 = alert("Failed to retrieve data from GitHub");
var state_56045__$1 = state_56045;
var statearr_56052_56131 = state_56045__$1;
(statearr_56052_56131[(2)] = inst_56041);

(statearr_56052_56131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (6))){
var state_56045__$1 = state_56045;
var statearr_56054_56132 = state_56045__$1;
(statearr_56054_56132[(2)] = true);

(statearr_56054_56132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (3))){
var inst_56012 = (state_56045[(7)]);
var inst_56017 = inst_56012.cljs$lang$protocol_mask$partition0$;
var inst_56018 = (inst_56017 & (64));
var inst_56019 = inst_56012.cljs$core$ISeq$;
var inst_56020 = (cljs.core.PROTOCOL_SENTINEL === inst_56019);
var inst_56021 = ((inst_56018) || (inst_56020));
var state_56045__$1 = state_56045;
if(cljs.core.truth_(inst_56021)){
var statearr_56055_56133 = state_56045__$1;
(statearr_56055_56133[(1)] = (6));

} else {
var statearr_56056_56134 = state_56045__$1;
(statearr_56056_56134[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (12))){
var inst_56035 = (state_56045[(8)]);
var inst_56037 = athens.db.str_to_db_tx(inst_56035);
var inst_56038 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_56037);
var inst_56039 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_56045__$1 = (function (){var statearr_56057 = state_56045;
(statearr_56057[(9)] = inst_56038);

return statearr_56057;
})();
var statearr_56058_56135 = state_56045__$1;
(statearr_56058_56135[(2)] = inst_56039);

(statearr_56058_56135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (2))){
var inst_56012 = (state_56045[(7)]);
var inst_56012__$1 = (state_56045[(2)]);
var inst_56014 = (inst_56012__$1 == null);
var inst_56015 = cljs.core.not(inst_56014);
var state_56045__$1 = (function (){var statearr_56059 = state_56045;
(statearr_56059[(7)] = inst_56012__$1);

return statearr_56059;
})();
if(inst_56015){
var statearr_56060_56136 = state_56045__$1;
(statearr_56060_56136[(1)] = (3));

} else {
var statearr_56061_56137 = state_56045__$1;
(statearr_56061_56137[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (11))){
var inst_56033 = (state_56045[(2)]);
var inst_56034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56033,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_56035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56033,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_56045__$1 = (function (){var statearr_56062 = state_56045;
(statearr_56062[(8)] = inst_56035);

return statearr_56062;
})();
if(cljs.core.truth_(inst_56034)){
var statearr_56063_56138 = state_56045__$1;
(statearr_56063_56138[(1)] = (12));

} else {
var statearr_56064_56139 = state_56045__$1;
(statearr_56064_56139[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (9))){
var inst_56012 = (state_56045[(7)]);
var inst_56030 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56012);
var state_56045__$1 = state_56045;
var statearr_56065_56140 = state_56045__$1;
(statearr_56065_56140[(2)] = inst_56030);

(statearr_56065_56140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (5))){
var inst_56028 = (state_56045[(2)]);
var state_56045__$1 = state_56045;
if(cljs.core.truth_(inst_56028)){
var statearr_56066_56141 = state_56045__$1;
(statearr_56066_56141[(1)] = (9));

} else {
var statearr_56067_56142 = state_56045__$1;
(statearr_56067_56142[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (14))){
var inst_56043 = (state_56045[(2)]);
var state_56045__$1 = state_56045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56045__$1,inst_56043);
} else {
if((state_val_56046 === (10))){
var inst_56012 = (state_56045[(7)]);
var state_56045__$1 = state_56045;
var statearr_56068_56143 = state_56045__$1;
(statearr_56068_56143[(2)] = inst_56012);

(statearr_56068_56143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56046 === (8))){
var inst_56025 = (state_56045[(2)]);
var state_56045__$1 = state_56045;
var statearr_56069_56144 = state_56045__$1;
(statearr_56069_56144[(2)] = inst_56025);

(statearr_56069_56144[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto____0 = (function (){
var statearr_56070 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56070[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto__);

(statearr_56070[(1)] = (1));

return statearr_56070;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto____1 = (function (state_56045){
while(true){
var ret_value__39406__auto__ = (function (){try{while(true){
var result__39407__auto__ = switch__39404__auto__(state_56045);
if(cljs.core.keyword_identical_QMARK_(result__39407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39407__auto__;
}
break;
}
}catch (e56071){if((e56071 instanceof Object)){
var ex__39408__auto__ = e56071;
var statearr_56072_56145 = state_56045;
(statearr_56072_56145[(5)] = ex__39408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56146 = state_56045;
state_56045 = G__56146;
continue;
} else {
return ret_value__39406__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto__ = function(state_56045){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto____1.call(this,state_56045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39405__auto__;
})()
})();
var state__39429__auto__ = (function (){var statearr_56073 = (f__39428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39428__auto__.cljs$core$IFn$_invoke$arity$0() : f__39428__auto__.call(null));
(statearr_56073[(6)] = c__39427__auto__);

return statearr_56073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39429__auto__);
}));

return c__39427__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes56074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes56074 = (function (meta56075){
this.meta56075 = meta56075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56076,meta56075__$1){
var self__ = this;
var _56076__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56074(meta56075__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56076){
var self__ = this;
var _56076__$1 = this;
return self__.meta56075;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56075","meta56075",-398942871,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes56074");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56074.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes56074");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes56074.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes56074 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes56074(meta56075){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56074(meta56075));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56074(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes56083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes56083 = (function (meta56084){
this.meta56084 = meta56084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56085,meta56084__$1){
var self__ = this;
var _56085__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56083(meta56084__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56085){
var self__ = this;
var _56085__$1 = this;
return self__.meta56084;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56084","meta56084",1207374280,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes56083");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56083.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes56083");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes56083.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes56083 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes56083(meta56084){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56083(meta56084));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56083(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__56087 = arguments.length;
switch (G__56087) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__56088){
var map__56089 = p__56088;
var map__56089__$1 = (((((!((map__56089 == null))))?(((((map__56089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56089):map__56089);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.views.data_browser.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.views.data_browser.attr_many_QMARK_(attr)) && (athens.views.data_browser.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__56094(s__56095){
return (new cljs.core.LazySeq(null,(function (){
var s__56095__$1 = s__56095;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56095__$1);
if(temp__5735__auto__){
var s__56095__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56095__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56095__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56097 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56096 = (0);
while(true){
if((i__56096 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56096);
cljs.core.chunk_append(b__56097,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__56098 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__56098) : athens.devcards.db_boxes.cell.call(null,G__56098));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__56162 = (i__56096 + (1));
i__56096 = G__56162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56097),athens$devcards$db_boxes$cell_$_iter__56094(cljs.core.chunk_rest(s__56095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56097),null);
}
} else {
var v = cljs.core.first(s__56095__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__56099 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__56099) : athens.devcards.db_boxes.cell.call(null,G__56099));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__56094(cljs.core.rest(s__56095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.views.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__56100(s__56101){
return (new cljs.core.LazySeq(null,(function (){
var s__56101__$1 = s__56101;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56101__$1);
if(temp__5735__auto__){
var s__56101__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56101__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56101__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56103 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56102 = (0);
while(true){
if((i__56102 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56102);
cljs.core.chunk_append(b__56103,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__56107 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__56107) : athens.devcards.db_boxes.cell.call(null,G__56107));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__56169 = (i__56102 + (1));
i__56102 = G__56169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56103),athens$devcards$db_boxes$cell_$_iter__56100(cljs.core.chunk_rest(s__56101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56103),null);
}
} else {
var v = cljs.core.first(s__56101__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__56108 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__56108) : athens.devcards.db_boxes.cell.call(null,G__56108));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__56100(cljs.core.rest(s__56101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(athens.views.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__56109(s__56110){
return (new cljs.core.LazySeq(null,(function (){
var s__56110__$1 = s__56110;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56110__$1);
if(temp__5735__auto__){
var s__56110__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56110__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56110__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56112 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56111 = (0);
while(true){
if((i__56111 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56111);
cljs.core.chunk_append(b__56112,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__56113 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__56113) : athens.devcards.db_boxes.cell.call(null,G__56113));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__56170 = (i__56111 + (1));
i__56111 = G__56170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56112),athens$devcards$db_boxes$cell_$_iter__56109(cljs.core.chunk_rest(s__56110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56112),null);
}
} else {
var v = cljs.core.first(s__56110__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__56114 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__56114) : athens.devcards.db_boxes.cell.call(null,G__56114));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__56109(cljs.core.rest(s__56110__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__56115 = cljs.core.deref(box_state);
var map__56115__$1 = (((((!((map__56115 == null))))?(((((map__56115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56115):map__56115);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes56123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes56123 = (function (meta56124){
this.meta56124 = meta56124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56125,meta56124__$1){
var self__ = this;
var _56125__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56123(meta56124__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56125){
var self__ = this;
var _56125__$1 = this;
return self__.meta56124;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56124","meta56124",-576862481,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes56123");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56123.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes56123");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes56123.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes56123 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes56123(meta56124){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56123(meta56124));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56123(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes56126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes56126 = (function (meta56127){
this.meta56127 = meta56127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56128,meta56127__$1){
var self__ = this;
var _56128__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56126(meta56127__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56128){
var self__ = this;
var _56128__$1 = this;
return self__.meta56127;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56127","meta56127",-891624600,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes56126");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes56126.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes56126");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes56126.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes56126 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes56126(meta56127){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56126(meta56127));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes56126(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
