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
var G__58078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58078) : re_frame.core.dispatch.call(null,G__58078));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58079 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58080 = athens.db.dsdb;
var G__58081 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58079,G__58080,G__58081) : posh.reagent.q.call(null,G__58079,G__58080,G__58081));
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
return cljs.core.boolean$((function (){try{var vec__58083 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58082){if((e58082 instanceof Object)){
var _ = e58082;
return false;
} else {
throw e58082;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58086,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58087 = p__58086;
var map__58087__$1 = (((((!((map__58087 == null))))?(((((map__58087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58087):map__58087);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58089 = e.target.value;
var G__58090 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58089,G__58090) : athens.views.node_page.db_handler.call(null,G__58089,G__58090));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58091(s__58092){
return (new cljs.core.LazySeq(null,(function (){
var s__58092__$1 = s__58092;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58092__$1);
if(temp__5735__auto__){
var s__58092__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58092__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58092__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58094 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58093 = (0);
while(true){
if((i__58093 < size__4581__auto__)){
var map__58095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58093);
var map__58095__$1 = (((((!((map__58095 == null))))?(((((map__58095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58095):map__58095);
var child = map__58095__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58095__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58094,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58228 = (i__58093 + (1));
i__58093 = G__58228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58094),athens$views$node_page$node_page_el_$_iter__58091(cljs.core.chunk_rest(s__58092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58094),null);
}
} else {
var map__58097 = cljs.core.first(s__58092__$2);
var map__58097__$1 = (((((!((map__58097 == null))))?(((((map__58097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58097):map__58097);
var child = map__58097__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58091(cljs.core.rest(s__58092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58099(s__58100){
return (new cljs.core.LazySeq(null,(function (){
var s__58100__$1 = s__58100;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58100__$1);
if(temp__5735__auto__){
var s__58100__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58100__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58100__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58102 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58101 = (0);
while(true){
if((i__58101 < size__4581__auto__)){
var vec__58103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58101);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103,(1),null);
cljs.core.chunk_append(b__58102,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58101,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106(s__58107){
return (new cljs.core.LazySeq(null,((function (i__58101,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58107__$1 = s__58107;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58107__$1);
if(temp__5735__auto____$1){
var s__58107__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58107__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58107__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58109 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58108 = (0);
while(true){
if((i__58108 < size__4581__auto____$1)){
var vec__58110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58108);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58110,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58110,(1),null);
cljs.core.chunk_append(b__58109,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58108,i__58101,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58108,i__58101,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58108,i__58101,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113(s__58114){
return (new cljs.core.LazySeq(null,((function (i__58108,i__58101,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58114__$1 = s__58114;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58114__$1);
if(temp__5735__auto____$2){
var s__58114__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58114__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58114__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58116 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58115 = (0);
while(true){
if((i__58115 < size__4581__auto____$2)){
var map__58117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58115);
var map__58117__$1 = (((((!((map__58117 == null))))?(((((map__58117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58117):map__58117);
var block = map__58117__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58117__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58117__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58116,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58115,i__58108,i__58101,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113_$_iter__58119(s__58120){
return (new cljs.core.LazySeq(null,((function (i__58115,i__58108,i__58101,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58120__$1 = s__58120;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58120__$1);
if(temp__5735__auto____$3){
var s__58120__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58120__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58120__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58122 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58121 = (0);
while(true){
if((i__58121 < size__4581__auto____$3)){
var map__58123 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58121);
var map__58123__$1 = (((((!((map__58123 == null))))?(((((map__58123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58123):map__58123);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58122,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58121,i__58115,i__58108,i__58101,map__58123,map__58123__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58122,s__58120__$2,temp__5735__auto____$3,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58121,i__58115,i__58108,i__58101,map__58123,map__58123__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58122,s__58120__$2,temp__5735__auto____$3,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58229 = (i__58121 + (1));
i__58121 = G__58229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58122),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113_$_iter__58119(cljs.core.chunk_rest(s__58120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58122),null);
}
} else {
var map__58125 = cljs.core.first(s__58120__$2);
var map__58125__$1 = (((((!((map__58125 == null))))?(((((map__58125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58125):map__58125);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58125__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58125__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58125__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58115,i__58108,i__58101,map__58125,map__58125__$1,title__$1,string,uid__$2,s__58120__$2,temp__5735__auto____$3,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58115,i__58108,i__58101,map__58125,map__58125__$1,title__$1,string,uid__$2,s__58120__$2,temp__5735__auto____$3,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113_$_iter__58119(cljs.core.rest(s__58120__$2)));
}
} else {
return null;
}
break;
}
});})(i__58115,i__58108,i__58101,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58115,i__58108,i__58101,map__58117,map__58117__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58116,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58230 = (i__58115 + (1));
i__58115 = G__58230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113(cljs.core.chunk_rest(s__58114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),null);
}
} else {
var map__58127 = cljs.core.first(s__58114__$2);
var map__58127__$1 = (((((!((map__58127 == null))))?(((((map__58127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58127):map__58127);
var block = map__58127__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58108,i__58101,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113_$_iter__58129(s__58130){
return (new cljs.core.LazySeq(null,((function (i__58108,i__58101,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58130__$1 = s__58130;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58130__$1);
if(temp__5735__auto____$3){
var s__58130__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58130__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58130__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58132 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58131 = (0);
while(true){
if((i__58131 < size__4581__auto____$2)){
var map__58133 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58131);
var map__58133__$1 = (((((!((map__58133 == null))))?(((((map__58133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58133):map__58133);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58132,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58131,i__58108,i__58101,map__58133,map__58133__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58132,s__58130__$2,temp__5735__auto____$3,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58131,i__58108,i__58101,map__58133,map__58133__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58132,s__58130__$2,temp__5735__auto____$3,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58231 = (i__58131 + (1));
i__58131 = G__58231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58132),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113_$_iter__58129(cljs.core.chunk_rest(s__58130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58132),null);
}
} else {
var map__58135 = cljs.core.first(s__58130__$2);
var map__58135__$1 = (((((!((map__58135 == null))))?(((((map__58135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58135):map__58135);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58135__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58108,i__58101,map__58135,map__58135__$1,title__$1,string,uid__$2,s__58130__$2,temp__5735__auto____$3,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58108,i__58101,map__58135,map__58135__$1,title__$1,string,uid__$2,s__58130__$2,temp__5735__auto____$3,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113_$_iter__58129(cljs.core.rest(s__58130__$2)));
}
} else {
return null;
}
break;
}
});})(i__58108,i__58101,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58108,i__58101,map__58127,map__58127__$1,block,uid__$1,parents,s__58114__$2,temp__5735__auto____$2,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58113(cljs.core.rest(s__58114__$2)));
}
} else {
return null;
}
break;
}
});})(i__58108,i__58101,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58108,i__58101,vec__58110,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58109,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58232 = (i__58108 + (1));
i__58108 = G__58232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58109),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106(cljs.core.chunk_rest(s__58107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58109),null);
}
} else {
var vec__58137 = cljs.core.first(s__58107__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58137,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58137,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58101,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58101,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58101,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140(s__58141){
return (new cljs.core.LazySeq(null,((function (i__58101,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58141__$1 = s__58141;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58141__$1);
if(temp__5735__auto____$2){
var s__58141__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58141__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58141__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58143 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58142 = (0);
while(true){
if((i__58142 < size__4581__auto____$1)){
var map__58144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58142);
var map__58144__$1 = (((((!((map__58144 == null))))?(((((map__58144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58144):map__58144);
var block = map__58144__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58143,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58142,i__58101,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140_$_iter__58146(s__58147){
return (new cljs.core.LazySeq(null,((function (i__58142,i__58101,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58147__$1 = s__58147;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58147__$1);
if(temp__5735__auto____$3){
var s__58147__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58147__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58147__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58149 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58148 = (0);
while(true){
if((i__58148 < size__4581__auto____$2)){
var map__58150 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58148);
var map__58150__$1 = (((((!((map__58150 == null))))?(((((map__58150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58150):map__58150);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58150__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58150__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58150__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58149,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58148,i__58142,i__58101,map__58150,map__58150__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58149,s__58147__$2,temp__5735__auto____$3,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58148,i__58142,i__58101,map__58150,map__58150__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58149,s__58147__$2,temp__5735__auto____$3,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58233 = (i__58148 + (1));
i__58148 = G__58233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58149),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140_$_iter__58146(cljs.core.chunk_rest(s__58147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58149),null);
}
} else {
var map__58152 = cljs.core.first(s__58147__$2);
var map__58152__$1 = (((((!((map__58152 == null))))?(((((map__58152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58152):map__58152);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58152__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58142,i__58101,map__58152,map__58152__$1,title__$1,string,uid__$2,s__58147__$2,temp__5735__auto____$3,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58142,i__58101,map__58152,map__58152__$1,title__$1,string,uid__$2,s__58147__$2,temp__5735__auto____$3,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140_$_iter__58146(cljs.core.rest(s__58147__$2)));
}
} else {
return null;
}
break;
}
});})(i__58142,i__58101,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58142,i__58101,map__58144,map__58144__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58143,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58234 = (i__58142 + (1));
i__58142 = G__58234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58143),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140(cljs.core.chunk_rest(s__58141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58143),null);
}
} else {
var map__58154 = cljs.core.first(s__58141__$2);
var map__58154__$1 = (((((!((map__58154 == null))))?(((((map__58154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58154):map__58154);
var block = map__58154__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58154__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58101,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140_$_iter__58156(s__58157){
return (new cljs.core.LazySeq(null,((function (i__58101,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58157__$1 = s__58157;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58157__$1);
if(temp__5735__auto____$3){
var s__58157__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58157__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58157__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58159 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58158 = (0);
while(true){
if((i__58158 < size__4581__auto____$1)){
var map__58160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58158);
var map__58160__$1 = (((((!((map__58160 == null))))?(((((map__58160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58160):map__58160);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58158,i__58101,map__58160,map__58160__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58159,s__58157__$2,temp__5735__auto____$3,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58158,i__58101,map__58160,map__58160__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58159,s__58157__$2,temp__5735__auto____$3,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58235 = (i__58158 + (1));
i__58158 = G__58235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58159),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140_$_iter__58156(cljs.core.chunk_rest(s__58157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58159),null);
}
} else {
var map__58162 = cljs.core.first(s__58157__$2);
var map__58162__$1 = (((((!((map__58162 == null))))?(((((map__58162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58162):map__58162);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58101,map__58162,map__58162__$1,title__$1,string,uid__$2,s__58157__$2,temp__5735__auto____$3,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58101,map__58162,map__58162__$1,title__$1,string,uid__$2,s__58157__$2,temp__5735__auto____$3,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140_$_iter__58156(cljs.core.rest(s__58157__$2)));
}
} else {
return null;
}
break;
}
});})(i__58101,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58101,map__58154,map__58154__$1,block,uid__$1,parents,s__58141__$2,temp__5735__auto____$2,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106_$_iter__58140(cljs.core.rest(s__58141__$2)));
}
} else {
return null;
}
break;
}
});})(i__58101,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58101,vec__58137,group_title,group,s__58107__$2,temp__5735__auto____$1,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58106(cljs.core.rest(s__58107__$2)));
}
} else {
return null;
}
break;
}
});})(i__58101,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58101,vec__58103,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58102,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58236 = (i__58101 + (1));
i__58101 = G__58236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58102),athens$views$node_page$node_page_el_$_iter__58099(cljs.core.chunk_rest(s__58100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58102),null);
}
} else {
var vec__58164 = cljs.core.first(s__58100__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58164,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58164,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167(s__58168){
return (new cljs.core.LazySeq(null,(function (){
var s__58168__$1 = s__58168;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58168__$1);
if(temp__5735__auto____$1){
var s__58168__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58168__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58168__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58170 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58169 = (0);
while(true){
if((i__58169 < size__4581__auto__)){
var vec__58171 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58169);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171,(1),null);
cljs.core.chunk_append(b__58170,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58169,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58169,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58169,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174(s__58175){
return (new cljs.core.LazySeq(null,((function (i__58169,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58175__$1 = s__58175;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58175__$1);
if(temp__5735__auto____$2){
var s__58175__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58175__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58175__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58177 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58176 = (0);
while(true){
if((i__58176 < size__4581__auto____$1)){
var map__58178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58176);
var map__58178__$1 = (((((!((map__58178 == null))))?(((((map__58178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58178):map__58178);
var block = map__58178__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58177,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58176,i__58169,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174_$_iter__58180(s__58181){
return (new cljs.core.LazySeq(null,((function (i__58176,i__58169,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58181__$1 = s__58181;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58181__$1);
if(temp__5735__auto____$3){
var s__58181__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58181__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58181__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58183 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58182 = (0);
while(true){
if((i__58182 < size__4581__auto____$2)){
var map__58184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58182);
var map__58184__$1 = (((((!((map__58184 == null))))?(((((map__58184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58184):map__58184);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58183,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58182,i__58176,i__58169,map__58184,map__58184__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58183,s__58181__$2,temp__5735__auto____$3,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58182,i__58176,i__58169,map__58184,map__58184__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58183,s__58181__$2,temp__5735__auto____$3,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58237 = (i__58182 + (1));
i__58182 = G__58237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58183),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174_$_iter__58180(cljs.core.chunk_rest(s__58181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58183),null);
}
} else {
var map__58186 = cljs.core.first(s__58181__$2);
var map__58186__$1 = (((((!((map__58186 == null))))?(((((map__58186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58186):map__58186);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58176,i__58169,map__58186,map__58186__$1,title__$1,string,uid__$2,s__58181__$2,temp__5735__auto____$3,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58176,i__58169,map__58186,map__58186__$1,title__$1,string,uid__$2,s__58181__$2,temp__5735__auto____$3,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174_$_iter__58180(cljs.core.rest(s__58181__$2)));
}
} else {
return null;
}
break;
}
});})(i__58176,i__58169,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58176,i__58169,map__58178,map__58178__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58177,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58238 = (i__58176 + (1));
i__58176 = G__58238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58177),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174(cljs.core.chunk_rest(s__58175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58177),null);
}
} else {
var map__58188 = cljs.core.first(s__58175__$2);
var map__58188__$1 = (((((!((map__58188 == null))))?(((((map__58188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58188):map__58188);
var block = map__58188__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58169,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174_$_iter__58190(s__58191){
return (new cljs.core.LazySeq(null,((function (i__58169,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58191__$1 = s__58191;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58191__$1);
if(temp__5735__auto____$3){
var s__58191__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58191__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58191__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58193 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58192 = (0);
while(true){
if((i__58192 < size__4581__auto____$1)){
var map__58194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58192);
var map__58194__$1 = (((((!((map__58194 == null))))?(((((map__58194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58194):map__58194);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58193,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58192,i__58169,map__58194,map__58194__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58193,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58192,i__58169,map__58194,map__58194__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58193,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58239 = (i__58192 + (1));
i__58192 = G__58239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58193),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174_$_iter__58190(cljs.core.chunk_rest(s__58191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58193),null);
}
} else {
var map__58196 = cljs.core.first(s__58191__$2);
var map__58196__$1 = (((((!((map__58196 == null))))?(((((map__58196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58196):map__58196);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58169,map__58196,map__58196__$1,title__$1,string,uid__$2,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58169,map__58196,map__58196__$1,title__$1,string,uid__$2,s__58191__$2,temp__5735__auto____$3,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174_$_iter__58190(cljs.core.rest(s__58191__$2)));
}
} else {
return null;
}
break;
}
});})(i__58169,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58169,map__58188,map__58188__$1,block,uid__$1,parents,s__58175__$2,temp__5735__auto____$2,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58174(cljs.core.rest(s__58175__$2)));
}
} else {
return null;
}
break;
}
});})(i__58169,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58169,vec__58171,group_title,group,c__4580__auto__,size__4581__auto__,b__58170,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58240 = (i__58169 + (1));
i__58169 = G__58240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58170),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167(cljs.core.chunk_rest(s__58168__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58170),null);
}
} else {
var vec__58198 = cljs.core.first(s__58168__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58198,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58198,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201(s__58202){
return (new cljs.core.LazySeq(null,(function (){
var s__58202__$1 = s__58202;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58202__$1);
if(temp__5735__auto____$2){
var s__58202__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58202__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58202__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58204 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58203 = (0);
while(true){
if((i__58203 < size__4581__auto__)){
var map__58205 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58203);
var map__58205__$1 = (((((!((map__58205 == null))))?(((((map__58205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58205):map__58205);
var block = map__58205__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58204,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58203,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201_$_iter__58207(s__58208){
return (new cljs.core.LazySeq(null,((function (i__58203,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
var s__58208__$1 = s__58208;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58208__$1);
if(temp__5735__auto____$3){
var s__58208__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58208__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58208__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58210 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58209 = (0);
while(true){
if((i__58209 < size__4581__auto____$1)){
var map__58211 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58209);
var map__58211__$1 = (((((!((map__58211 == null))))?(((((map__58211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58211):map__58211);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58210,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58209,i__58203,map__58211,map__58211__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58210,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58209,i__58203,map__58211,map__58211__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58210,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58241 = (i__58209 + (1));
i__58209 = G__58241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58210),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201_$_iter__58207(cljs.core.chunk_rest(s__58208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58210),null);
}
} else {
var map__58213 = cljs.core.first(s__58208__$2);
var map__58213__$1 = (((((!((map__58213 == null))))?(((((map__58213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58213):map__58213);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58203,map__58213,map__58213__$1,title__$1,string,uid__$2,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58203,map__58213,map__58213__$1,title__$1,string,uid__$2,s__58208__$2,temp__5735__auto____$3,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201_$_iter__58207(cljs.core.rest(s__58208__$2)));
}
} else {
return null;
}
break;
}
});})(i__58203,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
,null,null));
});})(i__58203,map__58205,map__58205__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58204,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58242 = (i__58203 + (1));
i__58203 = G__58242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58204),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201(cljs.core.chunk_rest(s__58202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58204),null);
}
} else {
var map__58215 = cljs.core.first(s__58202__$2);
var map__58215__$1 = (((((!((map__58215 == null))))?(((((map__58215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58215):map__58215);
var block = map__58215__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58215,map__58215__$1,block,uid__$1,parents,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201_$_iter__58217(s__58218){
return (new cljs.core.LazySeq(null,(function (){
var s__58218__$1 = s__58218;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58218__$1);
if(temp__5735__auto____$3){
var s__58218__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58218__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58218__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58220 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58219 = (0);
while(true){
if((i__58219 < size__4581__auto__)){
var map__58221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58219);
var map__58221__$1 = (((((!((map__58221 == null))))?(((((map__58221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58221):map__58221);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58220,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58219,map__58221,map__58221__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58220,s__58218__$2,temp__5735__auto____$3,map__58215,map__58215__$1,block,uid__$1,parents,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58219,map__58221,map__58221__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58220,s__58218__$2,temp__5735__auto____$3,map__58215,map__58215__$1,block,uid__$1,parents,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58243 = (i__58219 + (1));
i__58219 = G__58243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58220),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201_$_iter__58217(cljs.core.chunk_rest(s__58218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58220),null);
}
} else {
var map__58223 = cljs.core.first(s__58218__$2);
var map__58223__$1 = (((((!((map__58223 == null))))?(((((map__58223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58223):map__58223);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58223,map__58223__$1,title__$1,string,uid__$2,s__58218__$2,temp__5735__auto____$3,map__58215,map__58215__$1,block,uid__$1,parents,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58223,map__58223__$1,title__$1,string,uid__$2,s__58218__$2,temp__5735__auto____$3,map__58215,map__58215__$1,block,uid__$1,parents,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201_$_iter__58217(cljs.core.rest(s__58218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58215,map__58215__$1,block,uid__$1,parents,s__58202__$2,temp__5735__auto____$2,vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167_$_iter__58201(cljs.core.rest(s__58202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58198,group_title,group,s__58168__$2,temp__5735__auto____$1,vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58099_$_iter__58167(cljs.core.rest(s__58168__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58164,linked_or_unlinked,refs,s__58100__$2,temp__5735__auto__,map__58087,map__58087__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58099(cljs.core.rest(s__58100__$2)));
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
var map__58225 = athens.db.get_node_document(ident);
var map__58225__$1 = (((((!((map__58225 == null))))?(((((map__58225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58225):map__58225);
var node = map__58225__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58227) : re_frame.core.subscribe.call(null,G__58227));
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
