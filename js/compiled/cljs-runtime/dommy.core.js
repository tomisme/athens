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
var G__42936 = arguments.length;
switch (G__42936) {
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
var G__42938 = arguments.length;
switch (G__42938) {
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
var G__42941 = arguments.length;
switch (G__42941) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__42939_SHARP_){
return (!((p1__42939_SHARP_ === base)));
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
var len__4789__auto___43301 = arguments.length;
var i__4790__auto___43302 = (0);
while(true){
if((i__4790__auto___43302 < len__4789__auto___43301)){
args__4795__auto__.push((arguments[i__4790__auto___43302]));

var G__43303 = (i__4790__auto___43302 + (1));
i__4790__auto___43302 = G__43303;
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
var seq__42944_43304 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__42945_43305 = null;
var count__42946_43306 = (0);
var i__42947_43307 = (0);
while(true){
if((i__42947_43307 < count__42946_43306)){
var vec__42954_43308 = chunk__42945_43305.cljs$core$IIndexed$_nth$arity$2(null,i__42947_43307);
var k_43309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42954_43308,(0),null);
var v_43310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42954_43308,(1),null);
style.setProperty(dommy.utils.as_str(k_43309),v_43310);


var G__43315 = seq__42944_43304;
var G__43316 = chunk__42945_43305;
var G__43317 = count__42946_43306;
var G__43318 = (i__42947_43307 + (1));
seq__42944_43304 = G__43315;
chunk__42945_43305 = G__43316;
count__42946_43306 = G__43317;
i__42947_43307 = G__43318;
continue;
} else {
var temp__5735__auto___43319 = cljs.core.seq(seq__42944_43304);
if(temp__5735__auto___43319){
var seq__42944_43320__$1 = temp__5735__auto___43319;
if(cljs.core.chunked_seq_QMARK_(seq__42944_43320__$1)){
var c__4609__auto___43321 = cljs.core.chunk_first(seq__42944_43320__$1);
var G__43322 = cljs.core.chunk_rest(seq__42944_43320__$1);
var G__43323 = c__4609__auto___43321;
var G__43324 = cljs.core.count(c__4609__auto___43321);
var G__43325 = (0);
seq__42944_43304 = G__43322;
chunk__42945_43305 = G__43323;
count__42946_43306 = G__43324;
i__42947_43307 = G__43325;
continue;
} else {
var vec__42957_43326 = cljs.core.first(seq__42944_43320__$1);
var k_43327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42957_43326,(0),null);
var v_43328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42957_43326,(1),null);
style.setProperty(dommy.utils.as_str(k_43327),v_43328);


var G__43329 = cljs.core.next(seq__42944_43320__$1);
var G__43330 = null;
var G__43331 = (0);
var G__43332 = (0);
seq__42944_43304 = G__43329;
chunk__42945_43305 = G__43330;
count__42946_43306 = G__43331;
i__42947_43307 = G__43332;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq42942){
var G__42943 = cljs.core.first(seq42942);
var seq42942__$1 = cljs.core.next(seq42942);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42943,seq42942__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43333 = arguments.length;
var i__4790__auto___43334 = (0);
while(true){
if((i__4790__auto___43334 < len__4789__auto___43333)){
args__4795__auto__.push((arguments[i__4790__auto___43334]));

var G__43335 = (i__4790__auto___43334 + (1));
i__4790__auto___43334 = G__43335;
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
var seq__42962_43336 = cljs.core.seq(keywords);
var chunk__42963_43337 = null;
var count__42964_43338 = (0);
var i__42965_43339 = (0);
while(true){
if((i__42965_43339 < count__42964_43338)){
var kw_43340 = chunk__42963_43337.cljs$core$IIndexed$_nth$arity$2(null,i__42965_43339);
style.removeProperty(dommy.utils.as_str(kw_43340));


var G__43341 = seq__42962_43336;
var G__43342 = chunk__42963_43337;
var G__43343 = count__42964_43338;
var G__43344 = (i__42965_43339 + (1));
seq__42962_43336 = G__43341;
chunk__42963_43337 = G__43342;
count__42964_43338 = G__43343;
i__42965_43339 = G__43344;
continue;
} else {
var temp__5735__auto___43345 = cljs.core.seq(seq__42962_43336);
if(temp__5735__auto___43345){
var seq__42962_43346__$1 = temp__5735__auto___43345;
if(cljs.core.chunked_seq_QMARK_(seq__42962_43346__$1)){
var c__4609__auto___43347 = cljs.core.chunk_first(seq__42962_43346__$1);
var G__43348 = cljs.core.chunk_rest(seq__42962_43346__$1);
var G__43349 = c__4609__auto___43347;
var G__43350 = cljs.core.count(c__4609__auto___43347);
var G__43351 = (0);
seq__42962_43336 = G__43348;
chunk__42963_43337 = G__43349;
count__42964_43338 = G__43350;
i__42965_43339 = G__43351;
continue;
} else {
var kw_43352 = cljs.core.first(seq__42962_43346__$1);
style.removeProperty(dommy.utils.as_str(kw_43352));


var G__43353 = cljs.core.next(seq__42962_43346__$1);
var G__43354 = null;
var G__43355 = (0);
var G__43356 = (0);
seq__42962_43336 = G__43353;
chunk__42963_43337 = G__43354;
count__42964_43338 = G__43355;
i__42965_43339 = G__43356;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq42960){
var G__42961 = cljs.core.first(seq42960);
var seq42960__$1 = cljs.core.next(seq42960);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42961,seq42960__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43357 = arguments.length;
var i__4790__auto___43358 = (0);
while(true){
if((i__4790__auto___43358 < len__4789__auto___43357)){
args__4795__auto__.push((arguments[i__4790__auto___43358]));

var G__43359 = (i__4790__auto___43358 + (1));
i__4790__auto___43358 = G__43359;
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

var seq__42968_43360 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__42969_43361 = null;
var count__42970_43362 = (0);
var i__42971_43363 = (0);
while(true){
if((i__42971_43363 < count__42970_43362)){
var vec__42978_43364 = chunk__42969_43361.cljs$core$IIndexed$_nth$arity$2(null,i__42971_43363);
var k_43365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42978_43364,(0),null);
var v_43366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42978_43364,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_43365,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_43366),"px"].join('')], 0));


var G__43367 = seq__42968_43360;
var G__43368 = chunk__42969_43361;
var G__43369 = count__42970_43362;
var G__43370 = (i__42971_43363 + (1));
seq__42968_43360 = G__43367;
chunk__42969_43361 = G__43368;
count__42970_43362 = G__43369;
i__42971_43363 = G__43370;
continue;
} else {
var temp__5735__auto___43371 = cljs.core.seq(seq__42968_43360);
if(temp__5735__auto___43371){
var seq__42968_43372__$1 = temp__5735__auto___43371;
if(cljs.core.chunked_seq_QMARK_(seq__42968_43372__$1)){
var c__4609__auto___43373 = cljs.core.chunk_first(seq__42968_43372__$1);
var G__43374 = cljs.core.chunk_rest(seq__42968_43372__$1);
var G__43375 = c__4609__auto___43373;
var G__43376 = cljs.core.count(c__4609__auto___43373);
var G__43377 = (0);
seq__42968_43360 = G__43374;
chunk__42969_43361 = G__43375;
count__42970_43362 = G__43376;
i__42971_43363 = G__43377;
continue;
} else {
var vec__42981_43378 = cljs.core.first(seq__42968_43372__$1);
var k_43379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42981_43378,(0),null);
var v_43380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42981_43378,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_43379,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_43380),"px"].join('')], 0));


var G__43381 = cljs.core.next(seq__42968_43372__$1);
var G__43382 = null;
var G__43383 = (0);
var G__43384 = (0);
seq__42968_43360 = G__43381;
chunk__42969_43361 = G__43382;
count__42970_43362 = G__43383;
i__42971_43363 = G__43384;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq42966){
var G__42967 = cljs.core.first(seq42966);
var seq42966__$1 = cljs.core.next(seq42966);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42967,seq42966__$1);
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
var G__42989 = arguments.length;
switch (G__42989) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___43386 = arguments.length;
var i__4790__auto___43387 = (0);
while(true){
if((i__4790__auto___43387 < len__4789__auto___43386)){
args_arr__4810__auto__.push((arguments[i__4790__auto___43387]));

var G__43388 = (i__4790__auto___43387 + (1));
i__4790__auto___43387 = G__43388;
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
var G__42990 = elem;
(G__42990[k__$1] = v);

return G__42990;
} else {
var G__42991 = elem;
G__42991.setAttribute(k__$1,v);

return G__42991;
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

var seq__42992_43389 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__42993_43390 = null;
var count__42994_43391 = (0);
var i__42995_43392 = (0);
while(true){
if((i__42995_43392 < count__42994_43391)){
var vec__43002_43393 = chunk__42993_43390.cljs$core$IIndexed$_nth$arity$2(null,i__42995_43392);
var k_43394__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43002_43393,(0),null);
var v_43395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43002_43393,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_43394__$1,v_43395__$1);


var G__43396 = seq__42992_43389;
var G__43397 = chunk__42993_43390;
var G__43398 = count__42994_43391;
var G__43399 = (i__42995_43392 + (1));
seq__42992_43389 = G__43396;
chunk__42993_43390 = G__43397;
count__42994_43391 = G__43398;
i__42995_43392 = G__43399;
continue;
} else {
var temp__5735__auto___43400 = cljs.core.seq(seq__42992_43389);
if(temp__5735__auto___43400){
var seq__42992_43401__$1 = temp__5735__auto___43400;
if(cljs.core.chunked_seq_QMARK_(seq__42992_43401__$1)){
var c__4609__auto___43402 = cljs.core.chunk_first(seq__42992_43401__$1);
var G__43403 = cljs.core.chunk_rest(seq__42992_43401__$1);
var G__43404 = c__4609__auto___43402;
var G__43405 = cljs.core.count(c__4609__auto___43402);
var G__43406 = (0);
seq__42992_43389 = G__43403;
chunk__42993_43390 = G__43404;
count__42994_43391 = G__43405;
i__42995_43392 = G__43406;
continue;
} else {
var vec__43005_43407 = cljs.core.first(seq__42992_43401__$1);
var k_43408__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005_43407,(0),null);
var v_43409__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005_43407,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_43408__$1,v_43409__$1);


var G__43410 = cljs.core.next(seq__42992_43401__$1);
var G__43411 = null;
var G__43412 = (0);
var G__43413 = (0);
seq__42992_43389 = G__43410;
chunk__42993_43390 = G__43411;
count__42994_43391 = G__43412;
i__42995_43392 = G__43413;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq42985){
var G__42986 = cljs.core.first(seq42985);
var seq42985__$1 = cljs.core.next(seq42985);
var G__42987 = cljs.core.first(seq42985__$1);
var seq42985__$2 = cljs.core.next(seq42985__$1);
var G__42988 = cljs.core.first(seq42985__$2);
var seq42985__$3 = cljs.core.next(seq42985__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42986,G__42987,G__42988,seq42985__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__43012 = arguments.length;
switch (G__43012) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___43415 = arguments.length;
var i__4790__auto___43416 = (0);
while(true){
if((i__4790__auto___43416 < len__4789__auto___43415)){
args_arr__4810__auto__.push((arguments[i__4790__auto___43416]));

var G__43417 = (i__4790__auto___43416 + (1));
i__4790__auto___43416 = G__43417;
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
var k_43418__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__43013 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__43013.cljs$core$IFn$_invoke$arity$1 ? fexpr__43013.cljs$core$IFn$_invoke$arity$1(k_43418__$1) : fexpr__43013.call(null,k_43418__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_43418__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__43014_43420 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__43015_43421 = null;
var count__43016_43422 = (0);
var i__43017_43423 = (0);
while(true){
if((i__43017_43423 < count__43016_43422)){
var k_43424__$1 = chunk__43015_43421.cljs$core$IIndexed$_nth$arity$2(null,i__43017_43423);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_43424__$1);


var G__43425 = seq__43014_43420;
var G__43426 = chunk__43015_43421;
var G__43427 = count__43016_43422;
var G__43428 = (i__43017_43423 + (1));
seq__43014_43420 = G__43425;
chunk__43015_43421 = G__43426;
count__43016_43422 = G__43427;
i__43017_43423 = G__43428;
continue;
} else {
var temp__5735__auto___43429 = cljs.core.seq(seq__43014_43420);
if(temp__5735__auto___43429){
var seq__43014_43430__$1 = temp__5735__auto___43429;
if(cljs.core.chunked_seq_QMARK_(seq__43014_43430__$1)){
var c__4609__auto___43431 = cljs.core.chunk_first(seq__43014_43430__$1);
var G__43432 = cljs.core.chunk_rest(seq__43014_43430__$1);
var G__43433 = c__4609__auto___43431;
var G__43434 = cljs.core.count(c__4609__auto___43431);
var G__43435 = (0);
seq__43014_43420 = G__43432;
chunk__43015_43421 = G__43433;
count__43016_43422 = G__43434;
i__43017_43423 = G__43435;
continue;
} else {
var k_43436__$1 = cljs.core.first(seq__43014_43430__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_43436__$1);


var G__43437 = cljs.core.next(seq__43014_43430__$1);
var G__43438 = null;
var G__43439 = (0);
var G__43440 = (0);
seq__43014_43420 = G__43437;
chunk__43015_43421 = G__43438;
count__43016_43422 = G__43439;
i__43017_43423 = G__43440;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq43009){
var G__43010 = cljs.core.first(seq43009);
var seq43009__$1 = cljs.core.next(seq43009);
var G__43011 = cljs.core.first(seq43009__$1);
var seq43009__$2 = cljs.core.next(seq43009__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43010,G__43011,seq43009__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__43019 = arguments.length;
switch (G__43019) {
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
var G__43024 = arguments.length;
switch (G__43024) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___43443 = arguments.length;
var i__4790__auto___43444 = (0);
while(true){
if((i__4790__auto___43444 < len__4789__auto___43443)){
args_arr__4810__auto__.push((arguments[i__4790__auto___43444]));

var G__43445 = (i__4790__auto___43444 + (1));
i__4790__auto___43444 = G__43445;
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
var temp__5733__auto___43446 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___43446)){
var class_list_43447 = temp__5733__auto___43446;
var seq__43025_43448 = cljs.core.seq(classes__$1);
var chunk__43026_43449 = null;
var count__43027_43450 = (0);
var i__43028_43451 = (0);
while(true){
if((i__43028_43451 < count__43027_43450)){
var c_43452 = chunk__43026_43449.cljs$core$IIndexed$_nth$arity$2(null,i__43028_43451);
class_list_43447.add(c_43452);


var G__43453 = seq__43025_43448;
var G__43454 = chunk__43026_43449;
var G__43455 = count__43027_43450;
var G__43456 = (i__43028_43451 + (1));
seq__43025_43448 = G__43453;
chunk__43026_43449 = G__43454;
count__43027_43450 = G__43455;
i__43028_43451 = G__43456;
continue;
} else {
var temp__5735__auto___43457 = cljs.core.seq(seq__43025_43448);
if(temp__5735__auto___43457){
var seq__43025_43458__$1 = temp__5735__auto___43457;
if(cljs.core.chunked_seq_QMARK_(seq__43025_43458__$1)){
var c__4609__auto___43459 = cljs.core.chunk_first(seq__43025_43458__$1);
var G__43460 = cljs.core.chunk_rest(seq__43025_43458__$1);
var G__43461 = c__4609__auto___43459;
var G__43462 = cljs.core.count(c__4609__auto___43459);
var G__43463 = (0);
seq__43025_43448 = G__43460;
chunk__43026_43449 = G__43461;
count__43027_43450 = G__43462;
i__43028_43451 = G__43463;
continue;
} else {
var c_43464 = cljs.core.first(seq__43025_43458__$1);
class_list_43447.add(c_43464);


var G__43465 = cljs.core.next(seq__43025_43458__$1);
var G__43466 = null;
var G__43467 = (0);
var G__43468 = (0);
seq__43025_43448 = G__43465;
chunk__43026_43449 = G__43466;
count__43027_43450 = G__43467;
i__43028_43451 = G__43468;
continue;
}
} else {
}
}
break;
}
} else {
var seq__43029_43469 = cljs.core.seq(classes__$1);
var chunk__43030_43470 = null;
var count__43031_43471 = (0);
var i__43032_43472 = (0);
while(true){
if((i__43032_43472 < count__43031_43471)){
var c_43473 = chunk__43030_43470.cljs$core$IIndexed$_nth$arity$2(null,i__43032_43472);
var class_name_43474 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_43474,c_43473))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_43474 === ""))?c_43473:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_43474)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_43473)].join('')));
}


var G__43475 = seq__43029_43469;
var G__43476 = chunk__43030_43470;
var G__43477 = count__43031_43471;
var G__43478 = (i__43032_43472 + (1));
seq__43029_43469 = G__43475;
chunk__43030_43470 = G__43476;
count__43031_43471 = G__43477;
i__43032_43472 = G__43478;
continue;
} else {
var temp__5735__auto___43479 = cljs.core.seq(seq__43029_43469);
if(temp__5735__auto___43479){
var seq__43029_43480__$1 = temp__5735__auto___43479;
if(cljs.core.chunked_seq_QMARK_(seq__43029_43480__$1)){
var c__4609__auto___43481 = cljs.core.chunk_first(seq__43029_43480__$1);
var G__43482 = cljs.core.chunk_rest(seq__43029_43480__$1);
var G__43483 = c__4609__auto___43481;
var G__43484 = cljs.core.count(c__4609__auto___43481);
var G__43485 = (0);
seq__43029_43469 = G__43482;
chunk__43030_43470 = G__43483;
count__43031_43471 = G__43484;
i__43032_43472 = G__43485;
continue;
} else {
var c_43486 = cljs.core.first(seq__43029_43480__$1);
var class_name_43487 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_43487,c_43486))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_43487 === ""))?c_43486:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_43487)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_43486)].join('')));
}


