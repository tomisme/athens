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
return cljs.core.cons((coll[idx]),(function (){var G__57557 = coll;
var G__57558 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57557,G__57558) : shadow.dom.lazy_native_coll_seq.call(null,G__57557,G__57558));
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
var G__57597 = arguments.length;
switch (G__57597) {
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
var G__57600 = arguments.length;
switch (G__57600) {
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
var G__57607 = arguments.length;
switch (G__57607) {
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
var G__57614 = arguments.length;
switch (G__57614) {
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
var G__57629 = arguments.length;
switch (G__57629) {
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
var G__57631 = document;
var G__57632 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57631,G__57632);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57634 = shadow.dom.dom_node(parent);
var G__57635 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57634,G__57635);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57638 = shadow.dom.dom_node(el);
var G__57639 = cls;
return goog.dom.classlist.add(G__57638,G__57639);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57643 = shadow.dom.dom_node(el);
var G__57644 = cls;
return goog.dom.classlist.remove(G__57643,G__57644);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57648 = arguments.length;
switch (G__57648) {
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
var G__57659 = shadow.dom.dom_node(el);
var G__57660 = cls;
return goog.dom.classlist.toggle(G__57659,G__57660);
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
}catch (e57666){if((e57666 instanceof Object)){
var e = e57666;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57666;

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
var seq__57669 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57670 = null;
var count__57671 = (0);
var i__57672 = (0);
while(true){
if((i__57672 < count__57671)){
var el = chunk__57670.cljs$core$IIndexed$_nth$arity$2(null,i__57672);
var handler_58277__$1 = ((function (seq__57669,chunk__57670,count__57671,i__57672,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57669,chunk__57670,count__57671,i__57672,el))
;
var G__57682_58279 = el;
var G__57683_58280 = cljs.core.name(ev);
var G__57684_58281 = handler_58277__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57682_58279,G__57683_58280,G__57684_58281) : shadow.dom.dom_listen.call(null,G__57682_58279,G__57683_58280,G__57684_58281));


var G__58282 = seq__57669;
var G__58283 = chunk__57670;
var G__58284 = count__57671;
var G__58285 = (i__57672 + (1));
seq__57669 = G__58282;
chunk__57670 = G__58283;
count__57671 = G__58284;
i__57672 = G__58285;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57669);
if(temp__5735__auto__){
var seq__57669__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57669__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57669__$1);
var G__58286 = cljs.core.chunk_rest(seq__57669__$1);
var G__58287 = c__4609__auto__;
var G__58288 = cljs.core.count(c__4609__auto__);
var G__58289 = (0);
seq__57669 = G__58286;
chunk__57670 = G__58287;
count__57671 = G__58288;
i__57672 = G__58289;
continue;
} else {
var el = cljs.core.first(seq__57669__$1);
var handler_58290__$1 = ((function (seq__57669,chunk__57670,count__57671,i__57672,el,seq__57669__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57669,chunk__57670,count__57671,i__57672,el,seq__57669__$1,temp__5735__auto__))
;
var G__57688_58291 = el;
var G__57689_58292 = cljs.core.name(ev);
var G__57690_58293 = handler_58290__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57688_58291,G__57689_58292,G__57690_58293) : shadow.dom.dom_listen.call(null,G__57688_58291,G__57689_58292,G__57690_58293));


var G__58295 = cljs.core.next(seq__57669__$1);
var G__58296 = null;
var G__58297 = (0);
var G__58298 = (0);
seq__57669 = G__58295;
chunk__57670 = G__58296;
count__57671 = G__58297;
i__57672 = G__58298;
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
var G__57693 = arguments.length;
switch (G__57693) {
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
var G__57701 = shadow.dom.dom_node(el);
var G__57702 = cljs.core.name(ev);
var G__57703 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57701,G__57702,G__57703) : shadow.dom.dom_listen.call(null,G__57701,G__57702,G__57703));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57705 = shadow.dom.dom_node(el);
var G__57706 = cljs.core.name(ev);
var G__57707 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57705,G__57706,G__57707) : shadow.dom.dom_listen_remove.call(null,G__57705,G__57706,G__57707));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57710 = cljs.core.seq(events);
var chunk__57711 = null;
var count__57712 = (0);
var i__57713 = (0);
while(true){
if((i__57713 < count__57712)){
var vec__57723 = chunk__57711.cljs$core$IIndexed$_nth$arity$2(null,i__57713);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57723,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58308 = seq__57710;
var G__58309 = chunk__57711;
var G__58310 = count__57712;
var G__58311 = (i__57713 + (1));
seq__57710 = G__58308;
chunk__57711 = G__58309;
count__57712 = G__58310;
i__57713 = G__58311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57710);
if(temp__5735__auto__){
var seq__57710__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57710__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57710__$1);
var G__58313 = cljs.core.chunk_rest(seq__57710__$1);
var G__58314 = c__4609__auto__;
var G__58315 = cljs.core.count(c__4609__auto__);
var G__58316 = (0);
seq__57710 = G__58313;
chunk__57711 = G__58314;
count__57712 = G__58315;
i__57713 = G__58316;
continue;
} else {
var vec__57727 = cljs.core.first(seq__57710__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57727,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58318 = cljs.core.next(seq__57710__$1);
var G__58319 = null;
var G__58320 = (0);
var G__58321 = (0);
seq__57710 = G__58318;
chunk__57711 = G__58319;
count__57712 = G__58320;
i__57713 = G__58321;
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
var seq__57731 = cljs.core.seq(styles);
var chunk__57733 = null;
var count__57734 = (0);
var i__57735 = (0);
while(true){
if((i__57735 < count__57734)){
var vec__57754 = chunk__57733.cljs$core$IIndexed$_nth$arity$2(null,i__57735);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57754,(1),null);
var G__57758_58322 = dom;
var G__57759_58323 = cljs.core.name(k);
var G__57760_58324 = (((v == null))?"":v);
goog.style.setStyle(G__57758_58322,G__57759_58323,G__57760_58324);


var G__58325 = seq__57731;
var G__58326 = chunk__57733;
var G__58327 = count__57734;
var G__58328 = (i__57735 + (1));
seq__57731 = G__58325;
chunk__57733 = G__58326;
count__57734 = G__58327;
i__57735 = G__58328;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57731);
if(temp__5735__auto__){
var seq__57731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57731__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57731__$1);
var G__58329 = cljs.core.chunk_rest(seq__57731__$1);
var G__58330 = c__4609__auto__;
var G__58331 = cljs.core.count(c__4609__auto__);
var G__58332 = (0);
seq__57731 = G__58329;
chunk__57733 = G__58330;
count__57734 = G__58331;
i__57735 = G__58332;
continue;
} else {
var vec__57764 = cljs.core.first(seq__57731__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57764,(1),null);
var G__57768_58336 = dom;
var G__57769_58337 = cljs.core.name(k);
var G__57770_58338 = (((v == null))?"":v);
goog.style.setStyle(G__57768_58336,G__57769_58337,G__57770_58338);


var G__58339 = cljs.core.next(seq__57731__$1);
var G__58340 = null;
var G__58341 = (0);
var G__58342 = (0);
seq__57731 = G__58339;
chunk__57733 = G__58340;
count__57734 = G__58341;
i__57735 = G__58342;
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
var G__57775_58343 = key;
var G__57775_58344__$1 = (((G__57775_58343 instanceof cljs.core.Keyword))?G__57775_58343.fqn:null);
switch (G__57775_58344__$1) {
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
var ks_58346 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58346,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58346,"aria-");
}
})())){
el.setAttribute(ks_58346,value);
} else {
(el[ks_58346] = value);
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
var G__57795 = shadow.dom.dom_node(el);
var G__57796 = cls;
return goog.dom.classlist.contains(G__57795,G__57796);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57798){
var map__57799 = p__57798;
var map__57799__$1 = (((((!((map__57799 == null))))?(((((map__57799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57799):map__57799);
var props = map__57799__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57799__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57801 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57801,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57801,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57801,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57804 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57804,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57804;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57806 = arguments.length;
switch (G__57806) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57813){
var vec__57814 = p__57813;
var seq__57815 = cljs.core.seq(vec__57814);
var first__57816 = cljs.core.first(seq__57815);
var seq__57815__$1 = cljs.core.next(seq__57815);
var nn = first__57816;
var first__57816__$1 = cljs.core.first(seq__57815__$1);
var seq__57815__$2 = cljs.core.next(seq__57815__$1);
var np = first__57816__$1;
var nc = seq__57815__$2;
var node = vec__57814;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57817 = nn;
var G__57818 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57817,G__57818) : create_fn.call(null,G__57817,G__57818));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57819 = nn;
var G__57820 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57819,G__57820) : create_fn.call(null,G__57819,G__57820));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57821 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57821,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57821,(1),null);
var seq__57824_58359 = cljs.core.seq(node_children);
var chunk__57825_58360 = null;
var count__57826_58361 = (0);
var i__57827_58362 = (0);
while(true){
if((i__57827_58362 < count__57826_58361)){
var child_struct_58363 = chunk__57825_58360.cljs$core$IIndexed$_nth$arity$2(null,i__57827_58362);
var children_58364 = shadow.dom.dom_node(child_struct_58363);
if(cljs.core.seq_QMARK_(children_58364)){
var seq__57852_58365 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58364));
var chunk__57854_58366 = null;
var count__57855_58367 = (0);
var i__57856_58368 = (0);
while(true){
if((i__57856_58368 < count__57855_58367)){
var child_58372 = chunk__57854_58366.cljs$core$IIndexed$_nth$arity$2(null,i__57856_58368);
if(cljs.core.truth_(child_58372)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58372);


var G__58373 = seq__57852_58365;
var G__58374 = chunk__57854_58366;
var G__58375 = count__57855_58367;
var G__58376 = (i__57856_58368 + (1));
seq__57852_58365 = G__58373;
chunk__57854_58366 = G__58374;
count__57855_58367 = G__58375;
i__57856_58368 = G__58376;
continue;
} else {
var G__58377 = seq__57852_58365;
var G__58378 = chunk__57854_58366;
var G__58379 = count__57855_58367;
var G__58380 = (i__57856_58368 + (1));
seq__57852_58365 = G__58377;
chunk__57854_58366 = G__58378;
count__57855_58367 = G__58379;
i__57856_58368 = G__58380;
continue;
}
} else {
var temp__5735__auto___58381 = cljs.core.seq(seq__57852_58365);
if(temp__5735__auto___58381){
var seq__57852_58382__$1 = temp__5735__auto___58381;
if(cljs.core.chunked_seq_QMARK_(seq__57852_58382__$1)){
var c__4609__auto___58383 = cljs.core.chunk_first(seq__57852_58382__$1);
var G__58384 = cljs.core.chunk_rest(seq__57852_58382__$1);
var G__58385 = c__4609__auto___58383;
var G__58386 = cljs.core.count(c__4609__auto___58383);
var G__58387 = (0);
seq__57852_58365 = G__58384;
chunk__57854_58366 = G__58385;
count__57855_58367 = G__58386;
i__57856_58368 = G__58387;
continue;
} else {
var child_58388 = cljs.core.first(seq__57852_58382__$1);
if(cljs.core.truth_(child_58388)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58388);


var G__58389 = cljs.core.next(seq__57852_58382__$1);
var G__58390 = null;
var G__58391 = (0);
var G__58392 = (0);
seq__57852_58365 = G__58389;
chunk__57854_58366 = G__58390;
count__57855_58367 = G__58391;
i__57856_58368 = G__58392;
continue;
} else {
var G__58393 = cljs.core.next(seq__57852_58382__$1);
var G__58394 = null;
var G__58395 = (0);
var G__58396 = (0);
seq__57852_58365 = G__58393;
chunk__57854_58366 = G__58394;
count__57855_58367 = G__58395;
i__57856_58368 = G__58396;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58364);
}


var G__58397 = seq__57824_58359;
var G__58398 = chunk__57825_58360;
var G__58399 = count__57826_58361;
var G__58400 = (i__57827_58362 + (1));
seq__57824_58359 = G__58397;
chunk__57825_58360 = G__58398;
count__57826_58361 = G__58399;
i__57827_58362 = G__58400;
continue;
} else {
var temp__5735__auto___58404 = cljs.core.seq(seq__57824_58359);
if(temp__5735__auto___58404){
var seq__57824_58405__$1 = temp__5735__auto___58404;
if(cljs.core.chunked_seq_QMARK_(seq__57824_58405__$1)){
var c__4609__auto___58406 = cljs.core.chunk_first(seq__57824_58405__$1);
var G__58407 = cljs.core.chunk_rest(seq__57824_58405__$1);
var G__58408 = c__4609__auto___58406;
var G__58409 = cljs.core.count(c__4609__auto___58406);
var G__58410 = (0);
seq__57824_58359 = G__58407;
chunk__57825_58360 = G__58408;
count__57826_58361 = G__58409;
i__57827_58362 = G__58410;
continue;
} else {
var child_struct_58411 = cljs.core.first(seq__57824_58405__$1);
var children_58412 = shadow.dom.dom_node(child_struct_58411);
if(cljs.core.seq_QMARK_(children_58412)){
var seq__57865_58413 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58412));
var chunk__57867_58414 = null;
var count__57868_58415 = (0);
var i__57869_58416 = (0);
while(true){
if((i__57869_58416 < count__57868_58415)){
var child_58417 = chunk__57867_58414.cljs$core$IIndexed$_nth$arity$2(null,i__57869_58416);
if(cljs.core.truth_(child_58417)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58417);


var G__58418 = seq__57865_58413;
var G__58419 = chunk__57867_58414;
var G__58420 = count__57868_58415;
var G__58421 = (i__57869_58416 + (1));
seq__57865_58413 = G__58418;
chunk__57867_58414 = G__58419;
count__57868_58415 = G__58420;
i__57869_58416 = G__58421;
continue;
} else {
var G__58422 = seq__57865_58413;
var G__58423 = chunk__57867_58414;
var G__58424 = count__57868_58415;
var G__58425 = (i__57869_58416 + (1));
seq__57865_58413 = G__58422;
chunk__57867_58414 = G__58423;
count__57868_58415 = G__58424;
i__57869_58416 = G__58425;
continue;
}
} else {
var temp__5735__auto___58426__$1 = cljs.core.seq(seq__57865_58413);
if(temp__5735__auto___58426__$1){
var seq__57865_58427__$1 = temp__5735__auto___58426__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57865_58427__$1)){
var c__4609__auto___58428 = cljs.core.chunk_first(seq__57865_58427__$1);
var G__58429 = cljs.core.chunk_rest(seq__57865_58427__$1);
var G__58430 = c__4609__auto___58428;
var G__58431 = cljs.core.count(c__4609__auto___58428);
var G__58432 = (0);
seq__57865_58413 = G__58429;
chunk__57867_58414 = G__58430;
count__57868_58415 = G__58431;
i__57869_58416 = G__58432;
continue;
} else {
var child_58433 = cljs.core.first(seq__57865_58427__$1);
if(cljs.core.truth_(child_58433)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58433);


var G__58434 = cljs.core.next(seq__57865_58427__$1);
var G__58435 = null;
var G__58436 = (0);
var G__58437 = (0);
seq__57865_58413 = G__58434;
chunk__57867_58414 = G__58435;
count__57868_58415 = G__58436;
i__57869_58416 = G__58437;
continue;
} else {
var G__58438 = cljs.core.next(seq__57865_58427__$1);
var G__58439 = null;
var G__58440 = (0);
var G__58441 = (0);
seq__57865_58413 = G__58438;
chunk__57867_58414 = G__58439;
count__57868_58415 = G__58440;
i__57869_58416 = G__58441;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58412);
}


var G__58442 = cljs.core.next(seq__57824_58405__$1);
var G__58443 = null;
var G__58444 = (0);
var G__58445 = (0);
seq__57824_58359 = G__58442;
chunk__57825_58360 = G__58443;
count__57826_58361 = G__58444;
i__57827_58362 = G__58445;
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
var G__57891 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__57891);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__57896 = cljs.core.seq(node);
var chunk__57897 = null;
var count__57898 = (0);
var i__57899 = (0);
while(true){
if((i__57899 < count__57898)){
var n = chunk__57897.cljs$core$IIndexed$_nth$arity$2(null,i__57899);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58450 = seq__57896;
var G__58451 = chunk__57897;
var G__58452 = count__57898;
var G__58453 = (i__57899 + (1));
seq__57896 = G__58450;
chunk__57897 = G__58451;
count__57898 = G__58452;
i__57899 = G__58453;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57896);
if(temp__5735__auto__){
var seq__57896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57896__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57896__$1);
var G__58454 = cljs.core.chunk_rest(seq__57896__$1);
var G__58455 = c__4609__auto__;
var G__58456 = cljs.core.count(c__4609__auto__);
var G__58457 = (0);
seq__57896 = G__58454;
chunk__57897 = G__58455;
count__57898 = G__58456;
i__57899 = G__58457;
continue;
} else {
var n = cljs.core.first(seq__57896__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58465 = cljs.core.next(seq__57896__$1);
var G__58466 = null;
var G__58467 = (0);
var G__58468 = (0);
seq__57896 = G__58465;
chunk__57897 = G__58466;
count__57898 = G__58467;
i__57899 = G__58468;
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
var G__57905 = shadow.dom.dom_node(new$);
var G__57906 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__57905,G__57906);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__57910 = arguments.length;
switch (G__57910) {
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
var G__57912 = arguments.length;
switch (G__57912) {
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
var G__57915 = arguments.length;
switch (G__57915) {
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
var len__4789__auto___58489 = arguments.length;
var i__4790__auto___58490 = (0);
while(true){
if((i__4790__auto___58490 < len__4789__auto___58489)){
args__4795__auto__.push((arguments[i__4790__auto___58490]));

var G__58492 = (i__4790__auto___58490 + (1));
i__4790__auto___58490 = G__58492;
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
var seq__57921_58493 = cljs.core.seq(nodes);
var chunk__57922_58494 = null;
var count__57923_58495 = (0);
var i__57924_58496 = (0);
while(true){
if((i__57924_58496 < count__57923_58495)){
var node_58497 = chunk__57922_58494.cljs$core$IIndexed$_nth$arity$2(null,i__57924_58496);
fragment.appendChild(shadow.dom._to_dom(node_58497));


var G__58498 = seq__57921_58493;
var G__58499 = chunk__57922_58494;
var G__58500 = count__57923_58495;
var G__58501 = (i__57924_58496 + (1));
seq__57921_58493 = G__58498;
chunk__57922_58494 = G__58499;
count__57923_58495 = G__58500;
i__57924_58496 = G__58501;
continue;
} else {
var temp__5735__auto___58502 = cljs.core.seq(seq__57921_58493);
if(temp__5735__auto___58502){
var seq__57921_58503__$1 = temp__5735__auto___58502;
if(cljs.core.chunked_seq_QMARK_(seq__57921_58503__$1)){
var c__4609__auto___58505 = cljs.core.chunk_first(seq__57921_58503__$1);
var G__58506 = cljs.core.chunk_rest(seq__57921_58503__$1);
var G__58507 = c__4609__auto___58505;
var G__58508 = cljs.core.count(c__4609__auto___58505);
var G__58509 = (0);
seq__57921_58493 = G__58506;
chunk__57922_58494 = G__58507;
count__57923_58495 = G__58508;
i__57924_58496 = G__58509;
continue;
} else {
var node_58510 = cljs.core.first(seq__57921_58503__$1);
fragment.appendChild(shadow.dom._to_dom(node_58510));


var G__58511 = cljs.core.next(seq__57921_58503__$1);
var G__58512 = null;
var G__58513 = (0);
var G__58514 = (0);
seq__57921_58493 = G__58511;
chunk__57922_58494 = G__58512;
count__57923_58495 = G__58513;
i__57924_58496 = G__58514;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq57917){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57917));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__57935_58519 = cljs.core.seq(scripts);
var chunk__57936_58520 = null;
var count__57937_58521 = (0);
var i__57938_58522 = (0);
while(true){
if((i__57938_58522 < count__57937_58521)){
var vec__57948_58523 = chunk__57936_58520.cljs$core$IIndexed$_nth$arity$2(null,i__57938_58522);
var script_tag_58524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57948_58523,(0),null);
var script_body_58525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57948_58523,(1),null);
eval(script_body_58525);


var G__58527 = seq__57935_58519;
var G__58528 = chunk__57936_58520;
var G__58529 = count__57937_58521;
var G__58530 = (i__57938_58522 + (1));
seq__57935_58519 = G__58527;
chunk__57936_58520 = G__58528;
count__57937_58521 = G__58529;
i__57938_58522 = G__58530;
continue;
} else {
var temp__5735__auto___58531 = cljs.core.seq(seq__57935_58519);
if(temp__5735__auto___58531){
var seq__57935_58537__$1 = temp__5735__auto___58531;
if(cljs.core.chunked_seq_QMARK_(seq__57935_58537__$1)){
var c__4609__auto___58538 = cljs.core.chunk_first(seq__57935_58537__$1);
var G__58539 = cljs.core.chunk_rest(seq__57935_58537__$1);
var G__58540 = c__4609__auto___58538;
var G__58541 = cljs.core.count(c__4609__auto___58538);
var G__58542 = (0);
seq__57935_58519 = G__58539;
chunk__57936_58520 = G__58540;
count__57937_58521 = G__58541;
i__57938_58522 = G__58542;
continue;
} else {
var vec__57953_58543 = cljs.core.first(seq__57935_58537__$1);
var script_tag_58544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57953_58543,(0),null);
var script_body_58545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57953_58543,(1),null);
eval(script_body_58545);


var G__58546 = cljs.core.next(seq__57935_58537__$1);
var G__58547 = null;
var G__58548 = (0);
var G__58549 = (0);
seq__57935_58519 = G__58546;
chunk__57936_58520 = G__58547;
count__57937_58521 = G__58548;
i__57938_58522 = G__58549;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__57957){
var vec__57958 = p__57957;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57958,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57958,(1),null);
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
var G__57965 = shadow.dom.dom_node(el);
var G__57966 = cls;
return goog.dom.getAncestorByClass(G__57965,G__57966);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__57969 = arguments.length;
switch (G__57969) {
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
var G__57971 = shadow.dom.dom_node(el);
var G__57972 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__57971,G__57972);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__57973 = shadow.dom.dom_node(el);
var G__57974 = cljs.core.name(tag);
var G__57975 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__57973,G__57974,G__57975);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__57978 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__57978);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__57981 = shadow.dom.dom_node(dom);
var G__57982 = value;
return goog.dom.forms.setValue(G__57981,G__57982);
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
var seq__57987 = cljs.core.seq(style_keys);
var chunk__57988 = null;
var count__57989 = (0);
var i__57990 = (0);
while(true){
if((i__57990 < count__57989)){
var it = chunk__57988.cljs$core$IIndexed$_nth$arity$2(null,i__57990);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58552 = seq__57987;
var G__58553 = chunk__57988;
var G__58554 = count__57989;
var G__58555 = (i__57990 + (1));
seq__57987 = G__58552;
chunk__57988 = G__58553;
count__57989 = G__58554;
i__57990 = G__58555;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57987);
if(temp__5735__auto__){
var seq__57987__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57987__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57987__$1);
var G__58556 = cljs.core.chunk_rest(seq__57987__$1);
var G__58557 = c__4609__auto__;
var G__58558 = cljs.core.count(c__4609__auto__);
var G__58559 = (0);
seq__57987 = G__58556;
chunk__57988 = G__58557;
count__57989 = G__58558;
i__57990 = G__58559;
continue;
} else {
var it = cljs.core.first(seq__57987__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58560 = cljs.core.next(seq__57987__$1);
var G__58561 = null;
var G__58562 = (0);
var G__58563 = (0);
seq__57987 = G__58560;
chunk__57988 = G__58561;
count__57989 = G__58562;
i__57990 = G__58563;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57996,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58007 = k57996;
var G__58007__$1 = (((G__58007 instanceof cljs.core.Keyword))?G__58007.fqn:null);
switch (G__58007__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57996,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58009){
var vec__58010 = p__58009;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58010,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58010,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57995){
var self__ = this;
var G__57995__$1 = this;
return (new cljs.core.RecordIter((0),G__57995__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58018 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58018(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57997,other57998){
var self__ = this;
var this57997__$1 = this;
return (((!((other57998 == null)))) && ((this57997__$1.constructor === other57998.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57997__$1.x,other57998.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57997__$1.y,other57998.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57997__$1.__extmap,other57998.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57995){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58024 = cljs.core.keyword_identical_QMARK_;
var expr__58025 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58028 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58029 = expr__58025;
return (pred__58024.cljs$core$IFn$_invoke$arity$2 ? pred__58024.cljs$core$IFn$_invoke$arity$2(G__58028,G__58029) : pred__58024.call(null,G__58028,G__58029));
})())){
return (new shadow.dom.Coordinate(G__57995,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58030 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58031 = expr__58025;
return (pred__58024.cljs$core$IFn$_invoke$arity$2 ? pred__58024.cljs$core$IFn$_invoke$arity$2(G__58030,G__58031) : pred__58024.call(null,G__58030,G__58031));
})())){
return (new shadow.dom.Coordinate(self__.x,G__57995,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57995),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57995){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__57995,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58001){
var extmap__4478__auto__ = (function (){var G__58039 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58001,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58001)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58039);
} else {
return G__58039;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58001),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58001),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58041 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58041);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58044 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58044);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58046 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58046);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58048,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58057 = k58048;
var G__58057__$1 = (((G__58057 instanceof cljs.core.Keyword))?G__58057.fqn:null);
switch (G__58057__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58048,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58058){
var vec__58060 = p__58058;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58060,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58060,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58047){
var self__ = this;
var G__58047__$1 = this;
return (new cljs.core.RecordIter((0),G__58047__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58070 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58070(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58049,other58050){
var self__ = this;
var this58049__$1 = this;
return (((!((other58050 == null)))) && ((this58049__$1.constructor === other58050.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58049__$1.w,other58050.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58049__$1.h,other58050.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58049__$1.__extmap,other58050.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58047){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58071 = cljs.core.keyword_identical_QMARK_;
var expr__58072 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58074 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58075 = expr__58072;
return (pred__58071.cljs$core$IFn$_invoke$arity$2 ? pred__58071.cljs$core$IFn$_invoke$arity$2(G__58074,G__58075) : pred__58071.call(null,G__58074,G__58075));
})())){
return (new shadow.dom.Size(G__58047,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58076 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58077 = expr__58072;
return (pred__58071.cljs$core$IFn$_invoke$arity$2 ? pred__58071.cljs$core$IFn$_invoke$arity$2(G__58076,G__58077) : pred__58071.call(null,G__58076,G__58077));
})())){
return (new shadow.dom.Size(self__.w,G__58047,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58047),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58047){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58047,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58052){
var extmap__4478__auto__ = (function (){var G__58078 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58052,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58052)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58078);
} else {
return G__58078;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58052),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58052),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58079 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58079);
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
var G__58620 = (i + (1));
var G__58621 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58620;
ret = G__58621;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58086){
var vec__58087 = p__58086;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58087,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58095 = arguments.length;
switch (G__58095) {
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
var G__58102_58623 = new_node;
var G__58103_58624 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58102_58623,G__58103_58624);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58106_58627 = new_node;
var G__58107_58628 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58106_58627,G__58107_58628);

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
var G__58633 = ps;
var G__58634 = (i + (1));
el__$1 = G__58633;
i = G__58634;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58110 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58110);
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
var G__58117 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58117);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58118 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58118);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58121 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58121,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58121,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58121,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58124_58642 = cljs.core.seq(props);
var chunk__58125_58643 = null;
var count__58126_58644 = (0);
var i__58127_58645 = (0);
while(true){
if((i__58127_58645 < count__58126_58644)){
var vec__58138_58646 = chunk__58125_58643.cljs$core$IIndexed$_nth$arity$2(null,i__58127_58645);
var k_58647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58138_58646,(0),null);
var v_58648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58138_58646,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58647);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58647),v_58648);


var G__58655 = seq__58124_58642;
var G__58656 = chunk__58125_58643;
var G__58657 = count__58126_58644;
var G__58658 = (i__58127_58645 + (1));
seq__58124_58642 = G__58655;
chunk__58125_58643 = G__58656;
count__58126_58644 = G__58657;
i__58127_58645 = G__58658;
continue;
} else {
var temp__5735__auto___58659 = cljs.core.seq(seq__58124_58642);
if(temp__5735__auto___58659){
var seq__58124_58660__$1 = temp__5735__auto___58659;
if(cljs.core.chunked_seq_QMARK_(seq__58124_58660__$1)){
var c__4609__auto___58661 = cljs.core.chunk_first(seq__58124_58660__$1);
var G__58662 = cljs.core.chunk_rest(seq__58124_58660__$1);
var G__58663 = c__4609__auto___58661;
var G__58664 = cljs.core.count(c__4609__auto___58661);
var G__58665 = (0);
seq__58124_58642 = G__58662;
chunk__58125_58643 = G__58663;
count__58126_58644 = G__58664;
i__58127_58645 = G__58665;
continue;
} else {
var vec__58144_58666 = cljs.core.first(seq__58124_58660__$1);
var k_58667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58144_58666,(0),null);
var v_58668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58144_58666,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58667);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58667),v_58668);


var G__58669 = cljs.core.next(seq__58124_58660__$1);
var G__58670 = null;
var G__58671 = (0);
var G__58672 = (0);
seq__58124_58642 = G__58669;
chunk__58125_58643 = G__58670;
count__58126_58644 = G__58671;
i__58127_58645 = G__58672;
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
var vec__58153 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58153,(1),null);
var seq__58157_58673 = cljs.core.seq(node_children);
var chunk__58159_58674 = null;
var count__58160_58675 = (0);
var i__58161_58676 = (0);
while(true){
if((i__58161_58676 < count__58160_58675)){
var child_struct_58677 = chunk__58159_58674.cljs$core$IIndexed$_nth$arity$2(null,i__58161_58676);
if((!((child_struct_58677 == null)))){
if(typeof child_struct_58677 === 'string'){
var text_58678 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58678),child_struct_58677].join(''));
} else {
var children_58679 = shadow.dom.svg_node(child_struct_58677);
if(cljs.core.seq_QMARK_(children_58679)){
var seq__58201_58680 = cljs.core.seq(children_58679);
var chunk__58203_58681 = null;
var count__58204_58682 = (0);
var i__58205_58683 = (0);
while(true){
if((i__58205_58683 < count__58204_58682)){
var child_58684 = chunk__58203_58681.cljs$core$IIndexed$_nth$arity$2(null,i__58205_58683);
if(cljs.core.truth_(child_58684)){
node.appendChild(child_58684);


var G__58685 = seq__58201_58680;
var G__58686 = chunk__58203_58681;
var G__58687 = count__58204_58682;
var G__58688 = (i__58205_58683 + (1));
seq__58201_58680 = G__58685;
chunk__58203_58681 = G__58686;
count__58204_58682 = G__58687;
i__58205_58683 = G__58688;
continue;
} else {
var G__58689 = seq__58201_58680;
var G__58690 = chunk__58203_58681;
var G__58691 = count__58204_58682;
var G__58692 = (i__58205_58683 + (1));
seq__58201_58680 = G__58689;
chunk__58203_58681 = G__58690;
count__58204_58682 = G__58691;
i__58205_58683 = G__58692;
continue;
}
} else {
var temp__5735__auto___58693 = cljs.core.seq(seq__58201_58680);
if(temp__5735__auto___58693){
var seq__58201_58694__$1 = temp__5735__auto___58693;
if(cljs.core.chunked_seq_QMARK_(seq__58201_58694__$1)){
var c__4609__auto___58695 = cljs.core.chunk_first(seq__58201_58694__$1);
var G__58696 = cljs.core.chunk_rest(seq__58201_58694__$1);
var G__58697 = c__4609__auto___58695;
var G__58698 = cljs.core.count(c__4609__auto___58695);
var G__58699 = (0);
seq__58201_58680 = G__58696;
chunk__58203_58681 = G__58697;
count__58204_58682 = G__58698;
i__58205_58683 = G__58699;
continue;
} else {
var child_58700 = cljs.core.first(seq__58201_58694__$1);
if(cljs.core.truth_(child_58700)){
node.appendChild(child_58700);


var G__58701 = cljs.core.next(seq__58201_58694__$1);
var G__58702 = null;
var G__58703 = (0);
var G__58704 = (0);
seq__58201_58680 = G__58701;
chunk__58203_58681 = G__58702;
count__58204_58682 = G__58703;
i__58205_58683 = G__58704;
continue;
} else {
var G__58705 = cljs.core.next(seq__58201_58694__$1);
var G__58706 = null;
var G__58707 = (0);
var G__58708 = (0);
seq__58201_58680 = G__58705;
chunk__58203_58681 = G__58706;
count__58204_58682 = G__58707;
i__58205_58683 = G__58708;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58679);
}
}


var G__58709 = seq__58157_58673;
var G__58710 = chunk__58159_58674;
var G__58711 = count__58160_58675;
var G__58712 = (i__58161_58676 + (1));
seq__58157_58673 = G__58709;
chunk__58159_58674 = G__58710;
count__58160_58675 = G__58711;
i__58161_58676 = G__58712;
continue;
} else {
var G__58713 = seq__58157_58673;
var G__58714 = chunk__58159_58674;
var G__58715 = count__58160_58675;
var G__58716 = (i__58161_58676 + (1));
seq__58157_58673 = G__58713;
chunk__58159_58674 = G__58714;
count__58160_58675 = G__58715;
i__58161_58676 = G__58716;
continue;
}
} else {
var temp__5735__auto___58717 = cljs.core.seq(seq__58157_58673);
if(temp__5735__auto___58717){
var seq__58157_58718__$1 = temp__5735__auto___58717;
if(cljs.core.chunked_seq_QMARK_(seq__58157_58718__$1)){
var c__4609__auto___58719 = cljs.core.chunk_first(seq__58157_58718__$1);
var G__58720 = cljs.core.chunk_rest(seq__58157_58718__$1);
var G__58721 = c__4609__auto___58719;
var G__58722 = cljs.core.count(c__4609__auto___58719);
var G__58723 = (0);
seq__58157_58673 = G__58720;
chunk__58159_58674 = G__58721;
count__58160_58675 = G__58722;
i__58161_58676 = G__58723;
continue;
} else {
var child_struct_58724 = cljs.core.first(seq__58157_58718__$1);
if((!((child_struct_58724 == null)))){
if(typeof child_struct_58724 === 'string'){
var text_58725 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58725),child_struct_58724].join(''));
} else {
var children_58726 = shadow.dom.svg_node(child_struct_58724);
if(cljs.core.seq_QMARK_(children_58726)){
var seq__58215_58727 = cljs.core.seq(children_58726);
var chunk__58217_58728 = null;
var count__58218_58729 = (0);
var i__58219_58730 = (0);
while(true){
if((i__58219_58730 < count__58218_58729)){
var child_58734 = chunk__58217_58728.cljs$core$IIndexed$_nth$arity$2(null,i__58219_58730);
if(cljs.core.truth_(child_58734)){
node.appendChild(child_58734);


var G__58735 = seq__58215_58727;
var G__58736 = chunk__58217_58728;
var G__58737 = count__58218_58729;
var G__58738 = (i__58219_58730 + (1));
seq__58215_58727 = G__58735;
chunk__58217_58728 = G__58736;
count__58218_58729 = G__58737;
i__58219_58730 = G__58738;
continue;
} else {
var G__58739 = seq__58215_58727;
var G__58740 = chunk__58217_58728;
var G__58741 = count__58218_58729;
var G__58742 = (i__58219_58730 + (1));
seq__58215_58727 = G__58739;
chunk__58217_58728 = G__58740;
count__58218_58729 = G__58741;
i__58219_58730 = G__58742;
continue;
}
} else {
var temp__5735__auto___58743__$1 = cljs.core.seq(seq__58215_58727);
if(temp__5735__auto___58743__$1){
var seq__58215_58744__$1 = temp__5735__auto___58743__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58215_58744__$1)){
var c__4609__auto___58749 = cljs.core.chunk_first(seq__58215_58744__$1);
var G__58750 = cljs.core.chunk_rest(seq__58215_58744__$1);
var G__58751 = c__4609__auto___58749;
var G__58752 = cljs.core.count(c__4609__auto___58749);
var G__58753 = (0);
seq__58215_58727 = G__58750;
chunk__58217_58728 = G__58751;
count__58218_58729 = G__58752;
i__58219_58730 = G__58753;
continue;
} else {
var child_58754 = cljs.core.first(seq__58215_58744__$1);
if(cljs.core.truth_(child_58754)){
node.appendChild(child_58754);


var G__58755 = cljs.core.next(seq__58215_58744__$1);
var G__58756 = null;
var G__58757 = (0);
var G__58758 = (0);
seq__58215_58727 = G__58755;
chunk__58217_58728 = G__58756;
count__58218_58729 = G__58757;
i__58219_58730 = G__58758;
continue;
} else {
var G__58759 = cljs.core.next(seq__58215_58744__$1);
var G__58760 = null;
var G__58761 = (0);
var G__58762 = (0);
seq__58215_58727 = G__58759;
chunk__58217_58728 = G__58760;
count__58218_58729 = G__58761;
i__58219_58730 = G__58762;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58726);
}
}


var G__58763 = cljs.core.next(seq__58157_58718__$1);
var G__58764 = null;
var G__58765 = (0);
var G__58766 = (0);
seq__58157_58673 = G__58763;
chunk__58159_58674 = G__58764;
count__58160_58675 = G__58765;
i__58161_58676 = G__58766;
continue;
} else {
var G__58767 = cljs.core.next(seq__58157_58718__$1);
var G__58768 = null;
var G__58769 = (0);
var G__58770 = (0);
seq__58157_58673 = G__58767;
chunk__58159_58674 = G__58768;
count__58160_58675 = G__58769;
i__58161_58676 = G__58770;
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

var G__58226_58771 = shadow.dom._to_svg;
var G__58227_58772 = "string";
var G__58228_58773 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58226_58771,G__58227_58772,G__58228_58773);

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

var G__58232_58774 = shadow.dom._to_svg;
var G__58233_58775 = "null";
var G__58234_58776 = (function (_){
return null;
});
goog.object.set(G__58232_58774,G__58233_58775,G__58234_58776);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58777 = arguments.length;
var i__4790__auto___58778 = (0);
while(true){
if((i__4790__auto___58778 < len__4789__auto___58777)){
args__4795__auto__.push((arguments[i__4790__auto___58778]));

var G__58779 = (i__4790__auto___58778 + (1));
i__4790__auto___58778 = G__58779;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58235){
var G__58236 = cljs.core.first(seq58235);
var seq58235__$1 = cljs.core.next(seq58235);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58236,seq58235__$1);
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
var G__58245 = arguments.length;
switch (G__58245) {
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
var G__58250_58781 = shadow.dom.dom_node(el);
var G__58251_58782 = cljs.core.name(event);
var G__58252_58783 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58250_58781,G__58251_58782,G__58252_58783) : shadow.dom.dom_listen.call(null,G__58250_58781,G__58251_58782,G__58252_58783));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__55908__auto___58784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55909__auto__ = (function (){var switch__55840__auto__ = (function (state_58258){
var state_val_58259 = (state_58258[(1)]);
if((state_val_58259 === (1))){
var state_58258__$1 = state_58258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58258__$1,(2),once_or_cleanup);
} else {
if((state_val_58259 === (2))){
var inst_58255 = (state_58258[(2)]);
var inst_58256 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58258__$1 = (function (){var statearr_58262 = state_58258;
(statearr_58262[(7)] = inst_58255);

return statearr_58262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58258__$1,inst_58256);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55841__auto__ = null;
var shadow$dom$state_machine__55841__auto____0 = (function (){
var statearr_58263 = [null,null,null,null,null,null,null,null];
(statearr_58263[(0)] = shadow$dom$state_machine__55841__auto__);

(statearr_58263[(1)] = (1));

return statearr_58263;
});
var shadow$dom$state_machine__55841__auto____1 = (function (state_58258){
while(true){
var ret_value__55842__auto__ = (function (){try{while(true){
var result__55843__auto__ = switch__55840__auto__(state_58258);
if(cljs.core.keyword_identical_QMARK_(result__55843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55843__auto__;
}
break;
}
}catch (e58264){if((e58264 instanceof Object)){
var ex__55844__auto__ = e58264;
var statearr_58265_58785 = state_58258;
(statearr_58265_58785[(5)] = ex__55844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58786 = state_58258;
state_58258 = G__58786;
continue;
} else {
return ret_value__55842__auto__;
}
break;
}
});
shadow$dom$state_machine__55841__auto__ = function(state_58258){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55841__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55841__auto____1.call(this,state_58258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55841__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55841__auto____0;
shadow$dom$state_machine__55841__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55841__auto____1;
return shadow$dom$state_machine__55841__auto__;
})()
})();
var state__55910__auto__ = (function (){var statearr_58266 = (f__55909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55909__auto__.cljs$core$IFn$_invoke$arity$0() : f__55909__auto__.call(null));
(statearr_58266[(6)] = c__55908__auto___58784);

return statearr_58266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55910__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
