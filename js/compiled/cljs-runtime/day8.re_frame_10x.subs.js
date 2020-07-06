goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__52900_53430 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__52901_53431 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52900_53430,G__52901_53431) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52900_53430,G__52901_53431));
var G__52902_53432 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__52903_53433 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52904_53434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52905_53435 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52902_53432,G__52903_53433,G__52904_53434,G__52905_53435) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52902_53432,G__52903_53433,G__52904_53434,G__52905_53435));
var G__52906_53436 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__52907_53437 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52908_53438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__52909_53439 = (function (panel_width_PERCENT_,p__52910){
var vec__52911 = p__52910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52911,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52911,(1),null);
return (((function (){var G__52914 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__52914);
})() * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52906_53436,G__52907_53437,G__52908_53438,G__52909_53439) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52906_53436,G__52907_53437,G__52908_53438,G__52909_53439));
var G__52915_53440 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__52916_53441 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52917_53442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52918_53443 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52915_53440,G__52916_53441,G__52917_53442,G__52918_53443) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52915_53440,G__52916_53441,G__52917_53442,G__52918_53443));
var G__52919_53444 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__52920_53445 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52921_53446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__52922_53447 = (function (width,p__52923){
var vec__52924 = p__52923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52924,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52924,(1),null);
return ((function (){var G__52927 = (width / n);
return Math.ceil(G__52927);
})() * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52919_53444,G__52920_53445,G__52921_53446,G__52922_53447) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52919_53444,G__52920_53445,G__52921_53446,G__52922_53447));
var G__52928_53452 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__52929_53453 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52930_53454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52931_53455 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52928_53452,G__52929_53453,G__52930_53454,G__52931_53455) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52928_53452,G__52929_53453,G__52930_53454,G__52931_53455));
var G__52932_53456 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__52933_53457 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52934_53458 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52935_53459 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52932_53456,G__52933_53457,G__52934_53458,G__52935_53459) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52932_53456,G__52933_53457,G__52934_53458,G__52935_53459));
var G__52936_53460 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__52937_53461 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52938_53462 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52939_53463 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52936_53460,G__52937_53461,G__52938_53462,G__52939_53463) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52936_53460,G__52937_53461,G__52938_53462,G__52939_53463));
var G__52940_53465 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__52941_53466 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52942_53467 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52943_53468 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52940_53465,G__52941_53466,G__52942_53467,G__52943_53468) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52940_53465,G__52941_53466,G__52942_53467,G__52943_53468));
var G__52945_53469 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__52946_53470 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52947_53471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52948_53472 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52945_53469,G__52946_53470,G__52947_53471,G__52948_53472) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52945_53469,G__52946_53470,G__52947_53471,G__52948_53472));
var G__52950_53473 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__52951_53474 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52952_53475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52953_53476 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52950_53473,G__52951_53474,G__52952_53475,G__52953_53476) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52950_53473,G__52951_53474,G__52952_53475,G__52953_53476));
var G__52954_53477 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__52955_53478 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52956_53479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52957_53480 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52954_53477,G__52955_53478,G__52956_53479,G__52957_53480) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52954_53477,G__52955_53478,G__52956_53479,G__52957_53480));
var G__52959_53481 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__52960_53482 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52961_53483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__52962_53484 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52959_53481,G__52960_53482,G__52961_53483,G__52962_53484) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52959_53481,G__52960_53482,G__52961_53483,G__52962_53484));
var G__52963_53485 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__52964_53486 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52963_53485,G__52964_53486) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52963_53485,G__52964_53486));
var G__52965_53487 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__52966_53488 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52967_53489 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__52968_53490 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52965_53487,G__52966_53488,G__52967_53489,G__52968_53490) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52965_53487,G__52966_53488,G__52967_53489,G__52968_53490));
var G__52969_53493 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__52970_53494 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52971_53495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__52972_53496 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52969_53493,G__52970_53494,G__52971_53495,G__52972_53496) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52969_53493,G__52970_53494,G__52971_53495,G__52972_53496));
var G__52974_53508 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__52975_53509 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52976_53510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__52977_53511 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52973_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__52973_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__52973_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52974_53508,G__52975_53509,G__52976_53510,G__52977_53511) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52974_53508,G__52975_53509,G__52976_53510,G__52977_53511));
var G__52978_53539 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__52979_53540 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52980_53541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__52981_53542 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52978_53539,G__52979_53540,G__52980_53541,G__52981_53542) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52978_53539,G__52979_53540,G__52980_53541,G__52981_53542));
var G__52983_53543 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__52984_53544 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52985_53545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__52986_53546 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52983_53543,G__52984_53544,G__52985_53545,G__52986_53546) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52983_53543,G__52984_53544,G__52985_53545,G__52986_53546));
var G__52994_53547 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__52995_53548 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__52996_53549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__52997_53550 = (function (expansions,p__52998){
var vec__52999 = p__52998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52999,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52999,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__52994_53547,G__52995_53548,G__52996_53549,G__52997_53550) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__52994_53547,G__52995_53548,G__52996_53549,G__52997_53550));
var G__53002_53551 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__53003_53552 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53004_53553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__53005_53554 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53002_53551,G__53003_53552,G__53004_53553,G__53005_53554) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53002_53551,G__53003_53552,G__53004_53553,G__53005_53554));
var G__53006_53555 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__53007_53556 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53006_53555,G__53007_53556) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53006_53555,G__53007_53556));
var G__53008_53557 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__53009_53558 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53008_53557,G__53009_53558) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53008_53557,G__53009_53558));
var G__53010_53559 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__53011_53560 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53010_53559,G__53011_53560) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53010_53559,G__53011_53560));
var G__53012_53561 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__53013_53562 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53012_53561,G__53013_53562) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53012_53561,G__53013_53562));
var G__53014_53563 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__53015_53564 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53014_53563,G__53015_53564) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53014_53563,G__53015_53564));
var G__53016_53566 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__53017_53567 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53018_53568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__53019_53569 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53016_53566,G__53017_53567,G__53018_53568,G__53019_53569) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53016_53566,G__53017_53567,G__53018_53568,G__53019_53569));
var G__53020_53570 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__53021_53571 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53022_53572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53023_53573 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53020_53570,G__53021_53571,G__53022_53572,G__53023_53573) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53020_53570,G__53021_53571,G__53022_53572,G__53023_53573));
var G__53024_53574 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__53025_53575 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53026_53576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53027_53577 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53028_53578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__53029_53579 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53030_53580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__53031_53581 = (function (p__53032,_){
var vec__53033 = p__53032;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53033,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53033,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53033,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__53024_53574,G__53025_53575,G__53026_53576,G__53027_53577,G__53028_53578,G__53029_53579,G__53030_53580,G__53031_53581) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53024_53574,G__53025_53575,G__53026_53576,G__53027_53577,G__53028_53578,G__53029_53579,G__53030_53580,G__53031_53581));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__53037,_){
var vec__53038 = p__53037;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__53049_53582 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__53050_53583 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53051_53584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53052_53585 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53053_53586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53054_53587 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53049_53582,G__53050_53583,G__53051_53584,G__53052_53585,G__53053_53586,G__53054_53587) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53049_53582,G__53050_53583,G__53051_53584,G__53052_53585,G__53053_53586,G__53054_53587));
var G__53059_53590 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__53060_53591 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53061_53592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__53062_53593 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53063_53594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__53064_53595 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53059_53590,G__53060_53591,G__53061_53592,G__53062_53593,G__53063_53594,G__53064_53595) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53059_53590,G__53060_53591,G__53061_53592,G__53062_53593,G__53063_53594,G__53064_53595));
var G__53065_53596 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__53066_53597 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53067_53598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__53068_53599 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53065_53596,G__53066_53597,G__53067_53598,G__53068_53599) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53065_53596,G__53066_53597,G__53067_53598,G__53068_53599));
var G__53069_53600 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__53070_53601 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53069_53600,G__53070_53601) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53069_53600,G__53070_53601));
var G__53071_53602 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__53072_53603 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53071_53602,G__53072_53603) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53071_53602,G__53072_53603));
var G__53073_53604 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__53074_53605 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53075_53606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__53076_53607 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53073_53604,G__53074_53605,G__53075_53606,G__53076_53607) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53073_53604,G__53074_53605,G__53075_53606,G__53076_53607));
var G__53077_53609 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__53078_53610 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53077_53609,G__53078_53610) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53077_53609,G__53078_53610));
var G__53079_53611 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__53080_53612 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53081_53613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53082_53614 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53079_53611,G__53080_53612,G__53081_53613,G__53082_53614) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53079_53611,G__53080_53612,G__53081_53613,G__53082_53614));
var G__53083_53628 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__53084_53629 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53085_53630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53086_53631 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53087_53632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53088_53633 = (function (p__53089,_){
var vec__53090 = p__53089;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53090,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53083_53628,G__53084_53629,G__53085_53630,G__53086_53631,G__53087_53632,G__53088_53633) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53083_53628,G__53084_53629,G__53085_53630,G__53086_53631,G__53087_53632,G__53088_53633));
var G__53093_53634 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__53094_53635 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53095_53636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53096_53637 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53093_53634,G__53094_53635,G__53095_53636,G__53096_53637) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53093_53634,G__53094_53635,G__53095_53636,G__53096_53637));
var G__53097_53640 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__53098_53641 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53099_53642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53100_53643 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53097_53640,G__53098_53641,G__53099_53642,G__53100_53643) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53097_53640,G__53098_53641,G__53099_53642,G__53100_53643));
var G__53101_53645 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__53102_53646 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53103_53647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__53104_53648 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53101_53645,G__53102_53646,G__53103_53647,G__53104_53648) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53101_53645,G__53102_53646,G__53103_53647,G__53104_53648));
var G__53105_53651 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__53106_53652 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53107_53653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53108_53654 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53105_53651,G__53106_53652,G__53107_53653,G__53108_53654) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53105_53651,G__53106_53652,G__53107_53653,G__53108_53654));
var G__53109_53684 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__53110_53685 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53111_53686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53112_53687 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53109_53684,G__53110_53685,G__53111_53686,G__53112_53687) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53109_53684,G__53110_53685,G__53111_53686,G__53112_53687));
var G__53113_53691 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__53114_53692 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53115_53693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53116_53694 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53113_53691,G__53114_53692,G__53115_53693,G__53116_53694) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53113_53691,G__53114_53692,G__53115_53693,G__53116_53694));
var G__53117_53696 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__53118_53697 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53119_53698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53120_53699 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53117_53696,G__53118_53697,G__53119_53698,G__53120_53699) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53117_53696,G__53118_53697,G__53119_53698,G__53120_53699));
var G__53121_53733 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__53122_53734 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53123_53735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53124_53736 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53121_53733,G__53122_53734,G__53123_53735,G__53124_53736) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53121_53733,G__53122_53734,G__53123_53735,G__53124_53736));
var G__53125_53737 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__53126_53738 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53127_53739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__53128_53740 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53125_53737,G__53126_53738,G__53127_53739,G__53128_53740) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53125_53737,G__53126_53738,G__53127_53739,G__53128_53740));
var G__53131_53741 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__53132_53742 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53133_53743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53134_53744 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53135_53745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53136_53746 = (function (p__53137){
var vec__53138 = p__53137;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53138,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53138,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53131_53741,G__53132_53742,G__53133_53743,G__53134_53744,G__53135_53745,G__53136_53746) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53131_53741,G__53132_53742,G__53133_53743,G__53134_53744,G__53135_53745,G__53136_53746));
var G__53143_53747 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__53144_53748 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53145_53749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__53146_53750 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53147_53751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__53148_53752 = (function (p__53149){
var vec__53150 = p__53149;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53150,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53150,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53143_53747,G__53144_53748,G__53145_53749,G__53146_53750,G__53147_53751,G__53148_53752) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53143_53747,G__53144_53748,G__53145_53749,G__53146_53750,G__53147_53751,G__53148_53752));
var G__53153_53753 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__53154_53754 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53155_53755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53156_53756 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53153_53753,G__53154_53754,G__53155_53755,G__53156_53756) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53153_53753,G__53154_53754,G__53155_53755,G__53156_53756));
var G__53158_53757 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__53159_53758 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53160_53759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53161_53760 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53157_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__53157_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__53157_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53158_53757,G__53159_53758,G__53160_53759,G__53161_53760) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53158_53757,G__53159_53758,G__53160_53759,G__53161_53760));
var G__53162_53766 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__53163_53767 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53164_53768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53165_53769 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53162_53766,G__53163_53767,G__53164_53768,G__53165_53769) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53162_53766,G__53163_53767,G__53164_53768,G__53165_53769));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__53170 = arguments.length;
switch (G__53170) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___53771 = arguments.length;
var i__4790__auto___53772 = (0);
while(true){
if((i__4790__auto___53772 < len__4789__auto___53771)){
args_arr__4810__auto__.push((arguments[i__4790__auto___53772]));

var G__53773 = (i__4790__auto___53772 + (1));
i__4790__auto___53772 = G__53773;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq53167){
var G__53168 = cljs.core.first(seq53167);
var seq53167__$1 = cljs.core.next(seq53167);
var G__53169 = cljs.core.first(seq53167__$1);
var seq53167__$2 = cljs.core.next(seq53167__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53168,G__53169,seq53167__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__53171_53774 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__53172_53775 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53173_53776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__53174_53777 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53175_53778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53176_53779 = (function (p__53177,p__53178){
var vec__53179 = p__53177;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53179,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53179,(1),null);
var vec__53182 = p__53178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53182,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53182,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__53185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53185,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53185,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53171_53774,G__53172_53775,G__53173_53776,G__53174_53777,G__53175_53778,G__53176_53779) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53171_53774,G__53172_53775,G__53173_53776,G__53174_53777,G__53175_53778,G__53176_53779));
var G__53188_53802 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__53189_53803 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53190_53804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53191_53805 = (function (match){
var map__53192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__53192__$1 = (((((!((map__53192 == null))))?(((((map__53192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53192):map__53192);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53188_53802,G__53189_53803,G__53190_53804,G__53191_53805) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53188_53802,G__53189_53803,G__53190_53804,G__53191_53805));
var G__53195_53806 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__53196_53807 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53197_53808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53198_53809 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53195_53806,G__53196_53807,G__53197_53808,G__53198_53809) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53195_53806,G__53196_53807,G__53197_53808,G__53198_53809));
var G__53199_53810 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__53200_53811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53201_53812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53202_53813 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53199_53810,G__53200_53811,G__53201_53812,G__53202_53813) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53199_53810,G__53200_53811,G__53201_53812,G__53202_53813));
var G__53203_53814 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__53204_53815 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53203_53814,G__53204_53815) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53203_53814,G__53204_53815));
var G__53205_53816 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__53206_53817 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53207_53818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53208_53819 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53205_53816,G__53206_53817,G__53207_53818,G__53208_53819) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53205_53816,G__53206_53817,G__53207_53818,G__53208_53819));
var G__53209_53834 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__53210_53835 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53211_53836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53212_53837 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53209_53834,G__53210_53835,G__53211_53836,G__53212_53837) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53209_53834,G__53210_53835,G__53211_53836,G__53212_53837));
var G__53213_53838 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__53214_53839 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53215_53840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__53216_53841 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53213_53838,G__53214_53839,G__53215_53840,G__53216_53841) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53213_53838,G__53214_53839,G__53215_53840,G__53216_53841));
var G__53217_53842 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__53218_53843 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53219_53844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__53220_53845 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53217_53842,G__53218_53843,G__53219_53844,G__53220_53845) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53217_53842,G__53218_53843,G__53219_53844,G__53220_53845));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__53221_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__53221_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53222){
return cljs.core.coll_QMARK_(G__53222);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53223){
return cljs.core.map_QMARK_(G__53223);
}),(function (G__53223){
return cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__53223){
return cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__53223){
return cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__53223){
return cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__53223){
return cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__53223){
return cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__53223){
return ((cljs.core.map_QMARK_(G__53223)) && (cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__53223,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53241){
return cljs.core.coll_QMARK_(G__53241);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__53242 = sub_type;
var G__53242__$1 = (((G__53242 instanceof cljs.core.Keyword))?G__53242.fqn:null);
switch (G__53242__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__53857 = (exp - (1));
var G__53858 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__53859 = cljs.core.rest(order__$1);
exp = G__53857;
total = G__53858;
order__$1 = G__53859;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__53249 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__53249__$1 = (((G__53249 instanceof cljs.core.Keyword))?G__53249.fqn:null);
switch (G__53249__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__53250,p__53251){
var vec__53252 = p__53250;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53252,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53252,(1),null);
var vec__53255 = p__53251;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53255,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me__$1){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me__$1)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me__$1){
var state = cljs.core.val(me__$1);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me__$1),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__53264_53879 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__53265_53880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53266_53881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53267_53882 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53264_53879,G__53265_53880,G__53266_53881,G__53267_53882) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53264_53879,G__53265_53880,G__53266_53881,G__53267_53882));
var G__53268_53887 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__53269_53888 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53270_53889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__53271_53890 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53268_53887,G__53269_53888,G__53270_53889,G__53271_53890) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53268_53887,G__53269_53888,G__53270_53889,G__53271_53890));
var G__53273_53897 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__53274_53898 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53275_53899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53276_53900 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53277_53901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__53278_53902 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53273_53897,G__53274_53898,G__53275_53899,G__53276_53900,G__53277_53901,G__53278_53902) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53273_53897,G__53274_53898,G__53275_53899,G__53276_53900,G__53277_53901,G__53278_53902));
var G__53279_53903 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__53280_53904 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53281_53905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__53282_53906 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53283_53907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__53284_53908 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53279_53903,G__53280_53904,G__53281_53905,G__53282_53906,G__53283_53907,G__53284_53908) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53279_53903,G__53280_53904,G__53281_53905,G__53282_53906,G__53283_53907,G__53284_53908));
var G__53285_53909 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__53286_53910 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53287_53911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53288_53912 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53285_53909,G__53286_53910,G__53287_53911,G__53288_53912) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53285_53909,G__53286_53910,G__53287_53911,G__53288_53912));
var G__53289_53914 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__53290_53915 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53291_53916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53292_53917 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53293_53918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__53294_53919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53295_53920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__53296_53921 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53297_53922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__53298_53923 = (function (p__53305){
var vec__53306 = p__53305;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53306,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53306,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53306,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53306,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__53309 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__53309__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__53309):G__53309);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53310){
var map__53311 = p__53310;
var map__53311__$1 = (((((!((map__53311 == null))))?(((((map__53311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53311):map__53311);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53311__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53311__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__53309__$1);
} else {
return G__53309__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__53289_53914,G__53290_53915,G__53291_53916,G__53292_53917,G__53293_53918,G__53294_53919,G__53295_53920,G__53296_53921,G__53297_53922,G__53298_53923) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53289_53914,G__53290_53915,G__53291_53916,G__53292_53917,G__53293_53918,G__53294_53919,G__53295_53920,G__53296_53921,G__53297_53922,G__53298_53923));
var G__53318_53933 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__53319_53934 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53320_53935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__53321_53936 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53318_53933,G__53319_53934,G__53320_53935,G__53321_53936) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53318_53933,G__53319_53934,G__53320_53935,G__53321_53936));
var G__53322_53937 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__53323_53938 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53324_53939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53325_53940 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53322_53937,G__53323_53938,G__53324_53939,G__53325_53940) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53322_53937,G__53323_53938,G__53324_53939,G__53325_53940));
var G__53328_53941 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__53329_53942 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53330_53943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53331_53944 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53328_53941,G__53329_53942,G__53330_53943,G__53331_53944) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53328_53941,G__53329_53942,G__53330_53943,G__53331_53944));
var G__53335_53945 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__53336_53946 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53337_53947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53338_53948 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53335_53945,G__53336_53946,G__53337_53947,G__53338_53948) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53335_53945,G__53336_53946,G__53337_53947,G__53338_53948));
var G__53339_53953 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__53340_53954 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53341_53955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__53342_53956 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53339_53953,G__53340_53954,G__53341_53955,G__53342_53956) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53339_53953,G__53340_53954,G__53341_53955,G__53342_53956));
var G__53344_53957 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__53345_53958 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53346_53959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__53347_53960 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53344_53957,G__53345_53958,G__53346_53959,G__53347_53960) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53344_53957,G__53345_53958,G__53346_53959,G__53347_53960));
var G__53348_53961 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__53349_53962 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53350_53963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53351_53964 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53348_53961,G__53349_53962,G__53350_53963,G__53351_53964) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53348_53961,G__53349_53962,G__53350_53963,G__53351_53964));
var G__53352_53965 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__53353_53966 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53354_53967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53355_53968 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53352_53965,G__53353_53966,G__53354_53967,G__53355_53968) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53352_53965,G__53353_53966,G__53354_53967,G__53355_53968));
var G__53356_53969 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__53357_53970 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53358_53971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__53359_53972 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53356_53969,G__53357_53970,G__53358_53971,G__53359_53972) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53356_53969,G__53357_53970,G__53358_53971,G__53359_53972));
var G__53360_53978 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__53361_53979 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53360_53978,G__53361_53979) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53360_53978,G__53361_53979));
var G__53363_53980 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__53364_53981 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53365_53982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__53366_53983 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53363_53980,G__53364_53981,G__53365_53982,G__53366_53983) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53363_53980,G__53364_53981,G__53365_53982,G__53366_53983));
var G__53367_53998 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__53368_53999 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53369_54000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__53370_54001 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53367_53998,G__53368_53999,G__53369_54000,G__53370_54001) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53367_53998,G__53368_53999,G__53369_54000,G__53370_54001));
var G__53371_54002 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__53372_54003 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53373_54004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__53374_54005 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53371_54002,G__53372_54003,G__53373_54004,G__53374_54005) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53371_54002,G__53372_54003,G__53373_54004,G__53374_54005));
var G__53375_54006 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__53376_54007 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53377_54008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53378_54009 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53375_54006,G__53376_54007,G__53377_54008,G__53378_54009) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53375_54006,G__53376_54007,G__53377_54008,G__53378_54009));
var G__53383_54010 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__53384_54011 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53385_54012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53386_54013 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53383_54010,G__53384_54011,G__53385_54012,G__53386_54013) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53383_54010,G__53384_54011,G__53385_54012,G__53386_54013));
var G__53387_54014 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__53388_54015 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53389_54016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53390_54017 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53387_54014,G__53388_54015,G__53389_54016,G__53390_54017) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53387_54014,G__53388_54015,G__53389_54016,G__53390_54017));
var G__53391_54018 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__53392_54019 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53393_54020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__53394_54021 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53391_54018,G__53392_54019,G__53393_54020,G__53394_54021) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53391_54018,G__53392_54019,G__53393_54020,G__53394_54021));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__53395_54022 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__53396_54023 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53395_54022,G__53396_54023) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53395_54022,G__53396_54023));
var G__53397_54024 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__53398_54025 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53399_54026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__53400_54027 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53401_54028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__53402_54029 = (function (p__53405,_){
var vec__53406 = p__53405;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53406,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53406,(1),null);
var G__53409 = (window_width / char_width);
return Math.ceil(G__53409);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53397_54024,G__53398_54025,G__53399_54026,G__53400_54027,G__53401_54028,G__53402_54029) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53397_54024,G__53398_54025,G__53399_54026,G__53400_54027,G__53401_54028,G__53402_54029));
var G__53410_54039 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__53411_54040 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53410_54039,G__53411_54040) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53410_54039,G__53411_54040));
var G__53412_54041 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__53413_54042 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53414_54043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__53415_54044 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53412_54041,G__53413_54042,G__53414_54043,G__53415_54044) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53412_54041,G__53413_54042,G__53414_54043,G__53415_54044));
var G__53416_54045 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__53417_54046 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53416_54045,G__53417_54046) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53416_54045,G__53417_54046));
var G__53418_54047 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__53419_54048 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53420_54049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__53421_54050 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53418_54047,G__53419_54048,G__53420_54049,G__53421_54050) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53418_54047,G__53419_54048,G__53420_54049,G__53421_54050));
var G__53428_54051 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__53429_54052 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53428_54051,G__53429_54052) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__53428_54051,G__53429_54052));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