var G__43488 = cljs.core.next(seq__43029_43480__$1);
var G__43489 = null;
var G__43490 = (0);
var G__43491 = (0);
seq__43029_43469 = G__43488;
chunk__43030_43470 = G__43489;
count__43031_43471 = G__43490;
i__43032_43472 = G__43491;
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
var seq__43033_43492 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__43034_43493 = null;
var count__43035_43494 = (0);
var i__43036_43495 = (0);
while(true){
if((i__43036_43495 < count__43035_43494)){
var c_43496 = chunk__43034_43493.cljs$core$IIndexed$_nth$arity$2(null,i__43036_43495);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_43496);


var G__43497 = seq__43033_43492;
var G__43498 = chunk__43034_43493;
var G__43499 = count__43035_43494;
var G__43500 = (i__43036_43495 + (1));
seq__43033_43492 = G__43497;
chunk__43034_43493 = G__43498;
count__43035_43494 = G__43499;
i__43036_43495 = G__43500;
continue;
} else {
var temp__5735__auto___43501 = cljs.core.seq(seq__43033_43492);
if(temp__5735__auto___43501){
var seq__43033_43502__$1 = temp__5735__auto___43501;
if(cljs.core.chunked_seq_QMARK_(seq__43033_43502__$1)){
var c__4609__auto___43503 = cljs.core.chunk_first(seq__43033_43502__$1);
var G__43504 = cljs.core.chunk_rest(seq__43033_43502__$1);
var G__43505 = c__4609__auto___43503;
var G__43506 = cljs.core.count(c__4609__auto___43503);
var G__43507 = (0);
seq__43033_43492 = G__43504;
chunk__43034_43493 = G__43505;
count__43035_43494 = G__43506;
i__43036_43495 = G__43507;
continue;
} else {
var c_43508 = cljs.core.first(seq__43033_43502__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_43508);


var G__43509 = cljs.core.next(seq__43033_43502__$1);
var G__43510 = null;
var G__43511 = (0);
var G__43512 = (0);
seq__43033_43492 = G__43509;
chunk__43034_43493 = G__43510;
count__43035_43494 = G__43511;
i__43036_43495 = G__43512;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq43021){
var G__43022 = cljs.core.first(seq43021);
var seq43021__$1 = cljs.core.next(seq43021);
var G__43023 = cljs.core.first(seq43021__$1);
var seq43021__$2 = cljs.core.next(seq43021__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43022,G__43023,seq43021__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__43041 = arguments.length;
switch (G__43041) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___43514 = arguments.length;
var i__4790__auto___43515 = (0);
while(true){
if((i__4790__auto___43515 < len__4789__auto___43514)){
args_arr__4810__auto__.push((arguments[i__4790__auto___43515]));

var G__43516 = (i__4790__auto___43515 + (1));
i__4790__auto___43515 = G__43516;
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
var temp__5733__auto___43519 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___43519)){
var class_list_43520 = temp__5733__auto___43519;
class_list_43520.remove(c__$1);
} else {
var class_name_43521 = dommy.core.class$(elem);
var new_class_name_43522 = dommy.utils.remove_class_str(class_name_43521,c__$1);
if((class_name_43521 === new_class_name_43522)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_43522);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__43042 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__43043 = null;
var count__43044 = (0);
var i__43045 = (0);
while(true){
if((i__43045 < count__43044)){
var c = chunk__43043.cljs$core$IIndexed$_nth$arity$2(null,i__43045);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__43523 = seq__43042;
var G__43524 = chunk__43043;
var G__43525 = count__43044;
var G__43526 = (i__43045 + (1));
seq__43042 = G__43523;
chunk__43043 = G__43524;
count__43044 = G__43525;
i__43045 = G__43526;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43042);
if(temp__5735__auto__){
var seq__43042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43042__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43042__$1);
var G__43527 = cljs.core.chunk_rest(seq__43042__$1);
var G__43528 = c__4609__auto__;
var G__43529 = cljs.core.count(c__4609__auto__);
var G__43530 = (0);
seq__43042 = G__43527;
chunk__43043 = G__43528;
count__43044 = G__43529;
i__43045 = G__43530;
continue;
} else {
var c = cljs.core.first(seq__43042__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__43531 = cljs.core.next(seq__43042__$1);
var G__43532 = null;
var G__43533 = (0);
var G__43534 = (0);
seq__43042 = G__43531;
chunk__43043 = G__43532;
count__43044 = G__43533;
i__43045 = G__43534;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq43038){
var G__43039 = cljs.core.first(seq43038);
var seq43038__$1 = cljs.core.next(seq43038);
var G__43040 = cljs.core.first(seq43038__$1);
var seq43038__$2 = cljs.core.next(seq43038__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43039,G__43040,seq43038__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__43047 = arguments.length;
switch (G__43047) {
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
var temp__5733__auto___43538 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___43538)){
var class_list_43539 = temp__5733__auto___43538;
class_list_43539.toggle(c__$1);
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
var G__43049 = arguments.length;
switch (G__43049) {
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
var G__43051 = arguments.length;
switch (G__43051) {
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
var G__43056 = arguments.length;
switch (G__43056) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___43543 = arguments.length;
var i__4790__auto___43544 = (0);
while(true){
if((i__4790__auto___43544 < len__4789__auto___43543)){
args_arr__4810__auto__.push((arguments[i__4790__auto___43544]));

var G__43545 = (i__4790__auto___43544 + (1));
i__4790__auto___43544 = G__43545;
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
var G__43057 = parent;
G__43057.appendChild(child);

return G__43057;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43058_43547 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__43059_43548 = null;
var count__43060_43549 = (0);
var i__43061_43550 = (0);
while(true){
if((i__43061_43550 < count__43060_43549)){
var c_43552 = chunk__43059_43548.cljs$core$IIndexed$_nth$arity$2(null,i__43061_43550);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_43552);


var G__43553 = seq__43058_43547;
var G__43554 = chunk__43059_43548;
var G__43555 = count__43060_43549;
var G__43556 = (i__43061_43550 + (1));
seq__43058_43547 = G__43553;
chunk__43059_43548 = G__43554;
count__43060_43549 = G__43555;
i__43061_43550 = G__43556;
continue;
} else {
var temp__5735__auto___43557 = cljs.core.seq(seq__43058_43547);
if(temp__5735__auto___43557){
var seq__43058_43558__$1 = temp__5735__auto___43557;
if(cljs.core.chunked_seq_QMARK_(seq__43058_43558__$1)){
var c__4609__auto___43559 = cljs.core.chunk_first(seq__43058_43558__$1);
var G__43560 = cljs.core.chunk_rest(seq__43058_43558__$1);
var G__43561 = c__4609__auto___43559;
var G__43562 = cljs.core.count(c__4609__auto___43559);
var G__43563 = (0);
seq__43058_43547 = G__43560;
chunk__43059_43548 = G__43561;
count__43060_43549 = G__43562;
i__43061_43550 = G__43563;
continue;
} else {
var c_43565 = cljs.core.first(seq__43058_43558__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_43565);


var G__43566 = cljs.core.next(seq__43058_43558__$1);
var G__43567 = null;
var G__43568 = (0);
var G__43569 = (0);
seq__43058_43547 = G__43566;
chunk__43059_43548 = G__43567;
count__43060_43549 = G__43568;
i__43061_43550 = G__43569;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq43053){
var G__43054 = cljs.core.first(seq43053);
var seq43053__$1 = cljs.core.next(seq43053);
var G__43055 = cljs.core.first(seq43053__$1);
var seq43053__$2 = cljs.core.next(seq43053__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43054,G__43055,seq43053__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__43066 = arguments.length;
switch (G__43066) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___43571 = arguments.length;
var i__4790__auto___43572 = (0);
while(true){
if((i__4790__auto___43572 < len__4789__auto___43571)){
args_arr__4810__auto__.push((arguments[i__4790__auto___43572]));

var G__43573 = (i__4790__auto___43572 + (1));
i__4790__auto___43572 = G__43573;
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
var G__43067 = parent;
G__43067.insertBefore(child,parent.firstChild);

return G__43067;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43068_43574 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__43069_43575 = null;
var count__43070_43576 = (0);
var i__43071_43577 = (0);
while(true){
if((i__43071_43577 < count__43070_43576)){
var c_43578 = chunk__43069_43575.cljs$core$IIndexed$_nth$arity$2(null,i__43071_43577);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_43578);


var G__43580 = seq__43068_43574;
var G__43581 = chunk__43069_43575;
var G__43582 = count__43070_43576;
var G__43583 = (i__43071_43577 + (1));
seq__43068_43574 = G__43580;
chunk__43069_43575 = G__43581;
count__43070_43576 = G__43582;
i__43071_43577 = G__43583;
continue;
} else {
var temp__5735__auto___43584 = cljs.core.seq(seq__43068_43574);
if(temp__5735__auto___43584){
var seq__43068_43585__$1 = temp__5735__auto___43584;
if(cljs.core.chunked_seq_QMARK_(seq__43068_43585__$1)){
var c__4609__auto___43586 = cljs.core.chunk_first(seq__43068_43585__$1);
var G__43587 = cljs.core.chunk_rest(seq__43068_43585__$1);
var G__43588 = c__4609__auto___43586;
var G__43589 = cljs.core.count(c__4609__auto___43586);
var G__43590 = (0);
seq__43068_43574 = G__43587;
chunk__43069_43575 = G__43588;
count__43070_43576 = G__43589;
i__43071_43577 = G__43590;
continue;
} else {
var c_43592 = cljs.core.first(seq__43068_43585__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_43592);


var G__43595 = cljs.core.next(seq__43068_43585__$1);
var G__43596 = null;
var G__43597 = (0);
var G__43598 = (0);
seq__43068_43574 = G__43595;
chunk__43069_43575 = G__43596;
count__43070_43576 = G__43597;
i__43071_43577 = G__43598;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq43063){
var G__43064 = cljs.core.first(seq43063);
var seq43063__$1 = cljs.core.next(seq43063);
var G__43065 = cljs.core.first(seq43063__$1);
var seq43063__$2 = cljs.core.next(seq43063__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43064,G__43065,seq43063__$2);
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
var temp__5733__auto___43599 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___43599)){
var next_43600 = temp__5733__auto___43599;
dommy.core.insert_before_BANG_(elem,next_43600);
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
var G__43073 = arguments.length;
switch (G__43073) {
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
var G__43074 = p;
G__43074.removeChild(elem);

return G__43074;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43075){
var vec__43076 = p__43075;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43076,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43076,(1),null);
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
var len__4789__auto___43604 = arguments.length;
var i__4790__auto___43606 = (0);
while(true){
if((i__4790__auto___43606 < len__4789__auto___43604)){
args__4795__auto__.push((arguments[i__4790__auto___43606]));

var G__43608 = (i__4790__auto___43606 + (1));
i__4790__auto___43606 = G__43608;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq43079){
var G__43080 = cljs.core.first(seq43079);
var seq43079__$1 = cljs.core.next(seq43079);
var G__43081 = cljs.core.first(seq43079__$1);
var seq43079__$2 = cljs.core.next(seq43079__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43080,G__43081,seq43079__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__43082 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__43082.cljs$core$IFn$_invoke$arity$1 ? fexpr__43082.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__43082.call(null,elem_sel));
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
var len__4789__auto___43609 = arguments.length;
var i__4790__auto___43610 = (0);
while(true){
if((i__4790__auto___43610 < len__4789__auto___43609)){
args__4795__auto__.push((arguments[i__4790__auto___43610]));

var G__43611 = (i__4790__auto___43610 + (1));
i__4790__auto___43610 = G__43611;
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

var vec__43085_43612 = dommy.core.elem_and_selector(elem_sel);
var elem_43613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43085_43612,(0),null);
var selector_43614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43085_43612,(1),null);
var seq__43088_43615 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__43095_43616 = null;
var count__43096_43617 = (0);
var i__43097_43618 = (0);
while(true){
if((i__43097_43618 < count__43096_43617)){
var vec__43150_43619 = chunk__43095_43616.cljs$core$IIndexed$_nth$arity$2(null,i__43097_43618);
var orig_type_43620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43150_43619,(0),null);
var f_43621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43150_43619,(1),null);
var seq__43098_43622 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_43620,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43620,cljs.core.identity])));
var chunk__43100_43623 = null;
var count__43101_43624 = (0);
var i__43102_43625 = (0);
while(true){
if((i__43102_43625 < count__43101_43624)){
var vec__43163_43626 = chunk__43100_43623.cljs$core$IIndexed$_nth$arity$2(null,i__43102_43625);
var actual_type_43627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43163_43626,(0),null);
var factory_43628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43163_43626,(1),null);
var canonical_f_43629 = (function (){var G__43167 = (factory_43628.cljs$core$IFn$_invoke$arity$1 ? factory_43628.cljs$core$IFn$_invoke$arity$1(f_43621) : factory_43628.call(null,f_43621));
var fexpr__43166 = (cljs.core.truth_(selector_43614)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_43613,selector_43614):cljs.core.identity);
return (fexpr__43166.cljs$core$IFn$_invoke$arity$1 ? fexpr__43166.cljs$core$IFn$_invoke$arity$1(G__43167) : fexpr__43166.call(null,G__43167));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43613,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43614,actual_type_43627,f_43621], null),canonical_f_43629], 0));

if(cljs.core.truth_(elem_43613.addEventListener)){
elem_43613.addEventListener(cljs.core.name(actual_type_43627),canonical_f_43629);
} else {
elem_43613.attachEvent(cljs.core.name(actual_type_43627),canonical_f_43629);
}


var G__43653 = seq__43098_43622;
var G__43654 = chunk__43100_43623;
var G__43655 = count__43101_43624;
var G__43656 = (i__43102_43625 + (1));
seq__43098_43622 = G__43653;
chunk__43100_43623 = G__43654;
count__43101_43624 = G__43655;
i__43102_43625 = G__43656;
continue;
} else {
var temp__5735__auto___43658 = cljs.core.seq(seq__43098_43622);
if(temp__5735__auto___43658){
var seq__43098_43659__$1 = temp__5735__auto___43658;
if(cljs.core.chunked_seq_QMARK_(seq__43098_43659__$1)){
var c__4609__auto___43660 = cljs.core.chunk_first(seq__43098_43659__$1);
var G__43661 = cljs.core.chunk_rest(seq__43098_43659__$1);
var G__43662 = c__4609__auto___43660;
var G__43663 = cljs.core.count(c__4609__auto___43660);
var G__43664 = (0);
seq__43098_43622 = G__43661;
chunk__43100_43623 = G__43662;
count__43101_43624 = G__43663;
i__43102_43625 = G__43664;
continue;
} else {
var vec__43168_43665 = cljs.core.first(seq__43098_43659__$1);
var actual_type_43666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43168_43665,(0),null);
var factory_43667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43168_43665,(1),null);
var canonical_f_43668 = (function (){var G__43172 = (factory_43667.cljs$core$IFn$_invoke$arity$1 ? factory_43667.cljs$core$IFn$_invoke$arity$1(f_43621) : factory_43667.call(null,f_43621));
var fexpr__43171 = (cljs.core.truth_(selector_43614)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_43613,selector_43614):cljs.core.identity);
return (fexpr__43171.cljs$core$IFn$_invoke$arity$1 ? fexpr__43171.cljs$core$IFn$_invoke$arity$1(G__43172) : fexpr__43171.call(null,G__43172));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43613,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43614,actual_type_43666,f_43621], null),canonical_f_43668], 0));

if(cljs.core.truth_(elem_43613.addEventListener)){
elem_43613.addEventListener(cljs.core.name(actual_type_43666),canonical_f_43668);
} else {
elem_43613.attachEvent(cljs.core.name(actual_type_43666),canonical_f_43668);
}


var G__43669 = cljs.core.next(seq__43098_43659__$1);
var G__43670 = null;
var G__43671 = (0);
var G__43672 = (0);
seq__43098_43622 = G__43669;
chunk__43100_43623 = G__43670;
count__43101_43624 = G__43671;
i__43102_43625 = G__43672;
continue;
}
} else {
}
}
break;
}

var G__43673 = seq__43088_43615;
var G__43674 = chunk__43095_43616;
var G__43675 = count__43096_43617;
var G__43676 = (i__43097_43618 + (1));
seq__43088_43615 = G__43673;
chunk__43095_43616 = G__43674;
count__43096_43617 = G__43675;
i__43097_43618 = G__43676;
continue;
} else {
var temp__5735__auto___43677 = cljs.core.seq(seq__43088_43615);
if(temp__5735__auto___43677){
var seq__43088_43678__$1 = temp__5735__auto___43677;
if(cljs.core.chunked_seq_QMARK_(seq__43088_43678__$1)){
var c__4609__auto___43679 = cljs.core.chunk_first(seq__43088_43678__$1);
var G__43680 = cljs.core.chunk_rest(seq__43088_43678__$1);
var G__43681 = c__4609__auto___43679;
var G__43682 = cljs.core.count(c__4609__auto___43679);
var G__43683 = (0);
seq__43088_43615 = G__43680;
chunk__43095_43616 = G__43681;
count__43096_43617 = G__43682;
i__43097_43618 = G__43683;
continue;
} else {
var vec__43173_43684 = cljs.core.first(seq__43088_43678__$1);
var orig_type_43685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43173_43684,(0),null);
var f_43686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43173_43684,(1),null);
var seq__43089_43687 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_43685,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43685,cljs.core.identity])));
var chunk__43091_43688 = null;
var count__43092_43689 = (0);
var i__43093_43690 = (0);
while(true){
if((i__43093_43690 < count__43092_43689)){
var vec__43186_43691 = chunk__43091_43688.cljs$core$IIndexed$_nth$arity$2(null,i__43093_43690);
var actual_type_43692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43186_43691,(0),null);
var factory_43693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43186_43691,(1),null);
var canonical_f_43694 = (function (){var G__43190 = (factory_43693.cljs$core$IFn$_invoke$arity$1 ? factory_43693.cljs$core$IFn$_invoke$arity$1(f_43686) : factory_43693.call(null,f_43686));
var fexpr__43189 = (cljs.core.truth_(selector_43614)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_43613,selector_43614):cljs.core.identity);
return (fexpr__43189.cljs$core$IFn$_invoke$arity$1 ? fexpr__43189.cljs$core$IFn$_invoke$arity$1(G__43190) : fexpr__43189.call(null,G__43190));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43613,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43614,actual_type_43692,f_43686], null),canonical_f_43694], 0));

