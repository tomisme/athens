goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__47899 = arguments.length;
switch (G__47899) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__47902 = arguments.length;
switch (G__47902) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__47905 = arguments.length;
switch (G__47905) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__47903_SHARP_){
return (!((p1__47903_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48265 = arguments.length;
var i__4790__auto___48266 = (0);
while(true){
if((i__4790__auto___48266 < len__4789__auto___48265)){
args__4795__auto__.push((arguments[i__4790__auto___48266]));

var G__48267 = (i__4790__auto___48266 + (1));
i__4790__auto___48266 = G__48267;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__47908_48272 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__47909_48273 = null;
var count__47910_48274 = (0);
var i__47911_48275 = (0);
while(true){
if((i__47911_48275 < count__47910_48274)){
var vec__47918_48276 = chunk__47909_48273.cljs$core$IIndexed$_nth$arity$2(null,i__47911_48275);
var k_48277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47918_48276,(0),null);
var v_48278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47918_48276,(1),null);
style.setProperty(dommy.utils.as_str(k_48277),v_48278);


var G__48279 = seq__47908_48272;
var G__48280 = chunk__47909_48273;
var G__48281 = count__47910_48274;
var G__48282 = (i__47911_48275 + (1));
seq__47908_48272 = G__48279;
chunk__47909_48273 = G__48280;
count__47910_48274 = G__48281;
i__47911_48275 = G__48282;
continue;
} else {
var temp__5735__auto___48283 = cljs.core.seq(seq__47908_48272);
if(temp__5735__auto___48283){
var seq__47908_48284__$1 = temp__5735__auto___48283;
if(cljs.core.chunked_seq_QMARK_(seq__47908_48284__$1)){
var c__4609__auto___48285 = cljs.core.chunk_first(seq__47908_48284__$1);
var G__48286 = cljs.core.chunk_rest(seq__47908_48284__$1);
var G__48287 = c__4609__auto___48285;
var G__48288 = cljs.core.count(c__4609__auto___48285);
var G__48289 = (0);
seq__47908_48272 = G__48286;
chunk__47909_48273 = G__48287;
count__47910_48274 = G__48288;
i__47911_48275 = G__48289;
continue;
} else {
var vec__47921_48290 = cljs.core.first(seq__47908_48284__$1);
var k_48291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47921_48290,(0),null);
var v_48292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47921_48290,(1),null);
style.setProperty(dommy.utils.as_str(k_48291),v_48292);


var G__48293 = cljs.core.next(seq__47908_48284__$1);
var G__48294 = null;
var G__48295 = (0);
var G__48296 = (0);
seq__47908_48272 = G__48293;
chunk__47909_48273 = G__48294;
count__47910_48274 = G__48295;
i__47911_48275 = G__48296;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq47906){
var G__47907 = cljs.core.first(seq47906);
var seq47906__$1 = cljs.core.next(seq47906);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47907,seq47906__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48297 = arguments.length;
var i__4790__auto___48298 = (0);
while(true){
if((i__4790__auto___48298 < len__4789__auto___48297)){
args__4795__auto__.push((arguments[i__4790__auto___48298]));

var G__48299 = (i__4790__auto___48298 + (1));
i__4790__auto___48298 = G__48299;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__47926_48300 = cljs.core.seq(keywords);
var chunk__47927_48301 = null;
var count__47928_48302 = (0);
var i__47929_48303 = (0);
while(true){
if((i__47929_48303 < count__47928_48302)){
var kw_48304 = chunk__47927_48301.cljs$core$IIndexed$_nth$arity$2(null,i__47929_48303);
style.removeProperty(dommy.utils.as_str(kw_48304));


var G__48305 = seq__47926_48300;
var G__48306 = chunk__47927_48301;
var G__48307 = count__47928_48302;
var G__48308 = (i__47929_48303 + (1));
seq__47926_48300 = G__48305;
chunk__47927_48301 = G__48306;
count__47928_48302 = G__48307;
i__47929_48303 = G__48308;
continue;
} else {
var temp__5735__auto___48309 = cljs.core.seq(seq__47926_48300);
if(temp__5735__auto___48309){
var seq__47926_48310__$1 = temp__5735__auto___48309;
if(cljs.core.chunked_seq_QMARK_(seq__47926_48310__$1)){
var c__4609__auto___48311 = cljs.core.chunk_first(seq__47926_48310__$1);
var G__48312 = cljs.core.chunk_rest(seq__47926_48310__$1);
var G__48313 = c__4609__auto___48311;
var G__48314 = cljs.core.count(c__4609__auto___48311);
var G__48315 = (0);
seq__47926_48300 = G__48312;
chunk__47927_48301 = G__48313;
count__47928_48302 = G__48314;
i__47929_48303 = G__48315;
continue;
} else {
var kw_48316 = cljs.core.first(seq__47926_48310__$1);
style.removeProperty(dommy.utils.as_str(kw_48316));


var G__48317 = cljs.core.next(seq__47926_48310__$1);
var G__48318 = null;
var G__48319 = (0);
var G__48320 = (0);
seq__47926_48300 = G__48317;
chunk__47927_48301 = G__48318;
count__47928_48302 = G__48319;
i__47929_48303 = G__48320;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq47924){
var G__47925 = cljs.core.first(seq47924);
var seq47924__$1 = cljs.core.next(seq47924);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47925,seq47924__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48321 = arguments.length;
var i__4790__auto___48322 = (0);
while(true){
if((i__4790__auto___48322 < len__4789__auto___48321)){
args__4795__auto__.push((arguments[i__4790__auto___48322]));

var G__48324 = (i__4790__auto___48322 + (1));
i__4790__auto___48322 = G__48324;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__47932_48325 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__47933_48326 = null;
var count__47934_48327 = (0);
var i__47935_48328 = (0);
while(true){
if((i__47935_48328 < count__47934_48327)){
var vec__47942_48329 = chunk__47933_48326.cljs$core$IIndexed$_nth$arity$2(null,i__47935_48328);
var k_48330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47942_48329,(0),null);
var v_48331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47942_48329,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48330,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_48331),"px"].join('')], 0));


var G__48332 = seq__47932_48325;
var G__48333 = chunk__47933_48326;
var G__48334 = count__47934_48327;
var G__48335 = (i__47935_48328 + (1));
seq__47932_48325 = G__48332;
chunk__47933_48326 = G__48333;
count__47934_48327 = G__48334;
i__47935_48328 = G__48335;
continue;
} else {
var temp__5735__auto___48336 = cljs.core.seq(seq__47932_48325);
if(temp__5735__auto___48336){
var seq__47932_48337__$1 = temp__5735__auto___48336;
if(cljs.core.chunked_seq_QMARK_(seq__47932_48337__$1)){
var c__4609__auto___48338 = cljs.core.chunk_first(seq__47932_48337__$1);
var G__48339 = cljs.core.chunk_rest(seq__47932_48337__$1);
var G__48340 = c__4609__auto___48338;
var G__48341 = cljs.core.count(c__4609__auto___48338);
var G__48342 = (0);
seq__47932_48325 = G__48339;
chunk__47933_48326 = G__48340;
count__47934_48327 = G__48341;
i__47935_48328 = G__48342;
continue;
} else {
var vec__47945_48343 = cljs.core.first(seq__47932_48337__$1);
var k_48344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47945_48343,(0),null);
var v_48345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47945_48343,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48344,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_48345),"px"].join('')], 0));


var G__48346 = cljs.core.next(seq__47932_48337__$1);
var G__48347 = null;
var G__48348 = (0);
var G__48349 = (0);
seq__47932_48325 = G__48346;
chunk__47933_48326 = G__48347;
count__47934_48327 = G__48348;
i__47935_48328 = G__48349;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq47930){
var G__47931 = cljs.core.first(seq47930);
var seq47930__$1 = cljs.core.next(seq47930);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47931,seq47930__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__47953 = arguments.length;
switch (G__47953) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48351 = arguments.length;
var i__4790__auto___48352 = (0);
while(true){
if((i__4790__auto___48352 < len__4789__auto___48351)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48352]));

var G__48353 = (i__4790__auto___48352 + (1));
i__4790__auto___48352 = G__48353;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__47954 = elem;
(G__47954[k__$1] = v);

return G__47954;
} else {
var G__47955 = elem;
G__47955.setAttribute(k__$1,v);

return G__47955;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__47956_48354 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__47957_48355 = null;
var count__47958_48356 = (0);
var i__47959_48357 = (0);
while(true){
if((i__47959_48357 < count__47958_48356)){
var vec__47966_48358 = chunk__47957_48355.cljs$core$IIndexed$_nth$arity$2(null,i__47959_48357);
var k_48359__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47966_48358,(0),null);
var v_48360__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47966_48358,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_48359__$1,v_48360__$1);


var G__48361 = seq__47956_48354;
var G__48362 = chunk__47957_48355;
var G__48363 = count__47958_48356;
var G__48364 = (i__47959_48357 + (1));
seq__47956_48354 = G__48361;
chunk__47957_48355 = G__48362;
count__47958_48356 = G__48363;
i__47959_48357 = G__48364;
continue;
} else {
var temp__5735__auto___48365 = cljs.core.seq(seq__47956_48354);
if(temp__5735__auto___48365){
var seq__47956_48366__$1 = temp__5735__auto___48365;
if(cljs.core.chunked_seq_QMARK_(seq__47956_48366__$1)){
var c__4609__auto___48367 = cljs.core.chunk_first(seq__47956_48366__$1);
var G__48368 = cljs.core.chunk_rest(seq__47956_48366__$1);
var G__48369 = c__4609__auto___48367;
var G__48370 = cljs.core.count(c__4609__auto___48367);
var G__48371 = (0);
seq__47956_48354 = G__48368;
chunk__47957_48355 = G__48369;
count__47958_48356 = G__48370;
i__47959_48357 = G__48371;
continue;
} else {
var vec__47969_48372 = cljs.core.first(seq__47956_48366__$1);
var k_48373__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969_48372,(0),null);
var v_48374__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969_48372,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_48373__$1,v_48374__$1);


var G__48375 = cljs.core.next(seq__47956_48366__$1);
var G__48376 = null;
var G__48377 = (0);
var G__48378 = (0);
seq__47956_48354 = G__48375;
chunk__47957_48355 = G__48376;
count__47958_48356 = G__48377;
i__47959_48357 = G__48378;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq47949){
var G__47950 = cljs.core.first(seq47949);
var seq47949__$1 = cljs.core.next(seq47949);
var G__47951 = cljs.core.first(seq47949__$1);
var seq47949__$2 = cljs.core.next(seq47949__$1);
var G__47952 = cljs.core.first(seq47949__$2);
var seq47949__$3 = cljs.core.next(seq47949__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47950,G__47951,G__47952,seq47949__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__47976 = arguments.length;
switch (G__47976) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48380 = arguments.length;
var i__4790__auto___48381 = (0);
while(true){
if((i__4790__auto___48381 < len__4789__auto___48380)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48381]));

var G__48382 = (i__4790__auto___48381 + (1));
i__4790__auto___48381 = G__48382;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_48383__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__47977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__47977.cljs$core$IFn$_invoke$arity$1 ? fexpr__47977.cljs$core$IFn$_invoke$arity$1(k_48383__$1) : fexpr__47977.call(null,k_48383__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_48383__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__47978_48386 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__47979_48387 = null;
var count__47980_48388 = (0);
var i__47981_48389 = (0);
while(true){
if((i__47981_48389 < count__47980_48388)){
var k_48390__$1 = chunk__47979_48387.cljs$core$IIndexed$_nth$arity$2(null,i__47981_48389);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_48390__$1);


var G__48391 = seq__47978_48386;
var G__48392 = chunk__47979_48387;
var G__48393 = count__47980_48388;
var G__48394 = (i__47981_48389 + (1));
seq__47978_48386 = G__48391;
chunk__47979_48387 = G__48392;
count__47980_48388 = G__48393;
i__47981_48389 = G__48394;
continue;
} else {
var temp__5735__auto___48395 = cljs.core.seq(seq__47978_48386);
if(temp__5735__auto___48395){
var seq__47978_48396__$1 = temp__5735__auto___48395;
if(cljs.core.chunked_seq_QMARK_(seq__47978_48396__$1)){
var c__4609__auto___48398 = cljs.core.chunk_first(seq__47978_48396__$1);
var G__48399 = cljs.core.chunk_rest(seq__47978_48396__$1);
var G__48400 = c__4609__auto___48398;
var G__48401 = cljs.core.count(c__4609__auto___48398);
var G__48402 = (0);
seq__47978_48386 = G__48399;
chunk__47979_48387 = G__48400;
count__47980_48388 = G__48401;
i__47981_48389 = G__48402;
continue;
} else {
var k_48404__$1 = cljs.core.first(seq__47978_48396__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_48404__$1);


var G__48405 = cljs.core.next(seq__47978_48396__$1);
var G__48406 = null;
var G__48407 = (0);
var G__48408 = (0);
seq__47978_48386 = G__48405;
chunk__47979_48387 = G__48406;
count__47980_48388 = G__48407;
i__47981_48389 = G__48408;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq47973){
var G__47974 = cljs.core.first(seq47973);
var seq47973__$1 = cljs.core.next(seq47973);
var G__47975 = cljs.core.first(seq47973__$1);
var seq47973__$2 = cljs.core.next(seq47973__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47974,G__47975,seq47973__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__47983 = arguments.length;
switch (G__47983) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__47988 = arguments.length;
switch (G__47988) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48411 = arguments.length;
var i__4790__auto___48413 = (0);
while(true){
if((i__4790__auto___48413 < len__4789__auto___48411)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48413]));

var G__48414 = (i__4790__auto___48413 + (1));
i__4790__auto___48413 = G__48414;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___48416 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___48416)){
var class_list_48417 = temp__5733__auto___48416;
var seq__47989_48418 = cljs.core.seq(classes__$1);
var chunk__47990_48419 = null;
var count__47991_48420 = (0);
var i__47992_48421 = (0);
while(true){
if((i__47992_48421 < count__47991_48420)){
var c_48422 = chunk__47990_48419.cljs$core$IIndexed$_nth$arity$2(null,i__47992_48421);
class_list_48417.add(c_48422);


var G__48424 = seq__47989_48418;
var G__48425 = chunk__47990_48419;
var G__48426 = count__47991_48420;
var G__48427 = (i__47992_48421 + (1));
seq__47989_48418 = G__48424;
chunk__47990_48419 = G__48425;
count__47991_48420 = G__48426;
i__47992_48421 = G__48427;
continue;
} else {
var temp__5735__auto___48428 = cljs.core.seq(seq__47989_48418);
if(temp__5735__auto___48428){
var seq__47989_48429__$1 = temp__5735__auto___48428;
if(cljs.core.chunked_seq_QMARK_(seq__47989_48429__$1)){
var c__4609__auto___48430 = cljs.core.chunk_first(seq__47989_48429__$1);
var G__48431 = cljs.core.chunk_rest(seq__47989_48429__$1);
var G__48432 = c__4609__auto___48430;
var G__48433 = cljs.core.count(c__4609__auto___48430);
var G__48434 = (0);
seq__47989_48418 = G__48431;
chunk__47990_48419 = G__48432;
count__47991_48420 = G__48433;
i__47992_48421 = G__48434;
continue;
} else {
var c_48436 = cljs.core.first(seq__47989_48429__$1);
class_list_48417.add(c_48436);


var G__48437 = cljs.core.next(seq__47989_48429__$1);
var G__48438 = null;
var G__48439 = (0);
var G__48440 = (0);
seq__47989_48418 = G__48437;
chunk__47990_48419 = G__48438;
count__47991_48420 = G__48439;
i__47992_48421 = G__48440;
continue;
}
} else {
}
}
break;
}
} else {
var seq__47993_48441 = cljs.core.seq(classes__$1);
var chunk__47994_48442 = null;
var count__47995_48443 = (0);
var i__47996_48444 = (0);
while(true){
if((i__47996_48444 < count__47995_48443)){
var c_48445 = chunk__47994_48442.cljs$core$IIndexed$_nth$arity$2(null,i__47996_48444);
var class_name_48447 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_48447,c_48445))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_48447 === ""))?c_48445:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_48447)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_48445)].join('')));
}


