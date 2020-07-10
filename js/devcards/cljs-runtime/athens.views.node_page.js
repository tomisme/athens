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
var G__60499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60499) : re_frame.core.dispatch.call(null,G__60499));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__60500 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__60501 = athens.db.dsdb;
var G__60502 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60500,G__60501,G__60502) : posh.reagent.q.call(null,G__60500,G__60501,G__60502));
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
return cljs.core.boolean$((function (){try{var vec__60504 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e60503){if((e60503 instanceof Object)){
var _ = e60503;
return false;
} else {
throw e60503;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__60507,editing_uid,ref_groups,timeline_page_QMARK_){
var map__60508 = p__60507;
var map__60508__$1 = (((((!((map__60508 == null))))?(((((map__60508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60508):map__60508);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60508__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60508__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60508__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__60510 = e.target.value;
var G__60511 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__60510,G__60511) : athens.views.node_page.db_handler.call(null,G__60510,G__60511));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__60512(s__60513){
return (new cljs.core.LazySeq(null,(function (){
var s__60513__$1 = s__60513;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60513__$1);
if(temp__5735__auto__){
var s__60513__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60513__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60513__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60515 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60514 = (0);
while(true){
if((i__60514 < size__4581__auto__)){
var map__60516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60514);
var map__60516__$1 = (((((!((map__60516 == null))))?(((((map__60516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60516):map__60516);
var child = map__60516__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60515,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__60649 = (i__60514 + (1));
i__60514 = G__60649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60515),athens$views$node_page$node_page_el_$_iter__60512(cljs.core.chunk_rest(s__60513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60515),null);
}
} else {
var map__60518 = cljs.core.first(s__60513__$2);
var map__60518__$1 = (((((!((map__60518 == null))))?(((((map__60518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60518):map__60518);
var child = map__60518__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60518__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__60512(cljs.core.rest(s__60513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__60520(s__60521){
return (new cljs.core.LazySeq(null,(function (){
var s__60521__$1 = s__60521;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60521__$1);
if(temp__5735__auto__){
var s__60521__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60521__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60521__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60523 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60522 = (0);
while(true){
if((i__60522 < size__4581__auto__)){
var vec__60524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60522);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60524,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60524,(1),null);
cljs.core.chunk_append(b__60523,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__60522,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527(s__60528){
return (new cljs.core.LazySeq(null,((function (i__60522,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60528__$1 = s__60528;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60528__$1);
if(temp__5735__auto____$1){
var s__60528__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60528__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60528__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60530 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60529 = (0);
while(true){
if((i__60529 < size__4581__auto____$1)){
var vec__60531 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60529);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60531,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60531,(1),null);
cljs.core.chunk_append(b__60530,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60529,i__60522,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__60529,i__60522,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__60529,i__60522,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534(s__60535){
return (new cljs.core.LazySeq(null,((function (i__60529,i__60522,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60535__$1 = s__60535;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60535__$1);
if(temp__5735__auto____$2){
var s__60535__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60535__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60535__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60537 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60536 = (0);
while(true){
if((i__60536 < size__4581__auto____$2)){
var map__60538 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60536);
var map__60538__$1 = (((((!((map__60538 == null))))?(((((map__60538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60538):map__60538);
var block = map__60538__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60538__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60538__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60537,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60536,i__60529,i__60522,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534_$_iter__60540(s__60541){
return (new cljs.core.LazySeq(null,((function (i__60536,i__60529,i__60522,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60541__$1 = s__60541;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60541__$1);
if(temp__5735__auto____$3){
var s__60541__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60541__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__60541__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__60543 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__60542 = (0);
while(true){
if((i__60542 < size__4581__auto____$3)){
var map__60544 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__60542);
var map__60544__$1 = (((((!((map__60544 == null))))?(((((map__60544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60544):map__60544);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60543,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60542,i__60536,i__60529,i__60522,map__60544,map__60544__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__60543,s__60541__$2,temp__5735__auto____$3,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60542,i__60536,i__60529,i__60522,map__60544,map__60544__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__60543,s__60541__$2,temp__5735__auto____$3,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60650 = (i__60542 + (1));
i__60542 = G__60650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60543),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534_$_iter__60540(cljs.core.chunk_rest(s__60541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60543),null);
}
} else {
var map__60546 = cljs.core.first(s__60541__$2);
var map__60546__$1 = (((((!((map__60546 == null))))?(((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60546):map__60546);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60536,i__60529,i__60522,map__60546,map__60546__$1,title__$1,string,uid__$2,s__60541__$2,temp__5735__auto____$3,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60536,i__60529,i__60522,map__60546,map__60546__$1,title__$1,string,uid__$2,s__60541__$2,temp__5735__auto____$3,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534_$_iter__60540(cljs.core.rest(s__60541__$2)));
}
} else {
return null;
}
break;
}
});})(i__60536,i__60529,i__60522,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60536,i__60529,i__60522,map__60538,map__60538__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__60537,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60651 = (i__60536 + (1));
i__60536 = G__60651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60537),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534(cljs.core.chunk_rest(s__60535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60537),null);
}
} else {
var map__60548 = cljs.core.first(s__60535__$2);
var map__60548__$1 = (((((!((map__60548 == null))))?(((((map__60548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60548):map__60548);
var block = map__60548__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60548__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60548__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60529,i__60522,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534_$_iter__60550(s__60551){
return (new cljs.core.LazySeq(null,((function (i__60529,i__60522,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60551__$1 = s__60551;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60551__$1);
if(temp__5735__auto____$3){
var s__60551__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60551__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60551__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60553 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60552 = (0);
while(true){
if((i__60552 < size__4581__auto____$2)){
var map__60554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60552);
var map__60554__$1 = (((((!((map__60554 == null))))?(((((map__60554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60554):map__60554);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60553,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60552,i__60529,i__60522,map__60554,map__60554__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60553,s__60551__$2,temp__5735__auto____$3,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60552,i__60529,i__60522,map__60554,map__60554__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60553,s__60551__$2,temp__5735__auto____$3,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60652 = (i__60552 + (1));
i__60552 = G__60652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60553),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534_$_iter__60550(cljs.core.chunk_rest(s__60551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60553),null);
}
} else {
var map__60556 = cljs.core.first(s__60551__$2);
var map__60556__$1 = (((((!((map__60556 == null))))?(((((map__60556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60556):map__60556);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60529,i__60522,map__60556,map__60556__$1,title__$1,string,uid__$2,s__60551__$2,temp__5735__auto____$3,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60529,i__60522,map__60556,map__60556__$1,title__$1,string,uid__$2,s__60551__$2,temp__5735__auto____$3,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534_$_iter__60550(cljs.core.rest(s__60551__$2)));
}
} else {
return null;
}
break;
}
});})(i__60529,i__60522,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60529,i__60522,map__60548,map__60548__$1,block,uid__$1,parents,s__60535__$2,temp__5735__auto____$2,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60534(cljs.core.rest(s__60535__$2)));
}
} else {
return null;
}
break;
}
});})(i__60529,i__60522,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60529,i__60522,vec__60531,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__60530,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__60653 = (i__60529 + (1));
i__60529 = G__60653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60530),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527(cljs.core.chunk_rest(s__60528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60530),null);
}
} else {
var vec__60558 = cljs.core.first(s__60528__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60558,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60558,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60522,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__60522,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__60522,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561(s__60562){
return (new cljs.core.LazySeq(null,((function (i__60522,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60562__$1 = s__60562;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60562__$1);
if(temp__5735__auto____$2){
var s__60562__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60562__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60562__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60564 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60563 = (0);
while(true){
if((i__60563 < size__4581__auto____$1)){
var map__60565 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60563);
var map__60565__$1 = (((((!((map__60565 == null))))?(((((map__60565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60565):map__60565);
var block = map__60565__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60565__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60565__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60564,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60563,i__60522,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561_$_iter__60567(s__60568){
return (new cljs.core.LazySeq(null,((function (i__60563,i__60522,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60568__$1 = s__60568;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60568__$1);
if(temp__5735__auto____$3){
var s__60568__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60568__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60568__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60570 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60569 = (0);
while(true){
if((i__60569 < size__4581__auto____$2)){
var map__60571 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60569);
var map__60571__$1 = (((((!((map__60571 == null))))?(((((map__60571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60571):map__60571);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60571__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60570,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60569,i__60563,i__60522,map__60571,map__60571__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60570,s__60568__$2,temp__5735__auto____$3,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60569,i__60563,i__60522,map__60571,map__60571__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60570,s__60568__$2,temp__5735__auto____$3,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60654 = (i__60569 + (1));
i__60569 = G__60654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60570),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561_$_iter__60567(cljs.core.chunk_rest(s__60568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60570),null);
}
} else {
var map__60573 = cljs.core.first(s__60568__$2);
var map__60573__$1 = (((((!((map__60573 == null))))?(((((map__60573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60573):map__60573);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60563,i__60522,map__60573,map__60573__$1,title__$1,string,uid__$2,s__60568__$2,temp__5735__auto____$3,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60563,i__60522,map__60573,map__60573__$1,title__$1,string,uid__$2,s__60568__$2,temp__5735__auto____$3,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561_$_iter__60567(cljs.core.rest(s__60568__$2)));
}
} else {
return null;
}
break;
}
});})(i__60563,i__60522,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60563,i__60522,map__60565,map__60565__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60564,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60655 = (i__60563 + (1));
i__60563 = G__60655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60564),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561(cljs.core.chunk_rest(s__60562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60564),null);
}
} else {
var map__60575 = cljs.core.first(s__60562__$2);
var map__60575__$1 = (((((!((map__60575 == null))))?(((((map__60575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60575):map__60575);
var block = map__60575__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60575__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60575__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60522,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561_$_iter__60577(s__60578){
return (new cljs.core.LazySeq(null,((function (i__60522,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60578__$1 = s__60578;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60578__$1);
if(temp__5735__auto____$3){
var s__60578__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60578__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60578__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60580 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60579 = (0);
while(true){
if((i__60579 < size__4581__auto____$1)){
var map__60581 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60579);
var map__60581__$1 = (((((!((map__60581 == null))))?(((((map__60581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60581):map__60581);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60581__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60581__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60581__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60580,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60579,i__60522,map__60581,map__60581__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60580,s__60578__$2,temp__5735__auto____$3,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60579,i__60522,map__60581,map__60581__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60580,s__60578__$2,temp__5735__auto____$3,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60656 = (i__60579 + (1));
i__60579 = G__60656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60580),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561_$_iter__60577(cljs.core.chunk_rest(s__60578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60580),null);
}
} else {
var map__60583 = cljs.core.first(s__60578__$2);
var map__60583__$1 = (((((!((map__60583 == null))))?(((((map__60583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60583):map__60583);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60583__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60583__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60583__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60522,map__60583,map__60583__$1,title__$1,string,uid__$2,s__60578__$2,temp__5735__auto____$3,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60522,map__60583,map__60583__$1,title__$1,string,uid__$2,s__60578__$2,temp__5735__auto____$3,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561_$_iter__60577(cljs.core.rest(s__60578__$2)));
}
} else {
return null;
}
break;
}
});})(i__60522,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60522,map__60575,map__60575__$1,block,uid__$1,parents,s__60562__$2,temp__5735__auto____$2,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527_$_iter__60561(cljs.core.rest(s__60562__$2)));
}
} else {
return null;
}
break;
}
});})(i__60522,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60522,vec__60558,group_title,group,s__60528__$2,temp__5735__auto____$1,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60527(cljs.core.rest(s__60528__$2)));
}
} else {
return null;
}
break;
}
});})(i__60522,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60522,vec__60524,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__60523,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__60657 = (i__60522 + (1));
i__60522 = G__60657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60523),athens$views$node_page$node_page_el_$_iter__60520(cljs.core.chunk_rest(s__60521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60523),null);
}
} else {
var vec__60585 = cljs.core.first(s__60521__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60585,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60585,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588(s__60589){
return (new cljs.core.LazySeq(null,(function (){
var s__60589__$1 = s__60589;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60589__$1);
if(temp__5735__auto____$1){
var s__60589__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60589__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60589__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60591 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60590 = (0);
while(true){
if((i__60590 < size__4581__auto__)){
var vec__60592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60590);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60592,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60592,(1),null);
cljs.core.chunk_append(b__60591,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60590,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__60590,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__60590,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595(s__60596){
return (new cljs.core.LazySeq(null,((function (i__60590,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60596__$1 = s__60596;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60596__$1);
if(temp__5735__auto____$2){
var s__60596__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60596__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60596__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60598 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60597 = (0);
while(true){
if((i__60597 < size__4581__auto____$1)){
var map__60599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60597);
var map__60599__$1 = (((((!((map__60599 == null))))?(((((map__60599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60599):map__60599);
var block = map__60599__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60598,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60597,i__60590,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595_$_iter__60601(s__60602){
return (new cljs.core.LazySeq(null,((function (i__60597,i__60590,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60602__$1 = s__60602;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60602__$1);
if(temp__5735__auto____$3){
var s__60602__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60602__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__60602__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__60604 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__60603 = (0);
while(true){
if((i__60603 < size__4581__auto____$2)){
var map__60605 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__60603);
var map__60605__$1 = (((((!((map__60605 == null))))?(((((map__60605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60605):map__60605);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60604,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60603,i__60597,i__60590,map__60605,map__60605__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60604,s__60602__$2,temp__5735__auto____$3,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60603,i__60597,i__60590,map__60605,map__60605__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__60604,s__60602__$2,temp__5735__auto____$3,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60658 = (i__60603 + (1));
i__60603 = G__60658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60604),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595_$_iter__60601(cljs.core.chunk_rest(s__60602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60604),null);
}
} else {
var map__60607 = cljs.core.first(s__60602__$2);
var map__60607__$1 = (((((!((map__60607 == null))))?(((((map__60607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60607):map__60607);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60607__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60597,i__60590,map__60607,map__60607__$1,title__$1,string,uid__$2,s__60602__$2,temp__5735__auto____$3,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60597,i__60590,map__60607,map__60607__$1,title__$1,string,uid__$2,s__60602__$2,temp__5735__auto____$3,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595_$_iter__60601(cljs.core.rest(s__60602__$2)));
}
} else {
return null;
}
break;
}
});})(i__60597,i__60590,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60597,i__60590,map__60599,map__60599__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__60598,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60659 = (i__60597 + (1));
i__60597 = G__60659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60598),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595(cljs.core.chunk_rest(s__60596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60598),null);
}
} else {
var map__60609 = cljs.core.first(s__60596__$2);
var map__60609__$1 = (((((!((map__60609 == null))))?(((((map__60609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60609):map__60609);
var block = map__60609__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60609__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60590,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595_$_iter__60611(s__60612){
return (new cljs.core.LazySeq(null,((function (i__60590,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60612__$1 = s__60612;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60612__$1);
if(temp__5735__auto____$3){
var s__60612__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60612__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60612__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60614 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60613 = (0);
while(true){
if((i__60613 < size__4581__auto____$1)){
var map__60615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60613);
var map__60615__$1 = (((((!((map__60615 == null))))?(((((map__60615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60615):map__60615);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60614,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60613,i__60590,map__60615,map__60615__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60614,s__60612__$2,temp__5735__auto____$3,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60613,i__60590,map__60615,map__60615__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60614,s__60612__$2,temp__5735__auto____$3,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60660 = (i__60613 + (1));
i__60613 = G__60660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60614),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595_$_iter__60611(cljs.core.chunk_rest(s__60612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60614),null);
}
} else {
var map__60617 = cljs.core.first(s__60612__$2);
var map__60617__$1 = (((((!((map__60617 == null))))?(((((map__60617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60617):map__60617);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60590,map__60617,map__60617__$1,title__$1,string,uid__$2,s__60612__$2,temp__5735__auto____$3,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60590,map__60617,map__60617__$1,title__$1,string,uid__$2,s__60612__$2,temp__5735__auto____$3,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595_$_iter__60611(cljs.core.rest(s__60612__$2)));
}
} else {
return null;
}
break;
}
});})(i__60590,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60590,map__60609,map__60609__$1,block,uid__$1,parents,s__60596__$2,temp__5735__auto____$2,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60595(cljs.core.rest(s__60596__$2)));
}
} else {
return null;
}
break;
}
});})(i__60590,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60590,vec__60592,group_title,group,c__4580__auto__,size__4581__auto__,b__60591,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__60661 = (i__60590 + (1));
i__60590 = G__60661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60591),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588(cljs.core.chunk_rest(s__60589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60591),null);
}
} else {
var vec__60619 = cljs.core.first(s__60589__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60619,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60619,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622(s__60623){
return (new cljs.core.LazySeq(null,(function (){
var s__60623__$1 = s__60623;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__60623__$1);
if(temp__5735__auto____$2){
var s__60623__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60623__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60623__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60625 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60624 = (0);
while(true){
if((i__60624 < size__4581__auto__)){
var map__60626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60624);
var map__60626__$1 = (((((!((map__60626 == null))))?(((((map__60626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60626):map__60626);
var block = map__60626__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60626__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60626__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__60625,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__60624,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622_$_iter__60628(s__60629){
return (new cljs.core.LazySeq(null,((function (i__60624,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
var s__60629__$1 = s__60629;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60629__$1);
if(temp__5735__auto____$3){
var s__60629__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60629__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60629__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60631 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60630 = (0);
while(true){
if((i__60630 < size__4581__auto____$1)){
var map__60632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60630);
var map__60632__$1 = (((((!((map__60632 == null))))?(((((map__60632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60632):map__60632);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60632__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60632__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60632__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60631,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60630,i__60624,map__60632,map__60632__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60631,s__60629__$2,temp__5735__auto____$3,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60630,i__60624,map__60632,map__60632__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__60631,s__60629__$2,temp__5735__auto____$3,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60662 = (i__60630 + (1));
i__60630 = G__60662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60631),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622_$_iter__60628(cljs.core.chunk_rest(s__60629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60631),null);
}
} else {
var map__60634 = cljs.core.first(s__60629__$2);
var map__60634__$1 = (((((!((map__60634 == null))))?(((((map__60634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60634):map__60634);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60624,map__60634,map__60634__$1,title__$1,string,uid__$2,s__60629__$2,temp__5735__auto____$3,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60624,map__60634,map__60634__$1,title__$1,string,uid__$2,s__60629__$2,temp__5735__auto____$3,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622_$_iter__60628(cljs.core.rest(s__60629__$2)));
}
} else {
return null;
}
break;
}
});})(i__60624,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
,null,null));
});})(i__60624,map__60626,map__60626__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__60625,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__60663 = (i__60624 + (1));
i__60624 = G__60663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60625),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622(cljs.core.chunk_rest(s__60623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60625),null);
}
} else {
var map__60636 = cljs.core.first(s__60623__$2);
var map__60636__$1 = (((((!((map__60636 == null))))?(((((map__60636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60636):map__60636);
var block = map__60636__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60636__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60636__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__60636,map__60636__$1,block,uid__$1,parents,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622_$_iter__60638(s__60639){
return (new cljs.core.LazySeq(null,(function (){
var s__60639__$1 = s__60639;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__60639__$1);
if(temp__5735__auto____$3){
var s__60639__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60639__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60639__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60641 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60640 = (0);
while(true){
if((i__60640 < size__4581__auto__)){
var map__60642 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60640);
var map__60642__$1 = (((((!((map__60642 == null))))?(((((map__60642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60642):map__60642);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60642__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__60641,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60640,map__60642,map__60642__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__60641,s__60639__$2,temp__5735__auto____$3,map__60636,map__60636__$1,block,uid__$1,parents,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__60640,map__60642,map__60642__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__60641,s__60639__$2,temp__5735__auto____$3,map__60636,map__60636__$1,block,uid__$1,parents,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__60664 = (i__60640 + (1));
i__60640 = G__60664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60641),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622_$_iter__60638(cljs.core.chunk_rest(s__60639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60641),null);
}
} else {
var map__60644 = cljs.core.first(s__60639__$2);
var map__60644__$1 = (((((!((map__60644 == null))))?(((((map__60644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60644):map__60644);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60644__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60644__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60644__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__60644,map__60644__$1,title__$1,string,uid__$2,s__60639__$2,temp__5735__auto____$3,map__60636,map__60636__$1,block,uid__$1,parents,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__60644,map__60644__$1,title__$1,string,uid__$2,s__60639__$2,temp__5735__auto____$3,map__60636,map__60636__$1,block,uid__$1,parents,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622_$_iter__60638(cljs.core.rest(s__60639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__60636,map__60636__$1,block,uid__$1,parents,s__60623__$2,temp__5735__auto____$2,vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588_$_iter__60622(cljs.core.rest(s__60623__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60619,group_title,group,s__60589__$2,temp__5735__auto____$1,vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__60520_$_iter__60588(cljs.core.rest(s__60589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60585,linked_or_unlinked,refs,s__60521__$2,temp__5735__auto__,map__60508,map__60508__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__60520(cljs.core.rest(s__60521__$2)));
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
var map__60646 = athens.db.get_node_document(ident);
var map__60646__$1 = (((((!((map__60646 == null))))?(((((map__60646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60646):map__60646);
var node = map__60646__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60646__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60646__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__60648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60648) : re_frame.core.subscribe.call(null,G__60648));
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