if(cljs.core.truth_(elem_43613.addEventListener)){
elem_43613.addEventListener(cljs.core.name(actual_type_43692),canonical_f_43694);
} else {
elem_43613.attachEvent(cljs.core.name(actual_type_43692),canonical_f_43694);
}


var G__43697 = seq__43089_43687;
var G__43698 = chunk__43091_43688;
var G__43699 = count__43092_43689;
var G__43700 = (i__43093_43690 + (1));
seq__43089_43687 = G__43697;
chunk__43091_43688 = G__43698;
count__43092_43689 = G__43699;
i__43093_43690 = G__43700;
continue;
} else {
var temp__5735__auto___43701__$1 = cljs.core.seq(seq__43089_43687);
if(temp__5735__auto___43701__$1){
var seq__43089_43702__$1 = temp__5735__auto___43701__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43089_43702__$1)){
var c__4609__auto___43705 = cljs.core.chunk_first(seq__43089_43702__$1);
var G__43706 = cljs.core.chunk_rest(seq__43089_43702__$1);
var G__43707 = c__4609__auto___43705;
var G__43708 = cljs.core.count(c__4609__auto___43705);
var G__43709 = (0);
seq__43089_43687 = G__43706;
chunk__43091_43688 = G__43707;
count__43092_43689 = G__43708;
i__43093_43690 = G__43709;
continue;
} else {
var vec__43191_43710 = cljs.core.first(seq__43089_43702__$1);
var actual_type_43711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191_43710,(0),null);
var factory_43712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191_43710,(1),null);
var canonical_f_43716 = (function (){var G__43195 = (factory_43712.cljs$core$IFn$_invoke$arity$1 ? factory_43712.cljs$core$IFn$_invoke$arity$1(f_43686) : factory_43712.call(null,f_43686));
var fexpr__43194 = (cljs.core.truth_(selector_43614)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_43613,selector_43614):cljs.core.identity);
return (fexpr__43194.cljs$core$IFn$_invoke$arity$1 ? fexpr__43194.cljs$core$IFn$_invoke$arity$1(G__43195) : fexpr__43194.call(null,G__43195));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43613,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43614,actual_type_43711,f_43686], null),canonical_f_43716], 0));

