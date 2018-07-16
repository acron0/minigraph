// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__41714__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41711 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41712 = cljs.core.seq.call(null,vec__41711);
var first__41713 = cljs.core.first.call(null,seq__41712);
var seq__41712__$1 = cljs.core.next.call(null,seq__41712);
var tag = first__41713;
var body = seq__41712__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41715__i = 0, G__41715__a = new Array(arguments.length -  0);
while (G__41715__i < G__41715__a.length) {G__41715__a[G__41715__i] = arguments[G__41715__i + 0]; ++G__41715__i;}
  args = new cljs.core.IndexedSeq(G__41715__a,0);
} 
return G__41714__delegate.call(this,args);};
G__41714.cljs$lang$maxFixedArity = 0;
G__41714.cljs$lang$applyTo = (function (arglist__41716){
var args = cljs.core.seq(arglist__41716);
return G__41714__delegate(args);
});
G__41714.cljs$core$IFn$_invoke$arity$variadic = G__41714__delegate;
return G__41714;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25598__auto__ = (function sablono$core$update_arglists_$_iter__41721(s__41722){
return (new cljs.core.LazySeq(null,(function (){
var s__41722__$1 = s__41722;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41722__$1);
if(temp__4657__auto__){
var s__41722__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41722__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__41722__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__41724 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__41723 = (0);
while(true){
if((i__41723 < size__25597__auto__)){
var args = cljs.core._nth.call(null,c__25596__auto__,i__41723);
cljs.core.chunk_append.call(null,b__41724,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41725 = (i__41723 + (1));
i__41723 = G__41725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41724),sablono$core$update_arglists_$_iter__41721.call(null,cljs.core.chunk_rest.call(null,s__41722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41724),null);
}
} else {
var args = cljs.core.first.call(null,s__41722__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41721.call(null,cljs.core.rest.call(null,s__41722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25598__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25900__auto__ = [];
var len__25893__auto___41731 = arguments.length;
var i__25894__auto___41732 = (0);
while(true){
if((i__25894__auto___41732 < len__25893__auto___41731)){
args__25900__auto__.push((arguments[i__25894__auto___41732]));

var G__41733 = (i__25894__auto___41732 + (1));
i__25894__auto___41732 = G__41733;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25598__auto__ = (function sablono$core$iter__41727(s__41728){
return (new cljs.core.LazySeq(null,(function (){
var s__41728__$1 = s__41728;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41728__$1);
if(temp__4657__auto__){
var s__41728__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41728__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__41728__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__41730 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__41729 = (0);
while(true){
if((i__41729 < size__25597__auto__)){
var style = cljs.core._nth.call(null,c__25596__auto__,i__41729);
cljs.core.chunk_append.call(null,b__41730,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41734 = (i__41729 + (1));
i__41729 = G__41734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41730),sablono$core$iter__41727.call(null,cljs.core.chunk_rest.call(null,s__41728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41730),null);
}
} else {
var style = cljs.core.first.call(null,s__41728__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41727.call(null,cljs.core.rest.call(null,s__41728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25598__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq41726){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41726));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to41735 = (function sablono$core$link_to41735(var_args){
var args__25900__auto__ = [];
var len__25893__auto___41738 = arguments.length;
var i__25894__auto___41739 = (0);
while(true){
if((i__25894__auto___41739 < len__25893__auto___41738)){
args__25900__auto__.push((arguments[i__25894__auto___41739]));

var G__41740 = (i__25894__auto___41739 + (1));
i__25894__auto___41739 = G__41740;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((1) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41735.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25901__auto__);
});

sablono.core.link_to41735.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41735.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41735.cljs$lang$applyTo = (function (seq41736){
var G__41737 = cljs.core.first.call(null,seq41736);
var seq41736__$1 = cljs.core.next.call(null,seq41736);
return sablono.core.link_to41735.cljs$core$IFn$_invoke$arity$variadic(G__41737,seq41736__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41735);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41741 = (function sablono$core$mail_to41741(var_args){
var args__25900__auto__ = [];
var len__25893__auto___41748 = arguments.length;
var i__25894__auto___41749 = (0);
while(true){
if((i__25894__auto___41749 < len__25893__auto___41748)){
args__25900__auto__.push((arguments[i__25894__auto___41749]));

var G__41750 = (i__25894__auto___41749 + (1));
i__25894__auto___41749 = G__41750;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((1) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41741.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25901__auto__);
});

sablono.core.mail_to41741.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41744){
var vec__41745 = p__41744;
var content = cljs.core.nth.call(null,vec__41745,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24818__auto__ = content;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41741.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41741.cljs$lang$applyTo = (function (seq41742){
var G__41743 = cljs.core.first.call(null,seq41742);
var seq41742__$1 = cljs.core.next.call(null,seq41742);
return sablono.core.mail_to41741.cljs$core$IFn$_invoke$arity$variadic(G__41743,seq41742__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41741);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41751 = (function sablono$core$unordered_list41751(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25598__auto__ = (function sablono$core$unordered_list41751_$_iter__41756(s__41757){
return (new cljs.core.LazySeq(null,(function (){
var s__41757__$1 = s__41757;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41757__$1);
if(temp__4657__auto__){
var s__41757__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41757__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__41757__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__41759 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__41758 = (0);
while(true){
if((i__41758 < size__25597__auto__)){
var x = cljs.core._nth.call(null,c__25596__auto__,i__41758);
cljs.core.chunk_append.call(null,b__41759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41760 = (i__41758 + (1));
i__41758 = G__41760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41759),sablono$core$unordered_list41751_$_iter__41756.call(null,cljs.core.chunk_rest.call(null,s__41757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41759),null);
}
} else {
var x = cljs.core.first.call(null,s__41757__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41751_$_iter__41756.call(null,cljs.core.rest.call(null,s__41757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25598__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41751);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41761 = (function sablono$core$ordered_list41761(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25598__auto__ = (function sablono$core$ordered_list41761_$_iter__41766(s__41767){
return (new cljs.core.LazySeq(null,(function (){
var s__41767__$1 = s__41767;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41767__$1);
if(temp__4657__auto__){
var s__41767__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41767__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__41767__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__41769 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__41768 = (0);
while(true){
if((i__41768 < size__25597__auto__)){
var x = cljs.core._nth.call(null,c__25596__auto__,i__41768);
cljs.core.chunk_append.call(null,b__41769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41770 = (i__41768 + (1));
i__41768 = G__41770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41769),sablono$core$ordered_list41761_$_iter__41766.call(null,cljs.core.chunk_rest.call(null,s__41767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41769),null);
}
} else {
var x = cljs.core.first.call(null,s__41767__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41761_$_iter__41766.call(null,cljs.core.rest.call(null,s__41767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25598__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41761);
/**
 * Create an image element.
 */
sablono.core.image41771 = (function sablono$core$image41771(var_args){
var args41772 = [];
var len__25893__auto___41775 = arguments.length;
var i__25894__auto___41776 = (0);
while(true){
if((i__25894__auto___41776 < len__25893__auto___41775)){
args41772.push((arguments[i__25894__auto___41776]));

var G__41777 = (i__25894__auto___41776 + (1));
i__25894__auto___41776 = G__41777;
continue;
} else {
}
break;
}

var G__41774 = args41772.length;
switch (G__41774) {
case 1:
return sablono.core.image41771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41772.length)].join('')));

}
});

sablono.core.image41771.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41771.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41771.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41771);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41779_SHARP_,p2__41780_SHARP_){
return [cljs.core.str(p1__41779_SHARP_),cljs.core.str("["),cljs.core.str(p2__41780_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41781_SHARP_,p2__41782_SHARP_){
return [cljs.core.str(p1__41781_SHARP_),cljs.core.str("-"),cljs.core.str(p2__41782_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24818__auto__ = value;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field41783 = (function sablono$core$color_field41783(var_args){
var args41784 = [];
var len__25893__auto___41851 = arguments.length;
var i__25894__auto___41852 = (0);
while(true){
if((i__25894__auto___41852 < len__25893__auto___41851)){
args41784.push((arguments[i__25894__auto___41852]));

var G__41853 = (i__25894__auto___41852 + (1));
i__25894__auto___41852 = G__41853;
continue;
} else {
}
break;
}

var G__41786 = args41784.length;
switch (G__41786) {
case 1:
return sablono.core.color_field41783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41784.length)].join('')));

}
});

sablono.core.color_field41783.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.color_field41783.call(null,name__41698__auto__,null);
});

sablono.core.color_field41783.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.color_field41783.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41783);

/**
 * Creates a date input field.
 */
sablono.core.date_field41787 = (function sablono$core$date_field41787(var_args){
var args41788 = [];
var len__25893__auto___41855 = arguments.length;
var i__25894__auto___41856 = (0);
while(true){
if((i__25894__auto___41856 < len__25893__auto___41855)){
args41788.push((arguments[i__25894__auto___41856]));

var G__41857 = (i__25894__auto___41856 + (1));
i__25894__auto___41856 = G__41857;
continue;
} else {
}
break;
}

var G__41790 = args41788.length;
switch (G__41790) {
case 1:
return sablono.core.date_field41787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41788.length)].join('')));

}
});

sablono.core.date_field41787.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.date_field41787.call(null,name__41698__auto__,null);
});

sablono.core.date_field41787.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.date_field41787.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41787);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41791 = (function sablono$core$datetime_field41791(var_args){
var args41792 = [];
var len__25893__auto___41859 = arguments.length;
var i__25894__auto___41860 = (0);
while(true){
if((i__25894__auto___41860 < len__25893__auto___41859)){
args41792.push((arguments[i__25894__auto___41860]));

var G__41861 = (i__25894__auto___41860 + (1));
i__25894__auto___41860 = G__41861;
continue;
} else {
}
break;
}

var G__41794 = args41792.length;
switch (G__41794) {
case 1:
return sablono.core.datetime_field41791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41792.length)].join('')));

}
});

sablono.core.datetime_field41791.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.datetime_field41791.call(null,name__41698__auto__,null);
});

sablono.core.datetime_field41791.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.datetime_field41791.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41791);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41795 = (function sablono$core$datetime_local_field41795(var_args){
var args41796 = [];
var len__25893__auto___41863 = arguments.length;
var i__25894__auto___41864 = (0);
while(true){
if((i__25894__auto___41864 < len__25893__auto___41863)){
args41796.push((arguments[i__25894__auto___41864]));

var G__41865 = (i__25894__auto___41864 + (1));
i__25894__auto___41864 = G__41865;
continue;
} else {
}
break;
}

var G__41798 = args41796.length;
switch (G__41798) {
case 1:
return sablono.core.datetime_local_field41795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41796.length)].join('')));

}
});

sablono.core.datetime_local_field41795.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.datetime_local_field41795.call(null,name__41698__auto__,null);
});

sablono.core.datetime_local_field41795.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.datetime_local_field41795.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41795);

/**
 * Creates a email input field.
 */
sablono.core.email_field41799 = (function sablono$core$email_field41799(var_args){
var args41800 = [];
var len__25893__auto___41867 = arguments.length;
var i__25894__auto___41868 = (0);
while(true){
if((i__25894__auto___41868 < len__25893__auto___41867)){
args41800.push((arguments[i__25894__auto___41868]));

var G__41869 = (i__25894__auto___41868 + (1));
i__25894__auto___41868 = G__41869;
continue;
} else {
}
break;
}

var G__41802 = args41800.length;
switch (G__41802) {
case 1:
return sablono.core.email_field41799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41800.length)].join('')));

}
});

sablono.core.email_field41799.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.email_field41799.call(null,name__41698__auto__,null);
});

sablono.core.email_field41799.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.email_field41799.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41799);

/**
 * Creates a file input field.
 */
sablono.core.file_field41803 = (function sablono$core$file_field41803(var_args){
var args41804 = [];
var len__25893__auto___41871 = arguments.length;
var i__25894__auto___41872 = (0);
while(true){
if((i__25894__auto___41872 < len__25893__auto___41871)){
args41804.push((arguments[i__25894__auto___41872]));

var G__41873 = (i__25894__auto___41872 + (1));
i__25894__auto___41872 = G__41873;
continue;
} else {
}
break;
}

var G__41806 = args41804.length;
switch (G__41806) {
case 1:
return sablono.core.file_field41803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41804.length)].join('')));

}
});

sablono.core.file_field41803.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.file_field41803.call(null,name__41698__auto__,null);
});

sablono.core.file_field41803.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.file_field41803.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field41803);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41807 = (function sablono$core$hidden_field41807(var_args){
var args41808 = [];
var len__25893__auto___41875 = arguments.length;
var i__25894__auto___41876 = (0);
while(true){
if((i__25894__auto___41876 < len__25893__auto___41875)){
args41808.push((arguments[i__25894__auto___41876]));

var G__41877 = (i__25894__auto___41876 + (1));
i__25894__auto___41876 = G__41877;
continue;
} else {
}
break;
}

var G__41810 = args41808.length;
switch (G__41810) {
case 1:
return sablono.core.hidden_field41807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41808.length)].join('')));

}
});

sablono.core.hidden_field41807.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.hidden_field41807.call(null,name__41698__auto__,null);
});

sablono.core.hidden_field41807.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.hidden_field41807.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field41807);

/**
 * Creates a month input field.
 */
sablono.core.month_field41811 = (function sablono$core$month_field41811(var_args){
var args41812 = [];
var len__25893__auto___41879 = arguments.length;
var i__25894__auto___41880 = (0);
while(true){
if((i__25894__auto___41880 < len__25893__auto___41879)){
args41812.push((arguments[i__25894__auto___41880]));

var G__41881 = (i__25894__auto___41880 + (1));
i__25894__auto___41880 = G__41881;
continue;
} else {
}
break;
}

var G__41814 = args41812.length;
switch (G__41814) {
case 1:
return sablono.core.month_field41811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41812.length)].join('')));

}
});

