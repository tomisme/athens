goog.provide('athens.views.devtool');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.style');
goog.require('athens.views.buttons');
goog.require('athens.views.textinput');
goog.require('cljs.pprint');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.core.protocols');
goog.require('clojure.datafy');
goog.require('datascript.core');
goog.require('datascript.db');
goog.require('garden.color');
goog.require('komponentit.autosize');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('sci.core');
goog.require('stylefy.core');
goog.require('goog.events.KeyCodes');
athens.views.devtool.container_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],["100vw",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),(2),"devtool",(0),"flex","relative","auto","column","33vh"]);
athens.views.devtool.tabs_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 8px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"background","background",-863952629),garden.color.darken(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),(5)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0"], null)], null)], null)], null);
athens.views.devtool.tabs_section_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch"], null);
athens.views.devtool.panels_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px"], null);
athens.views.devtool.current_location_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid",garden.color.darken(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),(10))], null)], null)], null);
athens.views.devtool.current_location_name_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"inherit",new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"0",new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"1em",new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),"1em"], null);
athens.views.devtool.current_location_controls_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),"1em"], null);
athens.views.devtool.devtool_table_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),"0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",garden.color.darken(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),(5))], null)], null),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background","background",-863952629),garden.color.darken(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),2.5),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.devtool.edn_viewer_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null);
athens.views.devtool.query_input_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.textinput.textinput_style,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"40px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], 0));
athens.views.devtool.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval-str","eval-str",752008756),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"query","query",-1288509510)], null);
if((typeof athens !== 'undefined') && (typeof athens.views !== 'undefined') && (typeof athens.views.devtool !== 'undefined') && (typeof athens.views.devtool.state_STAR_ !== 'undefined')){
} else {
athens.views.devtool.state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.initial_state);
}
athens.views.devtool.ds_nav_impl = (function athens$views$devtool$ds_nav_impl(_,k,v){
var pred__60473 = cljs.core._EQ_;
var expr__60474 = k;
if(cljs.core.truth_((function (){var G__60476 = new cljs.core.Keyword("db","id","db/id",-1388397098);
var G__60477 = expr__60474;
return (pred__60473.cljs$core$IFn$_invoke$arity$2 ? pred__60473.cljs$core$IFn$_invoke$arity$2(G__60476,G__60477) : pred__60473.call(null,G__60476,G__60477));
})())){
var G__60478 = cljs.core.deref(athens.db.dsdb);
var G__60479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_children","block/_children",1128070632)], null);
var G__60480 = v;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__60478,G__60479,G__60480) : datascript.core.pull.call(null,G__60478,G__60479,G__60480));
} else {
return v;
}
});
athens.views.devtool.restore_db_BANG_ = (function athens$views$devtool$restore_db_BANG_(db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time-travel","time-travel",-1537845571),true], null));
});
(cljs.core.PersistentHashMap.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),athens.views.devtool.ds_nav_impl], null));
}));

(cljs.core.PersistentArrayMap.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),athens.views.devtool.ds_nav_impl], null));
}));

(datascript.db.TxReport.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.TxReport.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1);
}));

(datascript.db.Datom.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.Datom.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1);
}));

