// Compiled by ClojureScript 1.9.229 {}
goog.provide('thi.ng.geom.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {thi.ng.geom.core.INormal}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37620_37969 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37621_37970 = v.buf;
(self__.buf[(0)] = ((G__37620_37969[(0)]) - (G__37621_37970[(0)])));

(self__.buf[(1)] = ((G__37620_37969[(1)]) - (G__37621_37970[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37620_37969[(0)]) - v));

(self__.buf[(1)] = ((G__37620_37969[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37620_37969[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__37620_37969[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37629_37971 = typeof v1 === 'number';
var G__37630_37972 = typeof v2 === 'number';
if(((G__37629_37971)?G__37630_37972:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__37631_37973 = ((!(G__37629_37971))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37632_37974 = ((!(G__37630_37972))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37623_37975 = (cljs.core.truth_(G__37631_37973)?v1.buf:null);
var G__37624_37976 = (cljs.core.truth_(G__37632_37974)?v2.buf:null);
var G__37625_37977 = (cljs.core.truth_(G__37631_37973)?(G__37623_37975[(0)]):((G__37629_37971)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__37626_37978 = (cljs.core.truth_(G__37631_37973)?(G__37623_37975[(1)]):((G__37629_37971)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__37627_37979 = (cljs.core.truth_(G__37632_37974)?(G__37624_37976[(0)]):((G__37630_37972)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37628_37980 = (cljs.core.truth_(G__37632_37974)?(G__37624_37976[(1)]):((G__37630_37972)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__37625_37977) - G__37627_37979));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__37626_37978) - G__37628_37980));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37633_37981 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37634_37982 = v.buf;
(self__.buf[(0)] = ((G__37633_37981[(0)]) * (G__37634_37982[(0)])));

(self__.buf[(1)] = ((G__37633_37981[(1)]) * (G__37634_37982[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37633_37981[(0)]) * v));

(self__.buf[(1)] = ((G__37633_37981[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37633_37981[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__37633_37981[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37642_37983 = typeof v1 === 'number';
var G__37643_37984 = typeof v2 === 'number';
if(((G__37642_37983)?G__37643_37984:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__37644_37985 = ((!(G__37642_37983))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37645_37986 = ((!(G__37643_37984))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37636_37987 = (cljs.core.truth_(G__37644_37985)?v1.buf:null);
var G__37637_37988 = (cljs.core.truth_(G__37645_37986)?v2.buf:null);
var G__37638_37989 = (cljs.core.truth_(G__37644_37985)?(G__37636_37987[(0)]):((G__37642_37983)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__37639_37990 = (cljs.core.truth_(G__37644_37985)?(G__37636_37987[(1)]):((G__37642_37983)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__37640_37991 = (cljs.core.truth_(G__37645_37986)?(G__37637_37988[(0)]):((G__37643_37984)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37641_37992 = (cljs.core.truth_(G__37645_37986)?(G__37637_37988[(1)]):((G__37643_37984)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__37638_37989) * G__37640_37991));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__37639_37990) * G__37641_37992));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37655_37993 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37656_37994 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37657_37995 = ((!(G__37655_37993))?typeof a === 'number':null);
var G__37658_37996 = ((!(G__37656_37994))?typeof b === 'number':null);
var G__37646_37997 = self__.buf;
var G__37647_37998 = ((G__37655_37993)?a.buf:null);
var G__37648_37999 = ((G__37656_37994)?b.buf:null);
var G__37649_38000 = (G__37646_37997[(0)]);
var G__37650_38001 = (G__37646_37997[(1)]);
var G__37651_38002 = ((G__37655_37993)?(G__37647_37998[(0)]):(cljs.core.truth_(G__37657_37995)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__37652_38003 = ((G__37655_37993)?(G__37647_37998[(1)]):(cljs.core.truth_(G__37657_37995)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__37653_38004 = ((G__37656_37994)?(G__37648_37999[(0)]):(cljs.core.truth_(G__37658_37996)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__37654_38005 = ((G__37656_37994)?(G__37648_37999[(1)]):(cljs.core.truth_(G__37658_37996)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__37649_38000 - G__37651_38002) * G__37653_38004));

(self__.buf[(1)] = ((G__37650_38001 - G__37652_38003) * G__37654_38005));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37668_38006 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37669_38007 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37670_38008 = ((!(G__37668_38006))?typeof a === 'number':null);
var G__37671_38009 = ((!(G__37669_38007))?typeof b === 'number':null);
var G__37659_38010 = self__.buf;
var G__37660_38011 = ((G__37668_38006)?a.buf:null);
var G__37661_38012 = ((G__37669_38007)?b.buf:null);
var G__37662_38013 = (G__37659_38010[(0)]);
var G__37663_38014 = (G__37659_38010[(1)]);
var G__37664_38015 = ((G__37668_38006)?(G__37660_38011[(0)]):(cljs.core.truth_(G__37670_38008)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__37665_38016 = ((G__37668_38006)?(G__37660_38011[(1)]):(cljs.core.truth_(G__37670_38008)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__37666_38017 = ((G__37669_38007)?(G__37661_38012[(0)]):(cljs.core.truth_(G__37671_38009)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__37667_38018 = ((G__37669_38007)?(G__37661_38012[(1)]):(cljs.core.truth_(G__37671_38009)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__37662_38013 * G__37664_38015) - G__37666_38017));

(self__.buf[(1)] = ((G__37663_38014 * G__37665_38016) - G__37667_38018));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37681_38019 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37682_38020 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37683_38021 = ((!(G__37681_38019))?typeof a === 'number':null);
var G__37684_38022 = ((!(G__37682_38020))?typeof b === 'number':null);
var G__37672_38023 = self__.buf;
var G__37673_38024 = ((G__37681_38019)?a.buf:null);
var G__37674_38025 = ((G__37682_38020)?b.buf:null);
var G__37675_38026 = (G__37672_38023[(0)]);
var G__37676_38027 = (G__37672_38023[(1)]);
var G__37677_38028 = ((G__37681_38019)?(G__37673_38024[(0)]):(cljs.core.truth_(G__37683_38021)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__37678_38029 = ((G__37681_38019)?(G__37673_38024[(1)]):(cljs.core.truth_(G__37683_38021)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__37679_38030 = ((G__37682_38020)?(G__37674_38025[(0)]):(cljs.core.truth_(G__37684_38022)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__37680_38031 = ((G__37682_38020)?(G__37674_38025[(1)]):(cljs.core.truth_(G__37684_38022)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__37675_38026 * G__37677_38028) + G__37679_38030));

(self__.buf[(1)] = ((G__37676_38027 * G__37678_38029) + G__37680_38031));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37685_38032 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37686_38033 = v.buf;
(self__.buf[(0)] = ((G__37685_38032[(0)]) / (G__37686_38033[(0)])));

(self__.buf[(1)] = ((G__37685_38032[(1)]) / (G__37686_38033[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37685_38032[(0)]) / v));

(self__.buf[(1)] = ((G__37685_38032[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37685_38032[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__37685_38032[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37694_38034 = typeof v1 === 'number';
var G__37695_38035 = typeof v2 === 'number';
if(((G__37694_38034)?G__37695_38035:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__37696_38036 = ((!(G__37694_38034))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37697_38037 = ((!(G__37695_38035))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37688_38038 = (cljs.core.truth_(G__37696_38036)?v1.buf:null);
var G__37689_38039 = (cljs.core.truth_(G__37697_38037)?v2.buf:null);
var G__37690_38040 = (cljs.core.truth_(G__37696_38036)?(G__37688_38038[(0)]):((G__37694_38034)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__37691_38041 = (cljs.core.truth_(G__37696_38036)?(G__37688_38038[(1)]):((G__37694_38034)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__37692_38042 = (cljs.core.truth_(G__37697_38037)?(G__37689_38039[(0)]):((G__37695_38035)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37693_38043 = (cljs.core.truth_(G__37697_38037)?(G__37689_38039[(1)]):((G__37695_38035)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__37690_38040) / G__37692_38042));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__37691_38041) / G__37693_38043));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37698_38044 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37699_38045 = v.buf;
(self__.buf[(0)] = ((G__37698_38044[(0)]) + (G__37699_38045[(0)])));

(self__.buf[(1)] = ((G__37698_38044[(1)]) + (G__37699_38045[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__37698_38044[(0)]) + v));

(self__.buf[(1)] = ((G__37698_38044[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__37698_38044[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__37698_38044[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37707_38046 = typeof v1 === 'number';
var G__37708_38047 = typeof v2 === 'number';
if(((G__37707_38046)?G__37708_38047:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__37709_38048 = ((!(G__37707_38046))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37710_38049 = ((!(G__37708_38047))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37701_38050 = (cljs.core.truth_(G__37709_38048)?v1.buf:null);
var G__37702_38051 = (cljs.core.truth_(G__37710_38049)?v2.buf:null);
var G__37703_38052 = (cljs.core.truth_(G__37709_38048)?(G__37701_38050[(0)]):((G__37707_38046)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__37704_38053 = (cljs.core.truth_(G__37709_38048)?(G__37701_38050[(1)]):((G__37707_38046)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__37705_38054 = (cljs.core.truth_(G__37710_38049)?(G__37702_38051[(0)]):((G__37708_38047)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37706_38055 = (cljs.core.truth_(G__37710_38049)?(G__37702_38051[(1)]):((G__37708_38047)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__37703_38052) + G__37705_38054));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__37704_38053) + G__37706_38055));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__37720_38056 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37721_38057 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37722_38058 = ((!(G__37720_38056))?typeof a === 'number':null);
var G__37723_38059 = ((!(G__37721_38057))?typeof b === 'number':null);
var G__37711_38060 = self__.buf;
var G__37712_38061 = ((G__37720_38056)?a.buf:null);
var G__37713_38062 = ((G__37721_38057)?b.buf:null);
var G__37714_38063 = (G__37711_38060[(0)]);
var G__37715_38064 = (G__37711_38060[(1)]);
var G__37716_38065 = ((G__37720_38056)?(G__37712_38061[(0)]):(cljs.core.truth_(G__37722_38058)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__37717_38066 = ((G__37720_38056)?(G__37712_38061[(1)]):(cljs.core.truth_(G__37722_38058)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__37718_38067 = ((G__37721_38057)?(G__37713_38062[(0)]):(cljs.core.truth_(G__37723_38059)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__37719_38068 = ((G__37721_38057)?(G__37713_38062[(1)]):(cljs.core.truth_(G__37723_38059)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__37714_38063 + G__37716_38065) * G__37718_38067));

(self__.buf[(1)] = ((G__37715_38064 + G__37717_38066) * G__37719_38068));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37724 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37725 = v.buf;
return (((G__37724[(0)]) * (G__37725[(1)])) - ((G__37724[(1)]) * (G__37725[(0)])));
} else {
return (((G__37724[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__37724[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec2 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37739 = self__.buf;
var G__37741 = (G__37739[(0)]);
var G__37742 = (G__37739[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37740 = v.buf;
var G__37743 = (G__37740[(0)]);
var G__37744 = (G__37740[(1)]);
var d = (((G__37741 * G__37743) + (G__37742 * G__37744)) * 2.0);
(b[(0)] = ((G__37743 * d) - G__37741));

(b[(1)] = ((G__37744 * d) - G__37742));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__37743 = cljs.core.nth.call(null,v,(0),0.0);
var G__37744 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__37741 * G__37743) + (G__37742 * G__37744)) * 2.0);
(b[(0)] = ((G__37743 * d) - G__37741));

(b[(1)] = ((G__37744 * d) - G__37742));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37745 = self__.buf;
var G__37747 = (G__37745[(0)]);
var G__37748 = (G__37745[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37746 = v.buf;
var G__37749 = (G__37746[(0)]);
var G__37750 = (G__37746[(1)]);
var dx = (G__37747 - G__37749);
var dy = (G__37748 - G__37750);
return ((dx * dx) + (dy * dy));
} else {
var G__37749 = cljs.core.nth.call(null,v,(0),0.0);
var G__37750 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__37747 - G__37749);
var dy = (G__37748 - G__37750);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__37751 = self__.buf;
var G__37752 = (G__37751[(0)]);
var G__37753 = (G__37751[(1)]);
(b[(0)] = ((G__37752 * c) - (G__37753 * s)));

(b[(1)] = ((G__37752 * s) + (G__37753 * c)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37754_38069 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37755_38070 = v.buf;
(dest__37494__auto__[(0)] = ((G__37754_38069[(0)]) * (G__37755_38070[(0)])));

(dest__37494__auto__[(1)] = ((G__37754_38069[(1)]) * (G__37755_38070[(1)])));
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = ((G__37754_38069[(0)]) * v));

(dest__37494__auto__[(1)] = ((G__37754_38069[(1)]) * v));
} else {
(dest__37494__auto__[(0)] = ((G__37754_38069[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__37494__auto__[(1)] = ((G__37754_38069[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__24818__auto__ = self__._hash;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__37756 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37757 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__37756[(0)]),(G__37757[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__37756[(1)]),(G__37757[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__37756[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__37756[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__37758 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37759 = v.buf;
return (((G__37758[(0)]) * (G__37759[(0)])) + ((G__37758[(1)]) * (G__37759[(1)])));
} else {
return (((G__37758[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__37758[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37760_38071 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37761_38072 = v.buf;
(dest__37494__auto__[(0)] = ((G__37760_38071[(0)]) + (G__37761_38072[(0)])));

(dest__37494__auto__[(1)] = ((G__37760_38071[(1)]) + (G__37761_38072[(1)])));
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = ((G__37760_38071[(0)]) + v));

(dest__37494__auto__[(1)] = ((G__37760_38071[(1)]) + v));
} else {
(dest__37494__auto__[(0)] = ((G__37760_38071[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__37494__auto__[(1)] = ((G__37760_38071[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37762_38073 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37763_38074 = v.buf;
(b[(0)] = (((G__37762_38073[(0)]) + (G__37763_38074[(0)])) * 0.5));

(b[(1)] = (((G__37762_38073[(1)]) + (G__37763_38074[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__37762_38073[(0)]) + v) * 0.5));

(b[(1)] = (((G__37762_38073[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__37762_38073[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__37762_38073[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37773_38075 = (v instanceof thi.ng.geom.vector.Vec2);
var G__37774_38076 = (t instanceof thi.ng.geom.vector.Vec2);
var G__37775_38077 = ((!(G__37773_38075))?typeof v === 'number':null);
var G__37776_38078 = ((!(G__37774_38076))?typeof t === 'number':null);
var G__37764_38079 = self__.buf;
var G__37765_38080 = ((G__37773_38075)?v.buf:null);
var G__37766_38081 = ((G__37774_38076)?t.buf:null);
var G__37767_38082 = (G__37764_38079[(0)]);
var G__37768_38083 = (G__37764_38079[(1)]);
var G__37769_38084 = ((G__37773_38075)?(G__37765_38080[(0)]):(cljs.core.truth_(G__37775_38077)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__37770_38085 = ((G__37773_38075)?(G__37765_38080[(1)]):(cljs.core.truth_(G__37775_38077)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__37771_38086 = ((G__37774_38076)?(G__37766_38081[(0)]):(cljs.core.truth_(G__37776_38078)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__37772_38087 = ((G__37774_38076)?(G__37766_38081[(1)]):(cljs.core.truth_(G__37776_38078)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = (((G__37769_38084 - G__37767_38082) * G__37771_38086) + G__37767_38082));

(b[(1)] = (((G__37770_38085 - G__37768_38083) * G__37772_38087) + G__37768_38083));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__37786_38088 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37787_38089 = (c instanceof thi.ng.geom.vector.Vec2);
var G__37788_38090 = ((!(G__37786_38088))?typeof b === 'number':null);
var G__37789_38091 = ((!(G__37787_38089))?typeof c === 'number':null);
var G__37777_38092 = self__.buf;
var G__37778_38093 = ((G__37786_38088)?b.buf:null);
var G__37779_38094 = ((G__37787_38089)?c.buf:null);
var G__37780_38095 = (G__37777_38092[(0)]);
var G__37781_38096 = (G__37777_38092[(1)]);
var G__37782_38097 = ((G__37786_38088)?(G__37778_38093[(0)]):(cljs.core.truth_(G__37788_38090)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__37783_38098 = ((G__37786_38088)?(G__37778_38093[(1)]):(cljs.core.truth_(G__37788_38090)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__37784_38099 = ((G__37787_38089)?(G__37779_38094[(0)]):(cljs.core.truth_(G__37789_38091)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__37785_38100 = ((G__37787_38089)?(G__37779_38094[(1)]):(cljs.core.truth_(G__37789_38091)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_38101 = (((G__37782_38097 - G__37780_38095) * u) + G__37780_38095);
var y1_38102 = (((G__37783_38098 - G__37781_38096) * u) + G__37781_38096);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__37784_38099) * u) + G__37784_38099) - x1_38101) * v) + x1_38101));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__37785_38100) * u) + G__37785_38100) - y1_38102) * v) + y1_38102));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37799_38103 = (v instanceof thi.ng.geom.vector.Vec2);
var G__37800_38104 = (t instanceof thi.ng.geom.vector.Vec2);
var G__37801_38105 = ((!(G__37799_38103))?typeof v === 'number':null);
var G__37802_38106 = ((!(G__37800_38104))?typeof t === 'number':null);
var G__37790_38107 = self__.buf;
var G__37791_38108 = ((G__37799_38103)?v.buf:null);
var G__37792_38109 = ((G__37800_38104)?t.buf:null);
var G__37793_38110 = (G__37790_38107[(0)]);
var G__37794_38111 = (G__37790_38107[(1)]);
var G__37795_38112 = ((G__37799_38103)?(G__37791_38108[(0)]):(cljs.core.truth_(G__37801_38105)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__37796_38113 = ((G__37799_38103)?(G__37791_38108[(1)]):(cljs.core.truth_(G__37801_38105)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__37797_38114 = ((G__37800_38104)?(G__37792_38109[(0)]):(cljs.core.truth_(G__37802_38106)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__37798_38115 = ((G__37800_38104)?(G__37792_38109[(1)]):(cljs.core.truth_(G__37802_38106)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = f.call(null,G__37793_38110,G__37795_38112,G__37797_38114));

(b[(1)] = f.call(null,G__37794_38111,G__37796_38113,G__37798_38115));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37803_38116 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__37804_38117 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__37804_38117[(0)]),(G__37803_38116[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__37804_38117[(1)]),(G__37803_38116[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__37803_38116[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__37803_38116[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__37803_38116[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__37803_38116[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__37814_38118 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__37815_38119 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__37816_38120 = ((!(G__37814_38118))?typeof e1 === 'number':null);
var G__37817_38121 = ((!(G__37815_38119))?typeof e2 === 'number':null);
var G__37805_38122 = self__.buf;
var G__37806_38123 = ((G__37814_38118)?e1.buf:null);
var G__37807_38124 = ((G__37815_38119)?e2.buf:null);
var G__37808_38125 = (G__37805_38122[(0)]);
var G__37809_38126 = (G__37805_38122[(1)]);
var G__37810_38127 = ((G__37814_38118)?(G__37806_38123[(0)]):(cljs.core.truth_(G__37816_38120)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__37811_38128 = ((G__37814_38118)?(G__37806_38123[(1)]):(cljs.core.truth_(G__37816_38120)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__37812_38129 = ((G__37815_38119)?(G__37807_38124[(0)]):(cljs.core.truth_(G__37817_38121)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__37813_38130 = ((G__37815_38119)?(G__37807_38124[(1)]):(cljs.core.truth_(G__37817_38121)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__37810_38127,G__37812_38129,G__37808_38125));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__37810_38127,G__37813_38130,G__37809_38126));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37818_38131 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37819_38132 = v.buf;
(dest__37494__auto__[(0)] = (function (){var a__32045__auto__ = (G__37818_38131[(0)]);
var b__32046__auto__ = (G__37819_38132[(0)]);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37494__auto__[(1)] = (function (){var a__32045__auto__ = (G__37818_38131[(1)]);
var b__32046__auto__ = (G__37819_38132[(1)]);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = (function (){var a__32045__auto__ = (G__37818_38131[(0)]);
var b__32046__auto__ = v;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37494__auto__[(1)] = (function (){var a__32045__auto__ = (G__37818_38131[(1)]);
var b__32046__auto__ = v;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());
} else {
(dest__37494__auto__[(0)] = (function (){var a__32045__auto__ = (G__37818_38131[(0)]);
var b__32046__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37494__auto__[(1)] = (function (){var a__32045__auto__ = (G__37818_38131[(1)]);
var b__32046__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__37505__auto__ = (new Float32Array((2)));
var G__37829_38133 = (v instanceof thi.ng.geom.vector.Vec2);
var G__37830_38134 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__37831_38135 = ((!(G__37829_38133))?typeof v === 'number':null);
var G__37832_38136 = ((!(G__37830_38134))?typeof v2 === 'number':null);
var G__37820_38137 = self__.buf;
var G__37821_38138 = ((G__37829_38133)?v.buf:null);
var G__37822_38139 = ((G__37830_38134)?v2.buf:null);
var G__37823_38140 = (G__37820_38137[(0)]);
var G__37824_38141 = (G__37820_38137[(1)]);
var G__37825_38142 = ((G__37829_38133)?(G__37821_38138[(0)]):(cljs.core.truth_(G__37831_38135)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__37826_38143 = ((G__37829_38133)?(G__37821_38138[(1)]):(cljs.core.truth_(G__37831_38135)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__37827_38144 = ((G__37830_38134)?(G__37822_38139[(0)]):(cljs.core.truth_(G__37832_38136)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37828_38145 = ((G__37830_38134)?(G__37822_38139[(1)]):(cljs.core.truth_(G__37832_38136)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__37505__auto__[(0)] = (function (){var a__32045__auto__ = (function (){var a__32045__auto__ = G__37823_38140;
var b__32046__auto__ = G__37825_38142;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})();
var b__32046__auto__ = G__37827_38144;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37505__auto__[(1)] = (function (){var a__32045__auto__ = (function (){var a__32045__auto__ = G__37824_38141;
var b__32046__auto__ = G__37826_38143;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})();
var b__32046__auto__ = G__37828_38145;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__37505__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37833_38146 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37834_38147 = v.buf;
(dest__37494__auto__[(0)] = (function (){var a__32052__auto__ = (G__37833_38146[(0)]);
var b__32053__auto__ = (G__37834_38147[(0)]);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37494__auto__[(1)] = (function (){var a__32052__auto__ = (G__37833_38146[(1)]);
var b__32053__auto__ = (G__37834_38147[(1)]);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = (function (){var a__32052__auto__ = (G__37833_38146[(0)]);
var b__32053__auto__ = v;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37494__auto__[(1)] = (function (){var a__32052__auto__ = (G__37833_38146[(1)]);
var b__32053__auto__ = v;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());
} else {
(dest__37494__auto__[(0)] = (function (){var a__32052__auto__ = (G__37833_38146[(0)]);
var b__32053__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37494__auto__[(1)] = (function (){var a__32052__auto__ = (G__37833_38146[(1)]);
var b__32053__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__37505__auto__ = (new Float32Array((2)));
var G__37844_38148 = (v instanceof thi.ng.geom.vector.Vec2);
var G__37845_38149 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__37846_38150 = ((!(G__37844_38148))?typeof v === 'number':null);
var G__37847_38151 = ((!(G__37845_38149))?typeof v2 === 'number':null);
var G__37835_38152 = self__.buf;
var G__37836_38153 = ((G__37844_38148)?v.buf:null);
var G__37837_38154 = ((G__37845_38149)?v2.buf:null);
var G__37838_38155 = (G__37835_38152[(0)]);
var G__37839_38156 = (G__37835_38152[(1)]);
var G__37840_38157 = ((G__37844_38148)?(G__37836_38153[(0)]):(cljs.core.truth_(G__37846_38150)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__37841_38158 = ((G__37844_38148)?(G__37836_38153[(1)]):(cljs.core.truth_(G__37846_38150)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__37842_38159 = ((G__37845_38149)?(G__37837_38154[(0)]):(cljs.core.truth_(G__37847_38151)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37843_38160 = ((G__37845_38149)?(G__37837_38154[(1)]):(cljs.core.truth_(G__37847_38151)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__37505__auto__[(0)] = (function (){var a__32052__auto__ = (function (){var a__32052__auto__ = G__37838_38155;
var b__32053__auto__ = G__37840_38157;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})();
var b__32053__auto__ = G__37842_38159;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37505__auto__[(1)] = (function (){var a__32052__auto__ = (function (){var a__32052__auto__ = G__37839_38156;
var b__32053__auto__ = G__37841_38158;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})();
var b__32053__auto__ = G__37843_38160;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__37505__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.call = (function() {
var G__38161 = null;
var G__38161__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__38161__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__38161 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__38161__2.call(this,self__,k);
case 3:
return G__38161__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38161.cljs$core$IFn$_invoke$arity$2 = G__38161__2;
G__38161.cljs$core$IFn$_invoke$arity$3 = G__38161__3;
return G__38161;
})()
;

thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args37619){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args37619)));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.math.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37848 = self__.buf;
var G__37849 = (G__37848[(0)]);
var G__37850 = (G__37848[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__37849 * Math.cos(G__37850)));

(b[(1)] = (G__37849 * Math.sin(G__37850)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37851 = self__.buf;
var G__37852 = (G__37851[(0)]);
var G__37853 = (G__37851[(1)]);
var l = Math.sqrt(((G__37852 * G__37852) + (G__37853 * G__37853)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__37852 / l));

(b[(1)] = (G__37853 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__37854 = self__.buf;
var G__37855 = (G__37854[(0)]);
var G__37856 = (G__37854[(1)]);
var l = Math.sqrt(((G__37855 * G__37855) + (G__37856 * G__37856)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__37855 * l__$1));

(b[(1)] = (G__37856 * l__$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37857 = self__.buf;
var G__37858 = (G__37857[(0)]);
var G__37859 = (G__37857[(1)]);
return Math.sqrt(((G__37858 * G__37858) + (G__37859 * G__37859)));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__37860 = self__.buf;
var G__37861 = (G__37860[(0)]);
var G__37862 = (G__37860[(1)]);
return ((G__37861 * G__37861) + (G__37862 * G__37862));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = true;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37505__auto__ = (new Float32Array((2)));
var G__37872_38162 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37873_38163 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37874_38164 = ((!(G__37872_38162))?typeof a === 'number':null);
var G__37875_38165 = ((!(G__37873_38163))?typeof b === 'number':null);
var G__37863_38166 = self__.buf;
var G__37864_38167 = ((G__37872_38162)?a.buf:null);
var G__37865_38168 = ((G__37873_38163)?b.buf:null);
var G__37866_38169 = (G__37863_38166[(0)]);
var G__37867_38170 = (G__37863_38166[(1)]);
var G__37868_38171 = ((G__37872_38162)?(G__37864_38167[(0)]):(cljs.core.truth_(G__37874_38164)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__37869_38172 = ((G__37872_38162)?(G__37864_38167[(1)]):(cljs.core.truth_(G__37874_38164)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__37870_38173 = ((G__37873_38163)?(G__37865_38168[(0)]):(cljs.core.truth_(G__37875_38165)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__37871_38174 = ((G__37873_38163)?(G__37865_38168[(1)]):(cljs.core.truth_(G__37875_38165)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__37505__auto__[(0)] = ((G__37866_38169 * G__37868_38171) - G__37870_38173));

(dest__37505__auto__[(1)] = ((G__37867_38170 * G__37869_38172) - G__37871_38174));

return (new thi.ng.geom.vector.Vec2(dest__37505__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37876_38175 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37877_38176 = v.buf;
(dest__37494__auto__[(0)] = ((G__37876_38175[(0)]) * (G__37877_38176[(0)])));

(dest__37494__auto__[(1)] = ((G__37876_38175[(1)]) * (G__37877_38176[(1)])));
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = ((G__37876_38175[(0)]) * v));

(dest__37494__auto__[(1)] = ((G__37876_38175[(1)]) * v));
} else {
(dest__37494__auto__[(0)] = ((G__37876_38175[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__37494__auto__[(1)] = ((G__37876_38175[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37878 = self__.buf;
var G__37881 = (new Float32Array((2)));
var G__37882 = (G__37878[(0)]);
var G__37883 = (G__37878[(1)]);
var G__37888 = typeof v1 === 'number';
var G__37889 = typeof v2 === 'number';
if(((G__37888)?G__37889:false)){
(G__37881[(0)] = (G__37882 * v1));

(G__37881[(1)] = (G__37883 * v2));
} else {
var G__37890_38177 = ((!(G__37888))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37891_38178 = ((!(G__37889))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37879_38179 = (cljs.core.truth_(G__37890_38177)?v1.buf:null);
var G__37880_38180 = (cljs.core.truth_(G__37891_38178)?v2.buf:null);
var G__37884_38181 = (cljs.core.truth_(G__37890_38177)?(G__37879_38179[(0)]):((G__37888)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__37885_38182 = (cljs.core.truth_(G__37890_38177)?(G__37879_38179[(1)]):((G__37888)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__37886_38183 = (cljs.core.truth_(G__37891_38178)?(G__37880_38180[(0)]):((G__37889)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__37887_38184 = (cljs.core.truth_(G__37891_38178)?(G__37880_38180[(1)]):((G__37889)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__37881[(0)] = ((G__37882 * G__37884_38181) * G__37886_38183));

(G__37881[(1)] = ((G__37883 * G__37885_38182) * G__37887_38184));
}

return (new thi.ng.geom.vector.Vec2(G__37881,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__37468__auto__ = (new Float32Array((2)));
var G__37892_38185 = self__.buf;
(dest__37468__auto__[(0)] = (- (G__37892_38185[(0)])));

(dest__37468__auto__[(1)] = (- (G__37892_38185[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__37468__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37893_38186 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37894_38187 = v.buf;
(dest__37494__auto__[(0)] = ((G__37893_38186[(0)]) - (G__37894_38187[(0)])));

(dest__37494__auto__[(1)] = ((G__37893_38186[(1)]) - (G__37894_38187[(1)])));
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = ((G__37893_38186[(0)]) - v));

(dest__37494__auto__[(1)] = ((G__37893_38186[(1)]) - v));
} else {
(dest__37494__auto__[(0)] = ((G__37893_38186[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__37494__auto__[(1)] = ((G__37893_38186[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37895 = self__.buf;
var G__37898 = (new Float32Array((2)));
var G__37899 = (G__37895[(0)]);
var G__37900 = (G__37895[(1)]);
var G__37905 = typeof v1 === 'number';
var G__37906 = typeof v2 === 'number';
if(((G__37905)?G__37906:false)){
(G__37898[(0)] = (G__37899 - v1));

(G__37898[(1)] = (G__37900 - v2));
} else {
var G__37907_38188 = ((!(G__37905))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37908_38189 = ((!(G__37906))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37896_38190 = (cljs.core.truth_(G__37907_38188)?v1.buf:null);
var G__37897_38191 = (cljs.core.truth_(G__37908_38189)?v2.buf:null);
var G__37901_38192 = (cljs.core.truth_(G__37907_38188)?(G__37896_38190[(0)]):((G__37905)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__37902_38193 = (cljs.core.truth_(G__37907_38188)?(G__37896_38190[(1)]):((G__37905)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__37903_38194 = (cljs.core.truth_(G__37908_38189)?(G__37897_38191[(0)]):((G__37906)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37904_38195 = (cljs.core.truth_(G__37908_38189)?(G__37897_38191[(1)]):((G__37906)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__37898[(0)] = ((G__37899 - G__37901_38192) - G__37903_38194));

(G__37898[(1)] = ((G__37900 - G__37902_38193) - G__37904_38195));
}

return (new thi.ng.geom.vector.Vec2(G__37898,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37505__auto__ = (new Float32Array((2)));
var G__37918_38196 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37919_38197 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37920_38198 = ((!(G__37918_38196))?typeof a === 'number':null);
var G__37921_38199 = ((!(G__37919_38197))?typeof b === 'number':null);
var G__37909_38200 = self__.buf;
var G__37910_38201 = ((G__37918_38196)?a.buf:null);
var G__37911_38202 = ((G__37919_38197)?b.buf:null);
var G__37912_38203 = (G__37909_38200[(0)]);
var G__37913_38204 = (G__37909_38200[(1)]);
var G__37914_38205 = ((G__37918_38196)?(G__37910_38201[(0)]):(cljs.core.truth_(G__37920_38198)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__37915_38206 = ((G__37918_38196)?(G__37910_38201[(1)]):(cljs.core.truth_(G__37920_38198)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__37916_38207 = ((G__37919_38197)?(G__37911_38202[(0)]):(cljs.core.truth_(G__37921_38199)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__37917_38208 = ((G__37919_38197)?(G__37911_38202[(1)]):(cljs.core.truth_(G__37921_38199)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__37505__auto__[(0)] = ((G__37912_38203 * G__37914_38205) + G__37916_38207));

(dest__37505__auto__[(1)] = ((G__37913_38204 * G__37915_38206) + G__37917_38208));

return (new thi.ng.geom.vector.Vec2(dest__37505__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37505__auto__ = (new Float32Array((2)));
var G__37931_38209 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37932_38210 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37933_38211 = ((!(G__37931_38209))?typeof a === 'number':null);
var G__37934_38212 = ((!(G__37932_38210))?typeof b === 'number':null);
var G__37922_38213 = self__.buf;
var G__37923_38214 = ((G__37931_38209)?a.buf:null);
var G__37924_38215 = ((G__37932_38210)?b.buf:null);
var G__37925_38216 = (G__37922_38213[(0)]);
var G__37926_38217 = (G__37922_38213[(1)]);
var G__37927_38218 = ((G__37931_38209)?(G__37923_38214[(0)]):(cljs.core.truth_(G__37933_38211)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__37928_38219 = ((G__37931_38209)?(G__37923_38214[(1)]):(cljs.core.truth_(G__37933_38211)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__37929_38220 = ((G__37932_38210)?(G__37924_38215[(0)]):(cljs.core.truth_(G__37934_38212)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__37930_38221 = ((G__37932_38210)?(G__37924_38215[(1)]):(cljs.core.truth_(G__37934_38212)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__37505__auto__[(0)] = ((G__37925_38216 + G__37927_38218) * G__37929_38220));

(dest__37505__auto__[(1)] = ((G__37926_38217 + G__37928_38219) * G__37930_38221));

return (new thi.ng.geom.vector.Vec2(dest__37505__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__37468__auto__ = (new Float32Array((2)));
var G__37935_38222 = self__.buf;
(dest__37468__auto__[(0)] = ((1) / (G__37935_38222[(0)])));

(dest__37468__auto__[(1)] = ((1) / (G__37935_38222[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__37468__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37936_38223 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37937_38224 = v.buf;
(dest__37494__auto__[(0)] = ((G__37936_38223[(0)]) / (G__37937_38224[(0)])));

(dest__37494__auto__[(1)] = ((G__37936_38223[(1)]) / (G__37937_38224[(1)])));
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = ((G__37936_38223[(0)]) / v));

(dest__37494__auto__[(1)] = ((G__37936_38223[(1)]) / v));
} else {
(dest__37494__auto__[(0)] = ((G__37936_38223[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__37494__auto__[(1)] = ((G__37936_38223[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37938 = self__.buf;
var G__37941 = (new Float32Array((2)));
var G__37942 = (G__37938[(0)]);
var G__37943 = (G__37938[(1)]);
var G__37948 = typeof v1 === 'number';
var G__37949 = typeof v2 === 'number';
if(((G__37948)?G__37949:false)){
(G__37941[(0)] = (G__37942 / v1));

(G__37941[(1)] = (G__37943 / v2));
} else {
var G__37950_38225 = ((!(G__37948))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37951_38226 = ((!(G__37949))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37939_38227 = (cljs.core.truth_(G__37950_38225)?v1.buf:null);
var G__37940_38228 = (cljs.core.truth_(G__37951_38226)?v2.buf:null);
var G__37944_38229 = (cljs.core.truth_(G__37950_38225)?(G__37939_38227[(0)]):((G__37948)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__37945_38230 = (cljs.core.truth_(G__37950_38225)?(G__37939_38227[(1)]):((G__37948)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__37946_38231 = (cljs.core.truth_(G__37951_38226)?(G__37940_38228[(0)]):((G__37949)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37947_38232 = (cljs.core.truth_(G__37951_38226)?(G__37940_38228[(1)]):((G__37949)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__37941[(0)] = ((G__37942 / G__37944_38229) / G__37946_38231));

(G__37941[(1)] = ((G__37943 / G__37945_38230) / G__37947_38232));
}

return (new thi.ng.geom.vector.Vec2(G__37941,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37494__auto__ = (new Float32Array((2)));
var G__37952_38233 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__37953_38234 = v.buf;
(dest__37494__auto__[(0)] = ((G__37952_38233[(0)]) + (G__37953_38234[(0)])));

(dest__37494__auto__[(1)] = ((G__37952_38233[(1)]) + (G__37953_38234[(1)])));
} else {
if(typeof v === 'number'){
(dest__37494__auto__[(0)] = ((G__37952_38233[(0)]) + v));

(dest__37494__auto__[(1)] = ((G__37952_38233[(1)]) + v));
} else {
(dest__37494__auto__[(0)] = ((G__37952_38233[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__37494__auto__[(1)] = ((G__37952_38233[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__37494__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__37954 = self__.buf;
var G__37957 = (new Float32Array((2)));
var G__37958 = (G__37954[(0)]);
var G__37959 = (G__37954[(1)]);
var G__37964 = typeof v1 === 'number';
var G__37965 = typeof v2 === 'number';
if(((G__37964)?G__37965:false)){
(G__37957[(0)] = (G__37958 + v1));

(G__37957[(1)] = (G__37959 + v2));
} else {
var G__37966_38235 = ((!(G__37964))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__37967_38236 = ((!(G__37965))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__37955_38237 = (cljs.core.truth_(G__37966_38235)?v1.buf:null);
var G__37956_38238 = (cljs.core.truth_(G__37967_38236)?v2.buf:null);
var G__37960_38239 = (cljs.core.truth_(G__37966_38235)?(G__37955_38237[(0)]):((G__37964)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__37961_38240 = (cljs.core.truth_(G__37966_38235)?(G__37955_38237[(1)]):((G__37964)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__37962_38241 = (cljs.core.truth_(G__37967_38236)?(G__37956_38238[(0)]):((G__37965)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__37963_38242 = (cljs.core.truth_(G__37967_38236)?(G__37956_38238[(1)]):((G__37965)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__37957[(0)] = ((G__37958 + G__37960_38239) + G__37962_38241));

(G__37957[(1)] = ((G__37959 + G__37961_38240) + G__37963_38242));
}

return (new thi.ng.geom.vector.Vec2(G__37957,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__37468__auto__ = (new Float32Array((2)));
var G__37968_38243 = self__.buf;
(dest__37468__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__37968_38243[(0)])));

(dest__37468__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__37968_38243[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__37468__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37505__auto__ = (new Float32Array((2)));
var G__37735_38244 = (a instanceof thi.ng.geom.vector.Vec2);
var G__37736_38245 = (b instanceof thi.ng.geom.vector.Vec2);
var G__37737_38246 = ((!(G__37735_38244))?typeof a === 'number':null);
var G__37738_38247 = ((!(G__37736_38245))?typeof b === 'number':null);
var G__37726_38248 = self__.buf;
var G__37727_38249 = ((G__37735_38244)?a.buf:null);
var G__37728_38250 = ((G__37736_38245)?b.buf:null);
var G__37729_38251 = (G__37726_38248[(0)]);
var G__37730_38252 = (G__37726_38248[(1)]);
var G__37731_38253 = ((G__37735_38244)?(G__37727_38249[(0)]):(cljs.core.truth_(G__37737_38246)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__37732_38254 = ((G__37735_38244)?(G__37727_38249[(1)]):(cljs.core.truth_(G__37737_38246)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__37733_38255 = ((G__37736_38245)?(G__37728_38250[(0)]):(cljs.core.truth_(G__37738_38247)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__37734_38256 = ((G__37736_38245)?(G__37728_38250[(1)]):(cljs.core.truth_(G__37738_38247)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__37505__auto__[(0)] = ((G__37729_38251 - G__37731_38253) * G__37733_38255));

(dest__37505__auto__[(1)] = ((G__37730_38252 - G__37732_38254) * G__37734_38256));

return (new thi.ng.geom.vector.Vec2(dest__37505__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2";

thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"thi.ng.geom.vector/Vec2");
});

thi.ng.geom.vector.__GT_Vec2 = (function thi$ng$geom$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__38258_38709 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38259_38710 = v.buf;
(self__.buf[(0)] = ((G__38258_38709[(0)]) - (G__38259_38710[(0)])));

(self__.buf[(1)] = ((G__38258_38709[(1)]) - (G__38259_38710[(1)])));

(self__.buf[(2)] = ((G__38258_38709[(2)]) - (G__38259_38710[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__38258_38709[(0)]) - v));

(self__.buf[(1)] = ((G__38258_38709[(1)]) - v));

(self__.buf[(2)] = ((G__38258_38709[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__38258_38709[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__38258_38709[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__38258_38709[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__38272_38711 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38273_38712 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38274_38713 = ((!(G__38272_38711))?typeof v1 === 'number':null);
var G__38275_38714 = ((!(G__38273_38712))?typeof v2 === 'number':null);
var G__38260_38715 = self__.buf;
var G__38261_38716 = ((G__38272_38711)?v1.buf:null);
var G__38262_38717 = ((G__38273_38712)?v2.buf:null);
var G__38263_38718 = (G__38260_38715[(0)]);
var G__38264_38719 = (G__38260_38715[(1)]);
var G__38265_38720 = (G__38260_38715[(2)]);
var G__38266_38721 = ((G__38272_38711)?(G__38261_38716[(0)]):(cljs.core.truth_(G__38274_38713)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38267_38722 = ((G__38272_38711)?(G__38261_38716[(1)]):(cljs.core.truth_(G__38274_38713)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38268_38723 = ((G__38272_38711)?(G__38261_38716[(2)]):(cljs.core.truth_(G__38274_38713)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38269_38724 = ((G__38273_38712)?(G__38262_38717[(0)]):(cljs.core.truth_(G__38275_38714)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38270_38725 = ((G__38273_38712)?(G__38262_38717[(1)]):(cljs.core.truth_(G__38275_38714)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38271_38726 = ((G__38273_38712)?(G__38262_38717[(2)]):(cljs.core.truth_(G__38275_38714)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__38263_38718 - G__38266_38721) - G__38269_38724));

(self__.buf[(1)] = ((G__38264_38719 - G__38267_38722) - G__38270_38725));

(self__.buf[(2)] = ((G__38265_38720 - G__38268_38723) - G__38271_38726));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__38276_38727 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38277_38728 = v.buf;
(self__.buf[(0)] = ((G__38276_38727[(0)]) * (G__38277_38728[(0)])));

(self__.buf[(1)] = ((G__38276_38727[(1)]) * (G__38277_38728[(1)])));

(self__.buf[(2)] = ((G__38276_38727[(2)]) * (G__38277_38728[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__38276_38727[(0)]) * v));

(self__.buf[(1)] = ((G__38276_38727[(1)]) * v));

(self__.buf[(2)] = ((G__38276_38727[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__38276_38727[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__38276_38727[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__38276_38727[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__38290_38729 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38291_38730 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38292_38731 = ((!(G__38290_38729))?typeof v1 === 'number':null);
var G__38293_38732 = ((!(G__38291_38730))?typeof v2 === 'number':null);
var G__38278_38733 = self__.buf;
var G__38279_38734 = ((G__38290_38729)?v1.buf:null);
var G__38280_38735 = ((G__38291_38730)?v2.buf:null);
var G__38281_38736 = (G__38278_38733[(0)]);
var G__38282_38737 = (G__38278_38733[(1)]);
var G__38283_38738 = (G__38278_38733[(2)]);
var G__38284_38739 = ((G__38290_38729)?(G__38279_38734[(0)]):(cljs.core.truth_(G__38292_38731)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38285_38740 = ((G__38290_38729)?(G__38279_38734[(1)]):(cljs.core.truth_(G__38292_38731)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38286_38741 = ((G__38290_38729)?(G__38279_38734[(2)]):(cljs.core.truth_(G__38292_38731)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38287_38742 = ((G__38291_38730)?(G__38280_38735[(0)]):(cljs.core.truth_(G__38293_38732)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38288_38743 = ((G__38291_38730)?(G__38280_38735[(1)]):(cljs.core.truth_(G__38293_38732)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38289_38744 = ((G__38291_38730)?(G__38280_38735[(2)]):(cljs.core.truth_(G__38293_38732)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__38281_38736 * G__38284_38739) * G__38287_38742));

(self__.buf[(1)] = ((G__38282_38737 * G__38285_38740) * G__38288_38743));

(self__.buf[(2)] = ((G__38283_38738 * G__38286_38741) * G__38289_38744));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__38306_38745 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38307_38746 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38308_38747 = ((!(G__38306_38745))?typeof a === 'number':null);
var G__38309_38748 = ((!(G__38307_38746))?typeof b === 'number':null);
var G__38294_38749 = self__.buf;
var G__38295_38750 = ((G__38306_38745)?a.buf:null);
var G__38296_38751 = ((G__38307_38746)?b.buf:null);
var G__38297_38752 = (G__38294_38749[(0)]);
var G__38298_38753 = (G__38294_38749[(1)]);
var G__38299_38754 = (G__38294_38749[(2)]);
var G__38300_38755 = ((G__38306_38745)?(G__38295_38750[(0)]):(cljs.core.truth_(G__38308_38747)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__38301_38756 = ((G__38306_38745)?(G__38295_38750[(1)]):(cljs.core.truth_(G__38308_38747)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__38302_38757 = ((G__38306_38745)?(G__38295_38750[(2)]):(cljs.core.truth_(G__38308_38747)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__38303_38758 = ((G__38307_38746)?(G__38296_38751[(0)]):(cljs.core.truth_(G__38309_38748)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__38304_38759 = ((G__38307_38746)?(G__38296_38751[(1)]):(cljs.core.truth_(G__38309_38748)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__38305_38760 = ((G__38307_38746)?(G__38296_38751[(2)]):(cljs.core.truth_(G__38309_38748)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__38297_38752 - G__38300_38755) * G__38303_38758));

(self__.buf[(1)] = ((G__38298_38753 - G__38301_38756) * G__38304_38759));

(self__.buf[(2)] = ((G__38299_38754 - G__38302_38757) * G__38305_38760));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__38322_38761 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38323_38762 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38324_38763 = ((!(G__38322_38761))?typeof a === 'number':null);
var G__38325_38764 = ((!(G__38323_38762))?typeof b === 'number':null);
var G__38310_38765 = self__.buf;
var G__38311_38766 = ((G__38322_38761)?a.buf:null);
var G__38312_38767 = ((G__38323_38762)?b.buf:null);
var G__38313_38768 = (G__38310_38765[(0)]);
var G__38314_38769 = (G__38310_38765[(1)]);
var G__38315_38770 = (G__38310_38765[(2)]);
var G__38316_38771 = ((G__38322_38761)?(G__38311_38766[(0)]):(cljs.core.truth_(G__38324_38763)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__38317_38772 = ((G__38322_38761)?(G__38311_38766[(1)]):(cljs.core.truth_(G__38324_38763)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__38318_38773 = ((G__38322_38761)?(G__38311_38766[(2)]):(cljs.core.truth_(G__38324_38763)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__38319_38774 = ((G__38323_38762)?(G__38312_38767[(0)]):(cljs.core.truth_(G__38325_38764)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__38320_38775 = ((G__38323_38762)?(G__38312_38767[(1)]):(cljs.core.truth_(G__38325_38764)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__38321_38776 = ((G__38323_38762)?(G__38312_38767[(2)]):(cljs.core.truth_(G__38325_38764)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__38313_38768 * G__38316_38771) - G__38319_38774));

(self__.buf[(1)] = ((G__38314_38769 * G__38317_38772) - G__38320_38775));

(self__.buf[(2)] = ((G__38315_38770 * G__38318_38773) - G__38321_38776));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__38338_38777 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38339_38778 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38340_38779 = ((!(G__38338_38777))?typeof a === 'number':null);
var G__38341_38780 = ((!(G__38339_38778))?typeof b === 'number':null);
var G__38326_38781 = self__.buf;
var G__38327_38782 = ((G__38338_38777)?a.buf:null);
var G__38328_38783 = ((G__38339_38778)?b.buf:null);
var G__38329_38784 = (G__38326_38781[(0)]);
var G__38330_38785 = (G__38326_38781[(1)]);
var G__38331_38786 = (G__38326_38781[(2)]);
var G__38332_38787 = ((G__38338_38777)?(G__38327_38782[(0)]):(cljs.core.truth_(G__38340_38779)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__38333_38788 = ((G__38338_38777)?(G__38327_38782[(1)]):(cljs.core.truth_(G__38340_38779)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__38334_38789 = ((G__38338_38777)?(G__38327_38782[(2)]):(cljs.core.truth_(G__38340_38779)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__38335_38790 = ((G__38339_38778)?(G__38328_38783[(0)]):(cljs.core.truth_(G__38341_38780)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__38336_38791 = ((G__38339_38778)?(G__38328_38783[(1)]):(cljs.core.truth_(G__38341_38780)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__38337_38792 = ((G__38339_38778)?(G__38328_38783[(2)]):(cljs.core.truth_(G__38341_38780)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__38329_38784 * G__38332_38787) + G__38335_38790));

(self__.buf[(1)] = ((G__38330_38785 * G__38333_38788) + G__38336_38791));

(self__.buf[(2)] = ((G__38331_38786 * G__38334_38789) + G__38337_38792));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__38342_38793 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38343_38794 = v.buf;
(self__.buf[(0)] = ((G__38342_38793[(0)]) / (G__38343_38794[(0)])));

(self__.buf[(1)] = ((G__38342_38793[(1)]) / (G__38343_38794[(1)])));

(self__.buf[(2)] = ((G__38342_38793[(2)]) / (G__38343_38794[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__38342_38793[(0)]) / v));

(self__.buf[(1)] = ((G__38342_38793[(1)]) / v));

(self__.buf[(2)] = ((G__38342_38793[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__38342_38793[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__38342_38793[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__38342_38793[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__38356_38795 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38357_38796 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38358_38797 = ((!(G__38356_38795))?typeof v1 === 'number':null);
var G__38359_38798 = ((!(G__38357_38796))?typeof v2 === 'number':null);
var G__38344_38799 = self__.buf;
var G__38345_38800 = ((G__38356_38795)?v1.buf:null);
var G__38346_38801 = ((G__38357_38796)?v2.buf:null);
var G__38347_38802 = (G__38344_38799[(0)]);
var G__38348_38803 = (G__38344_38799[(1)]);
var G__38349_38804 = (G__38344_38799[(2)]);
var G__38350_38805 = ((G__38356_38795)?(G__38345_38800[(0)]):(cljs.core.truth_(G__38358_38797)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38351_38806 = ((G__38356_38795)?(G__38345_38800[(1)]):(cljs.core.truth_(G__38358_38797)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38352_38807 = ((G__38356_38795)?(G__38345_38800[(2)]):(cljs.core.truth_(G__38358_38797)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38353_38808 = ((G__38357_38796)?(G__38346_38801[(0)]):(cljs.core.truth_(G__38359_38798)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38354_38809 = ((G__38357_38796)?(G__38346_38801[(1)]):(cljs.core.truth_(G__38359_38798)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38355_38810 = ((G__38357_38796)?(G__38346_38801[(2)]):(cljs.core.truth_(G__38359_38798)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__38347_38802 / G__38350_38805) / G__38353_38808));

(self__.buf[(1)] = ((G__38348_38803 / G__38351_38806) / G__38354_38809));

(self__.buf[(2)] = ((G__38349_38804 / G__38352_38807) / G__38355_38810));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__38360_38811 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38361_38812 = v.buf;
(self__.buf[(0)] = ((G__38360_38811[(0)]) + (G__38361_38812[(0)])));

(self__.buf[(1)] = ((G__38360_38811[(1)]) + (G__38361_38812[(1)])));

(self__.buf[(2)] = ((G__38360_38811[(2)]) + (G__38361_38812[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__38360_38811[(0)]) + v));

(self__.buf[(1)] = ((G__38360_38811[(1)]) + v));

(self__.buf[(2)] = ((G__38360_38811[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__38360_38811[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__38360_38811[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__38360_38811[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__38374_38813 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38375_38814 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38376_38815 = ((!(G__38374_38813))?typeof v1 === 'number':null);
var G__38377_38816 = ((!(G__38375_38814))?typeof v2 === 'number':null);
var G__38362_38817 = self__.buf;
var G__38363_38818 = ((G__38374_38813)?v1.buf:null);
var G__38364_38819 = ((G__38375_38814)?v2.buf:null);
var G__38365_38820 = (G__38362_38817[(0)]);
var G__38366_38821 = (G__38362_38817[(1)]);
var G__38367_38822 = (G__38362_38817[(2)]);
var G__38368_38823 = ((G__38374_38813)?(G__38363_38818[(0)]):(cljs.core.truth_(G__38376_38815)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38369_38824 = ((G__38374_38813)?(G__38363_38818[(1)]):(cljs.core.truth_(G__38376_38815)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38370_38825 = ((G__38374_38813)?(G__38363_38818[(2)]):(cljs.core.truth_(G__38376_38815)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38371_38826 = ((G__38375_38814)?(G__38364_38819[(0)]):(cljs.core.truth_(G__38377_38816)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38372_38827 = ((G__38375_38814)?(G__38364_38819[(1)]):(cljs.core.truth_(G__38377_38816)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38373_38828 = ((G__38375_38814)?(G__38364_38819[(2)]):(cljs.core.truth_(G__38377_38816)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__38365_38820 + G__38368_38823) + G__38371_38826));

(self__.buf[(1)] = ((G__38366_38821 + G__38369_38824) + G__38372_38827));

(self__.buf[(2)] = ((G__38367_38822 + G__38370_38825) + G__38373_38828));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__38390_38829 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38391_38830 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38392_38831 = ((!(G__38390_38829))?typeof a === 'number':null);
var G__38393_38832 = ((!(G__38391_38830))?typeof b === 'number':null);
var G__38378_38833 = self__.buf;
var G__38379_38834 = ((G__38390_38829)?a.buf:null);
var G__38380_38835 = ((G__38391_38830)?b.buf:null);
var G__38381_38836 = (G__38378_38833[(0)]);
var G__38382_38837 = (G__38378_38833[(1)]);
var G__38383_38838 = (G__38378_38833[(2)]);
var G__38384_38839 = ((G__38390_38829)?(G__38379_38834[(0)]):(cljs.core.truth_(G__38392_38831)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__38385_38840 = ((G__38390_38829)?(G__38379_38834[(1)]):(cljs.core.truth_(G__38392_38831)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__38386_38841 = ((G__38390_38829)?(G__38379_38834[(2)]):(cljs.core.truth_(G__38392_38831)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__38387_38842 = ((G__38391_38830)?(G__38380_38835[(0)]):(cljs.core.truth_(G__38393_38832)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__38388_38843 = ((G__38391_38830)?(G__38380_38835[(1)]):(cljs.core.truth_(G__38393_38832)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__38389_38844 = ((G__38391_38830)?(G__38380_38835[(2)]):(cljs.core.truth_(G__38393_38832)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__38381_38836 + G__38384_38839) * G__38387_38842));

(self__.buf[(1)] = ((G__38382_38837 + G__38385_38840) * G__38388_38843));

(self__.buf[(2)] = ((G__38383_38838 + G__38386_38841) * G__38389_38844));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38394_38845 = self__.buf;
var G__38396_38846 = (G__38394_38845[(0)]);
var G__38397_38847 = (G__38394_38845[(1)]);
var G__38398_38848 = (G__38394_38845[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38395_38849 = v.buf;
var G__38399_38850 = (G__38395_38849[(0)]);
var G__38400_38851 = (G__38395_38849[(1)]);
var G__38401_38852 = (G__38395_38849[(2)]);
(b[(0)] = ((G__38397_38847 * G__38401_38852) - (G__38400_38851 * G__38398_38848)));

(b[(1)] = ((G__38398_38848 * G__38399_38850) - (G__38401_38852 * G__38396_38846)));

(b[(2)] = ((G__38396_38846 * G__38400_38851) - (G__38399_38850 * G__38397_38847)));
} else {
var G__38399_38853 = cljs.core.nth.call(null,v,(0),0.0);
var G__38400_38854 = cljs.core.nth.call(null,v,(1),0.0);
var G__38401_38855 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__38397_38847 * G__38401_38855) - (G__38400_38854 * G__38398_38848)));

(b[(1)] = ((G__38398_38848 * G__38399_38853) - (G__38401_38855 * G__38396_38846)));

(b[(2)] = ((G__38396_38846 * G__38400_38854) - (G__38399_38853 * G__38397_38847)));
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec3 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38418 = self__.buf;
var G__38420 = (G__38418[(0)]);
var G__38421 = (G__38418[(1)]);
var G__38422 = (G__38418[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38419 = v.buf;
var G__38423 = (G__38419[(0)]);
var G__38424 = (G__38419[(1)]);
var G__38425 = (G__38419[(2)]);
var d = ((((G__38420 * G__38423) + (G__38421 * G__38424)) + (G__38422 * G__38425)) * 2.0);
(b[(0)] = ((G__38423 * d) - G__38420));

(b[(1)] = ((G__38424 * d) - G__38421));

(b[(2)] = ((G__38425 * d) - G__38422));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__38423 = cljs.core.nth.call(null,v,(0),0.0);
var G__38424 = cljs.core.nth.call(null,v,(1),0.0);
var G__38425 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__38420 * G__38423) + (G__38421 * G__38424)) + (G__38422 * G__38425)) * 2.0);
(b[(0)] = ((G__38423 * d) - G__38420));

(b[(1)] = ((G__38424 * d) - G__38421));

(b[(2)] = ((G__38425 * d) - G__38422));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__38426 = self__.buf;
var G__38428 = (G__38426[(0)]);
var G__38429 = (G__38426[(1)]);
var G__38430 = (G__38426[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38427 = v.buf;
var G__38431 = (G__38427[(0)]);
var G__38432 = (G__38427[(1)]);
var G__38433 = (G__38427[(2)]);
var dx = (G__38428 - G__38431);
var dy = (G__38429 - G__38432);
var dz = (G__38430 - G__38433);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__38431 = cljs.core.nth.call(null,v,(0),0.0);
var G__38432 = cljs.core.nth.call(null,v,(1),0.0);
var G__38433 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__38428 - G__38431);
var dy = (G__38429 - G__38432);
var dz = (G__38430 - G__38433);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38434_38856 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38435_38857 = v.buf;
(dest__37589__auto__[(0)] = ((G__38434_38856[(0)]) * (G__38435_38857[(0)])));

(dest__37589__auto__[(1)] = ((G__38434_38856[(1)]) * (G__38435_38857[(1)])));

(dest__37589__auto__[(2)] = ((G__38434_38856[(2)]) * (G__38435_38857[(2)])));
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = ((G__38434_38856[(0)]) * v));

(dest__37589__auto__[(1)] = ((G__38434_38856[(1)]) * v));

(dest__37589__auto__[(2)] = ((G__38434_38856[(2)]) * v));
} else {
(dest__37589__auto__[(0)] = ((G__38434_38856[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__37589__auto__[(1)] = ((G__38434_38856[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__37589__auto__[(2)] = ((G__38434_38856[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__24818__auto__ = self__._hash;
if(cljs.core.truth_(or__24818__auto__)){
return or__24818__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__38436 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38437 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__38436[(0)]),(G__38437[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__38436[(1)]),(G__38437[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__38436[(2)]),(G__38437[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__38436[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__38436[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__38436[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__38438 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38439 = v.buf;
return ((((G__38438[(0)]) * (G__38439[(0)])) + ((G__38438[(1)]) * (G__38439[(1)]))) + ((G__38438[(2)]) * (G__38439[(2)])));
} else {
return ((((G__38438[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__38438[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__38438[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38440_38858 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38441_38859 = v.buf;
(dest__37589__auto__[(0)] = ((G__38440_38858[(0)]) + (G__38441_38859[(0)])));

(dest__37589__auto__[(1)] = ((G__38440_38858[(1)]) + (G__38441_38859[(1)])));

(dest__37589__auto__[(2)] = ((G__38440_38858[(2)]) + (G__38441_38859[(2)])));
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = ((G__38440_38858[(0)]) + v));

(dest__37589__auto__[(1)] = ((G__38440_38858[(1)]) + v));

(dest__37589__auto__[(2)] = ((G__38440_38858[(2)]) + v));
} else {
(dest__37589__auto__[(0)] = ((G__38440_38858[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__37589__auto__[(1)] = ((G__38440_38858[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__37589__auto__[(2)] = ((G__38440_38858[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.vector.Vec3))?v:thi.ng.geom.vector.vec3.call(null,v));
return Math.acos(thi.ng.math.core.dot.call(null,thi.ng.math.core.normalize.call(null,___$1),thi.ng.math.core.normalize.call(null,v__$1)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38442_38860 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38443_38861 = v.buf;
(b[(0)] = (((G__38442_38860[(0)]) + (G__38443_38861[(0)])) * 0.5));

(b[(1)] = (((G__38442_38860[(1)]) + (G__38443_38861[(1)])) * 0.5));

(b[(2)] = (((G__38442_38860[(2)]) + (G__38443_38861[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__38442_38860[(0)]) + v) * 0.5));

(b[(1)] = (((G__38442_38860[(1)]) + v) * 0.5));

(b[(2)] = (((G__38442_38860[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__38442_38860[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__38442_38860[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__38442_38860[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38456_38862 = (v instanceof thi.ng.geom.vector.Vec3);
var G__38457_38863 = (t instanceof thi.ng.geom.vector.Vec3);
var G__38458_38864 = ((!(G__38456_38862))?typeof v === 'number':null);
var G__38459_38865 = ((!(G__38457_38863))?typeof t === 'number':null);
var G__38444_38866 = self__.buf;
var G__38445_38867 = ((G__38456_38862)?v.buf:null);
var G__38446_38868 = ((G__38457_38863)?t.buf:null);
var G__38447_38869 = (G__38444_38866[(0)]);
var G__38448_38870 = (G__38444_38866[(1)]);
var G__38449_38871 = (G__38444_38866[(2)]);
var G__38450_38872 = ((G__38456_38862)?(G__38445_38867[(0)]):(cljs.core.truth_(G__38458_38864)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__38451_38873 = ((G__38456_38862)?(G__38445_38867[(1)]):(cljs.core.truth_(G__38458_38864)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__38452_38874 = ((G__38456_38862)?(G__38445_38867[(2)]):(cljs.core.truth_(G__38458_38864)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__38453_38875 = ((G__38457_38863)?(G__38446_38868[(0)]):(cljs.core.truth_(G__38459_38865)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__38454_38876 = ((G__38457_38863)?(G__38446_38868[(1)]):(cljs.core.truth_(G__38459_38865)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__38455_38877 = ((G__38457_38863)?(G__38446_38868[(2)]):(cljs.core.truth_(G__38459_38865)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = (((G__38450_38872 - G__38447_38869) * G__38453_38875) + G__38447_38869));

(b[(1)] = (((G__38451_38873 - G__38448_38870) * G__38454_38876) + G__38448_38870));

(b[(2)] = (((G__38452_38874 - G__38449_38871) * G__38455_38877) + G__38449_38871));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__38472_38878 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38473_38879 = (c instanceof thi.ng.geom.vector.Vec3);
var G__38474_38880 = ((!(G__38472_38878))?typeof b === 'number':null);
var G__38475_38881 = ((!(G__38473_38879))?typeof c === 'number':null);
var G__38460_38882 = self__.buf;
var G__38461_38883 = ((G__38472_38878)?b.buf:null);
var G__38462_38884 = ((G__38473_38879)?c.buf:null);
var G__38463_38885 = (G__38460_38882[(0)]);
var G__38464_38886 = (G__38460_38882[(1)]);
var G__38465_38887 = (G__38460_38882[(2)]);
var G__38466_38888 = ((G__38472_38878)?(G__38461_38883[(0)]):(cljs.core.truth_(G__38474_38880)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__38467_38889 = ((G__38472_38878)?(G__38461_38883[(1)]):(cljs.core.truth_(G__38474_38880)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__38468_38890 = ((G__38472_38878)?(G__38461_38883[(2)]):(cljs.core.truth_(G__38474_38880)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__38469_38891 = ((G__38473_38879)?(G__38462_38884[(0)]):(cljs.core.truth_(G__38475_38881)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__38470_38892 = ((G__38473_38879)?(G__38462_38884[(1)]):(cljs.core.truth_(G__38475_38881)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__38471_38893 = ((G__38473_38879)?(G__38462_38884[(2)]):(cljs.core.truth_(G__38475_38881)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_38894 = (((G__38466_38888 - G__38463_38885) * u) + G__38463_38885);
var y1_38895 = (((G__38467_38889 - G__38464_38886) * u) + G__38464_38886);
var z1_38896 = (((G__38468_38890 - G__38465_38887) * u) + G__38465_38887);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__38469_38891) * u) + G__38469_38891) - x1_38894) * v) + x1_38894));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__38470_38892) * u) + G__38470_38892) - y1_38895) * v) + y1_38895));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__38471_38893) * u) + G__38471_38893) - z1_38896) * v) + z1_38896));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38488_38897 = (v instanceof thi.ng.geom.vector.Vec3);
var G__38489_38898 = (t instanceof thi.ng.geom.vector.Vec3);
var G__38490_38899 = ((!(G__38488_38897))?typeof v === 'number':null);
var G__38491_38900 = ((!(G__38489_38898))?typeof t === 'number':null);
var G__38476_38901 = self__.buf;
var G__38477_38902 = ((G__38488_38897)?v.buf:null);
var G__38478_38903 = ((G__38489_38898)?t.buf:null);
var G__38479_38904 = (G__38476_38901[(0)]);
var G__38480_38905 = (G__38476_38901[(1)]);
var G__38481_38906 = (G__38476_38901[(2)]);
var G__38482_38907 = ((G__38488_38897)?(G__38477_38902[(0)]):(cljs.core.truth_(G__38490_38899)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__38483_38908 = ((G__38488_38897)?(G__38477_38902[(1)]):(cljs.core.truth_(G__38490_38899)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__38484_38909 = ((G__38488_38897)?(G__38477_38902[(2)]):(cljs.core.truth_(G__38490_38899)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__38485_38910 = ((G__38489_38898)?(G__38478_38903[(0)]):(cljs.core.truth_(G__38491_38900)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__38486_38911 = ((G__38489_38898)?(G__38478_38903[(1)]):(cljs.core.truth_(G__38491_38900)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__38487_38912 = ((G__38489_38898)?(G__38478_38903[(2)]):(cljs.core.truth_(G__38491_38900)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = f.call(null,G__38479_38904,G__38482_38907,G__38485_38910));

(b[(1)] = f.call(null,G__38480_38905,G__38483_38908,G__38486_38911));

(b[(2)] = f.call(null,G__38481_38906,G__38484_38909,G__38487_38912));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38492_38913 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__38493_38914 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__38493_38914[(0)]),(G__38492_38913[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__38493_38914[(1)]),(G__38492_38913[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,(G__38493_38914[(2)]),(G__38492_38913[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__38492_38913[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__38492_38913[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,e,(G__38492_38913[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__38492_38913[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__38492_38913[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(2),0.0),(G__38492_38913[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__38506_38915 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__38507_38916 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__38508_38917 = ((!(G__38506_38915))?typeof e1 === 'number':null);
var G__38509_38918 = ((!(G__38507_38916))?typeof e2 === 'number':null);
var G__38494_38919 = self__.buf;
var G__38495_38920 = ((G__38506_38915)?e1.buf:null);
var G__38496_38921 = ((G__38507_38916)?e2.buf:null);
var G__38497_38922 = (G__38494_38919[(0)]);
var G__38498_38923 = (G__38494_38919[(1)]);
var G__38499_38924 = (G__38494_38919[(2)]);
var G__38500_38925 = ((G__38506_38915)?(G__38495_38920[(0)]):(cljs.core.truth_(G__38508_38917)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__38501_38926 = ((G__38506_38915)?(G__38495_38920[(1)]):(cljs.core.truth_(G__38508_38917)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__38502_38927 = ((G__38506_38915)?(G__38495_38920[(2)]):(cljs.core.truth_(G__38508_38917)?e1:cljs.core.nth.call(null,e1,(2),0.0)));
var G__38503_38928 = ((G__38507_38916)?(G__38496_38921[(0)]):(cljs.core.truth_(G__38509_38918)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__38504_38929 = ((G__38507_38916)?(G__38496_38921[(1)]):(cljs.core.truth_(G__38509_38918)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
var G__38505_38930 = ((G__38507_38916)?(G__38496_38921[(2)]):(cljs.core.truth_(G__38509_38918)?e2:cljs.core.nth.call(null,e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__38500_38925,G__38503_38928,G__38497_38922));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__38501_38926,G__38504_38929,G__38498_38923));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__38502_38927,G__38505_38930,G__38499_38924));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38510_38931 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38511_38932 = v.buf;
(dest__37589__auto__[(0)] = (function (){var a__32045__auto__ = (G__38510_38931[(0)]);
var b__32046__auto__ = (G__38511_38932[(0)]);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37589__auto__[(1)] = (function (){var a__32045__auto__ = (G__38510_38931[(1)]);
var b__32046__auto__ = (G__38511_38932[(1)]);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37589__auto__[(2)] = (function (){var a__32045__auto__ = (G__38510_38931[(2)]);
var b__32046__auto__ = (G__38511_38932[(2)]);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = (function (){var a__32045__auto__ = (G__38510_38931[(0)]);
var b__32046__auto__ = v;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37589__auto__[(1)] = (function (){var a__32045__auto__ = (G__38510_38931[(1)]);
var b__32046__auto__ = v;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37589__auto__[(2)] = (function (){var a__32045__auto__ = (G__38510_38931[(2)]);
var b__32046__auto__ = v;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());
} else {
(dest__37589__auto__[(0)] = (function (){var a__32045__auto__ = (G__38510_38931[(0)]);
var b__32046__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37589__auto__[(1)] = (function (){var a__32045__auto__ = (G__38510_38931[(1)]);
var b__32046__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37589__auto__[(2)] = (function (){var a__32045__auto__ = (G__38510_38931[(2)]);
var b__32046__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38524_38933 = (v instanceof thi.ng.geom.vector.Vec3);
var G__38525_38934 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38526_38935 = ((!(G__38524_38933))?typeof v === 'number':null);
var G__38527_38936 = ((!(G__38525_38934))?typeof v2 === 'number':null);
var G__38512_38937 = self__.buf;
var G__38513_38938 = ((G__38524_38933)?v.buf:null);
var G__38514_38939 = ((G__38525_38934)?v2.buf:null);
var G__38515_38940 = (G__38512_38937[(0)]);
var G__38516_38941 = (G__38512_38937[(1)]);
var G__38517_38942 = (G__38512_38937[(2)]);
var G__38518_38943 = ((G__38524_38933)?(G__38513_38938[(0)]):(cljs.core.truth_(G__38526_38935)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__38519_38944 = ((G__38524_38933)?(G__38513_38938[(1)]):(cljs.core.truth_(G__38526_38935)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__38520_38945 = ((G__38524_38933)?(G__38513_38938[(2)]):(cljs.core.truth_(G__38526_38935)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__38521_38946 = ((G__38525_38934)?(G__38514_38939[(0)]):(cljs.core.truth_(G__38527_38936)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38522_38947 = ((G__38525_38934)?(G__38514_38939[(1)]):(cljs.core.truth_(G__38527_38936)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38523_38948 = ((G__38525_38934)?(G__38514_38939[(2)]):(cljs.core.truth_(G__38527_38936)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__37600__auto__[(0)] = (function (){var a__32045__auto__ = (function (){var a__32045__auto__ = G__38515_38940;
var b__32046__auto__ = G__38518_38943;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})();
var b__32046__auto__ = G__38521_38946;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37600__auto__[(1)] = (function (){var a__32045__auto__ = (function (){var a__32045__auto__ = G__38516_38941;
var b__32046__auto__ = G__38519_38944;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})();
var b__32046__auto__ = G__38522_38947;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

(dest__37600__auto__[(2)] = (function (){var a__32045__auto__ = (function (){var a__32045__auto__ = G__38517_38942;
var b__32046__auto__ = G__38520_38945;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})();
var b__32046__auto__ = G__38523_38948;
if((a__32045__auto__ <= b__32046__auto__)){
return a__32045__auto__;
} else {
return b__32046__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38528_38949 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38529_38950 = v.buf;
(dest__37589__auto__[(0)] = (function (){var a__32052__auto__ = (G__38528_38949[(0)]);
var b__32053__auto__ = (G__38529_38950[(0)]);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37589__auto__[(1)] = (function (){var a__32052__auto__ = (G__38528_38949[(1)]);
var b__32053__auto__ = (G__38529_38950[(1)]);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37589__auto__[(2)] = (function (){var a__32052__auto__ = (G__38528_38949[(2)]);
var b__32053__auto__ = (G__38529_38950[(2)]);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = (function (){var a__32052__auto__ = (G__38528_38949[(0)]);
var b__32053__auto__ = v;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37589__auto__[(1)] = (function (){var a__32052__auto__ = (G__38528_38949[(1)]);
var b__32053__auto__ = v;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37589__auto__[(2)] = (function (){var a__32052__auto__ = (G__38528_38949[(2)]);
var b__32053__auto__ = v;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());
} else {
(dest__37589__auto__[(0)] = (function (){var a__32052__auto__ = (G__38528_38949[(0)]);
var b__32053__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37589__auto__[(1)] = (function (){var a__32052__auto__ = (G__38528_38949[(1)]);
var b__32053__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37589__auto__[(2)] = (function (){var a__32052__auto__ = (G__38528_38949[(2)]);
var b__32053__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38542_38951 = (v instanceof thi.ng.geom.vector.Vec3);
var G__38543_38952 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38544_38953 = ((!(G__38542_38951))?typeof v === 'number':null);
var G__38545_38954 = ((!(G__38543_38952))?typeof v2 === 'number':null);
var G__38530_38955 = self__.buf;
var G__38531_38956 = ((G__38542_38951)?v.buf:null);
var G__38532_38957 = ((G__38543_38952)?v2.buf:null);
var G__38533_38958 = (G__38530_38955[(0)]);
var G__38534_38959 = (G__38530_38955[(1)]);
var G__38535_38960 = (G__38530_38955[(2)]);
var G__38536_38961 = ((G__38542_38951)?(G__38531_38956[(0)]):(cljs.core.truth_(G__38544_38953)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__38537_38962 = ((G__38542_38951)?(G__38531_38956[(1)]):(cljs.core.truth_(G__38544_38953)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__38538_38963 = ((G__38542_38951)?(G__38531_38956[(2)]):(cljs.core.truth_(G__38544_38953)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__38539_38964 = ((G__38543_38952)?(G__38532_38957[(0)]):(cljs.core.truth_(G__38545_38954)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38540_38965 = ((G__38543_38952)?(G__38532_38957[(1)]):(cljs.core.truth_(G__38545_38954)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38541_38966 = ((G__38543_38952)?(G__38532_38957[(2)]):(cljs.core.truth_(G__38545_38954)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__37600__auto__[(0)] = (function (){var a__32052__auto__ = (function (){var a__32052__auto__ = G__38533_38958;
var b__32053__auto__ = G__38536_38961;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})();
var b__32053__auto__ = G__38539_38964;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37600__auto__[(1)] = (function (){var a__32052__auto__ = (function (){var a__32052__auto__ = G__38534_38959;
var b__32053__auto__ = G__38537_38962;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})();
var b__32053__auto__ = G__38540_38965;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

(dest__37600__auto__[(2)] = (function (){var a__32052__auto__ = (function (){var a__32052__auto__ = G__38535_38960;
var b__32053__auto__ = G__38538_38963;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})();
var b__32053__auto__ = G__38541_38966;
if((a__32052__auto__ >= b__32053__auto__)){
return a__32052__auto__;
} else {
return b__32053__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__38546 = self__.buf;
var G__38547 = (G__38546[(0)]);
var G__38548 = (G__38546[(1)]);
var G__38549 = (G__38546[(2)]);
(b[(0)] = G__38547);

(b[(1)] = ((G__38548 * c) - (G__38549 * s)));

(b[(2)] = ((G__38548 * s) + (G__38549 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__38550 = self__.buf;
var G__38551 = (G__38550[(0)]);
var G__38552 = (G__38550[(1)]);
var G__38553 = (G__38550[(2)]);
(b[(0)] = ((G__38551 * c) + (G__38553 * s)));

(b[(1)] = G__38552);

(b[(2)] = ((G__38553 * c) - (G__38551 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__38554 = self__.buf;
var G__38555 = (G__38554[(0)]);
var G__38556 = (G__38554[(1)]);
var G__38557 = (G__38554[(2)]);
(b[(0)] = ((G__38555 * c) - (G__38556 * s)));

(b[(1)] = ((G__38555 * s) + (G__38556 * c)));

(b[(2)] = G__38557);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__38558 = self__.buf;
var G__38560 = (G__38558[(0)]);
var G__38561 = (G__38558[(1)]);
var G__38562 = (G__38558[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38559 = v.buf;
var G__38563 = (G__38559[(0)]);
var G__38564 = (G__38559[(1)]);
var G__38565 = (G__38559[(2)]);
var ux_SINGLEQUOTE_ = (G__38563 * G__38560);
var uy_SINGLEQUOTE_ = (G__38563 * G__38561);
var uz_SINGLEQUOTE_ = (G__38563 * G__38562);
var vx_SINGLEQUOTE_ = (G__38564 * G__38560);
var vy_SINGLEQUOTE_ = (G__38564 * G__38561);
var vz_SINGLEQUOTE_ = (G__38564 * G__38562);
var wx_SINGLEQUOTE_ = (G__38565 * G__38560);
var wy_SINGLEQUOTE_ = (G__38565 * G__38561);
var wz_SINGLEQUOTE_ = (G__38565 * G__38562);
var vx2 = (G__38563 * G__38563);
var vy2 = (G__38564 * G__38564);
var vz2 = (G__38565 * G__38565);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__38563) + ((((vy2 + vz2) * G__38560) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__38563)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__38564) + ((((vx2 + vz2) * G__38561) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__38564)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__38565) + ((((vx2 + vy2) * G__38562) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__38565)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__38563 = cljs.core.nth.call(null,v,(0),0.0);
var G__38564 = cljs.core.nth.call(null,v,(1),0.0);
var G__38565 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__38563 * G__38560);
var uy_SINGLEQUOTE_ = (G__38563 * G__38561);
var uz_SINGLEQUOTE_ = (G__38563 * G__38562);
var vx_SINGLEQUOTE_ = (G__38564 * G__38560);
var vy_SINGLEQUOTE_ = (G__38564 * G__38561);
var vz_SINGLEQUOTE_ = (G__38564 * G__38562);
var wx_SINGLEQUOTE_ = (G__38565 * G__38560);
var wy_SINGLEQUOTE_ = (G__38565 * G__38561);
var wz_SINGLEQUOTE_ = (G__38565 * G__38562);
var vx2 = (G__38563 * G__38563);
var vy2 = (G__38564 * G__38564);
var vz2 = (G__38565 * G__38565);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__38563) + ((((vy2 + vz2) * G__38560) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__38563)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__38564) + ((((vx2 + vz2) * G__38561) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__38564)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__38565) + ((((vx2 + vy2) * G__38562) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__38565)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.vector.Vec3.prototype.call = (function() {
var G__38967 = null;
var G__38967__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__38967__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__38967 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__38967__2.call(this,self__,k);
case 3:
return G__38967__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38967.cljs$core$IFn$_invoke$arity$2 = G__38967__2;
G__38967.cljs$core$IFn$_invoke$arity$3 = G__38967__3;
return G__38967;
})()
;

thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args38257){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38257)));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.math.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__38566 = self__.buf;
var G__38567 = (G__38566[(0)]);
var G__38568 = (G__38566[(1)]);
var G__38569 = (G__38566[(2)]);
var l = Math.sqrt((((G__38567 * G__38567) + (G__38568 * G__38568)) + (G__38569 * G__38569)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__38567 / l));

(b[(1)] = (G__38568 / l));

(b[(2)] = (G__38569 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__38570 = self__.buf;
var G__38571 = (G__38570[(0)]);
var G__38572 = (G__38570[(1)]);
var G__38573 = (G__38570[(2)]);
var l = Math.sqrt((((G__38571 * G__38571) + (G__38572 * G__38572)) + (G__38573 * G__38573)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__38571 * l__$1));

(b[(1)] = (G__38572 * l__$1));

(b[(2)] = (G__38573 * l__$1));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__38574 = self__.buf;
var G__38575 = (G__38574[(0)]);
var G__38576 = (G__38574[(1)]);
var G__38577 = (G__38574[(2)]);
return Math.sqrt((((G__38575 * G__38575) + (G__38576 * G__38576)) + (G__38577 * G__38577)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__38578 = self__.buf;
var G__38579 = (G__38578[(0)]);
var G__38580 = (G__38578[(1)]);
var G__38581 = (G__38578[(2)]);
return (((G__38579 * G__38579) + (G__38580 * G__38580)) + (G__38581 * G__38581));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = true;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38594_38968 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38595_38969 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38596_38970 = ((!(G__38594_38968))?typeof a === 'number':null);
var G__38597_38971 = ((!(G__38595_38969))?typeof b === 'number':null);
var G__38582_38972 = self__.buf;
var G__38583_38973 = ((G__38594_38968)?a.buf:null);
var G__38584_38974 = ((G__38595_38969)?b.buf:null);
var G__38585_38975 = (G__38582_38972[(0)]);
var G__38586_38976 = (G__38582_38972[(1)]);
var G__38587_38977 = (G__38582_38972[(2)]);
var G__38588_38978 = ((G__38594_38968)?(G__38583_38973[(0)]):(cljs.core.truth_(G__38596_38970)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__38589_38979 = ((G__38594_38968)?(G__38583_38973[(1)]):(cljs.core.truth_(G__38596_38970)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__38590_38980 = ((G__38594_38968)?(G__38583_38973[(2)]):(cljs.core.truth_(G__38596_38970)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__38591_38981 = ((G__38595_38969)?(G__38584_38974[(0)]):(cljs.core.truth_(G__38597_38971)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__38592_38982 = ((G__38595_38969)?(G__38584_38974[(1)]):(cljs.core.truth_(G__38597_38971)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__38593_38983 = ((G__38595_38969)?(G__38584_38974[(2)]):(cljs.core.truth_(G__38597_38971)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__37600__auto__[(0)] = ((G__38585_38975 * G__38588_38978) - G__38591_38981));

(dest__37600__auto__[(1)] = ((G__38586_38976 * G__38589_38979) - G__38592_38982));

(dest__37600__auto__[(2)] = ((G__38587_38977 * G__38590_38980) - G__38593_38983));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38598_38984 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38599_38985 = v.buf;
(dest__37589__auto__[(0)] = ((G__38598_38984[(0)]) * (G__38599_38985[(0)])));

(dest__37589__auto__[(1)] = ((G__38598_38984[(1)]) * (G__38599_38985[(1)])));

(dest__37589__auto__[(2)] = ((G__38598_38984[(2)]) * (G__38599_38985[(2)])));
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = ((G__38598_38984[(0)]) * v));

(dest__37589__auto__[(1)] = ((G__38598_38984[(1)]) * v));

(dest__37589__auto__[(2)] = ((G__38598_38984[(2)]) * v));
} else {
(dest__37589__auto__[(0)] = ((G__38598_38984[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__37589__auto__[(1)] = ((G__38598_38984[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__37589__auto__[(2)] = ((G__38598_38984[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38612_38986 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38613_38987 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38614_38988 = ((!(G__38612_38986))?typeof v1 === 'number':null);
var G__38615_38989 = ((!(G__38613_38987))?typeof v2 === 'number':null);
var G__38600_38990 = self__.buf;
var G__38601_38991 = ((G__38612_38986)?v1.buf:null);
var G__38602_38992 = ((G__38613_38987)?v2.buf:null);
var G__38603_38993 = (G__38600_38990[(0)]);
var G__38604_38994 = (G__38600_38990[(1)]);
var G__38605_38995 = (G__38600_38990[(2)]);
var G__38606_38996 = ((G__38612_38986)?(G__38601_38991[(0)]):(cljs.core.truth_(G__38614_38988)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38607_38997 = ((G__38612_38986)?(G__38601_38991[(1)]):(cljs.core.truth_(G__38614_38988)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38608_38998 = ((G__38612_38986)?(G__38601_38991[(2)]):(cljs.core.truth_(G__38614_38988)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38609_38999 = ((G__38613_38987)?(G__38602_38992[(0)]):(cljs.core.truth_(G__38615_38989)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38610_39000 = ((G__38613_38987)?(G__38602_38992[(1)]):(cljs.core.truth_(G__38615_38989)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38611_39001 = ((G__38613_38987)?(G__38602_38992[(2)]):(cljs.core.truth_(G__38615_38989)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__37600__auto__[(0)] = ((G__38603_38993 * G__38606_38996) * G__38609_38999));

(dest__37600__auto__[(1)] = ((G__38604_38994 * G__38607_38997) * G__38610_39000));

(dest__37600__auto__[(2)] = ((G__38605_38995 * G__38608_38998) * G__38611_39001));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38616 = self__.buf;
var dest__37578__auto__ = (new Float32Array((3)));
(dest__37578__auto__[(0)] = ((G__38616[(0)]) * x));

(dest__37578__auto__[(1)] = ((G__38616[(1)]) * y));

(dest__37578__auto__[(2)] = ((G__38616[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__37578__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__37572__auto__ = (new Float32Array((3)));
var G__38617_39002 = self__.buf;
(dest__37572__auto__[(0)] = (- (G__38617_39002[(0)])));

(dest__37572__auto__[(1)] = (- (G__38617_39002[(1)])));

(dest__37572__auto__[(2)] = (- (G__38617_39002[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__37572__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38618_39003 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38619_39004 = v.buf;
(dest__37589__auto__[(0)] = ((G__38618_39003[(0)]) - (G__38619_39004[(0)])));

(dest__37589__auto__[(1)] = ((G__38618_39003[(1)]) - (G__38619_39004[(1)])));

(dest__37589__auto__[(2)] = ((G__38618_39003[(2)]) - (G__38619_39004[(2)])));
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = ((G__38618_39003[(0)]) - v));

(dest__37589__auto__[(1)] = ((G__38618_39003[(1)]) - v));

(dest__37589__auto__[(2)] = ((G__38618_39003[(2)]) - v));
} else {
(dest__37589__auto__[(0)] = ((G__38618_39003[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__37589__auto__[(1)] = ((G__38618_39003[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__37589__auto__[(2)] = ((G__38618_39003[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38632_39005 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38633_39006 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38634_39007 = ((!(G__38632_39005))?typeof v1 === 'number':null);
var G__38635_39008 = ((!(G__38633_39006))?typeof v2 === 'number':null);
var G__38620_39009 = self__.buf;
var G__38621_39010 = ((G__38632_39005)?v1.buf:null);
var G__38622_39011 = ((G__38633_39006)?v2.buf:null);
var G__38623_39012 = (G__38620_39009[(0)]);
var G__38624_39013 = (G__38620_39009[(1)]);
var G__38625_39014 = (G__38620_39009[(2)]);
var G__38626_39015 = ((G__38632_39005)?(G__38621_39010[(0)]):(cljs.core.truth_(G__38634_39007)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38627_39016 = ((G__38632_39005)?(G__38621_39010[(1)]):(cljs.core.truth_(G__38634_39007)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38628_39017 = ((G__38632_39005)?(G__38621_39010[(2)]):(cljs.core.truth_(G__38634_39007)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38629_39018 = ((G__38633_39006)?(G__38622_39011[(0)]):(cljs.core.truth_(G__38635_39008)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38630_39019 = ((G__38633_39006)?(G__38622_39011[(1)]):(cljs.core.truth_(G__38635_39008)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38631_39020 = ((G__38633_39006)?(G__38622_39011[(2)]):(cljs.core.truth_(G__38635_39008)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__37600__auto__[(0)] = ((G__38623_39012 - G__38626_39015) - G__38629_39018));

(dest__37600__auto__[(1)] = ((G__38624_39013 - G__38627_39016) - G__38630_39019));

(dest__37600__auto__[(2)] = ((G__38625_39014 - G__38628_39017) - G__38631_39020));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38636 = self__.buf;
var dest__37578__auto__ = (new Float32Array((3)));
(dest__37578__auto__[(0)] = ((G__38636[(0)]) - x));

(dest__37578__auto__[(1)] = ((G__38636[(1)]) - y));

(dest__37578__auto__[(2)] = ((G__38636[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__37578__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38649_39021 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38650_39022 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38651_39023 = ((!(G__38649_39021))?typeof a === 'number':null);
var G__38652_39024 = ((!(G__38650_39022))?typeof b === 'number':null);
var G__38637_39025 = self__.buf;
var G__38638_39026 = ((G__38649_39021)?a.buf:null);
var G__38639_39027 = ((G__38650_39022)?b.buf:null);
var G__38640_39028 = (G__38637_39025[(0)]);
var G__38641_39029 = (G__38637_39025[(1)]);
var G__38642_39030 = (G__38637_39025[(2)]);
var G__38643_39031 = ((G__38649_39021)?(G__38638_39026[(0)]):(cljs.core.truth_(G__38651_39023)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__38644_39032 = ((G__38649_39021)?(G__38638_39026[(1)]):(cljs.core.truth_(G__38651_39023)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__38645_39033 = ((G__38649_39021)?(G__38638_39026[(2)]):(cljs.core.truth_(G__38651_39023)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__38646_39034 = ((G__38650_39022)?(G__38639_39027[(0)]):(cljs.core.truth_(G__38652_39024)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__38647_39035 = ((G__38650_39022)?(G__38639_39027[(1)]):(cljs.core.truth_(G__38652_39024)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__38648_39036 = ((G__38650_39022)?(G__38639_39027[(2)]):(cljs.core.truth_(G__38652_39024)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__37600__auto__[(0)] = ((G__38640_39028 * G__38643_39031) + G__38646_39034));

(dest__37600__auto__[(1)] = ((G__38641_39029 * G__38644_39032) + G__38647_39035));

(dest__37600__auto__[(2)] = ((G__38642_39030 * G__38645_39033) + G__38648_39036));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38665_39037 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38666_39038 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38667_39039 = ((!(G__38665_39037))?typeof a === 'number':null);
var G__38668_39040 = ((!(G__38666_39038))?typeof b === 'number':null);
var G__38653_39041 = self__.buf;
var G__38654_39042 = ((G__38665_39037)?a.buf:null);
var G__38655_39043 = ((G__38666_39038)?b.buf:null);
var G__38656_39044 = (G__38653_39041[(0)]);
var G__38657_39045 = (G__38653_39041[(1)]);
var G__38658_39046 = (G__38653_39041[(2)]);
var G__38659_39047 = ((G__38665_39037)?(G__38654_39042[(0)]):(cljs.core.truth_(G__38667_39039)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__38660_39048 = ((G__38665_39037)?(G__38654_39042[(1)]):(cljs.core.truth_(G__38667_39039)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__38661_39049 = ((G__38665_39037)?(G__38654_39042[(2)]):(cljs.core.truth_(G__38667_39039)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__38662_39050 = ((G__38666_39038)?(G__38655_39043[(0)]):(cljs.core.truth_(G__38668_39040)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__38663_39051 = ((G__38666_39038)?(G__38655_39043[(1)]):(cljs.core.truth_(G__38668_39040)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__38664_39052 = ((G__38666_39038)?(G__38655_39043[(2)]):(cljs.core.truth_(G__38668_39040)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__37600__auto__[(0)] = ((G__38656_39044 + G__38659_39047) * G__38662_39050));

(dest__37600__auto__[(1)] = ((G__38657_39045 + G__38660_39048) * G__38663_39051));

(dest__37600__auto__[(2)] = ((G__38658_39046 + G__38661_39049) * G__38664_39052));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__37572__auto__ = (new Float32Array((3)));
var G__38669_39053 = self__.buf;
(dest__37572__auto__[(0)] = ((1) / (G__38669_39053[(0)])));

(dest__37572__auto__[(1)] = ((1) / (G__38669_39053[(1)])));

(dest__37572__auto__[(2)] = ((1) / (G__38669_39053[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__37572__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38670_39054 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38671_39055 = v.buf;
(dest__37589__auto__[(0)] = ((G__38670_39054[(0)]) / (G__38671_39055[(0)])));

(dest__37589__auto__[(1)] = ((G__38670_39054[(1)]) / (G__38671_39055[(1)])));

(dest__37589__auto__[(2)] = ((G__38670_39054[(2)]) / (G__38671_39055[(2)])));
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = ((G__38670_39054[(0)]) / v));

(dest__37589__auto__[(1)] = ((G__38670_39054[(1)]) / v));

(dest__37589__auto__[(2)] = ((G__38670_39054[(2)]) / v));
} else {
(dest__37589__auto__[(0)] = ((G__38670_39054[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__37589__auto__[(1)] = ((G__38670_39054[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__37589__auto__[(2)] = ((G__38670_39054[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38684_39056 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38685_39057 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38686_39058 = ((!(G__38684_39056))?typeof v1 === 'number':null);
var G__38687_39059 = ((!(G__38685_39057))?typeof v2 === 'number':null);
var G__38672_39060 = self__.buf;
var G__38673_39061 = ((G__38684_39056)?v1.buf:null);
var G__38674_39062 = ((G__38685_39057)?v2.buf:null);
var G__38675_39063 = (G__38672_39060[(0)]);
var G__38676_39064 = (G__38672_39060[(1)]);
var G__38677_39065 = (G__38672_39060[(2)]);
var G__38678_39066 = ((G__38684_39056)?(G__38673_39061[(0)]):(cljs.core.truth_(G__38686_39058)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38679_39067 = ((G__38684_39056)?(G__38673_39061[(1)]):(cljs.core.truth_(G__38686_39058)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38680_39068 = ((G__38684_39056)?(G__38673_39061[(2)]):(cljs.core.truth_(G__38686_39058)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38681_39069 = ((G__38685_39057)?(G__38674_39062[(0)]):(cljs.core.truth_(G__38687_39059)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38682_39070 = ((G__38685_39057)?(G__38674_39062[(1)]):(cljs.core.truth_(G__38687_39059)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38683_39071 = ((G__38685_39057)?(G__38674_39062[(2)]):(cljs.core.truth_(G__38687_39059)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__37600__auto__[(0)] = ((G__38675_39063 / G__38678_39066) / G__38681_39069));

(dest__37600__auto__[(1)] = ((G__38676_39064 / G__38679_39067) / G__38682_39070));

(dest__37600__auto__[(2)] = ((G__38677_39065 / G__38680_39068) / G__38683_39071));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38688 = self__.buf;
var dest__37578__auto__ = (new Float32Array((3)));
(dest__37578__auto__[(0)] = ((G__38688[(0)]) / x));

(dest__37578__auto__[(1)] = ((G__38688[(1)]) / y));

(dest__37578__auto__[(2)] = ((G__38688[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__37578__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__37589__auto__ = (new Float32Array((3)));
var G__38689_39072 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__38690_39073 = v.buf;
(dest__37589__auto__[(0)] = ((G__38689_39072[(0)]) + (G__38690_39073[(0)])));

(dest__37589__auto__[(1)] = ((G__38689_39072[(1)]) + (G__38690_39073[(1)])));

(dest__37589__auto__[(2)] = ((G__38689_39072[(2)]) + (G__38690_39073[(2)])));
} else {
if(typeof v === 'number'){
(dest__37589__auto__[(0)] = ((G__38689_39072[(0)]) + v));

(dest__37589__auto__[(1)] = ((G__38689_39072[(1)]) + v));

(dest__37589__auto__[(2)] = ((G__38689_39072[(2)]) + v));
} else {
(dest__37589__auto__[(0)] = ((G__38689_39072[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__37589__auto__[(1)] = ((G__38689_39072[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__37589__auto__[(2)] = ((G__38689_39072[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__37589__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38703_39074 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__38704_39075 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__38705_39076 = ((!(G__38703_39074))?typeof v1 === 'number':null);
var G__38706_39077 = ((!(G__38704_39075))?typeof v2 === 'number':null);
var G__38691_39078 = self__.buf;
var G__38692_39079 = ((G__38703_39074)?v1.buf:null);
var G__38693_39080 = ((G__38704_39075)?v2.buf:null);
var G__38694_39081 = (G__38691_39078[(0)]);
var G__38695_39082 = (G__38691_39078[(1)]);
var G__38696_39083 = (G__38691_39078[(2)]);
var G__38697_39084 = ((G__38703_39074)?(G__38692_39079[(0)]):(cljs.core.truth_(G__38705_39076)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__38698_39085 = ((G__38703_39074)?(G__38692_39079[(1)]):(cljs.core.truth_(G__38705_39076)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__38699_39086 = ((G__38703_39074)?(G__38692_39079[(2)]):(cljs.core.truth_(G__38705_39076)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__38700_39087 = ((G__38704_39075)?(G__38693_39080[(0)]):(cljs.core.truth_(G__38706_39077)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__38701_39088 = ((G__38704_39075)?(G__38693_39080[(1)]):(cljs.core.truth_(G__38706_39077)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__38702_39089 = ((G__38704_39075)?(G__38693_39080[(2)]):(cljs.core.truth_(G__38706_39077)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__37600__auto__[(0)] = ((G__38694_39081 + G__38697_39084) + G__38700_39087));

(dest__37600__auto__[(1)] = ((G__38695_39082 + G__38698_39085) + G__38701_39088));

(dest__37600__auto__[(2)] = ((G__38696_39083 + G__38699_39086) + G__38702_39089));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__38707 = self__.buf;
var dest__37578__auto__ = (new Float32Array((3)));
(dest__37578__auto__[(0)] = ((G__38707[(0)]) + x));

(dest__37578__auto__[(1)] = ((G__38707[(1)]) + y));

(dest__37578__auto__[(2)] = ((G__38707[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__37578__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__37572__auto__ = (new Float32Array((3)));
var G__38708_39090 = self__.buf;
(dest__37572__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__38708_39090[(0)])));

(dest__37572__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__38708_39090[(1)])));

(dest__37572__auto__[(2)] = thi.ng.math.core.abs_STAR_.call(null,(G__38708_39090[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__37572__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__37600__auto__ = (new Float32Array((3)));
var G__38414_39091 = (a instanceof thi.ng.geom.vector.Vec3);
var G__38415_39092 = (b instanceof thi.ng.geom.vector.Vec3);
var G__38416_39093 = ((!(G__38414_39091))?typeof a === 'number':null);
var G__38417_39094 = ((!(G__38415_39092))?typeof b === 'number':null);
var G__38402_39095 = self__.buf;
var G__38403_39096 = ((G__38414_39091)?a.buf:null);
var G__38404_39097 = ((G__38415_39092)?b.buf:null);
var G__38405_39098 = (G__38402_39095[(0)]);
var G__38406_39099 = (G__38402_39095[(1)]);
var G__38407_39100 = (G__38402_39095[(2)]);
var G__38408_39101 = ((G__38414_39091)?(G__38403_39096[(0)]):(cljs.core.truth_(G__38416_39093)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__38409_39102 = ((G__38414_39091)?(G__38403_39096[(1)]):(cljs.core.truth_(G__38416_39093)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__38410_39103 = ((G__38414_39091)?(G__38403_39096[(2)]):(cljs.core.truth_(G__38416_39093)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__38411_39104 = ((G__38415_39092)?(G__38404_39097[(0)]):(cljs.core.truth_(G__38417_39094)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__38412_39105 = ((G__38415_39092)?(G__38404_39097[(1)]):(cljs.core.truth_(G__38417_39094)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__38413_39106 = ((G__38415_39092)?(G__38404_39097[(2)]):(cljs.core.truth_(G__38417_39094)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__37600__auto__[(0)] = ((G__38405_39098 - G__38408_39101) * G__38411_39104));

(dest__37600__auto__[(1)] = ((G__38406_39099 - G__38409_39102) * G__38412_39105));

(dest__37600__auto__[(2)] = ((G__38407_39100 - G__38410_39103) * G__38413_39106));

return (new thi.ng.geom.vector.Vec3(dest__37600__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3";

thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__25424__auto__,writer__25425__auto__,opt__25426__auto__){
return cljs.core._write.call(null,writer__25425__auto__,"thi.ng.geom.vector/Vec3");
});

thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__39109){
var G__39107 = (((G__39109 instanceof thi.ng.geom.vector.Vec2))?G__39109.buf:G__39109.buf);
return (G__39107[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__39112){
var G__39110 = (((G__39112 instanceof thi.ng.geom.vector.Vec2))?G__39112.buf:G__39112.buf);
var G__39111 = (new Float32Array(2));
(G__39111[(0)] = (G__39110[(0)]));

(G__39111[(1)] = (G__39110[(0)]));

return (new thi.ng.geom.vector.Vec2(G__39111,null,cljs.core.meta.call(null,G__39112)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__39115){
var G__39113 = (((G__39115 instanceof thi.ng.geom.vector.Vec2))?G__39115.buf:G__39115.buf);
var G__39114 = (new Float32Array(3));
(G__39114[(0)] = (G__39113[(0)]));

(G__39114[(1)] = (G__39113[(0)]));

(G__39114[(2)] = (G__39113[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39114,null,cljs.core.meta.call(null,G__39115)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__39118){
var G__39116 = (((G__39118 instanceof thi.ng.geom.vector.Vec2))?G__39118.buf:G__39118.buf);
var G__39117 = (new Float32Array(3));
(G__39117[(0)] = (G__39116[(0)]));

(G__39117[(1)] = (G__39116[(0)]));

(G__39117[(2)] = (G__39116[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39117,null,cljs.core.meta.call(null,G__39118)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__39121){
var G__39119 = (((G__39121 instanceof thi.ng.geom.vector.Vec2))?G__39121.buf:G__39121.buf);
var G__39120 = (new Float32Array(3));
(G__39120[(0)] = (G__39119[(0)]));

(G__39120[(1)] = (G__39119[(0)]));

(G__39120[(2)] = (G__39119[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39120,null,cljs.core.meta.call(null,G__39121)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__39124){
var G__39122 = (((G__39124 instanceof thi.ng.geom.vector.Vec2))?G__39124.buf:G__39124.buf);
var G__39123 = (new Float32Array(2));
(G__39123[(0)] = (G__39122[(0)]));

(G__39123[(1)] = (G__39122[(1)]));

return (new thi.ng.geom.vector.Vec2(G__39123,null,cljs.core.meta.call(null,G__39124)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__39127){
var G__39125 = (((G__39127 instanceof thi.ng.geom.vector.Vec2))?G__39127.buf:G__39127.buf);
var G__39126 = (new Float32Array(3));
(G__39126[(0)] = (G__39125[(0)]));

(G__39126[(1)] = (G__39125[(1)]));

(G__39126[(2)] = (G__39125[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39126,null,cljs.core.meta.call(null,G__39127)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__39130){
var G__39128 = (((G__39130 instanceof thi.ng.geom.vector.Vec2))?G__39130.buf:G__39130.buf);
var G__39129 = (new Float32Array(3));
(G__39129[(0)] = (G__39128[(0)]));

(G__39129[(1)] = (G__39128[(1)]));

(G__39129[(2)] = (G__39128[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39129,null,cljs.core.meta.call(null,G__39130)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__39133){
var G__39131 = (((G__39133 instanceof thi.ng.geom.vector.Vec2))?G__39133.buf:G__39133.buf);
var G__39132 = (new Float32Array(3));
(G__39132[(0)] = (G__39131[(0)]));

(G__39132[(1)] = (G__39131[(1)]));

(G__39132[(2)] = (G__39131[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39132,null,cljs.core.meta.call(null,G__39133)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__39136){
var G__39134 = (((G__39136 instanceof thi.ng.geom.vector.Vec2))?G__39136.buf:G__39136.buf);
var G__39135 = (new Float32Array(2));
(G__39135[(0)] = (G__39134[(0)]));

(G__39135[(1)] = (G__39134[(2)]));

return (new thi.ng.geom.vector.Vec2(G__39135,null,cljs.core.meta.call(null,G__39136)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__39139){
var G__39137 = (((G__39139 instanceof thi.ng.geom.vector.Vec2))?G__39139.buf:G__39139.buf);
var G__39138 = (new Float32Array(3));
(G__39138[(0)] = (G__39137[(0)]));

(G__39138[(1)] = (G__39137[(2)]));

(G__39138[(2)] = (G__39137[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39138,null,cljs.core.meta.call(null,G__39139)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__39142){
var G__39140 = (((G__39142 instanceof thi.ng.geom.vector.Vec2))?G__39142.buf:G__39142.buf);
var G__39141 = (new Float32Array(3));
(G__39141[(0)] = (G__39140[(0)]));

(G__39141[(1)] = (G__39140[(2)]));

(G__39141[(2)] = (G__39140[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39141,null,cljs.core.meta.call(null,G__39142)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__39145){
var G__39143 = (((G__39145 instanceof thi.ng.geom.vector.Vec2))?G__39145.buf:G__39145.buf);
var G__39144 = (new Float32Array(3));
(G__39144[(0)] = (G__39143[(0)]));

(G__39144[(1)] = (G__39143[(2)]));

(G__39144[(2)] = (G__39143[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39144,null,cljs.core.meta.call(null,G__39145)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__39148){
var G__39146 = (((G__39148 instanceof thi.ng.geom.vector.Vec2))?G__39148.buf:G__39148.buf);
return (G__39146[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__39151){
var G__39149 = (((G__39151 instanceof thi.ng.geom.vector.Vec2))?G__39151.buf:G__39151.buf);
var G__39150 = (new Float32Array(2));
(G__39150[(0)] = (G__39149[(1)]));

(G__39150[(1)] = (G__39149[(0)]));

return (new thi.ng.geom.vector.Vec2(G__39150,null,cljs.core.meta.call(null,G__39151)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__39154){
var G__39152 = (((G__39154 instanceof thi.ng.geom.vector.Vec2))?G__39154.buf:G__39154.buf);
var G__39153 = (new Float32Array(3));
(G__39153[(0)] = (G__39152[(1)]));

(G__39153[(1)] = (G__39152[(0)]));

(G__39153[(2)] = (G__39152[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39153,null,cljs.core.meta.call(null,G__39154)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__39157){
var G__39155 = (((G__39157 instanceof thi.ng.geom.vector.Vec2))?G__39157.buf:G__39157.buf);
var G__39156 = (new Float32Array(3));
(G__39156[(0)] = (G__39155[(1)]));

(G__39156[(1)] = (G__39155[(0)]));

(G__39156[(2)] = (G__39155[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39156,null,cljs.core.meta.call(null,G__39157)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__39160){
var G__39158 = (((G__39160 instanceof thi.ng.geom.vector.Vec2))?G__39160.buf:G__39160.buf);
var G__39159 = (new Float32Array(3));
(G__39159[(0)] = (G__39158[(1)]));

(G__39159[(1)] = (G__39158[(0)]));

(G__39159[(2)] = (G__39158[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39159,null,cljs.core.meta.call(null,G__39160)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__39163){
var G__39161 = (((G__39163 instanceof thi.ng.geom.vector.Vec2))?G__39163.buf:G__39163.buf);
var G__39162 = (new Float32Array(2));
(G__39162[(0)] = (G__39161[(1)]));

(G__39162[(1)] = (G__39161[(1)]));

return (new thi.ng.geom.vector.Vec2(G__39162,null,cljs.core.meta.call(null,G__39163)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__39166){
var G__39164 = (((G__39166 instanceof thi.ng.geom.vector.Vec2))?G__39166.buf:G__39166.buf);
var G__39165 = (new Float32Array(3));
(G__39165[(0)] = (G__39164[(1)]));

(G__39165[(1)] = (G__39164[(1)]));

(G__39165[(2)] = (G__39164[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39165,null,cljs.core.meta.call(null,G__39166)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__39169){
var G__39167 = (((G__39169 instanceof thi.ng.geom.vector.Vec2))?G__39169.buf:G__39169.buf);
var G__39168 = (new Float32Array(3));
(G__39168[(0)] = (G__39167[(1)]));

(G__39168[(1)] = (G__39167[(1)]));

(G__39168[(2)] = (G__39167[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39168,null,cljs.core.meta.call(null,G__39169)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__39172){
var G__39170 = (((G__39172 instanceof thi.ng.geom.vector.Vec2))?G__39172.buf:G__39172.buf);
var G__39171 = (new Float32Array(3));
(G__39171[(0)] = (G__39170[(1)]));

(G__39171[(1)] = (G__39170[(1)]));

(G__39171[(2)] = (G__39170[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39171,null,cljs.core.meta.call(null,G__39172)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__39175){
var G__39173 = (((G__39175 instanceof thi.ng.geom.vector.Vec2))?G__39175.buf:G__39175.buf);
var G__39174 = (new Float32Array(2));
(G__39174[(0)] = (G__39173[(1)]));

(G__39174[(1)] = (G__39173[(2)]));

return (new thi.ng.geom.vector.Vec2(G__39174,null,cljs.core.meta.call(null,G__39175)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__39178){
var G__39176 = (((G__39178 instanceof thi.ng.geom.vector.Vec2))?G__39178.buf:G__39178.buf);
var G__39177 = (new Float32Array(3));
(G__39177[(0)] = (G__39176[(1)]));

(G__39177[(1)] = (G__39176[(2)]));

(G__39177[(2)] = (G__39176[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39177,null,cljs.core.meta.call(null,G__39178)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__39181){
var G__39179 = (((G__39181 instanceof thi.ng.geom.vector.Vec2))?G__39181.buf:G__39181.buf);
var G__39180 = (new Float32Array(3));
(G__39180[(0)] = (G__39179[(1)]));

(G__39180[(1)] = (G__39179[(2)]));

(G__39180[(2)] = (G__39179[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39180,null,cljs.core.meta.call(null,G__39181)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__39184){
var G__39182 = (((G__39184 instanceof thi.ng.geom.vector.Vec2))?G__39184.buf:G__39184.buf);
var G__39183 = (new Float32Array(3));
(G__39183[(0)] = (G__39182[(1)]));

(G__39183[(1)] = (G__39182[(2)]));

(G__39183[(2)] = (G__39182[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39183,null,cljs.core.meta.call(null,G__39184)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__39187){
var G__39185 = (((G__39187 instanceof thi.ng.geom.vector.Vec2))?G__39187.buf:G__39187.buf);
return (G__39185[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__39190){
var G__39188 = (((G__39190 instanceof thi.ng.geom.vector.Vec2))?G__39190.buf:G__39190.buf);
var G__39189 = (new Float32Array(2));
(G__39189[(0)] = (G__39188[(2)]));

(G__39189[(1)] = (G__39188[(0)]));

return (new thi.ng.geom.vector.Vec2(G__39189,null,cljs.core.meta.call(null,G__39190)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__39193){
var G__39191 = (((G__39193 instanceof thi.ng.geom.vector.Vec2))?G__39193.buf:G__39193.buf);
var G__39192 = (new Float32Array(3));
(G__39192[(0)] = (G__39191[(2)]));

(G__39192[(1)] = (G__39191[(0)]));

(G__39192[(2)] = (G__39191[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39192,null,cljs.core.meta.call(null,G__39193)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__39196){
var G__39194 = (((G__39196 instanceof thi.ng.geom.vector.Vec2))?G__39196.buf:G__39196.buf);
var G__39195 = (new Float32Array(3));
(G__39195[(0)] = (G__39194[(2)]));

(G__39195[(1)] = (G__39194[(0)]));

(G__39195[(2)] = (G__39194[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39195,null,cljs.core.meta.call(null,G__39196)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__39199){
var G__39197 = (((G__39199 instanceof thi.ng.geom.vector.Vec2))?G__39199.buf:G__39199.buf);
var G__39198 = (new Float32Array(3));
(G__39198[(0)] = (G__39197[(2)]));

(G__39198[(1)] = (G__39197[(0)]));

(G__39198[(2)] = (G__39197[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39198,null,cljs.core.meta.call(null,G__39199)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__39202){
var G__39200 = (((G__39202 instanceof thi.ng.geom.vector.Vec2))?G__39202.buf:G__39202.buf);
var G__39201 = (new Float32Array(2));
(G__39201[(0)] = (G__39200[(2)]));

(G__39201[(1)] = (G__39200[(1)]));

return (new thi.ng.geom.vector.Vec2(G__39201,null,cljs.core.meta.call(null,G__39202)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__39205){
var G__39203 = (((G__39205 instanceof thi.ng.geom.vector.Vec2))?G__39205.buf:G__39205.buf);
var G__39204 = (new Float32Array(3));
(G__39204[(0)] = (G__39203[(2)]));

(G__39204[(1)] = (G__39203[(1)]));

(G__39204[(2)] = (G__39203[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39204,null,cljs.core.meta.call(null,G__39205)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__39208){
var G__39206 = (((G__39208 instanceof thi.ng.geom.vector.Vec2))?G__39208.buf:G__39208.buf);
var G__39207 = (new Float32Array(3));
(G__39207[(0)] = (G__39206[(2)]));

(G__39207[(1)] = (G__39206[(1)]));

(G__39207[(2)] = (G__39206[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39207,null,cljs.core.meta.call(null,G__39208)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__39211){
var G__39209 = (((G__39211 instanceof thi.ng.geom.vector.Vec2))?G__39211.buf:G__39211.buf);
var G__39210 = (new Float32Array(3));
(G__39210[(0)] = (G__39209[(2)]));

(G__39210[(1)] = (G__39209[(1)]));

(G__39210[(2)] = (G__39209[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39210,null,cljs.core.meta.call(null,G__39211)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__39214){
var G__39212 = (((G__39214 instanceof thi.ng.geom.vector.Vec2))?G__39214.buf:G__39214.buf);
var G__39213 = (new Float32Array(2));
(G__39213[(0)] = (G__39212[(2)]));

(G__39213[(1)] = (G__39212[(2)]));

return (new thi.ng.geom.vector.Vec2(G__39213,null,cljs.core.meta.call(null,G__39214)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__39217){
var G__39215 = (((G__39217 instanceof thi.ng.geom.vector.Vec2))?G__39217.buf:G__39217.buf);
var G__39216 = (new Float32Array(3));
(G__39216[(0)] = (G__39215[(2)]));

(G__39216[(1)] = (G__39215[(2)]));

(G__39216[(2)] = (G__39215[(0)]));

return (new thi.ng.geom.vector.Vec3(G__39216,null,cljs.core.meta.call(null,G__39217)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__39220){
var G__39218 = (((G__39220 instanceof thi.ng.geom.vector.Vec2))?G__39220.buf:G__39220.buf);
var G__39219 = (new Float32Array(3));
(G__39219[(0)] = (G__39218[(2)]));

(G__39219[(1)] = (G__39218[(2)]));

(G__39219[(2)] = (G__39218[(1)]));

return (new thi.ng.geom.vector.Vec3(G__39219,null,cljs.core.meta.call(null,G__39220)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__39223){
var G__39221 = (((G__39223 instanceof thi.ng.geom.vector.Vec2))?G__39223.buf:G__39223.buf);
var G__39222 = (new Float32Array(3));
(G__39222[(0)] = (G__39221[(2)]));

(G__39222[(1)] = (G__39221[(2)]));

(G__39222[(2)] = (G__39221[(2)]));

return (new thi.ng.geom.vector.Vec3(G__39222,null,cljs.core.meta.call(null,G__39223)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__4655__auto__ = (function (){var and__24806__auto__ = ((1) === c);
if(and__24806__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__24806__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var idx = temp__4655__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__4655__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__39224 = (i + (1));
var G__39225 = cljs.core.next.call(null,n__$1);
i = G__39224;
n__$1 = G__39225;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.vector.vec2_reduce_STAR_ = (function thi$ng$geom$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__39226 = null;
var G__39226__1 = (function (a){
return a;
});
var G__39226__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__39226 = function(a,b){
switch(arguments.length){
case 1:
return G__39226__1.call(this,a);
case 2:
return G__39226__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39226.cljs$core$IFn$_invoke$arity$1 = G__39226__1;
G__39226.cljs$core$IFn$_invoke$arity$2 = G__39226__2;
return G__39226;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__39227 = null;
var G__39227__1 = (function (a){
return a;
});
var G__39227__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__39227 = function(a,b){
switch(arguments.length){
case 1:
return G__39227__1.call(this,a);
case 2:
return G__39227__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39227.cljs$core$IFn$_invoke$arity$1 = G__39227__1;
G__39227.cljs$core$IFn$_invoke$arity$2 = G__39227__2;
return G__39227;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var args39228 = [];
var len__25893__auto___39231 = arguments.length;
var i__25894__auto___39232 = (0);
while(true){
if((i__25894__auto___39232 < len__25893__auto___39231)){
args39228.push((arguments[i__25894__auto___39232]));

var G__39233 = (i__25894__auto___39232 + (1));
i__25894__auto___39232 = G__39233;
continue;
} else {
}
break;
}

var G__39230 = args39228.length;
switch (G__39230) {
case 0:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39228.length)].join('')));

}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V2;
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,null));
});

thi.ng.geom.vector.vec2.cljs$lang$maxFixedArity = 2;

thi.ng.geom.vector.vec3 = (function thi$ng$geom$vector$vec3(var_args){
var args39235 = [];
var len__25893__auto___39238 = arguments.length;
var i__25894__auto___39239 = (0);
while(true){
if((i__25894__auto___39239 < len__25893__auto___39238)){
args39235.push((arguments[i__25894__auto___39239]));

var G__39240 = (i__25894__auto___39239 + (1));
i__25894__auto___39239 = G__39240;
continue;
} else {
}
break;
}

var G__39237 = args39235.length;
switch (G__39237) {
case 0:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39235.length)].join('')));

}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V3;
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,null));
});

thi.ng.geom.vector.vec3.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec2_with_meta = (function thi$ng$geom$vector$vec2_with_meta(var_args){
var args39242 = [];
var len__25893__auto___39245 = arguments.length;
var i__25894__auto___39246 = (0);
while(true){
if((i__25894__auto___39246 < len__25893__auto___39245)){
args39242.push((arguments[i__25894__auto___39246]));

var G__39247 = (i__25894__auto___39246 + (1));
i__25894__auto___39246 = G__39247;
continue;
} else {
}
break;
}

var G__39244 = args39242.length;
switch (G__39244) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39242.length)].join('')));

}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,meta));
});

thi.ng.geom.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec3_with_meta = (function thi$ng$geom$vector$vec3_with_meta(var_args){
var args39249 = [];
var len__25893__auto___39252 = arguments.length;
var i__25894__auto___39253 = (0);
while(true){
if((i__25894__auto___39253 < len__25893__auto___39252)){
args39249.push((arguments[i__25894__auto___39253]));

var G__39254 = (i__25894__auto___39253 + (1));
i__25894__auto___39253 = G__39254;
continue;
} else {
}
break;
}

var G__39251 = args39249.length;
switch (G__39251) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39249.length)].join('')));

}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,meta));
});

thi.ng.geom.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;

thi.ng.geom.vector.vec2_QMARK_ = (function thi$ng$geom$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec2);
});
thi.ng.geom.vector.vec3_QMARK_ = (function thi$ng$geom$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec3);
});
thi.ng.geom.vector.V2X = thi.ng.geom.vector.vec2.call(null,(1),(0));
thi.ng.geom.vector.V2Y = thi.ng.geom.vector.vec2.call(null,(0),(1));
thi.ng.geom.vector.V3X = thi.ng.geom.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.vector.V3Y = thi.ng.geom.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.vector.V3Z = thi.ng.geom.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.vector.V2INF_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V2INF_PLUS_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.V3INF_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V3INF_PLUS_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.randvec2 = (function thi$ng$geom$vector$randvec2(var_args){
var args39256 = [];
var len__25893__auto___39259 = arguments.length;
var i__25894__auto___39260 = (0);
while(true){
if((i__25894__auto___39260 < len__25893__auto___39259)){
args39256.push((arguments[i__25894__auto___39260]));

var G__39261 = (i__25894__auto___39260 + (1));
i__25894__auto___39260 = G__39261;
continue;
} else {
}
break;
}

var G__39258 = args39256.length;
switch (G__39258) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39256.length)].join('')));

}
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec2.cljs$lang$maxFixedArity = 1;

thi.ng.geom.vector.randvec3 = (function thi$ng$geom$vector$randvec3(var_args){
var args39263 = [];
var len__25893__auto___39266 = arguments.length;
var i__25894__auto___39267 = (0);
while(true){
if((i__25894__auto___39267 < len__25893__auto___39266)){
args39263.push((arguments[i__25894__auto___39267]));

var G__39268 = (i__25894__auto___39267 + (1));
i__25894__auto___39267 = G__39268;
continue;
} else {
}
break;
}

var G__39265 = args39263.length;
switch (G__39265) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39263.length)].join('')));

}
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec3.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=vector.js.map?rel=1530813191758