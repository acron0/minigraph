// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.color.core');
goog.require('cljs.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.typedarrays.core');
goog.require('thi.ng.strf.core');







thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",thi.ng.strf.core.hex.call(null,(6))], null);
thi.ng.color.core.ns_prefix = "#thi.ng.color.core.";

/**
 * @interface
 */
thi.ng.color.core.IRGBConvert = function(){};

thi.ng.color.core.as_rgba = (function thi$ng$color$core$as_rgba(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 == null)))){
return _.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.as_rgba[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.as_rgba["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IRGBConvert.as-rgba",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSVConvert = function(){};

thi.ng.color.core.as_hsva = (function thi$ng$color$core$as_hsva(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 == null)))){
return _.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.as_hsva[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.as_hsva["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSVConvert.as-hsva",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSLConvert = function(){};

thi.ng.color.core.as_hsla = (function thi$ng$color$core$as_hsla(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 == null)))){
return _.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.as_hsla[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.as_hsla["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSLConvert.as-hsla",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICMYKConvert = function(){};

thi.ng.color.core.as_cmyka = (function thi$ng$color$core$as_cmyka(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 == null)))){
return _.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.as_cmyka[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.as_cmyka["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICMYKConvert.as-cmyka",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICSSConvert = function(){};

thi.ng.color.core.as_css = (function thi$ng$color$core$as_css(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$ICSSConvert$as_css$arity$1 == null)))){
return _.thi$ng$color$core$ICSSConvert$as_css$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.as_css[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.as_css["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICSSConvert.as-css",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IIntConvert = function(){};

thi.ng.color.core.as_int24 = (function thi$ng$color$core$as_int24(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IIntConvert$as_int24$arity$1 == null)))){
return _.thi$ng$color$core$IIntConvert$as_int24$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.as_int24[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.as_int24["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int24",_);
}
}
}
});

thi.ng.color.core.as_int32 = (function thi$ng$color$core$as_int32(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IIntConvert$as_int32$arity$1 == null)))){
return _.thi$ng$color$core$IIntConvert$as_int32$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.as_int32[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.as_int32["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int32",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorComponents = function(){};

thi.ng.color.core.red = (function thi$ng$color$core$red(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$red$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$red$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.red[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.red["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.red",_);
}
}
}
});

thi.ng.color.core.green = (function thi$ng$color$core$green(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$green$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$green$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.green[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.green["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.green",_);
}
}
}
});

thi.ng.color.core.blue = (function thi$ng$color$core$blue(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$blue$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$blue$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.blue[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.blue["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.blue",_);
}
}
}
});

thi.ng.color.core.alpha = (function thi$ng$color$core$alpha(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$alpha$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$alpha$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.alpha[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.alpha["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.alpha",_);
}
}
}
});

thi.ng.color.core.hue = (function thi$ng$color$core$hue(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$hue$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$hue$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.hue[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.hue["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.hue",_);
}
}
}
});

thi.ng.color.core.saturation = (function thi$ng$color$core$saturation(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$saturation$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$saturation$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.saturation[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.saturation["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.saturation",_);
}
}
}
});

thi.ng.color.core.brightness = (function thi$ng$color$core$brightness(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$brightness$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$brightness$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.brightness[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.brightness["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.brightness",_);
}
}
}
});

thi.ng.color.core.luminance = (function thi$ng$color$core$luminance(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$luminance$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$luminance$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.luminance[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.luminance["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.luminance",_);
}
}
}
});

thi.ng.color.core.cyan = (function thi$ng$color$core$cyan(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$cyan$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$cyan$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.cyan[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.cyan["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.cyan",_);
}
}
}
});

thi.ng.color.core.magenta = (function thi$ng$color$core$magenta(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$magenta$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$magenta$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.magenta[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.magenta["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.magenta",_);
}
}
}
});

thi.ng.color.core.yellow = (function thi$ng$color$core$yellow(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$yellow$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$yellow$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.yellow[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.yellow["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.yellow",_);
}
}
}
});

thi.ng.color.core.black = (function thi$ng$color$core$black(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$black$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$black$arity$1(_);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.black[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.black["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.black",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorOps = function(){};

thi.ng.color.core.rotate_hue = (function thi$ng$color$core$rotate_hue(_,theta){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$rotate_hue$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$rotate_hue$arity$2(_,theta);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.rotate_hue[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_,theta);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.rotate_hue["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_,theta);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.rotate-hue",_);
}
}
}
});

thi.ng.color.core.adjust_saturation = (function thi$ng$color$core$adjust_saturation(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_saturation$arity$2(_,offset);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.adjust_saturation[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_,offset);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.adjust_saturation["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-saturation",_);
}
}
}
});

thi.ng.color.core.adjust_brightness = (function thi$ng$color$core$adjust_brightness(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_brightness$arity$2(_,offset);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.adjust_brightness[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_,offset);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.adjust_brightness["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-brightness",_);
}
}
}
});

