goog.provide('athens.devcards.table');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('posh.reagent');
athens.devcards.db._main();
athens.devcards.table.date_string = (function athens$devcards$table$date_string(x){
if((x < (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__52219 = cljs.core.PersistentArrayMap.EMPTY;
return (athens.style._PLUS_unknown_date.cljs$core$IFn$_invoke$arity$1 ? athens.style._PLUS_unknown_date.cljs$core$IFn$_invoke$arity$1(G__52219) : athens.style._PLUS_unknown_date.call(null,G__52219));
})(),"(unknown date)"], null);
} else {
return (new Date(x)).toLocaleString();
}
});
athens.devcards.table.main_css = (function athens$devcards$table$main_css(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], 0))], null);
});
athens.devcards.table._PLUS_text_align_left = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null));
athens.devcards.table._PLUS_text_align_right = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null));
athens.devcards.table._PLUS_width_100 = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null));
athens.devcards.table._PLUS_link = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.table","athens.devcards.table",-35246677),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.table !== 'undefined') && (typeof athens.devcards.table.t_athens$devcards$table52220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.table.t_athens$devcards$table52220 = (function (meta52221){
this.meta52221 = meta52221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.table.t_athens$devcards$table52220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52222,meta52221__$1){
var self__ = this;
var _52222__$1 = this;
return (new athens.devcards.table.t_athens$devcards$table52220(meta52221__$1));
}));

(athens.devcards.table.t_athens$devcards$table52220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52222){
var self__ = this;
var _52222__$1 = this;
return self__.meta52221;
}));

(athens.devcards.table.t_athens$devcards$table52220.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.table.t_athens$devcards$table52220.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46861__auto__,devcard_opts__46862__auto__){
var self__ = this;
var this__46861__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46862__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46886__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.style_guide_css], null);
if(cljs.core.fn_QMARK_(v__46886__auto__)){
return (function (data_atom__46887__auto__,owner__46888__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46886__auto__,data_atom__46887__auto__,owner__46888__auto__], null));
});
} else {
return reagent.core.as_element(v__46886__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46862__auto__))], 0))], 0));
}));

(athens.devcards.table.t_athens$devcards$table52220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52221","meta52221",-1024654350,null)], null);
}));

(athens.devcards.table.t_athens$devcards$table52220.cljs$lang$type = true);

(athens.devcards.table.t_athens$devcards$table52220.cljs$lang$ctorStr = "athens.devcards.table/t_athens$devcards$table52220");

(athens.devcards.table.t_athens$devcards$table52220.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.table/t_athens$devcards$table52220");
}));

/**
 * Positional factory function for athens.devcards.table/t_athens$devcards$table52220.
 */
athens.devcards.table.__GT_t_athens$devcards$table52220 = (function athens$devcards$table$__GT_t_athens$devcards$table52220(meta52221){
return (new athens.devcards.table.t_athens$devcards$table52220(meta52221));
});

}

return (new athens.devcards.table.t_athens$devcards$table52220(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.table","athens.devcards.table",-35246677),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.table !== 'undefined') && (typeof athens.devcards.table.t_athens$devcards$table52223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.table.t_athens$devcards$table52223 = (function (meta52224){
this.meta52224 = meta52224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.table.t_athens$devcards$table52223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52225,meta52224__$1){
var self__ = this;
var _52225__$1 = this;
return (new athens.devcards.table.t_athens$devcards$table52223(meta52224__$1));
}));

(athens.devcards.table.t_athens$devcards$table52223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52225){
var self__ = this;
var _52225__$1 = this;
return self__.meta52224;
}));

(athens.devcards.table.t_athens$devcards$table52223.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.table.t_athens$devcards$table52223.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46861__auto__,devcard_opts__46862__auto__){
var self__ = this;
var this__46861__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46862__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46886__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.table.main_css], null);
if(cljs.core.fn_QMARK_(v__46886__auto__)){
return (function (data_atom__46887__auto__,owner__46888__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46886__auto__,data_atom__46887__auto__,owner__46888__auto__], null));
});
} else {
return reagent.core.as_element(v__46886__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46862__auto__))], 0))], 0));
}));

(athens.devcards.table.t_athens$devcards$table52223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52224","meta52224",896822970,null)], null);
}));

(athens.devcards.table.t_athens$devcards$table52223.cljs$lang$type = true);

(athens.devcards.table.t_athens$devcards$table52223.cljs$lang$ctorStr = "athens.devcards.table/t_athens$devcards$table52223");

(athens.devcards.table.t_athens$devcards$table52223.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.table/t_athens$devcards$table52223");
}));

/**
 * Positional factory function for athens.devcards.table/t_athens$devcards$table52223.
 */
athens.devcards.table.__GT_t_athens$devcards$table52223 = (function athens$devcards$table$__GT_t_athens$devcards$table52223(meta52224){
return (new athens.devcards.table.t_athens$devcards$table52223(meta52224));
});

}

