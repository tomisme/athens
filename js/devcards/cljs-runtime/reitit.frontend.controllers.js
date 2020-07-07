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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50206,match){
var map__50207 = p__50206;
var map__50207__$1 = (((((!((map__50207 == null))))?(((((map__50207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50207):map__50207);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50210(s__50211){
return (new cljs.core.LazySeq(null,(function (){
var s__50211__$1 = s__50211;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50211__$1);
if(temp__5735__auto__){
var s__50211__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50211__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50211__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50213 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50212 = (0);
while(true){
if((i__50212 < size__4581__auto__)){
var vec__50214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50212);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50214,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50214,(1),null);
cljs.core.chunk_append(b__50213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50232 = (i__50212 + (1));
i__50212 = G__50232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50213),reitit$frontend$controllers$get_identity_$_iter__50210(cljs.core.chunk_rest(s__50211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50213),null);
}
} else {
var vec__50217 = cljs.core.first(s__50211__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50217,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50217,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50210(cljs.core.rest(s__50211__$2)));
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
var G__50220 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50220) : f.call(null,G__50220));
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
var seq__50221_50233 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50222_50234 = null;
var count__50223_50235 = (0);
var i__50224_50236 = (0);
while(true){
if((i__50224_50236 < count__50223_50235)){
var controller_50237 = chunk__50222_50234.cljs$core$IIndexed$_nth$arity$2(null,i__50224_50236);
reitit.frontend.controllers.apply_controller(controller_50237,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50238 = seq__50221_50233;
var G__50239 = chunk__50222_50234;
var G__50240 = count__50223_50235;
var G__50241 = (i__50224_50236 + (1));
seq__50221_50233 = G__50238;
chunk__50222_50234 = G__50239;
count__50223_50235 = G__50240;
i__50224_50236 = G__50241;
continue;
} else {
var temp__5735__auto___50243 = cljs.core.seq(seq__50221_50233);
if(temp__5735__auto___50243){
var seq__50221_50244__$1 = temp__5735__auto___50243;
if(cljs.core.chunked_seq_QMARK_(seq__50221_50244__$1)){
var c__4609__auto___50245 = cljs.core.chunk_first(seq__50221_50244__$1);
var G__50246 = cljs.core.chunk_rest(seq__50221_50244__$1);
var G__50247 = c__4609__auto___50245;
var G__50248 = cljs.core.count(c__4609__auto___50245);
var G__50249 = (0);
seq__50221_50233 = G__50246;
chunk__50222_50234 = G__50247;
count__50223_50235 = G__50248;
i__50224_50236 = G__50249;
continue;
} else {
var controller_50250 = cljs.core.first(seq__50221_50244__$1);
reitit.frontend.controllers.apply_controller(controller_50250,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50251 = cljs.core.next(seq__50221_50244__$1);
var G__50252 = null;
var G__50253 = (0);
var G__50254 = (0);
seq__50221_50233 = G__50251;
chunk__50222_50234 = G__50252;
count__50223_50235 = G__50253;
i__50224_50236 = G__50254;
continue;
}
} else {
}
}
break;
}

var seq__50225_50255 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50226_50256 = null;
var count__50227_50257 = (0);
var i__50228_50258 = (0);
while(true){
if((i__50228_50258 < count__50227_50257)){
var controller_50259 = chunk__50226_50256.cljs$core$IIndexed$_nth$arity$2(null,i__50228_50258);
reitit.frontend.controllers.apply_controller(controller_50259,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50260 = seq__50225_50255;
var G__50261 = chunk__50226_50256;
var G__50262 = count__50227_50257;
var G__50263 = (i__50228_50258 + (1));
seq__50225_50255 = G__50260;
chunk__50226_50256 = G__50261;
count__50227_50257 = G__50262;
i__50228_50258 = G__50263;
continue;
} else {
var temp__5735__auto___50264 = cljs.core.seq(seq__50225_50255);
if(temp__5735__auto___50264){
var seq__50225_50265__$1 = temp__5735__auto___50264;
if(cljs.core.chunked_seq_QMARK_(seq__50225_50265__$1)){
var c__4609__auto___50266 = cljs.core.chunk_first(seq__50225_50265__$1);
var G__50267 = cljs.core.chunk_rest(seq__50225_50265__$1);
var G__50268 = c__4609__auto___50266;
var G__50269 = cljs.core.count(c__4609__auto___50266);
var G__50270 = (0);
seq__50225_50255 = G__50267;
chunk__50226_50256 = G__50268;
count__50227_50257 = G__50269;
i__50228_50258 = G__50270;
continue;
} else {
var controller_50271 = cljs.core.first(seq__50225_50265__$1);
reitit.frontend.controllers.apply_controller(controller_50271,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50272 = cljs.core.next(seq__50225_50265__$1);
var G__50273 = null;
var G__50274 = (0);
var G__50275 = (0);
seq__50225_50255 = G__50272;
chunk__50226_50256 = G__50273;
count__50227_50257 = G__50274;
i__50228_50258 = G__50275;
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
