goog.provide('athens.devcards.style_guide');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
athens.devcards.style_guide.color_group_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat( auto-fit, minmax(9rem, 1fr))",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"3rem 1rem",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
athens.devcards.style_guide.color_item_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"0.25rem",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"height","height",1025178622),"4rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"4rem"], null)], null)], null)], null);
athens.devcards.style_guide.text_item_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null);
athens.devcards.style_guide.types = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192)], null);
athens.devcards.style_guide.fonts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Serif","serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Sans","sans-serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IBM Plex Mono","monospace"], null)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Colors","Colors",572881364)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Colors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide56435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide56435 = (function (meta56436){
this.meta56436 = meta56436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide56435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56437,meta56436__$1){
var self__ = this;
var _56437__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56435(meta56436__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56437){
var self__ = this;
var _56437__$1 = this;
return self__.meta56436;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56435.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide56435.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.style_guide.color_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], 0))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__56438(s__56439){
return (new cljs.core.LazySeq(null,(function (){
var s__56439__$1 = s__56439;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56439__$1);
if(temp__5735__auto__){
var s__56439__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56439__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56439__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56441 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56440 = (0);
while(true){
if((i__56440 < size__4581__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56440);
cljs.core.chunk_append(b__56441,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__56470 = (i__56440 + (1));
i__56440 = G__56470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56441),athens$devcards$style_guide$iter__56438(cljs.core.chunk_rest(s__56439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56441),null);
}
} else {
var c = cljs.core.first(s__56439__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1px rgba(0,0,0,0.15)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),athens.style.color.cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),athens$devcards$style_guide$iter__56438(cljs.core.rest(s__56439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.COLORS));
})())], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56436","meta56436",-1728365196,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56435.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide56435.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide56435");

(athens.devcards.style_guide.t_athens$devcards$style_guide56435.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide56435");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide56435.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide56435 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide56435(meta56436){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56435(meta56436));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide56435(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Opacities","Opacities",-312274473)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Opacities",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide56442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide56442 = (function (meta56443){
this.meta56443 = meta56443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide56442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56444,meta56443__$1){
var self__ = this;
var _56444__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56442(meta56443__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56444){
var self__ = this;
var _56444__$1 = this;
return self__.meta56443;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56442.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide56442.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_group_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__56445(s__56446){
return (new cljs.core.LazySeq(null,(function (){
var s__56446__$1 = s__56446;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56446__$1);
if(temp__5735__auto__){
var s__56446__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56446__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56446__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56448 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56447 = (0);
while(true){
if((i__56447 < size__4581__auto__)){
var o = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56447);
cljs.core.chunk_append(b__56448,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__56471 = (i__56447 + (1));
i__56447 = G__56471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56448),athens$devcards$style_guide$iter__56445(cljs.core.chunk_rest(s__56446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56448),null);
}
} else {
var o = cljs.core.first(s__56446__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.color_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES) : o.call(null,athens.style.OPACITIES))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),o], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),athens$devcards$style_guide$iter__56445(cljs.core.rest(s__56446__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.keys(athens.style.OPACITIES));
})())], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56443","meta56443",-1700943526,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56442.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide56442.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide56442");

