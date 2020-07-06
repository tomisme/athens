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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__47419,match){
var map__47420 = p__47419;
var map__47420__$1 = (((((!((map__47420 == null))))?(((((map__47420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47420):map__47420);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__47422(s__47423){
return (new cljs.core.LazySeq(null,(function (){
var s__47423__$1 = s__47423;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47423__$1);
if(temp__5735__auto__){
var s__47423__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47423__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47423__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47425 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47424 = (0);
while(true){
if((i__47424 < size__4581__auto__)){
var vec__47426 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47424);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47426,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47426,(1),null);
cljs.core.chunk_append(b__47425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__47445 = (i__47424 + (1));
i__47424 = G__47445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47425),reitit$frontend$controllers$get_identity_$_iter__47422(cljs.core.chunk_rest(s__47423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47425),null);
}
} else {
var vec__47429 = cljs.core.first(s__47423__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__47422(cljs.core.rest(s__47423__$2)));
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
var G__47432 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47432) : f.call(null,G__47432));
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
var seq__47434_47446 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__47435_47447 = null;
var count__47436_47448 = (0);
var i__47437_47449 = (0);
while(true){
if((i__47437_47449 < count__47436_47448)){
var controller_47450 = chunk__47435_47447.cljs$core$IIndexed$_nth$arity$2(null,i__47437_47449);
reitit.frontend.controllers.apply_controller(controller_47450,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__47451 = seq__47434_47446;
var G__47452 = chunk__47435_47447;
var G__47453 = count__47436_47448;
var G__47454 = (i__47437_47449 + (1));
seq__47434_47446 = G__47451;
chunk__47435_47447 = G__47452;
count__47436_47448 = G__47453;
i__47437_47449 = G__47454;
continue;
} else {
var temp__5735__auto___47455 = cljs.core.seq(seq__47434_47446);
if(temp__5735__auto___47455){
var seq__47434_47456__$1 = temp__5735__auto___47455;
if(cljs.core.chunked_seq_QMARK_(seq__47434_47456__$1)){
var c__4609__auto___47457 = cljs.core.chunk_first(seq__47434_47456__$1);
var G__47458 = cljs.core.chunk_rest(seq__47434_47456__$1);
var G__47459 = c__4609__auto___47457;
var G__47460 = cljs.core.count(c__4609__auto___47457);
var G__47461 = (0);
seq__47434_47446 = G__47458;
chunk__47435_47447 = G__47459;
count__47436_47448 = G__47460;
i__47437_47449 = G__47461;
continue;
} else {
var controller_47462 = cljs.core.first(seq__47434_47456__$1);
reitit.frontend.controllers.apply_controller(controller_47462,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__47463 = cljs.core.next(seq__47434_47456__$1);
var G__47464 = null;
var G__47465 = (0);
var G__47466 = (0);
seq__47434_47446 = G__47463;
chunk__47435_47447 = G__47464;
count__47436_47448 = G__47465;
i__47437_47449 = G__47466;
continue;
}
} else {
}
}
break;
}

var seq__47440_47467 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__47441_47468 = null;
var count__47442_47469 = (0);
var i__47443_47470 = (0);
while(true){
if((i__47443_47470 < count__47442_47469)){
var controller_47471 = chunk__47441_47468.cljs$core$IIndexed$_nth$arity$2(null,i__47443_47470);
reitit.frontend.controllers.apply_controller(controller_47471,new cljs.core.Keyword(null,"start","start",-355208981));


var G__47472 = seq__47440_47467;
var G__47473 = chunk__47441_47468;
var G__47474 = count__47442_47469;
var G__47475 = (i__47443_47470 + (1));
seq__47440_47467 = G__47472;
chunk__47441_47468 = G__47473;
count__47442_47469 = G__47474;
i__47443_47470 = G__47475;
continue;
} else {
var temp__5735__auto___47476 = cljs.core.seq(seq__47440_47467);
if(temp__5735__auto___47476){
var seq__47440_47477__$1 = temp__5735__auto___47476;
if(cljs.core.chunked_seq_QMARK_(seq__47440_47477__$1)){
var c__4609__auto___47478 = cljs.core.chunk_first(seq__47440_47477__$1);
var G__47479 = cljs.core.chunk_rest(seq__47440_47477__$1);
var G__47480 = c__4609__auto___47478;
var G__47481 = cljs.core.count(c__4609__auto___47478);
var G__47482 = (0);
seq__47440_47467 = G__47479;
chunk__47441_47468 = G__47480;
count__47442_47469 = G__47481;
i__47443_47470 = G__47482;
continue;
} else {
var controller_47483 = cljs.core.first(seq__47440_47477__$1);
reitit.frontend.controllers.apply_controller(controller_47483,new cljs.core.Keyword(null,"start","start",-355208981));


var G__47484 = cljs.core.next(seq__47440_47477__$1);
var G__47485 = null;
var G__47486 = (0);
var G__47487 = (0);
seq__47440_47467 = G__47484;
chunk__47441_47468 = G__47485;
count__47442_47469 = G__47486;
i__47443_47470 = G__47487;
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
