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
var G__26614 = arguments.length;
switch (G__26614) {
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
var G__26641 = arguments.length;
switch (G__26641) {
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
var G__26654 = arguments.length;
switch (G__26654) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__26648_SHARP_){
return (!((p1__26648_SHARP_ === base)));
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
var seq__26694_27097 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__26695_27098 = null;
var count__26696_27099 = (0);
var i__26697_27100 = (0);
while(true){
if((i__26697_27100 < count__26696_27099)){
var vec__26704_27101 = chunk__26695_27098.cljs$core$IIndexed$_nth$arity$2(null,i__26697_27100);
var k_27102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26704_27101,(0),null);
var v_27103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26704_27101,(1),null);
style.setProperty(dommy.utils.as_str(k_27102),v_27103);


var G__27104 = seq__26694_27097;
var G__27105 = chunk__26695_27098;
var G__27106 = count__26696_27099;
var G__27107 = (i__26697_27100 + (1));
seq__26694_27097 = G__27104;
chunk__26695_27098 = G__27105;
count__26696_27099 = G__27106;
i__26697_27100 = G__27107;
continue;
} else {
var temp__5735__auto___27108 = cljs.core.seq(seq__26694_27097);
if(temp__5735__auto___27108){
var seq__26694_27109__$1 = temp__5735__auto___27108;
if(cljs.core.chunked_seq_QMARK_(seq__26694_27109__$1)){
var c__4609__auto___27110 = cljs.core.chunk_first(seq__26694_27109__$1);
var G__27111 = cljs.core.chunk_rest(seq__26694_27109__$1);
var G__27112 = c__4609__auto___27110;
var G__27113 = cljs.core.count(c__4609__auto___27110);
var G__27114 = (0);
seq__26694_27097 = G__27111;
chunk__26695_27098 = G__27112;
count__26696_27099 = G__27113;
i__26697_27100 = G__27114;
continue;
} else {
var vec__26707_27115 = cljs.core.first(seq__26694_27109__$1);
var k_27116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26707_27115,(0),null);
var v_27117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26707_27115,(1),null);
style.setProperty(dommy.utils.as_str(k_27116),v_27117);


var G__27118 = cljs.core.next(seq__26694_27109__$1);
var G__27119 = null;
var G__27120 = (0);
var G__27121 = (0);
seq__26694_27097 = G__27118;
chunk__26695_27098 = G__27119;
count__26696_27099 = G__27120;
i__26697_27100 = G__27121;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq26688){
var G__26689 = cljs.core.first(seq26688);
var seq26688__$1 = cljs.core.next(seq26688);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26689,seq26688__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27122 = arguments.length;
var i__4790__auto___27123 = (0);
while(true){
if((i__4790__auto___27123 < len__4789__auto___27122)){
args__4795__auto__.push((arguments[i__4790__auto___27123]));

var G__27124 = (i__4790__auto___27123 + (1));
i__4790__auto___27123 = G__27124;
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
var seq__26718_27125 = cljs.core.seq(keywords);
var chunk__26719_27126 = null;
var count__26720_27127 = (0);
var i__26721_27128 = (0);
while(true){
if((i__26721_27128 < count__26720_27127)){
var kw_27129 = chunk__26719_27126.cljs$core$IIndexed$_nth$arity$2(null,i__26721_27128);
style.removeProperty(dommy.utils.as_str(kw_27129));


var G__27130 = seq__26718_27125;
var G__27131 = chunk__26719_27126;
var G__27132 = count__26720_27127;
var G__27133 = (i__26721_27128 + (1));
seq__26718_27125 = G__27130;
chunk__26719_27126 = G__27131;
count__26720_27127 = G__27132;
i__26721_27128 = G__27133;
continue;
} else {
var temp__5735__auto___27134 = cljs.core.seq(seq__26718_27125);
if(temp__5735__auto___27134){
var seq__26718_27135__$1 = temp__5735__auto___27134;
if(cljs.core.chunked_seq_QMARK_(seq__26718_27135__$1)){
var c__4609__auto___27136 = cljs.core.chunk_first(seq__26718_27135__$1);
var G__27137 = cljs.core.chunk_rest(seq__26718_27135__$1);
var G__27138 = c__4609__auto___27136;
var G__27139 = cljs.core.count(c__4609__auto___27136);
var G__27140 = (0);
seq__26718_27125 = G__27137;
chunk__26719_27126 = G__27138;
count__26720_27127 = G__27139;
i__26721_27128 = G__27140;
continue;
} else {
var kw_27141 = cljs.core.first(seq__26718_27135__$1);
style.removeProperty(dommy.utils.as_str(kw_27141));


var G__27142 = cljs.core.next(seq__26718_27135__$1);
var G__27143 = null;
var G__27144 = (0);
var G__27145 = (0);
seq__26718_27125 = G__27142;
chunk__26719_27126 = G__27143;
count__26720_27127 = G__27144;
i__26721_27128 = G__27145;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq26716){
var G__26717 = cljs.core.first(seq26716);
var seq26716__$1 = cljs.core.next(seq26716);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26717,seq26716__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27146 = arguments.length;
var i__4790__auto___27147 = (0);
while(true){
if((i__4790__auto___27147 < len__4789__auto___27146)){
args__4795__auto__.push((arguments[i__4790__auto___27147]));

var G__27148 = (i__4790__auto___27147 + (1));
i__4790__auto___27147 = G__27148;
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

var seq__26724_27151 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__26725_27152 = null;
var count__26726_27153 = (0);
var i__26727_27154 = (0);
while(true){
if((i__26727_27154 < count__26726_27153)){
var vec__26734_27155 = chunk__26725_27152.cljs$core$IIndexed$_nth$arity$2(null,i__26727_27154);
var k_27156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734_27155,(0),null);
var v_27157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734_27155,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27156,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27157),"px"].join('')], 0));


var G__27160 = seq__26724_27151;
var G__27161 = chunk__26725_27152;
var G__27162 = count__26726_27153;
var G__27163 = (i__26727_27154 + (1));
seq__26724_27151 = G__27160;
chunk__26725_27152 = G__27161;
count__26726_27153 = G__27162;
i__26727_27154 = G__27163;
continue;
} else {
var temp__5735__auto___27164 = cljs.core.seq(seq__26724_27151);
if(temp__5735__auto___27164){
var seq__26724_27165__$1 = temp__5735__auto___27164;
if(cljs.core.chunked_seq_QMARK_(seq__26724_27165__$1)){
var c__4609__auto___27166 = cljs.core.chunk_first(seq__26724_27165__$1);
var G__27167 = cljs.core.chunk_rest(seq__26724_27165__$1);
var G__27168 = c__4609__auto___27166;
var G__27169 = cljs.core.count(c__4609__auto___27166);
var G__27170 = (0);
seq__26724_27151 = G__27167;
chunk__26725_27152 = G__27168;
count__26726_27153 = G__27169;
i__26727_27154 = G__27170;
continue;
} else {
var vec__26737_27171 = cljs.core.first(seq__26724_27165__$1);
var k_27172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737_27171,(0),null);
var v_27173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737_27171,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27172,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27173),"px"].join('')], 0));


var G__27174 = cljs.core.next(seq__26724_27165__$1);
var G__27175 = null;
var G__27176 = (0);
var G__27177 = (0);
seq__26724_27151 = G__27174;
chunk__26725_27152 = G__27175;
count__26726_27153 = G__27176;
i__26727_27154 = G__27177;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq26722){
var G__26723 = cljs.core.first(seq26722);
var seq26722__$1 = cljs.core.next(seq26722);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26723,seq26722__$1);
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
var vec__26764_27200 = cljs.core.first(seq__26748_27194__$1);
var k_27201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764_27200,(0),null);
var v_27202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764_27200,(1),null);
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
var G__26774 = arguments.length;
switch (G__26774) {
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
if(cljs.core.truth_((function (){var fexpr__26775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__26775.cljs$core$IFn$_invoke$arity$1 ? fexpr__26775.cljs$core$IFn$_invoke$arity$1(k_27211__$1) : fexpr__26775.call(null,k_27211__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_27211__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__26776_27212 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__26777_27213 = null;
var count__26778_27214 = (0);
var i__26779_27215 = (0);
while(true){
if((i__26779_27215 < count__26778_27214)){
var k_27216__$1 = chunk__26777_27213.cljs$core$IIndexed$_nth$arity$2(null,i__26779_27215);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_27216__$1);


var G__27217 = seq__26776_27212;
var G__27218 = chunk__26777_27213;
var G__27219 = count__26778_27214;
var G__27220 = (i__26779_27215 + (1));
seq__26776_27212 = G__27217;
chunk__26777_27213 = G__27218;
count__26778_27214 = G__27219;
i__26779_27215 = G__27220;
continue;
} else {
var temp__5735__auto___27221 = cljs.core.seq(seq__26776_27212);
if(temp__5735__auto___27221){
var seq__26776_27222__$1 = temp__5735__auto___27221;
if(cljs.core.chunked_seq_QMARK_(seq__26776_27222__$1)){
var c__4609__auto___27223 = cljs.core.chunk_first(seq__26776_27222__$1);
var G__27224 = cljs.core.chunk_rest(seq__26776_27222__$1);
var G__27225 = c__4609__auto___27223;
var G__27226 = cljs.core.count(c__4609__auto___27223);
var G__27227 = (0);
seq__26776_27212 = G__27224;
chunk__26777_27213 = G__27225;
count__26778_27214 = G__27226;
i__26779_27215 = G__27227;
continue;
} else {
var k_27228__$1 = cljs.core.first(seq__26776_27222__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_27228__$1);


var G__27229 = cljs.core.next(seq__26776_27222__$1);
var G__27230 = null;
var G__27231 = (0);
var G__27232 = (0);
seq__26776_27212 = G__27229;
chunk__26777_27213 = G__27230;
count__26778_27214 = G__27231;
i__26779_27215 = G__27232;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq26771){
var G__26772 = cljs.core.first(seq26771);
var seq26771__$1 = cljs.core.next(seq26771);
var G__26773 = cljs.core.first(seq26771__$1);
var seq26771__$2 = cljs.core.next(seq26771__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26772,G__26773,seq26771__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__26787 = arguments.length;
switch (G__26787) {
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
var G__26793 = arguments.length;
switch (G__26793) {
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
var seq__26795_27240 = cljs.core.seq(classes__$1);
var chunk__26796_27241 = null;
var count__26797_27242 = (0);
var i__26798_27243 = (0);
while(true){
if((i__26798_27243 < count__26797_27242)){
var c_27244 = chunk__26796_27241.cljs$core$IIndexed$_nth$arity$2(null,i__26798_27243);
class_list_27239.add(c_27244);


var G__27245 = seq__26795_27240;
var G__27246 = chunk__26796_27241;
var G__27247 = count__26797_27242;
var G__27248 = (i__26798_27243 + (1));
seq__26795_27240 = G__27245;
chunk__26796_27241 = G__27246;
count__26797_27242 = G__27247;
i__26798_27243 = G__27248;
continue;
} else {
var temp__5735__auto___27249 = cljs.core.seq(seq__26795_27240);
if(temp__5735__auto___27249){
var seq__26795_27250__$1 = temp__5735__auto___27249;
if(cljs.core.chunked_seq_QMARK_(seq__26795_27250__$1)){
var c__4609__auto___27251 = cljs.core.chunk_first(seq__26795_27250__$1);
var G__27252 = cljs.core.chunk_rest(seq__26795_27250__$1);
var G__27253 = c__4609__auto___27251;
var G__27254 = cljs.core.count(c__4609__auto___27251);
var G__27255 = (0);
seq__26795_27240 = G__27252;
chunk__26796_27241 = G__27253;
count__26797_27242 = G__27254;
i__26798_27243 = G__27255;
continue;
} else {
var c_27256 = cljs.core.first(seq__26795_27250__$1);
class_list_27239.add(c_27256);


var G__27257 = cljs.core.next(seq__26795_27250__$1);
var G__27258 = null;
var G__27259 = (0);
var G__27260 = (0);
seq__26795_27240 = G__27257;
chunk__26796_27241 = G__27258;
count__26797_27242 = G__27259;
i__26798_27243 = G__27260;
continue;
}
} else {
}
}
break;
}
} else {
var seq__26799_27261 = cljs.core.seq(classes__$1);
var chunk__26800_27262 = null;
var count__26801_27263 = (0);
var i__26802_27264 = (0);
while(true){
if((i__26802_27264 < count__26801_27263)){
var c_27265 = chunk__26800_27262.cljs$core$IIndexed$_nth$arity$2(null,i__26802_27264);
var class_name_27266 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_27266,c_27265))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_27266 === ""))?c_27265:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27266)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_27265)].join('')));
}


var G__27267 = seq__26799_27261;
var G__27268 = chunk__26800_27262;
var G__27269 = count__26801_27263;
var G__27270 = (i__26802_27264 + (1));
seq__26799_27261 = G__27267;
chunk__26800_27262 = G__27268;
count__26801_27263 = G__27269;
i__26802_27264 = G__27270;
continue;
} else {
var temp__5735__auto___27271 = cljs.core.seq(seq__26799_27261);
if(temp__5735__auto___27271){
var seq__26799_27272__$1 = temp__5735__auto___27271;
if(cljs.core.chunked_seq_QMARK_(seq__26799_27272__$1)){
var c__4609__auto___27273 = cljs.core.chunk_first(seq__26799_27272__$1);
var G__27274 = cljs.core.chunk_rest(seq__26799_27272__$1);
var G__27275 = c__4609__auto___27273;
var G__27276 = cljs.core.count(c__4609__auto___27273);
var G__27277 = (0);
seq__26799_27261 = G__27274;
chunk__26800_27262 = G__27275;
count__26801_27263 = G__27276;
i__26802_27264 = G__27277;
continue;
} else {
var c_27278 = cljs.core.first(seq__26799_27272__$1);
var class_name_27279 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_27279,c_27278))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_27279 === ""))?c_27278:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27279)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_27278)].join('')));
}


