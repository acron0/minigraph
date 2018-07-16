// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__24818__auto__ = (function (){var and__24806__auto__ = typeof Symbol !== 'undefined';
if(and__24806__auto__){
var and__24806__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__24806__auto____$1){
var and__24806__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__24806__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__24806__auto____$2;
}
} else {
return and__24806__auto____$1;
}
} else {
return and__24806__auto__;
}
})();
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__42836_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__42836_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args42837 = [];
var len__25893__auto___42840 = arguments.length;
var i__25894__auto___42841 = (0);
while(true){
if((i__25894__auto___42841 < len__25893__auto___42840)){
args42837.push((arguments[i__25894__auto___42841]));

var G__42842 = (i__25894__auto___42841 + (1));
i__25894__auto___42841 = G__42842;
continue;
} else {
}
break;
}

var G__42839 = args42837.length;
switch (G__42839) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42837.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__24806__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__24806__auto__){
var map__42850 = c;
var map__42850__$1 = ((((!((map__42850 == null)))?((((map__42850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42850):map__42850);
var path = cljs.core.get.call(null,map__42850__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__42850__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__24806__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__42044__auto___42856 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__24818__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__42044__auto___42856);
}

var seq__42852_42857 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__42853_42858 = null;
var count__42854_42859 = (0);
var i__42855_42860 = (0);
while(true){
if((i__42855_42860 < count__42854_42859)){
var property__42045__auto___42861 = cljs.core._nth.call(null,chunk__42853_42858,i__42855_42860);
if(cljs.core.truth_((base__42044__auto___42856[property__42045__auto___42861]))){
(devcards.core.CodeHighlight.prototype[property__42045__auto___42861] = (base__42044__auto___42856[property__42045__auto___42861]));
} else {
}

var G__42862 = seq__42852_42857;
var G__42863 = chunk__42853_42858;
var G__42864 = count__42854_42859;
var G__42865 = (i__42855_42860 + (1));
seq__42852_42857 = G__42862;
chunk__42853_42858 = G__42863;
count__42854_42859 = G__42864;
i__42855_42860 = G__42865;
continue;
} else {
var temp__4657__auto___42866 = cljs.core.seq.call(null,seq__42852_42857);
if(temp__4657__auto___42866){
var seq__42852_42867__$1 = temp__4657__auto___42866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42852_42867__$1)){
var c__25629__auto___42868 = cljs.core.chunk_first.call(null,seq__42852_42867__$1);
var G__42869 = cljs.core.chunk_rest.call(null,seq__42852_42867__$1);
var G__42870 = c__25629__auto___42868;
var G__42871 = cljs.core.count.call(null,c__25629__auto___42868);
var G__42872 = (0);
seq__42852_42857 = G__42869;
chunk__42853_42858 = G__42870;
count__42854_42859 = G__42871;
i__42855_42860 = G__42872;
continue;
} else {
var property__42045__auto___42873 = cljs.core.first.call(null,seq__42852_42867__$1);
if(cljs.core.truth_((base__42044__auto___42856[property__42045__auto___42873]))){
(devcards.core.CodeHighlight.prototype[property__42045__auto___42873] = (base__42044__auto___42856[property__42045__auto___42873]));
} else {
}

var G__42874 = cljs.core.next.call(null,seq__42852_42867__$1);
var G__42875 = null;
var G__42876 = (0);
var G__42877 = (0);
seq__42852_42857 = G__42874;
chunk__42853_42858 = G__42875;
count__42854_42859 = G__42876;
i__42855_42860 = G__42877;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__25743__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25744__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25747__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25747__auto__,method_table__25743__auto__,prefer_table__25744__auto__,method_cache__25745__auto__,cached_hierarchy__25746__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42878){
var map__42879 = p__42878;
var map__42879__$1 = ((((!((map__42879 == null)))?((((map__42879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42879):map__42879);
var content = cljs.core.get.call(null,map__42879__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__42881){
var map__42882 = p__42881;
var map__42882__$1 = ((((!((map__42882 == null)))?((((map__42882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42882):map__42882);
var block = map__42882__$1;
var content = cljs.core.get.call(null,map__42882__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__25900__auto__ = [];
var len__25893__auto___42885 = arguments.length;
var i__25894__auto___42886 = (0);
while(true){
if((i__25894__auto___42886 < len__25893__auto___42885)){
args__25900__auto__.push((arguments[i__25894__auto___42886]));

var G__42887 = (i__25894__auto___42886 + (1));
i__25894__auto___42886 = G__42887;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq42884){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42884));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__42889 = devcards.system.devcards_rendered_card_class;
var G__42889__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__42889),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__42889);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__42889__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__42889__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args42890 = [];
var len__25893__auto___42898 = arguments.length;
var i__25894__auto___42899 = (0);
while(true){
if((i__25894__auto___42899 < len__25893__auto___42898)){
args42890.push((arguments[i__25894__auto___42899]));

var G__42900 = (i__25894__auto___42899 + (1));
i__25894__auto___42899 = G__42900;
continue;
} else {
}
break;
}

var G__42892 = args42890.length;
switch (G__42892) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42890.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__42893 = card;
var map__42893__$1 = ((((!((map__42893 == null)))?((((map__42893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42893):map__42893);
var path = cljs.core.get.call(null,map__42893__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__42893__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__42893,map__42893__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__42893,map__42893__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs42895 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs42895))?sablono.interpreter.attributes.call(null,attrs42895):null),((cljs.core.map_QMARK_.call(null,attrs42895))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42895)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__25481__auto__ = (((this$ == null))?null:this$);
var m__25482__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,this$,devcard_opts);
} else {
var m__25482__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__25481__auto__ = (((this$ == null))?null:this$);
var m__25482__auto__ = (devcards.core._devcard[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,this$,devcard_opts);
} else {
var m__25482__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__42044__auto___42907 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs42902 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42902))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs42902)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs42902))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42902)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__42044__auto___42907);
}

var seq__42903_42908 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__42904_42909 = null;
var count__42905_42910 = (0);
var i__42906_42911 = (0);
while(true){
if((i__42906_42911 < count__42905_42910)){
var property__42045__auto___42912 = cljs.core._nth.call(null,chunk__42904_42909,i__42906_42911);
if(cljs.core.truth_((base__42044__auto___42907[property__42045__auto___42912]))){
(devcards.core.DontUpdate.prototype[property__42045__auto___42912] = (base__42044__auto___42907[property__42045__auto___42912]));
} else {
}

var G__42913 = seq__42903_42908;
var G__42914 = chunk__42904_42909;
var G__42915 = count__42905_42910;
var G__42916 = (i__42906_42911 + (1));
seq__42903_42908 = G__42913;
chunk__42904_42909 = G__42914;
count__42905_42910 = G__42915;
i__42906_42911 = G__42916;
continue;
} else {
var temp__4657__auto___42917 = cljs.core.seq.call(null,seq__42903_42908);
if(temp__4657__auto___42917){
var seq__42903_42918__$1 = temp__4657__auto___42917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42903_42918__$1)){
var c__25629__auto___42919 = cljs.core.chunk_first.call(null,seq__42903_42918__$1);
var G__42920 = cljs.core.chunk_rest.call(null,seq__42903_42918__$1);
var G__42921 = c__25629__auto___42919;
var G__42922 = cljs.core.count.call(null,c__25629__auto___42919);
var G__42923 = (0);
seq__42903_42908 = G__42920;
chunk__42904_42909 = G__42921;
count__42905_42910 = G__42922;
i__42906_42911 = G__42923;
continue;
} else {
var property__42045__auto___42924 = cljs.core.first.call(null,seq__42903_42918__$1);
if(cljs.core.truth_((base__42044__auto___42907[property__42045__auto___42924]))){
(devcards.core.DontUpdate.prototype[property__42045__auto___42924] = (base__42044__auto___42907[property__42045__auto___42924]));
} else {
}

var G__42925 = cljs.core.next.call(null,seq__42903_42918__$1);
var G__42926 = null;
var G__42927 = (0);
var G__42928 = (0);
seq__42903_42908 = G__42925;
chunk__42904_42909 = G__42926;
count__42905_42910 = G__42927;
i__42906_42911 = G__42928;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__24818__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25652__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25652__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25652__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25652__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto____$3);
})(),x__25652__auto____$2);
})(),x__25652__auto____$1);
})(),x__25652__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__42044__auto___42935 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__24818__auto__ = (function (){var and__24806__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__24806__auto__)){
return this$.state;
} else {
return and__24806__auto__;
}
})();
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__24806__auto__ = data_atom;
if(cljs.core.truth_(and__24806__auto__)){
return id;
} else {
return and__24806__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__42044__auto___42935);
}

var seq__42931_42936 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__42932_42937 = null;
var count__42933_42938 = (0);
var i__42934_42939 = (0);
while(true){
if((i__42934_42939 < count__42933_42938)){
var property__42045__auto___42940 = cljs.core._nth.call(null,chunk__42932_42937,i__42934_42939);
if(cljs.core.truth_((base__42044__auto___42935[property__42045__auto___42940]))){
(devcards.core.DevcardBase.prototype[property__42045__auto___42940] = (base__42044__auto___42935[property__42045__auto___42940]));
} else {
}

var G__42941 = seq__42931_42936;
var G__42942 = chunk__42932_42937;
var G__42943 = count__42933_42938;
var G__42944 = (i__42934_42939 + (1));
seq__42931_42936 = G__42941;
chunk__42932_42937 = G__42942;
count__42933_42938 = G__42943;
i__42934_42939 = G__42944;
continue;
} else {
var temp__4657__auto___42945 = cljs.core.seq.call(null,seq__42931_42936);
if(temp__4657__auto___42945){
var seq__42931_42946__$1 = temp__4657__auto___42945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42931_42946__$1)){
var c__25629__auto___42947 = cljs.core.chunk_first.call(null,seq__42931_42946__$1);
var G__42948 = cljs.core.chunk_rest.call(null,seq__42931_42946__$1);
var G__42949 = c__25629__auto___42947;
var G__42950 = cljs.core.count.call(null,c__25629__auto___42947);
var G__42951 = (0);
seq__42931_42936 = G__42948;
chunk__42932_42937 = G__42949;
count__42933_42938 = G__42950;
i__42934_42939 = G__42951;
continue;
} else {
var property__42045__auto___42952 = cljs.core.first.call(null,seq__42931_42946__$1);
if(cljs.core.truth_((base__42044__auto___42935[property__42045__auto___42952]))){
(devcards.core.DevcardBase.prototype[property__42045__auto___42952] = (base__42044__auto___42935[property__42045__auto___42952]));
} else {
}

var G__42953 = cljs.core.next.call(null,seq__42931_42946__$1);
var G__42954 = null;
var G__42955 = (0);
var G__42956 = (0);
seq__42931_42936 = G__42953;
chunk__42932_42937 = G__42954;
count__42933_42938 = G__42955;
i__42934_42939 = G__42956;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__42044__auto___42961 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__24806__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__24806__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__24806__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__42044__auto___42961);
}

var seq__42957_42962 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__42958_42963 = null;
var count__42959_42964 = (0);
var i__42960_42965 = (0);
while(true){
if((i__42960_42965 < count__42959_42964)){
var property__42045__auto___42966 = cljs.core._nth.call(null,chunk__42958_42963,i__42960_42965);
if(cljs.core.truth_((base__42044__auto___42961[property__42045__auto___42966]))){
(devcards.core.DomComponent.prototype[property__42045__auto___42966] = (base__42044__auto___42961[property__42045__auto___42966]));
} else {
}

var G__42967 = seq__42957_42962;
var G__42968 = chunk__42958_42963;
var G__42969 = count__42959_42964;
var G__42970 = (i__42960_42965 + (1));
seq__42957_42962 = G__42967;
chunk__42958_42963 = G__42968;
count__42959_42964 = G__42969;
i__42960_42965 = G__42970;
continue;
} else {
var temp__4657__auto___42971 = cljs.core.seq.call(null,seq__42957_42962);
if(temp__4657__auto___42971){
var seq__42957_42972__$1 = temp__4657__auto___42971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42957_42972__$1)){
var c__25629__auto___42973 = cljs.core.chunk_first.call(null,seq__42957_42972__$1);
var G__42974 = cljs.core.chunk_rest.call(null,seq__42957_42972__$1);
var G__42975 = c__25629__auto___42973;
var G__42976 = cljs.core.count.call(null,c__25629__auto___42973);
var G__42977 = (0);
seq__42957_42962 = G__42974;
chunk__42958_42963 = G__42975;
count__42959_42964 = G__42976;
i__42960_42965 = G__42977;
continue;
} else {
var property__42045__auto___42978 = cljs.core.first.call(null,seq__42957_42972__$1);
if(cljs.core.truth_((base__42044__auto___42961[property__42045__auto___42978]))){
(devcards.core.DomComponent.prototype[property__42045__auto___42978] = (base__42044__auto___42961[property__42045__auto___42978]));
} else {
}

var G__42979 = cljs.core.next.call(null,seq__42957_42972__$1);
var G__42980 = null;
var G__42981 = (0);
var G__42982 = (0);
seq__42957_42962 = G__42979;
chunk__42958_42963 = G__42980;
count__42959_42964 = G__42981;
i__42960_42965 = G__42982;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24818__auto__ = x === true;
if(or__24818__auto__){
return or__24818__auto__;
} else {
var or__24818__auto____$1 = x === false;
if(or__24818__auto____$1){
return or__24818__auto____$1;
} else {
var or__24818__auto____$2 = (x == null);
if(or__24818__auto____$2){
return or__24818__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24818__auto__ = typeof x === 'string';
if(or__24818__auto__){
return or__24818__auto__;
} else {
var or__24818__auto____$1 = (x == null);
if(or__24818__auto____$1){
return or__24818__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__24818__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__42983_SHARP_){
return !(p1__42983_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__42992 = opts;
var map__42992__$1 = ((((!((map__42992 == null)))?((((map__42992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42992):map__42992);
var name = cljs.core.get.call(null,map__42992__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__42992__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__42992__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__42992__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24818__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__24818__auto__){
return or__24818__auto__;
} else {
var or__24818__auto____$1 = (options == null);
if(or__24818__auto____$1){
return or__24818__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__24818__auto__ = (initial_data == null);
if(or__24818__auto__){
return or__24818__auto__;
} else {
var or__24818__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__24818__auto____$1){
return or__24818__auto____$1;
} else {
var or__24818__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__24818__auto____$2){
return or__24818__auto____$2;
} else {
var or__24818__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__24818__auto____$3){
return or__24818__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__42992,map__42992__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__42984_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__42984_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__42992,map__42992__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs43000 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43000))?sablono.interpreter.attributes.call(null,attrs43000):null),((cljs.core.map_QMARK_.call(null,attrs43000))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43000)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs43004 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43004))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs43004)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs43004))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43004)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs43005 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43005))?sablono.interpreter.attributes.call(null,attrs43005):null),((cljs.core.map_QMARK_.call(null,attrs43005))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43005)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs43006 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43006))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs43006)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs43006))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43006)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__43007_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__43007_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
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
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k43009,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__43011 = (((k43009 instanceof cljs.core.Keyword))?k43009.fqn:null);
switch (G__43011) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43009,else__25443__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43008){
var self__ = this;
var G__43008__$1 = this;
return (new cljs.core.RecordIter((0),G__43008__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__43008){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__43012 = cljs.core.keyword_identical_QMARK_;
var expr__43013 = k__25448__auto__;
if(cljs.core.truth_(pred__43012.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43013))){
return (new devcards.core.IdentiyOptions(G__43008,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__43008),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__43008){
var self__ = this;
var this__25439__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__43008,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__43010){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43010),null,cljs.core.dissoc.call(null,G__43010,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__43016){
var map__43019 = p__43016;
var map__43019__$1 = ((((!((map__43019 == null)))?((((map__43019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43019):map__43019);
var devcard_opts = map__43019__$1;
var options = cljs.core.get.call(null,map__43019__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__43019,map__43019__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__43019,map__43019__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
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
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k43022,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__43024 = (((k43022 instanceof cljs.core.Keyword))?k43022.fqn:null);
switch (G__43024) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43022,else__25443__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43021){
var self__ = this;
var G__43021__$1 = this;
return (new cljs.core.RecordIter((0),G__43021__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__43021){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__43025 = cljs.core.keyword_identical_QMARK_;
var expr__43026 = k__25448__auto__;
if(cljs.core.truth_(pred__43025.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43026))){
return (new devcards.core.AtomLikeOptions(G__43021,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__43021),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__43021){
var self__ = this;
var this__25439__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__43021,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__43023){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43023),null,cljs.core.dissoc.call(null,G__43023,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
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
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k43032,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__43034 = (((k43032 instanceof cljs.core.Keyword))?k43032.fqn:null);
switch (G__43034) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43032,else__25443__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43031){
var self__ = this;
var G__43031__$1 = this;
return (new cljs.core.RecordIter((0),G__43031__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__43031){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__43035 = cljs.core.keyword_identical_QMARK_;
var expr__43036 = k__25448__auto__;
if(cljs.core.truth_(pred__43035.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43036))){
return (new devcards.core.EdnLikeOptions(G__43031,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__43031),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__43031){
var self__ = this;
var this__25439__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__43031,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__43033){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43033),null,cljs.core.dissoc.call(null,G__43033,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__24806__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__24806__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__24806__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__43050 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__43050 == null))){
if((false) || (G__43050.devcards$core$IDevcard$)){
return true;
} else {
if((!G__43050.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43050);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__43053 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__43053__$1 = ((((!((map__43053 == null)))?((((map__43053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43053):map__43053);
var history = cljs.core.get.call(null,map__43053__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43053__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43057 = cljs.core.deref.call(null,history_atom);
var map__43057__$1 = ((((!((map__43057 == null)))?((((map__43057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43057):map__43057);
var history = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43061 = cljs.core.deref.call(null,history_atom);
var map__43061__$1 = ((((!((map__43061 == null)))?((((map__43061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43061):map__43061);
var history = cljs.core.get.call(null,map__43061__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43061__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43065 = cljs.core.deref.call(null,history_atom);
var map__43065__$1 = ((((!((map__43065 == null)))?((((map__43065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43065):map__43065);
var history = cljs.core.get.call(null,map__43065__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25652__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__24806__auto__ = data_atom;
if(cljs.core.truth_(and__24806__auto__)){
return id;
} else {
return and__24806__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__43067){
var map__43068 = p__43067;
var map__43068__$1 = ((((!((map__43068 == null)))?((((map__43068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43068):map__43068);
var ha = map__43068__$1;
var pointer = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__24818__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__24818__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_43083 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_43083;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25743__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25744__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25747__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25747__auto__,method_table__25743__auto__,prefer_table__25744__auto__,method_cache__25745__auto__,cached_hierarchy__25746__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs43084 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43084))?sablono.interpreter.attributes.call(null,attrs43084):null),((cljs.core.map_QMARK_.call(null,attrs43084))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43084)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__43085,body){
var map__43089 = p__43085;
var map__43089__$1 = ((((!((map__43089 == null)))?((((map__43089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43089):map__43089);
var message = cljs.core.get.call(null,map__43089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs43091 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs43091))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs43091)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs43091))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43091)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__43092){
var map__43100 = p__43092;
var map__43100__$1 = ((((!((map__43100 == null)))?((((map__43100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43100):map__43100);
var m = map__43100__$1;
var expected = cljs.core.get.call(null,map__43100__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__43100__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__43100__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs43102 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43102))?sablono.interpreter.attributes.call(null,attrs43102):null),((cljs.core.map_QMARK_.call(null,attrs43102))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43102),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs43109 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43109))?sablono.interpreter.attributes.call(null,attrs43109):null),((cljs.core.map_QMARK_.call(null,attrs43109))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43109)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs43110 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43110))?sablono.interpreter.attributes.call(null,attrs43110):null),((cljs.core.map_QMARK_.call(null,attrs43110))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43110)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__43111){
var map__43112 = p__43111;
var map__43112__$1 = ((((!((map__43112 == null)))?((((map__43112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43112):map__43112);
var testing_contexts = cljs.core.get.call(null,map__43112__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs43114 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__43112,map__43112__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__43112,map__43112__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25652__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43114))?sablono.interpreter.attributes.call(null,attrs43114):null),((cljs.core.map_QMARK_.call(null,attrs43114))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43114)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs43123 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__43124,p__43125){
var map__43126 = p__43124;
var map__43126__$1 = ((((!((map__43126 == null)))?((((map__43126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43126):map__43126);
var last_context = cljs.core.get.call(null,map__43126__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__43126__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__43127 = p__43125;
var i = cljs.core.nth.call(null,vec__43127,(0),null);
var t = cljs.core.nth.call(null,vec__43127,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25652__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25652__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43123))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs43123)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs43123))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43123)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__43143){
var map__43144 = p__43143;
var map__43144__$1 = ((((!((map__43144 == null)))?((((map__43144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43144):map__43144);
var type = cljs.core.get.call(null,map__43144__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__43142 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__43142__$1 = ((((!((map__43142 == null)))?((((map__43142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43142):map__43142);
var fail = cljs.core.get.call(null,map__43142__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__43142__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__43142__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1){
return (function (p__43147){
var map__43148 = p__43147;
var map__43148__$1 = ((((!((map__43148 == null)))?((((map__43148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43148):map__43148);
var type = cljs.core.get.call(null,map__43148__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1){
return (function (p__43150){
var map__43151 = p__43150;
var map__43151__$1 = ((((!((map__43151 == null)))?((((map__43151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43151):map__43151);
var type = cljs.core.get.call(null,map__43151__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__43142,map__43142__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__24818__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__){
return (function (state_43241){
var state_val_43242 = (state_43241[(1)]);
if((state_val_43242 === (7))){
var state_43241__$1 = state_43241;
var statearr_43243_43292 = state_43241__$1;
(statearr_43243_43292[(2)] = false);

(statearr_43243_43292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (20))){
var inst_43180 = (state_43241[(7)]);
var inst_43199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43180);
var state_43241__$1 = state_43241;
var statearr_43244_43293 = state_43241__$1;
(statearr_43244_43293[(2)] = inst_43199);

(statearr_43244_43293[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (27))){
var inst_43216 = (state_43241[(8)]);
var inst_43204 = (state_43241[(9)]);
var inst_43220 = inst_43204.call(null,inst_43216);
var state_43241__$1 = state_43241;
var statearr_43245_43294 = state_43241__$1;
(statearr_43245_43294[(2)] = inst_43220);

(statearr_43245_43294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (1))){
var state_43241__$1 = state_43241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43241__$1,(2),devcards.core.test_channel);
} else {
if((state_val_43242 === (24))){
var state_43241__$1 = state_43241;
var statearr_43246_43295 = state_43241__$1;
(statearr_43246_43295[(2)] = null);

(statearr_43246_43295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (4))){
var state_43241__$1 = state_43241;
var statearr_43247_43296 = state_43241__$1;
(statearr_43247_43296[(2)] = false);

(statearr_43247_43296[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (15))){
var state_43241__$1 = state_43241;
var statearr_43248_43297 = state_43241__$1;
(statearr_43248_43297[(2)] = false);

(statearr_43248_43297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (21))){
var inst_43180 = (state_43241[(7)]);
var state_43241__$1 = state_43241;
var statearr_43249_43298 = state_43241__$1;
(statearr_43249_43298[(2)] = inst_43180);

(statearr_43249_43298[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (13))){
var inst_43239 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43241__$1,inst_43239);
} else {
if((state_val_43242 === (22))){
var inst_43203 = (state_43241[(10)]);
var inst_43202 = (state_43241[(2)]);
var inst_43203__$1 = cljs.core.get.call(null,inst_43202,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43204 = cljs.core.get.call(null,inst_43202,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_43241__$1 = (function (){var statearr_43250 = state_43241;
(statearr_43250[(10)] = inst_43203__$1);

(statearr_43250[(9)] = inst_43204);

return statearr_43250;
})();
if(cljs.core.truth_(inst_43203__$1)){
var statearr_43251_43299 = state_43241__$1;
(statearr_43251_43299[(1)] = (23));

} else {
var statearr_43252_43300 = state_43241__$1;
(statearr_43252_43300[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (29))){
var inst_43230 = (state_43241[(2)]);
var inst_43231 = cljs.test.clear_env_BANG_.call(null);
var state_43241__$1 = (function (){var statearr_43253 = state_43241;
(statearr_43253[(11)] = inst_43230);

(statearr_43253[(12)] = inst_43231);

return statearr_43253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43241__$1,(30),devcards.core.test_channel);
} else {
if((state_val_43242 === (6))){
var state_43241__$1 = state_43241;
var statearr_43254_43301 = state_43241__$1;
(statearr_43254_43301[(2)] = true);

(statearr_43254_43301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (28))){
var inst_43204 = (state_43241[(9)]);
var inst_43222 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_43223 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_43224 = cljs.core.PersistentHashMap.fromArrays(inst_43222,inst_43223);
var inst_43225 = devcards.core.collect_test.call(null,inst_43224);
var inst_43226 = cljs.test.get_current_env.call(null);
var inst_43227 = cljs.core.assoc.call(null,inst_43226,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_43228 = inst_43204.call(null,inst_43227);
var state_43241__$1 = (function (){var statearr_43255 = state_43241;
(statearr_43255[(13)] = inst_43225);

return statearr_43255;
})();
var statearr_43256_43302 = state_43241__$1;
(statearr_43256_43302[(2)] = inst_43228);

(statearr_43256_43302[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (25))){
var inst_43237 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
var statearr_43257_43303 = state_43241__$1;
(statearr_43257_43303[(2)] = inst_43237);

(statearr_43257_43303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (17))){
var state_43241__$1 = state_43241;
var statearr_43258_43304 = state_43241__$1;
(statearr_43258_43304[(2)] = true);

(statearr_43258_43304[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (3))){
var inst_43157 = (state_43241[(14)]);
var inst_43162 = inst_43157.cljs$lang$protocol_mask$partition0$;
var inst_43163 = (inst_43162 & (64));
var inst_43164 = inst_43157.cljs$core$ISeq$;
var inst_43165 = (inst_43163) || (inst_43164);
var state_43241__$1 = state_43241;
if(cljs.core.truth_(inst_43165)){
var statearr_43259_43305 = state_43241__$1;
(statearr_43259_43305[(1)] = (6));

} else {
var statearr_43260_43306 = state_43241__$1;
(statearr_43260_43306[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (12))){
var inst_43180 = (state_43241[(7)]);
var inst_43184 = (inst_43180 == null);
var inst_43185 = cljs.core.not.call(null,inst_43184);
var state_43241__$1 = state_43241;
if(inst_43185){
var statearr_43261_43307 = state_43241__$1;
(statearr_43261_43307[(1)] = (14));

} else {
var statearr_43262_43308 = state_43241__$1;
(statearr_43262_43308[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (2))){
var inst_43157 = (state_43241[(14)]);
var inst_43157__$1 = (state_43241[(2)]);
var inst_43159 = (inst_43157__$1 == null);
var inst_43160 = cljs.core.not.call(null,inst_43159);
var state_43241__$1 = (function (){var statearr_43263 = state_43241;
(statearr_43263[(14)] = inst_43157__$1);

return statearr_43263;
})();
if(inst_43160){
var statearr_43264_43309 = state_43241__$1;
(statearr_43264_43309[(1)] = (3));

} else {
var statearr_43265_43310 = state_43241__$1;
(statearr_43265_43310[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (23))){
var inst_43209 = (state_43241[(15)]);
var inst_43203 = (state_43241[(10)]);
var inst_43209__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_43210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43211 = devcards.core.run_card_tests.call(null,inst_43203);
var inst_43212 = [inst_43211,inst_43209__$1];
var inst_43213 = (new cljs.core.PersistentVector(null,2,(5),inst_43210,inst_43212,null));
var state_43241__$1 = (function (){var statearr_43266 = state_43241;
(statearr_43266[(15)] = inst_43209__$1);

return statearr_43266;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43241__$1,(26),inst_43213);
} else {
if((state_val_43242 === (19))){
var inst_43194 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
var statearr_43267_43311 = state_43241__$1;
(statearr_43267_43311[(2)] = inst_43194);

(statearr_43267_43311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (11))){
var inst_43157 = (state_43241[(14)]);
var inst_43177 = (state_43241[(2)]);
var inst_43178 = cljs.core.get.call(null,inst_43177,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43179 = cljs.core.get.call(null,inst_43177,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_43180 = inst_43157;
var state_43241__$1 = (function (){var statearr_43268 = state_43241;
(statearr_43268[(16)] = inst_43178);

(statearr_43268[(17)] = inst_43179);

(statearr_43268[(7)] = inst_43180);

return statearr_43268;
})();
var statearr_43269_43312 = state_43241__$1;
(statearr_43269_43312[(2)] = null);

(statearr_43269_43312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (9))){
var inst_43157 = (state_43241[(14)]);
var inst_43174 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43157);
var state_43241__$1 = state_43241;
var statearr_43270_43313 = state_43241__$1;
(statearr_43270_43313[(2)] = inst_43174);

(statearr_43270_43313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (5))){
var inst_43172 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
if(cljs.core.truth_(inst_43172)){
var statearr_43271_43314 = state_43241__$1;
(statearr_43271_43314[(1)] = (9));

} else {
var statearr_43272_43315 = state_43241__$1;
(statearr_43272_43315[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (14))){
var inst_43180 = (state_43241[(7)]);
var inst_43187 = inst_43180.cljs$lang$protocol_mask$partition0$;
var inst_43188 = (inst_43187 & (64));
var inst_43189 = inst_43180.cljs$core$ISeq$;
var inst_43190 = (inst_43188) || (inst_43189);
var state_43241__$1 = state_43241;
if(cljs.core.truth_(inst_43190)){
var statearr_43273_43316 = state_43241__$1;
(statearr_43273_43316[(1)] = (17));

} else {
var statearr_43274_43317 = state_43241__$1;
(statearr_43274_43317[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (26))){
var inst_43209 = (state_43241[(15)]);
var inst_43215 = (state_43241[(2)]);
var inst_43216 = cljs.core.nth.call(null,inst_43215,(0),null);
var inst_43217 = cljs.core.nth.call(null,inst_43215,(1),null);
var inst_43218 = cljs.core.not_EQ_.call(null,inst_43217,inst_43209);
var state_43241__$1 = (function (){var statearr_43275 = state_43241;
(statearr_43275[(8)] = inst_43216);

return statearr_43275;
})();
if(inst_43218){
var statearr_43276_43318 = state_43241__$1;
(statearr_43276_43318[(1)] = (27));

} else {
var statearr_43277_43319 = state_43241__$1;
(statearr_43277_43319[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (16))){
var inst_43197 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
if(cljs.core.truth_(inst_43197)){
var statearr_43278_43320 = state_43241__$1;
(statearr_43278_43320[(1)] = (20));

} else {
var statearr_43279_43321 = state_43241__$1;
(statearr_43279_43321[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (30))){
var inst_43233 = (state_43241[(2)]);
var inst_43180 = inst_43233;
var state_43241__$1 = (function (){var statearr_43280 = state_43241;
(statearr_43280[(7)] = inst_43180);

return statearr_43280;
})();
var statearr_43281_43322 = state_43241__$1;
(statearr_43281_43322[(2)] = null);

(statearr_43281_43322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (10))){
var inst_43157 = (state_43241[(14)]);
var state_43241__$1 = state_43241;
var statearr_43282_43323 = state_43241__$1;
(statearr_43282_43323[(2)] = inst_43157);

(statearr_43282_43323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (18))){
var state_43241__$1 = state_43241;
var statearr_43283_43324 = state_43241__$1;
(statearr_43283_43324[(2)] = false);

(statearr_43283_43324[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (8))){
var inst_43169 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
var statearr_43284_43325 = state_43241__$1;
(statearr_43284_43325[(2)] = inst_43169);

(statearr_43284_43325[(1)] = (5));


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
});})(c__26990__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__){
return (function() {
var devcards$core$state_machine__26879__auto__ = null;
var devcards$core$state_machine__26879__auto____0 = (function (){
var statearr_43288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43288[(0)] = devcards$core$state_machine__26879__auto__);

(statearr_43288[(1)] = (1));

return statearr_43288;
});
var devcards$core$state_machine__26879__auto____1 = (function (state_43241){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_43241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e43289){if((e43289 instanceof Object)){
var ex__26882__auto__ = e43289;
var statearr_43290_43326 = state_43241;
(statearr_43290_43326[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43327 = state_43241;
state_43241 = G__43327;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
devcards$core$state_machine__26879__auto__ = function(state_43241){
switch(arguments.length){
case 0:
return devcards$core$state_machine__26879__auto____0.call(this);
case 1:
return devcards$core$state_machine__26879__auto____1.call(this,state_43241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__26879__auto____0;
devcards$core$state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__26879__auto____1;
return devcards$core$state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__))
})();
var state__26992__auto__ = (function (){var statearr_43291 = f__26991__auto__.call(null);
(statearr_43291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_43291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__))
);

return c__26990__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__42044__auto___43332 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__42044__auto___43332);
}

var seq__43328_43333 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43329_43334 = null;
var count__43330_43335 = (0);
var i__43331_43336 = (0);
while(true){
if((i__43331_43336 < count__43330_43335)){
var property__42045__auto___43337 = cljs.core._nth.call(null,chunk__43329_43334,i__43331_43336);
if(cljs.core.truth_((base__42044__auto___43332[property__42045__auto___43337]))){
(devcards.core.TestDevcard.prototype[property__42045__auto___43337] = (base__42044__auto___43332[property__42045__auto___43337]));
} else {
}

var G__43338 = seq__43328_43333;
var G__43339 = chunk__43329_43334;
var G__43340 = count__43330_43335;
var G__43341 = (i__43331_43336 + (1));
seq__43328_43333 = G__43338;
chunk__43329_43334 = G__43339;
count__43330_43335 = G__43340;
i__43331_43336 = G__43341;
continue;
} else {
var temp__4657__auto___43342 = cljs.core.seq.call(null,seq__43328_43333);
if(temp__4657__auto___43342){
var seq__43328_43343__$1 = temp__4657__auto___43342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43328_43343__$1)){
var c__25629__auto___43344 = cljs.core.chunk_first.call(null,seq__43328_43343__$1);
var G__43345 = cljs.core.chunk_rest.call(null,seq__43328_43343__$1);
var G__43346 = c__25629__auto___43344;
var G__43347 = cljs.core.count.call(null,c__25629__auto___43344);
var G__43348 = (0);
seq__43328_43333 = G__43345;
chunk__43329_43334 = G__43346;
count__43330_43335 = G__43347;
i__43331_43336 = G__43348;
continue;
} else {
var property__42045__auto___43349 = cljs.core.first.call(null,seq__43328_43343__$1);
if(cljs.core.truth_((base__42044__auto___43332[property__42045__auto___43349]))){
(devcards.core.TestDevcard.prototype[property__42045__auto___43349] = (base__42044__auto___43332[property__42045__auto___43349]));
} else {
}

var G__43350 = cljs.core.next.call(null,seq__43328_43343__$1);
var G__43351 = null;
var G__43352 = (0);
var G__43353 = (0);
seq__43328_43333 = G__43350;
chunk__43329_43334 = G__43351;
count__43330_43335 = G__43352;
i__43331_43336 = G__43353;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__25900__auto__ = [];
var len__25893__auto___43358 = arguments.length;
var i__25894__auto___43359 = (0);
while(true){
if((i__25894__auto___43359 < len__25893__auto___43358)){
args__25900__auto__.push((arguments[i__25894__auto___43359]));

var G__43360 = (i__25894__auto___43359 + (1));
i__25894__auto___43359 = G__43360;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core43355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core43355 = (function (test_thunks,meta43356){
this.test_thunks = test_thunks;
this.meta43356 = meta43356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core43355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43357,meta43356__$1){
var self__ = this;
var _43357__$1 = this;
return (new devcards.core.t_devcards$core43355(self__.test_thunks,meta43356__$1));
});

devcards.core.t_devcards$core43355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43357){
var self__ = this;
var _43357__$1 = this;
return self__.meta43356;
});

devcards.core.t_devcards$core43355.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core43355.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core43355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta43356","meta43356",-2028660513,null)], null);
});

devcards.core.t_devcards$core43355.cljs$lang$type = true;

devcards.core.t_devcards$core43355.cljs$lang$ctorStr = "devcards.core/t_devcards$core43355";

devcards.core.t_devcards$core43355.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"devcards.core/t_devcards$core43355");
});

devcards.core.__GT_t_devcards$core43355 = (function devcards$core$__GT_t_devcards$core43355(test_thunks__$1,meta43356){
return (new devcards.core.t_devcards$core43355(test_thunks__$1,meta43356));
});

}

return (new devcards.core.t_devcards$core43355(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq43354){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43354));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs43362 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43362))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs43362)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs43362))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43362)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs43364 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43364))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs43364)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs43364))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43364)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__){
return (function (state_43394){
var state_val_43395 = (state_43394[(1)]);
if((state_val_43395 === (1))){
var inst_43385 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_43394__$1 = state_43394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43394__$1,(2),inst_43385);
} else {
if((state_val_43395 === (2))){
var inst_43387 = (state_43394[(2)]);
var inst_43388 = cljs.core.async.timeout.call(null,(100));
var state_43394__$1 = (function (){var statearr_43396 = state_43394;
(statearr_43396[(7)] = inst_43387);

return statearr_43396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43394__$1,(3),inst_43388);
} else {
if((state_val_43395 === (3))){
var inst_43390 = (state_43394[(2)]);
var inst_43391 = (function (){return ((function (inst_43390,state_val_43395,c__26990__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_43390,state_val_43395,c__26990__auto__))
})();
var inst_43392 = setTimeout(inst_43391,(0));
var state_43394__$1 = (function (){var statearr_43397 = state_43394;
(statearr_43397[(8)] = inst_43390);

return statearr_43397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43394__$1,inst_43392);
} else {
return null;
}
}
}
});})(c__26990__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__26879__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__26879__auto____0 = (function (){
var statearr_43401 = [null,null,null,null,null,null,null,null,null];
(statearr_43401[(0)] = devcards$core$mount_namespace_$_state_machine__26879__auto__);

(statearr_43401[(1)] = (1));

return statearr_43401;
});
var devcards$core$mount_namespace_$_state_machine__26879__auto____1 = (function (state_43394){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_43394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e43402){if((e43402 instanceof Object)){
var ex__26882__auto__ = e43402;
var statearr_43403_43405 = state_43394;
(statearr_43403_43405[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43406 = state_43394;
state_43394 = G__43406;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__26879__auto__ = function(state_43394){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__26879__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__26879__auto____1.call(this,state_43394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__26879__auto____0;
devcards$core$mount_namespace_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__26879__auto____1;
return devcards$core$mount_namespace_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__))
})();
var state__26992__auto__ = (function (){var statearr_43404 = f__26991__auto__.call(null);
(statearr_43404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_43404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__))
);

return c__26990__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1530813198132