(datascript.db.DB.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.BTSet.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1);
}));
athens.views.devtool.data_table = (function athens$views$devtool$data_table(_,___$1,___$2){
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (headers,rows,add_nav_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.devtool_table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$views$devtool$data_table_$_iter__60481(s__60482){
return (new cljs.core.LazySeq(null,(function (){
var s__60482__$1 = s__60482;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60482__$1);
if(temp__5735__auto__){
var s__60482__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60482__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60482__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60484 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60483 = (0);
while(true){
if((i__60483 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60483);
cljs.core.chunk_append(b__60484,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)));

var G__60551 = (i__60483 + (1));
i__60483 = G__60551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60484),athens$views$devtool$data_table_$_iter__60481(cljs.core.chunk_rest(s__60482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60484),null);
}
} else {
var h = cljs.core.first(s__60482__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)),athens$views$devtool$data_table_$_iter__60481(cljs.core.rest(s__60482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(headers);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$devtool$data_table_$_iter__60485(s__60486){
return (new cljs.core.LazySeq(null,(function (){
var s__60486__$1 = s__60486;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60486__$1);
if(temp__5735__auto__){
var s__60486__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60486__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60486__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60488 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60487 = (0);
while(true){
if((i__60487 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60487);
cljs.core.chunk_append(b__60488,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60487,row,c__4580__auto__,size__4581__auto__,b__60488,s__60486__$2,temp__5735__auto__,limit){
return (function (){
var G__60489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__60489) : add_nav_BANG_.call(null,G__60489));
});})(i__60487,row,c__4580__auto__,size__4581__auto__,b__60488,s__60486__$2,temp__5735__auto__,limit))
], null),(function (){var iter__4582__auto__ = ((function (i__60487,row,c__4580__auto__,size__4581__auto__,b__60488,s__60486__$2,temp__5735__auto__,limit){
return (function athens$views$devtool$data_table_$_iter__60485_$_iter__60490(s__60491){
return (new cljs.core.LazySeq(null,((function (i__60487,row,c__4580__auto__,size__4581__auto__,b__60488,s__60486__$2,temp__5735__auto__,limit){
return (function (){
var s__60491__$1 = s__60491;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60491__$1);
if(temp__5735__auto____$1){
var s__60491__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60491__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60491__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60493 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60492 = (0);
while(true){
if((i__60492 < size__4581__auto____$1)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60492);
cljs.core.chunk_append(b__60493,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__60552 = (i__60492 + (1));
i__60492 = G__60552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60493),athens$views$devtool$data_table_$_iter__60485_$_iter__60490(cljs.core.chunk_rest(s__60491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60493),null);
}
} else {
var i = cljs.core.first(s__60491__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$views$devtool$data_table_$_iter__60485_$_iter__60490(cljs.core.rest(s__60491__$2)));
}
} else {
return null;
}
break;
}
});})(i__60487,row,c__4580__auto__,size__4581__auto__,b__60488,s__60486__$2,temp__5735__auto__,limit))
,null,null));
});})(i__60487,row,c__4580__auto__,size__4581__auto__,b__60488,s__60486__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__60553 = (i__60487 + (1));
i__60487 = G__60553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60488),athens$views$devtool$data_table_$_iter__60485(cljs.core.chunk_rest(s__60486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60488),null);
}
} else {
var row = cljs.core.first(s__60486__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,s__60486__$2,temp__5735__auto__,limit){
return (function (){
var G__60494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__60494) : add_nav_BANG_.call(null,G__60494));
});})(row,s__60486__$2,temp__5735__auto__,limit))
], null),(function (){var iter__4582__auto__ = ((function (row,s__60486__$2,temp__5735__auto__,limit){
return (function athens$views$devtool$data_table_$_iter__60485_$_iter__60495(s__60496){
return (new cljs.core.LazySeq(null,(function (){
var s__60496__$1 = s__60496;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60496__$1);
if(temp__5735__auto____$1){
var s__60496__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60496__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60496__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60498 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60497 = (0);
while(true){
if((i__60497 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60497);
cljs.core.chunk_append(b__60498,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__60554 = (i__60497 + (1));
i__60497 = G__60554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60498),athens$views$devtool$data_table_$_iter__60485_$_iter__60495(cljs.core.chunk_rest(s__60496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60498),null);
}
} else {
var i = cljs.core.first(s__60496__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$views$devtool$data_table_$_iter__60485_$_iter__60495(cljs.core.rest(s__60496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__60486__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),athens$views$devtool$data_table_$_iter__60485(cljs.core.rest(s__60486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(limit),rows));
})())], null)], null),(((cljs.core.deref(limit) < cljs.core.count(rows)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 0"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Load More"], null)], null):null)], null);
});
});
athens.views.devtool.edn_viewer = (function athens$views$devtool$edn_viewer(data,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.edn_viewer_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60499_60555 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60500_60556 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60501_60557 = true;
var _STAR_print_fn_STAR__temp_val__60502_60558 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60501_60557);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60502_60558);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60500_60556);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60499_60555);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], null)], null);
});
athens.views.devtool.coll_viewer = (function athens$views$devtool$coll_viewer(coll,add_nav_BANG_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.data_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","value"], null),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),item], null));
}),coll)),add_nav_BANG_], null);
});
athens.views.devtool.map_viewer = (function athens$views$devtool$map_viewer(m,add_nav_BANG_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.data_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","value"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60503){
var vec__60504 = p__60503;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),v], null));
}),m),add_nav_BANG_], null);
});
athens.views.devtool.maps_viewer = (function athens$views$devtool$maps_viewer(ms,add_nav_BANG_){
var headers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ms], 0))));
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,m){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$views$devtool$maps_viewer_$_iter__60507(s__60508){
return (new cljs.core.LazySeq(null,(function (){
var s__60508__$1 = s__60508;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60508__$1);
if(temp__5735__auto__){
var s__60508__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60508__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60508__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60510 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60509 = (0);
while(true){
if((i__60509 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60509);
cljs.core.chunk_append(b__60510,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h));

var G__60559 = (i__60509 + (1));
i__60509 = G__60559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60510),athens$views$devtool$maps_viewer_$_iter__60507(cljs.core.chunk_rest(s__60508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60510),null);
}
} else {
var h = cljs.core.first(s__60508__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h),athens$views$devtool$maps_viewer_$_iter__60507(cljs.core.rest(s__60508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.rest(headers));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),m], null));
}),ms);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.data_table,headers,rows,add_nav_BANG_], null);
});
athens.views.devtool.tuples_viewer = (function athens$views$devtool$tuples_viewer(colls,add_nav_BANG_){
var max_count = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,colls));
var headers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_count));
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,coll){
cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$views$devtool$tuples_viewer_$_iter__60511(s__60512){
return (new cljs.core.LazySeq(null,(function (){
var s__60512__$1 = s__60512;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60512__$1);
if(temp__5735__auto__){
var s__60512__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60512__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60512__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60514 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60513 = (0);
while(true){
if((i__60513 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60513);
cljs.core.chunk_append(b__60514,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i));

var G__60560 = (i__60513 + (1));
i__60513 = G__60560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60514),athens$views$devtool$tuples_viewer_$_iter__60511(cljs.core.chunk_rest(s__60512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60514),null);
}
} else {
var i = cljs.core.first(s__60512__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i),athens$views$devtool$tuples_viewer_$_iter__60511(cljs.core.rest(s__60512__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_count));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),coll], null));

return colls;
}));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.data_table,headers,rows,add_nav_BANG_], null);
});
athens.views.devtool.associative_not_sequential_QMARK_ = (function athens$views$devtool$associative_not_sequential_QMARK_(x){
return ((cljs.core.associative_QMARK_(x)) && ((!(cljs.core.sequential_QMARK_(x)))));
});
athens.views.devtool.sequence_of_maps_QMARK_ = (function athens$views$devtool$sequence_of_maps_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,x)));
});
athens.views.devtool.tuples_QMARK_ = (function athens$views$devtool$tuples_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.views.devtool.viewers = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","edn","athens.browser/edn",1813833548),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),cljs.core.constantly(true),new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.views.devtool.edn_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","coll","athens.browser/coll",1570814140),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),cljs.core.coll_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.views.devtool.coll_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","map","athens.browser/map",-2074995084),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.views.devtool.associative_not_sequential_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.views.devtool.map_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","maps","athens.browser/maps",1418454465),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.views.devtool.sequence_of_maps_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.views.devtool.maps_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","tuples","athens.browser/tuples",354701076),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.views.devtool.tuples_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.views.devtool.tuples_viewer], null)], null);
athens.views.devtool.viewer_preference = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athens.browser","maps","athens.browser/maps",1418454465),new cljs.core.Keyword("athens.browser","map","athens.browser/map",-2074995084),new cljs.core.Keyword("athens.browser","tuples","athens.browser/tuples",354701076),new cljs.core.Keyword("athens.browser","coll","athens.browser/coll",1570814140),new cljs.core.Keyword("athens.browser","edn","athens.browser/edn",1813833548)], null);
athens.views.devtool.applicable_viewers = (function athens$views$devtool$applicable_viewers(data){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60515_SHARP_){
return athens.views.devtool.viewer_preference.indexOf(p1__60515_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60516){
var map__60517 = p__60516;
var map__60517__$1 = (((((!((map__60517 == null))))?(((((map__60517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60517):map__60517);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60517__$1,new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918));
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data));
}),athens.views.devtool.viewers)));
});
athens.views.devtool.indexed_viewers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.identity),athens.views.devtool.viewers));
athens.views.devtool.data_browser = (function athens$views$devtool$data_browser(_){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.PersistentVector.EMPTY], null));
return (function (data){
var navs = new cljs.core.Keyword(null,"navs","navs",-1350609868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var add_nav_BANG_ = (function (p1__60519_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__60519_SHARP_], 0));
});
var navved_data = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,p__60520){
var vec__60521 = p__60520;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60521,(1),null);
return clojure.datafy.nav(clojure.datafy.datafy(d),k,v);
}),data,navs);
var datafied_data = clojure.datafy.datafy(navved_data);
var applicable_vs = athens.views.devtool.applicable_viewers(datafied_data);
var viewer_name = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.first(applicable_vs);
}
})();
var viewer = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.views.devtool.indexed_viewers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer_name,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"no-wrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.current_location_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$devtool$data_browser_$_iter__60524(s__60525){
return (new cljs.core.LazySeq(null,(function (){
var s__60525__$1 = s__60525;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60525__$1);
if(temp__5735__auto__){
var s__60525__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60525__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60525__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60527 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60526 = (0);
while(true){
if((i__60526 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60526);
cljs.core.chunk_append(b__60527,(function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronLeft], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first(nav)], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px"], null),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (i__60526,nav,i,c__4580__auto__,size__4581__auto__,b__60527,s__60525__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__60526,nav,i,c__4580__auto__,size__4581__auto__,b__60527,s__60525__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
});})(i__60526,nav,i,c__4580__auto__,size__4581__auto__,b__60527,s__60525__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
);
});})(i__60526,nav,i,c__4580__auto__,size__4581__auto__,b__60527,s__60525__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})());

