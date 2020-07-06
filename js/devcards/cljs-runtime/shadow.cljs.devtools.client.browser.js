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
var len__4789__auto___49923 = arguments.length;
var i__4790__auto___49924 = (0);
while(true){
if((i__4790__auto___49924 < len__4789__auto___49923)){
args__4795__auto__.push((arguments[i__4790__auto___49924]));

var G__49925 = (i__4790__auto___49924 + (1));
i__4790__auto___49924 = G__49925;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49529){
var G__49530 = cljs.core.first(seq49529);
var seq49529__$1 = cljs.core.next(seq49529);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49530,seq49529__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49544){
var map__49545 = p__49544;
var map__49545__$1 = (((((!((map__49545 == null))))?(((((map__49545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49545):map__49545);
var src = map__49545__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49545__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__49556 = cljs.core.seq(sources);
var chunk__49557 = null;
var count__49558 = (0);
var i__49559 = (0);
while(true){
if((i__49559 < count__49558)){
var map__49569 = chunk__49557.cljs$core$IIndexed$_nth$arity$2(null,i__49559);
var map__49569__$1 = (((((!((map__49569 == null))))?(((((map__49569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49569):map__49569);
var src = map__49569__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49569__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49569__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49569__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49569__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49575){var e_49986 = e49575;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49986);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49986.message)].join('')));
}

var G__49987 = seq__49556;
var G__49988 = chunk__49557;
var G__49989 = count__49558;
var G__49990 = (i__49559 + (1));
seq__49556 = G__49987;
chunk__49557 = G__49988;
count__49558 = G__49989;
i__49559 = G__49990;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49556);
if(temp__5735__auto__){
var seq__49556__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49556__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49556__$1);
var G__49995 = cljs.core.chunk_rest(seq__49556__$1);
var G__49996 = c__4609__auto__;
var G__49997 = cljs.core.count(c__4609__auto__);
var G__49998 = (0);
seq__49556 = G__49995;
chunk__49557 = G__49996;
count__49558 = G__49997;
i__49559 = G__49998;
continue;
} else {
var map__49576 = cljs.core.first(seq__49556__$1);
var map__49576__$1 = (((((!((map__49576 == null))))?(((((map__49576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49576):map__49576);
var src = map__49576__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49576__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49576__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49576__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49576__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49578){var e_50002 = e49578;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50002);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50002.message)].join('')));
}

var G__50004 = cljs.core.next(seq__49556__$1);
var G__50005 = null;
var G__50006 = (0);
var G__50007 = (0);
seq__49556 = G__50004;
chunk__49557 = G__50005;
count__49558 = G__50006;
i__49559 = G__50007;
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
var seq__49584 = cljs.core.seq(js_requires);
var chunk__49585 = null;
var count__49586 = (0);
var i__49587 = (0);
while(true){
if((i__49587 < count__49586)){
var js_ns = chunk__49585.cljs$core$IIndexed$_nth$arity$2(null,i__49587);
var require_str_50012 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50012);


var G__50013 = seq__49584;
var G__50014 = chunk__49585;
var G__50015 = count__49586;
var G__50016 = (i__49587 + (1));
seq__49584 = G__50013;
chunk__49585 = G__50014;
count__49586 = G__50015;
i__49587 = G__50016;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49584);
if(temp__5735__auto__){
var seq__49584__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49584__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49584__$1);
var G__50017 = cljs.core.chunk_rest(seq__49584__$1);
var G__50018 = c__4609__auto__;
var G__50019 = cljs.core.count(c__4609__auto__);
var G__50020 = (0);
seq__49584 = G__50017;
chunk__49585 = G__50018;
count__49586 = G__50019;
i__49587 = G__50020;
continue;
} else {
var js_ns = cljs.core.first(seq__49584__$1);
var require_str_50021 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50021);


var G__50022 = cljs.core.next(seq__49584__$1);
var G__50023 = null;
var G__50024 = (0);
var G__50025 = (0);
seq__49584 = G__50022;
chunk__49585 = G__50023;
count__49586 = G__50024;
i__49587 = G__50025;
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
var G__49590 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49590) : callback.call(null,G__49590));
} else {
var G__49591 = shadow.cljs.devtools.client.env.files_url();
var G__49592 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49593 = "POST";
var G__49594 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49595 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49591,G__49592,G__49593,G__49594,G__49595);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49603){
var map__49604 = p__49603;
var map__49604__$1 = (((((!((map__49604 == null))))?(((((map__49604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49604):map__49604);
var msg = map__49604__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49607 = info;
var map__49607__$1 = (((((!((map__49607 == null))))?(((((map__49607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49607):map__49607);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49607__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49607__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49609(s__49610){
return (new cljs.core.LazySeq(null,(function (){
var s__49610__$1 = s__49610;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49610__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49615 = cljs.core.first(xs__6292__auto__);
var map__49615__$1 = (((((!((map__49615 == null))))?(((((map__49615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49615):map__49615);
var src = map__49615__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49615__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49610__$1,map__49615,map__49615__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49607,map__49607__$1,sources,compiled,map__49604,map__49604__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49609_$_iter__49611(s__49612){
return (new cljs.core.LazySeq(null,((function (s__49610__$1,map__49615,map__49615__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49607,map__49607__$1,sources,compiled,map__49604,map__49604__$1,msg,info,reload_info){
return (function (){
var s__49612__$1 = s__49612;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49612__$1);
if(temp__5735__auto____$1){
var s__49612__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49612__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49612__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49614 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49613 = (0);
while(true){
if((i__49613 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49613);
cljs.core.chunk_append(b__49614,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50036 = (i__49613 + (1));
i__49613 = G__50036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49614),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49609_$_iter__49611(cljs.core.chunk_rest(s__49612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49614),null);
}
} else {
var warning = cljs.core.first(s__49612__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49609_$_iter__49611(cljs.core.rest(s__49612__$2)));
}
} else {
return null;
}
break;
}
});})(s__49610__$1,map__49615,map__49615__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49607,map__49607__$1,sources,compiled,map__49604,map__49604__$1,msg,info,reload_info))
,null,null));
});})(s__49610__$1,map__49615,map__49615__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49607,map__49607__$1,sources,compiled,map__49604,map__49604__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49609(cljs.core.rest(s__49610__$1)));
} else {
var G__50041 = cljs.core.rest(s__49610__$1);
s__49610__$1 = G__50041;
continue;
}
} else {
var G__50042 = cljs.core.rest(s__49610__$1);
s__49610__$1 = G__50042;
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
var seq__49618_50043 = cljs.core.seq(warnings);
var chunk__49619_50044 = null;
var count__49620_50045 = (0);
var i__49621_50046 = (0);
while(true){
if((i__49621_50046 < count__49620_50045)){
var map__49628_50047 = chunk__49619_50044.cljs$core$IIndexed$_nth$arity$2(null,i__49621_50046);
var map__49628_50048__$1 = (((((!((map__49628_50047 == null))))?(((((map__49628_50047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49628_50047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49628_50047):map__49628_50047);
var w_50049 = map__49628_50048__$1;
var msg_50050__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628_50048__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628_50048__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628_50048__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628_50048__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50053)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50051),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50052),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50050__$1)].join(''));


var G__50062 = seq__49618_50043;
var G__50063 = chunk__49619_50044;
var G__50064 = count__49620_50045;
var G__50065 = (i__49621_50046 + (1));
seq__49618_50043 = G__50062;
chunk__49619_50044 = G__50063;
count__49620_50045 = G__50064;
i__49621_50046 = G__50065;
continue;
} else {
var temp__5735__auto___50066 = cljs.core.seq(seq__49618_50043);
if(temp__5735__auto___50066){
var seq__49618_50067__$1 = temp__5735__auto___50066;
if(cljs.core.chunked_seq_QMARK_(seq__49618_50067__$1)){
var c__4609__auto___50068 = cljs.core.chunk_first(seq__49618_50067__$1);
var G__50069 = cljs.core.chunk_rest(seq__49618_50067__$1);
var G__50070 = c__4609__auto___50068;
var G__50071 = cljs.core.count(c__4609__auto___50068);
var G__50072 = (0);
seq__49618_50043 = G__50069;
chunk__49619_50044 = G__50070;
count__49620_50045 = G__50071;
i__49621_50046 = G__50072;
continue;
} else {
var map__49632_50073 = cljs.core.first(seq__49618_50067__$1);
var map__49632_50074__$1 = (((((!((map__49632_50073 == null))))?(((((map__49632_50073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49632_50073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49632_50073):map__49632_50073);
var w_50075 = map__49632_50074__$1;
var msg_50076__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632_50074__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632_50074__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632_50074__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632_50074__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50079)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50077),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50078),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50076__$1)].join(''));


var G__50084 = cljs.core.next(seq__49618_50067__$1);
var G__50085 = null;
var G__50086 = (0);
var G__50087 = (0);
seq__49618_50043 = G__50084;
chunk__49619_50044 = G__50085;
count__49620_50045 = G__50086;
i__49621_50046 = G__50087;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49634){
var map__49635 = p__49634;
var map__49635__$1 = (((((!((map__49635 == null))))?(((((map__49635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49635):map__49635);
var src = map__49635__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49635__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49635__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49637){
var map__49638 = p__49637;
var map__49638__$1 = (((((!((map__49638 == null))))?(((((map__49638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49638):map__49638);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49638__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49642){
var map__49643 = p__49642;
var map__49643__$1 = (((((!((map__49643 == null))))?(((((map__49643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49643):map__49643);
var rc = map__49643__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49643__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49602_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49602_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49654){
var map__49655 = p__49654;
var map__49655__$1 = (((((!((map__49655 == null))))?(((((map__49655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49655):map__49655);
var msg = map__49655__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49655__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49657 = cljs.core.seq(updates);
var chunk__49659 = null;
var count__49660 = (0);
var i__49661 = (0);
while(true){
if((i__49661 < count__49660)){
var path = chunk__49659.cljs$core$IIndexed$_nth$arity$2(null,i__49661);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49721_50093 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49724_50094 = null;
var count__49725_50095 = (0);
var i__49726_50096 = (0);
while(true){
if((i__49726_50096 < count__49725_50095)){
var node_50097 = chunk__49724_50094.cljs$core$IIndexed$_nth$arity$2(null,i__49726_50096);
var path_match_50098 = shadow.cljs.devtools.client.browser.match_paths(node_50097.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50098)){
var new_link_50099 = (function (){var G__49736 = node_50097.cloneNode(true);
G__49736.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50098),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49736;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50098], 0));

goog.dom.insertSiblingAfter(new_link_50099,node_50097);

goog.dom.removeNode(node_50097);


var G__50100 = seq__49721_50093;
var G__50101 = chunk__49724_50094;
var G__50102 = count__49725_50095;
var G__50103 = (i__49726_50096 + (1));
seq__49721_50093 = G__50100;
chunk__49724_50094 = G__50101;
count__49725_50095 = G__50102;
i__49726_50096 = G__50103;
continue;
} else {
var G__50104 = seq__49721_50093;
var G__50105 = chunk__49724_50094;
var G__50106 = count__49725_50095;
var G__50107 = (i__49726_50096 + (1));
seq__49721_50093 = G__50104;
chunk__49724_50094 = G__50105;
count__49725_50095 = G__50106;
i__49726_50096 = G__50107;
continue;
}
} else {
var temp__5735__auto___50108 = cljs.core.seq(seq__49721_50093);
if(temp__5735__auto___50108){
var seq__49721_50109__$1 = temp__5735__auto___50108;
if(cljs.core.chunked_seq_QMARK_(seq__49721_50109__$1)){
var c__4609__auto___50110 = cljs.core.chunk_first(seq__49721_50109__$1);
var G__50111 = cljs.core.chunk_rest(seq__49721_50109__$1);
var G__50112 = c__4609__auto___50110;
var G__50113 = cljs.core.count(c__4609__auto___50110);
var G__50114 = (0);
seq__49721_50093 = G__50111;
chunk__49724_50094 = G__50112;
count__49725_50095 = G__50113;
i__49726_50096 = G__50114;
continue;
} else {
var node_50116 = cljs.core.first(seq__49721_50109__$1);
var path_match_50117 = shadow.cljs.devtools.client.browser.match_paths(node_50116.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50117)){
var new_link_50118 = (function (){var G__49737 = node_50116.cloneNode(true);
G__49737.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50117),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49737;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50117], 0));

goog.dom.insertSiblingAfter(new_link_50118,node_50116);

goog.dom.removeNode(node_50116);


var G__50119 = cljs.core.next(seq__49721_50109__$1);
var G__50120 = null;
var G__50121 = (0);
var G__50122 = (0);
seq__49721_50093 = G__50119;
chunk__49724_50094 = G__50120;
count__49725_50095 = G__50121;
i__49726_50096 = G__50122;
continue;
} else {
var G__50123 = cljs.core.next(seq__49721_50109__$1);
var G__50124 = null;
var G__50125 = (0);
var G__50126 = (0);
seq__49721_50093 = G__50123;
chunk__49724_50094 = G__50124;
count__49725_50095 = G__50125;
i__49726_50096 = G__50126;
continue;
}
}
} else {
}
}
break;
}


var G__50127 = seq__49657;
var G__50128 = chunk__49659;
var G__50129 = count__49660;
var G__50130 = (i__49661 + (1));
seq__49657 = G__50127;
chunk__49659 = G__50128;
count__49660 = G__50129;
i__49661 = G__50130;
continue;
} else {
var G__50131 = seq__49657;
var G__50132 = chunk__49659;
var G__50133 = count__49660;
var G__50134 = (i__49661 + (1));
seq__49657 = G__50131;
chunk__49659 = G__50132;
count__49660 = G__50133;
i__49661 = G__50134;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49657);
if(temp__5735__auto__){
var seq__49657__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49657__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49657__$1);
var G__50136 = cljs.core.chunk_rest(seq__49657__$1);
var G__50137 = c__4609__auto__;
var G__50138 = cljs.core.count(c__4609__auto__);
var G__50139 = (0);
seq__49657 = G__50136;
chunk__49659 = G__50137;
count__49660 = G__50138;
i__49661 = G__50139;
continue;
} else {
var path = cljs.core.first(seq__49657__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49738_50140 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49741_50141 = null;
var count__49742_50142 = (0);
var i__49743_50143 = (0);
while(true){
if((i__49743_50143 < count__49742_50142)){
var node_50144 = chunk__49741_50141.cljs$core$IIndexed$_nth$arity$2(null,i__49743_50143);
var path_match_50145 = shadow.cljs.devtools.client.browser.match_paths(node_50144.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50145)){
var new_link_50146 = (function (){var G__49748 = node_50144.cloneNode(true);
G__49748.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50145),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49748;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50145], 0));

goog.dom.insertSiblingAfter(new_link_50146,node_50144);

goog.dom.removeNode(node_50144);


var G__50147 = seq__49738_50140;
var G__50148 = chunk__49741_50141;
var G__50149 = count__49742_50142;
var G__50150 = (i__49743_50143 + (1));
seq__49738_50140 = G__50147;
chunk__49741_50141 = G__50148;
count__49742_50142 = G__50149;
i__49743_50143 = G__50150;
continue;
} else {
var G__50151 = seq__49738_50140;
var G__50152 = chunk__49741_50141;
var G__50153 = count__49742_50142;
var G__50154 = (i__49743_50143 + (1));
seq__49738_50140 = G__50151;
chunk__49741_50141 = G__50152;
count__49742_50142 = G__50153;
i__49743_50143 = G__50154;
continue;
}
} else {
var temp__5735__auto___50155__$1 = cljs.core.seq(seq__49738_50140);
if(temp__5735__auto___50155__$1){
var seq__49738_50156__$1 = temp__5735__auto___50155__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49738_50156__$1)){
var c__4609__auto___50157 = cljs.core.chunk_first(seq__49738_50156__$1);
var G__50158 = cljs.core.chunk_rest(seq__49738_50156__$1);
var G__50159 = c__4609__auto___50157;
var G__50160 = cljs.core.count(c__4609__auto___50157);
var G__50161 = (0);
seq__49738_50140 = G__50158;
chunk__49741_50141 = G__50159;
count__49742_50142 = G__50160;
i__49743_50143 = G__50161;
continue;
} else {
var node_50162 = cljs.core.first(seq__49738_50156__$1);
var path_match_50163 = shadow.cljs.devtools.client.browser.match_paths(node_50162.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50163)){
var new_link_50164 = (function (){var G__49753 = node_50162.cloneNode(true);
G__49753.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50163),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49753;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50163], 0));

goog.dom.insertSiblingAfter(new_link_50164,node_50162);

goog.dom.removeNode(node_50162);


var G__50165 = cljs.core.next(seq__49738_50156__$1);
var G__50166 = null;
var G__50167 = (0);
var G__50168 = (0);
seq__49738_50140 = G__50165;
chunk__49741_50141 = G__50166;
count__49742_50142 = G__50167;
i__49743_50143 = G__50168;
continue;
} else {
var G__50169 = cljs.core.next(seq__49738_50156__$1);
var G__50170 = null;
var G__50171 = (0);
var G__50172 = (0);
seq__49738_50140 = G__50169;
chunk__49741_50141 = G__50170;
count__49742_50142 = G__50171;
i__49743_50143 = G__50172;
continue;
}
}
} else {
}
}
break;
}


var G__50173 = cljs.core.next(seq__49657__$1);
var G__50174 = null;
var G__50175 = (0);
var G__50176 = (0);
seq__49657 = G__50173;
chunk__49659 = G__50174;
count__49660 = G__50175;
i__49661 = G__50176;
continue;
} else {
var G__50177 = cljs.core.next(seq__49657__$1);
var G__50178 = null;
var G__50179 = (0);
var G__50180 = (0);
seq__49657 = G__50177;
chunk__49659 = G__50178;
count__49660 = G__50179;
i__49661 = G__50180;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49799){
var map__49802 = p__49799;
var map__49802__$1 = (((((!((map__49802 == null))))?(((((map__49802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49802):map__49802);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49802__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49802__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49810,done){
var map__49811 = p__49810;
var map__49811__$1 = (((((!((map__49811 == null))))?(((((map__49811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49811):map__49811);
var msg = map__49811__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49816){
var map__49817 = p__49816;
var map__49817__$1 = (((((!((map__49817 == null))))?(((((map__49817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49817):map__49817);
var src = map__49817__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e49834){var e = e49834;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49837,done){
var map__49838 = p__49837;
var map__49838__$1 = (((((!((map__49838 == null))))?(((((map__49838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49838):map__49838);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49838__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49838__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49842){
var map__49844 = p__49842;
var map__49844__$1 = (((((!((map__49844 == null))))?(((((map__49844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49844):map__49844);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49853,done){
var map__49854 = p__49853;
var map__49854__$1 = (((((!((map__49854 == null))))?(((((map__49854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49854):map__49854);
var msg = map__49854__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49856_50181 = type;
var G__49856_50182__$1 = (((G__49856_50181 instanceof cljs.core.Keyword))?G__49856_50181.fqn:null);
switch (G__49856_50182__$1) {
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
var G__49875 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49876 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49877 = "POST";
var G__49878 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49879 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49875,G__49876,G__49877,G__49878,G__49879);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49886 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49885 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49885.cljs$core$IFn$_invoke$arity$1 ? fexpr__49885.cljs$core$IFn$_invoke$arity$1(G__49886) : fexpr__49885.call(null,G__49886));
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
}catch (e49902){var e = e49902;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50188 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50188)){
var s_50189 = temp__5735__auto___50188;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50189.onclose = (function (e){
return null;
}));

s_50189.close();

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
