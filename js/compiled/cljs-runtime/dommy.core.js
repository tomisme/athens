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
var G__26603 = arguments.length;
switch (G__26603) {
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
var G__26616 = arguments.length;
switch (G__26616) {
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
var G__26628 = arguments.length;
switch (G__26628) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__26624_SHARP_){
return (!((p1__26624_SHARP_ === base)));
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
var len__4789__auto___27094 = arguments.length;
var i__4790__auto___27095 = (0);
while(true){
if((i__4790__auto___27095 < len__4789__auto___27094)){
args__4795__auto__.push((arguments[i__4790__auto___27095]));

var G__27096 = (i__4790__auto___27095 + (1));
i__4790__auto___27095 = G__27096;
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
var seq__26672_27099 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__26673_27100 = null;
var count__26674_27101 = (0);
var i__26675_27102 = (0);
while(true){
if((i__26675_27102 < count__26674_27101)){
var vec__26689_27103 = chunk__26673_27100.cljs$core$IIndexed$_nth$arity$2(null,i__26675_27102);
var k_27104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26689_27103,(0),null);
var v_27105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26689_27103,(1),null);
style.setProperty(dommy.utils.as_str(k_27104),v_27105);


var G__27108 = seq__26672_27099;
var G__27109 = chunk__26673_27100;
var G__27110 = count__26674_27101;
var G__27111 = (i__26675_27102 + (1));
seq__26672_27099 = G__27108;
chunk__26673_27100 = G__27109;
count__26674_27101 = G__27110;
i__26675_27102 = G__27111;
continue;
} else {
var temp__5735__auto___27112 = cljs.core.seq(seq__26672_27099);
if(temp__5735__auto___27112){
var seq__26672_27113__$1 = temp__5735__auto___27112;
if(cljs.core.chunked_seq_QMARK_(seq__26672_27113__$1)){
var c__4609__auto___27114 = cljs.core.chunk_first(seq__26672_27113__$1);
var G__27115 = cljs.core.chunk_rest(seq__26672_27113__$1);
var G__27116 = c__4609__auto___27114;
var G__27117 = cljs.core.count(c__4609__auto___27114);
var G__27118 = (0);
seq__26672_27099 = G__27115;
chunk__26673_27100 = G__27116;
count__26674_27101 = G__27117;
i__26675_27102 = G__27118;
continue;
} else {
var vec__26695_27119 = cljs.core.first(seq__26672_27113__$1);
var k_27120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695_27119,(0),null);
var v_27121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695_27119,(1),null);
style.setProperty(dommy.utils.as_str(k_27120),v_27121);


var G__27122 = cljs.core.next(seq__26672_27113__$1);
var G__27123 = null;
var G__27124 = (0);
var G__27125 = (0);
seq__26672_27099 = G__27122;
chunk__26673_27100 = G__27123;
count__26674_27101 = G__27124;
i__26675_27102 = G__27125;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq26663){
var G__26664 = cljs.core.first(seq26663);
var seq26663__$1 = cljs.core.next(seq26663);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26664,seq26663__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27126 = arguments.length;
var i__4790__auto___27127 = (0);
while(true){
if((i__4790__auto___27127 < len__4789__auto___27126)){
args__4795__auto__.push((arguments[i__4790__auto___27127]));

var G__27128 = (i__4790__auto___27127 + (1));
i__4790__auto___27127 = G__27128;
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
var seq__26708_27129 = cljs.core.seq(keywords);
var chunk__26709_27130 = null;
var count__26710_27131 = (0);
var i__26711_27132 = (0);
while(true){
if((i__26711_27132 < count__26710_27131)){
var kw_27133 = chunk__26709_27130.cljs$core$IIndexed$_nth$arity$2(null,i__26711_27132);
style.removeProperty(dommy.utils.as_str(kw_27133));


var G__27134 = seq__26708_27129;
var G__27135 = chunk__26709_27130;
var G__27136 = count__26710_27131;
var G__27137 = (i__26711_27132 + (1));
seq__26708_27129 = G__27134;
chunk__26709_27130 = G__27135;
count__26710_27131 = G__27136;
i__26711_27132 = G__27137;
continue;
} else {
var temp__5735__auto___27138 = cljs.core.seq(seq__26708_27129);
if(temp__5735__auto___27138){
var seq__26708_27139__$1 = temp__5735__auto___27138;
if(cljs.core.chunked_seq_QMARK_(seq__26708_27139__$1)){
var c__4609__auto___27140 = cljs.core.chunk_first(seq__26708_27139__$1);
var G__27141 = cljs.core.chunk_rest(seq__26708_27139__$1);
var G__27142 = c__4609__auto___27140;
var G__27143 = cljs.core.count(c__4609__auto___27140);
var G__27144 = (0);
seq__26708_27129 = G__27141;
chunk__26709_27130 = G__27142;
count__26710_27131 = G__27143;
i__26711_27132 = G__27144;
continue;
} else {
var kw_27145 = cljs.core.first(seq__26708_27139__$1);
style.removeProperty(dommy.utils.as_str(kw_27145));


var G__27146 = cljs.core.next(seq__26708_27139__$1);
var G__27147 = null;
var G__27148 = (0);
var G__27149 = (0);
seq__26708_27129 = G__27146;
chunk__26709_27130 = G__27147;
count__26710_27131 = G__27148;
i__26711_27132 = G__27149;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq26701){
var G__26702 = cljs.core.first(seq26701);
var seq26701__$1 = cljs.core.next(seq26701);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26702,seq26701__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27150 = arguments.length;
var i__4790__auto___27151 = (0);
while(true){
if((i__4790__auto___27151 < len__4789__auto___27150)){
args__4795__auto__.push((arguments[i__4790__auto___27151]));

var G__27152 = (i__4790__auto___27151 + (1));
i__4790__auto___27151 = G__27152;
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

var seq__26721_27153 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__26722_27154 = null;
var count__26723_27155 = (0);
var i__26724_27156 = (0);
while(true){
if((i__26724_27156 < count__26723_27155)){
var vec__26734_27157 = chunk__26722_27154.cljs$core$IIndexed$_nth$arity$2(null,i__26724_27156);
var k_27158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734_27157,(0),null);
var v_27159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734_27157,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27158,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27159),"px"].join('')], 0));


var G__27160 = seq__26721_27153;
var G__27161 = chunk__26722_27154;
var G__27162 = count__26723_27155;
var G__27163 = (i__26724_27156 + (1));
seq__26721_27153 = G__27160;
chunk__26722_27154 = G__27161;
count__26723_27155 = G__27162;
i__26724_27156 = G__27163;
continue;
} else {
var temp__5735__auto___27164 = cljs.core.seq(seq__26721_27153);
if(temp__5735__auto___27164){
var seq__26721_27165__$1 = temp__5735__auto___27164;
if(cljs.core.chunked_seq_QMARK_(seq__26721_27165__$1)){
var c__4609__auto___27166 = cljs.core.chunk_first(seq__26721_27165__$1);
var G__27167 = cljs.core.chunk_rest(seq__26721_27165__$1);
var G__27168 = c__4609__auto___27166;
var G__27169 = cljs.core.count(c__4609__auto___27166);
var G__27170 = (0);
seq__26721_27153 = G__27167;
chunk__26722_27154 = G__27168;
count__26723_27155 = G__27169;
i__26724_27156 = G__27170;
continue;
} else {
var vec__26737_27171 = cljs.core.first(seq__26721_27165__$1);
var k_27172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737_27171,(0),null);
var v_27173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737_27171,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27172,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27173),"px"].join('')], 0));


var G__27174 = cljs.core.next(seq__26721_27165__$1);
var G__27175 = null;
var G__27176 = (0);
var G__27177 = (0);
seq__26721_27153 = G__27174;
chunk__26722_27154 = G__27175;
count__26723_27155 = G__27176;
i__26724_27156 = G__27177;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq26716){
var G__26717 = cljs.core.first(seq26716);
var seq26716__$1 = cljs.core.next(seq26716);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26717,seq26716__$1);
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
var G__26745 = arguments.length;
switch (G__26745) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___27179 = arguments.length;
var i__4790__auto___27180 = (0);
while(true){
if((i__4790__auto___27180 < len__4789__auto___27179)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27180]));

var G__27181 = (i__4790__auto___27180 + (1));
i__4790__auto___27180 = G__27181;
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
var G__26746 = elem;
(G__26746[k__$1] = v);

return G__26746;
} else {
var G__26747 = elem;
G__26747.setAttribute(k__$1,v);

return G__26747;
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

var seq__26748_27182 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__26749_27183 = null;
var count__26750_27184 = (0);
var i__26751_27185 = (0);
while(true){
if((i__26751_27185 < count__26750_27184)){
var vec__26758_27186 = chunk__26749_27183.cljs$core$IIndexed$_nth$arity$2(null,i__26751_27185);
var k_27187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758_27186,(0),null);
var v_27188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758_27186,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_27187__$1,v_27188__$1);


var G__27189 = seq__26748_27182;
var G__27190 = chunk__26749_27183;
var G__27191 = count__26750_27184;
var G__27192 = (i__26751_27185 + (1));
seq__26748_27182 = G__27189;
chunk__26749_27183 = G__27190;
count__26750_27184 = G__27191;
i__26751_27185 = G__27192;
continue;
} else {
var temp__5735__auto___27193 = cljs.core.seq(seq__26748_27182);
if(temp__5735__auto___27193){
var seq__26748_27194__$1 = temp__5735__auto___27193;
if(cljs.core.chunked_seq_QMARK_(seq__26748_27194__$1)){
var c__4609__auto___27195 = cljs.core.chunk_first(seq__26748_27194__$1);
var G__27196 = cljs.core.chunk_rest(seq__26748_27194__$1);
var G__27197 = c__4609__auto___27195;
var G__27198 = cljs.core.count(c__4609__auto___27195);
var G__27199 = (0);
seq__26748_27182 = G__27196;
chunk__26749_27183 = G__27197;
count__26750_27184 = G__27198;
i__26751_27185 = G__27199;
continue;
} else {
var vec__26761_27200 = cljs.core.first(seq__26748_27194__$1);
var k_27201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761_27200,(0),null);
var v_27202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761_27200,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_27201__$1,v_27202__$1);


var G__27203 = cljs.core.next(seq__26748_27194__$1);
var G__27204 = null;
var G__27205 = (0);
var G__27206 = (0);
seq__26748_27182 = G__27203;
chunk__26749_27183 = G__27204;
count__26750_27184 = G__27205;
i__26751_27185 = G__27206;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq26741){
var G__26742 = cljs.core.first(seq26741);
var seq26741__$1 = cljs.core.next(seq26741);
var G__26743 = cljs.core.first(seq26741__$1);
var seq26741__$2 = cljs.core.next(seq26741__$1);
var G__26744 = cljs.core.first(seq26741__$2);
var seq26741__$3 = cljs.core.next(seq26741__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26742,G__26743,G__26744,seq26741__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__26768 = arguments.length;
switch (G__26768) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___27208 = arguments.length;
var i__4790__auto___27209 = (0);
while(true){
if((i__4790__auto___27209 < len__4789__auto___27208)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27209]));

var G__27210 = (i__4790__auto___27209 + (1));
i__4790__auto___27209 = G__27210;
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
var k_27211__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__26769 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__26769.cljs$core$IFn$_invoke$arity$1 ? fexpr__26769.cljs$core$IFn$_invoke$arity$1(k_27211__$1) : fexpr__26769.call(null,k_27211__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_27211__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__26770_27212 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__26771_27213 = null;
var count__26772_27214 = (0);
var i__26773_27215 = (0);
while(true){
if((i__26773_27215 < count__26772_27214)){
var k_27216__$1 = chunk__26771_27213.cljs$core$IIndexed$_nth$arity$2(null,i__26773_27215);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_27216__$1);


var G__27217 = seq__26770_27212;
var G__27218 = chunk__26771_27213;
var G__27219 = count__26772_27214;
var G__27220 = (i__26773_27215 + (1));
seq__26770_27212 = G__27217;
chunk__26771_27213 = G__27218;
count__26772_27214 = G__27219;
i__26773_27215 = G__27220;
continue;
} else {
var temp__5735__auto___27221 = cljs.core.seq(seq__26770_27212);
if(temp__5735__auto___27221){
var seq__26770_27222__$1 = temp__5735__auto___27221;
if(cljs.core.chunked_seq_QMARK_(seq__26770_27222__$1)){
var c__4609__auto___27223 = cljs.core.chunk_first(seq__26770_27222__$1);
var G__27224 = cljs.core.chunk_rest(seq__26770_27222__$1);
var G__27225 = c__4609__auto___27223;
var G__27226 = cljs.core.count(c__4609__auto___27223);
var G__27227 = (0);
seq__26770_27212 = G__27224;
chunk__26771_27213 = G__27225;
count__26772_27214 = G__27226;
i__26773_27215 = G__27227;
continue;
} else {
var k_27228__$1 = cljs.core.first(seq__26770_27222__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_27228__$1);


var G__27229 = cljs.core.next(seq__26770_27222__$1);
var G__27230 = null;
var G__27231 = (0);
var G__27232 = (0);
seq__26770_27212 = G__27229;
chunk__26771_27213 = G__27230;
count__26772_27214 = G__27231;
i__26773_27215 = G__27232;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq26765){
var G__26766 = cljs.core.first(seq26765);
var seq26765__$1 = cljs.core.next(seq26765);
var G__26767 = cljs.core.first(seq26765__$1);
var seq26765__$2 = cljs.core.next(seq26765__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26766,G__26767,seq26765__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__26781 = arguments.length;
switch (G__26781) {
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
var G__26786 = arguments.length;
switch (G__26786) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___27235 = arguments.length;
var i__4790__auto___27236 = (0);
while(true){
if((i__4790__auto___27236 < len__4789__auto___27235)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27236]));

var G__27237 = (i__4790__auto___27236 + (1));
i__4790__auto___27236 = G__27237;
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
var temp__5733__auto___27238 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___27238)){
var class_list_27239 = temp__5733__auto___27238;
var seq__26790_27240 = cljs.core.seq(classes__$1);
var chunk__26791_27241 = null;
var count__26792_27242 = (0);
var i__26793_27243 = (0);
while(true){
if((i__26793_27243 < count__26792_27242)){
var c_27244 = chunk__26791_27241.cljs$core$IIndexed$_nth$arity$2(null,i__26793_27243);
class_list_27239.add(c_27244);


var G__27245 = seq__26790_27240;
var G__27246 = chunk__26791_27241;
var G__27247 = count__26792_27242;
var G__27248 = (i__26793_27243 + (1));
seq__26790_27240 = G__27245;
chunk__26791_27241 = G__27246;
count__26792_27242 = G__27247;
i__26793_27243 = G__27248;
continue;
} else {
var temp__5735__auto___27249 = cljs.core.seq(seq__26790_27240);
if(temp__5735__auto___27249){
var seq__26790_27250__$1 = temp__5735__auto___27249;
if(cljs.core.chunked_seq_QMARK_(seq__26790_27250__$1)){
var c__4609__auto___27251 = cljs.core.chunk_first(seq__26790_27250__$1);
var G__27252 = cljs.core.chunk_rest(seq__26790_27250__$1);
var G__27253 = c__4609__auto___27251;
var G__27254 = cljs.core.count(c__4609__auto___27251);
var G__27255 = (0);
seq__26790_27240 = G__27252;
chunk__26791_27241 = G__27253;
count__26792_27242 = G__27254;
i__26793_27243 = G__27255;
continue;
} else {
var c_27256 = cljs.core.first(seq__26790_27250__$1);
class_list_27239.add(c_27256);


var G__27257 = cljs.core.next(seq__26790_27250__$1);
var G__27258 = null;
var G__27259 = (0);
var G__27260 = (0);
seq__26790_27240 = G__27257;
chunk__26791_27241 = G__27258;
count__26792_27242 = G__27259;
i__26793_27243 = G__27260;
continue;
}
} else {
}
}
break;
}
} else {
var seq__26797_27261 = cljs.core.seq(classes__$1);
var chunk__26798_27262 = null;
var count__26799_27263 = (0);
var i__26800_27264 = (0);
while(true){
if((i__26800_27264 < count__26799_27263)){
var c_27265 = chunk__26798_27262.cljs$core$IIndexed$_nth$arity$2(null,i__26800_27264);
var class_name_27266 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_27266,c_27265))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_27266 === ""))?c_27265:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27266)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_27265)].join('')));
}