sablono.core.month_field41811.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.month_field41811.call(null,name__41698__auto__,null);
});

sablono.core.month_field41811.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.month_field41811.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field41811);

/**
 * Creates a number input field.
 */
sablono.core.number_field41815 = (function sablono$core$number_field41815(var_args){
var args41816 = [];
var len__25893__auto___41883 = arguments.length;
var i__25894__auto___41884 = (0);
while(true){
if((i__25894__auto___41884 < len__25893__auto___41883)){
args41816.push((arguments[i__25894__auto___41884]));

var G__41885 = (i__25894__auto___41884 + (1));
i__25894__auto___41884 = G__41885;
continue;
} else {
}
break;
}

var G__41818 = args41816.length;
switch (G__41818) {
case 1:
return sablono.core.number_field41815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41816.length)].join('')));

}
});

sablono.core.number_field41815.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.number_field41815.call(null,name__41698__auto__,null);
});

sablono.core.number_field41815.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.number_field41815.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field41815);

/**
 * Creates a password input field.
 */
sablono.core.password_field41819 = (function sablono$core$password_field41819(var_args){
var args41820 = [];
var len__25893__auto___41887 = arguments.length;
var i__25894__auto___41888 = (0);
while(true){
if((i__25894__auto___41888 < len__25893__auto___41887)){
args41820.push((arguments[i__25894__auto___41888]));

var G__41889 = (i__25894__auto___41888 + (1));
i__25894__auto___41888 = G__41889;
continue;
} else {
}
break;
}

var G__41822 = args41820.length;
switch (G__41822) {
case 1:
return sablono.core.password_field41819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41820.length)].join('')));

}
});

