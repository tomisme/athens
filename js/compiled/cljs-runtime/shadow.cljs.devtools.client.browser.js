goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59914 = arguments.length;
var i__4790__auto___59915 = (0);
while(true){
if((i__4790__auto___59915 < len__4789__auto___59914)){
args__4795__auto__.push((arguments[i__4790__auto___59915]));

var G__59916 = (i__4790__auto___59915 + (1));
i__4790__auto___59915 = G__59916;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59683){
var G__59684 = cljs.core.first(seq59683);
var seq59683__$1 = cljs.core.next(seq59683);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59684,seq59683__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59685){
var map__59686 = p__59685;
var map__59686__$1 = (((((!((map__59686 == null))))?(((((map__59686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59686):map__59686);
var src = map__59686__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59686__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59686__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__59688 = cljs.core.seq(sources);
var chunk__59689 = null;
var count__59690 = (0);
var i__59691 = (0);
while(true){
if((i__59691 < count__59690)){
var map__59698 = chunk__59689.cljs$core$IIndexed$_nth$arity$2(null,i__59691);
var map__59698__$1 = (((((!((map__59698 == null))))?(((((map__59698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59698):map__59698);
var src = map__59698__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59700){var e_59921 = e59700;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59921);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59921.message)].join('')));
}

var G__59922 = seq__59688;
var G__59923 = chunk__59689;
var G__59924 = count__59690;
var G__59925 = (i__59691 + (1));
seq__59688 = G__59922;
chunk__59689 = G__59923;
count__59690 = G__59924;
i__59691 = G__59925;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59688);
if(temp__5735__auto__){
var seq__59688__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59688__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59688__$1);
var G__59926 = cljs.core.chunk_rest(seq__59688__$1);
var G__59927 = c__4609__auto__;
var G__59928 = cljs.core.count(c__4609__auto__);
var G__59929 = (0);
seq__59688 = G__59926;
chunk__59689 = G__59927;
count__59690 = G__59928;
i__59691 = G__59929;
continue;
} else {
var map__59701 = cljs.core.first(seq__59688__$1);
var map__59701__$1 = (((((!((map__59701 == null))))?(((((map__59701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59701):map__59701);
var src = map__59701__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59701__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59701__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59701__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59701__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59703){var e_59930 = e59703;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59930);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59930.message)].join('')));
}

var G__59931 = cljs.core.next(seq__59688__$1);
var G__59932 = null;
var G__59933 = (0);
var G__59934 = (0);
seq__59688 = G__59931;
chunk__59689 = G__59932;
count__59690 = G__59933;
i__59691 = G__59934;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__59706 = cljs.core.seq(js_requires);
var chunk__59707 = null;
var count__59708 = (0);
var i__59709 = (0);
while(true){
if((i__59709 < count__59708)){
var js_ns = chunk__59707.cljs$core$IIndexed$_nth$arity$2(null,i__59709);
var require_str_59935 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59935);


var G__59936 = seq__59706;
var G__59937 = chunk__59707;
var G__59938 = count__59708;
var G__59939 = (i__59709 + (1));
seq__59706 = G__59936;
chunk__59707 = G__59937;
count__59708 = G__59938;
i__59709 = G__59939;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59706);
if(temp__5735__auto__){
var seq__59706__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59706__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59706__$1);
var G__59940 = cljs.core.chunk_rest(seq__59706__$1);
var G__59941 = c__4609__auto__;
var G__59942 = cljs.core.count(c__4609__auto__);
var G__59943 = (0);
seq__59706 = G__59940;
chunk__59707 = G__59941;
count__59708 = G__59942;
i__59709 = G__59943;
continue;
} else {
var js_ns = cljs.core.first(seq__59706__$1);
var require_str_59944 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59944);


var G__59945 = cljs.core.next(seq__59706__$1);
var G__59946 = null;
var G__59947 = (0);
var G__59948 = (0);
seq__59706 = G__59945;
chunk__59707 = G__59946;
count__59708 = G__59947;
i__59709 = G__59948;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__59714 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59714) : callback.call(null,G__59714));
} else {
var G__59715 = shadow.cljs.devtools.client.env.files_url();
var G__59716 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59717 = "POST";
var G__59718 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59719 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59715,G__59716,G__59717,G__59718,G__59719);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59721){
var map__59722 = p__59721;
var map__59722__$1 = (((((!((map__59722 == null))))?(((((map__59722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59722):map__59722);
var msg = map__59722__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59724 = info;
var map__59724__$1 = (((((!((map__59724 == null))))?(((((map__59724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59724):map__59724);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59724__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59724__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59726(s__59727){
return (new cljs.core.LazySeq(null,(function (){
var s__59727__$1 = s__59727;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59727__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59732 = cljs.core.first(xs__6292__auto__);
var map__59732__$1 = (((((!((map__59732 == null))))?(((((map__59732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59732):map__59732);
var src = map__59732__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59732__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59732__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59727__$1,map__59732,map__59732__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59724,map__59724__$1,sources,compiled,map__59722,map__59722__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59726_$_iter__59728(s__59729){
return (new cljs.core.LazySeq(null,((function (s__59727__$1,map__59732,map__59732__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59724,map__59724__$1,sources,compiled,map__59722,map__59722__$1,msg,info,reload_info){
return (function (){
var s__59729__$1 = s__59729;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59729__$1);
if(temp__5735__auto____$1){
var s__59729__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59729__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59729__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59731 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59730 = (0);
while(true){
if((i__59730 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59730);
cljs.core.chunk_append(b__59731,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__59949 = (i__59730 + (1));
i__59730 = G__59949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59731),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59726_$_iter__59728(cljs.core.chunk_rest(s__59729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59731),null);
}
} else {
var warning = cljs.core.first(s__59729__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59726_$_iter__59728(cljs.core.rest(s__59729__$2)));
}
} else {
return null;
}
break;
}
});})(s__59727__$1,map__59732,map__59732__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59724,map__59724__$1,sources,compiled,map__59722,map__59722__$1,msg,info,reload_info))
,null,null));
});})(s__59727__$1,map__59732,map__59732__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59724,map__59724__$1,sources,compiled,map__59722,map__59722__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59726(cljs.core.rest(s__59727__$1)));
} else {
var G__59950 = cljs.core.rest(s__59727__$1);
s__59727__$1 = G__59950;
continue;
}
} else {
var G__59951 = cljs.core.rest(s__59727__$1);
s__59727__$1 = G__59951;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__59734_59952 = cljs.core.seq(warnings);
var chunk__59735_59953 = null;
var count__59736_59954 = (0);
var i__59737_59955 = (0);
while(true){
if((i__59737_59955 < count__59736_59954)){
var map__59750_59956 = chunk__59735_59953.cljs$core$IIndexed$_nth$arity$2(null,i__59737_59955);
var map__59750_59957__$1 = (((((!((map__59750_59956 == null))))?(((((map__59750_59956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59750_59956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59750_59956):map__59750_59956);
var w_59958 = map__59750_59957__$1;
var msg_59959__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750_59957__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750_59957__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750_59957__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750_59957__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59962)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59960),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59961),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59959__$1)].join(''));


var G__59963 = seq__59734_59952;
var G__59964 = chunk__59735_59953;
var G__59965 = count__59736_59954;
var G__59966 = (i__59737_59955 + (1));
seq__59734_59952 = G__59963;
chunk__59735_59953 = G__59964;
count__59736_59954 = G__59965;
i__59737_59955 = G__59966;
continue;
} else {
var temp__5735__auto___59967 = cljs.core.seq(seq__59734_59952);
if(temp__5735__auto___59967){
var seq__59734_59968__$1 = temp__5735__auto___59967;
if(cljs.core.chunked_seq_QMARK_(seq__59734_59968__$1)){
var c__4609__auto___59969 = cljs.core.chunk_first(seq__59734_59968__$1);
var G__59970 = cljs.core.chunk_rest(seq__59734_59968__$1);
var G__59971 = c__4609__auto___59969;
var G__59972 = cljs.core.count(c__4609__auto___59969);
var G__59973 = (0);
seq__59734_59952 = G__59970;
chunk__59735_59953 = G__59971;
count__59736_59954 = G__59972;
i__59737_59955 = G__59973;
continue;
} else {
var map__59756_59974 = cljs.core.first(seq__59734_59968__$1);
var map__59756_59975__$1 = (((((!((map__59756_59974 == null))))?(((((map__59756_59974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59756_59974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59756_59974):map__59756_59974);
var w_59976 = map__59756_59975__$1;
var msg_59977__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756_59975__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756_59975__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756_59975__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756_59975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59980)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59978),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59979),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59977__$1)].join(''));


var G__59981 = cljs.core.next(seq__59734_59968__$1);
var G__59982 = null;
var G__59983 = (0);
var G__59984 = (0);
seq__59734_59952 = G__59981;
chunk__59735_59953 = G__59982;
count__59736_59954 = G__59983;
i__59737_59955 = G__59984;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59758){
var map__59759 = p__59758;
var map__59759__$1 = (((((!((map__59759 == null))))?(((((map__59759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59759):map__59759);
var src = map__59759__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59759__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59759__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59761){
var map__59762 = p__59761;
var map__59762__$1 = (((((!((map__59762 == null))))?(((((map__59762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59762):map__59762);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59766){
var map__59767 = p__59766;
var map__59767__$1 = (((((!((map__59767 == null))))?(((((map__59767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59767):map__59767);
var rc = map__59767__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59767__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59720_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59720_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59780){
var map__59782 = p__59780;
var map__59782__$1 = (((((!((map__59782 == null))))?(((((map__59782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59782):map__59782);
var msg = map__59782__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59784 = cljs.core.seq(updates);
var chunk__59786 = null;
var count__59787 = (0);
var i__59788 = (0);
while(true){
if((i__59788 < count__59787)){
var path = chunk__59786.cljs$core$IIndexed$_nth$arity$2(null,i__59788);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59836_59991 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59839_59992 = null;
var count__59840_59993 = (0);
var i__59841_59994 = (0);
while(true){
if((i__59841_59994 < count__59840_59993)){
var node_59995 = chunk__59839_59992.cljs$core$IIndexed$_nth$arity$2(null,i__59841_59994);
var path_match_59996 = shadow.cljs.devtools.client.browser.match_paths(node_59995.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59996)){
var new_link_59997 = (function (){var G__59849 = node_59995.cloneNode(true);
G__59849.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59996),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59849;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59996], 0));

goog.dom.insertSiblingAfter(new_link_59997,node_59995);

goog.dom.removeNode(node_59995);


var G__59998 = seq__59836_59991;
var G__59999 = chunk__59839_59992;
var G__60000 = count__59840_59993;
var G__60001 = (i__59841_59994 + (1));
seq__59836_59991 = G__59998;
chunk__59839_59992 = G__59999;
count__59840_59993 = G__60000;
i__59841_59994 = G__60001;
continue;
} else {
var G__60002 = seq__59836_59991;
var G__60003 = chunk__59839_59992;
var G__60004 = count__59840_59993;
var G__60005 = (i__59841_59994 + (1));
seq__59836_59991 = G__60002;
chunk__59839_59992 = G__60003;
count__59840_59993 = G__60004;
i__59841_59994 = G__60005;
continue;
}
} else {
var temp__5735__auto___60006 = cljs.core.seq(seq__59836_59991);
if(temp__5735__auto___60006){
var seq__59836_60007__$1 = temp__5735__auto___60006;
if(cljs.core.chunked_seq_QMARK_(seq__59836_60007__$1)){
var c__4609__auto___60008 = cljs.core.chunk_first(seq__59836_60007__$1);
var G__60009 = cljs.core.chunk_rest(seq__59836_60007__$1);
var G__60010 = c__4609__auto___60008;
var G__60011 = cljs.core.count(c__4609__auto___60008);
var G__60012 = (0);
seq__59836_59991 = G__60009;
chunk__59839_59992 = G__60010;
count__59840_59993 = G__60011;
i__59841_59994 = G__60012;
continue;
} else {
var node_60013 = cljs.core.first(seq__59836_60007__$1);
var path_match_60014 = shadow.cljs.devtools.client.browser.match_paths(node_60013.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60014)){
var new_link_60015 = (function (){var G__59853 = node_60013.cloneNode(true);
G__59853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60014),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59853;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60014], 0));

goog.dom.insertSiblingAfter(new_link_60015,node_60013);

goog.dom.removeNode(node_60013);


var G__60016 = cljs.core.next(seq__59836_60007__$1);
var G__60017 = null;
var G__60018 = (0);
var G__60019 = (0);
seq__59836_59991 = G__60016;
chunk__59839_59992 = G__60017;
count__59840_59993 = G__60018;
i__59841_59994 = G__60019;
continue;
} else {
var G__60020 = cljs.core.next(seq__59836_60007__$1);
var G__60021 = null;
var G__60022 = (0);
var G__60023 = (0);
seq__59836_59991 = G__60020;
chunk__59839_59992 = G__60021;
count__59840_59993 = G__60022;
i__59841_59994 = G__60023;
continue;
}
}
} else {
}
}
break;
}


var G__60024 = seq__59784;
var G__60025 = chunk__59786;
var G__60026 = count__59787;
var G__60027 = (i__59788 + (1));
seq__59784 = G__60024;
chunk__59786 = G__60025;
count__59787 = G__60026;
i__59788 = G__60027;
continue;
} else {
var G__60028 = seq__59784;
var G__60029 = chunk__59786;
var G__60030 = count__59787;
var G__60031 = (i__59788 + (1));
seq__59784 = G__60028;
chunk__59786 = G__60029;
count__59787 = G__60030;
i__59788 = G__60031;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59784);
if(temp__5735__auto__){
var seq__59784__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59784__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59784__$1);
var G__60032 = cljs.core.chunk_rest(seq__59784__$1);
var G__60033 = c__4609__auto__;
var G__60034 = cljs.core.count(c__4609__auto__);
var G__60035 = (0);
seq__59784 = G__60032;
chunk__59786 = G__60033;
count__59787 = G__60034;
i__59788 = G__60035;
continue;
} else {
var path = cljs.core.first(seq__59784__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59858_60036 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59861_60037 = null;
var count__59862_60038 = (0);
var i__59863_60039 = (0);
while(true){
if((i__59863_60039 < count__59862_60038)){
var node_60040 = chunk__59861_60037.cljs$core$IIndexed$_nth$arity$2(null,i__59863_60039);
var path_match_60041 = shadow.cljs.devtools.client.browser.match_paths(node_60040.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60041)){
var new_link_60042 = (function (){var G__59877 = node_60040.cloneNode(true);
G__59877.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60041),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59877;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60041], 0));

goog.dom.insertSiblingAfter(new_link_60042,node_60040);

goog.dom.removeNode(node_60040);


var G__60043 = seq__59858_60036;
var G__60044 = chunk__59861_60037;
var G__60045 = count__59862_60038;
var G__60046 = (i__59863_60039 + (1));
seq__59858_60036 = G__60043;
chunk__59861_60037 = G__60044;
count__59862_60038 = G__60045;
i__59863_60039 = G__60046;
continue;
} else {
var G__60047 = seq__59858_60036;
var G__60048 = chunk__59861_60037;
var G__60049 = count__59862_60038;
var G__60050 = (i__59863_60039 + (1));
seq__59858_60036 = G__60047;
chunk__59861_60037 = G__60048;
count__59862_60038 = G__60049;
i__59863_60039 = G__60050;
continue;
}
} else {
var temp__5735__auto___60051__$1 = cljs.core.seq(seq__59858_60036);
if(temp__5735__auto___60051__$1){
var seq__59858_60052__$1 = temp__5735__auto___60051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59858_60052__$1)){
var c__4609__auto___60053 = cljs.core.chunk_first(seq__59858_60052__$1);
var G__60054 = cljs.core.chunk_rest(seq__59858_60052__$1);
var G__60055 = c__4609__auto___60053;
var G__60056 = cljs.core.count(c__4609__auto___60053);
var G__60057 = (0);
seq__59858_60036 = G__60054;
chunk__59861_60037 = G__60055;
count__59862_60038 = G__60056;
i__59863_60039 = G__60057;
continue;
} else {
var node_60058 = cljs.core.first(seq__59858_60052__$1);
var path_match_60059 = shadow.cljs.devtools.client.browser.match_paths(node_60058.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60059)){
var new_link_60060 = (function (){var G__59878 = node_60058.cloneNode(true);
G__59878.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60059),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59878;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60059], 0));

goog.dom.insertSiblingAfter(new_link_60060,node_60058);

goog.dom.removeNode(node_60058);


var G__60061 = cljs.core.next(seq__59858_60052__$1);
var G__60062 = null;
var G__60063 = (0);
var G__60064 = (0);
seq__59858_60036 = G__60061;
chunk__59861_60037 = G__60062;
count__59862_60038 = G__60063;
i__59863_60039 = G__60064;
continue;
} else {
var G__60065 = cljs.core.next(seq__59858_60052__$1);
var G__60066 = null;
var G__60067 = (0);
var G__60068 = (0);
seq__59858_60036 = G__60065;
chunk__59861_60037 = G__60066;
count__59862_60038 = G__60067;
i__59863_60039 = G__60068;
continue;
}
}
} else {
}
}
break;
}


var G__60069 = cljs.core.next(seq__59784__$1);
var G__60070 = null;
var G__60071 = (0);
var G__60072 = (0);
seq__59784 = G__60069;
chunk__59786 = G__60070;
count__59787 = G__60071;
i__59788 = G__60072;
continue;
} else {
var G__60073 = cljs.core.next(seq__59784__$1);
var G__60074 = null;
var G__60075 = (0);
var G__60076 = (0);
seq__59784 = G__60073;
chunk__59786 = G__60074;
count__59787 = G__60075;
i__59788 = G__60076;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__59884){
var map__59885 = p__59884;
var map__59885__$1 = (((((!((map__59885 == null))))?(((((map__59885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59885):map__59885);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__59888,done){
var map__59889 = p__59888;
var map__59889__$1 = (((((!((map__59889 == null))))?(((((map__59889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59889):map__59889);
var msg = map__59889__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59889__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59889__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59889__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59889__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59891){
var map__59892 = p__59891;
var map__59892__$1 = (((((!((map__59892 == null))))?(((((map__59892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59892):map__59892);
var src = map__59892__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59892__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e59894){var e = e59894;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__59895,done){
var map__59896 = p__59895;
var map__59896__$1 = (((((!((map__59896 == null))))?(((((map__59896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59896):map__59896);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59896__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59896__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__59898){
var map__59899 = p__59898;
var map__59899__$1 = (((((!((map__59899 == null))))?(((((map__59899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59899):map__59899);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59899__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59899__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__59901,done){
var map__59902 = p__59901;
var map__59902__$1 = (((((!((map__59902 == null))))?(((((map__59902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59902):map__59902);
var msg = map__59902__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59902__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__59904_60077 = type;
var G__59904_60078__$1 = (((G__59904_60077 instanceof cljs.core.Keyword))?G__59904_60077.fqn:null);
switch (G__59904_60078__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__59905 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__59906 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__59907 = "POST";
var G__59908 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__59909 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59905,G__59906,G__59907,G__59908,G__59909);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__59911 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__59910 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__59910.cljs$core$IFn$_invoke$arity$1 ? fexpr__59910.cljs$core$IFn$_invoke$arity$1(G__59911) : fexpr__59910.call(null,G__59911));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e59913){var e = e59913;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60080 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60080)){
var s_60081 = temp__5735__auto___60080;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60081.onclose = (function (e){
return null;
}));

s_60081.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