var G__60561 = (i__60526 + (1));
i__60526 = G__60561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60527),athens$views$devtool$data_browser_$_iter__60524(cljs.core.chunk_rest(s__60525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60527),null);
}
} else {
var i = cljs.core.first(s__60525__$2);
return cljs.core.cons((function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronLeft], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first(nav)], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px"], null),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),((function (nav,i,s__60525__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
}));
});})(nav,i,s__60525__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})(),athens$views$devtool$data_browser_$_iter__60524(cljs.core.rest(s__60525__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(navs)));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.current_location_name_style),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(navved_data)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.current_location_controls_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"View as "], null),(function (){var iter__4582__auto__ = (function athens$views$devtool$data_browser_$_iter__60528(s__60529){
return (new cljs.core.LazySeq(null,(function (){
var s__60529__$1 = s__60529;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60529__$1);
if(temp__5735__auto__){
var s__60529__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60529__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60529__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60531 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60530 = (0);
while(true){
if((i__60530 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60530);
cljs.core.chunk_append(b__60531,(function (){var click_fn = ((function (i__60530,v,c__4580__auto__,size__4581__auto__,b__60531,s__60529__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"viewer","viewer",-783949853),v);
});})(i__60530,v,c__4580__auto__,size__4581__auto__,b__60531,s__60529__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),click_fn,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,viewer_name),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null));
})());

var G__60562 = (i__60530 + (1));
i__60530 = G__60562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60531),athens$views$devtool$data_browser_$_iter__60528(cljs.core.chunk_rest(s__60529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60531),null);
}
} else {
var v = cljs.core.first(s__60529__$2);
return cljs.core.cons((function (){var click_fn = ((function (v,s__60529__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"viewer","viewer",-783949853),v);
});})(v,s__60529__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),click_fn,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,viewer_name),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null));
})(),athens$views$devtool$data_browser_$_iter__60528(cljs.core.rest(s__60529__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(applicable_vs);
})()], null)], null)], null),(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(navved_data) : datascript.core.db_QMARK_.call(null,navved_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return athens.views.devtool.restore_db_BANG_(navved_data);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Restore this db"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,datafied_data,add_nav_BANG_], null)], null);
});
});
athens.views.devtool.handler = (function athens$views$devtool$handler(){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
});
athens.views.devtool.eval_with_sci = (function athens$views$devtool$eval_with_sci(p__60532){
var map__60533 = p__60532;
var map__60533__$1 = (((((!((map__60533 == null))))?(((((map__60533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60533):map__60533);
var state = map__60533__$1;
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60533__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var bindings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many,new cljs.core.Symbol("d","entity","d/entity",1189561095,null),datascript.core.entity], null);
var vec__60535 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(eval_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60538){if((e60538 instanceof Error)){
var e = e60538;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60538;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.views.devtool.eval_box_BANG_ = (function athens$views$devtool$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.views.devtool.state_STAR_,athens.views.devtool.eval_with_sci);
});
athens.views.devtool.update_box_BANG_ = (function athens$views$devtool$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),s);
});
athens.views.devtool.listener = (function athens$views$devtool$listener(tx_report){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.views.devtool.state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_report], 0));

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.views.devtool.state_STAR_)))){
return athens.views.devtool.eval_box_BANG_();
} else {
return null;
}
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,new cljs.core.Keyword("devtool","open","devtool/open",-1176270029),athens.views.devtool.listener);
athens.views.devtool.handle_box_change_BANG_ = (function athens$views$devtool$handle_box_change_BANG_(e){
return athens.views.devtool.update_box_BANG_(e.target.value);
});
athens.views.devtool.handle_shift_return_BANG_ = (function athens$views$devtool$handle_shift_return_BANG_(e){
e.preventDefault();

return athens.views.devtool.eval_box_BANG_();
});
athens.views.devtool.insert_tab = (function athens$views$devtool$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.views.devtool.handle_tab_key_BANG_ = (function athens$views$devtool$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.views.devtool.update_box_BANG_(athens.views.devtool.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.views.devtool.handle_box_key_down_BANG_ = (function athens$views$devtool$handle_box_key_down_BANG_(e){
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.views.devtool.handle_shift_return_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.views.devtool.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.views.devtool.error_component = (function athens$views$devtool$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.views.devtool.query_component = (function athens$views$devtool$query_component(p__60539){
var map__60540 = p__60539;
var map__60540__$1 = (((((!((map__60540 == null))))?(((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60540):map__60540);
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.devtool.query_input_style,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),eval_str,new cljs.core.Keyword(null,"resize","resize",297367086),"none",new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.views.devtool.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.views.devtool.handle_box_key_down_BANG_], null))], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.data_browser,result], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.error_component,result], null))], null);
});
athens.views.devtool.txes_component = (function athens$views$devtool$txes_component(p__60542){
var map__60543 = p__60542;
var map__60543__$1 = (((((!((map__60543 == null))))?(((((map__60543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60543):map__60543);
var tx_reports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60543__$1,new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.data_browser,tx_reports], null);
});
athens.views.devtool.devtool_prompt_el = (function athens$views$devtool$devtool_prompt_el(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__60545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60545) : re_frame.core.dispatch.call(null,G__60545));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Build], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Toggle devtool"], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null)], null);
});
athens.views.devtool.devtool_close_el = (function athens$views$devtool$devtool_close_el(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__60546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60546) : re_frame.core.dispatch.call(null,G__60546));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Clear], null)], null)], null);
});
athens.views.devtool.devtool_el = (function athens$views$devtool$devtool_el(devtool_QMARK_,state){
if(cljs.core.truth_(devtool_QMARK_)){
var map__60547 = cljs.core.deref(state);
var map__60547__$1 = (((((!((map__60547 == null))))?(((((map__60547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60547):map__60547);
var active_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60547__$1,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994));
var switch_panel = (function (panel){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),panel);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.container_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.tabs_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.tabs_section_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"query","query",-1288509510));
}),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_panel,new cljs.core.Keyword(null,"query","query",-1288509510)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ShortText], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Query"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"txes","txes",-2122282744));
}),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_panel,new cljs.core.Keyword(null,"txes","txes",-2122282744)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.History], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Transactions"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_close_el], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.devtool.panels_style),(function (){var G__60549 = active_panel;
var G__60549__$1 = (((G__60549 instanceof cljs.core.Keyword))?G__60549.fqn:null);
switch (G__60549__$1) {
case "query":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.query_component,cljs.core.deref(state)], null);

break;
case "txes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.txes_component,cljs.core.deref(state)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60549__$1)].join('')));

}
})()], null)], null);
} else {
return null;
}
});
athens.views.devtool.devtool_component = (function athens$views$devtool$devtool_component(){
var devtool_QMARK_ = cljs.core.deref((function (){var G__60550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("devtool","open","devtool/open",-1176270029)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60550) : re_frame.core.subscribe.call(null,G__60550));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_el,devtool_QMARK_,athens.views.devtool.state_STAR_], null);
});

//# sourceMappingURL=athens.views.devtool.js.map