var G__27280 = cljs.core.next(seq__26799_27272__$1);
var G__27281 = null;
var G__27282 = (0);
var G__27283 = (0);
seq__26799_27261 = G__27280;
chunk__26800_27262 = G__27281;
count__26801_27263 = G__27282;
i__26802_27264 = G__27283;
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
var seq__26803_27284 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__26804_27285 = null;
var count__26805_27286 = (0);
var i__26806_27287 = (0);
while(true){
if((i__26806_27287 < count__26805_27286)){
var c_27288 = chunk__26804_27285.cljs$core$IIndexed$_nth$arity$2(null,i__26806_27287);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_27288);


var G__27289 = seq__26803_27284;
var G__27290 = chunk__26804_27285;
var G__27291 = count__26805_27286;
var G__27292 = (i__26806_27287 + (1));
seq__26803_27284 = G__27289;
chunk__26804_27285 = G__27290;
count__26805_27286 = G__27291;
i__26806_27287 = G__27292;
continue;
} else {
var temp__5735__auto___27293 = cljs.core.seq(seq__26803_27284);
if(temp__5735__auto___27293){
var seq__26803_27294__$1 = temp__5735__auto___27293;
if(cljs.core.chunked_seq_QMARK_(seq__26803_27294__$1)){
var c__4609__auto___27295 = cljs.core.chunk_first(seq__26803_27294__$1);
var G__27296 = cljs.core.chunk_rest(seq__26803_27294__$1);
var G__27297 = c__4609__auto___27295;
var G__27298 = cljs.core.count(c__4609__auto___27295);
var G__27299 = (0);
seq__26803_27284 = G__27296;
chunk__26804_27285 = G__27297;
count__26805_27286 = G__27298;
i__26806_27287 = G__27299;
continue;
} else {
var c_27300 = cljs.core.first(seq__26803_27294__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_27300);


var G__27301 = cljs.core.next(seq__26803_27294__$1);
var G__27302 = null;
var G__27303 = (0);
var G__27304 = (0);
seq__26803_27284 = G__27301;
chunk__26804_27285 = G__27302;
count__26805_27286 = G__27303;
i__26806_27287 = G__27304;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq26790){
var G__26791 = cljs.core.first(seq26790);
var seq26790__$1 = cljs.core.next(seq26790);
var G__26792 = cljs.core.first(seq26790__$1);
var seq26790__$2 = cljs.core.next(seq26790__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26791,G__26792,seq26790__$2);
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
var len__4789__auto___27308 = arguments.length;
var i__4790__auto___27309 = (0);
while(true){
if((i__4790__auto___27309 < len__4789__auto___27308)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27309]));

var G__27310 = (i__4790__auto___27309 + (1));
i__4790__auto___27309 = G__27310;
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
var temp__5733__auto___27313 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___27313)){
var class_list_27315 = temp__5733__auto___27313;
class_list_27315.remove(c__$1);
} else {
var class_name_27316 = dommy.core.class$(elem);
var new_class_name_27317 = dommy.utils.remove_class_str(class_name_27316,c__$1);
if((class_name_27316 === new_class_name_27317)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_27317);
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


var G__27319 = seq__26812;
var G__27320 = chunk__26813;
var G__27321 = count__26814;
var G__27322 = (i__26815 + (1));
seq__26812 = G__27319;
chunk__26813 = G__27320;
count__26814 = G__27321;
i__26815 = G__27322;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26812);
if(temp__5735__auto__){
var seq__26812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26812__$1);
var G__27323 = cljs.core.chunk_rest(seq__26812__$1);
var G__27324 = c__4609__auto__;
var G__27325 = cljs.core.count(c__4609__auto__);
var G__27326 = (0);
seq__26812 = G__27323;
chunk__26813 = G__27324;
count__26814 = G__27325;
i__26815 = G__27326;
continue;
} else {
var c = cljs.core.first(seq__26812__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__27328 = cljs.core.next(seq__26812__$1);
var G__27329 = null;
var G__27330 = (0);
var G__27331 = (0);
seq__26812 = G__27328;
chunk__26813 = G__27329;
count__26814 = G__27330;
i__26815 = G__27331;
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
var temp__5733__auto___27337 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___27337)){
var class_list_27338 = temp__5733__auto___27337;
class_list_27338.toggle(c__$1);
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
var len__4789__auto___27353 = arguments.length;
var i__4790__auto___27355 = (0);
while(true){
if((i__4790__auto___27355 < len__4789__auto___27353)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27355]));

