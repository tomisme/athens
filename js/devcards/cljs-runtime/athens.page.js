goog.provide('athens.page');
goog.require('cljs.core');
goog.require('athens.parser');
goog.require('re_frame.core');
athens.page.render_blocks = (function athens$page$render_blocks(){
return (function (block_uid){
var block = (function (){var G__50155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children-sorted","block/children-sorted",106153544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),block_uid], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50155) : re_frame.core.subscribe.call(null,G__50155));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$page$render_blocks_$_iter__50156(s__50157){
return (new cljs.core.LazySeq(null,(function (){
var s__50157__$1 = s__50157;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50157__$1);
if(temp__5735__auto__){
var s__50157__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50157__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50157__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50159 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50158 = (0);
while(true){
if((i__50158 < size__4581__auto__)){
var ch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50158);
cljs.core.chunk_append(b__50159,(function (){var map__50163 = ch;
var map__50163__$1 = (((((!((map__50163 == null))))?(((((map__50163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50163):map__50163);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50163__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50163__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50163__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50163__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50163__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var children_QMARK_ = cljs.core.not_empty(children);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(5)], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return open;
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-down","span.arrow-down",116928935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid transparent",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"5px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50158,map__50163,map__50163__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__50159,s__50157__$2,temp__5735__auto__,block){
return (function (){
var G__50166 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710),dbid,open], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50166) : re_frame.core.dispatch.call(null,G__50166));
});})(i__50158,map__50163,map__50163__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__50159,s__50157__$2,temp__5735__auto__,block))
], null)], null):(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(open);
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-right","span.arrow-right",-1150056712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid transparent",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"5px solid transparent",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50158,map__50163,map__50163__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__50159,s__50157__$2,temp__5735__auto__,block){
return (function (){
var G__50167 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710),dbid,open], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50167) : re_frame.core.dispatch.call(null,G__50167));
});})(i__50158,map__50163,map__50163__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__50159,s__50157__$2,temp__5735__auto__,block))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(10)], null)], null)], null)
)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","middle",((cljs.core.not(open))?"lightgray":null),(12),"pointer","center","flex",(5),"50%",(12)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.controls","span.controls",-932064964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50158,map__50163,map__50163__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__50159,s__50157__$2,temp__5735__auto__,block){
return (function (){
var G__50168 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50168) : re_frame.core.dispatch.call(null,G__50168));
});})(i__50158,map__50163,map__50163__$1,dbid,uid,string,open,children,children_QMARK_,ch,c__4580__auto__,size__4581__auto__,b__50159,s__50157__$2,temp__5735__auto__,block))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.parser.parse(string)], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,uid], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null));
})());