var G__27267 = seq__26797_27261;
var G__27268 = chunk__26798_27262;
var G__27269 = count__26799_27263;
var G__27270 = (i__26800_27264 + (1));
seq__26797_27261 = G__27267;
chunk__26798_27262 = G__27268;
count__26799_27263 = G__27269;
i__26800_27264 = G__27270;
continue;
} else {
var temp__5735__auto___27271 = cljs.core.seq(seq__26797_27261);
if(temp__5735__auto___27271){
var seq__26797_27272__$1 = temp__5735__auto___27271;
if(cljs.core.chunked_seq_QMARK_(seq__26797_27272__$1)){
var c__4609__auto___27273 = cljs.core.chunk_first(seq__26797_27272__$1);
var G__27274 = cljs.core.chunk_rest(seq__26797_27272__$1);
var G__27275 = c__4609__auto___27273;
var G__27276 = cljs.core.count(c__4609__auto___27273);
var G__27277 = (0);
seq__26797_27261 = G__27274;
chunk__26798_27262 = G__27275;
count__26799_27263 = G__27276;
i__26800_27264 = G__27277;
continue;
} else {
var c_27278 = cljs.core.first(seq__26797_27272__$1);
var class_name_27281 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_27281,c_27278))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_27281 === ""))?c_27278:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27281)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_27278)].join('')));
}