sablono.core.password_field41819.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.password_field41819.call(null,name__41698__auto__,null);
});

sablono.core.password_field41819.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.password_field41819.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field41819);

/**
 * Creates a range input field.
 */
sablono.core.range_field41823 = (function sablono$core$range_field41823(var_args){
var args41824 = [];
var len__25893__auto___41891 = arguments.length;
var i__25894__auto___41892 = (0);
while(true){
if((i__25894__auto___41892 < len__25893__auto___41891)){
args41824.push((arguments[i__25894__auto___41892]));

var G__41893 = (i__25894__auto___41892 + (1));
i__25894__auto___41892 = G__41893;
continue;
} else {
}
break;
}

var G__41826 = args41824.length;
switch (G__41826) {
case 1:
return sablono.core.range_field41823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41824.length)].join('')));

}
});

sablono.core.range_field41823.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.range_field41823.call(null,name__41698__auto__,null);
});

sablono.core.range_field41823.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.range_field41823.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field41823);

/**
 * Creates a search input field.
 */
sablono.core.search_field41827 = (function sablono$core$search_field41827(var_args){
var args41828 = [];
var len__25893__auto___41895 = arguments.length;
var i__25894__auto___41896 = (0);
while(true){
if((i__25894__auto___41896 < len__25893__auto___41895)){
args41828.push((arguments[i__25894__auto___41896]));

var G__41897 = (i__25894__auto___41896 + (1));
i__25894__auto___41896 = G__41897;
continue;
} else {
}
break;
}

var G__41830 = args41828.length;
switch (G__41830) {
case 1:
return sablono.core.search_field41827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41828.length)].join('')));

}
});