thi.ng.color.core.adjust_alpha = (function thi$ng$color$core$adjust_alpha(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_alpha$arity$2(_,offset);
} else {
var x__25481__auto__ = (((_ == null))?null:_);
var m__25482__auto__ = (thi.ng.color.core.adjust_alpha[goog.typeOf(x__25481__auto__)]);
if(!((m__25482__auto__ == null))){
return m__25482__auto__.call(null,_,offset);
} else {
var m__25482__auto____$1 = (thi.ng.color.core.adjust_alpha["_"]);
if(!((m__25482__auto____$1 == null))){
return m__25482__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-alpha",_);
}
}
}
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.RGBA = (function (r,g,b,a,__meta,__extmap,__hash){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39934,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39936 = (((k39934 instanceof cljs.core.Keyword))?k39934.fqn:null);
switch (G__39936) {
case "r":
return self__.r;

break;
case "g":
return self__.g;

break;
case "b":
return self__.b;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39934,else__25443__auto__);

}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int24.call(null,((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int32.call(null,(((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))) | ((((self__.a * (255)) + 0.5) | (0)) << (24))));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.color.core.RGBA{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$ = true;

thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39933){
var self__ = this;
var G__39933__$1 = this;
return (new cljs.core.RecordIter((0),G__39933__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.RGBA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - self__.r),(1.0 - self__.g),(1.0 - self__.b),self__.a,null,null,null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

thi.ng.color.core.RGBA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.r);

(dest[(idx + (1))] = self__.g);

(dest[(idx + (2))] = self__.b);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp.call(null,(self__.a + offset),0.0,1.0),null,null,null));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * self__.r);
var g__$1 = ((255) * self__.g);
var b__$1 = ((255) * self__.b);
return thi.ng.color.core.css.call(null,[cljs.core.str("rgba("),cljs.core.str((r__$1 | (0))),cljs.core.str(","),cljs.core.str((g__$1 | (0))),cljs.core.str(","),cljs.core.str((b__$1 | (0))),cljs.core.str(","),cljs.core.str((function (){var x__25149__auto__ = 0.0;
var y__25150__auto__ = self__.a;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})()),cljs.core.str(")")].join(''));
} else {
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_int24.call(null,___$1));
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__25149__auto__ = (function (){var x__25149__auto__ = self__.r;
var y__25150__auto__ = self__.g;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})();
var y__25150__auto__ = self__.b;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})();
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))){
return 0.0;
} else {
return ((v - (function (){var x__25156__auto__ = (function (){var x__25156__auto__ = self__.r;
var y__25157__auto__ = self__.g;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})();
var y__25157__auto__ = self__.b;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})()) / v);
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__25149__auto__ = (function (){var x__25149__auto__ = self__.r;
var y__25150__auto__ = self__.g;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})();
var y__25150__auto__ = self__.b;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((0.299 * self__.r) + (0.587 * self__.g)) + (0.114 * self__.b));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.r;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.b;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.RGBA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.RGBA((function (){var a__32034__auto__ = self__.r;
return (((dest__$1.r - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.g;
return (((dest__$1.g - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.b;
return (((dest__$1.b - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.a;
return (((dest__$1.a - a__32034__auto__) * t) + a__32034__auto__);
})(),null,null,null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39933){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39940 = cljs.core.keyword_identical_QMARK_;
var expr__39941 = k__25448__auto__;
if(cljs.core.truth_(pred__39940.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__39941))){
return (new thi.ng.color.core.RGBA(G__39933,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39940.call(null,new cljs.core.Keyword(null,"g","g",1738089905),expr__39941))){
return (new thi.ng.color.core.RGBA(self__.r,G__39933,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39940.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__39941))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,G__39933,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39940.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__39941))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,G__39933,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39933),null));
}
}
}
}
});

thi.ng.color.core.RGBA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__25149__auto__ = (function (){var x__25149__auto__ = self__.r;
var y__25150__auto__ = self__.g;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})();
var y__25150__auto__ = self__.b;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})();
var d = (v - (function (){var x__25156__auto__ = (function (){var x__25156__auto__ = self__.r;
var y__25157__auto__ = self__.g;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})();
var y__25157__auto__ = self__.b;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})());
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,s))?0.0:(function (){var pred__39943 = cljs.core._EQ__EQ_;
var expr__39944 = v;
if(cljs.core.truth_(pred__39943.call(null,self__.r,expr__39944))){
return ((self__.g - self__.b) / d);
} else {
if(cljs.core.truth_(pred__39943.call(null,self__.g,expr__39944))){
return (2.0 + ((self__.b - self__.r) / d));
} else {
return (4.0 + ((self__.r - self__.g) / d));
}
}
})());
var h__$1 = (h / 6.0);
return thi.ng.color.core.hsva.call(null,(((h__$1 < (0)))?(h__$1 + (1)):h__$1),s,v,self__.a);
});

thi.ng.color.core.RGBA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39933){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,G__39933,self__.__extmap,self__.__hash));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (1.0 - self__.r);
var m = (1.0 - self__.g);
var y = (1.0 - self__.b);
var k = (function (){var x__25156__auto__ = (function (){var x__25156__auto__ = c;
var y__25157__auto__ = m;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})();
var y__25157__auto__ = y;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})();
return thi.ng.color.core.cmyka.call(null,(function (){var x__25149__auto__ = (c - k);
var y__25150__auto__ = 0.0;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})(),(function (){var x__25149__auto__ = (m - k);
var y__25150__auto__ = 0.0;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})(),(function (){var x__25149__auto__ = (y - k);
var y__25150__auto__ = 0.0;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})(),(function (){var x__25149__auto__ = k;
var y__25150__auto__ = 0.0;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})(),self__.a);
});

thi.ng.color.core.RGBA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var f1 = (function (){var x__25156__auto__ = (function (){var x__25156__auto__ = self__.r;
var y__25157__auto__ = self__.g;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})();
var y__25157__auto__ = self__.b;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})();
var f2 = (function (){var x__25149__auto__ = (function (){var x__25149__auto__ = self__.r;
var y__25150__auto__ = self__.g;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})();
var y__25150__auto__ = self__.b;
return ((x__25149__auto__ > y__25150__auto__) ? x__25149__auto__ : y__25150__auto__);
})();
var l = ((f1 + f2) * 0.5);
var d = (f2 - f1);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d))){
return thi.ng.color.core.hsla.call(null,0.0,0.0,l,self__.a);
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - self__.r) * thi.ng.math.core.SIXTH) + d2) / d);
var dg = ((((f2 - self__.g) * thi.ng.math.core.SIXTH) + d2) / d);
var db = ((((f2 - self__.b) * thi.ng.math.core.SIXTH) + d2) / d);
var h = (function (){var pred__39937 = cljs.core._EQ__EQ_;
var expr__39938 = f2;
if(cljs.core.truth_(pred__39937.call(null,self__.r,expr__39938))){
return (db - dg);
} else {
if(cljs.core.truth_(pred__39937.call(null,self__.g,expr__39938))){
return ((thi.ng.math.core.THIRD + dr) - db);
} else {
return ((thi.ng.math.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return thi.ng.color.core.hsla.call(null,h__$1,s,l,self__.a);
}
});

thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.RGBA.cljs$lang$type = true;

thi.ng.color.core.RGBA.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/RGBA");
});

thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.color.core/RGBA");
});

thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