var G__27284 = cljs.core.next(seq__26797_27272__$1);
var G__27285 = null;
var G__27286 = (0);
var G__27287 = (0);
seq__26797_27261 = G__27284;
chunk__26798_27262 = G__27285;
count__26799_27263 = G__27286;
i__26800_27264 = G__27287;
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
var seq__26803_27288 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__26804_27289 = null;
var count__26805_27290 = (0);
var i__26806_27291 = (0);
while(true){
if((i__26806_27291 < count__26805_27290)){
var c_27294 = chunk__26804_27289.cljs$core$IIndexed$_nth$arity$2(null,i__26806_27291);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_27294);


var G__27295 = seq__26803_27288;
var G__27296 = chunk__26804_27289;
var G__27297 = count__26805_27290;
var G__27298 = (i__26806_27291 + (1));
seq__26803_27288 = G__27295;
chunk__26804_27289 = G__27296;
count__26805_27290 = G__27297;
i__26806_27291 = G__27298;
continue;
} else {
var temp__5735__auto___27299 = cljs.core.seq(seq__26803_27288);
if(temp__5735__auto___27299){
var seq__26803_27300__$1 = temp__5735__auto___27299;
if(cljs.core.chunked_seq_QMARK_(seq__26803_27300__$1)){
var c__4609__auto___27301 = cljs.core.chunk_first(seq__26803_27300__$1);
var G__27302 = cljs.core.chunk_rest(seq__26803_27300__$1);
var G__27303 = c__4609__auto___27301;
var G__27304 = cljs.core.count(c__4609__auto___27301);
var G__27305 = (0);
seq__26803_27288 = G__27302;
chunk__26804_27289 = G__27303;
count__26805_27290 = G__27304;
i__26806_27291 = G__27305;
continue;
} else {
var c_27306 = cljs.core.first(seq__26803_27300__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_27306);


var G__27307 = cljs.core.next(seq__26803_27300__$1);
var G__27308 = null;
var G__27309 = (0);
var G__27310 = (0);
seq__26803_27288 = G__27307;
chunk__26804_27289 = G__27308;
count__26805_27290 = G__27309;
i__26806_27291 = G__27310;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq26783){
var G__26784 = cljs.core.first(seq26783);
var seq26783__$1 = cljs.core.next(seq26783);
var G__26785 = cljs.core.first(seq26783__$1);
var seq26783__$2 = cljs.core.next(seq26783__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26784,G__26785,seq26783__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__26811 = arguments.length;
switch (G__26811) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___27316 = arguments.length;
var i__4790__auto___27317 = (0);
while(true){
if((i__4790__auto___27317 < len__4789__auto___27316)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27317]));

var G__27318 = (i__4790__auto___27317 + (1));
i__4790__auto___27317 = G__27318;
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
var temp__5733__auto___27320 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___27320)){
var class_list_27321 = temp__5733__auto___27320;
class_list_27321.remove(c__$1);
} else {
var class_name_27322 = dommy.core.class$(elem);
var new_class_name_27323 = dommy.utils.remove_class_str(class_name_27322,c__$1);
if((class_name_27322 === new_class_name_27323)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_27323);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__26812 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__26813 = null;
var count__26814 = (0);
var i__26815 = (0);
while(true){
if((i__26815 < count__26814)){
var c = chunk__26813.cljs$core$IIndexed$_nth$arity$2(null,i__26815);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__27329 = seq__26812;
var G__27330 = chunk__26813;
var G__27331 = count__26814;
var G__27332 = (i__26815 + (1));
seq__26812 = G__27329;
chunk__26813 = G__27330;
count__26814 = G__27331;
i__26815 = G__27332;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26812);
if(temp__5735__auto__){
var seq__26812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26812__$1);
var G__27334 = cljs.core.chunk_rest(seq__26812__$1);
var G__27335 = c__4609__auto__;
var G__27336 = cljs.core.count(c__4609__auto__);
var G__27337 = (0);
seq__26812 = G__27334;
chunk__26813 = G__27335;
count__26814 = G__27336;
i__26815 = G__27337;
continue;
} else {
var c = cljs.core.first(seq__26812__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__27340 = cljs.core.next(seq__26812__$1);
var G__27341 = null;
var G__27342 = (0);
var G__27343 = (0);
seq__26812 = G__27340;
chunk__26813 = G__27341;
count__26814 = G__27342;
i__26815 = G__27343;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq26808){
var G__26809 = cljs.core.first(seq26808);
var seq26808__$1 = cljs.core.next(seq26808);
var G__26810 = cljs.core.first(seq26808__$1);
var seq26808__$2 = cljs.core.next(seq26808__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26809,G__26810,seq26808__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__26817 = arguments.length;
switch (G__26817) {
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
var temp__5733__auto___27348 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___27348)){
var class_list_27349 = temp__5733__auto___27348;
class_list_27349.toggle(c__$1);
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
var G__26819 = arguments.length;
switch (G__26819) {
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
var G__26821 = arguments.length;
switch (G__26821) {
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
var G__26826 = arguments.length;
switch (G__26826) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___27365 = arguments.length;
var i__4790__auto___27366 = (0);
while(true){
if((i__4790__auto___27366 < len__4789__auto___27365)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27366]));

var G__27370 = (i__4790__auto___27366 + (1));
i__4790__auto___27366 = G__27370;
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
var G__26827 = parent;
G__26827.appendChild(child);

return G__26827;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__26828_27373 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__26829_27374 = null;
var count__26830_27375 = (0);
var i__26831_27376 = (0);
while(true){
if((i__26831_27376 < count__26830_27375)){
var c_27377 = chunk__26829_27374.cljs$core$IIndexed$_nth$arity$2(null,i__26831_27376);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27377);


var G__27378 = seq__26828_27373;
var G__27379 = chunk__26829_27374;
var G__27380 = count__26830_27375;
var G__27381 = (i__26831_27376 + (1));
seq__26828_27373 = G__27378;
chunk__26829_27374 = G__27379;
count__26830_27375 = G__27380;
i__26831_27376 = G__27381;
continue;
} else {
var temp__5735__auto___27382 = cljs.core.seq(seq__26828_27373);
if(temp__5735__auto___27382){
var seq__26828_27383__$1 = temp__5735__auto___27382;
if(cljs.core.chunked_seq_QMARK_(seq__26828_27383__$1)){
var c__4609__auto___27384 = cljs.core.chunk_first(seq__26828_27383__$1);
var G__27385 = cljs.core.chunk_rest(seq__26828_27383__$1);
var G__27386 = c__4609__auto___27384;
var G__27387 = cljs.core.count(c__4609__auto___27384);
var G__27388 = (0);
seq__26828_27373 = G__27385;
chunk__26829_27374 = G__27386;
count__26830_27375 = G__27387;
i__26831_27376 = G__27388;
continue;
} else {
var c_27389 = cljs.core.first(seq__26828_27383__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27389);


var G__27390 = cljs.core.next(seq__26828_27383__$1);
var G__27391 = null;
var G__27392 = (0);
var G__27393 = (0);
seq__26828_27373 = G__27390;
chunk__26829_27374 = G__27391;
count__26830_27375 = G__27392;
i__26831_27376 = G__27393;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq26823){
var G__26824 = cljs.core.first(seq26823);
var seq26823__$1 = cljs.core.next(seq26823);
var G__26825 = cljs.core.first(seq26823__$1);
var seq26823__$2 = cljs.core.next(seq26823__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26824,G__26825,seq26823__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__26836 = arguments.length;
switch (G__26836) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___27397 = arguments.length;
var i__4790__auto___27398 = (0);
while(true){
if((i__4790__auto___27398 < len__4789__auto___27397)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27398]));

var G__27399 = (i__4790__auto___27398 + (1));
i__4790__auto___27398 = G__27399;
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
var G__26837 = parent;
G__26837.insertBefore(child,parent.firstChild);

return G__26837;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__26838_27404 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__26839_27405 = null;
var count__26840_27406 = (0);
var i__26841_27407 = (0);
while(true){
if((i__26841_27407 < count__26840_27406)){
var c_27408 = chunk__26839_27405.cljs$core$IIndexed$_nth$arity$2(null,i__26841_27407);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27408);


var G__27409 = seq__26838_27404;
var G__27410 = chunk__26839_27405;
var G__27411 = count__26840_27406;
var G__27412 = (i__26841_27407 + (1));
seq__26838_27404 = G__27409;
chunk__26839_27405 = G__27410;
count__26840_27406 = G__27411;
i__26841_27407 = G__27412;
continue;
} else {
var temp__5735__auto___27413 = cljs.core.seq(seq__26838_27404);
if(temp__5735__auto___27413){
var seq__26838_27414__$1 = temp__5735__auto___27413;
if(cljs.core.chunked_seq_QMARK_(seq__26838_27414__$1)){
var c__4609__auto___27415 = cljs.core.chunk_first(seq__26838_27414__$1);
var G__27416 = cljs.core.chunk_rest(seq__26838_27414__$1);
var G__27417 = c__4609__auto___27415;
var G__27418 = cljs.core.count(c__4609__auto___27415);
var G__27419 = (0);
seq__26838_27404 = G__27416;
chunk__26839_27405 = G__27417;
count__26840_27406 = G__27418;
i__26841_27407 = G__27419;
continue;
} else {
var c_27420 = cljs.core.first(seq__26838_27414__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27420);


var G__27421 = cljs.core.next(seq__26838_27414__$1);
var G__27422 = null;
var G__27423 = (0);
var G__27424 = (0);
seq__26838_27404 = G__27421;
chunk__26839_27405 = G__27422;
count__26840_27406 = G__27423;
i__26841_27407 = G__27424;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq26833){
var G__26834 = cljs.core.first(seq26833);
var seq26833__$1 = cljs.core.next(seq26833);
var G__26835 = cljs.core.first(seq26833__$1);
var seq26833__$2 = cljs.core.next(seq26833__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26834,G__26835,seq26833__$2);
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
var temp__5733__auto___27425 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___27425)){
var next_27426 = temp__5733__auto___27425;
dommy.core.insert_before_BANG_(elem,next_27426);
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
var G__26848 = arguments.length;
switch (G__26848) {
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
var G__26849 = p;
G__26849.removeChild(elem);

return G__26849;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26854){
var vec__26856 = p__26854;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26856,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26856,(1),null);
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
var len__4789__auto___27430 = arguments.length;
var i__4790__auto___27431 = (0);
while(true){
if((i__4790__auto___27431 < len__4789__auto___27430)){
args__4795__auto__.push((arguments[i__4790__auto___27431]));

var G__27432 = (i__4790__auto___27431 + (1));
i__4790__auto___27431 = G__27432;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq26859){
var G__26860 = cljs.core.first(seq26859);
var seq26859__$1 = cljs.core.next(seq26859);
var G__26861 = cljs.core.first(seq26859__$1);
var seq26859__$2 = cljs.core.next(seq26859__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26860,G__26861,seq26859__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__26864 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__26864.cljs$core$IFn$_invoke$arity$1 ? fexpr__26864.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__26864.call(null,elem_sel));
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
var len__4789__auto___27433 = arguments.length;
var i__4790__auto___27434 = (0);
while(true){
if((i__4790__auto___27434 < len__4789__auto___27433)){
args__4795__auto__.push((arguments[i__4790__auto___27434]));

var G__27435 = (i__4790__auto___27434 + (1));
i__4790__auto___27434 = G__27435;
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

var vec__26868_27436 = dommy.core.elem_and_selector(elem_sel);
var elem_27437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26868_27436,(0),null);
var selector_27438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26868_27436,(1),null);
var seq__26871_27439 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__26878_27440 = null;
var count__26879_27441 = (0);
var i__26880_27442 = (0);
while(true){
if((i__26880_27442 < count__26879_27441)){
var vec__26933_27443 = chunk__26878_27440.cljs$core$IIndexed$_nth$arity$2(null,i__26880_27442);
var orig_type_27444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26933_27443,(0),null);
var f_27445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26933_27443,(1),null);
var seq__26881_27446 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_27444,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_27444,cljs.core.identity])));
var chunk__26883_27447 = null;
var count__26884_27448 = (0);
var i__26885_27449 = (0);
while(true){
if((i__26885_27449 < count__26884_27448)){
var vec__26946_27450 = chunk__26883_27447.cljs$core$IIndexed$_nth$arity$2(null,i__26885_27449);
var actual_type_27451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946_27450,(0),null);
var factory_27452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946_27450,(1),null);
var canonical_f_27453 = (function (){var G__26950 = (factory_27452.cljs$core$IFn$_invoke$arity$1 ? factory_27452.cljs$core$IFn$_invoke$arity$1(f_27445) : factory_27452.call(null,f_27445));
var fexpr__26949 = (cljs.core.truth_(selector_27438)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27437,selector_27438):cljs.core.identity);
return (fexpr__26949.cljs$core$IFn$_invoke$arity$1 ? fexpr__26949.cljs$core$IFn$_invoke$arity$1(G__26950) : fexpr__26949.call(null,G__26950));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27437,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27438,actual_type_27451,f_27445], null),canonical_f_27453], 0));

if(cljs.core.truth_(elem_27437.addEventListener)){
elem_27437.addEventListener(cljs.core.name(actual_type_27451),canonical_f_27453);
} else {
elem_27437.attachEvent(cljs.core.name(actual_type_27451),canonical_f_27453);
}


var G__27457 = seq__26881_27446;
var G__27458 = chunk__26883_27447;
var G__27459 = count__26884_27448;
var G__27460 = (i__26885_27449 + (1));
seq__26881_27446 = G__27457;
chunk__26883_27447 = G__27458;
count__26884_27448 = G__27459;
i__26885_27449 = G__27460;
continue;
} else {
var temp__5735__auto___27461 = cljs.core.seq(seq__26881_27446);
if(temp__5735__auto___27461){
var seq__26881_27462__$1 = temp__5735__auto___27461;
if(cljs.core.chunked_seq_QMARK_(seq__26881_27462__$1)){
var c__4609__auto___27463 = cljs.core.chunk_first(seq__26881_27462__$1);
var G__27464 = cljs.core.chunk_rest(seq__26881_27462__$1);
var G__27465 = c__4609__auto___27463;
var G__27466 = cljs.core.count(c__4609__auto___27463);
var G__27467 = (0);
seq__26881_27446 = G__27464;
chunk__26883_27447 = G__27465;
count__26884_27448 = G__27466;
i__26885_27449 = G__27467;
continue;
} else {
var vec__26951_27469 = cljs.core.first(seq__26881_27462__$1);
var actual_type_27470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951_27469,(0),null);
var factory_27471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951_27469,(1),null);
var canonical_f_27472 = (function (){var G__26955 = (factory_27471.cljs$core$IFn$_invoke$arity$1 ? factory_27471.cljs$core$IFn$_invoke$arity$1(f_27445) : factory_27471.call(null,f_27445));
var fexpr__26954 = (cljs.core.truth_(selector_27438)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27437,selector_27438):cljs.core.identity);
return (fexpr__26954.cljs$core$IFn$_invoke$arity$1 ? fexpr__26954.cljs$core$IFn$_invoke$arity$1(G__26955) : fexpr__26954.call(null,G__26955));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27437,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27438,actual_type_27470,f_27445], null),canonical_f_27472], 0));

if(cljs.core.truth_(elem_27437.addEventListener)){
elem_27437.addEventListener(cljs.core.name(actual_type_27470),canonical_f_27472);
} else {
elem_27437.attachEvent(cljs.core.name(actual_type_27470),canonical_f_27472);
}


var G__27473 = cljs.core.next(seq__26881_27462__$1);
var G__27474 = null;
var G__27475 = (0);
var G__27476 = (0);
seq__26881_27446 = G__27473;
chunk__26883_27447 = G__27474;
count__26884_27448 = G__27475;
i__26885_27449 = G__27476;
continue;
}
} else {
}
}
break;
}

