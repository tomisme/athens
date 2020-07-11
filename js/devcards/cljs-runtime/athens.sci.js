goog.provide('athens.sci');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.core');
athens.sci.sci_block_QMARK_ = (function athens$sci$sci_block_QMARK_(p__59827){
var map__59828 = p__59827;
var map__59828__$1 = (((((!((map__59828 == null))))?(((((map__59828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59828):map__59828);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59828__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
if(cljs.core.truth_(string)){
return clojure.string.starts_with_QMARK_(string,":sci");
} else {
return null;
}
});
athens.sci.eval_sci_block = (function athens$sci$eval_sci_block(p__59830,context){
var map__59831 = p__59830;
var map__59831__$1 = (((((!((map__59831 == null))))?(((((map__59831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59831):map__59831);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59831__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var code = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(string,(4));
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*1","*1",2110258092,null),context], null)], null));
}catch (e59833){if((e59833 instanceof Error)){
var e = e59833;
return e;
} else {
throw e59833;

}
}});

//# sourceMappingURL=athens.sci.js.map