if(cljs.core.truth_(elem_43613.addEventListener)){
elem_43613.addEventListener(cljs.core.name(actual_type_43711),canonical_f_43716);
} else {
elem_43613.attachEvent(cljs.core.name(actual_type_43711),canonical_f_43716);
}


var G__43718 = cljs.core.next(seq__43089_43702__$1);
var G__43719 = null;
var G__43720 = (0);
var G__43721 = (0);
seq__43089_43687 = G__43718;
chunk__43091_43688 = G__43719;
count__43092_43689 = G__43720;
i__43093_43690 = G__43721;
continue;
}
} else {
}
}
break;
}

var G__43722 = cljs.core.next(seq__43088_43678__$1);
var G__43723 = null;
var G__43724 = (0);
var G__43725 = (0);
seq__43088_43615 = G__43722;
chunk__43095_43616 = G__43723;
count__43096_43617 = G__43724;
i__43097_43618 = G__43725;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq43083){
var G__43084 = cljs.core.first(seq43083);
var seq43083__$1 = cljs.core.next(seq43083);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43084,seq43083__$1);
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
var len__4789__auto___43726 = arguments.length;
var i__4790__auto___43727 = (0);
while(true){
if((i__4790__auto___43727 < len__4789__auto___43726)){
args__4795__auto__.push((arguments[i__4790__auto___43727]));

var G__43728 = (i__4790__auto___43727 + (1));
i__4790__auto___43727 = G__43728;
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

var vec__43198_43729 = dommy.core.elem_and_selector(elem_sel);
var elem_43730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43198_43729,(0),null);
var selector_43731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43198_43729,(1),null);
var seq__43201_43733 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__43208_43734 = null;
var count__43209_43735 = (0);
var i__43210_43736 = (0);
while(true){
if((i__43210_43736 < count__43209_43735)){
var vec__43247_43737 = chunk__43208_43734.cljs$core$IIndexed$_nth$arity$2(null,i__43210_43736);
var orig_type_43738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43247_43737,(0),null);
var f_43739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43247_43737,(1),null);
var seq__43211_43740 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_43738,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43738,cljs.core.identity])));
var chunk__43213_43741 = null;
var count__43214_43742 = (0);
var i__43215_43743 = (0);
while(true){
if((i__43215_43743 < count__43214_43742)){
var vec__43256_43744 = chunk__43213_43741.cljs$core$IIndexed$_nth$arity$2(null,i__43215_43743);
var actual_type_43745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43256_43744,(0),null);
var __43746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43256_43744,(1),null);
var keys_43747 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43731,actual_type_43745,f_43739], null);
var canonical_f_43748 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_43730),keys_43747);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43730,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43747], 0));