var G__27477 = seq__26871_27439;
var G__27478 = chunk__26878_27440;
var G__27479 = count__26879_27441;
var G__27480 = (i__26880_27442 + (1));
seq__26871_27439 = G__27477;
chunk__26878_27440 = G__27478;
count__26879_27441 = G__27479;
i__26880_27442 = G__27480;
continue;
} else {
var temp__5735__auto___27481 = cljs.core.seq(seq__26871_27439);
if(temp__5735__auto___27481){
var seq__26871_27482__$1 = temp__5735__auto___27481;
if(cljs.core.chunked_seq_QMARK_(seq__26871_27482__$1)){
var c__4609__auto___27483 = cljs.core.chunk_first(seq__26871_27482__$1);
var G__27486 = cljs.core.chunk_rest(seq__26871_27482__$1);
var G__27487 = c__4609__auto___27483;
var G__27488 = cljs.core.count(c__4609__auto___27483);
var G__27489 = (0);
seq__26871_27439 = G__27486;
chunk__26878_27440 = G__27487;
count__26879_27441 = G__27488;
i__26880_27442 = G__27489;
continue;
} else {
var vec__26960_27490 = cljs.core.first(seq__26871_27482__$1);
var orig_type_27491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26960_27490,(0),null);
var f_27492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26960_27490,(1),null);
var seq__26872_27493 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_27491,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_27491,cljs.core.identity])));
var chunk__26874_27494 = null;
var count__26875_27495 = (0);
var i__26876_27496 = (0);
while(true){
if((i__26876_27496 < count__26875_27495)){
var vec__26974_27497 = chunk__26874_27494.cljs$core$IIndexed$_nth$arity$2(null,i__26876_27496);
var actual_type_27498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26974_27497,(0),null);
var factory_27499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26974_27497,(1),null);
var canonical_f_27500 = (function (){var G__26979 = (factory_27499.cljs$core$IFn$_invoke$arity$1 ? factory_27499.cljs$core$IFn$_invoke$arity$1(f_27492) : factory_27499.call(null,f_27492));
var fexpr__26978 = (cljs.core.truth_(selector_27438)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27437,selector_27438):cljs.core.identity);
return (fexpr__26978.cljs$core$IFn$_invoke$arity$1 ? fexpr__26978.cljs$core$IFn$_invoke$arity$1(G__26979) : fexpr__26978.call(null,G__26979));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27437,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27438,actual_type_27498,f_27492], null),canonical_f_27500], 0));

