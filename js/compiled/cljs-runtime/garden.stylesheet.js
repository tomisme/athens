goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42648 = arguments.length;
var i__4790__auto___42650 = (0);
while(true){
if((i__4790__auto___42650 < len__4789__auto___42648)){
args__4795__auto__.push((arguments[i__4790__auto___42650]));

var G__42652 = (i__4790__auto___42650 + (1));
i__4790__auto___42650 = G__42652;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__42677__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__42677 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__42678__i = 0, G__42678__a = new Array(arguments.length -  0);
while (G__42678__i < G__42678__a.length) {G__42678__a[G__42678__i] = arguments[G__42678__i + 0]; ++G__42678__i;}
  children = new cljs.core.IndexedSeq(G__42678__a,0,null);
} 
return G__42677__delegate.call(this,children);};
G__42677.cljs$lang$maxFixedArity = 0;
G__42677.cljs$lang$applyTo = (function (arglist__42684){
var children = cljs.core.seq(arglist__42684);
return G__42677__delegate(children);
});
G__42677.cljs$core$IFn$_invoke$arity$variadic = G__42677__delegate;
return G__42677;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq42361){
var G__42362 = cljs.core.first(seq42361);
var seq42361__$1 = cljs.core.next(seq42361);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42362,seq42361__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__42698__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__42698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42701__i = 0, G__42701__a = new Array(arguments.length -  0);
while (G__42701__i < G__42701__a.length) {G__42701__a[G__42701__i] = arguments[G__42701__i + 0]; ++G__42701__i;}
  args = new cljs.core.IndexedSeq(G__42701__a,0,null);
} 
return G__42698__delegate.call(this,args);};
G__42698.cljs$lang$maxFixedArity = 0;
G__42698.cljs$lang$applyTo = (function (arglist__42702){
var args = cljs.core.seq(arglist__42702);
return G__42698__delegate(args);
});
G__42698.cljs$core$IFn$_invoke$arity$variadic = G__42698__delegate;
return G__42698;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42706 = arguments.length;
var i__4790__auto___42707 = (0);
while(true){
if((i__4790__auto___42707 < len__4789__auto___42706)){
args__4795__auto__.push((arguments[i__4790__auto___42707]));

var G__42712 = (i__4790__auto___42707 + (1));
i__4790__auto___42707 = G__42712;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq42503){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42503));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__42560 = arguments.length;
switch (G__42560) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42721 = arguments.length;
var i__4790__auto___42722 = (0);
while(true){
if((i__4790__auto___42722 < len__4789__auto___42721)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42722]));

var G__42726 = (i__4790__auto___42722 + (1));
i__4790__auto___42722 = G__42726;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq42556){
var G__42557 = cljs.core.first(seq42556);
var seq42556__$1 = cljs.core.next(seq42556);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42557,seq42556__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42734 = arguments.length;
var i__4790__auto___42735 = (0);
while(true){
if((i__4790__auto___42735 < len__4789__auto___42734)){
args__4795__auto__.push((arguments[i__4790__auto___42735]));

var G__42736 = (i__4790__auto___42735 + (1));
i__4790__auto___42735 = G__42736;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq42596){
var G__42597 = cljs.core.first(seq42596);
var seq42596__$1 = cljs.core.next(seq42596);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42597,seq42596__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42740 = arguments.length;
var i__4790__auto___42741 = (0);
while(true){
if((i__4790__auto___42741 < len__4789__auto___42740)){
args__4795__auto__.push((arguments[i__4790__auto___42741]));

var G__42745 = (i__4790__auto___42741 + (1));
i__4790__auto___42741 = G__42745;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq42601){
var G__42602 = cljs.core.first(seq42601);
var seq42601__$1 = cljs.core.next(seq42601);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42602,seq42601__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42750 = arguments.length;
var i__4790__auto___42751 = (0);
while(true){
if((i__4790__auto___42751 < len__4789__auto___42750)){
args__4795__auto__.push((arguments[i__4790__auto___42751]));

var G__42752 = (i__4790__auto___42751 + (1));
i__4790__auto___42751 = G__42752;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq42607){
var G__42608 = cljs.core.first(seq42607);
var seq42607__$1 = cljs.core.next(seq42607);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42608,seq42607__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
