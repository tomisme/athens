goog.provide('athens.devcards.injection_ideas');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('reagent.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.injection_ideas","athens.devcards.injection_ideas",-2038918634),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Hello",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.injection_ideas","athens.devcards.injection_ideas",-2038918634),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Moves devcards history controls to the top of the card",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.injection_ideas !== 'undefined') && (typeof athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117 = (function (meta50118){
this.meta50118 = meta50118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50119,meta50118__$1){
var self__ = this;
var _50119__$1 = this;
return (new athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117(meta50118__$1));
}));

(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50119){
var self__ = this;
var _50119__$1 = this;
return self__.meta50118;
}));

(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46521__auto__,devcard_opts__46522__auto__){
var self__ = this;
var this__46521__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46522__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46540__auto__ = (function (){var style = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),(athens.devcards.injection_ideas.css.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.injection_ideas.css.cljs$core$IFn$_invoke$arity$1(style) : athens.devcards.injection_ideas.css.call(null,style))], null);
})();
if(cljs.core.fn_QMARK_(v__46540__auto__)){
return (function (data_atom__46541__auto__,owner__46542__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46540__auto__,data_atom__46541__auto__,owner__46542__auto__], null));
});
} else {
return reagent.core.as_element(v__46540__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46522__auto__))], 0))], 0));
}));

(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50118","meta50118",-1993974614,null)], null);
}));

(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.cljs$lang$type = true);

(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.cljs$lang$ctorStr = "athens.devcards.injection-ideas/t_athens$devcards$injection_ideas50117");

(athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.injection-ideas/t_athens$devcards$injection_ideas50117");
}));

/**
 * Positional factory function for athens.devcards.injection-ideas/t_athens$devcards$injection_ideas50117.
 */
athens.devcards.injection_ideas.__GT_t_athens$devcards$injection_ideas50117 = (function athens$devcards$injection_ideas$__GT_t_athens$devcards$injection_ideas50117(meta50118){
return (new athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117(meta50118));
});

}

return (new athens.devcards.injection_ideas.t_athens$devcards$injection_ideas50117(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.injection-ideas.js.map