sablono.core.search_field41827.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.search_field41827.call(null,name__41698__auto__,null);
});

sablono.core.search_field41827.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.search_field41827.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field41827);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41831 = (function sablono$core$tel_field41831(var_args){
var args41832 = [];
var len__25893__auto___41899 = arguments.length;
var i__25894__auto___41900 = (0);
while(true){
if((i__25894__auto___41900 < len__25893__auto___41899)){
args41832.push((arguments[i__25894__auto___41900]));

var G__41901 = (i__25894__auto___41900 + (1));
i__25894__auto___41900 = G__41901;
continue;
} else {
}
break;
}

var G__41834 = args41832.length;
switch (G__41834) {
case 1:
return sablono.core.tel_field41831.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41832.length)].join('')));

}
});

sablono.core.tel_field41831.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.tel_field41831.call(null,name__41698__auto__,null);
});

sablono.core.tel_field41831.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.tel_field41831.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field41831);

/**
 * Creates a text input field.
 */
sablono.core.text_field41835 = (function sablono$core$text_field41835(var_args){
var args41836 = [];
var len__25893__auto___41903 = arguments.length;
var i__25894__auto___41904 = (0);
while(true){
if((i__25894__auto___41904 < len__25893__auto___41903)){
args41836.push((arguments[i__25894__auto___41904]));

var G__41905 = (i__25894__auto___41904 + (1));
i__25894__auto___41904 = G__41905;
continue;
} else {
}
break;
}

var G__41838 = args41836.length;
switch (G__41838) {
case 1:
return sablono.core.text_field41835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41836.length)].join('')));

}
});

