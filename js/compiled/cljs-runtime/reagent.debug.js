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
var G__26710__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26711__i = 0, G__26711__a = new Array(arguments.length -  0);
while (G__26711__i < G__26711__a.length) {G__26711__a[G__26711__i] = arguments[G__26711__i + 0]; ++G__26711__i;}
  args = new cljs.core.IndexedSeq(G__26711__a,0,null);
} 
return G__26710__delegate.call(this,args);};
G__26710.cljs$lang$maxFixedArity = 0;
G__26710.cljs$lang$applyTo = (function (arglist__26712){
var args = cljs.core.seq(arglist__26712);
return G__26710__delegate(args);
});
G__26710.cljs$core$IFn$_invoke$arity$variadic = G__26710__delegate;
return G__26710;
})()
);

(o.error = (function() { 
var G__26713__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26714__i = 0, G__26714__a = new Array(arguments.length -  0);
while (G__26714__i < G__26714__a.length) {G__26714__a[G__26714__i] = arguments[G__26714__i + 0]; ++G__26714__i;}
  args = new cljs.core.IndexedSeq(G__26714__a,0,null);
} 
return G__26713__delegate.call(this,args);};
G__26713.cljs$lang$maxFixedArity = 0;
G__26713.cljs$lang$applyTo = (function (arglist__26715){
var args = cljs.core.seq(arglist__26715);
return G__26713__delegate(args);
});
G__26713.cljs$core$IFn$_invoke$arity$variadic = G__26713__delegate;
return G__26713;
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
