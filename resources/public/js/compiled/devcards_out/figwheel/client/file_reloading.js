// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24818__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24818__auto__){
return or__24818__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24818__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__43633_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__43633_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__43638 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__43639 = null;
var count__43640 = (0);
var i__43641 = (0);
while(true){
if((i__43641 < count__43640)){
var n = cljs.core._nth.call(null,chunk__43639,i__43641);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43642 = seq__43638;
var G__43643 = chunk__43639;
var G__43644 = count__43640;
var G__43645 = (i__43641 + (1));
seq__43638 = G__43642;
chunk__43639 = G__43643;
count__43640 = G__43644;
i__43641 = G__43645;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43638);
if(temp__4657__auto__){
var seq__43638__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43638__$1)){
var c__25629__auto__ = cljs.core.chunk_first.call(null,seq__43638__$1);
var G__43646 = cljs.core.chunk_rest.call(null,seq__43638__$1);
var G__43647 = c__25629__auto__;
var G__43648 = cljs.core.count.call(null,c__25629__auto__);
var G__43649 = (0);
seq__43638 = G__43646;
chunk__43639 = G__43647;
count__43640 = G__43648;
i__43641 = G__43649;
continue;
} else {
var n = cljs.core.first.call(null,seq__43638__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43650 = cljs.core.next.call(null,seq__43638__$1);
var G__43651 = null;
var G__43652 = (0);
var G__43653 = (0);
seq__43638 = G__43650;
chunk__43639 = G__43651;
count__43640 = G__43652;
i__43641 = G__43653;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__43704_43715 = cljs.core.seq.call(null,deps);
var chunk__43705_43716 = null;
var count__43706_43717 = (0);
var i__43707_43718 = (0);
while(true){
if((i__43707_43718 < count__43706_43717)){
var dep_43719 = cljs.core._nth.call(null,chunk__43705_43716,i__43707_43718);
topo_sort_helper_STAR_.call(null,dep_43719,(depth + (1)),state);

var G__43720 = seq__43704_43715;
var G__43721 = chunk__43705_43716;
var G__43722 = count__43706_43717;
var G__43723 = (i__43707_43718 + (1));
seq__43704_43715 = G__43720;
chunk__43705_43716 = G__43721;
count__43706_43717 = G__43722;
i__43707_43718 = G__43723;
continue;
} else {
var temp__4657__auto___43724 = cljs.core.seq.call(null,seq__43704_43715);
if(temp__4657__auto___43724){
var seq__43704_43725__$1 = temp__4657__auto___43724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43704_43725__$1)){
var c__25629__auto___43726 = cljs.core.chunk_first.call(null,seq__43704_43725__$1);
var G__43727 = cljs.core.chunk_rest.call(null,seq__43704_43725__$1);
var G__43728 = c__25629__auto___43726;
var G__43729 = cljs.core.count.call(null,c__25629__auto___43726);
var G__43730 = (0);
seq__43704_43715 = G__43727;
chunk__43705_43716 = G__43728;
count__43706_43717 = G__43729;
i__43707_43718 = G__43730;
continue;
} else {
var dep_43731 = cljs.core.first.call(null,seq__43704_43725__$1);
topo_sort_helper_STAR_.call(null,dep_43731,(depth + (1)),state);

var G__43732 = cljs.core.next.call(null,seq__43704_43725__$1);
var G__43733 = null;
var G__43734 = (0);
var G__43735 = (0);
seq__43704_43715 = G__43732;
chunk__43705_43716 = G__43733;
count__43706_43717 = G__43734;
i__43707_43718 = G__43735;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__43708){
var vec__43712 = p__43708;
var seq__43713 = cljs.core.seq.call(null,vec__43712);
var first__43714 = cljs.core.first.call(null,seq__43713);
var seq__43713__$1 = cljs.core.next.call(null,seq__43713);
var x = first__43714;
var xs = seq__43713__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__43712,seq__43713,first__43714,seq__43713__$1,x,xs,get_deps__$1){
return (function (p1__43654_SHARP_){
return clojure.set.difference.call(null,p1__43654_SHARP_,x);
});})(vec__43712,seq__43713,first__43714,seq__43713__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__43748 = cljs.core.seq.call(null,provides);
var chunk__43749 = null;
var count__43750 = (0);
var i__43751 = (0);
while(true){
if((i__43751 < count__43750)){
var prov = cljs.core._nth.call(null,chunk__43749,i__43751);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43752_43760 = cljs.core.seq.call(null,requires);
var chunk__43753_43761 = null;
var count__43754_43762 = (0);
var i__43755_43763 = (0);
while(true){
if((i__43755_43763 < count__43754_43762)){
var req_43764 = cljs.core._nth.call(null,chunk__43753_43761,i__43755_43763);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43764,prov);

var G__43765 = seq__43752_43760;
var G__43766 = chunk__43753_43761;
var G__43767 = count__43754_43762;
var G__43768 = (i__43755_43763 + (1));
seq__43752_43760 = G__43765;
chunk__43753_43761 = G__43766;
count__43754_43762 = G__43767;
i__43755_43763 = G__43768;
continue;
} else {
var temp__4657__auto___43769 = cljs.core.seq.call(null,seq__43752_43760);
if(temp__4657__auto___43769){
var seq__43752_43770__$1 = temp__4657__auto___43769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43752_43770__$1)){
var c__25629__auto___43771 = cljs.core.chunk_first.call(null,seq__43752_43770__$1);
var G__43772 = cljs.core.chunk_rest.call(null,seq__43752_43770__$1);
var G__43773 = c__25629__auto___43771;
var G__43774 = cljs.core.count.call(null,c__25629__auto___43771);
var G__43775 = (0);
seq__43752_43760 = G__43772;
chunk__43753_43761 = G__43773;
count__43754_43762 = G__43774;
i__43755_43763 = G__43775;
continue;
} else {
var req_43776 = cljs.core.first.call(null,seq__43752_43770__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43776,prov);

var G__43777 = cljs.core.next.call(null,seq__43752_43770__$1);
var G__43778 = null;
var G__43779 = (0);
var G__43780 = (0);
seq__43752_43760 = G__43777;
chunk__43753_43761 = G__43778;
count__43754_43762 = G__43779;
i__43755_43763 = G__43780;
continue;
}
} else {
}
}
break;
}

var G__43781 = seq__43748;
var G__43782 = chunk__43749;
var G__43783 = count__43750;
var G__43784 = (i__43751 + (1));
seq__43748 = G__43781;
chunk__43749 = G__43782;
count__43750 = G__43783;
i__43751 = G__43784;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43748);
if(temp__4657__auto__){
var seq__43748__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43748__$1)){
var c__25629__auto__ = cljs.core.chunk_first.call(null,seq__43748__$1);
var G__43785 = cljs.core.chunk_rest.call(null,seq__43748__$1);
var G__43786 = c__25629__auto__;
var G__43787 = cljs.core.count.call(null,c__25629__auto__);
var G__43788 = (0);
seq__43748 = G__43785;
chunk__43749 = G__43786;
count__43750 = G__43787;
i__43751 = G__43788;
continue;
} else {
var prov = cljs.core.first.call(null,seq__43748__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43756_43789 = cljs.core.seq.call(null,requires);
var chunk__43757_43790 = null;
var count__43758_43791 = (0);
var i__43759_43792 = (0);
while(true){
if((i__43759_43792 < count__43758_43791)){
var req_43793 = cljs.core._nth.call(null,chunk__43757_43790,i__43759_43792);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43793,prov);

var G__43794 = seq__43756_43789;
var G__43795 = chunk__43757_43790;
var G__43796 = count__43758_43791;
var G__43797 = (i__43759_43792 + (1));
seq__43756_43789 = G__43794;
chunk__43757_43790 = G__43795;
count__43758_43791 = G__43796;
i__43759_43792 = G__43797;
continue;
} else {
var temp__4657__auto___43798__$1 = cljs.core.seq.call(null,seq__43756_43789);
if(temp__4657__auto___43798__$1){
var seq__43756_43799__$1 = temp__4657__auto___43798__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43756_43799__$1)){
var c__25629__auto___43800 = cljs.core.chunk_first.call(null,seq__43756_43799__$1);
var G__43801 = cljs.core.chunk_rest.call(null,seq__43756_43799__$1);
var G__43802 = c__25629__auto___43800;
var G__43803 = cljs.core.count.call(null,c__25629__auto___43800);
var G__43804 = (0);
seq__43756_43789 = G__43801;
chunk__43757_43790 = G__43802;
count__43758_43791 = G__43803;
i__43759_43792 = G__43804;
continue;
} else {
var req_43805 = cljs.core.first.call(null,seq__43756_43799__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43805,prov);

var G__43806 = cljs.core.next.call(null,seq__43756_43799__$1);
var G__43807 = null;
var G__43808 = (0);
var G__43809 = (0);
seq__43756_43789 = G__43806;
chunk__43757_43790 = G__43807;
count__43758_43791 = G__43808;
i__43759_43792 = G__43809;
continue;
}
} else {
}
}
break;
}

