// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.vector');

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap,__hash){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39273,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39275 = (((k39273 instanceof cljs.core.Keyword))?k39273.fqn:null);
switch (G__39275) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39273,else__25443__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39272){
var self__ = this;
var G__39272__$1 = this;
return (new cljs.core.RecordIter((0),G__39272__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39272){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39276 = cljs.core.keyword_identical_QMARK_;
var expr__39277 = k__25448__auto__;
if(cljs.core.truth_(pred__39276.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__39277))){
return (new thi.ng.geom.types.Graph(G__39272,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39276.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__39277))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__39272,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39272),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39272){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__39272,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Graph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"edges","edges",945740132,null)], null);
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__39274){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__39274),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__39274),null,cljs.core.dissoc.call(null,G__39274,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39281,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39283 = (((k39281 instanceof cljs.core.Keyword))?k39281.fqn:null);
switch (G__39283) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39281,else__25443__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39280){
var self__ = this;
var G__39280__$1 = this;
return (new cljs.core.RecordIter((0),G__39280__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39280){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39284 = cljs.core.keyword_identical_QMARK_;
var expr__39285 = k__25448__auto__;
if(cljs.core.truth_(pred__39284.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39285))){
return (new thi.ng.geom.types.Bezier2(G__39280,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39280),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39280){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__39280,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Bezier2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__39282){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39282),null,cljs.core.dissoc.call(null,G__39282,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39289,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39291 = (((k39289 instanceof cljs.core.Keyword))?k39289.fqn:null);
switch (G__39291) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39289,else__25443__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39288){
var self__ = this;
var G__39288__$1 = this;
return (new cljs.core.RecordIter((0),G__39288__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39288){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39292 = cljs.core.keyword_identical_QMARK_;
var expr__39293 = k__25448__auto__;
if(cljs.core.truth_(pred__39292.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__39293))){
return (new thi.ng.geom.types.Circle2(G__39288,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39292.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__39293))){
return (new thi.ng.geom.types.Circle2(self__.p,G__39288,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39288),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39288){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__39288,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Circle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__39290){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__39290),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__39290),null,cljs.core.dissoc.call(null,G__39290,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap,__hash){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39297,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39299 = (((k39297 instanceof cljs.core.Keyword))?k39297.fqn:null);
switch (G__39299) {
case "p":
return self__.p;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39297,else__25443__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39296){
var self__ = this;
var G__39296__$1 = this;
return (new cljs.core.RecordIter((0),G__39296__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39296){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39300 = cljs.core.keyword_identical_QMARK_;
var expr__39301 = k__25448__auto__;
if(cljs.core.truth_(pred__39300.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__39301))){
return (new thi.ng.geom.types.Ellipse2(G__39296,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39300.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__39301))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__39296,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39300.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__39301))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__39296,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39296),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39296){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__39296,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Ellipse2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null)], null);
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__39298){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__39298),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__39298),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__39298),null,cljs.core.dissoc.call(null,G__39298,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39305,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39307 = (((k39305 instanceof cljs.core.Keyword))?k39305.fqn:null);
switch (G__39307) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39305,else__25443__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39304){
var self__ = this;
var G__39304__$1 = this;
return (new cljs.core.RecordIter((0),G__39304__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39304){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39308 = cljs.core.keyword_identical_QMARK_;
var expr__39309 = k__25448__auto__;
if(cljs.core.truth_(pred__39308.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39309))){
return (new thi.ng.geom.types.Line2(G__39304,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39304),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39304){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__39304,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Line2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__39306){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39306),null,cljs.core.dissoc.call(null,G__39306,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39313,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39315 = (((k39313 instanceof cljs.core.Keyword))?k39313.fqn:null);
switch (G__39315) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39313,else__25443__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39312){
var self__ = this;
var G__39312__$1 = this;
return (new cljs.core.RecordIter((0),G__39312__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39312){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39316 = cljs.core.keyword_identical_QMARK_;
var expr__39317 = k__25448__auto__;
if(cljs.core.truth_(pred__39316.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39317))){
return (new thi.ng.geom.types.LineStrip2(G__39312,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39312),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39312){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__39312,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.LineStrip2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__39314){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39314),null,cljs.core.dissoc.call(null,G__39314,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39321,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39323 = (((k39321 instanceof cljs.core.Keyword))?k39321.fqn:null);
switch (G__39323) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39321,else__25443__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39320){
var self__ = this;
var G__39320__$1 = this;
return (new cljs.core.RecordIter((0),G__39320__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39320){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39324 = cljs.core.keyword_identical_QMARK_;
var expr__39325 = k__25448__auto__;
if(cljs.core.truth_(pred__39324.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__39325))){
return (new thi.ng.geom.types.Mesh2(G__39320,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39324.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__39325))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__39320,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39324.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__39325))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__39320,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39324.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__39325))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__39320,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39324.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__39325))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__39320,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39324.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__39325))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__39320,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39324.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__39325))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__39320,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39320),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39320){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__39320,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Mesh2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__39322){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__39322),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__39322),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__39322),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__39322),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__39322),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__39322),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__39322),null,cljs.core.dissoc.call(null,G__39322,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap,__hash){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39329,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39331 = (((k39329 instanceof cljs.core.Keyword))?k39329.fqn:null);
switch (G__39331) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39329,else__25443__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39328){
var self__ = this;
var G__39328__$1 = this;
return (new cljs.core.RecordIter((0),G__39328__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segments","segments",1937535949)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39328){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39332 = cljs.core.keyword_identical_QMARK_;
var expr__39333 = k__25448__auto__;
if(cljs.core.truth_(pred__39332.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__39333))){
return (new thi.ng.geom.types.Path2(G__39328,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39328),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39328){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__39328,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Path2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"segments","segments",-716899820,null)], null);
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__39330){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__39330),null,cljs.core.dissoc.call(null,G__39330,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39337,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39339 = (((k39337 instanceof cljs.core.Keyword))?k39337.fqn:null);
switch (G__39339) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39337,else__25443__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39336){
var self__ = this;
var G__39336__$1 = this;
return (new cljs.core.RecordIter((0),G__39336__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39336){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39340 = cljs.core.keyword_identical_QMARK_;
var expr__39341 = k__25448__auto__;
if(cljs.core.truth_(pred__39340.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39341))){
return (new thi.ng.geom.types.Polygon2(G__39336,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39336),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39336){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__39336,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Polygon2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__39338){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39338),null,cljs.core.dissoc.call(null,G__39338,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39345,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39347 = (((k39345 instanceof cljs.core.Keyword))?k39345.fqn:null);
switch (G__39347) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39345,else__25443__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39344){
var self__ = this;
var G__39344__$1 = this;
return (new cljs.core.RecordIter((0),G__39344__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39344){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39348 = cljs.core.keyword_identical_QMARK_;
var expr__39349 = k__25448__auto__;
if(cljs.core.truth_(pred__39348.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__39349))){
return (new thi.ng.geom.types.Rect2(G__39344,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39348.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__39349))){
return (new thi.ng.geom.types.Rect2(self__.p,G__39344,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39344),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39344){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__39344,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Rect2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__39346){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__39346),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__39346),null,cljs.core.dissoc.call(null,G__39346,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39353,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39355 = (((k39353 instanceof cljs.core.Keyword))?k39353.fqn:null);
switch (G__39355) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39353,else__25443__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39352){
var self__ = this;
var G__39352__$1 = this;
return (new cljs.core.RecordIter((0),G__39352__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39352){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39356 = cljs.core.keyword_identical_QMARK_;
var expr__39357 = k__25448__auto__;
if(cljs.core.truth_(pred__39356.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39357))){
return (new thi.ng.geom.types.Triangle2(G__39352,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39352),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39352){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__39352,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Triangle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__39354){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39354),null,cljs.core.dissoc.call(null,G__39354,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39361,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39363 = (((k39361 instanceof cljs.core.Keyword))?k39361.fqn:null);
switch (G__39363) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39361,else__25443__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39360){
var self__ = this;
var G__39360__$1 = this;
return (new cljs.core.RecordIter((0),G__39360__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39360){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39364 = cljs.core.keyword_identical_QMARK_;
var expr__39365 = k__25448__auto__;
if(cljs.core.truth_(pred__39364.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__39365))){
return (new thi.ng.geom.types.AABB(G__39360,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39364.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__39365))){
return (new thi.ng.geom.types.AABB(self__.p,G__39360,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39360),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39360){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__39360,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.AABB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null)], null)),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__39362){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__39362),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__39362),null,cljs.core.dissoc.call(null,G__39362,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39369,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39371 = (((k39369 instanceof cljs.core.Keyword))?k39369.fqn:null);
switch (G__39371) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39369,else__25443__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39368){
var self__ = this;
var G__39368__$1 = this;
return (new cljs.core.RecordIter((0),G__39368__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39368){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39372 = cljs.core.keyword_identical_QMARK_;
var expr__39373 = k__25448__auto__;
if(cljs.core.truth_(pred__39372.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39373))){
return (new thi.ng.geom.types.Cuboid(G__39368,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39368),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39368){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__39368,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Cuboid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__39370){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39370),null,cljs.core.dissoc.call(null,G__39370,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39377,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39379 = (((k39377 instanceof cljs.core.Keyword))?k39377.fqn:null);
switch (G__39379) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39377,else__25443__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39376){
var self__ = this;
var G__39376__$1 = this;
return (new cljs.core.RecordIter((0),G__39376__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39376){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39380 = cljs.core.keyword_identical_QMARK_;
var expr__39381 = k__25448__auto__;
if(cljs.core.truth_(pred__39380.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39381))){
return (new thi.ng.geom.types.Bezier3(G__39376,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39376),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39376){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__39376,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Bezier3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__39378){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39378),null,cljs.core.dissoc.call(null,G__39378,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.BasicMesh = (function (vertices,faces,fnormals,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.fnormals = fnormals;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39385,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39387 = (((k39385 instanceof cljs.core.Keyword))?k39385.fqn:null);
switch (G__39387) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "fnormals":
return self__.fnormals;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39385,else__25443__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39384){
var self__ = this;
var G__39384__$1 = this;
return (new cljs.core.RecordIter((0),G__39384__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39384){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39388 = cljs.core.keyword_identical_QMARK_;
var expr__39389 = k__25448__auto__;
if(cljs.core.truth_(pred__39388.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__39389))){
return (new thi.ng.geom.types.BasicMesh(G__39384,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39388.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__39389))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__39384,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39388.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__39389))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__39384,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39384),null));
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39384){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__39384,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.BasicMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null)], null);
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__39386){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__39386),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__39386),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__39386),null,cljs.core.dissoc.call(null,G__39386,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39393,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39395 = (((k39393 instanceof cljs.core.Keyword))?k39393.fqn:null);
switch (G__39395) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39393,else__25443__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39392){
var self__ = this;
var G__39392__$1 = this;
return (new cljs.core.RecordIter((0),G__39392__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39392){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39396 = cljs.core.keyword_identical_QMARK_;
var expr__39397 = k__25448__auto__;
if(cljs.core.truth_(pred__39396.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__39397))){
return (new thi.ng.geom.types.GMesh(G__39392,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39396.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__39397))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__39392,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39396.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__39397))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__39392,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39396.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__39397))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__39392,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39396.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__39397))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__39392,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39396.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__39397))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__39392,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39392),null));
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39392){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__39392,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.GMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null)], null);
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__39394){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__39394),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__39394),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__39394),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__39394),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__39394),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__39394),null,cljs.core.dissoc.call(null,G__39394,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.IndexedMesh = (function (vertices,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39401,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39403 = (((k39401 instanceof cljs.core.Keyword))?k39401.fqn:null);
switch (G__39403) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39401,else__25443__auto__);

}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.IndexedMesh{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39400){
var self__ = this;
var G__39400__$1 = this;
return (new cljs.core.RecordIter((0),G__39400__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39400){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39404 = cljs.core.keyword_identical_QMARK_;
var expr__39405 = k__25448__auto__;
if(cljs.core.truth_(pred__39404.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__39405))){
return (new thi.ng.geom.types.IndexedMesh(G__39400,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39404.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__39405))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,G__39400,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39404.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__39405))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,G__39400,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39400),null));
}
}
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39400){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,G__39400,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.IndexedMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.IndexedMesh.cljs$lang$type = true;

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.__GT_IndexedMesh = (function thi$ng$geom$types$__GT_IndexedMesh(vertices,faces,attribs){
return (new thi.ng.geom.types.IndexedMesh(vertices,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_IndexedMesh = (function thi$ng$geom$types$map__GT_IndexedMesh(G__39402){
return (new thi.ng.geom.types.IndexedMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__39402),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__39402),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__39402),null,cljs.core.dissoc.call(null,G__39402,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39409,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39411 = (((k39409 instanceof cljs.core.Keyword))?k39409.fqn:null);
switch (G__39411) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39409,else__25443__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39408){
var self__ = this;
var G__39408__$1 = this;
return (new cljs.core.RecordIter((0),G__39408__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39408){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39412 = cljs.core.keyword_identical_QMARK_;
var expr__39413 = k__25448__auto__;
if(cljs.core.truth_(pred__39412.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39413))){
return (new thi.ng.geom.types.Line3(G__39408,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39408),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39408){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__39408,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Line3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__39410){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39410),null,cljs.core.dissoc.call(null,G__39410,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39417,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39419 = (((k39417 instanceof cljs.core.Keyword))?k39417.fqn:null);
switch (G__39419) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39417,else__25443__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39416){
var self__ = this;
var G__39416__$1 = this;
return (new cljs.core.RecordIter((0),G__39416__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39416){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39420 = cljs.core.keyword_identical_QMARK_;
var expr__39421 = k__25448__auto__;
if(cljs.core.truth_(pred__39420.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39421))){
return (new thi.ng.geom.types.LineStrip3(G__39416,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39416),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39416){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__39416,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.LineStrip3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__39418){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39418),null,cljs.core.dissoc.call(null,G__39418,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap,__hash){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39425,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39427 = (((k39425 instanceof cljs.core.Keyword))?k39425.fqn:null);
switch (G__39427) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39425,else__25443__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39424){
var self__ = this;
var G__39424__$1 = this;
return (new cljs.core.RecordIter((0),G__39424__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39424){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39428 = cljs.core.keyword_identical_QMARK_;
var expr__39429 = k__25448__auto__;
if(cljs.core.truth_(pred__39428.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__39429))){
return (new thi.ng.geom.types.Plane(G__39424,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39428.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39429))){
return (new thi.ng.geom.types.Plane(self__.n,G__39424,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39424),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39424){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__39424,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Plane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__39426){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__39426),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39426),null,cljs.core.dissoc.call(null,G__39426,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39433,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39435 = (((k39433 instanceof cljs.core.Keyword))?k39433.fqn:null);
switch (G__39435) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39433,else__25443__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39432){
var self__ = this;
var G__39432__$1 = this;
return (new cljs.core.RecordIter((0),G__39432__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39432){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39436 = cljs.core.keyword_identical_QMARK_;
var expr__39437 = k__25448__auto__;
if(cljs.core.truth_(pred__39436.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39437))){
return (new thi.ng.geom.types.Quad3(G__39432,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39432),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39432){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__39432,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Quad3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__39434){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39434),null,cljs.core.dissoc.call(null,G__39434,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39441,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39443 = (((k39441 instanceof cljs.core.Keyword))?k39441.fqn:null);
switch (G__39443) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39441,else__25443__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39440){
var self__ = this;
var G__39440__$1 = this;
return (new cljs.core.RecordIter((0),G__39440__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39440){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39444 = cljs.core.keyword_identical_QMARK_;
var expr__39445 = k__25448__auto__;
if(cljs.core.truth_(pred__39444.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__39445))){
return (new thi.ng.geom.types.Sphere(G__39440,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39444.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__39445))){
return (new thi.ng.geom.types.Sphere(self__.p,G__39440,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39440),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39440){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__39440,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Sphere.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__39442){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__39442),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__39442),null,cljs.core.dissoc.call(null,G__39442,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39449,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39451 = (((k39449 instanceof cljs.core.Keyword))?k39449.fqn:null);
switch (G__39451) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39449,else__25443__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39448){
var self__ = this;
var G__39448__$1 = this;
return (new cljs.core.RecordIter((0),G__39448__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39448){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39452 = cljs.core.keyword_identical_QMARK_;
var expr__39453 = k__25448__auto__;
if(cljs.core.truth_(pred__39452.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39453))){
return (new thi.ng.geom.types.Tetrahedron(G__39448,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39448),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39448){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__39448,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Tetrahedron.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__39450){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39450),null,cljs.core.dissoc.call(null,G__39450,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39457,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39459 = (((k39457 instanceof cljs.core.Keyword))?k39457.fqn:null);
switch (G__39459) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39457,else__25443__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39456){
var self__ = this;
var G__39456__$1 = this;
return (new cljs.core.RecordIter((0),G__39456__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
var self__ = this;
var this__25435__auto____$1 = this;
var h__25253__auto__ = self__.__hash;
if(!((h__25253__auto__ == null))){
return h__25253__auto__;
} else {
var h__25253__auto____$1 = cljs.core.hash_imap.call(null,this__25435__auto____$1);
self__.__hash = h__25253__auto____$1;

return h__25253__auto____$1;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
var self__ = this;
var this__25436__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = other__25437__auto__;
if(cljs.core.truth_(and__24806__auto__)){
var and__24806__auto____$1 = (this__25436__auto____$1.constructor === other__25437__auto__.constructor);
if(and__24806__auto____$1){
return cljs.core.equiv_map.call(null,this__25436__auto____$1,other__25437__auto__);
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39456){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39460 = cljs.core.keyword_identical_QMARK_;
var expr__39461 = k__25448__auto__;
if(cljs.core.truth_(pred__39460.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__39461))){
return (new thi.ng.geom.types.Triangle3(G__39456,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39456),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39456){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__39456,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.geom.types.Triangle3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__39458){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__39458),null,cljs.core.dissoc.call(null,G__39458,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map?rel=1530813192773