var G__27357 = (i__4790__auto___27355 + (1));
i__4790__auto___27355 = G__27357;
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
var seq__26828_27360 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__26829_27361 = null;
var count__26830_27362 = (0);
var i__26831_27363 = (0);
while(true){
if((i__26831_27363 < count__26830_27362)){
var c_27364 = chunk__26829_27361.cljs$core$IIndexed$_nth$arity$2(null,i__26831_27363);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27364);


var G__27365 = seq__26828_27360;
var G__27366 = chunk__26829_27361;
var G__27367 = count__26830_27362;
var G__27368 = (i__26831_27363 + (1));
seq__26828_27360 = G__27365;
chunk__26829_27361 = G__27366;
count__26830_27362 = G__27367;
i__26831_27363 = G__27368;
continue;
} else {
var temp__5735__auto___27369 = cljs.core.seq(seq__26828_27360);
if(temp__5735__auto___27369){
var seq__26828_27370__$1 = temp__5735__auto___27369;
if(cljs.core.chunked_seq_QMARK_(seq__26828_27370__$1)){
var c__4609__auto___27372 = cljs.core.chunk_first(seq__26828_27370__$1);
var G__27373 = cljs.core.chunk_rest(seq__26828_27370__$1);
var G__27374 = c__4609__auto___27372;
var G__27375 = cljs.core.count(c__4609__auto___27372);
var G__27376 = (0);
seq__26828_27360 = G__27373;
chunk__26829_27361 = G__27374;
count__26830_27362 = G__27375;
i__26831_27363 = G__27376;
continue;
} else {
var c_27377 = cljs.core.first(seq__26828_27370__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27377);


var G__27379 = cljs.core.next(seq__26828_27370__$1);
var G__27380 = null;
var G__27381 = (0);
var G__27382 = (0);
seq__26828_27360 = G__27379;
chunk__26829_27361 = G__27380;
count__26830_27362 = G__27381;
i__26831_27363 = G__27382;
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
var len__4789__auto___27390 = arguments.length;
var i__4790__auto___27391 = (0);
while(true){
if((i__4790__auto___27391 < len__4789__auto___27390)){
args_arr__4810__auto__.push((arguments[i__4790__auto___27391]));

var G__27392 = (i__4790__auto___27391 + (1));
i__4790__auto___27391 = G__27392;
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
var seq__26838_27397 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__26839_27398 = null;
var count__26840_27399 = (0);
var i__26841_27400 = (0);
while(true){
if((i__26841_27400 < count__26840_27399)){
var c_27402 = chunk__26839_27398.cljs$core$IIndexed$_nth$arity$2(null,i__26841_27400);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27402);


var G__27403 = seq__26838_27397;
var G__27404 = chunk__26839_27398;
var G__27405 = count__26840_27399;
var G__27406 = (i__26841_27400 + (1));
seq__26838_27397 = G__27403;
chunk__26839_27398 = G__27404;
count__26840_27399 = G__27405;
i__26841_27400 = G__27406;
continue;
} else {
var temp__5735__auto___27407 = cljs.core.seq(seq__26838_27397);
if(temp__5735__auto___27407){
var seq__26838_27408__$1 = temp__5735__auto___27407;
if(cljs.core.chunked_seq_QMARK_(seq__26838_27408__$1)){
var c__4609__auto___27409 = cljs.core.chunk_first(seq__26838_27408__$1);
var G__27410 = cljs.core.chunk_rest(seq__26838_27408__$1);
var G__27411 = c__4609__auto___27409;
var G__27412 = cljs.core.count(c__4609__auto___27409);
var G__27413 = (0);
seq__26838_27397 = G__27410;
chunk__26839_27398 = G__27411;
count__26840_27399 = G__27412;
i__26841_27400 = G__27413;
continue;
} else {
var c_27414 = cljs.core.first(seq__26838_27408__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27414);


var G__27415 = cljs.core.next(seq__26838_27408__$1);
var G__27416 = null;
var G__27417 = (0);
var G__27418 = (0);
seq__26838_27397 = G__27415;
chunk__26839_27398 = G__27416;
count__26840_27399 = G__27417;
i__26841_27400 = G__27418;
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
var temp__5733__auto___27421 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___27421)){
var next_27422 = temp__5733__auto___27421;
dommy.core.insert_before_BANG_(elem,next_27422);
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
var G__26854 = p;
G__26854.removeChild(elem);

return G__26854;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26855){
var vec__26856 = p__26855;
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
var len__4789__auto___27428 = arguments.length;
var i__4790__auto___27429 = (0);
while(true){
if((i__4790__auto___27429 < len__4789__auto___27428)){
args__4795__auto__.push((arguments[i__4790__auto___27429]));

var G__27430 = (i__4790__auto___27429 + (1));
i__4790__auto___27429 = G__27430;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq26861){
var G__26862 = cljs.core.first(seq26861);
var seq26861__$1 = cljs.core.next(seq26861);
var G__26863 = cljs.core.first(seq26861__$1);
var seq26861__$2 = cljs.core.next(seq26861__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26862,G__26863,seq26861__$2);
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
var len__4789__auto___27431 = arguments.length;
var i__4790__auto___27432 = (0);
while(true){
if((i__4790__auto___27432 < len__4789__auto___27431)){
args__4795__auto__.push((arguments[i__4790__auto___27432]));

var G__27433 = (i__4790__auto___27432 + (1));
i__4790__auto___27432 = G__27433;
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


var G__27454 = seq__26881_27446;
var G__27455 = chunk__26883_27447;
var G__27456 = count__26884_27448;
var G__27457 = (i__26885_27449 + (1));
seq__26881_27446 = G__27454;
chunk__26883_27447 = G__27455;
count__26884_27448 = G__27456;
i__26885_27449 = G__27457;
continue;
} else {
var temp__5735__auto___27458 = cljs.core.seq(seq__26881_27446);
if(temp__5735__auto___27458){
var seq__26881_27459__$1 = temp__5735__auto___27458;
if(cljs.core.chunked_seq_QMARK_(seq__26881_27459__$1)){
var c__4609__auto___27460 = cljs.core.chunk_first(seq__26881_27459__$1);
var G__27461 = cljs.core.chunk_rest(seq__26881_27459__$1);
var G__27462 = c__4609__auto___27460;
var G__27463 = cljs.core.count(c__4609__auto___27460);
var G__27464 = (0);
seq__26881_27446 = G__27461;
chunk__26883_27447 = G__27462;
count__26884_27448 = G__27463;
i__26885_27449 = G__27464;
continue;
} else {
var vec__26951_27465 = cljs.core.first(seq__26881_27459__$1);
var actual_type_27466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951_27465,(0),null);
var factory_27467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951_27465,(1),null);
var canonical_f_27468 = (function (){var G__26955 = (factory_27467.cljs$core$IFn$_invoke$arity$1 ? factory_27467.cljs$core$IFn$_invoke$arity$1(f_27445) : factory_27467.call(null,f_27445));
var fexpr__26954 = (cljs.core.truth_(selector_27438)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27437,selector_27438):cljs.core.identity);
return (fexpr__26954.cljs$core$IFn$_invoke$arity$1 ? fexpr__26954.cljs$core$IFn$_invoke$arity$1(G__26955) : fexpr__26954.call(null,G__26955));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27437,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27438,actual_type_27466,f_27445], null),canonical_f_27468], 0));

if(cljs.core.truth_(elem_27437.addEventListener)){
elem_27437.addEventListener(cljs.core.name(actual_type_27466),canonical_f_27468);
} else {
elem_27437.attachEvent(cljs.core.name(actual_type_27466),canonical_f_27468);
}


var G__27469 = cljs.core.next(seq__26881_27459__$1);
var G__27470 = null;
var G__27471 = (0);
var G__27472 = (0);
seq__26881_27446 = G__27469;
chunk__26883_27447 = G__27470;
count__26884_27448 = G__27471;
i__26885_27449 = G__27472;
continue;
}
} else {
}
}
break;
}

var G__27473 = seq__26871_27439;
var G__27474 = chunk__26878_27440;
var G__27475 = count__26879_27441;
var G__27476 = (i__26880_27442 + (1));
seq__26871_27439 = G__27473;
chunk__26878_27440 = G__27474;
count__26879_27441 = G__27475;
i__26880_27442 = G__27476;
continue;
} else {
var temp__5735__auto___27477 = cljs.core.seq(seq__26871_27439);
if(temp__5735__auto___27477){
var seq__26871_27478__$1 = temp__5735__auto___27477;
if(cljs.core.chunked_seq_QMARK_(seq__26871_27478__$1)){
var c__4609__auto___27479 = cljs.core.chunk_first(seq__26871_27478__$1);
var G__27480 = cljs.core.chunk_rest(seq__26871_27478__$1);
var G__27481 = c__4609__auto___27479;
var G__27482 = cljs.core.count(c__4609__auto___27479);
var G__27483 = (0);
seq__26871_27439 = G__27480;
chunk__26878_27440 = G__27481;
count__26879_27441 = G__27482;
i__26880_27442 = G__27483;
continue;
} else {
var vec__26956_27484 = cljs.core.first(seq__26871_27478__$1);
var orig_type_27485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26956_27484,(0),null);
var f_27486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26956_27484,(1),null);
var seq__26872_27487 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_27485,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_27485,cljs.core.identity])));
var chunk__26874_27488 = null;
var count__26875_27489 = (0);
var i__26876_27490 = (0);
while(true){
if((i__26876_27490 < count__26875_27489)){
var vec__26973_27491 = chunk__26874_27488.cljs$core$IIndexed$_nth$arity$2(null,i__26876_27490);
var actual_type_27492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973_27491,(0),null);
var factory_27493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26973_27491,(1),null);
var canonical_f_27497 = (function (){var G__26977 = (factory_27493.cljs$core$IFn$_invoke$arity$1 ? factory_27493.cljs$core$IFn$_invoke$arity$1(f_27486) : factory_27493.call(null,f_27486));
var fexpr__26976 = (cljs.core.truth_(selector_27438)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27437,selector_27438):cljs.core.identity);
return (fexpr__26976.cljs$core$IFn$_invoke$arity$1 ? fexpr__26976.cljs$core$IFn$_invoke$arity$1(G__26977) : fexpr__26976.call(null,G__26977));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27437,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27438,actual_type_27492,f_27486], null),canonical_f_27497], 0));

