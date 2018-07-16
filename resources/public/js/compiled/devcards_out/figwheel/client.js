// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args46088 = [];
var len__25893__auto___46091 = arguments.length;
var i__25894__auto___46092 = (0);
while(true){
if((i__25894__auto___46092 < len__25893__auto___46091)){
args46088.push((arguments[i__25894__auto___46092]));

var G__46093 = (i__25894__auto___46092 + (1));
i__25894__auto___46092 = G__46093;
continue;
} else {
}
break;
}

var G__46090 = args46088.length;
switch (G__46090) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46088.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25900__auto__ = [];
var len__25893__auto___46096 = arguments.length;
var i__25894__auto___46097 = (0);
while(true){
if((i__25894__auto___46097 < len__25893__auto___46096)){
args__25900__auto__.push((arguments[i__25894__auto___46097]));

var G__46098 = (i__25894__auto___46097 + (1));
i__25894__auto___46097 = G__46098;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46095){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46095));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25900__auto__ = [];
var len__25893__auto___46100 = arguments.length;
var i__25894__auto___46101 = (0);
while(true){
if((i__25894__auto___46101 < len__25893__auto___46100)){
args__25900__auto__.push((arguments[i__25894__auto___46101]));

var G__46102 = (i__25894__auto___46101 + (1));
i__25894__auto___46101 = G__46102;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46099){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46099));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46103){
var map__46106 = p__46103;
var map__46106__$1 = ((((!((map__46106 == null)))?((((map__46106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46106):map__46106);
var message = cljs.core.get.call(null,map__46106__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46106__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24818__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24806__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24806__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24806__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26990__auto___46268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___46268,ch){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___46268,ch){
return (function (state_46237){
var state_val_46238 = (state_46237[(1)]);
if((state_val_46238 === (7))){
var inst_46233 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46239_46269 = state_46237__$1;
(statearr_46239_46269[(2)] = inst_46233);

(statearr_46239_46269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (1))){
var state_46237__$1 = state_46237;
var statearr_46240_46270 = state_46237__$1;
(statearr_46240_46270[(2)] = null);

(statearr_46240_46270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (4))){
var inst_46190 = (state_46237[(7)]);
var inst_46190__$1 = (state_46237[(2)]);
var state_46237__$1 = (function (){var statearr_46241 = state_46237;
(statearr_46241[(7)] = inst_46190__$1);

return statearr_46241;
})();
if(cljs.core.truth_(inst_46190__$1)){
var statearr_46242_46271 = state_46237__$1;
(statearr_46242_46271[(1)] = (5));

} else {
var statearr_46243_46272 = state_46237__$1;
(statearr_46243_46272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (15))){
var inst_46197 = (state_46237[(8)]);
var inst_46212 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46197);
var inst_46213 = cljs.core.first.call(null,inst_46212);
var inst_46214 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46213);
var inst_46215 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46214)].join('');
var inst_46216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46215);
var state_46237__$1 = state_46237;
var statearr_46244_46273 = state_46237__$1;
(statearr_46244_46273[(2)] = inst_46216);

(statearr_46244_46273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (13))){
var inst_46221 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46245_46274 = state_46237__$1;
(statearr_46245_46274[(2)] = inst_46221);

(statearr_46245_46274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (6))){
var state_46237__$1 = state_46237;
var statearr_46246_46275 = state_46237__$1;
(statearr_46246_46275[(2)] = null);

(statearr_46246_46275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (17))){
var inst_46219 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46247_46276 = state_46237__$1;
(statearr_46247_46276[(2)] = inst_46219);

(statearr_46247_46276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (3))){
var inst_46235 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46237__$1,inst_46235);
} else {
if((state_val_46238 === (12))){
var inst_46196 = (state_46237[(9)]);
var inst_46210 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46196,opts);
var state_46237__$1 = state_46237;
if(cljs.core.truth_(inst_46210)){
var statearr_46248_46277 = state_46237__$1;
(statearr_46248_46277[(1)] = (15));

} else {
var statearr_46249_46278 = state_46237__$1;
(statearr_46249_46278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (2))){
var state_46237__$1 = state_46237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46237__$1,(4),ch);
} else {
if((state_val_46238 === (11))){
var inst_46197 = (state_46237[(8)]);
var inst_46202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46203 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46197);
var inst_46204 = cljs.core.async.timeout.call(null,(1000));
var inst_46205 = [inst_46203,inst_46204];
var inst_46206 = (new cljs.core.PersistentVector(null,2,(5),inst_46202,inst_46205,null));
var state_46237__$1 = state_46237;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46237__$1,(14),inst_46206);
} else {
if((state_val_46238 === (9))){
var inst_46197 = (state_46237[(8)]);
var inst_46223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46224 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46197);
var inst_46225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46224);
var inst_46226 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46225)].join('');
var inst_46227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46226);
var state_46237__$1 = (function (){var statearr_46250 = state_46237;
(statearr_46250[(10)] = inst_46223);

return statearr_46250;
})();
var statearr_46251_46279 = state_46237__$1;
(statearr_46251_46279[(2)] = inst_46227);