thi.ng.color.core.map__GT_RGBA = (function thi$ng$color$core$map__GT_RGBA(G__39935){
return (new thi.ng.color.core.RGBA(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__39935),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(G__39935),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__39935),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__39935),null,cljs.core.dissoc.call(null,G__39935,new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int24 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39948,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39950 = (((k39948 instanceof cljs.core.Keyword))?k39948.fqn:null);
switch (G__39950) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39948,else__25443__auto__);

}
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int32.call(null,(self__.col | (4278190080)));
});

thi.ng.color.core.Int24.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.color.core.Int24{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int24.prototype.cljs$core$IIterable$ = true;

thi.ng.color.core.Int24.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39947){
var self__ = this;
var G__39947__$1 = this;
return (new cljs.core.RecordIter((0),G__39947__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.color.core.Int24.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.Int24.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int24.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col ^ (16777215)),null,null,null));
});

thi.ng.color.core.Int24.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

thi.ng.color.core.Int24.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha.call(null,thi.ng.color.core.as_int32.call(null,___$1),offset);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),1.0,null,null,null));
});

thi.ng.color.core.Int24.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.Int24((((((0.5 + (function (){var a__32034__auto__ = r;
return ((((dest__$1.r * (255)) - a__32034__auto__) * t) + a__32034__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__32034__auto__ = g;
return ((((dest__$1.g * (255)) - a__32034__auto__) * t) + a__32034__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__32034__auto__ = b;
return ((((dest__$1.b * (255)) - a__32034__auto__) * t) + a__32034__auto__);
})()) | (0))),null,null,null));
});

thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39947){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39951 = cljs.core.keyword_identical_QMARK_;
var expr__39952 = k__25448__auto__;
if(cljs.core.truth_(pred__39951.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__39952))){
return (new thi.ng.color.core.Int24(G__39947,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39947),null));
}
});

thi.ng.color.core.Int24.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39947){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,G__39947,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int24.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
});

thi.ng.color.core.Int24.cljs$lang$type = true;

thi.ng.color.core.Int24.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/Int24");
});

thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.color.core/Int24");
});

thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col,null,null,null));
});

thi.ng.color.core.map__GT_Int24 = (function thi$ng$color$core$map__GT_Int24(G__39949){
return (new thi.ng.color.core.Int24(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__39949),null,cljs.core.dissoc.call(null,G__39949,new cljs.core.Keyword(null,"col","col",-1959363084)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int32 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39956,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39958 = (((k39956 instanceof cljs.core.Keyword))?k39956.fqn:null);
switch (G__39958) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39956,else__25443__auto__);

}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col & (16777215)),null,null,null));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.Int32.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.color.core.Int32{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int32.prototype.cljs$core$IIterable$ = true;

thi.ng.color.core.Int32.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39955){
var self__ = this;
var G__39955__$1 = this;
return (new cljs.core.RecordIter((0),G__39955__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.color.core.Int32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.Int32.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int32.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int32((self__.col ^ (16777215)),null,null,null));
});

thi.ng.color.core.Int32.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

thi.ng.color.core.Int32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp.call(null,(a + offset),0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24))),null,null,null));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
} else {
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255))),null,null,null));
});

thi.ng.color.core.Int32.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.Int32(((((((0.5 + (function (){var a__32034__auto__ = r;
return ((((dest__$1.r * (255)) - a__32034__auto__) * t) + a__32034__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__32034__auto__ = g;
return ((((dest__$1.g * (255)) - a__32034__auto__) * t) + a__32034__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__32034__auto__ = b;
return ((((dest__$1.b * (255)) - a__32034__auto__) * t) + a__32034__auto__);
})()) | (0))) | (((0.5 + (function (){var a__32034__auto__ = a;
return ((((dest__$1.a * (255)) - a__32034__auto__) * t) + a__32034__auto__);
})()) | (0)) << (24))),null,null,null));
});

thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39955){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39959 = cljs.core.keyword_identical_QMARK_;
var expr__39960 = k__25448__auto__;
if(cljs.core.truth_(pred__39959.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__39960))){
return (new thi.ng.color.core.Int32(G__39955,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39955),null));
}
});

thi.ng.color.core.Int32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39955){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,G__39955,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
});

thi.ng.color.core.Int32.cljs$lang$type = true;

thi.ng.color.core.Int32.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/Int32");
});

thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.color.core/Int32");
});

thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

thi.ng.color.core.map__GT_Int32 = (function thi$ng$color$core$map__GT_Int32(G__39957){
return (new thi.ng.color.core.Int32(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__39957),null,cljs.core.dissoc.call(null,G__39957,new cljs.core.Keyword(null,"col","col",-1959363084)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSVA = (function (h,s,v,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.v = v;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39964,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39966 = (((k39964 instanceof cljs.core.Keyword))?k39964.fqn:null);
switch (G__39966) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39964,else__25443__auto__);

}
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.color.core.HSVA{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$ = true;

thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39963){
var self__ = this;
var G__39963__$1 = this;
return (new cljs.core.RecordIter((0),G__39963__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.HSVA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

thi.ng.color.core.HSVA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.v);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.v,self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp.call(null,(offset + self__.v),0.0,1.0),self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1)));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a,null,null,null));
} else {
var h__$1 = cljs.core.rem.call(null,(self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__39967 = i;
switch (G__39967) {
case (0):
return (new thi.ng.color.core.RGBA(self__.v,t,p,self__.a,null,null,null));

break;
case (1):
return (new thi.ng.color.core.RGBA(q,self__.v,p,self__.a,null,null,null));

break;
case (2):
return (new thi.ng.color.core.RGBA(p,self__.v,t,self__.a,null,null,null));

break;
case (3):
return (new thi.ng.color.core.RGBA(p,q,self__.v,self__.a,null,null,null));

break;
case (4):
return (new thi.ng.color.core.RGBA(t,p,self__.v,self__.a,null,null,null));

break;
default:
return (new thi.ng.color.core.RGBA(self__.v,p,q,self__.a,null,null,null));

}
}
});

