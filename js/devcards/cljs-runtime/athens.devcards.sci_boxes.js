goog.provide('athens.devcards.sci_boxes');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('sci.core');
athens.devcards.sci_boxes.log = console.log;
athens.devcards.sci_boxes.trace = (function athens$devcards$sci_boxes$trace(x){
(athens.devcards.sci_boxes.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.sci_boxes.log.cljs$core$IFn$_invoke$arity$1(x) : athens.devcards.sci_boxes.log.call(null,x));

return x;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.sci_boxes","athens.devcards.sci_boxes",1923834609),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in connecting mini SCI environments\n\n  Let's say you could put executable code in Athens' blocks.\n\n  Some questions:\n   - In what order do we evaluate our blocks?\n   - How do we pass data in and out of our blocks?\n   - How do we handle async code?\n\n  Attempted approach:\n   - Blocks are passed the evaluated result of their parent (`*1`)\n\n   Some other approaches:\n   - Blocks inherit the environment of their parent\n   - Blocks mutate a global environment\n   - Blocks are babashka pods?\n\n  Fun stuff to try:\n   - Pass in the datascript connection\n   - `spit`/`slurp` to IPFS etc.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.sci_boxes","athens.devcards.sci_boxes",1923834609),new cljs.core.Keyword(null,"sci","sci",-1317785218)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sci",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Small Clojure Interpreter\n   https://github.com/borkdude/sci",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
/**
 * Returns a new vector with the element at 'index' removed.
 * 
 *   (remove-from-vec [:a :b :c] 1)  =>  [:a :c]
 */
athens.devcards.sci_boxes.remove_from_vec = (function athens$devcards$sci_boxes$remove_from_vec(v,index){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(index + (1)))));
});
athens.devcards.sci_boxes.index_of = (function athens$devcards$sci_boxes$index_of(col,val){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,val)){
return idx;
} else {
return null;
}
}),col));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.sci_boxes","athens.devcards.sci_boxes",1923834609),new cljs.core.Keyword(null,"sci-examples","sci-examples",1696779660)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sci-examples",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var iter__4582__auto__ = (function athens$devcards$sci_boxes$iter__38966(s__38967){
return (new cljs.core.LazySeq(null,(function (){
var s__38967__$1 = s__38967;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38967__$1);
if(temp__5735__auto__){
var s__38967__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38967__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38967__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38969 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38968 = (0);
while(true){
if((i__38968 < size__4581__auto__)){
var vec__38970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38968);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,(1),null);
cljs.core.chunk_append(b__38969,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"result","result",1415092211),sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,opts)], null),(cljs.core.truth_(opts)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),opts], null):null)], 0)));

