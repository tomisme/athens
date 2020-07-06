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
var G__26718__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26719__i = 0, G__26719__a = new Array(arguments.length -  0);
while (G__26719__i < G__26719__a.length) {G__26719__a[G__26719__i] = arguments[G__26719__i + 0]; ++G__26719__i;}
  args = new cljs.core.IndexedSeq(G__26719__a,0,null);
} 
return G__26718__delegate.call(this,args);};
G__26718.cljs$lang$maxFixedArity = 0;
G__26718.cljs$lang$applyTo = (function (arglist__26720){
var args = cljs.core.seq(arglist__26720);
return G__26718__delegate(args);
});
G__26718.cljs$core$IFn$_invoke$arity$variadic = G__26718__delegate;
return G__26718;
})()
);

(o.error = (function() { 
var G__26725__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26729__i = 0, G__26729__a = new Array(arguments.length -  0);
while (G__26729__i < G__26729__a.length) {G__26729__a[G__26729__i] = arguments[G__26729__i + 0]; ++G__26729__i;}
  args = new cljs.core.IndexedSeq(G__26729__a,0,null);
} 
return G__26725__delegate.call(this,args);};
G__26725.cljs$lang$maxFixedArity = 0;
G__26725.cljs$lang$applyTo = (function (arglist__26730){
var args = cljs.core.seq(arglist__26730);
return G__26725__delegate(args);
});
G__26725.cljs$core$IFn$_invoke$arity$variadic = G__26725__delegate;
return G__26725;
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