sablono.core.text_field41835.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.text_field41835.call(null,name__41698__auto__,null);
});

sablono.core.text_field41835.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.text_field41835.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field41835);

/**
 * Creates a time input field.
 */
sablono.core.time_field41839 = (function sablono$core$time_field41839(var_args){
var args41840 = [];
var len__25893__auto___41907 = arguments.length;
var i__25894__auto___41908 = (0);
while(true){
if((i__25894__auto___41908 < len__25893__auto___41907)){
args41840.push((arguments[i__25894__auto___41908]));

var G__41909 = (i__25894__auto___41908 + (1));
i__25894__auto___41908 = G__41909;
continue;
} else {
}
break;
}

var G__41842 = args41840.length;
switch (G__41842) {
case 1:
return sablono.core.time_field41839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41840.length)].join('')));

}
});

sablono.core.time_field41839.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.time_field41839.call(null,name__41698__auto__,null);
});

sablono.core.time_field41839.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.time_field41839.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field41839);

/**
 * Creates a url input field.
 */
sablono.core.url_field41843 = (function sablono$core$url_field41843(var_args){
var args41844 = [];
var len__25893__auto___41911 = arguments.length;
var i__25894__auto___41912 = (0);
while(true){
if((i__25894__auto___41912 < len__25893__auto___41911)){
args41844.push((arguments[i__25894__auto___41912]));

var G__41913 = (i__25894__auto___41912 + (1));
i__25894__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var G__41846 = args41844.length;
switch (G__41846) {
case 1:
return sablono.core.url_field41843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41844.length)].join('')));

}
});

