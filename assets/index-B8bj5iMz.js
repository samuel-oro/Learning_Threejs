(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="174",li={ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ul=0,La=1,Nl=2,No=1,Fl=2,sn=3,En=0,Te=1,rn=2,Mn=0,ci=1,Da=2,qa=3,Ia=4,Ol=5,Un=100,Bl=101,zl=102,Hl=103,kl=104,Vl=200,Gl=201,Wl=202,Xl=203,mr=204,_r=205,Yl=206,$l=207,Zl=208,Kl=209,Jl=210,jl=211,Ql=212,tc=213,ec=214,gr=0,xr=1,vr=2,fi=3,Mr=4,Sr=5,Er=6,yr=7,Fo=0,nc=1,ic=2,Sn=0,sc=1,rc=2,ac=3,oc=4,lc=5,cc=6,hc=7,Oo=300,pi=301,mi=302,Tr=303,Ar=304,Rs=306,br=1e3,Fn=1001,wr=1002,Ve=1003,uc=1004,Wi=1005,Xe=1006,Us=1007,On=1008,cn=1009,Bo=1010,zo=1011,Li=1012,la=1013,Bn=1014,an=1015,Oi=1016,ca=1017,ha=1018,_i=1020,Ho=35902,ko=1021,Vo=1022,He=1023,Go=1024,Wo=1025,hi=1026,gi=1027,Xo=1028,ua=1029,Yo=1030,da=1031,fa=1033,gs=33776,xs=33777,vs=33778,Ms=33779,Rr=35840,Cr=35841,Pr=35842,Lr=35843,Dr=36196,qr=37492,Ir=37496,Ur=37808,Nr=37809,Fr=37810,Or=37811,Br=37812,zr=37813,Hr=37814,kr=37815,Vr=37816,Gr=37817,Wr=37818,Xr=37819,Yr=37820,$r=37821,Ss=36492,Zr=36494,Kr=36495,$o=36283,Jr=36284,jr=36285,Qr=36286,dc=3200,fc=3201,Zo=0,pc=1,vn="",Re="srgb",xi="srgb-linear",As="linear",Qt="srgb",Wn=7680,Ua=519,mc=512,_c=513,gc=514,Ko=515,xc=516,vc=517,Mc=518,Sc=519,Na=35044,Fa="300 es",on=2e3,bs=2001;class Vn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Es=Math.PI/180,ta=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ec(i,t){return(i%t+t)%t}function Ns(i,t,e){return(1-e)*i+e*t}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yc={DEG2RAD:Es};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],x=s[0],m=s[3],d=s[6],b=s[1],E=s[4],S=s[7],q=s[2],C=s[5],w=s[8];return r[0]=a*x+o*b+l*q,r[3]=a*m+o*E+l*C,r[6]=a*d+o*S+l*w,r[1]=c*x+h*b+u*q,r[4]=c*m+h*E+u*C,r[7]=c*d+h*S+u*w,r[2]=f*x+p*b+_*q,r[5]=f*m+p*E+_*C,r[8]=f*d+p*S+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,_=e*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fs.makeScale(t,e)),this}rotate(t){return this.premultiply(Fs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new Ft;function Jo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Di(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tc(){const i=Di("canvas");return i.style.display="block",i}const Oa={};function qn(i){i in Oa||(Oa[i]=!0,console.warn(i))}function Ac(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ba=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rc(){const i={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?As:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xi]:{primaries:t,whitePoint:n,transfer:As,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}const Xt=Rc();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class Cc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=Di("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Di("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pc=0;class pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Os(s[a].image)):r.push(Os(s[a]))}else r=Os(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lc=0;class Me extends Vn{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Fn,s=Fn,r=Xe,a=On,o=He,l=cn,c=Me.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Mi(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Oo;Me.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(p+1)/2,q=(d+1)/2,C=(h+f)/4,w=(u+x)/4,L=(_+m)/4;return E>S&&E>q?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=w/n):S>q?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=L/s):q<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),n=w/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dc extends Vn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Me(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jo extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qc extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==_){let m=1-o;const d=l*f+c*p+h*_+u*x,b=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const q=Math.sqrt(E),C=Math.atan2(q,d*b);m=Math.sin(m*C)/q,o=Math.sin(o*C)/q}const S=o*b;if(l=l*m+f*S,c=c*m+p*S,h=h*m+_*S,u=u*m+x*S,m===1-o){const q=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=q,c*=q,h*=q,u*=q}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*p-c*f,t[e+1]=l*_+h*f+c*u-o*p,t[e+2]=c*_+h*p+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new I,Ha=new Hn;class Bi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fe):Fe.fromBufferAttribute(r,a),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),Yi.subVectors(this.max,Ti),Yn.subVectors(t.a,Ti),$n.subVectors(t.b,Ti),Zn.subVectors(t.c,Ti),dn.subVectors($n,Yn),fn.subVectors(Zn,$n),wn.subVectors(Yn,Zn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-wn.z,wn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,wn.z,0,-wn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-wn.y,wn.x,0];return!zs(e,Yn,$n,Zn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,Yn,$n,Zn,Yi))?!1:($i.crossVectors(dn,fn),e=[$i.x,$i.y,$i.z],zs(e,Yn,$n,Zn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new I,new I,new I,new I,new I,new I,new I,new I],Fe=new I,Xi=new Bi,Yn=new I,$n=new I,Zn=new I,dn=new I,fn=new I,wn=new I,Ti=new I,Yi=new I,$i=new I,Rn=new I;function zs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rn.fromArray(i,r);const o=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ic=new Bi,Ai=new I,Hs=new I;class ma{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ic.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(Hs)),this.expandByPoint(Ai.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new I,ks=new I,Zi=new I,pn=new I,Vs=new I,Ki=new I,Gs=new I;class Qo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ks.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(ks);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zi),o=pn.dot(this.direction),l=-pn.dot(Zi),c=pn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,_;if(h>0)if(u=a*l-o,f=a*o-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ks).addScaledVector(Zi,f),p}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),s=je.dot(je)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,s,r){Vs.subVectors(e,t),Ki.subVectors(n,t),Gs.crossVectors(Vs,Ki);let a=this.direction.dot(Gs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,t);const l=o*this.direction.dot(Ki.crossVectors(pn,Ki));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(pn));if(c<0||l+c>a)return null;const h=-o*pn.dot(Gs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,_,x,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,_,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,_,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,_=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,_=c*h,x=c*u;e[0]=f+x*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,_=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,_=o*h,x=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uc,t,Nc)}lookAt(t,e,n){const s=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),mn.crossVectors(n,be),mn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),mn.crossVectors(n,be)),mn.normalize(),Ji.crossVectors(be,mn),s[0]=mn.x,s[4]=Ji.x,s[8]=be.x,s[1]=mn.y,s[5]=Ji.y,s[9]=be.y,s[2]=mn.z,s[6]=Ji.z,s[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],d=n[14],b=n[3],E=n[7],S=n[11],q=n[15],C=s[0],w=s[4],L=s[8],T=s[12],M=s[1],R=s[5],X=s[9],B=s[13],Y=s[2],$=s[6],k=s[10],K=s[14],z=s[3],ot=s[7],mt=s[11],Et=s[15];return r[0]=a*C+o*M+l*Y+c*z,r[4]=a*w+o*R+l*$+c*ot,r[8]=a*L+o*X+l*k+c*mt,r[12]=a*T+o*B+l*K+c*Et,r[1]=h*C+u*M+f*Y+p*z,r[5]=h*w+u*R+f*$+p*ot,r[9]=h*L+u*X+f*k+p*mt,r[13]=h*T+u*B+f*K+p*Et,r[2]=_*C+x*M+m*Y+d*z,r[6]=_*w+x*R+m*$+d*ot,r[10]=_*L+x*X+m*k+d*mt,r[14]=_*T+x*B+m*K+d*Et,r[3]=b*C+E*M+S*Y+q*z,r[7]=b*w+E*R+S*$+q*ot,r[11]=b*L+E*X+S*k+q*mt,r[15]=b*T+E*B+S*K+q*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],d=t[15];return _*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],d=t[15],b=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,E=_*f*c-h*m*c-_*l*p+a*m*p+h*l*d-a*f*d,S=h*x*c-_*u*c+_*o*p-a*x*p-h*o*d+a*u*d,q=_*u*l-h*x*l-_*o*f+a*x*f+h*o*m-a*u*m,C=e*b+n*E+s*S+r*q;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=b*w,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*w,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*w,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*w,t[4]=E*w,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*d+e*f*d)*w,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*d-e*l*d)*w,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*w,t[8]=S*w,t[9]=(_*u*r-h*x*r-_*n*p+e*x*p+h*n*d-e*u*d)*w,t[10]=(a*x*r-_*o*r+_*n*c-e*x*c-a*n*d+e*o*d)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*w,t[12]=q*w,t[13]=(h*x*s-_*u*s+_*n*f-e*x*f-h*n*m+e*u*m)*w,t[14]=(_*o*s-a*x*s-_*n*l+e*x*l+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,_=r*u,x=a*h,m=a*u,d=o*u,b=l*c,E=l*h,S=l*u,q=n.x,C=n.y,w=n.z;return s[0]=(1-(x+d))*q,s[1]=(p+S)*q,s[2]=(_-E)*q,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(f+d))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(_+E)*w,s[9]=(m-b)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Oe.copy(this);const c=1/r,h=1/a,u=1/o;return Oe.elements[0]*=c,Oe.elements[1]*=c,Oe.elements[2]*=c,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=on){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(o===on)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===bs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=on){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let _,x;if(o===on)_=(a+r)*u,x=-2*u;else if(o===bs)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new I,Oe=new oe,Uc=new I(0,0,0),Nc=new I(1,1,1),mn=new I,Ji=new I,be=new I,ka=new oe,Va=new Hn;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ka.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ka,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Va.setFromEuler(this),this.setFromQuaternion(Va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fc=0;const Ga=new I,Jn=new Hn,Qe=new oe,ji=new I,bi=new I,Oc=new I,Bc=new Hn,Wa=new I(1,0,0),Xa=new I(0,1,0),Ya=new I(0,0,1),$a={type:"added"},zc={type:"removed"},jn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class Ce extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new I,e=new hn,n=new Hn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ft}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(Wa,t)}rotateY(t){return this.rotateOnAxis(Xa,t)}rotateZ(t){return this.rotateOnAxis(Ya,t)}translateOnAxis(t,e){return Ga.copy(t).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wa,t)}translateY(t){return this.translateOnAxis(Xa,t)}translateZ(t){return this.translateOnAxis(Ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(bi,ji,this.up):Qe.lookAt(ji,bi,this.up),this.quaternion.setFromRotationMatrix(Qe),s&&(Qe.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(Qe),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($a),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($a),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,Oc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Bc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Be=new I,tn=new I,Xs=new I,en=new I,Qn=new I,ti=new I,Za=new I,Ys=new I,$s=new I,Zs=new I,Ks=new ae,Js=new ae,js=new ae;class ze{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Be.subVectors(t,e),s.cross(Be);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Be.subVectors(s,e),tn.subVectors(n,e),Xs.subVectors(t,e);const a=Be.dot(Be),o=Be.dot(tn),l=Be.dot(Xs),c=tn.dot(tn),h=tn.dot(Xs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ks.setScalar(0),Js.setScalar(0),js.setScalar(0),Ks.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),js.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ks,r.x),a.addScaledVector(Js,r.y),a.addScaledVector(js,r.z),a}static isFrontFacing(t,e,n,s){return Be.subVectors(n,e),tn.subVectors(t,e),Be.cross(tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Be.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,n),ti.subVectors(r,n),Ys.subVectors(t,n);const l=Qn.dot(Ys),c=ti.dot(Ys);if(l<=0&&c<=0)return e.copy(n);$s.subVectors(t,s);const h=Qn.dot($s),u=ti.dot($s);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Qn,a);Zs.subVectors(t,r);const p=Qn.dot(Zs),_=ti.dot(Zs);if(_>=0&&p<=_)return e.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ti,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Za.subVectors(r,s),o=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Za,o);const d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Ec(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qs(a,r,t+1/3),this.g=Qs(a,r,t),this.b=Qs(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=el[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Xt.fromWorkingColorSpace(ge.copy(this),t),Math.round(zt(ge.r*255,0,255))*65536+Math.round(zt(ge.g*255,0,255))*256+Math.round(zt(ge.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ge.copy(this),e);const n=ge.r,s=ge.g,r=ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=Re){Xt.fromWorkingColorSpace(ge.copy(this),t);const e=ge.r,n=ge.g,s=ge.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(Qi);const n=Ns(_n.h,Qi.h,e),s=Ns(_n.s,Qi.s,e),r=Ns(_n.l,Qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ge=new Jt;Jt.NAMES=el;let Hc=0;class zi extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=ci,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=_r,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nl extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new I,ts=new at;let kc=0;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class il extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sl extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vc=0;const De=new oe,tr=new Ce,ei=new I,we=new Bi,wi=new Bi,fe=new I;class un extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jo(t)?sl:il)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return De.makeRotationFromQuaternion(t),this.applyMatrix4(De),this}rotateX(t){return De.makeRotationX(t),this.applyMatrix4(De),this}rotateY(t){return De.makeRotationY(t),this.applyMatrix4(De),this}rotateZ(t){return De.makeRotationZ(t),this.applyMatrix4(De),this}translate(t,e,n){return De.makeTranslation(t,e,n),this.applyMatrix4(De),this}scale(t,e,n){return De.makeScale(t,e,n),this.applyMatrix4(De),this}lookAt(t){return tr.lookAt(t),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(we.min,wi.min),we.expandByPoint(fe),fe.addVectors(we.max,wi.max),we.expandByPoint(fe)):(we.expandByPoint(wi.min),we.expandByPoint(wi.max))}we.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fe.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),fe.add(ei)),s=Math.max(s,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,u=new I,f=new at,p=new at,_=new at,x=new I,m=new I;function d(L,T,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),_.sub(f);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(R),o[L].add(x),o[T].add(x),o[M].add(x),l[L].add(m),l[T].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,T=b.length;L<T;++L){const M=b[L],R=M.start,X=M.count;for(let B=R,Y=R+X;B<Y;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new I,S=new I,q=new I,C=new I;function w(L){q.fromBufferAttribute(s,L),C.copy(q);const T=o[L];E.copy(T),E.sub(q.multiplyScalar(q.dot(T))).normalize(),S.crossVectors(C,T);const R=S.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,R)}for(let L=0,T=b.length;L<T;++L){const M=b[L],R=M.start,X=M.count;for(let B=R,Y=R+X;B<Y;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new Ye(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new oe,Cn=new Qo,es=new ma,Ja=new I,ns=new I,is=new I,ss=new I,er=new I,rs=new I,ja=new I,as=new I;class ke extends Ce{constructor(t=new un,e=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(er.fromBufferAttribute(u,t),a?rs.addScaledVector(er,h):rs.addScaledVector(er.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(es.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(es,Ja)===null||Cn.origin.distanceToSquared(Ja)>(t.far-t.near)**2))&&(Ka.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,q=E;S<q;S+=3){const C=o.getX(S),w=o.getX(S+1),L=o.getX(S+2);s=os(this,d,t,n,c,h,u,C,w,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const b=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=os(this,a,t,n,c,h,u,b,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,q=E;S<q;S+=3){const C=S,w=S+1,L=S+2;s=os(this,d,t,n,c,h,u,C,w,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const b=m,E=m+1,S=m+2;s=os(this,a,t,n,c,h,u,b,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Gc(i,t,e,n,s,r,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===En,o),l===null)return null;as.copy(o),as.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:i}}function os(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ns),i.getVertexPosition(l,is),i.getVertexPosition(c,ss);const h=Gc(i,t,e,n,ns,is,ss,ja);if(h){const u=new I;ze.getBarycoord(ja,ns,is,ss,u),s&&(h.uv=ze.getInterpolatedAttribute(s,o,l,c,u,new at)),r&&(h.uv1=ze.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=ze.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};ze.getNormal(ns,is,ss,f.normal),h.face=f,h.barycoord=u}return h}class Hi extends un{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function _(x,m,d,b,E,S,q,C,w,L,T){const M=S/w,R=q/L,X=S/2,B=q/2,Y=C/2,$=w+1,k=L+1;let K=0,z=0;const ot=new I;for(let mt=0;mt<k;mt++){const Et=mt*R-B;for(let Ut=0;Ut<$;Ut++){const $t=Ut*M-X;ot[x]=$t*b,ot[m]=Et*E,ot[d]=Y,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[d]=C>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ut/w),u.push(1-mt/L),K+=1}}for(let mt=0;mt<L;mt++)for(let Et=0;Et<w;Et++){const Ut=f+Et+$*mt,$t=f+Et+$*(mt+1),W=f+(Et+1)+$*(mt+1),st=f+(Et+1)+$*mt;l.push(Ut,$t,st),l.push($t,W,st),z+=6}o.addGroup(p,z,T),p+=z,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=vi(i[e]);for(const s in n)t[s]=n[s]}return t}function Wc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Xc={clone:vi,merge:ve};var Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=$c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Wc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class al extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new I,Qa=new at,to=new at;class qe extends al{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,Qa,to),e.subVectors(to,Qa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class Zc extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(ni,ii,t,e);s.layers=this.layers,this.add(s);const r=new qe(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new qe(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new qe(ni,ii,t,e);o.layers=this.layers,this.add(o);const l=new qe(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new qe(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ol extends Me{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kc extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Mn});r.uniforms.tEquirect.value=e;const a=new ke(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Xe),new Zc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class ls extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jc={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jc)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jc extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ir=new I,Qc=new I,th=new Ft;class xn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ir.subVectors(n,e).cross(Qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||th.getNormalMatrix(t),s=this.coplanarPoint(ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new ma,cs=new I;class ll{constructor(t=new xn,e=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],b=s[13],E=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,m-p,S-d).normalize(),n[1].setComponents(l+r,f+c,m+p,S+d).normalize(),n[2].setComponents(l+a,f+h,m+_,S+b).normalize(),n[3].setComponents(l-a,f-h,m-_,S-b).normalize(),n[4].setComponents(l-o,f-u,m-x,S-E).normalize(),e===on)n[5].setComponents(l+o,f+u,m+x,S+E).normalize();else if(e===bs)n[5].setComponents(o,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cs.x=s.normal.x>0?t.max.x:t.min.x,cs.y=s.normal.y>0?t.max.y:t.min.y,cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cl extends Me{constructor(t,e,n,s,r,a,o,l,c,h=hi){if(h!==hi&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hi&&(n=Bn),n===void 0&&h===gi&&(n=_i),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ze{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new oe;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(zt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(zt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _a extends Ze{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class eh extends _a{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ga(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const hs=new I,sr=new ga,rr=new ga,ar=new ga;class nh extends Ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(hs.subVectors(s[0],s[1]).add(s[0]),c=hs);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(hs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),sr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,x,m),rr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,x,m),ar.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(sr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),rr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ar.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(sr.calc(l),rr.calc(l),ar.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function eo(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ih(i,t){const e=1-i;return e*e*t}function sh(i,t){return 2*(1-i)*i*t}function rh(i,t){return i*i*t}function Ci(i,t,e,n){return ih(i,t)+sh(i,e)+rh(i,n)}function ah(i,t){const e=1-i;return e*e*e*t}function oh(i,t){const e=1-i;return 3*e*e*i*t}function lh(i,t){return 3*(1-i)*i*i*t}function ch(i,t){return i*i*i*t}function Pi(i,t,e,n,s){return ah(i,t)+oh(i,e)+lh(i,n)+ch(i,s)}class hl extends Ze{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pi(t,s.x,r.x,a.x,o.x),Pi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hh extends Ze{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pi(t,s.x,r.x,a.x,o.x),Pi(t,s.y,r.y,a.y,o.y),Pi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ul extends Ze{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends Ze{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dl extends Ze{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ci(t,s.x,r.x,a.x),Ci(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dh extends Ze{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ci(t,s.x,r.x,a.x),Ci(t,s.y,r.y,a.y),Ci(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fl extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(eo(o,l.x,c.x,h.x,u.x),eo(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var ea=Object.freeze({__proto__:null,ArcCurve:eh,CatmullRomCurve3:nh,CubicBezierCurve:hl,CubicBezierCurve3:hh,EllipseCurve:_a,LineCurve:ul,LineCurve3:uh,QuadraticBezierCurve:dl,QuadraticBezierCurve3:dh,SplineCurve:fl});class fh extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ea[s.type]().fromJSON(s))}return this}}class na extends fh{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ul(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new dl(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new hl(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new fl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new _a(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ys extends na{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new na().fromJSON(s))}return this}}class ph{static triangulate(t,e,n=2){const s=e&&e.length,r=s?e[0]*n:t.length;let a=pl(t,0,r,n,!0);const o=[];if(!a||a.next===a.prev)return o;let l,c,h,u,f,p,_;if(s&&(a=vh(t,e,a,n)),t.length>80*n){l=h=t[0],c=u=t[1];for(let x=n;x<r;x+=n)f=t[x],p=t[x+1],f<l&&(l=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p);_=Math.max(h-l,u-c),_=_!==0?32767/_:0}return qi(a,o,n,l,c,_,0),o}}function pl(i,t,e,n,s){let r,a;if(s===Ph(i,t,e,n)>0)for(r=t;r<e;r+=n)a=no(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=no(r,i[r],i[r+1],a);return a&&Cs(a,a.next)&&(Ui(a),a=a.next),a}function kn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||ie(e.prev,e,e.next)===0)){if(Ui(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qi(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Th(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?_h(i,n,s,r):mh(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ui(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gh(kn(i),t,e),qi(i,t,e,n,s,r,2)):a===2&&xh(i,t,e,n,s,r):qi(kn(i),t,e,n,s,r,1);break}}}function mh(i){const t=i.prev,e=i,n=i.next;if(ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=p&&ai(s,o,r,l,a,c,_.x,_.y)&&ie(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function _h(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ie(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=ia(p,_,t,e,n),b=ia(x,m,t,e,n);let E=i.prevZ,S=i.nextZ;for(;E&&E.z>=d&&S&&S.z<=b;){if(E.x>=p&&E.x<=x&&E.y>=_&&E.y<=m&&E!==s&&E!==a&&ai(o,h,l,u,c,f,E.x,E.y)&&ie(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=p&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&ai(o,h,l,u,c,f,S.x,S.y)&&ie(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=d;){if(E.x>=p&&E.x<=x&&E.y>=_&&E.y<=m&&E!==s&&E!==a&&ai(o,h,l,u,c,f,E.x,E.y)&&ie(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=b;){if(S.x>=p&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&ai(o,h,l,u,c,f,S.x,S.y)&&ie(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function gh(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Cs(s,r)&&ml(s,n,n.next,r)&&Ii(s,r)&&Ii(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ui(n),Ui(n.next),n=i=r),n=n.next}while(n!==i);return kn(n)}function xh(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wh(a,o)){let l=_l(a,o);a=kn(a,a.next),l=kn(l,l.next),qi(a,t,e,n,s,r,0),qi(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vh(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=pl(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(bh(c));for(s.sort(Mh),r=0;r<s.length;r++)e=Sh(s[r],e);return e}function Mh(i,t){return i.x-t.x}function Sh(i,t){const e=Eh(i,t);if(!e)return t;const n=_l(e,i);return kn(n,n.next),kn(e,e.next)}function Eh(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ai(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ii(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&yh(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function yh(i,t){return ie(i.prev,i,t.prev)<0&&ie(t.next,i,i.next)<0}function Th(i,t,e,n){let s=i;do s.z===0&&(s.z=ia(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ah(s)}function Ah(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ia(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bh(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ai(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function wh(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rh(i,t)&&(Ii(i,t)&&Ii(t,i)&&Ch(i,t)&&(ie(i.prev,i,t.prev)||ie(i,t.prev,t))||Cs(i,t)&&ie(i.prev,i,i.next)>0&&ie(t.prev,t,t.next)>0)}function ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function ml(i,t,e,n){const s=ds(ie(i,t,e)),r=ds(ie(i,t,n)),a=ds(ie(e,n,i)),o=ds(ie(e,n,t));return!!(s!==r&&a!==o||s===0&&us(i,e,t)||r===0&&us(i,n,t)||a===0&&us(e,i,n)||o===0&&us(e,t,n))}function us(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ds(i){return i>0?1:i<0?-1:0}function Rh(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ml(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ii(i,t){return ie(i.prev,i,i.next)<0?ie(i,t,i.next)>=0&&ie(i,i.prev,t)>=0:ie(i,t,i.prev)<0||ie(i,i.next,t)<0}function Ch(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _l(i,t){const e=new sa(i.i,i.x,i.y),n=new sa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function no(i,t,e,n){const s=new sa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ui(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ph(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class di{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return di.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];io(t),so(n,t);let a=t.length;e.forEach(io);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,so(n,e[l]);const o=ph.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function io(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function so(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class xa extends un{constructor(t=new ys([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Lh;let E,S=!1,q,C,w,L;d&&(E=d.getSpacedPoints(h),S=!0,f=!1,q=d.computeFrenetFrames(h,!1),C=new I,w=new I,L=new I),f||(m=0,p=0,_=0,x=0);const T=o.extractPoints(c);let M=T.shape;const R=T.holes;if(!di.isClockWise(M)){M=M.reverse();for(let Q=0,j=R.length;Q<j;Q++){const A=R[Q];di.isClockWise(A)&&(R[Q]=A.reverse())}}const B=di.triangulateShape(M,R),Y=M;for(let Q=0,j=R.length;Q<j;Q++){const A=R[Q];M=M.concat(A)}function $(Q,j,A){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(j,A)}const k=M.length,K=B.length;function z(Q,j,A){let At,tt,gt;const it=Q.x-j.x,Pt=Q.y-j.y,dt=A.x-Q.x,y=A.y-Q.y,g=it*it+Pt*Pt,N=it*y-Pt*dt;if(Math.abs(N)>Number.EPSILON){const V=Math.sqrt(g),J=Math.sqrt(dt*dt+y*y),G=j.x-Pt/V,Tt=j.y+it/V,ct=A.x-y/J,_t=A.y+dt/J,Ht=((ct-G)*y-(_t-Tt)*dt)/(it*y-Pt*dt);At=G+it*Ht-Q.x,tt=Tt+Pt*Ht-Q.y;const nt=At*At+tt*tt;if(nt<=2)return new at(At,tt);gt=Math.sqrt(nt/2)}else{let V=!1;it>Number.EPSILON?dt>Number.EPSILON&&(V=!0):it<-Number.EPSILON?dt<-Number.EPSILON&&(V=!0):Math.sign(Pt)===Math.sign(y)&&(V=!0),V?(At=-Pt,tt=it,gt=Math.sqrt(g)):(At=it,tt=Pt,gt=Math.sqrt(g/2))}return new at(At/gt,tt/gt)}const ot=[];for(let Q=0,j=Y.length,A=j-1,At=Q+1;Q<j;Q++,A++,At++)A===j&&(A=0),At===j&&(At=0),ot[Q]=z(Y[Q],Y[A],Y[At]);const mt=[];let Et,Ut=ot.concat();for(let Q=0,j=R.length;Q<j;Q++){const A=R[Q];Et=[];for(let At=0,tt=A.length,gt=tt-1,it=At+1;At<tt;At++,gt++,it++)gt===tt&&(gt=0),it===tt&&(it=0),Et[At]=z(A[At],A[gt],A[it]);mt.push(Et),Ut=Ut.concat(Et)}for(let Q=0;Q<m;Q++){const j=Q/m,A=p*Math.cos(j*Math.PI/2),At=_*Math.sin(j*Math.PI/2)+x;for(let tt=0,gt=Y.length;tt<gt;tt++){const it=$(Y[tt],ot[tt],At);rt(it.x,it.y,-A)}for(let tt=0,gt=R.length;tt<gt;tt++){const it=R[tt];Et=mt[tt];for(let Pt=0,dt=it.length;Pt<dt;Pt++){const y=$(it[Pt],Et[Pt],At);rt(y.x,y.y,-A)}}}const $t=_+x;for(let Q=0;Q<k;Q++){const j=f?$(M[Q],Ut[Q],$t):M[Q];S?(w.copy(q.normals[0]).multiplyScalar(j.x),C.copy(q.binormals[0]).multiplyScalar(j.y),L.copy(E[0]).add(w).add(C),rt(L.x,L.y,L.z)):rt(j.x,j.y,0)}for(let Q=1;Q<=h;Q++)for(let j=0;j<k;j++){const A=f?$(M[j],Ut[j],$t):M[j];S?(w.copy(q.normals[Q]).multiplyScalar(A.x),C.copy(q.binormals[Q]).multiplyScalar(A.y),L.copy(E[Q]).add(w).add(C),rt(L.x,L.y,L.z)):rt(A.x,A.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const j=Q/m,A=p*Math.cos(j*Math.PI/2),At=_*Math.sin(j*Math.PI/2)+x;for(let tt=0,gt=Y.length;tt<gt;tt++){const it=$(Y[tt],ot[tt],At);rt(it.x,it.y,u+A)}for(let tt=0,gt=R.length;tt<gt;tt++){const it=R[tt];Et=mt[tt];for(let Pt=0,dt=it.length;Pt<dt;Pt++){const y=$(it[Pt],Et[Pt],At);S?rt(y.x,y.y+E[h-1].y,E[h-1].x+A):rt(y.x,y.y,u+A)}}}W(),st();function W(){const Q=s.length/3;if(f){let j=0,A=k*j;for(let At=0;At<K;At++){const tt=B[At];wt(tt[2]+A,tt[1]+A,tt[0]+A)}j=h+m*2,A=k*j;for(let At=0;At<K;At++){const tt=B[At];wt(tt[0]+A,tt[1]+A,tt[2]+A)}}else{for(let j=0;j<K;j++){const A=B[j];wt(A[2],A[1],A[0])}for(let j=0;j<K;j++){const A=B[j];wt(A[0]+k*h,A[1]+k*h,A[2]+k*h)}}n.addGroup(Q,s.length/3-Q,0)}function st(){const Q=s.length/3;let j=0;yt(Y,j),j+=Y.length;for(let A=0,At=R.length;A<At;A++){const tt=R[A];yt(tt,j),j+=tt.length}n.addGroup(Q,s.length/3-Q,1)}function yt(Q,j){let A=Q.length;for(;--A>=0;){const At=A;let tt=A-1;tt<0&&(tt=Q.length-1);for(let gt=0,it=h+m*2;gt<it;gt++){const Pt=k*gt,dt=k*(gt+1),y=j+At+Pt,g=j+tt+Pt,N=j+tt+dt,V=j+At+dt;Vt(y,g,N,V)}}}function rt(Q,j,A){l.push(Q),l.push(j),l.push(A)}function wt(Q,j,A){bt(Q),bt(j),bt(A);const At=s.length/3,tt=b.generateTopUV(n,s,At-3,At-2,At-1);Yt(tt[0]),Yt(tt[1]),Yt(tt[2])}function Vt(Q,j,A,At){bt(Q),bt(j),bt(At),bt(j),bt(A),bt(At);const tt=s.length/3,gt=b.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Yt(gt[0]),Yt(gt[1]),Yt(gt[3]),Yt(gt[1]),Yt(gt[2]),Yt(gt[3])}function bt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Yt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Dh(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ea[s.type]().fromJSON(s)),new xa(n,t.options)}}const Lh={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],_=t[s*3+2],x=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-u),new at(f,1-_),new at(x,1-d)]:[new at(o,1-l),new at(h,1-u),new at(p,1-_),new at(m,1-d)]}};function Dh(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ps extends un{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],_=[],x=[],m=[];for(let d=0;d<h;d++){const b=d*f-a;for(let E=0;E<c;E++){const S=E*u-r;_.push(S,-b,0),x.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const E=b+c*d,S=b+c*(d+1),q=b+1+c*(d+1),C=b+1+c*d;p.push(E,S,C),p.push(S,q,C)}this.setIndex(p),this.setAttribute("position",new Ie(_,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.widthSegments,t.heightSegments)}}class va extends un{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,d=(s+1)*(p-1)+_,b=(s+1)*p+_;a.push(x,m,b),a.push(m,d,b)}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qh extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ih extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gl extends zi{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Jt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ws={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Uh{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Nh=new Uh;class ki{constructor(t){this.manager=t!==void 0?t:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const nn={};class Fh extends Error{constructor(t,e){super(t),this.response=e}}class Oh extends ki{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ws.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(nn[t]!==void 0){nn[t].push({onLoad:e,onProgress:n,onError:s});return}nn[t]=[],nn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=nn[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){b();function b(){u.read().then(({done:E,value:S})=>{if(E)d.close();else{x+=S.byteLength;const q=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let C=0,w=h.length;C<w;C++){const L=h[C];L.onProgress&&L.onProgress(q)}d.enqueue(S),b()}},E=>{d.error(E)})}}});return new Response(m)}else throw new Fh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{ws.add(t,c);const h=nn[t];delete nn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=nn[t];if(h===void 0)throw this.manager.itemError(t),c;delete nn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Bh extends ki{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ws.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Di("img");function l(){h(),ws.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class zh extends ki{constructor(t){super(t)}load(t,e,n,s){const r=new Me,a=new Bh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Hh extends al{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kh extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Vh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ro(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ro();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ro(){return performance.now()}class ao{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gh{constructor(){this.type="ShapePath",this.color=new Jt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new na,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const b=[];for(let E=0,S=d.length;E<S;E++){const q=d[E],C=new ys;C.curves=q.curves,b.push(C)}return b}function n(d,b){const E=b.length;let S=!1;for(let q=E-1,C=0;C<E;q=C++){let w=b[q],L=b[C],T=L.x-w.x,M=L.y-w.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(w=b[C],T=-T,L=b[q],M=-M),d.y<w.y||d.y>L.y)continue;if(d.y===w.y){if(d.x===w.x)return!0}else{const R=M*(d.x-w.x)-T*(d.y-w.y);if(R===0)return!0;if(R<0)continue;S=!S}}else{if(d.y!==w.y)continue;if(L.x<=d.x&&d.x<=w.x||w.x<=d.x&&d.x<=L.x)return!0}}return S}const s=di.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new ys,l.curves=o.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const u=[],f=[];let p=[],_=0,x;f[_]=void 0,p[_]=[];for(let d=0,b=r.length;d<b;d++)o=r[d],x=o.getPoints(),a=s(x),a=t?!a:a,a?(!h&&f[_]&&_++,f[_]={s:new ys,p:x},f[_].s.curves=o.curves,h&&_++,p[_]=[]):p[_].push({h:o,p:x[0]});if(!f[0])return e(r);if(f.length>1){let d=!1,b=0;for(let E=0,S=f.length;E<S;E++)u[E]=[];for(let E=0,S=f.length;E<S;E++){const q=p[E];for(let C=0;C<q.length;C++){const w=q[C];let L=!0;for(let T=0;T<f.length;T++)n(w.p,f[T].p)&&(E!==T&&b++,L?(L=!1,u[T].push(w)):d=!0);L&&u[E].push(w)}}b>0&&d===!1&&(p=u)}let m;for(let d=0,b=f.length;d<b;d++){l=f[d].s,c.push(l),m=p[d];for(let E=0,S=m.length;E<S;E++)l.holes.push(m[E].h)}return c}}class Wh extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function oo(i,t,e,n){const s=Xh(n);switch(e){case ko:return i*t;case Go:return i*t;case Wo:return i*t*2;case Xo:return i*t/s.components*s.byteLength;case ua:return i*t/s.components*s.byteLength;case Yo:return i*t*2/s.components*s.byteLength;case da:return i*t*2/s.components*s.byteLength;case Vo:return i*t*3/s.components*s.byteLength;case He:return i*t*4/s.components*s.byteLength;case fa:return i*t*4/s.components*s.byteLength;case gs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vs:case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cr:case Lr:return Math.max(i,16)*Math.max(t,8)/4;case Rr:case Pr:return Math.max(i,8)*Math.max(t,8)/2;case Dr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Br:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ss:case Zr:case Kr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $o:case Jr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jr:case Qr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xh(i){switch(i){case cn:case Bo:return{byteLength:1,components:1};case Li:case zo:case Oi:return{byteLength:2,components:1};case ca:case ha:return{byteLength:2,components:4};case Bn:case la:case an:return{byteLength:4,components:1};case Ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yh(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ou=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ef=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:$h,alphahash_pars_fragment:Zh,alphamap_fragment:Kh,alphamap_pars_fragment:Jh,alphatest_fragment:jh,alphatest_pars_fragment:Qh,aomap_fragment:tu,aomap_pars_fragment:eu,batching_pars_vertex:nu,batching_vertex:iu,begin_vertex:su,beginnormal_vertex:ru,bsdfs:au,iridescence_fragment:ou,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:du,color_fragment:fu,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:_u,common:gu,cube_uv_reflection_fragment:xu,defaultnormal_vertex:vu,displacementmap_pars_vertex:Mu,displacementmap_vertex:Su,emissivemap_fragment:Eu,emissivemap_pars_fragment:yu,colorspace_fragment:Tu,colorspace_pars_fragment:Au,envmap_fragment:bu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Ru,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:zu,envmap_vertex:Pu,fog_vertex:Lu,fog_pars_vertex:Du,fog_fragment:qu,fog_pars_fragment:Iu,gradientmap_pars_fragment:Uu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Ou,lights_pars_begin:Bu,lights_toon_fragment:Hu,lights_toon_pars_fragment:ku,lights_phong_fragment:Vu,lights_phong_pars_fragment:Gu,lights_physical_fragment:Wu,lights_physical_pars_fragment:Xu,lights_fragment_begin:Yu,lights_fragment_maps:$u,lights_fragment_end:Zu,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:Qu,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:hd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:vd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:Ed,premultiplied_alpha_fragment:yd,project_vertex:Td,dithering_fragment:Ad,dithering_pars_fragment:bd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Dd,skinbase_vertex:qd,skinning_pars_vertex:Id,skinning_vertex:Ud,skinnormal_vertex:Nd,specularmap_fragment:Fd,specularmap_pars_fragment:Od,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:Hd,transmission_pars_fragment:kd,uv_pars_fragment:Vd,uv_pars_vertex:Gd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:Yd,background_frag:$d,backgroundCube_vert:Zd,backgroundCube_frag:Kd,cube_vert:Jd,cube_frag:jd,depth_vert:Qd,depth_frag:tf,distanceRGBA_vert:ef,distanceRGBA_frag:nf,equirect_vert:sf,equirect_frag:rf,linedashed_vert:af,linedashed_frag:of,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:hf,meshlambert_frag:uf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:_f,meshphong_frag:gf,meshphysical_vert:xf,meshphysical_frag:vf,meshtoon_vert:Mf,meshtoon_frag:Sf,points_vert:Ef,points_frag:yf,shadow_vert:Tf,shadow_frag:Af,sprite_vert:bf,sprite_frag:wf},lt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ge={basic:{uniforms:ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ve([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ve([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ve([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ve([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ve([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ve([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:ve([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:ve([lt.lights,lt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Ge.physical={uniforms:ve([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const fs={r:0,b:0,g:0},Ln=new hn,Rf=new oe;function Cf(i,t,e,n,s,r,a){const o=new Jt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function x(E){let S=!1;const q=_(E);q===null?d(o,l):q&&q.isColor&&(d(q,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const q=_(S);q&&(q.isCubeTexture||q.mapping===Rs)?(h===void 0&&(h=new ke(new Hi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:vi(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ln.copy(S.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=q,h.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rf.makeRotationFromEuler(Ln)),h.material.toneMapped=Xt.getTransfer(q.colorSpace)!==Qt,(u!==q||f!==q.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=q,f=q.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):q&&q.isTexture&&(c===void 0&&(c=new ke(new Ps(2,2),new yn({name:"BackgroundMaterial",uniforms:vi(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=q,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(q.colorSpace)!==Qt,q.matrixAutoUpdate===!0&&q.updateMatrix(),c.material.uniforms.uvTransform.value.copy(q.matrix),(u!==q||f!==q.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=q,f=q.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(fs,rl(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,S,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:x,addToRenderList:m,dispose:b}}function Pf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,R,X,B,Y){let $=!1;const k=u(B,X,R);r!==k&&(r=k,c(r.object)),$=p(M,B,X,Y),$&&_(M,B,X,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(M,R,X,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,R,X){const B=X.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let $=Y[R.id];$===void 0&&($={},Y[R.id]=$);let k=$[B];return k===void 0&&(k=f(l()),$[B]=k),k}function f(M){const R=[],X=[],B=[];for(let Y=0;Y<e;Y++)R[Y]=0,X[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,R,X,B){const Y=r.attributes,$=R.attributes;let k=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){const mt=Y[z];let Et=$[z];if(Et===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),mt===void 0||mt.attribute!==Et||Et&&mt.data!==Et.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function _(M,R,X,B){const Y={},$=R.attributes;let k=0;const K=X.getAttributes();for(const z in K)if(K[z].location>=0){let mt=$[z];mt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));const Et={};Et.attribute=mt,mt&&mt.data&&(Et.data=mt.data),Y[z]=Et,k++}r.attributes=Y,r.attributesNum=k,r.index=B}function x(){const M=r.newAttributes;for(let R=0,X=M.length;R<X;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){const X=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;X[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),Y[M]!==R&&(i.vertexAttribDivisor(M,R),Y[M]=R)}function b(){const M=r.newAttributes,R=r.enabledAttributes;for(let X=0,B=R.length;X<B;X++)R[X]!==M[X]&&(i.disableVertexAttribArray(X),R[X]=0)}function E(M,R,X,B,Y,$,k){k===!0?i.vertexAttribIPointer(M,R,X,Y,$):i.vertexAttribPointer(M,R,X,B,Y,$)}function S(M,R,X,B){x();const Y=B.attributes,$=X.getAttributes(),k=R.defaultAttributeValues;for(const K in $){const z=$[K];if(z.location>=0){let ot=Y[K];if(ot===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const mt=ot.normalized,Et=ot.itemSize,Ut=t.get(ot);if(Ut===void 0)continue;const $t=Ut.buffer,W=Ut.type,st=Ut.bytesPerElement,yt=W===i.INT||W===i.UNSIGNED_INT||ot.gpuType===la;if(ot.isInterleavedBufferAttribute){const rt=ot.data,wt=rt.stride,Vt=ot.offset;if(rt.isInstancedInterleavedBuffer){for(let bt=0;bt<z.locationSize;bt++)d(z.location+bt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let bt=0;bt<z.locationSize;bt++)m(z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let bt=0;bt<z.locationSize;bt++)E(z.location+bt,Et/z.locationSize,W,mt,wt*st,(Vt+Et/z.locationSize*bt)*st,yt)}else{if(ot.isInstancedBufferAttribute){for(let rt=0;rt<z.locationSize;rt++)d(z.location+rt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let rt=0;rt<z.locationSize;rt++)m(z.location+rt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let rt=0;rt<z.locationSize;rt++)E(z.location+rt,Et/z.locationSize,W,mt,Et*st,Et/z.locationSize*rt*st,yt)}}else if(k!==void 0){const mt=k[K];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(z.location,mt);break;case 3:i.vertexAttrib3fv(z.location,mt);break;case 4:i.vertexAttrib4fv(z.location,mt);break;default:i.vertexAttrib1fv(z.location,mt)}}}}b()}function q(){L();for(const M in n){const R=n[M];for(const X in R){const B=R[X];for(const Y in B)h(B[Y].object),delete B[Y];delete R[X]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const X in R){const B=R[X];for(const Y in B)h(B[Y].object),delete B[Y];delete R[X]}delete n[M.id]}function w(M){for(const R in n){const X=n[R];if(X[M.id]===void 0)continue;const B=X[M.id];for(const Y in B)h(B[Y].object),delete B[Y];delete X[M.id]}}function L(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:T,dispose:q,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Lf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*f[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Df(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==He&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==an&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:q,maxSamples:C}}function qf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new xn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,E=b*4;let S=d.clippingState||null;l.value=S,S=h(_,f,E,p);for(let q=0;q!==E;++q)S[q]=e[q];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==x;++E,S+=4)a.copy(u[E]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function If(i){let t=new WeakMap;function e(a,o){return o===Tr?a.mapping=pi:o===Ar&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tr||o===Ar)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const oi=4,lo=[.125,.215,.35,.446,.526,.582],Nn=20,or=new Hh,co=new Jt;let lr=null,cr=0,hr=0,ur=!1;const In=(1+Math.sqrt(5))/2,si=1/In,ho=[new I(-In,si,0),new I(In,si,0),new I(-si,0,In),new I(si,0,In),new I(0,In,-si),new I(0,In,si),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Uf=new I;class uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Uf}=r;lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lr,cr,hr),this._renderer.xr.enabled=ur,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Oi,format:He,colorSpace:xi,depthBuffer:!1},s=fo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(r)),this._blurMaterial=Ff(r,t,e)}return s}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,or)}_sceneToCubeUV(t,e,n,s,r){const l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(co),u.toneMapping=Sn,u.autoClear=!1;const _=new nl({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),x=new ke(new Hi,_);let m=!1;const d=t.background;d?d.isColor&&(_.color.copy(d),t.background=null,m=!0):(_.color.copy(co),m=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const S=this._cubeSize;ps(s,E*S,b>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(x,l),u.render(t,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===pi||t.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ho[(s-r-1)%ho.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ke(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const d=[];let b=0;for(let w=0;w<Nn;++w){const L=w/x,T=Math.exp(-L*L/2);d.push(T),w===0?b+=T:w<m&&(b+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;const S=this._sizeLods[s],q=3*S*(s>E-oi?s-E+oi:0),C=4*(this._cubeSize-S);ps(e,q,C,3*S,2*S),l.setRenderTarget(e),l.render(u,or)}}function Nf(i){const t=[],e=[],n=[];let s=i;const r=i-oi+1+lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-oi?l=lo[a-i+oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,d=1,b=new Float32Array(x*_*p),E=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,L=C>2?0:-1,T=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];b.set(T,x*_*C),E.set(f,m*_*C);const M=[C,C,C,C,C,C];S.set(M,d*_*C)}const q=new un;q.setAttribute("position",new Ye(b,x)),q.setAttribute("uv",new Ye(E,m)),q.setAttribute("faceIndex",new Ye(S,d)),t.push(q),s>oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fo(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ff(i,t,e){const n=new Float32Array(Nn),s=new I(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function po(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function mo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Of(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Tr||l===Ar,h=l===pi||l===mi;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new uo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new uo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zf(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let E=0,S=b.length;E<S;E+=3){const q=b[E+0],C=b[E+1],w=b[E+2];f.push(q,C,C,w,w,q)}}else if(_!==void 0){const b=_.array;x=_.version;for(let E=0,S=b.length/3-1;E<S;E+=3){const q=E+0,C=E+1,w=E+2;f.push(q,C,C,w,w,q)}}else return;const m=new(Jo(f)?sl:il)(f,1);m.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),e.update(p,n,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function u(f,p,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,_);let d=0;for(let b=0;b<_;b++)d+=p[b]*x[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vf(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let q=o.attributes.position.count*S,C=1;q>t.maxTextureSize&&(C=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const w=new Float32Array(q*C*4*u),L=new jo(w,q,C,u);L.type=an,L.needsUpdate=!0;const T=S*4;for(let R=0;R<u;R++){const X=d[R],B=b[R],Y=E[R],$=q*C*4*R;for(let k=0;k<X.count;k++){const K=k*T;_===!0&&(s.fromBufferAttribute(X,k),w[$+K+0]=s.x,w[$+K+1]=s.y,w[$+K+2]=s.z,w[$+K+3]=0),x===!0&&(s.fromBufferAttribute(B,k),w[$+K+4]=s.x,w[$+K+5]=s.y,w[$+K+6]=s.z,w[$+K+7]=0),m===!0&&(s.fromBufferAttribute(Y,k),w[$+K+8]=s.x,w[$+K+9]=s.y,w[$+K+10]=s.z,w[$+K+11]=Y.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new at(q,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gf(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const vl=new Me,_o=new cl(1,1),Ml=new jo,Sl=new qc,El=new ol,go=[],xo=[],vo=new Float32Array(16),Mo=new Float32Array(9),So=new Float32Array(4);function Si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=go[s];if(r===void 0&&(r=new Float32Array(s),go[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ls(i,t){let e=xo[t];e===void 0&&(e=new Int32Array(t),xo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function Yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function $f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function Zf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),de(e,n)}}function Kf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Mo.set(n),i.uniformMatrix3fv(this.addr,!1,Mo),de(e,n)}}function Jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;vo.set(n),i.uniformMatrix4fv(this.addr,!1,vo),de(e,n)}}function jf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function np(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_o.compareFunction=Ko,r=_o):r=vl,e.setTexture2D(t||r,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sl,s)}function lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||El,s)}function cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ml,s)}function hp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return Yf;case 35666:return $f;case 35674:return Zf;case 35675:return Kf;case 35676:return Jf;case 5124:case 35670:return jf;case 35667:case 35671:return Qf;case 35668:case 35672:return tp;case 35669:case 35673:return ep;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}function up(i,t){i.uniform1fv(this.addr,t)}function dp(i,t){const e=Si(t,this.size,2);i.uniform2fv(this.addr,e)}function fp(i,t){const e=Si(t,this.size,3);i.uniform3fv(this.addr,e)}function pp(i,t){const e=Si(t,this.size,4);i.uniform4fv(this.addr,e)}function mp(i,t){const e=Si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _p(i,t){const e=Si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gp(i,t){const e=Si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xp(i,t){i.uniform1iv(this.addr,t)}function vp(i,t){i.uniform2iv(this.addr,t)}function Mp(i,t){i.uniform3iv(this.addr,t)}function Sp(i,t){i.uniform4iv(this.addr,t)}function Ep(i,t){i.uniform1uiv(this.addr,t)}function yp(i,t){i.uniform2uiv(this.addr,t)}function Tp(i,t){i.uniform3uiv(this.addr,t)}function Ap(i,t){i.uniform4uiv(this.addr,t)}function bp(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vl,r[a])}function wp(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sl,r[a])}function Rp(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||El,r[a])}function Cp(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ml,r[a])}function Pp(i){switch(i){case 5126:return up;case 35664:return dp;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return _p;case 35676:return gp;case 5124:case 35670:return xp;case 35667:case 35671:return vp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return Ep;case 36294:return yp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}class Lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hp(e.type)}}class Dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pp(e.type)}}class qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function Eo(i,t){i.seq.push(t),i.map[t.id]=t}function Ip(i,t,e){const n=i.name,s=n.length;for(dr.lastIndex=0;;){const r=dr.exec(n),a=dr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Eo(e,c===void 0?new Lp(o,i,t):new Dp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new qp(o),Eo(e,u)),e=u}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ip(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function yo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Up=37297;let Np=0;function Fp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const To=new Ft;function Op(i){Xt._getMatrix(To,Xt.workingColorSpace,i);const t=`mat3( ${To.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case As:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ao(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fp(i.getShaderSource(t),a)}else return s}function Bp(i,t){const e=Op(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zp(i,t){let e;switch(t){case sc:e="Linear";break;case rc:e="Reinhard";break;case ac:e="Cineon";break;case oc:e="ACESFilmic";break;case cc:e="AgX";break;case hc:e="Neutral";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ms=new I;function Hp(){Xt.getLuminanceCoefficients(ms);const i=ms.x.toFixed(4),t=ms.y.toFixed(4),e=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Vp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ri(i){return i!==""}function bo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(i){return i.replace(Wp,Yp)}const Xp=new Map;function Yp(i,t){let e=Bt[t];if(e===void 0){const n=Xp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const $p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(i){return i.replace($p,Zp)}function Zp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Co(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===No?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Qp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fo:t="ENVMAP_BLENDING_MULTIPLY";break;case nc:t="ENVMAP_BLENDING_MIX";break;case ic:t="ENVMAP_BLENDING_ADD";break}return t}function tm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function em(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Kp(e),c=Jp(e),h=jp(e),u=Qp(e),f=tm(e),p=kp(e),_=Vp(r),x=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ri).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ri).join(`
`),d.length>0&&(d+=`
`)):(m=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),d=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Bp("linearToOutputTexel",e.outputColorSpace),Hp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),a=ra(a),a=bo(a,e),a=wo(a,e),o=ra(o),o=bo(o,e),o=wo(o,e),a=Ro(a),o=Ro(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=b+m+a,S=b+d+o,q=yo(s,s.VERTEX_SHADER,E),C=yo(s,s.FRAGMENT_SHADER,S);s.attachShader(x,q),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(q).trim(),Y=s.getShaderInfoLog(C).trim();let $=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,q,C);else{const K=Ao(s,q,"vertex"),z=Ao(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+K+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||Y==="")&&(k=!1);k&&(R.diagnostics={runnable:$,programLog:X,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(q),s.deleteShader(C),L=new Ts(s,x),T=Gp(s,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Up)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=q,this.fragmentShader=C,this}let nm=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sm(t),e.set(t,n)),n}}class sm{constructor(t){this.id=nm++,this.code=t,this.usedTimes=0}}function rm(i,t,e,n,s,r,a){const o=new tl,l=new im,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,R,X,B){const Y=X.fog,$=B.geometry,k=T.isMeshStandardMaterial?X.environment:null,K=(T.isMeshStandardMaterial?e:t).get(T.envMap||k),z=K&&K.mapping===Rs?K.image.height:null,ot=_[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Et=mt!==void 0?mt.length:0;let Ut=0;$.morphAttributes.position!==void 0&&(Ut=1),$.morphAttributes.normal!==void 0&&(Ut=2),$.morphAttributes.color!==void 0&&(Ut=3);let $t,W,st,yt;if(ot){const jt=Ge[ot];$t=jt.vertexShader,W=jt.fragmentShader}else $t=T.vertexShader,W=T.fragmentShader,l.update(T),st=l.getVertexShaderID(T),yt=l.getFragmentShaderID(T);const rt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,bt=B.isBatchedMesh===!0,Yt=!!T.map,Q=!!T.matcap,j=!!K,A=!!T.aoMap,At=!!T.lightMap,tt=!!T.bumpMap,gt=!!T.normalMap,it=!!T.displacementMap,Pt=!!T.emissiveMap,dt=!!T.metalnessMap,y=!!T.roughnessMap,g=T.anisotropy>0,N=T.clearcoat>0,V=T.dispersion>0,J=T.iridescence>0,G=T.sheen>0,Tt=T.transmission>0,ct=g&&!!T.anisotropyMap,_t=N&&!!T.clearcoatMap,Ht=N&&!!T.clearcoatNormalMap,nt=N&&!!T.clearcoatRoughnessMap,vt=J&&!!T.iridescenceMap,Lt=J&&!!T.iridescenceThicknessMap,Dt=G&&!!T.sheenColorMap,Mt=G&&!!T.sheenRoughnessMap,kt=!!T.specularMap,Ot=!!T.specularColorMap,ee=!!T.specularIntensityMap,P=Tt&&!!T.transmissionMap,ht=Tt&&!!T.thicknessMap,H=!!T.gradientMap,Z=!!T.alphaMap,pt=T.alphaTest>0,ft=!!T.alphaHash,Nt=!!T.extensions;let se=Sn;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(se=i.toneMapping);const me={shaderID:ot,shaderType:T.type,shaderName:T.name,vertexShader:$t,fragmentShader:W,defines:T.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:bt,batchingColor:bt&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:xi,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:Q,envMap:j,envMapMode:j&&K.mapping,envMapCubeUVHeight:z,aoMap:A,lightMap:At,bumpMap:tt,normalMap:gt,displacementMap:f&&it,emissiveMap:Pt,normalMapObjectSpace:gt&&T.normalMapType===pc,normalMapTangentSpace:gt&&T.normalMapType===Zo,metalnessMap:dt,roughnessMap:y,anisotropy:g,anisotropyMap:ct,clearcoat:N,clearcoatMap:_t,clearcoatNormalMap:Ht,clearcoatRoughnessMap:nt,dispersion:V,iridescence:J,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:G,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:kt,specularColorMap:Ot,specularIntensityMap:ee,transmission:Tt,transmissionMap:P,thicknessMap:ht,gradientMap:H,opaque:T.transparent===!1&&T.blending===ci&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:pt,alphaHash:ft,combine:T.combine,mapUv:Yt&&x(T.map.channel),aoMapUv:A&&x(T.aoMap.channel),lightMapUv:At&&x(T.lightMap.channel),bumpMapUv:tt&&x(T.bumpMap.channel),normalMapUv:gt&&x(T.normalMap.channel),displacementMapUv:it&&x(T.displacementMap.channel),emissiveMapUv:Pt&&x(T.emissiveMap.channel),metalnessMapUv:dt&&x(T.metalnessMap.channel),roughnessMapUv:y&&x(T.roughnessMap.channel),anisotropyMapUv:ct&&x(T.anisotropyMap.channel),clearcoatMapUv:_t&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(T.sheenRoughnessMap.channel),specularMapUv:kt&&x(T.specularMap.channel),specularColorMapUv:Ot&&x(T.specularColorMap.channel),specularIntensityMapUv:ee&&x(T.specularIntensityMap.channel),transmissionMapUv:P&&x(T.transmissionMap.channel),thicknessMapUv:ht&&x(T.thicknessMap.channel),alphaMapUv:Z&&x(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(gt||g),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Yt||Z),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Xt.getTransfer(T.map.colorSpace)===Qt,decodeVideoTextureEmissive:Pt&&T.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(T.emissiveMap.colorSpace)===Qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===rn,flipSided:T.side===Te,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)M.push(R),M.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(b(M,T),E(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function S(T){const M=_[T.type];let R;if(M){const X=Ge[M];R=Xc.clone(X.uniforms)}else R=T.uniforms;return R}function q(T,M){let R;for(let X=0,B=h.length;X<B;X++){const Y=h[X];if(Y.cacheKey===M){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new em(i,M,T,r),h.push(R)),R}function C(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function w(T){l.remove(T)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:q,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:L}}function am(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Po(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,_,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function o(u,f,p,_,x,m){const d=a(u,f,p,_,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,_,x,m){const d=a(u,f,p,_,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||om),n.length>1&&n.sort(f||Po),s.length>1&&s.sort(f||Po)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function lm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Lo,i.set(n,[a])):s>=r.length?(a=new Lo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Jt};break;case"SpotLight":e={position:new I,direction:new I,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function hm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let um=0;function dm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fm(i){const t=new cm,e=hm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new oe,a=new oe;function o(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,b=0,E=0,S=0,q=0,C=0,w=0;c.sort(dm);for(let T=0,M=c.length;T<M;T++){const R=c[T],X=R.color,B=R.intensity,Y=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=X.r*B,u+=X.g*B,f+=X.b*B;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],B);w++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,z=e.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=R.shadow.matrix,b++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(X).multiplyScalar(B),k.distance=Y,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const K=R.shadow;if(R.map&&(n.spotLightMap[q]=R.map,q++,K.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[x]=K.matrix,R.castShadow){const z=e.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=$,S++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(X).multiplyScalar(B),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const K=R.shadow,z=e.get(R);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=R.shadow.matrix,E++}n.point[_]=k,_++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(B),k.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==q||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+q-C,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,L.directionalLength=p,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=q,L.numLightProbes=w,n.version=um++)}function l(c,h){let u=0,f=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const E=c[d];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Do(i){const t=new fm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Do(i),t.set(s,[o])):r>=a.length?(o=new Do(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_m=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gm(i,t,e){let n=new ll;const s=new at,r=new at,a=new ae,o=new qh({depthPacking:fc}),l=new Ih,c={},h=e.maxTextureSize,u={[En]:Te,[Te]:En,[rn]:rn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:mm,fragmentShader:_m}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let d=this.type;this.render=function(C,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Mn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const B=d!==sn&&this.type===sn,Y=d===sn&&this.type!==sn;for(let $=0,k=C.length;$<k;$++){const K=C[$],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ot=z.getFrameExtents();if(s.multiply(ot),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,z.mapSize.y=r.y)),z.map===null||B===!0||Y===!0){const Et=this.type!==sn?{minFilter:Ve,magFilter:Ve}:{};z.map!==null&&z.map.dispose(),z.map=new zn(s.x,s.y,Et),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const mt=z.getViewportCount();for(let Et=0;Et<mt;Et++){const Ut=z.getViewport(Et);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),X.viewport(a),z.updateMatrices(K,Et),n=z.getFrustum(),S(w,L,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===sn&&b(z,L),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,R)};function b(C,w){const L=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,L,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,L,p,x,null)}function E(C,w,L,T){let M=null;const R=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=M.uuid,B=w.uuid;let Y=c[X];Y===void 0&&(Y={},c[X]=Y);let $=Y[B];$===void 0&&($=M.clone(),Y[B]=$,w.addEventListener("dispose",q)),M=$}if(M.visible=w.visible,M.wireframe=w.wireframe,T===sn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=L}return M}function S(C,w,L,T,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===sn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const B=t.update(C),Y=C.material;if(Array.isArray(Y)){const $=B.groups;for(let k=0,K=$.length;k<K;k++){const z=$[k],ot=Y[z.materialIndex];if(ot&&ot.visible){const mt=E(C,ot,T,M);C.onBeforeShadow(i,C,w,L,B,mt,z),i.renderBufferDirect(L,null,B,mt,C,z),C.onAfterShadow(i,C,w,L,B,mt,z)}}}else if(Y.visible){const $=E(C,Y,T,M);C.onBeforeShadow(i,C,w,L,B,$,null),i.renderBufferDirect(L,null,B,$,C,null),C.onAfterShadow(i,C,w,L,B,$,null)}}const X=C.children;for(let B=0,Y=X.length;B<Y;B++)S(X[B],w,L,T,M)}function q(C){C.target.removeEventListener("dispose",q);for(const L in c){const T=c[L],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const xm={[gr]:xr,[vr]:Er,[Mr]:yr,[fi]:Sr,[xr]:gr,[Er]:vr,[yr]:Mr,[Sr]:fi};function vm(i,t){function e(){let P=!1;const ht=new ae;let H=null;const Z=new ae(0,0,0,0);return{setMask:function(pt){H!==pt&&!P&&(i.colorMask(pt,pt,pt,pt),H=pt)},setLocked:function(pt){P=pt},setClear:function(pt,ft,Nt,se,me){me===!0&&(pt*=se,ft*=se,Nt*=se),ht.set(pt,ft,Nt,se),Z.equals(ht)===!1&&(i.clearColor(pt,ft,Nt,se),Z.copy(ht))},reset:function(){P=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,ht=!1,H=null,Z=null,pt=null;return{setReversed:function(ft){if(ht!==ft){const Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const se=pt;pt=null,this.setClear(se)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?rt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ft){H!==ft&&!P&&(i.depthMask(ft),H=ft)},setFunc:function(ft){if(ht&&(ft=xm[ft]),Z!==ft){switch(ft){case gr:i.depthFunc(i.NEVER);break;case xr:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case Mr:i.depthFunc(i.EQUAL);break;case Sr:i.depthFunc(i.GEQUAL);break;case Er:i.depthFunc(i.GREATER);break;case yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ft}},setLocked:function(ft){P=ft},setClear:function(ft){pt!==ft&&(ht&&(ft=1-ft),i.clearDepth(ft),pt=ft)},reset:function(){P=!1,H=null,Z=null,pt=null,ht=!1}}}function s(){let P=!1,ht=null,H=null,Z=null,pt=null,ft=null,Nt=null,se=null,me=null;return{setTest:function(jt){P||(jt?rt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(jt){ht!==jt&&!P&&(i.stencilMask(jt),ht=jt)},setFunc:function(jt,Ue,Ke){(H!==jt||Z!==Ue||pt!==Ke)&&(i.stencilFunc(jt,Ue,Ke),H=jt,Z=Ue,pt=Ke)},setOp:function(jt,Ue,Ke){(ft!==jt||Nt!==Ue||se!==Ke)&&(i.stencilOp(jt,Ue,Ke),ft=jt,Nt=Ue,se=Ke)},setLocked:function(jt){P=jt},setClear:function(jt){me!==jt&&(i.clearStencil(jt),me=jt)},reset:function(){P=!1,ht=null,H=null,Z=null,pt=null,ft=null,Nt=null,se=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,b=null,E=null,S=null,q=null,C=null,w=new Jt(0,0,0),L=0,T=!1,M=null,R=null,X=null,B=null,Y=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=K>=2);let ot=null,mt={};const Et=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),$t=new ae().fromArray(Et),W=new ae().fromArray(Ut);function st(P,ht,H,Z){const pt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(P,ft),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<H;Nt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ft}const yt={};yt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(fi),tt(!1),gt(La),rt(i.CULL_FACE),A(Mn);function rt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function wt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Vt(P,ht){return u[P]!==ht?(i.bindFramebuffer(P,ht),u[P]=ht,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function bt(P,ht){let H=p,Z=!1;if(P){H=f.get(ht),H===void 0&&(H=[],f.set(ht,H));const pt=P.textures;if(H.length!==pt.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Nt=pt.length;ft<Nt;ft++)H[ft]=i.COLOR_ATTACHMENT0+ft;H.length=pt.length,Z=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Z=!0);Z&&i.drawBuffers(H)}function Yt(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const Q={[Un]:i.FUNC_ADD,[Bl]:i.FUNC_SUBTRACT,[zl]:i.FUNC_REVERSE_SUBTRACT};Q[Hl]=i.MIN,Q[kl]=i.MAX;const j={[Vl]:i.ZERO,[Gl]:i.ONE,[Wl]:i.SRC_COLOR,[mr]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[Yl]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[_r]:i.ONE_MINUS_SRC_ALPHA,[Kl]:i.ONE_MINUS_DST_COLOR,[$l]:i.ONE_MINUS_DST_ALPHA,[jl]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[tc]:i.CONSTANT_ALPHA,[ec]:i.ONE_MINUS_CONSTANT_ALPHA};function A(P,ht,H,Z,pt,ft,Nt,se,me,jt){if(P===Mn){x===!0&&(wt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),P!==Ol){if(P!==m||jt!==T){if((d!==Un||S!==Un)&&(i.blendEquation(i.FUNC_ADD),d=Un,S=Un),jt)switch(P){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,E=null,q=null,C=null,w.set(0,0,0),L=0,m=P,T=jt}return}pt=pt||ht,ft=ft||H,Nt=Nt||Z,(ht!==d||pt!==S)&&(i.blendEquationSeparate(Q[ht],Q[pt]),d=ht,S=pt),(H!==b||Z!==E||ft!==q||Nt!==C)&&(i.blendFuncSeparate(j[H],j[Z],j[ft],j[Nt]),b=H,E=Z,q=ft,C=Nt),(se.equals(w)===!1||me!==L)&&(i.blendColor(se.r,se.g,se.b,me),w.copy(se),L=me),m=P,T=!1}function At(P,ht){P.side===rn?wt(i.CULL_FACE):rt(i.CULL_FACE);let H=P.side===Te;ht&&(H=!H),tt(H),P.blending===ci&&P.transparent===!1?A(Mn):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function gt(P){P!==Ul?(rt(i.CULL_FACE),P!==R&&(P===La?i.cullFace(i.BACK):P===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),R=P}function it(P){P!==X&&(k&&i.lineWidth(P),X=P)}function Pt(P,ht,H){P?(rt(i.POLYGON_OFFSET_FILL),(B!==ht||Y!==H)&&(i.polygonOffset(ht,H),B=ht,Y=H)):wt(i.POLYGON_OFFSET_FILL)}function dt(P){P?rt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function y(P){P===void 0&&(P=i.TEXTURE0+$-1),ot!==P&&(i.activeTexture(P),ot=P)}function g(P,ht,H){H===void 0&&(ot===null?H=i.TEXTURE0+$-1:H=ot);let Z=mt[H];Z===void 0&&(Z={type:void 0,texture:void 0},mt[H]=Z),(Z.type!==P||Z.texture!==ht)&&(ot!==H&&(i.activeTexture(H),ot=H),i.bindTexture(P,ht||yt[P]),Z.type=P,Z.texture=ht)}function N(){const P=mt[ot];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ht(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(P){$t.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$t.copy(P))}function Mt(P){W.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function kt(P,ht){let H=c.get(ht);H===void 0&&(H=new WeakMap,c.set(ht,H));let Z=H.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(ht,P.name),H.set(P,Z))}function Ot(P,ht){const Z=c.get(ht).get(P);l.get(ht)!==Z&&(i.uniformBlockBinding(ht,Z,P.__bindingPointIndex),l.set(ht,Z))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,mt={},u={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,b=null,E=null,S=null,q=null,C=null,w=new Jt(0,0,0),L=0,T=!1,M=null,R=null,X=null,B=null,Y=null,$t.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:wt,bindFramebuffer:Vt,drawBuffers:bt,useProgram:Yt,setBlending:A,setMaterial:At,setFlipSided:tt,setCullFace:gt,setLineWidth:it,setPolygonOffset:Pt,setScissorTest:dt,activeTexture:y,bindTexture:g,unbindTexture:N,compressedTexImage2D:V,compressedTexImage3D:J,texImage2D:vt,texImage3D:Lt,updateUBOMapping:kt,uniformBlockBinding:Ot,texStorage2D:Ht,texStorage3D:nt,texSubImage2D:G,texSubImage3D:Tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Dt,viewport:Mt,reset:ee}}function Mm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):Di("canvas")}function x(y,g,N){let V=1;const J=dt(y);if((J.width>N||J.height>N)&&(V=N/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const G=Math.floor(V*J.width),Tt=Math.floor(V*J.height);u===void 0&&(u=_(G,Tt));const ct=g?_(G,Tt):u;return ct.width=G,ct.height=Tt,ct.getContext("2d").drawImage(y,0,0,G,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Tt+")."),ct}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(y,g,N,V,J=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let G=g;if(g===i.RED&&(N===i.FLOAT&&(G=i.R32F),N===i.HALF_FLOAT&&(G=i.R16F),N===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.R8UI),N===i.UNSIGNED_SHORT&&(G=i.R16UI),N===i.UNSIGNED_INT&&(G=i.R32UI),N===i.BYTE&&(G=i.R8I),N===i.SHORT&&(G=i.R16I),N===i.INT&&(G=i.R32I)),g===i.RG&&(N===i.FLOAT&&(G=i.RG32F),N===i.HALF_FLOAT&&(G=i.RG16F),N===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.RG8UI),N===i.UNSIGNED_SHORT&&(G=i.RG16UI),N===i.UNSIGNED_INT&&(G=i.RG32UI),N===i.BYTE&&(G=i.RG8I),N===i.SHORT&&(G=i.RG16I),N===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.RGB8UI),N===i.UNSIGNED_SHORT&&(G=i.RGB16UI),N===i.UNSIGNED_INT&&(G=i.RGB32UI),N===i.BYTE&&(G=i.RGB8I),N===i.SHORT&&(G=i.RGB16I),N===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),N===i.UNSIGNED_INT&&(G=i.RGBA32UI),N===i.BYTE&&(G=i.RGBA8I),N===i.SHORT&&(G=i.RGBA16I),N===i.INT&&(G=i.RGBA32I)),g===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),g===i.RGBA){const Tt=J?As:Xt.getTransfer(V);N===i.FLOAT&&(G=i.RGBA32F),N===i.HALF_FLOAT&&(G=i.RGBA16F),N===i.UNSIGNED_BYTE&&(G=Tt===Qt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(y,g){let N;return y?g===null||g===Bn||g===_i?N=i.DEPTH24_STENCIL8:g===an?N=i.DEPTH32F_STENCIL8:g===Li&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Bn||g===_i?N=i.DEPTH_COMPONENT24:g===an?N=i.DEPTH_COMPONENT32F:g===Li&&(N=i.DEPTH_COMPONENT16),N}function q(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ve&&y.minFilter!==Xe?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),L(g),g.isVideoTexture&&h.delete(g)}function w(y){const g=y.target;g.removeEventListener("dispose",w),M(g)}function L(y){const g=n.get(y);if(g.__webglInit===void 0)return;const N=y.source,V=f.get(N);if(V){const J=V[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(y),Object.keys(V).length===0&&f.delete(N)}n.remove(y)}function T(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const N=y.source,V=f.get(N);delete V[g.__cacheKey],a.memory.textures--}function M(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let J=0;J<g.__webglFramebuffer[V].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[V][J]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=y.textures;for(let V=0,J=N.length;V<J;V++){const G=n.get(N[V]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(N[V])}n.remove(y)}let R=0;function X(){R=0}function B(){const y=R;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),R+=1,y}function Y(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function $(y,g){const N=n.get(y);if(y.isVideoTexture&&it(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(N,y,g);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function k(y,g){const N=n.get(y);if(y.version>0&&N.__version!==y.version){W(N,y,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function K(y,g){const N=n.get(y);if(y.version>0&&N.__version!==y.version){W(N,y,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function z(y,g){const N=n.get(y);if(y.version>0&&N.__version!==y.version){st(N,y,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const ot={[br]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},mt={[Ve]:i.NEAREST,[uc]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Us]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Et={[mc]:i.NEVER,[Sc]:i.ALWAYS,[_c]:i.LESS,[Ko]:i.LEQUAL,[gc]:i.EQUAL,[Mc]:i.GEQUAL,[xc]:i.GREATER,[vc]:i.NOTEQUAL};function Ut(y,g){if(g.type===an&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Xe||g.magFilter===Us||g.magFilter===Wi||g.magFilter===On||g.minFilter===Xe||g.minFilter===Us||g.minFilter===Wi||g.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,ot[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,ot[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,ot[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,mt[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,mt[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Et[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ve||g.minFilter!==Wi&&g.minFilter!==On||g.type===an&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $t(y,g){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const V=g.source;let J=f.get(V);J===void 0&&(J={},f.set(V,J));const G=Y(g);if(G!==y.__cacheKey){J[G]===void 0&&(J[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[G].usedTimes++;const Tt=J[y.__cacheKey];Tt!==void 0&&(J[y.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(g)),y.__cacheKey=G,y.__webglTexture=J[G].texture}return N}function W(y,g,N){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);const J=$t(y,g),G=g.source;e.bindTexture(V,y.__webglTexture,i.TEXTURE0+N);const Tt=n.get(G);if(G.version!==Tt.__version||J===!0){e.activeTexture(i.TEXTURE0+N);const ct=Xt.getPrimaries(Xt.workingColorSpace),_t=g.colorSpace===vn?null:Xt.getPrimaries(g.colorSpace),Ht=g.colorSpace===vn||ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let nt=x(g.image,!1,s.maxTextureSize);nt=Pt(g,nt);const vt=r.convert(g.format,g.colorSpace),Lt=r.convert(g.type);let Dt=E(g.internalFormat,vt,Lt,g.colorSpace,g.isVideoTexture);Ut(V,g);let Mt;const kt=g.mipmaps,Ot=g.isVideoTexture!==!0,ee=Tt.__version===void 0||J===!0,P=G.dataReady,ht=q(g,nt);if(g.isDepthTexture)Dt=S(g.format===gi,g.type),ee&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Lt,null));else if(g.isDataTexture)if(kt.length>0){Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,kt[0].width,kt[0].height);for(let H=0,Z=kt.length;H<Z;H++)Mt=kt[H],Ot?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,Mt.width,Mt.height,vt,Lt,Mt.data):e.texImage2D(i.TEXTURE_2D,H,Dt,Mt.width,Mt.height,0,vt,Lt,Mt.data);g.generateMipmaps=!1}else Ot?(ee&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,nt.width,nt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Lt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Lt,nt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ot&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,kt[0].width,kt[0].height,nt.depth);for(let H=0,Z=kt.length;H<Z;H++)if(Mt=kt[H],g.format!==He)if(vt!==null)if(Ot){if(P)if(g.layerUpdates.size>0){const pt=oo(Mt.width,Mt.height,g.format,g.type);for(const ft of g.layerUpdates){const Nt=Mt.data.subarray(ft*pt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ft,Mt.width,Mt.height,1,vt,Nt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,Mt.width,Mt.height,nt.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Dt,Mt.width,Mt.height,nt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,Mt.width,Mt.height,nt.depth,vt,Lt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Dt,Mt.width,Mt.height,nt.depth,0,vt,Lt,Mt.data)}else{Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,kt[0].width,kt[0].height);for(let H=0,Z=kt.length;H<Z;H++)Mt=kt[H],g.format!==He?vt!==null?Ot?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,Mt.width,Mt.height,vt,Lt,Mt.data):e.texImage2D(i.TEXTURE_2D,H,Dt,Mt.width,Mt.height,0,vt,Lt,Mt.data)}else if(g.isDataArrayTexture)if(Ot){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,nt.width,nt.height,nt.depth),P)if(g.layerUpdates.size>0){const H=oo(nt.width,nt.height,g.format,g.type);for(const Z of g.layerUpdates){const pt=nt.data.subarray(Z*H/nt.data.BYTES_PER_ELEMENT,(Z+1)*H/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,vt,Lt,pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(g.isData3DTexture)Ot?(ee&&e.texStorage3D(i.TEXTURE_3D,ht,Dt,nt.width,nt.height,nt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,vt,Lt,nt.data);else if(g.isFramebufferTexture){if(ee)if(Ot)e.texStorage2D(i.TEXTURE_2D,ht,Dt,nt.width,nt.height);else{let H=nt.width,Z=nt.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Dt,H,Z,0,vt,Lt,null),H>>=1,Z>>=1}}else if(kt.length>0){if(Ot&&ee){const H=dt(kt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Dt,H.width,H.height)}for(let H=0,Z=kt.length;H<Z;H++)Mt=kt[H],Ot?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,vt,Lt,Mt):e.texImage2D(i.TEXTURE_2D,H,Dt,vt,Lt,Mt);g.generateMipmaps=!1}else if(Ot){if(ee){const H=dt(nt);e.texStorage2D(i.TEXTURE_2D,ht,Dt,H.width,H.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,vt,Lt,nt);m(g)&&d(V),Tt.__version=G.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function st(y,g,N){if(g.image.length!==6)return;const V=$t(y,g),J=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const G=n.get(J);if(J.version!==G.__version||V===!0){e.activeTexture(i.TEXTURE0+N);const Tt=Xt.getPrimaries(Xt.workingColorSpace),ct=g.colorSpace===vn?null:Xt.getPrimaries(g.colorSpace),_t=g.colorSpace===vn||Tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ht=g.isCompressedTexture||g.image[0].isCompressedTexture,nt=g.image[0]&&g.image[0].isDataTexture,vt=[];for(let Z=0;Z<6;Z++)!Ht&&!nt?vt[Z]=x(g.image[Z],!0,s.maxCubemapSize):vt[Z]=nt?g.image[Z].image:g.image[Z],vt[Z]=Pt(g,vt[Z]);const Lt=vt[0],Dt=r.convert(g.format,g.colorSpace),Mt=r.convert(g.type),kt=E(g.internalFormat,Dt,Mt,g.colorSpace),Ot=g.isVideoTexture!==!0,ee=G.__version===void 0||V===!0,P=J.dataReady;let ht=q(g,Lt);Ut(i.TEXTURE_CUBE_MAP,g);let H;if(Ht){Ot&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){H=vt[Z].mipmaps;for(let pt=0;pt<H.length;pt++){const ft=H[pt];g.format!==He?Dt!==null?Ot?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,kt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Dt,Mt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,kt,ft.width,ft.height,0,Dt,Mt,ft.data)}}}else{if(H=g.mipmaps,Ot&&ee){H.length>0&&ht++;const Z=dt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Ot?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,vt[Z].width,vt[Z].height,Dt,Mt,vt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,vt[Z].width,vt[Z].height,0,Dt,Mt,vt[Z].data);for(let pt=0;pt<H.length;pt++){const Nt=H[pt].image[Z].image;Ot?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Nt.width,Nt.height,Dt,Mt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,kt,Nt.width,Nt.height,0,Dt,Mt,Nt.data)}}else{Ot?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,Mt,vt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,Dt,Mt,vt[Z]);for(let pt=0;pt<H.length;pt++){const ft=H[pt];Ot?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Dt,Mt,ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,kt,Dt,Mt,ft.image[Z])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),G.__version=J.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function yt(y,g,N,V,J,G){const Tt=r.convert(N.format,N.colorSpace),ct=r.convert(N.type),_t=E(N.internalFormat,Tt,ct,N.colorSpace),Ht=n.get(g),nt=n.get(N);if(nt.__renderTarget=g,!Ht.__hasExternalTextures){const vt=Math.max(1,g.width>>G),Lt=Math.max(1,g.height>>G);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,G,_t,vt,Lt,g.depth,0,Tt,ct,null):e.texImage2D(J,G,_t,vt,Lt,0,Tt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,nt.__webglTexture,0,tt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,nt.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(y,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const V=g.depthTexture,J=V&&V.isDepthTexture?V.type:null,G=S(g.stencilBuffer,J),Tt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=tt(g);gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,G,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,y)}else{const V=g.textures;for(let J=0;J<V.length;J++){const G=V[J],Tt=r.convert(G.format,G.colorSpace),ct=r.convert(G.type),_t=E(G.internalFormat,Tt,ct,G.colorSpace),Ht=tt(g);N&&gt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,_t,g.width,g.height):gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,_t,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_t,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$(g.depthTexture,0);const J=V.__webglTexture,G=tt(g);if(g.depthTexture.format===hi)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===gi)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Vt(y){const g=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=V}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");wt(g.__webglFramebuffer,y)}else if(N){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),rt(g.__webglDepthbuffer[V],y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),rt(g.__webglDepthbuffer,y,!1);else{const V=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(y,g,N){const V=n.get(y);g!==void 0&&yt(V.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Vt(y)}function Yt(y){const g=y.texture,N=n.get(y),V=n.get(g);y.addEventListener("dispose",w);const J=y.textures,G=y.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,a.memory.textures++),G){N.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ct]=[];for(let _t=0;_t<g.mipmaps.length;_t++)N.__webglFramebuffer[ct][_t]=i.createFramebuffer()}else N.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ct=0;ct<g.mipmaps.length;ct++)N.__webglFramebuffer[ct]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ct=0,_t=J.length;ct<_t;ct++){const Ht=n.get(J[ct]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&gt(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const _t=J[ct];N.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ct]);const Ht=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),vt=E(_t.internalFormat,Ht,nt,_t.colorSpace,y.isXRRenderTarget===!0),Lt=tt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,N.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,g);for(let ct=0;ct<6;ct++)if(g.mipmaps&&g.mipmaps.length>0)for(let _t=0;_t<g.mipmaps.length;_t++)yt(N.__webglFramebuffer[ct][_t],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else yt(N.__webglFramebuffer[ct],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(g)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ct=0,_t=J.length;ct<_t;ct++){const Ht=J[ct],nt=n.get(Ht);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Ut(i.TEXTURE_2D,Ht),yt(N.__webglFramebuffer,y,Ht,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Ht)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ct=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,V.__webglTexture),Ut(ct,g),g.mipmaps&&g.mipmaps.length>0)for(let _t=0;_t<g.mipmaps.length;_t++)yt(N.__webglFramebuffer[_t],y,g,i.COLOR_ATTACHMENT0,ct,_t);else yt(N.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ct,0);m(g)&&d(ct),e.unbindTexture()}y.depthBuffer&&Vt(y)}function Q(y){const g=y.textures;for(let N=0,V=g.length;N<V;N++){const J=g[N];if(m(J)){const G=b(y),Tt=n.get(J).__webglTexture;e.bindTexture(G,Tt),d(G),e.unbindTexture()}}}const j=[],A=[];function At(y){if(y.samples>0){if(gt(y)===!1){const g=y.textures,N=y.width,V=y.height;let J=i.COLOR_BUFFER_BIT;const G=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(y),ct=g.length>1;if(ct)for(let _t=0;_t<g.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Ht=n.get(g[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,N,V,0,0,N,V,J,i.NEAREST),l===!0&&(j.length=0,A.length=0,j.push(i.COLOR_ATTACHMENT0+_t),y.depthBuffer&&y.resolveDepthBuffer===!1&&(j.push(G),A.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<g.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Ht=n.get(g[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function tt(y){return Math.min(s.maxSamples,y.samples)}function gt(y){const g=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function it(y){const g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function Pt(y,g){const N=y.colorSpace,V=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==xi&&N!==vn&&(Xt.getTransfer(N)===Qt?(V!==He||J!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function dt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=bt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=gt}function Sm(i,t){function e(n,s=vn){let r;const a=Xt.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return i.BYTE;if(n===zo)return i.SHORT;if(n===Li)return i.UNSIGNED_SHORT;if(n===la)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===ko)return i.ALPHA;if(n===Vo)return i.RGB;if(n===He)return i.RGBA;if(n===Go)return i.LUMINANCE;if(n===Wo)return i.LUMINANCE_ALPHA;if(n===hi)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Xo)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===da)return i.RG_INTEGER;if(n===fa)return i.RGBA_INTEGER;if(n===gs||n===xs||n===vs||n===Ms)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===Cr||n===Pr||n===Lr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===qr||n===Ir)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dr||n===qr)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ir)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===Hr||n===kr||n===Vr||n===Gr||n===Wr||n===Xr||n===Yr||n===$r)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ur)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Br)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$r)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ss||n===Zr||n===Kr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ss)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===Jr||n===jr||n===Qr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ss)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ym=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Me,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:Em,fragmentShader:ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends Vn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const x=new Tm,m=e.getContextAttributes();let d=null,b=null;const E=[],S=[],q=new at;let C=null;const w=new qe;w.viewport=new ae;const L=new qe;L.viewport=new ae;const T=[w,L],M=new kh;let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let st=E[W];return st===void 0&&(st=new nr,E[W]=st),st.getTargetRaySpace()},this.getControllerGrip=function(W){let st=E[W];return st===void 0&&(st=new nr,E[W]=st),st.getGripSpace()},this.getHand=function(W){let st=E[W];return st===void 0&&(st=new nr,E[W]=st),st.getHandSpace()};function B(W){const st=S.indexOf(W.inputSource);if(st===-1)return;const yt=E[st];yt!==void 0&&(yt.update(W.inputSource,W.frame,c||a),yt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",$);for(let W=0;W<E.length;W++){const st=S[W];st!==null&&(S[W]=null,E[W].disconnect(st))}R=null,X=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,b=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(q),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,rt=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=m.stencil?gi:hi,rt=m.stencil?_i:Bn);const Vt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new zn(f.textureWidth,f.textureHeight,{format:He,type:cn,depthTexture:new cl(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new zn(p.framebufferWidth,p.framebufferHeight,{format:He,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(W){for(let st=0;st<W.removed.length;st++){const yt=W.removed[st],rt=S.indexOf(yt);rt>=0&&(S[rt]=null,E[rt].disconnect(yt))}for(let st=0;st<W.added.length;st++){const yt=W.added[st];let rt=S.indexOf(yt);if(rt===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=S.length){S.push(yt),rt=Vt;break}else if(S[Vt]===null){S[Vt]=yt,rt=Vt;break}if(rt===-1)break}const wt=E[rt];wt&&wt.connect(yt)}}const k=new I,K=new I;function z(W,st,yt){k.setFromMatrixPosition(st.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);const rt=k.distanceTo(K),wt=st.projectionMatrix.elements,Vt=yt.projectionMatrix.elements,bt=wt[14]/(wt[10]-1),Yt=wt[14]/(wt[10]+1),Q=(wt[9]+1)/wt[5],j=(wt[9]-1)/wt[5],A=(wt[8]-1)/wt[0],At=(Vt[8]+1)/Vt[0],tt=bt*A,gt=bt*At,it=rt/(-A+At),Pt=it*-A;if(st.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pt),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),wt[10]===-1)W.projectionMatrix.copy(st.projectionMatrix),W.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const dt=bt+it,y=Yt+it,g=tt-Pt,N=gt+(rt-Pt),V=Q*Yt/y*dt,J=j*Yt/y*dt;W.projectionMatrix.makePerspective(g,N,V,J,dt,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ot(W,st){st===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(st.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let st=W.near,yt=W.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),M.near=L.near=w.near=st,M.far=L.far=w.far=yt,(R!==M.near||X!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,X=M.far),w.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,M.layers.mask=w.layers.mask|L.layers.mask;const rt=W.parent,wt=M.cameras;ot(M,rt);for(let Vt=0;Vt<wt.length;Vt++)ot(wt[Vt],rt);wt.length===2?z(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),mt(W,M,rt)};function mt(W,st,yt){yt===null?W.matrix.copy(st.matrixWorld):(W.matrix.copy(yt.matrixWorld),W.matrix.invert(),W.matrix.multiply(st.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(st.projectionMatrix),W.projectionMatrixInverse.copy(st.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ta*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Et=null;function Ut(W,st){if(h=st.getViewerPose(c||a),_=st,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let bt=0;bt<yt.length;bt++){const Yt=yt[bt];let Q=null;if(p!==null)Q=p.getViewport(Yt);else{const A=u.getViewSubImage(f,Yt);Q=A.viewport,bt===0&&(t.setRenderTargetTextures(b,A.colorTexture,f.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(b))}let j=T[bt];j===void 0&&(j=new qe,j.layers.enable(bt),j.viewport=new ae,T[bt]=j),j.matrix.fromArray(Yt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Yt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),bt===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(j)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const bt=u.getDepthInformation(yt[0]);bt&&bt.isValid&&bt.texture&&x.init(t,bt,s.renderState)}}for(let yt=0;yt<E.length;yt++){const rt=S[yt],wt=E[yt];rt!==null&&wt!==void 0&&wt.update(rt,st,c||a)}Et&&Et(W,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const $t=new xl;$t.setAnimationLoop(Ut),this.setAnimationLoop=function(W){Et=W},this.dispose=function(){}}}const Dn=new hn,bm=new oe;function wm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,rl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Te&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Te&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),E=b.envMap,S=b.envMapRotation;E&&(m.envMap.value=E,Dn.copy(S),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),m.envMapRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Dn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Te&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const S=E.program;n.uniformBlockBinding(b,S)}function c(b,E){let S=s[b.id];S===void 0&&(_(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",m));const q=E.program;n.updateUBOMapping(b,q);const C=t.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function h(b){const E=u();b.__bindingPointIndex=E;const S=i.createBuffer(),q=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,q,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=s[b.id],S=b.uniforms,q=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,w=S.length;C<w;C++){const L=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,M=L.length;T<M;T++){const R=L[T];if(p(R,C,T,q)===!0){const X=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let $=0;$<B.length;$++){const k=B[$],K=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,E,S,q){const C=b.value,w=E+"_"+S;if(q[w]===void 0)return typeof C=="number"||typeof C=="boolean"?q[w]=C:q[w]=C.clone(),!0;{const L=q[w];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return q[w]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(b){const E=b.uniforms;let S=0;const q=16;for(let w=0,L=E.length;w<L;w++){const T=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,R=T.length;M<R;M++){const X=T[M],B=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,$=B.length;Y<$;Y++){const k=B[Y],K=x(k),z=S%q,ot=z%K.boundary,mt=z+ot;S+=ot,mt!==0&&q-mt<K.storage&&(S+=q-mt),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=K.storage}}}const C=S%q;return C>0&&(S+=q-C),b.__size=S,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Cm{constructor(t={}){const{canvas:e=Tc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=Sn,this.toneMappingExposure=1;const S=this;let q=!1,C=0,w=0,L=null,T=-1,M=null;const R=new ae,X=new ae;let B=null;const Y=new Jt(0);let $=0,k=e.width,K=e.height,z=1,ot=null,mt=null;const Et=new ae(0,0,k,K),Ut=new ae(0,0,k,K);let $t=!1;const W=new ll;let st=!1,yt=!1;this.transmissionResolutionScale=1;const rt=new oe,wt=new oe,Vt=new I,bt=new ae,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function j(){return L===null?z:1}let A=n;function At(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),A===null){const D="webgl2";if(A=At(D,v),A===null)throw At(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let tt,gt,it,Pt,dt,y,g,N,V,J,G,Tt,ct,_t,Ht,nt,vt,Lt,Dt,Mt,kt,Ot,ee,P;function ht(){tt=new Bf(A),tt.init(),Ot=new Sm(A,tt),gt=new Df(A,tt,t,Ot),it=new vm(A,tt),gt.reverseDepthBuffer&&f&&it.buffers.depth.setReversed(!0),Pt=new kf(A),dt=new am,y=new Mm(A,tt,it,dt,gt,Ot,Pt),g=new If(S),N=new Of(S),V=new Yh(A),ee=new Pf(A,V),J=new zf(A,V,Pt,ee),G=new Gf(A,J,V,Pt),Dt=new Vf(A,gt,y),nt=new qf(dt),Tt=new rm(S,g,N,tt,gt,ee,nt),ct=new wm(S,dt),_t=new lm,Ht=new pm(tt),Lt=new Cf(S,g,N,it,G,p,l),vt=new gm(S,G,gt),P=new Rm(A,Pt,gt,it),Mt=new Lf(A,tt,Pt),kt=new Hf(A,tt,Pt),Pt.programs=Tt.programs,S.capabilities=gt,S.extensions=tt,S.properties=dt,S.renderLists=_t,S.shadowMap=vt,S.state=it,S.info=Pt}ht();const H=new Am(S,A);this.xr=H,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=tt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=tt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(k,K,!1))},this.getSize=function(v){return v.set(k,K)},this.setSize=function(v,D,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=v,K=D,e.width=Math.floor(v*z),e.height=Math.floor(D*z),F===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(k*z,K*z).floor()},this.setDrawingBufferSize=function(v,D,F){k=v,K=D,z=F,e.width=Math.floor(v*F),e.height=Math.floor(D*F),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(Et)},this.setViewport=function(v,D,F,O){v.isVector4?Et.set(v.x,v.y,v.z,v.w):Et.set(v,D,F,O),it.viewport(R.copy(Et).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,D,F,O){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,D,F,O),it.scissor(X.copy(Ut).multiplyScalar(z).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(v){it.setScissorTest($t=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){mt=v},this.getClearColor=function(v){return v.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,F=!0){let O=0;if(v){let U=!1;if(L!==null){const et=L.texture.format;U=et===fa||et===da||et===ua}if(U){const et=L.texture.type,ut=et===cn||et===Bn||et===Li||et===_i||et===ca||et===ha,xt=Lt.getClearColor(),St=Lt.getClearAlpha(),qt=xt.r,It=xt.g,Rt=xt.b;ut?(_[0]=qt,_[1]=It,_[2]=Rt,_[3]=St,A.clearBufferuiv(A.COLOR,0,_)):(x[0]=qt,x[1]=It,x[2]=Rt,x[3]=St,A.clearBufferiv(A.COLOR,0,x))}else O|=A.COLOR_BUFFER_BIT}D&&(O|=A.DEPTH_BUFFER_BIT),F&&(O|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Lt.dispose(),_t.dispose(),Ht.dispose(),dt.dispose(),g.dispose(),N.dispose(),G.dispose(),ee.dispose(),P.dispose(),Tt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Ta),H.removeEventListener("sessionend",Aa),An.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const v=Pt.autoReset,D=vt.enabled,F=vt.autoUpdate,O=vt.needsUpdate,U=vt.type;ht(),Pt.autoReset=v,vt.enabled=D,vt.autoUpdate=F,vt.needsUpdate=O,vt.type=U}function ft(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Nt(v){const D=v.target;D.removeEventListener("dispose",Nt),se(D)}function se(v){me(v),dt.remove(v)}function me(v){const D=dt.get(v).programs;D!==void 0&&(D.forEach(function(F){Tt.releaseProgram(F)}),v.isShaderMaterial&&Tt.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,F,O,U,et){D===null&&(D=Yt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,xt=Cl(v,D,F,O,U);it.setMaterial(O,ut);let St=F.index,qt=1;if(O.wireframe===!0){if(St=J.getWireframeAttribute(F),St===void 0)return;qt=2}const It=F.drawRange,Rt=F.attributes.position;let Gt=It.start*qt,Zt=(It.start+It.count)*qt;et!==null&&(Gt=Math.max(Gt,et.start*qt),Zt=Math.min(Zt,(et.start+et.count)*qt)),St!==null?(Gt=Math.max(Gt,0),Zt=Math.min(Zt,St.count)):Rt!=null&&(Gt=Math.max(Gt,0),Zt=Math.min(Zt,Rt.count));const le=Zt-Gt;if(le<0||le===1/0)return;ee.setup(U,O,xt,F,St);let re,Wt=Mt;if(St!==null&&(re=V.get(St),Wt=kt,Wt.setIndex(re)),U.isMesh)O.wireframe===!0?(it.setLineWidth(O.wireframeLinewidth*j()),Wt.setMode(A.LINES)):Wt.setMode(A.TRIANGLES);else if(U.isLine){let Ct=O.linewidth;Ct===void 0&&(Ct=1),it.setLineWidth(Ct*j()),U.isLineSegments?Wt.setMode(A.LINES):U.isLineLoop?Wt.setMode(A.LINE_LOOP):Wt.setMode(A.LINE_STRIP)}else U.isPoints?Wt.setMode(A.POINTS):U.isSprite&&Wt.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ct=U._multiDrawStarts,pe=U._multiDrawCounts,Kt=U._multiDrawCount,Ne=St?V.get(St).bytesPerElement:1,Gn=dt.get(O).currentProgram.getUniforms();for(let Ae=0;Ae<Kt;Ae++)Gn.setValue(A,"_gl_DrawID",Ae),Wt.render(Ct[Ae]/Ne,pe[Ae])}else if(U.isInstancedMesh)Wt.renderInstances(Gt,le,U.count);else if(F.isInstancedBufferGeometry){const Ct=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,pe=Math.min(F.instanceCount,Ct);Wt.renderInstances(Gt,le,pe)}else Wt.render(Gt,le)};function jt(v,D,F){v.transparent===!0&&v.side===rn&&v.forceSinglePass===!1?(v.side=Te,v.needsUpdate=!0,Gi(v,D,F),v.side=En,v.needsUpdate=!0,Gi(v,D,F),v.side=rn):Gi(v,D,F)}this.compile=function(v,D,F=null){F===null&&(F=v),d=Ht.get(F),d.init(D),E.push(d),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),v!==F&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const O=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const xt=et[ut];jt(xt,F,U),O.add(xt)}else jt(et,F,U),O.add(et)}),d=E.pop(),O},this.compileAsync=function(v,D,F=null){const O=this.compile(v,D,F);return new Promise(U=>{function et(){if(O.forEach(function(ut){dt.get(ut).currentProgram.isReady()&&O.delete(ut)}),O.size===0){U(v);return}setTimeout(et,10)}tt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ue=null;function Ke(v){Ue&&Ue(v)}function Ta(){An.stop()}function Aa(){An.start()}const An=new xl;An.setAnimationLoop(Ke),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(v){Ue=v,H.setAnimationLoop(v),v===null?An.stop():An.start()},H.addEventListener("sessionstart",Ta),H.addEventListener("sessionend",Aa),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,L),d=Ht.get(v,E.length),d.init(D),E.push(d),wt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,yt),m=_t.get(v,b.length),m.init(),b.push(m),H.enabled===!0&&H.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&qs(et,D,-1/0,S.sortObjects)}qs(v,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ot,mt),Q=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Q&&Lt.addToRenderList(m,v),this.info.render.frame++,st===!0&&nt.beginShadows();const F=d.state.shadowsArray;vt.render(F,v,D),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,U=m.transmissive;if(d.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let ut=0,xt=et.length;ut<xt;ut++){const St=et[ut];wa(O,U,v,St)}Q&&Lt.render(v);for(let ut=0,xt=et.length;ut<xt;ut++){const St=et[ut];ba(m,v,St,St.viewport)}}else U.length>0&&wa(O,U,v,D),Q&&Lt.render(v),ba(m,v,D);L!==null&&w===0&&(y.updateMultisampleRenderTarget(L),y.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(S,v,D),ee.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(d=E[E.length-1],st===!0&&nt.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function qs(v,D,F,O){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){O&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(wt);const ut=G.update(v),xt=v.material;xt.visible&&m.push(v,ut,xt,F,bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const ut=G.update(v),xt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),bt.copy(ut.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(wt)),Array.isArray(xt)){const St=ut.groups;for(let qt=0,It=St.length;qt<It;qt++){const Rt=St[qt],Gt=xt[Rt.materialIndex];Gt&&Gt.visible&&m.push(v,ut,Gt,F,bt.z,Rt)}}else xt.visible&&m.push(v,ut,xt,F,bt.z,null)}}const et=v.children;for(let ut=0,xt=et.length;ut<xt;ut++)qs(et[ut],D,F,O)}function ba(v,D,F,O){const U=v.opaque,et=v.transmissive,ut=v.transparent;d.setupLightsView(F),st===!0&&nt.setGlobalState(S.clippingPlanes,F),O&&it.viewport(R.copy(O)),U.length>0&&Vi(U,D,F),et.length>0&&Vi(et,D,F),ut.length>0&&Vi(ut,D,F),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function wa(v,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new zn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Oi:cn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const et=d.state.transmissionRenderTarget[O.id],ut=O.viewport||R;et.setSize(ut.z*S.transmissionResolutionScale,ut.w*S.transmissionResolutionScale);const xt=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(Y),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Q&&Lt.render(F);const St=S.toneMapping;S.toneMapping=Sn;const qt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),st===!0&&nt.setGlobalState(S.clippingPlanes,O),Vi(v,F,O),y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et),tt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Rt=0,Gt=D.length;Rt<Gt;Rt++){const Zt=D[Rt],le=Zt.object,re=Zt.geometry,Wt=Zt.material,Ct=Zt.group;if(Wt.side===rn&&le.layers.test(O.layers)){const pe=Wt.side;Wt.side=Te,Wt.needsUpdate=!0,Ra(le,F,O,re,Wt,Ct),Wt.side=pe,Wt.needsUpdate=!0,It=!0}}It===!0&&(y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et))}S.setRenderTarget(xt),S.setClearColor(Y,$),qt!==void 0&&(O.viewport=qt),S.toneMapping=St}function Vi(v,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=v.length;U<et;U++){const ut=v[U],xt=ut.object,St=ut.geometry,qt=O===null?ut.material:O,It=ut.group;xt.layers.test(F.layers)&&Ra(xt,D,F,St,qt,It)}}function Ra(v,D,F,O,U,et){v.onBeforeRender(S,D,F,O,U,et),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,D,F,O,v,et),U.transparent===!0&&U.side===rn&&U.forceSinglePass===!1?(U.side=Te,U.needsUpdate=!0,S.renderBufferDirect(F,D,O,U,v,et),U.side=En,U.needsUpdate=!0,S.renderBufferDirect(F,D,O,U,v,et),U.side=rn):S.renderBufferDirect(F,D,O,U,v,et),v.onAfterRender(S,D,F,O,U,et)}function Gi(v,D,F){D.isScene!==!0&&(D=Yt);const O=dt.get(v),U=d.state.lights,et=d.state.shadowsArray,ut=U.state.version,xt=Tt.getParameters(v,U.state,et,D,F),St=Tt.getProgramCacheKey(xt);let qt=O.programs;O.environment=v.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(v.isMeshStandardMaterial?N:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,qt===void 0&&(v.addEventListener("dispose",Nt),qt=new Map,O.programs=qt);let It=qt.get(St);if(It!==void 0){if(O.currentProgram===It&&O.lightsStateVersion===ut)return Pa(v,xt),It}else xt.uniforms=Tt.getUniforms(v),v.onBeforeCompile(xt,S),It=Tt.acquireProgram(xt,St),qt.set(St,It),O.uniforms=xt.uniforms;const Rt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Rt.clippingPlanes=nt.uniform),Pa(v,xt),O.needsLights=Ll(v),O.lightsStateVersion=ut,O.needsLights&&(Rt.ambientLightColor.value=U.state.ambient,Rt.lightProbe.value=U.state.probe,Rt.directionalLights.value=U.state.directional,Rt.directionalLightShadows.value=U.state.directionalShadow,Rt.spotLights.value=U.state.spot,Rt.spotLightShadows.value=U.state.spotShadow,Rt.rectAreaLights.value=U.state.rectArea,Rt.ltc_1.value=U.state.rectAreaLTC1,Rt.ltc_2.value=U.state.rectAreaLTC2,Rt.pointLights.value=U.state.point,Rt.pointLightShadows.value=U.state.pointShadow,Rt.hemisphereLights.value=U.state.hemi,Rt.directionalShadowMap.value=U.state.directionalShadowMap,Rt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Rt.spotShadowMap.value=U.state.spotShadowMap,Rt.spotLightMatrix.value=U.state.spotLightMatrix,Rt.spotLightMap.value=U.state.spotLightMap,Rt.pointShadowMap.value=U.state.pointShadowMap,Rt.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=It,O.uniformsList=null,It}function Ca(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Ts.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Pa(v,D){const F=dt.get(v);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Cl(v,D,F,O,U){D.isScene!==!0&&(D=Yt),y.resetTextureUnits();const et=D.fog,ut=O.isMeshStandardMaterial?D.environment:null,xt=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xi,St=(O.isMeshStandardMaterial?N:g).get(O.envMap||ut),qt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,It=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Rt=!!F.morphAttributes.position,Gt=!!F.morphAttributes.normal,Zt=!!F.morphAttributes.color;let le=Sn;O.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(le=S.toneMapping);const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Wt=re!==void 0?re.length:0,Ct=dt.get(O),pe=d.state.lights;if(st===!0&&(yt===!0||v!==M)){const xe=v===M&&O.id===T;nt.setState(O,v,xe)}let Kt=!1;O.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==pe.state.version||Ct.outputColorSpace!==xt||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==St||O.fog===!0&&Ct.fog!==et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==qt||Ct.vertexTangents!==It||Ct.morphTargets!==Rt||Ct.morphNormals!==Gt||Ct.morphColors!==Zt||Ct.toneMapping!==le||Ct.morphTargetsCount!==Wt)&&(Kt=!0):(Kt=!0,Ct.__version=O.version);let Ne=Ct.currentProgram;Kt===!0&&(Ne=Gi(O,D,U));let Gn=!1,Ae=!1,Ei=!1;const ne=Ne.getUniforms(),Pe=Ct.uniforms;if(it.useProgram(Ne.program)&&(Gn=!0,Ae=!0,Ei=!0),O.id!==T&&(T=O.id,Ae=!0),Gn||M!==v){it.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),bc(rt),wc(rt),ne.setValue(A,"projectionMatrix",rt)):ne.setValue(A,"projectionMatrix",v.projectionMatrix),ne.setValue(A,"viewMatrix",v.matrixWorldInverse);const Se=ne.map.cameraPosition;Se!==void 0&&Se.setValue(A,Vt.setFromMatrixPosition(v.matrixWorld)),gt.logarithmicDepthBuffer&&ne.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ne.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ae=!0,Ei=!0)}if(U.isSkinnedMesh){ne.setOptional(A,U,"bindMatrix"),ne.setOptional(A,U,"bindMatrixInverse");const xe=U.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),ne.setValue(A,"boneTexture",xe.boneTexture,y))}U.isBatchedMesh&&(ne.setOptional(A,U,"batchingTexture"),ne.setValue(A,"batchingTexture",U._matricesTexture,y),ne.setOptional(A,U,"batchingIdTexture"),ne.setValue(A,"batchingIdTexture",U._indirectTexture,y),ne.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&ne.setValue(A,"batchingColorTexture",U._colorsTexture,y));const Le=F.morphAttributes;if((Le.position!==void 0||Le.normal!==void 0||Le.color!==void 0)&&Dt.update(U,F,Ne),(Ae||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,ne.setValue(A,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Pe.envMap.value=St,Pe.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Pe.envMapIntensity.value=D.environmentIntensity),Ae&&(ne.setValue(A,"toneMappingExposure",S.toneMappingExposure),Ct.needsLights&&Pl(Pe,Ei),et&&O.fog===!0&&ct.refreshFogUniforms(Pe,et),ct.refreshMaterialUniforms(Pe,O,z,K,d.state.transmissionRenderTarget[v.id]),Ts.upload(A,Ca(Ct),Pe,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ts.upload(A,Ca(Ct),Pe,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ne.setValue(A,"center",U.center),ne.setValue(A,"modelViewMatrix",U.modelViewMatrix),ne.setValue(A,"normalMatrix",U.normalMatrix),ne.setValue(A,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const xe=O.uniformsGroups;for(let Se=0,Is=xe.length;Se<Is;Se++){const bn=xe[Se];P.update(bn,Ne),P.bind(bn,Ne)}}return Ne}function Pl(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Ll(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,D,F){dt.get(v.texture).__webglTexture=D,dt.get(v.depthTexture).__webglTexture=F;const O=dt.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const F=dt.get(v);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const Dl=A.createFramebuffer();this.setRenderTarget=function(v,D=0,F=0){L=v,C=D,w=F;let O=!0,U=null,et=!1,ut=!1;if(v){const St=dt.get(v);if(St.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(A.FRAMEBUFFER,null),O=!1;else if(St.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(St.__hasExternalTextures)y.rebindTextures(v,dt.get(v.texture).__webglTexture,dt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Rt=v.depthTexture;if(St.__boundDepthTexture!==Rt){if(Rt!==null&&dt.has(Rt)&&(v.width!==Rt.image.width||v.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const qt=v.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(ut=!0);const It=dt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(It[D])?U=It[D][F]:U=It[D],et=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?U=dt.get(v).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[F]:U=It,R.copy(v.viewport),X.copy(v.scissor),B=v.scissorTest}else R.copy(Et).multiplyScalar(z).floor(),X.copy(Ut).multiplyScalar(z).floor(),B=$t;if(F!==0&&(U=Dl),it.bindFramebuffer(A.FRAMEBUFFER,U)&&O&&it.drawBuffers(v,U),it.viewport(R),it.scissor(X),it.setScissorTest(B),et){const St=dt.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,F)}else if(ut){const St=dt.get(v.texture),qt=D;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,St.__webglTexture,F,qt)}else if(v!==null&&F!==0){const St=dt.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,St.__webglTexture,F)}T=-1},this.readRenderTargetPixels=function(v,D,F,O,U,et,ut){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){it.bindFramebuffer(A.FRAMEBUFFER,xt);try{const St=v.texture,qt=St.format,It=St.type;if(!gt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-O&&F>=0&&F<=v.height-U&&A.readPixels(D,F,O,U,Ot.convert(qt),Ot.convert(It),et)}finally{const St=L!==null?dt.get(L).__webglFramebuffer:null;it.bindFramebuffer(A.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(v,D,F,O,U,et,ut){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const St=v.texture,qt=St.format,It=St.type;if(!gt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-O&&F>=0&&F<=v.height-U){it.bindFramebuffer(A.FRAMEBUFFER,xt);const Rt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Rt),A.bufferData(A.PIXEL_PACK_BUFFER,et.byteLength,A.STREAM_READ),A.readPixels(D,F,O,U,Ot.convert(qt),Ot.convert(It),0);const Gt=L!==null?dt.get(L).__webglFramebuffer:null;it.bindFramebuffer(A.FRAMEBUFFER,Gt);const Zt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ac(A,Zt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Rt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,et),A.deleteBuffer(Rt),A.deleteSync(Zt),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,F=0){v.isTexture!==!0&&(qn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-F),U=Math.floor(v.image.width*O),et=Math.floor(v.image.height*O),ut=D!==null?D.x:0,xt=D!==null?D.y:0;y.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,F,0,0,ut,xt,U,et),it.unbindTexture()};const ql=A.createFramebuffer(),Il=A.createFramebuffer();this.copyTextureToTexture=function(v,D,F=null,O=null,U=0,et=null){v.isTexture!==!0&&(qn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],D=arguments[2],et=arguments[3]||0,F=null),et===null&&(U!==0?(qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=U,U=0):et=0);let ut,xt,St,qt,It,Rt,Gt,Zt,le;const re=v.isCompressedTexture?v.mipmaps[et]:v.image;if(F!==null)ut=F.max.x-F.min.x,xt=F.max.y-F.min.y,St=F.isBox3?F.max.z-F.min.z:1,qt=F.min.x,It=F.min.y,Rt=F.isBox3?F.min.z:0;else{const Le=Math.pow(2,-U);ut=Math.floor(re.width*Le),xt=Math.floor(re.height*Le),v.isDataArrayTexture?St=re.depth:v.isData3DTexture?St=Math.floor(re.depth*Le):St=1,qt=0,It=0,Rt=0}O!==null?(Gt=O.x,Zt=O.y,le=O.z):(Gt=0,Zt=0,le=0);const Wt=Ot.convert(D.format),Ct=Ot.convert(D.type);let pe;D.isData3DTexture?(y.setTexture3D(D,0),pe=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),pe=A.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),pe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const Kt=A.getParameter(A.UNPACK_ROW_LENGTH),Ne=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Gn=A.getParameter(A.UNPACK_SKIP_PIXELS),Ae=A.getParameter(A.UNPACK_SKIP_ROWS),Ei=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,re.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,re.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qt),A.pixelStorei(A.UNPACK_SKIP_ROWS,It),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Rt);const ne=v.isDataArrayTexture||v.isData3DTexture,Pe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Le=dt.get(v),xe=dt.get(D),Se=dt.get(Le.__renderTarget),Is=dt.get(xe.__renderTarget);it.bindFramebuffer(A.READ_FRAMEBUFFER,Se.__webglFramebuffer),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let bn=0;bn<St;bn++)ne&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,dt.get(v).__webglTexture,U,Rt+bn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,dt.get(D).__webglTexture,et,le+bn)),A.blitFramebuffer(qt,It,ut,xt,Gt,Zt,ut,xt,A.DEPTH_BUFFER_BIT,A.NEAREST);it.bindFramebuffer(A.READ_FRAMEBUFFER,null),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||dt.has(v)){const Le=dt.get(v),xe=dt.get(D);it.bindFramebuffer(A.READ_FRAMEBUFFER,ql),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,Il);for(let Se=0;Se<St;Se++)ne?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Le.__webglTexture,U,Rt+Se):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Le.__webglTexture,U),Pe?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.__webglTexture,et,le+Se):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xe.__webglTexture,et),U!==0?A.blitFramebuffer(qt,It,ut,xt,Gt,Zt,ut,xt,A.COLOR_BUFFER_BIT,A.NEAREST):Pe?A.copyTexSubImage3D(pe,et,Gt,Zt,le+Se,qt,It,ut,xt):A.copyTexSubImage2D(pe,et,Gt,Zt,qt,It,ut,xt);it.bindFramebuffer(A.READ_FRAMEBUFFER,null),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Pe?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(pe,et,Gt,Zt,le,ut,xt,St,Wt,Ct,re.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(pe,et,Gt,Zt,le,ut,xt,St,Wt,re.data):A.texSubImage3D(pe,et,Gt,Zt,le,ut,xt,St,Wt,Ct,re):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,et,Gt,Zt,ut,xt,Wt,Ct,re.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,et,Gt,Zt,re.width,re.height,Wt,re.data):A.texSubImage2D(A.TEXTURE_2D,et,Gt,Zt,ut,xt,Wt,Ct,re);A.pixelStorei(A.UNPACK_ROW_LENGTH,Kt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ne),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Gn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ae),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ei),et===0&&D.generateMipmaps&&A.generateMipmap(pe),it.unbindTexture()},this.copyTextureToTexture3D=function(v,D,F=null,O=null,U=0){return v.isTexture!==!0&&(qn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],D=arguments[3],U=arguments[4]||0),qn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,F,O,U)},this.initRenderTarget=function(v){dt.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),it.unbindTexture()},this.resetState=function(){C=0,w=0,L=null,it.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const qo={type:"change"},Sa={type:"start"},yl={type:"end"},_s=new Qo,Io=new xn,Pm=Math.cos(70*yc.DEG2RAD),he=new I,ye=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fr=1e-6;class Lm extends Wh{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Hn,this._lastTargetPosition=new I,this._quat=new Hn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ao,this._sphericalDelta=new ao,this._scale=1,this._panOffset=new I,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new I,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qm.bind(this),this._onPointerDown=Dm.bind(this),this._onPointerUp=Im.bind(this),this._onContextMenu=Hm.bind(this),this._onMouseWheel=Fm.bind(this),this._onKeyDown=Om.bind(this),this._onTouchStart=Bm.bind(this),this._onTouchMove=zm.bind(this),this._onMouseDown=Um.bind(this),this._onMouseMove=Nm.bind(this),this._interceptControlDown=km.bind(this),this._interceptControlUp=Vm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qo),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;he.copy(e).sub(this.target),he.applyQuaternion(this._quat),this._spherical.setFromVector3(he),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ye:n>Math.PI&&(n-=ye),s<-Math.PI?s+=ye:s>Math.PI&&(s-=ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(he.setFromSpherical(this._spherical),he.applyQuaternion(this._quatInverse),e.copy(this.target).add(he),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=he.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=he.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_s.origin.copy(this.object.position),_s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_s.direction))<Pm?this.object.lookAt(this.target):(Io.setFromNormalAndCoplanarPoint(this.object.up,this.target),_s.intersectPlane(Io,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fr||this._lastTargetPosition.distanceToSquared(this.target)>fr?(this.dispatchEvent(qo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ye/60*this.autoRotateSpeed*t:ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){he.setFromMatrixColumn(e,0),he.multiplyScalar(-t),this._panOffset.add(he)}_panUp(t,e){this.screenSpacePanning===!0?he.setFromMatrixColumn(e,1):(he.setFromMatrixColumn(e,0),he.crossVectors(this.object.up,he)),he.multiplyScalar(t),this._panOffset.add(he)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;he.copy(s).sub(this.target);let r=he.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Dm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Im(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yl),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Um(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=te.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Sa)}function Nm(i){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Fm(i){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(i.preventDefault(),this.dispatchEvent(Sa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yl))}function Om(i){this.enabled!==!1&&this._handleKeyDown(i)}function Bm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=te.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=te.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Sa)}function zm(i){switch(this._trackPointer(i),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=te.NONE}}function Hm(i){this.enabled!==!1&&i.preventDefault()}function km(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class $e{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),$e.nextNameID=$e.nextNameID||0,this.$name.id=`lil-gui-name-${++$e.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Gm extends $e{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function aa(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Wm={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:aa,toHexString:aa},Ni={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Xm={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Ni.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Ni.toHexString(s)}},Ym={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Ni.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Ni.toHexString(s)}},$m=[Wm,Ni,Xm,Ym];function Zm(i){return $m.find(t=>t.match(i))}class Km extends $e{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Zm(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=aa(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class pr extends $e{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Jm extends $e{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},n=b=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+b),this.$input.value=this.getValue())},s=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b)*-1))},r=b=>{this._inputFocused&&(b.preventDefault(),n(this._step*this._normalizeMouseWheel(b)))};let a=!1,o,l,c,h,u;const f=5,p=b=>{o=b.clientX,l=c=b.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",x)},_=b=>{if(a){const E=b.clientX-o,S=b.clientY-l;Math.abs(S)>f?(b.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>f&&x()}if(!a){const E=b.clientY-c;u-=E*this._step*this._arrowKeyMultiplier(b),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=b.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",x)},m=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(d,b,E,S,q)=>(d-b)/(E-b)*(q-S)+S,e=d=>{const b=this.$slider.getBoundingClientRect();let E=t(d,b.left,b.right,this._min,this._max);this._snapClampSetValue(E)},n=d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=d=>{e(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),a=!1},h=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,l=d.touches[0].clientY,a=!0):c(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=d=>{if(a){const b=d.touches[0].clientX-o,E=d.touches[0].clientY-l;Math.abs(b)>Math.abs(E)?c(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else d.preventDefault(),e(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),_=400;let x;const m=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const E=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+E),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class jm extends $e{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Qm extends $e{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var t0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function e0(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Uo=!1;class Ea{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Uo&&o&&(e0(t0),Uo=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,e,n,s,r){if(Object(n)===n)return new jm(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Jm(this,t,e,n,s,r);case"boolean":return new Gm(this,t,e);case"string":return new Qm(this,t,e);case"function":return new pr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Km(this,t,e,n)}addFolder(t){const e=new Ea({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof pr||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof pr)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class n0 extends ki{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new Oh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const l=r.parse(JSON.parse(o));e&&e(l)},n,s)}parse(t){return new i0(t)}}class i0{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],s=s0(t,e,this.data);for(let r=0,a=s.length;r<a;r++)n.push(...s[r].toShapes());return n}}function s0(i,t,e){const n=Array.from(i),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=r;else{const u=r0(h,s,o,l,e);o+=u.offsetX,a.push(u.path)}}return a}function r0(i,t,e,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const a=new Gh;let o,l,c,h,u,f,p,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,d=x.length;m<d;)switch(x[m++]){case"m":o=x[m++]*t+e,l=x[m++]*t+n,a.moveTo(o,l);break;case"l":o=x[m++]*t+e,l=x[m++]*t+n,a.lineTo(o,l);break;case"q":c=x[m++]*t+e,h=x[m++]*t+n,u=x[m++]*t+e,f=x[m++]*t+n,a.quadraticCurveTo(u,f,c,h);break;case"b":c=x[m++]*t+e,h=x[m++]*t+n,u=x[m++]*t+e,f=x[m++]*t+n,p=x[m++]*t+e,_=x[m++]*t+n,a.bezierCurveTo(u,f,p,_,c,h);break}}return{offsetX:r.ha*t,path:a}}class a0 extends xa{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const s=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const o0=JSON.parse('{"0":{"x_min":73,"x_max":715,"ha":792,"o":"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "},"1":{"x_min":215.671875,"x_max":574,"ha":792,"o":"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "},"2":{"x_min":59,"x_max":731,"ha":792,"o":"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "},"3":{"x_min":54,"x_max":737,"ha":792,"o":"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "},"4":{"x_min":48,"x_max":742.453125,"ha":792,"o":"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "},"5":{"x_min":54.171875,"x_max":738,"ha":792,"o":"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "},"6":{"x_min":53,"x_max":739,"ha":792,"o":"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "},"7":{"x_min":58.71875,"x_max":730.953125,"ha":792,"o":"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "},"8":{"x_min":55,"x_max":736,"ha":792,"o":"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "},"9":{"x_min":53,"x_max":739,"ha":792,"o":"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "},"ο":{"x_min":0,"x_max":712,"ha":815,"o":"m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 "},"S":{"x_min":0,"x_max":788,"ha":890,"o":"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "},"¦":{"x_min":343,"x_max":449,"ha":792,"o":"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"/":{"x_min":183.25,"x_max":608.328125,"ha":792,"o":"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "},"Τ":{"x_min":-0.4375,"x_max":777.453125,"ha":839,"o":"m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 "},"y":{"x_min":0,"x_max":684.78125,"ha":771,"o":"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "},"Π":{"x_min":0,"x_max":803,"ha":917,"o":"m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 "},"ΐ":{"x_min":-111,"x_max":339,"ha":361,"o":"m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 "},"g":{"x_min":0,"x_max":686,"ha":838,"o":"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "},"²":{"x_min":0,"x_max":442,"ha":539,"o":"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "},"–":{"x_min":0,"x_max":705.5625,"ha":803,"o":"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},"Κ":{"x_min":0,"x_max":819.5625,"ha":893,"o":"m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},"ƒ":{"x_min":-46.265625,"x_max":392,"ha":513,"o":"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "},"e":{"x_min":0,"x_max":714,"ha":813,"o":"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "},"ό":{"x_min":0,"x_max":712,"ha":815,"o":"m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 "},"J":{"x_min":0,"x_max":588,"ha":699,"o":"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "},"»":{"x_min":-1,"x_max":503,"ha":601,"o":"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "},"©":{"x_min":-3,"x_max":1008,"ha":1106,"o":"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "},"ώ":{"x_min":0,"x_max":922,"ha":1030,"o":"m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 "},"^":{"x_min":193.0625,"x_max":598.609375,"ha":792,"o":"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "},"«":{"x_min":0,"x_max":507.203125,"ha":604,"o":"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "},"D":{"x_min":0,"x_max":828,"ha":935,"o":"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "},"∙":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1009.71875,"ha":1100,"o":"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "},"$":{"x_min":0,"x_max":700,"ha":793,"o":"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "},"\\\\":{"x_min":-0.015625,"x_max":425.0625,"ha":522,"o":"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "},"µ":{"x_min":0,"x_max":697.21875,"ha":747,"o":"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "},"Ι":{"x_min":42,"x_max":181,"ha":297,"o":"m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 "},"Ύ":{"x_min":0,"x_max":1144.5,"ha":1214,"o":"m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"’":{"x_min":0,"x_max":139,"ha":236,"o":"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"Ν":{"x_min":0,"x_max":801,"ha":915,"o":"m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 "},"-":{"x_min":8.71875,"x_max":350.390625,"ha":478,"o":"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "},"Q":{"x_min":0,"x_max":968,"ha":1072,"o":"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "},"ς":{"x_min":1,"x_max":676.28125,"ha":740,"o":"m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 "},"M":{"x_min":0,"x_max":954,"ha":1067,"o":"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "},"Ψ":{"x_min":0,"x_max":1006,"ha":1094,"o":"m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 "},"C":{"x_min":0,"x_max":886,"ha":944,"o":"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "},"!":{"x_min":0,"x_max":138,"ha":236,"o":"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "},"{":{"x_min":0,"x_max":480.5625,"ha":578,"o":"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "},"X":{"x_min":-0.015625,"x_max":854.15625,"ha":940,"o":"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "},"#":{"x_min":0,"x_max":963.890625,"ha":1061,"o":"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "},"ι":{"x_min":42,"x_max":284,"ha":361,"o":"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 "},"Ά":{"x_min":0,"x_max":906.953125,"ha":982,"o":"m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},")":{"x_min":0,"x_max":318,"ha":415,"o":"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "},"ε":{"x_min":0,"x_max":634.71875,"ha":714,"o":"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 "},"Δ":{"x_min":0,"x_max":952.78125,"ha":1028,"o":"m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 "},"}":{"x_min":0,"x_max":481,"ha":578,"o":"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "},"‰":{"x_min":-3,"x_max":1672,"ha":1821,"o":"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "},"a":{"x_min":0,"x_max":698.609375,"ha":794,"o":"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "},"=":{"x_min":8.71875,"x_max":780.953125,"ha":792,"o":"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "},"N":{"x_min":0,"x_max":801,"ha":914,"o":"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "},"ρ":{"x_min":0,"x_max":712,"ha":797,"o":"m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 "},"¯":{"x_min":0,"x_max":941.671875,"ha":938,"o":"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "},"Z":{"x_min":0,"x_max":779,"ha":849,"o":"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "},"u":{"x_min":0,"x_max":617,"ha":729,"o":"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "},"k":{"x_min":0,"x_max":612.484375,"ha":697,"o":"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "},"Η":{"x_min":0,"x_max":803,"ha":917,"o":"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"Α":{"x_min":0,"x_max":906.953125,"ha":985,"o":"m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},"s":{"x_min":0,"x_max":604,"ha":697,"o":"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "},"B":{"x_min":0,"x_max":778,"ha":876,"o":"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "},"…":{"x_min":0,"x_max":614,"ha":708,"o":"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "},"?":{"x_min":0,"x_max":607,"ha":704,"o":"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "},"H":{"x_min":0,"x_max":803,"ha":915,"o":"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"ν":{"x_min":0,"x_max":675,"ha":761,"o":"m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 "},"c":{"x_min":1,"x_max":701.390625,"ha":775,"o":"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":660,"ha":745,"o":"m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 "},"Μ":{"x_min":0,"x_max":954,"ha":1068,"o":"m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 "},"Ό":{"x_min":0.109375,"x_max":1120,"ha":1217,"o":"m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ή":{"x_min":0,"x_max":1158,"ha":1275,"o":"m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"•":{"x_min":0,"x_max":663.890625,"ha":775,"o":"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "},"¥":{"x_min":0.1875,"x_max":819.546875,"ha":886,"o":"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "},"(":{"x_min":0,"x_max":318.0625,"ha":415,"o":"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "},"U":{"x_min":0,"x_max":796,"ha":904,"o":"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "},"γ":{"x_min":0.5,"x_max":744.953125,"ha":822,"o":"m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 "},"α":{"x_min":0,"x_max":765.5625,"ha":809,"o":"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 "},"F":{"x_min":0,"x_max":683.328125,"ha":717,"o":"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "},"­":{"x_min":0,"x_max":705.5625,"ha":803,"o":"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},":":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"Χ":{"x_min":0,"x_max":854.171875,"ha":935,"o":"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 "},"*":{"x_min":116,"x_max":674,"ha":792,"o":"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "},"†":{"x_min":0,"x_max":777,"ha":835,"o":"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "},"°":{"x_min":0,"x_max":347,"ha":444,"o":"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "},"V":{"x_min":0,"x_max":862.71875,"ha":940,"o":"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "},"Ξ":{"x_min":0,"x_max":734.71875,"ha":763,"o":"m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 "}," ":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":0.328125,"x_max":819.515625,"ha":889,"o":"m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 "},"”":{"x_min":0,"x_max":347,"ha":454,"o":"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "},"@":{"x_min":0,"x_max":1260,"ha":1357,"o":"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "},"Ί":{"x_min":0,"x_max":499,"ha":613,"o":"m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 "},"i":{"x_min":14,"x_max":136,"ha":275,"o":"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "},"Β":{"x_min":0,"x_max":778,"ha":877,"o":"m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 "},"υ":{"x_min":0,"x_max":617,"ha":725,"o":"m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 "},"]":{"x_min":0,"x_max":275,"ha":372,"o":"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "},"m":{"x_min":0,"x_max":1019,"ha":1128,"o":"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "},"χ":{"x_min":8.328125,"x_max":780.5625,"ha":815,"o":"m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 "},"ί":{"x_min":42,"x_max":326.71875,"ha":361,"o":"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 "},"Ζ":{"x_min":0,"x_max":779.171875,"ha":850,"o":"m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 "},"R":{"x_min":0,"x_max":781.953125,"ha":907,"o":"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "},"o":{"x_min":0,"x_max":713,"ha":821,"o":"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "},"K":{"x_min":0,"x_max":819.46875,"ha":906,"o":"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},",":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "},"d":{"x_min":0,"x_max":683,"ha":796,"o":"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "},"¨":{"x_min":-109,"x_max":247,"ha":232,"o":"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "},"E":{"x_min":0,"x_max":736.109375,"ha":789,"o":"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"Y":{"x_min":0,"x_max":820,"ha":886,"o":"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "},"\\"":{"x_min":0,"x_max":299,"ha":396,"o":"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"‹":{"x_min":17.984375,"x_max":773.609375,"ha":792,"o":"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"„":{"x_min":0,"x_max":364,"ha":467,"o":"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "},"δ":{"x_min":1,"x_max":710,"ha":810,"o":"m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 "},"έ":{"x_min":0,"x_max":634.71875,"ha":714,"o":"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 "},"ω":{"x_min":0,"x_max":922,"ha":1031,"o":"m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 "},"´":{"x_min":0,"x_max":96,"ha":251,"o":"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"±":{"x_min":11,"x_max":781,"ha":792,"o":"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "},"|":{"x_min":343,"x_max":449,"ha":792,"o":"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"ϋ":{"x_min":0,"x_max":617,"ha":725,"o":"m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 "},"§":{"x_min":0,"x_max":593,"ha":690,"o":"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "},"b":{"x_min":0,"x_max":685,"ha":783,"o":"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "},"q":{"x_min":0,"x_max":683,"ha":876,"o":"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "},"Ω":{"x_min":-0.171875,"x_max":969.5625,"ha":1068,"o":"m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 "},"ύ":{"x_min":0,"x_max":617,"ha":725,"o":"m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 "},"z":{"x_min":-0.015625,"x_max":613.890625,"ha":697,"o":"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "},"™":{"x_min":0,"x_max":894,"ha":1000,"o":"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "},"ή":{"x_min":0.78125,"x_max":697,"ha":810,"o":"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 "},"Θ":{"x_min":0,"x_max":960,"ha":1056,"o":"m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 "},"®":{"x_min":-3,"x_max":1008,"ha":1106,"o":"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "},"~":{"x_min":0,"x_max":833,"ha":931,"o":"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "},"Ε":{"x_min":0,"x_max":736.21875,"ha":778,"o":"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"³":{"x_min":0,"x_max":450,"ha":547,"o":"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "},"[":{"x_min":0,"x_max":273.609375,"ha":371,"o":"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "},"L":{"x_min":0,"x_max":645.828125,"ha":696,"o":"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "},"σ":{"x_min":0,"x_max":803.390625,"ha":894,"o":"m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 "},"ζ":{"x_min":0,"x_max":573,"ha":642,"o":"m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 "},"θ":{"x_min":0,"x_max":674,"ha":778,"o":"m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 "},"Ο":{"x_min":0,"x_max":958,"ha":1054,"o":"m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 "},"Γ":{"x_min":0,"x_max":705.28125,"ha":749,"o":"m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":-3,"x_max":1089,"ha":1186,"o":"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "},"P":{"x_min":0,"x_max":726,"ha":806,"o":"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "},"Έ":{"x_min":0,"x_max":1078.21875,"ha":1118,"o":"m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ώ":{"x_min":0.125,"x_max":1136.546875,"ha":1235,"o":"m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 "},"_":{"x_min":0,"x_max":705.5625,"ha":803,"o":"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "},"Ϊ":{"x_min":-110,"x_max":246,"ha":275,"o":"m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 "},"+":{"x_min":23,"x_max":768,"ha":792,"o":"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "},"½":{"x_min":0,"x_max":1050,"ha":1149,"o":"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "},"Ρ":{"x_min":0,"x_max":720,"ha":783,"o":"m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 "},"\'":{"x_min":0,"x_max":139,"ha":236,"o":"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"ª":{"x_min":0,"x_max":350,"ha":397,"o":"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "},"΅":{"x_min":0,"x_max":450,"ha":553,"o":"m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 "},"T":{"x_min":0,"x_max":777,"ha":835,"o":"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "},"Φ":{"x_min":0,"x_max":915,"ha":997,"o":"m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 "},"⁋":{"x_min":0,"x_max":0,"ha":694},"j":{"x_min":-77.78125,"x_max":167,"ha":349,"o":"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "},"Σ":{"x_min":0,"x_max":756.953125,"ha":819,"o":"m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 "},"›":{"x_min":18.0625,"x_max":774,"ha":792,"o":"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"<":{"x_min":17.984375,"x_max":773.609375,"ha":792,"o":"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"£":{"x_min":0,"x_max":704.484375,"ha":801,"o":"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "},"t":{"x_min":0,"x_max":367,"ha":458,"o":"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "},"¬":{"x_min":0,"x_max":706,"ha":803,"o":"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "},"λ":{"x_min":0,"x_max":750,"ha":803,"o":"m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 "},"W":{"x_min":0,"x_max":1263.890625,"ha":1351,"o":"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "},">":{"x_min":18.0625,"x_max":774,"ha":792,"o":"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"v":{"x_min":0,"x_max":675.15625,"ha":761,"o":"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "},"τ":{"x_min":0.28125,"x_max":644.5,"ha":703,"o":"m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 "},"ξ":{"x_min":0,"x_max":624.9375,"ha":699,"o":"m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 "},"&":{"x_min":-3,"x_max":894.25,"ha":992,"o":"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "},"Λ":{"x_min":0,"x_max":862.5,"ha":942,"o":"m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 "},"I":{"x_min":41,"x_max":180,"ha":293,"o":"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "},"G":{"x_min":0,"x_max":921,"ha":1011,"o":"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "},"ΰ":{"x_min":0,"x_max":617,"ha":725,"o":"m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 "},"`":{"x_min":0,"x_max":138.890625,"ha":236,"o":"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "},"·":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"Υ":{"x_min":0.328125,"x_max":819.515625,"ha":889,"o":"m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 "},"r":{"x_min":0,"x_max":355.5625,"ha":432,"o":"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "},"x":{"x_min":0,"x_max":675,"ha":764,"o":"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "},"μ":{"x_min":0,"x_max":696.609375,"ha":747,"o":"m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 "},"h":{"x_min":0,"x_max":615,"ha":724,"o":"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "},".":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"φ":{"x_min":-2,"x_max":878,"ha":974,"o":"m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 "},";":{"x_min":0,"x_max":142,"ha":239,"o":"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "},"f":{"x_min":0,"x_max":378,"ha":472,"o":"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "},"“":{"x_min":1,"x_max":348.21875,"ha":454,"o":"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "},"A":{"x_min":0.03125,"x_max":906.953125,"ha":1008,"o":"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "},"‘":{"x_min":1,"x_max":139.890625,"ha":236,"o":"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "},"ϊ":{"x_min":-70,"x_max":283,"ha":361,"o":"m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 "},"π":{"x_min":-0.21875,"x_max":773.21875,"ha":857,"o":"m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 "},"ά":{"x_min":0,"x_max":765.5625,"ha":809,"o":"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 "},"O":{"x_min":0,"x_max":958,"ha":1057,"o":"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "},"n":{"x_min":0,"x_max":615,"ha":724,"o":"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "},"l":{"x_min":41,"x_max":166,"ha":279,"o":"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "},"¤":{"x_min":40.09375,"x_max":728.796875,"ha":825,"o":"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "},"κ":{"x_min":0,"x_max":632.328125,"ha":679,"o":"m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 "},"p":{"x_min":0,"x_max":685,"ha":786,"o":"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "},"‡":{"x_min":0,"x_max":777,"ha":835,"o":"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "},"ψ":{"x_min":0,"x_max":808,"ha":907,"o":"m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 "},"η":{"x_min":0.78125,"x_max":697,"ha":810,"o":"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 "}}'),l0="normal",c0=1189,h0=-100,u0="normal",d0={yMin:-334,xMin:-111,yMax:1189,xMax:1672},f0=1e3,p0={postscript_name:"Helvetiker-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Helvetiker",font_family_name:"Helvetiker",copyright:"Copyright (c) Μagenta ltd, 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Μagenta ltd:Helvetiker:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Μagenta ltd",font_sub_family_name:"Regular"},m0=-334,_0="Helvetiker",g0=1522,x0=50,v0={glyphs:o0,cssFontWeight:l0,ascender:c0,underlinePosition:h0,cssFontStyle:u0,boundingBox:d0,resolution:f0,original_font_information:p0,descender:m0,familyName:_0,lineHeight:g0,underlineThickness:x0};new Ea;const Tl=document.querySelector("canvas.webgl"),Ds=new jc,M0=new zh,ya=M0.load("textures/matcaps/8.png");ya.colorSpace=Re;const S0=new n0,E0=S0.parse(v0),Al=new gl({matcap:ya});Al.wireframe=!0;const y0=new gl({matcap:ya}),bl=new a0("Hello Samuel",{font:E0,size:.5,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});bl.center();const T0=new ke(bl,Al);Ds.add(T0);const A0=new va(.3,.2,32,64);for(let i=0;i<100;i++){const t=new ke(A0,y0);t.position.x=(Math.random()-.5)*10,t.position.y=(Math.random()-.5)*10,t.position.z=(Math.random()-.5)*10,t.rotation.x=Math.random()*Math.PI,t.rotation.y=Math.random()*Math.PI;const e=Math.random();t.scale.set(e,e,e),Ds.add(t)}const We={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{We.width=window.innerWidth,We.height=window.innerHeight,Tn.aspect=We.width/We.height,Tn.updateProjectionMatrix(),Fi.setSize(We.width,We.height),Fi.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Tn=new qe(75,We.width/We.height,.1,100);Tn.position.x=1;Tn.position.y=1;Tn.position.z=2;Ds.add(Tn);const wl=new Lm(Tn,Tl);wl.enableDamping=!0;const Fi=new Cm({canvas:Tl});Fi.setSize(We.width,We.height);Fi.setPixelRatio(Math.min(window.devicePixelRatio,2));const b0=new Vh,Rl=()=>{b0.getElapsedTime(),wl.update(),Fi.render(Ds,Tn),window.requestAnimationFrame(Rl)};Rl();
//# sourceMappingURL=index-B8bj5iMz.js.map