var G__39020 = (i__38968 + (1));
i__38968 = G__39020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38969),athens$devcards$sci_boxes$iter__38966(cljs.core.chunk_rest(s__38967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38969),null);
}
} else {
var vec__38973 = cljs.core.first(s__38967__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38973,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38973,(1),null);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"result","result",1415092211),sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,opts)], null),(cljs.core.truth_(opts)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),opts], null):null)], 0)),athens$devcards$sci_boxes$iter__38966(cljs.core.rest(s__38967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(inc 1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"x","x",-555367584,null),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{:hiccup [:span \"Hello\"]}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(def a 1)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(require '[lib]) lib/msg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"lib","lib",1832340253,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msg","msg",254428083,null),"hi"], null)], null)], null)], null)], null));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.sci_boxes.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 5, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105),(57),new cljs.core.Keyword(null,"left-paren","left-paren",1477527155),(219),new cljs.core.Keyword(null,"left-brace","left-brace",1870925954)], null);
athens.devcards.sci_boxes.empty_box = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"",new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),cljs.core.PersistentVector.EMPTY], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.sci_boxes","athens.devcards.sci_boxes",1923834609),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  ## Experiment #1\n   - A tree of boxes\n   - If a box's `:str-content` begins with `:sci`,\n     evaluate the rest of the string with SCI and assign it to `:result`\n   - Child boxes are passed their parent's `:result` as `*1`, like a REPL\n   - Every time a box's content changes, naively re-evaluate the whole tree top to bottom!\n   - If a box's `:result` is a map with a `hiccup` key, render it after the box\n\n  ENTER key makes a new sibling (if not root)\n\n  SHIFT-ENTER to make a new line\n\n  BACKSPACE in an empty box deletes it\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.sci_boxes !== 'undefined') && (typeof athens.devcards.sci_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.sci_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),(4),new cljs.core.Keyword(null,"boxes","boxes",-420813822),new cljs.core.PersistentArrayMap(null, 4, [(0),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.sci_boxes.empty_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.Keyword(null,"str-content","str-content",297549190),":sci {:message \"\uD83C\uDF3B\" :size 70}"], null)], 0)),(1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.sci_boxes.empty_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),new cljs.core.Keyword(null,"str-content","str-content",297549190),":sci (merge *1 {:hiccup [:div {:style {:font-size (:size *1)}} (:message *1)]})"], null)], 0)),(2),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.sci_boxes.empty_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"I am just a \uD83C\uDF43"], null)], 0)),(3),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.sci_boxes.empty_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),":sci (:message *1)"], null)], 0))], null)], null));
}
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.sci_boxes","athens.devcards.sci_boxes",1923834609),new cljs.core.Keyword(null,"box-state*","box-state*",-2117883271)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"box-state*",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.sci_boxes.box_state_STAR_,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.sci_boxes.get_parent_id = (function athens$devcards$sci_boxes$get_parent_id(boxes,child_id){
return cljs.core.some((function (p__38976){
var vec__38977 = p__38976;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38977,(0),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38977,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([child_id]),new cljs.core.Keyword(null,"children-ids","children-ids",-293558198).cljs$core$IFn$_invoke$arity$1(box)))){
return id;
} else {
return null;
}
}),boxes);
});
athens.devcards.sci_boxes.sci_node_QMARK_ = (function athens$devcards$sci_boxes$sci_node_QMARK_(p__38980){
var map__38981 = p__38980;
var map__38981__$1 = (((((!((map__38981 == null))))?(((((map__38981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38981):map__38981);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38981__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
return clojure.string.starts_with_QMARK_(str_content,":sci");
});
athens.devcards.sci_boxes.eval_box = (function athens$devcards$sci_boxes$eval_box(p__38983,parent){
var map__38984 = p__38983;
var map__38984__$1 = (((((!((map__38984 == null))))?(((((map__38984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38984):map__38984);
var box = map__38984__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38984__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
if((!(athens.devcards.sci_boxes.sci_node_QMARK_(box)))){
return box;
} else {
var code = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(str_content,(4));
var result = (function (){try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*1","*1",2110258092,null),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(parent)], null)], null));
}catch (e38986){if((e38986 instanceof Error)){
var e = e38986;
return athens.devcards.sci_boxes.trace(e);
} else {
throw e38986;

}
}})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result);
}
});
athens.devcards.sci_boxes.next_box_id = (function athens$devcards$sci_boxes$next_box_id(boxes,visited,id){
if(cljs.core.not((visited.cljs$core$IFn$_invoke$arity$1 ? visited.cljs$core$IFn$_invoke$arity$1(id) : visited.call(null,id)))){
return id;
} else {
var go_up = (function (){
var temp__5735__auto__ = athens.devcards.sci_boxes.get_parent_id(boxes,id);
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return (athens.devcards.sci_boxes.next_box_id.cljs$core$IFn$_invoke$arity$3 ? athens.devcards.sci_boxes.next_box_id.cljs$core$IFn$_invoke$arity$3(boxes,visited,parent_id) : athens.devcards.sci_boxes.next_box_id.call(null,boxes,visited,parent_id));
} else {
return null;
}
});
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"children-ids","children-ids",-293558198).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(boxes,id)));
if(temp__5733__auto__){
var children = temp__5733__auto__;
var temp__5733__auto____$1 = cljs.core.some((function (p1__38987_SHARP_){
if(cljs.core.not((visited.cljs$core$IFn$_invoke$arity$1 ? visited.cljs$core$IFn$_invoke$arity$1(p1__38987_SHARP_) : visited.call(null,p1__38987_SHARP_)))){
return p1__38987_SHARP_;
} else {
return null;
}
}),children);
if(cljs.core.truth_(temp__5733__auto____$1)){
var unvisited_child = temp__5733__auto____$1;
return unvisited_child;
} else {
return go_up();
}
} else {
var parent = athens.devcards.sci_boxes.get_parent_id(boxes,id);
var siblings = new cljs.core.Keyword(null,"children-ids","children-ids",-293558198).cljs$core$IFn$_invoke$arity$1(parent);
var temp__5733__auto____$1 = cljs.core.some((function (p1__38988_SHARP_){
if(cljs.core.not((visited.cljs$core$IFn$_invoke$arity$1 ? visited.cljs$core$IFn$_invoke$arity$1(p1__38988_SHARP_) : visited.call(null,p1__38988_SHARP_)))){
return p1__38988_SHARP_;
} else {
return null;
}
}),siblings);
if(cljs.core.truth_(temp__5733__auto____$1)){
var unvisited_sibling = temp__5733__auto____$1;
return unvisited_sibling;
} else {
return go_up();
}
}
}
});
athens.devcards.sci_boxes.eval_all_boxes = (function athens$devcards$sci_boxes$eval_all_boxes(boxes){
var boxes__$1 = boxes;
var visited = cljs.core.PersistentHashSet.EMPTY;
var id = (0);
while(true){
var box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(boxes__$1,id);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(boxes__$1,athens.devcards.sci_boxes.get_parent_id(boxes__$1,id));
var boxes_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(boxes__$1,id,athens.devcards.sci_boxes.eval_box(box,parent));
var visited_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,id);
var id_SINGLEQUOTE_ = athens.devcards.sci_boxes.next_box_id(boxes__$1,visited_SINGLEQUOTE_,id);
if(cljs.core.not(id_SINGLEQUOTE_)){
return boxes_SINGLEQUOTE_;
} else {
var G__39021 = boxes_SINGLEQUOTE_;
var G__39022 = visited_SINGLEQUOTE_;
var G__39023 = id_SINGLEQUOTE_;
boxes__$1 = G__39021;
visited = G__39022;
id = G__39023;
continue;
}
break;
}
});
athens.devcards.sci_boxes.add_child = (function athens$devcards$sci_boxes$add_child(p__38989,idx,id){
var map__38990 = p__38989;
var map__38990__$1 = (((((!((map__38990 == null))))?(((((map__38990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38990):map__38990);
var box = map__38990__$1;
var children_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38990__$1,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198));
var new_idx = (idx + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children_ids,(0),new_idx),id,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(children_ids,new_idx)));
});
athens.devcards.sci_boxes.remove_child = (function athens$devcards$sci_boxes$remove_child(parent,child_id){
var idx = athens.devcards.sci_boxes.index_of(new cljs.core.Keyword(null,"children-ids","children-ids",-293558198).cljs$core$IFn$_invoke$arity$1(parent),child_id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),athens.devcards.sci_boxes.remove_from_vec,idx);
});
athens.devcards.sci_boxes.add_sibling = (function athens$devcards$sci_boxes$add_sibling(p__38992,id){
var map__38993 = p__38992;
var map__38993__$1 = (((((!((map__38993 == null))))?(((((map__38993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38993):map__38993);
var state = map__38993__$1;
var next_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38993__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
var boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38993__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
var parent_id = athens.devcards.sci_boxes.get_parent_id(boxes,id);
var siblings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(boxes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198)], null));
var idx = athens.devcards.sci_boxes.index_of(siblings,id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.update,parent_id,athens.devcards.sci_boxes.add_child,idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next_id], 0)),new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.assoc,next_id,athens.devcards.sci_boxes.empty_box),new cljs.core.Keyword(null,"boxes","boxes",-420813822),athens.devcards.sci_boxes.eval_all_boxes);
});
athens.devcards.sci_boxes.delete_box = (function athens$devcards$sci_boxes$delete_box(p__38995,id){
var map__38996 = p__38995;
var map__38996__$1 = (((((!((map__38996 == null))))?(((((map__38996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38996):map__38996);
var state = map__38996__$1;
var boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38996__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
var parent_id = athens.devcards.sci_boxes.get_parent_id(boxes,id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boxes","boxes",-420813822),parent_id], null),athens.devcards.sci_boxes.remove_child,id),new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.dissoc,id),new cljs.core.Keyword(null,"boxes","boxes",-420813822),athens.devcards.sci_boxes.eval_all_boxes);
});
athens.devcards.sci_boxes.update_box_content = (function athens$devcards$sci_boxes$update_box_content(boxes,id,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(boxes,id,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),value);
});
athens.devcards.sci_boxes.handle_return_key_BANG_ = (function athens$devcards$sci_boxes$handle_return_key_BANG_(e,id){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(athens.devcards.sci_boxes.box_state_STAR_,athens.devcards.sci_boxes.add_sibling,id);
});
athens.devcards.sci_boxes.handle_backspace_key_BANG_ = (function athens$devcards$sci_boxes$handle_backspace_key_BANG_(e,id){
var map__38998 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.devcards.sci_boxes.box_state_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boxes","boxes",-420813822),id], null));
var map__38998__$1 = (((((!((map__38998 == null))))?(((((map__38998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38998):map__38998);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38998__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
if(cljs.core.empty_QMARK_(str_content)){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(athens.devcards.sci_boxes.box_state_STAR_,athens.devcards.sci_boxes.delete_box,id);
} else {
return null;
}
});
athens.devcards.sci_boxes.handle_box_key_down_BANG_ = (function athens$devcards$sci_boxes$handle_box_key_down_BANG_(e,id){
var key_code = e.keyCode;
var shift_QMARK_ = e.shiftKey;
var k = (athens.devcards.sci_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.sci_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1(key_code) : athens.devcards.sci_boxes.key_code__GT_key.call(null,key_code));
var G__39000 = k;
var G__39000__$1 = (((G__39000 instanceof cljs.core.Keyword))?G__39000.fqn:null);
switch (G__39000__$1) {
case "return":
if(cljs.core.not(shift_QMARK_)){
return athens.devcards.sci_boxes.handle_return_key_BANG_(e,id);
} else {
return null;
}

break;
case "backspace":
return athens.devcards.sci_boxes.handle_backspace_key_BANG_(e,id);

break;
default:
return null;

}
});
athens.devcards.sci_boxes.handle_box_change_BANG_ = (function athens$devcards$sci_boxes$handle_box_change_BANG_(e,id){
var target = e.target;
var value = target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.sci_boxes.box_state_STAR_,(function (p1__39001_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__39001_SHARP_,new cljs.core.Keyword(null,"boxes","boxes",-420813822),athens.devcards.sci_boxes.update_box_content,id,value),new cljs.core.Keyword(null,"boxes","boxes",-420813822),athens.devcards.sci_boxes.eval_all_boxes);
}));
});
athens.devcards.sci_boxes.sci_result_component = (function athens$devcards$sci_boxes$sci_result_component(result){
if(cljs.core.truth_(result)){
var map__39002 = result;
var map__39002__$1 = (((((!((map__39002 == null))))?(((((map__39002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39002):map__39002);
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39002__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
if(cljs.core.truth_(hiccup)){
return hiccup;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
}
} else {
return null;
}
});
athens.devcards.sci_boxes.sci_result_wrapper = (function athens$devcards$sci_boxes$sci_result_wrapper(){
var err_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_(err_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (result){
if((cljs.core.deref(err_STAR_) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.sci_boxes.sci_result_component,result], null);
} else {
var vec__39004 = cljs.core.deref(err_STAR_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39004,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39004,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.str.cljs$core$IFn$_invoke$arity$1(info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(err_STAR_,null);
})], null),"re-render"], null)], null)], null);
}
})], null));
});
athens.devcards.sci_boxes.box_component = (function athens$devcards$sci_boxes$box_component(id){
var map__39009 = cljs.core.deref(athens.devcards.sci_boxes.box_state_STAR_);
var map__39009__$1 = (((((!((map__39009 == null))))?(((((map__39009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39009):map__39009);
var boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39009__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
var map__39010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(boxes,id);
var map__39010__$1 = (((((!((map__39010 == null))))?(((((map__39010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39010):map__39010);
var box = map__39010__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var children_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"width","width",-384071477),"30rem"], null),new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39007_SHARP_){
return athens.devcards.sci_boxes.handle_box_change_BANG_(p1__39007_SHARP_,id);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__39008_SHARP_){
return athens.devcards.sci_boxes.handle_box_key_down_BANG_(p1__39008_SHARP_,id);
})], null)], null),((athens.devcards.sci_boxes.sci_node_QMARK_(box))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.sci_boxes.sci_result_wrapper,result], null):null)], null),((cljs.core.seq(children_ids))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1rem"], null)], null)], null),(function (){var iter__4582__auto__ = (function athens$devcards$sci_boxes$box_component_$_iter__39013(s__39014){
return (new cljs.core.LazySeq(null,(function (){
var s__39014__$1 = s__39014;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39014__$1);
if(temp__5735__auto__){
var s__39014__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39014__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39014__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39016 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39015 = (0);
while(true){
if((i__39015 < size__4581__auto__)){
var id__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39015);
cljs.core.chunk_append(b__39016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.sci_boxes.box_component,id__$1], null));

var G__39025 = (i__39015 + (1));
i__39015 = G__39025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39016),athens$devcards$sci_boxes$box_component_$_iter__39013(cljs.core.chunk_rest(s__39014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39016),null);
}
} else {
var id__$1 = cljs.core.first(s__39014__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.sci_boxes.box_component,id__$1], null),athens$devcards$sci_boxes$box_component_$_iter__39013(cljs.core.rest(s__39014__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children_ids);
})()):null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.sci_boxes","athens.devcards.sci_boxes",1923834609),new cljs.core.Keyword(null,"boxes","boxes",-420813822)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"boxes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.sci_boxes !== 'undefined') && (typeof athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017 = (function (meta39018){
this.meta39018 = meta39018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39019,meta39018__$1){
var self__ = this;
var _39019__$1 = this;
return (new athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017(meta39018__$1));
}));

(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39019){
var self__ = this;
var _39019__$1 = this;
return self__.meta39018;
}));

(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__28313__auto__,devcard_opts__28314__auto__){
var self__ = this;
var this__28313__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__28314__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__28332__auto__ = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.sci_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"boxes","boxes",-420813822),athens.devcards.sci_boxes.eval_all_boxes);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.sci_boxes.box_component,(0)], null);
})()
;
if(cljs.core.fn_QMARK_(v__28332__auto__)){
return (function (data_atom__28333__auto__,owner__28334__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__28332__auto__,data_atom__28333__auto__,owner__28334__auto__], null));
});
} else {
return reagent.core.as_element(v__28332__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__28314__auto__))], 0))], 0));
}));

(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39018","meta39018",-496210433,null)], null);
}));

(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.cljs$lang$type = true);

(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.cljs$lang$ctorStr = "athens.devcards.sci-boxes/t_athens$devcards$sci_boxes39017");

(athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.sci-boxes/t_athens$devcards$sci_boxes39017");
}));

/**
 * Positional factory function for athens.devcards.sci-boxes/t_athens$devcards$sci_boxes39017.
 */
athens.devcards.sci_boxes.__GT_t_athens$devcards$sci_boxes39017 = (function athens$devcards$sci_boxes$__GT_t_athens$devcards$sci_boxes39017(meta39018){
return (new athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017(meta39018));
});

}

return (new athens.devcards.sci_boxes.t_athens$devcards$sci_boxes39017(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.sci_boxes.js.map