sablono.core.url_field41843.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.url_field41843.call(null,name__41698__auto__,null);
});

sablono.core.url_field41843.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.url_field41843.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field41843);

/**
 * Creates a week input field.
 */
sablono.core.week_field41847 = (function sablono$core$week_field41847(var_args){
var args41848 = [];
var len__25893__auto___41915 = arguments.length;
var i__25894__auto___41916 = (0);
while(true){
if((i__25894__auto___41916 < len__25893__auto___41915)){
args41848.push((arguments[i__25894__auto___41916]));

var G__41917 = (i__25894__auto___41916 + (1));
i__25894__auto___41916 = G__41917;
continue;
} else {
}
break;
}

var G__41850 = args41848.length;
switch (G__41850) {
case 1:
return sablono.core.week_field41847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41848.length)].join('')));

}
});

sablono.core.week_field41847.cljs$core$IFn$_invoke$arity$1 = (function (name__41698__auto__){
return sablono.core.week_field41847.call(null,name__41698__auto__,null);
});

sablono.core.week_field41847.cljs$core$IFn$_invoke$arity$2 = (function (name__41698__auto__,value__41699__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41698__auto__,value__41699__auto__);
});

sablono.core.week_field41847.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field41847);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41919 = (function sablono$core$check_box41919(var_args){
var args41920 = [];
var len__25893__auto___41923 = arguments.length;
var i__25894__auto___41924 = (0);
while(true){
if((i__25894__auto___41924 < len__25893__auto___41923)){
args41920.push((arguments[i__25894__auto___41924]));

var G__41925 = (i__25894__auto___41924 + (1));
i__25894__auto___41924 = G__41925;
continue;
} else {
}
break;
}

var G__41922 = args41920.length;
switch (G__41922) {
case 1:
return sablono.core.check_box41919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41919.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41920.length)].join('')));

}
});

sablono.core.check_box41919.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box41919.call(null,name,null);
});

sablono.core.check_box41919.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box41919.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box41919.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24818__auto__ = value;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box41919.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box41919);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41927 = (function sablono$core$radio_button41927(var_args){
var args41928 = [];
var len__25893__auto___41931 = arguments.length;
var i__25894__auto___41932 = (0);
while(true){
if((i__25894__auto___41932 < len__25893__auto___41931)){
args41928.push((arguments[i__25894__auto___41932]));

var G__41933 = (i__25894__auto___41932 + (1));
i__25894__auto___41932 = G__41933;
continue;
} else {
}
break;
}

var G__41930 = args41928.length;
switch (G__41930) {
case 1:
return sablono.core.radio_button41927.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41927.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41927.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41928.length)].join('')));

}
});

sablono.core.radio_button41927.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button41927.call(null,group,null);
});

