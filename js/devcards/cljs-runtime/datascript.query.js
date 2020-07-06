goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58910,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58915 = k58910;
var G__58915__$1 = (((G__58915 instanceof cljs.core.Keyword))?G__58915.fqn:null);
switch (G__58915__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58910,else__4442__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58916){
var vec__58917 = p__58916;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58917,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58917,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.query.Context{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58909){
var self__ = this;
var G__58909__$1 = this;
return (new cljs.core.RecordIter((0),G__58909__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58921 = (function (coll__4436__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58921(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58911,other58912){
var self__ = this;
var this58911__$1 = this;
return (((!((other58912 == null)))) && ((this58911__$1.constructor === other58912.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58911__$1.rels,other58912.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58911__$1.sources,other58912.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58911__$1.rules,other58912.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58911__$1.__extmap,other58912.__extmap)));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58909){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58923 = cljs.core.keyword_identical_QMARK_;
var expr__58924 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58926 = new cljs.core.Keyword(null,"rels","rels",1770187185);
var G__58927 = expr__58924;
return (pred__58923.cljs$core$IFn$_invoke$arity$2 ? pred__58923.cljs$core$IFn$_invoke$arity$2(G__58926,G__58927) : pred__58923.call(null,G__58926,G__58927));
})())){
return (new datascript.query.Context(G__58909,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58928 = new cljs.core.Keyword(null,"sources","sources",-321166424);
var G__58929 = expr__58924;
return (pred__58923.cljs$core$IFn$_invoke$arity$2 ? pred__58923.cljs$core$IFn$_invoke$arity$2(G__58928,G__58929) : pred__58923.call(null,G__58928,G__58929));
})())){
return (new datascript.query.Context(self__.rels,G__58909,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58930 = new cljs.core.Keyword(null,"rules","rules",1198912366);
var G__58931 = expr__58924;
return (pred__58923.cljs$core$IFn$_invoke$arity$2 ? pred__58923.cljs$core$IFn$_invoke$arity$2(G__58930,G__58931) : pred__58923.call(null,G__58930,G__58931));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__58909,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58909),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58909){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__58909,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__58914){
var extmap__4478__auto__ = (function (){var G__58937 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58914,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__58914)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58937);
} else {
return G__58937;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__58914),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__58914),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__58914),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58939,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58948 = k58939;
var G__58948__$1 = (((G__58948 instanceof cljs.core.Keyword))?G__58948.fqn:null);
switch (G__58948__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58939,else__4442__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58949){
var vec__58950 = p__58949;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58950,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58950,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.query.Relation{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58938){
var self__ = this;
var G__58938__$1 = this;
return (new cljs.core.RecordIter((0),G__58938__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58953 = (function (coll__4436__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58953(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58940,other58941){
var self__ = this;
var this58940__$1 = this;
return (((!((other58941 == null)))) && ((this58940__$1.constructor === other58941.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58940__$1.attrs,other58941.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58940__$1.tuples,other58941.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58940__$1.__extmap,other58941.__extmap)));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58938){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58954 = cljs.core.keyword_identical_QMARK_;
var expr__58955 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58962 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);
var G__58963 = expr__58955;
return (pred__58954.cljs$core$IFn$_invoke$arity$2 ? pred__58954.cljs$core$IFn$_invoke$arity$2(G__58962,G__58963) : pred__58954.call(null,G__58962,G__58963));
})())){
return (new datascript.query.Relation(G__58938,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58964 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);
var G__58965 = expr__58955;
return (pred__58954.cljs$core$IFn$_invoke$arity$2 ? pred__58954.cljs$core$IFn$_invoke$arity$2(G__58964,G__58965) : pred__58954.call(null,G__58964,G__58965));
})())){
return (new datascript.query.Relation(self__.attrs,G__58938,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58938),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58938){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__58938,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__58942){
var extmap__4478__auto__ = (function (){var G__58967 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58942,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__58942)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58967);
} else {
return G__58967;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__58942),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__58942),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59509 = arguments.length;
var i__4790__auto___59510 = (0);
while(true){
if((i__4790__auto___59510 < len__4789__auto___59509)){
args__4795__auto__.push((arguments[i__4790__auto___59510]));

var G__59511 = (i__4790__auto___59510 + (1));
i__4790__auto___59510 = G__59511;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq58968){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58968));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__58974 = arguments.length;
switch (G__58974) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___59514 = arguments.length;
var i__4790__auto___59515 = (0);
while(true){
if((i__4790__auto___59515 < len__4789__auto___59514)){
args_arr__4810__auto__.push((arguments[i__4790__auto___59515]));

var G__59516 = (i__4790__auto___59515 + (1));
i__4790__auto___59515 = G__59516;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq58971){
var G__58972 = cljs.core.first(seq58971);
var seq58971__$1 = cljs.core.next(seq58971);
var G__58973 = cljs.core.first(seq58971__$1);
var seq58971__$2 = cljs.core.next(seq58971__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58972,G__58973,seq58971__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (cljs.core.every_QMARK_((function (p1__58975_SHARP_){
return cljs.core.contains_QMARK_(b,p1__58975_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__58976_SHARP_){
return cljs.core.contains_QMARK_(b,p1__58976_SHARP_);
}),cljs.core.keys(a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__58986){
var vec__58987 = p__58986;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58987,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58987,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__58997){
var vec__59001 = p__58997;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4666__auto___59534 = l1;
var i_59535 = (0);
while(true){
if((i_59535 < n__4666__auto___59534)){
(res[i_59535] = (t1[(idxs1[i_59535])]));

var G__59536 = (i_59535 + (1));
i_59535 = G__59536;
continue;
} else {
}
break;
}

var n__4666__auto___59537 = l2;
var i_59538 = (0);
while(true){
if((i_59538 < n__4666__auto___59537)){
(res[(l1 + i_59538)] = (t2[(idxs2[i_59538])]));

var G__59539 = (i_59538 + (1));
i_59538 = G__59539;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__59012 = a;
var map__59012__$1 = (((((!((map__59012 == null))))?(((((map__59012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59012):map__59012);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59012__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__59015 = b;
var map__59015__$1 = (((((!((map__59015 == null))))?(((((map__59015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59015):map__59015);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59015__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4582__auto__ = (function datascript$query$sum_rel_$_iter__59019(s__59020){
return (new cljs.core.LazySeq(null,(function (){
var s__59020__$1 = s__59020;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59020__$1);
if(temp__5735__auto__){
var s__59020__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59020__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59020__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59022 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59021 = (0);
while(true){
if((i__59021 < size__4581__auto__)){
var vec__59024 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59021);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(1),null);
cljs.core.chunk_append(b__59022,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__59543 = (i__59021 + (1));
i__59021 = G__59543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59022),datascript$query$sum_rel_$_iter__59019(cljs.core.chunk_rest(s__59020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59022),null);
}
} else {
var vec__59028 = cljs.core.first(s__59020__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59028,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59028,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__59019(cljs.core.rest(s__59020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__59033_59548 = cljs.core.seq(idxb__GT_idxa);
var chunk__59034_59549 = null;
var count__59035_59550 = (0);
var i__59036_59551 = (0);
while(true){
if((i__59036_59551 < count__59035_59550)){
var vec__59043_59564 = chunk__59034_59549.cljs$core$IIndexed$_nth$arity$2(null,i__59036_59551);
var idx_b_59565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59043_59564,(0),null);
var idx_a_59566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59043_59564,(1),null);
(tuple_SINGLEQUOTE_[idx_a_59566] = (tuple_b[idx_b_59565]));


var G__59567 = seq__59033_59548;
var G__59568 = chunk__59034_59549;
var G__59569 = count__59035_59550;
var G__59570 = (i__59036_59551 + (1));
seq__59033_59548 = G__59567;
chunk__59034_59549 = G__59568;
count__59035_59550 = G__59569;
i__59036_59551 = G__59570;
continue;
} else {
var temp__5735__auto___59572 = cljs.core.seq(seq__59033_59548);
if(temp__5735__auto___59572){
var seq__59033_59573__$1 = temp__5735__auto___59572;
if(cljs.core.chunked_seq_QMARK_(seq__59033_59573__$1)){
var c__4609__auto___59574 = cljs.core.chunk_first(seq__59033_59573__$1);
var G__59575 = cljs.core.chunk_rest(seq__59033_59573__$1);
var G__59576 = c__4609__auto___59574;
var G__59577 = cljs.core.count(c__4609__auto___59574);
var G__59578 = (0);
seq__59033_59548 = G__59575;
chunk__59034_59549 = G__59576;
count__59035_59550 = G__59577;
i__59036_59551 = G__59578;
continue;
} else {
var vec__59046_59579 = cljs.core.first(seq__59033_59573__$1);
var idx_b_59580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59046_59579,(0),null);
var idx_a_59581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59046_59579,(1),null);
(tuple_SINGLEQUOTE_[idx_a_59581] = (tuple_b[idx_b_59580]));


var G__59583 = cljs.core.next(seq__59033_59573__$1);
var G__59584 = null;
var G__59585 = (0);
var G__59586 = (0);
seq__59033_59548 = G__59583;
chunk__59034_59549 = G__59584;
count__59035_59550 = G__59585;
i__59036_59551 = G__59586;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__59049 = (function (){var G__59051 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__59052 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__59051,G__59052) : datascript.query.sum_rel.call(null,G__59051,G__59052));
})();
var G__59050 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__59049,G__59050) : datascript.query.sum_rel.call(null,G__59049,G__59050));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__59056 = arguments.length;
switch (G__59056) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59596 = arguments.length;
var i__4790__auto___59597 = (0);
while(true){
if((i__4790__auto___59597 < len__4789__auto___59596)){
args__4795__auto__.push((arguments[i__4790__auto___59597]));

var G__59598 = (i__4790__auto___59597 + (1));
i__4790__auto___59597 = G__59598;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
}));

(datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq59061){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59061));
}));

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5737__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5737__auto__ == null)){
return else_val;
} else {
var datom = temp__5737__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59602 = arguments.length;
var i__4790__auto___59603 = (0);
while(true){
if((i__4790__auto___59603 < len__4789__auto___59602)){
args__4795__auto__.push((arguments[i__4790__auto___59603]));

var G__59607 = (i__4790__auto___59603 + (1));
i__4790__auto___59603 = G__59607;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5739__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5739__auto__ == null)){
return null;
} else {
var datom = temp__5739__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
}));

(datascript.query._get_some.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datascript.query._get_some.cljs$lang$applyTo = (function (seq59065){
var G__59066 = cljs.core.first(seq59065);
var seq59065__$1 = cljs.core.next(seq59065);
var G__59067 = cljs.core.first(seq59065__$1);
var seq59065__$2 = cljs.core.next(seq59065__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59066,G__59067,seq59065__$2);
}));

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59616 = arguments.length;
var i__4790__auto___59617 = (0);
while(true){
if((i__4790__auto___59617 < len__4789__auto___59616)){
args__4795__auto__.push((arguments[i__4790__auto___59617]));

var G__59618 = (i__4790__auto___59617 + (1));
i__4790__auto___59617 = G__59618;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
}));

(datascript.query.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.and_fn.cljs$lang$applyTo = (function (seq59073){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59073));
}));

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59629 = arguments.length;
var i__4790__auto___59630 = (0);
while(true){
if((i__4790__auto___59630 < len__4789__auto___59629)){
args__4795__auto__.push((arguments[i__4790__auto___59630]));

var G__59631 = (i__4790__auto___59630 + (1));
i__4790__auto___59630 = G__59631;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
}));

(datascript.query.or_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.or_fn.cljs$lang$applyTo = (function (seq59074){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59074));
}));

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__59090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__59090 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__59090;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__4582__auto__ = (function datascript$query$variance_$_iter__59091(s__59092){
return (new cljs.core.LazySeq(null,(function (){
var s__59092__$1 = s__59092;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59092__$1);
if(temp__5735__auto__){
var s__59092__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59092__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59092__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59094 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59093 = (0);
while(true){
if((i__59093 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59093);
var delta = (x - mean);
cljs.core.chunk_append(b__59094,(delta * delta));

var G__59645 = (i__59093 + (1));
i__59093 = G__59645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59094),datascript$query$variance_$_iter__59091(cljs.core.chunk_rest(s__59092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59094),null);
}
} else {
var x = cljs.core.first(s__59092__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__59091(cljs.core.rest(s__59092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance(coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__59652 = null;
var G__59652__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__59652__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__59652 = function(n,coll){
switch(arguments.length){
case 1:
return G__59652__1.call(this,n);
case 2:
return G__59652__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59652.cljs$core$IFn$_invoke$arity$1 = G__59652__1;
G__59652.cljs$core$IFn$_invoke$arity$2 = G__59652__2;
return G__59652;
})()
,(function() {
var G__59660 = null;
var G__59660__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__59660__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__59660 = function(n,coll){
switch(arguments.length){
case 1:
return G__59660__1.call(this,n);
case 2:
return G__59660__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59660.cljs$core$IFn$_invoke$arity$1 = G__59660__1;
G__59660.cljs$core$IFn$_invoke$arity$2 = G__59660__2;
return G__59660;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.set,avg,stddev,(function() {
var G__59667 = null;
var G__59667__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__59667__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__59667 = function(n,coll){
switch(arguments.length){
case 1:
return G__59667__1.call(this,n);
case 2:
return G__59667__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59667.cljs$core$IFn$_invoke$arity$1 = G__59667__1;
G__59667.cljs$core$IFn$_invoke$arity$2 = G__59667__2;
return G__59667;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4487__auto__ = (((binding == null))?null:binding);
var m__4488__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4488__auto__.call(null,binding,value));
} else {
var m__4485__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4485__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59134_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__59134_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__59135_SHARP_,p2__59136_SHARP_){
return datascript.query.in__GT_rel(p1__59135_SHARP_,p2__59136_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__59140){
var vec__59141 = p__59140;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59141,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59141,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map((function (p1__59146_SHARP_){
return (p1__59146_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59146_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__59146_SHARP_.call(null,tuple));
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5737__auto__ = cljs.core.first(tuples__$1);
if((temp__5737__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5737__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__59683 = cljs.core.next(tuples__$1);
var G__59684 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__59683;
hash_table = G__59684;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59150_SHARP_){
return datascript.query.getter_fn(attrs1,p1__59150_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59157_SHARP_){
return datascript.query.getter_fn(attrs2,p1__59157_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5737__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5737__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__59167 = a;
var map__59167__$1 = (((((!((map__59167 == null))))?(((((map__59167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59167):map__59167);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59167__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__59168 = b;
var map__59168__$1 = (((((!((map__59168 == null))))?(((((map__59168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59168):map__59168);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59168__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59168__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59162_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__59162_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59165_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__59165_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__59166_SHARP_){
return ((function (){var G__59173 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__59166_SHARP_) : key_fn_a.call(null,p1__59166_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__59173) : hash.call(null,G__59173));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59175_SHARP_){
if((p1__59175_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__59175_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59176){
var vec__59178 = p__59176;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59178,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59178,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4174__auto__ = tuple__$1;
if(cljs.core.truth_(and__4174__auto__)){
return pattern__$1;
} else {
return and__4174__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__59698 = cljs.core.next(tuple__$1);
var G__59699 = cljs.core.next(pattern__$1);
tuple__$1 = G__59698;
pattern__$1 = G__59699;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59184_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__59184_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59186){
var vec__59187 = p__59186;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59187,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59187,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5737__auto__ = cljs.core.first(rels__$1);
if((temp__5737__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5737__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__59700 = cljs.core.next(rels__$1);
var G__59701 = datascript.query.hash_join(rel,new_rel__$1);
var G__59702 = acc;
rels__$1 = G__59700;
new_rel__$1 = G__59701;
acc = G__59702;
continue;
} else {
var G__59703 = cljs.core.next(rels__$1);
var G__59704 = new_rel__$1;
var G__59705 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__59703;
new_rel__$1 = G__59704;
acc = G__59705;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__59203_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__59203_SHARP_),sym)){
return p1__59203_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5739__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5739__auto__ == null)){
return null;
} else {
var rel = temp__5739__auto__;
var temp__5739__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5739__auto____$1 == null)){
return null;
} else {
var tuple = temp__5739__auto____$1;
return (tuple[(function (){var fexpr__59204 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__59204.cljs$core$IFn$_invoke$arity$1 ? fexpr__59204.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__59204.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__59207_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__59207_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59209_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__59209_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__59210_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__59210_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4666__auto___59719 = len;
var i_59720 = (0);
while(true){
if((i_59720 < n__4666__auto___59719)){
var arg_59721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_59720);
if((arg_59721 instanceof cljs.core.Symbol)){
var temp__5737__auto___59722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_59721);
if((temp__5737__auto___59722 == null)){
(tuples_args[i_59720] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_59721));
} else {
var source_59723 = temp__5737__auto___59722;
(static_args[i_59720] = source_59723);
}
} else {
(static_args[i_59720] = arg_59721);
}

var G__59724 = (i_59720 + (1));
i_59720 = G__59724;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4666__auto___59725 = len;
var i_59726 = (0);
while(true){
if((i_59726 < n__4666__auto___59725)){
var temp__5739__auto___59727 = (tuples_args[i_59726]);
if((temp__5739__auto___59727 == null)){
} else {
var tuple_idx_59728 = temp__5739__auto___59727;
var v_59729 = (tuple[tuple_idx_59728]);
(args__$1[i_59726] = v_59729);
}

var G__59730 = (i_59726 + (1));
i_59726 = G__59730;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__4666__auto___59731 = len;
var i_59732 = (0);
while(true){
if((i_59732 < n__4666__auto___59731)){
var temp__5739__auto___59733 = (tuples_args[i_59732]);
if((temp__5739__auto___59733 == null)){
} else {
var tuple_idx_59734 = temp__5739__auto___59733;
var v_59735 = (tuple[tuple_idx_59734]);
(static_args[i_59732] = v_59735);
}

var G__59736 = (i_59732 + (1));
i_59732 = G__59736;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__59213 = clause;
var vec__59216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59213,(0),null);
var seq__59217 = cljs.core.seq(vec__59216);
var first__59218 = cljs.core.first(seq__59217);
var seq__59217__$1 = cljs.core.next(seq__59217);
var f = first__59218;
var args = seq__59217__$1;
var pred = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__59219 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59219,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59219,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__59212_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__59212_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__59222 = clause;
var vec__59225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59222,(0),null);
var seq__59226 = cljs.core.seq(vec__59225);
var first__59227 = cljs.core.first(seq__59226);
var seq__59226__$1 = cljs.core.next(seq__59226);
var f = first__59227;
var args = seq__59226__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59222,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__59228 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59228,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59228,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4582__auto__ = (function datascript$query$bind_by_fn_$_iter__59232(s__59233){
return (new cljs.core.LazySeq(null,(function (){
var s__59233__$1 = s__59233;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59233__$1);
if(temp__5735__auto__){
var s__59233__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59233__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59233__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59235 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59234 = (0);
while(true){
if((i__59234 < size__4581__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59234);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
cljs.core.chunk_append(b__59235,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__59757 = (i__59234 + (1));
i__59234 = G__59757;
continue;
} else {
var G__59758 = (i__59234 + (1));
i__59234 = G__59758;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59235),datascript$query$bind_by_fn_$_iter__59232(cljs.core.chunk_rest(s__59233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59235),null);
}
} else {
var tuple = cljs.core.first(s__59233__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__59232(cljs.core.rest(s__59233__$2)));
} else {
var G__59759 = cljs.core.rest(s__59233__$2);
s__59233__$1 = G__59759;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__59237 = clause;
var seq__59238 = cljs.core.seq(vec__59237);
var first__59239 = cljs.core.first(seq__59238);
var seq__59238__$1 = cljs.core.next(seq__59238);
var rule = first__59239;
var call_args = seq__59238__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4582__auto__ = (function datascript$query$expand_rule_$_iter__59240(s__59241){
return (new cljs.core.LazySeq(null,(function (){
var s__59241__$1 = s__59241;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59241__$1);
if(temp__5735__auto__){
var s__59241__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59241__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59241__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59243 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59242 = (0);
while(true){
if((i__59242 < size__4581__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59242);
var vec__59244 = branch;
var seq__59245 = cljs.core.seq(vec__59244);
var first__59246 = cljs.core.first(seq__59245);
var seq__59245__$1 = cljs.core.next(seq__59245);
var vec__59247 = first__59246;
var seq__59248 = cljs.core.seq(vec__59247);
var first__59249 = cljs.core.first(seq__59248);
var seq__59248__$1 = cljs.core.next(seq__59248);
var _ = first__59249;
var rule_args = seq__59248__$1;
var clauses = seq__59245__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__59243,clojure.walk.postwalk(((function (i__59242,vec__59244,seq__59245,first__59246,seq__59245__$1,vec__59247,seq__59248,first__59249,seq__59248__$1,_,rule_args,clauses,replacements,branch,c__4580__auto__,size__4581__auto__,b__59243,s__59241__$2,temp__5735__auto__,vec__59237,seq__59238,first__59239,seq__59238__$1,rule,call_args,seqid,branches){
return (function (p1__59236_SHARP_){
if(datascript.query.free_var_QMARK_(p1__59236_SHARP_)){
var x__54949__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__59236_SHARP_) : replacements.call(null,p1__59236_SHARP_));
if((x__54949__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__59236_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__54949__auto__;
}
} else {
return p1__59236_SHARP_;
}
});})(i__59242,vec__59244,seq__59245,first__59246,seq__59245__$1,vec__59247,seq__59248,first__59249,seq__59248__$1,_,rule_args,clauses,replacements,branch,c__4580__auto__,size__4581__auto__,b__59243,s__59241__$2,temp__5735__auto__,vec__59237,seq__59238,first__59239,seq__59238__$1,rule,call_args,seqid,branches))
,clauses));

var G__59778 = (i__59242 + (1));
i__59242 = G__59778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59243),datascript$query$expand_rule_$_iter__59240(cljs.core.chunk_rest(s__59241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59243),null);
}
} else {
var branch = cljs.core.first(s__59241__$2);
var vec__59250 = branch;
var seq__59251 = cljs.core.seq(vec__59250);
var first__59252 = cljs.core.first(seq__59251);
var seq__59251__$1 = cljs.core.next(seq__59251);
var vec__59253 = first__59252;
var seq__59254 = cljs.core.seq(vec__59253);
var first__59255 = cljs.core.first(seq__59254);
var seq__59254__$1 = cljs.core.next(seq__59254);
var _ = first__59255;
var rule_args = seq__59254__$1;
var clauses = seq__59251__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__59250,seq__59251,first__59252,seq__59251__$1,vec__59253,seq__59254,first__59255,seq__59254__$1,_,rule_args,clauses,replacements,branch,s__59241__$2,temp__5735__auto__,vec__59237,seq__59238,first__59239,seq__59238__$1,rule,call_args,seqid,branches){
return (function (p1__59236_SHARP_){
if(datascript.query.free_var_QMARK_(p1__59236_SHARP_)){
var x__54949__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__59236_SHARP_) : replacements.call(null,p1__59236_SHARP_));
if((x__54949__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__59236_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__54949__auto__;
}
} else {
return p1__59236_SHARP_;
}
});})(vec__59250,seq__59251,first__59252,seq__59251__$1,vec__59253,seq__59254,first__59255,seq__59254__$1,_,rule_args,clauses,replacements,branch,s__59241__$2,temp__5735__auto__,vec__59237,seq__59238,first__59239,seq__59238__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__59240(cljs.core.rest(s__59241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59257){
var vec__59258 = p__59257;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__59261 = rule_clause;
var seq__59262 = cljs.core.seq(vec__59261);
var first__59263 = cljs.core.first(seq__59262);
var seq__59262__$1 = cljs.core.next(seq__59262);
var rule = first__59263;
var call_args = seq__59262__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4582__auto__ = (function datascript$query$rule_gen_guards_$_iter__59264(s__59265){
return (new cljs.core.LazySeq(null,(function (){
var s__59265__$1 = s__59265;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59265__$1);
if(temp__5735__auto__){
var s__59265__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59265__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59265__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59267 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59266 = (0);
while(true){
if((i__59266 < size__4581__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59266);
var vec__59268 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59268,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59268,(1),null);
cljs.core.chunk_append(b__59267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__59799 = (i__59266 + (1));
i__59266 = G__59799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59267),datascript$query$rule_gen_guards_$_iter__59264(cljs.core.chunk_rest(s__59265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59267),null);
}
} else {
var prev_args = cljs.core.first(s__59265__$2);
var vec__59271 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59271,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59271,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__59264(cljs.core.rest(s__59265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__59274_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__59274_SHARP_) : pred.call(null,p1__59274_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__59274_SHARP_);
} else {
}

return p1__59274_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__59275){
var vec__59276 = p__59275;
var vec__59279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59276,(0),null);
var seq__59280 = cljs.core.seq(vec__59279);
var first__59281 = cljs.core.first(seq__59280);
var seq__59280__$1 = cljs.core.next(seq__59280);
var _ = first__59281;
var vars = seq__59280__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__59282_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__59282_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5737__auto__ = cljs.core.first(stack);
if((temp__5737__auto__ == null)){
return rel;
} else {
var frame = temp__5737__auto__;
var vec__59303 = cljs.core.split_with(((function (stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__59283_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__59283_SHARP_)));
});})(stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59303,(0),null);
var vec__59306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59303,(1),null);
var seq__59307 = cljs.core.seq(vec__59306);
var first__59308 = cljs.core.first(seq__59307);
var seq__59307__$1 = cljs.core.next(seq__59307);
var rule_clause = first__59308;
var next_clauses = seq__59307__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__59829 = cljs.core.next(stack);
var G__59830 = datascript.query.sum_rel(rel,new_rel);
stack = G__59829;
rel = G__59830;
continue;
} else {
var vec__59309 = rule_clause;
var seq__59310 = cljs.core.seq(vec__59309);
var first__59311 = cljs.core.first(seq__59310);
var seq__59310__$1 = cljs.core.next(seq__59310);
var rule = first__59311;
var call_args = seq__59310__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__59312 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59312,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59312,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__59309,seq__59310,first__59311,seq__59310__$1,rule,call_args,guards,vec__59312,active_gs,pending_gs,vec__59303,clauses,vec__59306,seq__59307,first__59308,seq__59307__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__59284_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__59284_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__59309,seq__59310,first__59311,seq__59310__$1,rule,call_args,guards,vec__59312,active_gs,pending_gs,vec__59303,clauses,vec__59306,seq__59307,first__59308,seq__59307__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__59839 = cljs.core.next(stack);
var G__59840 = rel;
stack = G__59839;
rel = G__59840;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__59841 = cljs.core.next(stack);
var G__59842 = rel;
stack = G__59841;
rel = G__59842;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__59843 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__59309,seq__59310,first__59311,seq__59310__$1,rule,call_args,guards,vec__59312,active_gs,pending_gs,vec__59303,clauses,vec__59306,seq__59307,first__59308,seq__59307__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__59315(s__59316){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__59309,seq__59310,first__59311,seq__59310__$1,rule,call_args,guards,vec__59312,active_gs,pending_gs,vec__59303,clauses,vec__59306,seq__59307,first__59308,seq__59307__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__59316__$1 = s__59316;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59316__$1);
if(temp__5735__auto__){
var s__59316__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59316__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59316__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59318 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59317 = (0);
while(true){
if((i__59317 < size__4581__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59317);
cljs.core.chunk_append(b__59318,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__59845 = (i__59317 + (1));
i__59317 = G__59845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59318),datascript$query$solve_rule_$_iter__59315(cljs.core.chunk_rest(s__59316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59318),null);
}
} else {
var branch = cljs.core.first(s__59316__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__59315(cljs.core.rest(s__59316__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__59309,seq__59310,first__59311,seq__59310__$1,rule,call_args,guards,vec__59312,active_gs,pending_gs,vec__59303,clauses,vec__59306,seq__59307,first__59308,seq__59307__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__59309,seq__59310,first__59311,seq__59310__$1,rule,call_args,guards,vec__59312,active_gs,pending_gs,vec__59303,clauses,vec__59306,seq__59307,first__59308,seq__59307__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4582__auto__(branches);
})(),cljs.core.next(stack));
var G__59844 = rel;
stack = G__59843;
rel = G__59844;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__59320 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59320,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59320,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59320,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59320,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4185__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
if(datascript.query.attr_QMARK_(a)){
if(datascript.db.ref_QMARK_(source,a)){
var or__4185__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4174__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__59323 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59323,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59323,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59323,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59323,(3),null);
var G__59326 = cljs.core.PersistentHashSet.EMPTY;
var G__59326__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59326,e):G__59326);
var G__59326__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59326__$1,tx):G__59326__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59326__$2,v);
} else {
return G__59326__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5739__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5739__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5739__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59328_SHARP_){
return datascript.query.limit_rel(p1__59328_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59329_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__59329_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__59336 = arguments.length;
switch (G__59336) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__59337 = datascript.query.looks_like_QMARK_;
var expr__59338 = clause;
if(cljs.core.truth_((function (){var G__59340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__59341 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59340,G__59341) : pred__59337.call(null,G__59340,G__59341));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__59342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__59343 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59342,G__59343) : pred__59337.call(null,G__59342,G__59343));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__59344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59345 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59344,G__59345) : pred__59337.call(null,G__59344,G__59345));
})())){
var vec__59346 = clause;
var seq__59347 = cljs.core.seq(vec__59346);
var first__59348 = cljs.core.first(seq__59347);
var seq__59347__$1 = cljs.core.next(seq__59347);
var source_sym = first__59348;
var rest = seq__59347__$1;
var _STAR_implicit_source_STAR__orig_val__59349 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__59350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__59350);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__59349);
}} else {
if(cljs.core.truth_((function (){var G__59351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59352 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59351,G__59352) : pred__59337.call(null,G__59351,G__59352));
})())){
var vec__59353 = clause;
var seq__59354 = cljs.core.seq(vec__59353);
var first__59355 = cljs.core.first(seq__59354);
var seq__59354__$1 = cljs.core.next(seq__59354);
var _ = first__59355;
var branches = seq__59354__$1;
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__59353,seq__59354,first__59355,seq__59354__$1,_,branches,pred__59337,expr__59338){
return (function (p1__59330_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__59330_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__59330_SHARP_));
});})(context,clause,orig_clause,vec__59353,seq__59354,first__59355,seq__59354__$1,_,branches,pred__59337,expr__59338))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__59353,seq__59354,first__59355,seq__59354__$1,_,branches,contexts,pred__59337,expr__59338){
return (function (p1__59331_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__59331_SHARP_));
});})(context,clause,orig_clause,vec__59353,seq__59354,first__59355,seq__59354__$1,_,branches,contexts,pred__59337,expr__59338))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__59356 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59357 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59356,G__59357) : pred__59337.call(null,G__59356,G__59357));
})())){
var vec__59358 = clause;
var seq__59359 = cljs.core.seq(vec__59358);
var first__59360 = cljs.core.first(seq__59359);
var seq__59359__$1 = cljs.core.next(seq__59359);
var _ = first__59360;
var first__59360__$1 = cljs.core.first(seq__59359__$1);
var seq__59359__$2 = cljs.core.next(seq__59359__$1);
var vec__59361 = first__59360__$1;
var seq__59362 = cljs.core.seq(vec__59361);
var first__59363 = cljs.core.first(seq__59362);
var seq__59362__$1 = cljs.core.next(seq__59362);
var req_vars = first__59363;
var vars = seq__59362__$1;
var branches = seq__59359__$2;
datascript.query.check_bound(context,req_vars,orig_clause);

var G__59851 = context;
var G__59852 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__59853 = clause;
context = G__59851;
clause = G__59852;
orig_clause = G__59853;
continue;
} else {
if(cljs.core.truth_((function (){var G__59365 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59366 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59365,G__59366) : pred__59337.call(null,G__59365,G__59366));
})())){
var vec__59367 = clause;
var seq__59368 = cljs.core.seq(vec__59367);
var first__59369 = cljs.core.first(seq__59368);
var seq__59368__$1 = cljs.core.next(seq__59368);
var _ = first__59369;
var first__59369__$1 = cljs.core.first(seq__59368__$1);
var seq__59368__$2 = cljs.core.next(seq__59368__$1);
var vars = first__59369__$1;
var branches = seq__59368__$2;
var vars__$1 = cljs.core.set(vars);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__59367,seq__59368,first__59369,seq__59368__$1,_,first__59369__$1,seq__59368__$2,vars,branches,vars__$1,join_context,pred__59337,expr__59338){
return (function (p1__59332_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__59332_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__59332_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__59367,seq__59368,first__59369,seq__59368__$1,_,first__59369__$1,seq__59368__$2,vars,branches,vars__$1,join_context,pred__59337,expr__59338))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__59367,seq__59368,first__59369,seq__59368__$1,_,first__59369__$1,seq__59368__$2,vars,branches,vars__$1,join_context,contexts,pred__59337,expr__59338){
return (function (p1__59333_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__59333_SHARP_));
});})(context,clause,orig_clause,vec__59367,seq__59368,first__59369,seq__59368__$1,_,first__59369__$1,seq__59368__$2,vars,branches,vars__$1,join_context,contexts,pred__59337,expr__59338))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__59371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59372 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59371,G__59372) : pred__59337.call(null,G__59371,G__59372));
})())){
var vec__59373 = clause;
var seq__59374 = cljs.core.seq(vec__59373);
var first__59375 = cljs.core.first(seq__59374);
var seq__59374__$1 = cljs.core.next(seq__59374);
var _ = first__59375;
var clauses = seq__59374__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__59376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59377 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59376,G__59377) : pred__59337.call(null,G__59376,G__59377));
})())){
var vec__59378 = clause;
var seq__59379 = cljs.core.seq(vec__59378);
var first__59380 = cljs.core.first(seq__59379);
var seq__59379__$1 = cljs.core.next(seq__59379);
var _ = first__59380;
var clauses = seq__59379__$1;
var bound_vars = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (context,clause,orig_clause,vec__59378,seq__59379,first__59380,seq__59379__$1,_,clauses,pred__59337,expr__59338){
return (function (p1__59334_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__59334_SHARP_));
});})(context,clause,orig_clause,vec__59378,seq__59379,first__59380,seq__59379__$1,_,clauses,pred__59337,expr__59338))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__59387 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59388 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59387,G__59388) : pred__59337.call(null,G__59387,G__59388));
})())){
var vec__59389 = clause;
var seq__59390 = cljs.core.seq(vec__59389);
var first__59391 = cljs.core.first(seq__59390);
var seq__59390__$1 = cljs.core.next(seq__59390);
var _ = first__59391;
var first__59391__$1 = cljs.core.first(seq__59390__$1);
var seq__59390__$2 = cljs.core.next(seq__59390__$1);
var vars = first__59391__$1;
var clauses = seq__59390__$2;
var ___$1 = datascript.query.check_bound(context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__59392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59393 = expr__59338;
return (pred__59337.cljs$core$IFn$_invoke$arity$2 ? pred__59337.cljs$core$IFn$_invoke$arity$2(G__59392,G__59393) : pred__59337.call(null,G__59392,G__59393));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__59394 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__59395 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__59395);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__59394);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__59338)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__59401 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__59402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__59402);

try{var G__59403 = context;
var G__59404 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__59403,G__59404) : datascript.query.resolve_clause.call(null,G__59403,G__59404));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__59401);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__59405 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__59406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__59406);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__59405);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__59411 = arguments.length;
switch (G__59411) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5737__auto__ = cljs.core.first(rels);
if((temp__5737__auto__ == null)){
return acc;
} else {
var rel = temp__5737__auto__;
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__59907 = acc;
var G__59908 = cljs.core.next(rels);
var G__59909 = symbols;
acc = G__59907;
rels = G__59908;
symbols = G__59909;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5737__auto__){
return (function (p1__59409_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__59409_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5737__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__59915 = (function (){var iter__4582__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__59417(s__59418){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__59418__$1 = s__59418;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59418__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var t1 = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__59418__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__59417_$_iter__59419(s__59420){
return (new cljs.core.LazySeq(null,((function (s__59418__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__59420__$1 = s__59420;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59420__$1);
if(temp__5735__auto____$1){
var s__59420__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59420__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59420__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59422 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59421 = (0);
while(true){
if((i__59421 < size__4581__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59421);
cljs.core.chunk_append(b__59422,(function (){var res = cljs.core.aclone(t1);
var n__4666__auto___59925 = len;
var i_59926 = (0);
while(true){
if((i_59926 < n__4666__auto___59925)){
var temp__5739__auto___59931 = (copy_map[i_59926]);
if((temp__5739__auto___59931 == null)){
} else {
var idx_59932 = temp__5739__auto___59931;
(res[i_59926] = (t2[idx_59932]));
}

var G__59934 = (i_59926 + (1));
i_59926 = G__59934;
continue;
} else {
}
break;
}

return res;
})());

var G__59936 = (i__59421 + (1));
i__59421 = G__59936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59422),datascript$query$iter__59417_$_iter__59419(cljs.core.chunk_rest(s__59420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59422),null);
}
} else {
var t2 = cljs.core.first(s__59420__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4666__auto___59945 = len;
var i_59946 = (0);
while(true){
if((i_59946 < n__4666__auto___59945)){
var temp__5739__auto___59951 = (copy_map[i_59946]);
if((temp__5739__auto___59951 == null)){
} else {
var idx_59952 = temp__5739__auto___59951;
(res[i_59946] = (t2[idx_59952]));
}

var G__59954 = (i_59946 + (1));
i_59946 = G__59954;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__59417_$_iter__59419(cljs.core.rest(s__59420__$2)));
}
} else {
return null;
}
break;
}
});})(s__59418__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(s__59418__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,datascript$query$iter__59417(cljs.core.rest(s__59418__$1)));
} else {
var G__59956 = cljs.core.rest(s__59418__$1);
s__59418__$1 = G__59956;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
return iter__4582__auto__(acc);
})();
var G__59916 = cljs.core.next(rels);
var G__59917 = symbols;
acc = G__59915;
rels = G__59916;
symbols = G__59917;
continue;
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4487__auto__ = (((var$ == null))?null:var$);
var m__4488__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4488__auto__.call(null,var$,context));
} else {
var m__4485__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4485__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59423_SHARP_){
return datascript.query._context_resolve(p1__59423_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59424_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__59424_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__59426_SHARP_,p2__59427_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__59426_SHARP_) : pred.call(null,p1__59426_SHARP_)))){
return p2__59427_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59428_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__59428_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4582__auto__ = (function datascript$query$aggregate_$_iter__59429(s__59430){
return (new cljs.core.LazySeq(null,(function (){
var s__59430__$1 = s__59430;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59430__$1);
if(temp__5735__auto__){
var s__59430__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59430__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59430__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59432 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59431 = (0);
while(true){
if((i__59431 < size__4581__auto__)){
var vec__59433 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59431);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59433,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59433,(1),null);
cljs.core.chunk_append(b__59432,datascript.query._aggregate(find_elements,context,tuples));

var G__59962 = (i__59431 + (1));
i__59431 = G__59962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59432),datascript$query$aggregate_$_iter__59429(cljs.core.chunk_rest(s__59430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59432),null);
}
} else {
var vec__59436 = cljs.core.first(s__59430__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59436,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59436,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__59429(cljs.core.rest(s__59430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4487__auto__ = (((find == null))?null:find);
var m__4488__auto__ = (datascript.query._post_process[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4488__auto__.call(null,find,tuples));
} else {
var m__4485__auto__ = (datascript.query._post_process["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4485__auto__.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4582__auto__ = (function datascript$query$pull_$_iter__59441(s__59442){
return (new cljs.core.LazySeq(null,(function (){
var s__59442__$1 = s__59442;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59442__$1);
if(temp__5735__auto__){
var s__59442__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59442__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59442__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59444 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59443 = (0);
while(true){
if((i__59443 < size__4581__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59443);
cljs.core.chunk_append(b__59444,((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__59963 = (i__59443 + (1));
i__59443 = G__59963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59444),datascript$query$pull_$_iter__59441(cljs.core.chunk_rest(s__59442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59444),null);
}
} else {
var find = cljs.core.first(s__59442__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__59441(cljs.core.rest(s__59442__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(find_elements);
})();
var iter__4582__auto__ = (function datascript$query$pull_$_iter__59445(s__59446){
return (new cljs.core.LazySeq(null,(function (){
var s__59446__$1 = s__59446;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59446__$1);
if(temp__5735__auto__){
var s__59446__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59446__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59446__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59448 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59447 = (0);
while(true){
if((i__59447 < size__4581__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59447);
cljs.core.chunk_append(b__59448,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__59447,tuple,c__4580__auto__,size__4581__auto__,b__59448,s__59446__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__59452 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59452,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59452,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__59447,tuple,c__4580__auto__,size__4581__auto__,b__59448,s__59446__$2,temp__5735__auto__,resolved))
,resolved,tuple));

var G__59964 = (i__59447 + (1));
i__59447 = G__59964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59448),datascript$query$pull_$_iter__59445(cljs.core.chunk_rest(s__59446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59448),null);
}
} else {
var tuple = cljs.core.first(s__59446__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__59446__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__59455 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59455,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59455,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__59446__$2,temp__5735__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__59445(cljs.core.rest(s__59446__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if((temp__5737__auto__ == null)){
var qp = datascript.parser.parse_query(q);
datascript.query.query_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.query.query_cache.cljs$core$IDeref$_deref$arity$1(null),q,qp));

return qp;
} else {
var cached = temp__5737__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59965 = arguments.length;
var i__4790__auto___59966 = (0);
while(true){
if((i__4790__auto___59966 < len__4789__auto___59965)){
args__4795__auto__.push((arguments[i__4790__auto___59966]));

var G__59967 = (i__4790__auto___59966 + (1));
i__4790__auto___59966 = G__59967;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__59483 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__59483);
} else {
return G__59483;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__59484 = resultset;
var G__59484__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59479_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__59479_SHARP_,(0),result_arity));
}),G__59484):G__59484);
var G__59484__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__59484__$1):G__59484__$1);
var G__59484__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__59484__$2):G__59484__$2);
return datascript.query._post_process(find,G__59484__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq59481){
var G__59482 = cljs.core.first(seq59481);
var seq59481__$1 = cljs.core.next(seq59481);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59482,seq59481__$1);
}));


//# sourceMappingURL=datascript.query.js.map
