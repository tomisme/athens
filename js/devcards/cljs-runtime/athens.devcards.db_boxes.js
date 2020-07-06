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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__60255){
var map__60256 = p__60255;
var map__60256__$1 = (((((!((map__60256 == null))))?(((((map__60256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60256):map__60256);
var box = map__60256__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60256__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__60258 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60261){if((e60261 instanceof Error)){
var e = e60261;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60261;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60258,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60258,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__60262_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60262_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__36999__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37000__auto__ = (function (){var switch__36931__auto__ = (function (state_60302){
var state_val_60303 = (state_60302[(1)]);
if((state_val_60303 === (7))){
var state_60302__$1 = state_60302;
var statearr_60304_60364 = state_60302__$1;
(statearr_60304_60364[(2)] = false);

(statearr_60304_60364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (1))){
var inst_60264 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60265 = [false];
var inst_60266 = cljs.core.PersistentHashMap.fromArrays(inst_60264,inst_60265);
var inst_60267 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60266], 0));
var state_60302__$1 = state_60302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60302__$1,(2),inst_60267);
} else {
if((state_val_60303 === (4))){
var state_60302__$1 = state_60302;
var statearr_60305_60365 = state_60302__$1;
(statearr_60305_60365[(2)] = false);

(statearr_60305_60365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (13))){
var inst_60298 = alert("Failed to retrieve data from GitHub");
var state_60302__$1 = state_60302;
var statearr_60306_60366 = state_60302__$1;
(statearr_60306_60366[(2)] = inst_60298);

(statearr_60306_60366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (6))){
var state_60302__$1 = state_60302;
var statearr_60307_60367 = state_60302__$1;
(statearr_60307_60367[(2)] = true);

(statearr_60307_60367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (3))){
var inst_60269 = (state_60302[(7)]);
var inst_60274 = inst_60269.cljs$lang$protocol_mask$partition0$;
var inst_60275 = (inst_60274 & (64));
var inst_60276 = inst_60269.cljs$core$ISeq$;
var inst_60277 = (cljs.core.PROTOCOL_SENTINEL === inst_60276);
var inst_60278 = ((inst_60275) || (inst_60277));
var state_60302__$1 = state_60302;
if(cljs.core.truth_(inst_60278)){
var statearr_60308_60368 = state_60302__$1;
(statearr_60308_60368[(1)] = (6));

} else {
var statearr_60309_60369 = state_60302__$1;
(statearr_60309_60369[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (12))){
var inst_60292 = (state_60302[(8)]);
var inst_60294 = athens.db.str_to_db_tx(inst_60292);
var inst_60295 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60294);
var inst_60296 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60302__$1 = (function (){var statearr_60310 = state_60302;
(statearr_60310[(9)] = inst_60295);

return statearr_60310;
})();
var statearr_60311_60370 = state_60302__$1;
(statearr_60311_60370[(2)] = inst_60296);

(statearr_60311_60370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (2))){
var inst_60269 = (state_60302[(7)]);
var inst_60269__$1 = (state_60302[(2)]);
var inst_60271 = (inst_60269__$1 == null);
var inst_60272 = cljs.core.not(inst_60271);
var state_60302__$1 = (function (){var statearr_60312 = state_60302;
(statearr_60312[(7)] = inst_60269__$1);

return statearr_60312;
})();
if(inst_60272){
var statearr_60313_60371 = state_60302__$1;
(statearr_60313_60371[(1)] = (3));

} else {
var statearr_60314_60372 = state_60302__$1;
(statearr_60314_60372[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (11))){
var inst_60290 = (state_60302[(2)]);
var inst_60291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60290,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60290,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60302__$1 = (function (){var statearr_60315 = state_60302;
(statearr_60315[(8)] = inst_60292);

return statearr_60315;
})();
if(cljs.core.truth_(inst_60291)){
var statearr_60316_60373 = state_60302__$1;
(statearr_60316_60373[(1)] = (12));

} else {
var statearr_60317_60374 = state_60302__$1;
(statearr_60317_60374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (9))){
var inst_60269 = (state_60302[(7)]);
var inst_60287 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60269);
var state_60302__$1 = state_60302;
var statearr_60318_60375 = state_60302__$1;
(statearr_60318_60375[(2)] = inst_60287);

(statearr_60318_60375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (5))){
var inst_60285 = (state_60302[(2)]);
var state_60302__$1 = state_60302;
if(cljs.core.truth_(inst_60285)){
var statearr_60319_60376 = state_60302__$1;
(statearr_60319_60376[(1)] = (9));

} else {
var statearr_60320_60377 = state_60302__$1;
(statearr_60320_60377[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (14))){
var inst_60300 = (state_60302[(2)]);
var state_60302__$1 = state_60302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60302__$1,inst_60300);
} else {
if((state_val_60303 === (10))){
var inst_60269 = (state_60302[(7)]);
var state_60302__$1 = state_60302;
var statearr_60321_60378 = state_60302__$1;
(statearr_60321_60378[(2)] = inst_60269);

(statearr_60321_60378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60303 === (8))){
var inst_60282 = (state_60302[(2)]);
var state_60302__$1 = state_60302;
var statearr_60322_60379 = state_60302__$1;
(statearr_60322_60379[(2)] = inst_60282);

(statearr_60322_60379[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto____0 = (function (){
var statearr_60323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60323[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto__);

(statearr_60323[(1)] = (1));

return statearr_60323;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto____1 = (function (state_60302){
while(true){
var ret_value__36933__auto__ = (function (){try{while(true){
var result__36934__auto__ = switch__36931__auto__(state_60302);
if(cljs.core.keyword_identical_QMARK_(result__36934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36934__auto__;
}
break;
}
}catch (e60324){if((e60324 instanceof Object)){
var ex__36935__auto__ = e60324;
var statearr_60325_60380 = state_60302;
(statearr_60325_60380[(5)] = ex__36935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60381 = state_60302;
state_60302 = G__60381;
continue;
} else {
return ret_value__36933__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto__ = function(state_60302){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto____1.call(this,state_60302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__36932__auto__;
})()
})();
var state__37001__auto__ = (function (){var statearr_60326 = (f__37000__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37000__auto__.cljs$core$IFn$_invoke$arity$0() : f__37000__auto__.call(null));
(statearr_60326[(6)] = c__36999__auto__);

return statearr_60326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37001__auto__);
}));

return c__36999__auto__;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60327 = (function (meta60328){
this.meta60328 = meta60328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60329,meta60328__$1){
var self__ = this;
var _60329__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60327(meta60328__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60329){
var self__ = this;
var _60329__$1 = this;
return self__.meta60328;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42212__auto__,devcard_opts__42213__auto__){
var self__ = this;
var this__42212__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42213__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42231__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__42231__auto__)){
return (function (data_atom__42232__auto__,owner__42233__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42231__auto__,data_atom__42232__auto__,owner__42233__auto__], null));
});
} else {
return reagent.core.as_element(v__42231__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42213__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60328","meta60328",1833739836,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60327");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60327.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60327");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60327.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60327 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60327(meta60328){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60327(meta60328));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60327(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60330 = (function (meta60331){
this.meta60331 = meta60331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60332,meta60331__$1){
var self__ = this;
var _60332__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60330(meta60331__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60332){
var self__ = this;
var _60332__$1 = this;
return self__.meta60331;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42212__auto__,devcard_opts__42213__auto__){
var self__ = this;
var this__42212__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42213__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42231__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__42231__auto__)){
return (function (data_atom__42232__auto__,owner__42233__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42231__auto__,data_atom__42232__auto__,owner__42233__auto__], null));
});
} else {
return reagent.core.as_element(v__42231__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42213__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60331","meta60331",-45656576,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60330");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60330.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60330");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60330.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60330 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60330(meta60331){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60330(meta60331));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60330(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60334 = arguments.length;
switch (G__60334) {
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

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60335){
var map__60336 = p__60335;
var map__60336__$1 = (((((!((map__60336 == null))))?(((((map__60336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60336):map__60336);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60336__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60336__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60336__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60338(s__60339){
return (new cljs.core.LazySeq(null,(function (){
var s__60339__$1 = s__60339;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60339__$1);
if(temp__5735__auto__){
var s__60339__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60339__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60339__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60341 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60340 = (0);
while(true){
if((i__60340 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60340);
cljs.core.chunk_append(b__60341,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60342 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60342) : athens.devcards.db_boxes.cell.call(null,G__60342));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60383 = (i__60340 + (1));
i__60340 = G__60383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60341),athens$devcards$db_boxes$cell_$_iter__60338(cljs.core.chunk_rest(s__60339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60341),null);
}
} else {
var v = cljs.core.first(s__60339__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60343 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60343) : athens.devcards.db_boxes.cell.call(null,G__60343));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60338(cljs.core.rest(s__60339__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60344(s__60345){
return (new cljs.core.LazySeq(null,(function (){
var s__60345__$1 = s__60345;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60345__$1);
if(temp__5735__auto__){
var s__60345__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60345__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60345__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60347 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60346 = (0);
while(true){
if((i__60346 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60346);
cljs.core.chunk_append(b__60347,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60348 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60348) : athens.devcards.db_boxes.cell.call(null,G__60348));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60384 = (i__60346 + (1));
i__60346 = G__60384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60347),athens$devcards$db_boxes$cell_$_iter__60344(cljs.core.chunk_rest(s__60345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60347),null);
}
} else {
var v = cljs.core.first(s__60345__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60349 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60349) : athens.devcards.db_boxes.cell.call(null,G__60349));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60344(cljs.core.rest(s__60345__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60350(s__60351){
return (new cljs.core.LazySeq(null,(function (){
var s__60351__$1 = s__60351;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60351__$1);
if(temp__5735__auto__){
var s__60351__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60351__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60351__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60353 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60352 = (0);
while(true){
if((i__60352 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60352);
cljs.core.chunk_append(b__60353,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60354 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60354) : athens.devcards.db_boxes.cell.call(null,G__60354));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60385 = (i__60352 + (1));
i__60352 = G__60385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60353),athens$devcards$db_boxes$cell_$_iter__60350(cljs.core.chunk_rest(s__60351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60353),null);
}
} else {
var v = cljs.core.first(s__60351__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60355 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60355) : athens.devcards.db_boxes.cell.call(null,G__60355));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60350(cljs.core.rest(s__60351__$2)));
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
var map__60356 = cljs.core.deref(box_state);
var map__60356__$1 = (((((!((map__60356 == null))))?(((((map__60356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60356):map__60356);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60358 = (function (meta60359){
this.meta60359 = meta60359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60360,meta60359__$1){
var self__ = this;
var _60360__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60358(meta60359__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60360){
var self__ = this;
var _60360__$1 = this;
return self__.meta60359;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42212__auto__,devcard_opts__42213__auto__){
var self__ = this;
var this__42212__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42213__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42231__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__42231__auto__)){
return (function (data_atom__42232__auto__,owner__42233__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42231__auto__,data_atom__42232__auto__,owner__42233__auto__], null));
});
} else {
return reagent.core.as_element(v__42231__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42213__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60359","meta60359",-174735895,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60358");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60358.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60358");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60358.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60358 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60358(meta60359){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60358(meta60359));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60358(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60361 = (function (meta60362){
this.meta60362 = meta60362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60363,meta60362__$1){
var self__ = this;
var _60363__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60361(meta60362__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60363){
var self__ = this;
var _60363__$1 = this;
return self__.meta60362;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42212__auto__,devcard_opts__42213__auto__){
var self__ = this;
var this__42212__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42213__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42231__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__42231__auto__)){
return (function (data_atom__42232__auto__,owner__42233__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42231__auto__,data_atom__42232__auto__,owner__42233__auto__], null));
});
} else {
return reagent.core.as_element(v__42231__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42213__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60362","meta60362",1462165669,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60361");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60361.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60361");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60361.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60361 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60361(meta60362){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60361(meta60362));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60361(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