if(cljs.core.truth_(elem_27437.addEventListener)){
elem_27437.addEventListener(cljs.core.name(actual_type_27498),canonical_f_27500);
} else {
elem_27437.attachEvent(cljs.core.name(actual_type_27498),canonical_f_27500);
}


var G__27501 = seq__26872_27493;
var G__27502 = chunk__26874_27494;
var G__27503 = count__26875_27495;
var G__27504 = (i__26876_27496 + (1));
seq__26872_27493 = G__27501;
chunk__26874_27494 = G__27502;
count__26875_27495 = G__27503;
i__26876_27496 = G__27504;
continue;
} else {
var temp__5735__auto___27505__$1 = cljs.core.seq(seq__26872_27493);
if(temp__5735__auto___27505__$1){
var seq__26872_27506__$1 = temp__5735__auto___27505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26872_27506__$1)){
var c__4609__auto___27507 = cljs.core.chunk_first(seq__26872_27506__$1);
var G__27508 = cljs.core.chunk_rest(seq__26872_27506__$1);
var G__27509 = c__4609__auto___27507;
var G__27510 = cljs.core.count(c__4609__auto___27507);
var G__27511 = (0);
seq__26872_27493 = G__27508;
chunk__26874_27494 = G__27509;
count__26875_27495 = G__27510;
i__26876_27496 = G__27511;
continue;
} else {
var vec__26982_27512 = cljs.core.first(seq__26872_27506__$1);
var actual_type_27513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26982_27512,(0),null);
var factory_27514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26982_27512,(1),null);
var canonical_f_27515 = (function (){var G__26986 = (factory_27514.cljs$core$IFn$_invoke$arity$1 ? factory_27514.cljs$core$IFn$_invoke$arity$1(f_27492) : factory_27514.call(null,f_27492));
var fexpr__26985 = (cljs.core.truth_(selector_27438)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27437,selector_27438):cljs.core.identity);
return (fexpr__26985.cljs$core$IFn$_invoke$arity$1 ? fexpr__26985.cljs$core$IFn$_invoke$arity$1(G__26986) : fexpr__26985.call(null,G__26986));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27437,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27438,actual_type_27513,f_27492], null),canonical_f_27515], 0));

