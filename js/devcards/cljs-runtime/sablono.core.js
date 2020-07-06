goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__53063__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__52693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__52694 = cljs.core.seq(vec__52693);
var first__52695 = cljs.core.first(seq__52694);
var seq__52694__$1 = cljs.core.next(seq__52694);
var tag = first__52695;
var body = seq__52694__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__53063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53064__i = 0, G__53064__a = new Array(arguments.length -  0);
while (G__53064__i < G__53064__a.length) {G__53064__a[G__53064__i] = arguments[G__53064__i + 0]; ++G__53064__i;}
  args = new cljs.core.IndexedSeq(G__53064__a,0,null);
} 
return G__53063__delegate.call(this,args);};
G__53063.cljs$lang$maxFixedArity = 0;
G__53063.cljs$lang$applyTo = (function (arglist__53065){
var args = cljs.core.seq(arglist__53065);
return G__53063__delegate(args);
});
G__53063.cljs$core$IFn$_invoke$arity$variadic = G__53063__delegate;
return G__53063;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__52699(s__52700){
return (new cljs.core.LazySeq(null,(function (){
var s__52700__$1 = s__52700;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52700__$1);
if(temp__5735__auto__){
var s__52700__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52700__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52700__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52702 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52701 = (0);
while(true){
if((i__52701 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52701);
cljs.core.chunk_append(b__52702,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__53066 = (i__52701 + (1));
i__52701 = G__53066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52702),sablono$core$update_arglists_$_iter__52699(cljs.core.chunk_rest(s__52700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52702),null);
}
} else {
var args = cljs.core.first(s__52700__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__52699(cljs.core.rest(s__52700__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53067 = arguments.length;
var i__4790__auto___53068 = (0);
while(true){
if((i__4790__auto___53068 < len__4789__auto___53067)){
args__4795__auto__.push((arguments[i__4790__auto___53068]));

var G__53069 = (i__4790__auto___53068 + (1));
i__4790__auto___53068 = G__53069;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__52715(s__52716){
return (new cljs.core.LazySeq(null,(function (){
var s__52716__$1 = s__52716;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52716__$1);
if(temp__5735__auto__){
var s__52716__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52716__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52716__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52718 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52717 = (0);
while(true){
if((i__52717 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52717);
cljs.core.chunk_append(b__52718,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__53070 = (i__52717 + (1));
i__52717 = G__53070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52718),sablono$core$iter__52715(cljs.core.chunk_rest(s__52716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52718),null);
}
} else {
var style = cljs.core.first(s__52716__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__52715(cljs.core.rest(s__52716__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq52707){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52707));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__52733 = goog.dom.getDocument().body;
var G__52734 = (function (){var G__52735 = "script";
var G__52736 = ({"src": src});
return goog.dom.createDom(G__52735,G__52736);
})();
return goog.dom.appendChild(G__52733,G__52734);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to52740 = (function sablono$core$link_to52740(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53071 = arguments.length;
var i__4790__auto___53072 = (0);
while(true){
if((i__4790__auto___53072 < len__4789__auto___53071)){
args__4795__auto__.push((arguments[i__4790__auto___53072]));

var G__53073 = (i__4790__auto___53072 + (1));
i__4790__auto___53072 = G__53073;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to52740.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to52740.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to52740.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to52740.cljs$lang$applyTo = (function (seq52741){
var G__52742 = cljs.core.first(seq52741);
var seq52741__$1 = cljs.core.next(seq52741);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52742,seq52741__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to52740);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to52748 = (function sablono$core$mail_to52748(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53074 = arguments.length;
var i__4790__auto___53075 = (0);
while(true){
if((i__4790__auto___53075 < len__4789__auto___53074)){
args__4795__auto__.push((arguments[i__4790__auto___53075]));

var G__53076 = (i__4790__auto___53075 + (1));
i__4790__auto___53075 = G__53076;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to52748.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to52748.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__52755){
var vec__52756 = p__52755;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52756,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to52748.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to52748.cljs$lang$applyTo = (function (seq52751){
var G__52752 = cljs.core.first(seq52751);
var seq52751__$1 = cljs.core.next(seq52751);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52752,seq52751__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to52748);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list52762 = (function sablono$core$unordered_list52762(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list52762_$_iter__52763(s__52764){
return (new cljs.core.LazySeq(null,(function (){
var s__52764__$1 = s__52764;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52764__$1);
if(temp__5735__auto__){
var s__52764__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52764__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52764__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52766 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52765 = (0);
while(true){
if((i__52765 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52765);
cljs.core.chunk_append(b__52766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__53077 = (i__52765 + (1));
i__52765 = G__53077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52766),sablono$core$unordered_list52762_$_iter__52763(cljs.core.chunk_rest(s__52764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52766),null);
}
} else {
var x = cljs.core.first(s__52764__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list52762_$_iter__52763(cljs.core.rest(s__52764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list52762);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list52771 = (function sablono$core$ordered_list52771(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list52771_$_iter__52772(s__52773){
return (new cljs.core.LazySeq(null,(function (){
var s__52773__$1 = s__52773;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52773__$1);
if(temp__5735__auto__){
var s__52773__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52773__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52773__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52775 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52774 = (0);
while(true){
if((i__52774 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52774);
cljs.core.chunk_append(b__52775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__53078 = (i__52774 + (1));
i__52774 = G__53078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52775),sablono$core$ordered_list52771_$_iter__52772(cljs.core.chunk_rest(s__52773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52775),null);
}
} else {
var x = cljs.core.first(s__52773__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list52771_$_iter__52772(cljs.core.rest(s__52773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list52771);
/**
 * Create an image element.
 */
sablono.core.image52785 = (function sablono$core$image52785(var_args){
var G__52787 = arguments.length;
switch (G__52787) {
case 1:
return sablono.core.image52785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image52785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image52785.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image52785.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image52785.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image52785);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__52788_SHARP_,p2__52789_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52788_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__52789_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__52790_SHARP_,p2__52791_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52790_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__52791_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__52799 = arguments.length;
switch (G__52799) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field52805 = (function sablono$core$color_field52805(var_args){
var G__52809 = arguments.length;
switch (G__52809) {
case 1:
return sablono.core.color_field52805.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field52805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field52805.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__52682__auto__);
}));

(sablono.core.color_field52805.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.color_field52805.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field52805);

/**
 * Creates a date input field.
 */
sablono.core.date_field52815 = (function sablono$core$date_field52815(var_args){
var G__52817 = arguments.length;
switch (G__52817) {
case 1:
return sablono.core.date_field52815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field52815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field52815.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__52682__auto__);
}));

(sablono.core.date_field52815.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.date_field52815.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field52815);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field52822 = (function sablono$core$datetime_field52822(var_args){
var G__52824 = arguments.length;
switch (G__52824) {
case 1:
return sablono.core.datetime_field52822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field52822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field52822.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__52682__auto__);
}));

(sablono.core.datetime_field52822.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.datetime_field52822.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field52822);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field52830 = (function sablono$core$datetime_local_field52830(var_args){
var G__52836 = arguments.length;
switch (G__52836) {
case 1:
return sablono.core.datetime_local_field52830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field52830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field52830.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__52682__auto__);
}));

(sablono.core.datetime_local_field52830.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.datetime_local_field52830.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field52830);

/**
 * Creates a email input field.
 */
sablono.core.email_field52837 = (function sablono$core$email_field52837(var_args){
var G__52839 = arguments.length;
switch (G__52839) {
case 1:
return sablono.core.email_field52837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field52837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field52837.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__52682__auto__);
}));

(sablono.core.email_field52837.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.email_field52837.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field52837);

/**
 * Creates a file input field.
 */
sablono.core.file_field52840 = (function sablono$core$file_field52840(var_args){
var G__52842 = arguments.length;
switch (G__52842) {
case 1:
return sablono.core.file_field52840.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field52840.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field52840.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__52682__auto__);
}));

(sablono.core.file_field52840.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.file_field52840.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field52840);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field52843 = (function sablono$core$hidden_field52843(var_args){
var G__52845 = arguments.length;
switch (G__52845) {
case 1:
return sablono.core.hidden_field52843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field52843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field52843.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__52682__auto__);
}));

(sablono.core.hidden_field52843.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.hidden_field52843.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field52843);

/**
 * Creates a month input field.
 */
sablono.core.month_field52846 = (function sablono$core$month_field52846(var_args){
var G__52848 = arguments.length;
switch (G__52848) {
case 1:
return sablono.core.month_field52846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field52846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field52846.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__52682__auto__);
}));

(sablono.core.month_field52846.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.month_field52846.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field52846);

/**
 * Creates a number input field.
 */
sablono.core.number_field52849 = (function sablono$core$number_field52849(var_args){
var G__52851 = arguments.length;
switch (G__52851) {
case 1:
return sablono.core.number_field52849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field52849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field52849.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__52682__auto__);
}));

(sablono.core.number_field52849.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.number_field52849.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field52849);

/**
 * Creates a password input field.
 */
sablono.core.password_field52852 = (function sablono$core$password_field52852(var_args){
var G__52854 = arguments.length;
switch (G__52854) {
case 1:
return sablono.core.password_field52852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field52852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field52852.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__52682__auto__);
}));

(sablono.core.password_field52852.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.password_field52852.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field52852);

/**
 * Creates a range input field.
 */
sablono.core.range_field52855 = (function sablono$core$range_field52855(var_args){
var G__52857 = arguments.length;
switch (G__52857) {
case 1:
return sablono.core.range_field52855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field52855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field52855.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__52682__auto__);
}));

(sablono.core.range_field52855.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.range_field52855.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field52855);

/**
 * Creates a search input field.
 */
sablono.core.search_field52860 = (function sablono$core$search_field52860(var_args){
var G__52862 = arguments.length;
switch (G__52862) {
case 1:
return sablono.core.search_field52860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field52860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field52860.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__52682__auto__);
}));

(sablono.core.search_field52860.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.search_field52860.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field52860);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field52868 = (function sablono$core$tel_field52868(var_args){
var G__52870 = arguments.length;
switch (G__52870) {
case 1:
return sablono.core.tel_field52868.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field52868.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field52868.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__52682__auto__);
}));

(sablono.core.tel_field52868.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.tel_field52868.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field52868);

/**
 * Creates a text input field.
 */
sablono.core.text_field52871 = (function sablono$core$text_field52871(var_args){
var G__52874 = arguments.length;
switch (G__52874) {
case 1:
return sablono.core.text_field52871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field52871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field52871.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__52682__auto__);
}));

(sablono.core.text_field52871.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.text_field52871.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field52871);

/**
 * Creates a time input field.
 */
sablono.core.time_field52878 = (function sablono$core$time_field52878(var_args){
var G__52882 = arguments.length;
switch (G__52882) {
case 1:
return sablono.core.time_field52878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field52878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field52878.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__52682__auto__);
}));

(sablono.core.time_field52878.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.time_field52878.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field52878);

/**
 * Creates a url input field.
 */
sablono.core.url_field52884 = (function sablono$core$url_field52884(var_args){
var G__52886 = arguments.length;
switch (G__52886) {
case 1:
return sablono.core.url_field52884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field52884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field52884.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__52682__auto__);
}));

(sablono.core.url_field52884.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.url_field52884.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field52884);

/**
 * Creates a week input field.
 */
sablono.core.week_field52890 = (function sablono$core$week_field52890(var_args){
var G__52896 = arguments.length;
switch (G__52896) {
case 1:
return sablono.core.week_field52890.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field52890.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field52890.cljs$core$IFn$_invoke$arity$1 = (function (name__52682__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__52682__auto__);
}));

(sablono.core.week_field52890.cljs$core$IFn$_invoke$arity$2 = (function (name__52682__auto__,value__52683__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__52682__auto__,value__52683__auto__);
}));

(sablono.core.week_field52890.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field52890);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box52902 = (function sablono$core$check_box52902(var_args){
var G__52905 = arguments.length;
switch (G__52905) {
case 1:
return sablono.core.check_box52902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box52902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box52902.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box52902.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box52902.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box52902.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box52902.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box52902);
/**
 * Creates a radio button.
 */
sablono.core.radio_button52909 = (function sablono$core$radio_button52909(var_args){
var G__52913 = arguments.length;
switch (G__52913) {
case 1:
return sablono.core.radio_button52909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button52909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button52909.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button52909.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button52909.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button52909.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button52909.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button52909);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__52923 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__52923);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options52924 = (function sablono$core$select_options52924(coll){
var iter__4582__auto__ = (function sablono$core$select_options52924_$_iter__52930(s__52931){
return (new cljs.core.LazySeq(null,(function (){
var s__52931__$1 = s__52931;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52931__$1);
if(temp__5735__auto__){
var s__52931__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52931__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52931__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52933 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52932 = (0);
while(true){
if((i__52932 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52932);
cljs.core.chunk_append(b__52933,((cljs.core.sequential_QMARK_(x))?(function (){var vec__52957 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52957,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52957,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52957,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options52924.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options52924.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options52924.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__53155 = (i__52932 + (1));
i__52932 = G__53155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52933),sablono$core$select_options52924_$_iter__52930(cljs.core.chunk_rest(s__52931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52933),null);
}
} else {
var x = cljs.core.first(s__52931__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__52960 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options52924.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options52924.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options52924.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options52924_$_iter__52930(cljs.core.rest(s__52931__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options52924);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down52963 = (function sablono$core$drop_down52963(var_args){
var G__53036 = arguments.length;
switch (G__53036) {
case 2:
return sablono.core.drop_down52963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down52963.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down52963.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down52963.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down52963.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down52963.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down52963);
/**
 * Creates a text area element.
 */
sablono.core.text_area53038 = (function sablono$core$text_area53038(var_args){
var G__53040 = arguments.length;
switch (G__53040) {
case 1:
return sablono.core.text_area53038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area53038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area53038.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area53038.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area53038.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area53038);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label53041 = (function sablono$core$label53041(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label53041);
/**
 * Creates a submit button.
 */
sablono.core.submit_button53042 = (function sablono$core$submit_button53042(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button53042);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button53043 = (function sablono$core$reset_button53043(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button53043);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to53044 = (function sablono$core$form_to53044(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53160 = arguments.length;
var i__4790__auto___53161 = (0);
while(true){
if((i__4790__auto___53161 < len__4789__auto___53160)){
args__4795__auto__.push((arguments[i__4790__auto___53161]));

var G__53162 = (i__4790__auto___53161 + (1));
i__4790__auto___53161 = G__53162;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to53044.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to53044.cljs$core$IFn$_invoke$arity$variadic = (function (p__53056,body){
var vec__53057 = p__53056;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53057,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53057,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__53060 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__53061 = "_method";
var G__53062 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__53060,G__53061,G__53062) : sablono.core.hidden_field.call(null,G__53060,G__53061,G__53062));
})()], null)),body));
}));

(sablono.core.form_to53044.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to53044.cljs$lang$applyTo = (function (seq53054){
var G__53055 = cljs.core.first(seq53054);
var seq53054__$1 = cljs.core.next(seq53054);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53055,seq53054__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to53044);

//# sourceMappingURL=sablono.core.js.map
