goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47587 = coll;
var G__47588 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47587,G__47588) : shadow.dom.lazy_native_coll_seq.call(null,G__47587,G__47588));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47624 = arguments.length;
switch (G__47624) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47641 = arguments.length;
switch (G__47641) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47644 = arguments.length;
switch (G__47644) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47648 = arguments.length;
switch (G__47648) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47654 = arguments.length;
switch (G__47654) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47657 = document;
var G__47658 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47657,G__47658);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47659 = shadow.dom.dom_node(parent);
var G__47660 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47659,G__47660);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47661 = shadow.dom.dom_node(el);
var G__47662 = cls;
return goog.dom.classlist.add(G__47661,G__47662);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47665 = shadow.dom.dom_node(el);
var G__47666 = cls;
return goog.dom.classlist.remove(G__47665,G__47666);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47670 = arguments.length;
switch (G__47670) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47674 = shadow.dom.dom_node(el);
var G__47675 = cls;
return goog.dom.classlist.toggle(G__47674,G__47675);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47679){if((e47679 instanceof Object)){
var e = e47679;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47679;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47684 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47685 = null;
var count__47686 = (0);
var i__47687 = (0);
while(true){
if((i__47687 < count__47686)){
var el = chunk__47685.cljs$core$IIndexed$_nth$arity$2(null,i__47687);
var handler_48263__$1 = ((function (seq__47684,chunk__47685,count__47686,i__47687,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47684,chunk__47685,count__47686,i__47687,el))
;
var G__47704_48264 = el;
var G__47705_48265 = cljs.core.name(ev);
var G__47706_48266 = handler_48263__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47704_48264,G__47705_48265,G__47706_48266) : shadow.dom.dom_listen.call(null,G__47704_48264,G__47705_48265,G__47706_48266));


var G__48268 = seq__47684;
var G__48269 = chunk__47685;
var G__48270 = count__47686;
var G__48271 = (i__47687 + (1));
seq__47684 = G__48268;
chunk__47685 = G__48269;
count__47686 = G__48270;
i__47687 = G__48271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47684);
if(temp__5735__auto__){
var seq__47684__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47684__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47684__$1);
var G__48273 = cljs.core.chunk_rest(seq__47684__$1);
var G__48274 = c__4609__auto__;
var G__48275 = cljs.core.count(c__4609__auto__);
var G__48276 = (0);
seq__47684 = G__48273;
chunk__47685 = G__48274;
count__47686 = G__48275;
i__47687 = G__48276;
continue;
} else {
var el = cljs.core.first(seq__47684__$1);
var handler_48277__$1 = ((function (seq__47684,chunk__47685,count__47686,i__47687,el,seq__47684__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47684,chunk__47685,count__47686,i__47687,el,seq__47684__$1,temp__5735__auto__))
;
var G__47709_48278 = el;
var G__47710_48279 = cljs.core.name(ev);
var G__47711_48280 = handler_48277__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47709_48278,G__47710_48279,G__47711_48280) : shadow.dom.dom_listen.call(null,G__47709_48278,G__47710_48279,G__47711_48280));


var G__48281 = cljs.core.next(seq__47684__$1);
var G__48282 = null;
var G__48283 = (0);
var G__48284 = (0);
seq__47684 = G__48281;
chunk__47685 = G__48282;
count__47686 = G__48283;
i__47687 = G__48284;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47713 = arguments.length;
switch (G__47713) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47715 = shadow.dom.dom_node(el);
var G__47716 = cljs.core.name(ev);
var G__47717 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47715,G__47716,G__47717) : shadow.dom.dom_listen.call(null,G__47715,G__47716,G__47717));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47720 = shadow.dom.dom_node(el);
var G__47721 = cljs.core.name(ev);
var G__47722 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47720,G__47721,G__47722) : shadow.dom.dom_listen_remove.call(null,G__47720,G__47721,G__47722));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47723 = cljs.core.seq(events);
var chunk__47724 = null;
var count__47725 = (0);
var i__47726 = (0);
while(true){
if((i__47726 < count__47725)){
var vec__47733 = chunk__47724.cljs$core$IIndexed$_nth$arity$2(null,i__47726);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47733,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48290 = seq__47723;
var G__48291 = chunk__47724;
var G__48292 = count__47725;
var G__48293 = (i__47726 + (1));
seq__47723 = G__48290;
chunk__47724 = G__48291;
count__47725 = G__48292;
i__47726 = G__48293;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47723);
if(temp__5735__auto__){
var seq__47723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47723__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47723__$1);
var G__48295 = cljs.core.chunk_rest(seq__47723__$1);
var G__48296 = c__4609__auto__;
var G__48297 = cljs.core.count(c__4609__auto__);
var G__48298 = (0);
seq__47723 = G__48295;
chunk__47724 = G__48296;
count__47725 = G__48297;
i__47726 = G__48298;
continue;
} else {
var vec__47736 = cljs.core.first(seq__47723__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47736,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47736,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48300 = cljs.core.next(seq__47723__$1);
var G__48301 = null;
var G__48302 = (0);
var G__48303 = (0);
seq__47723 = G__48300;
chunk__47724 = G__48301;
count__47725 = G__48302;
i__47726 = G__48303;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47739 = cljs.core.seq(styles);
var chunk__47740 = null;
var count__47741 = (0);
var i__47742 = (0);
while(true){
if((i__47742 < count__47741)){
var vec__47755 = chunk__47740.cljs$core$IIndexed$_nth$arity$2(null,i__47742);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47755,(1),null);
var G__47758_48304 = dom;
var G__47759_48305 = cljs.core.name(k);
var G__47760_48306 = (((v == null))?"":v);
goog.style.setStyle(G__47758_48304,G__47759_48305,G__47760_48306);


var G__48308 = seq__47739;
var G__48309 = chunk__47740;
var G__48310 = count__47741;
var G__48311 = (i__47742 + (1));
seq__47739 = G__48308;
chunk__47740 = G__48309;
count__47741 = G__48310;
i__47742 = G__48311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47739);
if(temp__5735__auto__){
var seq__47739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47739__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47739__$1);
var G__48313 = cljs.core.chunk_rest(seq__47739__$1);
var G__48314 = c__4609__auto__;
var G__48315 = cljs.core.count(c__4609__auto__);
var G__48316 = (0);
seq__47739 = G__48313;
chunk__47740 = G__48314;
count__47741 = G__48315;
i__47742 = G__48316;
continue;
} else {
var vec__47762 = cljs.core.first(seq__47739__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47762,(1),null);
var G__47765_48320 = dom;
var G__47766_48321 = cljs.core.name(k);
var G__47767_48322 = (((v == null))?"":v);
goog.style.setStyle(G__47765_48320,G__47766_48321,G__47767_48322);


var G__48323 = cljs.core.next(seq__47739__$1);
var G__48324 = null;
var G__48325 = (0);
var G__48326 = (0);
seq__47739 = G__48323;
chunk__47740 = G__48324;
count__47741 = G__48325;
i__47742 = G__48326;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47769_48328 = key;
var G__47769_48329__$1 = (((G__47769_48328 instanceof cljs.core.Keyword))?G__47769_48328.fqn:null);
switch (G__47769_48329__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48332 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48332,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48332,"aria-");
}
})())){
el.setAttribute(ks_48332,value);
} else {
(el[ks_48332] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47777 = shadow.dom.dom_node(el);
var G__47778 = cls;
return goog.dom.classlist.contains(G__47777,G__47778);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47789){
var map__47790 = p__47789;
var map__47790__$1 = (((((!((map__47790 == null))))?(((((map__47790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47790):map__47790);
var props = map__47790__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47790__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47793 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47793,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47793,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47793,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47797 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47797,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47797;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47802 = arguments.length;
switch (G__47802) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47810){
var vec__47812 = p__47810;
var seq__47813 = cljs.core.seq(vec__47812);
var first__47814 = cljs.core.first(seq__47813);
var seq__47813__$1 = cljs.core.next(seq__47813);
var nn = first__47814;
var first__47814__$1 = cljs.core.first(seq__47813__$1);
var seq__47813__$2 = cljs.core.next(seq__47813__$1);
var np = first__47814__$1;
var nc = seq__47813__$2;
var node = vec__47812;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47816 = nn;
var G__47817 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47816,G__47817) : create_fn.call(null,G__47816,G__47817));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47819 = nn;
var G__47820 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47819,G__47820) : create_fn.call(null,G__47819,G__47820));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47822 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47822,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47822,(1),null);
var seq__47826_48356 = cljs.core.seq(node_children);
var chunk__47827_48357 = null;
var count__47828_48358 = (0);
var i__47829_48359 = (0);
while(true){
if((i__47829_48359 < count__47828_48358)){
var child_struct_48360 = chunk__47827_48357.cljs$core$IIndexed$_nth$arity$2(null,i__47829_48359);
var children_48363 = shadow.dom.dom_node(child_struct_48360);
if(cljs.core.seq_QMARK_(children_48363)){
var seq__47861_48364 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48363));
var chunk__47863_48365 = null;
var count__47864_48366 = (0);
var i__47865_48367 = (0);
while(true){
if((i__47865_48367 < count__47864_48366)){
var child_48368 = chunk__47863_48365.cljs$core$IIndexed$_nth$arity$2(null,i__47865_48367);
if(cljs.core.truth_(child_48368)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48368);


var G__48370 = seq__47861_48364;
var G__48371 = chunk__47863_48365;
var G__48372 = count__47864_48366;
var G__48373 = (i__47865_48367 + (1));
seq__47861_48364 = G__48370;
chunk__47863_48365 = G__48371;
count__47864_48366 = G__48372;
i__47865_48367 = G__48373;
continue;
} else {
var G__48374 = seq__47861_48364;
var G__48375 = chunk__47863_48365;
var G__48376 = count__47864_48366;
var G__48377 = (i__47865_48367 + (1));
seq__47861_48364 = G__48374;
chunk__47863_48365 = G__48375;
count__47864_48366 = G__48376;
i__47865_48367 = G__48377;
continue;
}
} else {
var temp__5735__auto___48379 = cljs.core.seq(seq__47861_48364);
if(temp__5735__auto___48379){
var seq__47861_48380__$1 = temp__5735__auto___48379;
if(cljs.core.chunked_seq_QMARK_(seq__47861_48380__$1)){
var c__4609__auto___48381 = cljs.core.chunk_first(seq__47861_48380__$1);
var G__48382 = cljs.core.chunk_rest(seq__47861_48380__$1);
var G__48383 = c__4609__auto___48381;
var G__48384 = cljs.core.count(c__4609__auto___48381);
var G__48385 = (0);
seq__47861_48364 = G__48382;
chunk__47863_48365 = G__48383;
count__47864_48366 = G__48384;
i__47865_48367 = G__48385;
continue;
} else {
var child_48386 = cljs.core.first(seq__47861_48380__$1);
if(cljs.core.truth_(child_48386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48386);


var G__48388 = cljs.core.next(seq__47861_48380__$1);
var G__48389 = null;
var G__48390 = (0);
var G__48391 = (0);
seq__47861_48364 = G__48388;
chunk__47863_48365 = G__48389;
count__47864_48366 = G__48390;
i__47865_48367 = G__48391;
continue;
} else {
var G__48392 = cljs.core.next(seq__47861_48380__$1);
var G__48393 = null;
var G__48394 = (0);
var G__48395 = (0);
seq__47861_48364 = G__48392;
chunk__47863_48365 = G__48393;
count__47864_48366 = G__48394;
i__47865_48367 = G__48395;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48363);
}


var G__48400 = seq__47826_48356;
var G__48401 = chunk__47827_48357;
var G__48402 = count__47828_48358;
var G__48403 = (i__47829_48359 + (1));
seq__47826_48356 = G__48400;
chunk__47827_48357 = G__48401;
count__47828_48358 = G__48402;
i__47829_48359 = G__48403;
continue;
} else {
var temp__5735__auto___48404 = cljs.core.seq(seq__47826_48356);
if(temp__5735__auto___48404){
var seq__47826_48405__$1 = temp__5735__auto___48404;
if(cljs.core.chunked_seq_QMARK_(seq__47826_48405__$1)){
var c__4609__auto___48406 = cljs.core.chunk_first(seq__47826_48405__$1);
var G__48407 = cljs.core.chunk_rest(seq__47826_48405__$1);
var G__48408 = c__4609__auto___48406;
var G__48409 = cljs.core.count(c__4609__auto___48406);
var G__48410 = (0);
seq__47826_48356 = G__48407;
chunk__47827_48357 = G__48408;
count__47828_48358 = G__48409;
i__47829_48359 = G__48410;
continue;
} else {
var child_struct_48411 = cljs.core.first(seq__47826_48405__$1);
var children_48412 = shadow.dom.dom_node(child_struct_48411);
if(cljs.core.seq_QMARK_(children_48412)){
var seq__47870_48413 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48412));
var chunk__47872_48414 = null;
var count__47873_48415 = (0);
var i__47874_48416 = (0);
while(true){
if((i__47874_48416 < count__47873_48415)){
var child_48417 = chunk__47872_48414.cljs$core$IIndexed$_nth$arity$2(null,i__47874_48416);
if(cljs.core.truth_(child_48417)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48417);


var G__48418 = seq__47870_48413;
var G__48419 = chunk__47872_48414;
var G__48420 = count__47873_48415;
var G__48421 = (i__47874_48416 + (1));
seq__47870_48413 = G__48418;
chunk__47872_48414 = G__48419;
count__47873_48415 = G__48420;
i__47874_48416 = G__48421;
continue;
} else {
var G__48422 = seq__47870_48413;
var G__48423 = chunk__47872_48414;
var G__48424 = count__47873_48415;
var G__48425 = (i__47874_48416 + (1));
seq__47870_48413 = G__48422;
chunk__47872_48414 = G__48423;
count__47873_48415 = G__48424;
i__47874_48416 = G__48425;
continue;
}
} else {
var temp__5735__auto___48426__$1 = cljs.core.seq(seq__47870_48413);
if(temp__5735__auto___48426__$1){
var seq__47870_48427__$1 = temp__5735__auto___48426__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47870_48427__$1)){
var c__4609__auto___48428 = cljs.core.chunk_first(seq__47870_48427__$1);
var G__48429 = cljs.core.chunk_rest(seq__47870_48427__$1);
var G__48430 = c__4609__auto___48428;
var G__48431 = cljs.core.count(c__4609__auto___48428);
var G__48432 = (0);
seq__47870_48413 = G__48429;
chunk__47872_48414 = G__48430;
count__47873_48415 = G__48431;
i__47874_48416 = G__48432;
continue;
} else {
var child_48436 = cljs.core.first(seq__47870_48427__$1);
if(cljs.core.truth_(child_48436)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48436);


var G__48437 = cljs.core.next(seq__47870_48427__$1);
var G__48438 = null;
var G__48439 = (0);
var G__48440 = (0);
seq__47870_48413 = G__48437;
chunk__47872_48414 = G__48438;
count__47873_48415 = G__48439;
i__47874_48416 = G__48440;
continue;
} else {
var G__48441 = cljs.core.next(seq__47870_48427__$1);
var G__48442 = null;
var G__48443 = (0);
var G__48444 = (0);
seq__47870_48413 = G__48441;
chunk__47872_48414 = G__48442;
count__47873_48415 = G__48443;
i__47874_48416 = G__48444;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48412);
}


var G__48446 = cljs.core.next(seq__47826_48405__$1);
var G__48447 = null;
var G__48448 = (0);
var G__48449 = (0);
seq__47826_48356 = G__48446;
chunk__47827_48357 = G__48447;
count__47828_48358 = G__48448;
i__47829_48359 = G__48449;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__47882 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__47882);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47884 = cljs.core.seq(node);
var chunk__47885 = null;
var count__47886 = (0);
var i__47887 = (0);
while(true){
if((i__47887 < count__47886)){
var n = chunk__47885.cljs$core$IIndexed$_nth$arity$2(null,i__47887);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48456 = seq__47884;
var G__48457 = chunk__47885;
var G__48458 = count__47886;
var G__48459 = (i__47887 + (1));
seq__47884 = G__48456;
chunk__47885 = G__48457;
count__47886 = G__48458;
i__47887 = G__48459;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47884);
if(temp__5735__auto__){
var seq__47884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47884__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47884__$1);
var G__48463 = cljs.core.chunk_rest(seq__47884__$1);
var G__48464 = c__4609__auto__;
var G__48465 = cljs.core.count(c__4609__auto__);
var G__48466 = (0);
seq__47884 = G__48463;
chunk__47885 = G__48464;
count__47886 = G__48465;
i__47887 = G__48466;
continue;
} else {
var n = cljs.core.first(seq__47884__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48467 = cljs.core.next(seq__47884__$1);
var G__48468 = null;
var G__48469 = (0);
var G__48470 = (0);
seq__47884 = G__48467;
chunk__47885 = G__48468;
count__47886 = G__48469;
i__47887 = G__48470;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__47889 = shadow.dom.dom_node(new$);
var G__47890 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__47889,G__47890);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47895 = arguments.length;
switch (G__47895) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47904 = arguments.length;
switch (G__47904) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47916 = arguments.length;
switch (G__47916) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48488 = arguments.length;
var i__4790__auto___48489 = (0);
while(true){
if((i__4790__auto___48489 < len__4789__auto___48488)){
args__4795__auto__.push((arguments[i__4790__auto___48489]));

var G__48490 = (i__4790__auto___48489 + (1));
i__4790__auto___48489 = G__48490;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47940_48491 = cljs.core.seq(nodes);
var chunk__47941_48492 = null;
var count__47942_48493 = (0);
var i__47943_48494 = (0);
while(true){
if((i__47943_48494 < count__47942_48493)){
var node_48495 = chunk__47941_48492.cljs$core$IIndexed$_nth$arity$2(null,i__47943_48494);
fragment.appendChild(shadow.dom._to_dom(node_48495));


var G__48496 = seq__47940_48491;
var G__48497 = chunk__47941_48492;
var G__48498 = count__47942_48493;
var G__48499 = (i__47943_48494 + (1));
seq__47940_48491 = G__48496;
chunk__47941_48492 = G__48497;
count__47942_48493 = G__48498;
i__47943_48494 = G__48499;
continue;
} else {
var temp__5735__auto___48503 = cljs.core.seq(seq__47940_48491);
if(temp__5735__auto___48503){
var seq__47940_48504__$1 = temp__5735__auto___48503;
if(cljs.core.chunked_seq_QMARK_(seq__47940_48504__$1)){
var c__4609__auto___48505 = cljs.core.chunk_first(seq__47940_48504__$1);
var G__48506 = cljs.core.chunk_rest(seq__47940_48504__$1);
var G__48507 = c__4609__auto___48505;
var G__48508 = cljs.core.count(c__4609__auto___48505);
var G__48509 = (0);
seq__47940_48491 = G__48506;
chunk__47941_48492 = G__48507;
count__47942_48493 = G__48508;
i__47943_48494 = G__48509;
continue;
} else {
var node_48510 = cljs.core.first(seq__47940_48504__$1);
fragment.appendChild(shadow.dom._to_dom(node_48510));


var G__48511 = cljs.core.next(seq__47940_48504__$1);
var G__48512 = null;
var G__48513 = (0);
var G__48514 = (0);
seq__47940_48491 = G__48511;
chunk__47941_48492 = G__48512;
count__47942_48493 = G__48513;
i__47943_48494 = G__48514;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47936){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47936));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47950_48515 = cljs.core.seq(scripts);
var chunk__47951_48516 = null;
var count__47952_48517 = (0);
var i__47953_48518 = (0);
while(true){
if((i__47953_48518 < count__47952_48517)){
var vec__47960_48519 = chunk__47951_48516.cljs$core$IIndexed$_nth$arity$2(null,i__47953_48518);
var script_tag_48520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47960_48519,(0),null);
var script_body_48521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47960_48519,(1),null);
eval(script_body_48521);


var G__48522 = seq__47950_48515;
var G__48523 = chunk__47951_48516;
var G__48524 = count__47952_48517;
var G__48525 = (i__47953_48518 + (1));
seq__47950_48515 = G__48522;
chunk__47951_48516 = G__48523;
count__47952_48517 = G__48524;
i__47953_48518 = G__48525;
continue;
} else {
var temp__5735__auto___48526 = cljs.core.seq(seq__47950_48515);
if(temp__5735__auto___48526){
var seq__47950_48527__$1 = temp__5735__auto___48526;
if(cljs.core.chunked_seq_QMARK_(seq__47950_48527__$1)){
var c__4609__auto___48528 = cljs.core.chunk_first(seq__47950_48527__$1);
var G__48529 = cljs.core.chunk_rest(seq__47950_48527__$1);
var G__48530 = c__4609__auto___48528;
var G__48531 = cljs.core.count(c__4609__auto___48528);
var G__48532 = (0);
seq__47950_48515 = G__48529;
chunk__47951_48516 = G__48530;
count__47952_48517 = G__48531;
i__47953_48518 = G__48532;
continue;
} else {
var vec__47963_48533 = cljs.core.first(seq__47950_48527__$1);
var script_tag_48534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47963_48533,(0),null);
var script_body_48535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47963_48533,(1),null);
eval(script_body_48535);


var G__48544 = cljs.core.next(seq__47950_48527__$1);
var G__48545 = null;
var G__48546 = (0);
var G__48547 = (0);
seq__47950_48515 = G__48544;
chunk__47951_48516 = G__48545;
count__47952_48517 = G__48546;
i__47953_48518 = G__48547;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47966){
var vec__47967 = p__47966;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47967,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47967,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__47971 = shadow.dom.dom_node(el);
var G__47972 = cls;
return goog.dom.getAncestorByClass(G__47971,G__47972);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47974 = arguments.length;
switch (G__47974) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__47975 = shadow.dom.dom_node(el);
var G__47976 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__47975,G__47976);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__47978 = shadow.dom.dom_node(el);
var G__47979 = cljs.core.name(tag);
var G__47980 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__47978,G__47979,G__47980);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__47981 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__47981);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__47982 = shadow.dom.dom_node(dom);
var G__47983 = value;
return goog.dom.forms.setValue(G__47982,G__47983);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47984 = cljs.core.seq(style_keys);
var chunk__47985 = null;
var count__47986 = (0);
var i__47987 = (0);
while(true){
if((i__47987 < count__47986)){
var it = chunk__47985.cljs$core$IIndexed$_nth$arity$2(null,i__47987);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48561 = seq__47984;
var G__48562 = chunk__47985;
var G__48563 = count__47986;
var G__48564 = (i__47987 + (1));
seq__47984 = G__48561;
chunk__47985 = G__48562;
count__47986 = G__48563;
i__47987 = G__48564;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47984);
if(temp__5735__auto__){
var seq__47984__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47984__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47984__$1);
var G__48569 = cljs.core.chunk_rest(seq__47984__$1);
var G__48570 = c__4609__auto__;
var G__48571 = cljs.core.count(c__4609__auto__);
var G__48572 = (0);
seq__47984 = G__48569;
chunk__47985 = G__48570;
count__47986 = G__48571;
i__47987 = G__48572;
continue;
} else {
var it = cljs.core.first(seq__47984__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48573 = cljs.core.next(seq__47984__$1);
var G__48574 = null;
var G__48575 = (0);
var G__48576 = (0);
seq__47984 = G__48573;
chunk__47985 = G__48574;
count__47986 = G__48575;
i__47987 = G__48576;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k47994,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48004 = k47994;
var G__48004__$1 = (((G__48004 instanceof cljs.core.Keyword))?G__48004.fqn:null);
switch (G__48004__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47994,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48010){
var vec__48011 = p__48010;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48011,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48011,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47993){
var self__ = this;
var G__47993__$1 = this;
return (new cljs.core.RecordIter((0),G__47993__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48014 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48014(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47995,other47996){
var self__ = this;
var this47995__$1 = this;
return (((!((other47996 == null)))) && ((this47995__$1.constructor === other47996.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47995__$1.x,other47996.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47995__$1.y,other47996.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47995__$1.__extmap,other47996.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__47993){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48019 = cljs.core.keyword_identical_QMARK_;
var expr__48020 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48023 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48024 = expr__48020;
return (pred__48019.cljs$core$IFn$_invoke$arity$2 ? pred__48019.cljs$core$IFn$_invoke$arity$2(G__48023,G__48024) : pred__48019.call(null,G__48023,G__48024));
})())){
return (new shadow.dom.Coordinate(G__47993,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48025 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48026 = expr__48020;
return (pred__48019.cljs$core$IFn$_invoke$arity$2 ? pred__48019.cljs$core$IFn$_invoke$arity$2(G__48025,G__48026) : pred__48019.call(null,G__48025,G__48026));
})())){
return (new shadow.dom.Coordinate(self__.x,G__47993,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__47993),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__47993){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47993,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47999){
var extmap__4478__auto__ = (function (){var G__48031 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47999,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47999)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48031);
} else {
return G__48031;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47999),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47999),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48032 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48032);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48035 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48035);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48038 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48038);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48040,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48047 = k48040;
var G__48047__$1 = (((G__48047 instanceof cljs.core.Keyword))?G__48047.fqn:null);
switch (G__48047__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48040,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48048){
var vec__48049 = p__48048;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48039){
var self__ = this;
var G__48039__$1 = this;
return (new cljs.core.RecordIter((0),G__48039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48054 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48054(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48041,other48042){
var self__ = this;
var this48041__$1 = this;
return (((!((other48042 == null)))) && ((this48041__$1.constructor === other48042.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48041__$1.w,other48042.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48041__$1.h,other48042.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48041__$1.__extmap,other48042.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48039){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48062 = cljs.core.keyword_identical_QMARK_;
var expr__48063 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48065 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48066 = expr__48063;
return (pred__48062.cljs$core$IFn$_invoke$arity$2 ? pred__48062.cljs$core$IFn$_invoke$arity$2(G__48065,G__48066) : pred__48062.call(null,G__48065,G__48066));
})())){
return (new shadow.dom.Size(G__48039,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48067 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48068 = expr__48063;
return (pred__48062.cljs$core$IFn$_invoke$arity$2 ? pred__48062.cljs$core$IFn$_invoke$arity$2(G__48067,G__48068) : pred__48062.call(null,G__48067,G__48068));
})())){
return (new shadow.dom.Size(self__.w,G__48039,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48039),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48039){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48039,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48045){
var extmap__4478__auto__ = (function (){var G__48073 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48045,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48045)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48073);
} else {
return G__48073;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48045),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48045),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48076 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48076);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__48621 = (i + (1));
var G__48622 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48621;
ret = G__48622;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48085){
var vec__48086 = p__48085;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48086,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48092 = arguments.length;
switch (G__48092) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48098_48626 = new_node;
var G__48099_48627 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48098_48626,G__48099_48627);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48100_48628 = new_node;
var G__48101_48629 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48100_48628,G__48101_48629);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48632 = ps;
var G__48633 = (i + (1));
el__$1 = G__48632;
i = G__48633;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48107 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48107);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48110 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48110);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48112 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48112);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48114 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48117_48638 = cljs.core.seq(props);
var chunk__48118_48639 = null;
var count__48119_48640 = (0);
var i__48120_48641 = (0);
while(true){
if((i__48120_48641 < count__48119_48640)){
var vec__48128_48642 = chunk__48118_48639.cljs$core$IIndexed$_nth$arity$2(null,i__48120_48641);
var k_48643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128_48642,(0),null);
var v_48644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128_48642,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48643);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48643),v_48644);


var G__48645 = seq__48117_48638;
var G__48646 = chunk__48118_48639;
var G__48647 = count__48119_48640;
var G__48648 = (i__48120_48641 + (1));
seq__48117_48638 = G__48645;
chunk__48118_48639 = G__48646;
count__48119_48640 = G__48647;
i__48120_48641 = G__48648;
continue;
} else {
var temp__5735__auto___48649 = cljs.core.seq(seq__48117_48638);
if(temp__5735__auto___48649){
var seq__48117_48650__$1 = temp__5735__auto___48649;
if(cljs.core.chunked_seq_QMARK_(seq__48117_48650__$1)){
var c__4609__auto___48652 = cljs.core.chunk_first(seq__48117_48650__$1);
var G__48653 = cljs.core.chunk_rest(seq__48117_48650__$1);
var G__48654 = c__4609__auto___48652;
var G__48655 = cljs.core.count(c__4609__auto___48652);
var G__48656 = (0);
seq__48117_48638 = G__48653;
chunk__48118_48639 = G__48654;
count__48119_48640 = G__48655;
i__48120_48641 = G__48656;
continue;
} else {
var vec__48138_48657 = cljs.core.first(seq__48117_48650__$1);
var k_48658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48138_48657,(0),null);
var v_48659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48138_48657,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48658);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48658),v_48659);