if(cljs.core.truth_(elem_43730.removeEventListener)){
elem_43730.removeEventListener(cljs.core.name(actual_type_43745),canonical_f_43748);
} else {
elem_43730.detachEvent(cljs.core.name(actual_type_43745),canonical_f_43748);
}


var G__43749 = seq__43211_43740;
var G__43750 = chunk__43213_43741;
var G__43751 = count__43214_43742;
var G__43752 = (i__43215_43743 + (1));
seq__43211_43740 = G__43749;
chunk__43213_43741 = G__43750;
count__43214_43742 = G__43751;
i__43215_43743 = G__43752;
continue;
} else {
var temp__5735__auto___43753 = cljs.core.seq(seq__43211_43740);
if(temp__5735__auto___43753){
var seq__43211_43754__$1 = temp__5735__auto___43753;
if(cljs.core.chunked_seq_QMARK_(seq__43211_43754__$1)){
var c__4609__auto___43755 = cljs.core.chunk_first(seq__43211_43754__$1);
var G__43756 = cljs.core.chunk_rest(seq__43211_43754__$1);
var G__43757 = c__4609__auto___43755;
var G__43758 = cljs.core.count(c__4609__auto___43755);
var G__43759 = (0);
seq__43211_43740 = G__43756;
chunk__43213_43741 = G__43757;
count__43214_43742 = G__43758;
i__43215_43743 = G__43759;
continue;
} else {
var vec__43259_43760 = cljs.core.first(seq__43211_43754__$1);
var actual_type_43761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259_43760,(0),null);
var __43762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259_43760,(1),null);
var keys_43763 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43731,actual_type_43761,f_43739], null);
var canonical_f_43764 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_43730),keys_43763);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43730,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43763], 0));