thi.ng.color.core.HSVA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsva.call(null,dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__32034__auto__ = (self__.h + (1));
return (((h2 - a__32034__auto__) * t) + a__32034__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__32034__auto__ = self__.h;
return ((((h2 + (1)) - a__32034__auto__) * t) + a__32034__auto__);
})(),1.0)):(function (){var a__32034__auto__ = self__.h;
return (((h2 - a__32034__auto__) * t) + a__32034__auto__);
})()),(function (){var a__32034__auto__ = self__.s;
return (((dest__$1.s - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.v;
return (((dest__$1.v - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.a;
return (((dest__$1.a - a__32034__auto__) * t) + a__32034__auto__);
})(),null,null,null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39963){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39968 = cljs.core.keyword_identical_QMARK_;
var expr__39969 = k__25448__auto__;
if(cljs.core.truth_(pred__39968.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39969))){
return (new thi.ng.color.core.HSVA(G__39963,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39968.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__39969))){
return (new thi.ng.color.core.HSVA(self__.h,G__39963,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39968.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__39969))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,G__39963,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39968.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__39969))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,G__39963,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39963),null));
}
}
}
}
});

thi.ng.color.core.HSVA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.HSVA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39963){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,G__39963,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null);
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l = (((2) - self__.s) * (self__.v * 0.5));
var s_SINGLEQUOTE_ = ((self__.s * self__.v) / ((1) - thi.ng.math.core.abs_STAR_.call(null,(((2) * l) - (1)))));
return thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a);
});

thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.HSVA.cljs$lang$type = true;

thi.ng.color.core.HSVA.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/HSVA");
});

thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.color.core/HSVA");
});

thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

thi.ng.color.core.map__GT_HSVA = (function thi$ng$color$core$map__GT_HSVA(G__39965){
return (new thi.ng.color.core.HSVA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39965),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__39965),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__39965),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__39965),null,cljs.core.dissoc.call(null,G__39965,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSLA = (function (h,s,l,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.l = l;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39974,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39976 = (((k39974 instanceof cljs.core.Keyword))?k39974.fqn:null);
switch (G__39976) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "l":
return self__.l;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39974,else__25443__auto__);

}
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.color.core.HSLA{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$ = true;

thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39973){
var self__ = this;
var G__39973__$1 = this;
return (new cljs.core.RecordIter((0),G__39973__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.HSLA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

thi.ng.color.core.HSLA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.l);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.l,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = Math.round((self__.h * 360.0));
var s__$1 = Math.round((self__.s * 100.0));
var l__$1 = Math.round((self__.l * 100.0));
return thi.ng.color.core.css.call(null,(((self__.a < (1)))?[cljs.core.str("hsla("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%,"),cljs.core.str(self__.a),cljs.core.str(")")].join(''):[cljs.core.str("hsl("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%)")].join('')));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a,null,null,null));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h + thi.ng.math.core.THIRD)),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h - thi.ng.math.core.THIRD)),0.0,1.0),self__.a,null,null,null));
}
});

thi.ng.color.core.HSLA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsla.call(null,dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__32034__auto__ = (self__.h + (1));
return (((h2 - a__32034__auto__) * t) + a__32034__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__32034__auto__ = self__.h;
return ((((h2 + (1)) - a__32034__auto__) * t) + a__32034__auto__);
})(),1.0)):(function (){var a__32034__auto__ = self__.h;
return (((h2 - a__32034__auto__) * t) + a__32034__auto__);
})()),(function (){var a__32034__auto__ = self__.s;
return (((dest__$1.s - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.l;
return (((dest__$1.l - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.a;
return (((dest__$1.a - a__32034__auto__) * t) + a__32034__auto__);
})(),null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39973){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39977 = cljs.core.keyword_identical_QMARK_;
var expr__39978 = k__25448__auto__;
if(cljs.core.truth_(pred__39977.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39978))){
return (new thi.ng.color.core.HSLA(G__39973,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39977.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__39978))){
return (new thi.ng.color.core.HSLA(self__.h,G__39973,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39977.call(null,new cljs.core.Keyword(null,"l","l",1395893423),expr__39978))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,G__39973,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39977.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__39978))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,G__39973,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39973),null));
}
}
}
}
});

thi.ng.color.core.HSLA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - thi.ng.math.core.abs_STAR_.call(null,(l2 - (1)))))) / (2));
var s_SINGLEQUOTE_ = (((2) * (v - self__.l)) / v);
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39973){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,G__39973,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null);
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.HSLA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.HSLA.cljs$lang$type = true;

thi.ng.color.core.HSLA.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/HSLA");
});

thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.color.core/HSLA");
});

thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

thi.ng.color.core.map__GT_HSLA = (function thi$ng$color$core$map__GT_HSLA(G__39975){
return (new thi.ng.color.core.HSLA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39975),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__39975),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(G__39975),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__39975),null,cljs.core.dissoc.call(null,G__39975,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CMYKA = (function (c,m,y,k,a,__meta,__extmap,__hash){
this.c = c;
this.m = m;
this.y = y;
this.k = k;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39982,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39984 = (((k39982 instanceof cljs.core.Keyword))?k39982.fqn:null);
switch (G__39984) {
case "c":
return self__.c;

break;
case "m":
return self__.m;

break;
case "y":
return self__.y;

break;
case "k":
return self__.k;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39982,else__25443__auto__);

}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.color.core.CMYKA{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m","m",1632677161),self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$ = true;

thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39981){
var self__ = this;
var G__39981__$1 = this;
return (new cljs.core.RecordIter((0),G__39981__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((1.0 - self__.c),(1.0 - self__.m),(1.0 - self__.y),(1.0 - self__.k),self__.a,null,null,null));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

thi.ng.color.core.CMYKA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.k;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - (function (){var x__25156__auto__ = 1.0;
var y__25157__auto__ = (self__.c + self__.k);
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})()),(1.0 - (function (){var x__25156__auto__ = 1.0;
var y__25157__auto__ = (self__.m + self__.k);
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})()),(1.0 - (function (){var x__25156__auto__ = 1.0;
var y__25157__auto__ = (self__.y + self__.k);
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})()),self__.a,null,null,null));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"m","m",1632677161),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_cmyka.call(null,dest);
return (new thi.ng.color.core.CMYKA((function (){var a__32034__auto__ = self__.c;
return (((dest__$1.c - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.m;
return (((dest__$1.m - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.y;
return (((dest__$1.y - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.k;
return (((dest__$1.k - a__32034__auto__) * t) + a__32034__auto__);
})(),(function (){var a__32034__auto__ = self__.a;
return (((dest__$1.a - a__32034__auto__) * t) + a__32034__auto__);
})(),null,null,null));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39981){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39985 = cljs.core.keyword_identical_QMARK_;
var expr__39986 = k__25448__auto__;
if(cljs.core.truth_(pred__39985.call(null,new cljs.core.Keyword(null,"c","c",-1763192079),expr__39986))){
return (new thi.ng.color.core.CMYKA(G__39981,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39985.call(null,new cljs.core.Keyword(null,"m","m",1632677161),expr__39986))){
return (new thi.ng.color.core.CMYKA(self__.c,G__39981,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39985.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39986))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,G__39981,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39985.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__39986))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,G__39981,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39985.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__39986))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,G__39981,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39981),null));
}
}
}
}
}
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m","m",1632677161),self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39981){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,G__39981,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c,self__.m,self__.y,self__.k,self__.a], null);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.CMYKA.cljs$lang$type = true;

