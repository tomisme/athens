goog.provide('athens.views');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.subs');
goog.require('athens.views.all_pages');
goog.require('athens.views.athena');
goog.require('athens.views.block_page');
goog.require('athens.views.daily_notes');
goog.require('athens.views.devtool');
goog.require('athens.views.left_sidebar');
goog.require('athens.views.node_page');
goog.require('athens.views.right_sidebar');
goog.require('athens.views.spinner');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('stylefy.core');
athens.views.app_wrapper_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),"'left-sidebar main-content secondary-content'\n   'devtool devtool devtool'",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"auto 1fr auto",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"1fr auto",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null);
athens.views.main_content_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"main-content",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"stretch",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null);
athens.views.alert = (function athens$views$alert(){
var alert_ = (function (){var G__57938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert","alert",-571950580)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57938) : re_frame.core.subscribe.call(null,G__57938));
})();
if((cljs.core.deref(alert_) == null)){
return null;
} else {
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(alert_)));

var G__57939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alert","unset","alert/unset",-421582694)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57939) : re_frame.core.dispatch.call(null,G__57939));
}
});
athens.views.file_cb = (function athens$views$file_cb(e){
var fr = (new FileReader());
var file = e.target.files.item((0));
(fr.onload = (function (p1__57940_SHARP_){
var G__57941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),p1__57940_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__57941) : re_frame.core.dispatch.call(null,G__57941));
}));

return fr.readAsText(file);
});
athens.views.about_panel = (function athens$views$about_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Panel"], null)], null);
});
athens.views.pages_panel = (function athens$views$pages_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.all_pages.table,athens.db.dsdb], null);
});
});
athens.views.page_panel = (function athens$views$page_panel(){
var current_route = (function (){var G__57943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57943) : re_frame.core.subscribe.call(null,G__57943));
})();
var uid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)));
var map__57942 = cljs.core.deref((function (){var G__57944 = athens.db.dsdb;
var G__57945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__57946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__57944,G__57945,G__57946) : posh.reagent.pull.call(null,G__57944,G__57945,G__57946));
})());
var map__57942__$1 = (((((!((map__57942 == null))))?(((((map__57942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57942):map__57942);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57942__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57942__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57942__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_component,id], null);
} else {
if(cljs.core.truth_(string)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.block_page.block_page_component,id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"404: This page doesn't exist"], null);

}
}
});
/**
 * When app initializes, `route-name` is `nil`. Side effect of this is that a daily page for today is automatically
 *   created when app inits. This is expected, but perhaps shouldn't be a side effect here.
 */
athens.views.match_panel = (function athens$views$match_panel(route_name){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57948 = route_name;
var G__57948__$1 = (((G__57948 instanceof cljs.core.Keyword))?G__57948.fqn:null);
switch (G__57948__$1) {
case "about":
return athens.views.about_panel;

break;
case "home":
return athens.views.daily_notes.daily_notes_panel;

break;
case "pages":
return athens.views.pages_panel;

break;
case "page":
return athens.views.page_panel;

break;
default:
return athens.views.daily_notes.daily_notes_panel;

}
})()], null);
});
athens.views.main_panel = (function athens$views$main_panel(){
var current_route = (function (){var G__57949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57949) : re_frame.core.subscribe.call(null,G__57949));
})();
var loading = (function (){var G__57950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__57950) : re_frame.core.subscribe.call(null,G__57950));
})();
return (function (){
var route_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alert], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_component], null),(cljs.core.truth_(cljs.core.deref(loading))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.initial_spinner_component], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.app_wrapper_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.left_sidebar.left_sidebar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.main_content_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"home","home",-74557309)))?athens.views.daily_notes.db_scroll_daily_notes:null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.match_panel,route_name], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.right_sidebar.right_sidebar_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_component], null)], null))], null);
});
});

//# sourceMappingURL=athens.views.js.map