var G__48450 = seq__47993_48441;
var G__48451 = chunk__47994_48442;
var G__48452 = count__47995_48443;
var G__48453 = (i__47996_48444 + (1));
seq__47993_48441 = G__48450;
chunk__47994_48442 = G__48451;
count__47995_48443 = G__48452;
i__47996_48444 = G__48453;
continue;
} else {
var temp__5735__auto___48454 = cljs.core.seq(seq__47993_48441);
if(temp__5735__auto___48454){
var seq__47993_48455__$1 = temp__5735__auto___48454;
if(cljs.core.chunked_seq_QMARK_(seq__47993_48455__$1)){
var c__4609__auto___48456 = cljs.core.chunk_first(seq__47993_48455__$1);
var G__48457 = cljs.core.chunk_rest(seq__47993_48455__$1);
var G__48458 = c__4609__auto___48456;
var G__48459 = cljs.core.count(c__4609__auto___48456);
var G__48460 = (0);
seq__47993_48441 = G__48457;
chunk__47994_48442 = G__48458;
count__47995_48443 = G__48459;
i__47996_48444 = G__48460;
continue;
} else {
var c_48461 = cljs.core.first(seq__47993_48455__$1);
var class_name_48462 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_48462,c_48461))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_48462 === ""))?c_48461:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_48462)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_48461)].join('')));
}


