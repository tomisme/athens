goog.provide('athens_devcards.sci');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('sci.core');
athens_devcards.sci.log = console.log;
athens_devcards.sci.trace = (function athens_devcards$sci$trace(x){
(athens_devcards.sci.log.cljs$core$IFn$_invoke$arity$1 ? athens_devcards.sci.log.cljs$core$IFn$_invoke$arity$1(x) : athens_devcards.sci.log.call(null,x));

return x;
});
/**
 * Returns a new vector with the element at 'index' removed.
 * 
 *   (remove-from-vec [:a :b :c] 1)  =>  [:a :c]
 */
athens_devcards.sci.remove_from_vec = (function athens_devcards$sci$remove_from_vec(v,index){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(index + (1)))));
});
athens_devcards.sci.index_of = (function athens_devcards$sci$index_of(col,v){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,v)){
return idx;
} else {
return null;
}
}),col));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens_devcards.sci","athens_devcards.sci",-1908958716),new cljs.core.Keyword(null,"sci-examples","sci-examples",1696779660)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sci-examples",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens_devcards$sci$iter__54360(s__54361){
return (new cljs.core.LazySeq(null,(function (){
var s__54361__$1 = s__54361;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54361__$1);
if(temp__5735__auto__){
var s__54361__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54361__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54361__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54363 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54362 = (0);
while(true){
if((i__54362 < size__4581__auto__)){
var vec__54364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54362);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54364,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54364,(1),null);
cljs.core.chunk_append(b__54363,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),s], null)], 0)),sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,opts)], null));

