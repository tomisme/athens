goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__46721 = (line + (1));
var G__46722 = (1);
var G__46723 = (counter + (1));
line = G__46721;
col = G__46722;
counter = G__46723;
continue;
} else {
var G__46724 = line;
var G__46725 = (col + (1));
var G__46726 = (counter + (1));
line = G__46724;
col = G__46725;
counter = G__46726;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__46727 = cljs.core.next(chars);
var G__46728 = (n__$1 - (1));
chars = G__46727;
n__$1 = G__46728;
continue;
} else {
var G__46729 = cljs.core.next(chars);
var G__46730 = n__$1;
chars = G__46729;
n__$1 = G__46730;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__46700){
var map__46701 = p__46700;
var map__46701__$1 = (((((!((map__46701 == null))))?(((((map__46701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46701):map__46701);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46701__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46701__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__46704_46754 = cljs.core.seq(full_reasons);
var chunk__46705_46755 = null;
var count__46706_46756 = (0);
var i__46707_46757 = (0);
while(true){
if((i__46707_46757 < count__46706_46756)){
var r_46758 = chunk__46705_46755.cljs$core$IIndexed$_nth$arity$2(null,i__46707_46757);
instaparse.failure.print_reason(r_46758);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46763 = seq__46704_46754;
var G__46764 = chunk__46705_46755;
var G__46765 = count__46706_46756;
var G__46766 = (i__46707_46757 + (1));
seq__46704_46754 = G__46763;
chunk__46705_46755 = G__46764;
count__46706_46756 = G__46765;
i__46707_46757 = G__46766;
continue;
} else {
var temp__5735__auto___46767 = cljs.core.seq(seq__46704_46754);
if(temp__5735__auto___46767){
var seq__46704_46768__$1 = temp__5735__auto___46767;
if(cljs.core.chunked_seq_QMARK_(seq__46704_46768__$1)){
var c__4609__auto___46769 = cljs.core.chunk_first(seq__46704_46768__$1);
var G__46770 = cljs.core.chunk_rest(seq__46704_46768__$1);
var G__46771 = c__4609__auto___46769;
var G__46772 = cljs.core.count(c__4609__auto___46769);
var G__46773 = (0);
seq__46704_46754 = G__46770;
chunk__46705_46755 = G__46771;
count__46706_46756 = G__46772;
i__46707_46757 = G__46773;
continue;
} else {
var r_46774 = cljs.core.first(seq__46704_46768__$1);
instaparse.failure.print_reason(r_46774);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46775 = cljs.core.next(seq__46704_46768__$1);
var G__46776 = null;
var G__46777 = (0);
var G__46778 = (0);
seq__46704_46754 = G__46775;
chunk__46705_46755 = G__46776;
count__46706_46756 = G__46777;
i__46707_46757 = G__46778;
continue;
}
} else {
}
}
break;
}

var seq__46712 = cljs.core.seq(partial_reasons);
var chunk__46713 = null;
var count__46714 = (0);
var i__46715 = (0);
while(true){
if((i__46715 < count__46714)){
var r = chunk__46713.cljs$core$IIndexed$_nth$arity$2(null,i__46715);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46779 = seq__46712;
var G__46780 = chunk__46713;
var G__46781 = count__46714;
var G__46782 = (i__46715 + (1));
seq__46712 = G__46779;
chunk__46713 = G__46780;
count__46714 = G__46781;
i__46715 = G__46782;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46712);
if(temp__5735__auto__){
var seq__46712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46712__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46712__$1);
var G__46790 = cljs.core.chunk_rest(seq__46712__$1);
var G__46791 = c__4609__auto__;
var G__46792 = cljs.core.count(c__4609__auto__);
var G__46793 = (0);
seq__46712 = G__46790;
chunk__46713 = G__46791;
count__46714 = G__46792;
i__46715 = G__46793;
continue;
} else {
var r = cljs.core.first(seq__46712__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46794 = cljs.core.next(seq__46712__$1);
var G__46795 = null;
var G__46796 = (0);
var G__46797 = (0);
seq__46712 = G__46794;
chunk__46713 = G__46795;
count__46714 = G__46796;
i__46715 = G__46797;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
