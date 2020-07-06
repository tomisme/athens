goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31358__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31362__i = 0, G__31362__a = new Array(arguments.length -  0);
while (G__31362__i < G__31362__a.length) {G__31362__a[G__31362__i] = arguments[G__31362__i + 0]; ++G__31362__i;}
  args = new cljs.core.IndexedSeq(G__31362__a,0,null);
} 
return G__31358__delegate.call(this,args);};
G__31358.cljs$lang$maxFixedArity = 0;
G__31358.cljs$lang$applyTo = (function (arglist__31363){
var args = cljs.core.seq(arglist__31363);
return G__31358__delegate(args);
});
G__31358.cljs$core$IFn$_invoke$arity$variadic = G__31358__delegate;
return G__31358;
})()
);

(o.error = (function() { 
var G__31364__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31365__i = 0, G__31365__a = new Array(arguments.length -  0);
while (G__31365__i < G__31365__a.length) {G__31365__a[G__31365__i] = arguments[G__31365__i + 0]; ++G__31365__i;}
  args = new cljs.core.IndexedSeq(G__31365__a,0,null);
} 
return G__31364__delegate.call(this,args);};
G__31364.cljs$lang$maxFixedArity = 0;
G__31364.cljs$lang$applyTo = (function (arglist__31366){
var args = cljs.core.seq(arglist__31366);
return G__31364__delegate(args);
});
G__31364.cljs$core$IFn$_invoke$arity$variadic = G__31364__delegate;
return G__31364;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