return (new athens.devcards.table.t_athens$devcards$table52223(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.table.table = (function athens$devcards$table$table(){
var page_eids = (function (){var G__52227 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
var G__52228 = athens.db.dsdb;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(G__52227,G__52228) : posh.reagent.q.call(null,G__52227,G__52228));
})();
var pages = (function (){var G__52229 = athens.db.dsdb;
var G__52230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(5)], null)], null);
var G__52231 = cljs.core.deref(page_eids);
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__52229,G__52230,G__52231) : posh.reagent.pull_many.call(null,G__52229,G__52230,G__52231));
})();
var get_pages = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.deref(pages));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),athens.devcards.table._PLUS_width_100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.devcards.table._PLUS_text_align_left,"Page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.devcards.table._PLUS_text_align_left,"Body"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.devcards.table._PLUS_text_align_right,"Modified"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.devcards.table._PLUS_text_align_right,"Created"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$table$table_$_iter__52232(s__52233){
return (new cljs.core.LazySeq(null,(function (){
var s__52233__$1 = s__52233;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52233__$1);
if(temp__5735__auto__){
var s__52233__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52233__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52233__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52235 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52234 = (0);
while(true){
if((i__52234 < size__4581__auto__)){
var map__52236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52234);
var map__52236__$1 = (((((!((map__52236 == null))))?(((((map__52236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52236):map__52236);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
cljs.core.chunk_append(b__52235,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(24)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.table._PLUS_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__52234,map__52236,map__52236__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__52235,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages){
return (function (){
return athens.router.navigate_page(uid);
});})(i__52234,map__52236,map__52236__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__52235,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages))
], null)], 0)),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.table._PLUS_text_align_left,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__52234,map__52236,map__52236__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__52235,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages){
return (function (p1__52226_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__52226_SHARP_))].join('');
});})(i__52234,map__52236,map__52236__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__52235,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages))
,children))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.table._PLUS_text_align_right,athens.devcards.table.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.table._PLUS_text_align_right,athens.devcards.table.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__52243 = (i__52234 + (1));
i__52234 = G__52243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52235),athens$devcards$table$table_$_iter__52232(cljs.core.chunk_rest(s__52233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52235),null);
}
} else {
var map__52238 = cljs.core.first(s__52233__$2);
var map__52238__$1 = (((((!((map__52238 == null))))?(((((map__52238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52238):map__52238);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52238__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52238__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52238__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52238__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52238__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(24)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.table._PLUS_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__52238,map__52238__$1,uid,title,modified,created,children,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages){
return (function (){
return athens.router.navigate_page(uid);
});})(map__52238,map__52238__$1,uid,title,modified,created,children,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages))
], null)], 0)),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.table._PLUS_text_align_left,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__52238,map__52238__$1,uid,title,modified,created,children,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages){
return (function (p1__52226_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__52226_SHARP_))].join('');
});})(map__52238,map__52238__$1,uid,title,modified,created,children,s__52233__$2,temp__5735__auto__,page_eids,pages,get_pages))
,children))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.table._PLUS_text_align_right,athens.devcards.table.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.table._PLUS_text_align_right,athens.devcards.table.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$table$table_$_iter__52232(cljs.core.rest(s__52233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(get_pages);
})()], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.table","athens.devcards.table",-35246677),new cljs.core.Keyword(null,"Table","Table",-45928924)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Table",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.table !== 'undefined') && (typeof athens.devcards.table.t_athens$devcards$table52240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.table.t_athens$devcards$table52240 = (function (meta52241){
this.meta52241 = meta52241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.table.t_athens$devcards$table52240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52242,meta52241__$1){
var self__ = this;
var _52242__$1 = this;
return (new athens.devcards.table.t_athens$devcards$table52240(meta52241__$1));
}));

(athens.devcards.table.t_athens$devcards$table52240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52242){
var self__ = this;
var _52242__$1 = this;
return self__.meta52241;
}));

(athens.devcards.table.t_athens$devcards$table52240.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.table.t_athens$devcards$table52240.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46861__auto__,devcard_opts__46862__auto__){
var self__ = this;
var this__46861__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46862__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46886__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.table.table], null);
if(cljs.core.fn_QMARK_(v__46886__auto__)){
return (function (data_atom__46887__auto__,owner__46888__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46886__auto__,data_atom__46887__auto__,owner__46888__auto__], null));
});
} else {
return reagent.core.as_element(v__46886__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46862__auto__))], 0))], 0));
}));

(athens.devcards.table.t_athens$devcards$table52240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52241","meta52241",310510480,null)], null);
}));

(athens.devcards.table.t_athens$devcards$table52240.cljs$lang$type = true);

(athens.devcards.table.t_athens$devcards$table52240.cljs$lang$ctorStr = "athens.devcards.table/t_athens$devcards$table52240");

(athens.devcards.table.t_athens$devcards$table52240.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.table/t_athens$devcards$table52240");
}));

/**
 * Positional factory function for athens.devcards.table/t_athens$devcards$table52240.
 */
athens.devcards.table.__GT_t_athens$devcards$table52240 = (function athens$devcards$table$__GT_t_athens$devcards$table52240(meta52241){
return (new athens.devcards.table.t_athens$devcards$table52240(meta52241));
});

}

return (new athens.devcards.table.t_athens$devcards$table52240(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.table.js.map
