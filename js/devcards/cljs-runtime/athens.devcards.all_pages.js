goog.provide('athens.devcards.all_pages');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.views.all_pages');
goog.require('athens.views.buttons');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('tick.locale_en_us');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# All Pages \u2014 [#100](https://github.com/athensresearch/athens/issues/100)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages56802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages56802 = (function (meta56803){
this.meta56803 = meta56803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages56802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56804,meta56803__$1){
var self__ = this;
var _56804__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56802(meta56803__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56804){
var self__ = this;
var _56804__$1 = this;
return self__.meta56803;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56802.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages56802.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56803","meta56803",1825010946,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56802.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages56802.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages56802");

(athens.devcards.all_pages.t_athens$devcards$all_pages56802.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages56802");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages56802.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages56802 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages56802(meta56803){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56802(meta56803));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages56802(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Page title increments by more than one each time because we create multiple entities (the child blocks).",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages56805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages56805 = (function (meta56806){
this.meta56806 = meta56806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages56805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56807,meta56806__$1){
var self__ = this;
var _56807__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56805(meta56806__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56807){
var self__ = this;
var _56807__$1 = this;
return self__.meta56806;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56805.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages56805.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Create Page",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Title ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),"a block string",new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('')], null)], null),new cljs.core.Keyword("create","time","create/time",-1563077754),(new Date()).getTime(),new cljs.core.Keyword("edit","time","edit/time",1384867476),(new Date()).getTime()], null)], null));
})], null)], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56806","meta56806",1120962642,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56805.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages56805.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages56805");

(athens.devcards.all_pages.t_athens$devcards$all_pages56805.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages56805");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages56805.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages56805 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages56805(meta56806){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56805(meta56806));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages56805(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages56808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages56808 = (function (meta56809){
this.meta56809 = meta56809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages56808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56810,meta56809__$1){
var self__ = this;
var _56810__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56808(meta56809__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56810){
var self__ = this;
var _56810__$1 = this;
return self__.meta56809;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56808.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages56808.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
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

(athens.devcards.all_pages.t_athens$devcards$all_pages56808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56809","meta56809",1234451064,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56808.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages56808.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages56808");

(athens.devcards.all_pages.t_athens$devcards$all_pages56808.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages56808");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages56808.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages56808 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages56808(meta56809){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56808(meta56809));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages56808(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Table","Table",-45928924)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Table",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages56811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages56811 = (function (meta56812){
this.meta56812 = meta56812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages56811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56813,meta56812__$1){
var self__ = this;
var _56813__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56811(meta56812__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56813){
var self__ = this;
var _56813__$1 = this;
return self__.meta56812;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56811.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages56811.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.all_pages.table], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56812","meta56812",-1954628920,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages56811.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages56811.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages56811");

(athens.devcards.all_pages.t_athens$devcards$all_pages56811.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages56811");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages56811.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages56811 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages56811(meta56812){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages56811(meta56812));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages56811(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.all_pages.js.map