if(cljs.core.truth_(elem_27437.addEventListener)){
elem_27437.addEventListener(cljs.core.name(actual_type_27513),canonical_f_27515);
} else {
elem_27437.attachEvent(cljs.core.name(actual_type_27513),canonical_f_27515);
}


var G__27516 = cljs.core.next(seq__26872_27506__$1);
var G__27517 = null;
var G__27518 = (0);
var G__27519 = (0);
seq__26872_27493 = G__27516;
chunk__26874_27494 = G__27517;
count__26875_27495 = G__27518;
i__26876_27496 = G__27519;
continue;
}
} else {
}
}
break;
}

var G__27520 = cljs.core.next(seq__26871_27482__$1);
var G__27521 = null;
var G__27522 = (0);
var G__27523 = (0);
seq__26871_27439 = G__27520;
chunk__26878_27440 = G__27521;
count__26879_27441 = G__27522;
i__26880_27442 = G__27523;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq26865){
var G__26866 = cljs.core.first(seq26865);
var seq26865__$1 = cljs.core.next(seq26865);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26866,seq26865__$1);
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
var len__4789__auto___27524 = arguments.length;
var i__4790__auto___27525 = (0);
while(true){
if((i__4790__auto___27525 < len__4789__auto___27524)){
args__4795__auto__.push((arguments[i__4790__auto___27525]));

var G__27526 = (i__4790__auto___27525 + (1));
i__4790__auto___27525 = G__27526;
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

var vec__26989_27527 = dommy.core.elem_and_selector(elem_sel);
var elem_27528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989_27527,(0),null);
var selector_27529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26989_27527,(1),null);
var seq__26992_27530 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__26999_27531 = null;
var count__27000_27532 = (0);
var i__27001_27533 = (0);
while(true){
if((i__27001_27533 < count__27000_27532)){
var vec__27038_27534 = chunk__26999_27531.cljs$core$IIndexed$_nth$arity$2(null,i__27001_27533);
var orig_type_27535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27038_27534,(0),null);
var f_27536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27038_27534,(1),null);
var seq__27002_27537 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_27535,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_27535,cljs.core.identity])));
var chunk__27004_27538 = null;
var count__27005_27539 = (0);
var i__27006_27540 = (0);
while(true){
if((i__27006_27540 < count__27005_27539)){
var vec__27047_27541 = chunk__27004_27538.cljs$core$IIndexed$_nth$arity$2(null,i__27006_27540);
var actual_type_27542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047_27541,(0),null);
var __27543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047_27541,(1),null);
var keys_27544 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27529,actual_type_27542,f_27536], null);
var canonical_f_27545 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_27528),keys_27544);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27528,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_27544], 0));