var G__48464 = cljs.core.next(seq__47993_48455__$1);
var G__48465 = null;
var G__48466 = (0);
var G__48467 = (0);
seq__47993_48441 = G__48464;
chunk__47994_48442 = G__48465;
count__47995_48443 = G__48466;
i__47996_48444 = G__48467;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__47997_48468 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__47998_48469 = null;
var count__47999_48470 = (0);
var i__48000_48471 = (0);
while(true){
if((i__48000_48471 < count__47999_48470)){
var c_48472 = chunk__47998_48469.cljs$core$IIndexed$_nth$arity$2(null,i__48000_48471);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_48472);


var G__48473 = seq__47997_48468;
var G__48474 = chunk__47998_48469;
var G__48475 = count__47999_48470;
var G__48476 = (i__48000_48471 + (1));
seq__47997_48468 = G__48473;
chunk__47998_48469 = G__48474;
count__47999_48470 = G__48475;
i__48000_48471 = G__48476;
continue;
} else {
var temp__5735__auto___48477 = cljs.core.seq(seq__47997_48468);
if(temp__5735__auto___48477){
var seq__47997_48478__$1 = temp__5735__auto___48477;
if(cljs.core.chunked_seq_QMARK_(seq__47997_48478__$1)){
var c__4609__auto___48479 = cljs.core.chunk_first(seq__47997_48478__$1);
var G__48480 = cljs.core.chunk_rest(seq__47997_48478__$1);
var G__48481 = c__4609__auto___48479;
var G__48482 = cljs.core.count(c__4609__auto___48479);
var G__48483 = (0);
seq__47997_48468 = G__48480;
chunk__47998_48469 = G__48481;
count__47999_48470 = G__48482;
i__48000_48471 = G__48483;
continue;
} else {
var c_48484 = cljs.core.first(seq__47997_48478__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_48484);


var G__48486 = cljs.core.next(seq__47997_48478__$1);
var G__48487 = null;
var G__48488 = (0);
var G__48489 = (0);
seq__47997_48468 = G__48486;
chunk__47998_48469 = G__48487;
count__47999_48470 = G__48488;
i__48000_48471 = G__48489;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq47985){
var G__47986 = cljs.core.first(seq47985);
var seq47985__$1 = cljs.core.next(seq47985);
var G__47987 = cljs.core.first(seq47985__$1);
var seq47985__$2 = cljs.core.next(seq47985__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47986,G__47987,seq47985__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__48005 = arguments.length;
switch (G__48005) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48493 = arguments.length;
var i__4790__auto___48494 = (0);
while(true){
if((i__4790__auto___48494 < len__4789__auto___48493)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48494]));

var G__48495 = (i__4790__auto___48494 + (1));
i__4790__auto___48494 = G__48495;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___48496 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___48496)){
var class_list_48497 = temp__5733__auto___48496;
class_list_48497.remove(c__$1);
} else {
var class_name_48498 = dommy.core.class$(elem);
var new_class_name_48499 = dommy.utils.remove_class_str(class_name_48498,c__$1);
if((class_name_48498 === new_class_name_48499)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_48499);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__48006 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__48007 = null;
var count__48008 = (0);
var i__48009 = (0);
while(true){
if((i__48009 < count__48008)){
var c = chunk__48007.cljs$core$IIndexed$_nth$arity$2(null,i__48009);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__48500 = seq__48006;
var G__48501 = chunk__48007;
var G__48502 = count__48008;
var G__48503 = (i__48009 + (1));
seq__48006 = G__48500;
chunk__48007 = G__48501;
count__48008 = G__48502;
i__48009 = G__48503;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48006);
if(temp__5735__auto__){
var seq__48006__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48006__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48006__$1);
var G__48504 = cljs.core.chunk_rest(seq__48006__$1);
var G__48505 = c__4609__auto__;
var G__48506 = cljs.core.count(c__4609__auto__);
var G__48507 = (0);
seq__48006 = G__48504;
chunk__48007 = G__48505;
count__48008 = G__48506;
i__48009 = G__48507;
continue;
} else {
var c = cljs.core.first(seq__48006__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__48508 = cljs.core.next(seq__48006__$1);
var G__48509 = null;
var G__48510 = (0);
var G__48511 = (0);
seq__48006 = G__48508;
chunk__48007 = G__48509;
count__48008 = G__48510;
i__48009 = G__48511;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq48002){
var G__48003 = cljs.core.first(seq48002);
var seq48002__$1 = cljs.core.next(seq48002);
var G__48004 = cljs.core.first(seq48002__$1);
var seq48002__$2 = cljs.core.next(seq48002__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48003,G__48004,seq48002__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__48011 = arguments.length;
switch (G__48011) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___48513 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___48513)){
var class_list_48514 = temp__5733__auto___48513;
class_list_48514.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__48013 = arguments.length;
switch (G__48013) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__48015 = arguments.length;
switch (G__48015) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__48020 = arguments.length;
switch (G__48020) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48534 = arguments.length;
var i__4790__auto___48535 = (0);
while(true){
if((i__4790__auto___48535 < len__4789__auto___48534)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48535]));

var G__48536 = (i__4790__auto___48535 + (1));
i__4790__auto___48535 = G__48536;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__48021 = parent;
G__48021.appendChild(child);

return G__48021;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__48022_48544 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__48023_48545 = null;
var count__48024_48546 = (0);
var i__48025_48547 = (0);
while(true){
if((i__48025_48547 < count__48024_48546)){
var c_48548 = chunk__48023_48545.cljs$core$IIndexed$_nth$arity$2(null,i__48025_48547);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48548);


var G__48549 = seq__48022_48544;
var G__48550 = chunk__48023_48545;
var G__48551 = count__48024_48546;
var G__48552 = (i__48025_48547 + (1));
seq__48022_48544 = G__48549;
chunk__48023_48545 = G__48550;
count__48024_48546 = G__48551;
i__48025_48547 = G__48552;
continue;
} else {
var temp__5735__auto___48555 = cljs.core.seq(seq__48022_48544);
if(temp__5735__auto___48555){
var seq__48022_48557__$1 = temp__5735__auto___48555;
if(cljs.core.chunked_seq_QMARK_(seq__48022_48557__$1)){
var c__4609__auto___48558 = cljs.core.chunk_first(seq__48022_48557__$1);
var G__48559 = cljs.core.chunk_rest(seq__48022_48557__$1);
var G__48560 = c__4609__auto___48558;
var G__48561 = cljs.core.count(c__4609__auto___48558);
var G__48562 = (0);
seq__48022_48544 = G__48559;
chunk__48023_48545 = G__48560;
count__48024_48546 = G__48561;
i__48025_48547 = G__48562;
continue;
} else {
var c_48563 = cljs.core.first(seq__48022_48557__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48563);


var G__48564 = cljs.core.next(seq__48022_48557__$1);
var G__48565 = null;
var G__48566 = (0);
var G__48567 = (0);
seq__48022_48544 = G__48564;
chunk__48023_48545 = G__48565;
count__48024_48546 = G__48566;
i__48025_48547 = G__48567;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq48017){
var G__48018 = cljs.core.first(seq48017);
var seq48017__$1 = cljs.core.next(seq48017);
var G__48019 = cljs.core.first(seq48017__$1);
var seq48017__$2 = cljs.core.next(seq48017__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48018,G__48019,seq48017__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__48030 = arguments.length;
switch (G__48030) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___48570 = arguments.length;
var i__4790__auto___48571 = (0);
while(true){
if((i__4790__auto___48571 < len__4789__auto___48570)){
args_arr__4810__auto__.push((arguments[i__4790__auto___48571]));

var G__48573 = (i__4790__auto___48571 + (1));
i__4790__auto___48571 = G__48573;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__48031 = parent;
G__48031.insertBefore(child,parent.firstChild);

return G__48031;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__48032_48576 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__48033_48577 = null;
var count__48034_48578 = (0);
var i__48035_48579 = (0);
while(true){
if((i__48035_48579 < count__48034_48578)){
var c_48580 = chunk__48033_48577.cljs$core$IIndexed$_nth$arity$2(null,i__48035_48579);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48580);


var G__48581 = seq__48032_48576;
var G__48582 = chunk__48033_48577;
var G__48583 = count__48034_48578;
var G__48584 = (i__48035_48579 + (1));
seq__48032_48576 = G__48581;
chunk__48033_48577 = G__48582;
count__48034_48578 = G__48583;
i__48035_48579 = G__48584;
continue;
} else {
var temp__5735__auto___48587 = cljs.core.seq(seq__48032_48576);
if(temp__5735__auto___48587){
var seq__48032_48588__$1 = temp__5735__auto___48587;
if(cljs.core.chunked_seq_QMARK_(seq__48032_48588__$1)){
var c__4609__auto___48589 = cljs.core.chunk_first(seq__48032_48588__$1);
var G__48590 = cljs.core.chunk_rest(seq__48032_48588__$1);
var G__48591 = c__4609__auto___48589;
var G__48592 = cljs.core.count(c__4609__auto___48589);
var G__48593 = (0);
seq__48032_48576 = G__48590;
chunk__48033_48577 = G__48591;
count__48034_48578 = G__48592;
i__48035_48579 = G__48593;
continue;
} else {
var c_48594 = cljs.core.first(seq__48032_48588__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_48594);


var G__48595 = cljs.core.next(seq__48032_48588__$1);
var G__48596 = null;
var G__48597 = (0);
var G__48598 = (0);
seq__48032_48576 = G__48595;
chunk__48033_48577 = G__48596;
count__48034_48578 = G__48597;
i__48035_48579 = G__48598;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq48027){
var G__48028 = cljs.core.first(seq48027);
var seq48027__$1 = cljs.core.next(seq48027);
var G__48029 = cljs.core.first(seq48027__$1);
var seq48027__$2 = cljs.core.next(seq48027__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48028,G__48029,seq48027__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___48599 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___48599)){
var next_48600 = temp__5733__auto___48599;
dommy.core.insert_before_BANG_(elem,next_48600);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__48037 = arguments.length;
switch (G__48037) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__48038 = p;
G__48038.removeChild(elem);

return G__48038;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48039){
var vec__48040 = p__48039;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48040,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48040,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48603 = arguments.length;
var i__4790__auto___48604 = (0);
while(true){
if((i__4790__auto___48604 < len__4789__auto___48603)){
args__4795__auto__.push((arguments[i__4790__auto___48604]));

var G__48605 = (i__4790__auto___48604 + (1));
i__4790__auto___48604 = G__48605;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq48043){
var G__48044 = cljs.core.first(seq48043);
var seq48043__$1 = cljs.core.next(seq48043);
var G__48045 = cljs.core.first(seq48043__$1);
var seq48043__$2 = cljs.core.next(seq48043__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48044,G__48045,seq48043__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__48046 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__48046.cljs$core$IFn$_invoke$arity$1 ? fexpr__48046.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__48046.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48606 = arguments.length;
var i__4790__auto___48607 = (0);
while(true){
if((i__4790__auto___48607 < len__4789__auto___48606)){
args__4795__auto__.push((arguments[i__4790__auto___48607]));

var G__48608 = (i__4790__auto___48607 + (1));
i__4790__auto___48607 = G__48608;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__48049_48609 = dommy.core.elem_and_selector(elem_sel);
var elem_48610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049_48609,(0),null);
var selector_48611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049_48609,(1),null);
var seq__48052_48612 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48059_48613 = null;
var count__48060_48614 = (0);
var i__48061_48615 = (0);
while(true){
if((i__48061_48615 < count__48060_48614)){
var vec__48114_48616 = chunk__48059_48613.cljs$core$IIndexed$_nth$arity$2(null,i__48061_48615);
var orig_type_48617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114_48616,(0),null);
var f_48618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114_48616,(1),null);
var seq__48062_48619 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48617,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48617,cljs.core.identity])));
var chunk__48064_48620 = null;
var count__48065_48621 = (0);
var i__48066_48622 = (0);
while(true){
if((i__48066_48622 < count__48065_48621)){
var vec__48127_48623 = chunk__48064_48620.cljs$core$IIndexed$_nth$arity$2(null,i__48066_48622);
var actual_type_48624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48127_48623,(0),null);
var factory_48625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48127_48623,(1),null);
var canonical_f_48626 = (function (){var G__48131 = (factory_48625.cljs$core$IFn$_invoke$arity$1 ? factory_48625.cljs$core$IFn$_invoke$arity$1(f_48618) : factory_48625.call(null,f_48618));
var fexpr__48130 = (cljs.core.truth_(selector_48611)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48610,selector_48611):cljs.core.identity);
return (fexpr__48130.cljs$core$IFn$_invoke$arity$1 ? fexpr__48130.cljs$core$IFn$_invoke$arity$1(G__48131) : fexpr__48130.call(null,G__48131));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48610,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48611,actual_type_48624,f_48618], null),canonical_f_48626], 0));

if(cljs.core.truth_(elem_48610.addEventListener)){
elem_48610.addEventListener(cljs.core.name(actual_type_48624),canonical_f_48626);
} else {
elem_48610.attachEvent(cljs.core.name(actual_type_48624),canonical_f_48626);
}


var G__48627 = seq__48062_48619;
var G__48628 = chunk__48064_48620;
var G__48629 = count__48065_48621;
var G__48630 = (i__48066_48622 + (1));
seq__48062_48619 = G__48627;
chunk__48064_48620 = G__48628;
count__48065_48621 = G__48629;
i__48066_48622 = G__48630;
continue;
} else {
var temp__5735__auto___48631 = cljs.core.seq(seq__48062_48619);
if(temp__5735__auto___48631){
var seq__48062_48632__$1 = temp__5735__auto___48631;
if(cljs.core.chunked_seq_QMARK_(seq__48062_48632__$1)){
var c__4609__auto___48633 = cljs.core.chunk_first(seq__48062_48632__$1);
var G__48634 = cljs.core.chunk_rest(seq__48062_48632__$1);
var G__48635 = c__4609__auto___48633;
var G__48636 = cljs.core.count(c__4609__auto___48633);
var G__48637 = (0);
seq__48062_48619 = G__48634;
chunk__48064_48620 = G__48635;
count__48065_48621 = G__48636;
i__48066_48622 = G__48637;
continue;
} else {
var vec__48132_48638 = cljs.core.first(seq__48062_48632__$1);
var actual_type_48639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132_48638,(0),null);
var factory_48640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132_48638,(1),null);
var canonical_f_48641 = (function (){var G__48136 = (factory_48640.cljs$core$IFn$_invoke$arity$1 ? factory_48640.cljs$core$IFn$_invoke$arity$1(f_48618) : factory_48640.call(null,f_48618));
var fexpr__48135 = (cljs.core.truth_(selector_48611)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48610,selector_48611):cljs.core.identity);
return (fexpr__48135.cljs$core$IFn$_invoke$arity$1 ? fexpr__48135.cljs$core$IFn$_invoke$arity$1(G__48136) : fexpr__48135.call(null,G__48136));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48610,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48611,actual_type_48639,f_48618], null),canonical_f_48641], 0));

if(cljs.core.truth_(elem_48610.addEventListener)){
elem_48610.addEventListener(cljs.core.name(actual_type_48639),canonical_f_48641);
} else {
elem_48610.attachEvent(cljs.core.name(actual_type_48639),canonical_f_48641);
}


var G__48642 = cljs.core.next(seq__48062_48632__$1);
var G__48643 = null;
var G__48644 = (0);
var G__48645 = (0);
seq__48062_48619 = G__48642;
chunk__48064_48620 = G__48643;
count__48065_48621 = G__48644;
i__48066_48622 = G__48645;
continue;
}
} else {
}
}
break;
}

