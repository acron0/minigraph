// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45968){
var map__45993 = p__45968;
var map__45993__$1 = ((((!((map__45993 == null)))?((((map__45993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45993):map__45993);
var m = map__45993__$1;
var n = cljs.core.get.call(null,map__45993__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__45993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45995_46017 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45996_46018 = null;
var count__45997_46019 = (0);
var i__45998_46020 = (0);
while(true){
if((i__45998_46020 < count__45997_46019)){
var f_46021 = cljs.core._nth.call(null,chunk__45996_46018,i__45998_46020);
cljs.core.println.call(null,"  ",f_46021);

var G__46022 = seq__45995_46017;
var G__46023 = chunk__45996_46018;
var G__46024 = count__45997_46019;
var G__46025 = (i__45998_46020 + (1));
seq__45995_46017 = G__46022;
chunk__45996_46018 = G__46023;
count__45997_46019 = G__46024;
i__45998_46020 = G__46025;
continue;
} else {
var temp__4657__auto___46026 = cljs.core.seq.call(null,seq__45995_46017);
if(temp__4657__auto___46026){
var seq__45995_46027__$1 = temp__4657__auto___46026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45995_46027__$1)){
var c__25629__auto___46028 = cljs.core.chunk_first.call(null,seq__45995_46027__$1);
var G__46029 = cljs.core.chunk_rest.call(null,seq__45995_46027__$1);
var G__46030 = c__25629__auto___46028;
var G__46031 = cljs.core.count.call(null,c__25629__auto___46028);
var G__46032 = (0);
seq__45995_46017 = G__46029;
chunk__45996_46018 = G__46030;
count__45997_46019 = G__46031;
i__45998_46020 = G__46032;
continue;
} else {
var f_46033 = cljs.core.first.call(null,seq__45995_46027__$1);
cljs.core.println.call(null,"  ",f_46033);

var G__46034 = cljs.core.next.call(null,seq__45995_46027__$1);
var G__46035 = null;
var G__46036 = (0);
var G__46037 = (0);
seq__45995_46017 = G__46034;
chunk__45996_46018 = G__46035;
count__45997_46019 = G__46036;
i__45998_46020 = G__46037;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46038 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24818__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46038);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46038)))?cljs.core.second.call(null,arglists_46038):arglists_46038));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45999_46039 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46000_46040 = null;
var count__46001_46041 = (0);
var i__46002_46042 = (0);
while(true){
if((i__46002_46042 < count__46001_46041)){
var vec__46003_46043 = cljs.core._nth.call(null,chunk__46000_46040,i__46002_46042);
var name_46044 = cljs.core.nth.call(null,vec__46003_46043,(0),null);
var map__46006_46045 = cljs.core.nth.call(null,vec__46003_46043,(1),null);
var map__46006_46046__$1 = ((((!((map__46006_46045 == null)))?((((map__46006_46045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46006_46045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46006_46045):map__46006_46045);
var doc_46047 = cljs.core.get.call(null,map__46006_46046__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46048 = cljs.core.get.call(null,map__46006_46046__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46044);

cljs.core.println.call(null," ",arglists_46048);

if(cljs.core.truth_(doc_46047)){
cljs.core.println.call(null," ",doc_46047);
} else {
}

var G__46049 = seq__45999_46039;
var G__46050 = chunk__46000_46040;
var G__46051 = count__46001_46041;
var G__46052 = (i__46002_46042 + (1));
seq__45999_46039 = G__46049;
chunk__46000_46040 = G__46050;
count__46001_46041 = G__46051;
i__46002_46042 = G__46052;
continue;
} else {
var temp__4657__auto___46053 = cljs.core.seq.call(null,seq__45999_46039);
if(temp__4657__auto___46053){
var seq__45999_46054__$1 = temp__4657__auto___46053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45999_46054__$1)){
var c__25629__auto___46055 = cljs.core.chunk_first.call(null,seq__45999_46054__$1);
var G__46056 = cljs.core.chunk_rest.call(null,seq__45999_46054__$1);
var G__46057 = c__25629__auto___46055;
var G__46058 = cljs.core.count.call(null,c__25629__auto___46055);
var G__46059 = (0);
seq__45999_46039 = G__46056;
chunk__46000_46040 = G__46057;
count__46001_46041 = G__46058;
i__46002_46042 = G__46059;
continue;
} else {
var vec__46008_46060 = cljs.core.first.call(null,seq__45999_46054__$1);
var name_46061 = cljs.core.nth.call(null,vec__46008_46060,(0),null);
var map__46011_46062 = cljs.core.nth.call(null,vec__46008_46060,(1),null);
var map__46011_46063__$1 = ((((!((map__46011_46062 == null)))?((((map__46011_46062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46011_46062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46011_46062):map__46011_46062);
var doc_46064 = cljs.core.get.call(null,map__46011_46063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46065 = cljs.core.get.call(null,map__46011_46063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46061);

cljs.core.println.call(null," ",arglists_46065);

if(cljs.core.truth_(doc_46064)){
cljs.core.println.call(null," ",doc_46064);
} else {
}

var G__46066 = cljs.core.next.call(null,seq__45999_46054__$1);
var G__46067 = null;
var G__46068 = (0);
var G__46069 = (0);
seq__45999_46039 = G__46066;
chunk__46000_46040 = G__46067;
count__46001_46041 = G__46068;
i__46002_46042 = G__46069;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__46013 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46014 = null;
var count__46015 = (0);
var i__46016 = (0);
while(true){
if((i__46016 < count__46015)){
var role = cljs.core._nth.call(null,chunk__46014,i__46016);
var temp__4657__auto___46070__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46070__$1)){
var spec_46071 = temp__4657__auto___46070__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46071));
} else {
}

var G__46072 = seq__46013;
var G__46073 = chunk__46014;
var G__46074 = count__46015;
var G__46075 = (i__46016 + (1));
seq__46013 = G__46072;
chunk__46014 = G__46073;
count__46015 = G__46074;
i__46016 = G__46075;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__46013);
if(temp__4657__auto____$1){
var seq__46013__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46013__$1)){
var c__25629__auto__ = cljs.core.chunk_first.call(null,seq__46013__$1);
var G__46076 = cljs.core.chunk_rest.call(null,seq__46013__$1);
var G__46077 = c__25629__auto__;
var G__46078 = cljs.core.count.call(null,c__25629__auto__);
var G__46079 = (0);
seq__46013 = G__46076;
chunk__46014 = G__46077;
count__46015 = G__46078;
i__46016 = G__46079;
continue;
} else {
var role = cljs.core.first.call(null,seq__46013__$1);
var temp__4657__auto___46080__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46080__$2)){
var spec_46081 = temp__4657__auto___46080__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46081));
} else {
}

var G__46082 = cljs.core.next.call(null,seq__46013__$1);
var G__46083 = null;
var G__46084 = (0);
var G__46085 = (0);
seq__46013 = G__46082;
chunk__46014 = G__46083;
count__46015 = G__46084;
i__46016 = G__46085;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530813201024