if(cljs.core.truth_(elem_27528.removeEventListener)){
elem_27528.removeEventListener(cljs.core.name(actual_type_27542),canonical_f_27545);
} else {
elem_27528.detachEvent(cljs.core.name(actual_type_27542),canonical_f_27545);
}


var G__27546 = seq__27002_27537;
var G__27547 = chunk__27004_27538;
var G__27548 = count__27005_27539;
var G__27549 = (i__27006_27540 + (1));
seq__27002_27537 = G__27546;
chunk__27004_27538 = G__27547;
count__27005_27539 = G__27548;
i__27006_27540 = G__27549;
continue;
} else {
var temp__5735__auto___27550 = cljs.core.seq(seq__27002_27537);
if(temp__5735__auto___27550){
var seq__27002_27551__$1 = temp__5735__auto___27550;
if(cljs.core.chunked_seq_QMARK_(seq__27002_27551__$1)){
var c__4609__auto___27552 = cljs.core.chunk_first(seq__27002_27551__$1);
var G__27553 = cljs.core.chunk_rest(seq__27002_27551__$1);
var G__27554 = c__4609__auto___27552;
var G__27555 = cljs.core.count(c__4609__auto___27552);
var G__27556 = (0);
seq__27002_27537 = G__27553;
chunk__27004_27538 = G__27554;
count__27005_27539 = G__27555;
i__27006_27540 = G__27556;
continue;
} else {
var vec__27050_27557 = cljs.core.first(seq__27002_27551__$1);
var actual_type_27558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27050_27557,(0),null);
var __27559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27050_27557,(1),null);
var keys_27560 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27529,actual_type_27558,f_27536], null);
var canonical_f_27561 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_27528),keys_27560);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27528,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_27560], 0));

if(cljs.core.truth_(elem_27528.removeEventListener)){
elem_27528.removeEventListener(cljs.core.name(actual_type_27558),canonical_f_27561);
} else {
elem_27528.detachEvent(cljs.core.name(actual_type_27558),canonical_f_27561);
}


var G__27562 = cljs.core.next(seq__27002_27551__$1);
var G__27563 = null;
var G__27564 = (0);
var G__27565 = (0);
seq__27002_27537 = G__27562;
chunk__27004_27538 = G__27563;
count__27005_27539 = G__27564;
i__27006_27540 = G__27565;
continue;
}
} else {
}
}
break;
}

var G__27566 = seq__26992_27530;
var G__27567 = chunk__26999_27531;
var G__27568 = count__27000_27532;
var G__27569 = (i__27001_27533 + (1));
seq__26992_27530 = G__27566;
chunk__26999_27531 = G__27567;
count__27000_27532 = G__27568;
i__27001_27533 = G__27569;
continue;
} else {
var temp__5735__auto___27570 = cljs.core.seq(seq__26992_27530);
if(temp__5735__auto___27570){
var seq__26992_27571__$1 = temp__5735__auto___27570;
if(cljs.core.chunked_seq_QMARK_(seq__26992_27571__$1)){
var c__4609__auto___27572 = cljs.core.chunk_first(seq__26992_27571__$1);
var G__27573 = cljs.core.chunk_rest(seq__26992_27571__$1);
var G__27574 = c__4609__auto___27572;
var G__27575 = cljs.core.count(c__4609__auto___27572);
var G__27576 = (0);
seq__26992_27530 = G__27573;
chunk__26999_27531 = G__27574;
count__27000_27532 = G__27575;
i__27001_27533 = G__27576;
continue;
} else {
var vec__27053_27577 = cljs.core.first(seq__26992_27571__$1);
var orig_type_27578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27053_27577,(0),null);
var f_27579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27053_27577,(1),null);
var seq__26993_27580 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_27578,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_27578,cljs.core.identity])));
var chunk__26995_27581 = null;
var count__26996_27582 = (0);
var i__26997_27583 = (0);
while(true){
if((i__26997_27583 < count__26996_27582)){
var vec__27062_27584 = chunk__26995_27581.cljs$core$IIndexed$_nth$arity$2(null,i__26997_27583);
var actual_type_27585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27062_27584,(0),null);
var __27586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27062_27584,(1),null);
var keys_27587 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27529,actual_type_27585,f_27579], null);
var canonical_f_27588 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_27528),keys_27587);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27528,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_27587], 0));

if(cljs.core.truth_(elem_27528.removeEventListener)){
elem_27528.removeEventListener(cljs.core.name(actual_type_27585),canonical_f_27588);
} else {
elem_27528.detachEvent(cljs.core.name(actual_type_27585),canonical_f_27588);
}


