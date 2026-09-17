"use strict";var j=function(v,u){return function(){try{return u||v((u={exports:{}}).exports,u),u.exports}catch(o){throw (u=0, o)}};};var l=j(function(T,g){
var d=require('@stdlib/strided-base-reinterpret-complex64/dist'),B=require('@stdlib/complex-float32-real/dist'),C=require('@stdlib/complex-float32-imag/dist'),D=require('@stdlib/blas-base-ccopy/dist').ndarray,f=5;function F(v,u,o,s,p,n,y,_){var a,i,t,q,r,e,m,w,x,c;if(v<=0)return n;if(t=B(u),q=C(u),t===0&&q===0)return D(v,o,s,p,n,y,_);if(a=d(o,0),i=d(n,0),r=p*2,e=_*2,m=s*2,w=y*2,s===1&&y===1){if(x=v%f,x>0)for(c=0;c<x;c++)i[e]=a[r]+t,i[e+1]=a[r+1]+q,r+=m,e+=w;if(v<f)return n;for(c=x;c<v;c+=f)i[e]=a[r]+t,i[e+1]=a[r+1]+q,i[e+2]=a[r+2]+t,i[e+3]=a[r+3]+q,i[e+4]=a[r+4]+t,i[e+5]=a[r+5]+q,i[e+6]=a[r+6]+t,i[e+7]=a[r+7]+q,i[e+8]=a[r+8]+t,i[e+9]=a[r+9]+q,r+=f*2,e+=f*2;return n}for(c=0;c<v;c++)i[e]=a[r]+t,i[e+1]=a[r+1]+q,r+=m,e+=w;return n}g.exports=F
});var O=j(function(U,M){
var E=require('@stdlib/strided-base-stride2offset/dist'),G=l();function H(v,u,o,s,p,n){return G(v,u,o,s,E(v,s),p,n,E(v,n))}M.exports=H
});var z=j(function(V,k){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=O(),J=l();I(b,"ndarray",J);k.exports=b
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=z(),R,A=L(K(__dirname,"./native.js"));P(A)?R=Q:R=A;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
