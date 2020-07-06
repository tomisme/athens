goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__63224_63232 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__63225_63233 = (function (datoms){
var G__63230 = cljs.core.deref(re_posh.db.store);
var G__63231 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__63230,G__63231) : posh.reagent.transact_BANG_.call(null,G__63230,G__63231));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__63224_63232,G__63225_63233) : re_frame.core.reg_fx.call(null,G__63224_63232,G__63225_63233));

//# sourceMappingURL=re_posh.effects.js.map