var G__48646 = seq__48052_48612;
var G__48647 = chunk__48059_48613;
var G__48648 = count__48060_48614;
var G__48649 = (i__48061_48615 + (1));
seq__48052_48612 = G__48646;
chunk__48059_48613 = G__48647;
count__48060_48614 = G__48648;
i__48061_48615 = G__48649;
continue;
} else {
var temp__5735__auto___48650 = cljs.core.seq(seq__48052_48612);
if(temp__5735__auto___48650){
var seq__48052_48651__$1 = temp__5735__auto___48650;
if(cljs.core.chunked_seq_QMARK_(seq__48052_48651__$1)){
var c__4609__auto___48652 = cljs.core.chunk_first(seq__48052_48651__$1);
var G__48653 = cljs.core.chunk_rest(seq__48052_48651__$1);
var G__48654 = c__4609__auto___48652;
var G__48655 = cljs.core.count(c__4609__auto___48652);
var G__48656 = (0);
seq__48052_48612 = G__48653;
chunk__48059_48613 = G__48654;
count__48060_48614 = G__48655;
i__48061_48615 = G__48656;
continue;
} else {
var vec__48137_48657 = cljs.core.first(seq__48052_48651__$1);
var orig_type_48658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48137_48657,(0),null);
var f_48659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48137_48657,(1),null);
var seq__48053_48660 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48658,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48658,cljs.core.identity])));
var chunk__48055_48661 = null;
var count__48056_48662 = (0);
var i__48057_48663 = (0);
while(true){
if((i__48057_48663 < count__48056_48662)){
var vec__48150_48664 = chunk__48055_48661.cljs$core$IIndexed$_nth$arity$2(null,i__48057_48663);
var actual_type_48665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150_48664,(0),null);
var factory_48666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48150_48664,(1),null);
var canonical_f_48667 = (function (){var G__48154 = (factory_48666.cljs$core$IFn$_invoke$arity$1 ? factory_48666.cljs$core$IFn$_invoke$arity$1(f_48659) : factory_48666.call(null,f_48659));
var fexpr__48153 = (cljs.core.truth_(selector_48611)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48610,selector_48611):cljs.core.identity);
return (fexpr__48153.cljs$core$IFn$_invoke$arity$1 ? fexpr__48153.cljs$core$IFn$_invoke$arity$1(G__48154) : fexpr__48153.call(null,G__48154));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48610,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48611,actual_type_48665,f_48659], null),canonical_f_48667], 0));

