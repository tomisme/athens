goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__44750 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__44750.cljs$core$IFn$_invoke$arity$1 ? fexpr__44750.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__44750.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44753){
var vec__44754 = p__44753;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44754,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__44761 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__44761)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__44761)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__44761)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__44761)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__44761)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44761)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44761)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__44762){
var map__44763 = p__44762;
var map__44763__$1 = (((((!((map__44763 == null))))?(((((map__44763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44763):map__44763);
var request = map__44763__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44763__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44763__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44763__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__44782 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__44782,default_headers);

cljs_http.core.apply_response_type_BANG_(G__44782,response_type);

G__44782.setTimeoutInterval(timeout);

G__44782.setWithCredentials(send_credentials);

return G__44782;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__44783){
var map__44784 = p__44783;
var map__44784__$1 = (((((!((map__44784 == null))))?(((((map__44784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44784):map__44784);
var request = map__44784__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44784__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__44795 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__44795) : cljs_http.core.error_kw.call(null,G__44795));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_45009 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__44818_45010 = xhr;
G__44818_45010.setProgressEventsEnabled(true);

G__44818_45010.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_45009,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__44818_45010.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_45009,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__39427__auto___45011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39428__auto__ = (function (){var switch__39404__auto__ = (function (state_44853){
var state_val_44855 = (state_44853[(1)]);
if((state_val_44855 === (1))){
var state_44853__$1 = state_44853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44853__$1,(2),cancel);
} else {
if((state_val_44855 === (2))){
var inst_44832 = (state_44853[(2)]);
var inst_44837 = xhr.isComplete();
var inst_44838 = cljs.core.not(inst_44837);
var state_44853__$1 = (function (){var statearr_44856 = state_44853;
(statearr_44856[(7)] = inst_44832);

return statearr_44856;
})();
if(inst_44838){
var statearr_44857_45012 = state_44853__$1;
(statearr_44857_45012[(1)] = (3));

} else {
var statearr_44858_45013 = state_44853__$1;
(statearr_44858_45013[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (3))){
var inst_44840 = xhr.abort();
var state_44853__$1 = state_44853;
var statearr_44859_45014 = state_44853__$1;
(statearr_44859_45014[(2)] = inst_44840);

(statearr_44859_45014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (4))){
var state_44853__$1 = state_44853;
var statearr_44862_45015 = state_44853__$1;
(statearr_44862_45015[(2)] = null);

(statearr_44862_45015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44855 === (5))){
var inst_44843 = (state_44853[(2)]);
var state_44853__$1 = state_44853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44853__$1,inst_44843);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__39405__auto__ = null;
var cljs_http$core$xhr_$_state_machine__39405__auto____0 = (function (){
var statearr_44867 = [null,null,null,null,null,null,null,null];
(statearr_44867[(0)] = cljs_http$core$xhr_$_state_machine__39405__auto__);

(statearr_44867[(1)] = (1));

return statearr_44867;
});
var cljs_http$core$xhr_$_state_machine__39405__auto____1 = (function (state_44853){
while(true){
var ret_value__39406__auto__ = (function (){try{while(true){
var result__39407__auto__ = switch__39404__auto__(state_44853);
if(cljs.core.keyword_identical_QMARK_(result__39407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39407__auto__;
}
break;
}
}catch (e44868){if((e44868 instanceof Object)){
var ex__39408__auto__ = e44868;
var statearr_44869_45050 = state_44853;
(statearr_44869_45050[(5)] = ex__39408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45055 = state_44853;
state_44853 = G__45055;
continue;
} else {
return ret_value__39406__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__39405__auto__ = function(state_44853){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__39405__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__39405__auto____1.call(this,state_44853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__39405__auto____0;
cljs_http$core$xhr_$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__39405__auto____1;
return cljs_http$core$xhr_$_state_machine__39405__auto__;
})()
})();
var state__39429__auto__ = (function (){var statearr_44870 = (f__39428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39428__auto__.cljs$core$IFn$_invoke$arity$0() : f__39428__auto__.call(null));
(statearr_44870[(6)] = c__39427__auto___45011);

return statearr_44870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39429__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__44871){
var map__44872 = p__44871;
var map__44872__$1 = (((((!((map__44872 == null))))?(((((map__44872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44872):map__44872);
var request = map__44872__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44872__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44872__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44872__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44872__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_45117 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_45117], null));

if(cljs.core.truth_(cancel)){
var c__39427__auto___45186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39428__auto__ = (function (){var switch__39404__auto__ = (function (state_44884){
var state_val_44885 = (state_44884[(1)]);
if((state_val_44885 === (1))){
var state_44884__$1 = state_44884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44884__$1,(2),cancel);
} else {
if((state_val_44885 === (2))){
var inst_44881 = (state_44884[(2)]);
var inst_44882 = jsonp.cancel(req_45117);
var state_44884__$1 = (function (){var statearr_44894 = state_44884;
(statearr_44894[(7)] = inst_44881);

return statearr_44894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44884__$1,inst_44882);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__39405__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__39405__auto____0 = (function (){
var statearr_44895 = [null,null,null,null,null,null,null,null];
(statearr_44895[(0)] = cljs_http$core$jsonp_$_state_machine__39405__auto__);

(statearr_44895[(1)] = (1));

return statearr_44895;
});
var cljs_http$core$jsonp_$_state_machine__39405__auto____1 = (function (state_44884){
while(true){
var ret_value__39406__auto__ = (function (){try{while(true){
var result__39407__auto__ = switch__39404__auto__(state_44884);
if(cljs.core.keyword_identical_QMARK_(result__39407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39407__auto__;
}
break;
}
}catch (e44896){if((e44896 instanceof Object)){
var ex__39408__auto__ = e44896;
var statearr_44897_45187 = state_44884;
(statearr_44897_45187[(5)] = ex__39408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45188 = state_44884;
state_44884 = G__45188;
continue;
} else {
return ret_value__39406__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__39405__auto__ = function(state_44884){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__39405__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__39405__auto____1.call(this,state_44884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__39405__auto____0;
cljs_http$core$jsonp_$_state_machine__39405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__39405__auto____1;
return cljs_http$core$jsonp_$_state_machine__39405__auto__;
})()
})();
var state__39429__auto__ = (function (){var statearr_44898 = (f__39428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39428__auto__.cljs$core$IFn$_invoke$arity$0() : f__39428__auto__.call(null));
(statearr_44898[(6)] = c__39427__auto___45186);

return statearr_44898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39429__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__44899){
var map__44900 = p__44899;
var map__44900__$1 = (((((!((map__44900 == null))))?(((((map__44900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44900):map__44900);
var request = map__44900__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
