"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{14079:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},43739:function(e,t,n){n.d(t,{VY:function(){return q},ck:function(){return S},fC:function(){return F},xz:function(){return Y}});var r=n(65122),o=n(3546),a=n(47091),l=n(85656),i=n(79869),c=n(65727),d=n(27250),s=n(72205),u=n(17989),p=n(29434),f=n(57541);let m="Accordion",b=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[g,v,w]=(0,l.B)(m),[h,E]=(0,a.b)(m,[w,u.p_]),y=(0,u.p_)(),_=o.forwardRef((e,t)=>{let{type:n,...a}=e;return o.createElement(g.Provider,{scope:e.__scopeAccordion},"multiple"===n?o.createElement(x,(0,r.Z)({},a,{ref:t})):o.createElement(I,(0,r.Z)({},a,{ref:t})))});_.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};let[C,A]=h(m),[R,k]=h(m,{collapsible:!1}),I=o.forwardRef((e,t)=>{let{value:n,defaultValue:a,onValueChange:l=()=>{},collapsible:i=!1,...c}=e,[s,u]=(0,d.T)({prop:n,defaultProp:a,onChange:l});return o.createElement(C,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:u,onItemClose:o.useCallback(()=>i&&u(""),[i,u])},o.createElement(R,{scope:e.__scopeAccordion,collapsible:i},o.createElement(D,(0,r.Z)({},c,{ref:t}))))}),x=o.forwardRef((e,t)=>{let{value:n,defaultValue:a,onValueChange:l=()=>{},...i}=e,[c=[],s]=(0,d.T)({prop:n,defaultProp:a,onChange:l}),u=o.useCallback(e=>s((t=[])=>[...t,e]),[s]),p=o.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return o.createElement(C,{scope:e.__scopeAccordion,value:c,onItemOpen:u,onItemClose:p},o.createElement(R,{scope:e.__scopeAccordion,collapsible:!0},o.createElement(D,(0,r.Z)({},i,{ref:t}))))}),[V,Z]=h(m),D=o.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:a,dir:l,orientation:d="vertical",...u}=e,p=o.useRef(null),m=(0,i.e)(p,t),w=v(n),h=(0,f.gm)(l),E="ltr"===h,y=(0,c.M)(e.onKeyDown,e=>{var t;if(!b.includes(e.key))return;let n=e.target,r=w().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=r.findIndex(e=>e.ref.current===n),a=r.length;if(-1===o)return;e.preventDefault();let l=o,i=a-1,c=()=>{(l=o+1)>i&&(l=0)},s=()=>{(l=o-1)<0&&(l=i)};switch(e.key){case"Home":l=0;break;case"End":l=i;break;case"ArrowRight":"horizontal"===d&&(E?c():s());break;case"ArrowDown":"vertical"===d&&c();break;case"ArrowLeft":"horizontal"===d&&(E?s():c());break;case"ArrowUp":"vertical"===d&&s()}let u=l%a;null===(t=r[u].ref.current)||void 0===t||t.focus()});return o.createElement(V,{scope:n,disabled:a,direction:l,orientation:d},o.createElement(g.Slot,{scope:n},o.createElement(s.WV.div,(0,r.Z)({},u,{"data-orientation":d,ref:m,onKeyDown:a?void 0:y}))))}),O="AccordionItem",[T,N]=h(O),z=o.forwardRef((e,t)=>{let{__scopeAccordion:n,value:a,...l}=e,i=Z(O,n),c=A(O,n),d=y(n),s=(0,p.M)(),f=a&&c.value.includes(a)||!1,m=i.disabled||e.disabled;return o.createElement(T,{scope:n,open:f,disabled:m,triggerId:s},o.createElement(u.fC,(0,r.Z)({"data-orientation":i.orientation,"data-state":function(e){return e?"open":"closed"}(f)},d,l,{ref:t,disabled:m,open:f,onOpenChange:e=>{e?c.onItemOpen(a):c.onItemClose(a)}})))}),M="AccordionTrigger",P=o.forwardRef((e,t)=>{let{__scopeAccordion:n,...a}=e,l=Z(m,n),i=N(M,n),c=k(M,n),d=y(n);return o.createElement(g.ItemSlot,{scope:n},o.createElement(u.xz,(0,r.Z)({"aria-disabled":i.open&&!c.collapsible||void 0,"data-orientation":l.orientation,id:i.triggerId},d,a,{ref:t})))}),W=o.forwardRef((e,t)=>{let{__scopeAccordion:n,...a}=e,l=Z(m,n),i=N("AccordionContent",n),c=y(n);return o.createElement(u.VY,(0,r.Z)({role:"region","aria-labelledby":i.triggerId,"data-orientation":l.orientation},c,a,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))}),F=_,S=z,Y=P,q=W},17989:function(e,t,n){n.d(t,{Fw:function(){return y},VY:function(){return k},fC:function(){return A},p_:function(){return b},wy:function(){return h},xz:function(){return R}});var r=n(65122),o=n(3546),a=n(65727),l=n(47091),i=n(27250),c=n(65292),d=n(79869),s=n(72205),u=n(96497),p=n(29434);let f="Collapsible",[m,b]=(0,l.b)(f),[g,v]=m(f),w=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:a,defaultOpen:l,disabled:c,onOpenChange:d,...u}=e,[f=!1,m]=(0,i.T)({prop:a,defaultProp:l,onChange:d});return(0,o.createElement)(g,{scope:n,disabled:c,contentId:(0,p.M)(),open:f,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m])},(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":C(f),"data-disabled":c?"":void 0},u,{ref:t})))}),h=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...l}=e,i=v("CollapsibleTrigger",n);return(0,o.createElement)(s.WV.button,(0,r.Z)({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":C(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},l,{ref:t,onClick:(0,a.M)(e.onClick,i.onOpenToggle)}))}),E="CollapsibleContent",y=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,l=v(E,e.__scopeCollapsible);return(0,o.createElement)(u.z,{present:n||l.open},({present:e})=>(0,o.createElement)(_,(0,r.Z)({},a,{ref:t,present:e})))}),_=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:a,children:l,...i}=e,u=v(E,n),[p,f]=(0,o.useState)(a),m=(0,o.useRef)(null),b=(0,d.e)(t,m),g=(0,o.useRef)(0),w=g.current,h=(0,o.useRef)(0),y=h.current,_=u.open||p,A=(0,o.useRef)(_),R=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>A.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.b)(()=>{let e=m.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();g.current=t.height,h.current=t.width,A.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),f(a)}},[u.open,a]),(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":C(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!_},i,{ref:b,style:{"--radix-collapsible-content-height":w?`${w}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style}}),_&&l)});function C(e){return e?"open":"closed"}let A=w,R=h,k=y}}]);