if(cljs.core.truth_(elem_48610.addEventListener)){
elem_48610.addEventListener(cljs.core.name(actual_type_48665),canonical_f_48667);
} else {
elem_48610.attachEvent(cljs.core.name(actual_type_48665),canonical_f_48667);
}


var G__48668 = seq__48053_48660;
var G__48669 = chunk__48055_48661;
var G__48670 = count__48056_48662;
var G__48671 = (i__48057_48663 + (1));
seq__48053_48660 = G__48668;
chunk__48055_48661 = G__48669;
count__48056_48662 = G__48670;
i__48057_48663 = G__48671;
continue;
} else {
var temp__5735__auto___48672__$1 = cljs.core.seq(seq__48053_48660);
if(temp__5735__auto___48672__$1){
var seq__48053_48673__$1 = temp__5735__auto___48672__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48053_48673__$1)){
var c__4609__auto___48674 = cljs.core.chunk_first(seq__48053_48673__$1);
var G__48675 = cljs.core.chunk_rest(seq__48053_48673__$1);
var G__48676 = c__4609__auto___48674;
var G__48677 = cljs.core.count(c__4609__auto___48674);
var G__48678 = (0);
seq__48053_48660 = G__48675;
chunk__48055_48661 = G__48676;
count__48056_48662 = G__48677;
i__48057_48663 = G__48678;
continue;
} else {
var vec__48155_48679 = cljs.core.first(seq__48053_48673__$1);
var actual_type_48680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155_48679,(0),null);
var factory_48681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155_48679,(1),null);
var canonical_f_48682 = (function (){var G__48159 = (factory_48681.cljs$core$IFn$_invoke$arity$1 ? factory_48681.cljs$core$IFn$_invoke$arity$1(f_48659) : factory_48681.call(null,f_48659));
var fexpr__48158 = (cljs.core.truth_(selector_48611)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_48610,selector_48611):cljs.core.identity);
return (fexpr__48158.cljs$core$IFn$_invoke$arity$1 ? fexpr__48158.cljs$core$IFn$_invoke$arity$1(G__48159) : fexpr__48158.call(null,G__48159));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48610,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48611,actual_type_48680,f_48659], null),canonical_f_48682], 0));

