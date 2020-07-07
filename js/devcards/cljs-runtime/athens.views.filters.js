goog.provide('athens.views.filters');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.style');
goog.require('athens.views.buttons');
goog.require('athens.views.textinput');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.views.filters.container_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"30em",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
athens.views.filters.search_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);
athens.views.filters.controls_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"right","12px","500","100%","0 0 auto","space-between",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null)], null),"flex","4px",["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)))].join(''),"4px 0 0"]);
athens.views.filters.sort_control_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 6px",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)], null)], null)], null)], null)], null)], null);
athens.views.filters.reset_control_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null);
athens.views.filters.sort_indicator_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null);
athens.views.filters.filter_list_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 0 0",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null);
athens.views.filters.filter_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["center","all 0.1s ease","1px","100%","2px 8px","space-between",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.99)"], null)], null)], null),"flex","4px","none"]);
athens.views.filters.added_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),0.3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.99)"], null)], null)], null)], null);
athens.views.filters.excluded_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warning-color","warning-color",924289810),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"warning-color","warning-color",924289810)),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warning-color","warning-color",924289810),0.3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.99)"], null)], null)], null)], null);
athens.views.filters.count_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 1em 0 0",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 3em"], null);
athens.views.filters.filter_name_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null);
athens.views.filters.state_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"margin-right","margin-right",809689658)],["center","uppercase","12px","bold","0 0 auto",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.2em",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.2em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null)], null)], null),"flex","0.1em","0.2em"]);
athens.views.filters.no_items_message_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
athens.views.filters.filters_el = (function athens$views$filters$filters_el(_uid,items){
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"lex","lex",1572323917),new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return (function (_uid__$1,items__$1){
var sort_ = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
var filtered_items = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)))].join('')),k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
var items__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_,new cljs.core.Keyword(null,"lex","lex",1572323917)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),filtered_items):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (k1,k2){
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(items__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k2,new cljs.core.Keyword(null,"count","count",2139924085)], null)),k1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(items__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"count","count",2139924085)], null)),k2], null));
})),filtered_items));
var num_filters = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__61028){
var vec__61029 = p__61028;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61029,(1),null);
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v);
}),items__$2));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.container_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.textinput.textinput,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.filters.search_style,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type to find filters",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.FilterList], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null),e.target.value);
})], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.controls_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Sort], null),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.filters.sort_control_style,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"sort","sort",953465918),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_,new cljs.core.Keyword(null,"lex","lex",1572323917)))?new cljs.core.Keyword(null,"count","count",2139924085):new cljs.core.Keyword(null,"lex","lex",1572323917)));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.sort_indicator_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ArrowDownward], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_,new cljs.core.Keyword(null,"lex","lex",1572323917)))?"Title":"Number")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_filters)," Active"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Reset",new cljs.core.Keyword(null,"style","style",-496642736),athens.views.filters.reset_control_style,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"state","state",-1988618099)));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s))));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.filter_list_style),(((cljs.core.count(items__$2) > (0)))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$filters$filters_el_$_iter__61032(s__61033){
return (new cljs.core.LazySeq(null,(function (){
var s__61033__$1 = s__61033;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61033__$1);
if(temp__5735__auto__){
var s__61033__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61033__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__61033__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__61035 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__61034 = (0);
while(true){
if((i__61034 < size__4581__auto__)){
var vec__61036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__61034);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61036,(0),null);
var map__61039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61036,(1),null);
var map__61039__$1 = (((((!((map__61039 == null))))?(((((map__61039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61039):map__61039);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var added_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"added","added",2057651688));
var excluded_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
cljs.core.chunk_append(b__61035,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.filters.filter_style,((added_QMARK_)?athens.views.filters.added_style:((excluded_QMARK_)?athens.views.filters.excluded_style:null))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__61034,added_QMARK_,excluded_QMARK_,vec__61036,k,map__61039,map__61039__$1,count,state,c__4580__auto__,size__4581__auto__,b__61035,s__61033__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),k,new cljs.core.Keyword(null,"state","state",-1988618099)], null),(function (){var G__61041 = state;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__61041)){
return new cljs.core.Keyword(null,"added","added",2057651688);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),G__61041)){
return new cljs.core.Keyword(null,"excluded","excluded",-715952088);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"excluded","excluded",-715952088),G__61041)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61041)].join('')));

}
}
}
})());
});})(i__61034,added_QMARK_,excluded_QMARK_,vec__61036,k,map__61039,map__61039__$1,count,state,c__4580__auto__,size__4581__auto__,b__61035,s__61033__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.count_style),count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.filter_name_style),k], null),((((added_QMARK_) || (excluded_QMARK_)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.state_style),state,((added_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Check], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Block], null))], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__61048 = (i__61034 + (1));
i__61034 = G__61048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61035),athens$views$filters$filters_el_$_iter__61032(cljs.core.chunk_rest(s__61033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61035),null);
}
} else {
var vec__61042 = cljs.core.first(s__61033__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61042,(0),null);
var map__61045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61042,(1),null);
var map__61045__$1 = (((((!((map__61045 == null))))?(((((map__61045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61045):map__61045);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61045__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61045__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var added_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"added","added",2057651688));
var excluded_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"excluded","excluded",-715952088));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.filters.filter_style,((added_QMARK_)?athens.views.filters.added_style:((excluded_QMARK_)?athens.views.filters.excluded_style:null))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (added_QMARK_,excluded_QMARK_,vec__61042,k,map__61045,map__61045__$1,count,state,s__61033__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),k,new cljs.core.Keyword(null,"state","state",-1988618099)], null),(function (){var G__61047 = state;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__61047)){
return new cljs.core.Keyword(null,"added","added",2057651688);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),G__61047)){
return new cljs.core.Keyword(null,"excluded","excluded",-715952088);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"excluded","excluded",-715952088),G__61047)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61047)].join('')));

}
}
}
})());
});})(added_QMARK_,excluded_QMARK_,vec__61042,k,map__61045,map__61045__$1,count,state,s__61033__$2,temp__5735__auto__,sort_,filtered_items,items__$2,num_filters,s))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.count_style),count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.filter_name_style),k], null),((((added_QMARK_) || (excluded_QMARK_)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.state_style),state,((added_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Check], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Block], null))], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),athens$views$filters$filters_el_$_iter__61032(cljs.core.rest(s__61033__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(items__$2);
})()):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.filters.no_items_message_style),"No filters found"], null))], null)], null);
});
});

//# sourceMappingURL=athens.views.filters.js.map