if(cljs.core.truth_(elem_27437.addEventListener)){
elem_27437.addEventListener(cljs.core.name(actual_type_27492),canonical_f_27497);
} else {
elem_27437.attachEvent(cljs.core.name(actual_type_27492),canonical_f_27497);
}


var G__27498 = seq__26872_27487;
var G__27499 = chunk__26874_27488;
var G__27500 = count__26875_27489;
var G__27501 = (i__26876_27490 + (1));
seq__26872_27487 = G__27498;
chunk__26874_27488 = G__27499;
count__26875_27489 = G__27500;
i__26876_27490 = G__27501;
continue;
} else {
var temp__5735__auto___27503__$1 = cljs.core.seq(seq__26872_27487);
if(temp__5735__auto___27503__$1){
var seq__26872_27504__$1 = temp__5735__auto___27503__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26872_27504__$1)){
var c__4609__auto___27505 = cljs.core.chunk_first(seq__26872_27504__$1);
var G__27506 = cljs.core.chunk_rest(seq__26872_27504__$1);
var G__27507 = c__4609__auto___27505;
var G__27508 = cljs.core.count(c__4609__auto___27505);
var G__27509 = (0);
seq__26872_27487 = G__27506;
chunk__26874_27488 = G__27507;
count__26875_27489 = G__27508;
i__26876_27490 = G__27509;
continue;
} else {
var vec__26978_27510 = cljs.core.first(seq__26872_27504__$1);
var actual_type_27511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978_27510,(0),null);
var factory_27512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26978_27510,(1),null);
var canonical_f_27513 = (function (){var G__26982 = (factory_27512.cljs$core$IFn$_invoke$arity$1 ? factory_27512.cljs$core$IFn$_invoke$arity$1(f_27486) : factory_27512.call(null,f_27486));
var fexpr__26981 = (cljs.core.truth_(selector_27438)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27437,selector_27438):cljs.core.identity);
return (fexpr__26981.cljs$core$IFn$_invoke$arity$1 ? fexpr__26981.cljs$core$IFn$_invoke$arity$1(G__26982) : fexpr__26981.call(null,G__26982));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27437,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27438,actual_type_27511,f_27486], null),canonical_f_27513], 0));