if(cljs.core.truth_(elem_43730.removeEventListener)){
elem_43730.removeEventListener(cljs.core.name(actual_type_43761),canonical_f_43764);
} else {
elem_43730.detachEvent(cljs.core.name(actual_type_43761),canonical_f_43764);
}


var G__43765 = cljs.core.next(seq__43211_43754__$1);
var G__43766 = null;
var G__43767 = (0);
var G__43768 = (0);
seq__43211_43740 = G__43765;
chunk__43213_43741 = G__43766;
count__43214_43742 = G__43767;
i__43215_43743 = G__43768;
continue;
}
} else {
}
}
break;
}

var G__43769 = seq__43201_43733;
var G__43770 = chunk__43208_43734;
var G__43771 = count__43209_43735;
var G__43772 = (i__43210_43736 + (1));
seq__43201_43733 = G__43769;
chunk__43208_43734 = G__43770;
count__43209_43735 = G__43771;
i__43210_43736 = G__43772;
continue;
} else {
var temp__5735__auto___43773 = cljs.core.seq(seq__43201_43733);
if(temp__5735__auto___43773){
var seq__43201_43774__$1 = temp__5735__auto___43773;
if(cljs.core.chunked_seq_QMARK_(seq__43201_43774__$1)){
var c__4609__auto___43775 = cljs.core.chunk_first(seq__43201_43774__$1);
var G__43776 = cljs.core.chunk_rest(seq__43201_43774__$1);
var G__43777 = c__4609__auto___43775;
var G__43778 = cljs.core.count(c__4609__auto___43775);
var G__43779 = (0);
seq__43201_43733 = G__43776;
chunk__43208_43734 = G__43777;
count__43209_43735 = G__43778;
i__43210_43736 = G__43779;
continue;
} else {
var vec__43262_43780 = cljs.core.first(seq__43201_43774__$1);
var orig_type_43781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43262_43780,(0),null);
var f_43782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43262_43780,(1),null);
var seq__43202_43783 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_43781,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43781,cljs.core.identity])));
var chunk__43204_43784 = null;
var count__43205_43785 = (0);
var i__43206_43786 = (0);
while(true){
if((i__43206_43786 < count__43205_43785)){
var vec__43271_43787 = chunk__43204_43784.cljs$core$IIndexed$_nth$arity$2(null,i__43206_43786);
var actual_type_43788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43271_43787,(0),null);
var __43789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43271_43787,(1),null);
var keys_43790 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43731,actual_type_43788,f_43782], null);
var canonical_f_43791 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_43730),keys_43790);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43730,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43790], 0));

