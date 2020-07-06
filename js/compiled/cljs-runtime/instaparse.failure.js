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
var G__73862 = (line + (1));
var G__73863 = (1);
var G__73864 = (counter + (1));
line = G__73862;
col = G__73863;
counter = G__73864;
continue;
} else {
var G__73865 = line;
var G__73866 = (col + (1));
var G__73867 = (counter + (1));
line = G__73865;
col = G__73866;
counter = G__73867;
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
var G__73868 = cljs.core.next(chars);
var G__73869 = (n__$1 - (1));
chars = G__73868;
n__$1 = G__73869;
continue;
} else {
var G__73870 = cljs.core.next(chars);
var G__73871 = n__$1;
chars = G__73870;
n__$1 = G__73871;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__73841){
var map__73842 = p__73841;
var map__73842__$1 = (((((!((map__73842 == null))))?(((((map__73842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73842):map__73842);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73842__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73842__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73842__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73842__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__73844_73889 = cljs.core.seq(full_reasons);
var chunk__73845_73890 = null;
var count__73846_73891 = (0);
var i__73847_73892 = (0);
while(true){
if((i__73847_73892 < count__73846_73891)){
var r_73893 = chunk__73845_73890.cljs$core$IIndexed$_nth$arity$2(null,i__73847_73892);
instaparse.failure.print_reason(r_73893);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__73894 = seq__73844_73889;
var G__73895 = chunk__73845_73890;
var G__73896 = count__73846_73891;
var G__73897 = (i__73847_73892 + (1));
seq__73844_73889 = G__73894;
chunk__73845_73890 = G__73895;
count__73846_73891 = G__73896;
i__73847_73892 = G__73897;
continue;
} else {
var temp__5735__auto___73898 = cljs.core.seq(seq__73844_73889);
if(temp__5735__auto___73898){
var seq__73844_73901__$1 = temp__5735__auto___73898;
if(cljs.core.chunked_seq_QMARK_(seq__73844_73901__$1)){
var c__4609__auto___73902 = cljs.core.chunk_first(seq__73844_73901__$1);
var G__73909 = cljs.core.chunk_rest(seq__73844_73901__$1);
var G__73910 = c__4609__auto___73902;
var G__73911 = cljs.core.count(c__4609__auto___73902);
var G__73912 = (0);
seq__73844_73889 = G__73909;
chunk__73845_73890 = G__73910;
count__73846_73891 = G__73911;
i__73847_73892 = G__73912;
continue;
} else {
var r_73913 = cljs.core.first(seq__73844_73901__$1);
instaparse.failure.print_reason(r_73913);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__73914 = cljs.core.next(seq__73844_73901__$1);
var G__73915 = null;
var G__73916 = (0);
var G__73917 = (0);
seq__73844_73889 = G__73914;
chunk__73845_73890 = G__73915;
count__73846_73891 = G__73916;
i__73847_73892 = G__73917;
continue;
}
} else {
}
}
break;
}

var seq__73848 = cljs.core.seq(partial_reasons);
var chunk__73849 = null;
var count__73850 = (0);
var i__73851 = (0);
while(true){
if((i__73851 < count__73850)){
var r = chunk__73849.cljs$core$IIndexed$_nth$arity$2(null,i__73851);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__73918 = seq__73848;
var G__73919 = chunk__73849;
var G__73920 = count__73850;
var G__73921 = (i__73851 + (1));
seq__73848 = G__73918;
chunk__73849 = G__73919;
count__73850 = G__73920;
i__73851 = G__73921;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73848);
if(temp__5735__auto__){
var seq__73848__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73848__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__73848__$1);
var G__73925 = cljs.core.chunk_rest(seq__73848__$1);
var G__73926 = c__4609__auto__;
var G__73927 = cljs.core.count(c__4609__auto__);
var G__73928 = (0);
seq__73848 = G__73925;
chunk__73849 = G__73926;
count__73850 = G__73927;
i__73851 = G__73928;
continue;
} else {
var r = cljs.core.first(seq__73848__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__73929 = cljs.core.next(seq__73848__$1);
var G__73930 = null;
var G__73931 = (0);
var G__73932 = (0);
seq__73848 = G__73929;
chunk__73849 = G__73930;
count__73850 = G__73931;
i__73851 = G__73932;
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