(statearr_46251_46279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (5))){
var inst_46190 = (state_46237[(7)]);
var inst_46192 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46193 = (new cljs.core.PersistentArrayMap(null,2,inst_46192,null));
var inst_46194 = (new cljs.core.PersistentHashSet(null,inst_46193,null));
var inst_46195 = figwheel.client.focus_msgs.call(null,inst_46194,inst_46190);
var inst_46196 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46195);
var inst_46197 = cljs.core.first.call(null,inst_46195);
var inst_46198 = figwheel.client.autoload_QMARK_.call(null);
var state_46237__$1 = (function (){var statearr_46252 = state_46237;
(statearr_46252[(9)] = inst_46196);

(statearr_46252[(8)] = inst_46197);

return statearr_46252;
})();
if(cljs.core.truth_(inst_46198)){
var statearr_46253_46280 = state_46237__$1;
(statearr_46253_46280[(1)] = (8));

} else {
var statearr_46254_46281 = state_46237__$1;
(statearr_46254_46281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (14))){
var inst_46208 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46255_46282 = state_46237__$1;
(statearr_46255_46282[(2)] = inst_46208);

(statearr_46255_46282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (16))){
var state_46237__$1 = state_46237;
var statearr_46256_46283 = state_46237__$1;
(statearr_46256_46283[(2)] = null);

(statearr_46256_46283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (10))){
var inst_46229 = (state_46237[(2)]);
var state_46237__$1 = (function (){var statearr_46257 = state_46237;
(statearr_46257[(11)] = inst_46229);

return statearr_46257;
})();
var statearr_46258_46284 = state_46237__$1;
(statearr_46258_46284[(2)] = null);

(statearr_46258_46284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (8))){
var inst_46196 = (state_46237[(9)]);
var inst_46200 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46196,opts);
var state_46237__$1 = state_46237;
if(cljs.core.truth_(inst_46200)){
var statearr_46259_46285 = state_46237__$1;
(statearr_46259_46285[(1)] = (11));

} else {
var statearr_46260_46286 = state_46237__$1;
(statearr_46260_46286[(1)] = (12));

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
});})(c__26990__auto___46268,ch))
;
return ((function (switch__26878__auto__,c__26990__auto___46268,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26879__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26879__auto____0 = (function (){
var statearr_46264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46264[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26879__auto__);

(statearr_46264[(1)] = (1));

return statearr_46264;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26879__auto____1 = (function (state_46237){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_46237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e46265){if((e46265 instanceof Object)){
var ex__26882__auto__ = e46265;
var statearr_46266_46287 = state_46237;
(statearr_46266_46287[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46288 = state_46237;
state_46237 = G__46288;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26879__auto__ = function(state_46237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26879__auto____1.call(this,state_46237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26879__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26879__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___46268,ch))
})();
var state__26992__auto__ = (function (){var statearr_46267 = f__26991__auto__.call(null);
(statearr_46267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___46268);

return statearr_46267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___46268,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46289_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46289_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_46292 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46292){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46291){if((e46291 instanceof Error)){
var e = e46291;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46292], null));
} else {
var e = e46291;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46292))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46293){
var map__46302 = p__46293;
var map__46302__$1 = ((((!((map__46302 == null)))?((((map__46302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46302):map__46302);
var opts = map__46302__$1;
var build_id = cljs.core.get.call(null,map__46302__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46302,map__46302__$1,opts,build_id){
return (function (p__46304){
var vec__46305 = p__46304;
var seq__46306 = cljs.core.seq.call(null,vec__46305);
var first__46307 = cljs.core.first.call(null,seq__46306);
var seq__46306__$1 = cljs.core.next.call(null,seq__46306);
var map__46308 = first__46307;
var map__46308__$1 = ((((!((map__46308 == null)))?((((map__46308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46308):map__46308);
var msg = map__46308__$1;
var msg_name = cljs.core.get.call(null,map__46308__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46306__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46305,seq__46306,first__46307,seq__46306__$1,map__46308,map__46308__$1,msg,msg_name,_,map__46302,map__46302__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46305,seq__46306,first__46307,seq__46306__$1,map__46308,map__46308__$1,msg,msg_name,_,map__46302,map__46302__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46302,map__46302__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46316){
var vec__46317 = p__46316;
var seq__46318 = cljs.core.seq.call(null,vec__46317);
var first__46319 = cljs.core.first.call(null,seq__46318);
var seq__46318__$1 = cljs.core.next.call(null,seq__46318);
var map__46320 = first__46319;
var map__46320__$1 = ((((!((map__46320 == null)))?((((map__46320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46320):map__46320);
var msg = map__46320__$1;
var msg_name = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46318__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46322){
var map__46334 = p__46322;
var map__46334__$1 = ((((!((map__46334 == null)))?((((map__46334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46334):map__46334);
var on_compile_warning = cljs.core.get.call(null,map__46334__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46334__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46334,map__46334__$1,on_compile_warning,on_compile_fail){
return (function (p__46336){
var vec__46337 = p__46336;
var seq__46338 = cljs.core.seq.call(null,vec__46337);
var first__46339 = cljs.core.first.call(null,seq__46338);
var seq__46338__$1 = cljs.core.next.call(null,seq__46338);
var map__46340 = first__46339;
var map__46340__$1 = ((((!((map__46340 == null)))?((((map__46340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46340):map__46340);
var msg = map__46340__$1;
var msg_name = cljs.core.get.call(null,map__46340__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46338__$1;
var pred__46342 = cljs.core._EQ_;
var expr__46343 = msg_name;
if(cljs.core.truth_(pred__46342.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46343))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46342.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46343))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46334,map__46334__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__,msg_hist,msg_names,msg){
return (function (state_46571){
var state_val_46572 = (state_46571[(1)]);
if((state_val_46572 === (7))){
var inst_46491 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46491)){
var statearr_46573_46623 = state_46571__$1;
(statearr_46573_46623[(1)] = (8));

} else {
var statearr_46574_46624 = state_46571__$1;
(statearr_46574_46624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (20))){
var inst_46565 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46575_46625 = state_46571__$1;
(statearr_46575_46625[(2)] = inst_46565);

(statearr_46575_46625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (27))){
var inst_46561 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46576_46626 = state_46571__$1;
(statearr_46576_46626[(2)] = inst_46561);

(statearr_46576_46626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (1))){
var inst_46484 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46484)){
var statearr_46577_46627 = state_46571__$1;
(statearr_46577_46627[(1)] = (2));

} else {
var statearr_46578_46628 = state_46571__$1;
(statearr_46578_46628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (24))){
var inst_46563 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46579_46629 = state_46571__$1;
(statearr_46579_46629[(2)] = inst_46563);

(statearr_46579_46629[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (4))){
var inst_46569 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46571__$1,inst_46569);
} else {
if((state_val_46572 === (15))){
var inst_46567 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46580_46630 = state_46571__$1;
(statearr_46580_46630[(2)] = inst_46567);

(statearr_46580_46630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (21))){
var inst_46520 = (state_46571[(2)]);
var inst_46521 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46522 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46521);
var state_46571__$1 = (function (){var statearr_46581 = state_46571;
(statearr_46581[(7)] = inst_46520);

return statearr_46581;
})();
var statearr_46582_46631 = state_46571__$1;
(statearr_46582_46631[(2)] = inst_46522);

(statearr_46582_46631[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (31))){
var inst_46550 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46550)){
var statearr_46583_46632 = state_46571__$1;
(statearr_46583_46632[(1)] = (34));

} else {
var statearr_46584_46633 = state_46571__$1;
(statearr_46584_46633[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (32))){
var inst_46559 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46585_46634 = state_46571__$1;
(statearr_46585_46634[(2)] = inst_46559);

(statearr_46585_46634[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (33))){
var inst_46546 = (state_46571[(2)]);
var inst_46547 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46548 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46547);
var state_46571__$1 = (function (){var statearr_46586 = state_46571;
(statearr_46586[(8)] = inst_46546);

return statearr_46586;
})();
var statearr_46587_46635 = state_46571__$1;
(statearr_46587_46635[(2)] = inst_46548);

(statearr_46587_46635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (13))){
var inst_46505 = figwheel.client.heads_up.clear.call(null);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(16),inst_46505);
} else {
if((state_val_46572 === (22))){
var inst_46526 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46527 = figwheel.client.heads_up.append_warning_message.call(null,inst_46526);
var state_46571__$1 = state_46571;
var statearr_46588_46636 = state_46571__$1;
(statearr_46588_46636[(2)] = inst_46527);

(statearr_46588_46636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (36))){
var inst_46557 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46589_46637 = state_46571__$1;
(statearr_46589_46637[(2)] = inst_46557);

(statearr_46589_46637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (29))){
var inst_46537 = (state_46571[(2)]);
var inst_46538 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46538);
var state_46571__$1 = (function (){var statearr_46590 = state_46571;
(statearr_46590[(9)] = inst_46537);

return statearr_46590;
})();
var statearr_46591_46638 = state_46571__$1;
(statearr_46591_46638[(2)] = inst_46539);

(statearr_46591_46638[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (6))){
var inst_46486 = (state_46571[(10)]);
var state_46571__$1 = state_46571;
var statearr_46592_46639 = state_46571__$1;
(statearr_46592_46639[(2)] = inst_46486);

(statearr_46592_46639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (28))){
var inst_46533 = (state_46571[(2)]);
var inst_46534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46535 = figwheel.client.heads_up.display_warning.call(null,inst_46534);
var state_46571__$1 = (function (){var statearr_46593 = state_46571;
(statearr_46593[(11)] = inst_46533);

return statearr_46593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(29),inst_46535);
} else {
if((state_val_46572 === (25))){
var inst_46531 = figwheel.client.heads_up.clear.call(null);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(28),inst_46531);
} else {
if((state_val_46572 === (34))){
var inst_46552 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(37),inst_46552);
} else {
if((state_val_46572 === (17))){
var inst_46511 = (state_46571[(2)]);
var inst_46512 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46512);
var state_46571__$1 = (function (){var statearr_46594 = state_46571;
(statearr_46594[(12)] = inst_46511);

return statearr_46594;
})();
var statearr_46595_46640 = state_46571__$1;
(statearr_46595_46640[(2)] = inst_46513);

(statearr_46595_46640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (3))){
var inst_46503 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46503)){
var statearr_46596_46641 = state_46571__$1;
(statearr_46596_46641[(1)] = (13));

} else {
var statearr_46597_46642 = state_46571__$1;
(statearr_46597_46642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (12))){
var inst_46499 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46598_46643 = state_46571__$1;
(statearr_46598_46643[(2)] = inst_46499);

(statearr_46598_46643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (2))){
var inst_46486 = (state_46571[(10)]);
var inst_46486__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46571__$1 = (function (){var statearr_46599 = state_46571;
(statearr_46599[(10)] = inst_46486__$1);

return statearr_46599;
})();
if(cljs.core.truth_(inst_46486__$1)){
var statearr_46600_46644 = state_46571__$1;
(statearr_46600_46644[(1)] = (5));

} else {
var statearr_46601_46645 = state_46571__$1;
(statearr_46601_46645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (23))){
var inst_46529 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46529)){
var statearr_46602_46646 = state_46571__$1;
(statearr_46602_46646[(1)] = (25));

} else {
var statearr_46603_46647 = state_46571__$1;
(statearr_46603_46647[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (35))){
var state_46571__$1 = state_46571;
var statearr_46604_46648 = state_46571__$1;
(statearr_46604_46648[(2)] = null);

(statearr_46604_46648[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (19))){
var inst_46524 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46524)){
var statearr_46605_46649 = state_46571__$1;
(statearr_46605_46649[(1)] = (22));

} else {
var statearr_46606_46650 = state_46571__$1;
(statearr_46606_46650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (11))){
var inst_46495 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46607_46651 = state_46571__$1;
(statearr_46607_46651[(2)] = inst_46495);

(statearr_46607_46651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (9))){
var inst_46497 = figwheel.client.heads_up.clear.call(null);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(12),inst_46497);
} else {
if((state_val_46572 === (5))){
var inst_46488 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46571__$1 = state_46571;
var statearr_46608_46652 = state_46571__$1;
(statearr_46608_46652[(2)] = inst_46488);

(statearr_46608_46652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (14))){
var inst_46515 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46515)){
var statearr_46609_46653 = state_46571__$1;
(statearr_46609_46653[(1)] = (18));

} else {
var statearr_46610_46654 = state_46571__$1;
(statearr_46610_46654[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (26))){
var inst_46541 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46571__$1 = state_46571;
if(cljs.core.truth_(inst_46541)){
var statearr_46611_46655 = state_46571__$1;
(statearr_46611_46655[(1)] = (30));

} else {
var statearr_46612_46656 = state_46571__$1;
(statearr_46612_46656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (16))){
var inst_46507 = (state_46571[(2)]);
var inst_46508 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46509 = figwheel.client.heads_up.display_exception.call(null,inst_46508);
var state_46571__$1 = (function (){var statearr_46613 = state_46571;
(statearr_46613[(13)] = inst_46507);

return statearr_46613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(17),inst_46509);
} else {
if((state_val_46572 === (30))){
var inst_46543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46544 = figwheel.client.heads_up.display_warning.call(null,inst_46543);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(33),inst_46544);
} else {
if((state_val_46572 === (10))){
var inst_46501 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46614_46657 = state_46571__$1;
(statearr_46614_46657[(2)] = inst_46501);

(statearr_46614_46657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (18))){
var inst_46517 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46518 = figwheel.client.heads_up.display_exception.call(null,inst_46517);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(21),inst_46518);
} else {
if((state_val_46572 === (37))){
var inst_46554 = (state_46571[(2)]);
var state_46571__$1 = state_46571;
var statearr_46615_46658 = state_46571__$1;
(statearr_46615_46658[(2)] = inst_46554);

(statearr_46615_46658[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46572 === (8))){
var inst_46493 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46571__$1 = state_46571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46571__$1,(11),inst_46493);
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
});})(c__26990__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26878__auto__,c__26990__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto____0 = (function (){
var statearr_46619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46619[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto__);

(statearr_46619[(1)] = (1));

return statearr_46619;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto____1 = (function (state_46571){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_46571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e46620){if((e46620 instanceof Object)){
var ex__26882__auto__ = e46620;
var statearr_46621_46659 = state_46571;
(statearr_46621_46659[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46660 = state_46571;
state_46571 = G__46660;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto__ = function(state_46571){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto____1.call(this,state_46571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__,msg_hist,msg_names,msg))
})();
var state__26992__auto__ = (function (){var statearr_46622 = f__26991__auto__.call(null);
(statearr_46622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_46622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__,msg_hist,msg_names,msg))
);

return c__26990__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26990__auto___46723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto___46723,ch){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto___46723,ch){
return (function (state_46706){
var state_val_46707 = (state_46706[(1)]);
if((state_val_46707 === (1))){
var state_46706__$1 = state_46706;
var statearr_46708_46724 = state_46706__$1;
(statearr_46708_46724[(2)] = null);

(statearr_46708_46724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (2))){
var state_46706__$1 = state_46706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46706__$1,(4),ch);
} else {
if((state_val_46707 === (3))){
var inst_46704 = (state_46706[(2)]);
var state_46706__$1 = state_46706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46706__$1,inst_46704);
} else {
if((state_val_46707 === (4))){
var inst_46694 = (state_46706[(7)]);
var inst_46694__$1 = (state_46706[(2)]);
var state_46706__$1 = (function (){var statearr_46709 = state_46706;
(statearr_46709[(7)] = inst_46694__$1);

return statearr_46709;
})();
if(cljs.core.truth_(inst_46694__$1)){
var statearr_46710_46725 = state_46706__$1;
(statearr_46710_46725[(1)] = (5));

} else {
var statearr_46711_46726 = state_46706__$1;
(statearr_46711_46726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (5))){
var inst_46694 = (state_46706[(7)]);
var inst_46696 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46694);
var state_46706__$1 = state_46706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46706__$1,(8),inst_46696);
} else {
if((state_val_46707 === (6))){
var state_46706__$1 = state_46706;
var statearr_46712_46727 = state_46706__$1;
(statearr_46712_46727[(2)] = null);

(statearr_46712_46727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (7))){
var inst_46702 = (state_46706[(2)]);
var state_46706__$1 = state_46706;
var statearr_46713_46728 = state_46706__$1;
(statearr_46713_46728[(2)] = inst_46702);

(statearr_46713_46728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (8))){
var inst_46698 = (state_46706[(2)]);
var state_46706__$1 = (function (){var statearr_46714 = state_46706;
(statearr_46714[(8)] = inst_46698);

return statearr_46714;
})();
var statearr_46715_46729 = state_46706__$1;
(statearr_46715_46729[(2)] = null);

(statearr_46715_46729[(1)] = (2));


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
});})(c__26990__auto___46723,ch))
;
return ((function (switch__26878__auto__,c__26990__auto___46723,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26879__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26879__auto____0 = (function (){
var statearr_46719 = [null,null,null,null,null,null,null,null,null];
(statearr_46719[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26879__auto__);

(statearr_46719[(1)] = (1));

return statearr_46719;
});
var figwheel$client$heads_up_plugin_$_state_machine__26879__auto____1 = (function (state_46706){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_46706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e46720){if((e46720 instanceof Object)){
var ex__26882__auto__ = e46720;
var statearr_46721_46730 = state_46706;
(statearr_46721_46730[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46731 = state_46706;
state_46706 = G__46731;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26879__auto__ = function(state_46706){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26879__auto____1.call(this,state_46706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26879__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26879__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto___46723,ch))
})();
var state__26992__auto__ = (function (){var statearr_46722 = f__26991__auto__.call(null);
(statearr_46722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto___46723);

return statearr_46722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto___46723,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__){
return (function (state_46752){
var state_val_46753 = (state_46752[(1)]);
if((state_val_46753 === (1))){
var inst_46747 = cljs.core.async.timeout.call(null,(3000));
var state_46752__$1 = state_46752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46752__$1,(2),inst_46747);
} else {
if((state_val_46753 === (2))){
var inst_46749 = (state_46752[(2)]);
var inst_46750 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46752__$1 = (function (){var statearr_46754 = state_46752;
(statearr_46754[(7)] = inst_46749);

return statearr_46754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46752__$1,inst_46750);
} else {
return null;
}
}
});})(c__26990__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26879__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26879__auto____0 = (function (){
var statearr_46758 = [null,null,null,null,null,null,null,null];
(statearr_46758[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26879__auto__);

(statearr_46758[(1)] = (1));

return statearr_46758;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26879__auto____1 = (function (state_46752){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_46752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e46759){if((e46759 instanceof Object)){
var ex__26882__auto__ = e46759;
var statearr_46760_46762 = state_46752;
(statearr_46760_46762[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46763 = state_46752;
state_46752 = G__46763;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26879__auto__ = function(state_46752){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26879__auto____1.call(this,state_46752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26879__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26879__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__))
})();
var state__26992__auto__ = (function (){var statearr_46761 = f__26991__auto__.call(null);
(statearr_46761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_46761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__))
);

return c__26990__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26990__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26991__auto__ = (function (){var switch__26878__auto__ = ((function (c__26990__auto__,figwheel_version,temp__4657__auto__){
return (function (state_46786){
var state_val_46787 = (state_46786[(1)]);
if((state_val_46787 === (1))){
var inst_46780 = cljs.core.async.timeout.call(null,(2000));
var state_46786__$1 = state_46786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46786__$1,(2),inst_46780);
} else {
if((state_val_46787 === (2))){
var inst_46782 = (state_46786[(2)]);
var inst_46783 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_46784 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46783);
var state_46786__$1 = (function (){var statearr_46788 = state_46786;
(statearr_46788[(7)] = inst_46782);

return statearr_46788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46786__$1,inst_46784);
} else {
return null;
}
}
});})(c__26990__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26878__auto__,c__26990__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto____0 = (function (){
var statearr_46792 = [null,null,null,null,null,null,null,null];
(statearr_46792[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto__);

(statearr_46792[(1)] = (1));

return statearr_46792;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto____1 = (function (state_46786){
while(true){
var ret_value__26880__auto__ = (function (){try{while(true){
var result__26881__auto__ = switch__26878__auto__.call(null,state_46786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26881__auto__;
}
break;
}
}catch (e46793){if((e46793 instanceof Object)){
var ex__26882__auto__ = e46793;
var statearr_46794_46796 = state_46786;
(statearr_46794_46796[(5)] = ex__26882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46797 = state_46786;
state_46786 = G__46797;
continue;
} else {
return ret_value__26880__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto__ = function(state_46786){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto____1.call(this,state_46786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26879__auto__;
})()
;})(switch__26878__auto__,c__26990__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26992__auto__ = (function (){var statearr_46795 = f__26991__auto__.call(null);
(statearr_46795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26990__auto__);

return statearr_46795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26992__auto__);
});})(c__26990__auto__,figwheel_version,temp__4657__auto__))
);

return c__26990__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46798){
var map__46802 = p__46798;
var map__46802__$1 = ((((!((map__46802 == null)))?((((map__46802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46802):map__46802);
var file = cljs.core.get.call(null,map__46802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46802__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46802__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46804 = "";
var G__46804__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__46804),cljs.core.str("file "),cljs.core.str(file)].join(''):G__46804);
var G__46804__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__46804__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__46804__$1);
if(cljs.core.truth_((function (){var and__24806__auto__ = line;
if(cljs.core.truth_(and__24806__auto__)){
return column;
} else {
return and__24806__auto__;
}
})())){
return [cljs.core.str(G__46804__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__46804__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46805){
var map__46812 = p__46805;
var map__46812__$1 = ((((!((map__46812 == null)))?((((map__46812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46812):map__46812);
var ed = map__46812__$1;
var formatted_exception = cljs.core.get.call(null,map__46812__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46812__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46812__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46814_46818 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46815_46819 = null;
var count__46816_46820 = (0);
var i__46817_46821 = (0);
while(true){
if((i__46817_46821 < count__46816_46820)){
var msg_46822 = cljs.core._nth.call(null,chunk__46815_46819,i__46817_46821);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46822);

var G__46823 = seq__46814_46818;
var G__46824 = chunk__46815_46819;
var G__46825 = count__46816_46820;
var G__46826 = (i__46817_46821 + (1));
seq__46814_46818 = G__46823;
chunk__46815_46819 = G__46824;
count__46816_46820 = G__46825;
i__46817_46821 = G__46826;
continue;
} else {
var temp__4657__auto___46827 = cljs.core.seq.call(null,seq__46814_46818);
if(temp__4657__auto___46827){
var seq__46814_46828__$1 = temp__4657__auto___46827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46814_46828__$1)){
var c__25629__auto___46829 = cljs.core.chunk_first.call(null,seq__46814_46828__$1);
var G__46830 = cljs.core.chunk_rest.call(null,seq__46814_46828__$1);
var G__46831 = c__25629__auto___46829;
var G__46832 = cljs.core.count.call(null,c__25629__auto___46829);
var G__46833 = (0);
seq__46814_46818 = G__46830;
chunk__46815_46819 = G__46831;
count__46816_46820 = G__46832;
i__46817_46821 = G__46833;
continue;
} else {
var msg_46834 = cljs.core.first.call(null,seq__46814_46828__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46834);

var G__46835 = cljs.core.next.call(null,seq__46814_46828__$1);
var G__46836 = null;
var G__46837 = (0);
var G__46838 = (0);
seq__46814_46818 = G__46835;
chunk__46815_46819 = G__46836;
count__46816_46820 = G__46837;
i__46817_46821 = G__46838;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46839){
var map__46842 = p__46839;
var map__46842__$1 = ((((!((map__46842 == null)))?((((map__46842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46842):map__46842);
var w = map__46842__$1;
var message = cljs.core.get.call(null,map__46842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24806__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24806__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24806__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46854 = cljs.core.seq.call(null,plugins);
var chunk__46855 = null;
var count__46856 = (0);
var i__46857 = (0);
while(true){
if((i__46857 < count__46856)){
var vec__46858 = cljs.core._nth.call(null,chunk__46855,i__46857);
var k = cljs.core.nth.call(null,vec__46858,(0),null);
var plugin = cljs.core.nth.call(null,vec__46858,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46864 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46854,chunk__46855,count__46856,i__46857,pl_46864,vec__46858,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46864.call(null,msg_hist);
});})(seq__46854,chunk__46855,count__46856,i__46857,pl_46864,vec__46858,k,plugin))
);
} else {
}

var G__46865 = seq__46854;
var G__46866 = chunk__46855;
var G__46867 = count__46856;
var G__46868 = (i__46857 + (1));
seq__46854 = G__46865;
chunk__46855 = G__46866;
count__46856 = G__46867;
i__46857 = G__46868;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46854);
if(temp__4657__auto__){
var seq__46854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46854__$1)){
var c__25629__auto__ = cljs.core.chunk_first.call(null,seq__46854__$1);
var G__46869 = cljs.core.chunk_rest.call(null,seq__46854__$1);
var G__46870 = c__25629__auto__;
var G__46871 = cljs.core.count.call(null,c__25629__auto__);
var G__46872 = (0);
seq__46854 = G__46869;
chunk__46855 = G__46870;
count__46856 = G__46871;
i__46857 = G__46872;
continue;
} else {
var vec__46861 = cljs.core.first.call(null,seq__46854__$1);
var k = cljs.core.nth.call(null,vec__46861,(0),null);
var plugin = cljs.core.nth.call(null,vec__46861,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46873 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46854,chunk__46855,count__46856,i__46857,pl_46873,vec__46861,k,plugin,seq__46854__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46873.call(null,msg_hist);
});})(seq__46854,chunk__46855,count__46856,i__46857,pl_46873,vec__46861,k,plugin,seq__46854__$1,temp__4657__auto__))
);
} else {
}

var G__46874 = cljs.core.next.call(null,seq__46854__$1);
var G__46875 = null;
var G__46876 = (0);
var G__46877 = (0);
seq__46854 = G__46874;
chunk__46855 = G__46875;
count__46856 = G__46876;
i__46857 = G__46877;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args46878 = [];
var len__25893__auto___46885 = arguments.length;
var i__25894__auto___46886 = (0);
while(true){
if((i__25894__auto___46886 < len__25893__auto___46885)){
args46878.push((arguments[i__25894__auto___46886]));

var G__46887 = (i__25894__auto___46886 + (1));
i__25894__auto___46886 = G__46887;
continue;
} else {
}
break;
}

var G__46880 = args46878.length;
switch (G__46880) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46878.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__46881_46889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46882_46890 = null;
var count__46883_46891 = (0);
var i__46884_46892 = (0);
while(true){
if((i__46884_46892 < count__46883_46891)){
var msg_46893 = cljs.core._nth.call(null,chunk__46882_46890,i__46884_46892);
figwheel.client.socket.handle_incoming_message.call(null,msg_46893);

var G__46894 = seq__46881_46889;
var G__46895 = chunk__46882_46890;
var G__46896 = count__46883_46891;
var G__46897 = (i__46884_46892 + (1));
seq__46881_46889 = G__46894;
chunk__46882_46890 = G__46895;
count__46883_46891 = G__46896;
i__46884_46892 = G__46897;
continue;
} else {
var temp__4657__auto___46898 = cljs.core.seq.call(null,seq__46881_46889);
if(temp__4657__auto___46898){
var seq__46881_46899__$1 = temp__4657__auto___46898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46881_46899__$1)){
var c__25629__auto___46900 = cljs.core.chunk_first.call(null,seq__46881_46899__$1);
var G__46901 = cljs.core.chunk_rest.call(null,seq__46881_46899__$1);
var G__46902 = c__25629__auto___46900;
var G__46903 = cljs.core.count.call(null,c__25629__auto___46900);
var G__46904 = (0);
seq__46881_46889 = G__46901;
chunk__46882_46890 = G__46902;
count__46883_46891 = G__46903;
i__46884_46892 = G__46904;
continue;
} else {
var msg_46905 = cljs.core.first.call(null,seq__46881_46899__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46905);

var G__46906 = cljs.core.next.call(null,seq__46881_46899__$1);
var G__46907 = null;
var G__46908 = (0);
var G__46909 = (0);
seq__46881_46889 = G__46906;
chunk__46882_46890 = G__46907;
count__46883_46891 = G__46908;
i__46884_46892 = G__46909;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25900__auto__ = [];
var len__25893__auto___46914 = arguments.length;
var i__25894__auto___46915 = (0);
while(true){
if((i__25894__auto___46915 < len__25893__auto___46914)){
args__25900__auto__.push((arguments[i__25894__auto___46915]));

var G__46916 = (i__25894__auto___46915 + (1));
i__25894__auto___46915 = G__46916;
continue;
} else {
}
break;
}

var argseq__25901__auto__ = ((((0) < args__25900__auto__.length))?(new cljs.core.IndexedSeq(args__25900__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25901__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46911){
var map__46912 = p__46911;
var map__46912__$1 = ((((!((map__46912 == null)))?((((map__46912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46912):map__46912);
var opts = map__46912__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46910){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46910));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46918){if((e46918 instanceof Error)){
var e = e46918;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46918;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__46922){
var map__46923 = p__46922;
var map__46923__$1 = ((((!((map__46923 == null)))?((((map__46923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46923):map__46923);
var msg_name = cljs.core.get.call(null,map__46923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530813201484