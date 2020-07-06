goog.provide('re_posh.db');
goog.require('cljs.core');
goog.require('posh.reagent');
re_posh.db.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
re_posh.db.connect_BANG_ = (function re_posh$db$connect_BANG_(conn){

(posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));

return cljs.core.reset_BANG_(re_posh.db.store,conn);
});

//# sourceMappingURL=re_posh.db.js.map