if(cljs.core.truth_(elem_48610.addEventListener)){
elem_48610.addEventListener(cljs.core.name(actual_type_48680),canonical_f_48682);
} else {
elem_48610.attachEvent(cljs.core.name(actual_type_48680),canonical_f_48682);
}


var G__48683 = cljs.core.next(seq__48053_48673__$1);
var G__48684 = null;
var G__48685 = (0);
var G__48686 = (0);
seq__48053_48660 = G__48683;
chunk__48055_48661 = G__48684;
count__48056_48662 = G__48685;
i__48057_48663 = G__48686;
continue;
}
} else {
}
}
break;
}

var G__48687 = cljs.core.next(seq__48052_48651__$1);
var G__48688 = null;
var G__48689 = (0);
var G__48690 = (0);
seq__48052_48612 = G__48687;
chunk__48059_48613 = G__48688;
count__48060_48614 = G__48689;
i__48061_48615 = G__48690;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq48047){
var G__48048 = cljs.core.first(seq48047);
var seq48047__$1 = cljs.core.next(seq48047);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48048,seq48047__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48691 = arguments.length;
var i__4790__auto___48692 = (0);
while(true){
if((i__4790__auto___48692 < len__4789__auto___48691)){
args__4795__auto__.push((arguments[i__4790__auto___48692]));

var G__48693 = (i__4790__auto___48692 + (1));
i__4790__auto___48692 = G__48693;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__48162_48694 = dommy.core.elem_and_selector(elem_sel);
var elem_48695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48162_48694,(0),null);
var selector_48696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48162_48694,(1),null);
var seq__48165_48697 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48172_48698 = null;
var count__48173_48699 = (0);
var i__48174_48700 = (0);
while(true){
if((i__48174_48700 < count__48173_48699)){
var vec__48211_48701 = chunk__48172_48698.cljs$core$IIndexed$_nth$arity$2(null,i__48174_48700);
var orig_type_48702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48211_48701,(0),null);
var f_48703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48211_48701,(1),null);
var seq__48175_48704 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48702,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48702,cljs.core.identity])));
var chunk__48177_48705 = null;
var count__48178_48706 = (0);
var i__48179_48707 = (0);
while(true){
if((i__48179_48707 < count__48178_48706)){
var vec__48220_48708 = chunk__48177_48705.cljs$core$IIndexed$_nth$arity$2(null,i__48179_48707);
var actual_type_48709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48220_48708,(0),null);
var __48710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48220_48708,(1),null);
var keys_48711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48696,actual_type_48709,f_48703], null);
var canonical_f_48712 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48695),keys_48711);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48695,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48711], 0));

