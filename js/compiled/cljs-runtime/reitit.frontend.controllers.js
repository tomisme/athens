goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__73508,match){
var map__73509 = p__73508;
var map__73509__$1 = (((((!((map__73509 == null))))?(((((map__73509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73509):map__73509);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73509__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73509__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73509__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__73511(s__73512){
return (new cljs.core.LazySeq(null,(function (){
var s__73512__$1 = s__73512;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73512__$1);
if(temp__5735__auto__){
var s__73512__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73512__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__73512__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__73514 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__73513 = (0);
while(true){
if((i__73513 < size__4581__auto__)){
var vec__73516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__73513);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73516,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73516,(1),null);
cljs.core.chunk_append(b__73514,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__73541 = (i__73513 + (1));
i__73513 = G__73541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73514),reitit$frontend$controllers$get_identity_$_iter__73511(cljs.core.chunk_rest(s__73512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73514),null);
}
} else {
var vec__73519 = cljs.core.first(s__73512__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73519,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73519,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__73511(cljs.core.rest(s__73512__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__73522 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73522) : f.call(null,G__73522));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__73525_73543 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__73526_73544 = null;
var count__73527_73545 = (0);
var i__73528_73546 = (0);
while(true){
if((i__73528_73546 < count__73527_73545)){
var controller_73547 = chunk__73526_73544.cljs$core$IIndexed$_nth$arity$2(null,i__73528_73546);
reitit.frontend.controllers.apply_controller(controller_73547,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73548 = seq__73525_73543;
var G__73549 = chunk__73526_73544;
var G__73550 = count__73527_73545;
var G__73551 = (i__73528_73546 + (1));
seq__73525_73543 = G__73548;
chunk__73526_73544 = G__73549;
count__73527_73545 = G__73550;
i__73528_73546 = G__73551;
continue;
} else {
var temp__5735__auto___73552 = cljs.core.seq(seq__73525_73543);
if(temp__5735__auto___73552){
var seq__73525_73553__$1 = temp__5735__auto___73552;
if(cljs.core.chunked_seq_QMARK_(seq__73525_73553__$1)){
var c__4609__auto___73556 = cljs.core.chunk_first(seq__73525_73553__$1);
var G__73557 = cljs.core.chunk_rest(seq__73525_73553__$1);
var G__73558 = c__4609__auto___73556;
var G__73559 = cljs.core.count(c__4609__auto___73556);
var G__73560 = (0);
seq__73525_73543 = G__73557;
chunk__73526_73544 = G__73558;
count__73527_73545 = G__73559;
i__73528_73546 = G__73560;
continue;
} else {
var controller_73561 = cljs.core.first(seq__73525_73553__$1);
reitit.frontend.controllers.apply_controller(controller_73561,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73562 = cljs.core.next(seq__73525_73553__$1);
var G__73563 = null;
var G__73564 = (0);
var G__73565 = (0);
seq__73525_73543 = G__73562;
chunk__73526_73544 = G__73563;
count__73527_73545 = G__73564;
i__73528_73546 = G__73565;
continue;
}
} else {
}
}
break;
}

var seq__73531_73566 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__73532_73567 = null;
var count__73533_73568 = (0);
var i__73534_73569 = (0);
while(true){
if((i__73534_73569 < count__73533_73568)){
var controller_73570 = chunk__73532_73567.cljs$core$IIndexed$_nth$arity$2(null,i__73534_73569);
reitit.frontend.controllers.apply_controller(controller_73570,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73572 = seq__73531_73566;
var G__73573 = chunk__73532_73567;
var G__73574 = count__73533_73568;
var G__73575 = (i__73534_73569 + (1));
seq__73531_73566 = G__73572;
chunk__73532_73567 = G__73573;
count__73533_73568 = G__73574;
i__73534_73569 = G__73575;
continue;
} else {
var temp__5735__auto___73576 = cljs.core.seq(seq__73531_73566);
if(temp__5735__auto___73576){
var seq__73531_73577__$1 = temp__5735__auto___73576;
if(cljs.core.chunked_seq_QMARK_(seq__73531_73577__$1)){
var c__4609__auto___73578 = cljs.core.chunk_first(seq__73531_73577__$1);
var G__73579 = cljs.core.chunk_rest(seq__73531_73577__$1);
var G__73580 = c__4609__auto___73578;
var G__73581 = cljs.core.count(c__4609__auto___73578);
var G__73582 = (0);
seq__73531_73566 = G__73579;
chunk__73532_73567 = G__73580;
count__73533_73568 = G__73581;
i__73534_73569 = G__73582;
continue;
} else {
var controller_73583 = cljs.core.first(seq__73531_73577__$1);
reitit.frontend.controllers.apply_controller(controller_73583,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73584 = cljs.core.next(seq__73531_73577__$1);
var G__73585 = null;
var G__73586 = (0);
var G__73587 = (0);
seq__73531_73566 = G__73584;
chunk__73532_73567 = G__73585;
count__73533_73568 = G__73586;
i__73534_73569 = G__73587;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
