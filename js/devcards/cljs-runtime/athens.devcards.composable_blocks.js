goog.provide('athens.devcards.composable_blocks');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.effects');
goog.require('athens.events');
goog.require('athens.parse_renderer');
goog.require('athens.parser');
goog.require('athens.util');
goog.require('athens.views.blocks');
goog.require('clojure.zip');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('sci.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Composable Blocks",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.composable_blocks.get_block = (function athens$devcards$composable_blocks$get_block(uid){
return cljs.core.deref((function (){var G__60478 = athens.db.dsdb;
var G__60479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__60480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__60478,G__60479,G__60480) : posh.reagent.pull.call(null,G__60478,G__60479,G__60480));
})());
});
athens.devcards.composable_blocks.add_block_BANG_ = (function athens$devcards$composable_blocks$add_block_BANG_(s){
var new_uid = athens.util.gen_block_uid();
var G__60481_60495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),false,new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__60481_60495) : re_frame.core.dispatch_sync.call(null,G__60481_60495));

return new_uid;
});
athens.devcards.composable_blocks.normal_block_content = "Alice";
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.normal_block_uid !== 'undefined')){
} else {
athens.devcards.composable_blocks.normal_block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.normal_block_content);
}
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"normal-block","normal-block",176726173)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"normal-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.normal_block_uid),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.composable_blocks.normal_embed_block_content = ["Hello, ((",athens.devcards.composable_blocks.normal_block_uid,"))"].join('');
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.normal_embed_block_uid !== 'undefined')){
} else {
athens.devcards.composable_blocks.normal_embed_block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.normal_embed_block_content);
}
athens.devcards.composable_blocks.normal_embed_block = athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.normal_embed_block_uid);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"normal-embed-block","normal-embed-block",1936257168)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"normal-embed-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.normal_embed_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"normal-embed-render","normal-embed-render",791778107)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"normal-embed-render",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482 = (function (meta60483){
this.meta60483 = meta60483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60484,meta60483__$1){
var self__ = this;
var _60484__$1 = this;
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482(meta60483__$1));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60484){
var self__ = this;
var _60484__$1 = this;
return self__.meta60483;
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.devcards.composable_blocks.normal_embed_block)], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60483","meta60483",-1745936596,null)], null);
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.cljs$lang$type = true);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.cljs$lang$ctorStr = "athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60482");

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60482");
}));

/**
 * Positional factory function for athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60482.
 */
athens.devcards.composable_blocks.__GT_t_athens$devcards$composable_blocks60482 = (function athens$devcards$composable_blocks$__GT_t_athens$devcards$composable_blocks60482(meta60483){
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482(meta60483));
});

}

return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60482(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.composable_blocks.modifier_block_content = ":sci (let [{:keys [block]} *1]\n          [:div\n           [:input {:type \"checkbox\"}]\n           [:span {:style {:margin-left 10}}\n            block]])";
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.modifier_block_uid !== 'undefined')){
} else {
athens.devcards.composable_blocks.modifier_block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.modifier_block_content);
}
athens.devcards.composable_blocks.modifier_block = athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.modifier_block_uid);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"modifier-block","modifier-block",1225693186)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"modifier-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.modifier_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"modifier-block-render","modifier-block-render",-1144617197)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"modifier-block-render",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485 = (function (meta60486){
this.meta60486 = meta60486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60487,meta60486__$1){
var self__ = this;
var _60487__$1 = this;
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485(meta60486__$1));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60487){
var self__ = this;
var _60487__$1 = this;
return self__.meta60486;
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.devcards.composable_blocks.modifier_block)], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60486","meta60486",-1189729311,null)], null);
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.cljs$lang$type = true);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.cljs$lang$ctorStr = "athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60485");

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60485");
}));

/**
 * Positional factory function for athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60485.
 */
athens.devcards.composable_blocks.__GT_t_athens$devcards$composable_blocks60485 = (function athens$devcards$composable_blocks$__GT_t_athens$devcards$composable_blocks60485(meta60486){
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485(meta60486));
});

}

return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60485(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.composable_blocks.block_content = ["((",athens.devcards.composable_blocks.modifier_block_uid,")) collect eggs"].join('');
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.block_uid !== 'undefined')){
} else {
athens.devcards.composable_blocks.block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.block_content);
}
athens.devcards.composable_blocks.block = athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.block_uid);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"block","block",664686210)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.composable_blocks.parsed_block = athens.parser.parse_to_ast(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(athens.devcards.composable_blocks.block));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"parsed-block","parsed-block",306595836)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"parsed-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.parsed_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.composable_blocks.transformed_block = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,athens.parse_renderer.transform(athens.devcards.composable_blocks.parsed_block));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"transformed-block","transformed-block",1452844590)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"transformed-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.transformed_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
/**
 * Takes a hiccup node (normalized or not) and returns its children nodes.
 */