if(cljs.core.truth_(elem_48695.removeEventListener)){
elem_48695.removeEventListener(cljs.core.name(actual_type_48709),canonical_f_48712);
} else {
elem_48695.detachEvent(cljs.core.name(actual_type_48709),canonical_f_48712);
}


var G__48713 = seq__48175_48704;
var G__48714 = chunk__48177_48705;
var G__48715 = count__48178_48706;
var G__48716 = (i__48179_48707 + (1));
seq__48175_48704 = G__48713;
chunk__48177_48705 = G__48714;
count__48178_48706 = G__48715;
i__48179_48707 = G__48716;
continue;
} else {
var temp__5735__auto___48717 = cljs.core.seq(seq__48175_48704);
if(temp__5735__auto___48717){
var seq__48175_48718__$1 = temp__5735__auto___48717;
if(cljs.core.chunked_seq_QMARK_(seq__48175_48718__$1)){
var c__4609__auto___48719 = cljs.core.chunk_first(seq__48175_48718__$1);
var G__48720 = cljs.core.chunk_rest(seq__48175_48718__$1);
var G__48721 = c__4609__auto___48719;
var G__48722 = cljs.core.count(c__4609__auto___48719);
var G__48723 = (0);
seq__48175_48704 = G__48720;
chunk__48177_48705 = G__48721;
count__48178_48706 = G__48722;
i__48179_48707 = G__48723;
continue;
} else {
var vec__48223_48724 = cljs.core.first(seq__48175_48718__$1);
var actual_type_48725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48223_48724,(0),null);
var __48726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48223_48724,(1),null);
var keys_48727 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48696,actual_type_48725,f_48703], null);
var canonical_f_48728 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48695),keys_48727);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48695,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48727], 0));

if(cljs.core.truth_(elem_48695.removeEventListener)){
elem_48695.removeEventListener(cljs.core.name(actual_type_48725),canonical_f_48728);
} else {
elem_48695.detachEvent(cljs.core.name(actual_type_48725),canonical_f_48728);
}


var G__48733 = cljs.core.next(seq__48175_48718__$1);
var G__48734 = null;
var G__48735 = (0);
var G__48736 = (0);
seq__48175_48704 = G__48733;
chunk__48177_48705 = G__48734;
count__48178_48706 = G__48735;
i__48179_48707 = G__48736;
continue;
}
} else {
}
}
break;
}

var G__48737 = seq__48165_48697;
var G__48738 = chunk__48172_48698;
var G__48739 = count__48173_48699;
var G__48740 = (i__48174_48700 + (1));
seq__48165_48697 = G__48737;
chunk__48172_48698 = G__48738;
count__48173_48699 = G__48739;
i__48174_48700 = G__48740;
continue;
} else {
var temp__5735__auto___48741 = cljs.core.seq(seq__48165_48697);
if(temp__5735__auto___48741){
var seq__48165_48742__$1 = temp__5735__auto___48741;
if(cljs.core.chunked_seq_QMARK_(seq__48165_48742__$1)){
var c__4609__auto___48743 = cljs.core.chunk_first(seq__48165_48742__$1);
var G__48744 = cljs.core.chunk_rest(seq__48165_48742__$1);
var G__48745 = c__4609__auto___48743;
var G__48746 = cljs.core.count(c__4609__auto___48743);
var G__48747 = (0);
seq__48165_48697 = G__48744;
chunk__48172_48698 = G__48745;
count__48173_48699 = G__48746;
i__48174_48700 = G__48747;
continue;
} else {
var vec__48226_48748 = cljs.core.first(seq__48165_48742__$1);
var orig_type_48749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48226_48748,(0),null);
var f_48750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48226_48748,(1),null);
var seq__48166_48751 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_48749,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_48749,cljs.core.identity])));
var chunk__48168_48752 = null;
var count__48169_48753 = (0);
var i__48170_48754 = (0);
while(true){
if((i__48170_48754 < count__48169_48753)){
var vec__48235_48755 = chunk__48168_48752.cljs$core$IIndexed$_nth$arity$2(null,i__48170_48754);
var actual_type_48756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235_48755,(0),null);
var __48757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235_48755,(1),null);
var keys_48760 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48696,actual_type_48756,f_48750], null);
var canonical_f_48761 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48695),keys_48760);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48695,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48760], 0));

if(cljs.core.truth_(elem_48695.removeEventListener)){
elem_48695.removeEventListener(cljs.core.name(actual_type_48756),canonical_f_48761);
} else {
elem_48695.detachEvent(cljs.core.name(actual_type_48756),canonical_f_48761);
}