thi.ng.color.core.CMYKA.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/CMYKA");
});

thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.color.core/CMYKA");
});

thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

thi.ng.color.core.map__GT_CMYKA = (function thi$ng$color$core$map__GT_CMYKA(G__39983){
return (new thi.ng.color.core.CMYKA(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(G__39983),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(G__39983),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39983),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__39983),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__39983),null,cljs.core.dissoc.call(null,G__39983,new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CSS = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25440__auto__,k__25441__auto__){
var self__ = this;
var this__25440__auto____$1 = this;
return cljs.core._lookup.call(null,this__25440__auto____$1,k__25441__auto__,null);
});

thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25442__auto__,k39990,else__25443__auto__){
var self__ = this;
var this__25442__auto____$1 = this;
var G__39992 = (((k39990 instanceof cljs.core.Keyword))?k39990.fqn:null);
switch (G__39992) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39990,else__25443__auto__);

}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25454__auto__,writer__25455__auto__,opts__25456__auto__){
var self__ = this;
var this__25454__auto____$1 = this;
var pr_pair__25457__auto__ = ((function (this__25454__auto____$1){
return (function (keyval__25458__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,cljs.core.pr_writer,""," ","",opts__25456__auto__,keyval__25458__auto__);
});})(this__25454__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25455__auto__,pr_pair__25457__auto__,"#thi.ng.color.core.CSS{",", ","}",opts__25456__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.CSS.prototype.cljs$core$IIterable$ = true;

thi.ng.color.core.CSS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39989){
var self__ = this;
var G__39989__$1 = this;
return (new cljs.core.RecordIter((0),G__39989__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.color.core.CSS.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25438__auto__){
var self__ = this;
var this__25438__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.CSS.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25434__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CSS.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25444__auto__){
var self__ = this;
var this__25444__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.math.core.invert.call(null,thi.ng.color.core.as_rgba.call(null,___$1)));
});

thi.ng.color.core.CSS.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25435__auto__){
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

thi.ng.color.core.CSS.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25436__auto__,other__25437__auto__){
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

thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_alpha.call(null,thi.ng.color.core.as_rgba.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25449__auto__,k__25450__auto__){
var self__ = this;
var this__25449__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__25450__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25449__auto____$1),self__.__meta),k__25450__auto__);
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25450__auto__)),null));
}
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.math.core.mix.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,t));
});

thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25447__auto__,k__25448__auto__,G__39989){
var self__ = this;
var this__25447__auto____$1 = this;
var pred__39993 = cljs.core.keyword_identical_QMARK_;
var expr__39994 = k__25448__auto__;
if(cljs.core.truth_(pred__39993.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__39994))){
return (new thi.ng.color.core.CSS(G__39989,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25448__auto__,G__39989),null));
}
});

thi.ng.color.core.CSS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25452__auto__){
var self__ = this;
var this__25452__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25439__auto__,G__39989){
var self__ = this;
var this__25439__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,G__39989,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CSS.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25445__auto__,entry__25446__auto__){
var self__ = this;
var this__25445__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25446__auto__)){
return cljs.core._assoc.call(null,this__25445__auto____$1,cljs.core._nth.call(null,entry__25446__auto__,(0)),cljs.core._nth.call(null,entry__25446__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25445__auto____$1,entry__25446__auto__);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla.call(null,c);
}
});

thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
});

thi.ng.color.core.CSS.cljs$lang$type = true;

thi.ng.color.core.CSS.cljs$lang$ctorPrSeq = (function (this__25474__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/CSS");
});

thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__25474__auto__,writer__25475__auto__){
return cljs.core._write.call(null,writer__25475__auto__,"thi.ng.color.core/CSS");
});

thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});

thi.ng.color.core.map__GT_CSS = (function thi$ng$color$core$map__GT_CSS(G__39991){
return (new thi.ng.color.core.CSS(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__39991),null,cljs.core.dissoc.call(null,G__39991,new cljs.core.Keyword(null,"col","col",-1959363084)),null));
});

thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
if(typeof thi.ng.color.core.t_thi$ng$color$core40006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {thi.ng.color.core.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.t_thi$ng$color$core40006 = (function (proxied_color_type,to_rgba,from_rgba,ctor,col,meta40007){
this.proxied_color_type = proxied_color_type;
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta40007 = meta40007;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.call(null,self__.col);
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.math.core.invert.call(null,self__.to_rgba.call(null,self__.col))));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,self__.to_rgba.call(null,self__.col),dest,stride,idx);
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,self__.to_rgba.call(null,self__.col),theta)));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,self__.to_rgba.call(null,self__.col),offset)));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,self__.to_rgba.call(null,self__.col),offset)));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40008){
var self__ = this;
var _40008__$1 = this;
return self__.meta40007;
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to_rgba.call(null,self__.col);
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.math.core.mix.call(null,self__.to_rgba.call(null,self__.col),dest,t)));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40008,meta40007__$1){
var self__ = this;
var _40008__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core40006(self__.proxied_color_type,self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta40007__$1));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core40006.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core40006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"proxied-color-type","proxied-color-type",-1113665184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null)], null)))], null)),new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null),new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"meta40007","meta40007",261903411,null)], null);
});

