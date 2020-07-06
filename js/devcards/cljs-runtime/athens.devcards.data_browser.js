goog.provide('athens.devcards.data_browser');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('garden.color');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.data_browser.attr_unique_QMARK_ = (function athens$devcards$data_browser$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.devcards.data_browser.attr_many_QMARK_ = (function athens$devcards$data_browser$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.devcards.data_browser.attr_ref_QMARK_ = (function athens$devcards$data_browser$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.devcards.data_browser.attr_reverse_QMARK_ = (function athens$devcards$data_browser$attr_reverse_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return clojure.string.starts_with_QMARK_(cljs.core.name(attr),"_");
} else {
return null;
}
});
athens.devcards.data_browser.headings = (function athens$devcards$data_browser$headings(data,mode){
var G__38070 = mode;
var G__38070__$1 = (((G__38070 instanceof cljs.core.Keyword))?G__38070.fqn:null);
switch (G__38070__$1) {
case "coll":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","val"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","val"], null);

break;
case "tuples":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data))));

break;
case "maps":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38070__$1)].join('')));

}
});
athens.devcards.data_browser.coll_rows = (function athens$devcards$data_browser$coll_rows(coll){
var row = (function (p__38073){
var vec__38074 = p__38073;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38074,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38074,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.data_browser.reverse_refs_for_attr = (function athens$devcards$data_browser$reverse_refs_for_attr(attr,eid){
var G__38080 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__38081 = cljs.core.deref(athens.db.dsdb);
var G__38082 = attr;
var G__38083 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__38080,G__38081,G__38082,G__38083) : datascript.core.q.call(null,G__38080,G__38081,G__38082,G__38083));
});
athens.devcards.data_browser.reverse_attr = (function athens$devcards$data_browser$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.data_browser.wrap_with_db_id = (function athens$devcards$data_browser$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.data_browser.reverse_refs = (function athens$devcards$data_browser$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$reverse_refs_$_iter__38087(s__38088){
return (new cljs.core.LazySeq(null,(function (){
var s__38088__$1 = s__38088;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38088__$1);
if(temp__5735__auto__){
var s__38088__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38088__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38088__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38090 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38089 = (0);
while(true){
if((i__38089 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38089);
cljs.core.chunk_append(b__38090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null));

var G__38164 = (i__38089 + (1));
i__38089 = G__38164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38090),athens$devcards$data_browser$reverse_refs_$_iter__38087(cljs.core.chunk_rest(s__38088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38090),null);
}
} else {
var attr = cljs.core.first(s__38088__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null),athens$devcards$data_browser$reverse_refs_$_iter__38087(cljs.core.rest(s__38088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_attrs);
})());
});
athens.devcards.data_browser.reverse_rows = (function athens$devcards$data_browser$reverse_rows(p__38091){
var map__38092 = p__38091;
var map__38092__$1 = (((((!((map__38092 == null))))?(((((map__38092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38092):map__38092);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38092__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.data_browser.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.data_browser.map_rows = (function athens$devcards$data_browser$map_rows(m){
var row = (function (p__38097){
var vec__38098 = p__38097;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.data_browser.reverse_rows(m)));
});
athens.devcards.data_browser.tuple_rows = (function athens$devcards$data_browser$tuple_rows(tuples){
var row = (function (p__38101){
var vec__38102 = p__38101;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38102,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38102,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.data_browser.maps_rows = (function athens$devcards$data_browser$maps_rows(ms){
var hs = athens.devcards.data_browser.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$data_browser$maps_rows_$_iter__38105(s__38106){
return (new cljs.core.LazySeq(null,(function (){
var s__38106__$1 = s__38106;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38106__$1);
if(temp__5735__auto__){
var s__38106__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38106__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38106__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38108 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38107 = (0);
while(true){
if((i__38107 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38107);
cljs.core.chunk_append(b__38108,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__38107,idx,c__4580__auto__,size__4581__auto__,b__38108,s__38106__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__38105_$_iter__38109(s__38110){
return (new cljs.core.LazySeq(null,((function (i__38107,idx,c__4580__auto__,size__4581__auto__,b__38108,s__38106__$2,temp__5735__auto__,hs){
return (function (){
var s__38110__$1 = s__38110;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38110__$1);
if(temp__5735__auto____$1){
var s__38110__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38110__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__38110__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__38112 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__38111 = (0);
while(true){
if((i__38111 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__38111);
cljs.core.chunk_append(b__38112,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__38165 = (i__38111 + (1));
i__38111 = G__38165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38112),athens$devcards$data_browser$maps_rows_$_iter__38105_$_iter__38109(cljs.core.chunk_rest(s__38110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38112),null);
}
} else {
var h = cljs.core.first(s__38110__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__38105_$_iter__38109(cljs.core.rest(s__38110__$2)));
}
} else {
return null;
}
break;
}
});})(i__38107,idx,c__4580__auto__,size__4581__auto__,b__38108,s__38106__$2,temp__5735__auto__,hs))
,null,null));
});})(i__38107,idx,c__4580__auto__,size__4581__auto__,b__38108,s__38106__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__38166 = (i__38107 + (1));
i__38107 = G__38166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38108),athens$devcards$data_browser$maps_rows_$_iter__38105(cljs.core.chunk_rest(s__38106__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38108),null);
}
} else {
var idx = cljs.core.first(s__38106__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__38106__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__38105_$_iter__38113(s__38114){
return (new cljs.core.LazySeq(null,(function (){
var s__38114__$1 = s__38114;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38114__$1);
if(temp__5735__auto____$1){
var s__38114__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38114__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38114__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38116 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38115 = (0);
while(true){
if((i__38115 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38115);
cljs.core.chunk_append(b__38116,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__38167 = (i__38115 + (1));
i__38115 = G__38167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38116),athens$devcards$data_browser$maps_rows_$_iter__38105_$_iter__38113(cljs.core.chunk_rest(s__38114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38116),null);
}
} else {
var h = cljs.core.first(s__38114__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__38105_$_iter__38113(cljs.core.rest(s__38114__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__38106__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$data_browser$maps_rows_$_iter__38105(cljs.core.rest(s__38106__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms)));
});
athens.devcards.data_browser.get_rows = (function athens$devcards$data_browser$get_rows(data,mode){
var G__38117 = mode;
var G__38117__$1 = (((G__38117 instanceof cljs.core.Keyword))?G__38117.fqn:null);
switch (G__38117__$1) {
case "coll":
return athens.devcards.data_browser.coll_rows(data);

break;
case "map":
return athens.devcards.data_browser.map_rows(data);

break;
case "tuples":
return athens.devcards.data_browser.tuple_rows(data);

break;
case "maps":
return athens.devcards.data_browser.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38117__$1)].join('')));

}
});
athens.devcards.data_browser.cell = (function athens$devcards$data_browser$cell(p__38118){
var map__38119 = p__38118;
var map__38119__$1 = (((((!((map__38119 == null))))?(((((map__38119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38119):map__38119);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38119__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
athens.devcards.data_browser.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.data_browser.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.devcards.data_browser.table_view = (function athens$devcards$data_browser$table_view(data,mode,limit,p__38124){
var map__38125 = p__38124;
var map__38125__$1 = (((((!((map__38125 == null))))?(((((map__38125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38125):map__38125);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38125__$1,new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.data_browser.cell);
var hs = athens.devcards.data_browser.headings(data,mode);
var rows = athens.devcards.data_browser.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.data_browser.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__38127(s__38128){
return (new cljs.core.LazySeq(null,(function (){
var s__38128__$1 = s__38128;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38128__$1);
if(temp__5735__auto__){
var s__38128__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38128__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38128__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38130 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38129 = (0);
while(true){
if((i__38129 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38129);
cljs.core.chunk_append(b__38130,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__38169 = (i__38129 + (1));
i__38129 = G__38169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38130),athens$devcards$data_browser$table_view_$_iter__38127(cljs.core.chunk_rest(s__38128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38130),null);
}
} else {
var h = cljs.core.first(s__38128__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__38127(cljs.core.rest(s__38128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__38131(s__38132){
return (new cljs.core.LazySeq(null,(function (){
var s__38132__$1 = s__38132;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38132__$1);
if(temp__5735__auto__){
var s__38132__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38132__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38132__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38134 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38133 = (0);
while(true){
if((i__38133 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38133);
cljs.core.chunk_append(b__38134,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__38133,row,c__4580__auto__,size__4581__auto__,b__38134,s__38132__$2,temp__5735__auto__,hs,rows,map__38125,map__38125__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__38131_$_iter__38135(s__38136){
return (new cljs.core.LazySeq(null,((function (i__38133,row,c__4580__auto__,size__4581__auto__,b__38134,s__38132__$2,temp__5735__auto__,hs,rows,map__38125,map__38125__$1,cell_fn){
return (function (){
var s__38136__$1 = s__38136;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38136__$1);
if(temp__5735__auto____$1){
var s__38136__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38136__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__38136__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__38138 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__38137 = (0);
while(true){
if((i__38137 < size__4581__auto____$1)){
var map__38142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__38137);
var map__38142__$1 = (((((!((map__38142 == null))))?(((((map__38142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38142):map__38142);
var c = map__38142__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38142__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38142__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__38138,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__38170 = (i__38137 + (1));
i__38137 = G__38170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38138),athens$devcards$data_browser$table_view_$_iter__38131_$_iter__38135(cljs.core.chunk_rest(s__38136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38138),null);
}
} else {
var map__38147 = cljs.core.first(s__38136__$2);
var map__38147__$1 = (((((!((map__38147 == null))))?(((((map__38147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38147):map__38147);
var c = map__38147__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38147__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38147__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__38131_$_iter__38135(cljs.core.rest(s__38136__$2)));
}
} else {
return null;
}
break;
}
});})(i__38133,row,c__4580__auto__,size__4581__auto__,b__38134,s__38132__$2,temp__5735__auto__,hs,rows,map__38125,map__38125__$1,cell_fn))
,null,null));
});})(i__38133,row,c__4580__auto__,size__4581__auto__,b__38134,s__38132__$2,temp__5735__auto__,hs,rows,map__38125,map__38125__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__38171 = (i__38133 + (1));
i__38133 = G__38171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38134),athens$devcards$data_browser$table_view_$_iter__38131(cljs.core.chunk_rest(s__38132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38134),null);
}
} else {
var row = cljs.core.first(s__38132__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__38132__$2,temp__5735__auto__,hs,rows,map__38125,map__38125__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__38131_$_iter__38149(s__38150){
return (new cljs.core.LazySeq(null,(function (){
var s__38150__$1 = s__38150;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38150__$1);
if(temp__5735__auto____$1){
var s__38150__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38150__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38150__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38152 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38151 = (0);
while(true){
if((i__38151 < size__4581__auto__)){
var map__38153 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38151);
var map__38153__$1 = (((((!((map__38153 == null))))?(((((map__38153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38153):map__38153);
var c = map__38153__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38153__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38153__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__38152,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__38172 = (i__38151 + (1));
i__38151 = G__38172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38152),athens$devcards$data_browser$table_view_$_iter__38131_$_iter__38149(cljs.core.chunk_rest(s__38150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38152),null);
}
} else {
var map__38155 = cljs.core.first(s__38150__$2);
var map__38155__$1 = (((((!((map__38155 == null))))?(((((map__38155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38155):map__38155);
var c = map__38155__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38155__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38155__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__38131_$_iter__38149(cljs.core.rest(s__38150__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__38132__$2,temp__5735__auto__,hs,rows,map__38125,map__38125__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$data_browser$table_view_$_iter__38131(cljs.core.rest(s__38132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null)], null);
});
athens.devcards.data_browser.coll_of_maps_QMARK_ = (function athens$devcards$data_browser$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.associative_QMARK_,x)) && ((!(cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)))));
});
athens.devcards.data_browser.tuples_QMARK_ = (function athens$devcards$data_browser$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.devcards.data_browser.browser = (function athens$devcards$data_browser$browser(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38173 = arguments.length;
var i__4790__auto___38174 = (0);
while(true){
if((i__4790__auto___38174 < len__4789__auto___38173)){
args__4795__auto__.push((arguments[i__4790__auto___38174]));

var G__38175 = (i__4790__auto___38174 + (1));
i__4790__auto___38174 = G__38175;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic = (function (_,p__38159){
var vec__38160 = p__38159;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(0),null);
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
var increase_limit = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
});
return (function() { 
var G__38176__delegate = function (result,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.data_browser.coll_of_maps_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.deref(limit),opts):((((cljs.core.associative_QMARK_(result)) && ((!(cljs.core.sequential_QMARK_(result))))))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref(limit),opts):((athens.devcards.data_browser.tuples_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.deref(limit),opts):((cljs.core.coll_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.deref(limit),opts):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.data_browser.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((cljs.core.deref(limit) < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increase_limit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
};
var G__38176 = function (result,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__38177__i = 0, G__38177__a = new Array(arguments.length -  1);
while (G__38177__i < G__38177__a.length) {G__38177__a[G__38177__i] = arguments[G__38177__i + 1]; ++G__38177__i;}
  ___$1 = new cljs.core.IndexedSeq(G__38177__a,0,null);
} 
return G__38176__delegate.call(this,result,___$1);};
G__38176.cljs$lang$maxFixedArity = 1;
G__38176.cljs$lang$applyTo = (function (arglist__38178){
var result = cljs.core.first(arglist__38178);
var ___$1 = cljs.core.rest(arglist__38178);
return G__38176__delegate(result,___$1);
});
G__38176.cljs$core$IFn$_invoke$arity$variadic = G__38176__delegate;
return G__38176;
})()
;
}));

(athens.devcards.data_browser.browser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.devcards.data_browser.browser.cljs$lang$applyTo = (function (seq38157){
var G__38158 = cljs.core.first(seq38157);
var seq38157__$1 = cljs.core.next(seq38157);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38158,seq38157__$1);
}));


//# sourceMappingURL=athens.devcards.data_browser.js.map