if(cljs.core.truth_(elem_43730.removeEventListener)){
elem_43730.removeEventListener(cljs.core.name(actual_type_43788),canonical_f_43791);
} else {
elem_43730.detachEvent(cljs.core.name(actual_type_43788),canonical_f_43791);
}


var G__43792 = seq__43202_43783;
var G__43793 = chunk__43204_43784;
var G__43794 = count__43205_43785;
var G__43795 = (i__43206_43786 + (1));
seq__43202_43783 = G__43792;
chunk__43204_43784 = G__43793;
count__43205_43785 = G__43794;
i__43206_43786 = G__43795;
continue;
} else {
var temp__5735__auto___43796__$1 = cljs.core.seq(seq__43202_43783);
if(temp__5735__auto___43796__$1){
var seq__43202_43797__$1 = temp__5735__auto___43796__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43202_43797__$1)){
var c__4609__auto___43798 = cljs.core.chunk_first(seq__43202_43797__$1);
var G__43799 = cljs.core.chunk_rest(seq__43202_43797__$1);
var G__43800 = c__4609__auto___43798;
var G__43801 = cljs.core.count(c__4609__auto___43798);
var G__43802 = (0);
seq__43202_43783 = G__43799;
chunk__43204_43784 = G__43800;
count__43205_43785 = G__43801;
i__43206_43786 = G__43802;
continue;
} else {
var vec__43274_43803 = cljs.core.first(seq__43202_43797__$1);
var actual_type_43804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43274_43803,(0),null);
var __43805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43274_43803,(1),null);
var keys_43806 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43731,actual_type_43804,f_43782], null);
var canonical_f_43807 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_43730),keys_43806);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_43730,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_43806], 0));