athens.devcards.composable_blocks.children = (function athens$devcards$composable_blocks$children(node){
if(cljs.core.vector_QMARK_(node)){
if(cljs.core.map_QMARK_(cljs.core.second(node))){
return cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(node,(2)));
} else {
return cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(node,(1)));
}
} else {
return node;
}
});
/**
 * Takes a hiccup node (normalized or not) and a sequence of children nodes,
 * and returns a new node that has the the children argument as its children.
 */
athens.devcards.composable_blocks.make = (function athens$devcards$composable_blocks$make(node,children){
if(cljs.core.vector_QMARK_(node)){
if(cljs.core.map_QMARK_(cljs.core.second(node))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(node,(0),(2)),children);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.first(node),children);
}
} else {
return children;
}
});
/**
 * Returns a zipper for Hiccup forms, given a root form.
 */
athens.devcards.composable_blocks.hiccup_zip = (function athens$devcards$composable_blocks$hiccup_zip(root){
return clojure.zip.zipper(cljs.core.sequential_QMARK_,athens.devcards.composable_blocks.children,athens.devcards.composable_blocks.make,root);
});
athens.devcards.composable_blocks.eval_sci_modifier = (function athens$devcards$composable_blocks$eval_sci_modifier(code,context){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*1","*1",2110258092,null),context], null)], null));
}catch (e60488){if((e60488 instanceof Error)){
var e = e60488;
return e;
} else {
throw e60488;

}
}});
athens.devcards.composable_blocks.modify = (function athens$devcards$composable_blocks$modify(tree){
var loc = athens.devcards.composable_blocks.hiccup_zip(tree);
while(true){
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.node(loc);
} else {
var G__60496 = (function (){var node = clojure.zip.node(loc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens","sci-modifier","athens/sci-modifier",1795365638),cljs.core.first(node))){
var code = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.second(node),(4));
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),clojure.zip.root(clojure.zip.remove(loc))], null);
var result = athens.devcards.composable_blocks.eval_sci_modifier(code,context);
return athens.devcards.composable_blocks.hiccup_zip(result);
} else {
return clojure.zip.next(loc);
}
})();
loc = G__60496;
continue;
}
break;
}
});
athens.devcards.composable_blocks.modified_block = athens.devcards.composable_blocks.modify(athens.devcards.composable_blocks.transformed_block);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"modified-block","modified-block",-264664941)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"modified-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.modified_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"modified-block-render","modified-block-render",-1162507501)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"modified-block-render",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489 = (function (meta60490){
this.meta60490 = meta60490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60491,meta60490__$1){
var self__ = this;
var _60491__$1 = this;
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489(meta60490__$1));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60491){
var self__ = this;
var _60491__$1 = this;
return self__.meta60490;
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = athens.devcards.composable_blocks.modified_block;
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60490","meta60490",1254040672,null)], null);
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.cljs$lang$type = true);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.cljs$lang$ctorStr = "athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60489");

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60489");
}));

/**
 * Positional factory function for athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60489.
 */
athens.devcards.composable_blocks.__GT_t_athens$devcards$composable_blocks60489 = (function athens$devcards$composable_blocks$__GT_t_athens$devcards$composable_blocks60489(meta60490){
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489(meta60490));
});

}

return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60489(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"block-render","block-render",-165167651)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"block-render",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492 = (function (meta60493){
this.meta60493 = meta60493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60494,meta60493__$1){
var self__ = this;
var _60494__$1 = this;
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492(meta60493__$1));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60494){
var self__ = this;
var _60494__$1 = this;
return self__.meta60493;
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.devcards.composable_blocks.block)], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60493","meta60493",-739043031,null)], null);
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.cljs$lang$type = true);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.cljs$lang$ctorStr = "athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60492");

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60492");
}));

/**
 * Positional factory function for athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60492.
 */
athens.devcards.composable_blocks.__GT_t_athens$devcards$composable_blocks60492 = (function athens$devcards$composable_blocks$__GT_t_athens$devcards$composable_blocks60492(meta60493){
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492(meta60493));
});

}

return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60492(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.composable_blocks.js.map
