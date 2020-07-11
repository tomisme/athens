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
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__60497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60497) : re_frame.core.dispatch.call(null,G__60497));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__60498 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__60499 = athens.db.dsdb;
var G__60500 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60498,G__60499,G__60500) : posh.reagent.q.call(null,G__60498,G__60499,G__60500));
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
return cljs.core.boolean$((function (){try{var vec__60502 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60502,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60502,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60502,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e60501){if((e60501 instanceof Object)){
var _ = e60501;
return false;
} else {
throw e60501;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__60505,editing_uid,ref_groups,timeline_page_QMARK_){
var map__60506 = p__60505;
var map__60506__$1 = (((((!((map__60506 == null))))?(((((map__60506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60506):map__60506);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60506__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60506__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60506__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__60508 = e.target.value;
var G__60509 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__60508,G__60509) : athens.views.node_page.db_handler.call(null,G__60508,G__60509));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__60510(s__60511){
return (new cljs.core.LazySeq(null,(function (){
var s__60511__$1 = s__60511;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60511__$1);
if(temp__5735__auto__){
var s__60511__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60511__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60511__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60513 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60512 = (0);
while(true){
if((i__60512 < size__4581__auto__)){
var map__60514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60512);
var map__60514__$1 = (((((!((map__60514 == null))))?(((((map__60514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60514):map__60514);
var child = map__60514__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60514__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60513,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__60647 = (i__60512 + (1));
i__60512 = G__60647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60513),athens$views$node_page$node_page_el_$_iter__60510(cljs.core.chunk_rest(s__60511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60513),null);
}
} else {
var map__60516 = cljs.core.first(s__60511__$2);
var map__60516__$1 = (((((!((map__60516 == null))))?(((((map__60516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60516):map__60516);
var child = map__60516__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__60510(cljs.core.rest(s__60511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__60518(s__60519){
return (new cljs.core.LazySeq(null,(function (){
var s__60519__$1 = s__60519;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60519__$1);
if(temp__5735__auto__){
var s__60519__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60519__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60519__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60521 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60520 = (0);
while(true){
if((i__60520 < size__4581__auto__)){
var vec__60522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60520);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60522,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60522,(1),null);
cljs.core.chunk_append(b__60521,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__60520,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525(s__60526){
return (new cljs.core.LazySeq(null,((function (i__60520,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60526__$1 = s__60526;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60526__$1);
if(temp__5735__auto____$1){
var s__60526__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60526__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60526__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60528 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60527 = (0);
while(true){
if((i__60527 < size__4581__auto____$1)){
var vec__60529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60527);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60529,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60529,(1),null);
cljs.core.chunk_append(b__60528,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60527,i__60520,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__60527,i__60520,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__60527,i__60520,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532(s__60533){
return (new cljs.core.LazySeq(null,((function (i__60527,i__60520,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60533__$1 = s__60533;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60533__$1);
if(temp__5735__auto____$2){
var s__60533__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60533__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60533__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60535 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60534 = (0);
while(true){
if((i__60534 < size__4581__auto____$2)){
var map__60536 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60534);
var map__60536__$1 = (((((!((map__60536 == null))))?(((((map__60536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60536):map__60536);
var block = map__60536__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60536__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60536__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60535,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60534,i__60527,i__60520,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532_$_iter__60538(s__60539){
return (new cljs.core.LazySeq(null,((function (i__60534,i__60527,i__60520,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60539__$1 = s__60539;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60539__$1);
if(temp__5735__auto____$3){
var s__60539__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60539__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__60539__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__60541 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__60540 = (0);
while(true){
if((i__60540 < size__4581__auto____$3)){
var map__60542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__60540);
var map__60542__$1 = (((((!((map__60542 == null))))?(((((map__60542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60542):map__60542);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60542__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60542__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60542__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60541,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60540,i__60534,i__60527,i__60520,map__60542,map__60542__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__60541,s__60539__$2,temp__5735__auto____$3,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60540,i__60534,i__60527,i__60520,map__60542,map__60542__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__60541,s__60539__$2,temp__5735__auto____$3,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60648 = (i__60540 + (1));
i__60540 = G__60648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60541),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532_$_iter__60538(cljs.core.chunk_rest(s__60539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60541),null);
}
} else {
var map__60544 = cljs.core.first(s__60539__$2);
var map__60544__$1 = (((((!((map__60544 == null))))?(((((map__60544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60544):map__60544);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60534,i__60527,i__60520,map__60544,map__60544__$1,title__$1,string,uid__$2,s__60539__$2,temp__5735__auto____$3,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60534,i__60527,i__60520,map__60544,map__60544__$1,title__$1,string,uid__$2,s__60539__$2,temp__5735__auto____$3,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532_$_iter__60538(cljs.core.rest(s__60539__$2)));
}
} else {
return null;
}
break;
}
});})(i__60534,i__60527,i__60520,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60534,i__60527,i__60520,map__60536,map__60536__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60535,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60649 = (i__60534 + (1));
i__60534 = G__60649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60535),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532(cljs.core.chunk_rest(s__60533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60535),null);
}
} else {
var map__60546 = cljs.core.first(s__60533__$2);
var map__60546__$1 = (((((!((map__60546 == null))))?(((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60546):map__60546);
var block = map__60546__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60527,i__60520,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532_$_iter__60548(s__60549){
return (new cljs.core.LazySeq(null,((function (i__60527,i__60520,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60549__$1 = s__60549;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60549__$1);
if(temp__5735__auto____$3){
var s__60549__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60549__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60549__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60551 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60550 = (0);
while(true){
if((i__60550 < size__4581__auto____$2)){
var map__60552 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60550);
var map__60552__$1 = (((((!((map__60552 == null))))?(((((map__60552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60552):map__60552);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60552__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60551,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60550,i__60527,i__60520,map__60552,map__60552__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60551,s__60549__$2,temp__5735__auto____$3,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60550,i__60527,i__60520,map__60552,map__60552__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60551,s__60549__$2,temp__5735__auto____$3,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60650 = (i__60550 + (1));
i__60550 = G__60650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60551),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532_$_iter__60548(cljs.core.chunk_rest(s__60549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60551),null);
}
} else {
var map__60554 = cljs.core.first(s__60549__$2);
var map__60554__$1 = (((((!((map__60554 == null))))?(((((map__60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60554):map__60554);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60527,i__60520,map__60554,map__60554__$1,title__$1,string,uid__$2,s__60549__$2,temp__5735__auto____$3,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60527,i__60520,map__60554,map__60554__$1,title__$1,string,uid__$2,s__60549__$2,temp__5735__auto____$3,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532_$_iter__60548(cljs.core.rest(s__60549__$2)));
}
} else {
return null;
}
break;
}
});})(i__60527,i__60520,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60527,i__60520,map__60546,map__60546__$1,block,uid__$1,parents,s__60533__$2,temp__5735__auto____$2,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60532(cljs.core.rest(s__60533__$2)));
}
} else {
return null;
}
break;
}
});})(i__60527,i__60520,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60527,i__60520,vec__60529,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60528,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__60651 = (i__60527 + (1));
i__60527 = G__60651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60528),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525(cljs.core.chunk_rest(s__60526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60528),null);
}
} else {
var vec__60556 = cljs.core.first(s__60526__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60556,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60556,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60520,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__60520,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__60520,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559(s__60560){
return (new cljs.core.LazySeq(null,((function (i__60520,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60560__$1 = s__60560;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60560__$1);
if(temp__5735__auto____$2){
var s__60560__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60560__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60560__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60562 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60561 = (0);
while(true){
if((i__60561 < size__4581__auto____$1)){
var map__60563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60561);
var map__60563__$1 = (((((!((map__60563 == null))))?(((((map__60563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60563):map__60563);
var block = map__60563__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60563__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60563__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60562,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60561,i__60520,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559_$_iter__60565(s__60566){
return (new cljs.core.LazySeq(null,((function (i__60561,i__60520,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60566__$1 = s__60566;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60566__$1);
if(temp__5735__auto____$3){
var s__60566__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60566__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60566__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60568 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60567 = (0);
while(true){
if((i__60567 < size__4581__auto____$2)){
var map__60569 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60567);
var map__60569__$1 = (((((!((map__60569 == null))))?(((((map__60569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60569):map__60569);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60568,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60567,i__60561,i__60520,map__60569,map__60569__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60568,s__60566__$2,temp__5735__auto____$3,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60567,i__60561,i__60520,map__60569,map__60569__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60568,s__60566__$2,temp__5735__auto____$3,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60652 = (i__60567 + (1));
i__60567 = G__60652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60568),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559_$_iter__60565(cljs.core.chunk_rest(s__60566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60568),null);
}
} else {
var map__60571 = cljs.core.first(s__60566__$2);
var map__60571__$1 = (((((!((map__60571 == null))))?(((((map__60571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60571):map__60571);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60561,i__60520,map__60571,map__60571__$1,title__$1,string,uid__$2,s__60566__$2,temp__5735__auto____$3,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60561,i__60520,map__60571,map__60571__$1,title__$1,string,uid__$2,s__60566__$2,temp__5735__auto____$3,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559_$_iter__60565(cljs.core.rest(s__60566__$2)));
}
} else {
return null;
}
break;
}
});})(i__60561,i__60520,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60561,i__60520,map__60563,map__60563__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60562,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60653 = (i__60561 + (1));
i__60561 = G__60653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60562),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559(cljs.core.chunk_rest(s__60560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60562),null);
}
} else {
var map__60573 = cljs.core.first(s__60560__$2);
var map__60573__$1 = (((((!((map__60573 == null))))?(((((map__60573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60573):map__60573);
var block = map__60573__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60520,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559_$_iter__60575(s__60576){
return (new cljs.core.LazySeq(null,((function (i__60520,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60576__$1 = s__60576;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60576__$1);
if(temp__5735__auto____$3){
var s__60576__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60576__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60576__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60578 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60577 = (0);
while(true){
if((i__60577 < size__4581__auto____$1)){
var map__60579 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60577);
var map__60579__$1 = (((((!((map__60579 == null))))?(((((map__60579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60579):map__60579);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60578,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60577,i__60520,map__60579,map__60579__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60578,s__60576__$2,temp__5735__auto____$3,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60577,i__60520,map__60579,map__60579__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60578,s__60576__$2,temp__5735__auto____$3,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60654 = (i__60577 + (1));
i__60577 = G__60654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60578),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559_$_iter__60575(cljs.core.chunk_rest(s__60576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60578),null);
}
} else {
var map__60581 = cljs.core.first(s__60576__$2);
var map__60581__$1 = (((((!((map__60581 == null))))?(((((map__60581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60581):map__60581);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60581__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60581__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60581__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60520,map__60581,map__60581__$1,title__$1,string,uid__$2,s__60576__$2,temp__5735__auto____$3,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60520,map__60581,map__60581__$1,title__$1,string,uid__$2,s__60576__$2,temp__5735__auto____$3,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559_$_iter__60575(cljs.core.rest(s__60576__$2)));
}
} else {
return null;
}
break;
}
});})(i__60520,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60520,map__60573,map__60573__$1,block,uid__$1,parents,s__60560__$2,temp__5735__auto____$2,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525_$_iter__60559(cljs.core.rest(s__60560__$2)));
}
} else {
return null;
}
break;
}
});})(i__60520,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60520,vec__60556,group_title,group,s__60526__$2,temp__5735__auto____$1,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60525(cljs.core.rest(s__60526__$2)));
}
} else {
return null;
}
break;
}
});})(i__60520,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60520,vec__60522,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60521,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__60655 = (i__60520 + (1));
i__60520 = G__60655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60521),athens$views$node_page$node_page_el_$_iter__60518(cljs.core.chunk_rest(s__60519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60521),null);
}
} else {
var vec__60583 = cljs.core.first(s__60519__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60583,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60583,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586(s__60587){
return (new cljs.core.LazySeq(null,(function (){
var s__60587__$1 = s__60587;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60587__$1);
if(temp__5735__auto____$1){
var s__60587__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60587__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60587__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60589 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60588 = (0);
while(true){
if((i__60588 < size__4581__auto__)){
var vec__60590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60588);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60590,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60590,(1),null);
cljs.core.chunk_append(b__60589,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60588,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__60588,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__60588,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593(s__60594){
return (new cljs.core.LazySeq(null,((function (i__60588,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60594__$1 = s__60594;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60594__$1);
if(temp__5735__auto____$2){
var s__60594__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60594__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60594__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60596 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60595 = (0);
while(true){
if((i__60595 < size__4581__auto____$1)){
var map__60597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60595);
var map__60597__$1 = (((((!((map__60597 == null))))?(((((map__60597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60597):map__60597);
var block = map__60597__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60597__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60597__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60596,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60595,i__60588,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593_$_iter__60599(s__60600){
return (new cljs.core.LazySeq(null,((function (i__60595,i__60588,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60600__$1 = s__60600;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60600__$1);
if(temp__5735__auto____$3){
var s__60600__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60600__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60600__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60602 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60601 = (0);
while(true){
if((i__60601 < size__4581__auto____$2)){
var map__60603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60601);
var map__60603__$1 = (((((!((map__60603 == null))))?(((((map__60603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60603):map__60603);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60602,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60601,i__60595,i__60588,map__60603,map__60603__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60602,s__60600__$2,temp__5735__auto____$3,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60601,i__60595,i__60588,map__60603,map__60603__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60602,s__60600__$2,temp__5735__auto____$3,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60656 = (i__60601 + (1));
i__60601 = G__60656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60602),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593_$_iter__60599(cljs.core.chunk_rest(s__60600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60602),null);
}
} else {
var map__60605 = cljs.core.first(s__60600__$2);
var map__60605__$1 = (((((!((map__60605 == null))))?(((((map__60605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60605):map__60605);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60595,i__60588,map__60605,map__60605__$1,title__$1,string,uid__$2,s__60600__$2,temp__5735__auto____$3,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60595,i__60588,map__60605,map__60605__$1,title__$1,string,uid__$2,s__60600__$2,temp__5735__auto____$3,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593_$_iter__60599(cljs.core.rest(s__60600__$2)));
}
} else {
return null;
}
break;
}
});})(i__60595,i__60588,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60595,i__60588,map__60597,map__60597__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60596,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60657 = (i__60595 + (1));
i__60595 = G__60657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60596),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593(cljs.core.chunk_rest(s__60594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60596),null);
}
} else {
var map__60607 = cljs.core.first(s__60594__$2);
var map__60607__$1 = (((((!((map__60607 == null))))?(((((map__60607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60607):map__60607);
var block = map__60607__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60588,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593_$_iter__60609(s__60610){
return (new cljs.core.LazySeq(null,((function (i__60588,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60610__$1 = s__60610;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60610__$1);
if(temp__5735__auto____$3){
var s__60610__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60610__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60610__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60612 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60611 = (0);
while(true){
if((i__60611 < size__4581__auto____$1)){
var map__60613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60611);
var map__60613__$1 = (((((!((map__60613 == null))))?(((((map__60613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60613):map__60613);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60613__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60613__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60613__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60612,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60611,i__60588,map__60613,map__60613__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60612,s__60610__$2,temp__5735__auto____$3,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60611,i__60588,map__60613,map__60613__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60612,s__60610__$2,temp__5735__auto____$3,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60658 = (i__60611 + (1));
i__60611 = G__60658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60612),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593_$_iter__60609(cljs.core.chunk_rest(s__60610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60612),null);
}
} else {
var map__60615 = cljs.core.first(s__60610__$2);
var map__60615__$1 = (((((!((map__60615 == null))))?(((((map__60615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60615):map__60615);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60588,map__60615,map__60615__$1,title__$1,string,uid__$2,s__60610__$2,temp__5735__auto____$3,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60588,map__60615,map__60615__$1,title__$1,string,uid__$2,s__60610__$2,temp__5735__auto____$3,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593_$_iter__60609(cljs.core.rest(s__60610__$2)));
}
} else {
return null;
}
break;
}
});})(i__60588,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60588,map__60607,map__60607__$1,block,uid__$1,parents,s__60594__$2,temp__5735__auto____$2,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60593(cljs.core.rest(s__60594__$2)));
}
} else {
return null;
}
break;
}
});})(i__60588,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60588,vec__60590,group_title,group,c__4580__auto__,size__4581__auto__,b__60589,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__60659 = (i__60588 + (1));
i__60588 = G__60659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60589),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586(cljs.core.chunk_rest(s__60587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60589),null);
}
} else {
var vec__60617 = cljs.core.first(s__60587__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60617,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60617,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620(s__60621){
return (new cljs.core.LazySeq(null,(function (){
var s__60621__$1 = s__60621;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60621__$1);
if(temp__5735__auto____$2){
var s__60621__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60621__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60621__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60623 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60622 = (0);
while(true){
if((i__60622 < size__4581__auto__)){
var map__60624 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60622);
var map__60624__$1 = (((((!((map__60624 == null))))?(((((map__60624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60624):map__60624);
var block = map__60624__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60623,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60622,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620_$_iter__60626(s__60627){
return (new cljs.core.LazySeq(null,((function (i__60622,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
var s__60627__$1 = s__60627;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60627__$1);
if(temp__5735__auto____$3){
var s__60627__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60627__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60627__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60629 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60628 = (0);
while(true){
if((i__60628 < size__4581__auto____$1)){
var map__60630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60628);
var map__60630__$1 = (((((!((map__60630 == null))))?(((((map__60630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60630):map__60630);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60630__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60630__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60630__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60629,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60628,i__60622,map__60630,map__60630__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60629,s__60627__$2,temp__5735__auto____$3,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60628,i__60622,map__60630,map__60630__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60629,s__60627__$2,temp__5735__auto____$3,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60660 = (i__60628 + (1));
i__60628 = G__60660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60629),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620_$_iter__60626(cljs.core.chunk_rest(s__60627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60629),null);
}
} else {
var map__60632 = cljs.core.first(s__60627__$2);
var map__60632__$1 = (((((!((map__60632 == null))))?(((((map__60632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60632):map__60632);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60632__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60632__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60632__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60622,map__60632,map__60632__$1,title__$1,string,uid__$2,s__60627__$2,temp__5735__auto____$3,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60622,map__60632,map__60632__$1,title__$1,string,uid__$2,s__60627__$2,temp__5735__auto____$3,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620_$_iter__60626(cljs.core.rest(s__60627__$2)));
}
} else {
return null;
}
break;
}
});})(i__60622,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
,null,null));
});})(i__60622,map__60624,map__60624__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60623,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60661 = (i__60622 + (1));
i__60622 = G__60661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60623),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620(cljs.core.chunk_rest(s__60621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60623),null);
}
} else {
var map__60634 = cljs.core.first(s__60621__$2);
var map__60634__$1 = (((((!((map__60634 == null))))?(((((map__60634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60634):map__60634);
var block = map__60634__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__60634,map__60634__$1,block,uid__$1,parents,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620_$_iter__60636(s__60637){
return (new cljs.core.LazySeq(null,(function (){
var s__60637__$1 = s__60637;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60637__$1);
if(temp__5735__auto____$3){
var s__60637__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60637__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60637__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60639 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60638 = (0);
while(true){
if((i__60638 < size__4581__auto__)){
var map__60640 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60638);
var map__60640__$1 = (((((!((map__60640 == null))))?(((((map__60640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60640):map__60640);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60640__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60640__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60640__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60639,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60638,map__60640,map__60640__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__60639,s__60637__$2,temp__5735__auto____$3,map__60634,map__60634__$1,block,uid__$1,parents,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60638,map__60640,map__60640__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__60639,s__60637__$2,temp__5735__auto____$3,map__60634,map__60634__$1,block,uid__$1,parents,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60662 = (i__60638 + (1));
i__60638 = G__60662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60639),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620_$_iter__60636(cljs.core.chunk_rest(s__60637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60639),null);
}
} else {
var map__60642 = cljs.core.first(s__60637__$2);
var map__60642__$1 = (((((!((map__60642 == null))))?(((((map__60642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60642):map__60642);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__60642,map__60642__$1,title__$1,string,uid__$2,s__60637__$2,temp__5735__auto____$3,map__60634,map__60634__$1,block,uid__$1,parents,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__60642,map__60642__$1,title__$1,string,uid__$2,s__60637__$2,temp__5735__auto____$3,map__60634,map__60634__$1,block,uid__$1,parents,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620_$_iter__60636(cljs.core.rest(s__60637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__60634,map__60634__$1,block,uid__$1,parents,s__60621__$2,temp__5735__auto____$2,vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586_$_iter__60620(cljs.core.rest(s__60621__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60617,group_title,group,s__60587__$2,temp__5735__auto____$1,vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__60518_$_iter__60586(cljs.core.rest(s__60587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60583,linked_or_unlinked,refs,s__60519__$2,temp__5735__auto__,map__60506,map__60506__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__60518(cljs.core.rest(s__60519__$2)));
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
var map__60644 = athens.db.get_node_document(ident);
var map__60644__$1 = (((((!((map__60644 == null))))?(((((map__60644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60644):map__60644);
var node = map__60644__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60644__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60644__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__60646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60646) : re_frame.core.subscribe.call(null,G__60646));
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