var G__48667 = cljs.core.next(seq__48117_48650__$1);
var G__48668 = null;
var G__48669 = (0);
var G__48670 = (0);
seq__48117_48638 = G__48667;
chunk__48118_48639 = G__48668;
count__48119_48640 = G__48669;
i__48120_48641 = G__48670;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48146 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48146,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48146,(1),null);
var seq__48150_48680 = cljs.core.seq(node_children);
var chunk__48152_48681 = null;
var count__48153_48682 = (0);
var i__48154_48683 = (0);
while(true){
if((i__48154_48683 < count__48153_48682)){
var child_struct_48684 = chunk__48152_48681.cljs$core$IIndexed$_nth$arity$2(null,i__48154_48683);
if((!((child_struct_48684 == null)))){
if(typeof child_struct_48684 === 'string'){
var text_48685 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48685),child_struct_48684].join(''));
} else {
var children_48687 = shadow.dom.svg_node(child_struct_48684);
if(cljs.core.seq_QMARK_(children_48687)){
var seq__48168_48688 = cljs.core.seq(children_48687);
var chunk__48170_48689 = null;
var count__48171_48690 = (0);
var i__48172_48691 = (0);
while(true){
if((i__48172_48691 < count__48171_48690)){
var child_48692 = chunk__48170_48689.cljs$core$IIndexed$_nth$arity$2(null,i__48172_48691);
if(cljs.core.truth_(child_48692)){
node.appendChild(child_48692);


var G__48693 = seq__48168_48688;
var G__48694 = chunk__48170_48689;
var G__48695 = count__48171_48690;
var G__48696 = (i__48172_48691 + (1));
seq__48168_48688 = G__48693;
chunk__48170_48689 = G__48694;
count__48171_48690 = G__48695;
i__48172_48691 = G__48696;
continue;
} else {
var G__48697 = seq__48168_48688;
var G__48698 = chunk__48170_48689;
var G__48699 = count__48171_48690;
var G__48700 = (i__48172_48691 + (1));
seq__48168_48688 = G__48697;
chunk__48170_48689 = G__48698;
count__48171_48690 = G__48699;
i__48172_48691 = G__48700;
continue;
}
} else {
var temp__5735__auto___48701 = cljs.core.seq(seq__48168_48688);
if(temp__5735__auto___48701){
var seq__48168_48703__$1 = temp__5735__auto___48701;
if(cljs.core.chunked_seq_QMARK_(seq__48168_48703__$1)){
var c__4609__auto___48704 = cljs.core.chunk_first(seq__48168_48703__$1);
var G__48705 = cljs.core.chunk_rest(seq__48168_48703__$1);
var G__48706 = c__4609__auto___48704;
var G__48707 = cljs.core.count(c__4609__auto___48704);
var G__48708 = (0);
seq__48168_48688 = G__48705;
chunk__48170_48689 = G__48706;
count__48171_48690 = G__48707;
i__48172_48691 = G__48708;
continue;
} else {
var child_48710 = cljs.core.first(seq__48168_48703__$1);
if(cljs.core.truth_(child_48710)){
node.appendChild(child_48710);


var G__48711 = cljs.core.next(seq__48168_48703__$1);
var G__48712 = null;
var G__48713 = (0);
var G__48714 = (0);
seq__48168_48688 = G__48711;
chunk__48170_48689 = G__48712;
count__48171_48690 = G__48713;
i__48172_48691 = G__48714;
continue;
} else {
var G__48715 = cljs.core.next(seq__48168_48703__$1);
var G__48716 = null;
var G__48717 = (0);
var G__48718 = (0);
seq__48168_48688 = G__48715;
chunk__48170_48689 = G__48716;
count__48171_48690 = G__48717;
i__48172_48691 = G__48718;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48687);
}
}


var G__48719 = seq__48150_48680;
var G__48720 = chunk__48152_48681;
var G__48721 = count__48153_48682;
var G__48722 = (i__48154_48683 + (1));
seq__48150_48680 = G__48719;
chunk__48152_48681 = G__48720;
count__48153_48682 = G__48721;
i__48154_48683 = G__48722;
continue;
} else {
var G__48723 = seq__48150_48680;
var G__48724 = chunk__48152_48681;
var G__48725 = count__48153_48682;
var G__48726 = (i__48154_48683 + (1));
seq__48150_48680 = G__48723;
chunk__48152_48681 = G__48724;
count__48153_48682 = G__48725;
i__48154_48683 = G__48726;
continue;
}
} else {
var temp__5735__auto___48727 = cljs.core.seq(seq__48150_48680);
if(temp__5735__auto___48727){
var seq__48150_48728__$1 = temp__5735__auto___48727;
if(cljs.core.chunked_seq_QMARK_(seq__48150_48728__$1)){
var c__4609__auto___48729 = cljs.core.chunk_first(seq__48150_48728__$1);
var G__48730 = cljs.core.chunk_rest(seq__48150_48728__$1);
var G__48731 = c__4609__auto___48729;
var G__48732 = cljs.core.count(c__4609__auto___48729);
var G__48733 = (0);
seq__48150_48680 = G__48730;
chunk__48152_48681 = G__48731;
count__48153_48682 = G__48732;
i__48154_48683 = G__48733;
continue;
} else {
var child_struct_48735 = cljs.core.first(seq__48150_48728__$1);
if((!((child_struct_48735 == null)))){
if(typeof child_struct_48735 === 'string'){
var text_48736 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48736),child_struct_48735].join(''));
} else {
var children_48737 = shadow.dom.svg_node(child_struct_48735);
if(cljs.core.seq_QMARK_(children_48737)){
var seq__48187_48738 = cljs.core.seq(children_48737);
var chunk__48189_48739 = null;
var count__48190_48740 = (0);
var i__48191_48741 = (0);
while(true){
if((i__48191_48741 < count__48190_48740)){
var child_48744 = chunk__48189_48739.cljs$core$IIndexed$_nth$arity$2(null,i__48191_48741);
if(cljs.core.truth_(child_48744)){
node.appendChild(child_48744);


var G__48745 = seq__48187_48738;
var G__48746 = chunk__48189_48739;
var G__48747 = count__48190_48740;
var G__48748 = (i__48191_48741 + (1));
seq__48187_48738 = G__48745;
chunk__48189_48739 = G__48746;
count__48190_48740 = G__48747;
i__48191_48741 = G__48748;
continue;
} else {
var G__48749 = seq__48187_48738;
var G__48750 = chunk__48189_48739;
var G__48751 = count__48190_48740;
var G__48752 = (i__48191_48741 + (1));
seq__48187_48738 = G__48749;
chunk__48189_48739 = G__48750;
count__48190_48740 = G__48751;
i__48191_48741 = G__48752;
continue;
}
} else {
var temp__5735__auto___48753__$1 = cljs.core.seq(seq__48187_48738);
if(temp__5735__auto___48753__$1){
var seq__48187_48754__$1 = temp__5735__auto___48753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48187_48754__$1)){
var c__4609__auto___48759 = cljs.core.chunk_first(seq__48187_48754__$1);
var G__48760 = cljs.core.chunk_rest(seq__48187_48754__$1);
var G__48761 = c__4609__auto___48759;
var G__48762 = cljs.core.count(c__4609__auto___48759);
var G__48763 = (0);
seq__48187_48738 = G__48760;
chunk__48189_48739 = G__48761;
count__48190_48740 = G__48762;
i__48191_48741 = G__48763;
continue;
} else {
var child_48764 = cljs.core.first(seq__48187_48754__$1);
if(cljs.core.truth_(child_48764)){
node.appendChild(child_48764);


var G__48765 = cljs.core.next(seq__48187_48754__$1);
var G__48766 = null;
var G__48767 = (0);
var G__48768 = (0);
seq__48187_48738 = G__48765;
chunk__48189_48739 = G__48766;
count__48190_48740 = G__48767;
i__48191_48741 = G__48768;
continue;
} else {
var G__48769 = cljs.core.next(seq__48187_48754__$1);
var G__48770 = null;
var G__48771 = (0);
var G__48772 = (0);
seq__48187_48738 = G__48769;
chunk__48189_48739 = G__48770;
count__48190_48740 = G__48771;
i__48191_48741 = G__48772;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48737);
}
}


var G__48773 = cljs.core.next(seq__48150_48728__$1);
var G__48774 = null;
var G__48775 = (0);
var G__48776 = (0);
seq__48150_48680 = G__48773;
chunk__48152_48681 = G__48774;
count__48153_48682 = G__48775;
i__48154_48683 = G__48776;
continue;
} else {
var G__48777 = cljs.core.next(seq__48150_48728__$1);
var G__48778 = null;
var G__48779 = (0);
var G__48780 = (0);
seq__48150_48680 = G__48777;
chunk__48152_48681 = G__48778;
count__48153_48682 = G__48779;
i__48154_48683 = G__48780;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48195_48781 = shadow.dom._to_svg;
var G__48196_48782 = "string";
var G__48197_48783 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48195_48781,G__48196_48782,G__48197_48783);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48201_48787 = shadow.dom._to_svg;
var G__48202_48788 = "null";
var G__48203_48789 = (function (_){
return null;
});
goog.object.set(G__48201_48787,G__48202_48788,G__48203_48789);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48790 = arguments.length;
var i__4790__auto___48791 = (0);
while(true){
if((i__4790__auto___48791 < len__4789__auto___48790)){
args__4795__auto__.push((arguments[i__4790__auto___48791]));

var G__48792 = (i__4790__auto___48791 + (1));
i__4790__auto___48791 = G__48792;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48204){
var G__48205 = cljs.core.first(seq48204);
var seq48204__$1 = cljs.core.next(seq48204);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48205,seq48204__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48212 = arguments.length;
switch (G__48212) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48216_48811 = shadow.dom.dom_node(el);
var G__48217_48812 = cljs.core.name(event);
var G__48218_48813 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48216_48811,G__48217_48812,G__48218_48813) : shadow.dom.dom_listen.call(null,G__48216_48811,G__48217_48812,G__48218_48813));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__45938__auto___48814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45939__auto__ = (function (){var switch__45870__auto__ = (function (state_48224){
var state_val_48225 = (state_48224[(1)]);
if((state_val_48225 === (1))){
var state_48224__$1 = state_48224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48224__$1,(2),once_or_cleanup);
} else {
if((state_val_48225 === (2))){
var inst_48221 = (state_48224[(2)]);
var inst_48222 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48224__$1 = (function (){var statearr_48227 = state_48224;
(statearr_48227[(7)] = inst_48221);

return statearr_48227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48224__$1,inst_48222);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45871__auto__ = null;
var shadow$dom$state_machine__45871__auto____0 = (function (){
var statearr_48229 = [null,null,null,null,null,null,null,null];
(statearr_48229[(0)] = shadow$dom$state_machine__45871__auto__);

(statearr_48229[(1)] = (1));

return statearr_48229;
});
var shadow$dom$state_machine__45871__auto____1 = (function (state_48224){
while(true){
var ret_value__45872__auto__ = (function (){try{while(true){
var result__45873__auto__ = switch__45870__auto__(state_48224);
if(cljs.core.keyword_identical_QMARK_(result__45873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45873__auto__;
}
break;
}
}catch (e48232){if((e48232 instanceof Object)){
var ex__45874__auto__ = e48232;
var statearr_48233_48815 = state_48224;
(statearr_48233_48815[(5)] = ex__45874__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48816 = state_48224;
state_48224 = G__48816;
continue;
} else {
return ret_value__45872__auto__;
}
break;
}
});
shadow$dom$state_machine__45871__auto__ = function(state_48224){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45871__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45871__auto____1.call(this,state_48224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45871__auto____0;
shadow$dom$state_machine__45871__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45871__auto____1;
return shadow$dom$state_machine__45871__auto__;
})()
})();
var state__45940__auto__ = (function (){var statearr_48236 = (f__45939__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45939__auto__.cljs$core$IFn$_invoke$arity$0() : f__45939__auto__.call(null));
(statearr_48236[(6)] = c__45938__auto___48814);

return statearr_48236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45940__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
