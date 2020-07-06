goog.provide('athens.blocks');
goog.require('cljs.core');
athens.blocks.sort_block = (function athens$blocks$sort_block(block){
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(temp__5733__auto__){
var children = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.blocks.sort_block,children)));
} else {
return block;
}
});

//# sourceMappingURL=athens.blocks.js.map