var G__48762 = seq__48166_48751;
var G__48763 = chunk__48168_48752;
var G__48764 = count__48169_48753;
var G__48765 = (i__48170_48754 + (1));
seq__48166_48751 = G__48762;
chunk__48168_48752 = G__48763;
count__48169_48753 = G__48764;
i__48170_48754 = G__48765;
continue;
} else {
var temp__5735__auto___48766__$1 = cljs.core.seq(seq__48166_48751);
if(temp__5735__auto___48766__$1){
var seq__48166_48767__$1 = temp__5735__auto___48766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48166_48767__$1)){
var c__4609__auto___48768 = cljs.core.chunk_first(seq__48166_48767__$1);
var G__48769 = cljs.core.chunk_rest(seq__48166_48767__$1);
var G__48770 = c__4609__auto___48768;
var G__48771 = cljs.core.count(c__4609__auto___48768);
var G__48772 = (0);
seq__48166_48751 = G__48769;
chunk__48168_48752 = G__48770;
count__48169_48753 = G__48771;
i__48170_48754 = G__48772;
continue;
} else {
var vec__48238_48776 = cljs.core.first(seq__48166_48767__$1);
var actual_type_48777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48238_48776,(0),null);
var __48778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48238_48776,(1),null);
var keys_48779 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_48696,actual_type_48777,f_48750], null);
var canonical_f_48780 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_48695),keys_48779);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_48695,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_48779], 0));

if(cljs.core.truth_(elem_48695.removeEventListener)){
elem_48695.removeEventListener(cljs.core.name(actual_type_48777),canonical_f_48780);
} else {
elem_48695.detachEvent(cljs.core.name(actual_type_48777),canonical_f_48780);
}


var G__48785 = cljs.core.next(seq__48166_48767__$1);
var G__48786 = null;
var G__48787 = (0);
var G__48788 = (0);
seq__48166_48751 = G__48785;
chunk__48168_48752 = G__48786;
count__48169_48753 = G__48787;
i__48170_48754 = G__48788;
continue;
}
} else {
}
}
break;
}

var G__48789 = cljs.core.next(seq__48165_48742__$1);
var G__48790 = null;
var G__48791 = (0);
var G__48792 = (0);
seq__48165_48697 = G__48789;
chunk__48172_48698 = G__48790;
count__48173_48699 = G__48791;
i__48174_48700 = G__48792;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq48160){
var G__48161 = cljs.core.first(seq48160);
var seq48160__$1 = cljs.core.next(seq48160);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48161,seq48160__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48793 = arguments.length;
var i__4790__auto___48794 = (0);
while(true){
if((i__4790__auto___48794 < len__4789__auto___48793)){
args__4795__auto__.push((arguments[i__4790__auto___48794]));

var G__48795 = (i__4790__auto___48794 + (1));
i__4790__auto___48794 = G__48795;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__48243_48796 = dommy.core.elem_and_selector(elem_sel);
var elem_48797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48243_48796,(0),null);
var selector_48798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48243_48796,(1),null);
var seq__48246_48799 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__48247_48800 = null;
var count__48248_48801 = (0);
var i__48249_48802 = (0);
while(true){
if((i__48249_48802 < count__48248_48801)){
var vec__48256_48803 = chunk__48247_48800.cljs$core$IIndexed$_nth$arity$2(null,i__48249_48802);
var type_48804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48256_48803,(0),null);
var f_48805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48256_48803,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_48804,((function (seq__48246_48799,chunk__48247_48800,count__48248_48801,i__48249_48802,vec__48256_48803,type_48804,f_48805,vec__48243_48796,elem_48797,selector_48798){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_48804,dommy$core$this_fn], 0));

return (f_48805.cljs$core$IFn$_invoke$arity$1 ? f_48805.cljs$core$IFn$_invoke$arity$1(e) : f_48805.call(null,e));
});})(seq__48246_48799,chunk__48247_48800,count__48248_48801,i__48249_48802,vec__48256_48803,type_48804,f_48805,vec__48243_48796,elem_48797,selector_48798))
], 0));


var G__48811 = seq__48246_48799;
var G__48812 = chunk__48247_48800;
var G__48813 = count__48248_48801;
var G__48814 = (i__48249_48802 + (1));
seq__48246_48799 = G__48811;
chunk__48247_48800 = G__48812;
count__48248_48801 = G__48813;
i__48249_48802 = G__48814;
continue;
} else {
var temp__5735__auto___48815 = cljs.core.seq(seq__48246_48799);
if(temp__5735__auto___48815){
var seq__48246_48816__$1 = temp__5735__auto___48815;
if(cljs.core.chunked_seq_QMARK_(seq__48246_48816__$1)){
var c__4609__auto___48817 = cljs.core.chunk_first(seq__48246_48816__$1);
var G__48818 = cljs.core.chunk_rest(seq__48246_48816__$1);
var G__48819 = c__4609__auto___48817;
var G__48820 = cljs.core.count(c__4609__auto___48817);
var G__48821 = (0);
seq__48246_48799 = G__48818;
chunk__48247_48800 = G__48819;
count__48248_48801 = G__48820;
i__48249_48802 = G__48821;
continue;
} else {
var vec__48259_48822 = cljs.core.first(seq__48246_48816__$1);
var type_48823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48259_48822,(0),null);
var f_48824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48259_48822,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_48823,((function (seq__48246_48799,chunk__48247_48800,count__48248_48801,i__48249_48802,vec__48259_48822,type_48823,f_48824,seq__48246_48816__$1,temp__5735__auto___48815,vec__48243_48796,elem_48797,selector_48798){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_48823,dommy$core$this_fn], 0));

return (f_48824.cljs$core$IFn$_invoke$arity$1 ? f_48824.cljs$core$IFn$_invoke$arity$1(e) : f_48824.call(null,e));
});})(seq__48246_48799,chunk__48247_48800,count__48248_48801,i__48249_48802,vec__48259_48822,type_48823,f_48824,seq__48246_48816__$1,temp__5735__auto___48815,vec__48243_48796,elem_48797,selector_48798))
], 0));


var G__48837 = cljs.core.next(seq__48246_48816__$1);
var G__48838 = null;
var G__48839 = (0);
var G__48840 = (0);
seq__48246_48799 = G__48837;
chunk__48247_48800 = G__48838;
count__48248_48801 = G__48839;
i__48249_48802 = G__48840;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq48241){
var G__48242 = cljs.core.first(seq48241);
var seq48241__$1 = cljs.core.next(seq48241);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48242,seq48241__$1);
}));


//# sourceMappingURL=dommy.core.js.map