if(cljs.core.truth_(elem_43730.removeEventListener)){
elem_43730.removeEventListener(cljs.core.name(actual_type_43804),canonical_f_43807);
} else {
elem_43730.detachEvent(cljs.core.name(actual_type_43804),canonical_f_43807);
}


var G__43808 = cljs.core.next(seq__43202_43797__$1);
var G__43809 = null;
var G__43810 = (0);
var G__43811 = (0);
seq__43202_43783 = G__43808;
chunk__43204_43784 = G__43809;
count__43205_43785 = G__43810;
i__43206_43786 = G__43811;
continue;
}
} else {
}
}
break;
}

var G__43812 = cljs.core.next(seq__43201_43774__$1);
var G__43813 = null;
var G__43814 = (0);
var G__43815 = (0);
seq__43201_43733 = G__43812;
chunk__43208_43734 = G__43813;
count__43209_43735 = G__43814;
i__43210_43736 = G__43815;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq43196){
var G__43197 = cljs.core.first(seq43196);
var seq43196__$1 = cljs.core.next(seq43196);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43197,seq43196__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43816 = arguments.length;
var i__4790__auto___43817 = (0);
while(true){
if((i__4790__auto___43817 < len__4789__auto___43816)){
args__4795__auto__.push((arguments[i__4790__auto___43817]));

var G__43818 = (i__4790__auto___43817 + (1));
i__4790__auto___43817 = G__43818;
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

var vec__43279_43819 = dommy.core.elem_and_selector(elem_sel);
var elem_43820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279_43819,(0),null);
var selector_43821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279_43819,(1),null);
var seq__43282_43822 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__43283_43823 = null;
var count__43284_43824 = (0);
var i__43285_43825 = (0);
while(true){
if((i__43285_43825 < count__43284_43824)){
var vec__43292_43826 = chunk__43283_43823.cljs$core$IIndexed$_nth$arity$2(null,i__43285_43825);
var type_43827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43292_43826,(0),null);
var f_43828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43292_43826,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43827,((function (seq__43282_43822,chunk__43283_43823,count__43284_43824,i__43285_43825,vec__43292_43826,type_43827,f_43828,vec__43279_43819,elem_43820,selector_43821){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43827,dommy$core$this_fn], 0));

return (f_43828.cljs$core$IFn$_invoke$arity$1 ? f_43828.cljs$core$IFn$_invoke$arity$1(e) : f_43828.call(null,e));
});})(seq__43282_43822,chunk__43283_43823,count__43284_43824,i__43285_43825,vec__43292_43826,type_43827,f_43828,vec__43279_43819,elem_43820,selector_43821))
], 0));


var G__43829 = seq__43282_43822;
var G__43830 = chunk__43283_43823;
var G__43831 = count__43284_43824;
var G__43832 = (i__43285_43825 + (1));
seq__43282_43822 = G__43829;
chunk__43283_43823 = G__43830;
count__43284_43824 = G__43831;
i__43285_43825 = G__43832;
continue;
} else {
var temp__5735__auto___43833 = cljs.core.seq(seq__43282_43822);
if(temp__5735__auto___43833){
var seq__43282_43834__$1 = temp__5735__auto___43833;
if(cljs.core.chunked_seq_QMARK_(seq__43282_43834__$1)){
var c__4609__auto___43835 = cljs.core.chunk_first(seq__43282_43834__$1);
var G__43836 = cljs.core.chunk_rest(seq__43282_43834__$1);
var G__43837 = c__4609__auto___43835;
var G__43838 = cljs.core.count(c__4609__auto___43835);
var G__43839 = (0);
seq__43282_43822 = G__43836;
chunk__43283_43823 = G__43837;
count__43284_43824 = G__43838;
i__43285_43825 = G__43839;
continue;
} else {
var vec__43295_43842 = cljs.core.first(seq__43282_43834__$1);
var type_43843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43295_43842,(0),null);
var f_43844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43295_43842,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43843,((function (seq__43282_43822,chunk__43283_43823,count__43284_43824,i__43285_43825,vec__43295_43842,type_43843,f_43844,seq__43282_43834__$1,temp__5735__auto___43833,vec__43279_43819,elem_43820,selector_43821){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_43843,dommy$core$this_fn], 0));

return (f_43844.cljs$core$IFn$_invoke$arity$1 ? f_43844.cljs$core$IFn$_invoke$arity$1(e) : f_43844.call(null,e));
});})(seq__43282_43822,chunk__43283_43823,count__43284_43824,i__43285_43825,vec__43295_43842,type_43843,f_43844,seq__43282_43834__$1,temp__5735__auto___43833,vec__43279_43819,elem_43820,selector_43821))
], 0));


var G__43847 = cljs.core.next(seq__43282_43834__$1);
var G__43848 = null;
var G__43849 = (0);
var G__43850 = (0);
seq__43282_43822 = G__43847;
chunk__43283_43823 = G__43848;
count__43284_43824 = G__43849;
i__43285_43825 = G__43850;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq43277){
var G__43278 = cljs.core.first(seq43277);
var seq43277__$1 = cljs.core.next(seq43277);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43278,seq43277__$1);
}));


//# sourceMappingURL=dommy.core.js.map