sablono.core.radio_button41927.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button41927.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button41927.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24818__auto__ = value;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button41927.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button41927);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41935 = (function sablono$core$select_options41935(coll){
var iter__25598__auto__ = (function sablono$core$select_options41935_$_iter__41952(s__41953){
return (new cljs.core.LazySeq(null,(function (){
var s__41953__$1 = s__41953;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41953__$1);
if(temp__4657__auto__){
var s__41953__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41953__$2)){
var c__25596__auto__ = cljs.core.chunk_first.call(null,s__41953__$2);
var size__25597__auto__ = cljs.core.count.call(null,c__25596__auto__);
var b__41955 = cljs.core.chunk_buffer.call(null,size__25597__auto__);
if((function (){var i__41954 = (0);
while(true){
if((i__41954 < size__25597__auto__)){
var x = cljs.core._nth.call(null,c__25596__auto__,i__41954);
cljs.core.chunk_append.call(null,b__41955,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41962 = x;
var text = cljs.core.nth.call(null,vec__41962,(0),null);
var val = cljs.core.nth.call(null,vec__41962,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41962,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options41935.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41968 = (i__41954 + (1));
i__41954 = G__41968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41955),sablono$core$select_options41935_$_iter__41952.call(null,cljs.core.chunk_rest.call(null,s__41953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41955),null);
}
} else {
var x = cljs.core.first.call(null,s__41953__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41965 = x;
var text = cljs.core.nth.call(null,vec__41965,(0),null);
var val = cljs.core.nth.call(null,vec__41965,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41965,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options41935.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41935_$_iter__41952.call(null,cljs.core.rest.call(null,s__41953__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25598__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options41935);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41969 = (function sablono$core$drop_down41969(var_args){
var args41970 = [];
var len__25893__auto___41973 = arguments.length;
var i__25894__auto___41974 = (0);
while(true){
if((i__25894__auto___41974 < len__25893__auto___41973)){
args41970.push((arguments[i__25894__auto___41974]));

var G__41975 = (i__25894__auto___41974 + (1));
i__25894__auto___41974 = G__41975;
continue;
} else {
}
break;
}

var G__41972 = args41970.length;
switch (G__41972) {
case 2:
return sablono.core.drop_down41969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41969.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41970.length)].join('')));

}
});

sablono.core.drop_down41969.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41969.call(null,name,options,null);
});

sablono.core.drop_down41969.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down41969.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down41969);
/**
 * Creates a text area element.
 */
sablono.core.text_area41977 = (function sablono$core$text_area41977(var_args){
var args41978 = [];
var len__25893__auto___41981 = arguments.length;
var i__25894__auto___41982 = (0);
while(true){
if((i__25894__auto___41982 < len__25893__auto___41981)){
args41978.push((arguments[i__25894__auto___41982]));

var G__41983 = (i__25894__auto___41982 + (1));
i__25894__auto___41982 = G__41983;
continue;
} else {
}
break;
}

var G__41980 = args41978.length;
switch (G__41980) {
case 1:
return sablono.core.text_area41977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41978.length)].join('')));

}
});

sablono.core.text_area41977.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area41977.call(null,name,null);
});

sablono.core.text_area41977.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24818__auto__ = value;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area41977.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area41977);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41985 = (function sablono$core$label41985(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label41985);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41986 = (function sablono$core$submit_button41986(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button41986);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41987 = (function sablono$core$reset_button41987(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button41987);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41988 = (function sablono$core$form_to41988(var_args){
var args__25900__auto__ = [];
var len__25893__auto___41995 = arguments.length;
var i__25894__auto___41996 = (0);
while(true){
if((i__25894__auto___41996 < len__25893__auto___41995)){
args__25900__auto__.push((arguments[i__25894__auto___41996]));

var G__41997 = (i__25894__auto___41996 + (1));
i__25894__auto___41996 = G__41997;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((1) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41988.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25901__auto__);
});

sablono.core.form_to41988.cljs$core$IFn$_invoke$arity$variadic = (function (p__41991,body){
var vec__41992 = p__41991;
var method = cljs.core.nth.call(null,vec__41992,(0),null);
var action = cljs.core.nth.call(null,vec__41992,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to41988.cljs$lang$maxFixedArity = (1);

sablono.core.form_to41988.cljs$lang$applyTo = (function (seq41989){
var G__41990 = cljs.core.first.call(null,seq41989);
var seq41989__$1 = cljs.core.next.call(null,seq41989);
return sablono.core.form_to41988.cljs$core$IFn$_invoke$arity$variadic(G__41990,seq41989__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to41988);

//# sourceMappingURL=core.js.map?rel=1530813196543