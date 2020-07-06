goog.provide('athens_devcards.textarea');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('devcards.core');
athens_devcards.textarea.ll = (function athens_devcards$textarea$ll(x){
return (function (p1__49092_SHARP_){
return console.log(x,": ",p1__49092_SHARP_);
});
});
athens_devcards.textarea.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),true,new cljs.core.Keyword(null,"str-content","str-content",297549190),"Hello I am a block",new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"post-change","post-change",-1827176533),cljs.core.List.EMPTY], null));
athens_devcards.textarea.get_caret_pos_num = (function athens_devcards$textarea$get_caret_pos_num(){
return null;
});
athens_devcards.textarea.get_caret_px_pos = (function athens_devcards$textarea$get_caret_px_pos(){
return null;
});
athens_devcards.textarea.append_to_input = (function athens_devcards$textarea$append_to_input(char$){
var f = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens_devcards.textarea.state,cljs.core.update,new cljs.core.Keyword(null,"str-content","str-content",297549190),cljs.core.str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens_devcards.textarea.state,cljs.core.update,new cljs.core.Keyword(null,"post-change","post-change",-1827176533),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
});
athens_devcards.textarea.handle_post_change = (function athens_devcards$textarea$handle_post_change(p__49093){
while(true){
var map__49094 = p__49093;
var map__49094__$1 = (((((!((map__49094 == null))))?(((((map__49094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49094):map__49094);
var ctx = map__49094__$1;
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49094__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var temp__5733__auto__ = cljs.core.seq(queue);
if(temp__5733__auto__){
var vec__49096 = temp__5733__auto__;
var seq__49097 = cljs.core.seq(vec__49096);
var first__49098 = cljs.core.first(seq__49097);
var seq__49097__$1 = cljs.core.next(seq__49097);
var step = first__49098;
var next_queue = seq__49097__$1;
var G__49120 = (function (){var G__49099 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"queue","queue",1455835879),next_queue);
return (step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(G__49099) : step.call(null,G__49099));
})();
p__49093 = G__49120;
continue;
} else {
return ctx;
}
break;
}
});
athens_devcards.textarea.on_input_change = (function athens_devcards$textarea$on_input_change(e){
var fexpr__49100_49122 = athens_devcards.textarea.ll("onChange");
(fexpr__49100_49122.cljs$core$IFn$_invoke$arity$1 ? fexpr__49100_49122.cljs$core$IFn$_invoke$arity$1(e) : fexpr__49100_49122.call(null,e));

var target = e.target;
var value = target.value;
var selectionStart = target.selectionStart;
var selectionEnd = target.selectionEnd;
var _ = (function (){var G__49102 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectionStart),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectionEnd)].join('');
var fexpr__49101 = athens_devcards.textarea.ll("sel");
return (fexpr__49101.cljs$core$IFn$_invoke$arity$1 ? fexpr__49101.cljs$core$IFn$_invoke$arity$1(G__49102) : fexpr__49101.call(null,G__49102));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens_devcards.textarea.state,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),value);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens_devcards.textarea.state,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),target);

var seq__49103_49126 = cljs.core.seq(cljs.core.seq(new cljs.core.Keyword(null,"post-change","post-change",-1827176533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens_devcards.textarea.state))));
var chunk__49104_49127 = null;
var count__49105_49128 = (0);
var i__49106_49129 = (0);
while(true){
if((i__49106_49129 < count__49105_49128)){
var f_49130 = chunk__49104_49127.cljs$core$IIndexed$_nth$arity$2(null,i__49106_49129);
(f_49130.cljs$core$IFn$_invoke$arity$0 ? f_49130.cljs$core$IFn$_invoke$arity$0() : f_49130.call(null));


var G__49131 = seq__49103_49126;
var G__49132 = chunk__49104_49127;
var G__49133 = count__49105_49128;
var G__49134 = (i__49106_49129 + (1));
seq__49103_49126 = G__49131;
chunk__49104_49127 = G__49132;
count__49105_49128 = G__49133;
i__49106_49129 = G__49134;
continue;
} else {
var temp__5735__auto___49135 = cljs.core.seq(seq__49103_49126);
if(temp__5735__auto___49135){
var seq__49103_49136__$1 = temp__5735__auto___49135;
if(cljs.core.chunked_seq_QMARK_(seq__49103_49136__$1)){
var c__4609__auto___49137 = cljs.core.chunk_first(seq__49103_49136__$1);
var G__49138 = cljs.core.chunk_rest(seq__49103_49136__$1);
var G__49139 = c__4609__auto___49137;
var G__49140 = cljs.core.count(c__4609__auto___49137);
var G__49141 = (0);
seq__49103_49126 = G__49138;
chunk__49104_49127 = G__49139;
count__49105_49128 = G__49140;
i__49106_49129 = G__49141;
continue;
} else {
var f_49142 = cljs.core.first(seq__49103_49136__$1);
(f_49142.cljs$core$IFn$_invoke$arity$0 ? f_49142.cljs$core$IFn$_invoke$arity$0() : f_49142.call(null));


var G__49143 = cljs.core.next(seq__49103_49136__$1);
var G__49144 = null;
var G__49145 = (0);
var G__49146 = (0);
seq__49103_49126 = G__49143;
chunk__49104_49127 = G__49144;
count__49105_49128 = G__49145;
i__49106_49129 = G__49146;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens_devcards.textarea.state,cljs.core.assoc,new cljs.core.Keyword(null,"post-change","post-change",-1827176533),cljs.core.List.EMPTY);
});
athens_devcards.textarea.on_input_key_down = (function athens_devcards$textarea$on_input_key_down(e){
var fexpr__49107_49147 = athens_devcards.textarea.ll("onKeyDown");
(fexpr__49107_49147.cljs$core$IFn$_invoke$arity$1 ? fexpr__49107_49147.cljs$core$IFn$_invoke$arity$1(e) : fexpr__49107_49147.call(null,e));

var G__49108 = e.keyCode;
switch (G__49108) {
case (57):
return athens_devcards.textarea.append_to_input(")");

break;
case (219):
return athens_devcards.textarea.append_to_input("]");

break;
default:
return null;

}
});
athens_devcards.textarea.block_input = (function athens_devcards$textarea$block_input(){
var map__49109 = cljs.core.deref(athens_devcards.textarea.state);
var map__49109__$1 = (((((!((map__49109 == null))))?(((((map__49109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49109):map__49109);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49109__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Helvetica Neue', Helvetica, Arial, sans-serif"], null),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),false,new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens_devcards.textarea.on_input_change,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens_devcards.textarea.on_input_key_down], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),console.log,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#5dc2ff",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text",new cljs.core.Keyword(null,"padding","padding",1660304693),(10)], null)], null),str_content], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens_devcards.textarea","athens_devcards.textarea",1395718376),new cljs.core.Keyword(null,"textbox","textbox",919459482)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"textbox",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens_devcards !== 'undefined') && (typeof athens_devcards.textarea !== 'undefined') && (typeof athens_devcards.textarea.t_athens_devcards$textarea49111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens_devcards.textarea.t_athens_devcards$textarea49111 = (function (meta49112){
this.meta49112 = meta49112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens_devcards.textarea.t_athens_devcards$textarea49111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49113,meta49112__$1){
var self__ = this;
var _49113__$1 = this;
return (new athens_devcards.textarea.t_athens_devcards$textarea49111(meta49112__$1));
}));

(athens_devcards.textarea.t_athens_devcards$textarea49111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49113){
var self__ = this;
var _49113__$1 = this;
return self__.meta49112;
}));

(athens_devcards.textarea.t_athens_devcards$textarea49111.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens_devcards.textarea.t_athens_devcards$textarea49111.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48926__auto__,devcard_opts__48927__auto__){
var self__ = this;
var this__48926__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48927__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48945__auto__ = athens_devcards.textarea.block_input;
if(cljs.core.fn_QMARK_(v__48945__auto__)){
return (function (data_atom__48946__auto__,owner__48947__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48945__auto__,data_atom__48946__auto__,owner__48947__auto__], null));
});
} else {
return reagent.core.as_element(v__48945__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48927__auto__))], 0))], 0));
}));

(athens_devcards.textarea.t_athens_devcards$textarea49111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49112","meta49112",-534515767,null)], null);
}));

(athens_devcards.textarea.t_athens_devcards$textarea49111.cljs$lang$type = true);

(athens_devcards.textarea.t_athens_devcards$textarea49111.cljs$lang$ctorStr = "athens-devcards.textarea/t_athens_devcards$textarea49111");

(athens_devcards.textarea.t_athens_devcards$textarea49111.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens-devcards.textarea/t_athens_devcards$textarea49111");
}));

/**
 * Positional factory function for athens-devcards.textarea/t_athens_devcards$textarea49111.
 */
athens_devcards.textarea.__GT_t_athens_devcards$textarea49111 = (function athens_devcards$textarea$__GT_t_athens_devcards$textarea49111(meta49112){
return (new athens_devcards.textarea.t_athens_devcards$textarea49111(meta49112));
});

}

return (new athens_devcards.textarea.t_athens_devcards$textarea49111(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens_devcards.textarea","athens_devcards.textarea",1395718376),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"state",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens_devcards.textarea.state,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens_devcards.textarea.js.map
