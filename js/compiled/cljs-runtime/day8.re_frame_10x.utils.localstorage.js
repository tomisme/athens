goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__52988 = arguments.length;
switch (G__52988) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__52990 = cljs.core.seq(Object.keys(localStorage));
var chunk__52991 = null;
var count__52992 = (0);
var i__52993 = (0);
while(true){
if((i__52993 < count__52992)){
var k = chunk__52991.cljs$core$IIndexed$_nth$arity$2(null,i__52993);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53041 = seq__52990;
var G__53042 = chunk__52991;
var G__53043 = count__52992;
var G__53044 = (i__52993 + (1));
seq__52990 = G__53041;
chunk__52991 = G__53042;
count__52992 = G__53043;
i__52993 = G__53044;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52990);
if(temp__5735__auto__){
var seq__52990__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52990__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52990__$1);
var G__53045 = cljs.core.chunk_rest(seq__52990__$1);
var G__53046 = c__4609__auto__;
var G__53047 = cljs.core.count(c__4609__auto__);
var G__53048 = (0);
seq__52990 = G__53045;
chunk__52991 = G__53046;
count__52992 = G__53047;
i__52993 = G__53048;
continue;
} else {
var k = cljs.core.first(seq__52990__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53055 = cljs.core.next(seq__52990__$1);
var G__53056 = null;
var G__53057 = (0);
var G__53058 = (0);
seq__52990 = G__53055;
chunk__52991 = G__53056;
count__52992 = G__53057;
i__52993 = G__53058;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
