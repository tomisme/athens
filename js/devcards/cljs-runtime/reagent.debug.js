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
var G__53539__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53550__i = 0, G__53550__a = new Array(arguments.length -  0);
while (G__53550__i < G__53550__a.length) {G__53550__a[G__53550__i] = arguments[G__53550__i + 0]; ++G__53550__i;}
  args = new cljs.core.IndexedSeq(G__53550__a,0,null);
} 
return G__53539__delegate.call(this,args);};
G__53539.cljs$lang$maxFixedArity = 0;
G__53539.cljs$lang$applyTo = (function (arglist__53551){
var args = cljs.core.seq(arglist__53551);
return G__53539__delegate(args);
});
G__53539.cljs$core$IFn$_invoke$arity$variadic = G__53539__delegate;
return G__53539;
})()
);

(o.error = (function() { 
var G__53553__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53556__i = 0, G__53556__a = new Array(arguments.length -  0);
while (G__53556__i < G__53556__a.length) {G__53556__a[G__53556__i] = arguments[G__53556__i + 0]; ++G__53556__i;}
  args = new cljs.core.IndexedSeq(G__53556__a,0,null);
} 
return G__53553__delegate.call(this,args);};
G__53553.cljs$lang$maxFixedArity = 0;
G__53553.cljs$lang$applyTo = (function (arglist__53557){
var args = cljs.core.seq(arglist__53557);
return G__53553__delegate(args);
});
G__53553.cljs$core$IFn$_invoke$arity$variadic = G__53553__delegate;
return G__53553;
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