thi.ng.color.core.t_thi$ng$color$core40006.cljs$lang$type = true;

thi.ng.color.core.t_thi$ng$color$core40006.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core40006";

thi.ng.color.core.t_thi$ng$color$core40006.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"thi.ng.color.core/t_thi$ng$color$core40006");
});

thi.ng.color.core.__GT_t_thi$ng$color$core40006 = (function thi$ng$color$core$proxied_color_type_$_ctor_$___GT_t_thi$ng$color$core40006(proxied_color_type__$1,to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta40007){
return (new thi.ng.color.core.t_thi$ng$color$core40006(proxied_color_type__$1,to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta40007));
});

}

return (new thi.ng.color.core.t_thi$ng$color$core40006(thi$ng$color$core$proxied_color_type,to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var args40009 = [];
var len__25893__auto___40016 = arguments.length;
var i__25894__auto___40017 = (0);
while(true){
if((i__25894__auto___40017 < len__25893__auto___40016)){
args40009.push((arguments[i__25894__auto___40017]));

var G__40018 = (i__25894__auto___40017 + (1));
i__25894__auto___40017 = G__40018;
continue;
} else {
}
break;
}

var G__40011 = args40009.length;
switch (G__40011) {
case 1:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40009.length)].join('')));

}
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__40012){
var vec__40013 = p__40012;
var r = cljs.core.nth.call(null,vec__40013,(0),null);
var g = cljs.core.nth.call(null,vec__40013,(1),null);
var b = cljs.core.nth.call(null,vec__40013,(2),null);
var a = cljs.core.nth.call(null,vec__40013,(3),null);
return (new thi.ng.color.core.RGBA(r,g,b,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new thi.ng.color.core.RGBA(r,g,b,1.0,null,null,null));
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

thi.ng.color.core.rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.int24 = (function thi$ng$color$core$int24(col){
return (new thi.ng.color.core.Int24((col & (16777215)),null,null,null));
});
thi.ng.color.core.int32 = (function thi$ng$color$core$int32(var_args){
var args40020 = [];
var len__25893__auto___40023 = arguments.length;
var i__25894__auto___40024 = (0);
while(true){
if((i__25894__auto___40024 < len__25893__auto___40023)){
args40020.push((arguments[i__25894__auto___40024]));

var G__40025 = (i__25894__auto___40024 + (1));
i__25894__auto___40024 = G__40025;
continue;
} else {
}
break;
}

var G__40022 = args40020.length;
switch (G__40022) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40020.length)].join('')));

}
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp.call(null,alpha,0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24))),null,null,null));
});

thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2;

thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var args40027 = [];
var len__25893__auto___40034 = arguments.length;
var i__25894__auto___40035 = (0);
while(true){
if((i__25894__auto___40035 < len__25893__auto___40034)){
args40027.push((arguments[i__25894__auto___40035]));

var G__40036 = (i__25894__auto___40035 + (1));
i__25894__auto___40035 = G__40036;
continue;
} else {
}
break;
}