var G__50196 = (i__50158 + (1));
i__50158 = G__50196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50159),athens$page$render_blocks_$_iter__50156(cljs.core.chunk_rest(s__50157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50159),null);
}
} else {
var ch = cljs.core.first(s__50157__$2);
return cljs.core.cons((function (){var map__50169 = ch;
var map__50169__$1 = (((((!((map__50169 == null))))?(((((map__50169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50169):map__50169);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50169__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var children_QMARK_ = cljs.core.not_empty(children);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(5)], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return open;
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-down","span.arrow-down",116928935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid transparent",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"5px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__50169,map__50169__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__50157__$2,temp__5735__auto__,block){
return (function (){
var G__50171 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710),dbid,open], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50171) : re_frame.core.dispatch.call(null,G__50171));
});})(map__50169,map__50169__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__50157__$2,temp__5735__auto__,block))
], null)], null):(cljs.core.truth_((function (){var and__4174__auto__ = children_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(open);
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow-right","span.arrow-right",-1150056712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-top","border-top",-158897573),"5px solid transparent",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"5px solid transparent",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"5px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__50169,map__50169__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__50157__$2,temp__5735__auto__,block){
return (function (){
var G__50172 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710),dbid,open], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50172) : re_frame.core.dispatch.call(null,G__50172));
});})(map__50169,map__50169__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__50157__$2,temp__5735__auto__,block))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(10)], null)], null)], null)
)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center","middle",((cljs.core.not(open))?"lightgray":null),(12),"pointer","center","flex",(5),"50%",(12)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.controls","span.controls",-932064964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__50169,map__50169__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__50157__$2,temp__5735__auto__,block){
return (function (){
var G__50173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50173) : re_frame.core.dispatch.call(null,G__50173));
});})(map__50169,map__50169__$1,dbid,uid,string,open,children,children_QMARK_,ch,s__50157__$2,temp__5735__auto__,block))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.parser.parse(string)], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,uid], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null));
})(),athens$page$render_blocks_$_iter__50156(cljs.core.rest(s__50157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block)));
})())], null);
});
});
athens.page.linked_pattern = (function athens$page$linked_pattern(string){
return cljs.core.re_pattern(["(","\\[{2}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"\\]{2}","|","#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"|","#","\\[{2}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"\\[{2}",")"].join(''));
});
athens.page.unlinked_pattern = (function athens$page$unlinked_pattern(string){
return cljs.core.re_pattern(["[^\\[|#]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join(''));
});
athens.page.block_page = (function athens$page$block_page(){
return (function (id){
var node = (function (){var G__50174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),id], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50174) : re_frame.core.subscribe.call(null,G__50174));
})();
var parents = (function (){var G__50175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children2","block/_children2",-1277243604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),id], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50175) : re_frame.core.subscribe.call(null,G__50175));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" > ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var map__50176 = b;
var map__50176__$1 = (((((!((map__50176 == null))))?(((((map__50176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50176):map__50176);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50176__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50176__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50176__$1,new cljs.core.Keyword("node","title","node/title",628940777));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__50178 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50178) : re_frame.core.dispatch.call(null,G__50178));
})], null),(function (){var or__4185__auto__ = string;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null));
}),cljs.core.deref(parents)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node))], null)], null)], null);
});
});
athens.page.node_page = (function athens$page$node_page(){
return (function (node){
var linked_refs = (function (){var G__50179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","refs","node/refs",-1563406590),athens.page.linked_pattern(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50179) : re_frame.core.subscribe.call(null,G__50179));
})();
var unlinked_refs = (function (){var G__50180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","refs","node/refs",-1563406590),athens.page.unlinked_pattern(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50180) : re_frame.core.subscribe.call(null,G__50180));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.render_blocks,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Linked References"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$page$node_page_$_iter__50181(s__50182){
return (new cljs.core.LazySeq(null,(function (){
var s__50182__$1 = s__50182;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50182__$1);
if(temp__5735__auto__){
var s__50182__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50182__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50182__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50184 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50183 = (0);
while(true){
if((i__50183 < size__4581__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50183);
cljs.core.chunk_append(b__50184,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__50216 = (i__50183 + (1));
i__50183 = G__50216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50184),athens$page$node_page_$_iter__50181(cljs.core.chunk_rest(s__50182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50184),null);
}
} else {
var id = cljs.core.first(s__50182__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),athens$page$node_page_$_iter__50181(cljs.core.rest(s__50182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.deref(linked_refs)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Unlinked References"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$page$node_page_$_iter__50185(s__50186){
return (new cljs.core.LazySeq(null,(function (){
var s__50186__$1 = s__50186;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50186__$1);
if(temp__5735__auto__){
var s__50186__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50186__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50186__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50188 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50187 = (0);
while(true){
if((i__50187 < size__4581__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50187);
cljs.core.chunk_append(b__50188,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__50217 = (i__50187 + (1));
i__50187 = G__50217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50188),athens$page$node_page_$_iter__50185(cljs.core.chunk_rest(s__50186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50188),null);
}
} else {
var id = cljs.core.first(s__50186__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightblue",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0px",new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),athens$page$node_page_$_iter__50185(cljs.core.rest(s__50186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.deref(unlinked_refs)));
})()], null)], null)], null);
});
});
athens.page.main = (function athens$page$main(){
var current_route = (function (){var G__50189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50189) : re_frame.core.subscribe.call(null,G__50189));
})();
return (function (){
var node = (function (){var G__50190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)))], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50190) : re_frame.core.subscribe.call(null,G__50190));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.node_page,cljs.core.deref(node)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.page.block_page,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node))], null))], null);
});
});

//# sourceMappingURL=athens.page.js.map
