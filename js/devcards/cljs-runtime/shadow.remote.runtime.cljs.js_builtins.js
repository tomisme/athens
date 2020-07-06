goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__38479_38485 = clojure.core.protocols.datafy;
var G__38480_38486 = "object";
var G__38481_38487 = (function (o){
if((!((o.__proto__ === Object.prototype)))){
return o;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,key){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,key,goog.object.get(o,key));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),goog.object.getKeys(o))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (coll,k,v){
return goog.object.get(o,k);
})], null));
}
});
goog.object.set(G__38479_38485,G__38480_38486,G__38481_38487);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__38482_38488 = clojure.core.protocols.datafy;
var G__38483_38489 = "array";
var G__38484_38490 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__38482_38488,G__38483_38489,G__38484_38490);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