var G__40029 = args40027.length;
switch (G__40029) {
case 1:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40027.length)].join('')));

}
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__40030){
var vec__40031 = p__40030;
var h = cljs.core.nth.call(null,vec__40031,(0),null);
var s = cljs.core.nth.call(null,vec__40031,(1),null);
var v = cljs.core.nth.call(null,vec__40031,(2),null);
var a = cljs.core.nth.call(null,vec__40031,(3),null);
return (new thi.ng.color.core.HSVA(h,s,v,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3 = (function (h,s,v){
return (new thi.ng.color.core.HSVA(h,s,v,1.0,null,null,null));
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 = (function (h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

thi.ng.color.core.hsva.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.hsla = (function thi$ng$color$core$hsla(var_args){
var args40038 = [];
var len__25893__auto___40045 = arguments.length;
var i__25894__auto___40046 = (0);
while(true){
if((i__25894__auto___40046 < len__25893__auto___40045)){
args40038.push((arguments[i__25894__auto___40046]));

var G__40047 = (i__25894__auto___40046 + (1));
i__25894__auto___40046 = G__40047;
continue;
} else {
}
break;
}

var G__40040 = args40038.length;
switch (G__40040) {
case 1:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40038.length)].join('')));

}
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__40041){
var vec__40042 = p__40041;
var h = cljs.core.nth.call(null,vec__40042,(0),null);
var s = cljs.core.nth.call(null,vec__40042,(1),null);
var l = cljs.core.nth.call(null,vec__40042,(2),null);
var a = cljs.core.nth.call(null,vec__40042,(3),null);
return (new thi.ng.color.core.HSLA(h,s,l,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return (new thi.ng.color.core.HSLA(h,s,l,1.0,null,null,null));
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

thi.ng.color.core.hsla.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.cmyka = (function thi$ng$color$core$cmyka(var_args){
var args40049 = [];
var len__25893__auto___40056 = arguments.length;
var i__25894__auto___40057 = (0);
while(true){
if((i__25894__auto___40057 < len__25893__auto___40056)){
args40049.push((arguments[i__25894__auto___40057]));

var G__40058 = (i__25894__auto___40057 + (1));
i__25894__auto___40057 = G__40058;
continue;
} else {
}
break;
}

var G__40051 = args40049.length;
switch (G__40051) {
case 1:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40049.length)].join('')));

}
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__40052){
var vec__40053 = p__40052;
var c = cljs.core.nth.call(null,vec__40053,(0),null);
var m = cljs.core.nth.call(null,vec__40053,(1),null);
var y = cljs.core.nth.call(null,vec__40053,(2),null);
var k = cljs.core.nth.call(null,vec__40053,(3),null);
var a = cljs.core.nth.call(null,vec__40053,(4),null);
return (new thi.ng.color.core.CMYKA(c,m,y,k,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 = (function (c,m,y,k){
return (new thi.ng.color.core.CMYKA(c,m,y,k,1.0,null,null,null));
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 = (function (c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

thi.ng.color.core.cmyka.cljs$lang$maxFixedArity = 5;

thi.ng.color.core.css = (function thi$ng$color$core$css(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});
/**
 * Returns a random RGBA color with 100% alpha
 */
thi.ng.color.core.random_rgb = (function thi$ng$color$core$random_rgb(){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),1.0,null,null,null));
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.call(null,(1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.call(null,(0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.call(null,(0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.call(null,(0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.call(null,(1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.call(null,(1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.call(null,(0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.call(null,(1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.call(null,0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.math.core.SIXTH)){
var a__32034__auto__ = f1;
return (((f2 - a__32034__auto__) * (6.0 * h__$1)) + a__32034__auto__);
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.math.core.TWO_THIRD)){
var a__32034__auto__ = f1;
return (((f2 - a__32034__auto__) * ((thi.ng.math.core.TWO_THIRD - h__$1) * 6.0)) + a__32034__auto__);
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod.call(null,(6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 3.0)) - (1)),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 2.0))),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 4.0))),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__40066 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.math.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.math.core.THIRD)], null));
var px = cljs.core.nth.call(null,vec__40066,(0),null);
var py = cljs.core.nth.call(null,vec__40066,(1),null);
var pz = cljs.core.nth.call(null,vec__40066,(2),null);
var pw = cljs.core.nth.call(null,vec__40066,(3),null);
var vec__40069 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.call(null,vec__40069,(0),null);
var qy = cljs.core.nth.call(null,vec__40069,(1),null);
var qz = cljs.core.nth.call(null,vec__40069,(2),null);
var qw = cljs.core.nth.call(null,vec__40069,(3),null);
var c = (qx - (function (){var x__25156__auto__ = qw;
var y__25157__auto__ = qy;
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})());
var h = thi.ng.math.core.abs_STAR_.call(null,(((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,h,0.0,1.0),thi.ng.math.core.clamp.call(null,c,0.0,1.0),thi.ng.math.core.clamp.call(null,qx,0.0,1.0),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__40078 = thi.ng.color.core.rgba__GT_hcva.call(null,rgba);
var h = cljs.core.nth.call(null,vec__40078,(0),null);
var c = cljs.core.nth.call(null,vec__40078,(1),null);
var v = cljs.core.nth.call(null,vec__40078,(2),null);
var a = cljs.core.nth.call(null,vec__40078,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__40081 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__40081,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__40081,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__40081,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * ((1.0 - z) / (1.0 - y))),0.0,1.0),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * (z / y)),0.0,1.0),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var args40084 = [];
var len__25893__auto___40090 = arguments.length;
var i__25894__auto___40091 = (0);
while(true){
if((i__25894__auto___40091 < len__25893__auto___40090)){
args40084.push((arguments[i__25894__auto___40091]));

var G__40092 = (i__25894__auto___40091 + (1));
i__25894__auto___40091 = G__40092;
continue;
} else {
}
break;
}

var G__40086 = args40084.length;
switch (G__40086) {
case 1:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40084.length)].join('')));

}
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.call(null,thi.ng.color.core.hcya__GT_rgba,hcya);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.call(null,h,c,y,1.0);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__40087 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r = cljs.core.nth.call(null,vec__40087,(0),null);
var g = cljs.core.nth.call(null,vec__40087,(1),null);
var b = cljs.core.nth.call(null,vec__40087,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,(((r - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((g - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((b - z) * c_SINGLEQUOTE_) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var args40094 = [];
var len__25893__auto___40097 = arguments.length;
var i__25894__auto___40098 = (0);
while(true){
if((i__25894__auto___40098 < len__25893__auto___40097)){
args40094.push((arguments[i__25894__auto___40098]));

var G__40099 = (i__25894__auto___40098 + (1));
i__25894__auto___40098 = G__40099;
continue;
} else {
}
break;
}

var G__40096 = args40094.length;
switch (G__40096) {
case 1:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40094.length)].join('')));

}
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.call(null,thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.call(null,y,cb,cr,1.0);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,((cr_SINGLEQUOTE_ * 1.402) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414))),0.0,1.0),thi.ng.math.core.clamp.call(null,((cb_SINGLEQUOTE_ * 1.772) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(((0.299 * r) + (0.587 * g)) + (0.114 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var args40101 = [];
var len__25893__auto___40104 = arguments.length;
var i__25894__auto___40105 = (0);
while(true){
if((i__25894__auto___40105 < len__25893__auto___40104)){
args40101.push((arguments[i__25894__auto___40105]));

var G__40106 = (i__25894__auto___40105 + (1));
i__25894__auto___40105 = G__40106;
continue;
} else {
}
break;
}

var G__40103 = args40101.length;
switch (G__40103) {
case 1:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40101.length)].join('')));

}
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.call(null,thi.ng.color.core.yuva__GT_rgba,yuva);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.call(null,y,u,v,1.0);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,((1.13983 * v) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((0.39465 * u) + (0.5806 * v))),0.0,1.0),thi.ng.math.core.clamp.call(null,((2.03211 * u) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp.call(null,(((x < 0.0031308))?(12.92 * x):((1.055 * Math.pow(x,((1) / 2.4))) - 0.055)),0.0,1.0);
});
thi.ng.color.core.cie1931__GT_rgba = (function thi$ng$color$core$cie1931__GT_rgba(var_args){
var args40108 = [];
var len__25893__auto___40111 = arguments.length;
var i__25894__auto___40112 = (0);
while(true){
if((i__25894__auto___40112 < len__25893__auto___40111)){
args40108.push((arguments[i__25894__auto___40112]));

var G__40113 = (i__25894__auto___40112 + (1));
i__25894__auto___40112 = G__40113;
continue;
} else {
}
break;
}

var G__40110 = args40108.length;
switch (G__40110) {
case 1:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40108.length)].join('')));

}
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.call(null,thi.ng.color.core.cie1931__GT_rgba,xyz);
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgba.call(null,x,y,z,1.0);
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.cie1931_gamma_correct.call(null,(((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a,null,null,null));
});

thi.ng.color.core.cie1931__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,hex)))?cljs.core.subs.call(null,hex,(1)):hex);
var len = cljs.core.count.call(null,hex__$1);
if(((3) === len)){
var vec__40118 = hex__$1;
var r = cljs.core.nth.call(null,vec__40118,(0),null);
var g = cljs.core.nth.call(null,vec__40118,(1),null);
var b = cljs.core.nth.call(null,vec__40118,(2),null);
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,[cljs.core.str(r),cljs.core.str(r),cljs.core.str(g),cljs.core.str(g),cljs.core.str(b),cljs.core.str(b)].join(''),(16),(0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
} else {
return thi.ng.color.core.int32.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float.call(null,cljs.core.subs.call(null,c,(0),(cljs.core.count.call(null,c) - (1)))));
} else {
return (thi.ng.math.core.INV8BIT * thi.ng.strf.core.parse_int.call(null,c,(10),(0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,col))){
return thi.ng.color.core.hex__GT_int.call(null,col);
} else {
var vec__40127 = cljs.core.re_seq.call(null,/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,col);
var vec__40130 = cljs.core.nth.call(null,vec__40127,(0),null);
var _ = cljs.core.nth.call(null,vec__40130,(0),null);
var mode = cljs.core.nth.call(null,vec__40130,(1),null);
var a = cljs.core.nth.call(null,vec__40130,(2),null);
var b = cljs.core.nth.call(null,vec__40130,(3),null);
var c = cljs.core.nth.call(null,vec__40130,(4),null);
var d = cljs.core.nth.call(null,vec__40130,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null).call(null,mode))){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val.call(null,a),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0),null,null,null));
} else {
return thi.ng.color.core.as_rgba.call(null,(new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float.call(null,a) / 360.0),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0),null,null,null)));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.cie1931__GT_rgba,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),cljs.core.map.call(null,(function (p1__40133_SHARP_){
return (p1__40133_SHARP_ / 360.0);
}),cljs.core.range.call(null,(0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys.call(null,thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var args40134 = [];
var len__25893__auto___40145 = arguments.length;
var i__25894__auto___40146 = (0);
while(true){
if((i__25894__auto___40146 < len__25893__auto___40145)){
args40134.push((arguments[i__25894__auto___40146]));

var G__40147 = (i__25894__auto___40146 + (1));
i__25894__auto___40146 = G__40147;
continue;
} else {
}
break;
}

var G__40136 = args40134.length;
switch (G__40136) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40134.length)].join('')));

}
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.call(null,col,thi.ng.color.core.hues);
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue.call(null,col);
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (h){
return (function (p__40137,p__40138){
var vec__40139 = p__40137;
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__40139,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__40139,(1),null);
var vec__40142 = p__40138;
var k = cljs.core.nth.call(null,vec__40142,(0),null);
var v = cljs.core.nth.call(null,vec__40142,(1),null);
var d = (function (){var x__25156__auto__ = thi.ng.math.core.abs_diff.call(null,h,v);
var y__25157__auto__ = thi.ng.math.core.abs_diff.call(null,(h - (1)),v);
return ((x__25156__auto__ < y__25157__auto__) ? x__25156__auto__ : y__25157__auto__);
})();
if((d < d_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_SINGLEQUOTE_,d_SINGLEQUOTE_], null);
}
});})(h))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1000000.0], null),hues));
});

