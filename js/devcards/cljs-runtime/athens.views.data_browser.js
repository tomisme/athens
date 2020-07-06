goog.provide('athens.views.data_browser');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('garden.color');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.views.data_browser.attr_unique_QMARK_ = (function athens$views$data_browser$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.views.data_browser.attr_many_QMARK_ = (function athens$views$data_browser$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.views.data_browser.attr_ref_QMARK_ = (function athens$views$data_browser$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.views.data_browser.attr_reverse_QMARK_ = (function athens$views$data_browser$attr_reverse_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return clojure.string.starts_with_QMARK_(cljs.core.name(attr),"_");
} else {
return null;
}
});
athens.views.data_browser.headings = (function athens$views$data_browser$headings(data,mode){
var G__58270 = mode;
var G__58270__$1 = (((G__58270 instanceof cljs.core.Keyword))?G__58270.fqn:null);
switch (G__58270__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58270__$1)].join('')));

}
});
athens.views.data_browser.coll_rows = (function athens$views$data_browser$coll_rows(coll){
var row = (function (p__58271){
var vec__58272 = p__58271;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.views.data_browser.reverse_refs_for_attr = (function athens$views$data_browser$reverse_refs_for_attr(attr,eid){
var G__58275 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__58276 = cljs.core.deref(athens.db.dsdb);
var G__58277 = attr;
var G__58278 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__58275,G__58276,G__58277,G__58278) : datascript.core.q.call(null,G__58275,G__58276,G__58277,G__58278));
});
athens.views.data_browser.reverse_attr = (function athens$views$data_browser$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.views.data_browser.wrap_with_db_id = (function athens$views$data_browser$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.views.data_browser.reverse_refs = (function athens$views$data_browser$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$views$data_browser$reverse_refs_$_iter__58279(s__58280){
return (new cljs.core.LazySeq(null,(function (){
var s__58280__$1 = s__58280;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58280__$1);
if(temp__5735__auto__){
var s__58280__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58280__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58280__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58282 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58281 = (0);
while(true){
if((i__58281 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58281);
cljs.core.chunk_append(b__58282,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.wrap_with_db_id,athens.views.data_browser.reverse_refs_for_attr(attr,eid))], null));

var G__58344 = (i__58281 + (1));
i__58281 = G__58344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58282),athens$views$data_browser$reverse_refs_$_iter__58279(cljs.core.chunk_rest(s__58280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58282),null);
}
} else {
var attr = cljs.core.first(s__58280__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.views.data_browser.wrap_with_db_id,athens.views.data_browser.reverse_refs_for_attr(attr,eid))], null),athens$views$data_browser$reverse_refs_$_iter__58279(cljs.core.rest(s__58280__$2)));
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
athens.views.data_browser.reverse_rows = (function athens$views$data_browser$reverse_rows(p__58283){
var map__58284 = p__58283;
var map__58284__$1 = (((((!((map__58284 == null))))?(((((map__58284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58284):map__58284);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.views.data_browser.reverse_refs(id);
} else {
return null;
}
});
athens.views.data_browser.map_rows = (function athens$views$data_browser$map_rows(m){
var row = (function (p__58286){
var vec__58287 = p__58286;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58287,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.views.data_browser.reverse_rows(m)));
});
athens.views.data_browser.tuple_rows = (function athens$views$data_browser$tuple_rows(tuples){
var row = (function (p__58290){
var vec__58291 = p__58290;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58291,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58291,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.views.data_browser.maps_rows = (function athens$views$data_browser$maps_rows(ms){
var hs = athens.views.data_browser.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$views$data_browser$maps_rows_$_iter__58294(s__58295){
return (new cljs.core.LazySeq(null,(function (){
var s__58295__$1 = s__58295;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58295__$1);
if(temp__5735__auto__){
var s__58295__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58295__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58295__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58297 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58296 = (0);
while(true){
if((i__58296 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58296);
cljs.core.chunk_append(b__58297,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__58296,idx,c__4580__auto__,size__4581__auto__,b__58297,s__58295__$2,temp__5735__auto__,hs){
return (function athens$views$data_browser$maps_rows_$_iter__58294_$_iter__58298(s__58299){
return (new cljs.core.LazySeq(null,((function (i__58296,idx,c__4580__auto__,size__4581__auto__,b__58297,s__58295__$2,temp__5735__auto__,hs){
return (function (){
var s__58299__$1 = s__58299;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58299__$1);
if(temp__5735__auto____$1){
var s__58299__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58299__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58299__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58301 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58300 = (0);
while(true){
if((i__58300 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58300);
cljs.core.chunk_append(b__58301,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58345 = (i__58300 + (1));
i__58300 = G__58345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),athens$views$data_browser$maps_rows_$_iter__58294_$_iter__58298(cljs.core.chunk_rest(s__58299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),null);
}
} else {
var h = cljs.core.first(s__58299__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$views$data_browser$maps_rows_$_iter__58294_$_iter__58298(cljs.core.rest(s__58299__$2)));
}
} else {
return null;
}
break;
}
});})(i__58296,idx,c__4580__auto__,size__4581__auto__,b__58297,s__58295__$2,temp__5735__auto__,hs))
,null,null));
});})(i__58296,idx,c__4580__auto__,size__4581__auto__,b__58297,s__58295__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__58346 = (i__58296 + (1));
i__58296 = G__58346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58297),athens$views$data_browser$maps_rows_$_iter__58294(cljs.core.chunk_rest(s__58295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58297),null);
}
} else {
var idx = cljs.core.first(s__58295__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__58295__$2,temp__5735__auto__,hs){
return (function athens$views$data_browser$maps_rows_$_iter__58294_$_iter__58302(s__58303){
return (new cljs.core.LazySeq(null,(function (){
var s__58303__$1 = s__58303;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58303__$1);
if(temp__5735__auto____$1){
var s__58303__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58303__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58303__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58305 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58304 = (0);
while(true){
if((i__58304 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58304);
cljs.core.chunk_append(b__58305,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58347 = (i__58304 + (1));
i__58304 = G__58347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58305),athens$views$data_browser$maps_rows_$_iter__58294_$_iter__58302(cljs.core.chunk_rest(s__58303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58305),null);
}
} else {
var h = cljs.core.first(s__58303__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$views$data_browser$maps_rows_$_iter__58294_$_iter__58302(cljs.core.rest(s__58303__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__58295__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$views$data_browser$maps_rows_$_iter__58294(cljs.core.rest(s__58295__$2)));
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
athens.views.data_browser.get_rows = (function athens$views$data_browser$get_rows(data,mode){
var G__58306 = mode;
var G__58306__$1 = (((G__58306 instanceof cljs.core.Keyword))?G__58306.fqn:null);
switch (G__58306__$1) {
case "coll":
return athens.views.data_browser.coll_rows(data);

break;
case "map":
return athens.views.data_browser.map_rows(data);

break;
case "tuples":
return athens.views.data_browser.tuple_rows(data);

break;
case "maps":
return athens.views.data_browser.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58306__$1)].join('')));

}
});
athens.views.data_browser.cell = (function athens$views$data_browser$cell(p__58307){
var map__58308 = p__58307;
var map__58308__$1 = (((((!((map__58308 == null))))?(((((map__58308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58308):map__58308);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58308__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
athens.views.data_browser.table_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.01em",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join(''),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:first-child","td:first-child",-780376400),new cljs.core.Keyword(null,"th:first-child","th:first-child",-1470990681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td:last-child","td:last-child",1591731607),new cljs.core.Keyword(null,"th-last-child","th-last-child",1649800725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr:hover","tr:hover",-638423922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),garden.color.opacify(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),0.15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>ul","td>ul",1108138610),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"4px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li:first-child","li:first-child",-1847125916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.data_browser.footer_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null)], null);
athens.views.data_browser.table_view = (function athens$views$data_browser$table_view(data,mode,limit,p__58310){
var map__58311 = p__58310;
var map__58311__$1 = (((((!((map__58311 == null))))?(((((map__58311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58311):map__58311);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58311__$1,new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.views.data_browser.cell);
var hs = athens.views.data_browser.headings(data,mode);
var rows = athens.views.data_browser.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.data_browser.table_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$views$data_browser$table_view_$_iter__58313(s__58314){
return (new cljs.core.LazySeq(null,(function (){
var s__58314__$1 = s__58314;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58314__$1);
if(temp__5735__auto__){
var s__58314__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58314__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58314__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58316 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58315 = (0);
while(true){
if((i__58315 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58315);
cljs.core.chunk_append(b__58316,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__58349 = (i__58315 + (1));
i__58315 = G__58349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58316),athens$views$data_browser$table_view_$_iter__58313(cljs.core.chunk_rest(s__58314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58316),null);
}
} else {
var h = cljs.core.first(s__58314__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$views$data_browser$table_view_$_iter__58313(cljs.core.rest(s__58314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$views$data_browser$table_view_$_iter__58317(s__58318){
return (new cljs.core.LazySeq(null,(function (){
var s__58318__$1 = s__58318;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58318__$1);
if(temp__5735__auto__){
var s__58318__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58318__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58318__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58320 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58319 = (0);
while(true){
if((i__58319 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58319);
cljs.core.chunk_append(b__58320,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__58319,row,c__4580__auto__,size__4581__auto__,b__58320,s__58318__$2,temp__5735__auto__,hs,rows,map__58311,map__58311__$1,cell_fn){
return (function athens$views$data_browser$table_view_$_iter__58317_$_iter__58321(s__58322){
return (new cljs.core.LazySeq(null,((function (i__58319,row,c__4580__auto__,size__4581__auto__,b__58320,s__58318__$2,temp__5735__auto__,hs,rows,map__58311,map__58311__$1,cell_fn){
return (function (){
var s__58322__$1 = s__58322;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58322__$1);
if(temp__5735__auto____$1){
var s__58322__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58322__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58322__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58324 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58323 = (0);
while(true){
if((i__58323 < size__4581__auto____$1)){
var map__58325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58323);
var map__58325__$1 = (((((!((map__58325 == null))))?(((((map__58325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58325):map__58325);
var c = map__58325__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58324,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58350 = (i__58323 + (1));
i__58323 = G__58350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58324),athens$views$data_browser$table_view_$_iter__58317_$_iter__58321(cljs.core.chunk_rest(s__58322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58324),null);
}
} else {
var map__58327 = cljs.core.first(s__58322__$2);
var map__58327__$1 = (((((!((map__58327 == null))))?(((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58327):map__58327);
var c = map__58327__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$views$data_browser$table_view_$_iter__58317_$_iter__58321(cljs.core.rest(s__58322__$2)));
}
} else {
return null;
}
break;
}
});})(i__58319,row,c__4580__auto__,size__4581__auto__,b__58320,s__58318__$2,temp__5735__auto__,hs,rows,map__58311,map__58311__$1,cell_fn))
,null,null));
});})(i__58319,row,c__4580__auto__,size__4581__auto__,b__58320,s__58318__$2,temp__5735__auto__,hs,rows,map__58311,map__58311__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__58351 = (i__58319 + (1));
i__58319 = G__58351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58320),athens$views$data_browser$table_view_$_iter__58317(cljs.core.chunk_rest(s__58318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58320),null);
}
} else {
var row = cljs.core.first(s__58318__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__58318__$2,temp__5735__auto__,hs,rows,map__58311,map__58311__$1,cell_fn){
return (function athens$views$data_browser$table_view_$_iter__58317_$_iter__58329(s__58330){
return (new cljs.core.LazySeq(null,(function (){
var s__58330__$1 = s__58330;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58330__$1);
if(temp__5735__auto____$1){
var s__58330__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58330__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58330__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58332 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58331 = (0);
while(true){
if((i__58331 < size__4581__auto__)){
var map__58333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58331);
var map__58333__$1 = (((((!((map__58333 == null))))?(((((map__58333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58333):map__58333);
var c = map__58333__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58333__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58332,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58352 = (i__58331 + (1));
i__58331 = G__58352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58332),athens$views$data_browser$table_view_$_iter__58317_$_iter__58329(cljs.core.chunk_rest(s__58330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58332),null);
}
} else {
var map__58335 = cljs.core.first(s__58330__$2);
var map__58335__$1 = (((((!((map__58335 == null))))?(((((map__58335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58335):map__58335);
var c = map__58335__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$views$data_browser$table_view_$_iter__58317_$_iter__58329(cljs.core.rest(s__58330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__58318__$2,temp__5735__auto__,hs,rows,map__58311,map__58311__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$views$data_browser$table_view_$_iter__58317(cljs.core.rest(s__58318__$2)));
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
athens.views.data_browser.coll_of_maps_QMARK_ = (function athens$views$data_browser$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.associative_QMARK_,x)) && ((!(cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)))));
});
athens.views.data_browser.tuples_QMARK_ = (function athens$views$data_browser$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.views.data_browser.browser = (function athens$views$data_browser$browser(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58353 = arguments.length;
var i__4790__auto___58354 = (0);
while(true){
if((i__4790__auto___58354 < len__4789__auto___58353)){
args__4795__auto__.push((arguments[i__4790__auto___58354]));

var G__58355 = (i__4790__auto___58354 + (1));
i__4790__auto___58354 = G__58355;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.views.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.views.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic = (function (_,p__58339){
var vec__58340 = p__58339;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58340,(0),null);
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
var increase_limit = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
});
return (function() { 
var G__58356__delegate = function (result,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.views.data_browser.coll_of_maps_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.deref(limit),opts):((((cljs.core.associative_QMARK_(result)) && ((!(cljs.core.sequential_QMARK_(result))))))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref(limit),opts):((athens.views.data_browser.tuples_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.deref(limit),opts):((cljs.core.coll_QMARK_(result))?athens.views.data_browser.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.deref(limit),opts):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.data_browser.footer_style),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((cljs.core.deref(limit) < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increase_limit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
};
var G__58356 = function (result,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__58357__i = 0, G__58357__a = new Array(arguments.length -  1);
while (G__58357__i < G__58357__a.length) {G__58357__a[G__58357__i] = arguments[G__58357__i + 1]; ++G__58357__i;}
  ___$1 = new cljs.core.IndexedSeq(G__58357__a,0,null);
} 
return G__58356__delegate.call(this,result,___$1);};
G__58356.cljs$lang$maxFixedArity = 1;
G__58356.cljs$lang$applyTo = (function (arglist__58358){
var result = cljs.core.first(arglist__58358);
var ___$1 = cljs.core.rest(arglist__58358);
return G__58356__delegate(result,___$1);
});
G__58356.cljs$core$IFn$_invoke$arity$variadic = G__58356__delegate;
return G__58356;
})()
;
}));

(athens.views.data_browser.browser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.views.data_browser.browser.cljs$lang$applyTo = (function (seq58337){
var G__58338 = cljs.core.first(seq58337);
var seq58337__$1 = cljs.core.next(seq58337);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58338,seq58337__$1);
}));


//# sourceMappingURL=athens.views.data_browser.js.map
