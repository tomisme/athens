goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
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
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rule(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46398 = arguments.length;
var i__4790__auto___46401 = (0);
while(true){
if((i__4790__auto___46401 < len__4789__auto___46398)){
args__4795__auto__.push((arguments[i__4790__auto___46401]));

var G__46402 = (i__4790__auto___46401 + (1));
i__4790__auto___46401 = G__46402;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__46403__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__46403 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__46404__i = 0, G__46404__a = new Array(arguments.length -  0);
while (G__46404__i < G__46404__a.length) {G__46404__a[G__46404__i] = arguments[G__46404__i + 0]; ++G__46404__i;}
  children = new cljs.core.IndexedSeq(G__46404__a,0,null);
} 
return G__46403__delegate.call(this,children);};
G__46403.cljs$lang$maxFixedArity = 0;
G__46403.cljs$lang$applyTo = (function (arglist__46405){
var children = cljs.core.seq(arglist__46405);
return G__46403__delegate(children);
});
G__46403.cljs$core$IFn$_invoke$arity$variadic = G__46403__delegate;
return G__46403;
})()
;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq46373){
var G__46374 = cljs.core.first(seq46373);
var seq46373__$1 = cljs.core.next(seq46373);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46374,seq46373__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__46406__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__46406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46407__i = 0, G__46407__a = new Array(arguments.length -  0);
while (G__46407__i < G__46407__a.length) {G__46407__a[G__46407__i] = arguments[G__46407__i + 0]; ++G__46407__i;}
  args = new cljs.core.IndexedSeq(G__46407__a,0,null);
} 
return G__46406__delegate.call(this,args);};
G__46406.cljs$lang$maxFixedArity = 0;
G__46406.cljs$lang$applyTo = (function (arglist__46408){
var args = cljs.core.seq(arglist__46408);
return G__46406__delegate(args);
});
G__46406.cljs$core$IFn$_invoke$arity$variadic = G__46406__delegate;
return G__46406;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_font_face(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46409 = arguments.length;
var i__4790__auto___46410 = (0);
while(true){
if((i__4790__auto___46410 < len__4789__auto___46409)){
args__4795__auto__.push((arguments[i__4790__auto___46410]));

var G__46411 = (i__4790__auto___46410 + (1));
i__4790__auto___46410 = G__46411;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq46384){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46384));
}));

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_import(var_args){
var G__46388 = arguments.length;
switch (G__46388) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___46413 = arguments.length;
var i__4790__auto___46414 = (0);
while(true){
if((i__4790__auto___46414 < len__4789__auto___46413)){
args_arr__4810__auto__.push((arguments[i__4790__auto___46414]));

var G__46415 = (i__4790__auto___46414 + (1));
i__4790__auto___46414 = G__46415;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq46386){
var G__46387 = cljs.core.first(seq46386);
var seq46386__$1 = cljs.core.next(seq46386);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46387,seq46386__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_media(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46420 = arguments.length;
var i__4790__auto___46421 = (0);
while(true){
if((i__4790__auto___46421 < len__4789__auto___46420)){
args__4795__auto__.push((arguments[i__4790__auto___46421]));

var G__46422 = (i__4790__auto___46421 + (1));
i__4790__auto___46421 = G__46422;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq46389){
var G__46390 = cljs.core.first(seq46389);
var seq46389__$1 = cljs.core.next(seq46389);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46390,seq46389__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_supports(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46426 = arguments.length;
var i__4790__auto___46427 = (0);
while(true){
if((i__4790__auto___46427 < len__4789__auto___46426)){
args__4795__auto__.push((arguments[i__4790__auto___46427]));

var G__46429 = (i__4790__auto___46427 + (1));
i__4790__auto___46427 = G__46429;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq46394){
var G__46395 = cljs.core.first(seq46394);
var seq46394__$1 = cljs.core.next(seq46394);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46395,seq46394__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_keyframes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46430 = arguments.length;
var i__4790__auto___46431 = (0);
while(true){
if((i__4790__auto___46431 < len__4789__auto___46430)){
args__4795__auto__.push((arguments[i__4790__auto___46431]));

var G__46432 = (i__4790__auto___46431 + (1));
i__4790__auto___46431 = G__46432;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq46396){
var G__46397 = cljs.core.first(seq46396);
var seq46396__$1 = cljs.core.next(seq46396);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46397,seq46396__$1);
}));

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.js.map
