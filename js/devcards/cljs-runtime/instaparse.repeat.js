goog.provide('instaparse.repeat');
goog.require('cljs.core');
goog.require('instaparse.gll');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.viz');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
instaparse.repeat.empty_result_QMARK_ = (function instaparse$repeat$empty_result_QMARK_(result){
return ((((cljs.core.vector_QMARK_(result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(result),(1))))) || (((cljs.core.map_QMARK_(result)) && (cljs.core.contains_QMARK_(result,new cljs.core.Keyword(null,"tag","tag",-1290361223))) && (cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"content","content",15833224)))))) || (cljs.core.empty_QMARK_(result)));
});
instaparse.repeat.failure_signal = instaparse.gll.__GT_Failure(null,null);
instaparse.repeat.get_end = (function instaparse$repeat$get_end(var_args){
var G__57366 = arguments.length;
switch (G__57366) {
case 1:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1 = (function (parse){
var vec__57367 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57367,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57367,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$(end);
} else {
return cljs.core.count(parse);
}
}));

(instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$2 = (function (parse,index){
var vec__57370 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57370,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57370,(1),null);
if(cljs.core.truth_(end)){
return cljs.core.long$(end);
} else {
return (index + cljs.core.count(parse));
}
}));

(instaparse.repeat.get_end.cljs$lang$maxFixedArity = 2);

instaparse.repeat.parse_from_index = (function instaparse$repeat$parse_from_index(grammar,initial_parser,text,segment,index){
var tramp = instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3(grammar,text,segment);
instaparse.gll.push_listener(tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,initial_parser], null),instaparse.gll.TopListener(tramp));

return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1(tramp);
});
/**
 * Returns either:
 * [a-parse end-index a-list-of-valid-follow-up-parses]
 * [a-parse end-index nil] (successfully reached end of text)
 * nil (hit a dead-end with this strategy)
 */
instaparse.repeat.select_parse = (function instaparse$repeat$select_parse(grammar,initial_parser,text,segment,index,parses){
var length = cljs.core.count(text);
var parses__$1 = cljs.core.seq(parses);
while(true){
if(parses__$1){
var parse = cljs.core.first(parses__$1);
var vec__57373 = instaparse.viz.span(parse);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57373,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57373,(1),null);
var end__$1 = (cljs.core.truth_(end)?end:(index + cljs.core.count(parse)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end__$1,length)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,null], null);
} else {
var temp__5733__auto__ = cljs.core.seq(instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,end__$1));
if(temp__5733__auto__){
var follow_ups = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,follow_ups], null);
} else {
var G__57434 = cljs.core.next(parses__$1);
parses__$1 = G__57434;
continue;
}

}
} else {
return null;
}
break;
}
});
instaparse.repeat.repeat_parse_hiccup = (function instaparse$repeat$repeat_parse_hiccup(var_args){
var G__57377 = arguments.length;
switch (G__57377) {
case 5:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
}));

(instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null));
var G__57381 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__57382 = G__57381;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57382,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57382,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57382,(2),null);
var selection = vec__57382;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__57381__$1 = G__57381;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__57388 = G__57381__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57388,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57388,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57388,(2),null);
var selection__$1 = vec__57388;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__57436 = cljs.core.long$(end__$1);
var G__57437 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__57438 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__57436;
parses__$1 = G__57437;
G__57381__$1 = G__57438;
continue;

}
}
}
break;
}
}));

(instaparse.repeat.repeat_parse_hiccup.cljs$lang$maxFixedArity = 6);

instaparse.repeat.repeat_parse_enlive = (function instaparse$repeat$repeat_parse_enlive(var_args){
var G__57392 = arguments.length;
switch (G__57392) {
case 5:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,root_tag,text,segment){
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6(grammar,initial_parser,root_tag,text,segment,(0));
}));

(instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6 = (function (grammar,initial_parser,root_tag,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__57396 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__57397 = G__57396;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57397,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57397,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57397,(2),null);
var selection = vec__57397;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__57396__$1 = G__57396;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__57403 = G__57396__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57403,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57403,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57403,(2),null);
var selection__$1 = vec__57403;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.seq(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__57440 = cljs.core.long$(end__$1);
var G__57441 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__57442 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__57440;
parses__$1 = G__57441;
G__57396__$1 = G__57442;
continue;

}
}
}
break;
}
}));

(instaparse.repeat.repeat_parse_enlive.cljs$lang$maxFixedArity = 6);

instaparse.repeat.repeat_parse_no_tag = (function instaparse$repeat$repeat_parse_no_tag(var_args){
var G__57407 = arguments.length;
switch (G__57407) {
case 4:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,text,segment){
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,text,segment,(0));
}));

(instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,text,segment,index){
var length = cljs.core.count(text);
var first_result = instaparse.repeat.parse_from_index(grammar,initial_parser,text,segment,index);
var index__$1 = cljs.core.long$(index);
var parses = instaparse.auto_flatten_seq.EMPTY;
var G__57411 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,index__$1,first_result);
var vec__57412 = G__57411;
var parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57412,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57412,(1),null);
var follow_ups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57412,(2),null);
var selection = vec__57412;
var index__$2 = index__$1;
var parses__$1 = parses;
var G__57411__$1 = G__57411;
while(true){
var index__$3 = index__$2;
var parses__$2 = parses__$1;
var vec__57418 = G__57411__$1;
var parse__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57418,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57418,(1),null);
var follow_ups__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57418,(2),null);
var selection__$1 = vec__57418;
if((selection__$1 == null)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index__$3,end__$1)){
return instaparse.repeat.failure_signal;
} else {
if((follow_ups__$1 == null)){
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else {
var G__57444 = cljs.core.long$(end__$1);
var G__57445 = instaparse.auto_flatten_seq.conj_flat(parses__$2,parse__$1);
var G__57446 = instaparse.repeat.select_parse(grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__57444;
parses__$1 = G__57445;
G__57411__$1 = G__57446;
continue;

}
}
}
break;
}
}));

(instaparse.repeat.repeat_parse_no_tag.cljs$lang$maxFixedArity = 5);

instaparse.repeat.repeat_parse = (function instaparse$repeat$repeat_parse(var_args){
var G__57422 = arguments.length;
switch (G__57422) {
case 4:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4 = (function (grammar,initial_parser,output_format,text){
return instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4(grammar,initial_parser,text,instaparse.gll.text__GT_segment(text));
}));

(instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5 = (function (grammar,initial_parser,output_format,root_tag,text){
if(cljs.core.truth_((function (){var fexpr__57423 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null);
return (fexpr__57423.cljs$core$IFn$_invoke$arity$1 ? fexpr__57423.cljs$core$IFn$_invoke$arity$1(output_format) : fexpr__57423.call(null,output_format));
})())){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} output-format)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238))){
return instaparse.repeat.repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment(text));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output_format,new cljs.core.Keyword(null,"enlive","enlive",1679023921))){
return instaparse.repeat.repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5(grammar,initial_parser,root_tag,text,instaparse.gll.text__GT_segment(text));
} else {
return null;
}
}
}));

(instaparse.repeat.repeat_parse.cljs$lang$maxFixedArity = 5);

instaparse.repeat.repeat_parse_with_header = (function instaparse$repeat$repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,root_tag,text){
var segment = instaparse.gll.text__GT_segment(text);
var length = cljs.core.count(text);
var header_results = instaparse.repeat.parse_from_index(grammar,header_parser,text,segment,(0));
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(header_results);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(header_parser);
}
})())){
return instaparse.repeat.failure_signal;
} else {
var header_result = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,instaparse.repeat.get_end,header_results);
var end = instaparse.repeat.get_end.cljs$core$IFn$_invoke$arity$1(header_result);
var repeat_result = instaparse.repeat.repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser),text,segment,end);
var span_meta = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null);
if((((repeat_result instanceof instaparse.gll.Failure)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser),new cljs.core.Keyword(null,"star","star",279424429))) && (instaparse.repeat.empty_result_QMARK_(repeat_result)))))){
return instaparse.repeat.failure_signal;
} else {
var G__57424 = output_format;
var G__57424__$1 = (((G__57424 instanceof cljs.core.Keyword))?G__57424.fqn:null);
switch (G__57424__$1) {
case "enlive":
return instaparse.gll.safe_with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,header_result),repeat_result)], null),span_meta);

break;
case "hiccup":
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,header_result),repeat_result)),span_meta);

break;
default:
return instaparse.gll.safe_with_meta(instaparse.auto_flatten_seq.conj_flat(instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,header_result),repeat_result),span_meta);

}
}
}
});
instaparse.repeat.try_repeating_parse_strategy_with_header = (function instaparse$repeat$try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format){

var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(start_rule);
var repeating_parser = cljs.core.last(parsers);
if(cljs.core.not(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"cat","cat",-1457810207)))?(function (){var and__4174__auto__ = (function (){var G__57432 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser);
var fexpr__57431 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"star","star",279424429),null,new cljs.core.Keyword(null,"plus","plus",211540661),null], null), null);
return (fexpr__57431.cljs$core$IFn$_invoke$arity$1 ? fexpr__57431.cljs$core$IFn$_invoke$arity$1(G__57432) : fexpr__57431.call(null,G__57432));
})();
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(repeating_parser))) && (cljs.core.not(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser)))));
} else {
return and__4174__auto__;
}
})():false))){
return instaparse.repeat.failure_signal;
} else {
var header_parser = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.butlast(parsers));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,null,start_production,text);
} else {
return instaparse.repeat.repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,start_production,text);
}
}
});
instaparse.repeat.try_repeating_parse_strategy = (function instaparse$repeat$try_repeating_parse_strategy(parser,text,start_production){
var grammar = new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser);
var output_format = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser);
var start_rule = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grammar,start_production);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(start_rule),true)){
return instaparse.repeat.failure_signal;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429))){
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661))){
var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$4(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
if(instaparse.repeat.empty_result_QMARK_(result)){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429))){
return instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661))){
var result = instaparse.repeat.repeat_parse.cljs$core$IFn$_invoke$arity$5(grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
if(instaparse.repeat.empty_result_QMARK_(result)){
return instaparse.repeat.failure_signal;
} else {
return result;
}
} else {
return instaparse.repeat.try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format);

}
}
}
}
});
instaparse.repeat.used_memory_optimization_QMARK_ = (function instaparse$repeat$used_memory_optimization_QMARK_(tree){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tree)));
});

//# sourceMappingURL=instaparse.repeat.js.map