if(cljs.core.truth_(elem_27437.addEventListener)){
elem_27437.addEventListener(cljs.core.name(actual_type_27511),canonical_f_27513);
} else {
elem_27437.attachEvent(cljs.core.name(actual_type_27511),canonical_f_27513);
}


var G__27514 = cljs.core.next(seq__26872_27504__$1);
var G__27515 = null;
var G__27516 = (0);
var G__27517 = (0);
seq__26872_27487 = G__27514;
chunk__26874_27488 = G__27515;
count__26875_27489 = G__27516;
i__26876_27490 = G__27517;
continue;
}
} else {
}
}
break;
}

var G__27518 = cljs.core.next(seq__26871_27478__$1);
var G__27519 = null;
var G__27520 = (0);
var G__27521 = (0);
seq__26871_27439 = G__27518;
chunk__26878_27440 = G__27519;
count__26879_27441 = G__27520;
i__26880_27442 = G__27521;
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


var G__27605 = cljs.core.next(seq__26993_27594__$1);
var G__27606 = null;
var G__27607 = (0);
var G__27608 = (0);
seq__26993_27580 = G__27605;
chunk__26995_27581 = G__27606;
count__26996_27582 = G__27607;
i__26997_27583 = G__27608;
continue;
}
} else {
}
}
break;
}

