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
var G__55714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55714) : re_frame.core.dispatch.call(null,G__55714));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__55715 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__55716 = athens.db.dsdb;
var G__55717 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__55715,G__55716,G__55717) : posh.reagent.q.call(null,G__55715,G__55716,G__55717));
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
return cljs.core.boolean$((function (){try{var vec__55719 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55719,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55719,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55719,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e55718){if((e55718 instanceof Object)){
var _ = e55718;
return false;
} else {
throw e55718;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__55722,editing_uid,ref_groups,timeline_page_QMARK_){
var map__55723 = p__55722;
var map__55723__$1 = (((((!((map__55723 == null))))?(((((map__55723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55723):map__55723);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55723__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55723__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55723__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__55725 = e.target.value;
var G__55726 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__55725,G__55726) : athens.views.node_page.db_handler.call(null,G__55725,G__55726));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__55727(s__55728){
return (new cljs.core.LazySeq(null,(function (){
var s__55728__$1 = s__55728;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55728__$1);
if(temp__5735__auto__){
var s__55728__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55728__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55728__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55730 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55729 = (0);
while(true){
if((i__55729 < size__4581__auto__)){
var map__55731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55729);
var map__55731__$1 = (((((!((map__55731 == null))))?(((((map__55731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55731):map__55731);
var child = map__55731__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55731__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55730,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__55866 = (i__55729 + (1));
i__55729 = G__55866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55730),athens$views$node_page$node_page_el_$_iter__55727(cljs.core.chunk_rest(s__55728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55730),null);
}
} else {
var map__55733 = cljs.core.first(s__55728__$2);
var map__55733__$1 = (((((!((map__55733 == null))))?(((((map__55733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55733):map__55733);
var child = map__55733__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__55727(cljs.core.rest(s__55728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__55735(s__55736){
return (new cljs.core.LazySeq(null,(function (){
var s__55736__$1 = s__55736;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55736__$1);
if(temp__5735__auto__){
var s__55736__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55736__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55736__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55738 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55737 = (0);
while(true){
if((i__55737 < size__4581__auto__)){
var vec__55739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55737);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55739,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55739,(1),null);
cljs.core.chunk_append(b__55738,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__55737,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742(s__55743){
return (new cljs.core.LazySeq(null,((function (i__55737,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55743__$1 = s__55743;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55743__$1);
if(temp__5735__auto____$1){
var s__55743__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55743__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55743__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55745 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55744 = (0);
while(true){
if((i__55744 < size__4581__auto____$1)){
var vec__55746 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55744);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55746,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55746,(1),null);
cljs.core.chunk_append(b__55745,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55744,i__55737,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55744,i__55737,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__55744,i__55737,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749(s__55750){
return (new cljs.core.LazySeq(null,((function (i__55744,i__55737,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55750__$1 = s__55750;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55750__$1);
if(temp__5735__auto____$2){
var s__55750__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55750__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55750__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55752 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55751 = (0);
while(true){
if((i__55751 < size__4581__auto____$2)){
var map__55753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55751);
var map__55753__$1 = (((((!((map__55753 == null))))?(((((map__55753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55753):map__55753);
var block = map__55753__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55753__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55753__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55752,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55751,i__55744,i__55737,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749_$_iter__55755(s__55756){
return (new cljs.core.LazySeq(null,((function (i__55751,i__55744,i__55737,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55756__$1 = s__55756;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55756__$1);
if(temp__5735__auto____$3){
var s__55756__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55756__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__55756__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__55758 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__55757 = (0);
while(true){
if((i__55757 < size__4581__auto____$3)){
var map__55759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__55757);
var map__55759__$1 = (((((!((map__55759 == null))))?(((((map__55759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55759):map__55759);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55759__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55759__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55759__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55758,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55757,i__55751,i__55744,i__55737,map__55759,map__55759__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__55758,s__55756__$2,temp__5735__auto____$3,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55757,i__55751,i__55744,i__55737,map__55759,map__55759__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__55758,s__55756__$2,temp__5735__auto____$3,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55869 = (i__55757 + (1));
i__55757 = G__55869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55758),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749_$_iter__55755(cljs.core.chunk_rest(s__55756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55758),null);
}
} else {
var map__55761 = cljs.core.first(s__55756__$2);
var map__55761__$1 = (((((!((map__55761 == null))))?(((((map__55761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55761):map__55761);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55761__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55761__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55761__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55751,i__55744,i__55737,map__55761,map__55761__$1,title__$1,string,uid__$2,s__55756__$2,temp__5735__auto____$3,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55751,i__55744,i__55737,map__55761,map__55761__$1,title__$1,string,uid__$2,s__55756__$2,temp__5735__auto____$3,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749_$_iter__55755(cljs.core.rest(s__55756__$2)));
}
} else {
return null;
}
break;
}
});})(i__55751,i__55744,i__55737,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55751,i__55744,i__55737,map__55753,map__55753__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__55752,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55872 = (i__55751 + (1));
i__55751 = G__55872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55752),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749(cljs.core.chunk_rest(s__55750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55752),null);
}
} else {
var map__55763 = cljs.core.first(s__55750__$2);
var map__55763__$1 = (((((!((map__55763 == null))))?(((((map__55763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55763):map__55763);
var block = map__55763__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55763__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55763__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55744,i__55737,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749_$_iter__55765(s__55766){
return (new cljs.core.LazySeq(null,((function (i__55744,i__55737,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55766__$1 = s__55766;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55766__$1);
if(temp__5735__auto____$3){
var s__55766__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55766__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55766__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55768 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55767 = (0);
while(true){
if((i__55767 < size__4581__auto____$2)){
var map__55769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55767);
var map__55769__$1 = (((((!((map__55769 == null))))?(((((map__55769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55769):map__55769);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55768,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55767,i__55744,i__55737,map__55769,map__55769__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55768,s__55766__$2,temp__5735__auto____$3,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55767,i__55744,i__55737,map__55769,map__55769__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55768,s__55766__$2,temp__5735__auto____$3,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55873 = (i__55767 + (1));
i__55767 = G__55873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55768),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749_$_iter__55765(cljs.core.chunk_rest(s__55766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55768),null);
}
} else {
var map__55771 = cljs.core.first(s__55766__$2);
var map__55771__$1 = (((((!((map__55771 == null))))?(((((map__55771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55771):map__55771);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55771__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55771__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55771__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55744,i__55737,map__55771,map__55771__$1,title__$1,string,uid__$2,s__55766__$2,temp__5735__auto____$3,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55744,i__55737,map__55771,map__55771__$1,title__$1,string,uid__$2,s__55766__$2,temp__5735__auto____$3,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749_$_iter__55765(cljs.core.rest(s__55766__$2)));
}
} else {
return null;
}
break;
}
});})(i__55744,i__55737,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55744,i__55737,map__55763,map__55763__$1,block,uid__$1,parents,s__55750__$2,temp__5735__auto____$2,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55749(cljs.core.rest(s__55750__$2)));
}
} else {
return null;
}
break;
}
});})(i__55744,i__55737,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55744,i__55737,vec__55746,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__55745,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__55884 = (i__55744 + (1));
i__55744 = G__55884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55745),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742(cljs.core.chunk_rest(s__55743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55745),null);
}
} else {
var vec__55773 = cljs.core.first(s__55743__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55773,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55773,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55737,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55737,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__55737,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776(s__55777){
return (new cljs.core.LazySeq(null,((function (i__55737,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55777__$1 = s__55777;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55777__$1);
if(temp__5735__auto____$2){
var s__55777__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55777__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55777__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55779 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55778 = (0);
while(true){
if((i__55778 < size__4581__auto____$1)){
var map__55780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55778);
var map__55780__$1 = (((((!((map__55780 == null))))?(((((map__55780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55780):map__55780);
var block = map__55780__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55780__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55780__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55779,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55778,i__55737,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776_$_iter__55782(s__55783){
return (new cljs.core.LazySeq(null,((function (i__55778,i__55737,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55783__$1 = s__55783;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55783__$1);
if(temp__5735__auto____$3){
var s__55783__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55783__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55783__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55785 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55784 = (0);
while(true){
if((i__55784 < size__4581__auto____$2)){
var map__55786 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55784);
var map__55786__$1 = (((((!((map__55786 == null))))?(((((map__55786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55786):map__55786);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55786__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55786__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55786__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55785,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55784,i__55778,i__55737,map__55786,map__55786__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55785,s__55783__$2,temp__5735__auto____$3,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55784,i__55778,i__55737,map__55786,map__55786__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55785,s__55783__$2,temp__5735__auto____$3,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55889 = (i__55784 + (1));
i__55784 = G__55889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55785),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776_$_iter__55782(cljs.core.chunk_rest(s__55783__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55785),null);
}
} else {
var map__55788 = cljs.core.first(s__55783__$2);
var map__55788__$1 = (((((!((map__55788 == null))))?(((((map__55788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55788):map__55788);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55788__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55788__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55788__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55778,i__55737,map__55788,map__55788__$1,title__$1,string,uid__$2,s__55783__$2,temp__5735__auto____$3,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55778,i__55737,map__55788,map__55788__$1,title__$1,string,uid__$2,s__55783__$2,temp__5735__auto____$3,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776_$_iter__55782(cljs.core.rest(s__55783__$2)));
}
} else {
return null;
}
break;
}
});})(i__55778,i__55737,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55778,i__55737,map__55780,map__55780__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55779,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55890 = (i__55778 + (1));
i__55778 = G__55890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55779),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776(cljs.core.chunk_rest(s__55777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55779),null);
}
} else {
var map__55790 = cljs.core.first(s__55777__$2);
var map__55790__$1 = (((((!((map__55790 == null))))?(((((map__55790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55790):map__55790);
var block = map__55790__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55737,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776_$_iter__55792(s__55793){
return (new cljs.core.LazySeq(null,((function (i__55737,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55793__$1 = s__55793;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55793__$1);
if(temp__5735__auto____$3){
var s__55793__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55793__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55793__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55795 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55794 = (0);
while(true){
if((i__55794 < size__4581__auto____$1)){
var map__55796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55794);
var map__55796__$1 = (((((!((map__55796 == null))))?(((((map__55796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55796):map__55796);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55796__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55796__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55796__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55795,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55794,i__55737,map__55796,map__55796__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55795,s__55793__$2,temp__5735__auto____$3,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55794,i__55737,map__55796,map__55796__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55795,s__55793__$2,temp__5735__auto____$3,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55892 = (i__55794 + (1));
i__55794 = G__55892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55795),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776_$_iter__55792(cljs.core.chunk_rest(s__55793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55795),null);
}
} else {
var map__55798 = cljs.core.first(s__55793__$2);
var map__55798__$1 = (((((!((map__55798 == null))))?(((((map__55798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55798):map__55798);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55798__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55798__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55798__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55737,map__55798,map__55798__$1,title__$1,string,uid__$2,s__55793__$2,temp__5735__auto____$3,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55737,map__55798,map__55798__$1,title__$1,string,uid__$2,s__55793__$2,temp__5735__auto____$3,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776_$_iter__55792(cljs.core.rest(s__55793__$2)));
}
} else {
return null;
}
break;
}
});})(i__55737,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55737,map__55790,map__55790__$1,block,uid__$1,parents,s__55777__$2,temp__5735__auto____$2,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742_$_iter__55776(cljs.core.rest(s__55777__$2)));
}
} else {
return null;
}
break;
}
});})(i__55737,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55737,vec__55773,group_title,group,s__55743__$2,temp__5735__auto____$1,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55742(cljs.core.rest(s__55743__$2)));
}
} else {
return null;
}
break;
}
});})(i__55737,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55737,vec__55739,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__55738,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__55893 = (i__55737 + (1));
i__55737 = G__55893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55738),athens$views$node_page$node_page_el_$_iter__55735(cljs.core.chunk_rest(s__55736__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55738),null);
}
} else {
var vec__55800 = cljs.core.first(s__55736__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55800,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55800,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803(s__55804){
return (new cljs.core.LazySeq(null,(function (){
var s__55804__$1 = s__55804;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55804__$1);
if(temp__5735__auto____$1){
var s__55804__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55804__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55804__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55806 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55805 = (0);
while(true){
if((i__55805 < size__4581__auto__)){
var vec__55807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55805);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55807,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55807,(1),null);
cljs.core.chunk_append(b__55806,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55805,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55805,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__55805,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810(s__55811){
return (new cljs.core.LazySeq(null,((function (i__55805,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55811__$1 = s__55811;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55811__$1);
if(temp__5735__auto____$2){
var s__55811__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55811__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55811__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55813 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55812 = (0);
while(true){
if((i__55812 < size__4581__auto____$1)){
var map__55814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55812);
var map__55814__$1 = (((((!((map__55814 == null))))?(((((map__55814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55814):map__55814);
var block = map__55814__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55813,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55812,i__55805,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810_$_iter__55816(s__55817){
return (new cljs.core.LazySeq(null,((function (i__55812,i__55805,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55817__$1 = s__55817;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55817__$1);
if(temp__5735__auto____$3){
var s__55817__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55817__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__55817__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__55819 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__55818 = (0);
while(true){
if((i__55818 < size__4581__auto____$2)){
var map__55820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__55818);
var map__55820__$1 = (((((!((map__55820 == null))))?(((((map__55820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55820):map__55820);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55820__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55819,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55818,i__55812,i__55805,map__55820,map__55820__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55819,s__55817__$2,temp__5735__auto____$3,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55818,i__55812,i__55805,map__55820,map__55820__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__55819,s__55817__$2,temp__5735__auto____$3,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55895 = (i__55818 + (1));
i__55818 = G__55895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55819),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810_$_iter__55816(cljs.core.chunk_rest(s__55817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55819),null);
}
} else {
var map__55822 = cljs.core.first(s__55817__$2);
var map__55822__$1 = (((((!((map__55822 == null))))?(((((map__55822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55822):map__55822);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55822__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55822__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55822__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55812,i__55805,map__55822,map__55822__$1,title__$1,string,uid__$2,s__55817__$2,temp__5735__auto____$3,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55812,i__55805,map__55822,map__55822__$1,title__$1,string,uid__$2,s__55817__$2,temp__5735__auto____$3,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810_$_iter__55816(cljs.core.rest(s__55817__$2)));
}
} else {
return null;
}
break;
}
});})(i__55812,i__55805,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55812,i__55805,map__55814,map__55814__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__55813,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55896 = (i__55812 + (1));
i__55812 = G__55896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55813),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810(cljs.core.chunk_rest(s__55811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55813),null);
}
} else {
var map__55824 = cljs.core.first(s__55811__$2);
var map__55824__$1 = (((((!((map__55824 == null))))?(((((map__55824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55824):map__55824);
var block = map__55824__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55824__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55805,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810_$_iter__55826(s__55827){
return (new cljs.core.LazySeq(null,((function (i__55805,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55827__$1 = s__55827;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55827__$1);
if(temp__5735__auto____$3){
var s__55827__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55827__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55827__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55829 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55828 = (0);
while(true){
if((i__55828 < size__4581__auto____$1)){
var map__55830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55828);
var map__55830__$1 = (((((!((map__55830 == null))))?(((((map__55830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55830):map__55830);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55830__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55830__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55830__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55829,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55828,i__55805,map__55830,map__55830__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55829,s__55827__$2,temp__5735__auto____$3,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55828,i__55805,map__55830,map__55830__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55829,s__55827__$2,temp__5735__auto____$3,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55898 = (i__55828 + (1));
i__55828 = G__55898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55829),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810_$_iter__55826(cljs.core.chunk_rest(s__55827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55829),null);
}
} else {
var map__55832 = cljs.core.first(s__55827__$2);
var map__55832__$1 = (((((!((map__55832 == null))))?(((((map__55832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55832):map__55832);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55832__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55832__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55832__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55805,map__55832,map__55832__$1,title__$1,string,uid__$2,s__55827__$2,temp__5735__auto____$3,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55805,map__55832,map__55832__$1,title__$1,string,uid__$2,s__55827__$2,temp__5735__auto____$3,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810_$_iter__55826(cljs.core.rest(s__55827__$2)));
}
} else {
return null;
}
break;
}
});})(i__55805,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55805,map__55824,map__55824__$1,block,uid__$1,parents,s__55811__$2,temp__5735__auto____$2,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55810(cljs.core.rest(s__55811__$2)));
}
} else {
return null;
}
break;
}
});})(i__55805,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55805,vec__55807,group_title,group,c__4580__auto__,size__4581__auto__,b__55806,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__55899 = (i__55805 + (1));
i__55805 = G__55899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55806),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803(cljs.core.chunk_rest(s__55804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55806),null);
}
} else {
var vec__55834 = cljs.core.first(s__55804__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55834,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55834,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837(s__55838){
return (new cljs.core.LazySeq(null,(function (){
var s__55838__$1 = s__55838;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__55838__$1);
if(temp__5735__auto____$2){
var s__55838__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55838__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55838__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55840 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55839 = (0);
while(true){
if((i__55839 < size__4581__auto__)){
var map__55841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55839);
var map__55841__$1 = (((((!((map__55841 == null))))?(((((map__55841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55841):map__55841);
var block = map__55841__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55841__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55841__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__55840,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__55839,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837_$_iter__55843(s__55844){
return (new cljs.core.LazySeq(null,((function (i__55839,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
var s__55844__$1 = s__55844;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55844__$1);
if(temp__5735__auto____$3){
var s__55844__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55844__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__55844__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__55846 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__55845 = (0);
while(true){
if((i__55845 < size__4581__auto____$1)){
var map__55847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__55845);
var map__55847__$1 = (((((!((map__55847 == null))))?(((((map__55847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55847):map__55847);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55847__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55847__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55847__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55846,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55845,i__55839,map__55847,map__55847__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55846,s__55844__$2,temp__5735__auto____$3,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55845,i__55839,map__55847,map__55847__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__55846,s__55844__$2,temp__5735__auto____$3,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55900 = (i__55845 + (1));
i__55845 = G__55900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55846),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837_$_iter__55843(cljs.core.chunk_rest(s__55844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55846),null);
}
} else {
var map__55849 = cljs.core.first(s__55844__$2);
var map__55849__$1 = (((((!((map__55849 == null))))?(((((map__55849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55849):map__55849);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55849__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55849__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55849__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55839,map__55849,map__55849__$1,title__$1,string,uid__$2,s__55844__$2,temp__5735__auto____$3,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55839,map__55849,map__55849__$1,title__$1,string,uid__$2,s__55844__$2,temp__5735__auto____$3,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837_$_iter__55843(cljs.core.rest(s__55844__$2)));
}
} else {
return null;
}
break;
}
});})(i__55839,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
,null,null));
});})(i__55839,map__55841,map__55841__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__55840,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__55901 = (i__55839 + (1));
i__55839 = G__55901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55840),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837(cljs.core.chunk_rest(s__55838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55840),null);
}
} else {
var map__55851 = cljs.core.first(s__55838__$2);
var map__55851__$1 = (((((!((map__55851 == null))))?(((((map__55851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55851):map__55851);
var block = map__55851__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55851__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55851__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__55851,map__55851__$1,block,uid__$1,parents,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837_$_iter__55853(s__55854){
return (new cljs.core.LazySeq(null,(function (){
var s__55854__$1 = s__55854;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__55854__$1);
if(temp__5735__auto____$3){
var s__55854__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__55854__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55854__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55856 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55855 = (0);
while(true){
if((i__55855 < size__4581__auto__)){
var map__55857 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55855);
var map__55857__$1 = (((((!((map__55857 == null))))?(((((map__55857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55857):map__55857);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55857__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55857__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55857__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__55856,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55855,map__55857,map__55857__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__55856,s__55854__$2,temp__5735__auto____$3,map__55851,map__55851__$1,block,uid__$1,parents,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__55855,map__55857,map__55857__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__55856,s__55854__$2,temp__5735__auto____$3,map__55851,map__55851__$1,block,uid__$1,parents,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__55902 = (i__55855 + (1));
i__55855 = G__55902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55856),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837_$_iter__55853(cljs.core.chunk_rest(s__55854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55856),null);
}
} else {
var map__55859 = cljs.core.first(s__55854__$2);
var map__55859__$1 = (((((!((map__55859 == null))))?(((((map__55859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55859):map__55859);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55859__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55859__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55859__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55859,map__55859__$1,title__$1,string,uid__$2,s__55854__$2,temp__5735__auto____$3,map__55851,map__55851__$1,block,uid__$1,parents,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__55859,map__55859__$1,title__$1,string,uid__$2,s__55854__$2,temp__5735__auto____$3,map__55851,map__55851__$1,block,uid__$1,parents,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837_$_iter__55853(cljs.core.rest(s__55854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__55851,map__55851__$1,block,uid__$1,parents,s__55838__$2,temp__5735__auto____$2,vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803_$_iter__55837(cljs.core.rest(s__55838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__55834,group_title,group,s__55804__$2,temp__5735__auto____$1,vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__55735_$_iter__55803(cljs.core.rest(s__55804__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__55800,linked_or_unlinked,refs,s__55736__$2,temp__5735__auto__,map__55723,map__55723__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__55735(cljs.core.rest(s__55736__$2)));
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
var map__55861 = athens.db.get_node_document(ident);
var map__55861__$1 = (((((!((map__55861 == null))))?(((((map__55861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55861):map__55861);
var node = map__55861__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55861__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55861__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__55863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55863) : re_frame.core.subscribe.call(null,G__55863));
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