var G__43810 = cljs.core.next.call(null,seq__43748__$1);
var G__43811 = null;
var G__43812 = (0);
var G__43813 = (0);
seq__43748 = G__43810;
chunk__43749 = G__43811;
count__43750 = G__43812;
i__43751 = G__43813;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__43818_43822 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43819_43823 = null;
var count__43820_43824 = (0);
var i__43821_43825 = (0);
while(true){
if((i__43821_43825 < count__43820_43824)){
var ns_43826 = cljs.core._nth.call(null,chunk__43819_43823,i__43821_43825);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43826);

var G__43827 = seq__43818_43822;
var G__43828 = chunk__43819_43823;
var G__43829 = count__43820_43824;
var G__43830 = (i__43821_43825 + (1));
seq__43818_43822 = G__43827;
chunk__43819_43823 = G__43828;
count__43820_43824 = G__43829;
i__43821_43825 = G__43830;
continue;
} else {
var temp__4657__auto___43831 = cljs.core.seq.call(null,seq__43818_43822);
if(temp__4657__auto___43831){
var seq__43818_43832__$1 = temp__4657__auto___43831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43818_43832__$1)){
var c__25629__auto___43833 = cljs.core.chunk_first.call(null,seq__43818_43832__$1);
var G__43834 = cljs.core.chunk_rest.call(null,seq__43818_43832__$1);
var G__43835 = c__25629__auto___43833;
var G__43836 = cljs.core.count.call(null,c__25629__auto___43833);
var G__43837 = (0);
seq__43818_43822 = G__43834;
chunk__43819_43823 = G__43835;
count__43820_43824 = G__43836;
i__43821_43825 = G__43837;
continue;
} else {
var ns_43838 = cljs.core.first.call(null,seq__43818_43832__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43838);

var G__43839 = cljs.core.next.call(null,seq__43818_43832__$1);
var G__43840 = null;
var G__43841 = (0);
var G__43842 = (0);
seq__43818_43822 = G__43839;
chunk__43819_43823 = G__43840;
count__43820_43824 = G__43841;
i__43821_43825 = G__43842;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24818__auto__ = goog.require__;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__43843__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43844__i = 0, G__43844__a = new Array(arguments.length -  0);
while (G__43844__i < G__43844__a.length) {G__43844__a[G__43844__i] = arguments[G__43844__i + 0]; ++G__43844__i;}
  args = new cljs.core.IndexedSeq(G__43844__a,0);
} 
return G__43843__delegate.call(this,args);};
G__43843.cljs$lang$maxFixedArity = 0;
G__43843.cljs$lang$applyTo = (function (arglist__43845){
var args = cljs.core.seq(arglist__43845);
return G__43843__delegate(args);
});
G__43843.cljs$core$IFn$_invoke$arity$variadic = G__43843__delegate;
return G__43843;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43846 = cljs.core._EQ_;
var expr__43847 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43846.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43847))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__43846,expr__43847){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__43846,expr__43847))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__43846,expr__43847){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e43849){if((e43849 instanceof Error)){
var e = e43849;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43849;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__43846,expr__43847))
} else {
if(cljs.core.truth_(pred__43846.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43847))){
return ((function (pred__43846,expr__43847){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__43846,expr__43847){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__43846,expr__43847))
);

return deferred.addErrback(((function (deferred,pred__43846,expr__43847){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__43846,expr__43847))
);
});
;})(pred__43846,expr__43847))
} else {
if(cljs.core.truth_(pred__43846.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__43847))){
return ((function (pred__43846,expr__43847){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e43850){if((e43850 instanceof Error)){
var e = e43850;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43850;

}
}})());
});
;})(pred__43846,expr__43847))
} else {
return ((function (pred__43846,expr__43847){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43846,expr__43847))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43851,callback){
var map__43854 = p__43851;
var map__43854__$1 = ((((!((map__43854 == null)))?((((map__43854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43854):map__43854);
var file_msg = map__43854__$1;
var request_url = cljs.core.get.call(null,map__43854__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__43854,map__43854__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43854,map__43854__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__){
return (function (state_43878){
var state_val_43879 = (state_43878[(1)]);
if((state_val_43879 === (7))){
var inst_43874 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
var statearr_43880_43900 = state_43878__$1;
(statearr_43880_43900[(2)] = inst_43874);

(statearr_43880_43900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (1))){
var state_43878__$1 = state_43878;
var statearr_43881_43901 = state_43878__$1;
(statearr_43881_43901[(2)] = null);

(statearr_43881_43901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (4))){
var inst_43858 = (state_43878[(7)]);
var inst_43858__$1 = (state_43878[(2)]);
var state_43878__$1 = (function (){var statearr_43882 = state_43878;
(statearr_43882[(7)] = inst_43858__$1);

return statearr_43882;
})();
if(cljs.core.truth_(inst_43858__$1)){
var statearr_43883_43902 = state_43878__$1;
(statearr_43883_43902[(1)] = (5));

} else {
var statearr_43884_43903 = state_43878__$1;
(statearr_43884_43903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (6))){
var state_43878__$1 = state_43878;
var statearr_43885_43904 = state_43878__$1;
(statearr_43885_43904[(2)] = null);

(statearr_43885_43904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (3))){
var inst_43876 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43878__$1,inst_43876);
} else {
if((state_val_43879 === (2))){
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43878__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43879 === (11))){
var inst_43870 = (state_43878[(2)]);
var state_43878__$1 = (function (){var statearr_43886 = state_43878;
(statearr_43886[(8)] = inst_43870);

return statearr_43886;
})();
var statearr_43887_43905 = state_43878__$1;
(statearr_43887_43905[(2)] = null);

(statearr_43887_43905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (9))){
var inst_43862 = (state_43878[(9)]);
var inst_43864 = (state_43878[(10)]);
var inst_43866 = inst_43864.call(null,inst_43862);
var state_43878__$1 = state_43878;
var statearr_43888_43906 = state_43878__$1;
(statearr_43888_43906[(2)] = inst_43866);

(statearr_43888_43906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (5))){
var inst_43858 = (state_43878[(7)]);
var inst_43860 = figwheel.client.file_reloading.blocking_load.call(null,inst_43858);
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43878__$1,(8),inst_43860);
} else {
if((state_val_43879 === (10))){
var inst_43862 = (state_43878[(9)]);
var inst_43868 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43862);
var state_43878__$1 = state_43878;
var statearr_43889_43907 = state_43878__$1;
(statearr_43889_43907[(2)] = inst_43868);

(statearr_43889_43907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (8))){
var inst_43858 = (state_43878[(7)]);
var inst_43864 = (state_43878[(10)]);
var inst_43862 = (state_43878[(2)]);
var inst_43863 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43864__$1 = cljs.core.get.call(null,inst_43863,inst_43858);
var state_43878__$1 = (function (){var statearr_43890 = state_43878;
(statearr_43890[(9)] = inst_43862);

(statearr_43890[(10)] = inst_43864__$1);

return statearr_43890;
})();
if(cljs.core.truth_(inst_43864__$1)){
var statearr_43891_43908 = state_43878__$1;
(statearr_43891_43908[(1)] = (9));

} else {
var statearr_43892_43909 = state_43878__$1;
(statearr_43892_43909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__26990__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26879__auto__ = null;
var figwheel$client$file_reloading$state_machine__26879__auto____0 = (function (){
var statearr_43896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43896[(0)] = figwheel$client$file_reloading$state_machine__26879__auto__);

(statearr_43896[(1)] = (1));

return statearr_43896;
});
var figwheel$client$file_reloading$state_machine__26879__auto____1 = (function (state_43878){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_43878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e43897){if((e43897 instanceof Object)){
var ex__26882__auto__ = e43897;
var statearr_43898_43910 = state_43878;
(statearr_43898_43910[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43911 = state_43878;
state_43878 = G__43911;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26879__auto__ = function(state_43878){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26879__auto____1.call(this,state_43878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26879__auto____0;
figwheel$client$file_reloading$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26879__auto____1;
return figwheel$client$file_reloading$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__))
})();
var state__26992__auto__ = (function (){var statearr_43899 = f__26991__auto__.call(null);
(statearr_43899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_43899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__))
);

return c__26990__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43912,callback){
var map__43915 = p__43912;
var map__43915__$1 = ((((!((map__43915 == null)))?((((map__43915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43915):map__43915);
var file_msg = map__43915__$1;
var namespace = cljs.core.get.call(null,map__43915__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43915,map__43915__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43915,map__43915__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__43917){
var map__43920 = p__43917;
var map__43920__$1 = ((((!((map__43920 == null)))?((((map__43920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43920):map__43920);
var file_msg = map__43920__$1;
var namespace = cljs.core.get.call(null,map__43920__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43922){
var map__43925 = p__43922;
var map__43925__$1 = ((((!((map__43925 == null)))?((((map__43925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43925):map__43925);
var file_msg = map__43925__$1;
var namespace = cljs.core.get.call(null,map__43925__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24806__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24806__auto__){
var or__24818__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
var or__24818__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24818__auto____$1)){
return or__24818__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24806__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43927,callback){
var map__43930 = p__43927;
var map__43930__$1 = ((((!((map__43930 == null)))?((((map__43930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43930):map__43930);
var file_msg = map__43930__$1;
var request_url = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26990__auto___44034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___44034,out){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___44034,out){
return (function (state_44016){
var state_val_44017 = (state_44016[(1)]);
if((state_val_44017 === (1))){
var inst_43990 = cljs.core.seq.call(null,files);
var inst_43991 = cljs.core.first.call(null,inst_43990);
var inst_43992 = cljs.core.next.call(null,inst_43990);
var inst_43993 = files;
var state_44016__$1 = (function (){var statearr_44018 = state_44016;
(statearr_44018[(7)] = inst_43991);

(statearr_44018[(8)] = inst_43992);

(statearr_44018[(9)] = inst_43993);

return statearr_44018;
})();
var statearr_44019_44035 = state_44016__$1;
(statearr_44019_44035[(2)] = null);

(statearr_44019_44035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44017 === (2))){
var inst_43999 = (state_44016[(10)]);
var inst_43993 = (state_44016[(9)]);
var inst_43998 = cljs.core.seq.call(null,inst_43993);
var inst_43999__$1 = cljs.core.first.call(null,inst_43998);
var inst_44000 = cljs.core.next.call(null,inst_43998);
var inst_44001 = (inst_43999__$1 == null);
var inst_44002 = cljs.core.not.call(null,inst_44001);
var state_44016__$1 = (function (){var statearr_44020 = state_44016;
(statearr_44020[(10)] = inst_43999__$1);

(statearr_44020[(11)] = inst_44000);

return statearr_44020;
})();
if(inst_44002){
var statearr_44021_44036 = state_44016__$1;
(statearr_44021_44036[(1)] = (4));

} else {
var statearr_44022_44037 = state_44016__$1;
(statearr_44022_44037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44017 === (3))){
var inst_44014 = (state_44016[(2)]);
var state_44016__$1 = state_44016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44016__$1,inst_44014);
} else {
if((state_val_44017 === (4))){
var inst_43999 = (state_44016[(10)]);
var inst_44004 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43999);
var state_44016__$1 = state_44016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44016__$1,(7),inst_44004);
} else {
if((state_val_44017 === (5))){
var inst_44010 = cljs.core.async.close_BANG_.call(null,out);
var state_44016__$1 = state_44016;
var statearr_44023_44038 = state_44016__$1;
(statearr_44023_44038[(2)] = inst_44010);

(statearr_44023_44038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44017 === (6))){
var inst_44012 = (state_44016[(2)]);
var state_44016__$1 = state_44016;
var statearr_44024_44039 = state_44016__$1;
(statearr_44024_44039[(2)] = inst_44012);

(statearr_44024_44039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44017 === (7))){
var inst_44000 = (state_44016[(11)]);
var inst_44006 = (state_44016[(2)]);
var inst_44007 = cljs.core.async.put_BANG_.call(null,out,inst_44006);
var inst_43993 = inst_44000;
var state_44016__$1 = (function (){var statearr_44025 = state_44016;
(statearr_44025[(12)] = inst_44007);

(statearr_44025[(9)] = inst_43993);

return statearr_44025;
})();
var statearr_44026_44040 = state_44016__$1;
(statearr_44026_44040[(2)] = null);

(statearr_44026_44040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26990__auto___44034,out))
;
return ((function (switch__26878__auto__,c__26990__auto___44034,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto____0 = (function (){
var statearr_44030 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44030[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto__);

(statearr_44030[(1)] = (1));

return statearr_44030;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto____1 = (function (state_44016){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_44016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e44031){if((e44031 instanceof Object)){
var ex__26882__auto__ = e44031;
var statearr_44032_44041 = state_44016;
(statearr_44032_44041[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44042 = state_44016;
state_44016 = G__44042;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto__ = function(state_44016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto____1.call(this,state_44016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___44034,out))
})();
var state__26992__auto__ = (function (){var statearr_44033 = f__26991__auto__.call(null);
(statearr_44033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___44034);

return statearr_44033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___44034,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44043,opts){
var map__44047 = p__44043;
var map__44047__$1 = ((((!((map__44047 == null)))?((((map__44047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44047):map__44047);
var eval_body__$1 = cljs.core.get.call(null,map__44047__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24806__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24806__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24806__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44049){var e = e44049;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44050_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44050_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__44059){
var vec__44060 = p__44059;
var k = cljs.core.nth.call(null,vec__44060,(0),null);
var v = cljs.core.nth.call(null,vec__44060,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44063){
var vec__44064 = p__44063;
var k = cljs.core.nth.call(null,vec__44064,(0),null);
var v = cljs.core.nth.call(null,vec__44064,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44070,p__44071){
var map__44318 = p__44070;
var map__44318__$1 = ((((!((map__44318 == null)))?((((map__44318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44318):map__44318);
var opts = map__44318__$1;
var before_jsload = cljs.core.get.call(null,map__44318__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44318__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44318__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44319 = p__44071;
var map__44319__$1 = ((((!((map__44319 == null)))?((((map__44319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44319):map__44319);
var msg = map__44319__$1;
var files = cljs.core.get.call(null,map__44319__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44319__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44319__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_44472){
var state_val_44473 = (state_44472[(1)]);
if((state_val_44473 === (7))){
var inst_44334 = (state_44472[(7)]);
var inst_44336 = (state_44472[(8)]);
var inst_44335 = (state_44472[(9)]);
var inst_44333 = (state_44472[(10)]);
var inst_44341 = cljs.core._nth.call(null,inst_44334,inst_44336);
var inst_44342 = figwheel.client.file_reloading.eval_body.call(null,inst_44341,opts);
var inst_44343 = (inst_44336 + (1));
var tmp44474 = inst_44334;
var tmp44475 = inst_44335;
var tmp44476 = inst_44333;
var inst_44333__$1 = tmp44476;
var inst_44334__$1 = tmp44474;
var inst_44335__$1 = tmp44475;
var inst_44336__$1 = inst_44343;
var state_44472__$1 = (function (){var statearr_44477 = state_44472;
(statearr_44477[(7)] = inst_44334__$1);

(statearr_44477[(11)] = inst_44342);

(statearr_44477[(8)] = inst_44336__$1);

(statearr_44477[(9)] = inst_44335__$1);

(statearr_44477[(10)] = inst_44333__$1);

return statearr_44477;
})();
var statearr_44478_44564 = state_44472__$1;
(statearr_44478_44564[(2)] = null);

(statearr_44478_44564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (20))){
var inst_44376 = (state_44472[(12)]);
var inst_44384 = figwheel.client.file_reloading.sort_files.call(null,inst_44376);
var state_44472__$1 = state_44472;
var statearr_44479_44565 = state_44472__$1;
(statearr_44479_44565[(2)] = inst_44384);

(statearr_44479_44565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (27))){
var state_44472__$1 = state_44472;
var statearr_44480_44566 = state_44472__$1;
(statearr_44480_44566[(2)] = null);

(statearr_44480_44566[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (1))){
var inst_44325 = (state_44472[(13)]);
var inst_44322 = before_jsload.call(null,files);
var inst_44323 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44324 = (function (){return ((function (inst_44325,inst_44322,inst_44323,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44067_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44067_SHARP_);
});
;})(inst_44325,inst_44322,inst_44323,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44325__$1 = cljs.core.filter.call(null,inst_44324,files);
var inst_44326 = cljs.core.not_empty.call(null,inst_44325__$1);
var state_44472__$1 = (function (){var statearr_44481 = state_44472;
(statearr_44481[(13)] = inst_44325__$1);

(statearr_44481[(14)] = inst_44322);

(statearr_44481[(15)] = inst_44323);

return statearr_44481;
})();
if(cljs.core.truth_(inst_44326)){
var statearr_44482_44567 = state_44472__$1;
(statearr_44482_44567[(1)] = (2));

} else {
var statearr_44483_44568 = state_44472__$1;
(statearr_44483_44568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (24))){
var state_44472__$1 = state_44472;
var statearr_44484_44569 = state_44472__$1;
(statearr_44484_44569[(2)] = null);

(statearr_44484_44569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (39))){
var inst_44426 = (state_44472[(16)]);
var state_44472__$1 = state_44472;
var statearr_44485_44570 = state_44472__$1;
(statearr_44485_44570[(2)] = inst_44426);

(statearr_44485_44570[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (46))){
var inst_44467 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
var statearr_44486_44571 = state_44472__$1;
(statearr_44486_44571[(2)] = inst_44467);

(statearr_44486_44571[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (4))){
var inst_44370 = (state_44472[(2)]);
var inst_44371 = cljs.core.List.EMPTY;
var inst_44372 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44371);
var inst_44373 = (function (){return ((function (inst_44370,inst_44371,inst_44372,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44068_SHARP_){
var and__24806__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44068_SHARP_);
if(cljs.core.truth_(and__24806__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44068_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44068_SHARP_)));
} else {
return and__24806__auto__;
}
});
;})(inst_44370,inst_44371,inst_44372,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44374 = cljs.core.filter.call(null,inst_44373,files);
var inst_44375 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44376 = cljs.core.concat.call(null,inst_44374,inst_44375);
var state_44472__$1 = (function (){var statearr_44487 = state_44472;
(statearr_44487[(17)] = inst_44370);

(statearr_44487[(12)] = inst_44376);

(statearr_44487[(18)] = inst_44372);

return statearr_44487;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44488_44572 = state_44472__$1;
(statearr_44488_44572[(1)] = (16));

} else {
var statearr_44489_44573 = state_44472__$1;
(statearr_44489_44573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (15))){
var inst_44360 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
var statearr_44490_44574 = state_44472__$1;
(statearr_44490_44574[(2)] = inst_44360);

(statearr_44490_44574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (21))){
var inst_44386 = (state_44472[(19)]);
var inst_44386__$1 = (state_44472[(2)]);
var inst_44387 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44386__$1);
var state_44472__$1 = (function (){var statearr_44491 = state_44472;
(statearr_44491[(19)] = inst_44386__$1);

return statearr_44491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44472__$1,(22),inst_44387);
} else {
if((state_val_44473 === (31))){
var inst_44470 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44472__$1,inst_44470);
} else {
if((state_val_44473 === (32))){
var inst_44426 = (state_44472[(16)]);
var inst_44431 = inst_44426.cljs$lang$protocol_mask$partition0$;
var inst_44432 = (inst_44431 & (64));
var inst_44433 = inst_44426.cljs$core$ISeq$;
var inst_44434 = (inst_44432) || (inst_44433);
var state_44472__$1 = state_44472;
if(cljs.core.truth_(inst_44434)){
var statearr_44492_44575 = state_44472__$1;
(statearr_44492_44575[(1)] = (35));

} else {
var statearr_44493_44576 = state_44472__$1;
(statearr_44493_44576[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (40))){
var inst_44447 = (state_44472[(20)]);
var inst_44446 = (state_44472[(2)]);
var inst_44447__$1 = cljs.core.get.call(null,inst_44446,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44448 = cljs.core.get.call(null,inst_44446,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44449 = cljs.core.not_empty.call(null,inst_44447__$1);
var state_44472__$1 = (function (){var statearr_44494 = state_44472;
(statearr_44494[(20)] = inst_44447__$1);

(statearr_44494[(21)] = inst_44448);

return statearr_44494;
})();
if(cljs.core.truth_(inst_44449)){
var statearr_44495_44577 = state_44472__$1;
(statearr_44495_44577[(1)] = (41));

} else {
var statearr_44496_44578 = state_44472__$1;
(statearr_44496_44578[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (33))){
var state_44472__$1 = state_44472;
var statearr_44497_44579 = state_44472__$1;
(statearr_44497_44579[(2)] = false);

(statearr_44497_44579[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (13))){
var inst_44346 = (state_44472[(22)]);
var inst_44350 = cljs.core.chunk_first.call(null,inst_44346);
var inst_44351 = cljs.core.chunk_rest.call(null,inst_44346);
var inst_44352 = cljs.core.count.call(null,inst_44350);
var inst_44333 = inst_44351;
var inst_44334 = inst_44350;
var inst_44335 = inst_44352;
var inst_44336 = (0);
var state_44472__$1 = (function (){var statearr_44498 = state_44472;
(statearr_44498[(7)] = inst_44334);

(statearr_44498[(8)] = inst_44336);

(statearr_44498[(9)] = inst_44335);

(statearr_44498[(10)] = inst_44333);

return statearr_44498;
})();
var statearr_44499_44580 = state_44472__$1;
(statearr_44499_44580[(2)] = null);

(statearr_44499_44580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (22))){
var inst_44389 = (state_44472[(23)]);
var inst_44394 = (state_44472[(24)]);
var inst_44386 = (state_44472[(19)]);
var inst_44390 = (state_44472[(25)]);
var inst_44389__$1 = (state_44472[(2)]);
var inst_44390__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44389__$1);
var inst_44391 = (function (){var all_files = inst_44386;
var res_SINGLEQUOTE_ = inst_44389__$1;
var res = inst_44390__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44389,inst_44394,inst_44386,inst_44390,inst_44389__$1,inst_44390__$1,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44069_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44069_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44389,inst_44394,inst_44386,inst_44390,inst_44389__$1,inst_44390__$1,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44392 = cljs.core.filter.call(null,inst_44391,inst_44389__$1);
var inst_44393 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44394__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44393);
var inst_44395 = cljs.core.not_empty.call(null,inst_44394__$1);
var state_44472__$1 = (function (){var statearr_44500 = state_44472;
(statearr_44500[(26)] = inst_44392);

(statearr_44500[(23)] = inst_44389__$1);

(statearr_44500[(24)] = inst_44394__$1);

(statearr_44500[(25)] = inst_44390__$1);

return statearr_44500;
})();
if(cljs.core.truth_(inst_44395)){
var statearr_44501_44581 = state_44472__$1;
(statearr_44501_44581[(1)] = (23));

} else {
var statearr_44502_44582 = state_44472__$1;
(statearr_44502_44582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (36))){
var state_44472__$1 = state_44472;
var statearr_44503_44583 = state_44472__$1;
(statearr_44503_44583[(2)] = false);

(statearr_44503_44583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (41))){
var inst_44447 = (state_44472[(20)]);
var inst_44451 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44452 = cljs.core.map.call(null,inst_44451,inst_44447);
var inst_44453 = cljs.core.pr_str.call(null,inst_44452);
var inst_44454 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_44453)].join('');
var inst_44455 = figwheel.client.utils.log.call(null,inst_44454);
var state_44472__$1 = state_44472;
var statearr_44504_44584 = state_44472__$1;
(statearr_44504_44584[(2)] = inst_44455);

(statearr_44504_44584[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (43))){
var inst_44448 = (state_44472[(21)]);
var inst_44458 = (state_44472[(2)]);
var inst_44459 = cljs.core.not_empty.call(null,inst_44448);
var state_44472__$1 = (function (){var statearr_44505 = state_44472;
(statearr_44505[(27)] = inst_44458);

return statearr_44505;
})();
if(cljs.core.truth_(inst_44459)){
var statearr_44506_44585 = state_44472__$1;
(statearr_44506_44585[(1)] = (44));

} else {
var statearr_44507_44586 = state_44472__$1;
(statearr_44507_44586[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (29))){
var inst_44426 = (state_44472[(16)]);
var inst_44392 = (state_44472[(26)]);
var inst_44389 = (state_44472[(23)]);
var inst_44394 = (state_44472[(24)]);
var inst_44386 = (state_44472[(19)]);
var inst_44390 = (state_44472[(25)]);
var inst_44422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44425 = (function (){var all_files = inst_44386;
var res_SINGLEQUOTE_ = inst_44389;
var res = inst_44390;
var files_not_loaded = inst_44392;
var dependencies_that_loaded = inst_44394;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44426,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44422,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44424){
var map__44508 = p__44424;
var map__44508__$1 = ((((!((map__44508 == null)))?((((map__44508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44508):map__44508);
var namespace = cljs.core.get.call(null,map__44508__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44426,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44422,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44426__$1 = cljs.core.group_by.call(null,inst_44425,inst_44392);
var inst_44428 = (inst_44426__$1 == null);
var inst_44429 = cljs.core.not.call(null,inst_44428);
var state_44472__$1 = (function (){var statearr_44510 = state_44472;
(statearr_44510[(16)] = inst_44426__$1);

(statearr_44510[(28)] = inst_44422);

return statearr_44510;
})();
if(inst_44429){
var statearr_44511_44587 = state_44472__$1;
(statearr_44511_44587[(1)] = (32));

} else {
var statearr_44512_44588 = state_44472__$1;
(statearr_44512_44588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (44))){
var inst_44448 = (state_44472[(21)]);
var inst_44461 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44448);
var inst_44462 = cljs.core.pr_str.call(null,inst_44461);
var inst_44463 = [cljs.core.str("not required: "),cljs.core.str(inst_44462)].join('');
var inst_44464 = figwheel.client.utils.log.call(null,inst_44463);
var state_44472__$1 = state_44472;
var statearr_44513_44589 = state_44472__$1;
(statearr_44513_44589[(2)] = inst_44464);

(statearr_44513_44589[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (6))){
var inst_44367 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
var statearr_44514_44590 = state_44472__$1;
(statearr_44514_44590[(2)] = inst_44367);

(statearr_44514_44590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (28))){
var inst_44392 = (state_44472[(26)]);
var inst_44419 = (state_44472[(2)]);
var inst_44420 = cljs.core.not_empty.call(null,inst_44392);
var state_44472__$1 = (function (){var statearr_44515 = state_44472;
(statearr_44515[(29)] = inst_44419);

return statearr_44515;
})();
if(cljs.core.truth_(inst_44420)){
var statearr_44516_44591 = state_44472__$1;
(statearr_44516_44591[(1)] = (29));

} else {
var statearr_44517_44592 = state_44472__$1;
(statearr_44517_44592[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (25))){
var inst_44390 = (state_44472[(25)]);
var inst_44406 = (state_44472[(2)]);
var inst_44407 = cljs.core.not_empty.call(null,inst_44390);
var state_44472__$1 = (function (){var statearr_44518 = state_44472;
(statearr_44518[(30)] = inst_44406);

return statearr_44518;
})();
if(cljs.core.truth_(inst_44407)){
var statearr_44519_44593 = state_44472__$1;
(statearr_44519_44593[(1)] = (26));

} else {
var statearr_44520_44594 = state_44472__$1;
(statearr_44520_44594[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (34))){
var inst_44441 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
if(cljs.core.truth_(inst_44441)){
var statearr_44521_44595 = state_44472__$1;
(statearr_44521_44595[(1)] = (38));

} else {
var statearr_44522_44596 = state_44472__$1;
(statearr_44522_44596[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (17))){
var state_44472__$1 = state_44472;
var statearr_44523_44597 = state_44472__$1;
(statearr_44523_44597[(2)] = recompile_dependents);

(statearr_44523_44597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (3))){
var state_44472__$1 = state_44472;
var statearr_44524_44598 = state_44472__$1;
(statearr_44524_44598[(2)] = null);

(statearr_44524_44598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (12))){
var inst_44363 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
var statearr_44525_44599 = state_44472__$1;
(statearr_44525_44599[(2)] = inst_44363);

(statearr_44525_44599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (2))){
var inst_44325 = (state_44472[(13)]);
var inst_44332 = cljs.core.seq.call(null,inst_44325);
var inst_44333 = inst_44332;
var inst_44334 = null;
var inst_44335 = (0);
var inst_44336 = (0);
var state_44472__$1 = (function (){var statearr_44526 = state_44472;
(statearr_44526[(7)] = inst_44334);

(statearr_44526[(8)] = inst_44336);

(statearr_44526[(9)] = inst_44335);

(statearr_44526[(10)] = inst_44333);

return statearr_44526;
})();
var statearr_44527_44600 = state_44472__$1;
(statearr_44527_44600[(2)] = null);

(statearr_44527_44600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (23))){
var inst_44392 = (state_44472[(26)]);
var inst_44389 = (state_44472[(23)]);
var inst_44394 = (state_44472[(24)]);
var inst_44386 = (state_44472[(19)]);
var inst_44390 = (state_44472[(25)]);
var inst_44397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44399 = (function (){var all_files = inst_44386;
var res_SINGLEQUOTE_ = inst_44389;
var res = inst_44390;
var files_not_loaded = inst_44392;
var dependencies_that_loaded = inst_44394;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44397,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44398){
var map__44528 = p__44398;
var map__44528__$1 = ((((!((map__44528 == null)))?((((map__44528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44528):map__44528);
var request_url = cljs.core.get.call(null,map__44528__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44397,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44400 = cljs.core.reverse.call(null,inst_44394);
var inst_44401 = cljs.core.map.call(null,inst_44399,inst_44400);
var inst_44402 = cljs.core.pr_str.call(null,inst_44401);
var inst_44403 = figwheel.client.utils.log.call(null,inst_44402);
var state_44472__$1 = (function (){var statearr_44530 = state_44472;
(statearr_44530[(31)] = inst_44397);

return statearr_44530;
})();
var statearr_44531_44601 = state_44472__$1;
(statearr_44531_44601[(2)] = inst_44403);

(statearr_44531_44601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (35))){
var state_44472__$1 = state_44472;
var statearr_44532_44602 = state_44472__$1;
(statearr_44532_44602[(2)] = true);

(statearr_44532_44602[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (19))){
var inst_44376 = (state_44472[(12)]);
var inst_44382 = figwheel.client.file_reloading.expand_files.call(null,inst_44376);
var state_44472__$1 = state_44472;
var statearr_44533_44603 = state_44472__$1;
(statearr_44533_44603[(2)] = inst_44382);

(statearr_44533_44603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (11))){
var state_44472__$1 = state_44472;
var statearr_44534_44604 = state_44472__$1;
(statearr_44534_44604[(2)] = null);

(statearr_44534_44604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (9))){
var inst_44365 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
var statearr_44535_44605 = state_44472__$1;
(statearr_44535_44605[(2)] = inst_44365);

(statearr_44535_44605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (5))){
var inst_44336 = (state_44472[(8)]);
var inst_44335 = (state_44472[(9)]);
var inst_44338 = (inst_44336 < inst_44335);
var inst_44339 = inst_44338;
var state_44472__$1 = state_44472;
if(cljs.core.truth_(inst_44339)){
var statearr_44536_44606 = state_44472__$1;
(statearr_44536_44606[(1)] = (7));

} else {
var statearr_44537_44607 = state_44472__$1;
(statearr_44537_44607[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (14))){
var inst_44346 = (state_44472[(22)]);
var inst_44355 = cljs.core.first.call(null,inst_44346);
var inst_44356 = figwheel.client.file_reloading.eval_body.call(null,inst_44355,opts);
var inst_44357 = cljs.core.next.call(null,inst_44346);
var inst_44333 = inst_44357;
var inst_44334 = null;
var inst_44335 = (0);
var inst_44336 = (0);
var state_44472__$1 = (function (){var statearr_44538 = state_44472;
(statearr_44538[(7)] = inst_44334);

(statearr_44538[(8)] = inst_44336);

(statearr_44538[(9)] = inst_44335);

(statearr_44538[(32)] = inst_44356);

(statearr_44538[(10)] = inst_44333);

return statearr_44538;
})();
var statearr_44539_44608 = state_44472__$1;
(statearr_44539_44608[(2)] = null);

(statearr_44539_44608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (45))){
var state_44472__$1 = state_44472;
var statearr_44540_44609 = state_44472__$1;
(statearr_44540_44609[(2)] = null);

(statearr_44540_44609[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (26))){
var inst_44392 = (state_44472[(26)]);
var inst_44389 = (state_44472[(23)]);
var inst_44394 = (state_44472[(24)]);
var inst_44386 = (state_44472[(19)]);
var inst_44390 = (state_44472[(25)]);
var inst_44409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44411 = (function (){var all_files = inst_44386;
var res_SINGLEQUOTE_ = inst_44389;
var res = inst_44390;
var files_not_loaded = inst_44392;
var dependencies_that_loaded = inst_44394;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44409,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44410){
var map__44541 = p__44410;
var map__44541__$1 = ((((!((map__44541 == null)))?((((map__44541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44541):map__44541);
var namespace = cljs.core.get.call(null,map__44541__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44409,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44412 = cljs.core.map.call(null,inst_44411,inst_44390);
var inst_44413 = cljs.core.pr_str.call(null,inst_44412);
var inst_44414 = figwheel.client.utils.log.call(null,inst_44413);
var inst_44415 = (function (){var all_files = inst_44386;
var res_SINGLEQUOTE_ = inst_44389;
var res = inst_44390;
var files_not_loaded = inst_44392;
var dependencies_that_loaded = inst_44394;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44409,inst_44411,inst_44412,inst_44413,inst_44414,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44392,inst_44389,inst_44394,inst_44386,inst_44390,inst_44409,inst_44411,inst_44412,inst_44413,inst_44414,state_val_44473,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44416 = setTimeout(inst_44415,(10));
var state_44472__$1 = (function (){var statearr_44543 = state_44472;
(statearr_44543[(33)] = inst_44409);

(statearr_44543[(34)] = inst_44414);

return statearr_44543;
})();
var statearr_44544_44610 = state_44472__$1;
(statearr_44544_44610[(2)] = inst_44416);

(statearr_44544_44610[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (16))){
var state_44472__$1 = state_44472;
var statearr_44545_44611 = state_44472__$1;
(statearr_44545_44611[(2)] = reload_dependents);

(statearr_44545_44611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (38))){
var inst_44426 = (state_44472[(16)]);
var inst_44443 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44426);
var state_44472__$1 = state_44472;
var statearr_44546_44612 = state_44472__$1;
(statearr_44546_44612[(2)] = inst_44443);

(statearr_44546_44612[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (30))){
var state_44472__$1 = state_44472;
var statearr_44547_44613 = state_44472__$1;
(statearr_44547_44613[(2)] = null);

(statearr_44547_44613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (10))){
var inst_44346 = (state_44472[(22)]);
var inst_44348 = cljs.core.chunked_seq_QMARK_.call(null,inst_44346);
var state_44472__$1 = state_44472;
if(inst_44348){
var statearr_44548_44614 = state_44472__$1;
(statearr_44548_44614[(1)] = (13));

} else {
var statearr_44549_44615 = state_44472__$1;
(statearr_44549_44615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (18))){
var inst_44380 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
if(cljs.core.truth_(inst_44380)){
var statearr_44550_44616 = state_44472__$1;
(statearr_44550_44616[(1)] = (19));

} else {
var statearr_44551_44617 = state_44472__$1;
(statearr_44551_44617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (42))){
var state_44472__$1 = state_44472;
var statearr_44552_44618 = state_44472__$1;
(statearr_44552_44618[(2)] = null);

(statearr_44552_44618[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (37))){
var inst_44438 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
var statearr_44553_44619 = state_44472__$1;
(statearr_44553_44619[(2)] = inst_44438);

(statearr_44553_44619[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (8))){
var inst_44333 = (state_44472[(10)]);
var inst_44346 = (state_44472[(22)]);
var inst_44346__$1 = cljs.core.seq.call(null,inst_44333);
var state_44472__$1 = (function (){var statearr_44554 = state_44472;
(statearr_44554[(22)] = inst_44346__$1);

return statearr_44554;
})();
if(inst_44346__$1){
var statearr_44555_44620 = state_44472__$1;
(statearr_44555_44620[(1)] = (10));

} else {
var statearr_44556_44621 = state_44472__$1;
(statearr_44556_44621[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26878__auto__,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto____0 = (function (){
var statearr_44560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44560[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto__);

(statearr_44560[(1)] = (1));

return statearr_44560;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto____1 = (function (state_44472){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_44472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e44561){if((e44561 instanceof Object)){
var ex__26882__auto__ = e44561;
var statearr_44562_44622 = state_44472;
(statearr_44562_44622[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44623 = state_44472;
state_44472 = G__44623;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto__ = function(state_44472){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto____1.call(this,state_44472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26992__auto__ = (function (){var statearr_44563 = f__26991__auto__.call(null);
(statearr_44563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_44563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__,map__44318,map__44318__$1,opts,before_jsload,on_jsload,reload_dependents,map__44319,map__44319__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26990__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44626,link){
var map__44629 = p__44626;
var map__44629__$1 = ((((!((map__44629 == null)))?((((map__44629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44629):map__44629);
var file = cljs.core.get.call(null,map__44629__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__44629,map__44629__$1,file){
return (function (p1__44624_SHARP_,p2__44625_SHARP_){
if(cljs.core._EQ_.call(null,p1__44624_SHARP_,p2__44625_SHARP_)){
return p1__44624_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__44629,map__44629__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44635){
var map__44636 = p__44635;
var map__44636__$1 = ((((!((map__44636 == null)))?((((map__44636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44636):map__44636);
var match_length = cljs.core.get.call(null,map__44636__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44636__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44631_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44631_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44638_SHARP_,p2__44639_SHARP_){
return cljs.core.assoc.call(null,p1__44638_SHARP_,cljs.core.get.call(null,p2__44639_SHARP_,key),p2__44639_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_44640 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44640);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44640);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44641,p__44642){
var map__44647 = p__44641;
var map__44647__$1 = ((((!((map__44647 == null)))?((((map__44647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44647):map__44647);
var on_cssload = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44648 = p__44642;
var map__44648__$1 = ((((!((map__44648 == null)))?((((map__44648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44648):map__44648);
var files_msg = map__44648__$1;
var files = cljs.core.get.call(null,map__44648__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530813198953