var G__27609 = cljs.core.next(seq__26992_27571__$1);
var G__27610 = null;
var G__27611 = (0);
var G__27612 = (0);
seq__26992_27530 = G__27609;
chunk__26999_27531 = G__27610;
count__27000_27532 = G__27611;
i__27001_27533 = G__27612;
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
var len__4789__auto___27613 = arguments.length;
var i__4790__auto___27614 = (0);
while(true){
if((i__4790__auto___27614 < len__4789__auto___27613)){
args__4795__auto__.push((arguments[i__4790__auto___27614]));

var G__27615 = (i__4790__auto___27614 + (1));
i__4790__auto___27614 = G__27615;
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

var vec__27070_27616 = dommy.core.elem_and_selector(elem_sel);
var elem_27617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27070_27616,(0),null);
var selector_27618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27070_27616,(1),null);
var seq__27073_27619 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__27074_27620 = null;
var count__27075_27621 = (0);
var i__27076_27622 = (0);
while(true){
if((i__27076_27622 < count__27075_27621)){
var vec__27083_27626 = chunk__27074_27620.cljs$core$IIndexed$_nth$arity$2(null,i__27076_27622);
var type_27627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083_27626,(0),null);
var f_27628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083_27626,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27627,((function (seq__27073_27619,chunk__27074_27620,count__27075_27621,i__27076_27622,vec__27083_27626,type_27627,f_27628,vec__27070_27616,elem_27617,selector_27618){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27627,dommy$core$this_fn], 0));

return (f_27628.cljs$core$IFn$_invoke$arity$1 ? f_27628.cljs$core$IFn$_invoke$arity$1(e) : f_27628.call(null,e));
});})(seq__27073_27619,chunk__27074_27620,count__27075_27621,i__27076_27622,vec__27083_27626,type_27627,f_27628,vec__27070_27616,elem_27617,selector_27618))
], 0));


