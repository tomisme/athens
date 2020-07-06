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
var G__41700__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41512 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41513 = cljs.core.seq(vec__41512);
var first__41514 = cljs.core.first(seq__41513);
var seq__41513__$1 = cljs.core.next(seq__41513);
var tag = first__41514;
var body = seq__41513__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__41700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41701__i = 0, G__41701__a = new Array(arguments.length -  0);
while (G__41701__i < G__41701__a.length) {G__41701__a[G__41701__i] = arguments[G__41701__i + 0]; ++G__41701__i;}
  args = new cljs.core.IndexedSeq(G__41701__a,0,null);
} 
return G__41700__delegate.call(this,args);};
G__41700.cljs$lang$maxFixedArity = 0;
G__41700.cljs$lang$applyTo = (function (arglist__41702){
var args = cljs.core.seq(arglist__41702);
return G__41700__delegate(args);
});
G__41700.cljs$core$IFn$_invoke$arity$variadic = G__41700__delegate;
return G__41700;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__41518(s__41519){
return (new cljs.core.LazySeq(null,(function (){
var s__41519__$1 = s__41519;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41519__$1);
if(temp__5735__auto__){
var s__41519__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41519__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41519__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41521 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41520 = (0);
while(true){
if((i__41520 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41520);
cljs.core.chunk_append(b__41521,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41703 = (i__41520 + (1));
i__41520 = G__41703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41521),sablono$core$update_arglists_$_iter__41518(cljs.core.chunk_rest(s__41519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41521),null);
}
} else {
var args = cljs.core.first(s__41519__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41518(cljs.core.rest(s__41519__$2)));
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
var len__4789__auto___41704 = arguments.length;
var i__4790__auto___41705 = (0);
while(true){
if((i__4790__auto___41705 < len__4789__auto___41704)){
args__4795__auto__.push((arguments[i__4790__auto___41705]));

var G__41706 = (i__4790__auto___41705 + (1));
i__4790__auto___41705 = G__41706;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__41531(s__41532){
return (new cljs.core.LazySeq(null,(function (){
var s__41532__$1 = s__41532;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41532__$1);
if(temp__5735__auto__){
var s__41532__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41532__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41532__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41534 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41533 = (0);
while(true){
if((i__41533 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41533);
cljs.core.chunk_append(b__41534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41707 = (i__41533 + (1));
i__41533 = G__41707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41534),sablono$core$iter__41531(cljs.core.chunk_rest(s__41532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41534),null);
}
} else {
var style = cljs.core.first(s__41532__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41531(cljs.core.rest(s__41532__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41529){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41529));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__41554 = goog.dom.getDocument().body;
var G__41555 = (function (){var G__41556 = "script";
var G__41557 = ({"src": src});
return goog.dom.createDom(G__41556,G__41557);
})();
return goog.dom.appendChild(G__41554,G__41555);
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
sablono.core.link_to41559 = (function sablono$core$link_to41559(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41711 = arguments.length;
var i__4790__auto___41712 = (0);
while(true){
if((i__4790__auto___41712 < len__4789__auto___41711)){
args__4795__auto__.push((arguments[i__4790__auto___41712]));

var G__41713 = (i__4790__auto___41712 + (1));
i__4790__auto___41712 = G__41713;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41559.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to41559.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41559.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41559.cljs$lang$applyTo = (function (seq41562){
var G__41563 = cljs.core.first(seq41562);
var seq41562__$1 = cljs.core.next(seq41562);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41563,seq41562__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41559);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41569 = (function sablono$core$mail_to41569(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41714 = arguments.length;
var i__4790__auto___41715 = (0);
while(true){
if((i__4790__auto___41715 < len__4789__auto___41714)){
args__4795__auto__.push((arguments[i__4790__auto___41715]));

var G__41716 = (i__4790__auto___41715 + (1));
i__4790__auto___41715 = G__41716;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41569.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to41569.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41577){
var vec__41578 = p__41577;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41569.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41569.cljs$lang$applyTo = (function (seq41571){
var G__41572 = cljs.core.first(seq41571);
var seq41571__$1 = cljs.core.next(seq41571);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41572,seq41571__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41569);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41581 = (function sablono$core$unordered_list41581(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list41581_$_iter__41582(s__41583){
return (new cljs.core.LazySeq(null,(function (){
var s__41583__$1 = s__41583;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41583__$1);
if(temp__5735__auto__){
var s__41583__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41583__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41583__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41585 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41584 = (0);
while(true){
if((i__41584 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41584);
cljs.core.chunk_append(b__41585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41717 = (i__41584 + (1));
i__41584 = G__41717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41585),sablono$core$unordered_list41581_$_iter__41582(cljs.core.chunk_rest(s__41583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41585),null);
}
} else {
var x = cljs.core.first(s__41583__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41581_$_iter__41582(cljs.core.rest(s__41583__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41581);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41592 = (function sablono$core$ordered_list41592(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list41592_$_iter__41593(s__41594){
return (new cljs.core.LazySeq(null,(function (){
var s__41594__$1 = s__41594;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41594__$1);
if(temp__5735__auto__){
var s__41594__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41594__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41594__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41596 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41595 = (0);
while(true){
if((i__41595 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41595);
cljs.core.chunk_append(b__41596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41718 = (i__41595 + (1));
i__41595 = G__41718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41596),sablono$core$ordered_list41592_$_iter__41593(cljs.core.chunk_rest(s__41594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41596),null);
}
} else {
var x = cljs.core.first(s__41594__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41592_$_iter__41593(cljs.core.rest(s__41594__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41592);
/**
 * Create an image element.
 */
sablono.core.image41603 = (function sablono$core$image41603(var_args){
var G__41605 = arguments.length;
switch (G__41605) {
case 1:
return sablono.core.image41603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41603.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41603.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41603.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41603);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41606_SHARP_,p2__41607_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41606_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41607_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41608_SHARP_,p2__41609_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41608_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41609_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41611 = arguments.length;
switch (G__41611) {
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
sablono.core.color_field41612 = (function sablono$core$color_field41612(var_args){
var G__41614 = arguments.length;
switch (G__41614) {
case 1:
return sablono.core.color_field41612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41612.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41504__auto__);
}));

(sablono.core.color_field41612.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.color_field41612.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41612);

/**
 * Creates a date input field.
 */
sablono.core.date_field41615 = (function sablono$core$date_field41615(var_args){
var G__41617 = arguments.length;
switch (G__41617) {
case 1:
return sablono.core.date_field41615.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41615.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41615.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41504__auto__);
}));

(sablono.core.date_field41615.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.date_field41615.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41615);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41618 = (function sablono$core$datetime_field41618(var_args){
var G__41620 = arguments.length;
switch (G__41620) {
case 1:
return sablono.core.datetime_field41618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41618.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41504__auto__);
}));

(sablono.core.datetime_field41618.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.datetime_field41618.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41618);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41621 = (function sablono$core$datetime_local_field41621(var_args){
var G__41623 = arguments.length;
switch (G__41623) {
case 1:
return sablono.core.datetime_local_field41621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41621.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41504__auto__);
}));

(sablono.core.datetime_local_field41621.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.datetime_local_field41621.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41621);

/**
 * Creates a email input field.
 */
sablono.core.email_field41624 = (function sablono$core$email_field41624(var_args){
var G__41626 = arguments.length;
switch (G__41626) {
case 1:
return sablono.core.email_field41624.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41624.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41624.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41504__auto__);
}));

(sablono.core.email_field41624.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.email_field41624.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41624);

/**
 * Creates a file input field.
 */
sablono.core.file_field41627 = (function sablono$core$file_field41627(var_args){
var G__41629 = arguments.length;
switch (G__41629) {
case 1:
return sablono.core.file_field41627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41627.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41504__auto__);
}));

(sablono.core.file_field41627.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.file_field41627.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41627);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41630 = (function sablono$core$hidden_field41630(var_args){
var G__41632 = arguments.length;
switch (G__41632) {
case 1:
return sablono.core.hidden_field41630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field41630.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41504__auto__);
}));

(sablono.core.hidden_field41630.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.hidden_field41630.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field41630);

/**
 * Creates a month input field.
 */
sablono.core.month_field41633 = (function sablono$core$month_field41633(var_args){
var G__41635 = arguments.length;
switch (G__41635) {
case 1:
return sablono.core.month_field41633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field41633.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41504__auto__);
}));

(sablono.core.month_field41633.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.month_field41633.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field41633);

/**
 * Creates a number input field.
 */
sablono.core.number_field41636 = (function sablono$core$number_field41636(var_args){
var G__41638 = arguments.length;
switch (G__41638) {
case 1:
return sablono.core.number_field41636.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41636.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field41636.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41504__auto__);
}));

(sablono.core.number_field41636.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.number_field41636.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field41636);

/**
 * Creates a password input field.
 */
sablono.core.password_field41639 = (function sablono$core$password_field41639(var_args){
var G__41641 = arguments.length;
switch (G__41641) {
case 1:
return sablono.core.password_field41639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field41639.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41504__auto__);
}));

(sablono.core.password_field41639.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.password_field41639.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field41639);

/**
 * Creates a range input field.
 */
sablono.core.range_field41642 = (function sablono$core$range_field41642(var_args){
var G__41644 = arguments.length;
switch (G__41644) {
case 1:
return sablono.core.range_field41642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field41642.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41504__auto__);
}));

(sablono.core.range_field41642.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.range_field41642.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field41642);

/**
 * Creates a search input field.
 */
sablono.core.search_field41645 = (function sablono$core$search_field41645(var_args){
var G__41647 = arguments.length;
switch (G__41647) {
case 1:
return sablono.core.search_field41645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field41645.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41504__auto__);
}));

(sablono.core.search_field41645.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.search_field41645.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field41645);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41648 = (function sablono$core$tel_field41648(var_args){
var G__41650 = arguments.length;
switch (G__41650) {
case 1:
return sablono.core.tel_field41648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field41648.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41504__auto__);
}));

(sablono.core.tel_field41648.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.tel_field41648.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field41648);

/**
 * Creates a text input field.
 */
sablono.core.text_field41651 = (function sablono$core$text_field41651(var_args){
var G__41653 = arguments.length;
switch (G__41653) {
case 1:
return sablono.core.text_field41651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field41651.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41504__auto__);
}));

(sablono.core.text_field41651.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.text_field41651.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field41651);

/**
 * Creates a time input field.
 */
sablono.core.time_field41654 = (function sablono$core$time_field41654(var_args){
var G__41656 = arguments.length;
switch (G__41656) {
case 1:
return sablono.core.time_field41654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field41654.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41504__auto__);
}));

(sablono.core.time_field41654.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.time_field41654.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field41654);

/**
 * Creates a url input field.
 */
sablono.core.url_field41657 = (function sablono$core$url_field41657(var_args){
var G__41659 = arguments.length;
switch (G__41659) {
case 1:
return sablono.core.url_field41657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field41657.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41504__auto__);
}));

(sablono.core.url_field41657.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.url_field41657.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field41657);

/**
 * Creates a week input field.
 */
sablono.core.week_field41660 = (function sablono$core$week_field41660(var_args){
var G__41662 = arguments.length;
switch (G__41662) {
case 1:
return sablono.core.week_field41660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field41660.cljs$core$IFn$_invoke$arity$1 = (function (name__41504__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41504__auto__);
}));

(sablono.core.week_field41660.cljs$core$IFn$_invoke$arity$2 = (function (name__41504__auto__,value__41505__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41504__auto__,value__41505__auto__);
}));

(sablono.core.week_field41660.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field41660);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41663 = (function sablono$core$check_box41663(var_args){
var G__41665 = arguments.length;
switch (G__41665) {
case 1:
return sablono.core.check_box41663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41663.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box41663.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box41663.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41663.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box41663.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box41663);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41666 = (function sablono$core$radio_button41666(var_args){
var G__41668 = arguments.length;
switch (G__41668) {
case 1:
return sablono.core.radio_button41666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41666.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button41666.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button41666.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41666.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button41666.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button41666);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__41669 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__41669);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41670 = (function sablono$core$select_options41670(coll){
var iter__4582__auto__ = (function sablono$core$select_options41670_$_iter__41671(s__41672){
return (new cljs.core.LazySeq(null,(function (){
var s__41672__$1 = s__41672;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41672__$1);
if(temp__5735__auto__){
var s__41672__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41672__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41672__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41674 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41673 = (0);
while(true){
if((i__41673 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41673);
cljs.core.chunk_append(b__41674,((cljs.core.sequential_QMARK_(x))?(function (){var vec__41675 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41675,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41675,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41675,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41670.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41670.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41670.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41746 = (i__41673 + (1));
i__41673 = G__41746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41674),sablono$core$select_options41670_$_iter__41671(cljs.core.chunk_rest(s__41672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41674),null);
}
} else {
var x = cljs.core.first(s__41672__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__41678 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41678,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41678,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41678,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options41670.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options41670.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options41670.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41670_$_iter__41671(cljs.core.rest(s__41672__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options41670);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41681 = (function sablono$core$drop_down41681(var_args){
var G__41683 = arguments.length;
switch (G__41683) {
case 2:
return sablono.core.drop_down41681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41681.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down41681.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41681.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down41681.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down41681.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down41681);
/**
 * Creates a text area element.
 */
sablono.core.text_area41684 = (function sablono$core$text_area41684(var_args){
var G__41686 = arguments.length;
switch (G__41686) {
case 1:
return sablono.core.text_area41684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area41684.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area41684.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area41684.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area41684);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41687 = (function sablono$core$label41687(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label41687);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41688 = (function sablono$core$submit_button41688(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button41688);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41689 = (function sablono$core$reset_button41689(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button41689);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41690 = (function sablono$core$form_to41690(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41749 = arguments.length;
var i__4790__auto___41750 = (0);
while(true){
if((i__4790__auto___41750 < len__4789__auto___41749)){
args__4795__auto__.push((arguments[i__4790__auto___41750]));

var G__41751 = (i__4790__auto___41750 + (1));
i__4790__auto___41750 = G__41751;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41690.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to41690.cljs$core$IFn$_invoke$arity$variadic = (function (p__41693,body){
var vec__41694 = p__41693;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41694,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41694,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__41697 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__41698 = "_method";
var G__41699 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__41697,G__41698,G__41699) : sablono.core.hidden_field.call(null,G__41697,G__41698,G__41699));
})()], null)),body));
}));

(sablono.core.form_to41690.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to41690.cljs$lang$applyTo = (function (seq41691){
var G__41692 = cljs.core.first(seq41691);
var seq41691__$1 = cljs.core.next(seq41691);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41692,seq41691__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to41690);

//# sourceMappingURL=sablono.core.js.map