var G__54408 = (i__54362 + (1));
i__54362 = G__54408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54363),athens_devcards$sci$iter__54360(cljs.core.chunk_rest(s__54361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54363),null);
}
} else {
var vec__54367 = cljs.core.first(s__54361__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54367,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54367,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),s], null)], 0)),sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,opts)], null),athens_devcards$sci$iter__54360(cljs.core.rest(s__54361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(inc 1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(inc x)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"x","x",-555367584,null),(1)], null)], null)], null)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens_devcards.sci.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 5, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105),(57),new cljs.core.Keyword(null,"left-paren","left-paren",1477527155),(219),new cljs.core.Keyword(null,"left-brace","left-brace",1870925954)], null);
athens_devcards.sci.empty_box = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"",new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),cljs.core.PersistentVector.EMPTY], null);
athens_devcards.sci.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3),new cljs.core.Keyword(null,"boxes","boxes",-420813822),new cljs.core.PersistentArrayMap(null, 3, [(0),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens_devcards.sci.empty_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"str-content","str-content",297549190),":sci (def a 1)"], null)], 0)),(1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens_devcards.sci.empty_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),new cljs.core.Keyword(null,"str-content","str-content",297549190),":sci (+ 10 10)"], null)], 0)),(2),athens_devcards.sci.empty_box], null)], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens_devcards.sci","athens_devcards.sci",-1908958716),new cljs.core.Keyword(null,"box-state*","box-state*",-2117883271)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"box-state*",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens_devcards.sci.box_state_STAR_,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens_devcards.sci.sci_node_QMARK_ = (function athens_devcards$sci$sci_node_QMARK_(p__54370){
var map__54371 = p__54370;
var map__54371__$1 = (((((!((map__54371 == null))))?(((((map__54371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54371):map__54371);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
return clojure.string.starts_with_QMARK_(str_content,":sci");
});
athens_devcards.sci.update_box_content = (function athens_devcards$sci$update_box_content(boxes,id,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(boxes,id,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),value);
});
athens_devcards.sci.handle_box_change_BANG_ = (function athens_devcards$sci$handle_box_change_BANG_(e,id){
var target = e.target;
var value = target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens_devcards.sci.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"boxes","boxes",-420813822),athens_devcards.sci.update_box_content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,value], 0));
});
athens_devcards.sci.get_parent_id = (function athens_devcards$sci$get_parent_id(p__54373,child_id){
var map__54374 = p__54373;
var map__54374__$1 = (((((!((map__54374 == null))))?(((((map__54374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54374):map__54374);
var boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54374__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
return cljs.core.some((function (p__54376){
var vec__54377 = p__54376;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54377,(0),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54377,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([child_id]),new cljs.core.Keyword(null,"children-ids","children-ids",-293558198).cljs$core$IFn$_invoke$arity$1(box)))){
return id;
} else {
return null;
}
}),boxes);
});
athens_devcards.sci.get_child_idx = (function athens_devcards$sci$get_child_idx(p__54380,parent_id,child_id){
var map__54381 = p__54380;
var map__54381__$1 = (((((!((map__54381 == null))))?(((((map__54381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54381):map__54381);
var boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54381__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
return athens_devcards.sci.index_of(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(boxes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198)], null)),child_id);
});
athens_devcards.sci.add_child_after_idx = (function athens_devcards$sci$add_child_after_idx(p__54383,idx,id){
var map__54384 = p__54383;
var map__54384__$1 = (((((!((map__54384 == null))))?(((((map__54384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54384):map__54384);
var box = map__54384__$1;
var children_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54384__$1,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198));
var new_idx = (idx + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children_ids,(0),new_idx),id,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(children_ids,new_idx)));
});
athens_devcards.sci.add_sibling_box = (function athens_devcards$sci$add_sibling_box(p__54386,id){
var map__54387 = p__54386;
var map__54387__$1 = (((((!((map__54387 == null))))?(((((map__54387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54387):map__54387);
var state = map__54387__$1;
var next_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54387__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
var parent_id = athens_devcards.sci.get_parent_id(state,id);
var child_idx = athens_devcards.sci.get_child_idx(state,parent_id,id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.update,parent_id,athens_devcards.sci.add_child_after_idx,child_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next_id], 0)),new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.assoc,next_id,athens_devcards.sci.empty_box);
});
athens_devcards.sci.remove_child = (function athens_devcards$sci$remove_child(box,child_id){
var child_idx = athens_devcards.sci.index_of(new cljs.core.Keyword(null,"children-ids","children-ids",-293558198).cljs$core$IFn$_invoke$arity$1(box),child_id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(box,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198),athens_devcards.sci.remove_from_vec,child_idx);
});
athens_devcards.sci.delete_box = (function athens_devcards$sci$delete_box(state,id){
var parent_id = athens_devcards.sci.get_parent_id(state,id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boxes","boxes",-420813822),parent_id], null),athens_devcards.sci.remove_child,id),new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.dissoc,id);
});
athens_devcards.sci.handle_return_key_BANG_ = (function athens_devcards$sci$handle_return_key_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(athens_devcards.sci.box_state_STAR_,athens_devcards.sci.add_sibling_box,id);
});
athens_devcards.sci.handle_backspace_key_BANG_ = (function athens_devcards$sci$handle_backspace_key_BANG_(id){
var map__54389 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens_devcards.sci.box_state_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boxes","boxes",-420813822),id], null));
var map__54389__$1 = (((((!((map__54389 == null))))?(((((map__54389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54389):map__54389);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54389__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_content,"")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(athens_devcards.sci.box_state_STAR_,athens_devcards.sci.delete_box,id);
} else {
return null;
}
});
athens_devcards.sci.handle_box_key_down_BANG_ = (function athens_devcards$sci$handle_box_key_down_BANG_(e,id){
var key_code = e.keyCode;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens_devcards.sci.key_code__GT_key,key_code);
var G__54391 = k;
var G__54391__$1 = (((G__54391 instanceof cljs.core.Keyword))?G__54391.fqn:null);
switch (G__54391__$1) {
case "return":
e.preventDefault();

return athens_devcards.sci.handle_return_key_BANG_(id);

break;
case "backspace":
return athens_devcards.sci.handle_backspace_key_BANG_(id);

break;
default:
return null;

}
});
athens_devcards.sci.box_component = (function athens_devcards$sci$box_component(id){
var map__54394 = cljs.core.deref(athens_devcards.sci.box_state_STAR_);
var map__54394__$1 = (((((!((map__54394 == null))))?(((((map__54394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54394):map__54394);
var boxes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54394__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
var map__54395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(boxes,id);
var map__54395__$1 = (((((!((map__54395 == null))))?(((((map__54395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54395):map__54395);
var box = map__54395__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54395__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var children_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54395__$1,new cljs.core.Keyword(null,"children-ids","children-ids",-293558198));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null),new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54392_SHARP_){
return athens_devcards.sci.handle_box_change_BANG_(p1__54392_SHARP_,id);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__54393_SHARP_){
return athens_devcards.sci.handle_box_key_down_BANG_(p1__54393_SHARP_,id);
})], null)], null),((athens_devcards.sci.sci_node_QMARK_(box))?(function (){var code = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(str_content,(4));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$1(code);
}catch (e54398){if((e54398 instanceof Error)){
var e = e54398;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
} else {
throw e54398;

}
}})()], null);
})():null)], null),((cljs.core.seq(children_ids))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1rem"], null)], null)], null),(function (){var iter__4582__auto__ = (function athens_devcards$sci$box_component_$_iter__54399(s__54400){
return (new cljs.core.LazySeq(null,(function (){
var s__54400__$1 = s__54400;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54400__$1);
if(temp__5735__auto__){
var s__54400__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54400__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54400__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54402 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54401 = (0);
while(true){
if((i__54401 < size__4581__auto__)){
var id__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54401);
cljs.core.chunk_append(b__54402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens_devcards.sci.box_component,id__$1], null));

var G__54418 = (i__54401 + (1));
i__54401 = G__54418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54402),athens_devcards$sci$box_component_$_iter__54399(cljs.core.chunk_rest(s__54400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54402),null);
}
} else {
var id__$1 = cljs.core.first(s__54400__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens_devcards.sci.box_component,id__$1], null),athens_devcards$sci$box_component_$_iter__54399(cljs.core.rest(s__54400__$2)));
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
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens_devcards.sci","athens_devcards.sci",-1908958716),new cljs.core.Keyword(null,"box-tree-experiment","box-tree-experiment",411550807)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"box-tree-experiment",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens_devcards !== 'undefined') && (typeof athens_devcards.sci !== 'undefined') && (typeof athens_devcards.sci.t_athens_devcards$sci54403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens_devcards.sci.t_athens_devcards$sci54403 = (function (meta54404){
this.meta54404 = meta54404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens_devcards.sci.t_athens_devcards$sci54403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54405,meta54404__$1){
var self__ = this;
var _54405__$1 = this;
return (new athens_devcards.sci.t_athens_devcards$sci54403(meta54404__$1));
}));

(athens_devcards.sci.t_athens_devcards$sci54403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54405){
var self__ = this;
var _54405__$1 = this;
return self__.meta54404;
}));

(athens_devcards.sci.t_athens_devcards$sci54403.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens_devcards.sci.t_athens_devcards$sci54403.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46521__auto__,devcard_opts__46522__auto__){
var self__ = this;
var this__46521__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46522__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46540__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens_devcards.sci.box_component,(0)], null);
if(cljs.core.fn_QMARK_(v__46540__auto__)){
return (function (data_atom__46541__auto__,owner__46542__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46540__auto__,data_atom__46541__auto__,owner__46542__auto__], null));
});
} else {
return reagent.core.as_element(v__46540__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46522__auto__))], 0))], 0));
}));

(athens_devcards.sci.t_athens_devcards$sci54403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta54404","meta54404",-210641021,null)], null);
}));

(athens_devcards.sci.t_athens_devcards$sci54403.cljs$lang$type = true);

(athens_devcards.sci.t_athens_devcards$sci54403.cljs$lang$ctorStr = "athens-devcards.sci/t_athens_devcards$sci54403");

(athens_devcards.sci.t_athens_devcards$sci54403.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens-devcards.sci/t_athens_devcards$sci54403");
}));

/**
 * Positional factory function for athens-devcards.sci/t_athens_devcards$sci54403.
 */
athens_devcards.sci.__GT_t_athens_devcards$sci54403 = (function athens_devcards$sci$__GT_t_athens_devcards$sci54403(meta54404){
return (new athens_devcards.sci.t_athens_devcards$sci54403(meta54404));
});

}

return (new athens_devcards.sci.t_athens_devcards$sci54403(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens_devcards.sci.js.map
