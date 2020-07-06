goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__55204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55204) : re_frame.core.dispatch.call(null,G__55204));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__55205 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__55206 = athens.db.dsdb;
var G__55207 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__55205,G__55206,G__55207) : posh.reagent.q.call(null,G__55205,G__55206,G__55207));
})());
});
athens.views.node_page.merge_parents_and_block = (function athens$views$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.views.node_page.group_by_parent = (function athens$views$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.views.node_page.get_data = (function athens$views$node_page$get_data(pattern){
return cljs.core.seq(athens.views.node_page.group_by_parent(athens.views.node_page.merge_parents_and_block(athens.views.node_page.get_ref_ids(pattern))));
});
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__55209 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55209,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55209,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55209,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e55208){if((e55208 instanceof Object)){
var _ = e55208;
return false;
} else {
throw e55208;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__55212,editing_uid,ref_groups,timeline_page_QMARK_){
var map__55213 = p__55212;
var map__55213__$1 = (((((!((map__55213 == null))))?(((((map__55213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55213):map__55213);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55213__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55213__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55213__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__55215 = e.target.value;
var G__55216 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__55215,G__55216) : athens.views.node_page.db_handler.call(null,G__55215,G__55216));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__55217(s__55218){
return (new cljs.core.LazySeq(null,(function (){
var s__55218__$1 = s__55218;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55218__$1);
if(temp__5735__auto__){
var s__55218__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55218__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55218__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55220 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55219 = (0);
while(true){
if((i__55219 < size__4581__auto__)){
var map__55221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55219);
var map__55221__$1 = (((((!((map__55221 == null))))?(((((map__55221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55221):map__55221);
var child = map__55221__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55221__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55220,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__55372 = (i__55219 + (1));
i__55219 = G__55372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55220),athens$views$node_page$node_page_el_$_iter__55217(cljs.core.chunk_rest(s__55218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55220),null);
}
} else {
var map__55223 = cljs.core.first(s__55218__$2);
var map__55223__$1 = (((((!((map__55223 == null))))?(((((map__55223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55223):map__55223);
var child = map__55223__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55223__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__55217(cljs.core.rest(s__55218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__55225(s__55226){
return (new cljs.core.LazySeq(null,(function (){
var s__55226__$1 = s__55226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55226__$1);
if(temp__5735__auto__){
var s__55226__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55226__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55226__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55228 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55227 = (0);
while(true){
if((i__55227 < size__4581__auto__)){
var vec__55229 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55227);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55229,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55229,(1),null);
cljs.core.chunk_append(b__55228,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__55227,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232(s__55233){
return (new cljs.core.LazySeq(null,((function (i__55227,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55233__$1 = s__55233;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55233__$1);
if(temp__5735__auto____$1){
var s__55233__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55233__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55233__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55235 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55234 = (0);
while(true){
if((i__55234 < size__4581__auto____$1)){
var vec__55236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55234);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55236,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55236,(1),null);
cljs.core.chunk_append(b__55235,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55234,i__55227,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55234,i__55227,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__55234,i__55227,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239(s__55240){
return (new cljs.core.LazySeq(null,((function (i__55234,i__55227,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55240__$1 = s__55240;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55240__$1);
if(temp__5735__auto____$2){
var s__55240__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55240__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55240__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55242 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55241 = (0);
while(true){
if((i__55241 < size__4581__auto____$2)){
var map__55243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55241);
var map__55243__$1 = (((((!((map__55243 == null))))?(((((map__55243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55243):map__55243);
var block = map__55243__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55243__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55243__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55242,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55241,i__55234,i__55227,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239_$_iter__55245(s__55246){
return (new cljs.core.LazySeq(null,((function (i__55241,i__55234,i__55227,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55246__$1 = s__55246;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55246__$1);
if(temp__5735__auto____$3){
var s__55246__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55246__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__55246__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__55248 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__55247 = (0);
while(true){
if((i__55247 < size__4581__auto____$3)){
var map__55249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__55247);
var map__55249__$1 = (((((!((map__55249 == null))))?(((((map__55249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55249):map__55249);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55249__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55249__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55249__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55248,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55247,i__55241,i__55234,i__55227,map__55249,map__55249__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__55248,s__55246__$2,temp__5735__auto____$3,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55247,i__55241,i__55234,i__55227,map__55249,map__55249__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__55248,s__55246__$2,temp__5735__auto____$3,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55378 = (i__55247 + (1));
i__55247 = G__55378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55248),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239_$_iter__55245(cljs.core.chunk_rest(s__55246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55248),null);
}
} else {
var map__55251 = cljs.core.first(s__55246__$2);
var map__55251__$1 = (((((!((map__55251 == null))))?(((((map__55251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55251):map__55251);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55251__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55251__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55251__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55241,i__55234,i__55227,map__55251,map__55251__$1,title__$1,string,uid__$2,s__55246__$2,temp__5735__auto____$3,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55241,i__55234,i__55227,map__55251,map__55251__$1,title__$1,string,uid__$2,s__55246__$2,temp__5735__auto____$3,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239_$_iter__55245(cljs.core.rest(s__55246__$2)));
}
} else {
return null;
}
break;
}
});})(i__55241,i__55234,i__55227,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55241,i__55234,i__55227,map__55243,map__55243__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55242,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55379 = (i__55241 + (1));
i__55241 = G__55379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55242),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239(cljs.core.chunk_rest(s__55240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55242),null);
}
} else {
var map__55253 = cljs.core.first(s__55240__$2);
var map__55253__$1 = (((((!((map__55253 == null))))?(((((map__55253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55253):map__55253);
var block = map__55253__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55234,i__55227,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239_$_iter__55255(s__55256){
return (new cljs.core.LazySeq(null,((function (i__55234,i__55227,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55256__$1 = s__55256;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55256__$1);
if(temp__5735__auto____$3){
var s__55256__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55256__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55256__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55258 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55257 = (0);
while(true){
if((i__55257 < size__4581__auto____$2)){
var map__55259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55257);
var map__55259__$1 = (((((!((map__55259 == null))))?(((((map__55259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55259):map__55259);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55259__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55259__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55259__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55258,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55257,i__55234,i__55227,map__55259,map__55259__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55258,s__55256__$2,temp__5735__auto____$3,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55257,i__55234,i__55227,map__55259,map__55259__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55258,s__55256__$2,temp__5735__auto____$3,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55380 = (i__55257 + (1));
i__55257 = G__55380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55258),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239_$_iter__55255(cljs.core.chunk_rest(s__55256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55258),null);
}
} else {
var map__55261 = cljs.core.first(s__55256__$2);
var map__55261__$1 = (((((!((map__55261 == null))))?(((((map__55261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55261):map__55261);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55261__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55234,i__55227,map__55261,map__55261__$1,title__$1,string,uid__$2,s__55256__$2,temp__5735__auto____$3,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55234,i__55227,map__55261,map__55261__$1,title__$1,string,uid__$2,s__55256__$2,temp__5735__auto____$3,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239_$_iter__55255(cljs.core.rest(s__55256__$2)));
}
} else {
return null;
}
break;
}
});})(i__55234,i__55227,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55234,i__55227,map__55253,map__55253__$1,block,uid__$1,parents,s__55240__$2,temp__5735__auto____$2,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55239(cljs.core.rest(s__55240__$2)));
}
} else {
return null;
}
break;
}
});})(i__55234,i__55227,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55234,i__55227,vec__55236,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55235,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__55381 = (i__55234 + (1));
i__55234 = G__55381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55235),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232(cljs.core.chunk_rest(s__55233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55235),null);
}
} else {
var vec__55263 = cljs.core.first(s__55233__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55263,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55263,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55227,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55227,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__55227,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266(s__55267){
return (new cljs.core.LazySeq(null,((function (i__55227,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55267__$1 = s__55267;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55267__$1);
if(temp__5735__auto____$2){
var s__55267__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55267__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55267__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55269 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55268 = (0);
while(true){
if((i__55268 < size__4581__auto____$1)){
var map__55270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55268);
var map__55270__$1 = (((((!((map__55270 == null))))?(((((map__55270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55270):map__55270);
var block = map__55270__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55270__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55269,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55268,i__55227,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266_$_iter__55272(s__55273){
return (new cljs.core.LazySeq(null,((function (i__55268,i__55227,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55273__$1 = s__55273;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55273__$1);
if(temp__5735__auto____$3){
var s__55273__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55273__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55273__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55275 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55274 = (0);
while(true){
if((i__55274 < size__4581__auto____$2)){
var map__55276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55274);
var map__55276__$1 = (((((!((map__55276 == null))))?(((((map__55276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55276):map__55276);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55276__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55276__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55276__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55274,i__55268,i__55227,map__55276,map__55276__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55275,s__55273__$2,temp__5735__auto____$3,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55274,i__55268,i__55227,map__55276,map__55276__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55275,s__55273__$2,temp__5735__auto____$3,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55382 = (i__55274 + (1));
i__55274 = G__55382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55275),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266_$_iter__55272(cljs.core.chunk_rest(s__55273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55275),null);
}
} else {
var map__55278 = cljs.core.first(s__55273__$2);
var map__55278__$1 = (((((!((map__55278 == null))))?(((((map__55278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55278):map__55278);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55278__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55278__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55278__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55268,i__55227,map__55278,map__55278__$1,title__$1,string,uid__$2,s__55273__$2,temp__5735__auto____$3,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55268,i__55227,map__55278,map__55278__$1,title__$1,string,uid__$2,s__55273__$2,temp__5735__auto____$3,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266_$_iter__55272(cljs.core.rest(s__55273__$2)));
}
} else {
return null;
}
break;
}
});})(i__55268,i__55227,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55268,i__55227,map__55270,map__55270__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55269,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55383 = (i__55268 + (1));
i__55268 = G__55383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55269),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266(cljs.core.chunk_rest(s__55267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55269),null);
}
} else {
var map__55280 = cljs.core.first(s__55267__$2);
var map__55280__$1 = (((((!((map__55280 == null))))?(((((map__55280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55280):map__55280);
var block = map__55280__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55280__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55227,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266_$_iter__55282(s__55283){
return (new cljs.core.LazySeq(null,((function (i__55227,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55283__$1 = s__55283;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55283__$1);
if(temp__5735__auto____$3){
var s__55283__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55283__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55283__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55285 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55284 = (0);
while(true){
if((i__55284 < size__4581__auto____$1)){
var map__55286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55284);
var map__55286__$1 = (((((!((map__55286 == null))))?(((((map__55286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55286):map__55286);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55286__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55286__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55285,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55284,i__55227,map__55286,map__55286__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55285,s__55283__$2,temp__5735__auto____$3,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55284,i__55227,map__55286,map__55286__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55285,s__55283__$2,temp__5735__auto____$3,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55384 = (i__55284 + (1));
i__55284 = G__55384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55285),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266_$_iter__55282(cljs.core.chunk_rest(s__55283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55285),null);
}
} else {
var map__55288 = cljs.core.first(s__55283__$2);
var map__55288__$1 = (((((!((map__55288 == null))))?(((((map__55288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55288):map__55288);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55288__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55288__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55288__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55227,map__55288,map__55288__$1,title__$1,string,uid__$2,s__55283__$2,temp__5735__auto____$3,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55227,map__55288,map__55288__$1,title__$1,string,uid__$2,s__55283__$2,temp__5735__auto____$3,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266_$_iter__55282(cljs.core.rest(s__55283__$2)));
}
} else {
return null;
}
break;
}
});})(i__55227,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55227,map__55280,map__55280__$1,block,uid__$1,parents,s__55267__$2,temp__5735__auto____$2,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232_$_iter__55266(cljs.core.rest(s__55267__$2)));
}
} else {
return null;
}
break;
}
});})(i__55227,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55227,vec__55263,group_title,group,s__55233__$2,temp__5735__auto____$1,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55232(cljs.core.rest(s__55233__$2)));
}
} else {
return null;
}
break;
}
});})(i__55227,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55227,vec__55229,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55228,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__55385 = (i__55227 + (1));
i__55227 = G__55385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55228),athens$views$node_page$node_page_el_$_iter__55225(cljs.core.chunk_rest(s__55226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55228),null);
}
} else {
var vec__55290 = cljs.core.first(s__55226__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55290,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55290,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293(s__55294){
return (new cljs.core.LazySeq(null,(function (){
var s__55294__$1 = s__55294;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55294__$1);
if(temp__5735__auto____$1){
var s__55294__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55294__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55294__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55296 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55295 = (0);
while(true){
if((i__55295 < size__4581__auto__)){
var vec__55297 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55295);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55297,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55297,(1),null);
cljs.core.chunk_append(b__55296,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55295,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55295,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__55295,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300(s__55301){
return (new cljs.core.LazySeq(null,((function (i__55295,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55301__$1 = s__55301;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55301__$1);
if(temp__5735__auto____$2){
var s__55301__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55301__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55301__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55303 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55302 = (0);
while(true){
if((i__55302 < size__4581__auto____$1)){
var map__55304 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55302);
var map__55304__$1 = (((((!((map__55304 == null))))?(((((map__55304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55304):map__55304);
var block = map__55304__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55304__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55304__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55303,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55302,i__55295,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300_$_iter__55306(s__55307){
return (new cljs.core.LazySeq(null,((function (i__55302,i__55295,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55307__$1 = s__55307;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55307__$1);
if(temp__5735__auto____$3){
var s__55307__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55307__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55307__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55309 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55308 = (0);
while(true){
if((i__55308 < size__4581__auto____$2)){
var map__55310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55308);
var map__55310__$1 = (((((!((map__55310 == null))))?(((((map__55310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55310):map__55310);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55310__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55310__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55310__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55309,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55308,i__55302,i__55295,map__55310,map__55310__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55309,s__55307__$2,temp__5735__auto____$3,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55308,i__55302,i__55295,map__55310,map__55310__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55309,s__55307__$2,temp__5735__auto____$3,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55386 = (i__55308 + (1));
i__55308 = G__55386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55309),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300_$_iter__55306(cljs.core.chunk_rest(s__55307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55309),null);
}
} else {
var map__55312 = cljs.core.first(s__55307__$2);
var map__55312__$1 = (((((!((map__55312 == null))))?(((((map__55312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55312):map__55312);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55312__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55312__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55312__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55302,i__55295,map__55312,map__55312__$1,title__$1,string,uid__$2,s__55307__$2,temp__5735__auto____$3,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55302,i__55295,map__55312,map__55312__$1,title__$1,string,uid__$2,s__55307__$2,temp__5735__auto____$3,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300_$_iter__55306(cljs.core.rest(s__55307__$2)));
}
} else {
return null;
}
break;
}
});})(i__55302,i__55295,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55302,i__55295,map__55304,map__55304__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55303,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55387 = (i__55302 + (1));
i__55302 = G__55387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55303),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300(cljs.core.chunk_rest(s__55301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55303),null);
}
} else {
var map__55314 = cljs.core.first(s__55301__$2);
var map__55314__$1 = (((((!((map__55314 == null))))?(((((map__55314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55314):map__55314);
var block = map__55314__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55314__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55295,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300_$_iter__55316(s__55317){
return (new cljs.core.LazySeq(null,((function (i__55295,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55317__$1 = s__55317;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55317__$1);
if(temp__5735__auto____$3){
var s__55317__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55317__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55317__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55319 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55318 = (0);
while(true){
if((i__55318 < size__4581__auto____$1)){
var map__55320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55318);
var map__55320__$1 = (((((!((map__55320 == null))))?(((((map__55320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55320):map__55320);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55319,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55318,i__55295,map__55320,map__55320__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55319,s__55317__$2,temp__5735__auto____$3,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55318,i__55295,map__55320,map__55320__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55319,s__55317__$2,temp__5735__auto____$3,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55388 = (i__55318 + (1));
i__55318 = G__55388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55319),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300_$_iter__55316(cljs.core.chunk_rest(s__55317__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55319),null);
}
} else {
var map__55322 = cljs.core.first(s__55317__$2);
var map__55322__$1 = (((((!((map__55322 == null))))?(((((map__55322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55322):map__55322);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55322__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55322__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55322__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55295,map__55322,map__55322__$1,title__$1,string,uid__$2,s__55317__$2,temp__5735__auto____$3,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55295,map__55322,map__55322__$1,title__$1,string,uid__$2,s__55317__$2,temp__5735__auto____$3,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300_$_iter__55316(cljs.core.rest(s__55317__$2)));
}
} else {
return null;
}
break;
}
});})(i__55295,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55295,map__55314,map__55314__$1,block,uid__$1,parents,s__55301__$2,temp__5735__auto____$2,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55300(cljs.core.rest(s__55301__$2)));
}
} else {
return null;
}
break;
}
});})(i__55295,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55295,vec__55297,group_title,group,c__4580__auto__,size__4581__auto__,b__55296,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__55389 = (i__55295 + (1));
i__55295 = G__55389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55296),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293(cljs.core.chunk_rest(s__55294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55296),null);
}
} else {
var vec__55324 = cljs.core.first(s__55294__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55324,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55324,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327(s__55328){
return (new cljs.core.LazySeq(null,(function (){
var s__55328__$1 = s__55328;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55328__$1);
if(temp__5735__auto____$2){
var s__55328__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55328__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55328__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55330 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55329 = (0);
while(true){
if((i__55329 < size__4581__auto__)){
var map__55331 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55329);
var map__55331__$1 = (((((!((map__55331 == null))))?(((((map__55331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55331):map__55331);
var block = map__55331__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55331__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55331__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55330,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55329,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327_$_iter__55333(s__55334){
return (new cljs.core.LazySeq(null,((function (i__55329,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
var s__55334__$1 = s__55334;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55334__$1);
if(temp__5735__auto____$3){
var s__55334__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55334__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55334__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55336 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55335 = (0);
while(true){
if((i__55335 < size__4581__auto____$1)){
var map__55337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55335);
var map__55337__$1 = (((((!((map__55337 == null))))?(((((map__55337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55337):map__55337);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55337__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55337__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55337__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55335,i__55329,map__55337,map__55337__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55336,s__55334__$2,temp__5735__auto____$3,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55335,i__55329,map__55337,map__55337__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55336,s__55334__$2,temp__5735__auto____$3,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55390 = (i__55335 + (1));
i__55335 = G__55390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55336),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327_$_iter__55333(cljs.core.chunk_rest(s__55334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55336),null);
}
} else {
var map__55339 = cljs.core.first(s__55334__$2);
var map__55339__$1 = (((((!((map__55339 == null))))?(((((map__55339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55339):map__55339);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55329,map__55339,map__55339__$1,title__$1,string,uid__$2,s__55334__$2,temp__5735__auto____$3,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55329,map__55339,map__55339__$1,title__$1,string,uid__$2,s__55334__$2,temp__5735__auto____$3,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327_$_iter__55333(cljs.core.rest(s__55334__$2)));
}
} else {
return null;
}
break;
}
});})(i__55329,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
,null,null));
});})(i__55329,map__55331,map__55331__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55330,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55391 = (i__55329 + (1));
i__55329 = G__55391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55330),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327(cljs.core.chunk_rest(s__55328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55330),null);
}
} else {
var map__55341 = cljs.core.first(s__55328__$2);
var map__55341__$1 = (((((!((map__55341 == null))))?(((((map__55341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55341):map__55341);
var block = map__55341__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55341__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55341__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__55341,map__55341__$1,block,uid__$1,parents,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327_$_iter__55343(s__55344){
return (new cljs.core.LazySeq(null,(function (){
var s__55344__$1 = s__55344;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55344__$1);
if(temp__5735__auto____$3){
var s__55344__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55344__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55344__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55346 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55345 = (0);
while(true){
if((i__55345 < size__4581__auto__)){
var map__55347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55345);
var map__55347__$1 = (((((!((map__55347 == null))))?(((((map__55347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55347):map__55347);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55347__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55347__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55347__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55346,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55345,map__55347,map__55347__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__55346,s__55344__$2,temp__5735__auto____$3,map__55341,map__55341__$1,block,uid__$1,parents,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55345,map__55347,map__55347__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__55346,s__55344__$2,temp__5735__auto____$3,map__55341,map__55341__$1,block,uid__$1,parents,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55392 = (i__55345 + (1));
i__55345 = G__55392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55346),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327_$_iter__55343(cljs.core.chunk_rest(s__55344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55346),null);
}
} else {
var map__55349 = cljs.core.first(s__55344__$2);
var map__55349__$1 = (((((!((map__55349 == null))))?(((((map__55349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55349):map__55349);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55349,map__55349__$1,title__$1,string,uid__$2,s__55344__$2,temp__5735__auto____$3,map__55341,map__55341__$1,block,uid__$1,parents,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__55349,map__55349__$1,title__$1,string,uid__$2,s__55344__$2,temp__5735__auto____$3,map__55341,map__55341__$1,block,uid__$1,parents,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327_$_iter__55343(cljs.core.rest(s__55344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__55341,map__55341__$1,block,uid__$1,parents,s__55328__$2,temp__5735__auto____$2,vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293_$_iter__55327(cljs.core.rest(s__55328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__55324,group_title,group,s__55294__$2,temp__5735__auto____$1,vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__55225_$_iter__55293(cljs.core.rest(s__55294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__55290,linked_or_unlinked,refs,s__55226__$2,temp__5735__auto__,map__55213,map__55213__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__55225(cljs.core.rest(s__55226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__55351 = athens.db.get_node_document(ident);
var map__55351__$1 = (((((!((map__55351 == null))))?(((((map__55351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55351):map__55351);
var node = map__55351__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55351__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55351__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__55353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55353) : re_frame.core.subscribe.call(null,G__55353));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
