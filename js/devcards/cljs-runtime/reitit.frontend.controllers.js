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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__52024,match){
var map__52025 = p__52024;
var map__52025__$1 = (((((!((map__52025 == null))))?(((((map__52025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52025):map__52025);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__52030(s__52031){
return (new cljs.core.LazySeq(null,(function (){
var s__52031__$1 = s__52031;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52031__$1);
if(temp__5735__auto__){
var s__52031__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52031__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52031__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52033 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52032 = (0);
while(true){
if((i__52032 < size__4581__auto__)){
var vec__52034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52032);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52034,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52034,(1),null);
cljs.core.chunk_append(b__52033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__52049 = (i__52032 + (1));
i__52032 = G__52049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52033),reitit$frontend$controllers$get_identity_$_iter__52030(cljs.core.chunk_rest(s__52031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52033),null);
}
} else {
var vec__52037 = cljs.core.first(s__52031__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52037,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52037,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__52030(cljs.core.rest(s__52031__$2)));
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
var G__52040 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52040) : f.call(null,G__52040));
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
var seq__52041_52050 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__52042_52051 = null;
var count__52043_52052 = (0);
var i__52044_52053 = (0);
while(true){
if((i__52044_52053 < count__52043_52052)){
var controller_52054 = chunk__52042_52051.cljs$core$IIndexed$_nth$arity$2(null,i__52044_52053);
reitit.frontend.controllers.apply_controller(controller_52054,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52055 = seq__52041_52050;
var G__52056 = chunk__52042_52051;
var G__52057 = count__52043_52052;
var G__52058 = (i__52044_52053 + (1));
seq__52041_52050 = G__52055;
chunk__52042_52051 = G__52056;
count__52043_52052 = G__52057;
i__52044_52053 = G__52058;
continue;
} else {
var temp__5735__auto___52059 = cljs.core.seq(seq__52041_52050);
if(temp__5735__auto___52059){
var seq__52041_52060__$1 = temp__5735__auto___52059;
if(cljs.core.chunked_seq_QMARK_(seq__52041_52060__$1)){
var c__4609__auto___52061 = cljs.core.chunk_first(seq__52041_52060__$1);
var G__52062 = cljs.core.chunk_rest(seq__52041_52060__$1);
var G__52063 = c__4609__auto___52061;
var G__52064 = cljs.core.count(c__4609__auto___52061);
var G__52065 = (0);
seq__52041_52050 = G__52062;
chunk__52042_52051 = G__52063;
count__52043_52052 = G__52064;
i__52044_52053 = G__52065;
continue;
} else {
var controller_52066 = cljs.core.first(seq__52041_52060__$1);
reitit.frontend.controllers.apply_controller(controller_52066,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52067 = cljs.core.next(seq__52041_52060__$1);
var G__52068 = null;
var G__52069 = (0);
var G__52070 = (0);
seq__52041_52050 = G__52067;
chunk__52042_52051 = G__52068;
count__52043_52052 = G__52069;
i__52044_52053 = G__52070;
continue;
}
} else {
}
}
break;
}

var seq__52045_52077 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__52046_52078 = null;
var count__52047_52079 = (0);
var i__52048_52080 = (0);
while(true){
if((i__52048_52080 < count__52047_52079)){
var controller_52081 = chunk__52046_52078.cljs$core$IIndexed$_nth$arity$2(null,i__52048_52080);
reitit.frontend.controllers.apply_controller(controller_52081,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52082 = seq__52045_52077;
var G__52083 = chunk__52046_52078;
var G__52084 = count__52047_52079;
var G__52085 = (i__52048_52080 + (1));
seq__52045_52077 = G__52082;
chunk__52046_52078 = G__52083;
count__52047_52079 = G__52084;
i__52048_52080 = G__52085;
continue;
} else {
var temp__5735__auto___52086 = cljs.core.seq(seq__52045_52077);
if(temp__5735__auto___52086){
var seq__52045_52087__$1 = temp__5735__auto___52086;
if(cljs.core.chunked_seq_QMARK_(seq__52045_52087__$1)){
var c__4609__auto___52088 = cljs.core.chunk_first(seq__52045_52087__$1);
var G__52089 = cljs.core.chunk_rest(seq__52045_52087__$1);
var G__52090 = c__4609__auto___52088;
var G__52091 = cljs.core.count(c__4609__auto___52088);
var G__52092 = (0);
seq__52045_52077 = G__52089;
chunk__52046_52078 = G__52090;
count__52047_52079 = G__52091;
i__52048_52080 = G__52092;
continue;
} else {
var controller_52093 = cljs.core.first(seq__52045_52087__$1);
reitit.frontend.controllers.apply_controller(controller_52093,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52094 = cljs.core.next(seq__52045_52087__$1);
var G__52095 = null;
var G__52096 = (0);
var G__52097 = (0);
seq__52045_52077 = G__52094;
chunk__52046_52078 = G__52095;
count__52047_52079 = G__52096;
i__52048_52080 = G__52097;
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
