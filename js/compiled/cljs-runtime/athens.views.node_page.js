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
var G__53836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53836) : re_frame.core.dispatch.call(null,G__53836));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__53837 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__53838 = athens.db.dsdb;
var G__53839 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__53837,G__53838,G__53839) : posh.reagent.q.call(null,G__53837,G__53838,G__53839));
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
return cljs.core.boolean$((function (){try{var vec__53847 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53847,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53847,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53847,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e53843){if((e53843 instanceof Object)){
var _ = e53843;
return false;
} else {
throw e53843;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__53859,editing_uid,ref_groups,timeline_page_QMARK_){
var map__53860 = p__53859;
var map__53860__$1 = (((((!((map__53860 == null))))?(((((map__53860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53860):map__53860);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53860__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53860__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53860__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__53863 = e.target.value;
var G__53864 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__53863,G__53864) : athens.views.node_page.db_handler.call(null,G__53863,G__53864));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__53865(s__53866){
return (new cljs.core.LazySeq(null,(function (){
var s__53866__$1 = s__53866;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53866__$1);
if(temp__5735__auto__){
var s__53866__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53866__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53866__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53868 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53867 = (0);
while(true){
if((i__53867 < size__4581__auto__)){
var map__53869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53867);
var map__53869__$1 = (((((!((map__53869 == null))))?(((((map__53869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53869):map__53869);
var child = map__53869__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53869__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__53868,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__54156 = (i__53867 + (1));
i__53867 = G__54156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53868),athens$views$node_page$node_page_el_$_iter__53865(cljs.core.chunk_rest(s__53866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53868),null);
}
} else {
var map__53874 = cljs.core.first(s__53866__$2);
var map__53874__$1 = (((((!((map__53874 == null))))?(((((map__53874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53874):map__53874);
var child = map__53874__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53874__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__53865(cljs.core.rest(s__53866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__53876(s__53877){
return (new cljs.core.LazySeq(null,(function (){
var s__53877__$1 = s__53877;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53877__$1);
if(temp__5735__auto__){
var s__53877__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53877__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53877__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53879 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53878 = (0);
while(true){
if((i__53878 < size__4581__auto__)){
var vec__53880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53878);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53880,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53880,(1),null);
cljs.core.chunk_append(b__53879,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__53878,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883(s__53884){
return (new cljs.core.LazySeq(null,((function (i__53878,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__53884__$1 = s__53884;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53884__$1);
if(temp__5735__auto____$1){
var s__53884__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53884__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__53884__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__53886 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__53885 = (0);
while(true){
if((i__53885 < size__4581__auto____$1)){
var vec__53887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__53885);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53887,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53887,(1),null);
cljs.core.chunk_append(b__53886,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53885,i__53878,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__53885,i__53878,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__53885,i__53878,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890(s__53891){
return (new cljs.core.LazySeq(null,((function (i__53885,i__53878,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__53891__$1 = s__53891;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__53891__$1);
if(temp__5735__auto____$2){
var s__53891__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__53891__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__53891__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__53893 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__53892 = (0);
while(true){
if((i__53892 < size__4581__auto____$2)){
var map__53900 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__53892);
var map__53900__$1 = (((((!((map__53900 == null))))?(((((map__53900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53900):map__53900);
var block = map__53900__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53900__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53900__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__53893,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__53892,i__53885,i__53878,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890_$_iter__53902(s__53903){
return (new cljs.core.LazySeq(null,((function (i__53892,i__53885,i__53878,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__53903__$1 = s__53903;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__53903__$1);
if(temp__5735__auto____$3){
var s__53903__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__53903__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__53903__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__53905 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__53904 = (0);
while(true){
if((i__53904 < size__4581__auto____$3)){
var map__53917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__53904);
var map__53917__$1 = (((((!((map__53917 == null))))?(((((map__53917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53917):map__53917);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__53905,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53904,i__53892,i__53885,i__53878,map__53917,map__53917__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__53905,s__53903__$2,temp__5735__auto____$3,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__53904,i__53892,i__53885,i__53878,map__53917,map__53917__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__53905,s__53903__$2,temp__5735__auto____$3,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54160 = (i__53904 + (1));
i__53904 = G__54160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53905),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890_$_iter__53902(cljs.core.chunk_rest(s__53903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53905),null);
}
} else {
var map__53925 = cljs.core.first(s__53903__$2);
var map__53925__$1 = (((((!((map__53925 == null))))?(((((map__53925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53925):map__53925);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53892,i__53885,i__53878,map__53925,map__53925__$1,title__$1,string,uid__$2,s__53903__$2,temp__5735__auto____$3,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__53892,i__53885,i__53878,map__53925,map__53925__$1,title__$1,string,uid__$2,s__53903__$2,temp__5735__auto____$3,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890_$_iter__53902(cljs.core.rest(s__53903__$2)));
}
} else {
return null;
}
break;
}
});})(i__53892,i__53885,i__53878,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__53892,i__53885,i__53878,map__53900,map__53900__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__53893,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__54165 = (i__53892 + (1));
i__53892 = G__54165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53893),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890(cljs.core.chunk_rest(s__53891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53893),null);
}
} else {
var map__53932 = cljs.core.first(s__53891__$2);
var map__53932__$1 = (((((!((map__53932 == null))))?(((((map__53932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53932):map__53932);
var block = map__53932__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__53885,i__53878,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890_$_iter__53940(s__53941){
return (new cljs.core.LazySeq(null,((function (i__53885,i__53878,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__53941__$1 = s__53941;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__53941__$1);
if(temp__5735__auto____$3){
var s__53941__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__53941__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__53941__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__53943 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__53942 = (0);
while(true){
if((i__53942 < size__4581__auto____$2)){
var map__53953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__53942);
var map__53953__$1 = (((((!((map__53953 == null))))?(((((map__53953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53953):map__53953);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__53943,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53942,i__53885,i__53878,map__53953,map__53953__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__53943,s__53941__$2,temp__5735__auto____$3,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__53942,i__53885,i__53878,map__53953,map__53953__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__53943,s__53941__$2,temp__5735__auto____$3,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54166 = (i__53942 + (1));
i__53942 = G__54166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53943),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890_$_iter__53940(cljs.core.chunk_rest(s__53941__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53943),null);
}
} else {
var map__53964 = cljs.core.first(s__53941__$2);
var map__53964__$1 = (((((!((map__53964 == null))))?(((((map__53964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53964):map__53964);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53885,i__53878,map__53964,map__53964__$1,title__$1,string,uid__$2,s__53941__$2,temp__5735__auto____$3,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__53885,i__53878,map__53964,map__53964__$1,title__$1,string,uid__$2,s__53941__$2,temp__5735__auto____$3,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890_$_iter__53940(cljs.core.rest(s__53941__$2)));
}
} else {
return null;
}
break;
}
});})(i__53885,i__53878,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__53885,i__53878,map__53932,map__53932__$1,block,uid__$1,parents,s__53891__$2,temp__5735__auto____$2,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53890(cljs.core.rest(s__53891__$2)));
}
} else {
return null;
}
break;
}
});})(i__53885,i__53878,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__53885,i__53878,vec__53887,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__53886,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__54167 = (i__53885 + (1));
i__53885 = G__54167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53886),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883(cljs.core.chunk_rest(s__53884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53886),null);
}
} else {
var vec__53980 = cljs.core.first(s__53884__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53980,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53980,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53878,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__53878,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__53878,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990(s__53991){
return (new cljs.core.LazySeq(null,((function (i__53878,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__53991__$1 = s__53991;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__53991__$1);
if(temp__5735__auto____$2){
var s__53991__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__53991__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__53991__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__53993 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__53992 = (0);
while(true){
if((i__53992 < size__4581__auto____$1)){
var map__53997 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__53992);
var map__53997__$1 = (((((!((map__53997 == null))))?(((((map__53997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53997):map__53997);
var block = map__53997__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53997__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53997__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__53993,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__53992,i__53878,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990_$_iter__54006(s__54007){
return (new cljs.core.LazySeq(null,((function (i__53992,i__53878,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__54007__$1 = s__54007;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__54007__$1);
if(temp__5735__auto____$3){
var s__54007__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__54007__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__54007__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__54009 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__54008 = (0);
while(true){
if((i__54008 < size__4581__auto____$2)){
var map__54010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__54008);
var map__54010__$1 = (((((!((map__54010 == null))))?(((((map__54010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54010):map__54010);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54010__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54010__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54010__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__54009,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54008,i__53992,i__53878,map__54010,map__54010__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__54009,s__54007__$2,temp__5735__auto____$3,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54008,i__53992,i__53878,map__54010,map__54010__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__54009,s__54007__$2,temp__5735__auto____$3,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54169 = (i__54008 + (1));
i__54008 = G__54169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54009),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990_$_iter__54006(cljs.core.chunk_rest(s__54007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54009),null);
}
} else {
var map__54019 = cljs.core.first(s__54007__$2);
var map__54019__$1 = (((((!((map__54019 == null))))?(((((map__54019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54019):map__54019);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53992,i__53878,map__54019,map__54019__$1,title__$1,string,uid__$2,s__54007__$2,temp__5735__auto____$3,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__53992,i__53878,map__54019,map__54019__$1,title__$1,string,uid__$2,s__54007__$2,temp__5735__auto____$3,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990_$_iter__54006(cljs.core.rest(s__54007__$2)));
}
} else {
return null;
}
break;
}
});})(i__53992,i__53878,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__53992,i__53878,map__53997,map__53997__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__53993,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__54171 = (i__53992 + (1));
i__53992 = G__54171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53993),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990(cljs.core.chunk_rest(s__53991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53993),null);
}
} else {
var map__54027 = cljs.core.first(s__53991__$2);
var map__54027__$1 = (((((!((map__54027 == null))))?(((((map__54027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54027):map__54027);
var block = map__54027__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54027__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54027__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__53878,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990_$_iter__54034(s__54035){
return (new cljs.core.LazySeq(null,((function (i__53878,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__54035__$1 = s__54035;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__54035__$1);
if(temp__5735__auto____$3){
var s__54035__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__54035__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__54035__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__54037 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__54036 = (0);
while(true){
if((i__54036 < size__4581__auto____$1)){
var map__54043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__54036);
var map__54043__$1 = (((((!((map__54043 == null))))?(((((map__54043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54043):map__54043);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54043__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54043__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54043__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__54037,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54036,i__53878,map__54043,map__54043__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__54037,s__54035__$2,temp__5735__auto____$3,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54036,i__53878,map__54043,map__54043__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__54037,s__54035__$2,temp__5735__auto____$3,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54172 = (i__54036 + (1));
i__54036 = G__54172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54037),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990_$_iter__54034(cljs.core.chunk_rest(s__54035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54037),null);
}
} else {
var map__54045 = cljs.core.first(s__54035__$2);
var map__54045__$1 = (((((!((map__54045 == null))))?(((((map__54045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54045):map__54045);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54045__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54045__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54045__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53878,map__54045,map__54045__$1,title__$1,string,uid__$2,s__54035__$2,temp__5735__auto____$3,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__53878,map__54045,map__54045__$1,title__$1,string,uid__$2,s__54035__$2,temp__5735__auto____$3,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990_$_iter__54034(cljs.core.rest(s__54035__$2)));
}
} else {
return null;
}
break;
}
});})(i__53878,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__53878,map__54027,map__54027__$1,block,uid__$1,parents,s__53991__$2,temp__5735__auto____$2,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883_$_iter__53990(cljs.core.rest(s__53991__$2)));
}
} else {
return null;
}
break;
}
});})(i__53878,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__53878,vec__53980,group_title,group,s__53884__$2,temp__5735__auto____$1,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__53883(cljs.core.rest(s__53884__$2)));
}
} else {
return null;
}
break;
}
});})(i__53878,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__53878,vec__53880,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__53879,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__54173 = (i__53878 + (1));
i__53878 = G__54173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53879),athens$views$node_page$node_page_el_$_iter__53876(cljs.core.chunk_rest(s__53877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53879),null);
}
} else {
var vec__54062 = cljs.core.first(s__53877__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54062,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54062,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065(s__54066){
return (new cljs.core.LazySeq(null,(function (){
var s__54066__$1 = s__54066;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__54066__$1);
if(temp__5735__auto____$1){
var s__54066__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54066__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54066__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54068 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54067 = (0);
while(true){
if((i__54067 < size__4581__auto__)){
var vec__54070 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54067);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54070,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54070,(1),null);
cljs.core.chunk_append(b__54068,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54067,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__54067,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__54067,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073(s__54074){
return (new cljs.core.LazySeq(null,((function (i__54067,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__54074__$1 = s__54074;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__54074__$1);
if(temp__5735__auto____$2){
var s__54074__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54074__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__54074__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__54076 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__54075 = (0);
while(true){
if((i__54075 < size__4581__auto____$1)){
var map__54084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__54075);
var map__54084__$1 = (((((!((map__54084 == null))))?(((((map__54084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54084):map__54084);
var block = map__54084__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54084__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54084__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__54076,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__54075,i__54067,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073_$_iter__54087(s__54088){
return (new cljs.core.LazySeq(null,((function (i__54075,i__54067,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__54088__$1 = s__54088;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__54088__$1);
if(temp__5735__auto____$3){
var s__54088__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__54088__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__54088__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__54090 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__54089 = (0);
while(true){
if((i__54089 < size__4581__auto____$2)){
var map__54091 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__54089);
var map__54091__$1 = (((((!((map__54091 == null))))?(((((map__54091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54091):map__54091);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54091__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54091__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54091__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__54090,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54089,i__54075,i__54067,map__54091,map__54091__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__54090,s__54088__$2,temp__5735__auto____$3,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54089,i__54075,i__54067,map__54091,map__54091__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__54090,s__54088__$2,temp__5735__auto____$3,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54174 = (i__54089 + (1));
i__54089 = G__54174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54090),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073_$_iter__54087(cljs.core.chunk_rest(s__54088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54090),null);
}
} else {
var map__54093 = cljs.core.first(s__54088__$2);
var map__54093__$1 = (((((!((map__54093 == null))))?(((((map__54093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54093):map__54093);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54093__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54093__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54093__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54075,i__54067,map__54093,map__54093__$1,title__$1,string,uid__$2,s__54088__$2,temp__5735__auto____$3,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54075,i__54067,map__54093,map__54093__$1,title__$1,string,uid__$2,s__54088__$2,temp__5735__auto____$3,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073_$_iter__54087(cljs.core.rest(s__54088__$2)));
}
} else {
return null;
}
break;
}
});})(i__54075,i__54067,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__54075,i__54067,map__54084,map__54084__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__54076,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__54175 = (i__54075 + (1));
i__54075 = G__54175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54076),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073(cljs.core.chunk_rest(s__54074__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54076),null);
}
} else {
var map__54101 = cljs.core.first(s__54074__$2);
var map__54101__$1 = (((((!((map__54101 == null))))?(((((map__54101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54101):map__54101);
var block = map__54101__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54101__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54101__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__54067,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073_$_iter__54104(s__54105){
return (new cljs.core.LazySeq(null,((function (i__54067,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__54105__$1 = s__54105;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__54105__$1);
if(temp__5735__auto____$3){
var s__54105__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__54105__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__54105__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__54107 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__54106 = (0);
while(true){
if((i__54106 < size__4581__auto____$1)){
var map__54108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__54106);
var map__54108__$1 = (((((!((map__54108 == null))))?(((((map__54108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54108):map__54108);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__54107,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54106,i__54067,map__54108,map__54108__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__54107,s__54105__$2,temp__5735__auto____$3,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54106,i__54067,map__54108,map__54108__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__54107,s__54105__$2,temp__5735__auto____$3,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54177 = (i__54106 + (1));
i__54106 = G__54177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54107),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073_$_iter__54104(cljs.core.chunk_rest(s__54105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54107),null);
}
} else {
var map__54114 = cljs.core.first(s__54105__$2);
var map__54114__$1 = (((((!((map__54114 == null))))?(((((map__54114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54114):map__54114);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54114__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54114__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54114__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54067,map__54114,map__54114__$1,title__$1,string,uid__$2,s__54105__$2,temp__5735__auto____$3,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54067,map__54114,map__54114__$1,title__$1,string,uid__$2,s__54105__$2,temp__5735__auto____$3,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073_$_iter__54104(cljs.core.rest(s__54105__$2)));
}
} else {
return null;
}
break;
}
});})(i__54067,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__54067,map__54101,map__54101__$1,block,uid__$1,parents,s__54074__$2,temp__5735__auto____$2,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54073(cljs.core.rest(s__54074__$2)));
}
} else {
return null;
}
break;
}
});})(i__54067,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__54067,vec__54070,group_title,group,c__4580__auto__,size__4581__auto__,b__54068,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__54178 = (i__54067 + (1));
i__54067 = G__54178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54068),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065(cljs.core.chunk_rest(s__54066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54068),null);
}
} else {
var vec__54119 = cljs.core.first(s__54066__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54119,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54119,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122(s__54123){
return (new cljs.core.LazySeq(null,(function (){
var s__54123__$1 = s__54123;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__54123__$1);
if(temp__5735__auto____$2){
var s__54123__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54123__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54123__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54125 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54124 = (0);
while(true){
if((i__54124 < size__4581__auto__)){
var map__54127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54124);
var map__54127__$1 = (((((!((map__54127 == null))))?(((((map__54127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54127):map__54127);
var block = map__54127__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__54125,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__54124,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122_$_iter__54130(s__54131){
return (new cljs.core.LazySeq(null,((function (i__54124,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
var s__54131__$1 = s__54131;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__54131__$1);
if(temp__5735__auto____$3){
var s__54131__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__54131__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__54131__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__54133 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__54132 = (0);
while(true){
if((i__54132 < size__4581__auto____$1)){
var map__54134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__54132);
var map__54134__$1 = (((((!((map__54134 == null))))?(((((map__54134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54134):map__54134);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54134__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54134__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54134__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__54133,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54132,i__54124,map__54134,map__54134__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__54133,s__54131__$2,temp__5735__auto____$3,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54132,i__54124,map__54134,map__54134__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__54133,s__54131__$2,temp__5735__auto____$3,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54180 = (i__54132 + (1));
i__54132 = G__54180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54133),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122_$_iter__54130(cljs.core.chunk_rest(s__54131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54133),null);
}
} else {
var map__54140 = cljs.core.first(s__54131__$2);
var map__54140__$1 = (((((!((map__54140 == null))))?(((((map__54140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54140):map__54140);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54140__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54140__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54140__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54124,map__54140,map__54140__$1,title__$1,string,uid__$2,s__54131__$2,temp__5735__auto____$3,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54124,map__54140,map__54140__$1,title__$1,string,uid__$2,s__54131__$2,temp__5735__auto____$3,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122_$_iter__54130(cljs.core.rest(s__54131__$2)));
}
} else {
return null;
}
break;
}
});})(i__54124,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
,null,null));
});})(i__54124,map__54127,map__54127__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__54125,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__54181 = (i__54124 + (1));
i__54124 = G__54181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54125),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122(cljs.core.chunk_rest(s__54123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54125),null);
}
} else {
var map__54142 = cljs.core.first(s__54123__$2);
var map__54142__$1 = (((((!((map__54142 == null))))?(((((map__54142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54142):map__54142);
var block = map__54142__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__54142,map__54142__$1,block,uid__$1,parents,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122_$_iter__54144(s__54145){
return (new cljs.core.LazySeq(null,(function (){
var s__54145__$1 = s__54145;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__54145__$1);
if(temp__5735__auto____$3){
var s__54145__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__54145__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54145__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54147 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54146 = (0);
while(true){
if((i__54146 < size__4581__auto__)){
var map__54148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54146);
var map__54148__$1 = (((((!((map__54148 == null))))?(((((map__54148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54148):map__54148);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54148__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54148__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54148__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__54147,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__54146,map__54148,map__54148__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__54147,s__54145__$2,temp__5735__auto____$3,map__54142,map__54142__$1,block,uid__$1,parents,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__54146,map__54148,map__54148__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__54147,s__54145__$2,temp__5735__auto____$3,map__54142,map__54142__$1,block,uid__$1,parents,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__54182 = (i__54146 + (1));
i__54146 = G__54182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54147),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122_$_iter__54144(cljs.core.chunk_rest(s__54145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54147),null);
}
} else {
var map__54150 = cljs.core.first(s__54145__$2);
var map__54150__$1 = (((((!((map__54150 == null))))?(((((map__54150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54150):map__54150);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__54150,map__54150__$1,title__$1,string,uid__$2,s__54145__$2,temp__5735__auto____$3,map__54142,map__54142__$1,block,uid__$1,parents,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__54150,map__54150__$1,title__$1,string,uid__$2,s__54145__$2,temp__5735__auto____$3,map__54142,map__54142__$1,block,uid__$1,parents,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122_$_iter__54144(cljs.core.rest(s__54145__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__54142,map__54142__$1,block,uid__$1,parents,s__54123__$2,temp__5735__auto____$2,vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065_$_iter__54122(cljs.core.rest(s__54123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__54119,group_title,group,s__54066__$2,temp__5735__auto____$1,vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__53876_$_iter__54065(cljs.core.rest(s__54066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__54062,linked_or_unlinked,refs,s__53877__$2,temp__5735__auto__,map__53860,map__53860__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__53876(cljs.core.rest(s__53877__$2)));
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
var map__54152 = athens.db.get_node_document(ident);
var map__54152__$1 = (((((!((map__54152 == null))))?(((((map__54152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54152):map__54152);
var node = map__54152__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54152__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54152__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__54154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54154) : re_frame.core.subscribe.call(null,G__54154));
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
