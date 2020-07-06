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
var temp__5735__auto__ = (function (){var fexpr__67793 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__67793.cljs$core$IFn$_invoke$arity$1 ? fexpr__67793.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__67793.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67794){
var vec__67795 = p__67794;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67795,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__67798 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__67798)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__67798)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__67798)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__67798)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__67798)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__67798)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67798)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__67799){
var map__67800 = p__67799;
var map__67800__$1 = (((((!((map__67800 == null))))?(((((map__67800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67800):map__67800);
var request = map__67800__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__67802 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__67802,default_headers);

cljs_http.core.apply_response_type_BANG_(G__67802,response_type);

G__67802.setTimeoutInterval(timeout);

G__67802.setWithCredentials(send_credentials);

return G__67802;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__67803){
var map__67804 = p__67803;
var map__67804__$1 = (((((!((map__67804 == null))))?(((((map__67804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67804):map__67804);
var request = map__67804__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__67806 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__67806) : cljs_http.core.error_kw.call(null,G__67806));
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
var listener_67861 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__67811_67862 = xhr;
G__67811_67862.setProgressEventsEnabled(true);

G__67811_67862.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_67861,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__67811_67862.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_67861,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__55908__auto___67867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55840__auto__ = (function (state_67827){
var state_val_67828 = (state_67827[(1)]);
if((state_val_67828 === (1))){
var state_67827__$1 = state_67827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67827__$1,(2),cancel);
} else {
if((state_val_67828 === (2))){
var inst_67818 = (state_67827[(2)]);
var inst_67819 = xhr.isComplete();
var inst_67820 = cljs.core.not(inst_67819);
var state_67827__$1 = (function (){var statearr_67829 = state_67827;
(statearr_67829[(7)] = inst_67818);

return statearr_67829;
})();
if(inst_67820){
var statearr_67830_67868 = state_67827__$1;
(statearr_67830_67868[(1)] = (3));

} else {
var statearr_67831_67869 = state_67827__$1;
(statearr_67831_67869[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67828 === (3))){
var inst_67822 = xhr.abort();
var state_67827__$1 = state_67827;
var statearr_67832_67870 = state_67827__$1;
(statearr_67832_67870[(2)] = inst_67822);

(statearr_67832_67870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67828 === (4))){
var state_67827__$1 = state_67827;
var statearr_67833_67871 = state_67827__$1;
(statearr_67833_67871[(2)] = null);

(statearr_67833_67871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67828 === (5))){
var inst_67825 = (state_67827[(2)]);
var state_67827__$1 = state_67827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67827__$1,inst_67825);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__55841__auto__ = null;
var cljs_http$core$xhr_$_state_machine__55841__auto____0 = (function (){
var statearr_67834 = [null,null,null,null,null,null,null,null];
(statearr_67834[(0)] = cljs_http$core$xhr_$_state_machine__55841__auto__);

(statearr_67834[(1)] = (1));

return statearr_67834;
});
var cljs_http$core$xhr_$_state_machine__55841__auto____1 = (function (state_67827){
while(true){
var ret_value__55842__auto__ = (function (){try{while(true){
var result__55843__auto__ = switch__55840__auto__(state_67827);
if(cljs.core.keyword_identical_QMARK_(result__55843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55843__auto__;
}
break;
}
}catch (e67835){if((e67835 instanceof Object)){
var ex__55844__auto__ = e67835;
var statearr_67836_67872 = state_67827;
(statearr_67836_67872[(5)] = ex__55844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67873 = state_67827;
state_67827 = G__67873;
continue;
} else {
return ret_value__55842__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__55841__auto__ = function(state_67827){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__55841__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__55841__auto____1.call(this,state_67827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__55841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__55841__auto____0;
cljs_http$core$xhr_$_state_machine__55841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__55841__auto____1;
return cljs_http$core$xhr_$_state_machine__55841__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_67837 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_67837[(6)] = c__55908__auto___67867);

return statearr_67837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__67838){
var map__67839 = p__67838;
var map__67839__$1 = (((((!((map__67839 == null))))?(((((map__67839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67839):map__67839);
var request = map__67839__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67839__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_67874 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_67874], null));

if(cljs.core.truth_(cancel)){
var c__55908__auto___67878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55840__auto__ = (function (state_67845){
var state_val_67846 = (state_67845[(1)]);
if((state_val_67846 === (1))){
var state_67845__$1 = state_67845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67845__$1,(2),cancel);
} else {
if((state_val_67846 === (2))){
var inst_67842 = (state_67845[(2)]);
var inst_67843 = jsonp.cancel(req_67874);
var state_67845__$1 = (function (){var statearr_67847 = state_67845;
(statearr_67847[(7)] = inst_67842);

return statearr_67847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67845__$1,inst_67843);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__55841__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__55841__auto____0 = (function (){
var statearr_67848 = [null,null,null,null,null,null,null,null];
(statearr_67848[(0)] = cljs_http$core$jsonp_$_state_machine__55841__auto__);

(statearr_67848[(1)] = (1));

return statearr_67848;
});
var cljs_http$core$jsonp_$_state_machine__55841__auto____1 = (function (state_67845){
while(true){
var ret_value__55842__auto__ = (function (){try{while(true){
var result__55843__auto__ = switch__55840__auto__(state_67845);
if(cljs.core.keyword_identical_QMARK_(result__55843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55843__auto__;
}
break;
}
}catch (e67849){if((e67849 instanceof Object)){
var ex__55844__auto__ = e67849;
var statearr_67850_67882 = state_67845;
(statearr_67850_67882[(5)] = ex__55844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67883 = state_67845;
state_67845 = G__67883;
continue;
} else {
return ret_value__55842__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__55841__auto__ = function(state_67845){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__55841__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__55841__auto____1.call(this,state_67845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__55841__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__55841__auto____0;
cljs_http$core$jsonp_$_state_machine__55841__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__55841__auto____1;
return cljs_http$core$jsonp_$_state_machine__55841__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_67851 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_67851[(6)] = c__55908__auto___67878);

return statearr_67851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__67856){
var map__67857 = p__67856;
var map__67857__$1 = (((((!((map__67857 == null))))?(((((map__67857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67857):map__67857);
var request = map__67857__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67857__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