var G__27589 = seq__26993_27580;
var G__27590 = chunk__26995_27581;
var G__27591 = count__26996_27582;
var G__27592 = (i__26997_27583 + (1));
seq__26993_27580 = G__27589;
chunk__26995_27581 = G__27590;
count__26996_27582 = G__27591;
i__26997_27583 = G__27592;
continue;
} else {
var temp__5735__auto___27593__$1 = cljs.core.seq(seq__26993_27580);
if(temp__5735__auto___27593__$1){
var seq__26993_27594__$1 = temp__5735__auto___27593__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26993_27594__$1)){
var c__4609__auto___27595 = cljs.core.chunk_first(seq__26993_27594__$1);
var G__27596 = cljs.core.chunk_rest(seq__26993_27594__$1);
var G__27597 = c__4609__auto___27595;
var G__27598 = cljs.core.count(c__4609__auto___27595);
var G__27599 = (0);
seq__26993_27580 = G__27596;
chunk__26995_27581 = G__27597;
count__26996_27582 = G__27598;
i__26997_27583 = G__27599;
continue;
} else {
var vec__27065_27600 = cljs.core.first(seq__26993_27594__$1);
var actual_type_27601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27065_27600,(0),null);
var __27602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27065_27600,(1),null);
var keys_27603 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27529,actual_type_27601,f_27579], null);
var canonical_f_27604 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_27528),keys_27603);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27528,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_27603], 0));

if(cljs.core.truth_(elem_27528.removeEventListener)){
elem_27528.removeEventListener(cljs.core.name(actual_type_27601),canonical_f_27604);
} else {
elem_27528.detachEvent(cljs.core.name(actual_type_27601),canonical_f_27604);
}


var G__27608 = cljs.core.next(seq__26993_27594__$1);
var G__27609 = null;
var G__27610 = (0);
var G__27611 = (0);
seq__26993_27580 = G__27608;
chunk__26995_27581 = G__27609;
count__26996_27582 = G__27610;
i__26997_27583 = G__27611;
continue;
}
} else {
}
}
break;
}

var G__27613 = cljs.core.next(seq__26992_27571__$1);
var G__27614 = null;
var G__27615 = (0);
var G__27616 = (0);
seq__26992_27530 = G__27613;
chunk__26999_27531 = G__27614;
count__27000_27532 = G__27615;
i__27001_27533 = G__27616;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq26987){
var G__26988 = cljs.core.first(seq26987);
var seq26987__$1 = cljs.core.next(seq26987);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26988,seq26987__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27617 = arguments.length;
var i__4790__auto___27618 = (0);
while(true){
if((i__4790__auto___27618 < len__4789__auto___27617)){
args__4795__auto__.push((arguments[i__4790__auto___27618]));

var G__27619 = (i__4790__auto___27618 + (1));
i__4790__auto___27618 = G__27619;
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

var vec__27071_27623 = dommy.core.elem_and_selector(elem_sel);
var elem_27624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27071_27623,(0),null);
var selector_27625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27071_27623,(1),null);
var seq__27074_27626 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__27075_27627 = null;
var count__27076_27628 = (0);
var i__27077_27629 = (0);
while(true){
if((i__27077_27629 < count__27076_27628)){
var vec__27085_27630 = chunk__27075_27627.cljs$core$IIndexed$_nth$arity$2(null,i__27077_27629);
var type_27631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27085_27630,(0),null);
var f_27632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27085_27630,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27631,((function (seq__27074_27626,chunk__27075_27627,count__27076_27628,i__27077_27629,vec__27085_27630,type_27631,f_27632,vec__27071_27623,elem_27624,selector_27625){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27631,dommy$core$this_fn], 0));

return (f_27632.cljs$core$IFn$_invoke$arity$1 ? f_27632.cljs$core$IFn$_invoke$arity$1(e) : f_27632.call(null,e));
});})(seq__27074_27626,chunk__27075_27627,count__27076_27628,i__27077_27629,vec__27085_27630,type_27631,f_27632,vec__27071_27623,elem_27624,selector_27625))
], 0));


var G__27633 = seq__27074_27626;
var G__27634 = chunk__27075_27627;
var G__27635 = count__27076_27628;
var G__27636 = (i__27077_27629 + (1));
seq__27074_27626 = G__27633;
chunk__27075_27627 = G__27634;
count__27076_27628 = G__27635;
i__27077_27629 = G__27636;
continue;
} else {
var temp__5735__auto___27637 = cljs.core.seq(seq__27074_27626);
if(temp__5735__auto___27637){
var seq__27074_27638__$1 = temp__5735__auto___27637;
if(cljs.core.chunked_seq_QMARK_(seq__27074_27638__$1)){
var c__4609__auto___27639 = cljs.core.chunk_first(seq__27074_27638__$1);
var G__27640 = cljs.core.chunk_rest(seq__27074_27638__$1);
var G__27641 = c__4609__auto___27639;
var G__27642 = cljs.core.count(c__4609__auto___27639);
var G__27643 = (0);
seq__27074_27626 = G__27640;
chunk__27075_27627 = G__27641;
count__27076_27628 = G__27642;
i__27077_27629 = G__27643;
continue;
} else {
var vec__27088_27644 = cljs.core.first(seq__27074_27638__$1);
var type_27645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088_27644,(0),null);
var f_27646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27088_27644,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27645,((function (seq__27074_27626,chunk__27075_27627,count__27076_27628,i__27077_27629,vec__27088_27644,type_27645,f_27646,seq__27074_27638__$1,temp__5735__auto___27637,vec__27071_27623,elem_27624,selector_27625){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27645,dommy$core$this_fn], 0));

return (f_27646.cljs$core$IFn$_invoke$arity$1 ? f_27646.cljs$core$IFn$_invoke$arity$1(e) : f_27646.call(null,e));
});})(seq__27074_27626,chunk__27075_27627,count__27076_27628,i__27077_27629,vec__27088_27644,type_27645,f_27646,seq__27074_27638__$1,temp__5735__auto___27637,vec__27071_27623,elem_27624,selector_27625))
], 0));


var G__27650 = cljs.core.next(seq__27074_27638__$1);
var G__27651 = null;
var G__27652 = (0);
var G__27653 = (0);
seq__27074_27626 = G__27650;
chunk__27075_27627 = G__27651;
count__27076_27628 = G__27652;
i__27077_27629 = G__27653;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq27069){
var G__27070 = cljs.core.first(seq27069);
var seq27069__$1 = cljs.core.next(seq27069);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27070,seq27069__$1);
}));


//# sourceMappingURL=dommy.core.js.map