var G__27630 = seq__27073_27619;
var G__27631 = chunk__27074_27620;
var G__27632 = count__27075_27621;
var G__27633 = (i__27076_27622 + (1));
seq__27073_27619 = G__27630;
chunk__27074_27620 = G__27631;
count__27075_27621 = G__27632;
i__27076_27622 = G__27633;
continue;
} else {
var temp__5735__auto___27634 = cljs.core.seq(seq__27073_27619);
if(temp__5735__auto___27634){
var seq__27073_27635__$1 = temp__5735__auto___27634;
if(cljs.core.chunked_seq_QMARK_(seq__27073_27635__$1)){
var c__4609__auto___27636 = cljs.core.chunk_first(seq__27073_27635__$1);
var G__27637 = cljs.core.chunk_rest(seq__27073_27635__$1);
var G__27638 = c__4609__auto___27636;
var G__27639 = cljs.core.count(c__4609__auto___27636);
var G__27640 = (0);
seq__27073_27619 = G__27637;
chunk__27074_27620 = G__27638;
count__27075_27621 = G__27639;
i__27076_27622 = G__27640;
continue;
} else {
var vec__27087_27642 = cljs.core.first(seq__27073_27635__$1);
var type_27643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27087_27642,(0),null);
var f_27644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27087_27642,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27643,((function (seq__27073_27619,chunk__27074_27620,count__27075_27621,i__27076_27622,vec__27087_27642,type_27643,f_27644,seq__27073_27635__$1,temp__5735__auto___27634,vec__27070_27616,elem_27617,selector_27618){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_27643,dommy$core$this_fn], 0));

return (f_27644.cljs$core$IFn$_invoke$arity$1 ? f_27644.cljs$core$IFn$_invoke$arity$1(e) : f_27644.call(null,e));
});})(seq__27073_27619,chunk__27074_27620,count__27075_27621,i__27076_27622,vec__27087_27642,type_27643,f_27644,seq__27073_27635__$1,temp__5735__auto___27634,vec__27070_27616,elem_27617,selector_27618))
], 0));


var G__27647 = cljs.core.next(seq__27073_27635__$1);
var G__27648 = null;
var G__27649 = (0);
var G__27650 = (0);
seq__27073_27619 = G__27647;
chunk__27074_27620 = G__27648;
count__27075_27621 = G__27649;
i__27076_27622 = G__27650;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq27068){
var G__27069 = cljs.core.first(seq27068);
var seq27068__$1 = cljs.core.next(seq27068);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27069,seq27068__$1);
}));


//# sourceMappingURL=dommy.core.js.map
