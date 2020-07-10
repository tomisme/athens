goog.provide('athens.devcards.composable_blocks');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.effects');
goog.require('athens.events');
goog.require('athens.util');
goog.require('athens.views.blocks');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('re_frame.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Composable Blocks",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.composable_blocks.get_block = (function athens$devcards$composable_blocks$get_block(uid){
return cljs.core.deref((function (){var G__60479 = athens.db.dsdb;
var G__60480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__60481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__60479,G__60480,G__60481) : posh.reagent.pull.call(null,G__60479,G__60480,G__60481));
})());
});
athens.devcards.composable_blocks.add_block_BANG_ = (function athens$devcards$composable_blocks$add_block_BANG_(s){
var new_uid = athens.util.gen_block_uid();
var G__60482_60498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),false,new cljs.core.Keyword("block","string","block/string",-2066596447),s], null)], null)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__60482_60498) : re_frame.core.dispatch_sync.call(null,G__60482_60498));

return new_uid;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"Block-4095","Block-4095",-293514039)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Block-4095",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483 = (function (meta60484){
this.meta60484 = meta60484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60485,meta60484__$1){
var self__ = this;
var _60485__$1 = this;
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483(meta60484__$1));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60485){
var self__ = this;
var _60485__$1 = this;
return self__.meta60484;
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_component,(4095)], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60484","meta60484",2029395201,null)], null);
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.cljs$lang$type = true);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.cljs$lang$ctorStr = "athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60483");

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60483");
}));

/**
 * Positional factory function for athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60483.
 */
athens.devcards.composable_blocks.__GT_t_athens$devcards$composable_blocks60483 = (function athens$devcards$composable_blocks$__GT_t_athens$devcards$composable_blocks60483(meta60484){
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483(meta60484));
});

}

return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60483(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"checkbox-mockup","checkbox-mockup",-1535873472)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"checkbox-mockup",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486 = (function (meta60487){
this.meta60487 = meta60487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60488,meta60487__$1){
var self__ = this;
var _60488__$1 = this;
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486(meta60487__$1));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60488){
var self__ = this;
var _60488__$1 = this;
return self__.meta60487;
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = (function (){var block = athens.db.get_block_document((4095));
var s = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null),s], null)], null);
})();
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60487","meta60487",-1468059853,null)], null);
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.cljs$lang$type = true);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.cljs$lang$ctorStr = "athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60486");

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60486");
}));

/**
 * Positional factory function for athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60486.
 */
athens.devcards.composable_blocks.__GT_t_athens$devcards$composable_blocks60486 = (function athens$devcards$composable_blocks$__GT_t_athens$devcards$composable_blocks60486(meta60487){
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486(meta60487));
});

}

return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60486(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.composable_blocks.normal_block_content = "Alice";
athens.devcards.composable_blocks.normal_block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.normal_block_content);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"normal-block","normal-block",176726173)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"normal-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.normal_block_uid),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.composable_blocks.normal_embed_block_content = ["Hello, ((",athens.devcards.composable_blocks.normal_block_uid,"))"].join('');
athens.devcards.composable_blocks.normal_embed_block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.normal_embed_block_content);
athens.devcards.composable_blocks.normal_embed_block = athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.normal_embed_block_uid);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"normal-embed-block","normal-embed-block",1936257168)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"normal-embed-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.normal_embed_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"normal-embed-render","normal-embed-render",791778107)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"normal-embed-render",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
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
athens.devcards.composable_blocks.todoer_block_content = ":sci (let [{:keys [parent]} *1]\n          {:hiccup\n           [:<>\n            [:input {:type \"checkbox\"}]\n            [:span {:style {:margin-left 10}}\n             (:hiccup parent)]]})";
athens.devcards.composable_blocks.todoer_block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.todoer_block_content);
athens.devcards.composable_blocks.todoer_block = athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.todoer_block_uid);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"todoer-block","todoer-block",-1733730443)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"todoer-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.todoer_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"todoer-block-render","todoer-block-render",924721843)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"todoer-block-render",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.devcards.composable_blocks.todoer_block)], null);
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
athens.devcards.composable_blocks.todoed_block_content = ["((",athens.devcards.composable_blocks.todoer_block_uid,")) collect eggs"].join('');
athens.devcards.composable_blocks.todoed_block_uid = athens.devcards.composable_blocks.add_block_BANG_(athens.devcards.composable_blocks.todoed_block_content);
athens.devcards.composable_blocks.todoed_block = athens.devcards.composable_blocks.get_block(athens.devcards.composable_blocks.todoed_block_uid);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"todoed-block","todoed-block",-1053673948)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"todoed-block",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.composable_blocks.todoed_block,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.composable_blocks","athens.devcards.composable_blocks",503091683),new cljs.core.Keyword(null,"todoed-block-render","todoed-block-render",1527738047)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"todoed-block-render",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.composable_blocks !== 'undefined') && (typeof athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495 = (function (meta60496){
this.meta60496 = meta60496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60497,meta60496__$1){
var self__ = this;
var _60497__$1 = this;
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495(meta60496__$1));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60497){
var self__ = this;
var _60497__$1 = this;
return self__.meta60496;
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42228__auto__,devcard_opts__42229__auto__){
var self__ = this;
var this__42228__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42229__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42247__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_component,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.devcards.composable_blocks.todoed_block)], null);
if(cljs.core.fn_QMARK_(v__42247__auto__)){
return (function (data_atom__42248__auto__,owner__42249__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42247__auto__,data_atom__42248__auto__,owner__42249__auto__], null));
});
} else {
return reagent.core.as_element(v__42247__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42229__auto__))], 0))], 0));
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60496","meta60496",984738121,null)], null);
}));

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.cljs$lang$type = true);

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.cljs$lang$ctorStr = "athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60495");

(athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60495");
}));

/**
 * Positional factory function for athens.devcards.composable-blocks/t_athens$devcards$composable_blocks60495.
 */
athens.devcards.composable_blocks.__GT_t_athens$devcards$composable_blocks60495 = (function athens$devcards$composable_blocks$__GT_t_athens$devcards$composable_blocks60495(meta60496){
return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495(meta60496));
});

}

return (new athens.devcards.composable_blocks.t_athens$devcards$composable_blocks60495(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.composable_blocks.js.map