thi.ng.color.core.closest_hue.cljs$lang$maxFixedArity = 2;

/**
 * Returns gamma corrected version of color as RGBA
 */
thi.ng.color.core.gamma_correct = (function thi$ng$color$core$gamma_correct(col,gamma){
var col__$1 = thi.ng.color.core.as_rgba.call(null,col);
return (new thi.ng.color.core.RGBA(Math.pow(col__$1.r,gamma),Math.pow(col__$1.g,gamma),Math.pow(col__$1.b,gamma),col__$1.a,null,null,null));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue.call(null,col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.rotate_hue.call(null,col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(var_args){
var args40149 = [];
var len__25893__auto___40152 = arguments.length;
var i__25894__auto___40153 = (0);
while(true){
if((i__25894__auto___40153 < len__25893__auto___40152)){
args40149.push((arguments[i__25894__auto___40153]));

var G__40154 = (i__25894__auto___40153 + (1));
i__25894__auto___40153 = G__40154;
continue;
} else {
}
break;
}

var G__40151 = args40149.length;
switch (G__40151) {
case 2:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40149.length)].join('')));

}
});

thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2 = (function (col,delta){
return thi.ng.color.core.random_analog.call(null,col,delta,delta,delta);
});

thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4 = (function (col,theta,sat,bright){
return thi.ng.color.core.analog.call(null,col,(thi.ng.math.core.randnorm.call(null) * theta),(thi.ng.math.core.randnorm.call(null) * sat),(thi.ng.math.core.randnorm.call(null) * bright));
});

thi.ng.color.core.random_analog.cljs$lang$maxFixedArity = 4;

/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__40162 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,a));
var ra = cljs.core.nth.call(null,vec__40162,(0),null);
var ga = cljs.core.nth.call(null,vec__40162,(1),null);
var ba = cljs.core.nth.call(null,vec__40162,(2),null);
var vec__40165 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,b));
var rb = cljs.core.nth.call(null,vec__40165,(0),null);
var gb = cljs.core.nth.call(null,vec__40165,(1),null);
var bb = cljs.core.nth.call(null,vec__40165,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
return Math.sqrt((((dr * dr) + (dg * dg)) + (db * db)));
});
/**
 * Returns HSV distance of any two colors (in cartesian space).
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__40174 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,a));
var ha = cljs.core.nth.call(null,vec__40174,(0),null);
var sa = cljs.core.nth.call(null,vec__40174,(1),null);
var va = cljs.core.nth.call(null,vec__40174,(2),null);
var vec__40177 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,b));
var hb = cljs.core.nth.call(null,vec__40177,(0),null);
var sb = cljs.core.nth.call(null,vec__40177,(1),null);
var vb = cljs.core.nth.call(null,vec__40177,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
return Math.sqrt((((dh * dh) + (ds * ds)) + (dv * dv)));
});

//# sourceMappingURL=core.js.map?rel=1530813194646