(athens.devcards.style_guide.t_athens$devcards$style_guide56442.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide56442");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide56442.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide56442 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide56442(meta56443){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56442(meta56443));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide56442(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Sans-Types","Sans-Types",-759330260)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Sans-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide56449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide56449 = (function (meta56450){
this.meta56450 = meta56450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide56449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56451,meta56450__$1){
var self__ = this;
var _56451__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56449(meta56450__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56451){
var self__ = this;
var _56451__$1 = this;
return self__.meta56450;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56449.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide56449.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__56452(s__56453){
return (new cljs.core.LazySeq(null,(function (){
var s__56453__$1 = s__56453;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56453__$1);
if(temp__5735__auto__){
var s__56453__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56453__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56453__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56455 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56454 = (0);
while(true){
if((i__56454 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56454);
cljs.core.chunk_append(b__56455,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__56472 = (i__56454 + (1));
i__56454 = G__56472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56455),athens$devcards$style_guide$iter__56452(cljs.core.chunk_rest(s__56453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56455),null);
}
} else {
var t = cljs.core.first(s__56453__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.second(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__56452(cljs.core.rest(s__56453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56450","meta56450",1944227783,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56449.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide56449.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide56449");

(athens.devcards.style_guide.t_athens$devcards$style_guide56449.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide56449");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide56449.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide56449 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide56449(meta56450){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56449(meta56450));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide56449(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Serif-Types","Serif-Types",-1395581219)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Serif-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide56456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide56456 = (function (meta56457){
this.meta56457 = meta56457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide56456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56458,meta56457__$1){
var self__ = this;
var _56458__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56456(meta56457__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56458){
var self__ = this;
var _56458__$1 = this;
return self__.meta56457;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56456.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide56456.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__56459(s__56460){
return (new cljs.core.LazySeq(null,(function (){
var s__56460__$1 = s__56460;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56460__$1);
if(temp__5735__auto__){
var s__56460__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56460__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56460__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56462 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56461 = (0);
while(true){
if((i__56461 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56461);
cljs.core.chunk_append(b__56462,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__56473 = (i__56461 + (1));
i__56461 = G__56473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56462),athens$devcards$style_guide$iter__56459(cljs.core.chunk_rest(s__56460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56462),null);
}
} else {
var t = cljs.core.first(s__56460__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.first(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__56459(cljs.core.rest(s__56460__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56457","meta56457",1059068446,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56456.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide56456.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide56456");

(athens.devcards.style_guide.t_athens$devcards$style_guide56456.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide56456");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide56456.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide56456 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide56456(meta56457){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56456(meta56457));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide56456(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.style_guide","athens.devcards.style_guide",163176557),new cljs.core.Keyword(null,"Monospace-Types","Monospace-Types",-1076182681)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monospace-Types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.style_guide !== 'undefined') && (typeof athens.devcards.style_guide.t_athens$devcards$style_guide56463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.style_guide.t_athens$devcards$style_guide56463 = (function (meta56464){
this.meta56464 = meta56464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.style_guide.t_athens$devcards$style_guide56463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56465,meta56464__$1){
var self__ = this;
var _56465__$1 = this;
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56463(meta56464__$1));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56465){
var self__ = this;
var _56465__$1 = this;
return self__.meta56464;
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56463.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.style_guide.t_athens$devcards$style_guide56463.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47333__auto__,devcard_opts__47334__auto__){
var self__ = this;
var this__47333__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47334__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47352__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$style_guide$iter__56466(s__56467){
return (new cljs.core.LazySeq(null,(function (){
var s__56467__$1 = s__56467;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56467__$1);
if(temp__5735__auto__){
var s__56467__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56467__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56467__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56469 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56468 = (0);
while(true){
if((i__56468 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56468);
cljs.core.chunk_append(b__56469,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__56474 = (i__56468 + (1));
i__56468 = G__56474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56469),athens$devcards$style_guide$iter__56466(cljs.core.chunk_rest(s__56467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56469),null);
}
} else {
var t = cljs.core.first(s__56467__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.style_guide.text_item_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),t], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.last(athens.devcards.style_guide.fonts)], null)], null),"Welcome to Athens"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),athens$devcards$style_guide$iter__56466(cljs.core.rest(s__56467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.style_guide.types);
})())], null);
if(cljs.core.fn_QMARK_(v__47352__auto__)){
return (function (data_atom__47353__auto__,owner__47354__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47352__auto__,data_atom__47353__auto__,owner__47354__auto__], null));
});
} else {
return reagent.core.as_element(v__47352__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47334__auto__))], 0))], 0));
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56464","meta56464",-24801763,null)], null);
}));

(athens.devcards.style_guide.t_athens$devcards$style_guide56463.cljs$lang$type = true);

(athens.devcards.style_guide.t_athens$devcards$style_guide56463.cljs$lang$ctorStr = "athens.devcards.style-guide/t_athens$devcards$style_guide56463");

(athens.devcards.style_guide.t_athens$devcards$style_guide56463.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.style-guide/t_athens$devcards$style_guide56463");
}));

/**
 * Positional factory function for athens.devcards.style-guide/t_athens$devcards$style_guide56463.
 */
athens.devcards.style_guide.__GT_t_athens$devcards$style_guide56463 = (function athens$devcards$style_guide$__GT_t_athens$devcards$style_guide56463(meta56464){
return (new athens.devcards.style_guide.t_athens$devcards$style_guide56463(meta56464));
});

}

return (new athens.devcards.style_guide.t_athens$devcards$style_guide56463(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.style_guide.js.map
